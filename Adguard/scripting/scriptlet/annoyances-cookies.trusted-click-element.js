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
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","800"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","800"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["a.cookie-permission--accept-button","","1000"],["button[title=\"Alle ablehnen\"]","","1800"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1000"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["button.css-15p2x3e.e112qvla0","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","1000"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["span.gtm-cookies-close","","1000"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button#wp-declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],[".b1m5dgh8 .deorxlo button[data-test-id=\"decline-button\"]","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#btn-accept-required-banner","","1000"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button[title=\"Adjust cookie preferences\"]","","500"],["button[title=\"Deny all cookies\"]","","650"],["button[data-role=\"reject-rodo\"]","","1500"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","1600"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","1800"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],["a.ea_ignore","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["div[aria-labelledby=\"dialog-heading\"] div[class^=\"StyledButtonsWrapper\"] > button + button, #dialog-dynamic-section div[class^=\"StyledButtonsWrapper\"] > button + button","","500"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button#onetrust-accept-btn-handler"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",[7,8]],["forbes.com",[7,73]],["nike.com",7],["consent.fastcar.co.uk",7],["tapmaster.ca",7],["cmpv2.standard.co.uk",[9,10]],["cmpv2.independent.co.uk",[11,12,13,169]],["wetransfer.com",[14,15]],["spiegel.de",[16,17]],["nytimes.com",[18,165]],["consent.yahoo.com",19],["tumblr.com",20],["fplstatistics.co.uk",21],["fplstatistics.com",21],["e-shop.leonidas.com",22],["cdn.privacy-mgmt.com",[23,24,43,45,46,47,48,92,94,101,108,115,126,127,128,131,133,134,141,158,183,199,212,213,216,217,218,235,284,400,545,569,607]],["walmart.ca",25],["sams.com.mx",26],["my.tonies.com",27],["cambio-carsharing.de",27],["festool.*",27],["festoolcanada.com",27],["fuso-trucks.*",27],["tracker.fressnapf.de",27],["consent.ladbible.com",[28,29]],["consent.unilad.com",[28,29]],["consent.uniladtech.com",[28,29]],["consent.gamingbible.com",[28,29]],["consent.sportbible.com",[28,29]],["consent.tyla.com",[28,29]],["consent.ladbiblegroup.com",[28,29]],["m2o.it",30],["deejay.it",30],["capital.it",30],["ilmattino.it",[30,31]],["leggo.it",[30,31]],["libero.it",30],["tiscali.it",30],["consent-manager.ft.com",[32,33,34]],["hertz.*",35],["mediaworld.it",36],["mediamarkt.*",36],["mediamarktsaturn.com",37],["uber.com",[38,166]],["ubereats.com",[38,166]],["lego.com",39],["ai.meta.com",40],["lilly.com",41],["cosmo-hairshop.de",42],["storyhouseegmont.no",42],["ilgiornale.it",44],["telekom.com",49],["telekom.net",49],["telekom.de",49],["abola.pt",50],["flytap.com",50],["ansons.de",50],["blick.ch",50],["buienradar.be",50],["crunchyroll.com",50],["digi24.ro",50],["digisport.ro",50],["digitalfoundry.net",50],["egx.net",50],["emirates.com",50],["eurogamer.it",50],["gmx.*",50],["kizi.com",50],["mail.com",50],["mcmcomiccon.com",50],["nachrichten.at",50],["nintendolife.com",50],["oe24.at",50],["paxsite.com",50],["peacocktv.com",50],["player.pl",50],["plus500.*",50],["pricerunner.com",50],["pricerunner.se",50],["pricerunner.dk",50],["proximus.be",[50,602]],["proximus.com",50],["purexbox.com",50],["pushsquare.com",50],["rugbypass.com",50],["southparkstudios.com",50],["southwest.com",50],["starwarscelebration.com",50],["sweatybetty.com",50],["thehaul.com",50],["timeextension.com",50],["travelandleisure.com",50],["tunein.com",50],["videoland.com",50],["wizzair.com",50],["wetter.at",50],["dicebreaker.com",[51,52]],["eurogamer.cz",[51,52]],["eurogamer.es",[51,52]],["eurogamer.net",[51,52]],["eurogamer.nl",[51,52]],["eurogamer.pl",[51,52]],["eurogamer.pt",[51,52]],["gamesindustry.biz",[51,52]],["jelly.deals",[51,52]],["reedpop.com",[51,52]],["rockpapershotgun.com",[51,52]],["thepopverse.com",[51,52]],["vg247.com",[51,52]],["videogameschronicle.com",[51,52]],["eurogamer.de",53],["roadtovr.com",54],["jotex.*",54],["mundodeportivo.com",[55,121]],["m.youtube.com",56],["www.youtube.com",56],["ohra.nl",57],["corriere.it",58],["gazzetta.it",58],["oggi.it",58],["cmp.sky.it",59],["tennisassa.fi",60],["formula1.com",61],["f1racing.pl",62],["music.amazon.*",[63,64]],["consent-pref.trustarc.com",65],["highlights.legaseriea.it",66],["calciomercato.com",66],["sosfanta.com",67],["chrono24.*",[68,69]],["wetter.com",70],["youmath.it",71],["pip.gov.pl",72],["dailybuzz.nl",74],["bnn.de",74],["dosenbach.ch",74],["dw.com",74],["kinepolis.*",74],["mediaite.com",74],["winfuture.de",74],["lippu.fi",74],["racingnews365.com",74],["reifendirekt.ch",74],["vaillant.*",74],["bauhaus.no",75],["bauhaus.se",75],["beko-group.de",75],["billiger.de",75],["burda.com",75],["vanharen.nl",75],["deichmann.com",[75,97,426]],["meraluna.de",75],["slashdot.org",75],["hermann-saunierduval.it",75],["protherm.cz",75],["saunierduval.es",75],["protherm.sk",75],["protherm.ua",75],["saunierduval.hu",75],["saunierduval.ro",75],["saunierduval.at",75],["awb.nl",75],["spar.hu",76],["group.vattenfall.com",76],["mediaset.it",77],["fortune.com",78],["ilrestodelcarlino.it",79],["quotidiano.net",79],["lanazione.it",79],["ilgiorno.it",79],["iltelegrafolivorno.it",79],["auto.it",80],["beauxarts.com",80],["beinsports.com",80],["bfmtv.com",[80,122]],["boursobank.com",80],["boursorama.com",[80,122]],["boursier.com",[80,206]],["brut.media",80],["canalplus.com",80],["decathlon.fr",[80,203]],["diverto.tv",80],["eden-park.com",80],["foodvisor.io",80],["frandroid.com",80],["jobijoba.*",80],["hotelsbarriere.com",80],["intersport.*",[80,180]],["idealista.it",80],["o2.fr",80],["lejdd.fr",[80,121]],["lechorepublicain.fr",80],["la-croix.com",80],["linfo.re",80],["lamontagne.fr",80],["laredoute.fr",80],["largus.fr",80],["leprogres.fr",80],["lesnumeriques.com",80],["libramemoria.com",80],["lopinion.fr",80],["marieclaire.fr",80],["maville.com",80],["michelin.*",80],["midilibre.fr",[80,625]],["meteofrance.com",80],["mondialtissus.fr",80],["orange.fr",80],["orpi.com",80],["oscaro.com",80],["ouest-france.fr",[80,93,122,626]],["parismatch.com",80],["pagesjaunes.fr",80],["programme-television.org",[80,122]],["publicsenat.fr",[80,122]],["rmcbfmplay.com",[80,122]],["science-et-vie.com",[80,121]],["seloger.com",80],["societe.com",80],["suzuki.fr",80],["sudouest.fr",80],["web-agri.fr",80],["nutri-plus.de",81],["aa.com",82],["americanairlines.*",82],["consent.capital.fr",83],["consent.voici.fr",83],["programme-tv.net",83],["cmpv2.finn.no",84],["cmp.e24.no",[85,86]],["minmote.no",[85,86]],["cmp.vg.no",[85,86]],["huffingtonpost.fr",87],["rainews.it",88],["remarkable.com",89],["netzwelt.de",90],["money.it",91],["allocine.fr",93],["jeuxvideo.com",93],["ozap.com",93],["le10sport.com",93],["xataka.com",93],["cmp.fitbook.de",94],["cmp.autobild.de",94],["cmp-sp.tagesspiegel.de",94],["cmp.bz-berlin.de",94],["cmp.cicero.de",94],["cmp.techbook.de",94],["cmp.stylebook.de",94],["cmp2.bild.de",94],["cmp2.freiepresse.de",94],["sourcepoint.wetter.de",94],["consent.finanzen.at",94],["consent.up.welt.de",94],["sourcepoint.n-tv.de",94],["sourcepoint.kochbar.de",94],["sourcepoint.rtl.de",94],["cmp.computerbild.de",94],["cmp.petbook.de",94],["cmp-sp.siegener-zeitung.de",94],["cmp-sp.sportbuzzer.de",94],["klarmobil.de",94],["technikum-wien.at",95],["eneco.nl",96],["blackpoolgazette.co.uk",98],["lep.co.uk",98],["northamptonchron.co.uk",98],["scotsman.com",98],["shieldsgazette.com",98],["thestar.co.uk",98],["portsmouth.co.uk",98],["sunderlandecho.com",98],["northernirelandworld.com",98],["3addedminutes.com",98],["anguscountyworld.co.uk",98],["banburyguardian.co.uk",98],["bedfordtoday.co.uk",98],["biggleswadetoday.co.uk",98],["bucksherald.co.uk",98],["burnleyexpress.net",98],["buxtonadvertiser.co.uk",98],["chad.co.uk",98],["daventryexpress.co.uk",98],["derbyshiretimes.co.uk",98],["derbyworld.co.uk",98],["derryjournal.com",98],["dewsburyreporter.co.uk",98],["doncasterfreepress.co.uk",98],["falkirkherald.co.uk",98],["fifetoday.co.uk",98],["glasgowworld.com",98],["halifaxcourier.co.uk",98],["harboroughmail.co.uk",98],["harrogateadvertiser.co.uk",98],["hartlepoolmail.co.uk",98],["hemeltoday.co.uk",98],["hucknalldispatch.co.uk",98],["lancasterguardian.co.uk",98],["leightonbuzzardonline.co.uk",98],["lincolnshireworld.com",98],["liverpoolworld.uk",98],["londonworld.com",98],["lutontoday.co.uk",98],["manchesterworld.uk",98],["meltontimes.co.uk",98],["miltonkeynes.co.uk",98],["newcastleworld.com",98],["newryreporter.com",98],["newsletter.co.uk",98],["northantstelegraph.co.uk",98],["northumberlandgazette.co.uk",98],["nottinghamworld.com",98],["peterboroughtoday.co.uk",98],["rotherhamadvertiser.co.uk",98],["stornowaygazette.co.uk",98],["surreyworld.co.uk",98],["thescarboroughnews.co.uk",98],["thesouthernreporter.co.uk",98],["totallysnookered.com",98],["wakefieldexpress.co.uk",98],["walesworld.com",98],["warwickshireworld.com",98],["wigantoday.net",98],["worksopguardian.co.uk",98],["yorkshireeveningpost.co.uk",98],["yorkshirepost.co.uk",98],["eurocard.com",99],["saseurobonusmastercard.se",100],["tver.jp",102],["linkedin.com",103],["elmundo.es",[104,122]],["expansion.com",104],["s-pankki.fi",105],["srf.ch",105],["alternate.de",105],["bayer04.de",105],["douglas.de",105],["dr-beckmann.com",105],["falke.com",105],["fitnessfirst.de",105],["flaschenpost.de",105],["gloeckle.de",105],["hornbach.nl",105],["hypofriend.de",105],["lactostop.de",105],["postbank.de",105],["immowelt.de",106],["joyn.*",106],["morenutrition.de",106],["mapillary.com",107],["cmp.seznam.cz",109],["marca.com",110],["raiplay.it",111],["derstandard.at",112],["derstandard.de",112],["faz.net",112],["ansa.it",113],["delladio.it",113],["huffingtonpost.it",113],["internazionale.it",113],["lastampa.it",113],["macitynet.it",113],["movieplayer.it",113],["multiplayer.it",113],["repubblica.it",113],["tomshw.it",113],["spaziogames.it",113],["tuttoandroid.net",113],["tuttotech.net",113],["ilgazzettino.it",114],["ilmessaggero.it",114],["ilsecoloxix.it",114],["privacy.motorradonline.de",115],["consent.watson.de",115],["consent.kino.de",115],["consent.desired.de",115],["dailystar.co.uk",[116,117,118,119]],["mirror.co.uk",[116,117,118,119]],["idnes.cz",120],["20minutes.fr",121],["20minutos.es",121],["24sata.hr",121],["abc.es",121],["actu.fr",121],["antena3.com",121],["antena3internacional.com",121],["atresmedia.com",121],["atresmediapublicidad.com",121],["atresmediastudios.com",121],["atresplayer.com",121],["autopista.es",121],["belfasttelegraph.co.uk",121],["bemad.es",121],["bonduelle.it",121],["bonniernews.se",121],["bt.se",121],["cadenadial.com",121],["caracol.com.co",121],["charentelibre.fr",121],["ciclismoafondo.es",121],["cnews.fr",121],["cope.es",121],["correryfitness.com",121],["courrier-picard.fr",121],["cuatro.com",121],["decathlon.nl",121],["decathlon.pl",121],["di.se",121],["diariocordoba.com",121],["diariodenavarra.es",121],["diariosur.es",121],["diariovasco.com",121],["diepresse.com",121],["divinity.es",121],["dn.se",121],["dnevnik.hr",121],["dumpert.nl",121],["ebuyclub.com",121],["edreams.de",121],["edreams.net",121],["elcomercio.es",121],["elconfidencial.com",121],["elcorreo.com",121],["eldesmarque.com",121],["eldiario.es",121],["eldiariomontanes.es",121],["elespanol.com",121],["elle.fr",121],["elpais.com",121],["elpais.es",121],["elperiodico.com",121],["elperiodicodearagon.com",121],["elplural.com",121],["energytv.es",121],["engadget.com",121],["es.ara.cat",121],["euronews.com",121],["europafm.com",121],["expressen.se",121],["factoriadeficcion.com",121],["filmstarts.de",121],["flooxernow.com",121],["folkbladet.nu",121],["footmercato.net",121],["france.tv",121],["france24.com",121],["francetvinfo.fr",121],["fussballtransfers.com",121],["fyndiq.se",121],["ghacks.net",121],["gva.be",121],["hbvl.be",121],["heraldo.es",121],["hoy.es",121],["ideal.es",121],["idealista.pt",121],["k.at",121],["krone.at",121],["kurier.at",121],["lacoste.com",121],["ladepeche.fr",121],["lalibre.be",121],["lanouvellerepublique.fr",121],["larazon.es",121],["lasexta.com",121],["lasprovincias.es",121],["latribune.fr",121],["lavanguardia.com",121],["laverdad.es",121],["lavozdegalicia.es",121],["leboncoin.fr",121],["lecturas.com",121],["ledauphine.com",121],["lejsl.com",121],["leparisien.fr",121],["lesoir.be",121],["letelegramme.fr",121],["levoixdunord.fr",121],["libremercado.com",121],["los40.com",121],["lotoquebec.com",121],["lunion.fr",121],["m6.fr",121],["marianne.cz",121],["marmiton.org",121],["mediaset.es",121],["melodia-fm.com",121],["metronieuws.nl",121],["moviepilot.de",121],["mtmad.es",121],["multilife.com.pl",121],["naszemiasto.pl",121],["nationalgeographic.com.es",121],["nicematin.com",121],["nieuwsblad.be",121],["notretemps.com",121],["numerama.com",121],["okdiario.com",121],["ondacero.es",121],["podiumpodcast.com",121],["portail.lotoquebec.com",121],["profil.at",121],["public.fr",121],["publico.es",121],["radiofrance.fr",121],["rankia.com",121],["rfi.fr",121],["rossmann.pl",121],["rtbf.be",[121,203]],["rtl.lu",121],["sensacine.com",121],["sfgame.net",121],["shure.com",121],["silicon.es",121],["sncf-connect.com",121],["sport.es",121],["sydsvenskan.se",121],["techcrunch.com",121],["telegraaf.nl",121],["telequebec.tv",121],["tf1.fr",121],["tradingsat.com",121],["trailrun.es",121],["video-streaming.orange.fr",121],["xpress.fr",121],["ivoox.com",122],["as.com",122],["slam.nl",122],["bienpublic.com",122],["funradio.fr",122],["gamepro.de",[122,177,178]],["lemon.fr",122],["lexpress.fr",122],["shadow.tech",122],["letemps.ch",122],["mein-mmo.de",122],["heureka.sk",122],["film.at",122],["dhnet.be",122],["lesechos.fr",[122,208]],["marianne.net",[122,203]],["jeanmarcmorandini.com",[122,204]],["dna.fr",122],["sudinfo.be",122],["europe1.fr",[122,204]],["rtl.be",[122,203]],["reviewingthebrew.com",122],["jaysjournal.com",122],["reignoftroy.com",122],["ryobitools.eu",[123,124]],["americanexpress.com",125],["consent.radiotimes.com",128],["sp-consent.szbz.de",129],["cmp.omni.se",130],["cmp.svd.se",130],["cmp.aftonbladet.se",130],["cmp.tv.nu",130],["consent.economist.com",132],["studentagency.cz",132],["cmpv2.foundryco.com",133],["cmpv2.infoworld.com",133],["cmpv2.arnnet.com.au",133],["sp-cdn.pcgames.de",134],["sp-cdn.pcgameshardware.de",134],["consentv2.sport1.de",134],["cmp.mz.de",134],["cmpv2.tori.fi",135],["cdn.privacy-mgmt.co",136],["consent.spielaffe.de",137],["degiro.*",138],["epochtimes.de",138],["vikingline.com",138],["tfl.gov.uk",138],["drklein.de",138],["hildegardis-krankenhaus.de",138],["kleer.se",138],["lotto.pl",138],["mineralstech.com",138],["volunteer.digitalboost.org.uk",138],["starhotels.com",138],["tefl.com",138],["universumglobal.com",138],["1und1.de",139],["infranken.de",140],["cmp.bunte.de",141],["cmp.chip.de",141],["cmp.focus.de",[141,453]],["estadiodeportivo.com",142],["tameteo.*",142],["tempo.pt",142],["meteored.*",142],["pogoda.com",142],["yourweather.co.uk",142],["tempo.com",142],["theweather.net",142],["tiempo.com",142],["ilmeteo.net",142],["daswetter.com",142],["kicker.de",143],["formulatv.com",144],["web.de",145],["lefigaro.fr",146],["linternaute.com",147],["consent.caminteresse.fr",148],["volksfreund.de",149],["rp-online.de",149],["dailypost.co.uk",150],["the-express.com",150],["bluray-disc.de",151],["elio-systems.com",151],["stagatha-fachklinik.de",151],["tarife.mediamarkt.de",151],["lz.de",151],["gaggenau.com",151],["saturn.de",152],["eltiempo.es",[153,154]],["otempo.pt",155],["atlasformen.*",156],["cmp-sp.goettinger-tageblatt.de",157],["cmp-sp.saechsische.de",157],["cmp-sp.ln-online.de",157],["cz.de",157],["dewezet.de",157],["dnn.de",157],["haz.de",157],["gnz.de",157],["landeszeitung.de",157],["lvz.de",157],["maz-online.de",157],["ndz.de",157],["op-marburg.de",157],["ostsee-zeitung.de",157],["paz-online.de",157],["reisereporter.de",157],["rga.de",157],["rnd.de",157],["siegener-zeitung.de",157],["sn-online.de",157],["solinger-tageblatt.de",157],["sportbuzzer.de",157],["szlz.de",157],["tah.de",157],["torgauerzeitung.de",157],["waz-online.de",157],["privacy.maennersache.de",157],["sinergy.ch",159],["agglo-valais-central.ch",159],["biomedcentral.com",160],["hsbc.*",161],["hsbcnet.com",161],["hsbcinnovationbanking.com",161],["create.hsbc",161],["gbm.hsbc.com",161],["hsbc.co.uk",162],["internationalservices.hsbc.com",162],["history.hsbc.com",162],["about.hsbc.co.uk",163],["privatebanking.hsbc.com",164],["independent.co.uk",167],["privacy.crash.net",167],["the-independent.com",168],["argos.co.uk",170],["poco.de",[171,172]],["moebelix.*",171],["moemax.*",171],["xxxlutz.*",171],["xxxlesnina.*",171],["moebel24.ch",172],["meubles.fr",172],["meubelo.nl",172],["moebel.de",172],["lipo.ch",173],["schubiger.ch",174],["aedt.de",175],["berlin-live.de",175],["connect.de",175],["gutefrage.net",175],["insideparadeplatz.ch",175],["morgenpost.de",175],["play3.de",175],["thueringen24.de",175],["pdfupload.io",176],["gamestar.de",[177,178,212]],["verksamt.se",179],["acmemarkets.com",180],["amtrak.com",180],["beko.com",180],["bepanthen.com.au",180],["berocca.com.au",180],["booking.com",180],["centrum.sk",180],["claratyne.com.au",180],["credit-suisse.com",180],["ceskatelevize.cz",180],["deporvillage.*",180],["de.vanguard",180],["dhl.de",180],["digikey.*",180],["drafthouse.com",180],["dunelm.com",180],["fello.se",180],["flashscore.fr",180],["flightradar24.com",180],["fnac.es",180],["foodandwine.com",180],["fourseasons.com",180],["khanacademy.org",180],["konami.com",180],["jll.*",180],["jobs.redbull.com",180],["hellenicbank.com",180],["gemini.pl",180],["groceries.asda.com",180],["lamborghini.com",180],["menshealth.com",180],["n26.com",180],["nintendo.com",180],["oneweb.net",180],["panasonic.com",180],["parkside-diy.com",180],["pluto.tv",180],["popularmechanics.com",180],["polskieradio.pl",180],["radissonhotels.com",180],["ricardo.ch",180],["rockstargames.com",180],["rte.ie",180],["salesforce.com",180],["samsonite.*",180],["spirit.com",180],["stenaline.co.uk",180],["swisscom.ch",180],["swisspass.ch",180],["technologyfromsage.com",180],["telenet.be",180],["tntsports.co.uk",180],["theepochtimes.com",180],["toujeo.com",180],["questdiagnostics.com",180],["wallapop.com",180],["wickes.co.uk",180],["workingtitlefilms.com",180],["vattenfall.de",180],["winparts.fr",180],["yoigo.com",180],["zoominfo.com",180],["allegiantair.com",181],["hallmarkchannel.com",181],["incorez.com",181],["noovle.com",181],["otter.ai",181],["plarium.com",181],["telsy.com",181],["timenterprise.it",181],["tim.it",181],["tradersunion.com",181],["fnac.*",181],["yeti.com",181],["here.com",[182,634]],["vodafone.com",182],["cmp.heise.de",184],["cmp.am-online.com",184],["cmp.motorcyclenews.com",184],["consent.newsnow.co.uk",184],["cmp.todays-golfer.com",184],["koeser.com",185],["central-bb.de",186],["brainmarket.pl",187],["getroots.app",188],["cart-in.re",[189,565]],["prestonpublishing.pl",190],["zara.com",191],["lepermislibre.fr",191],["negociardivida.spcbrasil.org.br",192],["adidas.*",193],["privacy.topreality.sk",194],["privacy.autobazar.eu",194],["vu.lt",195],["adnkronos.com",[196,197]],["cornwalllive.com",[196,197]],["cyprus-mail.com",[196,197]],["einthusan.tv",[196,197]],["informazione.it",[196,197]],["mymovies.it",[196,197]],["tuttoeuropei.com",[196,197]],["video.lacnews24.it",[196,197]],["protothema.gr",196],["flash.gr",196],["taxscouts.com",198],["online.no",200],["telenor.no",200],["austrian.com",201],["lufthansa.com",201],["kampfkunst-herz.de",202],["glow25.de",202],["hornetsecurity.com",202],["kayzen.io",202],["wasserkunst-hamburg.de",202],["zahnspange-oelde.de",202],["bnc.ca",203],["egora.fr",203],["engelvoelkers.com",203],["estrategiasdeinversion.com",203],["festo.com",203],["francebleu.fr",203],["francemediasmonde.com",203],["geny.com",203],["giphy.com",203],["idealista.com",203],["infolibre.es",203],["information.tv5monde.com",203],["ing.es",203],["knipex.de",203],["laprovence.com",203],["lemondeinformatique.fr",203],["libertaddigital.com",203],["mappy.com",203],["orf.at",203],["philibertnet.com",203],["researchgate.net",203],["standaard.be",203],["stroilioro.com",203],["taxfix.de",203],["telecinco.es",203],["vistaalegre.com",203],["zimbra.free.fr",203],["usinenouvelle.com",205],["reussir.fr",207],["bruendl.at",209],["latamairlines.com",210],["elisa.ee",211],["baseendpoint.brigitte.de",212],["baseendpoint.gala.de",212],["baseendpoint.haeuser.de",212],["baseendpoint.stern.de",212],["baseendpoint.urbia.de",212],["cmp.tag24.de",212],["cmp-sp.handelsblatt.com",212],["cmpv2.berliner-zeitung.de",212],["golem.de",212],["consent.t-online.de",212],["sp-consent.stuttgarter-nachrichten.de",213],["sp-consent.stuttgarter-zeitung.de",213],["regjeringen.no",214],["sp-manager-magazin-de.manager-magazin.de",215],["consent.11freunde.de",215],["centrum24.pl",219],["replay.lsm.lv",220],["ltv.lsm.lv",220],["bernistaba.lsm.lv",220],["stadt-wien.at",221],["verl.de",221],["cubo-sauna.de",221],["mbl.is",221],["auto-medienportal.net",221],["mobile.de",222],["cookist.it",223],["fanpage.it",223],["geopop.it",223],["lexplain.it",223],["royalmail.com",224],["gmx.net",225],["gmx.ch",226],["mojehobby.pl",227],["super-hobby.*",227],["sp.stylevamp.de",228],["cmp.wetteronline.de",228],["audi.*",229],["easyjet.com",229],["experian.co.uk",229],["postoffice.co.uk",229],["tescobank.com",229],["internetaptieka.lv",[230,231]],["wells.pt",232],["dskdirect.bg",233],["cmpv2.dba.dk",234],["spcmp.crosswordsolver.com",235],["ecco.com",236],["thomann.de",237],["landkreis-kronach.de",238],["northcoast.com",239],["chaingpt.org",239],["bandenconcurrent.nl",240],["bandenexpert.be",240],["reserved.com",241],["metro.it",242],["makro.es",242],["metro.sk",242],["metro-cc.hr",242],["makro.nl",242],["metro.bg",242],["metro.at",242],["metro-tr.com",242],["metro.de",242],["metro.fr",242],["makro.cz",242],["metro.ro",242],["makro.pt",242],["makro.pl",242],["sklepy-odido.pl",242],["rastreator.com",242],["metro.ua",243],["metro.rs",243],["metro-kz.com",243],["metro.md",243],["metro.hu",243],["metro-cc.ru",243],["metro.pk",243],["balay.es",244],["constructa.com",244],["dafy-moto.com",245],["akku-shop.nl",246],["akkushop-austria.at",246],["akkushop-b2b.de",246],["akkushop.de",246],["akkushop.dk",246],["batterie-boutique.fr",246],["akkushop-schweiz.ch",247],["evzuttya.com.ua",248],["eobuv.cz",248],["eobuwie.com.pl",248],["ecipele.hr",248],["eavalyne.lt",248],["efootwear.eu",248],["eschuhe.ch",248],["eskor.se",248],["chaussures.fr",248],["ecipo.hu",248],["eobuv.com.ua",248],["eobuv.sk",248],["epantofi.ro",248],["epapoutsia.gr",248],["escarpe.it",248],["eschuhe.de",248],["obuvki.bg",248],["zapatos.es",248],["swedbank.ee",249],["mudanzavila.es",250],["bienmanger.com",251],["gesipa.*",252],["gesipausa.com",252],["beckhoff.com",252],["zitekick.dk",253],["eltechno.dk",253],["okazik.pl",253],["batteryempire.*",254],["maxi.rs",255],["garmin.com",256],["invisalign.*",256],["one4all.ie",256],["osprey.com",256],["wideroe.no",257],["bmw.*",258],["kijk.nl",259],["nordania.dk",260],["danskebank.*",260],["danskeci.com",260],["danicapension.dk",260],["dehn.*",261],["gewerbegebiete.de",262],["cordia.fr",263],["vola.fr",264],["lafi.fr",265],["skyscanner.*",266],["coolblue.*",267],["sanareva.*",268],["atida.fr",268],["bbva.*",269],["bbvauk.com",269],["expertise.unimi.it",270],["altenberg.de",271],["vestel.es",272],["tsb.co.uk",273],["buienradar.nl",[274,275]],["linsenplatz.de",276],["budni.de",277],["erstecardclub.hr",277],["teufel.de",[278,279]],["abp.nl",280],["simplea.sk",281],["flip.bg",282],["kiertokanki.com",283],["leirovins.be",285],["vias.be",286],["edf.fr",287],["virbac.com",287],["diners.hr",287],["squarehabitat.fr",287],["arbitrobancariofinanziario.it",288],["ivass.it",288],["economiapertutti.bancaditalia.it",288],["smit-sport.de",289],["gekko-computer.de",289],["jysk.al",290],["go-e.com",291],["malerblatt-medienservice.de",292],["architekturbuch.de",292],["medienservice-holz.de",292],["leuchtstark.de",292],["casius.nl",293],["coolinarika.com",294],["giga-hamburg.de",294],["vakgaragevannunen.nl",294],["fortuluz.es",294],["finna.fi",294],["eurogrow.es",294],["vakgaragevandertholen.nl",294],["whufc.com",294],["envafors.dk",295],["dabbolig.dk",[296,297]],["spp.nextpit.fr",298],["daruk-emelok.hu",299],["exakta.se",300],["larca.de",301],["roli.com",302],["okazii.ro",303],["lr-shop-direkt.de",303],["portalprzedszkolny.pl",303],["tgvinoui.sncf",304],["l-bank.de",305],["interhyp.de",306],["indigoneo.*",307],["transparency.meta.com",308],["dojusagro.lt",309],["eok.ee",309],["safran-group.com",309],["sr-ramenendeuren.be",309],["ilovefreegle.org",309],["tribexr.com",309],["strato.*",310],["strato-hosting.co.uk",310],["auto.de",311],["contentkingapp.com",312],["otterbox.com",313],["stoertebeker-brauquartier.com",314],["stoertebeker.com",314],["stoertebeker-eph.com",314],["aparts.pl",315],["sinsay.com",[316,317]],["benu.cz",318],["stockholmresilience.org",319],["ludvika.se",319],["kammarkollegiet.se",319],["cazenovecapital.com",320],["statestreet.com",321],["beopen.lv",322],["cesukoncertzale.lv",323],["dodo.fr",324],["pepper.it",325],["pepper.pl",325],["preisjaeger.at",325],["mydealz.de",325],["dealabs.com",325],["hotukdeals.com",325],["chollometro.com",325],["makelaarsland.nl",326],["bricklink.com",327],["bestinver.es",328],["icvs2023.conf.tuwien.ac.at",329],["racshop.co.uk",[330,331]],["baabuk.com",332],["sapien.io",332],["app.lepermislibre.fr",333],["multioferta.es",334],["testwise.com",[335,336]],["tonyschocolonely.com",337],["fitplus.is",337],["fransdegrebber.nl",337],["lilliputpress.ie",337],["lexibo.com",337],["marin-milou.com",337],["dare2tri.com",337],["t3micro.*",337],["la-vie-naturelle.com",[338,339]],["inovelli.com",340],["uonetplus.vulcan.net.pl",[341,342]],["consent.helagotland.se",343],["oper.koeln",[344,345]],["deezer.com",346],["console.scaleway.com",347],["hoteldesartssaigon.com",348],["autoritedelaconcurrence.fr",349],["groupeonepoint.com",349],["geneanet.org",349],["carrieres.groupegalerieslafayette.com",349],["clickskeks.at",350],["clickskeks.de",350],["abt-sportsline.de",350],["forbo.com",351],["stores.sk",351],["nerdstar.de",351],["prace.cz",351],["profesia.sk",351],["profesia.cz",351],["pracezarohem.cz",351],["atmoskop.cz",351],["seduo.sk",351],["seduo.cz",351],["teamio.com",351],["arnold-robot.com",351],["cvonline.lt",351],["cv.lv",351],["cv.ee",351],["dirbam.lt",351],["visidarbi.lv",351],["otsintood.ee",351],["webtic.it",351],["gerth.de",352],["pamiatki.pl",353],["initse.com",354],["salvagny.org",355],["augsburger-allgemeine.de",356],["stabila.com",357],["stwater.co.uk",358],["suncalc.org",[359,360]],["swisstph.ch",361],["taxinstitute.ie",362],["get-in-it.de",363],["tempcover.com",[364,365]],["guildford.gov.uk",366],["easyparts.*",[367,368]],["easyparts-recambios.es",[367,368]],["easyparts-rollerteile.de",[367,368]],["drimsim.com",369],["canyon.com",[370,371]],["vevovo.be",[372,373]],["vendezvotrevoiture.be",[372,373]],["wirkaufendeinauto.at",[372,373]],["vikoberallebiler.dk",[372,373]],["wijkopenautos.nl",[372,373]],["vikoperdinbil.se",[372,373]],["noicompriamoauto.it",[372,373]],["vendezvotrevoiture.fr",[372,373]],["compramostucoche.es",[372,373]],["wijkopenautos.be",[372,373]],["auto-doc.*",374],["autodoc.*",374],["autodoc24.*",374],["topautoosat.fi",374],["autoteiledirekt.de",374],["autoczescionline24.pl",374],["tuttoautoricambi.it",374],["onlinecarparts.co.uk",374],["autoalkatreszek24.hu",374],["autodielyonline24.sk",374],["reservdelar24.se",374],["pecasauto24.pt",374],["reservedeler24.co.no",374],["piecesauto24.lu",374],["rezervesdalas24.lv",374],["besteonderdelen.nl",374],["recambioscoche.es",374],["antallaktikaexartimata.gr",374],["piecesauto.fr",374],["teile-direkt.ch",374],["lpi.org",375],["refurbed.*",376],["flyingtiger.com",[377,512]],["borgomontecedrone.it",377],["recaro-shop.com",377],["gartenhotel-crystal.at",377],["swffm.de",377],["fayn.com",378],["eam-netz.de",379],["umicore.*",380],["veiligverkeer.be",380],["vsv.be",380],["dehogerielen.be",380],["gera.de",381],["mfr-chessy.fr",382],["mfr-lamure.fr",382],["mfr-saint-romain.fr",382],["mfr-lapalma.fr",382],["mfrvilliemorgon.asso.fr",382],["mfr-charentay.fr",382],["mfr.fr",382],["nationaltrust.org.uk",383],["hej-natural.*",384],["ib-hansmeier.de",385],["rsag.de",386],["esaa-eu.org",386],["aknw.de",386],["answear.*",387],["theprotocol.it",[388,389]],["lightandland.co.uk",390],["etransport.pl",391],["wohnen-im-alter.de",392],["johnmuirhealth.com",[393,394]],["markushaenni.com",395],["airbaltic.com",396],["gamersgate.com",396],["zorgzaam010.nl",397],["etos.nl",398],["paruvendu.fr",399],["cmpv2.bistro.sk",401],["privacy.bazar.sk",401],["hennamorena.com",402],["newsello.pl",403],["porp.pl",404],["golfbreaks.com",405],["lieferando.de",406],["just-eat.*",406],["justeat.*",406],["pyszne.pl",406],["lieferando.at",406],["takeaway.com",406],["thuisbezorgd.nl",406],["holidayhypermarket.co.uk",407],["atu.de",408],["atu-flottenloesungen.de",408],["but.fr",408],["edeka.de",408],["fortuneo.fr",408],["maif.fr",408],["particuliers.sg.fr",408],["sparkasse.at",408],["group.vig",408],["tf1info.fr",408],["dpdgroup.com",409],["dpd.fr",409],["dpd.com",409],["cosmosdirekt.de",409],["bstrongoutlet.pt",410],["nobbot.com",411],["isarradweg.de",[412,413]],["flaxmanestates.com",413],["inland-casas.com",413],["finlayson.fi",[414,415]],["cowaymega.ca",[414,415]],["arktis.de",416],["desktronic.de",416],["belleek.com",416],["brauzz.com",416],["cowaymega.com",416],["dockin.de",416],["dryrobe.com",416],["formswim.com",416],["hairtalk.se",416],["hallmark.co.uk",416],["loopearplugs.com",416],["oleus.com",416],["peopleofshibuya.com",416],["pullup-dip.com",416],["sanctum.shop",416],["tartanblanketco.com",416],["beam.co.uk",[417,418]],["autobahn.de",419],["consent-cdn.zeit.de",420],["coway-usa.com",421],["steiners.shop",422],["ecmrecords.com",423],["malaikaraiss.com",423],["koch-mit.de",423],["zeitreisen.zeit.de",423],["wefashion.com",424],["merkur.dk",425],["ionos.*",427],["omegawatches.com",428],["carefully.be",429],["aerotime.aero",429],["rocket-league.com",430],["dws.com",431],["bosch-homecomfort.com",432],["elmleblanc-optibox.fr",432],["monservicechauffage.fr",432],["boschrexroth.com",432],["home-connect.com",433],["lowrider.at",[434,435]],["mesto.de",436],["intersport.gr",437],["intersport.bg",437],["intersport.com.cy",437],["intersport.ro",437],["ticsante.com",438],["techopital.com",438],["millenniumprize.org",439],["hepster.com",440],["ellisphere.fr",441],["peterstaler.de",442],["blackforest-still.de",442],["tiendaplayaundi.com",443],["ajtix.co.uk",444],["raja.fr",445],["rajarani.de",445],["rajapack.*",[445,446]],["avery-zweckform.com",447],["1xinternet.de",447],["futterhaus.de",447],["dasfutterhaus.at",447],["frischeparadies.de",447],["fmk-steuer.de",447],["selgros.de",447],["transgourmet.de",447],["mediapart.fr",448],["athlon.com",449],["alumniportal-deutschland.org",450],["snoopmedia.com",450],["myguide.de",450],["study-in-germany.de",450],["daad.de",450],["cornelsen.de",[451,452]],["vinmonopolet.no",454],["tvp.info",455],["tvp.pl",455],["tvpworld.com",455],["brtvp.pl",455],["tvpparlament.pl",455],["belsat.eu",455],["warnung.bund.de",456],["mediathek.lfv-bayern.de",457],["allegro.*",458],["allegrolokalnie.pl",458],["ceneo.pl",[458,564]],["czc.cz",458],["eon.pl",[459,460]],["ylasatakunta.fi",[461,462]],["mega-image.ro",463],["louisvuitton.com",464],["bodensee-airport.eu",465],["department56.com",466],["allendesignsstudio.com",466],["designsbylolita.co",466],["shop.enesco.com",466],["savoriurbane.com",467],["miumiu.com",468],["church-footwear.com",468],["clickdoc.fr",469],["car-interface.com",470],["monolithdesign.it",470],["smileypack.de",[471,472]],["malijunaki.si",473],["finom.co",474],["orange.es",[475,476]],["fdm-travel.dk",477],["hummel.dk",477],["jysk.nl",477],["power.no",477],["skousen.dk",477],["velliv.dk",477],["whiteaway.com",477],["whiteaway.no",477],["whiteaway.se",477],["skousen.no",477],["energinet.dk",477],["elkjop.no",478],["medimax.de",479],["lotto.it",480],["readspeaker.com",480],["team.blue",480],["ibistallinncenter.ee",481],["aaron.ai",482],["futureverse.com",483],["tandem.co.uk",483],["insights.com",484],["thebathcollection.com",485],["coastfashion.com",[486,487]],["oasisfashion.com",[486,487]],["warehousefashion.com",[486,487]],["misspap.com",[486,487]],["karenmillen.com",[486,487]],["boohooman.com",[486,487]],["hdt.de",488],["wolt.com",489],["myprivacy.dpgmedia.nl",490],["myprivacy.dpgmedia.be",490],["www.dpgmediagroup.com",490],["xohotels.com",491],["sim24.de",492],["tnt.com",493],["uza.be",494],["uzafoundation.be",494],["uzajobs.be",494],["bergzeit.*",[495,496]],["cinemas-lumiere.com",497],["cdiscount.com",498],["brabus.com",499],["roborock.com",500],["strumentimusicali.net",501],["maisonmargiela.com",502],["webfleet.com",503],["dragonflyshipping.ca",504],["broekhuis.nl",505],["groningenairport.nl",505],["nemck.cz",506],["bokio.se",507],["sap-press.com",508],["roughguides.com",[509,510]],["korvonal.com",511],["rexbo.*",513],["itau.com.br",514],["bbg.gv.at",515],["portal.taxi.eu",516],["topannonces.fr",517],["homap.fr",518],["artifica.fr",519],["plan-interactif.com",519],["ville-cesson.fr",519],["moismoliere.com",520],["unihomes.co.uk",521],["bkk.hu",522],["coiffhair.com",523],["ptc.eu",524],["ziegert-group.com",[525,631]],["lassuranceretraite.fr",526],["interieur.gouv.fr",526],["toureiffel.paris",526],["economie.gouv.fr",526],["education.gouv.fr",526],["livoo.fr",526],["su.se",526],["zappo.fr",526],["smdv.de",527],["digitalo.de",527],["petiteamelie.*",528],["mojanorwegia.pl",529],["koempf24.ch",[530,531]],["teichitekten24.de",[530,531]],["koempf24.de",[530,531]],["wolff-finnhaus-shop.de",[530,531]],["asnbank.nl",532],["blgwonen.nl",532],["regiobank.nl",532],["snsbank.nl",532],["vulcan.net.pl",[533,534]],["ogresnovads.lv",535],["partenamut.be",536],["pirelli.com",537],["unicredit.it",538],["effector.pl",539],["zikodermo.pl",[540,541]],["wassererleben.ch",542],["devolksbank.nl",543],["caixabank.es",544],["cyberport.de",546],["cyberport.at",546],["slevomat.cz",547],["kfzparts24.de",548],["runnersneed.com",549],["aachener-zeitung.de",550],["sportpursuit.com",551],["druni.es",[552,566]],["druni.pt",[552,566]],["delta.com",553],["onliner.by",[554,555]],["vejdirektoratet.dk",556],["usaa.com",557],["consorsbank.de",558],["metroag.de",559],["kupbilecik.pl",560],["oxfordeconomics.com",561],["oxfordeconomics.com.au",[562,563]],["routershop.nl",565],["woo.pt",565],["e-jumbo.gr",567],["alza.*",568],["rmf.fm",570],["rmf24.pl",570],["tracfone.com",571],["lequipe.fr",572],["gala.fr",573],["purepeople.com",574],["3sat.de",575],["zdf.de",575],["filmfund.lu",576],["welcometothejungle.com",576],["triblive.com",577],["rai.it",578],["fbto.nl",579],["europa.eu",580],["caisse-epargne.fr",581],["banquepopulaire.fr",581],["bigmammagroup.com",582],["studentagency.sk",582],["studentagency.eu",582],["winparts.be",583],["winparts.nl",583],["winparts.eu",584],["winparts.ie",584],["winparts.se",584],["sportano.*",[585,586]],["crocs.*",587],["chronext.ch",588],["chronext.de",588],["chronext.at",588],["chronext.com",589],["chronext.co.uk",589],["chronext.fr",590],["chronext.nl",591],["chronext.it",592],["galerieslafayette.com",593],["bazarchic.com",594],["stilord.*",595],["tiko.pt",596],["nsinternational.com",597],["laposte.fr",598],["meinbildkalender.de",599],["gls-group.com",600],["chilis.com",601],["account.bhvr.com",603],["everand.com",603],["lucidchart.com",603],["intercars.ro",[603,604]],["scribd.com",603],["guidepoint.com",603],["erlebnissennerei-zillertal.at",605],["hintertuxergletscher.at",605],["tiwag.at",605],["anwbvignetten.nl",606],["playseatstore.com",606],["swiss-sport.tv",608],["targobank-magazin.de",609],["zeit-verlagsgruppe.de",609],["online-physiotherapie.de",609],["kieferorthopaede-freisingsmile.de",610],["nltraining.nl",611],["kmudigital.at",612],["mintysquare.com",613],["consent.thetimes.com",614],["cadenaser.com",615],["berlinale.de",616],["lebonlogiciel.com",617],["pharmastar.it",618],["washingtonpost.com",619],["brillenplatz.de",620],["angelplatz.de",620],["dt.mef.gov.it",621],["raffeldeals.com",622],["offistore.fi",623],["collinsaerospace.com",624],["radioapp.lv",627],["hagengrote.de",628],["hemden-meister.de",628],["vorteilshop.com",629],["capristores.gr",630],["getaround.com",632],["technomarket.bg",633],["epiphone.com",635],["gibson.com",635],["maestroelectronics.com",635],["cropp.com",[636,637]],["housebrand.com",[636,637]],["mohito.com",[636,637]],["autoczescizielonki.pl",638],["b-s.de",639],["earpros.com",640],["portalridice.cz",641],["kitsapcu.org",642],["nutsinbulk.*",643],["berlin-buehnen.de",644],["metropoliten.rs",645],["educa2.madrid.org",646],["immohal.de",647],["sourcepoint.theguardian.com",648],["max.com",649],["rtlplay.be",650],["natgeotv.com",650],["llama.com",651],["meta.com",651],["ya.ru",652],["ipolska24.pl",653],["17bankow.com",653],["5mindlazdrowia.pl",653],["kazimierzdolny.pl",653],["vpolshchi.pl",653],["dobreprogramy.pl",653],["essanews.com",653],["dailywrap.ca",653],["dailywrap.uk",653],["money.pl",653],["autokult.pl",653],["komorkomania.pl",653],["polygamia.pl",653],["autocentrum.pl",653],["allani.pl",653],["homebook.pl",653],["domodi.pl",653],["jastrzabpost.pl",653],["open.fm",653],["gadzetomania.pl",653],["fotoblogia.pl",653],["abczdrowie.pl",653],["parenting.pl",653],["kafeteria.pl",653],["vibez.pl",653],["wakacje.pl",653],["extradom.pl",653],["totalmoney.pl",653],["superauto.pl",653],["nerwica.com",653],["forum.echirurgia.pl",653],["dailywrap.net",653],["pysznosci.pl",653],["genialne.pl",653],["finansowysupermarket.pl",653],["deliciousmagazine.pl",653],["audioteka.com",653],["easygo.pl",653],["so-magazyn.pl",653],["o2.pl",653],["pudelek.pl",653],["benchmark.pl",653],["wp.pl",653],["altibox.dk",654],["altibox.no",654],["uefa.com",655],["talksport.com",656],["zuiderzeemuseum.nl",657]]);
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
