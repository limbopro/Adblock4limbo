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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"consent\"]:not([class*=\"reject\"])"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1500"],["button[title=\"Zustimmen\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-e2e=\"pure-accept-ads\"]","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.js-alert-cookie-reject","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["button#ensSave","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button[id=\"ketch-banner-button-secondary\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Agree\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#btnAcceptPDPA","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],["button#acceptCookiesTerms","","1000"],["a.footer-cookies-button-save-all","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["body > div[class] > div[class] > div[class]:has(a[href*=\"holding.wp.pl\"]) > div[class] > div[class]:only-child > button:first-child"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button#CybotCookiebotDialogBodyButtonDecline"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"],["#cookie-consent-button","","1500"],["#onetrust-accept-btn-handler"],["com-consent-layer >>> #cmpDenyAll","","2500"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"level1PrimaryButton-\"]:not([class*=\"reject\"])"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["heise.de",7],["theguardian.com",7],["bloomberg.com",[8,9]],["forbes.com",[8,74]],["nike.com",8],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,180]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,176]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["cdn.privacy-mgmt.com",[24,25,43,46,47,48,49,94,96,104,111,118,119,120,131,132,133,136,138,139,141,152,169,194,215,228,229,232,233,234,235,254,304,468,591,612,650,670]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,177]],["ubereats.com",[39,177]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["ilgiornale.it",44],["dailymail.co.uk",45],["telekom.com",50],["telekom.de",50],["abola.pt",51],["flytap.com",51],["ansons.de",51],["blick.ch",51],["buienradar.be",51],["crunchyroll.com",51],["digi24.ro",51],["digisport.ro",51],["digitalfoundry.net",51],["egx.net",51],["emirates.com",51],["eurogamer.it",51],["foto-erhardt.de",51],["gmx.*",51],["kizi.com",51],["mail.com",51],["mcmcomiccon.com",51],["nachrichten.at",51],["nintendolife.com",51],["oe24.at",51],["paxsite.com",51],["peacocktv.com",51],["player.pl",51],["plus500.*",51],["pricerunner.com",51],["pricerunner.se",51],["pricerunner.dk",51],["proximus.be",[51,645]],["proximus.com",51],["purexbox.com",51],["pushsquare.com",51],["rugbypass.com",51],["southparkstudios.com",51],["southwest.com",51],["starwarscelebration.com",51],["sweatybetty.com",51],["theaa.ie",51],["thehaul.com",51],["timeextension.com",51],["travelandleisure.com",51],["tunein.com",51],["uefa.com",51],["videoland.com",51],["wizzair.com",51],["wetter.at",51],["dicebreaker.com",[52,53]],["eurogamer.es",[52,53]],["eurogamer.net",[52,53]],["eurogamer.nl",[52,53]],["eurogamer.pl",[52,53]],["eurogamer.pt",[52,53]],["gamesindustry.biz",[52,53]],["reedpop.com",[52,53]],["rockpapershotgun.com",[52,53]],["thepopverse.com",[52,53]],["vg247.com",[52,53]],["videogameschronicle.com",[52,53]],["eurogamer.de",54],["roadtovr.com",55],["jotex.*",55],["mundodeportivo.com",[56,126]],["m.youtube.com",57],["www.youtube.com",57],["ohra.nl",58],["corriere.it",59],["gazzetta.it",59],["oggi.it",59],["cmp.sky.it",60],["tennisassa.fi",61],["formula1.com",62],["f1racing.pl",63],["music.amazon.*",[64,65]],["consent-pref.trustarc.com",66],["highlights.legaseriea.it",67],["calciomercato.com",67],["sosfanta.com",68],["chrono24.*",[69,70]],["wetter.com",71],["youmath.it",72],["pip.gov.pl",73],["dailybuzz.nl",75],["bnn.de",75],["dosenbach.ch",75],["dw.com",75],["kinepolis.*",75],["mediaite.com",75],["nzz.ch",75],["winfuture.de",75],["lippu.fi",75],["racingnews365.com",75],["reifendirekt.ch",75],["vaillant.*",75],["bauhaus.no",76],["bauhaus.se",76],["beko-group.de",76],["billiger.de",76],["burda.com",76],["vanharen.nl",76],["deichmann.com",[76,99,476]],["meraluna.de",76],["slashdot.org",76],["hermann-saunierduval.it",76],["protherm.cz",76],["saunierduval.es",76],["protherm.sk",76],["protherm.ua",76],["saunierduval.hu",76],["saunierduval.ro",76],["saunierduval.at",76],["awb.nl",76],["spar.hu",77],["group.vattenfall.com",77],["mediaset.it",78],["fortune.com",79],["ilrestodelcarlino.it",80],["quotidiano.net",80],["lanazione.it",80],["ilgiorno.it",80],["iltelegrafolivorno.it",80],["auto.it",81],["beauxarts.com",81],["beinsports.com",81],["bfmtv.com",[81,127]],["boursobank.com",81],["boursorama.com",[81,127]],["boursier.com",[81,222]],["brut.media",81],["canalplus.com",81],["decathlon.fr",[81,219]],["diverto.tv",81],["eden-park.com",81],["foodvisor.io",81],["frandroid.com",81],["jobijoba.*",81],["hotelsbarriere.com",81],["intersport.*",[81,191]],["idealista.it",81],["o2.fr",81],["lejdd.fr",[81,126]],["lechorepublicain.fr",81],["la-croix.com",81],["linfo.re",81],["lamontagne.fr",81],["laredoute.fr",81],["largus.fr",81],["leprogres.fr",81],["lesnumeriques.com",81],["libramemoria.com",81],["lopinion.fr",81],["marieclaire.fr",81],["maville.com",81],["michelin.*",81],["midilibre.fr",[81,674]],["meteofrance.com",81],["mondialtissus.fr",81],["orange.fr",81],["orpi.com",81],["oscaro.com",81],["ouest-france.fr",[81,95,127,675]],["parismatch.com",81],["pagesjaunes.fr",81],["programme-television.org",[81,127]],["publicsenat.fr",[81,127]],["rmcbfmplay.com",[81,127]],["science-et-vie.com",[81,126]],["seloger.com",81],["societe.com",81],["suzuki.fr",81],["sudouest.fr",81],["web-agri.fr",81],["nutri-plus.de",82],["americanairlines.*",83],["consent.capital.fr",84],["consent.programme.tv",84],["consent.voici.fr",84],["programme-tv.net",84],["cmpv2.finn.no",85],["cmp.tek.no",[86,87]],["cmp.e24.no",[86,87]],["minmote.no",[86,87]],["cmp.vg.no",[86,87]],["cloud.google.com",88],["developer.android.com",88],["registry.google",88],["safety.google",88],["huffingtonpost.fr",89],["rainews.it",90],["remarkable.com",91],["netzwelt.de",92],["money.it",93],["allocine.fr",95],["jeuxvideo.com",95],["ozap.com",95],["le10sport.com",95],["xataka.com",95],["cmp.fitbook.de",96],["cmp.autobild.de",96],["sourcepoint.sport.de",96],["cmp-sp.tagesspiegel.de",96],["cmp.bz-berlin.de",96],["cmp.cicero.de",96],["cmp.techbook.de",96],["cmp.stylebook.de",96],["cmp2.bild.de",96],["cmp2.freiepresse.de",96],["sourcepoint.wetter.de",96],["consent.finanzen.at",96],["consent.finanzen.net",96],["consent.up.welt.de",96],["sourcepoint.n-tv.de",96],["sourcepoint.kochbar.de",96],["sourcepoint.rtl.de",96],["cmp.computerbild.de",96],["cmp.petbook.de",96],["cmp-sp.siegener-zeitung.de",96],["cmp-sp.sportbuzzer.de",96],["klarmobil.de",96],["technikum-wien.at",97],["eneco.nl",98],["salomon.com",100],["blackpoolgazette.co.uk",101],["lep.co.uk",101],["northamptonchron.co.uk",101],["scotsman.com",101],["shieldsgazette.com",101],["thestar.co.uk",101],["portsmouth.co.uk",101],["sunderlandecho.com",101],["northernirelandworld.com",101],["3addedminutes.com",101],["anguscountyworld.co.uk",101],["banburyguardian.co.uk",101],["bedfordtoday.co.uk",101],["biggleswadetoday.co.uk",101],["bucksherald.co.uk",101],["burnleyexpress.net",101],["buxtonadvertiser.co.uk",101],["chad.co.uk",101],["daventryexpress.co.uk",101],["derbyshiretimes.co.uk",101],["derbyworld.co.uk",101],["derryjournal.com",101],["dewsburyreporter.co.uk",101],["doncasterfreepress.co.uk",101],["falkirkherald.co.uk",101],["fifetoday.co.uk",101],["glasgowworld.com",101],["halifaxcourier.co.uk",101],["harboroughmail.co.uk",101],["harrogateadvertiser.co.uk",101],["hartlepoolmail.co.uk",101],["hemeltoday.co.uk",101],["hucknalldispatch.co.uk",101],["lancasterguardian.co.uk",101],["leightonbuzzardonline.co.uk",101],["lincolnshireworld.com",101],["liverpoolworld.uk",101],["londonworld.com",101],["lutontoday.co.uk",101],["manchesterworld.uk",101],["meltontimes.co.uk",101],["miltonkeynes.co.uk",101],["newcastleworld.com",101],["newryreporter.com",101],["newsletter.co.uk",101],["northantstelegraph.co.uk",101],["northumberlandgazette.co.uk",101],["nottinghamworld.com",101],["peterboroughtoday.co.uk",101],["rotherhamadvertiser.co.uk",101],["stornowaygazette.co.uk",101],["surreyworld.co.uk",101],["thescarboroughnews.co.uk",101],["thesouthernreporter.co.uk",101],["totallysnookered.com",101],["wakefieldexpress.co.uk",101],["walesworld.com",101],["warwickshireworld.com",101],["wigantoday.net",101],["worksopguardian.co.uk",101],["yorkshireeveningpost.co.uk",101],["yorkshirepost.co.uk",101],["eurocard.com",102],["saseurobonusmastercard.se",103],["tver.jp",105],["linkedin.com",106],["elmundo.es",[107,127]],["expansion.com",107],["s-pankki.fi",108],["srf.ch",108],["alternate.de",108],["bayer04.de",108],["douglas.de",108],["dr-beckmann.com",108],["falke.com",108],["fitnessfirst.de",108],["flaschenpost.de",108],["gloeckle.de",108],["hornbach.nl",108],["hypofriend.de",108],["lactostop.de",108],["neumann.com",108],["post.ch",108],["postbank.de",108],["rts.ch",108],["zalando.*",108],["immowelt.de",109],["joyn.*",109],["morenutrition.de",109],["mapillary.com",110],["cmp.seznam.cz",112],["marca.com",113],["raiplay.it",114],["raiplaysound.it",114],["derstandard.at",115],["derstandard.de",115],["faz.net",115],["automoto.it",116],["ansa.it",116],["delladio.it",116],["huffingtonpost.it",116],["internazionale.it",116],["lastampa.it",116],["macitynet.it",116],["moto.it",116],["movieplayer.it",116],["multiplayer.it",116],["repubblica.it",116],["tomshw.it",116],["skuola.net",116],["spaziogames.it",116],["tuttoandroid.net",116],["tuttotech.net",116],["ilgazzettino.it",117],["ilmessaggero.it",117],["ilsecoloxix.it",117],["privacy.motorradonline.de",120],["consent.watson.de",120],["consent.kino.de",120],["consent.desired.de",120],["cmpv2.fn.de",120],["spp.nextpit.de",120],["dailystar.co.uk",[121,122,123,124]],["mirror.co.uk",[121,122,123,124]],["idnes.cz",125],["20minutes.fr",126],["20minutos.es",126],["24sata.hr",126],["abc.es",126],["actu.fr",126],["antena3.com",126],["antena3internacional.com",126],["atresmedia.com",126],["atresmediapublicidad.com",126],["atresmediastudios.com",126],["atresplayer.com",126],["autopista.es",126],["belfasttelegraph.co.uk",126],["bemad.es",126],["bonduelle.it",126],["bonniernews.se",126],["bt.se",126],["cadenadial.com",126],["caracol.com.co",126],["cas.sk",126],["charentelibre.fr",126],["ciclismoafondo.es",126],["cnews.fr",126],["cope.es",126],["correryfitness.com",126],["courrier-picard.fr",126],["cuatro.com",126],["decathlon.nl",126],["decathlon.pl",126],["di.se",126],["diariocordoba.com",126],["diariodenavarra.es",126],["diariosur.es",126],["diariovasco.com",126],["diepresse.com",126],["divinity.es",126],["dn.se",126],["dnevnik.hr",126],["dumpert.nl",126],["ebuyclub.com",126],["edreams.de",126],["edreams.net",126],["elcomercio.es",126],["elconfidencial.com",126],["elcorreo.com",126],["eldesmarque.com",126],["eldiario.es",126],["eldiariomontanes.es",126],["elespanol.com",126],["elle.fr",126],["elpais.com",126],["elperiodico.com",126],["elperiodicodearagon.com",126],["elplural.com",126],["energytv.es",126],["engadget.com",126],["es.ara.cat",126],["euronews.com",126],["europafm.com",126],["expressen.se",126],["factoriadeficcion.com",126],["filmstarts.de",126],["flooxernow.com",126],["folkbladet.nu",126],["footmercato.net",126],["france.tv",126],["france24.com",126],["fussballtransfers.com",126],["fyndiq.se",126],["ghacks.net",126],["gva.be",126],["hbvl.be",126],["heraldo.es",126],["hoy.es",126],["ideal.es",126],["idealista.pt",126],["krone.at",126],["kurier.at",126],["lacoste.com",126],["ladepeche.fr",126],["lalibre.be",126],["lanouvellerepublique.fr",126],["larazon.es",126],["lasexta.com",126],["lasprovincias.es",126],["latribune.fr",126],["lavanguardia.com",126],["laverdad.es",126],["lavozdegalicia.es",126],["leboncoin.fr",126],["lecturas.com",126],["ledauphine.com",126],["lejsl.com",126],["leparisien.fr",126],["lesoir.be",126],["letelegramme.fr",126],["libremercado.com",126],["localeyes.dk",126],["los40.com",126],["lotoquebec.com",126],["lunion.fr",126],["m6.fr",126],["marianne.cz",126],["marmiton.org",126],["mediaset.es",126],["melodia-fm.com",126],["metronieuws.nl",126],["moviepilot.de",126],["mtmad.es",126],["multilife.com.pl",126],["naszemiasto.pl",126],["nationalgeographic.com.es",126],["nicematin.com",126],["nieuwsblad.be",126],["notretemps.com",126],["numerama.com",126],["okdiario.com",126],["ondacero.es",126],["podiumpodcast.com",126],["portail.lotoquebec.com",126],["profil.at",126],["public.fr",126],["publico.es",126],["radiofrance.fr",126],["rankia.com",126],["rfi.fr",126],["rossmann.pl",126],["rtbf.be",[126,219]],["rtl.lu",126],["sensacine.com",126],["sfgame.net",126],["shure.com",126],["silicon.es",126],["sncf-connect.com",126],["sport.es",126],["sydsvenskan.se",126],["techcrunch.com",126],["telegraaf.nl",126],["telequebec.tv",126],["tf1.fr",126],["tradingsat.com",126],["trailrun.es",126],["video-streaming.orange.fr",126],["xpress.fr",126],["tportal.hr",127],["ivoox.com",127],["as.com",127],["slam.nl",127],["bienpublic.com",127],["funradio.fr",127],["gamepro.de",[127,188,189]],["lemon.fr",127],["lexpress.fr",127],["shadow.tech",127],["letemps.ch",127],["mein-mmo.de",127],["heureka.sk",127],["film.at",127],["dhnet.be",127],["lesechos.fr",[127,224]],["marianne.net",[127,219]],["jeanmarcmorandini.com",[127,220]],["dna.fr",127],["sudinfo.be",127],["europe1.fr",[127,220]],["rtl.be",[127,219]],["reviewingthebrew.com",127],["jaysjournal.com",127],["reignoftroy.com",127],["ryobitools.eu",[128,129]],["americanexpress.com",130],["consent.radiotimes.com",133],["sp-consent.szbz.de",134],["cmp.omni.se",135],["cmp.svd.se",135],["cmp.aftonbladet.se",135],["cmp.tv.nu",135],["consent.economist.com",137],["studentagency.cz",137],["cmpv2.foundryco.com",138],["cmpv2.infoworld.com",138],["cmpv2.arnnet.com.au",138],["sp-cdn.pcgames.de",139],["sp-cdn.pcgameshardware.de",139],["consentv2.sport1.de",139],["cmp.mz.de",139],["cmpv2.tori.fi",140],["consent.spielaffe.de",142],["bondekompaniet.no",143],["degiro.*",143],["epochtimes.de",143],["vikingline.com",143],["tfl.gov.uk",143],["drklein.de",143],["hildegardis-krankenhaus.de",143],["kleer.se",143],["lekiaviation.com",143],["lotto.pl",143],["mineralstech.com",143],["volunteer.digitalboost.org.uk",143],["starhotels.com",143],["tefl.com",143],["universumglobal.com",143],["tui.com",144],["rexel.*",145],["csob.sk",146],["greenstuffworld.com",147],["morele.net",[148,149]],["1und1.de",150],["infranken.de",151],["cmp.tvtoday.de",152],["cmp.tvspielfilm.de",152],["cmp.bunte.de",152],["cmp.chip.de",152],["cmp.focus.de",[152,502]],["estadiodeportivo.com",153],["tameteo.*",153],["tempo.pt",153],["meteored.*",153],["pogoda.com",153],["yourweather.co.uk",153],["tempo.com",153],["theweather.net",153],["tiempo.com",153],["ilmeteo.net",153],["daswetter.com",153],["kicker.de",154],["formulatv.com",155],["web.de",156],["lefigaro.fr",157],["linternaute.com",158],["consent.caminteresse.fr",159],["volksfreund.de",160],["rp-online.de",160],["dailypost.co.uk",161],["the-express.com",161],["vide-greniers.org",161],["bluray-disc.de",162],["elio-systems.com",162],["stagatha-fachklinik.de",162],["tarife.mediamarkt.de",162],["lz.de",162],["gaggenau.com",162],["saturn.de",163],["eltiempo.es",[164,165]],["otempo.pt",166],["atlasformen.*",167],["cmp-sp.goettinger-tageblatt.de",168],["cmp-sp.saechsische.de",168],["cmp-sp.ln-online.de",168],["cz.de",168],["dewezet.de",168],["dnn.de",168],["haz.de",168],["gnz.de",168],["landeszeitung.de",168],["lvz.de",168],["maz-online.de",168],["ndz.de",168],["op-marburg.de",168],["ostsee-zeitung.de",168],["paz-online.de",168],["reisereporter.de",168],["rga.de",168],["rnd.de",168],["siegener-zeitung.de",168],["sn-online.de",168],["solinger-tageblatt.de",168],["sportbuzzer.de",168],["szlz.de",168],["tah.de",168],["torgauerzeitung.de",168],["waz-online.de",168],["privacy.maennersache.de",168],["sinergy.ch",170],["agglo-valais-central.ch",170],["biomedcentral.com",171],["hsbc.*",172],["hsbcnet.com",172],["hsbcinnovationbanking.com",172],["create.hsbc",172],["gbm.hsbc.com",172],["hsbc.co.uk",173],["internationalservices.hsbc.com",173],["history.hsbc.com",173],["about.hsbc.co.uk",174],["privatebanking.hsbc.com",175],["independent.co.uk",178],["privacy.crash.net",178],["the-independent.com",179],["argos.co.uk",181],["poco.de",[182,183]],["moebelix.*",182],["moemax.*",182],["xxxlutz.*",182],["xxxlesnina.*",182],["moebel24.ch",183],["meubles.fr",183],["meubelo.nl",183],["moebel.de",183],["lipo.ch",184],["schubiger.ch",185],["aedt.de",186],["berlin-live.de",186],["bike-magazin.de",186],["connect.de",186],["gutefrage.net",186],["insideparadeplatz.ch",186],["morgenpost.de",186],["play3.de",186],["thueringen24.de",186],["pdfupload.io",187],["gamestar.de",[188,189,228]],["verksamt.se",190],["acmemarkets.com",191],["amtrak.com",191],["beko.com",191],["bepanthen.com.au",191],["berocca.com.au",191],["booking.com",191],["carrefour.fr",191],["centrum.sk",191],["claratyne.com.au",191],["credit-suisse.com",191],["ceskatelevize.cz",191],["deporvillage.*",191],["de.vanguard",191],["dhl.de",191],["digikey.*",191],["drafthouse.com",191],["dunelm.com",191],["eurosport.fr",191],["fello.se",191],["fielmann.*",191],["flashscore.fr",191],["flightradar24.com",191],["fnac.es",191],["foodandwine.com",191],["fourseasons.com",191],["khanacademy.org",191],["konami.com",191],["jll.*",191],["jobs.redbull.com",191],["hellenicbank.com",191],["gemini.pl",191],["groceries.asda.com",191],["lamborghini.com",191],["menshealth.com",191],["n26.com",191],["nintendo.com",191],["nokia.com",191],["oneweb.net",191],["omnipod.com",191],["oralb.*",191],["panasonic.com",191],["parkside-diy.com",191],["pluto.tv",191],["popularmechanics.com",191],["polskieradio.pl",191],["pringles.com",191],["questdiagnostics.com",191],["radissonhotels.com",191],["ricardo.ch",191],["rockstargames.com",191],["rte.ie",191],["salesforce.com",191],["samsonite.*",191],["spiele.heise.de",191],["spirit.com",191],["stenaline.co.uk",191],["swisscom.ch",191],["swisspass.ch",191],["technologyfromsage.com",191],["telenet.be",191],["tntsports.co.uk",191],["theepochtimes.com",191],["toujeo.com",191],["uber-platz.de",191],["vinted.com",191],["wallapop.com",191],["wickes.co.uk",191],["workingtitlefilms.com",191],["vattenfall.de",191],["winparts.fr",191],["yoigo.com",191],["zoominfo.com",191],["allegiantair.com",192],["hallmarkchannel.com",192],["incorez.com",192],["noovle.com",192],["otter.ai",192],["plarium.com",192],["telsy.com",192],["timenterprise.it",192],["tim.it",192],["tradersunion.com",192],["fnac.*",192],["yeti.com",192],["here.com",[193,683]],["vodafone.com",193],["cmp.heise.de",[195,196]],["cmp.am-online.com",195],["cmp.motorcyclenews.com",195],["consent.newsnow.co.uk",195],["cmp.todays-golfer.com",195],["koeser.com",197],["shop.schaette-pferd.de",197],["schaette.de",197],["central-bb.de",198],["fitnessfoodcorner.de",199],["kuehlungsborn.de",200],["espressocoffeeshop.com",201],["brainmarket.pl",202],["getroots.app",203],["cart-in.re",[204,608]],["prestonpublishing.pl",205],["zara.com",206],["lepermislibre.fr",206],["negociardivida.spcbrasil.org.br",207],["pons.com",208],["adidas.*",209],["privacy.topreality.sk",210],["privacy.autobazar.eu",210],["vu.lt",211],["adnkronos.com",[212,213]],["cornwalllive.com",[212,213]],["cyprus-mail.com",[212,213]],["einthusan.tv",[212,213]],["informazione.it",[212,213]],["mymovies.it",[212,213]],["tuttoeuropei.com",[212,213]],["video.lacnews24.it",[212,213]],["protothema.gr",212],["flash.gr",212],["taxscouts.com",214],["online.no",216],["telenor.no",216],["austrian.com",217],["lufthansa.com",217],["kampfkunst-herz.de",218],["glow25.de",218],["h-f.at",218],["hornetsecurity.com",218],["kayzen.io",218],["wasserkunst-hamburg.de",218],["zahnspange-oelde.de",218],["bnc.ca",219],["egora.fr",219],["engelvoelkers.com",219],["estrategiasdeinversion.com",219],["festo.com",219],["franceinfo.fr",219],["francebleu.fr",219],["francemediasmonde.com",219],["geny.com",219],["giphy.com",219],["idealista.com",219],["infolibre.es",219],["inpost.pl",219],["information.tv5monde.com",219],["ing.es",219],["knipex.de",219],["laprovence.com",219],["lemondeinformatique.fr",219],["libertaddigital.com",219],["mappy.com",219],["orf.at",219],["philibertnet.com",219],["researchgate.net",219],["standaard.be",219],["stroilioro.com",219],["taxfix.de",219],["telecinco.es",219],["vistaalegre.com",219],["zimbra.free.fr",219],["usinenouvelle.com",221],["reussir.fr",223],["bruendl.at",225],["latamairlines.com",226],["elisa.ee",227],["baseendpoint.brigitte.de",228],["baseendpoint.gala.de",228],["baseendpoint.haeuser.de",228],["baseendpoint.stern.de",228],["baseendpoint.urbia.de",228],["cmp.tag24.de",228],["cmp-sp.handelsblatt.com",228],["cmpv2.berliner-zeitung.de",228],["golem.de",228],["consent.t-online.de",228],["sp-consent.stuttgarter-nachrichten.de",229],["sp-consent.stuttgarter-zeitung.de",229],["regjeringen.no",230],["sp-manager-magazin-de.manager-magazin.de",231],["consent.11freunde.de",231],["wallester.com",236],["centrum24.pl",237],["replay.lsm.lv",238],["ltv.lsm.lv",238],["bernistaba.lsm.lv",238],["verl.de",239],["cubo-sauna.de",239],["mbl.is",239],["auto-medienportal.net",239],["mobile.de",240],["cookist.it",241],["fanpage.it",241],["geopop.it",241],["lexplain.it",241],["royalmail.com",242],["gmx.net",243],["gmx.ch",244],["mojehobby.pl",245],["super-hobby.*",245],["sp.stylevamp.de",246],["cmp.wetteronline.de",246],["audi.*",[247,248]],["easyjet.com",247],["experian.co.uk",247],["postoffice.co.uk",247],["tescobank.com",247],["internetaptieka.lv",[249,250]],["wells.pt",251],["dskdirect.bg",252],["cmpv2.dba.dk",253],["spcmp.crosswordsolver.com",254],["ecco.com",255],["georgjensen.com",255],["thomann.*",256],["landkreis-kronach.de",257],["effectiefgeven.be",258],["northcoast.com",258],["chaingpt.org",258],["bandenconcurrent.nl",259],["bandenexpert.be",259],["reserved.com",260],["metro.it",261],["makro.es",261],["metro.sk",261],["metro-cc.hr",261],["makro.nl",261],["metro.bg",261],["metro.at",261],["metro-tr.com",261],["metro.de",261],["metro.fr",261],["makro.cz",261],["metro.ro",261],["makro.pt",261],["makro.pl",261],["sklepy-odido.pl",261],["rastreator.com",261],["metro.ua",262],["metro.rs",262],["metro-kz.com",262],["metro.md",262],["metro.hu",262],["metro-cc.ru",262],["metro.pk",262],["balay.es",263],["constructa.com",263],["dafy-moto.com",264],["akku-shop.nl",265],["akkushop-austria.at",265],["akkushop-b2b.de",265],["akkushop.de",265],["akkushop.dk",265],["batterie-boutique.fr",265],["akkushop-schweiz.ch",266],["evzuttya.com.ua",267],["eobuv.cz",267],["eobuwie.com.pl",267],["ecipele.hr",267],["eavalyne.lt",267],["chaussures.fr",267],["ecipo.hu",267],["eobuv.sk",267],["epantofi.ro",267],["epapoutsia.gr",267],["escarpe.it",267],["eschuhe.de",267],["obuvki.bg",267],["zapatos.es",267],["swedbank.ee",268],["mudanzavila.es",269],["bienmanger.com",270],["gesipa.*",271],["gesipausa.com",271],["beckhoff.com",271],["zitekick.dk",272],["eltechno.dk",272],["okazik.pl",272],["batteryempire.*",273],["maxi.rs",274],["garmin.com",275],["invisalign.*",275],["one4all.ie",275],["osprey.com",275],["wideroe.no",276],["bmw.*",277],["kijk.nl",278],["nordania.dk",279],["danskebank.*",279],["danskeci.com",279],["danica.dk",279],["dehn.*",280],["gewerbegebiete.de",281],["cordia.fr",282],["vola.fr",283],["lafi.fr",284],["skyscanner.*",285],["coolblue.*",286],["chipotle.com",287],["sanareva.*",288],["atida.fr",288],["bbva.*",289],["bbvauk.com",289],["expertise.unimi.it",290],["altenberg.de",291],["vestel.es",292],["tsb.co.uk",293],["buienradar.nl",[294,295]],["linsenplatz.de",296],["budni.de",297],["erstecardclub.hr",297],["teufel.de",[298,299]],["abp.nl",300],["simplea.sk",301],["flip.bg",302],["kiertokanki.com",303],["leirovins.be",305],["vias.be",306],["edf.fr",307],["virbac.com",307],["diners.hr",307],["squarehabitat.fr",307],["arbitrobancariofinanziario.it",308],["ivass.it",308],["economiapertutti.bancaditalia.it",308],["smit-sport.de",309],["gekko-computer.de",309],["jysk.al",310],["go-e.com",311],["malerblatt-medienservice.de",312],["architekturbuch.de",312],["medienservice-holz.de",312],["leuchtstark.de",312],["casius.nl",313],["coolinarika.com",314],["giga-hamburg.de",314],["vakgaragevannunen.nl",314],["fortuluz.es",314],["finna.fi",314],["eurogrow.es",314],["topnatur.cz",314],["topnatur.eu",314],["vakgarage.nl",314],["whufc.com",314],["zomaplast.cz",314],["envafors.dk",315],["dabbolig.dk",[316,317]],["daruk-emelok.hu",318],["exakta.se",319],["larca.de",320],["roli.com",321],["okazii.ro",322],["lr-shop-direkt.de",322],["portalprzedszkolny.pl",322],["tgvinoui.sncf",323],["l-bank.de",324],["interhyp.de",325],["indigoneo.*",326],["transparency.meta.com",327],["dojusagro.lt",328],["eok.ee",328],["kripa.it",328],["nextdaycatering.co.uk",328],["safran-group.com",328],["sr-ramenendeuren.be",328],["ilovefreegle.org",328],["tribexr.com",328],["understandingsociety.ac.uk",328],["bestbuycyprus.com",329],["strato.*",330],["strato-hosting.co.uk",330],["auto.de",331],["contentkingapp.com",332],["comune.palermo.it",333],["get-in-engineering.de",334],["spp.nextpit.com",335],["spp.nextpit.es",336],["spp.nextpit.it",337],["spp.nextpit.com.br",338],["spp.nextpit.fr",339],["otterbox.com",340],["stoertebeker-brauquartier.com",341],["stoertebeker.com",341],["stoertebeker-eph.com",341],["aparts.pl",342],["sinsay.com",[343,344]],["benu.cz",345],["stockholmresilience.org",346],["ludvika.se",346],["kammarkollegiet.se",346],["cazenovecapital.com",347],["statestreet.com",348],["beopen.lv",349],["cesukoncertzale.lv",350],["dodo.fr",351],["pepper.it",352],["pepper.pl",352],["preisjaeger.at",352],["mydealz.de",352],["dealabs.com",352],["hotukdeals.com",352],["chollometro.com",352],["makelaarsland.nl",353],["bezirk-schwaben.de",354],["dorfen.de",354],["nutsinbulk.co.uk",355],["bricklink.com",356],["bestinver.es",357],["icvs2023.conf.tuwien.ac.at",358],["racshop.co.uk",[359,360]],["baabuk.com",361],["sapien.io",361],["tradedoubler.com",361],["app.lepermislibre.fr",362],["multioferta.es",363],["testwise.com",[364,365]],["tonyschocolonely.com",366],["fitplus.is",366],["fransdegrebber.nl",366],["lilliputpress.ie",366],["lexibo.com",366],["marin-milou.com",366],["dare2tri.com",366],["t3micro.*",366],["la-vie-naturelle.com",[367,368]],["inovelli.com",369],["uonetplus.vulcan.net.pl",[370,371]],["consent.helagotland.se",372],["oper.koeln",[373,374]],["deezer.com",375],["hoteldesartssaigon.com",376],["autoritedelaconcurrence.fr",377],["groupeonepoint.com",377],["geneanet.org",377],["carrieres.groupegalerieslafayette.com",377],["immo-banques.fr",377],["lingvanex.com",377],["turncamp.com",378],["ejobs.ro",[379,380]],["kupbilecik.*",[381,382]],["coolbe.com",383],["serienjunkies.de",384],["computerhoy.20minutos.es",385],["clickskeks.at",386],["clickskeks.de",386],["abt-sportsline.de",386],["exemplary.ai",387],["forbo.com",387],["stores.sk",387],["nerdstar.de",387],["prace.cz",387],["profesia.sk",387],["profesia.cz",387],["pracezarohem.cz",387],["atmoskop.cz",387],["seduo.sk",387],["seduo.cz",387],["teamio.com",387],["arnold-robot.com",387],["cvonline.lt",387],["cv.lv",387],["cv.ee",387],["dirbam.lt",387],["visidarbi.lv",387],["otsintood.ee",387],["webtic.it",387],["gerth.de",388],["pamiatki.pl",389],["initse.com",390],["salvagny.org",391],["augsburger-allgemeine.de",392],["stabila.com",393],["stwater.co.uk",394],["suncalc.org",[395,396]],["swisstph.ch",397],["taxinstitute.ie",398],["get-in-it.de",399],["tempcover.com",[400,401]],["guildford.gov.uk",402],["easyparts.*",[403,404]],["easyparts-recambios.es",[403,404]],["easyparts-rollerteile.de",[403,404]],["drimsim.com",405],["canyon.com",[406,407]],["vevovo.be",[408,409]],["vendezvotrevoiture.be",[408,409]],["wirkaufendeinauto.at",[408,409]],["vikoberallebiler.dk",[408,409]],["wijkopenautos.nl",[408,409]],["vikoperdinbil.se",[408,409]],["noicompriamoauto.it",[408,409]],["vendezvotrevoiture.fr",[408,409]],["compramostucoche.es",[408,409]],["wijkopenautos.be",[408,409]],["auto-doc.*",410],["autodoc.*",410],["autodoc24.*",410],["topautoosat.fi",410],["autoteiledirekt.de",410],["autoczescionline24.pl",410],["tuttoautoricambi.it",410],["onlinecarparts.co.uk",410],["autoalkatreszek24.hu",410],["autodielyonline24.sk",410],["reservdelar24.se",410],["pecasauto24.pt",410],["reservedeler24.co.no",410],["piecesauto24.lu",410],["rezervesdalas24.lv",410],["besteonderdelen.nl",410],["recambioscoche.es",410],["antallaktikaexartimata.gr",410],["piecesauto.fr",410],["teile-direkt.ch",410],["lpi.org",411],["divadelniflora.cz",412],["mahle-aftermarket.com",413],["refurbed.*",414],["eingutertag.org",415],["flyingtiger.com",[415,559]],["borgomontecedrone.it",415],["maharishistore.com",415],["recaro-shop.com",415],["gartenhotel-crystal.at",415],["fayn.com",416],["serica-watches.com",416],["sklavenitis.gr",417],["eam-netz.de",418],["umicore.*",419],["veiligverkeer.be",419],["vsv.be",419],["dehogerielen.be",419],["gera.de",420],["mfr-chessy.fr",421],["mfr-lamure.fr",421],["mfr-saint-romain.fr",421],["mfr-lapalma.fr",421],["mfrvilliemorgon.asso.fr",421],["mfr-charentay.fr",421],["mfr.fr",421],["nationaltrust.org.uk",422],["hej-natural.*",423],["ib-hansmeier.de",424],["rsag.de",425],["esaa-eu.org",425],["aknw.de",425],["answear.*",426],["theprotocol.it",[427,428]],["lightandland.co.uk",429],["etransport.pl",430],["wohnen-im-alter.de",431],["johnmuirhealth.com",[432,433]],["markushaenni.com",434],["airbaltic.com",435],["gamersgate.com",435],["zorgzaam010.nl",436],["etos.nl",437],["paruvendu.fr",438],["privacy.bazar.sk",439],["hennamorena.com",440],["newsello.pl",441],["porp.pl",442],["golfbreaks.com",443],["lieferando.de",444],["just-eat.*",444],["justeat.*",444],["pyszne.pl",444],["lieferando.at",444],["takeaway.com",444],["thuisbezorgd.nl",444],["holidayhypermarket.co.uk",445],["unisg.ch",446],["wassererleben.ch",446],["psgaz.pl",447],["play-asia.com",448],["centralthe1card.com",449],["atu.de",450],["atu-flottenloesungen.de",450],["but.fr",450],["edeka.de",450],["fortuneo.fr",450],["maif.fr",450],["meteo.tf1.fr",450],["particuliers.sg.fr",450],["sparkasse.at",450],["group.vig",450],["tf1info.fr",450],["dpdgroup.com",451],["dpd.com",451],["cosmosdirekt.de",451],["bstrongoutlet.pt",452],["isarradweg.de",[453,454]],["flaxmanestates.com",454],["inland-casas.com",454],["finlayson.fi",[455,456]],["cowaymega.ca",[455,456]],["arktis.de",457],["desktronic.de",457],["belleek.com",457],["brauzz.com",457],["cowaymega.com",457],["dockin.de",457],["dryrobe.com",[457,458]],["formswim.com",457],["hairtalk.se",457],["hallmark.co.uk",[457,458]],["loopearplugs.com",[457,458]],["oleus.com",457],["peopleofshibuya.com",457],["pullup-dip.com",457],["sanctum.shop",457],["tbco.com",457],["desktronic.*",458],["hq-germany.com",458],["tepedirect.com",458],["maxi-pet.ro",458],["paper-republic.com",458],["pullup-dip.*",458],["vitabiotics.com",458],["smythstoys.com",459],["beam.co.uk",[460,461]],["autobahn.de",462],["krakow.pl",463],["shop.app",464],["shopify.com",464],["wufoo.com",465],["consent.dailymotion.com",466],["laposte.fr",466],["help.instagram.com",467],["consent-manager.thenextweb.com",469],["consent-cdn.zeit.de",470],["coway-usa.com",471],["steiners.shop",472],["ecmrecords.com",473],["malaikaraiss.com",473],["koch-mit.de",473],["zeitreisen.zeit.de",473],["wefashion.com",474],["merkur.dk",475],["ionos.*",477],["omegawatches.com",478],["carefully.be",479],["aerotime.aero",479],["rocket-league.com",480],["dws.com",481],["bosch-homecomfort.com",482],["elmleblanc-optibox.fr",482],["monservicechauffage.fr",482],["boschrexroth.com",482],["home-connect.com",483],["lowrider.at",[484,485]],["mesto.de",486],["intersport.gr",487],["intersport.bg",487],["intersport.com.cy",487],["intersport.ro",487],["ticsante.com",488],["techopital.com",488],["millenniumprize.org",489],["hepster.com",490],["peterstaler.de",491],["blackforest-still.de",491],["tiendaplayaundi.com",492],["ajtix.co.uk",493],["raja.fr",494],["rajarani.de",494],["rajapack.*",[494,495]],["avery-zweckform.com",496],["1xinternet.com",496],["futterhaus.de",496],["dasfutterhaus.at",496],["frischeparadies.de",496],["fmk-steuer.de",496],["selgros.de",496],["transgourmet.de",496],["mediapart.fr",497],["athlon.com",498],["alumniportal-deutschland.org",499],["snoopmedia.com",499],["myguide.de",499],["daad.de",499],["cornelsen.de",[500,501]],["vinmonopolet.no",503],["tvp.info",504],["tvp.pl",504],["tvpworld.com",504],["brtvp.pl",504],["tvpparlament.pl",504],["belsat.eu",504],["warnung.bund.de",505],["mediathek.lfv-bayern.de",506],["allegro.*",507],["allegrolokalnie.pl",507],["ceneo.pl",507],["czc.cz",507],["eon.pl",[508,509]],["ylasatakunta.fi",[510,511]],["mega-image.ro",512],["louisvuitton.com",513],["bodensee-airport.eu",514],["department56.com",515],["allendesignsstudio.com",515],["designsbylolita.co",515],["shop.enesco.com",515],["savoriurbane.com",516],["miumiu.com",517],["church-footwear.com",517],["clickdoc.fr",518],["car-interface.com",519],["monolithdesign.it",519],["thematchahouse.com",519],["smileypack.de",[520,521]],["finom.co",522],["orange.es",[523,524]],["fdm-travel.dk",525],["hummel.dk",525],["jysk.nl",525],["power.no",525],["skousen.dk",525],["velliv.dk",525],["whiteaway.com",525],["whiteaway.no",525],["whiteaway.se",525],["skousen.no",525],["energinet.dk",525],["elkjop.no",525],["medimax.de",526],["costautoricambi.com",527],["lotto.it",527],["readspeaker.com",527],["team.blue",527],["ibistallinncenter.ee",528],["aaron.ai",529],["futureverse.com",530],["tandem.co.uk",530],["insights.com",531],["thebathcollection.com",532],["coastfashion.com",[533,534]],["oasisfashion.com",[533,534]],["warehousefashion.com",[533,534]],["misspap.com",[533,534]],["karenmillen.com",[533,534]],["boohooman.com",[533,534]],["hdt.de",535],["wolt.com",536],["myprivacy.dpgmedia.nl",537],["myprivacy.dpgmedia.be",537],["www.dpgmediagroup.com",537],["xohotels.com",538],["sim24.de",539],["tnt.com",540],["uza.be",541],["uzafoundation.be",541],["uzajobs.be",541],["bergzeit.*",[542,543]],["cinemas-lumiere.com",544],["cdiscount.com",545],["brabus.com",546],["roborock.com",547],["strumentimusicali.net",548],["maisonmargiela.com",549],["webfleet.com",550],["dragonflyshipping.ca",551],["broekhuis.nl",552],["groningenairport.nl",552],["nemck.cz",553],["zdfheute.de",554],["sap-press.com",555],["roughguides.com",[556,557]],["korvonal.com",558],["rexbo.*",560],["itau.com.br",561],["bbg.gv.at",562],["portal.taxi.eu",563],["topannonces.fr",564],["homap.fr",565],["artifica.fr",566],["plan-interactif.com",566],["ville-cesson.fr",566],["moismoliere.com",567],["unihomes.co.uk",568],["bkk.hu",569],["coiffhair.com",570],["ptc.eu",571],["ziegert-group.com",[572,680]],["lassuranceretraite.fr",573],["interieur.gouv.fr",573],["toureiffel.paris",573],["economie.gouv.fr",573],["education.gouv.fr",573],["livoo.fr",573],["su.se",573],["zappo.fr",573],["smdv.de",574],["digitalo.de",574],["petiteamelie.*",575],["mojanorwegia.pl",576],["koempf24.ch",[577,578]],["teichitekten24.de",[577,578]],["koempf24.de",[577,578]],["wolff-finnhaus-shop.de",[577,578]],["asnbank.nl",579],["blgwonen.nl",579],["regiobank.nl",579],["snsbank.nl",579],["vulcan.net.pl",[580,581]],["ogresnovads.lv",582],["partenamut.be",583],["pirelli.com",584],["unicredit.it",585],["effector.pl",586],["zikodermo.pl",[587,588]],["devolksbank.nl",589],["caixabank.es",590],["cyberport.de",592],["cyberport.at",592],["slevomat.cz",593],["kfzparts24.de",594],["runnersneed.com",595],["aachener-zeitung.de",596],["sportpursuit.com",597],["druni.es",[598,609]],["druni.pt",[598,609]],["delta.com",599],["onliner.by",[600,601]],["vejdirektoratet.dk",602],["usaa.com",603],["consorsbank.de",604],["metroag.de",605],["kupbilecik.pl",606],["oxfordeconomics.com",607],["routershop.nl",608],["woo.pt",608],["e-jumbo.gr",610],["alza.*",611],["rmf.fm",613],["rmf24.pl",613],["tracfone.com",614],["lequipe.fr",615],["global.abb",616],["gala.fr",617],["purepeople.com",618],["3sat.de",619],["zdf.de",619],["filmfund.lu",620],["welcometothejungle.com",620],["triblive.com",621],["rai.it",622],["fbto.nl",623],["europa.eu",624],["caisse-epargne.fr",625],["banquepopulaire.fr",625],["bigmammagroup.com",626],["studentagency.sk",626],["studentagency.eu",626],["winparts.be",627],["winparts.nl",627],["winparts.eu",628],["winparts.ie",628],["winparts.se",628],["sportano.*",[629,630]],["crocs.*",631],["chronext.ch",632],["chronext.de",632],["chronext.at",632],["chronext.com",633],["chronext.co.uk",633],["chronext.fr",634],["chronext.nl",635],["chronext.it",636],["galerieslafayette.com",637],["bazarchic.com",638],["stilord.*",639],["tiko.pt",640],["nsinternational.com",641],["meinbildkalender.de",642],["gls-group.com",643],["gls-group.eu",643],["chilis.com",644],["account.bhvr.com",646],["everand.com",646],["lucidchart.com",646],["intercars.ro",[646,647]],["scribd.com",646],["guidepoint.com",646],["erlebnissennerei-zillertal.at",648],["hintertuxergletscher.at",648],["tiwag.at",648],["playseatstore.com",649],["swiss-sport.tv",651],["targobank-magazin.de",652],["zeit-verlagsgruppe.de",652],["online-physiotherapie.de",652],["kieferorthopaede-freisingsmile.de",653],["nltraining.nl",654],["kmudigital.at",655],["mintysquare.com",656],["consent.thetimes.com",657],["cadenaser.com",658],["berlinale.de",659],["lebonlogiciel.com",660],["iberiaexpress.com",661],["easycosmetic.ch",662],["pharmastar.it",663],["washingtonpost.com",664],["brillenplatz.de",665],["angelplatz.de",665],["dt.mef.gov.it",666],["raffeldeals.com",667],["stepstone.de",668],["kobo.com",669],["zoxs.de",671],["offistore.fi",672],["collinsaerospace.com",673],["radioapp.lv",676],["hagengrote.de",677],["hemden-meister.de",677],["vorteilshop.com",678],["capristores.gr",679],["getaround.com",681],["technomarket.bg",682],["epiphone.com",684],["gibson.com",684],["maestroelectronics.com",684],["cropp.com",[685,686]],["housebrand.com",[685,686]],["mohito.com",[685,686]],["autoczescizielonki.pl",687],["b-s.de",688],["novakid.pl",689],["piecesauto24.com",690],["earpros.com",691],["portalridice.cz",692],["kitsapcu.org",693],["nutsinbulk.*",694],["berlin-buehnen.de",695],["metropoliten.rs",696],["educa2.madrid.org",697],["immohal.de",698],["sourcepoint.theguardian.com",699],["rtlplay.be",700],["natgeotv.com",700],["llama.com",701],["meta.com",701],["setasdesevilla.com",702],["cruyff-foundation.org",703],["allianz.*",704],["energiedirect-bayern.de",705],["postnl.be",706],["postnl.nl",706],["sacyr.com",707],["volkswagen-newsroom.com",708],["openbank.*",709],["tagus-eoficina.grupogimeno.com",710],["tidal.com",711],["knax.de",712],["ordblindenetvaerket.dk",713],["boligbeton.dk",713],["dukh.dk",713],["pevgrow.com",714],["ya.ru",715],["ipolska24.pl",716],["17bankow.com",716],["kazimierzdolny.pl",716],["vpolshchi.pl",716],["dobreprogramy.pl",[716,717]],["essanews.com",716],["money.pl",716],["autokult.pl",716],["komorkomania.pl",716],["polygamia.pl",716],["autocentrum.pl",716],["homebook.pl",716],["domodi.pl",716],["jastrzabpost.pl",716],["open.fm",716],["gadzetomania.pl",716],["fotoblogia.pl",716],["abczdrowie.pl",716],["parenting.pl",716],["kafeteria.pl",716],["vibez.pl",716],["wakacje.pl",716],["extradom.pl",716],["totalmoney.pl",716],["superauto.pl",716],["nerwica.com",716],["forum.echirurgia.pl",716],["dailywrap.net",716],["pysznosci.pl",716],["genialne.pl",716],["finansowysupermarket.pl",716],["deliciousmagazine.pl",716],["audioteka.com",716],["easygo.pl",716],["so-magazyn.pl",716],["o2.pl",716],["pudelek.pl",716],["benchmark.pl",716],["wp.pl",716],["altibox.dk",718],["altibox.no",718],["talksport.com",719],["zuiderzeemuseum.nl",720],["gota.io",721],["nwzonline.de",722],["wero-wallet.eu",723],["scaleway.com",724],["bistro.sk",725],["spk-schaumburg.de",726],["computerbase.de",727],["wowbiz.ro",728],["observatornews.ro",728],["comdirect.de",729],["metro.co.uk",730]]);
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
