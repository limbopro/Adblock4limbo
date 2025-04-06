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
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[aria-labelledby=\"manage_cookies_title\"] [aria-hidden=\"true\"]:has(> [aria-disabled=\"true\"][role=\"button\"]) + [aria-label][role=\"button\"][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button.js-decline-all-cookies","","1000"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["button.css-15p2x3e.e112qvla0","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","1000"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["span.gtm-cookies-close","","1000"],["button[data-accept-cookie=\"true\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button#wp-declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["div[data-test-id=\"CookieConsentsBanner.Root\"] button[data-test-id=\"decline-button\"]","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#btn-accept-required-banner","","1000"],["button#elc-decline-all-link","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button[title=\"Adjust cookie preferences\"]","","500"],["button[title=\"Deny all cookies\"]","","650"],["button[data-role=\"reject-rodo\"]","","1500"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","1600"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],["a.ea_ignore","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["button[label*=\"Essential\"]","","1800"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["div[aria-labelledby=\"dialog-heading\"] div[class^=\"StyledButtonsWrapper\"] > button + button, #dialog-dynamic-section div[class^=\"StyledButtonsWrapper\"] > button + button","","500"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",7],["forbes.com",[7,70]],["nike.com",7],["consent.fastcar.co.uk",7],["tapmaster.ca",7],["cmpv2.standard.co.uk",[8,9]],["cmpv2.independent.co.uk",[10,11,12,166]],["wetransfer.com",[13,14]],["spiegel.de",[15,16]],["nytimes.com",[17,162]],["consent.yahoo.com",18],["tumblr.com",19],["fplstatistics.co.uk",20],["e-shop.leonidas.com",21],["cdn.privacy-mgmt.com",[22,23,42,43,44,45,85,90,92,99,106,113,123,124,125,128,130,131,138,155,180,190,203,204,207,208,209,274,389,520,544,582]],["walmart.ca",24],["sams.com.mx",25],["cambio-carsharing.de",26],["festool.*",26],["festoolcanada.com",26],["fuso-trucks.*",26],["tracker.fressnapf.de",26],["consent.ladbible.com",[27,28]],["consent.unilad.com",[27,28]],["consent.uniladtech.com",[27,28]],["consent.gamingbible.com",[27,28]],["consent.sportbible.com",[27,28]],["consent.tyla.com",[27,28]],["consent.ladbiblegroup.com",[27,28]],["m2o.it",29],["deejay.it",29],["capital.it",29],["ilmattino.it",[29,30]],["leggo.it",[29,30]],["libero.it",29],["tiscali.it",29],["consent-manager.ft.com",[31,32,33]],["hertz.*",34],["mediaworld.it",35],["mediamarkt.*",35],["mediamarktsaturn.com",36],["uber.com",[37,163]],["ubereats.com",[37,163]],["lego.com",38],["ai.meta.com",39],["lilly.com",40],["cosmo-hairshop.de",41],["storyhouseegmont.no",41],["telekom.com",46],["telekom.net",46],["telekom.de",46],["abola.pt",47],["flytap.com",47],["ansons.de",47],["blick.ch",47],["buienradar.be",47],["crunchyroll.com",47],["digi24.ro",47],["digisport.ro",47],["digitalfoundry.net",47],["egx.net",47],["emirates.com",47],["eurogamer.it",47],["gmx.*",47],["kizi.com",47],["mail.com",47],["mcmcomiccon.com",47],["nachrichten.at",47],["nintendolife.com",47],["oe24.at",47],["paxsite.com",47],["peacocktv.com",47],["player.pl",47],["plus500.*",47],["pricerunner.com",47],["pricerunner.se",47],["pricerunner.dk",47],["proximus.be",[47,577]],["proximus.com",47],["purexbox.com",47],["pushsquare.com",47],["rugbypass.com",47],["southparkstudios.com",47],["southwest.com",47],["starwarscelebration.com",47],["sweatybetty.com",47],["thehaul.com",47],["timeextension.com",47],["travelandleisure.com",47],["tunein.com",47],["videoland.com",47],["wizzair.com",47],["wetter.at",47],["dicebreaker.com",[48,49]],["eurogamer.cz",[48,49]],["eurogamer.es",[48,49]],["eurogamer.net",[48,49]],["eurogamer.nl",[48,49]],["eurogamer.pl",[48,49]],["eurogamer.pt",[48,49]],["gamesindustry.biz",[48,49]],["jelly.deals",[48,49]],["reedpop.com",[48,49]],["rockpapershotgun.com",[48,49]],["thepopverse.com",[48,49]],["vg247.com",[48,49]],["videogameschronicle.com",[48,49]],["eurogamer.de",50],["roadtovr.com",51],["jotex.*",51],["mundodeportivo.com",[52,119]],["m.youtube.com",53],["www.youtube.com",53],["ohra.nl",54],["corriere.it",55],["gazzetta.it",55],["oggi.it",55],["cmp.sky.it",56],["tennisassa.fi",57],["formula1.com",58],["f1racing.pl",59],["music.amazon.*",[60,61]],["consent-pref.trustarc.com",62],["highlights.legaseriea.it",63],["calciomercato.com",63],["sosfanta.com",64],["chrono24.*",[65,66]],["wetter.com",67],["youmath.it",68],["pip.gov.pl",69],["dailybuzz.nl",71],["bnn.de",71],["dosenbach.ch",71],["dw.com",71],["kinepolis.*",71],["mediaite.com",71],["winfuture.de",71],["lippu.fi",71],["racingnews365.com",71],["reifendirekt.ch",71],["vaillant.*",71],["bauhaus.no",72],["bauhaus.se",72],["beko-group.de",72],["billiger.de",72],["burda.com",72],["vanharen.nl",72],["deichmann.com",[72,95,411]],["meraluna.de",72],["slashdot.org",72],["hermann-saunierduval.it",72],["protherm.cz",72],["saunierduval.es",72],["protherm.sk",72],["protherm.ua",72],["saunierduval.hu",72],["saunierduval.ro",72],["saunierduval.at",72],["awb.nl",72],["spar.hu",73],["group.vattenfall.com",73],["mediaset.it",74],["fortune.com",75],["ilrestodelcarlino.it",76],["quotidiano.net",76],["lanazione.it",76],["ilgiorno.it",76],["iltelegrafolivorno.it",76],["auto.it",77],["beauxarts.com",77],["beinsports.com",77],["bfmtv.com",77],["boursobank.com",77],["boursorama.com",77],["boursier.com",[77,197]],["brut.media",77],["canalplus.com",77],["decathlon.fr",[77,194]],["diverto.tv",77],["eden-park.com",77],["foodvisor.io",77],["frandroid.com",77],["jobijoba.*",77],["hotelsbarriere.com",77],["intersport.*",[77,177]],["idealista.it",77],["o2.fr",77],["lejdd.fr",[77,119]],["lechorepublicain.fr",77],["la-croix.com",77],["linfo.re",77],["lamontagne.fr",77],["laredoute.fr",77],["largus.fr",77],["leprogres.fr",77],["lesnumeriques.com",77],["libramemoria.com",77],["lopinion.fr",77],["marieclaire.fr",77],["maville.com",77],["michelin.*",77],["midilibre.fr",[77,595]],["meteofrance.com",77],["mondialtissus.fr",77],["orange.fr",77],["oscaro.com",77],["ouest-france.fr",[77,91,596]],["parismatch.com",77],["pagesjaunes.fr",77],["programme-television.org",77],["publicsenat.fr",77],["rmcbfmplay.com",77],["science-et-vie.com",[77,119]],["seloger.com",77],["societe.com",77],["suzuki.fr",77],["sudouest.fr",77],["web-agri.fr",77],["nutri-plus.de",78],["aa.com",79],["americanairlines.*",79],["consent.capital.fr",80],["consent.voici.fr",80],["programme-tv.net",80],["cmpv2.finn.no",81],["cmp.e24.no",[82,83]],["cmp.vg.no",[82,83]],["huffingtonpost.fr",84],["rainews.it",86],["remarkable.com",87],["netzwelt.de",88],["money.it",89],["allocine.fr",91],["jeuxvideo.com",91],["ozap.com",91],["le10sport.com",91],["xataka.com",91],["cmp.autobild.de",92],["cmp-sp.tagesspiegel.de",92],["cmp.bz-berlin.de",92],["cmp.cicero.de",92],["cmp.techbook.de",92],["cmp.stylebook.de",92],["cmp2.bild.de",92],["cmp2.freiepresse.de",92],["sourcepoint.wetter.de",92],["consent.finanzen.at",92],["consent.up.welt.de",92],["sourcepoint.n-tv.de",92],["sourcepoint.kochbar.de",92],["sourcepoint.rtl.de",92],["cmp.computerbild.de",92],["cmp.petbook.de",92],["cmp-sp.siegener-zeitung.de",92],["cmp-sp.sportbuzzer.de",92],["klarmobil.de",92],["technikum-wien.at",93],["eneco.nl",94],["blackpoolgazette.co.uk",96],["lep.co.uk",96],["northamptonchron.co.uk",96],["scotsman.com",96],["shieldsgazette.com",96],["thestar.co.uk",96],["portsmouth.co.uk",96],["sunderlandecho.com",96],["northernirelandworld.com",96],["3addedminutes.com",96],["anguscountyworld.co.uk",96],["banburyguardian.co.uk",96],["bedfordtoday.co.uk",96],["biggleswadetoday.co.uk",96],["bucksherald.co.uk",96],["burnleyexpress.net",96],["buxtonadvertiser.co.uk",96],["chad.co.uk",96],["daventryexpress.co.uk",96],["derbyshiretimes.co.uk",96],["derbyworld.co.uk",96],["derryjournal.com",96],["dewsburyreporter.co.uk",96],["doncasterfreepress.co.uk",96],["falkirkherald.co.uk",96],["fifetoday.co.uk",96],["glasgowworld.com",96],["halifaxcourier.co.uk",96],["harboroughmail.co.uk",96],["harrogateadvertiser.co.uk",96],["hartlepoolmail.co.uk",96],["hemeltoday.co.uk",96],["hucknalldispatch.co.uk",96],["lancasterguardian.co.uk",96],["leightonbuzzardonline.co.uk",96],["lincolnshireworld.com",96],["liverpoolworld.uk",96],["londonworld.com",96],["lutontoday.co.uk",96],["manchesterworld.uk",96],["meltontimes.co.uk",96],["miltonkeynes.co.uk",96],["newcastleworld.com",96],["newryreporter.com",96],["newsletter.co.uk",96],["northantstelegraph.co.uk",96],["northumberlandgazette.co.uk",96],["nottinghamworld.com",96],["peterboroughtoday.co.uk",96],["rotherhamadvertiser.co.uk",96],["stornowaygazette.co.uk",96],["surreyworld.co.uk",96],["thescarboroughnews.co.uk",96],["thesouthernreporter.co.uk",96],["totallysnookered.com",96],["wakefieldexpress.co.uk",96],["walesworld.com",96],["warwickshireworld.com",96],["wigantoday.net",96],["worksopguardian.co.uk",96],["yorkshireeveningpost.co.uk",96],["yorkshirepost.co.uk",96],["eurocard.com",97],["saseurobonusmastercard.se",98],["tver.jp",100],["linkedin.com",101],["elmundo.es",102],["s-pankki.fi",103],["srf.ch",103],["alternate.de",103],["bayer04.de",103],["douglas.de",103],["dr-beckmann.com",103],["falke.com",103],["fitnessfirst.de",103],["flaschenpost.de",103],["gloeckle.de",103],["hornbach.nl",103],["hypofriend.de",103],["lactostop.de",103],["postbank.de",103],["immowelt.de",104],["joyn.*",104],["morenutrition.de",104],["mapillary.com",105],["cmp.seznam.cz",107],["marca.com",108],["raiplay.it",109],["derstandard.at",110],["derstandard.de",110],["faz.net",110],["ansa.it",111],["delladio.it",111],["huffingtonpost.it",111],["internazionale.it",111],["lastampa.it",111],["movieplayer.it",111],["multiplayer.it",111],["repubblica.it",111],["tomshw.it",111],["tuttoandroid.net",111],["tuttotech.net",111],["ilgazzettino.it",112],["ilmessaggero.it",112],["ilsecoloxix.it",112],["privacy.motorradonline.de",113],["consent.watson.de",113],["consent.kino.de",113],["consent.desired.de",113],["dailystar.co.uk",[114,115,116,117]],["mirror.co.uk",[114,115,116,117]],["idnes.cz",118],["20minutes.fr",119],["20minutos.es",119],["24sata.hr",119],["abc.es",119],["actu.fr",119],["antena3.com",119],["antena3internacional.com",119],["atresmedia.com",119],["atresmediapublicidad.com",119],["atresmediastudios.com",119],["atresplayer.com",119],["autopista.es",119],["belfasttelegraph.co.uk",119],["bt.se",119],["bonduelle.it",119],["bonniernews.se",119],["caracol.com.co",119],["charentelibre.fr",119],["ciclismoafondo.es",119],["cnews.fr",119],["cope.es",119],["correryfitness.com",119],["courrier-picard.fr",119],["decathlon.nl",119],["decathlon.pl",119],["di.se",119],["diariocordoba.com",119],["diepresse.com",119],["dn.se",119],["dnevnik.hr",119],["dumpert.nl",119],["ebuyclub.com",119],["edreams.de",119],["edreams.net",119],["elcomercio.es",119],["elconfidencial.com",119],["eldesmarque.com",119],["elespanol.com",119],["elle.fr",119],["elpais.com",119],["elpais.es",119],["engadget.com",119],["euronews.com",119],["europafm.com",119],["expressen.se",119],["filmstarts.de",119],["flooxernow.com",119],["folkbladet.nu",119],["footmercato.net",119],["france.tv",119],["france24.com",119],["francetvinfo.fr",119],["fussballtransfers.com",119],["fyndiq.se",119],["ghacks.net",119],["gva.be",119],["hbvl.be",119],["idealista.pt",119],["k.at",119],["krone.at",119],["kurier.at",119],["lacoste.com",119],["ladepeche.fr",119],["lalibre.be",119],["lanouvellerepublique.fr",119],["lasexta.com",119],["lasprovincias.es",119],["latribune.fr",119],["leboncoin.fr",119],["ledauphine.com",119],["lejsl.com",119],["leparisien.fr",119],["lesoir.be",119],["letelegramme.fr",119],["levoixdunord.fr",119],["xpress.fr",119],["libremercado.com",119],["lotoquebec.com",119],["lunion.fr",119],["okdiario.com",119],["marmiton.org",119],["marianne.cz",119],["melodia-fm.com",119],["moviepilot.de",119],["m6.fr",119],["metronieuws.nl",119],["multilife.com.pl",119],["naszemiasto.pl",119],["nicematin.com",119],["nieuwsblad.be",119],["notretemps.com",119],["numerama.com",119],["ondacero.es",119],["profil.at",119],["portail.lotoquebec.com",119],["public.fr",119],["radiofrance.fr",119],["rankia.com",119],["rfi.fr",119],["rossmann.pl",119],["rtbf.be",[119,194]],["rtl.lu",119],["sensacine.com",119],["sfgame.net",119],["shure.com",119],["silicon.es",119],["sncf-connect.com",119],["sport.es",119],["sydsvenskan.se",119],["techcrunch.com",119],["telegraaf.nl",119],["telequebec.tv",119],["tf1.fr",119],["trailrun.es",119],["tradingsat.com",119],["video-streaming.orange.fr",119],["ryobitools.eu",[120,121]],["americanexpress.com",122],["consent.radiotimes.com",125],["sp-consent.szbz.de",126],["cmp.omni.se",127],["cmp.svd.se",127],["cmp.aftonbladet.se",127],["cmp.tv.nu",127],["consent.economist.com",129],["studentagency.cz",129],["cmpv2.foundryco.com",130],["cmpv2.infoworld.com",130],["cmpv2.arnnet.com.au",130],["sp-cdn.pcgames.de",131],["sp-cdn.pcgameshardware.de",131],["consentv2.sport1.de",131],["cmp.mz.de",131],["cmpv2.tori.fi",132],["cdn.privacy-mgmt.co",133],["consent.spielaffe.de",134],["degiro.*",135],["epochtimes.de",135],["vikingline.com",135],["tfl.gov.uk",135],["drklein.de",135],["hildegardis-krankenhaus.de",135],["lotto.pl",135],["volunteer.digitalboost.org.uk",135],["starhotels.com",135],["tefl.com",135],["universumglobal.com",135],["1und1.de",136],["infranken.de",137],["cmp.bunte.de",138],["cmp.chip.de",138],["cmp.focus.de",[138,438]],["estadiodeportivo.com",139],["tameteo.*",139],["tempo.pt",139],["meteored.*",139],["pogoda.com",139],["yourweather.co.uk",139],["tempo.com",139],["theweather.net",139],["tiempo.com",139],["ilmeteo.net",139],["daswetter.com",139],["kicker.de",140],["formulatv.com",141],["web.de",142],["lefigaro.fr",143],["linternaute.com",144],["consent.caminteresse.fr",145],["volksfreund.de",146],["rp-online.de",146],["dailypost.co.uk",147],["the-express.com",147],["bluray-disc.de",148],["elio-systems.com",148],["stagatha-fachklinik.de",148],["tarife.mediamarkt.de",148],["lz.de",148],["gaggenau.com",148],["saturn.de",149],["eltiempo.es",[150,151]],["otempo.pt",152],["atlasformen.*",153],["cmp-sp.goettinger-tageblatt.de",154],["cmp-sp.saechsische.de",154],["cmp-sp.ln-online.de",154],["cz.de",154],["dewezet.de",154],["dnn.de",154],["haz.de",154],["gnz.de",154],["landeszeitung.de",154],["lvz.de",154],["maz-online.de",154],["ndz.de",154],["op-marburg.de",154],["ostsee-zeitung.de",154],["paz-online.de",154],["reisereporter.de",154],["rga.de",154],["rnd.de",154],["siegener-zeitung.de",154],["sn-online.de",154],["solinger-tageblatt.de",154],["sportbuzzer.de",154],["szlz.de",154],["tah.de",154],["torgauerzeitung.de",154],["waz-online.de",154],["privacy.maennersache.de",154],["sinergy.ch",156],["agglo-valais-central.ch",156],["biomedcentral.com",157],["hsbc.*",158],["hsbcnet.com",158],["hsbcinnovationbanking.com",158],["create.hsbc",158],["gbm.hsbc.com",158],["hsbc.co.uk",159],["internationalservices.hsbc.com",159],["history.hsbc.com",159],["about.hsbc.co.uk",160],["privatebanking.hsbc.com",161],["independent.co.uk",164],["privacy.crash.net",164],["the-independent.com",165],["argos.co.uk",167],["poco.de",[168,169]],["moebelix.*",168],["moemax.*",168],["xxxlutz.*",168],["xxxlesnina.*",168],["moebel24.ch",169],["meubles.fr",169],["meubelo.nl",169],["moebel.de",169],["lipo.ch",170],["schubiger.ch",171],["aedt.de",172],["berlin-live.de",172],["connect.de",172],["gutefrage.net",172],["insideparadeplatz.ch",172],["morgenpost.de",172],["play3.de",172],["thueringen24.de",172],["pdfupload.io",173],["gamestar.de",[174,175,203]],["gamepro.de",[174,175]],["verksamt.se",176],["acmemarkets.com",177],["amtrak.com",177],["beko.com",177],["bepanthen.com.au",177],["berocca.com.au",177],["booking.com",177],["centrum.sk",177],["claratyne.com.au",177],["credit-suisse.com",177],["ceskatelevize.cz",177],["deporvillage.*",177],["de.vanguard",177],["dhl.de",177],["digikey.*",177],["fello.se",177],["flashscore.fr",177],["flightradar24.com",177],["fnac.es",177],["foodandwine.com",177],["fourseasons.com",177],["khanacademy.org",177],["konami.com",177],["jll.*",177],["jobs.redbull.com",177],["hellenicbank.com",177],["gemini.pl",177],["groceries.asda.com",177],["lamborghini.com",177],["n26.com",177],["nintendo.com",177],["oneweb.net",177],["panasonic.com",177],["parkside-diy.com",177],["pluto.tv",177],["polskieradio.pl",177],["radissonhotels.com",177],["ricardo.ch",177],["rockstargames.com",177],["rte.ie",177],["salesforce.com",177],["samsonite.*",177],["spirit.com",177],["stenaline.co.uk",177],["swisscom.ch",177],["swisspass.ch",177],["technologyfromsage.com",177],["telenet.be",177],["theepochtimes.com",177],["toujeo.com",177],["questdiagnostics.com",177],["wallapop.com",177],["workingtitlefilms.com",177],["vattenfall.de",177],["winparts.fr",177],["yoigo.com",177],["zoominfo.com",177],["hallmarkchannel.com",178],["incorez.com",178],["noovle.com",178],["otter.ai",178],["plarium.com",178],["telsy.com",178],["timenterprise.it",178],["tim.it",178],["tradersunion.com",178],["fnac.*",178],["yeti.com",178],["here.com",[179,604]],["vodafone.com",179],["cmp.heise.de",181],["cmp.am-online.com",181],["cmp.motorcyclenews.com",181],["consent.newsnow.co.uk",181],["zara.com",182],["lepermislibre.fr",182],["negociardivida.spcbrasil.org.br",183],["adidas.*",184],["privacy.topreality.sk",185],["privacy.autobazar.eu",185],["vu.lt",186],["adnkronos.com",[187,188]],["cornwalllive.com",[187,188]],["cyprus-mail.com",[187,188]],["einthusan.tv",[187,188]],["informazione.it",[187,188]],["mymovies.it",[187,188]],["tuttoeuropei.com",[187,188]],["video.lacnews24.it",[187,188]],["protothema.gr",187],["flash.gr",187],["taxscouts.com",189],["online.no",191],["telenor.no",191],["austrian.com",192],["lufthansa.com",192],["hornetsecurity.com",193],["kayzen.io",193],["wasserkunst-hamburg.de",193],["zahnspange-oelde.de",193],["bnc.ca",194],["philibertnet.com",194],["egora.fr",194],["festo.com",194],["standaard.be",194],["engelvoelkers.com",194],["francemediasmonde.com",194],["francebleu.fr",194],["knipex.de",194],["geny.com",194],["giphy.com",194],["idealista.com",194],["information.tv5monde.com",194],["laprovence.com",194],["lemondeinformatique.fr",194],["mappy.com",194],["marianne.net",194],["orf.at",194],["ing.es",194],["taxfix.de",194],["rtl.be",194],["researchgate.net",194],["stroilioro.com",194],["vistaalegre.com",194],["zimbra.free.fr",194],["jeanmarcmorandini.com",195],["europe1.fr",195],["usinenouvelle.com",196],["reussir.fr",198],["lesechos.fr",199],["bruendl.at",200],["latamairlines.com",201],["elisa.ee",202],["baseendpoint.brigitte.de",203],["baseendpoint.gala.de",203],["baseendpoint.haeuser.de",203],["baseendpoint.stern.de",203],["baseendpoint.urbia.de",203],["cmp.tag24.de",203],["cmp-sp.handelsblatt.com",203],["cmpv2.berliner-zeitung.de",203],["golem.de",203],["consent.t-online.de",203],["sp-consent.stuttgarter-nachrichten.de",204],["sp-consent.stuttgarter-zeitung.de",204],["regjeringen.no",205],["sp-manager-magazin-de.manager-magazin.de",206],["consent.11freunde.de",206],["centrum24.pl",210],["replay.lsm.lv",211],["ltv.lsm.lv",211],["bernistaba.lsm.lv",211],["stadt-wien.at",212],["verl.de",212],["cubo-sauna.de",212],["mbl.is",212],["auto-medienportal.net",212],["mobile.de",213],["cookist.it",214],["fanpage.it",214],["geopop.it",214],["lexplain.it",214],["royalmail.com",215],["gmx.net",216],["gmx.ch",217],["mojehobby.pl",218],["super-hobby.*",218],["sp.stylevamp.de",219],["cmp.wetteronline.de",219],["audi.*",220],["easyjet.com",220],["experian.co.uk",220],["postoffice.co.uk",220],["tescobank.com",220],["internetaptieka.lv",[221,222]],["wells.pt",223],["dskdirect.bg",224],["cmpv2.dba.dk",225],["spcmp.crosswordsolver.com",226],["thomann.de",227],["landkreis-kronach.de",228],["northcoast.com",229],["chaingpt.org",229],["bandenconcurrent.nl",230],["bandenexpert.be",230],["reserved.com",231],["metro.it",232],["makro.es",232],["metro.sk",232],["metro-cc.hr",232],["makro.nl",232],["metro.bg",232],["metro.at",232],["metro-tr.com",232],["metro.de",232],["metro.fr",232],["makro.cz",232],["metro.ro",232],["makro.pt",232],["makro.pl",232],["sklepy-odido.pl",232],["rastreator.com",232],["metro.ua",233],["metro.rs",233],["metro-kz.com",233],["metro.md",233],["metro.hu",233],["metro-cc.ru",233],["metro.pk",233],["balay.es",234],["constructa.com",234],["dafy-moto.com",235],["akku-shop.nl",236],["akkushop-austria.at",236],["akkushop-b2b.de",236],["akkushop.de",236],["akkushop.dk",236],["batterie-boutique.fr",236],["akkushop-schweiz.ch",237],["evzuttya.com.ua",238],["eobuv.cz",238],["eobuwie.com.pl",238],["ecipele.hr",238],["eavalyne.lt",238],["efootwear.eu",238],["eschuhe.ch",238],["eskor.se",238],["chaussures.fr",238],["ecipo.hu",238],["eobuv.com.ua",238],["eobuv.sk",238],["epantofi.ro",238],["epapoutsia.gr",238],["escarpe.it",238],["eschuhe.de",238],["obuvki.bg",238],["zapatos.es",238],["swedbank.ee",239],["mudanzavila.es",240],["bienmanger.com",241],["gesipa.*",242],["gesipausa.com",242],["beckhoff.com",242],["zitekick.dk",243],["eltechno.dk",243],["okazik.pl",243],["batteryempire.*",244],["maxi.rs",245],["garmin.com",246],["invisalign.*",246],["one4all.ie",246],["osprey.com",246],["wideroe.no",247],["bmw.*",248],["kijk.nl",249],["nordania.dk",250],["danskebank.*",250],["danskeci.com",250],["danicapension.dk",250],["dehn.*",251],["gewerbegebiete.de",252],["cordia.fr",253],["vola.fr",254],["lafi.fr",255],["skyscanner.*",256],["coolblue.*",257],["sanareva.*",258],["atida.fr",258],["bbva.*",259],["bbvauk.com",259],["expertise.unimi.it",260],["altenberg.de",261],["vestel.es",262],["tsb.co.uk",263],["buienradar.nl",[264,265]],["linsenplatz.de",266],["budni.de",267],["erstecardclub.hr",267],["teufel.de",[268,269]],["abp.nl",270],["simplea.sk",271],["flip.bg",272],["kiertokanki.com",273],["leirovins.be",275],["vias.be",276],["edf.fr",277],["virbac.com",277],["diners.hr",277],["squarehabitat.fr",277],["arbitrobancariofinanziario.it",278],["ivass.it",278],["economiapertutti.bancaditalia.it",278],["smit-sport.de",279],["gekko-computer.de",279],["jysk.al",280],["go-e.com",281],["malerblatt-medienservice.de",282],["architekturbuch.de",282],["medienservice-holz.de",282],["leuchtstark.de",282],["casius.nl",283],["coolinarika.com",284],["giga-hamburg.de",284],["vakgaragevannunen.nl",284],["fortuluz.es",284],["finna.fi",284],["eurogrow.es",284],["vakgaragevandertholen.nl",284],["whufc.com",284],["envafors.dk",285],["dabbolig.dk",[286,287]],["spp.nextpit.fr",288],["daruk-emelok.hu",289],["exakta.se",290],["larca.de",291],["roli.com",292],["okazii.ro",293],["lr-shop-direkt.de",293],["portalprzedszkolny.pl",293],["tgvinoui.sncf",294],["l-bank.de",295],["interhyp.de",296],["indigoneo.*",297],["transparency.meta.com",298],["dojusagro.lt",299],["eok.ee",299],["safran-group.com",299],["sr-ramenendeuren.be",299],["ilovefreegle.org",299],["tribexr.com",299],["strato.*",300],["strato-hosting.co.uk",300],["auto.de",301],["contentkingapp.com",302],["otterbox.com",303],["stoertebeker-brauquartier.com",304],["stoertebeker.com",304],["stoertebeker-eph.com",304],["aparts.pl",305],["sinsay.com",[306,307]],["benu.cz",308],["stockholmresilience.org",309],["ludvika.se",309],["kammarkollegiet.se",309],["cazenovecapital.com",310],["statestreet.com",311],["beopen.lv",312],["cesukoncertzale.lv",313],["dodo.fr",314],["pepper.it",315],["pepper.pl",315],["preisjaeger.at",315],["mydealz.de",315],["dealabs.com",315],["hotukdeals.com",315],["chollometro.com",315],["makelaarsland.nl",316],["bricklink.com",317],["bestinver.es",318],["icvs2023.conf.tuwien.ac.at",319],["racshop.co.uk",[320,321]],["baabuk.com",322],["sapien.io",322],["app.lepermislibre.fr",323],["multioferta.es",324],["testwise.com",[325,326]],["tonyschocolonely.com",327],["fitplus.is",327],["fransdegrebber.nl",327],["lilliputpress.ie",327],["lexibo.com",327],["marin-milou.com",327],["dare2tri.com",327],["t3micro.*",327],["la-vie-naturelle.com",[328,329]],["inovelli.com",330],["uonetplus.vulcan.net.pl",[331,332]],["consent.helagotland.se",333],["oper.koeln",[334,335]],["deezer.com",336],["console.scaleway.com",337],["hoteldesartssaigon.com",338],["autoritedelaconcurrence.fr",339],["groupeonepoint.com",339],["geneanet.org",339],["carrieres.groupegalerieslafayette.com",339],["clickskeks.at",340],["clickskeks.de",340],["abt-sportsline.de",340],["stores.sk",341],["nerdstar.de",341],["prace.cz",341],["profesia.sk",341],["profesia.cz",341],["pracezarohem.cz",341],["atmoskop.cz",341],["seduo.sk",341],["seduo.cz",341],["teamio.com",341],["arnold-robot.com",341],["cvonline.lt",341],["cv.lv",341],["cv.ee",341],["dirbam.lt",341],["visidarbi.lv",341],["otsintood.ee",341],["webtic.it",341],["gerth.de",342],["pamiatki.pl",343],["initse.com",344],["salvagny.org",345],["augsburger-allgemeine.de",346],["stabila.com",347],["stwater.co.uk",348],["suncalc.org",[349,350]],["swisstph.ch",351],["taxinstitute.ie",352],["get-in-it.de",353],["tempcover.com",[354,355]],["guildford.gov.uk",356],["easyparts.*",[357,358]],["easyparts-recambios.es",[357,358]],["easyparts-rollerteile.de",[357,358]],["drimsim.com",359],["canyon.com",[360,361]],["vevovo.be",[362,363]],["vendezvotrevoiture.be",[362,363]],["wirkaufendeinauto.at",[362,363]],["vikoberallebiler.dk",[362,363]],["wijkopenautos.nl",[362,363]],["vikoperdinbil.se",[362,363]],["noicompriamoauto.it",[362,363]],["vendezvotrevoiture.fr",[362,363]],["compramostucoche.es",[362,363]],["wijkopenautos.be",[362,363]],["auto-doc.*",364],["autodoc.*",364],["autodoc24.*",364],["topautoosat.fi",364],["autoteiledirekt.de",364],["autoczescionline24.pl",364],["tuttoautoricambi.it",364],["onlinecarparts.co.uk",364],["autoalkatreszek24.hu",364],["autodielyonline24.sk",364],["reservdelar24.se",364],["pecasauto24.pt",364],["reservedeler24.co.no",364],["piecesauto24.lu",364],["rezervesdalas24.lv",364],["besteonderdelen.nl",364],["recambioscoche.es",364],["antallaktikaexartimata.gr",364],["piecesauto.fr",364],["teile-direkt.ch",364],["lpi.org",365],["refurbed.*",366],["flyingtiger.com",367],["borgomontecedrone.it",367],["recaro-shop.com",367],["gartenhotel-crystal.at",367],["swffm.de",367],["fayn.com",368],["eam-netz.de",369],["umicore.*",370],["veiligverkeer.be",370],["vsv.be",370],["dehogerielen.be",370],["gera.de",371],["mfr-chessy.fr",372],["mfr-lamure.fr",372],["mfr-saint-romain.fr",372],["mfr-lapalma.fr",372],["mfrvilliemorgon.asso.fr",372],["mfr-charentay.fr",372],["mfr.fr",372],["nationaltrust.org.uk",373],["hej-natural.*",374],["ib-hansmeier.de",375],["rsag.de",376],["esaa-eu.org",376],["aknw.de",376],["answear.*",377],["theprotocol.it",[378,379]],["lightandland.co.uk",380],["etransport.pl",381],["wohnen-im-alter.de",382],["johnmuirhealth.com",[383,384]],["markushaenni.com",385],["airbaltic.com",386],["gamersgate.com",386],["zorgzaam010.nl",387],["paruvendu.fr",388],["cmpv2.bistro.sk",390],["privacy.bazar.sk",390],["hennamorena.com",391],["newsello.pl",392],["porp.pl",393],["golfbreaks.com",394],["lieferando.de",395],["just-eat.*",395],["justeat.*",395],["pyszne.pl",395],["lieferando.at",395],["takeaway.com",395],["thuisbezorgd.nl",395],["holidayhypermarket.co.uk",396],["atu.de",397],["atu-flottenloesungen.de",397],["but.fr",397],["edeka.de",397],["fortuneo.fr",397],["maif.fr",397],["particuliers.sg.fr",397],["sparkasse.at",397],["group.vig",397],["tf1info.fr",397],["dpdgroup.com",398],["dpd.fr",398],["dpd.com",398],["cosmosdirekt.de",398],["bstrongoutlet.pt",399],["nobbot.com",400],["isarradweg.de",[401,402]],["flaxmanestates.com",402],["inland-casas.com",402],["finlayson.fi",[403,404]],["cowaymega.ca",[403,404]],["arktis.de",405],["desktronic.de",405],["belleek.com",405],["brauzz.com",405],["cowaymega.com",405],["dockin.de",405],["dryrobe.com",405],["formswim.com",405],["hairtalk.se",405],["hallmark.co.uk",405],["loopearplugs.com",405],["oleus.com",405],["peopleofshibuya.com",405],["pullup-dip.com",405],["sanctum.shop",405],["tartanblanketco.com",405],["beam.co.uk",[406,407]],["ecmrecords.com",408],["malaikaraiss.com",408],["wefashion.com",409],["merkur.dk",410],["ionos.*",412],["omegawatches.com",413],["carefully.be",414],["aerotime.aero",414],["rocket-league.com",415],["dws.com",416],["bosch-homecomfort.com",417],["elmleblanc-optibox.fr",417],["monservicechauffage.fr",417],["boschrexroth.com",417],["home-connect.com",418],["lowrider.at",[419,420]],["mesto.de",421],["intersport.gr",422],["intersport.bg",422],["intersport.com.cy",422],["intersport.ro",422],["ticsante.com",423],["techopital.com",423],["millenniumprize.org",424],["hepster.com",425],["ellisphere.fr",426],["peterstaler.de",427],["blackforest-still.de",427],["tiendaplayaundi.com",428],["ajtix.co.uk",429],["raja.fr",430],["rajarani.de",430],["rajapack.*",[430,431]],["avery-zweckform.com",432],["1xinternet.de",432],["futterhaus.de",432],["dasfutterhaus.at",432],["frischeparadies.de",432],["fmk-steuer.de",432],["selgros.de",432],["transgourmet.de",432],["mediapart.fr",433],["athlon.com",434],["alumniportal-deutschland.org",435],["snoopmedia.com",435],["myguide.de",435],["study-in-germany.de",435],["daad.de",435],["cornelsen.de",[436,437]],["vinmonopolet.no",439],["tvp.info",440],["tvp.pl",440],["tvpworld.com",440],["brtvp.pl",440],["tvpparlament.pl",440],["belsat.eu",440],["warnung.bund.de",441],["mediathek.lfv-bayern.de",442],["allegro.*",443],["allegrolokalnie.pl",443],["ceneo.pl",[443,539]],["czc.cz",443],["eon.pl",[444,445]],["ylasatakunta.fi",[446,447]],["mega-image.ro",448],["louisvuitton.com",449],["bodensee-airport.eu",450],["department56.com",451],["allendesignsstudio.com",451],["designsbylolita.co",451],["shop.enesco.com",451],["savoriurbane.com",452],["miumiu.com",453],["church-footwear.com",453],["clickdoc.fr",454],["car-interface.com",455],["monolithdesign.it",455],["smileypack.de",[456,457]],["malijunaki.si",458],["finom.co",459],["orange.es",[460,461]],["fdm-travel.dk",462],["hummel.dk",462],["jysk.nl",462],["power.no",462],["skousen.dk",462],["velliv.dk",462],["whiteaway.com",462],["whiteaway.no",462],["whiteaway.se",462],["skousen.no",462],["energinet.dk",462],["elkjop.no",463],["medimax.de",464],["lotto.it",465],["readspeaker.com",465],["team.blue",465],["ibistallinncenter.ee",466],["aaron.ai",467],["thebathcollection.com",468],["coastfashion.com",[469,470]],["oasisfashion.com",[469,470]],["warehousefashion.com",[469,470]],["misspap.com",[469,470]],["karenmillen.com",[469,470]],["boohooman.com",[469,470]],["hdt.de",471],["wolt.com",472],["myprivacy.dpgmedia.nl",473],["myprivacy.dpgmedia.be",473],["www.dpgmediagroup.com",473],["tnt.com",474],["uza.be",475],["uzafoundation.be",475],["uzajobs.be",475],["bergzeit.*",[476,477]],["cinemas-lumiere.com",478],["cdiscount.com",479],["brabus.com",480],["roborock.com",481],["strumentimusicali.net",482],["maisonmargiela.com",483],["webfleet.com",484],["dragonflyshipping.ca",485],["broekhuis.nl",486],["groningenairport.nl",486],["nemck.cz",487],["bokio.se",488],["sap-press.com",489],["roughguides.com",[490,491]],["rexbo.*",492],["topannonces.fr",493],["homap.fr",494],["artifica.fr",495],["plan-interactif.com",495],["ville-cesson.fr",495],["moismoliere.com",496],["unihomes.co.uk",497],["bkk.hu",498],["coiffhair.com",499],["ptc.eu",500],["ziegert-group.com",[501,601]],["lassuranceretraite.fr",502],["interieur.gouv.fr",502],["toureiffel.paris",502],["economie.gouv.fr",502],["education.gouv.fr",502],["livoo.fr",502],["su.se",502],["zappo.fr",502],["smdv.de",503],["digitalo.de",503],["petiteamelie.*",504],["mojanorwegia.pl",505],["koempf24.ch",[506,507]],["teichitekten24.de",[506,507]],["koempf24.de",[506,507]],["wolff-finnhaus-shop.de",[506,507]],["asnbank.nl",508],["blgwonen.nl",508],["regiobank.nl",508],["snsbank.nl",508],["vulcan.net.pl",[509,510]],["ogresnovads.lv",511],["partenamut.be",512],["pirelli.com",513],["unicredit.it",514],["effector.pl",515],["zikodermo.pl",[516,517]],["wassererleben.ch",518],["devolksbank.nl",519],["cyberport.de",521],["slevomat.cz",522],["kfzparts24.de",523],["runnersneed.com",524],["aachener-zeitung.de",525],["sportpursuit.com",526],["druni.es",[527,541]],["druni.pt",[527,541]],["delta.com",528],["onliner.by",[529,530]],["vejdirektoratet.dk",531],["usaa.com",532],["consorsbank.de",533],["metroag.de",534],["kupbilecik.pl",535],["oxfordeconomics.com",536],["oxfordeconomics.com.au",[537,538]],["routershop.nl",540],["e-jumbo.gr",542],["alza.*",543],["rmf.fm",545],["rmf24.pl",545],["tracfone.com",546],["lequipe.fr",547],["gala.fr",548],["purepeople.com",549],["3sat.de",550],["zdf.de",550],["filmfund.lu",551],["welcometothejungle.com",551],["triblive.com",552],["rai.it",553],["fbto.nl",554],["europa.eu",555],["caisse-epargne.fr",556],["banquepopulaire.fr",556],["bigmammagroup.com",557],["studentagency.sk",557],["studentagency.eu",557],["winparts.be",558],["winparts.nl",558],["winparts.eu",559],["winparts.ie",559],["winparts.se",559],["sportano.*",[560,561]],["crocs.*",562],["chronext.ch",563],["chronext.de",563],["chronext.at",563],["chronext.com",564],["chronext.co.uk",564],["chronext.fr",565],["chronext.nl",566],["chronext.it",567],["galerieslafayette.com",568],["bazarchic.com",569],["stilord.*",570],["tiko.pt",571],["nsinternational.com",572],["laposte.fr",573],["meinbildkalender.de",574],["gls-group.com",575],["chilis.com",576],["account.bhvr.com",578],["everand.com",578],["lucidchart.com",578],["intercars.ro",[578,579]],["scribd.com",578],["guidepoint.com",578],["erlebnissennerei-zillertal.at",580],["hintertuxergletscher.at",580],["tiwag.at",580],["anwbvignetten.nl",581],["playseatstore.com",581],["swiss-sport.tv",583],["targobank-magazin.de",584],["consent.thetimes.com",585],["cadenaser.com",586],["berlinale.de",587],["lebonlogiciel.com",588],["pharmastar.it",589],["brillenplatz.de",590],["angelplatz.de",590],["dt.mef.gov.it",591],["raffeldeals.com",592],["offistore.fi",593],["collinsaerospace.com",594],["radioapp.lv",597],["hagengrote.de",598],["hemden-meister.de",598],["vorteilshop.com",599],["capristores.gr",600],["getaround.com",602],["technomarket.bg",603],["epiphone.com",605],["gibson.com",605],["maestroelectronics.com",605],["cropp.com",[606,607]],["housebrand.com",[606,607]],["mohito.com",[606,607]],["autoczescizielonki.pl",608],["portalridice.cz",609],["nutsinbulk.*",610],["immohal.de",611],["sourcepoint.theguardian.com",612],["max.com",613],["rtlplay.be",614],["natgeotv.com",614],["llama.com",615],["meta.com",615],["ya.ru",616],["ipolska24.pl",617],["17bankow.com",617],["5mindlazdrowia.pl",617],["kazimierzdolny.pl",617],["vpolshchi.pl",617],["dobreprogramy.pl",617],["essanews.com",617],["dailywrap.ca",617],["dailywrap.uk",617],["money.pl",617],["autokult.pl",617],["komorkomania.pl",617],["polygamia.pl",617],["autocentrum.pl",617],["allani.pl",617],["homebook.pl",617],["domodi.pl",617],["jastrzabpost.pl",617],["open.fm",617],["gadzetomania.pl",617],["fotoblogia.pl",617],["abczdrowie.pl",617],["parenting.pl",617],["kafeteria.pl",617],["vibez.pl",617],["wakacje.pl",617],["extradom.pl",617],["totalmoney.pl",617],["superauto.pl",617],["nerwica.com",617],["forum.echirurgia.pl",617],["dailywrap.net",617],["pysznosci.pl",617],["genialne.pl",617],["finansowysupermarket.pl",617],["deliciousmagazine.pl",617],["audioteka.com",617],["easygo.pl",617],["so-magazyn.pl",617],["o2.pl",617],["pudelek.pl",617],["benchmark.pl",617],["wp.pl",617],["altibox.dk",618],["altibox.no",618]]);
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
