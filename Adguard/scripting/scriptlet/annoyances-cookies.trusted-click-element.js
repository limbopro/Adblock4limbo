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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[aria-labelledby=\"manage_cookies_title\"] [aria-hidden=\"true\"]:has(> [aria-disabled=\"true\"][role=\"button\"]) + [aria-label][role=\"button\"][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","1600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button.js-decline-all-cookies","","1000"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#popin_tc_privacy_button_2","","1000"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","1000"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["span.gtm-cookies-close","","1000"],["button[data-accept-cookie=\"true\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["div[data-test-id=\"CookieConsentsBanner.Root\"] button[data-test-id=\"decline-button\"]","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1000"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#btn-accept-required-banner","","1000"],["button#elc-decline-all-link","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button[title=\"Adjust cookie preferences\"]","","500"],["button[title=\"Deny all cookies\"]","","650"],["button[data-role=\"reject-rodo\"]","","1500"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","1600"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],["button.cc-nb-reject","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["#cookiescript_reject","","500"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["button.tm-button.secondary-invert","","1000"],["div[aria-labelledby=\"dialog-heading\"] div[class^=\"StyledButtonsWrapper\"] > button + button, #dialog-dynamic-section div[class^=\"StyledButtonsWrapper\"] > button + button","","500"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",7],["forbes.com",[7,71]],["nike.com",7],["consent.fastcar.co.uk",7],["cmpv2.standard.co.uk",[8,9]],["cmpv2.independent.co.uk",[10,11,12]],["wetransfer.com",[13,14]],["spiegel.de",[15,16]],["nytimes.com",[17,163]],["consent.yahoo.com",18],["tumblr.com",19],["fplstatistics.co.uk",20],["e-shop.leonidas.com",21],["cdn.privacy-mgmt.com",[22,23,43,44,45,46,86,91,93,100,107,114,124,125,126,129,131,132,139,156,179,189,202,203,206,207,208,273,375,506,530]],["walmart.ca",24],["sams.com.mx",25],["cambio-carsharing.de",26],["festool.*",26],["festoolcanada.com",26],["fuso-trucks.*",26],["tracker.fressnapf.de",26],["s-pankki.fi",26],["dr-beckmann.com",26],["consent.ladbible.com",[27,28]],["consent.unilad.com",[27,28]],["consent.uniladtech.com",[27,28]],["consent.gamingbible.com",[27,28]],["consent.sportbible.com",[27,28]],["consent.tyla.com",[27,28]],["consent.ladbiblegroup.com",[27,28]],["m2o.it",29],["deejay.it",29],["capital.it",29],["ilmattino.it",[29,30]],["leggo.it",[29,30]],["libero.it",29],["tiscali.it",29],["consent-manager.ft.com",[31,32,33]],["hertz.*",34],["mediaworld.it",35],["mediamarkt.*",35],["mediamarktsaturn.com",36],["tf1info.fr",37],["uber.com",[38,164]],["ubereats.com",[38,164]],["lego.com",39],["ai.meta.com",40],["lilly.com",41],["cosmo-hairshop.de",42],["storyhouseegmont.no",42],["telekom.com",47],["telekom.net",47],["telekom.de",47],["abola.pt",48],["flytap.com",48],["ansons.de",48],["blick.ch",48],["buienradar.be",48],["crunchyroll.com",48],["digi24.ro",48],["digisport.ro",48],["digitalfoundry.net",48],["egx.net",48],["emirates.com",48],["eurogamer.it",48],["gmx.*",48],["mail.com",48],["mcmcomiccon.com",48],["nachrichten.at",48],["nintendolife.com",48],["oe24.at",48],["paxsite.com",48],["peacocktv.com",48],["player.pl",48],["plus500.*",48],["pricerunner.com",48],["pricerunner.se",48],["pricerunner.dk",48],["proximus.be",48],["proximus.com",48],["purexbox.com",48],["pushsquare.com",48],["rugbypass.com",48],["southparkstudios.com",48],["southwest.com",48],["starwarscelebration.com",48],["sweatybetty.com",48],["thehaul.com",48],["timeextension.com",48],["travelandleisure.com",48],["tunein.com",48],["videoland.com",48],["wizzair.com",48],["wetter.at",48],["dicebreaker.com",[49,50]],["eurogamer.cz",[49,50]],["eurogamer.es",[49,50]],["eurogamer.net",[49,50]],["eurogamer.nl",[49,50]],["eurogamer.pl",[49,50]],["eurogamer.pt",[49,50]],["gamesindustry.biz",[49,50]],["jelly.deals",[49,50]],["reedpop.com",[49,50]],["rockpapershotgun.com",[49,50]],["thepopverse.com",[49,50]],["vg247.com",[49,50]],["videogameschronicle.com",[49,50]],["eurogamer.de",51],["roadtovr.com",52],["mundodeportivo.com",[53,120]],["m.youtube.com",54],["www.youtube.com",54],["ohra.nl",55],["corriere.it",56],["gazzetta.it",56],["oggi.it",56],["cmp.sky.it",57],["tennisassa.fi",58],["formula1.com",59],["f1racing.pl",60],["music.amazon.*",[61,62]],["consent-pref.trustarc.com",63],["highlights.legaseriea.it",64],["calciomercato.com",64],["sosfanta.com",65],["chrono24.*",[66,67]],["wetter.com",68],["youmath.it",69],["pip.gov.pl",70],["bnn.de",72],["dosenbach.ch",72],["dw.com",72],["kinepolis.*",72],["winfuture.de",72],["lippu.fi",72],["racingnews365.com",72],["reifendirekt.ch",72],["vaillant.*",72],["bauhaus.no",73],["beko-group.de",73],["billiger.de",73],["burda.com",73],["vanharen.nl",73],["deichmann.com",[73,96,397]],["meraluna.de",73],["slashdot.org",73],["hermann-saunierduval.it",73],["protherm.cz",73],["saunierduval.es",73],["protherm.sk",73],["protherm.ua",73],["saunierduval.hu",73],["saunierduval.ro",73],["saunierduval.at",73],["awb.nl",73],["spar.hu",74],["group.vattenfall.com",74],["mediaset.it",75],["fortune.com",76],["ilrestodelcarlino.it",77],["quotidiano.net",77],["lanazione.it",77],["ilgiorno.it",77],["iltelegrafolivorno.it",77],["auto.it",78],["beauxarts.com",78],["beinsports.com",78],["bfmtv.com",78],["boursobank.com",78],["boursorama.com",78],["boursier.com",[78,196]],["brut.media",78],["canalplus.com",78],["diverto.tv",78],["eden-park.com",78],["frandroid.com",78],["jobijoba.*",78],["hotelsbarriere.com",78],["intersport.*",[78,176]],["idealista.it",78],["o2.fr",78],["lejdd.fr",[78,120]],["lechorepublicain.fr",78],["la-croix.com",78],["linfo.re",78],["lamontagne.fr",78],["lesnumeriques.com",78],["lopinion.fr",78],["marieclaire.fr",78],["maville.com",78],["midilibre.fr",78],["meteofrance.com",78],["mondialtissus.fr",78],["orange.fr",78],["oscaro.com",78],["ouest-france.fr",[78,92]],["parismatch.com",78],["programme-television.org",78],["publicsenat.fr",78],["rmcbfmplay.com",78],["science-et-vie.com",[78,120]],["seloger.com",78],["suzuki.fr",78],["sudouest.fr",78],["web-agri.fr",78],["nutri-plus.de",79],["aa.com",80],["americanairlines.*",80],["consent.capital.fr",81],["consent.voici.fr",81],["programme-tv.net",81],["cmpv2.finn.no",82],["cmp.e24.no",[83,84]],["cmp.vg.no",[83,84]],["huffingtonpost.fr",85],["rainews.it",87],["remarkable.com",88],["netzwelt.de",89],["money.it",90],["allocine.fr",92],["jeuxvideo.com",92],["ozap.com",92],["le10sport.com",92],["xataka.com",92],["cmp-sp.tagesspiegel.de",93],["cmp.bz-berlin.de",93],["cmp.cicero.de",93],["cmp.techbook.de",93],["cmp.stylebook.de",93],["cmp2.bild.de",93],["sourcepoint.wetter.de",93],["consent.finanzen.at",93],["consent.up.welt.de",93],["sourcepoint.n-tv.de",93],["sourcepoint.kochbar.de",93],["sourcepoint.rtl.de",93],["cmp.computerbild.de",93],["cmp.petbook.de",93],["cmp-sp.siegener-zeitung.de",93],["cmp-sp.sportbuzzer.de",93],["klarmobil.de",93],["technikum-wien.at",94],["eneco.nl",95],["blackpoolgazette.co.uk",97],["lep.co.uk",97],["northamptonchron.co.uk",97],["scotsman.com",97],["shieldsgazette.com",97],["thestar.co.uk",97],["portsmouth.co.uk",97],["sunderlandecho.com",97],["northernirelandworld.com",97],["3addedminutes.com",97],["anguscountyworld.co.uk",97],["banburyguardian.co.uk",97],["bedfordtoday.co.uk",97],["biggleswadetoday.co.uk",97],["bucksherald.co.uk",97],["burnleyexpress.net",97],["buxtonadvertiser.co.uk",97],["chad.co.uk",97],["daventryexpress.co.uk",97],["derbyshiretimes.co.uk",97],["derbyworld.co.uk",97],["derryjournal.com",97],["dewsburyreporter.co.uk",97],["doncasterfreepress.co.uk",97],["falkirkherald.co.uk",97],["fifetoday.co.uk",97],["glasgowworld.com",97],["halifaxcourier.co.uk",97],["harboroughmail.co.uk",97],["harrogateadvertiser.co.uk",97],["hartlepoolmail.co.uk",97],["hemeltoday.co.uk",97],["hucknalldispatch.co.uk",97],["lancasterguardian.co.uk",97],["leightonbuzzardonline.co.uk",97],["lincolnshireworld.com",97],["liverpoolworld.uk",97],["londonworld.com",97],["lutontoday.co.uk",97],["manchesterworld.uk",97],["meltontimes.co.uk",97],["miltonkeynes.co.uk",97],["newcastleworld.com",97],["newryreporter.com",97],["newsletter.co.uk",97],["northantstelegraph.co.uk",97],["northumberlandgazette.co.uk",97],["nottinghamworld.com",97],["peterboroughtoday.co.uk",97],["rotherhamadvertiser.co.uk",97],["stornowaygazette.co.uk",97],["surreyworld.co.uk",97],["thescarboroughnews.co.uk",97],["thesouthernreporter.co.uk",97],["totallysnookered.com",97],["wakefieldexpress.co.uk",97],["walesworld.com",97],["warwickshireworld.com",97],["wigantoday.net",97],["worksopguardian.co.uk",97],["yorkshireeveningpost.co.uk",97],["yorkshirepost.co.uk",97],["eurocard.com",98],["saseurobonusmastercard.se",99],["tver.jp",101],["linkedin.com",102],["elmundo.es",103],["srf.ch",104],["alternate.de",104],["bayer04.de",104],["douglas.de",104],["falke.com",104],["flaschenpost.de",104],["gloeckle.de",104],["hornbach.nl",104],["postbank.de",104],["immowelt.de",105],["joyn.*",105],["morenutrition.de",105],["mapillary.com",106],["cmp.seznam.cz",108],["marca.com",109],["raiplay.it",110],["derstandard.at",111],["derstandard.de",111],["faz.net",111],["ansa.it",112],["delladio.it",112],["huffingtonpost.it",112],["lastampa.it",112],["movieplayer.it",112],["multiplayer.it",112],["repubblica.it",112],["tomshw.it",112],["tuttoandroid.net",112],["tuttotech.net",112],["ilgazzettino.it",113],["ilmessaggero.it",113],["ilsecoloxix.it",113],["privacy.motorradonline.de",114],["consent.watson.de",114],["consent.kino.de",114],["consent.desired.de",114],["dailystar.co.uk",[115,116,117,118]],["mirror.co.uk",[115,116,117,118]],["idnes.cz",119],["20minutes.fr",120],["20minutos.es",120],["24sata.hr",120],["abc.es",120],["actu.fr",120],["antena3.com",120],["antena3internacional.com",120],["atresmedia.com",120],["atresmediapublicidad.com",120],["atresmediastudios.com",120],["atresplayer.com",120],["autopista.es",120],["belfasttelegraph.co.uk",120],["bt.se",120],["bonduelle.it",120],["bonniernews.se",120],["caracol.com.co",120],["charentelibre.fr",120],["ciclismoafondo.es",120],["cnews.fr",120],["cope.es",120],["correryfitness.com",120],["courrier-picard.fr",120],["decathlon.nl",120],["decathlon.pl",120],["di.se",120],["diariocordoba.com",120],["diepresse.com",120],["dn.se",120],["dnevnik.hr",120],["dumpert.nl",120],["ebuyclub.com",120],["edreams.de",120],["edreams.net",120],["elcomercio.es",120],["elconfidencial.com",120],["eldesmarque.com",120],["elespanol.com",120],["elpais.com",120],["elpais.es",120],["engadget.com",120],["euronews.com",120],["europafm.com",120],["expressen.se",120],["filmstarts.de",120],["flooxernow.com",120],["folkbladet.nu",120],["footmercato.net",120],["france.tv",120],["france24.com",120],["francetvinfo.fr",120],["fussballtransfers.com",120],["fyndiq.se",120],["ghacks.net",120],["gva.be",120],["hbvl.be",120],["idealista.pt",120],["k.at",120],["krone.at",120],["kurier.at",120],["ladepeche.fr",120],["lalibre.be",120],["lanouvellerepublique.fr",120],["lasexta.com",120],["lasprovincias.es",120],["latribune.fr",120],["leboncoin.fr",120],["ledauphine.com",120],["leparisien.fr",120],["lesoir.be",120],["letelegramme.fr",120],["levoixdunord.fr",120],["xpress.fr",120],["libremercado.com",120],["lotoquebec.com",120],["lunion.fr",120],["okdiario.com",120],["marmiton.org",120],["marianne.cz",120],["melodia-fm.com",120],["moviepilot.de",120],["m6.fr",120],["metronieuws.nl",120],["multilife.com.pl",120],["naszemiasto.pl",120],["nicematin.com",120],["nieuwsblad.be",120],["numerama.com",120],["ondacero.es",120],["profil.at",120],["portail.lotoquebec.com",120],["public.fr",120],["radiofrance.fr",120],["rankia.com",120],["rfi.fr",120],["rossmann.pl",120],["rtbf.be",[120,193]],["rtl.lu",120],["sensacine.com",120],["sfgame.net",120],["shure.com",120],["silicon.es",120],["sncf-connect.com",120],["sport.es",120],["sydsvenskan.se",120],["techcrunch.com",120],["telegraaf.nl",120],["telequebec.tv",120],["tf1.fr",120],["trailrun.es",120],["tradingsat.com",120],["video-streaming.orange.fr",120],["ryobitools.eu",[121,122]],["americanexpress.com",123],["consent.radiotimes.com",126],["sp-consent.szbz.de",127],["cmp.omni.se",128],["cmp.svd.se",128],["cmp.aftonbladet.se",128],["consent.economist.com",130],["studentagency.cz",130],["cmpv2.foundryco.com",131],["cmpv2.infoworld.com",131],["cmpv2.arnnet.com.au",131],["sp-cdn.pcgames.de",132],["sp-cdn.pcgameshardware.de",132],["consentv2.sport1.de",132],["cmpv2.tori.fi",133],["cdn.privacy-mgmt.co",134],["consent.spielaffe.de",135],["degiro.*",136],["vikingline.com",136],["tfl.gov.uk",136],["drklein.de",136],["volunteer.digitalboost.org.uk",136],["1und1.de",137],["infranken.de",138],["cmp.bunte.de",139],["cmp.chip.de",139],["cmp.focus.de",[139,425]],["estadiodeportivo.com",140],["tameteo.*",140],["tempo.pt",140],["meteored.*",140],["pogoda.com",140],["yourweather.co.uk",140],["tempo.com",140],["tiempo.com",140],["ilmeteo.net",140],["daswetter.com",140],["kicker.de",141],["formulatv.com",142],["web.de",143],["lefigaro.fr",144],["linternaute.com",145],["consent.caminteresse.fr",146],["volksfreund.de",147],["rp-online.de",147],["dailypost.co.uk",148],["the-express.com",148],["tarife.mediamarkt.de",149],["lz.de",149],["gaggenau.com",149],["saturn.de",150],["eltiempo.es",[151,152]],["otempo.pt",153],["atlasformen.*",154],["cmp-sp.goettinger-tageblatt.de",155],["cmp-sp.saechsische.de",155],["cmp-sp.ln-online.de",155],["cz.de",155],["dewezet.de",155],["dnn.de",155],["haz.de",155],["gnz.de",155],["landeszeitung.de",155],["lvz.de",155],["maz-online.de",155],["ndz.de",155],["op-marburg.de",155],["ostsee-zeitung.de",155],["paz-online.de",155],["reisereporter.de",155],["rga.de",155],["rnd.de",155],["siegener-zeitung.de",155],["sn-online.de",155],["solinger-tageblatt.de",155],["sportbuzzer.de",155],["szlz.de",155],["tah.de",155],["torgauerzeitung.de",155],["waz-online.de",155],["privacy.maennersache.de",155],["sinergy.ch",157],["agglo-valais-central.ch",157],["biomedcentral.com",158],["hsbc.*",159],["hsbcnet.com",159],["hsbcinnovationbanking.com",159],["create.hsbc",159],["gbm.hsbc.com",159],["hsbc.co.uk",160],["internationalservices.hsbc.com",160],["history.hsbc.com",160],["about.hsbc.co.uk",161],["privatebanking.hsbc.com",162],["independent.co.uk",165],["privacy.crash.net",165],["the-independent.com",166],["argos.co.uk",167],["poco.de",[168,169]],["moebelix.*",168],["moemax.*",168],["xxxlutz.*",168],["xxxlesnina.*",168],["moebel24.ch",169],["meubles.fr",169],["meubelo.nl",169],["moebel.de",169],["lipo.ch",170],["schubiger.ch",171],["aedt.de",172],["berlin-live.de",172],["gutefrage.net",172],["insideparadeplatz.ch",172],["morgenpost.de",172],["play3.de",172],["thueringen24.de",172],["pdfupload.io",173],["gamestar.de",[174,202]],["gamepro.de",174],["verksamt.se",175],["acmemarkets.com",176],["amtrak.com",176],["beko.com",176],["bepanthen.com.au",176],["berocca.com.au",176],["booking.com",176],["centrum.sk",176],["claratyne.com.au",176],["credit-suisse.com",176],["ceskatelevize.cz",176],["de.vanguard",176],["dhl.de",176],["fello.se",176],["flashscore.fr",176],["fnac.es",176],["foodandwine.com",176],["khanacademy.org",176],["konami.com",176],["jll.*",176],["jobs.redbull.com",176],["groceries.asda.com",176],["n26.com",176],["nintendo.com",176],["panasonic.com",176],["pluto.tv",176],["ricardo.ch",176],["rockstargames.com",176],["rte.ie",176],["salesforce.com",176],["samsonite.*",176],["spirit.com",176],["stenaline.co.uk",176],["swisscom.ch",176],["swisspass.ch",176],["telenet.be",176],["toujeo.com",176],["questdiagnostics.com",176],["wallapop.com",176],["vattenfall.de",176],["yoigo.com",176],["hallmarkchannel.com",177],["noovle.com",177],["otter.ai",177],["telsy.com",177],["timenterprise.it",177],["tim.it",177],["fnac.*",177],["yeti.com",177],["here.com",178],["vodafone.com",178],["cmp.heise.de",180],["cmp.am-online.com",180],["cmp.motorcyclenews.com",180],["consent.newsnow.co.uk",180],["zara.com",181],["lepermislibre.fr",181],["negociardivida.spcbrasil.org.br",182],["adidas.*",183],["privacy.topreality.sk",184],["privacy.autobazar.eu",184],["vu.lt",185],["adnkronos.com",[186,187]],["cornwalllive.com",[186,187]],["cyprus-mail.com",[186,187]],["informazione.it",[186,187]],["mymovies.it",[186,187]],["tuttoeuropei.com",[186,187]],["video.lacnews24.it",[186,187]],["protothema.gr",186],["flash.gr",186],["taxscouts.com",188],["online.no",190],["telenor.no",190],["austrian.com",191],["lufthansa.com",191],["hornetsecurity.com",192],["kayzen.io",192],["wasserkunst-hamburg.de",192],["bnc.ca",193],["egora.fr",193],["festo.com",193],["standaard.be",193],["engelvoelkers.com",193],["francemediasmonde.com",193],["francebleu.fr",193],["knipex.de",193],["giphy.com",193],["idealista.com",193],["information.tv5monde.com",193],["laprovence.com",193],["lemondeinformatique.fr",193],["mappy.com",193],["marianne.net",193],["orf.at",193],["ing.es",193],["taxfix.de",193],["rtl.be",193],["researchgate.net",193],["stroilioro.com",193],["europe1.fr",194],["usinenouvelle.com",195],["reussir.fr",197],["lesechos.fr",198],["bruendl.at",199],["latamairlines.com",200],["elisa.ee",201],["baseendpoint.brigitte.de",202],["baseendpoint.gala.de",202],["baseendpoint.haeuser.de",202],["baseendpoint.stern.de",202],["baseendpoint.urbia.de",202],["cmp.tag24.de",202],["cmpv2.berliner-zeitung.de",202],["golem.de",202],["consent.t-online.de",202],["cmp-sp.handelsblatt.com",202],["sp-consent.stuttgarter-nachrichten.de",203],["regjeringen.no",204],["sp-manager-magazin-de.manager-magazin.de",205],["consent.11freunde.de",205],["centrum24.pl",209],["replay.lsm.lv",210],["ltv.lsm.lv",210],["bernistaba.lsm.lv",210],["stadt-wien.at",211],["verl.de",211],["cubo-sauna.de",211],["mbl.is",211],["mobile.de",212],["cookist.it",213],["fanpage.it",213],["geopop.it",213],["lexplain.it",213],["royalmail.com",214],["gmx.net",215],["gmx.ch",216],["mojehobby.pl",217],["super-hobby.*",217],["sp.stylevamp.de",218],["cmp.wetteronline.de",218],["audi.*",219],["easyjet.com",219],["experian.co.uk",219],["postoffice.co.uk",219],["tescobank.com",219],["internetaptieka.lv",[220,221]],["wells.pt",222],["dskdirect.bg",223],["cmpv2.dba.dk",224],["spcmp.crosswordsolver.com",225],["thomann.de",226],["landkreis-kronach.de",227],["northcoast.com",228],["chaingpt.org",228],["bandenconcurrent.nl",229],["bandenexpert.be",229],["reserved.com",230],["metro.it",231],["makro.es",231],["metro.sk",231],["metro-cc.hr",231],["makro.nl",231],["metro.bg",231],["metro.at",231],["metro-tr.com",231],["metro.de",231],["metro.fr",231],["makro.cz",231],["metro.ro",231],["makro.pt",231],["makro.pl",231],["sklepy-odido.pl",231],["rastreator.com",231],["metro.ua",232],["metro.rs",232],["metro-kz.com",232],["metro.md",232],["metro.hu",232],["metro-cc.ru",232],["metro.pk",232],["balay.es",233],["constructa.com",233],["dafy-moto.com",234],["akku-shop.nl",235],["akkushop-austria.at",235],["akkushop-b2b.de",235],["akkushop.de",235],["akkushop.dk",235],["batterie-boutique.fr",235],["akkushop-schweiz.ch",236],["evzuttya.com.ua",237],["eobuv.cz",237],["eobuwie.com.pl",237],["ecipele.hr",237],["eavalyne.lt",237],["efootwear.eu",237],["eschuhe.ch",237],["eskor.se",237],["chaussures.fr",237],["ecipo.hu",237],["eobuv.com.ua",237],["eobuv.sk",237],["epantofi.ro",237],["epapoutsia.gr",237],["escarpe.it",237],["eschuhe.de",237],["obuvki.bg",237],["zapatos.es",237],["swedbank.ee",238],["mudanzavila.es",239],["bienmanger.com",240],["gesipa.*",241],["gesipausa.com",241],["beckhoff.com",241],["zitekick.dk",242],["eltechno.dk",242],["okazik.pl",242],["batteryempire.*",243],["maxi.rs",244],["garmin.com",245],["invisalign.*",245],["one4all.ie",245],["wideroe.no",246],["bmw.*",247],["kijk.nl",248],["nordania.dk",249],["danskebank.*",249],["danskeci.com",249],["danicapension.dk",249],["dehn.*",250],["gewerbegebiete.de",251],["cordia.fr",252],["vola.fr",253],["lafi.fr",254],["skyscanner.*",255],["coolblue.*",256],["sanareva.*",257],["atida.fr",257],["bbva.*",258],["bbvauk.com",258],["expertise.unimi.it",259],["altenberg.de",260],["vestel.es",261],["tsb.co.uk",262],["buienradar.nl",[263,264]],["linsenplatz.de",265],["budni.de",266],["erstecardclub.hr",266],["teufel.de",[267,268]],["abp.nl",269],["simplea.sk",270],["flip.bg",271],["kiertokanki.com",272],["leirovins.be",274],["vias.be",275],["virbac.com",276],["diners.hr",276],["squarehabitat.fr",276],["arbitrobancariofinanziario.it",277],["smit-sport.de",278],["go-e.com",279],["malerblatt-medienservice.de",280],["architekturbuch.de",280],["medienservice-holz.de",280],["leuchtstark.de",280],["casius.nl",281],["coolinarika.com",282],["vakgaragevannunen.nl",282],["fortuluz.es",282],["finna.fi",282],["eurogrow.es",282],["vakgaragevandertholen.nl",282],["envafors.dk",283],["dabbolig.dk",[284,285]],["daruk-emelok.hu",286],["exakta.se",287],["larca.de",288],["roli.com",289],["okazii.ro",290],["tgvinoui.sncf",291],["l-bank.de",292],["interhyp.de",293],["indigoneo.*",294],["transparency.meta.com",295],["safran-group.com",296],["sr-ramenendeuren.be",296],["strato.*",297],["strato-hosting.co.uk",297],["auto.de",298],["contentkingapp.com",299],["otterbox.com",300],["stoertebeker-brauquartier.com",301],["stoertebeker.com",301],["stoertebeker-eph.com",301],["aparts.pl",302],["sinsay.com",[303,304]],["benu.cz",305],["stockholmresilience.org",306],["ludvika.se",306],["kammarkollegiet.se",306],["cazenovecapital.com",307],["statestreet.com",308],["beopen.lv",309],["cesukoncertzale.lv",310],["dodo.fr",311],["pepper.it",312],["pepper.pl",312],["preisjaeger.at",312],["mydealz.de",312],["dealabs.com",312],["hotukdeals.com",312],["chollometro.com",312],["makelaarsland.nl",313],["bricklink.com",314],["bestinver.es",315],["icvs2023.conf.tuwien.ac.at",316],["racshop.co.uk",[317,318]],["baabuk.com",319],["sapien.io",319],["app.lepermislibre.fr",320],["multioferta.es",321],["testwise.com",[322,323]],["tonyschocolonely.com",324],["fitplus.is",324],["fransdegrebber.nl",324],["lilliputpress.ie",324],["lexibo.com",324],["marin-milou.com",324],["dare2tri.com",324],["t3micro.*",324],["la-vie-naturelle.com",[325,326]],["inovelli.com",327],["uonetplus.vulcan.net.pl",[328,329]],["consent.helagotland.se",330],["oper.koeln",[331,332]],["deezer.com",333],["hoteldesartssaigon.com",334],["groupeonepoint.com",335],["geneanet.org",335],["clickskeks.at",336],["abt-sportsline.de",336],["nerdstar.de",337],["prace.cz",337],["profesia.sk",337],["profesia.cz",337],["pracezarohem.cz",337],["atmoskop.cz",337],["seduo.sk",337],["seduo.cz",337],["teamio.com",337],["arnold-robot.com",337],["cvonline.lt",337],["cv.lv",337],["cv.ee",337],["dirbam.lt",337],["visidarbi.lv",337],["otsintood.ee",337],["pamiatki.pl",338],["initse.com",339],["salvagny.org",340],["taxinstitute.ie",341],["get-in-it.de",342],["tempcover.com",[343,344]],["guildford.gov.uk",345],["easyparts.*",[346,347]],["easyparts-recambios.es",[346,347]],["easyparts-rollerteile.de",[346,347]],["drimsim.com",348],["canyon.com",[349,350]],["vevovo.be",[351,352]],["vendezvotrevoiture.be",[351,352]],["wirkaufendeinauto.at",[351,352]],["vikoberallebiler.dk",[351,352]],["wijkopenautos.nl",[351,352]],["vikoperdinbil.se",[351,352]],["noicompriamoauto.it",[351,352]],["vendezvotrevoiture.fr",[351,352]],["compramostucoche.es",[351,352]],["wijkopenautos.be",[351,352]],["auto-doc.*",353],["autodoc.*",353],["autodoc24.*",353],["topautoosat.fi",353],["autoteiledirekt.de",353],["autoczescionline24.pl",353],["tuttoautoricambi.it",353],["onlinecarparts.co.uk",353],["autoalkatreszek24.hu",353],["autodielyonline24.sk",353],["reservdelar24.se",353],["pecasauto24.pt",353],["reservedeler24.co.no",353],["piecesauto24.lu",353],["rezervesdalas24.lv",353],["besteonderdelen.nl",353],["recambioscoche.es",353],["antallaktikaexartimata.gr",353],["piecesauto.fr",353],["teile-direkt.ch",353],["lpi.org",354],["refurbed.*",355],["flyingtiger.com",356],["borgomontecedrone.it",356],["recaro-shop.com",356],["gera.de",357],["mfr-chessy.fr",358],["mfr-lamure.fr",358],["mfr-saint-romain.fr",358],["mfr-lapalma.fr",358],["mfrvilliemorgon.asso.fr",358],["mfr-charentay.fr",358],["mfr.fr",358],["nationaltrust.org.uk",359],["hej-natural.*",360],["ib-hansmeier.de",361],["rsag.de",362],["esaa-eu.org",362],["answear.*",363],["theprotocol.it",[364,365]],["lightandland.co.uk",366],["etransport.pl",367],["wohnen-im-alter.de",368],["johnmuirhealth.com",[369,370]],["markushaenni.com",371],["airbaltic.com",372],["gamersgate.com",372],["zorgzaam010.nl",373],["paruvendu.fr",374],["cmpv2.bistro.sk",376],["privacy.bazar.sk",376],["hennamorena.com",377],["newsello.pl",378],["porp.pl",379],["golfbreaks.com",380],["lieferando.de",381],["just-eat.*",381],["justeat.*",381],["pyszne.pl",381],["lieferando.at",381],["takeaway.com",381],["thuisbezorgd.nl",381],["holidayhypermarket.co.uk",382],["atu.de",383],["atu-flottenloesungen.de",383],["but.fr",383],["fortuneo.fr",383],["maif.fr",383],["sparkasse.at",383],["dpdgroup.com",384],["dpd.fr",384],["dpd.com",384],["cosmosdirekt.de",384],["bstrongoutlet.pt",385],["nobbot.com",386],["isarradweg.de",[387,388]],["finlayson.fi",[389,390]],["cowaymega.ca",[389,390]],["arktis.de",391],["desktronic.de",391],["belleek.com",391],["brauzz.com",391],["cowaymega.com",391],["dockin.de",391],["dryrobe.com",391],["formswim.com",391],["hairtalk.se",391],["hallmark.co.uk",391],["loopearplugs.com",391],["oleus.com",391],["peopleofshibuya.com",391],["pullup-dip.com",391],["sanctum.shop",391],["tartanblanketco.com",391],["beam.co.uk",[392,393]],["malaikaraiss.com",394],["wefashion.com",395],["merkur.dk",396],["ionos.*",398],["omegawatches.com",399],["carefully.be",400],["aerotime.aero",400],["rocket-league.com",401],["dws.com",402],["bosch-homecomfort.com",403],["elmleblanc-optibox.fr",403],["monservicechauffage.fr",403],["boschrexroth.com",403],["home-connect.com",404],["lowrider.at",[405,406]],["mesto.de",407],["veiligverkeer.be",408],["vsv.be",408],["dehogerielen.be",408],["intersport.gr",409],["intersport.bg",409],["intersport.com.cy",409],["intersport.ro",409],["ticsante.com",410],["techopital.com",410],["millenniumprize.org",411],["hepster.com",412],["ellisphere.fr",413],["peterstaler.de",414],["blackforest-still.de",414],["tiendaplayaundi.com",415],["ajtix.co.uk",416],["raja.fr",417],["rajarani.de",417],["rajapack.*",[417,418]],["avery-zweckform.com",419],["1xinternet.de",419],["futterhaus.de",419],["dasfutterhaus.at",419],["frischeparadies.de",419],["fmk-steuer.de",419],["selgros.de",419],["mediapart.fr",420],["athlon.com",421],["alumniportal-deutschland.org",422],["snoopmedia.com",422],["myguide.de",422],["study-in-germany.de",422],["daad.de",422],["cornelsen.de",[423,424]],["vinmonopolet.no",426],["tvp.info",427],["tvp.pl",427],["tvpworld.com",427],["brtvp.pl",427],["tvpparlament.pl",427],["belsat.eu",427],["warnung.bund.de",428],["mediathek.lfv-bayern.de",429],["allegro.*",430],["allegrolokalnie.pl",430],["czc.cz",430],["eon.pl",[431,432]],["ylasatakunta.fi",[433,434]],["mega-image.ro",435],["louisvuitton.com",436],["bodensee-airport.eu",437],["department56.com",438],["allendesignsstudio.com",438],["designsbylolita.co",438],["shop.enesco.com",438],["savoriurbane.com",439],["miumiu.com",440],["church-footwear.com",440],["clickdoc.fr",441],["car-interface.com",442],["monolithdesign.it",442],["smileypack.de",[443,444]],["malijunaki.si",445],["finom.co",446],["orange.es",[447,448]],["skousen.no",449],["energinet.dk",449],["medimax.de",450],["lotto.it",451],["readspeaker.com",451],["ibistallinncenter.ee",452],["aaron.ai",453],["thebathcollection.com",454],["coastfashion.com",[455,456]],["oasisfashion.com",[455,456]],["warehousefashion.com",[455,456]],["misspap.com",[455,456]],["karenmillen.com",[455,456]],["boohooman.com",[455,456]],["hdt.de",457],["wolt.com",458],["myprivacy.dpgmedia.nl",459],["myprivacy.dpgmedia.be",459],["www.dpgmediagroup.com",459],["tnt.com",460],["uza.be",461],["uzafoundation.be",461],["uzajobs.be",461],["bergzeit.*",[462,463]],["cinemas-lumiere.com",464],["cdiscount.com",465],["brabus.com",466],["roborock.com",467],["strumentimusicali.net",468],["maisonmargiela.com",469],["webfleet.com",470],["dragonflyshipping.ca",471],["broekhuis.nl",472],["nemck.cz",473],["bokio.se",474],["sap-press.com",475],["roughguides.com",[476,477]],["rexbo.*",478],["topannonces.fr",479],["homap.fr",480],["artifica.fr",481],["plan-interactif.com",481],["ville-cesson.fr",481],["moismoliere.com",482],["unihomes.co.uk",483],["bkk.hu",484],["coiffhair.com",485],["ptc.eu",486],["ziegert-group.com",487],["toureiffel.paris",488],["education.gouv.fr",488],["livoo.fr",488],["interieur.gouv.fr",488],["su.se",488],["smdv.de",489],["digitalo.de",489],["petiteamelie.*",490],["mojanorwegia.pl",491],["koempf24.ch",[492,493]],["teichitekten24.de",[492,493]],["koempf24.de",[492,493]],["wolff-finnhaus-shop.de",[492,493]],["asnbank.nl",494],["blgwonen.nl",494],["regiobank.nl",494],["snsbank.nl",494],["vulcan.net.pl",[495,496]],["ogresnovads.lv",497],["partenamut.be",498],["pirelli.com",499],["unicredit.it",500],["effector.pl",501],["zikodermo.pl",[502,503]],["wassererleben.ch",504],["devolksbank.nl",505],["cyberport.de",507],["slevomat.cz",508],["kfzparts24.de",509],["runnersneed.com",510],["aachener-zeitung.de",511],["sportpursuit.com",512],["druni.es",[513,527]],["druni.pt",[513,527]],["delta.com",514],["onliner.by",[515,516]],["vejdirektoratet.dk",517],["usaa.com",518],["consorsbank.de",519],["metroag.de",520],["kupbilecik.pl",521],["oxfordeconomics.com",522],["oxfordeconomics.com.au",[523,524]],["ceneo.pl",525],["routershop.nl",526],["e-jumbo.gr",528],["alza.*",529],["rmf.fm",531],["rmf24.pl",531],["tracfone.com",532],["lequipe.fr",533],["gala.fr",534],["purepeople.com",535],["3sat.de",536],["zdf.de",536],["filmfund.lu",537],["rai.it",538],["fbto.nl",539],["studentagency.sk",540],["studentagency.eu",540],["nsinternational.com",541],["laposte.fr",542],["meinbildkalender.de",543],["gls-group.com",544],["chilis.com",545],["swiss-sport.tv",546],["consent.thetimes.com",547],["cadenaser.com",548],["offistore.fi",549],["technomarket.bg",550],["max.com",551],["rtlplay.be",552],["natgeotv.com",552],["llama.com",553],["meta.com",553],["ya.ru",554],["ipolska24.pl",555],["17bankow.com",555],["5mindlazdrowia.pl",555],["kazimierzdolny.pl",555],["vpolshchi.pl",555],["dobreprogramy.pl",555],["essanews.com",555],["dailywrap.ca",555],["dailywrap.uk",555],["money.pl",555],["autokult.pl",555],["komorkomania.pl",555],["polygamia.pl",555],["autocentrum.pl",555],["allani.pl",555],["homebook.pl",555],["domodi.pl",555],["open.fm",555],["gadzetomania.pl",555],["fotoblogia.pl",555],["abczdrowie.pl",555],["parenting.pl",555],["kafeteria.pl",555],["vibez.pl",555],["wakacje.pl",555],["extradom.pl",555],["totalmoney.pl",555],["superauto.pl",555],["nerwica.com",555],["forum.echirurgia.pl",555],["dailywrap.net",555],["pysznosci.pl",555],["genialne.pl",555],["finansowysupermarket.pl",555],["deliciousmagazine.pl",555],["jastrzabpost.pl",555],["audioteka.com",555],["easygo.pl",555],["so-magazyn.pl",555],["o2.pl",555],["pudelek.pl",555],["benchmark.pl",555],["wp.pl",555]]);
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
