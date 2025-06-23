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
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[onclick=\"cookiesAlert.rejectAll()\"]","","1000"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button[title=\"Adjust cookie preferences\"]","","500"],["button[title=\"Deny all cookies\"]","","650"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],["a.ea_ignore","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button#CybotCookiebotDialogBodyButtonDecline"],["button.cta-size-big.cta-outline"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",[7,8]],["forbes.com",[7,73]],["nike.com",7],["consent.fastcar.co.uk",7],["tapmaster.ca",7],["cmpv2.standard.co.uk",[9,10]],["cmpv2.independent.co.uk",[11,12,13,178]],["wetransfer.com",[14,15]],["spiegel.de",[16,17]],["nytimes.com",[18,174]],["consent.yahoo.com",19],["tumblr.com",20],["fplstatistics.co.uk",21],["fplstatistics.com",21],["e-shop.leonidas.com",22],["cdn.privacy-mgmt.com",[23,24,43,45,46,47,48,92,94,102,109,116,117,118,129,130,131,134,136,137,150,167,192,212,225,226,229,230,231,232,249,298,432,462,586,609,647,665]],["walmart.ca",25],["sams.com.mx",26],["my.tonies.com",27],["cambio-carsharing.de",27],["festool.*",27],["festoolcanada.com",27],["fuso-trucks.*",27],["tracker.fressnapf.de",27],["myfabrics.co.uk",27],["zinus.*",27],["consent.ladbible.com",[28,29]],["consent.unilad.com",[28,29]],["consent.uniladtech.com",[28,29]],["consent.gamingbible.com",[28,29]],["consent.sportbible.com",[28,29]],["consent.tyla.com",[28,29]],["consent.ladbiblegroup.com",[28,29]],["m2o.it",30],["deejay.it",30],["capital.it",30],["ilmattino.it",[30,31]],["leggo.it",[30,31]],["libero.it",30],["tiscali.it",30],["consent-manager.ft.com",[32,33,34]],["hertz.*",35],["mediaworld.it",36],["mediamarkt.*",36],["mediamarktsaturn.com",37],["uber.com",[38,175]],["ubereats.com",[38,175]],["lego.com",39],["ai.meta.com",40],["lilly.com",41],["cosmo-hairshop.de",42],["storyhouseegmont.no",42],["ilgiornale.it",44],["telekom.com",49],["telekom.net",49],["telekom.de",49],["abola.pt",50],["flytap.com",50],["ansons.de",50],["blick.ch",50],["buienradar.be",50],["crunchyroll.com",50],["digi24.ro",50],["digisport.ro",50],["digitalfoundry.net",50],["egx.net",50],["emirates.com",50],["eurogamer.it",50],["foto-erhardt.de",50],["gmx.*",50],["kizi.com",50],["mail.com",50],["mcmcomiccon.com",50],["nachrichten.at",50],["nintendolife.com",50],["oe24.at",50],["paxsite.com",50],["peacocktv.com",50],["player.pl",50],["plus500.*",50],["pricerunner.com",50],["pricerunner.se",50],["pricerunner.dk",50],["proximus.be",[50,642]],["proximus.com",50],["purexbox.com",50],["pushsquare.com",50],["rugbypass.com",50],["southparkstudios.com",50],["southwest.com",50],["starwarscelebration.com",50],["sweatybetty.com",50],["theaa.ie",50],["thehaul.com",50],["timeextension.com",50],["travelandleisure.com",50],["tunein.com",50],["uefa.com",50],["videoland.com",50],["wizzair.com",50],["wetter.at",50],["dicebreaker.com",[51,52]],["eurogamer.cz",[51,52]],["eurogamer.es",[51,52]],["eurogamer.net",[51,52]],["eurogamer.nl",[51,52]],["eurogamer.pl",[51,52]],["eurogamer.pt",[51,52]],["gamesindustry.biz",[51,52]],["jelly.deals",[51,52]],["reedpop.com",[51,52]],["rockpapershotgun.com",[51,52]],["thepopverse.com",[51,52]],["vg247.com",[51,52]],["videogameschronicle.com",[51,52]],["eurogamer.de",53],["roadtovr.com",54],["jotex.*",54],["mundodeportivo.com",[55,124]],["m.youtube.com",56],["www.youtube.com",56],["ohra.nl",57],["corriere.it",58],["gazzetta.it",58],["oggi.it",58],["cmp.sky.it",59],["tennisassa.fi",60],["formula1.com",61],["f1racing.pl",62],["music.amazon.*",[63,64]],["consent-pref.trustarc.com",65],["highlights.legaseriea.it",66],["calciomercato.com",66],["sosfanta.com",67],["chrono24.*",[68,69]],["wetter.com",70],["youmath.it",71],["pip.gov.pl",72],["dailybuzz.nl",74],["bnn.de",74],["dosenbach.ch",74],["dw.com",74],["kinepolis.*",74],["mediaite.com",74],["nzz.ch",74],["winfuture.de",74],["lippu.fi",74],["racingnews365.com",74],["reifendirekt.ch",74],["vaillant.*",74],["bauhaus.no",75],["bauhaus.se",75],["beko-group.de",75],["billiger.de",75],["burda.com",75],["vanharen.nl",75],["deichmann.com",[75,97,470]],["meraluna.de",75],["slashdot.org",75],["hermann-saunierduval.it",75],["protherm.cz",75],["saunierduval.es",75],["protherm.sk",75],["protherm.ua",75],["saunierduval.hu",75],["saunierduval.ro",75],["saunierduval.at",75],["awb.nl",75],["spar.hu",76],["group.vattenfall.com",76],["mediaset.it",77],["fortune.com",78],["ilrestodelcarlino.it",79],["quotidiano.net",79],["lanazione.it",79],["ilgiorno.it",79],["iltelegrafolivorno.it",79],["auto.it",80],["beauxarts.com",80],["beinsports.com",80],["bfmtv.com",[80,125]],["boursobank.com",80],["boursorama.com",[80,125]],["boursier.com",[80,219]],["brut.media",80],["canalplus.com",80],["decathlon.fr",[80,216]],["diverto.tv",80],["eden-park.com",80],["foodvisor.io",80],["frandroid.com",80],["jobijoba.*",80],["hotelsbarriere.com",80],["intersport.*",[80,189]],["idealista.it",80],["o2.fr",80],["lejdd.fr",[80,124]],["lechorepublicain.fr",80],["la-croix.com",80],["linfo.re",80],["lamontagne.fr",80],["laredoute.fr",80],["largus.fr",80],["leprogres.fr",80],["lesnumeriques.com",80],["libramemoria.com",80],["lopinion.fr",80],["marieclaire.fr",80],["maville.com",80],["michelin.*",80],["midilibre.fr",[80,669]],["meteofrance.com",80],["mondialtissus.fr",80],["orange.fr",80],["orpi.com",80],["oscaro.com",80],["ouest-france.fr",[80,93,125,670]],["parismatch.com",80],["pagesjaunes.fr",80],["programme-television.org",[80,125]],["publicsenat.fr",[80,125]],["rmcbfmplay.com",[80,125]],["science-et-vie.com",[80,124]],["seloger.com",80],["societe.com",80],["suzuki.fr",80],["sudouest.fr",80],["web-agri.fr",80],["nutri-plus.de",81],["aa.com",82],["americanairlines.*",82],["consent.capital.fr",83],["consent.voici.fr",83],["programme-tv.net",83],["cmpv2.finn.no",84],["cmp.e24.no",[85,86]],["minmote.no",[85,86]],["cmp.vg.no",[85,86]],["huffingtonpost.fr",87],["rainews.it",88],["remarkable.com",89],["netzwelt.de",90],["money.it",91],["allocine.fr",93],["jeuxvideo.com",93],["ozap.com",93],["le10sport.com",93],["xataka.com",93],["cmp.fitbook.de",94],["cmp.autobild.de",94],["sourcepoint.sport.de",94],["cmp-sp.tagesspiegel.de",94],["cmp.bz-berlin.de",94],["cmp.cicero.de",94],["cmp.techbook.de",94],["cmp.stylebook.de",94],["cmp2.bild.de",94],["cmp2.freiepresse.de",94],["sourcepoint.wetter.de",94],["consent.finanzen.at",94],["consent.finanzen.net",94],["consent.up.welt.de",94],["sourcepoint.n-tv.de",94],["sourcepoint.kochbar.de",94],["sourcepoint.rtl.de",94],["cmp.computerbild.de",94],["cmp.petbook.de",94],["cmp-sp.siegener-zeitung.de",94],["cmp-sp.sportbuzzer.de",94],["klarmobil.de",94],["technikum-wien.at",95],["eneco.nl",96],["salomon.com",98],["blackpoolgazette.co.uk",99],["lep.co.uk",99],["northamptonchron.co.uk",99],["scotsman.com",99],["shieldsgazette.com",99],["thestar.co.uk",99],["portsmouth.co.uk",99],["sunderlandecho.com",99],["northernirelandworld.com",99],["3addedminutes.com",99],["anguscountyworld.co.uk",99],["banburyguardian.co.uk",99],["bedfordtoday.co.uk",99],["biggleswadetoday.co.uk",99],["bucksherald.co.uk",99],["burnleyexpress.net",99],["buxtonadvertiser.co.uk",99],["chad.co.uk",99],["daventryexpress.co.uk",99],["derbyshiretimes.co.uk",99],["derbyworld.co.uk",99],["derryjournal.com",99],["dewsburyreporter.co.uk",99],["doncasterfreepress.co.uk",99],["falkirkherald.co.uk",99],["fifetoday.co.uk",99],["glasgowworld.com",99],["halifaxcourier.co.uk",99],["harboroughmail.co.uk",99],["harrogateadvertiser.co.uk",99],["hartlepoolmail.co.uk",99],["hemeltoday.co.uk",99],["hucknalldispatch.co.uk",99],["lancasterguardian.co.uk",99],["leightonbuzzardonline.co.uk",99],["lincolnshireworld.com",99],["liverpoolworld.uk",99],["londonworld.com",99],["lutontoday.co.uk",99],["manchesterworld.uk",99],["meltontimes.co.uk",99],["miltonkeynes.co.uk",99],["newcastleworld.com",99],["newryreporter.com",99],["newsletter.co.uk",99],["northantstelegraph.co.uk",99],["northumberlandgazette.co.uk",99],["nottinghamworld.com",99],["peterboroughtoday.co.uk",99],["rotherhamadvertiser.co.uk",99],["stornowaygazette.co.uk",99],["surreyworld.co.uk",99],["thescarboroughnews.co.uk",99],["thesouthernreporter.co.uk",99],["totallysnookered.com",99],["wakefieldexpress.co.uk",99],["walesworld.com",99],["warwickshireworld.com",99],["wigantoday.net",99],["worksopguardian.co.uk",99],["yorkshireeveningpost.co.uk",99],["yorkshirepost.co.uk",99],["eurocard.com",100],["saseurobonusmastercard.se",101],["tver.jp",103],["linkedin.com",104],["elmundo.es",[105,125]],["expansion.com",105],["s-pankki.fi",106],["srf.ch",106],["alternate.de",106],["bayer04.de",106],["douglas.de",106],["dr-beckmann.com",106],["falke.com",106],["fitnessfirst.de",106],["flaschenpost.de",106],["gloeckle.de",106],["hornbach.nl",106],["hypofriend.de",106],["lactostop.de",106],["neumann.com",106],["post.ch",106],["postbank.de",106],["immowelt.de",107],["joyn.*",107],["morenutrition.de",107],["mapillary.com",108],["cmp.seznam.cz",110],["marca.com",111],["raiplay.it",112],["raiplaysound.it",112],["derstandard.at",113],["derstandard.de",113],["faz.net",113],["automoto.it",114],["ansa.it",114],["delladio.it",114],["huffingtonpost.it",114],["internazionale.it",114],["lastampa.it",114],["macitynet.it",114],["moto.it",114],["movieplayer.it",114],["multiplayer.it",114],["repubblica.it",114],["tomshw.it",114],["skuola.net",114],["spaziogames.it",114],["tuttoandroid.net",114],["tuttotech.net",114],["ilgazzettino.it",115],["ilmessaggero.it",115],["ilsecoloxix.it",115],["privacy.motorradonline.de",118],["consent.watson.de",118],["consent.kino.de",118],["consent.desired.de",118],["cmpv2.fn.de",118],["spp.nextpit.de",118],["dailystar.co.uk",[119,120,121,122]],["mirror.co.uk",[119,120,121,122]],["idnes.cz",123],["20minutes.fr",124],["20minutos.es",124],["24sata.hr",124],["abc.es",124],["actu.fr",124],["antena3.com",124],["antena3internacional.com",124],["atresmedia.com",124],["atresmediapublicidad.com",124],["atresmediastudios.com",124],["atresplayer.com",124],["autopista.es",124],["belfasttelegraph.co.uk",124],["bemad.es",124],["bonduelle.it",124],["bonniernews.se",124],["bt.se",124],["cadenadial.com",124],["caracol.com.co",124],["cas.sk",124],["charentelibre.fr",124],["ciclismoafondo.es",124],["cnews.fr",124],["cope.es",124],["correryfitness.com",124],["courrier-picard.fr",124],["cuatro.com",124],["decathlon.nl",124],["decathlon.pl",124],["di.se",124],["diariocordoba.com",124],["diariodenavarra.es",124],["diariosur.es",124],["diariovasco.com",124],["diepresse.com",124],["divinity.es",124],["dn.se",124],["dnevnik.hr",124],["dumpert.nl",124],["ebuyclub.com",124],["edreams.de",124],["edreams.net",124],["elcomercio.es",124],["elconfidencial.com",124],["elcorreo.com",124],["eldesmarque.com",124],["eldiario.es",124],["eldiariomontanes.es",124],["elespanol.com",124],["elle.fr",124],["elpais.com",124],["elpais.es",124],["elperiodico.com",124],["elperiodicodearagon.com",124],["elplural.com",124],["energytv.es",124],["engadget.com",124],["es.ara.cat",124],["euronews.com",124],["europafm.com",124],["expressen.se",124],["factoriadeficcion.com",124],["filmstarts.de",124],["flooxernow.com",124],["folkbladet.nu",124],["footmercato.net",124],["france.tv",124],["france24.com",124],["francetvinfo.fr",124],["fussballtransfers.com",124],["fyndiq.se",124],["ghacks.net",124],["gva.be",124],["hbvl.be",124],["heraldo.es",124],["hoy.es",124],["ideal.es",124],["idealista.pt",124],["k.at",124],["krone.at",124],["kurier.at",124],["lacoste.com",124],["ladepeche.fr",124],["lalibre.be",124],["lanouvellerepublique.fr",124],["larazon.es",124],["lasexta.com",124],["lasprovincias.es",124],["latribune.fr",124],["lavanguardia.com",124],["laverdad.es",124],["lavozdegalicia.es",124],["leboncoin.fr",124],["lecturas.com",124],["ledauphine.com",124],["lejsl.com",124],["leparisien.fr",124],["lesoir.be",124],["letelegramme.fr",124],["levoixdunord.fr",124],["libremercado.com",124],["los40.com",124],["lotoquebec.com",124],["lunion.fr",124],["m6.fr",124],["marianne.cz",124],["marmiton.org",124],["mediaset.es",124],["melodia-fm.com",124],["metronieuws.nl",124],["moviepilot.de",124],["mtmad.es",124],["multilife.com.pl",124],["naszemiasto.pl",124],["nationalgeographic.com.es",124],["nicematin.com",124],["nieuwsblad.be",124],["notretemps.com",124],["numerama.com",124],["okdiario.com",124],["ondacero.es",124],["podiumpodcast.com",124],["portail.lotoquebec.com",124],["profil.at",124],["public.fr",124],["publico.es",124],["radiofrance.fr",124],["rankia.com",124],["rfi.fr",124],["rossmann.pl",124],["rtbf.be",[124,216]],["rtl.lu",124],["sensacine.com",124],["sfgame.net",124],["shure.com",124],["silicon.es",124],["sncf-connect.com",124],["sport.es",124],["sydsvenskan.se",124],["techcrunch.com",124],["telegraaf.nl",124],["telequebec.tv",124],["tf1.fr",124],["tradingsat.com",124],["trailrun.es",124],["video-streaming.orange.fr",124],["xpress.fr",124],["ivoox.com",125],["as.com",125],["slam.nl",125],["bienpublic.com",125],["funradio.fr",125],["gamepro.de",[125,186,187]],["lemon.fr",125],["lexpress.fr",125],["shadow.tech",125],["letemps.ch",125],["mein-mmo.de",125],["heureka.sk",125],["film.at",125],["dhnet.be",125],["lesechos.fr",[125,221]],["marianne.net",[125,216]],["jeanmarcmorandini.com",[125,217]],["dna.fr",125],["sudinfo.be",125],["europe1.fr",[125,217]],["rtl.be",[125,216]],["reviewingthebrew.com",125],["jaysjournal.com",125],["reignoftroy.com",125],["ryobitools.eu",[126,127]],["americanexpress.com",128],["consent.radiotimes.com",131],["sp-consent.szbz.de",132],["cmp.omni.se",133],["cmp.svd.se",133],["cmp.aftonbladet.se",133],["cmp.tv.nu",133],["consent.economist.com",135],["studentagency.cz",135],["cmpv2.foundryco.com",136],["cmpv2.infoworld.com",136],["cmpv2.arnnet.com.au",136],["sp-cdn.pcgames.de",137],["sp-cdn.pcgameshardware.de",137],["consentv2.sport1.de",137],["cmp.mz.de",137],["cmpv2.tori.fi",138],["cdn.privacy-mgmt.co",139],["consent.spielaffe.de",140],["bondekompaniet.no",141],["degiro.*",141],["epochtimes.de",141],["vikingline.com",141],["tfl.gov.uk",141],["drklein.de",141],["hildegardis-krankenhaus.de",141],["kleer.se",141],["lekiaviation.com",141],["lotto.pl",141],["mineralstech.com",141],["volunteer.digitalboost.org.uk",141],["starhotels.com",141],["tefl.com",141],["universumglobal.com",141],["tui.com",142],["rexel.*",143],["csob.sk",144],["greenstuffworld.com",145],["morele.net",[146,147]],["1und1.de",148],["infranken.de",149],["cmp.bunte.de",150],["cmp.chip.de",150],["cmp.focus.de",[150,497]],["estadiodeportivo.com",151],["tameteo.*",151],["tempo.pt",151],["meteored.*",151],["pogoda.com",151],["yourweather.co.uk",151],["tempo.com",151],["theweather.net",151],["tiempo.com",151],["ilmeteo.net",151],["daswetter.com",151],["kicker.de",152],["formulatv.com",153],["web.de",154],["lefigaro.fr",155],["linternaute.com",156],["consent.caminteresse.fr",157],["volksfreund.de",158],["rp-online.de",158],["dailypost.co.uk",159],["the-express.com",159],["vide-greniers.org",159],["bluray-disc.de",160],["elio-systems.com",160],["stagatha-fachklinik.de",160],["tarife.mediamarkt.de",160],["lz.de",160],["gaggenau.com",160],["saturn.de",161],["eltiempo.es",[162,163]],["otempo.pt",164],["atlasformen.*",165],["cmp-sp.goettinger-tageblatt.de",166],["cmp-sp.saechsische.de",166],["cmp-sp.ln-online.de",166],["cz.de",166],["dewezet.de",166],["dnn.de",166],["haz.de",166],["gnz.de",166],["landeszeitung.de",166],["lvz.de",166],["maz-online.de",166],["ndz.de",166],["op-marburg.de",166],["ostsee-zeitung.de",166],["paz-online.de",166],["reisereporter.de",166],["rga.de",166],["rnd.de",166],["siegener-zeitung.de",166],["sn-online.de",166],["solinger-tageblatt.de",166],["sportbuzzer.de",166],["szlz.de",166],["tah.de",166],["torgauerzeitung.de",166],["waz-online.de",166],["privacy.maennersache.de",166],["sinergy.ch",168],["agglo-valais-central.ch",168],["biomedcentral.com",169],["hsbc.*",170],["hsbcnet.com",170],["hsbcinnovationbanking.com",170],["create.hsbc",170],["gbm.hsbc.com",170],["hsbc.co.uk",171],["internationalservices.hsbc.com",171],["history.hsbc.com",171],["about.hsbc.co.uk",172],["privatebanking.hsbc.com",173],["independent.co.uk",176],["privacy.crash.net",176],["the-independent.com",177],["argos.co.uk",179],["poco.de",[180,181]],["moebelix.*",180],["moemax.*",180],["xxxlutz.*",180],["xxxlesnina.*",180],["moebel24.ch",181],["meubles.fr",181],["meubelo.nl",181],["moebel.de",181],["lipo.ch",182],["schubiger.ch",183],["aedt.de",184],["berlin-live.de",184],["connect.de",184],["gutefrage.net",184],["insideparadeplatz.ch",184],["morgenpost.de",184],["play3.de",184],["thueringen24.de",184],["pdfupload.io",185],["gamestar.de",[186,187,225]],["verksamt.se",188],["acmemarkets.com",189],["amtrak.com",189],["beko.com",189],["bepanthen.com.au",189],["berocca.com.au",189],["booking.com",189],["carrefour.fr",189],["centrum.sk",189],["claratyne.com.au",189],["credit-suisse.com",189],["ceskatelevize.cz",189],["deporvillage.*",189],["de.vanguard",189],["dhl.de",189],["digikey.*",189],["drafthouse.com",189],["dunelm.com",189],["eurosport.fr",189],["fello.se",189],["fielmann.*",189],["flashscore.fr",189],["flightradar24.com",189],["fnac.es",189],["foodandwine.com",189],["fourseasons.com",189],["khanacademy.org",189],["konami.com",189],["jll.*",189],["jobs.redbull.com",189],["hellenicbank.com",189],["gemini.pl",189],["groceries.asda.com",189],["lamborghini.com",189],["menshealth.com",189],["n26.com",189],["nintendo.com",189],["nokia.com",189],["oneweb.net",189],["omnipod.com",189],["oralb.*",189],["panasonic.com",189],["parkside-diy.com",189],["pluto.tv",189],["popularmechanics.com",189],["polskieradio.pl",189],["pringles.com",189],["radissonhotels.com",189],["ricardo.ch",189],["rockstargames.com",189],["rte.ie",189],["salesforce.com",189],["samsonite.*",189],["spiele.heise.de",189],["spirit.com",189],["stenaline.co.uk",189],["swisscom.ch",189],["swisspass.ch",189],["technologyfromsage.com",189],["telenet.be",189],["tntsports.co.uk",189],["theepochtimes.com",189],["toujeo.com",189],["uber-platz.de",189],["questdiagnostics.com",189],["wallapop.com",189],["wickes.co.uk",189],["workingtitlefilms.com",189],["vattenfall.de",189],["winparts.fr",189],["yoigo.com",189],["zoominfo.com",189],["allegiantair.com",190],["hallmarkchannel.com",190],["incorez.com",190],["noovle.com",190],["otter.ai",190],["plarium.com",190],["telsy.com",190],["timenterprise.it",190],["tim.it",190],["tradersunion.com",190],["fnac.*",190],["yeti.com",190],["here.com",[191,678]],["vodafone.com",191],["cmp.heise.de",193],["cmp.am-online.com",193],["cmp.motorcyclenews.com",193],["consent.newsnow.co.uk",193],["cmp.todays-golfer.com",193],["spp.nextpit.com",193],["koeser.com",194],["shop.schaette-pferd.de",194],["schaette.de",194],["ocre-project.eu",195],["central-bb.de",196],["fitnessfoodcorner.de",197],["kuehlungsborn.de",198],["espressocoffeeshop.com",199],["brainmarket.pl",200],["getroots.app",201],["cart-in.re",[202,605]],["prestonpublishing.pl",203],["zara.com",204],["lepermislibre.fr",204],["negociardivida.spcbrasil.org.br",205],["adidas.*",206],["privacy.topreality.sk",207],["privacy.autobazar.eu",207],["vu.lt",208],["adnkronos.com",[209,210]],["cornwalllive.com",[209,210]],["cyprus-mail.com",[209,210]],["einthusan.tv",[209,210]],["informazione.it",[209,210]],["mymovies.it",[209,210]],["tuttoeuropei.com",[209,210]],["video.lacnews24.it",[209,210]],["protothema.gr",209],["flash.gr",209],["taxscouts.com",211],["online.no",213],["telenor.no",213],["austrian.com",214],["lufthansa.com",214],["kampfkunst-herz.de",215],["glow25.de",215],["h-f.at",215],["hornetsecurity.com",215],["kayzen.io",215],["wasserkunst-hamburg.de",215],["zahnspange-oelde.de",215],["bnc.ca",216],["egora.fr",216],["engelvoelkers.com",216],["estrategiasdeinversion.com",216],["festo.com",216],["franceinfo.fr",216],["francebleu.fr",216],["francemediasmonde.com",216],["geny.com",216],["giphy.com",216],["idealista.com",216],["infolibre.es",216],["information.tv5monde.com",216],["ing.es",216],["knipex.de",216],["laprovence.com",216],["lemondeinformatique.fr",216],["libertaddigital.com",216],["mappy.com",216],["orf.at",216],["philibertnet.com",216],["researchgate.net",216],["standaard.be",216],["stroilioro.com",216],["taxfix.de",216],["telecinco.es",216],["vistaalegre.com",216],["zimbra.free.fr",216],["usinenouvelle.com",218],["reussir.fr",220],["bruendl.at",222],["latamairlines.com",223],["elisa.ee",224],["baseendpoint.brigitte.de",225],["baseendpoint.gala.de",225],["baseendpoint.haeuser.de",225],["baseendpoint.stern.de",225],["baseendpoint.urbia.de",225],["cmp.tag24.de",225],["cmp-sp.handelsblatt.com",225],["cmpv2.berliner-zeitung.de",225],["golem.de",225],["consent.t-online.de",225],["sp-consent.stuttgarter-nachrichten.de",226],["sp-consent.stuttgarter-zeitung.de",226],["regjeringen.no",227],["sp-manager-magazin-de.manager-magazin.de",228],["consent.11freunde.de",228],["centrum24.pl",233],["replay.lsm.lv",234],["ltv.lsm.lv",234],["bernistaba.lsm.lv",234],["stadt-wien.at",235],["verl.de",235],["cubo-sauna.de",235],["mbl.is",235],["auto-medienportal.net",235],["mobile.de",236],["cookist.it",237],["fanpage.it",237],["geopop.it",237],["lexplain.it",237],["royalmail.com",238],["gmx.net",239],["gmx.ch",240],["mojehobby.pl",241],["super-hobby.*",241],["sp.stylevamp.de",242],["cmp.wetteronline.de",242],["audi.*",243],["easyjet.com",243],["experian.co.uk",243],["postoffice.co.uk",243],["tescobank.com",243],["internetaptieka.lv",[244,245]],["wells.pt",246],["dskdirect.bg",247],["cmpv2.dba.dk",248],["spcmp.crosswordsolver.com",249],["ecco.com",250],["georgjensen.com",250],["thomann.*",251],["landkreis-kronach.de",252],["effectiefgeven.be",253],["northcoast.com",253],["chaingpt.org",253],["bandenconcurrent.nl",254],["bandenexpert.be",254],["reserved.com",255],["metro.it",256],["makro.es",256],["metro.sk",256],["metro-cc.hr",256],["makro.nl",256],["metro.bg",256],["metro.at",256],["metro-tr.com",256],["metro.de",256],["metro.fr",256],["makro.cz",256],["metro.ro",256],["makro.pt",256],["makro.pl",256],["sklepy-odido.pl",256],["rastreator.com",256],["metro.ua",257],["metro.rs",257],["metro-kz.com",257],["metro.md",257],["metro.hu",257],["metro-cc.ru",257],["metro.pk",257],["balay.es",258],["constructa.com",258],["dafy-moto.com",259],["akku-shop.nl",260],["akkushop-austria.at",260],["akkushop-b2b.de",260],["akkushop.de",260],["akkushop.dk",260],["batterie-boutique.fr",260],["akkushop-schweiz.ch",261],["evzuttya.com.ua",262],["eobuv.cz",262],["eobuwie.com.pl",262],["ecipele.hr",262],["eavalyne.lt",262],["efootwear.eu",262],["eschuhe.ch",262],["eskor.se",262],["chaussures.fr",262],["ecipo.hu",262],["eobuv.com.ua",262],["eobuv.sk",262],["epantofi.ro",262],["epapoutsia.gr",262],["escarpe.it",262],["eschuhe.de",262],["obuvki.bg",262],["zapatos.es",262],["swedbank.ee",263],["mudanzavila.es",264],["bienmanger.com",265],["gesipa.*",266],["gesipausa.com",266],["beckhoff.com",266],["zitekick.dk",267],["eltechno.dk",267],["okazik.pl",267],["batteryempire.*",268],["maxi.rs",269],["garmin.com",270],["invisalign.*",270],["one4all.ie",270],["osprey.com",270],["wideroe.no",271],["bmw.*",272],["kijk.nl",273],["nordania.dk",274],["danskebank.*",274],["danskeci.com",274],["danicapension.dk",274],["dehn.*",275],["gewerbegebiete.de",276],["cordia.fr",277],["vola.fr",278],["lafi.fr",279],["skyscanner.*",280],["coolblue.*",281],["sanareva.*",282],["atida.fr",282],["bbva.*",283],["bbvauk.com",283],["expertise.unimi.it",284],["altenberg.de",285],["vestel.es",286],["tsb.co.uk",287],["buienradar.nl",[288,289]],["linsenplatz.de",290],["budni.de",291],["erstecardclub.hr",291],["teufel.de",[292,293]],["abp.nl",294],["simplea.sk",295],["flip.bg",296],["kiertokanki.com",297],["leirovins.be",299],["vias.be",300],["edf.fr",301],["virbac.com",301],["diners.hr",301],["squarehabitat.fr",301],["arbitrobancariofinanziario.it",302],["ivass.it",302],["economiapertutti.bancaditalia.it",302],["smit-sport.de",303],["gekko-computer.de",303],["jysk.al",304],["go-e.com",305],["malerblatt-medienservice.de",306],["architekturbuch.de",306],["medienservice-holz.de",306],["leuchtstark.de",306],["casius.nl",307],["coolinarika.com",308],["giga-hamburg.de",308],["vakgaragevannunen.nl",308],["fortuluz.es",308],["finna.fi",308],["eurogrow.es",308],["topnatur.cz",308],["topnatur.eu",308],["vakgaragevandertholen.nl",308],["whufc.com",308],["zomaplast.cz",308],["envafors.dk",309],["dabbolig.dk",[310,311]],["daruk-emelok.hu",312],["exakta.se",313],["larca.de",314],["roli.com",315],["okazii.ro",316],["lr-shop-direkt.de",316],["portalprzedszkolny.pl",316],["tgvinoui.sncf",317],["l-bank.de",318],["interhyp.de",319],["indigoneo.*",320],["transparency.meta.com",321],["dojusagro.lt",322],["eok.ee",322],["kripa.it",322],["nextdaycatering.co.uk",322],["safran-group.com",322],["sr-ramenendeuren.be",322],["ilovefreegle.org",322],["tribexr.com",322],["understandingsociety.ac.uk",322],["bestbuycyprus.com",323],["strato.*",324],["strato-hosting.co.uk",324],["auto.de",325],["contentkingapp.com",326],["comune.palermo.it",327],["get-in-engineering.de",328],["spp.nextpit.es",329],["spp.nextpit.it",330],["spp.nextpit.com.br",331],["spp.nextpit.fr",332],["otterbox.com",333],["stoertebeker-brauquartier.com",334],["stoertebeker.com",334],["stoertebeker-eph.com",334],["aparts.pl",335],["sinsay.com",[336,337]],["benu.cz",338],["stockholmresilience.org",339],["ludvika.se",339],["kammarkollegiet.se",339],["cazenovecapital.com",340],["statestreet.com",341],["beopen.lv",342],["cesukoncertzale.lv",343],["dodo.fr",344],["pepper.it",345],["pepper.pl",345],["preisjaeger.at",345],["mydealz.de",345],["dealabs.com",345],["hotukdeals.com",345],["chollometro.com",345],["makelaarsland.nl",346],["bezirk-schwaben.de",347],["nutsinbulk.co.uk",348],["bricklink.com",349],["bestinver.es",350],["icvs2023.conf.tuwien.ac.at",351],["racshop.co.uk",[352,353]],["baabuk.com",354],["sapien.io",354],["tradedoubler.com",354],["app.lepermislibre.fr",355],["multioferta.es",356],["testwise.com",[357,358]],["tonyschocolonely.com",359],["fitplus.is",359],["fransdegrebber.nl",359],["lilliputpress.ie",359],["lexibo.com",359],["marin-milou.com",359],["dare2tri.com",359],["t3micro.*",359],["la-vie-naturelle.com",[360,361]],["inovelli.com",362],["uonetplus.vulcan.net.pl",[363,364]],["consent.helagotland.se",365],["oper.koeln",[366,367]],["deezer.com",368],["hoteldesartssaigon.com",369],["autoritedelaconcurrence.fr",370],["groupeonepoint.com",370],["geneanet.org",370],["carrieres.groupegalerieslafayette.com",370],["immo-banques.fr",370],["lingvanex.com",370],["turncamp.com",371],["ejobs.ro",[372,373]],["kupbilecik.*",[374,375]],["coolbe.com",376],["serienjunkies.de",377],["computerhoy.20minutos.es",378],["clickskeks.at",379],["clickskeks.de",379],["abt-sportsline.de",379],["exemplary.ai",380],["forbo.com",380],["stores.sk",380],["nerdstar.de",380],["prace.cz",380],["profesia.sk",380],["profesia.cz",380],["pracezarohem.cz",380],["atmoskop.cz",380],["seduo.sk",380],["seduo.cz",380],["teamio.com",380],["arnold-robot.com",380],["cvonline.lt",380],["cv.lv",380],["cv.ee",380],["dirbam.lt",380],["visidarbi.lv",380],["otsintood.ee",380],["webtic.it",380],["gerth.de",381],["pamiatki.pl",382],["initse.com",383],["salvagny.org",384],["augsburger-allgemeine.de",385],["stabila.com",386],["stwater.co.uk",387],["suncalc.org",[388,389]],["swisstph.ch",390],["taxinstitute.ie",391],["get-in-it.de",392],["tempcover.com",[393,394]],["guildford.gov.uk",395],["easyparts.*",[396,397]],["easyparts-recambios.es",[396,397]],["easyparts-rollerteile.de",[396,397]],["drimsim.com",398],["canyon.com",[399,400]],["vevovo.be",[401,402]],["vendezvotrevoiture.be",[401,402]],["wirkaufendeinauto.at",[401,402]],["vikoberallebiler.dk",[401,402]],["wijkopenautos.nl",[401,402]],["vikoperdinbil.se",[401,402]],["noicompriamoauto.it",[401,402]],["vendezvotrevoiture.fr",[401,402]],["compramostucoche.es",[401,402]],["wijkopenautos.be",[401,402]],["auto-doc.*",403],["autodoc.*",403],["autodoc24.*",403],["topautoosat.fi",403],["autoteiledirekt.de",403],["autoczescionline24.pl",403],["tuttoautoricambi.it",403],["onlinecarparts.co.uk",403],["autoalkatreszek24.hu",403],["autodielyonline24.sk",403],["reservdelar24.se",403],["pecasauto24.pt",403],["reservedeler24.co.no",403],["piecesauto24.lu",403],["rezervesdalas24.lv",403],["besteonderdelen.nl",403],["recambioscoche.es",403],["antallaktikaexartimata.gr",403],["piecesauto.fr",403],["teile-direkt.ch",403],["lpi.org",404],["divadelniflora.cz",405],["mahle-aftermarket.com",406],["refurbed.*",407],["eingutertag.org",408],["flyingtiger.com",[408,554]],["borgomontecedrone.it",408],["maharishistore.com",408],["recaro-shop.com",408],["gartenhotel-crystal.at",408],["fayn.com",409],["serica-watches.com",409],["sklavenitis.gr",410],["eam-netz.de",411],["umicore.*",412],["veiligverkeer.be",412],["vsv.be",412],["dehogerielen.be",412],["gera.de",413],["mfr-chessy.fr",414],["mfr-lamure.fr",414],["mfr-saint-romain.fr",414],["mfr-lapalma.fr",414],["mfrvilliemorgon.asso.fr",414],["mfr-charentay.fr",414],["mfr.fr",414],["nationaltrust.org.uk",415],["hej-natural.*",416],["ib-hansmeier.de",417],["rsag.de",418],["esaa-eu.org",418],["aknw.de",418],["answear.*",419],["theprotocol.it",[420,421]],["lightandland.co.uk",422],["etransport.pl",423],["wohnen-im-alter.de",424],["johnmuirhealth.com",[425,426]],["markushaenni.com",427],["airbaltic.com",428],["gamersgate.com",428],["zorgzaam010.nl",429],["etos.nl",430],["paruvendu.fr",431],["cmpv2.bistro.sk",433],["privacy.bazar.sk",433],["hennamorena.com",434],["newsello.pl",435],["porp.pl",436],["golfbreaks.com",437],["lieferando.de",438],["just-eat.*",438],["justeat.*",438],["pyszne.pl",438],["lieferando.at",438],["takeaway.com",438],["thuisbezorgd.nl",438],["holidayhypermarket.co.uk",439],["unisg.ch",440],["wassererleben.ch",440],["psgaz.pl",441],["play-asia.com",442],["atu.de",443],["atu-flottenloesungen.de",443],["but.fr",443],["edeka.de",443],["fortuneo.fr",443],["maif.fr",443],["particuliers.sg.fr",443],["sparkasse.at",443],["group.vig",443],["tf1info.fr",443],["dpdgroup.com",444],["dpd.fr",444],["dpd.com",444],["cosmosdirekt.de",444],["bstrongoutlet.pt",445],["nobbot.com",446],["isarradweg.de",[447,448]],["flaxmanestates.com",448],["inland-casas.com",448],["finlayson.fi",[449,450]],["cowaymega.ca",[449,450]],["arktis.de",451],["desktronic.de",451],["belleek.com",451],["brauzz.com",451],["cowaymega.com",451],["dockin.de",451],["dryrobe.com",[451,452]],["formswim.com",451],["hairtalk.se",451],["hallmark.co.uk",[451,452]],["loopearplugs.com",[451,452]],["oleus.com",451],["peopleofshibuya.com",451],["pullup-dip.com",451],["sanctum.shop",451],["tartanblanketco.com",451],["desktronic.*",452],["hq-germany.com",452],["tepedirect.com",452],["maxi-pet.ro",452],["paper-republic.com",452],["pullup-dip.*",452],["vitabiotics.com",452],["smythstoys.com",453],["beam.co.uk",[454,455]],["autobahn.de",456],["krakow.pl",457],["shop.app",458],["shopify.com",458],["wufoo.com",459],["consent.dailymotion.com",460],["laposte.fr",460],["help.instagram.com",461],["consent-manager.thenextweb.com",463],["consent-cdn.zeit.de",464],["coway-usa.com",465],["steiners.shop",466],["ecmrecords.com",467],["malaikaraiss.com",467],["koch-mit.de",467],["zeitreisen.zeit.de",467],["wefashion.com",468],["merkur.dk",469],["ionos.*",471],["omegawatches.com",472],["carefully.be",473],["aerotime.aero",473],["rocket-league.com",474],["dws.com",475],["bosch-homecomfort.com",476],["elmleblanc-optibox.fr",476],["monservicechauffage.fr",476],["boschrexroth.com",476],["home-connect.com",477],["lowrider.at",[478,479]],["mesto.de",480],["intersport.gr",481],["intersport.bg",481],["intersport.com.cy",481],["intersport.ro",481],["ticsante.com",482],["techopital.com",482],["millenniumprize.org",483],["hepster.com",484],["ellisphere.fr",485],["peterstaler.de",486],["blackforest-still.de",486],["tiendaplayaundi.com",487],["ajtix.co.uk",488],["raja.fr",489],["rajarani.de",489],["rajapack.*",[489,490]],["avery-zweckform.com",491],["1xinternet.de",491],["futterhaus.de",491],["dasfutterhaus.at",491],["frischeparadies.de",491],["fmk-steuer.de",491],["selgros.de",491],["transgourmet.de",491],["mediapart.fr",492],["athlon.com",493],["alumniportal-deutschland.org",494],["snoopmedia.com",494],["myguide.de",494],["study-in-germany.de",494],["daad.de",494],["cornelsen.de",[495,496]],["vinmonopolet.no",498],["tvp.info",499],["tvp.pl",499],["tvpworld.com",499],["brtvp.pl",499],["tvpparlament.pl",499],["belsat.eu",499],["warnung.bund.de",500],["mediathek.lfv-bayern.de",501],["allegro.*",502],["allegrolokalnie.pl",502],["ceneo.pl",502],["czc.cz",502],["eon.pl",[503,504]],["ylasatakunta.fi",[505,506]],["mega-image.ro",507],["louisvuitton.com",508],["bodensee-airport.eu",509],["department56.com",510],["allendesignsstudio.com",510],["designsbylolita.co",510],["shop.enesco.com",510],["savoriurbane.com",511],["miumiu.com",512],["church-footwear.com",512],["clickdoc.fr",513],["car-interface.com",514],["monolithdesign.it",514],["thematchahouse.com",514],["smileypack.de",[515,516]],["finom.co",517],["orange.es",[518,519]],["fdm-travel.dk",520],["hummel.dk",520],["jysk.nl",520],["power.no",520],["skousen.dk",520],["velliv.dk",520],["whiteaway.com",520],["whiteaway.no",520],["whiteaway.se",520],["skousen.no",520],["energinet.dk",520],["elkjop.no",520],["medimax.de",521],["costautoricambi.com",522],["lotto.it",522],["readspeaker.com",522],["team.blue",522],["ibistallinncenter.ee",523],["aaron.ai",524],["futureverse.com",525],["tandem.co.uk",525],["insights.com",526],["thebathcollection.com",527],["coastfashion.com",[528,529]],["oasisfashion.com",[528,529]],["warehousefashion.com",[528,529]],["misspap.com",[528,529]],["karenmillen.com",[528,529]],["boohooman.com",[528,529]],["hdt.de",530],["wolt.com",531],["myprivacy.dpgmedia.nl",532],["myprivacy.dpgmedia.be",532],["www.dpgmediagroup.com",532],["xohotels.com",533],["sim24.de",534],["tnt.com",535],["uza.be",536],["uzafoundation.be",536],["uzajobs.be",536],["bergzeit.*",[537,538]],["cinemas-lumiere.com",539],["cdiscount.com",540],["brabus.com",541],["roborock.com",542],["strumentimusicali.net",543],["maisonmargiela.com",544],["webfleet.com",545],["dragonflyshipping.ca",546],["broekhuis.nl",547],["groningenairport.nl",547],["nemck.cz",548],["bokio.se",549],["sap-press.com",550],["roughguides.com",[551,552]],["korvonal.com",553],["rexbo.*",555],["itau.com.br",556],["bbg.gv.at",557],["portal.taxi.eu",558],["topannonces.fr",559],["homap.fr",560],["artifica.fr",561],["plan-interactif.com",561],["ville-cesson.fr",561],["moismoliere.com",562],["unihomes.co.uk",563],["bkk.hu",564],["coiffhair.com",565],["ptc.eu",566],["ziegert-group.com",[567,675]],["lassuranceretraite.fr",568],["interieur.gouv.fr",568],["toureiffel.paris",568],["economie.gouv.fr",568],["education.gouv.fr",568],["livoo.fr",568],["su.se",568],["zappo.fr",568],["smdv.de",569],["digitalo.de",569],["petiteamelie.*",570],["mojanorwegia.pl",571],["koempf24.ch",[572,573]],["teichitekten24.de",[572,573]],["koempf24.de",[572,573]],["wolff-finnhaus-shop.de",[572,573]],["asnbank.nl",574],["blgwonen.nl",574],["regiobank.nl",574],["snsbank.nl",574],["vulcan.net.pl",[575,576]],["ogresnovads.lv",577],["partenamut.be",578],["pirelli.com",579],["unicredit.it",580],["effector.pl",581],["zikodermo.pl",[582,583]],["devolksbank.nl",584],["caixabank.es",585],["cyberport.de",587],["cyberport.at",587],["slevomat.cz",588],["kfzparts24.de",589],["runnersneed.com",590],["aachener-zeitung.de",591],["sportpursuit.com",592],["druni.es",[593,606]],["druni.pt",[593,606]],["delta.com",594],["onliner.by",[595,596]],["vejdirektoratet.dk",597],["usaa.com",598],["consorsbank.de",599],["metroag.de",600],["kupbilecik.pl",601],["oxfordeconomics.com",602],["oxfordeconomics.com.au",[603,604]],["routershop.nl",605],["woo.pt",605],["e-jumbo.gr",607],["alza.*",608],["rmf.fm",610],["rmf24.pl",610],["tracfone.com",611],["lequipe.fr",612],["global.abb",613],["gala.fr",614],["purepeople.com",615],["3sat.de",616],["zdf.de",616],["filmfund.lu",617],["welcometothejungle.com",617],["triblive.com",618],["rai.it",619],["fbto.nl",620],["europa.eu",621],["caisse-epargne.fr",622],["banquepopulaire.fr",622],["bigmammagroup.com",623],["studentagency.sk",623],["studentagency.eu",623],["winparts.be",624],["winparts.nl",624],["winparts.eu",625],["winparts.ie",625],["winparts.se",625],["sportano.*",[626,627]],["crocs.*",628],["chronext.ch",629],["chronext.de",629],["chronext.at",629],["chronext.com",630],["chronext.co.uk",630],["chronext.fr",631],["chronext.nl",632],["chronext.it",633],["galerieslafayette.com",634],["bazarchic.com",635],["stilord.*",636],["tiko.pt",637],["nsinternational.com",638],["meinbildkalender.de",639],["gls-group.com",640],["gls-group.eu",640],["chilis.com",641],["account.bhvr.com",643],["everand.com",643],["lucidchart.com",643],["intercars.ro",[643,644]],["scribd.com",643],["guidepoint.com",643],["erlebnissennerei-zillertal.at",645],["hintertuxergletscher.at",645],["tiwag.at",645],["anwbvignetten.nl",646],["playseatstore.com",646],["swiss-sport.tv",648],["targobank-magazin.de",649],["zeit-verlagsgruppe.de",649],["online-physiotherapie.de",649],["kieferorthopaede-freisingsmile.de",650],["nltraining.nl",651],["kmudigital.at",652],["mintysquare.com",653],["consent.thetimes.com",654],["cadenaser.com",655],["berlinale.de",656],["lebonlogiciel.com",657],["pharmastar.it",658],["washingtonpost.com",659],["brillenplatz.de",660],["angelplatz.de",660],["dt.mef.gov.it",661],["raffeldeals.com",662],["stepstone.de",663],["kobo.com",664],["zoxs.de",666],["offistore.fi",667],["collinsaerospace.com",668],["radioapp.lv",671],["hagengrote.de",672],["hemden-meister.de",672],["vorteilshop.com",673],["capristores.gr",674],["getaround.com",676],["technomarket.bg",677],["epiphone.com",679],["gibson.com",679],["maestroelectronics.com",679],["cropp.com",[680,681]],["housebrand.com",[680,681]],["mohito.com",[680,681]],["autoczescizielonki.pl",682],["b-s.de",683],["novakid.pl",684],["piecesauto24.com",685],["earpros.com",686],["portalridice.cz",687],["kitsapcu.org",688],["nutsinbulk.*",689],["berlin-buehnen.de",690],["metropoliten.rs",691],["educa2.madrid.org",692],["immohal.de",693],["sourcepoint.theguardian.com",694],["rtlplay.be",695],["natgeotv.com",695],["llama.com",696],["meta.com",696],["setasdesevilla.com",697],["cruyff-foundation.org",698],["allianz.*",699],["energiedirect-bayern.de",700],["postnl.be",701],["postnl.nl",701],["sacyr.com",702],["volkswagen-newsroom.com",703],["openbank.*",704],["tagus-eoficina.grupogimeno.com",705],["tidal.com",706],["knax.de",707],["ordblindenetvaerket.dk",708],["boligbeton.dk",708],["dukh.dk",708],["pevgrow.com",709],["ya.ru",710],["ipolska24.pl",711],["17bankow.com",711],["5mindlazdrowia.pl",711],["kazimierzdolny.pl",711],["vpolshchi.pl",711],["dobreprogramy.pl",711],["essanews.com",711],["dailywrap.ca",711],["dailywrap.uk",711],["money.pl",711],["autokult.pl",711],["komorkomania.pl",711],["polygamia.pl",711],["autocentrum.pl",711],["allani.pl",711],["homebook.pl",711],["domodi.pl",711],["jastrzabpost.pl",711],["open.fm",711],["gadzetomania.pl",711],["fotoblogia.pl",711],["abczdrowie.pl",711],["parenting.pl",711],["kafeteria.pl",711],["vibez.pl",711],["wakacje.pl",711],["extradom.pl",711],["totalmoney.pl",711],["superauto.pl",711],["nerwica.com",711],["forum.echirurgia.pl",711],["dailywrap.net",711],["pysznosci.pl",711],["genialne.pl",711],["finansowysupermarket.pl",711],["deliciousmagazine.pl",711],["audioteka.com",711],["easygo.pl",711],["so-magazyn.pl",711],["o2.pl",711],["pudelek.pl",711],["benchmark.pl",711],["wp.pl",711],["altibox.dk",712],["altibox.no",712],["talksport.com",713],["zuiderzeemuseum.nl",714],["gota.io",715],["nwzonline.de",716],["wero-wallet.eu",717],["scaleway.com",718]]);
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
