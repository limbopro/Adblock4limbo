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

/* eslint-disable indent */

// ruleset: annoyances-cookies

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedSetLocalStorageItem = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["CMPList","$currentDate$"],["cv:cookiesAllowed","{\"mandatoryCookies\":true,\"statsCookies\":false,\"marketingCookies\":false}"],["elementor","{\"__expiration\":{},\"pageViews\":1,\"popup_1276_times\":1}"],["dlnews:settings","{\"state\":{\"cookiesConsent\":{\"marketing\":false,\"analytical\":false},\"chartsOptions\":[{\"id\":\"defi-tvl\"},{\"id\":\"top-protocol\"},{\"id\":\"dexs-volume\"},{\"id\":\"chains-tvl-pie\"}],\"isPriceFeedPaused\":false,\"showSubscriptionModal\":false},\"version\":2}"],["kmt_config_web","{\"created_at\":\"$currentDate$\",\"anonymous\":\"\",\"gdpr_ga\":false,\"gdpr_exp\":false}"],["cookies_settings","{\"json\":{\"state\":\"only-essential\"}}"],["cookiesSettings","{\"remarketing\":false,\"personalisation\":false,\"statistics\":false}"],["acceptConsent","{\"acceptAnalysis\":false,\"acceptMarketing\":false,\"showCookie\":1}"],["cookieConsent","{\"consented\":true,\"levels\":{\"level1\":true,\"level2\":false,\"level3\":false,\"level4\":false}}"],["_cmpRepromptHash","CP20-YAP20-YAAKAyBENAfEgAAAAAAAAAAwIAAAI8gBAGfAR4AAA.YAAAAAAAAAAA.1.l4yppBwRRyXiPrnFNrkJzQ==.P21TmRP21TmRAKAaAB4AAAAA"],["noniabvendorconsent","P21TmRP21TmRAKAaAB4AAAAA"],["UserCookieConsent","{\"__typename\":\"CookieConfigModel\",\"cookieSettings\":[],\"essential\":true,\"statistics\":false,\"marketing\":false}"],["trackingAllowedOrDeniedAt","$currentISODate$"],["cookies","{\"essential\":true,\"performance\":false,\"marketing\":false}"],["cookie_consent","{\"consent\":true,\"necessary\":true,\"preference\":false,\"statistics\":false,\"marketing\":false}"],["acceptedCookies","{\"security\":true,\"analytics\":false}"],["cookieManagement","{\"googleAnalytics\":false,\"facebook\":false}"],["cookie.settings","{\"required\":true,\"experience\":false,\"performance\":false,\"analytics\":false,\"date\":$now$,\"version\":1}"],["reduxStore","{\"tracking\":{\"consents\":{\"All\":false,\"functional\":false,\"Segment.io\":true},\"dialog\":{\"open\":false,\"dirty\":false},\"isConfigured\":true},\"loyalty\":{\"hasSeenLoyaltyPage\":false}}"],["cookie-data","{\"version\":\"20210906\",\"value\":\"-ga-ads-fbp-htj-yt\"}"],["cookieSettings","{\"technical\":true,\"bugsnag\":false,\"adjust\":false}"],["appconsent","{\"consents\":{},\"i18n\":{},\"ui\":{},\"vendorlist\":{},\"CMP_VERSION\":10,\"xchange\":{},\"events\":[],\"client\":{\"externalIds\":{},\"floatingPurposes\":[{\"id\":\"\",\"version\":0}],\"floatingPurposesConsent\":[{\"extra_id\":\"\",\"type\":0,\"given_at\":null,\"version\":0}]},\"consentstring\":\"CPzBFAAPzBFAAACAKAFRDUCoAAAAAH_AAAqIIzNF_H_dSSNj8X5_Yft0eY1P5dAz7uQxBhaJg6QFyBLEsJwXwmAIIEnqAKgKGBIEskJAIQBlCAHABUEAYIEBISGMAEAQIQAAJiAEEEERAmJICBBJG4AgEAIQglgCABQAgAsESFsoQMhAAIAABUJAAAgggIABAgAIBDAAQAAAAAAAAgAAEAAAAAAAAAAEABBHYAkw1LiABsiAkJpAwigRAjCIICKBQAAACQMEAACQIAlBGASgwAQAgRQAEBAAAAFEAAAAAAIAEIAAgACBAABAIBAAAABAAAAAQAAAgAIAQAAAABADAEAABAAAAAAACAECEIAAIACAgAAgAEAIAAAAAAIBAIBAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAgAAAA.YAAAAAAAAAAA\",\"consentstringUpdatedAt\":{}}"],["acceptedCookiesAt","$now$"],["am-last-cookie-acceptance","$now$"],["cookie_setting","{\"analytical_cookies\":false,\"functional_cookies\":true}"],["cookieNotification","{\"value\":\"1\"}"],["solvia-consents","{\"tec\":true,\"pers\":false,\"ana\":false,\"publi\":false}"],["COOKIE_CONSENT","\"TECHNICAL_SELECTED\""],["persist:privacy","{\"allowExternalContent\":\"false\",\"allowTracking\":\"false\",\"allowFunctionalCookies\":\"true\",\"allowRequiredCookies\":\"true\",\"showConsentBanner\":\"false\",\"_persist\":\"{\\\"version\\\":-1,\\\"rehydrated\\\":true}\"}"],["consents","{\"*\":true}"],["cookieSettings","{\"fullOptIn\":false,\"googleAnalytics\":false,\"facebookTrackingPixel\":false,\"googleAds\":false}"],["CookiesConsent","{\"necessary\":true,\"functional\":true}"],["aw-thirds","{\"mode\":\"forced-choice\",\"google_analytics\":\"deny\",\"google_tag_manager\":\"deny\",\"facebook_pixel\":\"deny\",\"linkedin\":\"deny\",\"youtube\":\"allow\",\"google_maps\":\"allow\"}"],["lms_cookies","nk9jfSLYwDn7O5xP0UhgFw=="],["partner-cookies","{\"value\":{\"isAnalyticsCookies\":false,\"isFunctionalCookies\":true}}"],["consents","{\"device\":false,\"personalizedContent\":false,\"googleAdsense\":false,\"googleRecaptcha\":false,\"youtube\":true}"],["dtm-cookie-banner","decline"],["cookieConsent","{\"created\":\"1\",\"versionNumber\":2,\"consents\":[{\"type\":\"ANALYTICS_STORAGE\",\"status\":\"DENIED\"},{\"type\":\"AD_STORAGE\",\"status\":\"DENIED\"},{\"type\":\"AD_USER_DATA\",\"status\":\"DENIED\"},{\"type\":\"AD_PERSONALIZATION\",\"status\":\"DENIED\"}],\"gtmParams\":{\"analytics_storage\":\"granted\",\"ad_storage\":\"denied\",\"ad_user_data\":\"denied\",\"ad_personalization\":\"denied\"}}"],["ccm_consent","{\"/\":{\"gen\":2,\"ucid\":\"1\",\"consent\":true,\"embeddings\":[\"1e76acf\",\"8ed8d9a\",\"b429e86\",\"f22e6ed\",\"0b25af3\",\"6079a42\"],\"created\":\"$currentDate$\",\"updated\":\"$currentDate$\",\"clickedButton\":\"acceptAll\",\"iframeConsentDomains\":[],\"tcf\":{\"p\":[],\"lip\":[],\"sf\":[],\"v\":[],\"liv\":[],\"gad\":[]},\"lang\":\"de_DE\"}}"],["userConsents","{\"functional-technology\":true}"],["gtagConsents","{\"ad_personalization\":\"denied\",\"analytics_storage\":\"denied\",\"ad_user_data\":\"denied\",\"ad_storage\":\"denied\"}"],["speedtestUI.Consent","{\"analytics\":false,\"bugReports\":false,\"timestamp\":\"$currentISODate$\"}"],["consentMode","{\"functionality_storage\":\"granted\",\"security_storage\":\"granted\",\"ad_storage\":\"denied\",\"analytics_storage\":\"denied\",\"ad_personalization\":\"denied\",\"ad_user_data\":\"denied\"}"],["cookieConsent","{\"requiredCookies\":true,\"functionality\":true,\"advertisingAndRetargeting\":false,\"analytics\":false}"],["acceptedCookies","{\"\":false,\"AMCV_###@AdobeOrg /\":true,\"AMCVS_###@AdobeOrg\":true,\"APISID, HSID, SAPISID, SID ja SSID cookies\":true,\"(auch GTM)\":true,\"NID cookie\":true,\"SIDCC cookie\":true,\"Youtube cookies\":true,\"mbox\":true,\"consent_adform\":false,\"consent_adobeanalytics\":false,\"consent_adobetarget\":false,\"consent_googleanalytics\":false,\"consent_googleads\":false,\"consent_facebook\":false,\"consent_giosg\":false,\"consent_nid\":true}"],["userTrackingConsent","{\"necessary\":true,\"marketing\":false}"],["privacy_preferences_2024-04","{\"required\":true,\"functional\":false,\"analytics\":false,\"marketing\":false}"],["COOKIES_CONSENTS","{\"marketingAndStatistics\":false,\"personalization\":false,\"at\":1}"],["cookieformData","option0=1&analytical=0&performance=0&targeting=0&functional=0&marketing=0"],["lib-cookieconsent","[]"],["lib-cookieconsent-expire","1870726742772"],["procookie-dismissed","$now$"],["procookie-services","[\"cookie_notice\"]"],["consent","{\"version\":1,\"consent\":{\"essential\":\"1\",\"analytics\":0,\"marketing\":0,\"external\":\"1\"}}"],["consentMode","{\"functionality_storage\":\"denied\",\"security_storage\":\"denied\",\"ad_storage\":\"denied\",\"analytics_storage\":\"denied\",\"preferences_storage\":\"denied\"}"],["cookieMonster","war schon da"],["consentMode","{\"ad_storage\":\"denied\",\"analytics_storage\":\"denied\",\"functionality_storage\":\"denied\"}"],["partner-cookies","{\"value\":{\"isAnalyticsCookies\":false,\"isFunctionalCookies\":false},\"expireIn\":1868839599999}"],["iracingCookieSettings","{\"performance-cookies\":false,\"functional-cookies\":false,\"marketing-cookies\":false}"],["cookieSettings","\"{\\\"necessary\\\":true,\\\"functional\\\":false,\\\"performance\\\":false,\\\"targeting\\\":false}\""],["userAgreeOfCookieOfData","{\"isUserAgreeCollectionOfCookies\":true,\"userConsentDataStorageTime\":1}"],["cookieConsent","{\"functional\":true,\"statistical\":false,\"marketing\":false}"],["cookiefirst-consent","{\"necessary\":true,\"performance\":false,\"functional\":false,\"advertising\":false,\"timestamp\":1,\"type\":\"category\",\"version\":\"1\"}"],["CXAgreeTerms","{\"agreed\":true}"],["cookiePrefs","{\"cookies.notice.actioned\":true,\"cookies.marketing.accepted\":false,\"cookies.usage.accepted\":false}"],["consent","\"granted\""],["consentMode","{\"functionality_storage\":\"granted\",\"security_storage\":\"granted\",\"analytics_storage\":\"denied\",\"personalization_storage\":\"granted\",\"ad_storage\":\"denied\",\"ad_user_data\":\"denied\",\"ad_personalization\":\"denied\"}"],["consentSettings","{\"essential\":true,\"embeds\":true}"]];

