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
(function uBOL_trustedClickElement() {

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '',
    delay = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-click-element', selectors, extraMatch, delay);

    if ( extraMatch !== '' ) {
        const assertions = safe.String_split.call(extraMatch, ',').map(s => {
            const pos1 = s.indexOf(':');
            const s1 = pos1 !== -1 ? s.slice(0, pos1) : s;
            const not = s1.startsWith('!');
            const type = not ? s1.slice(1) : s1;
            const s2 = pos1 !== -1 ? s.slice(pos1+1).trim() : '';
            if ( s2 === '' ) { return; }
            const out = { not, type };
            const match = /^\/(.+)\/(i?)$/.exec(s2);
            if ( match !== null ) {
                out.re = new RegExp(match[1], match[2] || undefined);
                return out;
            }
            const pos2 = s2.indexOf('=');
            const key = pos2 !== -1 ? s2.slice(0, pos2).trim() : s2;
            const value = pos2 !== -1 ? s2.slice(pos2+1).trim() : '';
            out.re = new RegExp(`^${this.escapeRegexChars(key)}=${this.escapeRegexChars(value)}`);
            return out;
        }).filter(details => details !== undefined);
        const allCookies = assertions.some(o => o.type === 'cookie')
            ? getAllCookiesFn()
            : [];
        const allStorageItems = assertions.some(o => o.type === 'localStorage')
            ? getAllLocalStorageFn()
            : [];
        const hasNeedle = (haystack, needle) => {
            for ( const { key, value } of haystack ) {
                if ( needle.test(`${key}=${value}`) ) { return true; }
            }
            return false;
        };
        for ( const { not, type, re } of assertions ) {
            switch ( type ) {
            case 'cookie':
                if ( hasNeedle(allCookies, re) === not ) { return; }
                break;
            case 'localStorage':
                if ( hasNeedle(allStorageItems, re) === not ) { return; }
                break;
            }
        }
    }

    const getShadowRoot = elem => {
        // Firefox
        if ( elem.openOrClosedShadowRoot ) {
            return elem.openOrClosedShadowRoot;
        }
        // Chromium
        if ( typeof chrome === 'object' ) {
            if ( chrome.dom && chrome.dom.openOrClosedShadowRoot ) {
                return chrome.dom.openOrClosedShadowRoot(elem);
            }
        }
        return null;
    };

    const querySelectorEx = (selector, context = document) => {
        const pos = selector.indexOf(' >>> ');
        if ( pos === -1 ) { return context.querySelector(selector); }
        const outside = selector.slice(0, pos).trim();
        const inside = selector.slice(pos + 5).trim();
        const elem = context.querySelector(outside);
        if ( elem === null ) { return null; }
        const shadowRoot = getShadowRoot(elem);
        return shadowRoot && querySelectorEx(inside, shadowRoot);
    };

    const selectorList = safe.String_split.call(selectors, /\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch {
                return false;
            }
            return true;
        });
    if ( selectorList.length === 0 ) { return; }

    const clickDelay = parseInt(delay, 10) || 1;
    const t0 = Date.now();
    const tbye = t0 + 10000;
    let tnext = selectorList.length !== 1 ? t0 : t0 + clickDelay;

    const terminate = ( ) => {
        selectorList.length = 0;
        next.stop();
        observe.stop();
    };

    const next = notFound => {
        if ( selectorList.length === 0 ) {
            safe.uboLog(logPrefix, 'Completed');
            return terminate();
        }
        const tnow = Date.now();
        if ( tnow >= tbye ) {
            safe.uboLog(logPrefix, 'Timed out');
            return terminate();
        }
        if ( notFound ) { observe(); }
        const delay = Math.max(notFound ? tbye - tnow : tnext - tnow, 1);
        next.timer = setTimeout(( ) => {
            next.timer = undefined;
            process();
        }, delay);
        safe.uboLog(logPrefix, `Waiting for ${selectorList[0]}...`);
    };
    next.stop = ( ) => {
        if ( next.timer === undefined ) { return; }
        clearTimeout(next.timer);
        next.timer = undefined;
    };

    const observe = ( ) => {
        if ( observe.observer !== undefined ) { return; }
        observe.observer = new MutationObserver(( ) => {
            if ( observe.timer !== undefined ) { return; }
            observe.timer = setTimeout(( ) => {
                observe.timer = undefined;
                process();
            }, 20);
        });
        observe.observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    };
    observe.stop = ( ) => {
        if ( observe.timer !== undefined ) {
            clearTimeout(observe.timer);
            observe.timer = undefined;
        }
        if ( observe.observer ) {
            observe.observer.disconnect();
            observe.observer = undefined;
        }
    };

    const process = ( ) => {
        next.stop();
        if ( Date.now() < tnext ) { return next(); }
        const selector = selectorList.shift();
        if ( selector === undefined ) { return terminate(); }
        const elem = querySelectorEx(selector);
        if ( elem === null ) {
            selectorList.unshift(selector);
            return next(true);
        }
        safe.uboLog(logPrefix, `Clicked ${selector}`);
        elem.click();
        tnext += clickDelay;
        next();
    };

    runAtHtmlElementFn(process);
}

function getAllCookiesFn() {
    const safe = safeSelf();
    return safe.String_split.call(document.cookie, /\s*;\s*/).map(s => {
        const pos = s.indexOf('=');
        if ( pos === 0 ) { return; }
        if ( pos === -1 ) { return `${s.trim()}=`; }
        const key = s.slice(0, pos).trim();
        const value = s.slice(pos+1).trim();
        return { key, value };
    }).filter(s => s !== undefined);
}

