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
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[aria-labelledby=\"manage_cookies_title\"] [aria-hidden=\"true\"]:has(> [aria-disabled=\"true\"][role=\"button\"]) + [aria-label][role=\"button\"][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button[title=\"I do not agree\"]"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","800"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["a.cookie-permission--accept-button","","1000"],["button[title=\"Alle ablehnen\"]","","1800"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button.js-decline-all-cookies","","1000"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["button.css-15p2x3e.e112qvla0","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","1000"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["span.gtm-cookies-close","","1000"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button#wp-declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],[".b1m5dgh8 .deorxlo button[data-test-id=\"decline-button\"]","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#btn-accept-required-banner","","1000"],["button#elc-decline-all-link","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button[title=\"Adjust cookie preferences\"]","","500"],["button[title=\"Deny all cookies\"]","","650"],["button[data-role=\"reject-rodo\"]","","1500"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","1600"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","1800"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],["a.ea_ignore","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["div[aria-labelledby=\"dialog-heading\"] div[class^=\"StyledButtonsWrapper\"] > button + button, #dialog-dynamic-section div[class^=\"StyledButtonsWrapper\"] > button + button","","500"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button#onetrust-accept-btn-handler"],["button.allow-cookies-once"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",7],["forbes.com",[7,71]],["nike.com",7],["consent.fastcar.co.uk",7],["tapmaster.ca",7],["cmpv2.standard.co.uk",[8,9]],["cmpv2.independent.co.uk",[10,11,12,167]],["wetransfer.com",[13,14]],["spiegel.de",[15,16]],["nytimes.com",[17,163]],["consent.yahoo.com",18],["tumblr.com",19],["fplstatistics.co.uk",20],["fplstatistics.com",20],["e-shop.leonidas.com",21],["cdn.privacy-mgmt.com",[22,23,42,43,44,45,46,86,91,93,100,107,114,124,125,126,129,131,132,139,156,181,196,209,210,213,214,215,280,396,531,555,593]],["walmart.ca",24],["sams.com.mx",25],["cambio-carsharing.de",26],["festool.*",26],["festoolcanada.com",26],["fuso-trucks.*",26],["tracker.fressnapf.de",26],["consent.ladbible.com",[27,28]],["consent.unilad.com",[27,28]],["consent.uniladtech.com",[27,28]],["consent.gamingbible.com",[27,28]],["consent.sportbible.com",[27,28]],["consent.tyla.com",[27,28]],["consent.ladbiblegroup.com",[27,28]],["m2o.it",29],["deejay.it",29],["capital.it",29],["ilmattino.it",[29,30]],["leggo.it",[29,30]],["libero.it",29],["tiscali.it",29],["consent-manager.ft.com",[31,32,33]],["hertz.*",34],["mediaworld.it",35],["mediamarkt.*",35],["mediamarktsaturn.com",36],["uber.com",[37,164]],["ubereats.com",[37,164]],["lego.com",38],["ai.meta.com",39],["lilly.com",40],["cosmo-hairshop.de",41],["storyhouseegmont.no",41],["telekom.com",47],["telekom.net",47],["telekom.de",47],["abola.pt",48],["flytap.com",48],["ansons.de",48],["blick.ch",48],["buienradar.be",48],["crunchyroll.com",48],["digi24.ro",48],["digisport.ro",48],["digitalfoundry.net",48],["egx.net",48],["emirates.com",48],["eurogamer.it",48],["gmx.*",48],["kizi.com",48],["mail.com",48],["mcmcomiccon.com",48],["nachrichten.at",48],["nintendolife.com",48],["oe24.at",48],["paxsite.com",48],["peacocktv.com",48],["player.pl",48],["plus500.*",48],["pricerunner.com",48],["pricerunner.se",48],["pricerunner.dk",48],["proximus.be",[48,588]],["proximus.com",48],["purexbox.com",48],["pushsquare.com",48],["rugbypass.com",48],["southparkstudios.com",48],["southwest.com",48],["starwarscelebration.com",48],["sweatybetty.com",48],["thehaul.com",48],["timeextension.com",48],["travelandleisure.com",48],["tunein.com",48],["videoland.com",48],["wizzair.com",48],["wetter.at",48],["dicebreaker.com",[49,50]],["eurogamer.cz",[49,50]],["eurogamer.es",[49,50]],["eurogamer.net",[49,50]],["eurogamer.nl",[49,50]],["eurogamer.pl",[49,50]],["eurogamer.pt",[49,50]],["gamesindustry.biz",[49,50]],["jelly.deals",[49,50]],["reedpop.com",[49,50]],["rockpapershotgun.com",[49,50]],["thepopverse.com",[49,50]],["vg247.com",[49,50]],["videogameschronicle.com",[49,50]],["eurogamer.de",51],["roadtovr.com",52],["jotex.*",52],["mundodeportivo.com",[53,120]],["m.youtube.com",54],["www.youtube.com",54],["ohra.nl",55],["corriere.it",56],["gazzetta.it",56],["oggi.it",56],["cmp.sky.it",57],["tennisassa.fi",58],["formula1.com",59],["f1racing.pl",60],["music.amazon.*",[61,62]],["consent-pref.trustarc.com",63],["highlights.legaseriea.it",64],["calciomercato.com",64],["sosfanta.com",65],["chrono24.*",[66,67]],["wetter.com",68],["youmath.it",69],["pip.gov.pl",70],["dailybuzz.nl",72],["bnn.de",72],["dosenbach.ch",72],["dw.com",72],["kinepolis.*",72],["mediaite.com",72],["winfuture.de",72],["lippu.fi",72],["racingnews365.com",72],["reifendirekt.ch",72],["vaillant.*",72],["bauhaus.no",73],["bauhaus.se",73],["beko-group.de",73],["billiger.de",73],["burda.com",73],["vanharen.nl",73],["deichmann.com",[73,96,422]],["meraluna.de",73],["slashdot.org",73],["hermann-saunierduval.it",73],["protherm.cz",73],["saunierduval.es",73],["protherm.sk",73],["protherm.ua",73],["saunierduval.hu",73],["saunierduval.ro",73],["saunierduval.at",73],["awb.nl",73],["spar.hu",74],["group.vattenfall.com",74],["mediaset.it",75],["fortune.com",76],["ilrestodelcarlino.it",77],["quotidiano.net",77],["lanazione.it",77],["ilgiorno.it",77],["iltelegrafolivorno.it",77],["auto.it",78],["beauxarts.com",78],["beinsports.com",78],["bfmtv.com",78],["boursobank.com",78],["boursorama.com",78],["boursier.com",[78,203]],["brut.media",78],["canalplus.com",78],["decathlon.fr",[78,200]],["diverto.tv",78],["eden-park.com",78],["foodvisor.io",78],["frandroid.com",78],["jobijoba.*",78],["hotelsbarriere.com",78],["intersport.*",[78,178]],["idealista.it",78],["o2.fr",78],["lejdd.fr",[78,120]],["lechorepublicain.fr",78],["la-croix.com",78],["linfo.re",78],["lamontagne.fr",78],["laredoute.fr",78],["largus.fr",78],["leprogres.fr",78],["lesnumeriques.com",78],["libramemoria.com",78],["lopinion.fr",78],["marieclaire.fr",78],["maville.com",78],["michelin.*",78],["midilibre.fr",[78,609]],["meteofrance.com",78],["mondialtissus.fr",78],["orange.fr",78],["oscaro.com",78],["ouest-france.fr",[78,92,610]],["parismatch.com",78],["pagesjaunes.fr",78],["programme-television.org",78],["publicsenat.fr",78],["rmcbfmplay.com",78],["science-et-vie.com",[78,120]],["seloger.com",78],["societe.com",78],["suzuki.fr",78],["sudouest.fr",78],["web-agri.fr",78],["nutri-plus.de",79],["aa.com",80],["americanairlines.*",80],["consent.capital.fr",81],["consent.voici.fr",81],["programme-tv.net",81],["cmpv2.finn.no",82],["cmp.e24.no",[83,84]],["cmp.vg.no",[83,84]],["huffingtonpost.fr",85],["rainews.it",87],["remarkable.com",88],["netzwelt.de",89],["money.it",90],["allocine.fr",92],["jeuxvideo.com",92],["ozap.com",92],["le10sport.com",92],["xataka.com",92],["cmp.autobild.de",93],["cmp-sp.tagesspiegel.de",93],["cmp.bz-berlin.de",93],["cmp.cicero.de",93],["cmp.techbook.de",93],["cmp.stylebook.de",93],["cmp2.bild.de",93],["cmp2.freiepresse.de",93],["sourcepoint.wetter.de",93],["consent.finanzen.at",93],["consent.up.welt.de",93],["sourcepoint.n-tv.de",93],["sourcepoint.kochbar.de",93],["sourcepoint.rtl.de",93],["cmp.computerbild.de",93],["cmp.petbook.de",93],["cmp-sp.siegener-zeitung.de",93],["cmp-sp.sportbuzzer.de",93],["klarmobil.de",93],["technikum-wien.at",94],["eneco.nl",95],["blackpoolgazette.co.uk",97],["lep.co.uk",97],["northamptonchron.co.uk",97],["scotsman.com",97],["shieldsgazette.com",97],["thestar.co.uk",97],["portsmouth.co.uk",97],["sunderlandecho.com",97],["northernirelandworld.com",97],["3addedminutes.com",97],["anguscountyworld.co.uk",97],["banburyguardian.co.uk",97],["bedfordtoday.co.uk",97],["biggleswadetoday.co.uk",97],["bucksherald.co.uk",97],["burnleyexpress.net",97],["buxtonadvertiser.co.uk",97],["chad.co.uk",97],["daventryexpress.co.uk",97],["derbyshiretimes.co.uk",97],["derbyworld.co.uk",97],["derryjournal.com",97],["dewsburyreporter.co.uk",97],["doncasterfreepress.co.uk",97],["falkirkherald.co.uk",97],["fifetoday.co.uk",97],["glasgowworld.com",97],["halifaxcourier.co.uk",97],["harboroughmail.co.uk",97],["harrogateadvertiser.co.uk",97],["hartlepoolmail.co.uk",97],["hemeltoday.co.uk",97],["hucknalldispatch.co.uk",97],["lancasterguardian.co.uk",97],["leightonbuzzardonline.co.uk",97],["lincolnshireworld.com",97],["liverpoolworld.uk",97],["londonworld.com",97],["lutontoday.co.uk",97],["manchesterworld.uk",97],["meltontimes.co.uk",97],["miltonkeynes.co.uk",97],["newcastleworld.com",97],["newryreporter.com",97],["newsletter.co.uk",97],["northantstelegraph.co.uk",97],["northumberlandgazette.co.uk",97],["nottinghamworld.com",97],["peterboroughtoday.co.uk",97],["rotherhamadvertiser.co.uk",97],["stornowaygazette.co.uk",97],["surreyworld.co.uk",97],["thescarboroughnews.co.uk",97],["thesouthernreporter.co.uk",97],["totallysnookered.com",97],["wakefieldexpress.co.uk",97],["walesworld.com",97],["warwickshireworld.com",97],["wigantoday.net",97],["worksopguardian.co.uk",97],["yorkshireeveningpost.co.uk",97],["yorkshirepost.co.uk",97],["eurocard.com",98],["saseurobonusmastercard.se",99],["tver.jp",101],["linkedin.com",102],["elmundo.es",103],["expansion.com",103],["s-pankki.fi",104],["srf.ch",104],["alternate.de",104],["bayer04.de",104],["douglas.de",104],["dr-beckmann.com",104],["falke.com",104],["fitnessfirst.de",104],["flaschenpost.de",104],["gloeckle.de",104],["hornbach.nl",104],["hypofriend.de",104],["lactostop.de",104],["postbank.de",104],["immowelt.de",105],["joyn.*",105],["morenutrition.de",105],["mapillary.com",106],["cmp.seznam.cz",108],["marca.com",109],["raiplay.it",110],["derstandard.at",111],["derstandard.de",111],["faz.net",111],["ansa.it",112],["delladio.it",112],["huffingtonpost.it",112],["internazionale.it",112],["lastampa.it",112],["movieplayer.it",112],["multiplayer.it",112],["repubblica.it",112],["tomshw.it",112],["spaziogames.it",112],["tuttoandroid.net",112],["tuttotech.net",112],["ilgazzettino.it",113],["ilmessaggero.it",113],["ilsecoloxix.it",113],["privacy.motorradonline.de",114],["consent.watson.de",114],["consent.kino.de",114],["consent.desired.de",114],["dailystar.co.uk",[115,116,117,118]],["mirror.co.uk",[115,116,117,118]],["idnes.cz",119],["20minutes.fr",120],["20minutos.es",120],["24sata.hr",120],["abc.es",120],["actu.fr",120],["antena3.com",120],["antena3internacional.com",120],["atresmedia.com",120],["atresmediapublicidad.com",120],["atresmediastudios.com",120],["atresplayer.com",120],["autopista.es",120],["belfasttelegraph.co.uk",120],["bemad.es",120],["bonduelle.it",120],["bonniernews.se",120],["bt.se",120],["cadenadial.com",120],["caracol.com.co",120],["charentelibre.fr",120],["ciclismoafondo.es",120],["cnews.fr",120],["cope.es",120],["correryfitness.com",120],["courrier-picard.fr",120],["cuatro.com",120],["decathlon.nl",120],["decathlon.pl",120],["di.se",120],["diariocordoba.com",120],["diariodenavarra.es",120],["diariosur.es",120],["diariovasco.com",120],["diepresse.com",120],["divinity.es",120],["dn.se",120],["dnevnik.hr",120],["dumpert.nl",120],["ebuyclub.com",120],["edreams.de",120],["edreams.net",120],["elcomercio.es",120],["elconfidencial.com",120],["elcorreo.com",120],["eldesmarque.com",120],["eldiario.es",120],["eldiariomontanes.es",120],["elespanol.com",120],["elle.fr",120],["elpais.com",120],["elpais.es",120],["elperiodico.com",120],["elperiodicodearagon.com",120],["elplural.com",120],["energytv.es",120],["engadget.com",120],["es.ara.cat",120],["euronews.com",120],["europafm.com",120],["expressen.se",120],["factoriadeficcion.com",120],["filmstarts.de",120],["flooxernow.com",120],["folkbladet.nu",120],["footmercato.net",120],["france.tv",120],["france24.com",120],["francetvinfo.fr",120],["fussballtransfers.com",120],["fyndiq.se",120],["ghacks.net",120],["gva.be",120],["hbvl.be",120],["heraldo.es",120],["hoy.es",120],["ideal.es",120],["idealista.pt",120],["k.at",120],["krone.at",120],["kurier.at",120],["lacoste.com",120],["ladepeche.fr",120],["lalibre.be",120],["lanouvellerepublique.fr",120],["larazon.es",120],["lasexta.com",120],["lasprovincias.es",120],["latribune.fr",120],["lavanguardia.com",120],["laverdad.es",120],["lavozdegalicia.es",120],["leboncoin.fr",120],["lecturas.com",120],["ledauphine.com",120],["lejsl.com",120],["leparisien.fr",120],["lesoir.be",120],["letelegramme.fr",120],["levoixdunord.fr",120],["libremercado.com",120],["los40.com",120],["lotoquebec.com",120],["lunion.fr",120],["m6.fr",120],["marianne.cz",120],["marmiton.org",120],["mediaset.es",120],["melodia-fm.com",120],["metronieuws.nl",120],["moviepilot.de",120],["mtmad.es",120],["multilife.com.pl",120],["naszemiasto.pl",120],["nationalgeographic.com.es",120],["nicematin.com",120],["nieuwsblad.be",120],["notretemps.com",120],["numerama.com",120],["okdiario.com",120],["ondacero.es",120],["podiumpodcast.com",120],["portail.lotoquebec.com",120],["profil.at",120],["public.fr",120],["publico.es",120],["radiofrance.fr",120],["rankia.com",120],["rfi.fr",120],["rossmann.pl",120],["rtbf.be",[120,200]],["rtl.lu",120],["sensacine.com",120],["sfgame.net",120],["shure.com",120],["silicon.es",120],["sncf-connect.com",120],["sport.es",120],["sydsvenskan.se",120],["techcrunch.com",120],["telegraaf.nl",120],["telequebec.tv",120],["tf1.fr",120],["tradingsat.com",120],["trailrun.es",120],["video-streaming.orange.fr",120],["xpress.fr",120],["ryobitools.eu",[121,122]],["americanexpress.com",123],["consent.radiotimes.com",126],["sp-consent.szbz.de",127],["cmp.omni.se",128],["cmp.svd.se",128],["cmp.aftonbladet.se",128],["cmp.tv.nu",128],["consent.economist.com",130],["studentagency.cz",130],["cmpv2.foundryco.com",131],["cmpv2.infoworld.com",131],["cmpv2.arnnet.com.au",131],["sp-cdn.pcgames.de",132],["sp-cdn.pcgameshardware.de",132],["consentv2.sport1.de",132],["cmp.mz.de",132],["cmpv2.tori.fi",133],["cdn.privacy-mgmt.co",134],["consent.spielaffe.de",135],["degiro.*",136],["epochtimes.de",136],["vikingline.com",136],["tfl.gov.uk",136],["drklein.de",136],["hildegardis-krankenhaus.de",136],["lotto.pl",136],["volunteer.digitalboost.org.uk",136],["starhotels.com",136],["tefl.com",136],["universumglobal.com",136],["1und1.de",137],["infranken.de",138],["cmp.bunte.de",139],["cmp.chip.de",139],["cmp.focus.de",[139,449]],["estadiodeportivo.com",140],["tameteo.*",140],["tempo.pt",140],["meteored.*",140],["pogoda.com",140],["yourweather.co.uk",140],["tempo.com",140],["theweather.net",140],["tiempo.com",140],["ilmeteo.net",140],["daswetter.com",140],["kicker.de",141],["formulatv.com",142],["web.de",143],["lefigaro.fr",144],["linternaute.com",145],["consent.caminteresse.fr",146],["volksfreund.de",147],["rp-online.de",147],["dailypost.co.uk",148],["the-express.com",148],["bluray-disc.de",149],["elio-systems.com",149],["stagatha-fachklinik.de",149],["tarife.mediamarkt.de",149],["lz.de",149],["gaggenau.com",149],["saturn.de",150],["eltiempo.es",[151,152]],["otempo.pt",153],["atlasformen.*",154],["cmp-sp.goettinger-tageblatt.de",155],["cmp-sp.saechsische.de",155],["cmp-sp.ln-online.de",155],["cz.de",155],["dewezet.de",155],["dnn.de",155],["haz.de",155],["gnz.de",155],["landeszeitung.de",155],["lvz.de",155],["maz-online.de",155],["ndz.de",155],["op-marburg.de",155],["ostsee-zeitung.de",155],["paz-online.de",155],["reisereporter.de",155],["rga.de",155],["rnd.de",155],["siegener-zeitung.de",155],["sn-online.de",155],["solinger-tageblatt.de",155],["sportbuzzer.de",155],["szlz.de",155],["tah.de",155],["torgauerzeitung.de",155],["waz-online.de",155],["privacy.maennersache.de",155],["sinergy.ch",157],["agglo-valais-central.ch",157],["biomedcentral.com",158],["hsbc.*",159],["hsbcnet.com",159],["hsbcinnovationbanking.com",159],["create.hsbc",159],["gbm.hsbc.com",159],["hsbc.co.uk",160],["internationalservices.hsbc.com",160],["history.hsbc.com",160],["about.hsbc.co.uk",161],["privatebanking.hsbc.com",162],["independent.co.uk",165],["privacy.crash.net",165],["the-independent.com",166],["argos.co.uk",168],["poco.de",[169,170]],["moebelix.*",169],["moemax.*",169],["xxxlutz.*",169],["xxxlesnina.*",169],["moebel24.ch",170],["meubles.fr",170],["meubelo.nl",170],["moebel.de",170],["lipo.ch",171],["schubiger.ch",172],["aedt.de",173],["berlin-live.de",173],["connect.de",173],["gutefrage.net",173],["insideparadeplatz.ch",173],["morgenpost.de",173],["play3.de",173],["thueringen24.de",173],["pdfupload.io",174],["gamestar.de",[175,176,209]],["gamepro.de",[175,176]],["verksamt.se",177],["acmemarkets.com",178],["amtrak.com",178],["beko.com",178],["bepanthen.com.au",178],["berocca.com.au",178],["booking.com",178],["centrum.sk",178],["claratyne.com.au",178],["credit-suisse.com",178],["ceskatelevize.cz",178],["deporvillage.*",178],["de.vanguard",178],["dhl.de",178],["digikey.*",178],["fello.se",178],["flashscore.fr",178],["flightradar24.com",178],["fnac.es",178],["foodandwine.com",178],["fourseasons.com",178],["khanacademy.org",178],["konami.com",178],["jll.*",178],["jobs.redbull.com",178],["hellenicbank.com",178],["gemini.pl",178],["groceries.asda.com",178],["lamborghini.com",178],["n26.com",178],["nintendo.com",178],["oneweb.net",178],["panasonic.com",178],["parkside-diy.com",178],["pluto.tv",178],["polskieradio.pl",178],["radissonhotels.com",178],["ricardo.ch",178],["rockstargames.com",178],["rte.ie",178],["salesforce.com",178],["samsonite.*",178],["spirit.com",178],["stenaline.co.uk",178],["swisscom.ch",178],["swisspass.ch",178],["technologyfromsage.com",178],["telenet.be",178],["theepochtimes.com",178],["toujeo.com",178],["questdiagnostics.com",178],["wallapop.com",178],["workingtitlefilms.com",178],["vattenfall.de",178],["winparts.fr",178],["yoigo.com",178],["zoominfo.com",178],["hallmarkchannel.com",179],["incorez.com",179],["noovle.com",179],["otter.ai",179],["plarium.com",179],["telsy.com",179],["timenterprise.it",179],["tim.it",179],["tradersunion.com",179],["fnac.*",179],["yeti.com",179],["here.com",[180,618]],["vodafone.com",180],["cmp.heise.de",182],["cmp.am-online.com",182],["cmp.motorcyclenews.com",182],["consent.newsnow.co.uk",182],["cmp.todays-golfer.com",182],["koeser.com",183],["central-bb.de",184],["brainmarket.pl",185],["cart-in.re",[186,551]],["prestonpublishing.pl",187],["zara.com",188],["lepermislibre.fr",188],["negociardivida.spcbrasil.org.br",189],["adidas.*",190],["privacy.topreality.sk",191],["privacy.autobazar.eu",191],["vu.lt",192],["adnkronos.com",[193,194]],["cornwalllive.com",[193,194]],["cyprus-mail.com",[193,194]],["einthusan.tv",[193,194]],["informazione.it",[193,194]],["mymovies.it",[193,194]],["tuttoeuropei.com",[193,194]],["video.lacnews24.it",[193,194]],["protothema.gr",193],["flash.gr",193],["taxscouts.com",195],["online.no",197],["telenor.no",197],["austrian.com",198],["lufthansa.com",198],["kampfkunst-herz.de",199],["hornetsecurity.com",199],["kayzen.io",199],["wasserkunst-hamburg.de",199],["zahnspange-oelde.de",199],["bnc.ca",200],["egora.fr",200],["engelvoelkers.com",200],["estrategiasdeinversion.com",200],["festo.com",200],["francebleu.fr",200],["francemediasmonde.com",200],["geny.com",200],["giphy.com",200],["idealista.com",200],["infolibre.es",200],["information.tv5monde.com",200],["ing.es",200],["knipex.de",200],["laprovence.com",200],["lemondeinformatique.fr",200],["libertaddigital.com",200],["mappy.com",200],["marianne.net",200],["orf.at",200],["philibertnet.com",200],["researchgate.net",200],["rtl.be",200],["standaard.be",200],["stroilioro.com",200],["taxfix.de",200],["telecinco.es",200],["vistaalegre.com",200],["zimbra.free.fr",200],["jeanmarcmorandini.com",201],["europe1.fr",201],["usinenouvelle.com",202],["reussir.fr",204],["lesechos.fr",205],["bruendl.at",206],["latamairlines.com",207],["elisa.ee",208],["baseendpoint.brigitte.de",209],["baseendpoint.gala.de",209],["baseendpoint.haeuser.de",209],["baseendpoint.stern.de",209],["baseendpoint.urbia.de",209],["cmp.tag24.de",209],["cmp-sp.handelsblatt.com",209],["cmpv2.berliner-zeitung.de",209],["golem.de",209],["consent.t-online.de",209],["sp-consent.stuttgarter-nachrichten.de",210],["sp-consent.stuttgarter-zeitung.de",210],["regjeringen.no",211],["sp-manager-magazin-de.manager-magazin.de",212],["consent.11freunde.de",212],["centrum24.pl",216],["replay.lsm.lv",217],["ltv.lsm.lv",217],["bernistaba.lsm.lv",217],["stadt-wien.at",218],["verl.de",218],["cubo-sauna.de",218],["mbl.is",218],["auto-medienportal.net",218],["mobile.de",219],["cookist.it",220],["fanpage.it",220],["geopop.it",220],["lexplain.it",220],["royalmail.com",221],["gmx.net",222],["gmx.ch",223],["mojehobby.pl",224],["super-hobby.*",224],["sp.stylevamp.de",225],["cmp.wetteronline.de",225],["audi.*",226],["easyjet.com",226],["experian.co.uk",226],["postoffice.co.uk",226],["tescobank.com",226],["internetaptieka.lv",[227,228]],["wells.pt",229],["dskdirect.bg",230],["cmpv2.dba.dk",231],["spcmp.crosswordsolver.com",232],["thomann.de",233],["landkreis-kronach.de",234],["northcoast.com",235],["chaingpt.org",235],["bandenconcurrent.nl",236],["bandenexpert.be",236],["reserved.com",237],["metro.it",238],["makro.es",238],["metro.sk",238],["metro-cc.hr",238],["makro.nl",238],["metro.bg",238],["metro.at",238],["metro-tr.com",238],["metro.de",238],["metro.fr",238],["makro.cz",238],["metro.ro",238],["makro.pt",238],["makro.pl",238],["sklepy-odido.pl",238],["rastreator.com",238],["metro.ua",239],["metro.rs",239],["metro-kz.com",239],["metro.md",239],["metro.hu",239],["metro-cc.ru",239],["metro.pk",239],["balay.es",240],["constructa.com",240],["dafy-moto.com",241],["akku-shop.nl",242],["akkushop-austria.at",242],["akkushop-b2b.de",242],["akkushop.de",242],["akkushop.dk",242],["batterie-boutique.fr",242],["akkushop-schweiz.ch",243],["evzuttya.com.ua",244],["eobuv.cz",244],["eobuwie.com.pl",244],["ecipele.hr",244],["eavalyne.lt",244],["efootwear.eu",244],["eschuhe.ch",244],["eskor.se",244],["chaussures.fr",244],["ecipo.hu",244],["eobuv.com.ua",244],["eobuv.sk",244],["epantofi.ro",244],["epapoutsia.gr",244],["escarpe.it",244],["eschuhe.de",244],["obuvki.bg",244],["zapatos.es",244],["swedbank.ee",245],["mudanzavila.es",246],["bienmanger.com",247],["gesipa.*",248],["gesipausa.com",248],["beckhoff.com",248],["zitekick.dk",249],["eltechno.dk",249],["okazik.pl",249],["batteryempire.*",250],["maxi.rs",251],["garmin.com",252],["invisalign.*",252],["one4all.ie",252],["osprey.com",252],["wideroe.no",253],["bmw.*",254],["kijk.nl",255],["nordania.dk",256],["danskebank.*",256],["danskeci.com",256],["danicapension.dk",256],["dehn.*",257],["gewerbegebiete.de",258],["cordia.fr",259],["vola.fr",260],["lafi.fr",261],["skyscanner.*",262],["coolblue.*",263],["sanareva.*",264],["atida.fr",264],["bbva.*",265],["bbvauk.com",265],["expertise.unimi.it",266],["altenberg.de",267],["vestel.es",268],["tsb.co.uk",269],["buienradar.nl",[270,271]],["linsenplatz.de",272],["budni.de",273],["erstecardclub.hr",273],["teufel.de",[274,275]],["abp.nl",276],["simplea.sk",277],["flip.bg",278],["kiertokanki.com",279],["leirovins.be",281],["vias.be",282],["edf.fr",283],["virbac.com",283],["diners.hr",283],["squarehabitat.fr",283],["arbitrobancariofinanziario.it",284],["ivass.it",284],["economiapertutti.bancaditalia.it",284],["smit-sport.de",285],["gekko-computer.de",285],["jysk.al",286],["go-e.com",287],["malerblatt-medienservice.de",288],["architekturbuch.de",288],["medienservice-holz.de",288],["leuchtstark.de",288],["casius.nl",289],["coolinarika.com",290],["giga-hamburg.de",290],["vakgaragevannunen.nl",290],["fortuluz.es",290],["finna.fi",290],["eurogrow.es",290],["vakgaragevandertholen.nl",290],["whufc.com",290],["envafors.dk",291],["dabbolig.dk",[292,293]],["spp.nextpit.fr",294],["daruk-emelok.hu",295],["exakta.se",296],["larca.de",297],["roli.com",298],["okazii.ro",299],["lr-shop-direkt.de",299],["portalprzedszkolny.pl",299],["tgvinoui.sncf",300],["l-bank.de",301],["interhyp.de",302],["indigoneo.*",303],["transparency.meta.com",304],["dojusagro.lt",305],["eok.ee",305],["safran-group.com",305],["sr-ramenendeuren.be",305],["ilovefreegle.org",305],["tribexr.com",305],["strato.*",306],["strato-hosting.co.uk",306],["auto.de",307],["contentkingapp.com",308],["otterbox.com",309],["stoertebeker-brauquartier.com",310],["stoertebeker.com",310],["stoertebeker-eph.com",310],["aparts.pl",311],["sinsay.com",[312,313]],["benu.cz",314],["stockholmresilience.org",315],["ludvika.se",315],["kammarkollegiet.se",315],["cazenovecapital.com",316],["statestreet.com",317],["beopen.lv",318],["cesukoncertzale.lv",319],["dodo.fr",320],["pepper.it",321],["pepper.pl",321],["preisjaeger.at",321],["mydealz.de",321],["dealabs.com",321],["hotukdeals.com",321],["chollometro.com",321],["makelaarsland.nl",322],["bricklink.com",323],["bestinver.es",324],["icvs2023.conf.tuwien.ac.at",325],["racshop.co.uk",[326,327]],["baabuk.com",328],["sapien.io",328],["app.lepermislibre.fr",329],["multioferta.es",330],["testwise.com",[331,332]],["tonyschocolonely.com",333],["fitplus.is",333],["fransdegrebber.nl",333],["lilliputpress.ie",333],["lexibo.com",333],["marin-milou.com",333],["dare2tri.com",333],["t3micro.*",333],["la-vie-naturelle.com",[334,335]],["inovelli.com",336],["uonetplus.vulcan.net.pl",[337,338]],["consent.helagotland.se",339],["oper.koeln",[340,341]],["deezer.com",342],["console.scaleway.com",343],["hoteldesartssaigon.com",344],["autoritedelaconcurrence.fr",345],["groupeonepoint.com",345],["geneanet.org",345],["carrieres.groupegalerieslafayette.com",345],["clickskeks.at",346],["clickskeks.de",346],["abt-sportsline.de",346],["stores.sk",347],["nerdstar.de",347],["prace.cz",347],["profesia.sk",347],["profesia.cz",347],["pracezarohem.cz",347],["atmoskop.cz",347],["seduo.sk",347],["seduo.cz",347],["teamio.com",347],["arnold-robot.com",347],["cvonline.lt",347],["cv.lv",347],["cv.ee",347],["dirbam.lt",347],["visidarbi.lv",347],["otsintood.ee",347],["webtic.it",347],["gerth.de",348],["pamiatki.pl",349],["initse.com",350],["salvagny.org",351],["augsburger-allgemeine.de",352],["stabila.com",353],["stwater.co.uk",354],["suncalc.org",[355,356]],["swisstph.ch",357],["taxinstitute.ie",358],["get-in-it.de",359],["tempcover.com",[360,361]],["guildford.gov.uk",362],["easyparts.*",[363,364]],["easyparts-recambios.es",[363,364]],["easyparts-rollerteile.de",[363,364]],["drimsim.com",365],["canyon.com",[366,367]],["vevovo.be",[368,369]],["vendezvotrevoiture.be",[368,369]],["wirkaufendeinauto.at",[368,369]],["vikoberallebiler.dk",[368,369]],["wijkopenautos.nl",[368,369]],["vikoperdinbil.se",[368,369]],["noicompriamoauto.it",[368,369]],["vendezvotrevoiture.fr",[368,369]],["compramostucoche.es",[368,369]],["wijkopenautos.be",[368,369]],["auto-doc.*",370],["autodoc.*",370],["autodoc24.*",370],["topautoosat.fi",370],["autoteiledirekt.de",370],["autoczescionline24.pl",370],["tuttoautoricambi.it",370],["onlinecarparts.co.uk",370],["autoalkatreszek24.hu",370],["autodielyonline24.sk",370],["reservdelar24.se",370],["pecasauto24.pt",370],["reservedeler24.co.no",370],["piecesauto24.lu",370],["rezervesdalas24.lv",370],["besteonderdelen.nl",370],["recambioscoche.es",370],["antallaktikaexartimata.gr",370],["piecesauto.fr",370],["teile-direkt.ch",370],["lpi.org",371],["refurbed.*",372],["flyingtiger.com",373],["borgomontecedrone.it",373],["recaro-shop.com",373],["gartenhotel-crystal.at",373],["swffm.de",373],["fayn.com",374],["eam-netz.de",375],["umicore.*",376],["veiligverkeer.be",376],["vsv.be",376],["dehogerielen.be",376],["gera.de",377],["mfr-chessy.fr",378],["mfr-lamure.fr",378],["mfr-saint-romain.fr",378],["mfr-lapalma.fr",378],["mfrvilliemorgon.asso.fr",378],["mfr-charentay.fr",378],["mfr.fr",378],["nationaltrust.org.uk",379],["hej-natural.*",380],["ib-hansmeier.de",381],["rsag.de",382],["esaa-eu.org",382],["aknw.de",382],["answear.*",383],["theprotocol.it",[384,385]],["lightandland.co.uk",386],["etransport.pl",387],["wohnen-im-alter.de",388],["johnmuirhealth.com",[389,390]],["markushaenni.com",391],["airbaltic.com",392],["gamersgate.com",392],["zorgzaam010.nl",393],["etos.nl",394],["paruvendu.fr",395],["cmpv2.bistro.sk",397],["privacy.bazar.sk",397],["hennamorena.com",398],["newsello.pl",399],["porp.pl",400],["golfbreaks.com",401],["lieferando.de",402],["just-eat.*",402],["justeat.*",402],["pyszne.pl",402],["lieferando.at",402],["takeaway.com",402],["thuisbezorgd.nl",402],["holidayhypermarket.co.uk",403],["atu.de",404],["atu-flottenloesungen.de",404],["but.fr",404],["edeka.de",404],["fortuneo.fr",404],["maif.fr",404],["particuliers.sg.fr",404],["sparkasse.at",404],["group.vig",404],["tf1info.fr",404],["dpdgroup.com",405],["dpd.fr",405],["dpd.com",405],["cosmosdirekt.de",405],["bstrongoutlet.pt",406],["nobbot.com",407],["isarradweg.de",[408,409]],["flaxmanestates.com",409],["inland-casas.com",409],["finlayson.fi",[410,411]],["cowaymega.ca",[410,411]],["arktis.de",412],["desktronic.de",412],["belleek.com",412],["brauzz.com",412],["cowaymega.com",412],["dockin.de",412],["dryrobe.com",412],["formswim.com",412],["hairtalk.se",412],["hallmark.co.uk",412],["loopearplugs.com",412],["oleus.com",412],["peopleofshibuya.com",412],["pullup-dip.com",412],["sanctum.shop",412],["tartanblanketco.com",412],["beam.co.uk",[413,414]],["autobahn.de",415],["consent-cdn.zeit.de",416],["coway-usa.com",417],["steiners.shop",418],["ecmrecords.com",419],["malaikaraiss.com",419],["koch-mit.de",419],["zeitreisen.zeit.de",419],["wefashion.com",420],["merkur.dk",421],["ionos.*",423],["omegawatches.com",424],["carefully.be",425],["aerotime.aero",425],["rocket-league.com",426],["dws.com",427],["bosch-homecomfort.com",428],["elmleblanc-optibox.fr",428],["monservicechauffage.fr",428],["boschrexroth.com",428],["home-connect.com",429],["lowrider.at",[430,431]],["mesto.de",432],["intersport.gr",433],["intersport.bg",433],["intersport.com.cy",433],["intersport.ro",433],["ticsante.com",434],["techopital.com",434],["millenniumprize.org",435],["hepster.com",436],["ellisphere.fr",437],["peterstaler.de",438],["blackforest-still.de",438],["tiendaplayaundi.com",439],["ajtix.co.uk",440],["raja.fr",441],["rajarani.de",441],["rajapack.*",[441,442]],["avery-zweckform.com",443],["1xinternet.de",443],["futterhaus.de",443],["dasfutterhaus.at",443],["frischeparadies.de",443],["fmk-steuer.de",443],["selgros.de",443],["transgourmet.de",443],["mediapart.fr",444],["athlon.com",445],["alumniportal-deutschland.org",446],["snoopmedia.com",446],["myguide.de",446],["study-in-germany.de",446],["daad.de",446],["cornelsen.de",[447,448]],["vinmonopolet.no",450],["tvp.info",451],["tvp.pl",451],["tvpworld.com",451],["brtvp.pl",451],["tvpparlament.pl",451],["belsat.eu",451],["warnung.bund.de",452],["mediathek.lfv-bayern.de",453],["allegro.*",454],["allegrolokalnie.pl",454],["ceneo.pl",[454,550]],["czc.cz",454],["eon.pl",[455,456]],["ylasatakunta.fi",[457,458]],["mega-image.ro",459],["louisvuitton.com",460],["bodensee-airport.eu",461],["department56.com",462],["allendesignsstudio.com",462],["designsbylolita.co",462],["shop.enesco.com",462],["savoriurbane.com",463],["miumiu.com",464],["church-footwear.com",464],["clickdoc.fr",465],["car-interface.com",466],["monolithdesign.it",466],["smileypack.de",[467,468]],["malijunaki.si",469],["finom.co",470],["orange.es",[471,472]],["fdm-travel.dk",473],["hummel.dk",473],["jysk.nl",473],["power.no",473],["skousen.dk",473],["velliv.dk",473],["whiteaway.com",473],["whiteaway.no",473],["whiteaway.se",473],["skousen.no",473],["energinet.dk",473],["elkjop.no",474],["medimax.de",475],["lotto.it",476],["readspeaker.com",476],["team.blue",476],["ibistallinncenter.ee",477],["aaron.ai",478],["thebathcollection.com",479],["coastfashion.com",[480,481]],["oasisfashion.com",[480,481]],["warehousefashion.com",[480,481]],["misspap.com",[480,481]],["karenmillen.com",[480,481]],["boohooman.com",[480,481]],["hdt.de",482],["wolt.com",483],["myprivacy.dpgmedia.nl",484],["myprivacy.dpgmedia.be",484],["www.dpgmediagroup.com",484],["tnt.com",485],["uza.be",486],["uzafoundation.be",486],["uzajobs.be",486],["bergzeit.*",[487,488]],["cinemas-lumiere.com",489],["cdiscount.com",490],["brabus.com",491],["roborock.com",492],["strumentimusicali.net",493],["maisonmargiela.com",494],["webfleet.com",495],["dragonflyshipping.ca",496],["broekhuis.nl",497],["groningenairport.nl",497],["nemck.cz",498],["bokio.se",499],["sap-press.com",500],["roughguides.com",[501,502]],["rexbo.*",503],["topannonces.fr",504],["homap.fr",505],["artifica.fr",506],["plan-interactif.com",506],["ville-cesson.fr",506],["moismoliere.com",507],["unihomes.co.uk",508],["bkk.hu",509],["coiffhair.com",510],["ptc.eu",511],["ziegert-group.com",[512,615]],["lassuranceretraite.fr",513],["interieur.gouv.fr",513],["toureiffel.paris",513],["economie.gouv.fr",513],["education.gouv.fr",513],["livoo.fr",513],["su.se",513],["zappo.fr",513],["smdv.de",514],["digitalo.de",514],["petiteamelie.*",515],["mojanorwegia.pl",516],["koempf24.ch",[517,518]],["teichitekten24.de",[517,518]],["koempf24.de",[517,518]],["wolff-finnhaus-shop.de",[517,518]],["asnbank.nl",519],["blgwonen.nl",519],["regiobank.nl",519],["snsbank.nl",519],["vulcan.net.pl",[520,521]],["ogresnovads.lv",522],["partenamut.be",523],["pirelli.com",524],["unicredit.it",525],["effector.pl",526],["zikodermo.pl",[527,528]],["wassererleben.ch",529],["devolksbank.nl",530],["cyberport.de",532],["slevomat.cz",533],["kfzparts24.de",534],["runnersneed.com",535],["aachener-zeitung.de",536],["sportpursuit.com",537],["druni.es",[538,552]],["druni.pt",[538,552]],["delta.com",539],["onliner.by",[540,541]],["vejdirektoratet.dk",542],["usaa.com",543],["consorsbank.de",544],["metroag.de",545],["kupbilecik.pl",546],["oxfordeconomics.com",547],["oxfordeconomics.com.au",[548,549]],["routershop.nl",551],["woo.pt",551],["e-jumbo.gr",553],["alza.*",554],["rmf.fm",556],["rmf24.pl",556],["tracfone.com",557],["lequipe.fr",558],["gala.fr",559],["purepeople.com",560],["3sat.de",561],["zdf.de",561],["filmfund.lu",562],["welcometothejungle.com",562],["triblive.com",563],["rai.it",564],["fbto.nl",565],["europa.eu",566],["caisse-epargne.fr",567],["banquepopulaire.fr",567],["bigmammagroup.com",568],["studentagency.sk",568],["studentagency.eu",568],["winparts.be",569],["winparts.nl",569],["winparts.eu",570],["winparts.ie",570],["winparts.se",570],["sportano.*",[571,572]],["crocs.*",573],["chronext.ch",574],["chronext.de",574],["chronext.at",574],["chronext.com",575],["chronext.co.uk",575],["chronext.fr",576],["chronext.nl",577],["chronext.it",578],["galerieslafayette.com",579],["bazarchic.com",580],["stilord.*",581],["tiko.pt",582],["nsinternational.com",583],["laposte.fr",584],["meinbildkalender.de",585],["gls-group.com",586],["chilis.com",587],["account.bhvr.com",589],["everand.com",589],["lucidchart.com",589],["intercars.ro",[589,590]],["scribd.com",589],["guidepoint.com",589],["erlebnissennerei-zillertal.at",591],["hintertuxergletscher.at",591],["tiwag.at",591],["anwbvignetten.nl",592],["playseatstore.com",592],["swiss-sport.tv",594],["targobank-magazin.de",595],["zeit-verlagsgruppe.de",595],["nltraining.nl",596],["kmudigital.at",597],["mintysquare.com",598],["consent.thetimes.com",599],["cadenaser.com",600],["berlinale.de",601],["lebonlogiciel.com",602],["pharmastar.it",603],["brillenplatz.de",604],["angelplatz.de",604],["dt.mef.gov.it",605],["raffeldeals.com",606],["offistore.fi",607],["collinsaerospace.com",608],["radioapp.lv",611],["hagengrote.de",612],["hemden-meister.de",612],["vorteilshop.com",613],["capristores.gr",614],["getaround.com",616],["technomarket.bg",617],["epiphone.com",619],["gibson.com",619],["maestroelectronics.com",619],["cropp.com",[620,621]],["housebrand.com",[620,621]],["mohito.com",[620,621]],["autoczescizielonki.pl",622],["portalridice.cz",623],["nutsinbulk.*",624],["berlin-buehnen.de",625],["metropoliten.rs",626],["educa2.madrid.org",627],["immohal.de",628],["sourcepoint.theguardian.com",629],["max.com",630],["rtlplay.be",631],["natgeotv.com",631],["llama.com",632],["meta.com",632],["ya.ru",633],["ipolska24.pl",634],["17bankow.com",634],["5mindlazdrowia.pl",634],["kazimierzdolny.pl",634],["vpolshchi.pl",634],["dobreprogramy.pl",634],["essanews.com",634],["dailywrap.ca",634],["dailywrap.uk",634],["money.pl",634],["autokult.pl",634],["komorkomania.pl",634],["polygamia.pl",634],["autocentrum.pl",634],["allani.pl",634],["homebook.pl",634],["domodi.pl",634],["jastrzabpost.pl",634],["open.fm",634],["gadzetomania.pl",634],["fotoblogia.pl",634],["abczdrowie.pl",634],["parenting.pl",634],["kafeteria.pl",634],["vibez.pl",634],["wakacje.pl",634],["extradom.pl",634],["totalmoney.pl",634],["superauto.pl",634],["nerwica.com",634],["forum.echirurgia.pl",634],["dailywrap.net",634],["pysznosci.pl",634],["genialne.pl",634],["finansowysupermarket.pl",634],["deliciousmagazine.pl",634],["audioteka.com",634],["easygo.pl",634],["so-magazyn.pl",634],["o2.pl",634],["pudelek.pl",634],["benchmark.pl",634],["wp.pl",634],["altibox.dk",635],["altibox.no",635],["uefa.com",636],["talksport.com",637]]);
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
