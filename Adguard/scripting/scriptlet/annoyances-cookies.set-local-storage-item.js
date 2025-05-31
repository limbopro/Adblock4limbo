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
const argsList = [["cookieConsent","granted"],["cookie_consent","no"],["psh:cookies-other","false"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["consents-analytics","false"],["vdk-required-enabled","true"],["vdk-iframe-enabled","true"],["vdk-status","accept"],["cookiesAccepted","true"],["cookieBarVisible","false"],["cookie-accepted","1"],["CustomCookieBannerAcceptIntent","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["cookie-consent","rejected"],["owf_agree_cookie_policy","true"],["cookieConsent","accepted"],["allowFunctionalCookies","false"],["cookieClosed","true"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookiePolicy","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps28","1"],["PrivacyPolicy[][core]","forbidden"],["PrivacyPolicy[][maps]","forbidden"],["PrivacyPolicy[][videos]","forever"],["PrivacyPolicy[][readSpeaker]","forbidden"],["PrivacyPolicy[][tracking]","forbidden"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["cookies_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["isAcceptCookie","false"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["UMP_CONSENT_NOTIFICATION","true"],["df-cookies-allowed","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["policyAccepted","true"],["consentBannerLastShown","1"],["flipdish-cookies-preferences","necessary"],["consentInteraction","true"],["cookie-notice-accepted-version","1"],["cookieConsentGiven","1"]];
const hostnamesMap = new Map([["notthebee.com",0],["granola.ai",1],["polar.sh",1],["posthog.com",1],["hatchet.run",1],["nhnieuws.nl",[2,3,4]],["omroepbrabant.nl",[2,3,4]],["receptagemini.pl",5],["bw.vdk.de",[6,7,8]],["netbank.avida.no",9],["bo3.gg",9],["gs1.se",[9,18]],["puregoldprotein.com",[9,83,84]],["spectrumtherapeutics.com",9],["thingtesting.com",9],["streamclipsgermany.de",9],["gdh.digital",10],["rozklady.bielsko.pl",11],["typeform.com",12],["erlus.com",[13,14]],["bettrfinancing.com",15],["sf-express.com",16],["min.io",17],["lemwarm.com",19],["form.fillout.com",20],["keepersecurity.com",21],["esto.eu",22],["ctol.digital",22],["beterbed.nl",23],["crt.hr",24],["code.likeagirl.io",25],["engineering.mixpanel.com",25],["betterprogramming.pub",25],["medium.com",25],["500ish.com",25],["gitconnected.com",25],["bettermarketing.pub",25],["diylifetech.com",25],["thebolditalic.com",25],["writingcooperative.com",25],["fanfare.pub",25],["betterhumans.pub",25],["fvd.nl",26],["cpc2r.ch",27],["metamask.io",28],["chavesnamao.com.br",29],["anhanguera.com",30],["bhaskar.com",31],["novaventa.com",32],["privacy.com.br",33],["supabase.com",34],["app.getgrass.io",35],["sanluisgarbage.com",36],["wildberries.ru",37],["cryptorank.io",38],["springmerchant.com",39],["veed.io",40],["deribit.com",41],["dorkgpt.com",41],["varusteleka.com",41],["zoho.com",42],["femibion.rs",43],["nove.fr",43],["metro1.com.br",43],["improvethenews.org",44],["plente.com",44],["movies4us.*",44],["popcornmovies.to",44],["villagrancanaria.com",45],["baic.cz",46],["bunq.com",47],["framer.com",47],["inceptionlabs.ai",47],["zave.it",47],["tower.dev",47],["fleksberegner.dk",48],["duty.travel.cl",49],["solscan.io",50],["connorduffy.abundancerei.com",51],["bc.gamem",52],["akkushop-turkiye.com.tr",53],["k33.com",[54,55]],["komdigi.go.id",56],["fijiairways.com",57],["planner.kaboodle.co.nz",58],["pedalcommander.*",59],["sekisuialveo.com",[60,61]],["rightsize.dk",62],["random-group.olafneumann.org",63],["espadrij.com",64],["hygiene-shop.eu",64],["gesundheitsmanufaktur.de",[64,301]],["technikmuseum.berlin",65],["cvut.cz",[66,67,68]],["r-ulybka.ru",69],["voltadol.at",70],["evium.de",71],["hiring.amazon.com",72],["comnet.com.tr",72],["gpuscout.nl",72],["remanga.org",72],["parrotsec.org",72],["estrelabet.bet.br",72],["shonenjumpplus.com",73],["engeldirekt.de",74],["haleon-gebro.at",[75,76]],["happyplates.com",[77,78]],["ickonic.com",79],["abs-cbn.com",80],["news.abs-cbn.com",80],["opmaatzagen.nl",81],["mundwerk-rottweil.de",81],["sqlook.com",82],["adef-emploi.fr",[85,86]],["lumieresdelaville.net",[85,86]],["ccaf.io",[87,88]],["dbschenkerarkas.com.tr",89],["dbschenker-seino.jp",89],["dbschenker.com",[89,186]],["scinapse.io",90],["shop.ba.com",[91,92]],["uc.pt",93],["bennettrogers.mysight.uk",94],["snipp.gg",94],["leafly.com",95],["geizhals.at",96],["geizhals.de",96],["geizhals.eu",96],["cenowarka.pl",96],["skinflint.co.uk",96],["webhallen.com",[97,98,99]],["olx.com.br",100],["unobike.com",101],["mod.io",102],["passport-photo.online",103],["mojmaxtv.hrvatskitelekom.hr",103],["rodrigue-app.ct.ws",103],["tme.eu",104],["mein-osttirol.rocks",105],["tennessine.co.uk",106],["ultraleds.co.uk",107],["greubelforsey.com",108],["lukify.app",109],["studiobookr.com",110],["getgrass.io",111],["artisan.co",112],["mobilefuse.com",113],["safe.global",[114,238]],["data.carbonmapper.org",115],["avica.link",116],["madeiramadeira.com.br",117],["sberdisk.ru",118],["column.com",119],["iqoption.com",120],["dopesnow.com",121],["montecwear.com",121],["romeo.com",122],["sonyliv.com",[123,124]],["cwallet.com",125],["oneskin.co",126],["telemetr.io",127],["near.org",128],["near.ai",128],["dev.near.org",129],["jito.network",130],["jito.wtf",130],["goodpods.com",131],["pngtree.com",[132,133]],["rhein-pfalz-kreis.de",[134,135,136,137,138]],["idar-oberstein.de",[134,135,136,137]],["vogelsbergkreis.de",[134,135,136,137]],["v2.xmeye.net",139],["venom.foundation",140],["canonvannederland.nl",141],["my-account.storage-mart.com",142],["web.bunq.com",143],["lifesum.com",144],["home.shortcutssoftware.com",145],["klimwinkel.nl",146],["markimicrowave.com",147],["aerolineas.com.ar",148],["5sim.net",148],["fold.dev",149],["mojposao.hr",150],["temu.com",[151,152]],["supreme.com",[153,154]],["g-star.com",155],["sawren.pl",156],["ultrahuman.com",157],["optionsgroup.com",158],["withpersona.com",[159,160]],["trigger.dev",161],["core.app",[162,164]],["zora.co",163],["kokku-online.de",165],["cuba-buddy.de",166],["datamask.app",167],["humandataincome.com",167],["crealitycloud.com",168],["triumphtechnicalinformation.com",169],["businessclass.com",170],["livsstil.se",171],["schneidewind-immobilien.de",172],["textshuttle.com",173],["simpleswap.io",174],["wales.nhs.attendanywhere.com",175],["sacal.it",176],["astondevs.ru",177],["gonxt.com",178],["geomiq.com",179],["bbc.com",180],["galaxy.com",181],["ticketmelon.com",182],["pechinchou.com.br",183],["thehub21.com",184],["archiup.com",185],["autoride.cz",[187,188,189]],["autoride.es",[187,188,189]],["autoride.io",[187,188,189]],["autoride.sk",[187,188,189]],["wunderground.com",190],["baselime.io",191],["eversports.de",[192,193]],["makerz.me",194],["reebok.eu",195],["alfa.com.ec",196],["rts.com.ec",196],["tropicalida.com.ec",196],["owgr.com",[197,198]],["beermerchants.com",199],["saamexe.com",[200,201]],["helium.com",200],["blommerscoffee.shipping-portal.com",200],["app.bionic-reading.com",202],["nloto.ru",203],["swisstours.com",204],["librinova.com",205],["format.bike",206],["khanacademy.org",207],["etelecinema.hu",208],["konicaminolta.com",209],["soquest.xyz",210],["region-bayreuth.de",211],["bahnland-bayern.de",212],["eezy.nrw",212],["nationalexpress.de",212],["chipcitycookies.com",213],["6amgroup.com",213],["go.bkk.hu",213],["worldlibertyfinancial.com",213],["happiful.com",213],["bazaartracker.com",214],["subscribercounter.com",215],["app.klarna.com",[216,217,218]],["instantspoursoi.fr",219],["thealliance.ai",220],["librumreader.com",221],["visnos.com",222],["polypane.app",223],["changelly.com",224],["glose.com",225],["yellow.systems",226],["renebieder.com",227],["goodram.com",228],["starwalk.space",229],["vitotechnology.com",229],["codedead.com",230],["studiofabiobiesel.com",231],["fydeos.com",232],["fydeos.io",232],["jove.com",233],["argent.xyz",234],["pixeden.com",235],["akasha.org",236],["ashleyfurniture.com",237],["jibjab.com",239],["filmzie.com",240],["vietjetair.com",241],["kick.com",242],["cora-broodjes.nl",243],["jimdosite.com",243],["worstbassist.com",243],["evernote.com",[244,245,315]],["octopusenergy.co.jp",246],["findmcserver.com",247],["schneideranwaelte.de",248],["traefik.io",248],["cityfalcon.ai",249],["digitalparking.city",250],["mediathekviewweb.de",251],["solana.com",252],["ef.co.id",253],["alohafromdeer.com",254],["fwd.com",[255,257]],["everywhere.game",256],["geotastic.net",258],["garageproject.co.nz",259],["tattoodo.com",[259,260]],["jmonline.com.br",261],["atlas.workland.com",261],["virginexperiencedays.co.uk",261],["emag.berliner-woche.de",[262,263,264]],["nordkurier.de",[262,263,264]],["everest-24.pl",[265,266]],["sneakerfreaker.com",267],["cryptofalka.hu",267],["walmart.ca",268],["byfood.com",269],["andsafe.de",270],["edostavka.by",271],["emall.by",271],["ishoppurium.com",272],["baseblocks.tenereteam.com",273],["onexstore.pl",[274,275,276]],["revanced.app",276],["evropochta.by",[277,278]],["inselberlin.de",279],["gronkh.tv",280],["adfilteringdevsummit.com",281],["dailyrevs.com",282],["dsworks.ru",282],["daraz.com",283],["learngerman.dw.com",284],["leeway.tech",285],["gostanford.com",286],["namensetiketten.de",287],["drafthound.com",[288,289]],["wokularach.pl",290],["bidup.amtrak.com",291],["eschuhe.de",292],["zeglins.com",293],["flyingpapers.com",294],["beta.character.ai",[295,296]],["bittimittari.fi",297],["aida64.co.uk",[298,299]],["aida64.com.ua",[298,299]],["aida64.de",[298,299]],["aida64.hu",[298,299]],["aida64.it",[298,299]],["aida64russia.com",[298,299]],["116.ru",300],["14.ru",300],["161.ru",300],["164.ru",300],["173.ru",300],["178.ru",300],["26.ru",300],["29.ru",300],["35.ru",300],["43.ru",300],["45.ru",300],["48.ru",300],["51.ru",300],["53.ru",300],["56.ru",300],["59.ru",300],["60.ru",300],["63.ru",300],["68.ru",300],["71.ru",300],["72.ru",300],["74.ru",300],["76.ru",300],["86.ru",300],["89.ru",300],["93.ru",300],["chita.ru",300],["e1.ru",300],["fontanka.ru",300],["ircity.ru",300],["izh1.ru",300],["mgorsk.ru",300],["msk1.ru",300],["ngs.ru",300],["ngs22.ru",300],["ngs24.ru",300],["ngs42.ru",300],["ngs55.ru",300],["ngs70.ru",300],["nn.ru",300],["sochi1.ru",300],["sterlitamak1.ru",300],["tolyatty.ru",300],["ufa1.ru",300],["v1.ru",300],["vladivostok1.ru",300],["voronezh1.ru",300],["ya62.ru",300],["open24.ee",301],["116117.fi",302],["pjspub.com",303],["autodude.dk",304],["autodude.fi",304],["autodude.no",304],["autodude.se",304],["valostore.fi",304],["valostore.no",304],["valostore.se",304],["vivantis.*",305],["vivantis-shop.at",305],["krasa.cz",305],["auf1.tv",306],["wesendit.com",307],["hatch.co",308],["haberturk.com",309],["spaseekers.com",310],["incomeshares.com",311],["surnamedb.com",312],["pizzadelight-menu.co.uk",313],["ioplus.nl",314],["lahella.fi",316]]);
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