const hostnamesMap = new Map([["express.co.uk",0],["carvertical.com",1],["easyfind.ch",2],["dlnews.com",3],["komoot.com",4],["komoot.de",4],["screen.studio",5],["vivantis-shop.at",6],["krasa.cz",6],["spv.no",7],["vr.fi",8],["forums.tomsguide.com",[9,10]],["online.depo-diy.ee",11],["auf1.tv",12],["steuerbot.com",13],["vadhander.hogakusten.com",14],["vadhander.kramfors.se",14],["monkeytype.com",15],["wesendit.com",16],["onelink.to",17],["linasmatkasse.se",18],["veikkaus.fi",19],["app.solit-kapital.de",20],["lachainemeteo.com",21],["alan.com",22],["primor.eu",23],["manta.net",24],["login.flex.paychex.com",25],["solvia.es",26],["terviseportaal.ee",27],["vreden.de",28],["if-cdn.com",29],["cnmaarthouse.de",30],["adventisten.de",31],["hopetv.de",31],["soprema.es",32],["luminousindia.com",33],["21vek.by",[34,56,57]],["screenflash.io",35],["salomon.com",36],["auto.nl",37],["eurobaustoff.com",38],["weather.com",39],["wedding.pl",40],["speedtest.vodafone.de",41],["interactivebrokers.com",42],["florence.com.tr",43],["bestdrive.fi",44],["bestdrive.no",44],["crumblcookies.com",45],["aelia.pl",46],["erli.pl",47],["superwatchman.com",48],["ebz-business-school.de",[51,52]],["germany.travel",53],["townsmith.de",54],["pointomega.de",55],["iracing.com",58],["passes.com",59],["puravita.ch",60],["slankmetlinda.nl",61],["choircompany.nl",61],["capaciteitentestoefenen.com",61],["thehuddle.nl",61],["borgch.nl",61],["mcnetiq.nl",61],["gasterijkruisberg.nl",61],["skinnyminds.nl",61],["dewit-elektro.nl",61],["enluse.com",61],["back2front.be",61],["fortressgroup.nl",61],["wel-com.nl",61],["huispromotie.nl",61],["automathoogeveen.nl",61],["icverpleegkundige.com",61],["jenrmarketing.nl",61],["technotrafficcontrol.nl",61],["iclas.org",61],["evac.nl",62],["clipix.com",63],["signalrgb.com",64],["beatsperminuteonline.com",65],["tavaratalohurrikaani.fi",66],["ioplus.nl",67]]);

const entitiesMap = new Map([["vivantis",6],["statech",[49,50]]]);

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
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
} catch {
}
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
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_trustedSetLocalStorageItem();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
