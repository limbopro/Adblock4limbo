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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedSetLocalStorageItem = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["CMPList","$currentDate$"],["cv:cookiesAllowed","{\"mandatoryCookies\":true,\"statsCookies\":false,\"marketingCookies\":false}"],["elementor","{\"__expiration\":{},\"pageViews\":1,\"popup_1276_times\":1}"],["dlnews:settings","{\"state\":{\"cookiesConsent\":{\"marketing\":false,\"analytical\":false},\"chartsOptions\":[{\"id\":\"defi-tvl\"},{\"id\":\"top-protocol\"},{\"id\":\"dexs-volume\"},{\"id\":\"chains-tvl-pie\"}],\"isPriceFeedPaused\":false,\"showSubscriptionModal\":false},\"version\":2}"],["kmt_config_web","{\"created_at\":\"$currentDate$\",\"anonymous\":\"\",\"gdpr_ga\":false,\"gdpr_exp\":false}"],["cookies_settings","{\"json\":{\"state\":\"only-essential\"}}"],["cookiesSettings","{\"remarketing\":false,\"personalisation\":false,\"statistics\":false}"],["acceptConsent","{\"acceptAnalysis\":false,\"acceptMarketing\":false,\"showCookie\":1}"],["cookieConsent","{\"consented\":true,\"levels\":{\"level1\":true,\"level2\":false,\"level3\":false,\"level4\":false}}"],["_cmpRepromptHash","CP20-YAP20-YAAKAyBENAfEgAAAAAAAAAAwIAAAI8gBAGfAR4AAA.YAAAAAAAAAAA.1.l4yppBwRRyXiPrnFNrkJzQ==.P21TmRP21TmRAKAaAB4AAAAA"],["noniabvendorconsent","P21TmRP21TmRAKAaAB4AAAAA"],["UserCookieConsent","{\"__typename\":\"CookieConfigModel\",\"cookieSettings\":[],\"essential\":true,\"statistics\":false,\"marketing\":false}"],["trackingAllowedOrDeniedAt","$currentISODate$"],["cookieConsent","necessary"],["cookies","{\"essential\":true,\"performance\":false,\"marketing\":false}"],["cookie_consent","{\"consent\":true,\"necessary\":true,\"preference\":false,\"statistics\":false,\"marketing\":false}"],["acceptedCookies","{\"security\":true,\"analytics\":false}"],["cookieManagement","{\"googleAnalytics\":false,\"facebook\":false}"],["COOKIE_CONSENT_STATUS_4124","\"dismissed\""],["cookieSettings","{\"technical\":true,\"bugsnag\":false,\"adjust\":false}"],["appconsent","{\"consents\":{},\"i18n\":{},\"ui\":{},\"vendorlist\":{},\"CMP_VERSION\":10,\"xchange\":{},\"events\":[],\"client\":{\"externalIds\":{},\"floatingPurposes\":[{\"id\":\"\",\"version\":0}],\"floatingPurposesConsent\":[{\"extra_id\":\"\",\"type\":0,\"given_at\":null,\"version\":0}]},\"consentstring\":\"CPzBFAAPzBFAAACAKAFRDUCoAAAAAH_AAAqIIzNF_H_dSSNj8X5_Yft0eY1P5dAz7uQxBhaJg6QFyBLEsJwXwmAIIEnqAKgKGBIEskJAIQBlCAHABUEAYIEBISGMAEAQIQAAJiAEEEERAmJICBBJG4AgEAIQglgCABQAgAsESFsoQMhAAIAABUJAAAgggIABAgAIBDAAQAAAAAAAAgAAEAAAAAAAAAAEABBHYAkw1LiABsiAkJpAwigRAjCIICKBQAAACQMEAACQIAlBGASgwAQAgRQAEBAAAAFEAAAAAAIAEIAAgACBAABAIBAAAABAAAAAQAAAgAIAQAAAABADAEAABAAAAAAACAECEIAAIACAgAAgAEAIAAAAAAIBAIBAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAgAAAA.YAAAAAAAAAAA\",\"consentstringUpdatedAt\":{}}"],["euconsent","CP0N6vnP0N6wKA6AoBENDbCsAP_AAH_AABCYJtNV_H__bW9r8X7_aft0eY1P9_j77uQxBhfJE-4F3LvW_JwXx2E5NF36tqoKmRoEu3ZBIUNlHJHUTVmwaogVryHsakWcpTNKJ6BkkFMRM2dYCF5vm4tjeQKY5_p_d3fx2D-t_dv839zzz8VHn3c5f--0-PCdU5-9Dfn9fRfb-9IP9_78v8v8_l_rk2_eT13_pcvr_D--f_87_XW-9wTYAJMNC4gC7AgJCbQMIoEAIwrCAigUAAAAkDRAQAuDAp2BgEusBEAIEUABwQAhABRkACAAACABCIAJAigQAAQCAQAAgAQCAQAEDAAKACwEAgABAdAxTCgAUCwgSIyIhTAhCgSCAlsqEEoKhBXCAIssAKARGwUACAAARWAAICxeAwBICVCQQJdQbQAAEACAUUoVCCT0wADgkbLUHgiAAAAA.YAAAAAAAAAAA"],["fpconsent","NTglMkM0MCUyQzElMkMxNjk4MjE5MTEx|JTA2JTAxJTAxJTA1JTAxJTE2JTAxJTE1JTAxJTA0JTAxJTA4JTAx|JTAw"],["acceptedCookiesAt","$now$"],["am-last-cookie-acceptance","$now$"],["cookie_setting","{\"analytical_cookies\":false,\"functional_cookies\":true}"],["cookieNotification","{\"value\":\"1\"}"],["solvia-consents","{\"tec\":true,\"pers\":false,\"ana\":false,\"publi\":false}"],["COOKIE_CONSENT","\"TECHNICAL_SELECTED\""],["persist:privacy","{\"allowExternalContent\":\"false\",\"allowTracking\":\"false\",\"allowFunctionalCookies\":\"true\",\"allowRequiredCookies\":\"true\",\"showConsentBanner\":\"false\",\"_persist\":\"{\\\"version\\\":-1,\\\"rehydrated\\\":true}\"}"],["consents","{\"*\":true}"],["cookieSettings","{\"fullOptIn\":false,\"googleAnalytics\":false,\"facebookTrackingPixel\":false,\"googleAds\":false}"],["CookiesConsent","{\"necessary\":true,\"functional\":true}"],["aw-thirds","{\"mode\":\"forced-choice\",\"google_analytics\":\"deny\",\"google_tag_manager\":\"deny\",\"facebook_pixel\":\"deny\",\"linkedin\":\"deny\",\"youtube\":\"allow\",\"google_maps\":\"allow\"}"],["lms_cookies","nk9jfSLYwDn7O5xP0UhgFw=="],["partner-cookies","{\"value\":{\"isAnalyticsCookies\":false,\"isFunctionalCookies\":true}}"],["consents","{\"device\":false,\"personalizedContent\":false,\"googleAdsense\":false,\"googleRecaptcha\":false,\"youtube\":true}"],["dtm-cookie-banner","decline"],["cookieConsent","{\"created\":\"1\",\"versionNumber\":2,\"consents\":[{\"type\":\"ANALYTICS_STORAGE\",\"status\":\"DENIED\"},{\"type\":\"AD_STORAGE\",\"status\":\"DENIED\"},{\"type\":\"AD_USER_DATA\",\"status\":\"DENIED\"},{\"type\":\"AD_PERSONALIZATION\",\"status\":\"DENIED\"}],\"gtmParams\":{\"analytics_storage\":\"granted\",\"ad_storage\":\"denied\",\"ad_user_data\":\"denied\",\"ad_personalization\":\"denied\"}}"],["ccm_consent","{\"/\":{\"gen\":2,\"ucid\":\"1\",\"consent\":true,\"embeddings\":[\"1e76acf\",\"8ed8d9a\",\"b429e86\",\"f22e6ed\",\"0b25af3\",\"6079a42\"],\"created\":\"$currentDate$\",\"updated\":\"$currentDate$\",\"clickedButton\":\"acceptAll\",\"iframeConsentDomains\":[],\"tcf\":{\"p\":[],\"lip\":[],\"sf\":[],\"v\":[],\"liv\":[],\"gad\":[]},\"lang\":\"de_DE\"}}"],["euconsent-v2","CP9oCIAP9oCIAAHABBENAwEgAAAAAAAAAAAAAAAAAAAA.YAAAAAAAAAAA"],["gtagConsents","{\"ad_personalization\":\"denied\",\"analytics_storage\":\"denied\",\"ad_user_data\":\"denied\",\"ad_storage\":\"denied\"}"]];

