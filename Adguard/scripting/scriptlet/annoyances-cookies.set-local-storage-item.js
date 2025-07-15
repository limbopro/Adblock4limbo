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
const argsList = [["CookieConsent--hideCookieConsent","true"],["cookieConsent","granted"],["COOKIE_CONSENT","no"],["cookie_consent","no"],["store-cookie-consent","accepted"],["psh:cookies-other","false"],["no-cookie-notice-dismissed","true"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["cookiesAccepted","true"],["isAcceptedCookie","1"],["cookiePolicy","true"],["cookiesAccepted","yes"],["cookies_enabled","true"],["acceptedAllCookies","false"],["cookiePreference","essential"],["cookie-consent-banner","declined"],["allowed_cookies","true"],["cookie-consent","false"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookie_consent","granted"],["cookieBarVisible","false"],["HAS_AGREE_POLICY","true"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["df-cookies-allowed","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["PrivacyPolicy[][core]","forever"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"]];
const hostnamesMap = new Map([["teamtailor.com",0],["notthebee.com",1],["manuals.annafreud.org",2],["granola.ai",3],["polar.sh",3],["posthog.com",3],["hatchet.run",3],["granado.com.br",4],["nhnieuws.nl",[5,7,8]],["omroepbrabant.nl",[5,7,8]],["cape.co",6],["asianet.co.id",9],["p2p.land",9],["netbank.avida.no",9],["bo3.gg",9],["gs1.se",[9,33]],["puregoldprotein.com",[9,97,98]],["spectrumtherapeutics.com",9],["thingtesting.com",9],["streamclipsgermany.de",9],["kundenportal.harzenergie.de",9],["giselles.ai",10],["i-fundusze.pl",11],["improvethenews.org",11],["plente.com",11],["movies4us.*",11],["popcornmovies.to",11],["arkanium.serveminecraft.net",12],["bananacraft.serveminecraft.net",12],["myoffers.smartbuy.hdfcbank.com",13],["grass.io",[14,15]],["lustery.com",16],["ecoints.com",17],["emergetools.com",18],["receptagemini.pl",19],["bw.vdk.de",[20,21,22]],["search.odin.io",23],["gdh.digital",24],["popmart.com",25],["rozklady.bielsko.pl",26],["typeform.com",27],["erlus.com",[28,29]],["bettrfinancing.com",30],["sf-express.com",31],["min.io",32],["lemwarm.com",34],["form.fillout.com",35],["keepersecurity.com",36],["esto.eu",37],["ctol.digital",37],["beterbed.nl",38],["crt.hr",39],["code.likeagirl.io",40],["engineering.mixpanel.com",40],["betterprogramming.pub",40],["medium.com",40],["500ish.com",40],["gitconnected.com",40],["bettermarketing.pub",40],["diylifetech.com",40],["thebolditalic.com",40],["writingcooperative.com",40],["fanfare.pub",40],["betterhumans.pub",40],["fvd.nl",41],["cpc2r.ch",42],["metamask.io",43],["chavesnamao.com.br",44],["anhanguera.com",45],["bhaskar.com",46],["novaventa.com",47],["privacy.com.br",48],["supabase.com",49],["app.getgrass.io",50],["sanluisgarbage.com",51],["wildberries.ru",52],["cryptorank.io",53],["springmerchant.com",54],["veed.io",55],["deribit.com",56],["dorkgpt.com",56],["kyutai.org",56],["varusteleka.com",56],["lazyrecords.app",56],["unmute.sh",56],["zoho.com",57],["femibion.rs",58],["nove.fr",58],["metro1.com.br",58],["villagrancanaria.com",59],["baic.cz",60],["bunq.com",61],["framer.com",61],["inceptionlabs.ai",61],["zave.it",61],["tower.dev",61],["fleksberegner.dk",62],["duty.travel.cl",63],["solscan.io",64],["connorduffy.abundancerei.com",65],["bc.gamem",66],["akkushop-turkiye.com.tr",67],["k33.com",[68,69]],["komdigi.go.id",70],["fijiairways.com",71],["planner.kaboodle.co.nz",72],["pedalcommander.*",73],["sekisuialveo.com",[74,75]],["rightsize.dk",76],["random-group.olafneumann.org",77],["espadrij.com",78],["hygiene-shop.eu",78],["gesundheitsmanufaktur.de",[78,315]],["technikmuseum.berlin",79],["cvut.cz",[80,81,82]],["r-ulybka.ru",83],["voltadol.at",84],["evium.de",85],["hiring.amazon.com",86],["comnet.com.tr",86],["gpuscout.nl",86],["remanga.org",86],["parrotsec.org",86],["estrelabet.bet.br",86],["shonenjumpplus.com",87],["engeldirekt.de",88],["haleon-gebro.at",[89,90]],["happyplates.com",[91,92]],["ickonic.com",93],["abs-cbn.com",94],["news.abs-cbn.com",94],["opmaatzagen.nl",95],["mundwerk-rottweil.de",95],["sqlook.com",96],["adef-emploi.fr",[99,100]],["lumieresdelaville.net",[99,100]],["ccaf.io",[101,102]],["dbschenkerarkas.com.tr",103],["dbschenker-seino.jp",103],["dbschenker.com",[103,200]],["scinapse.io",104],["shop.ba.com",[105,106]],["uc.pt",107],["bennettrogers.mysight.uk",108],["snipp.gg",108],["leafly.com",109],["geizhals.at",110],["geizhals.de",110],["geizhals.eu",110],["cenowarka.pl",110],["skinflint.co.uk",110],["webhallen.com",[111,112,113]],["olx.com.br",114],["unobike.com",115],["mod.io",116],["passport-photo.online",117],["mojmaxtv.hrvatskitelekom.hr",117],["rodrigue-app.ct.ws",117],["tme.eu",118],["mein-osttirol.rocks",119],["tennessine.co.uk",120],["ultraleds.co.uk",121],["greubelforsey.com",122],["lukify.app",123],["studiobookr.com",124],["getgrass.io",125],["artisan.co",126],["mobilefuse.com",127],["safe.global",[128,252]],["data.carbonmapper.org",129],["avica.link",130],["madeiramadeira.com.br",131],["sberdisk.ru",132],["column.com",133],["iqoption.com",134],["dopesnow.com",135],["montecwear.com",135],["romeo.com",136],["sonyliv.com",[137,138]],["cwallet.com",139],["oneskin.co",140],["telemetr.io",141],["near.org",142],["near.ai",142],["dev.near.org",143],["jito.network",144],["jito.wtf",144],["goodpods.com",145],["pngtree.com",[146,147]],["rhein-pfalz-kreis.de",[148,149,150,151,152]],["idar-oberstein.de",[148,149,150,151]],["vogelsbergkreis.de",[148,149,150,151]],["chamaeleon.de",[150,326]],["v2.xmeye.net",153],["venom.foundation",154],["canonvannederland.nl",155],["my-account.storage-mart.com",156],["web.bunq.com",157],["lifesum.com",158],["home.shortcutssoftware.com",159],["klimwinkel.nl",160],["markimicrowave.com",161],["aerolineas.com.ar",162],["5sim.net",162],["fold.dev",163],["mojposao.hr",164],["temu.com",[165,166]],["supreme.com",[167,168]],["g-star.com",169],["sawren.pl",170],["ultrahuman.com",171],["optionsgroup.com",172],["withpersona.com",[173,174]],["trigger.dev",175],["core.app",[176,178]],["zora.co",177],["kokku-online.de",179],["cuba-buddy.de",180],["datamask.app",181],["humandataincome.com",181],["crealitycloud.com",182],["triumphtechnicalinformation.com",183],["businessclass.com",184],["livsstil.se",185],["schneidewind-immobilien.de",186],["textshuttle.com",187],["simpleswap.io",188],["wales.nhs.attendanywhere.com",189],["sacal.it",190],["astondevs.ru",191],["gonxt.com",192],["geomiq.com",193],["bbc.com",194],["galaxy.com",195],["ticketmelon.com",196],["pechinchou.com.br",197],["thehub21.com",198],["archiup.com",199],["autoride.cz",[201,202,203]],["autoride.es",[201,202,203]],["autoride.io",[201,202,203]],["autoride.sk",[201,202,203]],["wunderground.com",204],["baselime.io",205],["eversports.de",[206,207]],["makerz.me",208],["reebok.eu",209],["alfa.com.ec",210],["rts.com.ec",210],["tropicalida.com.ec",210],["owgr.com",[211,212]],["beermerchants.com",213],["saamexe.com",[214,215]],["helium.com",214],["blommerscoffee.shipping-portal.com",214],["app.bionic-reading.com",216],["nloto.ru",217],["swisstours.com",218],["librinova.com",219],["format.bike",220],["khanacademy.org",221],["etelecinema.hu",222],["konicaminolta.com",223],["soquest.xyz",224],["region-bayreuth.de",225],["bahnland-bayern.de",226],["eezy.nrw",226],["nationalexpress.de",226],["chipcitycookies.com",227],["6amgroup.com",227],["go.bkk.hu",227],["worldlibertyfinancial.com",227],["happiful.com",227],["bazaartracker.com",228],["subscribercounter.com",229],["app.klarna.com",[230,231,232]],["instantspoursoi.fr",233],["thealliance.ai",234],["librumreader.com",235],["visnos.com",236],["polypane.app",237],["changelly.com",238],["glose.com",239],["yellow.systems",240],["renebieder.com",241],["goodram.com",242],["starwalk.space",243],["vitotechnology.com",243],["codedead.com",244],["studiofabiobiesel.com",245],["fydeos.com",246],["fydeos.io",246],["jove.com",247],["argent.xyz",248],["pixeden.com",249],["akasha.org",250],["ashleyfurniture.com",251],["jibjab.com",253],["filmzie.com",254],["vietjetair.com",255],["kick.com",256],["cora-broodjes.nl",257],["jimdosite.com",257],["worstbassist.com",257],["evernote.com",[258,259,330]],["octopusenergy.co.jp",260],["findmcserver.com",261],["schneideranwaelte.de",262],["traefik.io",262],["cityfalcon.ai",263],["digitalparking.city",264],["mediathekviewweb.de",265],["solana.com",266],["ef.co.id",267],["alohafromdeer.com",268],["fwd.com",[269,271]],["everywhere.game",270],["geotastic.net",272],["garageproject.co.nz",273],["tattoodo.com",[273,274]],["jmonline.com.br",275],["atlas.workland.com",275],["virginexperiencedays.co.uk",275],["emag.berliner-woche.de",[276,277,278]],["nordkurier.de",[276,277,278]],["everest-24.pl",[279,280]],["sneakerfreaker.com",281],["cryptofalka.hu",281],["walmart.ca",282],["byfood.com",283],["andsafe.de",284],["edostavka.by",285],["emall.by",285],["ishoppurium.com",286],["baseblocks.tenereteam.com",287],["onexstore.pl",[288,289,290]],["revanced.app",290],["evropochta.by",[291,292]],["inselberlin.de",293],["gronkh.tv",294],["adfilteringdevsummit.com",295],["dailyrevs.com",296],["dsworks.ru",296],["daraz.com",297],["learngerman.dw.com",298],["leeway.tech",299],["gostanford.com",300],["namensetiketten.de",301],["drafthound.com",[302,303]],["wokularach.pl",304],["bidup.amtrak.com",305],["eschuhe.de",306],["zeglins.com",307],["flyingpapers.com",308],["beta.character.ai",[309,310]],["bittimittari.fi",311],["aida64.co.uk",[312,313]],["aida64.com.ua",[312,313]],["aida64.de",[312,313]],["aida64.hu",[312,313]],["aida64.it",[312,313]],["aida64russia.com",[312,313]],["116.ru",314],["14.ru",314],["161.ru",314],["164.ru",314],["173.ru",314],["178.ru",314],["26.ru",314],["29.ru",314],["35.ru",314],["43.ru",314],["45.ru",314],["48.ru",314],["51.ru",314],["53.ru",314],["56.ru",314],["59.ru",314],["60.ru",314],["63.ru",314],["68.ru",314],["71.ru",314],["72.ru",314],["74.ru",314],["76.ru",314],["86.ru",314],["89.ru",314],["93.ru",314],["chita.ru",314],["e1.ru",314],["fontanka.ru",314],["ircity.ru",314],["izh1.ru",314],["mgorsk.ru",314],["msk1.ru",314],["ngs.ru",314],["ngs22.ru",314],["ngs24.ru",314],["ngs42.ru",314],["ngs55.ru",314],["ngs70.ru",314],["nn.ru",314],["sochi1.ru",314],["sterlitamak1.ru",314],["tolyatty.ru",314],["ufa1.ru",314],["v1.ru",314],["vladivostok1.ru",314],["voronezh1.ru",314],["ya62.ru",314],["open24.ee",315],["116117.fi",316],["pjspub.com",317],["autodude.dk",318],["autodude.fi",318],["autodude.no",318],["autodude.se",318],["valostore.fi",318],["valostore.no",318],["valostore.se",318],["vivantis.*",319],["vivantis-shop.at",319],["krasa.cz",319],["auf1.tv",320],["wesendit.com",321],["hatch.co",322],["haberturk.com",323],["spaseekers.com",324],["incomeshares.com",325],["surnamedb.com",327],["pizzadelight-menu.co.uk",328],["ioplus.nl",329],["lahella.fi",331]]);
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