function getAllLocalStorageFn(which = 'localStorage') {
    const storage = self[which];
    const out = [];
    for ( let i = 0; i < storage.length; i++ ) {
        const key = storage.key(i);
        const value = storage.getItem(key);
        return { key, value };
    }
    return out;
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button#CybotCookiebotDialogBodyButtonDecline"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["theguardian.com",7],["bloomberg.com",[8,9]],["forbes.com",[8,73]],["nike.com",8],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,179]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,175]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["cdn.privacy-mgmt.com",[24,25,43,45,46,47,48,93,95,103,110,117,118,119,130,131,132,135,137,138,140,151,168,193,212,225,226,229,230,231,232,249,298,460,583,604,642,660]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,176]],["ubereats.com",[39,176]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["ilgiornale.it",44],["telekom.com",49],["telekom.de",49],["abola.pt",50],["flytap.com",50],["ansons.de",50],["blick.ch",50],["buienradar.be",50],["crunchyroll.com",50],["digi24.ro",50],["digisport.ro",50],["digitalfoundry.net",50],["egx.net",50],["emirates.com",50],["eurogamer.it",50],["foto-erhardt.de",50],["gmx.*",50],["kizi.com",50],["mail.com",50],["mcmcomiccon.com",50],["nachrichten.at",50],["nintendolife.com",50],["oe24.at",50],["paxsite.com",50],["peacocktv.com",50],["player.pl",50],["plus500.*",50],["pricerunner.com",50],["pricerunner.se",50],["pricerunner.dk",50],["proximus.be",[50,637]],["proximus.com",50],["purexbox.com",50],["pushsquare.com",50],["rugbypass.com",50],["southparkstudios.com",50],["southwest.com",50],["starwarscelebration.com",50],["sweatybetty.com",50],["theaa.ie",50],["thehaul.com",50],["timeextension.com",50],["travelandleisure.com",50],["tunein.com",50],["uefa.com",50],["videoland.com",50],["wizzair.com",50],["wetter.at",50],["dicebreaker.com",[51,52]],["eurogamer.es",[51,52]],["eurogamer.net",[51,52]],["eurogamer.nl",[51,52]],["eurogamer.pl",[51,52]],["eurogamer.pt",[51,52]],["gamesindustry.biz",[51,52]],["reedpop.com",[51,52]],["rockpapershotgun.com",[51,52]],["thepopverse.com",[51,52]],["vg247.com",[51,52]],["videogameschronicle.com",[51,52]],["eurogamer.de",53],["roadtovr.com",54],["jotex.*",54],["mundodeportivo.com",[55,125]],["m.youtube.com",56],["www.youtube.com",56],["ohra.nl",57],["corriere.it",58],["gazzetta.it",58],["oggi.it",58],["cmp.sky.it",59],["tennisassa.fi",60],["formula1.com",61],["f1racing.pl",62],["music.amazon.*",[63,64]],["consent-pref.trustarc.com",65],["highlights.legaseriea.it",66],["calciomercato.com",66],["sosfanta.com",67],["chrono24.*",[68,69]],["wetter.com",70],["youmath.it",71],["pip.gov.pl",72],["dailybuzz.nl",74],["bnn.de",74],["dosenbach.ch",74],["dw.com",74],["kinepolis.*",74],["mediaite.com",74],["nzz.ch",74],["winfuture.de",74],["lippu.fi",74],["racingnews365.com",74],["reifendirekt.ch",74],["vaillant.*",74],["bauhaus.no",75],["bauhaus.se",75],["beko-group.de",75],["billiger.de",75],["burda.com",75],["vanharen.nl",75],["deichmann.com",[75,98,468]],["meraluna.de",75],["slashdot.org",75],["hermann-saunierduval.it",75],["protherm.cz",75],["saunierduval.es",75],["protherm.sk",75],["protherm.ua",75],["saunierduval.hu",75],["saunierduval.ro",75],["saunierduval.at",75],["awb.nl",75],["spar.hu",76],["group.vattenfall.com",76],["mediaset.it",77],["fortune.com",78],["ilrestodelcarlino.it",79],["quotidiano.net",79],["lanazione.it",79],["ilgiorno.it",79],["iltelegrafolivorno.it",79],["auto.it",80],["beauxarts.com",80],["beinsports.com",80],["bfmtv.com",[80,126]],["boursobank.com",80],["boursorama.com",[80,126]],["boursier.com",[80,219]],["brut.media",80],["canalplus.com",80],["decathlon.fr",[80,216]],["diverto.tv",80],["eden-park.com",80],["foodvisor.io",80],["frandroid.com",80],["jobijoba.*",80],["hotelsbarriere.com",80],["intersport.*",[80,190]],["idealista.it",80],["o2.fr",80],["lejdd.fr",[80,125]],["lechorepublicain.fr",80],["la-croix.com",80],["linfo.re",80],["lamontagne.fr",80],["laredoute.fr",80],["largus.fr",80],["leprogres.fr",80],["lesnumeriques.com",80],["libramemoria.com",80],["lopinion.fr",80],["marieclaire.fr",80],["maville.com",80],["michelin.*",80],["midilibre.fr",[80,664]],["meteofrance.com",80],["mondialtissus.fr",80],["orange.fr",80],["orpi.com",80],["oscaro.com",80],["ouest-france.fr",[80,94,126,665]],["parismatch.com",80],["pagesjaunes.fr",80],["programme-television.org",[80,126]],["publicsenat.fr",[80,126]],["rmcbfmplay.com",[80,126]],["science-et-vie.com",[80,125]],["seloger.com",80],["societe.com",80],["suzuki.fr",80],["sudouest.fr",80],["web-agri.fr",80],["nutri-plus.de",81],["americanairlines.*",82],["consent.capital.fr",83],["consent.programme.tv",83],["consent.voici.fr",83],["programme-tv.net",83],["cmpv2.finn.no",84],["cmp.tek.no",[85,86]],["cmp.e24.no",[85,86]],["minmote.no",[85,86]],["cmp.vg.no",[85,86]],["cloud.google.com",87],["developer.android.com",87],["registry.google",87],["safety.google",87],["huffingtonpost.fr",88],["rainews.it",89],["remarkable.com",90],["netzwelt.de",91],["money.it",92],["allocine.fr",94],["jeuxvideo.com",94],["ozap.com",94],["le10sport.com",94],["xataka.com",94],["cmp.fitbook.de",95],["cmp.autobild.de",95],["sourcepoint.sport.de",95],["cmp-sp.tagesspiegel.de",95],["cmp.bz-berlin.de",95],["cmp.cicero.de",95],["cmp.techbook.de",95],["cmp.stylebook.de",95],["cmp2.bild.de",95],["cmp2.freiepresse.de",95],["sourcepoint.wetter.de",95],["consent.finanzen.at",95],["consent.finanzen.net",95],["consent.up.welt.de",95],["sourcepoint.n-tv.de",95],["sourcepoint.kochbar.de",95],["sourcepoint.rtl.de",95],["cmp.computerbild.de",95],["cmp.petbook.de",95],["cmp-sp.siegener-zeitung.de",95],["cmp-sp.sportbuzzer.de",95],["klarmobil.de",95],["technikum-wien.at",96],["eneco.nl",97],["salomon.com",99],["blackpoolgazette.co.uk",100],["lep.co.uk",100],["northamptonchron.co.uk",100],["scotsman.com",100],["shieldsgazette.com",100],["thestar.co.uk",100],["portsmouth.co.uk",100],["sunderlandecho.com",100],["northernirelandworld.com",100],["3addedminutes.com",100],["anguscountyworld.co.uk",100],["banburyguardian.co.uk",100],["bedfordtoday.co.uk",100],["biggleswadetoday.co.uk",100],["bucksherald.co.uk",100],["burnleyexpress.net",100],["buxtonadvertiser.co.uk",100],["chad.co.uk",100],["daventryexpress.co.uk",100],["derbyshiretimes.co.uk",100],["derbyworld.co.uk",100],["derryjournal.com",100],["dewsburyreporter.co.uk",100],["doncasterfreepress.co.uk",100],["falkirkherald.co.uk",100],["fifetoday.co.uk",100],["glasgowworld.com",100],["halifaxcourier.co.uk",100],["harboroughmail.co.uk",100],["harrogateadvertiser.co.uk",100],["hartlepoolmail.co.uk",100],["hemeltoday.co.uk",100],["hucknalldispatch.co.uk",100],["lancasterguardian.co.uk",100],["leightonbuzzardonline.co.uk",100],["lincolnshireworld.com",100],["liverpoolworld.uk",100],["londonworld.com",100],["lutontoday.co.uk",100],["manchesterworld.uk",100],["meltontimes.co.uk",100],["miltonkeynes.co.uk",100],["newcastleworld.com",100],["newryreporter.com",100],["newsletter.co.uk",100],["northantstelegraph.co.uk",100],["northumberlandgazette.co.uk",100],["nottinghamworld.com",100],["peterboroughtoday.co.uk",100],["rotherhamadvertiser.co.uk",100],["stornowaygazette.co.uk",100],["surreyworld.co.uk",100],["thescarboroughnews.co.uk",100],["thesouthernreporter.co.uk",100],["totallysnookered.com",100],["wakefieldexpress.co.uk",100],["walesworld.com",100],["warwickshireworld.com",100],["wigantoday.net",100],["worksopguardian.co.uk",100],["yorkshireeveningpost.co.uk",100],["yorkshirepost.co.uk",100],["eurocard.com",101],["saseurobonusmastercard.se",102],["tver.jp",104],["linkedin.com",105],["elmundo.es",[106,126]],["expansion.com",106],["s-pankki.fi",107],["srf.ch",107],["alternate.de",107],["bayer04.de",107],["douglas.de",107],["dr-beckmann.com",107],["falke.com",107],["fitnessfirst.de",107],["flaschenpost.de",107],["gloeckle.de",107],["hornbach.nl",107],["hypofriend.de",107],["lactostop.de",107],["neumann.com",107],["post.ch",107],["postbank.de",107],["rts.ch",107],["immowelt.de",108],["joyn.*",108],["morenutrition.de",108],["mapillary.com",109],["cmp.seznam.cz",111],["marca.com",112],["raiplay.it",113],["raiplaysound.it",113],["derstandard.at",114],["derstandard.de",114],["faz.net",114],["automoto.it",115],["ansa.it",115],["delladio.it",115],["huffingtonpost.it",115],["internazionale.it",115],["lastampa.it",115],["macitynet.it",115],["moto.it",115],["movieplayer.it",115],["multiplayer.it",115],["repubblica.it",115],["tomshw.it",115],["skuola.net",115],["spaziogames.it",115],["tuttoandroid.net",115],["tuttotech.net",115],["ilgazzettino.it",116],["ilmessaggero.it",116],["ilsecoloxix.it",116],["privacy.motorradonline.de",119],["consent.watson.de",119],["consent.kino.de",119],["consent.desired.de",119],["cmpv2.fn.de",119],["spp.nextpit.de",119],["dailystar.co.uk",[120,121,122,123]],["mirror.co.uk",[120,121,122,123]],["idnes.cz",124],["20minutes.fr",125],["20minutos.es",125],["24sata.hr",125],["abc.es",125],["actu.fr",125],["antena3.com",125],["antena3internacional.com",125],["atresmedia.com",125],["atresmediapublicidad.com",125],["atresmediastudios.com",125],["atresplayer.com",125],["autopista.es",125],["belfasttelegraph.co.uk",125],["bemad.es",125],["bonduelle.it",125],["bonniernews.se",125],["bt.se",125],["cadenadial.com",125],["caracol.com.co",125],["cas.sk",125],["charentelibre.fr",125],["ciclismoafondo.es",125],["cnews.fr",125],["cope.es",125],["correryfitness.com",125],["courrier-picard.fr",125],["cuatro.com",125],["decathlon.nl",125],["decathlon.pl",125],["di.se",125],["diariocordoba.com",125],["diariodenavarra.es",125],["diariosur.es",125],["diariovasco.com",125],["diepresse.com",125],["divinity.es",125],["dn.se",125],["dnevnik.hr",125],["dumpert.nl",125],["ebuyclub.com",125],["edreams.de",125],["edreams.net",125],["elcomercio.es",125],["elconfidencial.com",125],["elcorreo.com",125],["eldesmarque.com",125],["eldiario.es",125],["eldiariomontanes.es",125],["elespanol.com",125],["elle.fr",125],["elpais.com",125],["elperiodico.com",125],["elperiodicodearagon.com",125],["elplural.com",125],["energytv.es",125],["engadget.com",125],["es.ara.cat",125],["euronews.com",125],["europafm.com",125],["expressen.se",125],["factoriadeficcion.com",125],["filmstarts.de",125],["flooxernow.com",125],["folkbladet.nu",125],["footmercato.net",125],["france.tv",125],["france24.com",125],["fussballtransfers.com",125],["fyndiq.se",125],["ghacks.net",125],["gva.be",125],["hbvl.be",125],["heraldo.es",125],["hoy.es",125],["ideal.es",125],["idealista.pt",125],["krone.at",125],["kurier.at",125],["lacoste.com",125],["ladepeche.fr",125],["lalibre.be",125],["lanouvellerepublique.fr",125],["larazon.es",125],["lasexta.com",125],["lasprovincias.es",125],["latribune.fr",125],["lavanguardia.com",125],["laverdad.es",125],["lavozdegalicia.es",125],["leboncoin.fr",125],["lecturas.com",125],["ledauphine.com",125],["lejsl.com",125],["leparisien.fr",125],["lesoir.be",125],["letelegramme.fr",125],["libremercado.com",125],["los40.com",125],["lotoquebec.com",125],["lunion.fr",125],["m6.fr",125],["marianne.cz",125],["marmiton.org",125],["mediaset.es",125],["melodia-fm.com",125],["metronieuws.nl",125],["moviepilot.de",125],["mtmad.es",125],["multilife.com.pl",125],["naszemiasto.pl",125],["nationalgeographic.com.es",125],["nicematin.com",125],["nieuwsblad.be",125],["notretemps.com",125],["numerama.com",125],["okdiario.com",125],["ondacero.es",125],["podiumpodcast.com",125],["portail.lotoquebec.com",125],["profil.at",125],["public.fr",125],["publico.es",125],["radiofrance.fr",125],["rankia.com",125],["rfi.fr",125],["rossmann.pl",125],["rtbf.be",[125,216]],["rtl.lu",125],["sensacine.com",125],["sfgame.net",125],["shure.com",125],["silicon.es",125],["sncf-connect.com",125],["sport.es",125],["sydsvenskan.se",125],["techcrunch.com",125],["telegraaf.nl",125],["telequebec.tv",125],["tf1.fr",125],["tradingsat.com",125],["trailrun.es",125],["video-streaming.orange.fr",125],["xpress.fr",125],["ivoox.com",126],["as.com",126],["slam.nl",126],["bienpublic.com",126],["funradio.fr",126],["gamepro.de",[126,187,188]],["lemon.fr",126],["lexpress.fr",126],["shadow.tech",126],["letemps.ch",126],["mein-mmo.de",126],["heureka.sk",126],["film.at",126],["dhnet.be",126],["lesechos.fr",[126,221]],["marianne.net",[126,216]],["jeanmarcmorandini.com",[126,217]],["dna.fr",126],["sudinfo.be",126],["europe1.fr",[126,217]],["rtl.be",[126,216]],["reviewingthebrew.com",126],["jaysjournal.com",126],["reignoftroy.com",126],["ryobitools.eu",[127,128]],["americanexpress.com",129],["consent.radiotimes.com",132],["sp-consent.szbz.de",133],["cmp.omni.se",134],["cmp.svd.se",134],["cmp.aftonbladet.se",134],["cmp.tv.nu",134],["consent.economist.com",136],["studentagency.cz",136],["cmpv2.foundryco.com",137],["cmpv2.infoworld.com",137],["cmpv2.arnnet.com.au",137],["sp-cdn.pcgames.de",138],["sp-cdn.pcgameshardware.de",138],["consentv2.sport1.de",138],["cmp.mz.de",138],["cmpv2.tori.fi",139],["consent.spielaffe.de",141],["bondekompaniet.no",142],["degiro.*",142],["epochtimes.de",142],["vikingline.com",142],["tfl.gov.uk",142],["drklein.de",142],["hildegardis-krankenhaus.de",142],["kleer.se",142],["lekiaviation.com",142],["lotto.pl",142],["mineralstech.com",142],["volunteer.digitalboost.org.uk",142],["starhotels.com",142],["tefl.com",142],["universumglobal.com",142],["tui.com",143],["rexel.*",144],["csob.sk",145],["greenstuffworld.com",146],["morele.net",[147,148]],["1und1.de",149],["infranken.de",150],["cmp.bunte.de",151],["cmp.chip.de",151],["cmp.focus.de",[151,494]],["estadiodeportivo.com",152],["tameteo.*",152],["tempo.pt",152],["meteored.*",152],["pogoda.com",152],["yourweather.co.uk",152],["tempo.com",152],["theweather.net",152],["tiempo.com",152],["ilmeteo.net",152],["daswetter.com",152],["kicker.de",153],["formulatv.com",154],["web.de",155],["lefigaro.fr",156],["linternaute.com",157],["consent.caminteresse.fr",158],["volksfreund.de",159],["rp-online.de",159],["dailypost.co.uk",160],["the-express.com",160],["vide-greniers.org",160],["bluray-disc.de",161],["elio-systems.com",161],["stagatha-fachklinik.de",161],["tarife.mediamarkt.de",161],["lz.de",161],["gaggenau.com",161],["saturn.de",162],["eltiempo.es",[163,164]],["otempo.pt",165],["atlasformen.*",166],["cmp-sp.goettinger-tageblatt.de",167],["cmp-sp.saechsische.de",167],["cmp-sp.ln-online.de",167],["cz.de",167],["dewezet.de",167],["dnn.de",167],["haz.de",167],["gnz.de",167],["landeszeitung.de",167],["lvz.de",167],["maz-online.de",167],["ndz.de",167],["op-marburg.de",167],["ostsee-zeitung.de",167],["paz-online.de",167],["reisereporter.de",167],["rga.de",167],["rnd.de",167],["siegener-zeitung.de",167],["sn-online.de",167],["solinger-tageblatt.de",167],["sportbuzzer.de",167],["szlz.de",167],["tah.de",167],["torgauerzeitung.de",167],["waz-online.de",167],["privacy.maennersache.de",167],["sinergy.ch",169],["agglo-valais-central.ch",169],["biomedcentral.com",170],["hsbc.*",171],["hsbcnet.com",171],["hsbcinnovationbanking.com",171],["create.hsbc",171],["gbm.hsbc.com",171],["hsbc.co.uk",172],["internationalservices.hsbc.com",172],["history.hsbc.com",172],["about.hsbc.co.uk",173],["privatebanking.hsbc.com",174],["independent.co.uk",177],["privacy.crash.net",177],["the-independent.com",178],["argos.co.uk",180],["poco.de",[181,182]],["moebelix.*",181],["moemax.*",181],["xxxlutz.*",181],["xxxlesnina.*",181],["moebel24.ch",182],["meubles.fr",182],["meubelo.nl",182],["moebel.de",182],["lipo.ch",183],["schubiger.ch",184],["aedt.de",185],["berlin-live.de",185],["connect.de",185],["gutefrage.net",185],["insideparadeplatz.ch",185],["morgenpost.de",185],["play3.de",185],["thueringen24.de",185],["pdfupload.io",186],["gamestar.de",[187,188,225]],["verksamt.se",189],["acmemarkets.com",190],["amtrak.com",190],["beko.com",190],["bepanthen.com.au",190],["berocca.com.au",190],["booking.com",190],["carrefour.fr",190],["centrum.sk",190],["claratyne.com.au",190],["credit-suisse.com",190],["ceskatelevize.cz",190],["deporvillage.*",190],["de.vanguard",190],["dhl.de",190],["digikey.*",190],["drafthouse.com",190],["dunelm.com",190],["eurosport.fr",190],["fello.se",190],["fielmann.*",190],["flashscore.fr",190],["flightradar24.com",190],["fnac.es",190],["foodandwine.com",190],["fourseasons.com",190],["khanacademy.org",190],["konami.com",190],["jll.*",190],["jobs.redbull.com",190],["hellenicbank.com",190],["gemini.pl",190],["groceries.asda.com",190],["lamborghini.com",190],["menshealth.com",190],["n26.com",190],["nintendo.com",190],["nokia.com",190],["oneweb.net",190],["omnipod.com",190],["oralb.*",190],["panasonic.com",190],["parkside-diy.com",190],["pluto.tv",190],["popularmechanics.com",190],["polskieradio.pl",190],["pringles.com",190],["radissonhotels.com",190],["ricardo.ch",190],["rockstargames.com",190],["rte.ie",190],["salesforce.com",190],["samsonite.*",190],["spiele.heise.de",190],["spirit.com",190],["stenaline.co.uk",190],["swisscom.ch",190],["swisspass.ch",190],["technologyfromsage.com",190],["telenet.be",190],["tntsports.co.uk",190],["theepochtimes.com",190],["toujeo.com",190],["uber-platz.de",190],["questdiagnostics.com",190],["wallapop.com",190],["wickes.co.uk",190],["workingtitlefilms.com",190],["vattenfall.de",190],["winparts.fr",190],["yoigo.com",190],["zoominfo.com",190],["allegiantair.com",191],["hallmarkchannel.com",191],["incorez.com",191],["noovle.com",191],["otter.ai",191],["plarium.com",191],["telsy.com",191],["timenterprise.it",191],["tim.it",191],["tradersunion.com",191],["fnac.*",191],["yeti.com",191],["here.com",[192,673]],["vodafone.com",192],["cmp.heise.de",194],["cmp.am-online.com",194],["cmp.motorcyclenews.com",194],["consent.newsnow.co.uk",194],["cmp.todays-golfer.com",194],["spp.nextpit.com",194],["koeser.com",195],["shop.schaette-pferd.de",195],["schaette.de",195],["central-bb.de",196],["fitnessfoodcorner.de",197],["kuehlungsborn.de",198],["espressocoffeeshop.com",199],["brainmarket.pl",200],["getroots.app",201],["cart-in.re",[202,600]],["prestonpublishing.pl",203],["zara.com",204],["lepermislibre.fr",204],["negociardivida.spcbrasil.org.br",205],["adidas.*",206],["privacy.topreality.sk",207],["privacy.autobazar.eu",207],["vu.lt",208],["adnkronos.com",[209,210]],["cornwalllive.com",[209,210]],["cyprus-mail.com",[209,210]],["einthusan.tv",[209,210]],["informazione.it",[209,210]],["mymovies.it",[209,210]],["tuttoeuropei.com",[209,210]],["video.lacnews24.it",[209,210]],["protothema.gr",209],["flash.gr",209],["taxscouts.com",211],["online.no",213],["telenor.no",213],["austrian.com",214],["lufthansa.com",214],["kampfkunst-herz.de",215],["glow25.de",215],["h-f.at",215],["hornetsecurity.com",215],["kayzen.io",215],["wasserkunst-hamburg.de",215],["zahnspange-oelde.de",215],["bnc.ca",216],["egora.fr",216],["engelvoelkers.com",216],["estrategiasdeinversion.com",216],["festo.com",216],["franceinfo.fr",216],["francebleu.fr",216],["francemediasmonde.com",216],["geny.com",216],["giphy.com",216],["idealista.com",216],["infolibre.es",216],["information.tv5monde.com",216],["ing.es",216],["knipex.de",216],["laprovence.com",216],["lemondeinformatique.fr",216],["libertaddigital.com",216],["mappy.com",216],["orf.at",216],["philibertnet.com",216],["researchgate.net",216],["standaard.be",216],["stroilioro.com",216],["taxfix.de",216],["telecinco.es",216],["vistaalegre.com",216],["zimbra.free.fr",216],["usinenouvelle.com",218],["reussir.fr",220],["bruendl.at",222],["latamairlines.com",223],["elisa.ee",224],["baseendpoint.brigitte.de",225],["baseendpoint.gala.de",225],["baseendpoint.haeuser.de",225],["baseendpoint.stern.de",225],["baseendpoint.urbia.de",225],["cmp.tag24.de",225],["cmp-sp.handelsblatt.com",225],["cmpv2.berliner-zeitung.de",225],["golem.de",225],["consent.t-online.de",225],["sp-consent.stuttgarter-nachrichten.de",226],["sp-consent.stuttgarter-zeitung.de",226],["regjeringen.no",227],["sp-manager-magazin-de.manager-magazin.de",228],["consent.11freunde.de",228],["centrum24.pl",233],["replay.lsm.lv",234],["ltv.lsm.lv",234],["bernistaba.lsm.lv",234],["verl.de",235],["cubo-sauna.de",235],["mbl.is",235],["auto-medienportal.net",235],["mobile.de",236],["cookist.it",237],["fanpage.it",237],["geopop.it",237],["lexplain.it",237],["royalmail.com",238],["gmx.net",239],["gmx.ch",240],["mojehobby.pl",241],["super-hobby.*",241],["sp.stylevamp.de",242],["cmp.wetteronline.de",242],["audi.*",243],["easyjet.com",243],["experian.co.uk",243],["postoffice.co.uk",243],["tescobank.com",243],["internetaptieka.lv",[244,245]],["wells.pt",246],["dskdirect.bg",247],["cmpv2.dba.dk",248],["spcmp.crosswordsolver.com",249],["ecco.com",250],["georgjensen.com",250],["thomann.*",251],["landkreis-kronach.de",252],["effectiefgeven.be",253],["northcoast.com",253],["chaingpt.org",253],["bandenconcurrent.nl",254],["bandenexpert.be",254],["reserved.com",255],["metro.it",256],["makro.es",256],["metro.sk",256],["metro-cc.hr",256],["makro.nl",256],["metro.bg",256],["metro.at",256],["metro-tr.com",256],["metro.de",256],["metro.fr",256],["makro.cz",256],["metro.ro",256],["makro.pt",256],["makro.pl",256],["sklepy-odido.pl",256],["rastreator.com",256],["metro.ua",257],["metro.rs",257],["metro-kz.com",257],["metro.md",257],["metro.hu",257],["metro-cc.ru",257],["metro.pk",257],["balay.es",258],["constructa.com",258],["dafy-moto.com",259],["akku-shop.nl",260],["akkushop-austria.at",260],["akkushop-b2b.de",260],["akkushop.de",260],["akkushop.dk",260],["batterie-boutique.fr",260],["akkushop-schweiz.ch",261],["evzuttya.com.ua",262],["eobuv.cz",262],["eobuwie.com.pl",262],["ecipele.hr",262],["eavalyne.lt",262],["chaussures.fr",262],["ecipo.hu",262],["eobuv.sk",262],["epantofi.ro",262],["epapoutsia.gr",262],["escarpe.it",262],["eschuhe.de",262],["obuvki.bg",262],["zapatos.es",262],["swedbank.ee",263],["mudanzavila.es",264],["bienmanger.com",265],["gesipa.*",266],["gesipausa.com",266],["beckhoff.com",266],["zitekick.dk",267],["eltechno.dk",267],["okazik.pl",267],["batteryempire.*",268],["maxi.rs",269],["garmin.com",270],["invisalign.*",270],["one4all.ie",270],["osprey.com",270],["wideroe.no",271],["bmw.*",272],["kijk.nl",273],["nordania.dk",274],["danskebank.*",274],["danskeci.com",274],["danica.dk",274],["dehn.*",275],["gewerbegebiete.de",276],["cordia.fr",277],["vola.fr",278],["lafi.fr",279],["skyscanner.*",280],["coolblue.*",281],["sanareva.*",282],["atida.fr",282],["bbva.*",283],["bbvauk.com",283],["expertise.unimi.it",284],["altenberg.de",285],["vestel.es",286],["tsb.co.uk",287],["buienradar.nl",[288,289]],["linsenplatz.de",290],["budni.de",291],["erstecardclub.hr",291],["teufel.de",[292,293]],["abp.nl",294],["simplea.sk",295],["flip.bg",296],["kiertokanki.com",297],["leirovins.be",299],["vias.be",300],["edf.fr",301],["virbac.com",301],["diners.hr",301],["squarehabitat.fr",301],["arbitrobancariofinanziario.it",302],["ivass.it",302],["economiapertutti.bancaditalia.it",302],["smit-sport.de",303],["gekko-computer.de",303],["jysk.al",304],["go-e.com",305],["malerblatt-medienservice.de",306],["architekturbuch.de",306],["medienservice-holz.de",306],["leuchtstark.de",306],["casius.nl",307],["coolinarika.com",308],["giga-hamburg.de",308],["vakgaragevannunen.nl",308],["fortuluz.es",308],["finna.fi",308],["eurogrow.es",308],["topnatur.cz",308],["topnatur.eu",308],["vakgarage.nl",308],["whufc.com",308],["zomaplast.cz",308],["envafors.dk",309],["dabbolig.dk",[310,311]],["daruk-emelok.hu",312],["exakta.se",313],["larca.de",314],["roli.com",315],["okazii.ro",316],["lr-shop-direkt.de",316],["portalprzedszkolny.pl",316],["tgvinoui.sncf",317],["l-bank.de",318],["interhyp.de",319],["indigoneo.*",320],["transparency.meta.com",321],["dojusagro.lt",322],["eok.ee",322],["kripa.it",322],["nextdaycatering.co.uk",322],["safran-group.com",322],["sr-ramenendeuren.be",322],["ilovefreegle.org",322],["tribexr.com",322],["understandingsociety.ac.uk",322],["bestbuycyprus.com",323],["strato.*",324],["strato-hosting.co.uk",324],["auto.de",325],["contentkingapp.com",326],["comune.palermo.it",327],["get-in-engineering.de",328],["spp.nextpit.es",329],["spp.nextpit.it",330],["spp.nextpit.com.br",331],["spp.nextpit.fr",332],["otterbox.com",333],["stoertebeker-brauquartier.com",334],["stoertebeker.com",334],["stoertebeker-eph.com",334],["aparts.pl",335],["sinsay.com",[336,337]],["benu.cz",338],["stockholmresilience.org",339],["ludvika.se",339],["kammarkollegiet.se",339],["cazenovecapital.com",340],["statestreet.com",341],["beopen.lv",342],["cesukoncertzale.lv",343],["dodo.fr",344],["pepper.it",345],["pepper.pl",345],["preisjaeger.at",345],["mydealz.de",345],["dealabs.com",345],["hotukdeals.com",345],["chollometro.com",345],["makelaarsland.nl",346],["bezirk-schwaben.de",347],["dorfen.de",347],["nutsinbulk.co.uk",348],["bricklink.com",349],["bestinver.es",350],["icvs2023.conf.tuwien.ac.at",351],["racshop.co.uk",[352,353]],["baabuk.com",354],["sapien.io",354],["tradedoubler.com",354],["app.lepermislibre.fr",355],["multioferta.es",356],["testwise.com",[357,358]],["tonyschocolonely.com",359],["fitplus.is",359],["fransdegrebber.nl",359],["lilliputpress.ie",359],["lexibo.com",359],["marin-milou.com",359],["dare2tri.com",359],["t3micro.*",359],["la-vie-naturelle.com",[360,361]],["inovelli.com",362],["uonetplus.vulcan.net.pl",[363,364]],["consent.helagotland.se",365],["oper.koeln",[366,367]],["deezer.com",368],["hoteldesartssaigon.com",369],["autoritedelaconcurrence.fr",370],["groupeonepoint.com",370],["geneanet.org",370],["carrieres.groupegalerieslafayette.com",370],["immo-banques.fr",370],["lingvanex.com",370],["turncamp.com",371],["ejobs.ro",[372,373]],["kupbilecik.*",[374,375]],["coolbe.com",376],["serienjunkies.de",377],["computerhoy.20minutos.es",378],["clickskeks.at",379],["clickskeks.de",379],["abt-sportsline.de",379],["exemplary.ai",380],["forbo.com",380],["stores.sk",380],["nerdstar.de",380],["prace.cz",380],["profesia.sk",380],["profesia.cz",380],["pracezarohem.cz",380],["atmoskop.cz",380],["seduo.sk",380],["seduo.cz",380],["teamio.com",380],["arnold-robot.com",380],["cvonline.lt",380],["cv.lv",380],["cv.ee",380],["dirbam.lt",380],["visidarbi.lv",380],["otsintood.ee",380],["webtic.it",380],["gerth.de",381],["pamiatki.pl",382],["initse.com",383],["salvagny.org",384],["augsburger-allgemeine.de",385],["stabila.com",386],["stwater.co.uk",387],["suncalc.org",[388,389]],["swisstph.ch",390],["taxinstitute.ie",391],["get-in-it.de",392],["tempcover.com",[393,394]],["guildford.gov.uk",395],["easyparts.*",[396,397]],["easyparts-recambios.es",[396,397]],["easyparts-rollerteile.de",[396,397]],["drimsim.com",398],["canyon.com",[399,400]],["vevovo.be",[401,402]],["vendezvotrevoiture.be",[401,402]],["wirkaufendeinauto.at",[401,402]],["vikoberallebiler.dk",[401,402]],["wijkopenautos.nl",[401,402]],["vikoperdinbil.se",[401,402]],["noicompriamoauto.it",[401,402]],["vendezvotrevoiture.fr",[401,402]],["compramostucoche.es",[401,402]],["wijkopenautos.be",[401,402]],["auto-doc.*",403],["autodoc.*",403],["autodoc24.*",403],["topautoosat.fi",403],["autoteiledirekt.de",403],["autoczescionline24.pl",403],["tuttoautoricambi.it",403],["onlinecarparts.co.uk",403],["autoalkatreszek24.hu",403],["autodielyonline24.sk",403],["reservdelar24.se",403],["pecasauto24.pt",403],["reservedeler24.co.no",403],["piecesauto24.lu",403],["rezervesdalas24.lv",403],["besteonderdelen.nl",403],["recambioscoche.es",403],["antallaktikaexartimata.gr",403],["piecesauto.fr",403],["teile-direkt.ch",403],["lpi.org",404],["divadelniflora.cz",405],["mahle-aftermarket.com",406],["refurbed.*",407],["eingutertag.org",408],["flyingtiger.com",[408,551]],["borgomontecedrone.it",408],["maharishistore.com",408],["recaro-shop.com",408],["gartenhotel-crystal.at",408],["fayn.com",409],["serica-watches.com",409],["sklavenitis.gr",410],["eam-netz.de",411],["umicore.*",412],["veiligverkeer.be",412],["vsv.be",412],["dehogerielen.be",412],["gera.de",413],["mfr-chessy.fr",414],["mfr-lamure.fr",414],["mfr-saint-romain.fr",414],["mfr-lapalma.fr",414],["mfrvilliemorgon.asso.fr",414],["mfr-charentay.fr",414],["mfr.fr",414],["nationaltrust.org.uk",415],["hej-natural.*",416],["ib-hansmeier.de",417],["rsag.de",418],["esaa-eu.org",418],["aknw.de",418],["answear.*",419],["theprotocol.it",[420,421]],["lightandland.co.uk",422],["etransport.pl",423],["wohnen-im-alter.de",424],["johnmuirhealth.com",[425,426]],["markushaenni.com",427],["airbaltic.com",428],["gamersgate.com",428],["zorgzaam010.nl",429],["etos.nl",430],["paruvendu.fr",431],["privacy.bazar.sk",432],["hennamorena.com",433],["newsello.pl",434],["porp.pl",435],["golfbreaks.com",436],["lieferando.de",437],["just-eat.*",437],["justeat.*",437],["pyszne.pl",437],["lieferando.at",437],["takeaway.com",437],["thuisbezorgd.nl",437],["holidayhypermarket.co.uk",438],["unisg.ch",439],["wassererleben.ch",439],["psgaz.pl",440],["play-asia.com",441],["atu.de",442],["atu-flottenloesungen.de",442],["but.fr",442],["edeka.de",442],["fortuneo.fr",442],["maif.fr",442],["particuliers.sg.fr",442],["sparkasse.at",442],["group.vig",442],["tf1info.fr",442],["dpdgroup.com",443],["dpd.com",443],["cosmosdirekt.de",443],["bstrongoutlet.pt",444],["isarradweg.de",[445,446]],["flaxmanestates.com",446],["inland-casas.com",446],["finlayson.fi",[447,448]],["cowaymega.ca",[447,448]],["arktis.de",449],["desktronic.de",449],["belleek.com",449],["brauzz.com",449],["cowaymega.com",449],["dockin.de",449],["dryrobe.com",[449,450]],["formswim.com",449],["hairtalk.se",449],["hallmark.co.uk",[449,450]],["loopearplugs.com",[449,450]],["oleus.com",449],["peopleofshibuya.com",449],["pullup-dip.com",449],["sanctum.shop",449],["tbco.com",449],["desktronic.*",450],["hq-germany.com",450],["tepedirect.com",450],["maxi-pet.ro",450],["paper-republic.com",450],["pullup-dip.*",450],["vitabiotics.com",450],["smythstoys.com",451],["beam.co.uk",[452,453]],["autobahn.de",454],["krakow.pl",455],["shop.app",456],["shopify.com",456],["wufoo.com",457],["consent.dailymotion.com",458],["laposte.fr",458],["help.instagram.com",459],["consent-manager.thenextweb.com",461],["consent-cdn.zeit.de",462],["coway-usa.com",463],["steiners.shop",464],["ecmrecords.com",465],["malaikaraiss.com",465],["koch-mit.de",465],["zeitreisen.zeit.de",465],["wefashion.com",466],["merkur.dk",467],["ionos.*",469],["omegawatches.com",470],["carefully.be",471],["aerotime.aero",471],["rocket-league.com",472],["dws.com",473],["bosch-homecomfort.com",474],["elmleblanc-optibox.fr",474],["monservicechauffage.fr",474],["boschrexroth.com",474],["home-connect.com",475],["lowrider.at",[476,477]],["mesto.de",478],["intersport.gr",479],["intersport.bg",479],["intersport.com.cy",479],["intersport.ro",479],["ticsante.com",480],["techopital.com",480],["millenniumprize.org",481],["hepster.com",482],["peterstaler.de",483],["blackforest-still.de",483],["tiendaplayaundi.com",484],["ajtix.co.uk",485],["raja.fr",486],["rajarani.de",486],["rajapack.*",[486,487]],["avery-zweckform.com",488],["1xinternet.com",488],["futterhaus.de",488],["dasfutterhaus.at",488],["frischeparadies.de",488],["fmk-steuer.de",488],["selgros.de",488],["transgourmet.de",488],["mediapart.fr",489],["athlon.com",490],["alumniportal-deutschland.org",491],["snoopmedia.com",491],["myguide.de",491],["daad.de",491],["cornelsen.de",[492,493]],["vinmonopolet.no",495],["tvp.info",496],["tvp.pl",496],["tvpworld.com",496],["brtvp.pl",496],["tvpparlament.pl",496],["belsat.eu",496],["warnung.bund.de",497],["mediathek.lfv-bayern.de",498],["allegro.*",499],["allegrolokalnie.pl",499],["ceneo.pl",499],["czc.cz",499],["eon.pl",[500,501]],["ylasatakunta.fi",[502,503]],["mega-image.ro",504],["louisvuitton.com",505],["bodensee-airport.eu",506],["department56.com",507],["allendesignsstudio.com",507],["designsbylolita.co",507],["shop.enesco.com",507],["savoriurbane.com",508],["miumiu.com",509],["church-footwear.com",509],["clickdoc.fr",510],["car-interface.com",511],["monolithdesign.it",511],["thematchahouse.com",511],["smileypack.de",[512,513]],["finom.co",514],["orange.es",[515,516]],["fdm-travel.dk",517],["hummel.dk",517],["jysk.nl",517],["power.no",517],["skousen.dk",517],["velliv.dk",517],["whiteaway.com",517],["whiteaway.no",517],["whiteaway.se",517],["skousen.no",517],["energinet.dk",517],["elkjop.no",517],["medimax.de",518],["costautoricambi.com",519],["lotto.it",519],["readspeaker.com",519],["team.blue",519],["ibistallinncenter.ee",520],["aaron.ai",521],["futureverse.com",522],["tandem.co.uk",522],["insights.com",523],["thebathcollection.com",524],["coastfashion.com",[525,526]],["oasisfashion.com",[525,526]],["warehousefashion.com",[525,526]],["misspap.com",[525,526]],["karenmillen.com",[525,526]],["boohooman.com",[525,526]],["hdt.de",527],["wolt.com",528],["myprivacy.dpgmedia.nl",529],["myprivacy.dpgmedia.be",529],["www.dpgmediagroup.com",529],["xohotels.com",530],["sim24.de",531],["tnt.com",532],["uza.be",533],["uzafoundation.be",533],["uzajobs.be",533],["bergzeit.*",[534,535]],["cinemas-lumiere.com",536],["cdiscount.com",537],["brabus.com",538],["roborock.com",539],["strumentimusicali.net",540],["maisonmargiela.com",541],["webfleet.com",542],["dragonflyshipping.ca",543],["broekhuis.nl",544],["groningenairport.nl",544],["nemck.cz",545],["zdfheute.de",546],["sap-press.com",547],["roughguides.com",[548,549]],["korvonal.com",550],["rexbo.*",552],["itau.com.br",553],["bbg.gv.at",554],["portal.taxi.eu",555],["topannonces.fr",556],["homap.fr",557],["artifica.fr",558],["plan-interactif.com",558],["ville-cesson.fr",558],["moismoliere.com",559],["unihomes.co.uk",560],["bkk.hu",561],["coiffhair.com",562],["ptc.eu",563],["ziegert-group.com",[564,670]],["lassuranceretraite.fr",565],["interieur.gouv.fr",565],["toureiffel.paris",565],["economie.gouv.fr",565],["education.gouv.fr",565],["livoo.fr",565],["su.se",565],["zappo.fr",565],["smdv.de",566],["digitalo.de",566],["petiteamelie.*",567],["mojanorwegia.pl",568],["koempf24.ch",[569,570]],["teichitekten24.de",[569,570]],["koempf24.de",[569,570]],["wolff-finnhaus-shop.de",[569,570]],["asnbank.nl",571],["blgwonen.nl",571],["regiobank.nl",571],["snsbank.nl",571],["vulcan.net.pl",[572,573]],["ogresnovads.lv",574],["partenamut.be",575],["pirelli.com",576],["unicredit.it",577],["effector.pl",578],["zikodermo.pl",[579,580]],["devolksbank.nl",581],["caixabank.es",582],["cyberport.de",584],["cyberport.at",584],["slevomat.cz",585],["kfzparts24.de",586],["runnersneed.com",587],["aachener-zeitung.de",588],["sportpursuit.com",589],["druni.es",[590,601]],["druni.pt",[590,601]],["delta.com",591],["onliner.by",[592,593]],["vejdirektoratet.dk",594],["usaa.com",595],["consorsbank.de",596],["metroag.de",597],["kupbilecik.pl",598],["oxfordeconomics.com",599],["routershop.nl",600],["woo.pt",600],["e-jumbo.gr",602],["alza.*",603],["rmf.fm",605],["rmf24.pl",605],["tracfone.com",606],["lequipe.fr",607],["global.abb",608],["gala.fr",609],["purepeople.com",610],["3sat.de",611],["zdf.de",611],["filmfund.lu",612],["welcometothejungle.com",612],["triblive.com",613],["rai.it",614],["fbto.nl",615],["europa.eu",616],["caisse-epargne.fr",617],["banquepopulaire.fr",617],["bigmammagroup.com",618],["studentagency.sk",618],["studentagency.eu",618],["winparts.be",619],["winparts.nl",619],["winparts.eu",620],["winparts.ie",620],["winparts.se",620],["sportano.*",[621,622]],["crocs.*",623],["chronext.ch",624],["chronext.de",624],["chronext.at",624],["chronext.com",625],["chronext.co.uk",625],["chronext.fr",626],["chronext.nl",627],["chronext.it",628],["galerieslafayette.com",629],["bazarchic.com",630],["stilord.*",631],["tiko.pt",632],["nsinternational.com",633],["meinbildkalender.de",634],["gls-group.com",635],["gls-group.eu",635],["chilis.com",636],["account.bhvr.com",638],["everand.com",638],["lucidchart.com",638],["intercars.ro",[638,639]],["scribd.com",638],["guidepoint.com",638],["erlebnissennerei-zillertal.at",640],["hintertuxergletscher.at",640],["tiwag.at",640],["playseatstore.com",641],["swiss-sport.tv",643],["targobank-magazin.de",644],["zeit-verlagsgruppe.de",644],["online-physiotherapie.de",644],["kieferorthopaede-freisingsmile.de",645],["nltraining.nl",646],["kmudigital.at",647],["mintysquare.com",648],["consent.thetimes.com",649],["cadenaser.com",650],["berlinale.de",651],["lebonlogiciel.com",652],["pharmastar.it",653],["washingtonpost.com",654],["brillenplatz.de",655],["angelplatz.de",655],["dt.mef.gov.it",656],["raffeldeals.com",657],["stepstone.de",658],["kobo.com",659],["zoxs.de",661],["offistore.fi",662],["collinsaerospace.com",663],["radioapp.lv",666],["hagengrote.de",667],["hemden-meister.de",667],["vorteilshop.com",668],["capristores.gr",669],["getaround.com",671],["technomarket.bg",672],["epiphone.com",674],["gibson.com",674],["maestroelectronics.com",674],["cropp.com",[675,676]],["housebrand.com",[675,676]],["mohito.com",[675,676]],["autoczescizielonki.pl",677],["b-s.de",678],["novakid.pl",679],["piecesauto24.com",680],["earpros.com",681],["portalridice.cz",682],["kitsapcu.org",683],["nutsinbulk.*",684],["berlin-buehnen.de",685],["metropoliten.rs",686],["educa2.madrid.org",687],["immohal.de",688],["sourcepoint.theguardian.com",689],["rtlplay.be",690],["natgeotv.com",690],["llama.com",691],["meta.com",691],["setasdesevilla.com",692],["cruyff-foundation.org",693],["allianz.*",694],["energiedirect-bayern.de",695],["postnl.be",696],["postnl.nl",696],["sacyr.com",697],["volkswagen-newsroom.com",698],["openbank.*",699],["tagus-eoficina.grupogimeno.com",700],["tidal.com",701],["knax.de",702],["ordblindenetvaerket.dk",703],["boligbeton.dk",703],["dukh.dk",703],["pevgrow.com",704],["ya.ru",705],["ipolska24.pl",706],["17bankow.com",706],["kazimierzdolny.pl",706],["vpolshchi.pl",706],["dobreprogramy.pl",706],["essanews.com",706],["money.pl",706],["autokult.pl",706],["komorkomania.pl",706],["polygamia.pl",706],["autocentrum.pl",706],["homebook.pl",706],["domodi.pl",706],["jastrzabpost.pl",706],["open.fm",706],["gadzetomania.pl",706],["fotoblogia.pl",706],["abczdrowie.pl",706],["parenting.pl",706],["kafeteria.pl",706],["vibez.pl",706],["wakacje.pl",706],["extradom.pl",706],["totalmoney.pl",706],["superauto.pl",706],["nerwica.com",706],["forum.echirurgia.pl",706],["dailywrap.net",706],["pysznosci.pl",706],["genialne.pl",706],["finansowysupermarket.pl",706],["deliciousmagazine.pl",706],["audioteka.com",706],["easygo.pl",706],["so-magazyn.pl",706],["o2.pl",706],["pudelek.pl",706],["benchmark.pl",706],["wp.pl",706],["altibox.dk",707],["altibox.no",707],["talksport.com",708],["zuiderzeemuseum.nl",709],["gota.io",710],["nwzonline.de",711],["wero-wallet.eu",712],["scaleway.com",713],["bistro.sk",714],["spk-schaumburg.de",715]]);
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
    try { trustedClickElement(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
