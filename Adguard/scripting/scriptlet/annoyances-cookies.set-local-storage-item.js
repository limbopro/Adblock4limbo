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
const argsList = [["psh:cookies-other","false"],["psh:cookies-seen","true"],["psh:cookies-social","true"],["pc-cookie-accepted","true"],["pc-cookie-technical-accepted","true"],["allowFunctionalCookies","false"],["cookiesAccepted","true"],["cookieClosed","true"],["cookie_consent","no"],["explicitCookieAccept-24149","true"],["keeper_cookie_consent","true"],["cookie_accepted","true"],["consentLevel","1"],["cookies-val","accepted"],["201805-policy|accepted","1"],["GDPR-fingerprint:accepted","true"],["CPCCookies","true"],["privacyModalSeen","true"],["LGPDconsent","1"],["isCookiePoliceAccepted","1"],["HAS_ACCEPTED_PRIVACY_POLICY","true"],["cookiesAceptadas","true"],["privacy.com.br","accepted"],["supabase-consent-ph","false"],["cookieConsent","essential"],["has-seen-ccpa-notice","true"],["wbx__cookieAccepted","true"],["show_cookies_popup","false"],["modal_cookies","1"],["trainingDataConsent","true"],["cookieConsent","false"],["zglobal_Acookie_optOut","3"],["cookie","true"],["cookiePolicy","true"],["cookies_view","true"],["gdprConsent","false"],["framerCookiesDismissed","true"],["vue-cookie-accept-decline-cookiePanel","accept"],["cookies-consent-accepted","true"],["user-cookies-setting","1"],["COOKIE_AUTHORITY_QUERY_V2","1"],["ignore_cookie_warn","true"],["CerezUyariGosterildi","true"],["cookies-product","NO"],["showCookies","NO"],["localConsent","true"],["acceptedCookies","true"],["isNotificationDisplayed","true"],["COOKIE_BANNER_CLICKED","true"],["cookies-eu-statistics","false"],["cookies-eu-necessary","true"],["cookieStatus","rejected"],["consent","true"],["cookiePreference","required"],["technikmuseum-required-enabled","true"],["ctu-cm-n","1"],["ctu-cm-a","0"],["ctu-cm-m","0"],["cookieAndRecommendsAgreement","true"],["cookiebanner-active","false"],["tracking-state-v2","deny"],["cookieConsent","true"],["202306151200.shown.production","true"],["consent","[]"],["cookiebanner:extMedia","false"],["cookiebanner:statistic","false"],["consentAccepted","true"],["marketingConsentAccepted","false"],["consentMode","1"],["uninavIsAgreeCookie","true"],["cookieConsent","denied"],["cookieChoice","rejected"],["adsAccepted","false"],["analyticsAccepted","false"],["analytics_gdpr_accept","yes"],["youtube_gdpr_accept","yes"],["Analytics:accepted","false"],["GDPR:accepted","true"],["cookie_usage_acknowledged_2","1"],["a_c","true"],["iag-targeting-consent","no"],["iag-performance-consent","no"],["userDeniedCookies","1"],["hasConsent","false"],["viewedCookieConsent","true"],["dnt_message_shown","1"],["necessaryConsent","true"],["marketingConsent","false"],["personalisationConsent","false"],["open_modal_update_policy","1"],["cookieinfo","1"],["cookies","1"],["cookieAccepted","true"],["necessary_cookie_confirmed","true"],["ccb_contao_token_1","1"],["cookies","0"],["cookies_accepted_6pzworitz8","true"],["rgpd.consent","1"],["_lukCookieAgree","2"],["cookiesAllowed","false"],["cookiePreference","1"],["artisan_acceptCookie","true"],["cookies_policy_acceptance","denied"],["SAFE__analyticsPreference","false"],["termsOfUseAccepted","true"],["agreeCookie","true"],["lgpd-agree","1"],["cookieIsAccepted","true"],["cookieAllowed","false"],["cookie_usage_accepted","1"],["cookieBannerShown","true"],["cookiesConsent","1"],["cookie_acceptance","true"],["analytics_cookies_acceptance","true"],["ns_cookies","1"],["gdpr","deny"],["c","false"],["cookies-preference","1"],["cookiesAcknowledged","1"],["hasConsentedPH","no"],["cookie_consent","accepted"],["gtag.consent.option","1"],["cps20","1"],["showCookieUse","false"],["terms","accepted"],["z_cookie_consent","true"],["StorageMartCookiesPolicySeen","true"],["bunq:CookieConsentStore:isBannerVisible","false"],["accepted-cookies","[]"],["ngx-webstorage|cookies","false"],["app_gdpr_consent","1"],["alreadyAcceptCookie","true"],["isCookiesAccepted","true"],["cookies","no"],["cookies-policy-accepted","true"],["cookie_prompt_times","1"],["last_prompt_time","1"],["sup_gdpr_cookie","accepted"],["gdpr_cookie","accepted"],["cn","true"],["consent_popup","1"],["COOKIE_CONSENT","false"],["cookie-consent-declined-version","1"],["Do-not-share","true"],["allow-cookies","false"],["__ph_opt_in_out_phc_9aSDbJCaDUMdZdHxxMPTvcj7A9fsl3mCgM1RBPmPsl7","0"],["should_display_cookie_banner_v2","false"],["zora-discover-14-03-23","false"],["connect-wallet-legal-consent","true"],["cookiesMin","1"],["cb-accept-cookie","true"],["cookie-permission","false"],["cookies","true"],["ROCUMENTS.cookieConsent","true"],["bcCookieAccepted","true"],["CMP:personalisation","1"],["pcClosedOnce","true"],["textshuttle_cookie","false"],["cookies-notification-message-is-hidden","true"],["cookieBanner","false"],["cookieBanner","true"],["banner","true"],["isAllowCookies","true"],["gtag_enabled","1"],["cvcConsentGiven","true"],["terms","true"],["cookie_accept","true"],["Pechinchou:CookiesModal","true"],["hub-cp","true"],["cookiePolicyAccepted","yes"],["cookie_usage_acknowledged_2","true"],["cookies_necessary_consent","true"],["cookies_marketing_consent","false"],["cookies_statistics_consent","false"],["wu.ccpa-toast-viewed","true"],["closed","true"],["dnt","1"],["dnt_a","1"],["makerz_allow_consentmgr","0"],["SHOW_COOKIE_BANNER","no"],["CookiesConsent","1"],["hasAnalyticalCookies","false"],["hasStrictlyNecessaryCookies","true"],["amCookieBarFirstShow","1"],["acceptedCookies","false"],["viewedCookieBanner","true"],["accept_all_cookies","false"],["isCookies","1"],["isCookie","Yes"],["cookieconsent_status","false"],["user_cookie","1"],["ka:4:legal-updates","true"],["cok","true"],["cookieMessage","true"],["soCookiesPolicy","1"],["GDPR:RBI:accepted","false"],["contao-privacy-center.hidden","1"],["cookie_consent","false"],["cookiesAgree","true"],["ytsc_accepted_cookies","true"],["safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["agreeToCookie","false"],["AI Alliance_ReactCookieAcceptance_hasSetCookies","true"],["cookie-ack-2","true"],["firstVisit","false"],["2020-04-05","1"],["dismissed","true"],["SET_COOKIES_APPROVED","true"],["hasAcceptedCookies","true"],["isCookiesNotificationHidden","true"],["agreed-cookies","true"],["consentCookie","true"],["SWCOOKIESACC","1"],["hasAcceptedCookieNotice","true"],["fb-cookies-accepted","false"],["is_accept_cookie","true"],["accept-jove-cookie","1"],["cookie_consent_bar_value","true"],["pxdn_cookie_consent","true"],["akasha__cookiePolicy","true"],["QMOptIn","false"],["safe.global","false"],["cookie_banner:hidden","true"],["cookiesAccepted","false"],["accept_cookie_policy","true"],["kick_cookie_accepted","true"],["cookies-selected","true"],["cookie-notice-dismissed","true"],["accepts-cookie-notice","true"],["dismissedPrivacyCookieMessage","1"],["allowCookies","allowed"],["cookie_consent","true"],["cookies_policy_status","true"],["cookies-accepted","true"],["allowCookies","true"],["cookie_consent","1"],["accepted-cookies","true"],["cookies-consent","0"],["cookieBannerRead","true"],["acceptCookie","0"],["cookieBannerReadDate","1"],["privacy-policy-accepted","true"],["accepted_cookies","true"],["accepted_cookie","true"],["cookie-consent","true"],["consentManager_shown","true"],["consent_necessary","true"],["consent_performance","false"],["cookie-closed","true"],["cookie-accepted","false"],["cookieConsent","1"],["enableCookieBanner","false"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["isAcceptCookie","true"],["marketing","false"],["technical","true","","reload","1"],["analytics","false"],["otherCookie","true"],["saveCookie","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["acceptCookies","no"],["acceptCookies","true"],["has-dismissed","1"],["hasAcceptedGdpr","true"],["lw-accepts-cookies","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["canada-cookie-acknowledge","1"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"],["storagePermission","true"],["set_cookie_stat","false"],["set_cookie_tracking","false"],["df-cookies-allowed","true"],["cookie-consent","1"],["userConsented","false"],["cookieConsent","necessary"],["gdpr-done","true"],["isTrackingAllowed","false"],["legalsAccepted","true"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookie_accepted","-1"],["cookie-policy","approve"],["spaseekers:cookie-decision","accepted"],["consentInteraction","true"],["cookieConsentGiven","1"]];
const hostnamesMap = new Map([["nhnieuws.nl",[0,1,2]],["omroepbrabant.nl",[0,1,2]],["erlus.com",[3,4]],["gs1.se",[5,6]],["spectrumtherapeutics.com",6],["puregoldprotein.com",[6,72,73]],["thingtesting.com",6],["streamclipsgermany.de",6],["bo3.gg",6],["lemwarm.com",7],["posthog.com",8],["polar.sh",8],["form.fillout.com",9],["keepersecurity.com",10],["esto.eu",11],["ctol.digital",11],["beterbed.nl",12],["crt.hr",13],["code.likeagirl.io",14],["engineering.mixpanel.com",14],["betterprogramming.pub",14],["medium.com",14],["500ish.com",14],["gitconnected.com",14],["bettermarketing.pub",14],["diylifetech.com",14],["thebolditalic.com",14],["writingcooperative.com",14],["fanfare.pub",14],["betterhumans.pub",14],["fvd.nl",15],["cpc2r.ch",16],["metamask.io",17],["chavesnamao.com.br",18],["anhanguera.com",19],["bhaskar.com",20],["novaventa.com",21],["privacy.com.br",22],["supabase.com",23],["app.getgrass.io",24],["sanluisgarbage.com",25],["wildberries.ru",26],["cryptorank.io",27],["springmerchant.com",28],["veed.io",29],["varusteleka.com",30],["deribit.com",30],["dorkgpt.com",30],["zoho.com",31],["femibion.rs",32],["nove.fr",32],["movies4us.*",33],["popcornmovies.to",33],["improvethenews.org",33],["plente.com",33],["villagrancanaria.com",34],["baic.cz",35],["bunq.com",36],["framer.com",36],["inceptionlabs.ai",36],["zave.it",36],["tower.dev",36],["fleksberegner.dk",37],["duty.travel.cl",38],["solscan.io",39],["connorduffy.abundancerei.com",40],["bc.gamem",41],["akkushop-turkiye.com.tr",42],["k33.com",[43,44]],["komdigi.go.id",45],["fijiairways.com",46],["planner.kaboodle.co.nz",47],["pedalcommander.*",48],["sekisuialveo.com",[49,50]],["rightsize.dk",51],["random-group.olafneumann.org",52],["espadrij.com",53],["hygiene-shop.eu",53],["gesundheitsmanufaktur.de",[53,284]],["technikmuseum.berlin",54],["cvut.cz",[55,56,57]],["r-ulybka.ru",58],["voltadol.at",59],["evium.de",60],["gpuscout.nl",61],["remanga.org",61],["comnet.com.tr",61],["auth.hiring.amazon.com",61],["parrotsec.org",61],["shonenjumpplus.com",62],["engeldirekt.de",63],["haleon-gebro.at",[64,65]],["happyplates.com",[66,67]],["ickonic.com",68],["abs-cbn.com",69],["news.abs-cbn.com",69],["opmaatzagen.nl",70],["mundwerk-rottweil.de",70],["sqlook.com",71],["adef-emploi.fr",[74,75]],["lumieresdelaville.net",[74,75]],["ccaf.io",[76,77]],["dbschenkerarkas.com.tr",78],["dbschenker-seino.jp",78],["dbschenker.com",[78,170]],["scinapse.io",79],["shop.ba.com",[80,81]],["uc.pt",82],["bennettrogers.mysight.uk",83],["snipp.gg",83],["leafly.com",84],["geizhals.at",85],["geizhals.de",85],["geizhals.eu",85],["cenowarka.pl",85],["skinflint.co.uk",85],["webhallen.com",[86,87,88]],["olx.com.br",89],["unobike.com",90],["mod.io",91],["rodrigue-app.ct.ws",92],["passport-photo.online",92],["mojmaxtv.hrvatskitelekom.hr",92],["tme.eu",93],["mein-osttirol.rocks",94],["tennessine.co.uk",95],["ultraleds.co.uk",96],["greubelforsey.com",97],["lukify.app",98],["studiobookr.com",99],["getgrass.io",100],["artisan.co",101],["mobilefuse.com",102],["safe.global",[103,223]],["data.carbonmapper.org",104],["avica.link",105],["madeiramadeira.com.br",106],["sberdisk.ru",107],["column.com",108],["iqoption.com",109],["dopesnow.com",110],["montecwear.com",110],["romeo.com",111],["sonyliv.com",[112,113]],["cwallet.com",114],["oneskin.co",115],["telemetr.io",116],["near.org",117],["near.ai",117],["dev.near.org",118],["jito.network",119],["jito.wtf",119],["goodpods.com",120],["pngtree.com",[121,122]],["v2.xmeye.net",123],["venom.foundation",124],["canonvannederland.nl",125],["my-account.storage-mart.com",126],["web.bunq.com",127],["lifesum.com",128],["home.shortcutssoftware.com",129],["klimwinkel.nl",130],["markimicrowave.com",131],["aerolineas.com.ar",132],["5sim.net",132],["fold.dev",133],["mojposao.hr",134],["temu.com",[135,136]],["supreme.com",[137,138]],["g-star.com",139],["sawren.pl",140],["ultrahuman.com",141],["optionsgroup.com",142],["withpersona.com",[143,144]],["trigger.dev",145],["core.app",[146,148]],["zora.co",147],["kokku-online.de",149],["cuba-buddy.de",150],["datamask.app",151],["humandataincome.com",151],["crealitycloud.com",152],["triumphtechnicalinformation.com",153],["businessclass.com",154],["livsstil.se",155],["schneidewind-immobilien.de",156],["textshuttle.com",157],["simpleswap.io",158],["wales.nhs.attendanywhere.com",159],["sacal.it",160],["astondevs.ru",161],["gonxt.com",162],["geomiq.com",163],["bbc.com",164],["galaxy.com",165],["ticketmelon.com",166],["pechinchou.com.br",167],["thehub21.com",168],["archiup.com",169],["autoride.cz",[171,172,173]],["autoride.es",[171,172,173]],["autoride.io",[171,172,173]],["autoride.sk",[171,172,173]],["wunderground.com",174],["baselime.io",175],["eversports.de",[176,177]],["makerz.me",178],["reebok.eu",179],["alfa.com.ec",180],["rts.com.ec",180],["tropicalida.com.ec",180],["owgr.com",[181,182]],["beermerchants.com",183],["saamexe.com",[184,185]],["helium.com",184],["app.bionic-reading.com",186],["nloto.ru",187],["swisstours.com",188],["librinova.com",189],["format.bike",190],["khanacademy.org",191],["etelecinema.hu",192],["konicaminolta.com",193],["soquest.xyz",194],["region-bayreuth.de",195],["nationalexpress.de",196],["eezy.nrw",196],["bahnland-bayern.de",196],["chipcitycookies.com",197],["6amgroup.com",197],["go.bkk.hu",197],["worldlibertyfinancial.com",197],["happiful.com",197],["bazaartracker.com",198],["subscribercounter.com",199],["app.klarna.com",[200,201,202]],["instantspoursoi.fr",203],["thealliance.ai",204],["vivenu.com",205],["librumreader.com",206],["visnos.com",207],["polypane.app",208],["changelly.com",209],["glose.com",210],["yellow.systems",211],["renebieder.com",212],["goodram.com",213],["starwalk.space",214],["vitotechnology.com",214],["codedead.com",215],["studiofabiobiesel.com",216],["fydeos.com",217],["fydeos.io",217],["jove.com",218],["argent.xyz",219],["pixeden.com",220],["akasha.org",221],["ashleyfurniture.com",222],["jibjab.com",224],["filmzie.com",225],["vietjetair.com",226],["kick.com",227],["jimdosite.com",228],["worstbassist.com",228],["cora-broodjes.nl",228],["evernote.com",[229,230]],["octopusenergy.co.jp",231],["findmcserver.com",232],["schneideranwaelte.de",233],["traefik.io",233],["cityfalcon.ai",234],["digitalparking.city",235],["mediathekviewweb.de",236],["solana.com",237],["ef.co.id",238],["alohafromdeer.com",239],["fwd.com",[240,242]],["everywhere.game",241],["geotastic.net",243],["tattoodo.com",[244,245]],["garageproject.co.nz",244],["jmonline.com.br",246],["atlas.workland.com",246],["virginexperiencedays.co.uk",246],["emag.berliner-woche.de",[247,248,249]],["nordkurier.de",[247,248,249]],["everest-24.pl",[250,251]],["sneakerfreaker.com",252],["cryptofalka.hu",252],["walmart.ca",253],["byfood.com",254],["andsafe.de",255],["edostavka.by",256],["emall.by",256],["ishoppurium.com",257],["onexstore.pl",[258,259,260]],["revanced.app",260],["evropochta.by",[261,262]],["inselberlin.de",263],["gronkh.tv",264],["adfilteringdevsummit.com",265],["dailyrevs.com",266],["dsworks.ru",266],["daraz.com",267],["learngerman.dw.com",268],["leeway.tech",269],["gostanford.com",270],["namensetiketten.de",271],["drafthound.com",[272,273]],["wokularach.pl",274],["bidup.amtrak.com",275],["eschuhe.de",276],["zeglins.com",277],["flyingpapers.com",278],["beta.character.ai",[279,280]],["bittimittari.fi",281],["aida64.co.uk",[282,283]],["aida64.com.ua",[282,283]],["aida64.de",[282,283]],["aida64.hu",[282,283]],["aida64.it",[282,283]],["aida64russia.com",[282,283]],["open24.ee",284],["116117.fi",285],["pjspub.com",286],["autodude.dk",287],["autodude.fi",287],["autodude.no",287],["autodude.se",287],["valostore.fi",287],["valostore.no",287],["valostore.se",287],["vivantis.*",288],["vivantis-shop.at",288],["krasa.cz",288],["auf1.tv",289],["wesendit.com",290],["hatch.co",291],["gdh.digital",292],["haberturk.com",293],["spaseekers.com",294],["ioplus.nl",295],["lahella.fi",296]]);
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