const hostnamesMap = new Map([["express.co.uk",0],["carvertical.com",1],["easyfind.ch",2],["dlnews.com",3],["komoot.com",4],["komoot.de",4],["screen.studio",5],["vivantis.sk",6],["krasa.cz",6],["spv.no",7],["vr.fi",8],["forums.tomsguide.com",[9,10]],["online.depo-diy.ee",11],["auf1.tv",12],["autodude.dk",13],["autodude.fi",13],["autodude.no",13],["autodude.se",13],["valostore.fi",13],["valostore.no",13],["valostore.se",13],["steuerbot.com",14],["vadhander.hogakusten.com",15],["vadhander.kramfors.se",15],["monkeytype.com",16],["wesendit.com",17],["hatch.co",18],["app.solit-kapital.de",19],["lachainemeteo.com",20],["cmpv2.fanpage.it",[21,22]],["cmpv2.geopop.it",[21,22]],["alan.com",23],["primor.eu",24],["manta.net",25],["login.flex.paychex.com",26],["solvia.es",27],["terviseportaal.ee",28],["vreden.de",29],["if-cdn.com",30],["cnmaarthouse.de",31],["adventisten.de",32],["hopetv.de",32],["soprema.es",33],["luminousindia.com",34],["21vek.by",35],["screenflash.io",36],["salomon.com",37],["auto.nl",38],["eurobaustoff.com",39],["euronews.com",40],["wedding.pl",41]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedSetLocalStorageItem(key = '', value = '') {
    setLocalStorageItemFn('local', true, key, value);
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
        'false', 'true',
        'on', 'off',
        'yes', 'no',
        'accept', 'reject',
        'accepted', 'rejected',
        '{}', '[]', '""',
        '$remove$',
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
            if ( /^\d+$/.test(unquoted) === false ) { return; }
            const n = parseInt(unquoted, 10);
            if ( n > 32767 ) { return; }
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
    } catch(ex) {
    }
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
                return { matchAll: true };
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
            catch(ex) {
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
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    return safe;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { trustedSetLocalStorageItem(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_trustedSetLocalStorageItem();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedSetLocalStorageItem = cloneInto([
            [ '(', uBOL_trustedSetLocalStorageItem.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedSetLocalStorageItem);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_trustedSetLocalStorageItem;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
