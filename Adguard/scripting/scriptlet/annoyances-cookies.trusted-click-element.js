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
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#W0wltc","","500"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button#CybotCookiebotDialogBodyButtonDecline"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",[7,8]],["forbes.com",[7,73]],["nike.com",7],["consent.fastcar.co.uk",7],["tapmaster.ca",7],["cmpv2.standard.co.uk",[9,10]],["cmpv2.independent.co.uk",[11,12,13,178]],["wetransfer.com",[14,15]],["spiegel.de",[16,17]],["nytimes.com",[18,174]],["consent.yahoo.com",19],["tumblr.com",20],["fplstatistics.co.uk",21],["fplstatistics.com",21],["e-shop.leonidas.com",22],["cdn.privacy-mgmt.com",[23,24,42,45,46,47,48,92,94,102,109,116,117,118,129,130,131,134,136,137,139,150,167,192,211,224,225,228,229,230,231,248,297,459,582,603,641,659]],["walmart.ca",25],["sams.com.mx",26],["my.tonies.com",27],["cambio-carsharing.de",27],["festool.*",27],["festoolcanada.com",27],["fuso-trucks.*",27],["tracker.fressnapf.de",27],["myfabrics.co.uk",27],["zinus.*",27],["consent.ladbible.com",[28,29]],["consent.unilad.com",[28,29]],["consent.uniladtech.com",[28,29]],["consent.gamingbible.com",[28,29]],["consent.sportbible.com",[28,29]],["consent.tyla.com",[28,29]],["consent.ladbiblegroup.com",[28,29]],["m2o.it",30],["deejay.it",30],["capital.it",30],["ilmattino.it",[30,31]],["leggo.it",[30,31]],["libero.it",30],["tiscali.it",30],["consent-manager.ft.com",[32,33,34]],["hertz.*",35],["mediaworld.it",36],["mediamarkt.*",36],["mediamarktsaturn.com",37],["uber.com",[38,175]],["ubereats.com",[38,175]],["lego.com",39],["ai.meta.com",40],["lilly.com",41],["ilgiornale.it",43],["www.google.*",44],["telekom.com",49],["telekom.de",49],["abola.pt",50],["flytap.com",50],["ansons.de",50],["blick.ch",50],["buienradar.be",50],["crunchyroll.com",50],["digi24.ro",50],["digisport.ro",50],["digitalfoundry.net",50],["egx.net",50],["emirates.com",50],["eurogamer.it",50],["foto-erhardt.de",50],["gmx.*",50],["kizi.com",50],["mail.com",50],["mcmcomiccon.com",50],["nachrichten.at",50],["nintendolife.com",50],["oe24.at",50],["paxsite.com",50],["peacocktv.com",50],["player.pl",50],["plus500.*",50],["pricerunner.com",50],["pricerunner.se",50],["pricerunner.dk",50],["proximus.be",[50,636]],["proximus.com",50],["purexbox.com",50],["pushsquare.com",50],["rugbypass.com",50],["southparkstudios.com",50],["southwest.com",50],["starwarscelebration.com",50],["sweatybetty.com",50],["theaa.ie",50],["thehaul.com",50],["timeextension.com",50],["travelandleisure.com",50],["tunein.com",50],["uefa.com",50],["videoland.com",50],["wizzair.com",50],["wetter.at",50],["dicebreaker.com",[51,52]],["eurogamer.es",[51,52]],["eurogamer.net",[51,52]],["eurogamer.nl",[51,52]],["eurogamer.pl",[51,52]],["eurogamer.pt",[51,52]],["gamesindustry.biz",[51,52]],["reedpop.com",[51,52]],["rockpapershotgun.com",[51,52]],["thepopverse.com",[51,52]],["vg247.com",[51,52]],["videogameschronicle.com",[51,52]],["eurogamer.de",53],["roadtovr.com",54],["jotex.*",54],["mundodeportivo.com",[55,124]],["m.youtube.com",56],["www.youtube.com",56],["ohra.nl",57],["corriere.it",58],["gazzetta.it",58],["oggi.it",58],["cmp.sky.it",59],["tennisassa.fi",60],["formula1.com",61],["f1racing.pl",62],["music.amazon.*",[63,64]],["consent-pref.trustarc.com",65],["highlights.legaseriea.it",66],["calciomercato.com",66],["sosfanta.com",67],["chrono24.*",[68,69]],["wetter.com",70],["youmath.it",71],["pip.gov.pl",72],["dailybuzz.nl",74],["bnn.de",74],["dosenbach.ch",74],["dw.com",74],["kinepolis.*",74],["mediaite.com",74],["nzz.ch",74],["winfuture.de",74],["lippu.fi",74],["racingnews365.com",74],["reifendirekt.ch",74],["vaillant.*",74],["bauhaus.no",75],["bauhaus.se",75],["beko-group.de",75],["billiger.de",75],["burda.com",75],["vanharen.nl",75],["deichmann.com",[75,97,467]],["meraluna.de",75],["slashdot.org",75],["hermann-saunierduval.it",75],["protherm.cz",75],["saunierduval.es",75],["protherm.sk",75],["protherm.ua",75],["saunierduval.hu",75],["saunierduval.ro",75],["saunierduval.at",75],["awb.nl",75],["spar.hu",76],["group.vattenfall.com",76],["mediaset.it",77],["fortune.com",78],["ilrestodelcarlino.it",79],["quotidiano.net",79],["lanazione.it",79],["ilgiorno.it",79],["iltelegrafolivorno.it",79],["auto.it",80],["beauxarts.com",80],["beinsports.com",80],["bfmtv.com",[80,125]],["boursobank.com",80],["boursorama.com",[80,125]],["boursier.com",[80,218]],["brut.media",80],["canalplus.com",80],["decathlon.fr",[80,215]],["diverto.tv",80],["eden-park.com",80],["foodvisor.io",80],["frandroid.com",80],["jobijoba.*",80],["hotelsbarriere.com",80],["intersport.*",[80,189]],["idealista.it",80],["o2.fr",80],["lejdd.fr",[80,124]],["lechorepublicain.fr",80],["la-croix.com",80],["linfo.re",80],["lamontagne.fr",80],["laredoute.fr",80],["largus.fr",80],["leprogres.fr",80],["lesnumeriques.com",80],["libramemoria.com",80],["lopinion.fr",80],["marieclaire.fr",80],["maville.com",80],["michelin.*",80],["midilibre.fr",[80,663]],["meteofrance.com",80],["mondialtissus.fr",80],["orange.fr",80],["orpi.com",80],["oscaro.com",80],["ouest-france.fr",[80,93,125,664]],["parismatch.com",80],["pagesjaunes.fr",80],["programme-television.org",[80,125]],["publicsenat.fr",[80,125]],["rmcbfmplay.com",[80,125]],["science-et-vie.com",[80,124]],["seloger.com",80],["societe.com",80],["suzuki.fr",80],["sudouest.fr",80],["web-agri.fr",80],["nutri-plus.de",81],["aa.com",82],["americanairlines.*",82],["consent.capital.fr",83],["consent.programme.tv",83],["consent.voici.fr",83],["programme-tv.net",83],["cmpv2.finn.no",84],["cmp.tek.no",[85,86]],["cmp.e24.no",[85,86]],["minmote.no",[85,86]],["cmp.vg.no",[85,86]],["huffingtonpost.fr",87],["rainews.it",88],["remarkable.com",89],["netzwelt.de",90],["money.it",91],["allocine.fr",93],["jeuxvideo.com",93],["ozap.com",93],["le10sport.com",93],["xataka.com",93],["cmp.fitbook.de",94],["cmp.autobild.de",94],["sourcepoint.sport.de",94],["cmp-sp.tagesspiegel.de",94],["cmp.bz-berlin.de",94],["cmp.cicero.de",94],["cmp.techbook.de",94],["cmp.stylebook.de",94],["cmp2.bild.de",94],["cmp2.freiepresse.de",94],["sourcepoint.wetter.de",94],["consent.finanzen.at",94],["consent.finanzen.net",94],["consent.up.welt.de",94],["sourcepoint.n-tv.de",94],["sourcepoint.kochbar.de",94],["sourcepoint.rtl.de",94],["cmp.computerbild.de",94],["cmp.petbook.de",94],["cmp-sp.siegener-zeitung.de",94],["cmp-sp.sportbuzzer.de",94],["klarmobil.de",94],["technikum-wien.at",95],["eneco.nl",96],["salomon.com",98],["blackpoolgazette.co.uk",99],["lep.co.uk",99],["northamptonchron.co.uk",99],["scotsman.com",99],["shieldsgazette.com",99],["thestar.co.uk",99],["portsmouth.co.uk",99],["sunderlandecho.com",99],["northernirelandworld.com",99],["3addedminutes.com",99],["anguscountyworld.co.uk",99],["banburyguardian.co.uk",99],["bedfordtoday.co.uk",99],["biggleswadetoday.co.uk",99],["bucksherald.co.uk",99],["burnleyexpress.net",99],["buxtonadvertiser.co.uk",99],["chad.co.uk",99],["daventryexpress.co.uk",99],["derbyshiretimes.co.uk",99],["derbyworld.co.uk",99],["derryjournal.com",99],["dewsburyreporter.co.uk",99],["doncasterfreepress.co.uk",99],["falkirkherald.co.uk",99],["fifetoday.co.uk",99],["glasgowworld.com",99],["halifaxcourier.co.uk",99],["harboroughmail.co.uk",99],["harrogateadvertiser.co.uk",99],["hartlepoolmail.co.uk",99],["hemeltoday.co.uk",99],["hucknalldispatch.co.uk",99],["lancasterguardian.co.uk",99],["leightonbuzzardonline.co.uk",99],["lincolnshireworld.com",99],["liverpoolworld.uk",99],["londonworld.com",99],["lutontoday.co.uk",99],["manchesterworld.uk",99],["meltontimes.co.uk",99],["miltonkeynes.co.uk",99],["newcastleworld.com",99],["newryreporter.com",99],["newsletter.co.uk",99],["northantstelegraph.co.uk",99],["northumberlandgazette.co.uk",99],["nottinghamworld.com",99],["peterboroughtoday.co.uk",99],["rotherhamadvertiser.co.uk",99],["stornowaygazette.co.uk",99],["surreyworld.co.uk",99],["thescarboroughnews.co.uk",99],["thesouthernreporter.co.uk",99],["totallysnookered.com",99],["wakefieldexpress.co.uk",99],["walesworld.com",99],["warwickshireworld.com",99],["wigantoday.net",99],["worksopguardian.co.uk",99],["yorkshireeveningpost.co.uk",99],["yorkshirepost.co.uk",99],["eurocard.com",100],["saseurobonusmastercard.se",101],["tver.jp",103],["linkedin.com",104],["elmundo.es",[105,125]],["expansion.com",105],["s-pankki.fi",106],["srf.ch",106],["alternate.de",106],["bayer04.de",106],["douglas.de",106],["dr-beckmann.com",106],["falke.com",106],["fitnessfirst.de",106],["flaschenpost.de",106],["gloeckle.de",106],["hornbach.nl",106],["hypofriend.de",106],["lactostop.de",106],["neumann.com",106],["post.ch",106],["postbank.de",106],["rts.ch",106],["immowelt.de",107],["joyn.*",107],["morenutrition.de",107],["mapillary.com",108],["cmp.seznam.cz",110],["marca.com",111],["raiplay.it",112],["raiplaysound.it",112],["derstandard.at",113],["derstandard.de",113],["faz.net",113],["automoto.it",114],["ansa.it",114],["delladio.it",114],["huffingtonpost.it",114],["internazionale.it",114],["lastampa.it",114],["macitynet.it",114],["moto.it",114],["movieplayer.it",114],["multiplayer.it",114],["repubblica.it",114],["tomshw.it",114],["skuola.net",114],["spaziogames.it",114],["tuttoandroid.net",114],["tuttotech.net",114],["ilgazzettino.it",115],["ilmessaggero.it",115],["ilsecoloxix.it",115],["privacy.motorradonline.de",118],["consent.watson.de",118],["consent.kino.de",118],["consent.desired.de",118],["cmpv2.fn.de",118],["spp.nextpit.de",118],["dailystar.co.uk",[119,120,121,122]],["mirror.co.uk",[119,120,121,122]],["idnes.cz",123],["20minutes.fr",124],["20minutos.es",124],["24sata.hr",124],["abc.es",124],["actu.fr",124],["antena3.com",124],["antena3internacional.com",124],["atresmedia.com",124],["atresmediapublicidad.com",124],["atresmediastudios.com",124],["atresplayer.com",124],["autopista.es",124],["belfasttelegraph.co.uk",124],["bemad.es",124],["bonduelle.it",124],["bonniernews.se",124],["bt.se",124],["cadenadial.com",124],["caracol.com.co",124],["cas.sk",124],["charentelibre.fr",124],["ciclismoafondo.es",124],["cnews.fr",124],["cope.es",124],["correryfitness.com",124],["courrier-picard.fr",124],["cuatro.com",124],["decathlon.nl",124],["decathlon.pl",124],["di.se",124],["diariocordoba.com",124],["diariodenavarra.es",124],["diariosur.es",124],["diariovasco.com",124],["diepresse.com",124],["divinity.es",124],["dn.se",124],["dnevnik.hr",124],["dumpert.nl",124],["ebuyclub.com",124],["edreams.de",124],["edreams.net",124],["elcomercio.es",124],["elconfidencial.com",124],["elcorreo.com",124],["eldesmarque.com",124],["eldiario.es",124],["eldiariomontanes.es",124],["elespanol.com",124],["elle.fr",124],["elpais.com",124],["elperiodico.com",124],["elperiodicodearagon.com",124],["elplural.com",124],["energytv.es",124],["engadget.com",124],["es.ara.cat",124],["euronews.com",124],["europafm.com",124],["expressen.se",124],["factoriadeficcion.com",124],["filmstarts.de",124],["flooxernow.com",124],["folkbladet.nu",124],["footmercato.net",124],["france.tv",124],["france24.com",124],["fussballtransfers.com",124],["fyndiq.se",124],["ghacks.net",124],["gva.be",124],["hbvl.be",124],["heraldo.es",124],["hoy.es",124],["ideal.es",124],["idealista.pt",124],["krone.at",124],["kurier.at",124],["lacoste.com",124],["ladepeche.fr",124],["lalibre.be",124],["lanouvellerepublique.fr",124],["larazon.es",124],["lasexta.com",124],["lasprovincias.es",124],["latribune.fr",124],["lavanguardia.com",124],["laverdad.es",124],["lavozdegalicia.es",124],["leboncoin.fr",124],["lecturas.com",124],["ledauphine.com",124],["lejsl.com",124],["leparisien.fr",124],["lesoir.be",124],["letelegramme.fr",124],["libremercado.com",124],["los40.com",124],["lotoquebec.com",124],["lunion.fr",124],["m6.fr",124],["marianne.cz",124],["marmiton.org",124],["mediaset.es",124],["melodia-fm.com",124],["metronieuws.nl",124],["moviepilot.de",124],["mtmad.es",124],["multilife.com.pl",124],["naszemiasto.pl",124],["nationalgeographic.com.es",124],["nicematin.com",124],["nieuwsblad.be",124],["notretemps.com",124],["numerama.com",124],["okdiario.com",124],["ondacero.es",124],["podiumpodcast.com",124],["portail.lotoquebec.com",124],["profil.at",124],["public.fr",124],["publico.es",124],["radiofrance.fr",124],["rankia.com",124],["rfi.fr",124],["rossmann.pl",124],["rtbf.be",[124,215]],["rtl.lu",124],["sensacine.com",124],["sfgame.net",124],["shure.com",124],["silicon.es",124],["sncf-connect.com",124],["sport.es",124],["sydsvenskan.se",124],["techcrunch.com",124],["telegraaf.nl",124],["telequebec.tv",124],["tf1.fr",124],["tradingsat.com",124],["trailrun.es",124],["video-streaming.orange.fr",124],["xpress.fr",124],["ivoox.com",125],["as.com",125],["slam.nl",125],["bienpublic.com",125],["funradio.fr",125],["gamepro.de",[125,186,187]],["lemon.fr",125],["lexpress.fr",125],["shadow.tech",125],["letemps.ch",125],["mein-mmo.de",125],["heureka.sk",125],["film.at",125],["dhnet.be",125],["lesechos.fr",[125,220]],["marianne.net",[125,215]],["jeanmarcmorandini.com",[125,216]],["dna.fr",125],["sudinfo.be",125],["europe1.fr",[125,216]],["rtl.be",[125,215]],["reviewingthebrew.com",125],["jaysjournal.com",125],["reignoftroy.com",125],["ryobitools.eu",[126,127]],["americanexpress.com",128],["consent.radiotimes.com",131],["sp-consent.szbz.de",132],["cmp.omni.se",133],["cmp.svd.se",133],["cmp.aftonbladet.se",133],["cmp.tv.nu",133],["consent.economist.com",135],["studentagency.cz",135],["cmpv2.foundryco.com",136],["cmpv2.infoworld.com",136],["cmpv2.arnnet.com.au",136],["sp-cdn.pcgames.de",137],["sp-cdn.pcgameshardware.de",137],["consentv2.sport1.de",137],["cmp.mz.de",137],["cmpv2.tori.fi",138],["consent.spielaffe.de",140],["bondekompaniet.no",141],["degiro.*",141],["epochtimes.de",141],["vikingline.com",141],["tfl.gov.uk",141],["drklein.de",141],["hildegardis-krankenhaus.de",141],["kleer.se",141],["lekiaviation.com",141],["lotto.pl",141],["mineralstech.com",141],["volunteer.digitalboost.org.uk",141],["starhotels.com",141],["tefl.com",141],["universumglobal.com",141],["tui.com",142],["rexel.*",143],["csob.sk",144],["greenstuffworld.com",145],["morele.net",[146,147]],["1und1.de",148],["infranken.de",149],["cmp.bunte.de",150],["cmp.chip.de",150],["cmp.focus.de",[150,493]],["estadiodeportivo.com",151],["tameteo.*",151],["tempo.pt",151],["meteored.*",151],["pogoda.com",151],["yourweather.co.uk",151],["tempo.com",151],["theweather.net",151],["tiempo.com",151],["ilmeteo.net",151],["daswetter.com",151],["kicker.de",152],["formulatv.com",153],["web.de",154],["lefigaro.fr",155],["linternaute.com",156],["consent.caminteresse.fr",157],["volksfreund.de",158],["rp-online.de",158],["dailypost.co.uk",159],["the-express.com",159],["vide-greniers.org",159],["bluray-disc.de",160],["elio-systems.com",160],["stagatha-fachklinik.de",160],["tarife.mediamarkt.de",160],["lz.de",160],["gaggenau.com",160],["saturn.de",161],["eltiempo.es",[162,163]],["otempo.pt",164],["atlasformen.*",165],["cmp-sp.goettinger-tageblatt.de",166],["cmp-sp.saechsische.de",166],["cmp-sp.ln-online.de",166],["cz.de",166],["dewezet.de",166],["dnn.de",166],["haz.de",166],["gnz.de",166],["landeszeitung.de",166],["lvz.de",166],["maz-online.de",166],["ndz.de",166],["op-marburg.de",166],["ostsee-zeitung.de",166],["paz-online.de",166],["reisereporter.de",166],["rga.de",166],["rnd.de",166],["siegener-zeitung.de",166],["sn-online.de",166],["solinger-tageblatt.de",166],["sportbuzzer.de",166],["szlz.de",166],["tah.de",166],["torgauerzeitung.de",166],["waz-online.de",166],["privacy.maennersache.de",166],["sinergy.ch",168],["agglo-valais-central.ch",168],["biomedcentral.com",169],["hsbc.*",170],["hsbcnet.com",170],["hsbcinnovationbanking.com",170],["create.hsbc",170],["gbm.hsbc.com",170],["hsbc.co.uk",171],["internationalservices.hsbc.com",171],["history.hsbc.com",171],["about.hsbc.co.uk",172],["privatebanking.hsbc.com",173],["independent.co.uk",176],["privacy.crash.net",176],["the-independent.com",177],["argos.co.uk",179],["poco.de",[180,181]],["moebelix.*",180],["moemax.*",180],["xxxlutz.*",180],["xxxlesnina.*",180],["moebel24.ch",181],["meubles.fr",181],["meubelo.nl",181],["moebel.de",181],["lipo.ch",182],["schubiger.ch",183],["aedt.de",184],["berlin-live.de",184],["connect.de",184],["gutefrage.net",184],["insideparadeplatz.ch",184],["morgenpost.de",184],["play3.de",184],["thueringen24.de",184],["pdfupload.io",185],["gamestar.de",[186,187,224]],["verksamt.se",188],["acmemarkets.com",189],["amtrak.com",189],["beko.com",189],["bepanthen.com.au",189],["berocca.com.au",189],["booking.com",189],["carrefour.fr",189],["centrum.sk",189],["claratyne.com.au",189],["credit-suisse.com",189],["ceskatelevize.cz",189],["deporvillage.*",189],["de.vanguard",189],["dhl.de",189],["digikey.*",189],["drafthouse.com",189],["dunelm.com",189],["eurosport.fr",189],["fello.se",189],["fielmann.*",189],["flashscore.fr",189],["flightradar24.com",189],["fnac.es",189],["foodandwine.com",189],["fourseasons.com",189],["khanacademy.org",189],["konami.com",189],["jll.*",189],["jobs.redbull.com",189],["hellenicbank.com",189],["gemini.pl",189],["groceries.asda.com",189],["lamborghini.com",189],["menshealth.com",189],["n26.com",189],["nintendo.com",189],["nokia.com",189],["oneweb.net",189],["omnipod.com",189],["oralb.*",189],["panasonic.com",189],["parkside-diy.com",189],["pluto.tv",189],["popularmechanics.com",189],["polskieradio.pl",189],["pringles.com",189],["radissonhotels.com",189],["ricardo.ch",189],["rockstargames.com",189],["rte.ie",189],["salesforce.com",189],["samsonite.*",189],["spiele.heise.de",189],["spirit.com",189],["stenaline.co.uk",189],["swisscom.ch",189],["swisspass.ch",189],["technologyfromsage.com",189],["telenet.be",189],["tntsports.co.uk",189],["theepochtimes.com",189],["toujeo.com",189],["uber-platz.de",189],["questdiagnostics.com",189],["wallapop.com",189],["wickes.co.uk",189],["workingtitlefilms.com",189],["vattenfall.de",189],["winparts.fr",189],["yoigo.com",189],["zoominfo.com",189],["allegiantair.com",190],["hallmarkchannel.com",190],["incorez.com",190],["noovle.com",190],["otter.ai",190],["plarium.com",190],["telsy.com",190],["timenterprise.it",190],["tim.it",190],["tradersunion.com",190],["fnac.*",190],["yeti.com",190],["here.com",[191,672]],["vodafone.com",191],["cmp.heise.de",193],["cmp.am-online.com",193],["cmp.motorcyclenews.com",193],["consent.newsnow.co.uk",193],["cmp.todays-golfer.com",193],["spp.nextpit.com",193],["koeser.com",194],["shop.schaette-pferd.de",194],["schaette.de",194],["central-bb.de",195],["fitnessfoodcorner.de",196],["kuehlungsborn.de",197],["espressocoffeeshop.com",198],["brainmarket.pl",199],["getroots.app",200],["cart-in.re",[201,599]],["prestonpublishing.pl",202],["zara.com",203],["lepermislibre.fr",203],["negociardivida.spcbrasil.org.br",204],["adidas.*",205],["privacy.topreality.sk",206],["privacy.autobazar.eu",206],["vu.lt",207],["adnkronos.com",[208,209]],["cornwalllive.com",[208,209]],["cyprus-mail.com",[208,209]],["einthusan.tv",[208,209]],["informazione.it",[208,209]],["mymovies.it",[208,209]],["tuttoeuropei.com",[208,209]],["video.lacnews24.it",[208,209]],["protothema.gr",208],["flash.gr",208],["taxscouts.com",210],["online.no",212],["telenor.no",212],["austrian.com",213],["lufthansa.com",213],["kampfkunst-herz.de",214],["glow25.de",214],["h-f.at",214],["hornetsecurity.com",214],["kayzen.io",214],["wasserkunst-hamburg.de",214],["zahnspange-oelde.de",214],["bnc.ca",215],["egora.fr",215],["engelvoelkers.com",215],["estrategiasdeinversion.com",215],["festo.com",215],["franceinfo.fr",215],["francebleu.fr",215],["francemediasmonde.com",215],["geny.com",215],["giphy.com",215],["idealista.com",215],["infolibre.es",215],["information.tv5monde.com",215],["ing.es",215],["knipex.de",215],["laprovence.com",215],["lemondeinformatique.fr",215],["libertaddigital.com",215],["mappy.com",215],["orf.at",215],["philibertnet.com",215],["researchgate.net",215],["standaard.be",215],["stroilioro.com",215],["taxfix.de",215],["telecinco.es",215],["vistaalegre.com",215],["zimbra.free.fr",215],["usinenouvelle.com",217],["reussir.fr",219],["bruendl.at",221],["latamairlines.com",222],["elisa.ee",223],["baseendpoint.brigitte.de",224],["baseendpoint.gala.de",224],["baseendpoint.haeuser.de",224],["baseendpoint.stern.de",224],["baseendpoint.urbia.de",224],["cmp.tag24.de",224],["cmp-sp.handelsblatt.com",224],["cmpv2.berliner-zeitung.de",224],["golem.de",224],["consent.t-online.de",224],["sp-consent.stuttgarter-nachrichten.de",225],["sp-consent.stuttgarter-zeitung.de",225],["regjeringen.no",226],["sp-manager-magazin-de.manager-magazin.de",227],["consent.11freunde.de",227],["centrum24.pl",232],["replay.lsm.lv",233],["ltv.lsm.lv",233],["bernistaba.lsm.lv",233],["verl.de",234],["cubo-sauna.de",234],["mbl.is",234],["auto-medienportal.net",234],["mobile.de",235],["cookist.it",236],["fanpage.it",236],["geopop.it",236],["lexplain.it",236],["royalmail.com",237],["gmx.net",238],["gmx.ch",239],["mojehobby.pl",240],["super-hobby.*",240],["sp.stylevamp.de",241],["cmp.wetteronline.de",241],["audi.*",242],["easyjet.com",242],["experian.co.uk",242],["postoffice.co.uk",242],["tescobank.com",242],["internetaptieka.lv",[243,244]],["wells.pt",245],["dskdirect.bg",246],["cmpv2.dba.dk",247],["spcmp.crosswordsolver.com",248],["ecco.com",249],["georgjensen.com",249],["thomann.*",250],["landkreis-kronach.de",251],["effectiefgeven.be",252],["northcoast.com",252],["chaingpt.org",252],["bandenconcurrent.nl",253],["bandenexpert.be",253],["reserved.com",254],["metro.it",255],["makro.es",255],["metro.sk",255],["metro-cc.hr",255],["makro.nl",255],["metro.bg",255],["metro.at",255],["metro-tr.com",255],["metro.de",255],["metro.fr",255],["makro.cz",255],["metro.ro",255],["makro.pt",255],["makro.pl",255],["sklepy-odido.pl",255],["rastreator.com",255],["metro.ua",256],["metro.rs",256],["metro-kz.com",256],["metro.md",256],["metro.hu",256],["metro-cc.ru",256],["metro.pk",256],["balay.es",257],["constructa.com",257],["dafy-moto.com",258],["akku-shop.nl",259],["akkushop-austria.at",259],["akkushop-b2b.de",259],["akkushop.de",259],["akkushop.dk",259],["batterie-boutique.fr",259],["akkushop-schweiz.ch",260],["evzuttya.com.ua",261],["eobuv.cz",261],["eobuwie.com.pl",261],["ecipele.hr",261],["eavalyne.lt",261],["chaussures.fr",261],["ecipo.hu",261],["eobuv.sk",261],["epantofi.ro",261],["epapoutsia.gr",261],["escarpe.it",261],["eschuhe.de",261],["obuvki.bg",261],["zapatos.es",261],["swedbank.ee",262],["mudanzavila.es",263],["bienmanger.com",264],["gesipa.*",265],["gesipausa.com",265],["beckhoff.com",265],["zitekick.dk",266],["eltechno.dk",266],["okazik.pl",266],["batteryempire.*",267],["maxi.rs",268],["garmin.com",269],["invisalign.*",269],["one4all.ie",269],["osprey.com",269],["wideroe.no",270],["bmw.*",271],["kijk.nl",272],["nordania.dk",273],["danskebank.*",273],["danskeci.com",273],["danica.dk",273],["dehn.*",274],["gewerbegebiete.de",275],["cordia.fr",276],["vola.fr",277],["lafi.fr",278],["skyscanner.*",279],["coolblue.*",280],["sanareva.*",281],["atida.fr",281],["bbva.*",282],["bbvauk.com",282],["expertise.unimi.it",283],["altenberg.de",284],["vestel.es",285],["tsb.co.uk",286],["buienradar.nl",[287,288]],["linsenplatz.de",289],["budni.de",290],["erstecardclub.hr",290],["teufel.de",[291,292]],["abp.nl",293],["simplea.sk",294],["flip.bg",295],["kiertokanki.com",296],["leirovins.be",298],["vias.be",299],["edf.fr",300],["virbac.com",300],["diners.hr",300],["squarehabitat.fr",300],["arbitrobancariofinanziario.it",301],["ivass.it",301],["economiapertutti.bancaditalia.it",301],["smit-sport.de",302],["gekko-computer.de",302],["jysk.al",303],["go-e.com",304],["malerblatt-medienservice.de",305],["architekturbuch.de",305],["medienservice-holz.de",305],["leuchtstark.de",305],["casius.nl",306],["coolinarika.com",307],["giga-hamburg.de",307],["vakgaragevannunen.nl",307],["fortuluz.es",307],["finna.fi",307],["eurogrow.es",307],["topnatur.cz",307],["topnatur.eu",307],["vakgarage.nl",307],["whufc.com",307],["zomaplast.cz",307],["envafors.dk",308],["dabbolig.dk",[309,310]],["daruk-emelok.hu",311],["exakta.se",312],["larca.de",313],["roli.com",314],["okazii.ro",315],["lr-shop-direkt.de",315],["portalprzedszkolny.pl",315],["tgvinoui.sncf",316],["l-bank.de",317],["interhyp.de",318],["indigoneo.*",319],["transparency.meta.com",320],["dojusagro.lt",321],["eok.ee",321],["kripa.it",321],["nextdaycatering.co.uk",321],["safran-group.com",321],["sr-ramenendeuren.be",321],["ilovefreegle.org",321],["tribexr.com",321],["understandingsociety.ac.uk",321],["bestbuycyprus.com",322],["strato.*",323],["strato-hosting.co.uk",323],["auto.de",324],["contentkingapp.com",325],["comune.palermo.it",326],["get-in-engineering.de",327],["spp.nextpit.es",328],["spp.nextpit.it",329],["spp.nextpit.com.br",330],["spp.nextpit.fr",331],["otterbox.com",332],["stoertebeker-brauquartier.com",333],["stoertebeker.com",333],["stoertebeker-eph.com",333],["aparts.pl",334],["sinsay.com",[335,336]],["benu.cz",337],["stockholmresilience.org",338],["ludvika.se",338],["kammarkollegiet.se",338],["cazenovecapital.com",339],["statestreet.com",340],["beopen.lv",341],["cesukoncertzale.lv",342],["dodo.fr",343],["pepper.it",344],["pepper.pl",344],["preisjaeger.at",344],["mydealz.de",344],["dealabs.com",344],["hotukdeals.com",344],["chollometro.com",344],["makelaarsland.nl",345],["bezirk-schwaben.de",346],["dorfen.de",346],["nutsinbulk.co.uk",347],["bricklink.com",348],["bestinver.es",349],["icvs2023.conf.tuwien.ac.at",350],["racshop.co.uk",[351,352]],["baabuk.com",353],["sapien.io",353],["tradedoubler.com",353],["app.lepermislibre.fr",354],["multioferta.es",355],["testwise.com",[356,357]],["tonyschocolonely.com",358],["fitplus.is",358],["fransdegrebber.nl",358],["lilliputpress.ie",358],["lexibo.com",358],["marin-milou.com",358],["dare2tri.com",358],["t3micro.*",358],["la-vie-naturelle.com",[359,360]],["inovelli.com",361],["uonetplus.vulcan.net.pl",[362,363]],["consent.helagotland.se",364],["oper.koeln",[365,366]],["deezer.com",367],["hoteldesartssaigon.com",368],["autoritedelaconcurrence.fr",369],["groupeonepoint.com",369],["geneanet.org",369],["carrieres.groupegalerieslafayette.com",369],["immo-banques.fr",369],["lingvanex.com",369],["turncamp.com",370],["ejobs.ro",[371,372]],["kupbilecik.*",[373,374]],["coolbe.com",375],["serienjunkies.de",376],["computerhoy.20minutos.es",377],["clickskeks.at",378],["clickskeks.de",378],["abt-sportsline.de",378],["exemplary.ai",379],["forbo.com",379],["stores.sk",379],["nerdstar.de",379],["prace.cz",379],["profesia.sk",379],["profesia.cz",379],["pracezarohem.cz",379],["atmoskop.cz",379],["seduo.sk",379],["seduo.cz",379],["teamio.com",379],["arnold-robot.com",379],["cvonline.lt",379],["cv.lv",379],["cv.ee",379],["dirbam.lt",379],["visidarbi.lv",379],["otsintood.ee",379],["webtic.it",379],["gerth.de",380],["pamiatki.pl",381],["initse.com",382],["salvagny.org",383],["augsburger-allgemeine.de",384],["stabila.com",385],["stwater.co.uk",386],["suncalc.org",[387,388]],["swisstph.ch",389],["taxinstitute.ie",390],["get-in-it.de",391],["tempcover.com",[392,393]],["guildford.gov.uk",394],["easyparts.*",[395,396]],["easyparts-recambios.es",[395,396]],["easyparts-rollerteile.de",[395,396]],["drimsim.com",397],["canyon.com",[398,399]],["vevovo.be",[400,401]],["vendezvotrevoiture.be",[400,401]],["wirkaufendeinauto.at",[400,401]],["vikoberallebiler.dk",[400,401]],["wijkopenautos.nl",[400,401]],["vikoperdinbil.se",[400,401]],["noicompriamoauto.it",[400,401]],["vendezvotrevoiture.fr",[400,401]],["compramostucoche.es",[400,401]],["wijkopenautos.be",[400,401]],["auto-doc.*",402],["autodoc.*",402],["autodoc24.*",402],["topautoosat.fi",402],["autoteiledirekt.de",402],["autoczescionline24.pl",402],["tuttoautoricambi.it",402],["onlinecarparts.co.uk",402],["autoalkatreszek24.hu",402],["autodielyonline24.sk",402],["reservdelar24.se",402],["pecasauto24.pt",402],["reservedeler24.co.no",402],["piecesauto24.lu",402],["rezervesdalas24.lv",402],["besteonderdelen.nl",402],["recambioscoche.es",402],["antallaktikaexartimata.gr",402],["piecesauto.fr",402],["teile-direkt.ch",402],["lpi.org",403],["divadelniflora.cz",404],["mahle-aftermarket.com",405],["refurbed.*",406],["eingutertag.org",407],["flyingtiger.com",[407,550]],["borgomontecedrone.it",407],["maharishistore.com",407],["recaro-shop.com",407],["gartenhotel-crystal.at",407],["fayn.com",408],["serica-watches.com",408],["sklavenitis.gr",409],["eam-netz.de",410],["umicore.*",411],["veiligverkeer.be",411],["vsv.be",411],["dehogerielen.be",411],["gera.de",412],["mfr-chessy.fr",413],["mfr-lamure.fr",413],["mfr-saint-romain.fr",413],["mfr-lapalma.fr",413],["mfrvilliemorgon.asso.fr",413],["mfr-charentay.fr",413],["mfr.fr",413],["nationaltrust.org.uk",414],["hej-natural.*",415],["ib-hansmeier.de",416],["rsag.de",417],["esaa-eu.org",417],["aknw.de",417],["answear.*",418],["theprotocol.it",[419,420]],["lightandland.co.uk",421],["etransport.pl",422],["wohnen-im-alter.de",423],["johnmuirhealth.com",[424,425]],["markushaenni.com",426],["airbaltic.com",427],["gamersgate.com",427],["zorgzaam010.nl",428],["etos.nl",429],["paruvendu.fr",430],["privacy.bazar.sk",431],["hennamorena.com",432],["newsello.pl",433],["porp.pl",434],["golfbreaks.com",435],["lieferando.de",436],["just-eat.*",436],["justeat.*",436],["pyszne.pl",436],["lieferando.at",436],["takeaway.com",436],["thuisbezorgd.nl",436],["holidayhypermarket.co.uk",437],["unisg.ch",438],["wassererleben.ch",438],["psgaz.pl",439],["play-asia.com",440],["atu.de",441],["atu-flottenloesungen.de",441],["but.fr",441],["edeka.de",441],["fortuneo.fr",441],["maif.fr",441],["particuliers.sg.fr",441],["sparkasse.at",441],["group.vig",441],["tf1info.fr",441],["dpdgroup.com",442],["dpd.com",442],["cosmosdirekt.de",442],["bstrongoutlet.pt",443],["isarradweg.de",[444,445]],["flaxmanestates.com",445],["inland-casas.com",445],["finlayson.fi",[446,447]],["cowaymega.ca",[446,447]],["arktis.de",448],["desktronic.de",448],["belleek.com",448],["brauzz.com",448],["cowaymega.com",448],["dockin.de",448],["dryrobe.com",[448,449]],["formswim.com",448],["hairtalk.se",448],["hallmark.co.uk",[448,449]],["loopearplugs.com",[448,449]],["oleus.com",448],["peopleofshibuya.com",448],["pullup-dip.com",448],["sanctum.shop",448],["tbco.com",448],["desktronic.*",449],["hq-germany.com",449],["tepedirect.com",449],["maxi-pet.ro",449],["paper-republic.com",449],["pullup-dip.*",449],["vitabiotics.com",449],["smythstoys.com",450],["beam.co.uk",[451,452]],["autobahn.de",453],["krakow.pl",454],["shop.app",455],["shopify.com",455],["wufoo.com",456],["consent.dailymotion.com",457],["laposte.fr",457],["help.instagram.com",458],["consent-manager.thenextweb.com",460],["consent-cdn.zeit.de",461],["coway-usa.com",462],["steiners.shop",463],["ecmrecords.com",464],["malaikaraiss.com",464],["koch-mit.de",464],["zeitreisen.zeit.de",464],["wefashion.com",465],["merkur.dk",466],["ionos.*",468],["omegawatches.com",469],["carefully.be",470],["aerotime.aero",470],["rocket-league.com",471],["dws.com",472],["bosch-homecomfort.com",473],["elmleblanc-optibox.fr",473],["monservicechauffage.fr",473],["boschrexroth.com",473],["home-connect.com",474],["lowrider.at",[475,476]],["mesto.de",477],["intersport.gr",478],["intersport.bg",478],["intersport.com.cy",478],["intersport.ro",478],["ticsante.com",479],["techopital.com",479],["millenniumprize.org",480],["hepster.com",481],["peterstaler.de",482],["blackforest-still.de",482],["tiendaplayaundi.com",483],["ajtix.co.uk",484],["raja.fr",485],["rajarani.de",485],["rajapack.*",[485,486]],["avery-zweckform.com",487],["1xinternet.de",487],["futterhaus.de",487],["dasfutterhaus.at",487],["frischeparadies.de",487],["fmk-steuer.de",487],["selgros.de",487],["transgourmet.de",487],["mediapart.fr",488],["athlon.com",489],["alumniportal-deutschland.org",490],["snoopmedia.com",490],["myguide.de",490],["daad.de",490],["cornelsen.de",[491,492]],["vinmonopolet.no",494],["tvp.info",495],["tvp.pl",495],["tvpworld.com",495],["brtvp.pl",495],["tvpparlament.pl",495],["belsat.eu",495],["warnung.bund.de",496],["mediathek.lfv-bayern.de",497],["allegro.*",498],["allegrolokalnie.pl",498],["ceneo.pl",498],["czc.cz",498],["eon.pl",[499,500]],["ylasatakunta.fi",[501,502]],["mega-image.ro",503],["louisvuitton.com",504],["bodensee-airport.eu",505],["department56.com",506],["allendesignsstudio.com",506],["designsbylolita.co",506],["shop.enesco.com",506],["savoriurbane.com",507],["miumiu.com",508],["church-footwear.com",508],["clickdoc.fr",509],["car-interface.com",510],["monolithdesign.it",510],["thematchahouse.com",510],["smileypack.de",[511,512]],["finom.co",513],["orange.es",[514,515]],["fdm-travel.dk",516],["hummel.dk",516],["jysk.nl",516],["power.no",516],["skousen.dk",516],["velliv.dk",516],["whiteaway.com",516],["whiteaway.no",516],["whiteaway.se",516],["skousen.no",516],["energinet.dk",516],["elkjop.no",516],["medimax.de",517],["costautoricambi.com",518],["lotto.it",518],["readspeaker.com",518],["team.blue",518],["ibistallinncenter.ee",519],["aaron.ai",520],["futureverse.com",521],["tandem.co.uk",521],["insights.com",522],["thebathcollection.com",523],["coastfashion.com",[524,525]],["oasisfashion.com",[524,525]],["warehousefashion.com",[524,525]],["misspap.com",[524,525]],["karenmillen.com",[524,525]],["boohooman.com",[524,525]],["hdt.de",526],["wolt.com",527],["myprivacy.dpgmedia.nl",528],["myprivacy.dpgmedia.be",528],["www.dpgmediagroup.com",528],["xohotels.com",529],["sim24.de",530],["tnt.com",531],["uza.be",532],["uzafoundation.be",532],["uzajobs.be",532],["bergzeit.*",[533,534]],["cinemas-lumiere.com",535],["cdiscount.com",536],["brabus.com",537],["roborock.com",538],["strumentimusicali.net",539],["maisonmargiela.com",540],["webfleet.com",541],["dragonflyshipping.ca",542],["broekhuis.nl",543],["groningenairport.nl",543],["nemck.cz",544],["zdfheute.de",545],["sap-press.com",546],["roughguides.com",[547,548]],["korvonal.com",549],["rexbo.*",551],["itau.com.br",552],["bbg.gv.at",553],["portal.taxi.eu",554],["topannonces.fr",555],["homap.fr",556],["artifica.fr",557],["plan-interactif.com",557],["ville-cesson.fr",557],["moismoliere.com",558],["unihomes.co.uk",559],["bkk.hu",560],["coiffhair.com",561],["ptc.eu",562],["ziegert-group.com",[563,669]],["lassuranceretraite.fr",564],["interieur.gouv.fr",564],["toureiffel.paris",564],["economie.gouv.fr",564],["education.gouv.fr",564],["livoo.fr",564],["su.se",564],["zappo.fr",564],["smdv.de",565],["digitalo.de",565],["petiteamelie.*",566],["mojanorwegia.pl",567],["koempf24.ch",[568,569]],["teichitekten24.de",[568,569]],["koempf24.de",[568,569]],["wolff-finnhaus-shop.de",[568,569]],["asnbank.nl",570],["blgwonen.nl",570],["regiobank.nl",570],["snsbank.nl",570],["vulcan.net.pl",[571,572]],["ogresnovads.lv",573],["partenamut.be",574],["pirelli.com",575],["unicredit.it",576],["effector.pl",577],["zikodermo.pl",[578,579]],["devolksbank.nl",580],["caixabank.es",581],["cyberport.de",583],["cyberport.at",583],["slevomat.cz",584],["kfzparts24.de",585],["runnersneed.com",586],["aachener-zeitung.de",587],["sportpursuit.com",588],["druni.es",[589,600]],["druni.pt",[589,600]],["delta.com",590],["onliner.by",[591,592]],["vejdirektoratet.dk",593],["usaa.com",594],["consorsbank.de",595],["metroag.de",596],["kupbilecik.pl",597],["oxfordeconomics.com",598],["routershop.nl",599],["woo.pt",599],["e-jumbo.gr",601],["alza.*",602],["rmf.fm",604],["rmf24.pl",604],["tracfone.com",605],["lequipe.fr",606],["global.abb",607],["gala.fr",608],["purepeople.com",609],["3sat.de",610],["zdf.de",610],["filmfund.lu",611],["welcometothejungle.com",611],["triblive.com",612],["rai.it",613],["fbto.nl",614],["europa.eu",615],["caisse-epargne.fr",616],["banquepopulaire.fr",616],["bigmammagroup.com",617],["studentagency.sk",617],["studentagency.eu",617],["winparts.be",618],["winparts.nl",618],["winparts.eu",619],["winparts.ie",619],["winparts.se",619],["sportano.*",[620,621]],["crocs.*",622],["chronext.ch",623],["chronext.de",623],["chronext.at",623],["chronext.com",624],["chronext.co.uk",624],["chronext.fr",625],["chronext.nl",626],["chronext.it",627],["galerieslafayette.com",628],["bazarchic.com",629],["stilord.*",630],["tiko.pt",631],["nsinternational.com",632],["meinbildkalender.de",633],["gls-group.com",634],["gls-group.eu",634],["chilis.com",635],["account.bhvr.com",637],["everand.com",637],["lucidchart.com",637],["intercars.ro",[637,638]],["scribd.com",637],["guidepoint.com",637],["erlebnissennerei-zillertal.at",639],["hintertuxergletscher.at",639],["tiwag.at",639],["playseatstore.com",640],["swiss-sport.tv",642],["targobank-magazin.de",643],["zeit-verlagsgruppe.de",643],["online-physiotherapie.de",643],["kieferorthopaede-freisingsmile.de",644],["nltraining.nl",645],["kmudigital.at",646],["mintysquare.com",647],["consent.thetimes.com",648],["cadenaser.com",649],["berlinale.de",650],["lebonlogiciel.com",651],["pharmastar.it",652],["washingtonpost.com",653],["brillenplatz.de",654],["angelplatz.de",654],["dt.mef.gov.it",655],["raffeldeals.com",656],["stepstone.de",657],["kobo.com",658],["zoxs.de",660],["offistore.fi",661],["collinsaerospace.com",662],["radioapp.lv",665],["hagengrote.de",666],["hemden-meister.de",666],["vorteilshop.com",667],["capristores.gr",668],["getaround.com",670],["technomarket.bg",671],["epiphone.com",673],["gibson.com",673],["maestroelectronics.com",673],["cropp.com",[674,675]],["housebrand.com",[674,675]],["mohito.com",[674,675]],["autoczescizielonki.pl",676],["b-s.de",677],["novakid.pl",678],["piecesauto24.com",679],["earpros.com",680],["portalridice.cz",681],["kitsapcu.org",682],["nutsinbulk.*",683],["berlin-buehnen.de",684],["metropoliten.rs",685],["educa2.madrid.org",686],["immohal.de",687],["sourcepoint.theguardian.com",688],["rtlplay.be",689],["natgeotv.com",689],["llama.com",690],["meta.com",690],["setasdesevilla.com",691],["cruyff-foundation.org",692],["allianz.*",693],["energiedirect-bayern.de",694],["postnl.be",695],["postnl.nl",695],["sacyr.com",696],["volkswagen-newsroom.com",697],["openbank.*",698],["tagus-eoficina.grupogimeno.com",699],["tidal.com",700],["knax.de",701],["ordblindenetvaerket.dk",702],["boligbeton.dk",702],["dukh.dk",702],["pevgrow.com",703],["ya.ru",704],["ipolska24.pl",705],["17bankow.com",705],["kazimierzdolny.pl",705],["vpolshchi.pl",705],["dobreprogramy.pl",705],["essanews.com",705],["money.pl",705],["autokult.pl",705],["komorkomania.pl",705],["polygamia.pl",705],["autocentrum.pl",705],["homebook.pl",705],["domodi.pl",705],["jastrzabpost.pl",705],["open.fm",705],["gadzetomania.pl",705],["fotoblogia.pl",705],["abczdrowie.pl",705],["parenting.pl",705],["kafeteria.pl",705],["vibez.pl",705],["wakacje.pl",705],["extradom.pl",705],["totalmoney.pl",705],["superauto.pl",705],["nerwica.com",705],["forum.echirurgia.pl",705],["dailywrap.net",705],["pysznosci.pl",705],["genialne.pl",705],["finansowysupermarket.pl",705],["deliciousmagazine.pl",705],["audioteka.com",705],["easygo.pl",705],["so-magazyn.pl",705],["o2.pl",705],["pudelek.pl",705],["benchmark.pl",705],["wp.pl",705],["altibox.dk",706],["altibox.no",706],["talksport.com",707],["zuiderzeemuseum.nl",708],["gota.io",709],["nwzonline.de",710],["wero-wallet.eu",711],["scaleway.com",712],["bistro.sk",713]]);
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
