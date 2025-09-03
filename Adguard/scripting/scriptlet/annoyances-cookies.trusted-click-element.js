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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#CybotCookiebotDialogBodyButtonDecline"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"consent\"]:not([class*=\"reject\"])"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","2000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["#qc-cmp2-container button#accept-btn"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1500"],["button[title=\"Zustimmen\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-e2e=\"pure-accept-ads\"]","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.js-alert-cookie-reject","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["button#ensSave","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],[".modal-actions-accept-btn","","2000"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button[id=\"ketch-banner-button-secondary\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Agree\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#btnAcceptPDPA","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button#gdpr-banner-accept","","1000"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],["button#acceptCookiesTerms","","1000"],["a.footer-cookies-button-save-all","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["body > div[class] > div[class] > div[class]:has(a[href*=\"holding.wp.pl\"]) > div[class] > div[class]:only-child > button:first-child"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"],["#cookie-consent-button","","1500"],["com-consent-layer >>> #cmpDenyAll","","2500"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"level1PrimaryButton-\"]:not([class*=\"reject\"])"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["heise.de",7],["theguardian.com",7],["bloomberg.com",[8,9]],["forbes.com",[8,75]],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,182]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,178]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["cdn.privacy-mgmt.com",[24,25,43,47,48,49,50,95,97,105,112,119,120,121,132,133,134,137,139,140,142,153,171,196,217,230,231,234,235,236,237,257,307,471,594,615,654,674]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,179]],["ubereats.com",[39,179]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["ilgiornale.it",44],["dimensione.com",45],["wero-wallet.eu",45],["dailymail.co.uk",46],["telekom.com",51],["telekom.de",51],["abola.pt",52],["flytap.com",52],["ansons.de",52],["blick.ch",52],["buienradar.be",52],["crunchyroll.com",52],["digi24.ro",52],["digisport.ro",52],["digitalfoundry.net",52],["egx.net",52],["emirates.com",52],["eurogamer.it",52],["foto-erhardt.de",52],["gmx.*",52],["kizi.com",52],["mail.com",52],["mcmcomiccon.com",52],["nachrichten.at",52],["nintendolife.com",52],["oe24.at",52],["observatornews.ro",52],["paxsite.com",52],["peacocktv.com",52],["player.pl",52],["plus500.*",52],["pricerunner.com",52],["pricerunner.se",52],["pricerunner.dk",52],["proximus.be",[52,649]],["proximus.com",52],["purexbox.com",52],["pushsquare.com",52],["rugbypass.com",52],["southparkstudios.com",52],["southwest.com",52],["starwarscelebration.com",52],["sweatybetty.com",52],["theaa.ie",52],["thehaul.com",52],["timeextension.com",52],["travelandleisure.com",52],["tunein.com",52],["tvn24.pl",52],["uefa.com",52],["videoland.com",52],["wizzair.com",52],["wetter.at",52],["wowbiz.ro",52],["dicebreaker.com",[53,54]],["eurogamer.es",[53,54]],["eurogamer.net",[53,54]],["eurogamer.nl",[53,54]],["eurogamer.pl",[53,54]],["eurogamer.pt",[53,54]],["gamesindustry.biz",[53,54]],["reedpop.com",[53,54]],["rockpapershotgun.com",[53,54]],["thepopverse.com",[53,54]],["vg247.com",[53,54]],["videogameschronicle.com",[53,54]],["eurogamer.de",55],["roadtovr.com",56],["jotex.*",56],["mundodeportivo.com",[57,127]],["m.youtube.com",58],["www.youtube.com",58],["ohra.nl",59],["corriere.it",60],["gazzetta.it",60],["oggi.it",60],["cmp.sky.it",61],["tennisassa.fi",62],["formula1.com",63],["f1racing.pl",64],["music.amazon.*",[65,66]],["consent-pref.trustarc.com",67],["highlights.legaseriea.it",68],["calciomercato.com",68],["sosfanta.com",69],["chrono24.*",[70,71]],["wetter.com",72],["youmath.it",73],["pip.gov.pl",74],["dailybuzz.nl",76],["bnn.de",76],["dosenbach.ch",76],["dw.com",76],["kinepolis.*",76],["mediaite.com",76],["nzz.ch",76],["winfuture.de",76],["lippu.fi",76],["racingnews365.com",76],["reifendirekt.ch",76],["vaillant.*",76],["bauhaus.no",77],["bauhaus.se",77],["beko-group.de",77],["billiger.de",77],["burda.com",77],["vanharen.nl",77],["deichmann.com",[77,100,479]],["meraluna.de",77],["slashdot.org",77],["hermann-saunierduval.it",77],["protherm.cz",77],["saunierduval.es",77],["protherm.sk",77],["protherm.ua",77],["saunierduval.hu",77],["saunierduval.ro",77],["saunierduval.at",77],["awb.nl",77],["spar.hu",78],["group.vattenfall.com",78],["mediaset.it",79],["fortune.com",80],["ilrestodelcarlino.it",81],["quotidiano.net",81],["lanazione.it",81],["ilgiorno.it",81],["iltelegrafolivorno.it",81],["auto.it",82],["beauxarts.com",82],["beinsports.com",82],["bfmtv.com",[82,128]],["boursobank.com",82],["boursorama.com",[82,128]],["boursier.com",[82,224]],["brut.media",82],["canalplus.com",82],["decathlon.fr",[82,221]],["diverto.tv",82],["eden-park.com",82],["foodvisor.io",82],["frandroid.com",82],["jobijoba.*",82],["hotelsbarriere.com",82],["intersport.*",[82,193]],["idealista.it",82],["o2.fr",82],["lejdd.fr",[82,127]],["lechorepublicain.fr",82],["la-croix.com",82],["linfo.re",82],["lamontagne.fr",82],["laredoute.fr",82],["largus.fr",82],["leprogres.fr",82],["lesnumeriques.com",82],["libramemoria.com",82],["lopinion.fr",82],["marieclaire.fr",82],["maville.com",82],["michelin.*",82],["midilibre.fr",[82,678]],["meteofrance.com",82],["mondialtissus.fr",82],["orange.fr",82],["orpi.com",82],["oscaro.com",82],["ouest-france.fr",[82,96,128,679]],["parismatch.com",82],["pagesjaunes.fr",82],["programme-television.org",[82,128]],["publicsenat.fr",[82,128]],["rmcbfmplay.com",[82,128]],["science-et-vie.com",[82,127]],["seloger.com",82],["societe.com",82],["suzuki.fr",82],["sudouest.fr",82],["web-agri.fr",82],["nutri-plus.de",83],["americanairlines.*",84],["consent.capital.fr",85],["consent.programme.tv",85],["consent.voici.fr",85],["programme-tv.net",85],["cmpv2.finn.no",86],["cmp.tek.no",[87,88]],["cmp.e24.no",[87,88]],["minmote.no",[87,88]],["cmp.vg.no",[87,88]],["cloud.google.com",89],["developer.android.com",89],["registry.google",89],["safety.google",89],["huffingtonpost.fr",90],["rainews.it",91],["remarkable.com",92],["netzwelt.de",93],["money.it",94],["allocine.fr",96],["jeuxvideo.com",96],["ozap.com",96],["le10sport.com",96],["xataka.com",96],["cmp.fitbook.de",97],["cmp.autobild.de",97],["sourcepoint.sport.de",97],["cmp-sp.tagesspiegel.de",97],["cmp.bz-berlin.de",97],["cmp.cicero.de",97],["cmp.techbook.de",97],["cmp.stylebook.de",97],["cmp2.bild.de",97],["cmp2.freiepresse.de",97],["sourcepoint.wetter.de",97],["consent.finanzen.at",97],["consent.finanzen.net",97],["consent.up.welt.de",97],["sourcepoint.n-tv.de",97],["sourcepoint.kochbar.de",97],["sourcepoint.rtl.de",97],["cmp.computerbild.de",97],["cmp.petbook.de",97],["cmp-sp.siegener-zeitung.de",97],["cmp-sp.sportbuzzer.de",97],["klarmobil.de",97],["technikum-wien.at",98],["eneco.nl",99],["salomon.com",101],["blackpoolgazette.co.uk",102],["lep.co.uk",102],["northamptonchron.co.uk",102],["scotsman.com",102],["shieldsgazette.com",102],["thestar.co.uk",102],["portsmouth.co.uk",102],["sunderlandecho.com",102],["northernirelandworld.com",102],["3addedminutes.com",102],["anguscountyworld.co.uk",102],["banburyguardian.co.uk",102],["bedfordtoday.co.uk",102],["biggleswadetoday.co.uk",102],["bucksherald.co.uk",102],["burnleyexpress.net",102],["buxtonadvertiser.co.uk",102],["chad.co.uk",102],["daventryexpress.co.uk",102],["derbyshiretimes.co.uk",102],["derbyworld.co.uk",102],["derryjournal.com",102],["dewsburyreporter.co.uk",102],["doncasterfreepress.co.uk",102],["falkirkherald.co.uk",102],["fifetoday.co.uk",102],["glasgowworld.com",102],["halifaxcourier.co.uk",102],["harboroughmail.co.uk",102],["harrogateadvertiser.co.uk",102],["hartlepoolmail.co.uk",102],["hemeltoday.co.uk",102],["hucknalldispatch.co.uk",102],["lancasterguardian.co.uk",102],["leightonbuzzardonline.co.uk",102],["lincolnshireworld.com",102],["liverpoolworld.uk",102],["londonworld.com",102],["lutontoday.co.uk",102],["manchesterworld.uk",102],["meltontimes.co.uk",102],["miltonkeynes.co.uk",102],["newcastleworld.com",102],["newryreporter.com",102],["newsletter.co.uk",102],["northantstelegraph.co.uk",102],["northumberlandgazette.co.uk",102],["nottinghamworld.com",102],["peterboroughtoday.co.uk",102],["rotherhamadvertiser.co.uk",102],["stornowaygazette.co.uk",102],["surreyworld.co.uk",102],["thescarboroughnews.co.uk",102],["thesouthernreporter.co.uk",102],["totallysnookered.com",102],["wakefieldexpress.co.uk",102],["walesworld.com",102],["warwickshireworld.com",102],["wigantoday.net",102],["worksopguardian.co.uk",102],["yorkshireeveningpost.co.uk",102],["yorkshirepost.co.uk",102],["eurocard.com",103],["saseurobonusmastercard.se",104],["tver.jp",106],["linkedin.com",107],["elmundo.es",[108,128]],["expansion.com",108],["s-pankki.fi",109],["srf.ch",109],["alternate.de",109],["bayer04.de",109],["douglas.de",109],["dr-beckmann.com",109],["falke.com",109],["fitnessfirst.de",109],["flaschenpost.de",109],["gloeckle.de",109],["hornbach.nl",109],["hypofriend.de",109],["lactostop.de",109],["neumann.com",109],["post.ch",109],["postbank.de",109],["rts.ch",109],["zalando.*",109],["immowelt.de",110],["joyn.*",110],["morenutrition.de",110],["mapillary.com",111],["cmp.seznam.cz",113],["marca.com",114],["raiplay.it",115],["raiplaysound.it",115],["derstandard.at",116],["derstandard.de",116],["faz.net",116],["automoto.it",117],["ansa.it",117],["delladio.it",117],["huffingtonpost.it",117],["internazionale.it",117],["lastampa.it",117],["macitynet.it",117],["moto.it",117],["movieplayer.it",117],["multiplayer.it",117],["repubblica.it",117],["tomshw.it",117],["skuola.net",117],["spaziogames.it",117],["today.it",117],["tuttoandroid.net",117],["tuttotech.net",117],["ilgazzettino.it",118],["ilmessaggero.it",118],["ilsecoloxix.it",118],["privacy.motorradonline.de",121],["consent.watson.de",121],["consent.kino.de",121],["consent.desired.de",121],["cmpv2.fn.de",121],["spp.nextpit.de",121],["dailystar.co.uk",[122,123,124,125]],["mirror.co.uk",[122,123,124,125]],["idnes.cz",126],["20minutes.fr",127],["20minutos.es",127],["24sata.hr",127],["abc.es",127],["actu.fr",127],["antena3.com",127],["antena3internacional.com",127],["atresmedia.com",127],["atresmediapublicidad.com",127],["atresmediastudios.com",127],["atresplayer.com",127],["autopista.es",127],["belfasttelegraph.co.uk",127],["bemad.es",127],["bonduelle.it",127],["bonniernews.se",127],["bt.se",127],["cadenadial.com",127],["caracol.com.co",127],["cas.sk",127],["charentelibre.fr",127],["ciclismoafondo.es",127],["cnews.fr",127],["cope.es",127],["correryfitness.com",127],["courrier-picard.fr",127],["cuatro.com",127],["decathlon.nl",127],["decathlon.pl",127],["di.se",127],["diariocordoba.com",127],["diariodenavarra.es",127],["diariosur.es",127],["diariovasco.com",127],["diepresse.com",127],["divinity.es",127],["dn.se",127],["dnevnik.hr",127],["dumpert.nl",127],["ebuyclub.com",127],["edreams.de",127],["edreams.net",127],["elcomercio.es",127],["elconfidencial.com",127],["elcorreo.com",127],["eldesmarque.com",127],["eldiario.es",127],["eldiariomontanes.es",127],["elespanol.com",127],["elle.fr",127],["elpais.com",127],["elperiodico.com",127],["elperiodicodearagon.com",127],["elplural.com",127],["energytv.es",127],["engadget.com",127],["es.ara.cat",127],["euronews.com",127],["europafm.com",127],["expressen.se",127],["factoriadeficcion.com",127],["filmstarts.de",127],["flooxernow.com",127],["folkbladet.nu",127],["footmercato.net",127],["france.tv",127],["france24.com",127],["fussballtransfers.com",127],["fyndiq.se",127],["ghacks.net",127],["gva.be",127],["hbvl.be",127],["heraldo.es",127],["hoy.es",127],["ideal.es",127],["idealista.pt",127],["krone.at",127],["kurier.at",127],["lacoste.com",127],["ladepeche.fr",127],["lalibre.be",127],["lanouvellerepublique.fr",127],["larazon.es",127],["lasexta.com",127],["lasprovincias.es",127],["latribune.fr",127],["lavanguardia.com",127],["laverdad.es",127],["lavozdegalicia.es",127],["leboncoin.fr",127],["lecturas.com",127],["ledauphine.com",127],["lejsl.com",127],["leparisien.fr",127],["lesoir.be",127],["letelegramme.fr",127],["libremercado.com",127],["localeyes.dk",127],["los40.com",127],["lotoquebec.com",127],["lunion.fr",127],["m6.fr",127],["marianne.cz",127],["marmiton.org",127],["mediaset.es",127],["melodia-fm.com",127],["metronieuws.nl",127],["moviepilot.de",127],["mtmad.es",127],["multilife.com.pl",127],["naszemiasto.pl",127],["nationalgeographic.com.es",127],["nicematin.com",127],["nieuwsblad.be",127],["notretemps.com",127],["numerama.com",127],["okdiario.com",127],["ondacero.es",127],["podiumpodcast.com",127],["portail.lotoquebec.com",127],["profil.at",127],["public.fr",127],["publico.es",127],["radiofrance.fr",127],["rankia.com",127],["rfi.fr",127],["rossmann.pl",127],["rtbf.be",[127,221]],["rtl.lu",127],["sensacine.com",127],["sfgame.net",127],["shure.com",127],["silicon.es",127],["sncf-connect.com",127],["sport.es",127],["sydsvenskan.se",127],["techcrunch.com",127],["telegraaf.nl",127],["telequebec.tv",127],["tf1.fr",127],["tradingsat.com",127],["trailrun.es",127],["video-streaming.orange.fr",127],["xpress.fr",127],["laprovincia.es",128],["informacion.es",128],["tportal.hr",128],["ivoox.com",128],["as.com",128],["slam.nl",128],["bienpublic.com",128],["funradio.fr",128],["gamepro.de",[128,190,191]],["lemon.fr",128],["lexpress.fr",128],["shadow.tech",128],["letemps.ch",128],["mein-mmo.de",128],["heureka.sk",128],["film.at",128],["dhnet.be",128],["lesechos.fr",[128,226]],["marianne.net",[128,221]],["jeanmarcmorandini.com",[128,222]],["dna.fr",128],["sudinfo.be",128],["europe1.fr",[128,222]],["rtl.be",[128,221]],["reviewingthebrew.com",128],["jaysjournal.com",128],["reignoftroy.com",128],["ryobitools.eu",[129,130]],["americanexpress.com",131],["consent.radiotimes.com",134],["sp-consent.szbz.de",135],["cmp.omni.se",136],["cmp.svd.se",136],["cmp.aftonbladet.se",136],["cmp.tv.nu",136],["consent.economist.com",138],["studentagency.cz",138],["cmpv2.foundryco.com",139],["cmpv2.infoworld.com",139],["cmpv2.arnnet.com.au",139],["sp-cdn.pcgames.de",140],["sp-cdn.pcgameshardware.de",140],["consentv2.sport1.de",140],["cmp.mz.de",140],["cmpv2.tori.fi",141],["consent.spielaffe.de",143],["bondekompaniet.no",144],["degiro.*",144],["epochtimes.de",144],["vikingline.com",144],["tfl.gov.uk",144],["drklein.de",144],["hildegardis-krankenhaus.de",144],["kleer.se",144],["lekiaviation.com",144],["lotto.pl",144],["mineralstech.com",144],["volunteer.digitalboost.org.uk",144],["starhotels.com",144],["tefl.com",144],["universumglobal.com",144],["tui.com",145],["rexel.*",146],["csob.sk",147],["greenstuffworld.com",148],["morele.net",[149,150]],["1und1.de",151],["infranken.de",152],["cmp.tvtoday.de",153],["cmp.tvspielfilm.de",153],["cmp.bunte.de",153],["cmp.chip.de",153],["cmp.focus.de",[153,505]],["estadiodeportivo.com",154],["tameteo.*",154],["tempo.pt",154],["meteored.*",154],["pogoda.com",154],["yourweather.co.uk",154],["tempo.com",154],["theweather.net",154],["tiempo.com",154],["ilmeteo.net",154],["daswetter.com",154],["kicker.de",155],["formulatv.com",156],["web.de",157],["lefigaro.fr",158],["linternaute.com",159],["consent.caminteresse.fr",160],["volksfreund.de",161],["rp-online.de",161],["dailypost.co.uk",162],["the-express.com",162],["vide-greniers.org",162],["dailyrecord.co.uk",163],["bluray-disc.de",164],["elio-systems.com",164],["stagatha-fachklinik.de",164],["tarife.mediamarkt.de",164],["lz.de",164],["gaggenau.com",164],["saturn.de",165],["eltiempo.es",[166,167]],["otempo.pt",168],["atlasformen.*",169],["cmp-sp.goettinger-tageblatt.de",170],["cmp-sp.saechsische.de",170],["cmp-sp.ln-online.de",170],["cz.de",170],["dewezet.de",170],["dnn.de",170],["haz.de",170],["gnz.de",170],["landeszeitung.de",170],["lvz.de",170],["maz-online.de",170],["ndz.de",170],["op-marburg.de",170],["ostsee-zeitung.de",170],["paz-online.de",170],["reisereporter.de",170],["rga.de",170],["rnd.de",170],["siegener-zeitung.de",170],["sn-online.de",170],["solinger-tageblatt.de",170],["sportbuzzer.de",170],["szlz.de",170],["tah.de",170],["torgauerzeitung.de",170],["waz-online.de",170],["privacy.maennersache.de",170],["sinergy.ch",172],["agglo-valais-central.ch",172],["biomedcentral.com",173],["hsbc.*",174],["hsbcnet.com",174],["hsbcinnovationbanking.com",174],["create.hsbc",174],["gbm.hsbc.com",174],["hsbc.co.uk",175],["internationalservices.hsbc.com",175],["history.hsbc.com",175],["about.hsbc.co.uk",176],["privatebanking.hsbc.com",177],["independent.co.uk",180],["privacy.crash.net",180],["the-independent.com",181],["argos.co.uk",183],["poco.de",[184,185]],["moebelix.*",184],["moemax.*",184],["xxxlutz.*",184],["xxxlesnina.*",184],["moebel24.ch",185],["meubles.fr",185],["meubelo.nl",185],["moebel.de",185],["lipo.ch",186],["schubiger.ch",187],["aedt.de",188],["berlin-live.de",188],["bike-magazin.de",188],["connect.de",188],["gutefrage.net",188],["insideparadeplatz.ch",188],["morgenpost.de",188],["thueringen24.de",188],["pdfupload.io",189],["gamestar.de",[190,191,230]],["verksamt.se",192],["acmemarkets.com",193],["amtrak.com",193],["beko.com",193],["bepanthen.com.au",193],["berocca.com.au",193],["booking.com",193],["carrefour.fr",193],["centrum.sk",193],["claratyne.com.au",193],["credit-suisse.com",193],["ceskatelevize.cz",193],["deporvillage.*",193],["de.vanguard",193],["dhl.de",193],["digikey.*",193],["drafthouse.com",193],["dunelm.com",193],["eurosport.fr",193],["fello.se",193],["fielmann.*",193],["flashscore.fr",193],["flightradar24.com",193],["fnac.es",193],["foodandwine.com",193],["fourseasons.com",193],["khanacademy.org",193],["konami.com",193],["jll.*",193],["jobs.redbull.com",193],["hellenicbank.com",193],["gemini.pl",193],["groceries.asda.com",193],["lamborghini.com",193],["menshealth.com",193],["n26.com",193],["nintendo.com",193],["nokia.com",193],["oneweb.net",193],["omnipod.com",193],["oralb.*",193],["panasonic.com",193],["parkside-diy.com",193],["pluto.tv",193],["popularmechanics.com",193],["polskieradio.pl",193],["pringles.com",193],["questdiagnostics.com",193],["radissonhotels.com",193],["ricardo.ch",193],["rockstargames.com",193],["rte.ie",193],["salesforce.com",193],["samsonite.*",193],["spiele.heise.de",193],["spirit.com",193],["stenaline.co.uk",193],["swisscom.ch",193],["swisspass.ch",193],["technologyfromsage.com",193],["telenet.be",193],["tntsports.co.uk",193],["theepochtimes.com",193],["toujeo.com",193],["uber-platz.de",193],["vinted.com",193],["wallapop.com",193],["wickes.co.uk",193],["workingtitlefilms.com",193],["vattenfall.de",193],["winparts.fr",193],["yoigo.com",193],["zoominfo.com",193],["allegiantair.com",194],["hallmarkchannel.com",194],["incorez.com",194],["noovle.com",194],["otter.ai",194],["plarium.com",194],["telsy.com",194],["timenterprise.it",194],["tim.it",194],["tradersunion.com",194],["fnac.*",194],["yeti.com",194],["here.com",[195,687]],["vodafone.com",195],["cmp.heise.de",[197,198]],["cmp.am-online.com",197],["cmp.motorcyclenews.com",197],["consent.newsnow.co.uk",197],["cmp.todays-golfer.com",197],["koeser.com",199],["shop.schaette-pferd.de",199],["schaette.de",199],["central-bb.de",200],["fitnessfoodcorner.de",201],["kuehlungsborn.de",202],["espressocoffeeshop.com",203],["brainmarket.pl",204],["getroots.app",205],["cart-in.re",[206,611]],["prestonpublishing.pl",207],["zara.com",208],["lepermislibre.fr",208],["negociardivida.spcbrasil.org.br",209],["pons.com",210],["adidas.*",211],["privacy.topreality.sk",212],["privacy.autobazar.eu",212],["vu.lt",213],["adnkronos.com",[214,215]],["cornwalllive.com",[214,215]],["cyprus-mail.com",[214,215]],["einthusan.tv",[214,215]],["informazione.it",[214,215]],["mymovies.it",[214,215]],["tuttoeuropei.com",[214,215]],["video.lacnews24.it",[214,215]],["protothema.gr",214],["flash.gr",214],["taxscouts.com",216],["online.no",218],["telenor.no",218],["austrian.com",219],["lufthansa.com",219],["kampfkunst-herz.de",220],["glow25.de",220],["h-f.at",220],["hornetsecurity.com",220],["kayzen.io",220],["wasserkunst-hamburg.de",220],["zahnspange-oelde.de",220],["bnc.ca",221],["egora.fr",221],["engelvoelkers.com",221],["estrategiasdeinversion.com",221],["festo.com",221],["franceinfo.fr",221],["francebleu.fr",221],["francemediasmonde.com",221],["geny.com",221],["giphy.com",221],["idealista.com",221],["infolibre.es",221],["inpost.pl",221],["information.tv5monde.com",221],["ing.es",221],["knipex.de",221],["laprovence.com",221],["lemondeinformatique.fr",221],["libertaddigital.com",221],["mappy.com",221],["orf.at",221],["philibertnet.com",221],["researchgate.net",221],["standaard.be",221],["stroilioro.com",221],["taxfix.de",221],["telecinco.es",221],["vistaalegre.com",221],["zimbra.free.fr",221],["usinenouvelle.com",223],["reussir.fr",225],["bruendl.at",227],["latamairlines.com",228],["elisa.ee",229],["baseendpoint.brigitte.de",230],["baseendpoint.gala.de",230],["baseendpoint.haeuser.de",230],["baseendpoint.stern.de",230],["baseendpoint.urbia.de",230],["cmp.tag24.de",230],["cmp-sp.handelsblatt.com",230],["cmpv2.berliner-zeitung.de",230],["golem.de",230],["consent.t-online.de",230],["sp-consent.stuttgarter-nachrichten.de",231],["sp-consent.stuttgarter-zeitung.de",231],["regjeringen.no",232],["sp-manager-magazin-de.manager-magazin.de",233],["consent.11freunde.de",233],["wallester.com",238],["centrum24.pl",239],["replay.lsm.lv",240],["ltv.lsm.lv",240],["bernistaba.lsm.lv",240],["verl.de",241],["cubo-sauna.de",241],["mbl.is",241],["auto-medienportal.net",241],["mobile.de",242],["cookist.it",243],["fanpage.it",243],["geopop.it",243],["lexplain.it",243],["royalmail.com",244],["gmx.net",245],["gmx.ch",246],["mojehobby.pl",247],["super-hobby.*",247],["sp.stylevamp.de",248],["cmp.wetteronline.de",248],["audi.*",[249,250]],["easyjet.com",249],["experian.co.uk",249],["postoffice.co.uk",249],["tescobank.com",249],["internetaptieka.lv",[251,252]],["nike.com",253],["wells.pt",254],["dskdirect.bg",255],["cmpv2.dba.dk",256],["spcmp.crosswordsolver.com",257],["ecco.com",258],["georgjensen.com",258],["thomann.*",259],["landkreis-kronach.de",260],["effectiefgeven.be",261],["northcoast.com",261],["chaingpt.org",261],["bandenconcurrent.nl",262],["bandenexpert.be",262],["reserved.com",263],["metro.it",264],["makro.es",264],["metro.sk",264],["metro-cc.hr",264],["makro.nl",264],["metro.bg",264],["metro.at",264],["metro-tr.com",264],["metro.de",264],["metro.fr",264],["makro.cz",264],["metro.ro",264],["makro.pt",264],["makro.pl",264],["sklepy-odido.pl",264],["rastreator.com",264],["metro.ua",265],["metro.rs",265],["metro-kz.com",265],["metro.md",265],["metro.hu",265],["metro-cc.ru",265],["metro.pk",265],["balay.es",266],["constructa.com",266],["dafy-moto.com",267],["akku-shop.nl",268],["akkushop-austria.at",268],["akkushop-b2b.de",268],["akkushop.de",268],["akkushop.dk",268],["batterie-boutique.fr",268],["akkushop-schweiz.ch",269],["evzuttya.com.ua",270],["eobuv.cz",270],["eobuwie.com.pl",270],["ecipele.hr",270],["eavalyne.lt",270],["chaussures.fr",270],["ecipo.hu",270],["eobuv.sk",270],["epantofi.ro",270],["epapoutsia.gr",270],["escarpe.it",270],["eschuhe.de",270],["obuvki.bg",270],["zapatos.es",270],["swedbank.ee",271],["mudanzavila.es",272],["bienmanger.com",273],["gesipa.*",274],["gesipausa.com",274],["beckhoff.com",274],["zitekick.dk",275],["eltechno.dk",275],["okazik.pl",275],["batteryempire.*",276],["maxi.rs",277],["garmin.com",278],["invisalign.*",278],["one4all.ie",278],["osprey.com",278],["wideroe.no",279],["bmw.*",280],["kijk.nl",281],["nordania.dk",282],["danskebank.*",282],["danskeci.com",282],["danica.dk",282],["dehn.*",283],["gewerbegebiete.de",284],["cordia.fr",285],["vola.fr",286],["lafi.fr",287],["skyscanner.*",288],["coolblue.*",289],["chipotle.com",290],["sanareva.*",291],["atida.fr",291],["bbva.*",292],["bbvauk.com",292],["expertise.unimi.it",293],["altenberg.de",294],["vestel.es",295],["tsb.co.uk",296],["buienradar.nl",[297,298]],["linsenplatz.de",299],["budni.de",300],["erstecardclub.hr",300],["teufel.de",[301,302]],["abp.nl",303],["simplea.sk",304],["flip.bg",305],["kiertokanki.com",306],["leirovins.be",308],["vias.be",309],["edf.fr",310],["virbac.com",310],["diners.hr",310],["squarehabitat.fr",310],["arbitrobancariofinanziario.it",311],["ivass.it",311],["economiapertutti.bancaditalia.it",311],["smit-sport.de",312],["gekko-computer.de",312],["jysk.al",313],["go-e.com",314],["malerblatt-medienservice.de",315],["architekturbuch.de",315],["medienservice-holz.de",315],["leuchtstark.de",315],["casius.nl",316],["coolinarika.com",317],["giga-hamburg.de",317],["vakgaragevannunen.nl",317],["fortuluz.es",317],["finna.fi",317],["eurogrow.es",317],["topnatur.cz",317],["topnatur.eu",317],["vakgarage.nl",317],["whufc.com",317],["zomaplast.cz",317],["envafors.dk",318],["dabbolig.dk",[319,320]],["daruk-emelok.hu",321],["exakta.se",322],["larca.de",323],["roli.com",324],["okazii.ro",325],["lr-shop-direkt.de",325],["portalprzedszkolny.pl",325],["tgvinoui.sncf",326],["l-bank.de",327],["interhyp.de",328],["indigoneo.*",329],["transparency.meta.com",330],["dojusagro.lt",331],["eok.ee",331],["kripa.it",331],["nextdaycatering.co.uk",331],["safran-group.com",331],["sr-ramenendeuren.be",331],["ilovefreegle.org",331],["tribexr.com",331],["understandingsociety.ac.uk",331],["bestbuycyprus.com",332],["strato.*",333],["strato-hosting.co.uk",333],["auto.de",334],["contentkingapp.com",335],["comune.palermo.it",336],["get-in-engineering.de",337],["spp.nextpit.com",338],["spp.nextpit.es",339],["spp.nextpit.it",340],["spp.nextpit.com.br",341],["spp.nextpit.fr",342],["otterbox.com",343],["stoertebeker-brauquartier.com",344],["stoertebeker.com",344],["stoertebeker-eph.com",344],["aparts.pl",345],["sinsay.com",[346,347]],["benu.cz",348],["stockholmresilience.org",349],["ludvika.se",349],["kammarkollegiet.se",349],["cazenovecapital.com",350],["statestreet.com",351],["beopen.lv",352],["cesukoncertzale.lv",353],["dodo.fr",354],["pepper.it",355],["pepper.pl",355],["preisjaeger.at",355],["mydealz.de",355],["dealabs.com",355],["hotukdeals.com",355],["chollometro.com",355],["makelaarsland.nl",356],["bezirk-schwaben.de",357],["dorfen.de",357],["nutsinbulk.co.uk",358],["bricklink.com",359],["bestinver.es",360],["icvs2023.conf.tuwien.ac.at",361],["racshop.co.uk",[362,363]],["baabuk.com",364],["sapien.io",364],["tradedoubler.com",364],["app.lepermislibre.fr",365],["multioferta.es",366],["testwise.com",[367,368]],["tonyschocolonely.com",369],["fitplus.is",369],["fransdegrebber.nl",369],["lilliputpress.ie",369],["lexibo.com",369],["marin-milou.com",369],["dare2tri.com",369],["t3micro.*",369],["la-vie-naturelle.com",[370,371]],["inovelli.com",372],["uonetplus.vulcan.net.pl",[373,374]],["consent.helagotland.se",375],["oper.koeln",[376,377]],["deezer.com",378],["hoteldesartssaigon.com",379],["autoritedelaconcurrence.fr",380],["groupeonepoint.com",380],["geneanet.org",380],["carrieres.groupegalerieslafayette.com",380],["immo-banques.fr",380],["lingvanex.com",380],["turncamp.com",381],["ejobs.ro",[382,383]],["kupbilecik.*",[384,385]],["coolbe.com",386],["serienjunkies.de",387],["computerhoy.20minutos.es",388],["clickskeks.at",389],["clickskeks.de",389],["abt-sportsline.de",389],["exemplary.ai",390],["forbo.com",390],["stores.sk",390],["nerdstar.de",390],["prace.cz",390],["profesia.sk",390],["profesia.cz",390],["pracezarohem.cz",390],["atmoskop.cz",390],["seduo.sk",390],["seduo.cz",390],["teamio.com",390],["arnold-robot.com",390],["cvonline.lt",390],["cv.lv",390],["cv.ee",390],["dirbam.lt",390],["visidarbi.lv",390],["otsintood.ee",390],["webtic.it",390],["gerth.de",391],["pamiatki.pl",392],["initse.com",393],["salvagny.org",394],["augsburger-allgemeine.de",395],["stabila.com",396],["stwater.co.uk",397],["suncalc.org",[398,399]],["swisstph.ch",400],["taxinstitute.ie",401],["get-in-it.de",402],["tempcover.com",[403,404]],["guildford.gov.uk",405],["easyparts.*",[406,407]],["easyparts-recambios.es",[406,407]],["easyparts-rollerteile.de",[406,407]],["drimsim.com",408],["canyon.com",[409,410]],["vevovo.be",[411,412]],["vendezvotrevoiture.be",[411,412]],["wirkaufendeinauto.at",[411,412]],["vikoberallebiler.dk",[411,412]],["wijkopenautos.nl",[411,412]],["vikoperdinbil.se",[411,412]],["noicompriamoauto.it",[411,412]],["vendezvotrevoiture.fr",[411,412]],["compramostucoche.es",[411,412]],["wijkopenautos.be",[411,412]],["auto-doc.*",413],["autodoc.*",413],["autodoc24.*",413],["topautoosat.fi",413],["autoteiledirekt.de",413],["autoczescionline24.pl",413],["tuttoautoricambi.it",413],["onlinecarparts.co.uk",413],["autoalkatreszek24.hu",413],["autodielyonline24.sk",413],["reservdelar24.se",413],["pecasauto24.pt",413],["reservedeler24.co.no",413],["piecesauto24.lu",413],["rezervesdalas24.lv",413],["besteonderdelen.nl",413],["recambioscoche.es",413],["antallaktikaexartimata.gr",413],["piecesauto.fr",413],["teile-direkt.ch",413],["lpi.org",414],["divadelniflora.cz",415],["mahle-aftermarket.com",416],["refurbed.*",417],["eingutertag.org",418],["flyingtiger.com",[418,562]],["borgomontecedrone.it",418],["maharishistore.com",418],["recaro-shop.com",418],["gartenhotel-crystal.at",418],["fayn.com",419],["serica-watches.com",419],["sklavenitis.gr",420],["eam-netz.de",421],["umicore.*",422],["veiligverkeer.be",422],["vsv.be",422],["dehogerielen.be",422],["gera.de",423],["mfr-chessy.fr",424],["mfr-lamure.fr",424],["mfr-saint-romain.fr",424],["mfr-lapalma.fr",424],["mfrvilliemorgon.asso.fr",424],["mfr-charentay.fr",424],["mfr.fr",424],["nationaltrust.org.uk",425],["hej-natural.*",426],["ib-hansmeier.de",427],["rsag.de",428],["esaa-eu.org",428],["aknw.de",428],["answear.*",429],["theprotocol.it",[430,431]],["lightandland.co.uk",432],["etransport.pl",433],["wohnen-im-alter.de",434],["johnmuirhealth.com",[435,436]],["markushaenni.com",437],["airbaltic.com",438],["gamersgate.com",438],["zorgzaam010.nl",439],["etos.nl",440],["paruvendu.fr",441],["privacy.bazar.sk",442],["hennamorena.com",443],["newsello.pl",444],["porp.pl",445],["golfbreaks.com",446],["lieferando.de",447],["just-eat.*",447],["justeat.*",447],["pyszne.pl",447],["lieferando.at",447],["takeaway.com",447],["thuisbezorgd.nl",447],["holidayhypermarket.co.uk",448],["unisg.ch",449],["wassererleben.ch",449],["psgaz.pl",450],["play-asia.com",451],["centralthe1card.com",452],["atu.de",453],["atu-flottenloesungen.de",453],["but.fr",453],["edeka.de",453],["fortuneo.fr",453],["maif.fr",453],["meteo.tf1.fr",453],["particuliers.sg.fr",453],["sparkasse.at",453],["group.vig",453],["tf1info.fr",453],["dpdgroup.com",454],["dpd.com",454],["cosmosdirekt.de",454],["bstrongoutlet.pt",455],["isarradweg.de",[456,457]],["flaxmanestates.com",457],["inland-casas.com",457],["finlayson.fi",[458,459]],["cowaymega.ca",[458,459]],["arktis.de",460],["desktronic.de",460],["belleek.com",460],["brauzz.com",460],["cowaymega.com",460],["dockin.de",460],["dryrobe.com",[460,461]],["formswim.com",460],["hairtalk.se",460],["hallmark.co.uk",[460,461]],["loopearplugs.com",[460,461]],["oleus.com",460],["peopleofshibuya.com",460],["pullup-dip.com",460],["sanctum.shop",460],["tbco.com",460],["desktronic.*",461],["hq-germany.com",461],["tepedirect.com",461],["maxi-pet.ro",461],["paper-republic.com",461],["pullup-dip.*",461],["vitabiotics.com",461],["smythstoys.com",462],["beam.co.uk",[463,464]],["autobahn.de",465],["krakow.pl",466],["shop.app",467],["shopify.com",467],["wufoo.com",468],["consent.dailymotion.com",469],["laposte.fr",469],["help.instagram.com",470],["consent-manager.thenextweb.com",472],["consent-cdn.zeit.de",473],["coway-usa.com",474],["steiners.shop",475],["ecmrecords.com",476],["malaikaraiss.com",476],["koch-mit.de",476],["zeitreisen.zeit.de",476],["wefashion.com",477],["merkur.dk",478],["ionos.*",480],["omegawatches.com",481],["carefully.be",482],["aerotime.aero",482],["rocket-league.com",483],["dws.com",484],["bosch-homecomfort.com",485],["elmleblanc-optibox.fr",485],["monservicechauffage.fr",485],["boschrexroth.com",485],["home-connect.com",486],["lowrider.at",[487,488]],["mesto.de",489],["intersport.gr",490],["intersport.bg",490],["intersport.com.cy",490],["intersport.ro",490],["ticsante.com",491],["techopital.com",491],["millenniumprize.org",492],["hepster.com",493],["peterstaler.de",494],["blackforest-still.de",494],["tiendaplayaundi.com",495],["ajtix.co.uk",496],["raja.fr",497],["rajarani.de",497],["rajapack.*",[497,498]],["avery-zweckform.com",499],["1xinternet.com",499],["futterhaus.de",499],["dasfutterhaus.at",499],["frischeparadies.de",499],["fmk-steuer.de",499],["selgros.de",499],["transgourmet.de",499],["mediapart.fr",500],["athlon.com",501],["alumniportal-deutschland.org",502],["snoopmedia.com",502],["myguide.de",502],["daad.de",502],["cornelsen.de",[503,504]],["vinmonopolet.no",506],["tvp.info",507],["tvp.pl",507],["tvpworld.com",507],["brtvp.pl",507],["tvpparlament.pl",507],["belsat.eu",507],["warnung.bund.de",508],["mediathek.lfv-bayern.de",509],["allegro.*",510],["allegrolokalnie.pl",510],["ceneo.pl",510],["czc.cz",510],["eon.pl",[511,512]],["ylasatakunta.fi",[513,514]],["mega-image.ro",515],["louisvuitton.com",516],["bodensee-airport.eu",517],["department56.com",518],["allendesignsstudio.com",518],["designsbylolita.co",518],["shop.enesco.com",518],["savoriurbane.com",519],["miumiu.com",520],["church-footwear.com",520],["clickdoc.fr",521],["car-interface.com",522],["monolithdesign.it",522],["thematchahouse.com",522],["smileypack.de",[523,524]],["finom.co",525],["orange.es",[526,527]],["fdm-travel.dk",528],["hummel.dk",528],["jysk.nl",528],["power.no",528],["skousen.dk",528],["velliv.dk",528],["whiteaway.com",528],["whiteaway.no",528],["whiteaway.se",528],["skousen.no",528],["energinet.dk",528],["elkjop.no",528],["medimax.de",529],["costautoricambi.com",530],["lotto.it",530],["readspeaker.com",530],["team.blue",530],["ibistallinncenter.ee",531],["aaron.ai",532],["futureverse.com",533],["tandem.co.uk",533],["insights.com",534],["thebathcollection.com",535],["coastfashion.com",[536,537]],["oasisfashion.com",[536,537]],["warehousefashion.com",[536,537]],["misspap.com",[536,537]],["karenmillen.com",[536,537]],["boohooman.com",[536,537]],["hdt.de",538],["wolt.com",539],["myprivacy.dpgmedia.nl",540],["myprivacy.dpgmedia.be",540],["www.dpgmediagroup.com",540],["xohotels.com",541],["sim24.de",542],["tnt.com",543],["uza.be",544],["uzafoundation.be",544],["uzajobs.be",544],["bergzeit.*",[545,546]],["cinemas-lumiere.com",547],["cdiscount.com",548],["brabus.com",549],["roborock.com",550],["strumentimusicali.net",551],["maisonmargiela.com",552],["webfleet.com",553],["dragonflyshipping.ca",554],["broekhuis.nl",555],["groningenairport.nl",555],["nemck.cz",556],["zdfheute.de",557],["sap-press.com",558],["roughguides.com",[559,560]],["korvonal.com",561],["rexbo.*",563],["itau.com.br",564],["bbg.gv.at",565],["portal.taxi.eu",566],["topannonces.fr",567],["homap.fr",568],["artifica.fr",569],["plan-interactif.com",569],["ville-cesson.fr",569],["moismoliere.com",570],["unihomes.co.uk",571],["bkk.hu",572],["coiffhair.com",573],["ptc.eu",574],["ziegert-group.com",[575,684]],["lassuranceretraite.fr",576],["interieur.gouv.fr",576],["toureiffel.paris",576],["economie.gouv.fr",576],["education.gouv.fr",576],["livoo.fr",576],["su.se",576],["zappo.fr",576],["smdv.de",577],["digitalo.de",577],["petiteamelie.*",578],["mojanorwegia.pl",579],["koempf24.ch",[580,581]],["teichitekten24.de",[580,581]],["koempf24.de",[580,581]],["wolff-finnhaus-shop.de",[580,581]],["asnbank.nl",582],["blgwonen.nl",582],["regiobank.nl",582],["snsbank.nl",582],["vulcan.net.pl",[583,584]],["ogresnovads.lv",585],["partenamut.be",586],["pirelli.com",587],["unicredit.it",588],["effector.pl",589],["zikodermo.pl",[590,591]],["devolksbank.nl",592],["caixabank.es",593],["cyberport.de",595],["cyberport.at",595],["slevomat.cz",596],["kfzparts24.de",597],["runnersneed.com",598],["aachener-zeitung.de",599],["sportpursuit.com",600],["druni.es",[601,612]],["druni.pt",[601,612]],["delta.com",602],["onliner.by",[603,604]],["vejdirektoratet.dk",605],["usaa.com",606],["consorsbank.de",607],["metroag.de",608],["kupbilecik.pl",609],["oxfordeconomics.com",610],["routershop.nl",611],["woo.pt",611],["e-jumbo.gr",613],["alza.*",614],["rmf.fm",616],["rmf24.pl",616],["tracfone.com",617],["lequipe.fr",618],["global.abb",619],["gala.fr",620],["purepeople.com",621],["3sat.de",622],["zdf.de",622],["filmfund.lu",623],["welcometothejungle.com",623],["triblive.com",624],["rai.it",625],["fbto.nl",626],["europa.eu",627],["caisse-epargne.fr",628],["banquepopulaire.fr",628],["bigmammagroup.com",629],["studentagency.sk",629],["studentagency.eu",629],["winparts.be",630],["winparts.nl",630],["winparts.eu",631],["winparts.ie",631],["winparts.se",631],["sportano.*",[632,633]],["kleinanzeigen.de",634],["crocs.*",635],["chronext.ch",636],["chronext.de",636],["chronext.at",636],["chronext.com",637],["chronext.co.uk",637],["chronext.fr",638],["chronext.nl",639],["chronext.it",640],["galerieslafayette.com",641],["bazarchic.com",642],["stilord.*",643],["tiko.pt",644],["nsinternational.com",645],["meinbildkalender.de",646],["gls-group.com",647],["gls-group.eu",647],["chilis.com",648],["account.bhvr.com",650],["everand.com",650],["lucidchart.com",650],["intercars.ro",[650,651]],["scribd.com",650],["guidepoint.com",650],["erlebnissennerei-zillertal.at",652],["hintertuxergletscher.at",652],["tiwag.at",652],["playseatstore.com",653],["swiss-sport.tv",655],["targobank-magazin.de",656],["zeit-verlagsgruppe.de",656],["online-physiotherapie.de",656],["kieferorthopaede-freisingsmile.de",657],["nltraining.nl",658],["kmudigital.at",659],["mintysquare.com",660],["consent.thetimes.com",661],["cadenaser.com",662],["berlinale.de",663],["lebonlogiciel.com",664],["iberiaexpress.com",665],["easycosmetic.ch",666],["pharmastar.it",667],["washingtonpost.com",668],["brillenplatz.de",669],["angelplatz.de",669],["dt.mef.gov.it",670],["raffeldeals.com",671],["stepstone.de",672],["kobo.com",673],["zoxs.de",675],["offistore.fi",676],["collinsaerospace.com",677],["radioapp.lv",680],["hagengrote.de",681],["hemden-meister.de",681],["vorteilshop.com",682],["capristores.gr",683],["getaround.com",685],["technomarket.bg",686],["epiphone.com",688],["gibson.com",688],["maestroelectronics.com",688],["cropp.com",[689,690]],["housebrand.com",[689,690]],["mohito.com",[689,690]],["autoczescizielonki.pl",691],["b-s.de",692],["novakid.pl",693],["piecesauto24.com",694],["earpros.com",695],["portalridice.cz",696],["kitsapcu.org",697],["nutsinbulk.*",698],["berlin-buehnen.de",699],["metropoliten.rs",700],["educa2.madrid.org",701],["immohal.de",702],["sourcepoint.theguardian.com",703],["rtlplay.be",704],["natgeotv.com",704],["llama.com",705],["meta.com",705],["setasdesevilla.com",706],["cruyff-foundation.org",707],["allianz.*",708],["energiedirect-bayern.de",709],["postnl.be",710],["postnl.nl",710],["sacyr.com",711],["volkswagen-newsroom.com",712],["openbank.*",713],["tagus-eoficina.grupogimeno.com",714],["tidal.com",715],["knax.de",716],["ordblindenetvaerket.dk",717],["boligbeton.dk",717],["dukh.dk",717],["pevgrow.com",718],["ya.ru",719],["ipolska24.pl",720],["17bankow.com",720],["kazimierzdolny.pl",720],["vpolshchi.pl",720],["dobreprogramy.pl",[720,721]],["essanews.com",720],["money.pl",720],["autokult.pl",720],["komorkomania.pl",720],["polygamia.pl",720],["autocentrum.pl",720],["homebook.pl",720],["domodi.pl",720],["jastrzabpost.pl",720],["open.fm",720],["gadzetomania.pl",720],["fotoblogia.pl",720],["abczdrowie.pl",720],["parenting.pl",720],["kafeteria.pl",720],["vibez.pl",720],["wakacje.pl",720],["extradom.pl",720],["totalmoney.pl",720],["superauto.pl",720],["nerwica.com",720],["forum.echirurgia.pl",720],["dailywrap.net",720],["pysznosci.pl",720],["genialne.pl",720],["finansowysupermarket.pl",720],["deliciousmagazine.pl",720],["audioteka.com",720],["easygo.pl",720],["so-magazyn.pl",720],["o2.pl",720],["pudelek.pl",720],["benchmark.pl",720],["wp.pl",720],["altibox.dk",722],["altibox.no",722],["talksport.com",723],["zuiderzeemuseum.nl",724],["gota.io",725],["nwzonline.de",726],["scaleway.com",727],["bistro.sk",728],["spk-schaumburg.de",729],["computerbase.de",730],["comdirect.de",731],["metro.co.uk",732]]);
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
