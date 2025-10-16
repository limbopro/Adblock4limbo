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

    const steps = safe.String_split.call(selectors, /\s*,\s*/).map(a => {
        if ( /^\d+$/.test(a) ) { return parseInt(a, 10); }
        return a;
    });
    if ( steps.length === 0 ) { return; }
    const clickDelay = parseInt(delay, 10) || 1;
    for ( let i = steps.length-1; i > 0; i-- ) {
        if ( typeof steps[i] !== 'string' ) { continue; }
        if ( typeof steps[i-1] !== 'string' ) { continue; }
        steps.splice(i, 0, clickDelay);
    }
    if ( steps.length === 1 && delay !== '' ) {
        steps.unshift(clickDelay);
    }
    if ( typeof steps.at(-1) !== 'number' ) {
        steps.push(10000);
    }

    const waitForTime = ms => {
        return new Promise(resolve => {
            safe.uboLog(logPrefix, `Waiting for ${ms} ms`);
            waitForTime.timer = setTimeout(( ) => {
                waitForTime.timer = undefined;
                resolve();
            }, ms);
        });
    };
    waitForTime.cancel = ( ) => {
        const { timer } = waitForTime;
        if ( timer === undefined ) { return; }
        clearTimeout(timer);
        waitForTime.timer = undefined;
    };

    const waitForElement = selector => {
        return new Promise(resolve => {
            const elem = querySelectorEx(selector);
            if ( elem !== null ) {
                elem.click();
                resolve();
                return;
            }
            safe.uboLog(logPrefix, `Waiting for ${selector}`);
            const observer = new MutationObserver(( ) => {
                const elem = querySelectorEx(selector);
                if ( elem === null ) { return; }
                waitForElement.cancel();
                elem.click();
                resolve();
            });
            observer.observe(document, {
                attributes: true,
                childList: true,
                subtree: true,
            });
            waitForElement.observer = observer;
        });
    };
    waitForElement.cancel = ( ) => {
        const { observer } = waitForElement;
        if ( observer === undefined ) { return; }
        waitForElement.observer = undefined;
        observer.disconnect();
    };

    const waitForTimeout = ms => {
        waitForTimeout.cancel();
        waitForTimeout.timer = setTimeout(( ) => {
            waitForTimeout.timer = undefined;
            terminate();
            safe.uboLog(logPrefix, `Timed out after ${ms} ms`);
        }, ms);
    };
    waitForTimeout.cancel = ( ) => {
        if ( waitForTimeout.timer === undefined ) { return; }
        clearTimeout(waitForTimeout.timer);
        waitForTimeout.timer = undefined;
    };

    const terminate = ( ) => {
        waitForTime.cancel();
        waitForElement.cancel();
        waitForTimeout.cancel();
    };

    const process = async ( ) => {
        waitForTimeout(steps.pop());
        while ( steps.length !== 0 ) {
            const step = steps.shift();
            if ( step === undefined ) { break; }
            if ( typeof step === 'number' ) {
                await waitForTime(step);
                if ( step === 1 ) { continue; }
                continue;
            }
            if ( step.startsWith('!') ) { continue; }
            await waitForElement(step);
            safe.uboLog(logPrefix, `Clicked ${step}`);
        }
        terminate();
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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#CybotCookiebotDialogBodyButtonDecline"],["#pubtech-cmp button[aria-label=\"Continue without accepting\"]"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button[data-t=\"rejectAll\"]","","1000"],["#gdpr-banner-cmp-button","","1000"],["button[aria-label=\"Datenschutzbestimmungen und Einstellungen ablehnen\"]","","1200"],["#iubenda-cs-banner button.iubenda-cs-close-btn"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"consent\"]:not([class*=\"reject\"])"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[aria-label]","","1000"],["ytm-button-renderer.eom-accept button","","2000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","2000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["#qc-cmp2-container button#accept-btn"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1500"],["button[title=\"Zustimmen\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-e2e=\"pure-accept-ads\"]","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button.brlbs-btn-save","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.js-alert-cookie-reject","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button[title=\"Accept & Continue\"]","","1000"],["button#ensRejectAll","","1500"],["button#ensSave","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],[".modal-actions-accept-btn","","2000"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button[id=\"ketch-banner-button-secondary\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Agree\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#btnAcceptPDPA","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],["button#acceptCookiesTerms","","1000"],["a.footer-cookies-button-save-all","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["body > div[class] > div[class] > div[class]:has(a[href*=\"holding.wp.pl\"]) > div[class] > div[class]:only-child > button:first-child"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"],["#cookie-consent-button","","1500"],["com-consent-layer >>> #cmpDenyAll","","2500"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"level1PrimaryButton-\"]:not([class*=\"reject\"])"],["div#continueWithoutAccepting","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["body > div.w-screen.p-\\[1\\.25rem\\].fixed.left-0.top-0.flex button:first-child + button"],["#ketch-banner-buttons-container-compact > button#ketch-banner-button-primary"],[".prelim-manage-cookies-button.btn-default"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["heise.de",7],["theguardian.com",7],["bloomberg.com",[8,9]],["forbes.com",[8,82]],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,189]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,185]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["cdn.privacy-mgmt.com",[24,25,43,53,54,55,56,102,104,112,119,126,127,128,139,140,141,144,146,147,149,160,178,203,224,238,239,242,243,244,245,266,316,479,601,622,660,680]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["oeamtc.at",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,186]],["ubereats.com",[39,186]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["ilgiornale.it",44],["dimensione.com",45],["wero-wallet.eu",45],["everyeye.it",46],["pepper.pl",47],["dealabs.com",47],["hotukdeals.com",47],["chollometro.com",47],["preisjaeger.at",48],["mydealz.de",48],["kleinanzeigen.de",[49,50]],["105.net",51],["dailymail.co.uk",52],["telekom.com",57],["telekom.de",57],["abola.pt",58],["flytap.com",58],["ansons.de",58],["blick.ch",58],["buienradar.be",58],["crunchyroll.com",58],["digi24.ro",58],["digisport.ro",58],["digitalfoundry.net",58],["egx.net",58],["emirates.com",58],["eurogamer.it",58],["foto-erhardt.de",58],["gmx.*",58],["kizi.com",58],["mail.com",58],["mcmcomiccon.com",58],["nachrichten.at",58],["nintendolife.com",58],["oe24.at",58],["observatornews.ro",58],["paxsite.com",58],["peacocktv.com",58],["player.pl",58],["plus500.*",58],["pricerunner.com",58],["pricerunner.se",58],["pricerunner.dk",58],["proximus.be",[58,655]],["proximus.com",58],["purexbox.com",58],["pushsquare.com",58],["rugbypass.com",58],["southparkstudios.com",[58,299]],["southwest.com",58],["starwarscelebration.com",58],["sweatybetty.com",58],["theaa.ie",58],["thehaul.com",58],["timeextension.com",58],["travelandleisure.com",58],["tunein.com",58],["tvn24.pl",58],["uefa.com",58],["videoland.com",58],["wizzair.com",58],["wetter.at",58],["wowbiz.ro",58],["dicebreaker.com",[59,60]],["eurogamer.es",[59,60]],["eurogamer.net",[59,60]],["eurogamer.nl",[59,60]],["eurogamer.pl",[59,60]],["eurogamer.pt",[59,60]],["gamesindustry.biz",[59,60]],["reedpop.com",[59,60]],["rockpapershotgun.com",[59,60]],["thepopverse.com",[59,60]],["vg247.com",[59,60]],["videogameschronicle.com",[59,60]],["eurogamer.de",61],["roadtovr.com",62],["jotex.*",62],["mundodeportivo.com",[63,134]],["www.youtube.com",64],["m.youtube.com",65],["ohra.nl",66],["corriere.it",67],["gazzetta.it",67],["oggi.it",67],["cmp.sky.it",68],["tennisassa.fi",69],["formula1.com",70],["f1racing.pl",71],["music.amazon.*",[72,73]],["consent-pref.trustarc.com",74],["highlights.legaseriea.it",75],["calciomercato.com",75],["sosfanta.com",76],["chrono24.*",[77,78]],["wetter.com",79],["youmath.it",80],["pip.gov.pl",81],["dailybuzz.nl",83],["bnn.de",83],["dosenbach.ch",83],["dw.com",83],["kinepolis.*",83],["mediaite.com",83],["nzz.ch",83],["winfuture.de",83],["lippu.fi",83],["racingnews365.com",83],["reifendirekt.ch",83],["vaillant.*",83],["bauhaus.no",84],["bauhaus.se",84],["beko-group.de",84],["billiger.de",84],["burda.com",84],["vanharen.nl",84],["deichmann.com",[84,107,487]],["meraluna.de",84],["slashdot.org",84],["hermann-saunierduval.it",84],["protherm.cz",84],["saunierduval.es",84],["protherm.sk",84],["protherm.ua",84],["saunierduval.hu",84],["saunierduval.ro",84],["saunierduval.at",84],["awb.nl",84],["spar.hu",85],["group.vattenfall.com",85],["mediaset.it",86],["fortune.com",87],["ilrestodelcarlino.it",88],["quotidiano.net",88],["lanazione.it",88],["ilgiorno.it",88],["iltelegrafolivorno.it",88],["auto.it",89],["beauxarts.com",89],["beinsports.com",89],["bfmtv.com",[89,135]],["boursobank.com",89],["boursorama.com",[89,135]],["boursier.com",[89,232]],["brut.media",89],["canalplus.com",89],["decathlon.fr",[89,229]],["diverto.tv",89],["eden-park.com",89],["foodvisor.io",89],["franceinfo.fr",89],["frandroid.com",89],["jobijoba.*",89],["hotelsbarriere.com",89],["intersport.*",[89,200]],["idealista.it",89],["o2.fr",89],["lejdd.fr",[89,134]],["lechorepublicain.fr",89],["la-croix.com",89],["linfo.re",89],["lamontagne.fr",89],["laredoute.fr",89],["largus.fr",89],["leprogres.fr",89],["lesnumeriques.com",89],["libramemoria.com",89],["lopinion.fr",89],["marieclaire.fr",89],["maville.com",89],["michelin.*",89],["midilibre.fr",[89,684]],["meteofrance.com",89],["mondialtissus.fr",89],["orange.fr",89],["orpi.com",89],["oscaro.com",89],["ouest-france.fr",[89,103,135,685]],["parismatch.com",89],["pagesjaunes.fr",89],["programme-television.org",[89,135]],["publicsenat.fr",[89,135]],["rmcbfmplay.com",[89,135]],["science-et-vie.com",[89,134]],["seloger.com",89],["societe.com",89],["suzuki.fr",89],["sudouest.fr",89],["web-agri.fr",89],["nutri-plus.de",90],["americanairlines.*",91],["consent.capital.fr",92],["consent.programme.tv",92],["consent.voici.fr",92],["programme-tv.net",92],["cmpv2.finn.no",93],["cmp.tek.no",[94,95]],["cmp.e24.no",[94,95]],["minmote.no",[94,95]],["cmp.vg.no",[94,95]],["cloud.google.com",96],["developer.android.com",96],["registry.google",96],["safety.google",96],["huffingtonpost.fr",97],["rainews.it",98],["remarkable.com",99],["netzwelt.de",100],["money.it",101],["allocine.fr",103],["jeuxvideo.com",103],["ozap.com",103],["le10sport.com",103],["xataka.com",103],["cmp.fitbook.de",104],["cmp.autobild.de",104],["sourcepoint.sport.de",104],["cmp-sp.tagesspiegel.de",104],["cmp.bz-berlin.de",104],["cmp.cicero.de",104],["cmp.techbook.de",104],["cmp.stylebook.de",104],["cmp2.bild.de",104],["cmp2.freiepresse.de",104],["sourcepoint.wetter.de",104],["consent.finanzen.at",104],["consent.finanzen.net",104],["consent.up.welt.de",104],["sourcepoint.n-tv.de",104],["sourcepoint.kochbar.de",104],["sourcepoint.rtl.de",104],["cmp.computerbild.de",104],["cmp.petbook.de",104],["cmp-sp.siegener-zeitung.de",104],["cmp-sp.sportbuzzer.de",104],["klarmobil.de",104],["technikum-wien.at",105],["eneco.nl",106],["salomon.com",108],["blackpoolgazette.co.uk",109],["lep.co.uk",109],["northamptonchron.co.uk",109],["scotsman.com",109],["shieldsgazette.com",109],["thestar.co.uk",109],["portsmouth.co.uk",109],["sunderlandecho.com",109],["northernirelandworld.com",109],["3addedminutes.com",109],["anguscountyworld.co.uk",109],["banburyguardian.co.uk",109],["bedfordtoday.co.uk",109],["biggleswadetoday.co.uk",109],["bucksherald.co.uk",109],["burnleyexpress.net",109],["buxtonadvertiser.co.uk",109],["chad.co.uk",109],["daventryexpress.co.uk",109],["derbyshiretimes.co.uk",109],["derbyworld.co.uk",109],["derryjournal.com",109],["dewsburyreporter.co.uk",109],["doncasterfreepress.co.uk",109],["falkirkherald.co.uk",109],["fifetoday.co.uk",109],["glasgowworld.com",109],["halifaxcourier.co.uk",109],["harboroughmail.co.uk",109],["harrogateadvertiser.co.uk",109],["hartlepoolmail.co.uk",109],["hemeltoday.co.uk",109],["hucknalldispatch.co.uk",109],["lancasterguardian.co.uk",109],["leightonbuzzardonline.co.uk",109],["lincolnshireworld.com",109],["liverpoolworld.uk",109],["londonworld.com",109],["lutontoday.co.uk",109],["manchesterworld.uk",109],["meltontimes.co.uk",109],["miltonkeynes.co.uk",109],["newcastleworld.com",109],["newryreporter.com",109],["newsletter.co.uk",109],["northantstelegraph.co.uk",109],["northumberlandgazette.co.uk",109],["nottinghamworld.com",109],["peterboroughtoday.co.uk",109],["rotherhamadvertiser.co.uk",109],["stornowaygazette.co.uk",109],["surreyworld.co.uk",109],["thescarboroughnews.co.uk",109],["thesouthernreporter.co.uk",109],["totallysnookered.com",109],["wakefieldexpress.co.uk",109],["walesworld.com",109],["warwickshireworld.com",109],["wigantoday.net",109],["worksopguardian.co.uk",109],["yorkshireeveningpost.co.uk",109],["yorkshirepost.co.uk",109],["eurocard.com",110],["saseurobonusmastercard.se",111],["tver.jp",113],["linkedin.com",114],["elmundo.es",[115,135]],["expansion.com",115],["s-pankki.fi",116],["srf.ch",116],["alternate.de",116],["bayer04.de",116],["douglas.de",116],["dr-beckmann.com",116],["falke.com",116],["fitnessfirst.de",116],["flaschenpost.de",116],["gloeckle.de",116],["hornbach.nl",116],["hypofriend.de",116],["lactostop.de",116],["neumann.com",116],["post.ch",116],["postbank.de",116],["rts.ch",116],["zalando.*",116],["immowelt.de",117],["joyn.*",117],["morenutrition.de",117],["mapillary.com",118],["cmp.seznam.cz",120],["marca.com",121],["raiplay.it",122],["raiplaysound.it",122],["consent.faz.net",123],["derstandard.at",123],["derstandard.de",123],["automoto.it",124],["ansa.it",124],["cdt.ch",124],["delladio.it",124],["huffingtonpost.it",124],["internazionale.it",124],["lastampa.it",124],["macitynet.it",124],["moto.it",124],["movieplayer.it",124],["multiplayer.it",124],["repubblica.it",124],["tomshw.it",124],["skuola.net",124],["spaziogames.it",124],["today.it",124],["tuttoandroid.net",124],["tuttotech.net",124],["ilgazzettino.it",125],["ilmessaggero.it",125],["ilsecoloxix.it",125],["privacy.motorradonline.de",128],["consent.watson.de",128],["consent.kino.de",128],["consent.desired.de",128],["cmpv2.fn.de",128],["spp.nextpit.de",128],["dailystar.co.uk",[129,130,131,132]],["mirror.co.uk",[129,130,131,132]],["idnes.cz",133],["20minutes.fr",134],["20minutos.es",134],["24sata.hr",134],["abc.es",134],["actu.fr",134],["antena3.com",134],["antena3internacional.com",134],["atresmedia.com",134],["atresmediapublicidad.com",134],["atresmediastudios.com",134],["atresplayer.com",134],["autopista.es",134],["belfasttelegraph.co.uk",134],["bemad.es",134],["bonduelle.it",134],["bonniernews.se",134],["bt.se",134],["cadenadial.com",134],["caracol.com.co",134],["cas.sk",134],["charentelibre.fr",134],["ciclismoafondo.es",134],["cnews.fr",134],["cope.es",134],["correryfitness.com",134],["courrier-picard.fr",134],["cuatro.com",134],["decathlon.nl",134],["decathlon.pl",134],["di.se",134],["diariocordoba.com",134],["diariodenavarra.es",134],["diariosur.es",134],["diariovasco.com",134],["diepresse.com",134],["divinity.es",134],["dn.se",134],["dnevnik.hr",134],["dumpert.nl",134],["ebuyclub.com",134],["edreams.de",134],["edreams.net",134],["elcomercio.es",134],["elconfidencial.com",134],["elcorreo.com",134],["eldesmarque.com",134],["eldiario.es",134],["eldiariomontanes.es",134],["elespanol.com",134],["elle.fr",134],["elpais.com",134],["elperiodico.com",134],["elperiodicodearagon.com",134],["elplural.com",134],["energytv.es",134],["engadget.com",134],["es.ara.cat",134],["euronews.com",134],["europafm.com",134],["expressen.se",134],["factoriadeficcion.com",134],["filmstarts.de",134],["flooxernow.com",134],["folkbladet.nu",134],["footmercato.net",134],["france.tv",134],["france24.com",134],["fussballtransfers.com",134],["ghacks.net",134],["gva.be",134],["hbvl.be",134],["heraldo.es",134],["hoy.es",134],["ideal.es",134],["idealista.pt",134],["krone.at",134],["kurier.at",134],["lacoste.com",134],["ladepeche.fr",134],["lalibre.be",134],["lanouvellerepublique.fr",134],["larazon.es",134],["lasexta.com",134],["lasprovincias.es",134],["latribune.fr",134],["lavanguardia.com",134],["laverdad.es",134],["lavozdegalicia.es",134],["leboncoin.fr",134],["lecturas.com",134],["ledauphine.com",134],["lejsl.com",134],["leparisien.fr",134],["lesoir.be",134],["letelegramme.fr",134],["libremercado.com",134],["localeyes.dk",134],["los40.com",134],["lotoquebec.com",134],["lunion.fr",134],["m6.fr",134],["marianne.cz",134],["marmiton.org",134],["mediaset.es",134],["melodia-fm.com",134],["metronieuws.nl",134],["moviepilot.de",134],["mtmad.es",134],["multilife.com.pl",134],["naszemiasto.pl",134],["nationalgeographic.com.es",134],["nicematin.com",134],["nieuwsblad.be",134],["notretemps.com",134],["numerama.com",134],["okdiario.com",134],["ondacero.es",134],["podiumpodcast.com",134],["portail.lotoquebec.com",134],["profil.at",134],["public.fr",134],["publico.es",134],["radiofrance.fr",134],["rankia.com",134],["rfi.fr",134],["rossmann.pl",134],["rtbf.be",[134,229]],["rtl.lu",134],["sensacine.com",134],["sfgame.net",134],["shure.com",134],["silicon.es",134],["sncf-connect.com",134],["sport.es",134],["sydsvenskan.se",134],["techcrunch.com",134],["telegraaf.nl",134],["telequebec.tv",134],["tf1.fr",134],["tradingsat.com",134],["trailrun.es",134],["video-streaming.orange.fr",134],["xpress.fr",134],["laprovincia.es",135],["informacion.es",135],["tportal.hr",135],["ivoox.com",135],["as.com",135],["slam.nl",135],["bienpublic.com",135],["funradio.fr",135],["gamepro.de",[135,197,198]],["lemon.fr",135],["lexpress.fr",135],["shadow.tech",135],["letemps.ch",135],["mein-mmo.de",135],["heureka.sk",135],["film.at",135],["dhnet.be",135],["lesechos.fr",[135,234]],["marianne.net",[135,229]],["jeanmarcmorandini.com",[135,230]],["dna.fr",135],["sudinfo.be",135],["europe1.fr",[135,230]],["rtl.be",[135,229]],["reviewingthebrew.com",135],["jaysjournal.com",135],["reignoftroy.com",135],["ryobitools.eu",[136,137]],["americanexpress.com",138],["consent.radiotimes.com",141],["sp-consent.szbz.de",142],["cmp.omni.se",143],["cmp.svd.se",143],["cmp.aftonbladet.se",143],["cmp.tv.nu",143],["consent.economist.com",145],["studentagency.cz",145],["cmpv2.foundryco.com",146],["cmpv2.infoworld.com",146],["cmpv2.arnnet.com.au",146],["sp-cdn.pcgames.de",147],["sp-cdn.pcgameshardware.de",147],["consentv2.sport1.de",147],["cmp.mz.de",147],["cmpv2.tori.fi",148],["consent.spielaffe.de",150],["bondekompaniet.no",151],["degiro.*",151],["epochtimes.de",151],["vikingline.com",151],["tfl.gov.uk",151],["drklein.de",151],["hildegardis-krankenhaus.de",151],["kleer.se",151],["lekiaviation.com",151],["lotto.pl",151],["mineralstech.com",151],["volunteer.digitalboost.org.uk",151],["starhotels.com",151],["tefl.com",151],["universumglobal.com",151],["tui.com",152],["rexel.*",153],["csob.sk",154],["greenstuffworld.com",155],["morele.net",[156,157]],["1und1.de",158],["infranken.de",159],["cmp.tvspielfilm.de",160],["cmp.tvtoday.de",160],["cmp.bunte.de",160],["cmp.chip.de",160],["cmp.focus.de",[160,513]],["estadiodeportivo.com",161],["tameteo.*",161],["tempo.pt",161],["meteored.*",161],["pogoda.com",161],["yourweather.co.uk",161],["tempo.com",161],["theweather.net",161],["tiempo.com",161],["ilmeteo.net",161],["daswetter.com",161],["kicker.de",162],["formulatv.com",163],["web.de",164],["lefigaro.fr",165],["linternaute.com",166],["consent.caminteresse.fr",167],["volksfreund.de",168],["rp-online.de",168],["dailypost.co.uk",169],["the-express.com",169],["vide-greniers.org",169],["dailyrecord.co.uk",170],["bluray-disc.de",171],["elio-systems.com",171],["stagatha-fachklinik.de",171],["tarife.mediamarkt.de",171],["lz.de",171],["gaggenau.com",171],["saturn.de",172],["eltiempo.es",[173,174]],["otempo.pt",175],["atlasformen.*",176],["cmp-sp.goettinger-tageblatt.de",177],["cmp-sp.saechsische.de",177],["cmp-sp.ln-online.de",177],["cz.de",177],["dewezet.de",177],["dnn.de",177],["haz.de",177],["gnz.de",177],["landeszeitung.de",177],["lvz.de",177],["maz-online.de",177],["ndz.de",177],["op-marburg.de",177],["ostsee-zeitung.de",177],["paz-online.de",177],["reisereporter.de",177],["rga.de",177],["rnd.de",177],["siegener-zeitung.de",177],["sn-online.de",177],["solinger-tageblatt.de",177],["sportbuzzer.de",177],["szlz.de",177],["tah.de",177],["torgauerzeitung.de",177],["waz-online.de",177],["privacy.maennersache.de",177],["sinergy.ch",179],["agglo-valais-central.ch",179],["biomedcentral.com",180],["hsbc.*",181],["hsbcnet.com",181],["hsbcinnovationbanking.com",181],["create.hsbc",181],["gbm.hsbc.com",181],["hsbc.co.uk",182],["internationalservices.hsbc.com",182],["history.hsbc.com",182],["about.hsbc.co.uk",183],["privatebanking.hsbc.com",184],["independent.co.uk",187],["privacy.crash.net",187],["the-independent.com",188],["argos.co.uk",190],["poco.de",[191,192]],["moebelix.*",191],["moemax.*",191],["xxxlutz.*",191],["xxxlesnina.*",191],["moebel24.at",192],["moebel24.ch",192],["meubles.fr",192],["meubelo.nl",192],["moebel.de",192],["lipo.ch",193],["schubiger.ch",194],["aedt.de",195],["berlin-live.de",195],["bike-magazin.de",195],["connect.de",195],["gutefrage.net",195],["insideparadeplatz.ch",195],["morgenpost.de",195],["thueringen24.de",195],["pdfupload.io",196],["gamestar.de",[197,198,238]],["verksamt.se",199],["acmemarkets.com",200],["amtrak.com",200],["beko.com",200],["bepanthen.com.au",200],["berocca.com.au",200],["booking.com",200],["carrefour.fr",200],["centrum.sk",200],["claratyne.com.au",200],["credit-suisse.com",200],["ceskatelevize.cz",200],["deporvillage.*",200],["de.vanguard",200],["dhl.de",200],["digikey.*",200],["drafthouse.com",200],["dunelm.com",200],["eurosport.fr",200],["fello.se",200],["fielmann.*",200],["flashscore.fr",200],["flightradar24.com",200],["fnac.es",200],["foodandwine.com",200],["fourseasons.com",200],["khanacademy.org",200],["konami.com",200],["jll.*",200],["jobs.redbull.com",200],["hellenicbank.com",200],["gemini.pl",200],["groceries.asda.com",200],["lamborghini.com",200],["menshealth.com",200],["n26.com",200],["nintendo.com",200],["nokia.com",200],["oneweb.net",200],["omnipod.com",200],["oralb.*",200],["panasonic.com",200],["parkside-diy.com",200],["pluto.tv",200],["popularmechanics.com",200],["polskieradio.pl",200],["pringles.com",200],["questdiagnostics.com",200],["radissonhotels.com",200],["ricardo.ch",200],["rockstargames.com",200],["rte.ie",200],["salesforce.com",200],["samsonite.*",200],["spiele.heise.de",200],["spirit.com",200],["stenaline.co.uk",200],["swisscom.ch",200],["swisspass.ch",200],["technologyfromsage.com",200],["telenet.be",200],["tntsports.co.uk",200],["theepochtimes.com",200],["toujeo.com",200],["uber-platz.de",200],["vinted.com",200],["wallapop.com",200],["wickes.co.uk",200],["workingtitlefilms.com",200],["vattenfall.de",200],["winparts.fr",200],["yoigo.com",200],["zoominfo.com",200],["allegiantair.com",201],["hallmarkchannel.com",201],["incorez.com",201],["noovle.com",201],["otter.ai",201],["plarium.com",201],["telsy.com",201],["timenterprise.it",201],["tim.it",201],["tradersunion.com",201],["fnac.*",201],["yeti.com",201],["here.com",[202,693]],["vodafone.com",202],["cmp.heise.de",[204,205]],["cmp.am-online.com",204],["cmp.motorcyclenews.com",204],["consent.newsnow.co.uk",204],["cmp.todays-golfer.com",204],["koeser.com",206],["shop.schaette-pferd.de",206],["schaette.de",206],["central-bb.de",207],["fitnessfoodcorner.de",208],["kuehlungsborn.de",209],["espressocoffeeshop.com",210],["brainmarket.pl",211],["getroots.app",212],["cart-in.re",[213,618]],["prestonpublishing.pl",214],["zara.com",215],["lepermislibre.fr",215],["negociardivida.spcbrasil.org.br",216],["pons.com",217],["adidas.*",218],["privacy.topreality.sk",219],["privacy.autobazar.eu",219],["vu.lt",220],["adnkronos.com",[221,222]],["cornwalllive.com",[221,222]],["cyprus-mail.com",[221,222]],["einthusan.tv",[221,222]],["informazione.it",[221,222]],["mymovies.it",[221,222]],["tuttoeuropei.com",[221,222]],["video.lacnews24.it",[221,222]],["protothema.gr",221],["flash.gr",221],["taxscouts.com",223],["online.no",225],["telenor.no",225],["austrian.com",226],["lufthansa.com",226],["kampfkunst-herz.de",227],["glow25.de",227],["h-f.at",227],["hornetsecurity.com",227],["ifun.de",227],["kayzen.io",227],["wasserkunst-hamburg.de",227],["zahnspange-oelde.de",227],["xinedome.de",228],["bnc.ca",229],["egora.fr",229],["engelvoelkers.com",229],["estrategiasdeinversion.com",229],["festo.com",229],["francebleu.fr",229],["francemediasmonde.com",229],["geny.com",229],["giphy.com",229],["idealista.com",229],["infolibre.es",229],["inpost.pl",229],["information.tv5monde.com",229],["ing.es",229],["knipex.de",229],["laprovence.com",229],["lemondeinformatique.fr",229],["libertaddigital.com",229],["mappy.com",229],["orf.at",229],["philibertnet.com",229],["researchgate.net",229],["standaard.be",229],["stroilioro.com",229],["taxfix.de",229],["telecinco.es",229],["vistaalegre.com",229],["zimbra.free.fr",229],["usinenouvelle.com",231],["reussir.fr",233],["bruendl.at",235],["latamairlines.com",236],["elisa.ee",237],["baseendpoint.brigitte.de",238],["baseendpoint.gala.de",238],["baseendpoint.haeuser.de",238],["baseendpoint.stern.de",238],["baseendpoint.urbia.de",238],["cmp.tag24.de",238],["cmp-sp.handelsblatt.com",238],["cmpv2.berliner-zeitung.de",238],["golem.de",238],["consent.t-online.de",238],["sp-consent.stuttgarter-nachrichten.de",239],["sp-consent.stuttgarter-zeitung.de",239],["regjeringen.no",240],["sp-manager-magazin-de.manager-magazin.de",241],["consent.11freunde.de",241],["wallester.com",246],["centrum24.pl",247],["replay.lsm.lv",248],["ltv.lsm.lv",248],["bernistaba.lsm.lv",248],["verl.de",249],["cubo-sauna.de",249],["mbl.is",249],["auto-medienportal.net",249],["mobile.de",250],["cookist.it",251],["fanpage.it",251],["geopop.it",251],["lexplain.it",251],["royalmail.com",252],["gmx.net",253],["gmx.ch",254],["mojehobby.pl",255],["super-hobby.*",255],["sp.stylevamp.de",[256,257]],["cmp.wetteronline.de",256],["sp.stylevamp.com",257],["audi.*",[258,259]],["easyjet.com",258],["experian.co.uk",258],["postoffice.co.uk",258],["tescobank.com",258],["internetaptieka.lv",[260,261]],["nike.com",262],["wells.pt",263],["dskdirect.bg",264],["cmpv2.dba.dk",265],["spcmp.crosswordsolver.com",266],["ecco.com",267],["georgjensen.com",267],["thomann.*",268],["landkreis-kronach.de",269],["effectiefgeven.be",270],["northcoast.com",270],["chaingpt.org",270],["bandenconcurrent.nl",271],["bandenexpert.be",271],["reserved.com",272],["metro.it",273],["makro.es",273],["metro.sk",273],["metro-cc.hr",273],["makro.nl",273],["metro.bg",273],["metro.at",273],["metro-tr.com",273],["metro.de",273],["metro.fr",273],["makro.cz",273],["metro.ro",273],["makro.pt",273],["makro.pl",273],["sklepy-odido.pl",273],["rastreator.com",273],["metro.ua",274],["metro.rs",274],["metro-kz.com",274],["metro.md",274],["metro.hu",274],["metro-cc.ru",274],["metro.pk",274],["balay.es",275],["constructa.com",275],["dafy-moto.com",276],["akku-shop.nl",277],["akkushop-austria.at",277],["akkushop-b2b.de",277],["akkushop.de",277],["akkushop.dk",277],["batterie-boutique.fr",277],["akkushop-schweiz.ch",278],["evzuttya.com.ua",279],["eobuv.cz",279],["eobuwie.com.pl",279],["ecipele.hr",279],["eavalyne.lt",279],["chaussures.fr",279],["ecipo.hu",279],["eobuv.sk",279],["epantofi.ro",279],["epapoutsia.gr",279],["escarpe.it",279],["eschuhe.de",279],["obuvki.bg",279],["zapatos.es",279],["swedbank.ee",280],["mudanzavila.es",281],["bienmanger.com",282],["gesipa.*",283],["gesipausa.com",283],["beckhoff.com",283],["zitekick.dk",284],["eltechno.dk",284],["okazik.pl",284],["batteryempire.*",285],["maxi.rs",286],["garmin.com",287],["invisalign.*",287],["one4all.ie",287],["osprey.com",287],["wideroe.no",288],["bmw.*",289],["kijk.nl",290],["nordania.dk",291],["danskebank.*",291],["danskeci.com",291],["danica.dk",291],["dehn.*",292],["gewerbegebiete.de",293],["cordia.fr",294],["vola.fr",295],["lafi.fr",296],["skyscanner.*",297],["coolblue.*",298],["chipotle.com",299],["sanareva.*",300],["atida.fr",300],["bbva.*",301],["bbvauk.com",301],["expertise.unimi.it",302],["altenberg.de",303],["vestel.es",304],["tsb.co.uk",305],["buienradar.nl",[306,307]],["linsenplatz.de",308],["budni.de",309],["erstecardclub.hr",309],["teufel.de",[310,311]],["abp.nl",312],["simplea.sk",313],["flip.bg",314],["kiertokanki.com",315],["leirovins.be",317],["vias.be",318],["edf.fr",319],["virbac.com",319],["diners.hr",319],["squarehabitat.fr",319],["arbitrobancariofinanziario.it",320],["ivass.it",320],["economiapertutti.bancaditalia.it",320],["smit-sport.de",321],["gekko-computer.de",321],["jysk.al",322],["go-e.com",323],["malerblatt-medienservice.de",324],["architekturbuch.de",324],["medienservice-holz.de",324],["leuchtstark.de",324],["casius.nl",325],["coolinarika.com",326],["giga-hamburg.de",326],["vakgaragevannunen.nl",326],["fortuluz.es",326],["finna.fi",326],["eurogrow.es",326],["paid.ai",326],["topnatur.cz",326],["topnatur.eu",326],["vakgarage.nl",326],["whufc.com",326],["zomaplast.cz",326],["envafors.dk",327],["dabbolig.dk",[328,329]],["daruk-emelok.hu",330],["exakta.se",331],["larca.de",332],["roli.com",333],["okazii.ro",334],["lr-shop-direkt.de",334],["portalprzedszkolny.pl",334],["tgvinoui.sncf",335],["l-bank.de",336],["interhyp.de",337],["indigoneo.*",338],["transparency.meta.com",339],["dojusagro.lt",340],["eok.ee",340],["kripa.it",340],["nextdaycatering.co.uk",340],["safran-group.com",340],["sr-ramenendeuren.be",340],["ilovefreegle.org",340],["tribexr.com",340],["understandingsociety.ac.uk",340],["bestbuycyprus.com",341],["strato.*",342],["strato-hosting.co.uk",342],["auto.de",343],["contentkingapp.com",344],["comune.palermo.it",345],["get-in-engineering.de",346],["spp.nextpit.com",347],["spp.nextpit.es",348],["spp.nextpit.it",349],["spp.nextpit.com.br",350],["spp.nextpit.fr",351],["otterbox.com",352],["stoertebeker-brauquartier.com",353],["stoertebeker.com",353],["stoertebeker-eph.com",353],["aparts.pl",354],["sinsay.com",[355,356]],["benu.cz",357],["stockholmresilience.org",358],["ludvika.se",358],["kammarkollegiet.se",358],["cazenovecapital.com",359],["statestreet.com",360],["beopen.lv",361],["cesukoncertzale.lv",362],["dodo.fr",363],["makelaarsland.nl",364],["bezirk-schwaben.de",365],["dorfen.de",365],["nutsinbulk.co.uk",366],["bricklink.com",367],["bestinver.es",368],["icvs2023.conf.tuwien.ac.at",369],["racshop.co.uk",[370,371]],["baabuk.com",372],["sapien.io",372],["tradedoubler.com",372],["app.lepermislibre.fr",373],["multioferta.es",374],["testwise.com",[375,376]],["tonyschocolonely.com",377],["fitplus.is",377],["fransdegrebber.nl",377],["lilliputpress.ie",377],["lexibo.com",377],["marin-milou.com",377],["dare2tri.com",377],["t3micro.*",377],["la-vie-naturelle.com",[378,379]],["inovelli.com",380],["uonetplus.vulcan.net.pl",[381,382]],["consent.helagotland.se",383],["oper.koeln",[384,385]],["deezer.com",386],["hoteldesartssaigon.com",387],["autoritedelaconcurrence.fr",388],["groupeonepoint.com",388],["geneanet.org",388],["carrieres.groupegalerieslafayette.com",388],["immo-banques.fr",388],["lingvanex.com",388],["turncamp.com",389],["ejobs.ro",[390,391]],["kupbilecik.*",[392,393]],["coolbe.com",394],["serienjunkies.de",395],["computerhoy.20minutos.es",396],["clickskeks.at",397],["clickskeks.de",397],["abt-sportsline.de",397],["exemplary.ai",398],["forbo.com",398],["stores.sk",398],["nerdstar.de",398],["prace.cz",398],["profesia.sk",398],["profesia.cz",398],["pracezarohem.cz",398],["atmoskop.cz",398],["seduo.sk",398],["seduo.cz",398],["teamio.com",398],["arnold-robot.com",398],["cvonline.lt",398],["cv.lv",398],["cv.ee",398],["dirbam.lt",398],["visidarbi.lv",398],["otsintood.ee",398],["webtic.it",398],["gerth.de",399],["pamiatki.pl",400],["initse.com",401],["salvagny.org",402],["augsburger-allgemeine.de",403],["stabila.com",404],["stwater.co.uk",405],["suncalc.org",[406,407]],["swisstph.ch",408],["taxinstitute.ie",409],["get-in-it.de",410],["tempcover.com",[411,412]],["guildford.gov.uk",413],["easyparts.*",[414,415]],["easyparts-recambios.es",[414,415]],["easyparts-rollerteile.de",[414,415]],["drimsim.com",416],["canyon.com",[417,418]],["vevovo.be",[419,420]],["vendezvotrevoiture.be",[419,420]],["wirkaufendeinauto.at",[419,420]],["vikoberallebiler.dk",[419,420]],["wijkopenautos.nl",[419,420]],["vikoperdinbil.se",[419,420]],["noicompriamoauto.it",[419,420]],["vendezvotrevoiture.fr",[419,420]],["compramostucoche.es",[419,420]],["wijkopenautos.be",[419,420]],["auto-doc.*",421],["autodoc.*",421],["autodoc24.*",421],["topautoosat.fi",421],["autoteiledirekt.de",421],["autoczescionline24.pl",421],["tuttoautoricambi.it",421],["onlinecarparts.co.uk",421],["autoalkatreszek24.hu",421],["autodielyonline24.sk",421],["reservdelar24.se",421],["pecasauto24.pt",421],["reservedeler24.co.no",421],["piecesauto24.lu",421],["rezervesdalas24.lv",421],["besteonderdelen.nl",421],["recambioscoche.es",421],["antallaktikaexartimata.gr",421],["piecesauto.fr",421],["teile-direkt.ch",421],["lpi.org",422],["divadelniflora.cz",423],["mahle-aftermarket.com",424],["refurbed.*",425],["eingutertag.org",426],["flyingtiger.com",[426,569]],["borgomontecedrone.it",426],["maharishistore.com",426],["recaro-shop.com",426],["gartenhotel-crystal.at",426],["fayn.com",427],["serica-watches.com",427],["sklavenitis.gr",428],["eam-netz.de",429],["umicore.*",430],["veiligverkeer.be",430],["vsv.be",430],["dehogerielen.be",430],["gera.de",431],["mfr-chessy.fr",432],["mfr-lamure.fr",432],["mfr-saint-romain.fr",432],["mfr-lapalma.fr",432],["mfrvilliemorgon.asso.fr",432],["mfr-charentay.fr",432],["mfr.fr",432],["nationaltrust.org.uk",433],["hej-natural.*",434],["ib-hansmeier.de",435],["rsag.de",436],["esaa-eu.org",436],["aknw.de",436],["answear.*",437],["theprotocol.it",[438,439]],["lightandland.co.uk",440],["etransport.pl",441],["wohnen-im-alter.de",442],["johnmuirhealth.com",[443,444]],["markushaenni.com",445],["airbaltic.com",446],["gamersgate.com",446],["zorgzaam010.nl",447],["etos.nl",448],["paruvendu.fr",449],["privacy.bazar.sk",450],["hennamorena.com",451],["newsello.pl",452],["porp.pl",453],["golfbreaks.com",454],["lieferando.de",455],["just-eat.*",455],["justeat.*",455],["pyszne.pl",455],["lieferando.at",455],["takeaway.com",455],["thuisbezorgd.nl",455],["holidayhypermarket.co.uk",456],["unisg.ch",457],["wassererleben.ch",457],["psgaz.pl",458],["play-asia.com",459],["centralthe1card.com",460],["atu.de",461],["atu-flottenloesungen.de",461],["but.fr",461],["edeka.de",461],["fortuneo.fr",461],["maif.fr",461],["meteo.tf1.fr",461],["particuliers.sg.fr",461],["sparkasse.at",461],["group.vig",461],["tf1info.fr",461],["dpdgroup.com",462],["dpd.com",462],["cosmosdirekt.de",462],["bstrongoutlet.pt",463],["isarradweg.de",[464,465]],["flaxmanestates.com",465],["inland-casas.com",465],["finlayson.fi",[466,467]],["cowaymega.ca",[466,467]],["arktis.de",468],["desktronic.de",468],["belleek.com",468],["brauzz.com",468],["cowaymega.com",468],["dockin.de",468],["dryrobe.com",[468,469]],["formswim.com",468],["hairtalk.se",468],["hallmark.co.uk",[468,469]],["loopearplugs.com",[468,469]],["oleus.com",468],["peopleofshibuya.com",468],["pullup-dip.com",468],["sanctum.shop",468],["tbco.com",468],["desktronic.*",469],["hq-germany.com",469],["tepedirect.com",469],["maxi-pet.ro",469],["paper-republic.com",469],["pullup-dip.*",469],["vitabiotics.com",469],["smythstoys.com",470],["beam.co.uk",[471,472]],["autobahn.de",473],["krakow.pl",474],["shop.app",475],["shopify.com",475],["wufoo.com",476],["consent.dailymotion.com",477],["laposte.fr",477],["help.instagram.com",478],["consent-manager.thenextweb.com",480],["consent-cdn.zeit.de",481],["coway-usa.com",482],["steiners.shop",483],["ecmrecords.com",484],["invidis.com",484],["malaikaraiss.com",484],["koch-mit.de",484],["zeitreisen.zeit.de",484],["wefashion.com",485],["merkur.dk",486],["ionos.*",488],["omegawatches.com",489],["carefully.be",490],["aerotime.aero",490],["rocket-league.com",491],["dws.com",492],["bosch-homecomfort.com",493],["elmleblanc-optibox.fr",493],["monservicechauffage.fr",493],["boschrexroth.com",493],["home-connect.com",494],["lowrider.at",[495,496]],["mesto.de",497],["intersport.gr",498],["intersport.bg",498],["intersport.com.cy",498],["intersport.ro",498],["ticsante.com",499],["techopital.com",499],["millenniumprize.org",500],["hepster.com",501],["peterstaler.de",502],["blackforest-still.de",502],["tiendaplayaundi.com",503],["ajtix.co.uk",504],["raja.fr",505],["rajarani.de",505],["rajapack.*",[505,506]],["avery-zweckform.com",507],["1xinternet.com",507],["futterhaus.de",507],["dasfutterhaus.at",507],["frischeparadies.de",507],["fmk-steuer.de",507],["selgros.de",507],["transgourmet.de",507],["mediapart.fr",508],["athlon.com",509],["alumniportal-deutschland.org",510],["snoopmedia.com",510],["myguide.de",510],["daad.de",510],["cornelsen.de",[511,512]],["vinmonopolet.no",514],["tvp.info",515],["tvp.pl",515],["tvpworld.com",515],["brtvp.pl",515],["tvpparlament.pl",515],["belsat.eu",515],["warnung.bund.de",516],["mediathek.lfv-bayern.de",517],["allegro.*",518],["allegrolokalnie.pl",518],["ceneo.pl",518],["czc.cz",518],["eon.pl",[519,520]],["ylasatakunta.fi",[521,522]],["mega-image.ro",523],["louisvuitton.com",524],["bodensee-airport.eu",525],["department56.com",526],["allendesignsstudio.com",526],["designsbylolita.co",526],["shop.enesco.com",526],["savoriurbane.com",527],["miumiu.com",528],["church-footwear.com",528],["clickdoc.fr",529],["car-interface.com",530],["monolithdesign.it",530],["thematchahouse.com",530],["smileypack.de",[531,532]],["finom.co",533],["orange.es",[534,535]],["fdm-travel.dk",536],["hummel.dk",536],["jysk.nl",536],["power.no",536],["skousen.dk",536],["velliv.dk",536],["whiteaway.com",536],["whiteaway.no",536],["whiteaway.se",536],["skousen.no",536],["energinet.dk",536],["elkjop.no",536],["medimax.de",537],["costautoricambi.com",538],["lotto.it",538],["readspeaker.com",538],["team.blue",538],["ibistallinncenter.ee",539],["aaron.ai",540],["futureverse.com",541],["tandem.co.uk",541],["insights.com",542],["thebathcollection.com",543],["coastfashion.com",[544,545]],["oasisfashion.com",[544,545]],["warehousefashion.com",[544,545]],["misspap.com",[544,545]],["karenmillen.com",[544,545]],["boohooman.com",[544,545]],["hdt.de",546],["wolt.com",547],["xohotels.com",548],["sim24.de",549],["tnt.com",550],["uza.be",551],["uzafoundation.be",551],["uzajobs.be",551],["bergzeit.*",[552,553]],["cinemas-lumiere.com",554],["cdiscount.com",555],["brabus.com",556],["roborock.com",557],["strumentimusicali.net",558],["maisonmargiela.com",559],["webfleet.com",560],["dragonflyshipping.ca",561],["broekhuis.nl",562],["groningenairport.nl",562],["nemck.cz",563],["zdfheute.de",564],["sap-press.com",565],["roughguides.com",[566,567]],["korvonal.com",568],["rexbo.*",570],["itau.com.br",571],["bbg.gv.at",572],["portal.taxi.eu",573],["topannonces.fr",574],["homap.fr",575],["artifica.fr",576],["plan-interactif.com",576],["ville-cesson.fr",576],["moismoliere.com",577],["unihomes.co.uk",578],["bkk.hu",579],["coiffhair.com",580],["ptc.eu",581],["ziegert-group.com",[582,690]],["lassuranceretraite.fr",583],["interieur.gouv.fr",583],["toureiffel.paris",583],["economie.gouv.fr",583],["education.gouv.fr",583],["livoo.fr",583],["su.se",583],["zappo.fr",583],["smdv.de",584],["digitalo.de",584],["petiteamelie.*",585],["mojanorwegia.pl",586],["koempf24.ch",[587,588]],["teichitekten24.de",[587,588]],["koempf24.de",[587,588]],["wolff-finnhaus-shop.de",[587,588]],["asnbank.nl",589],["blgwonen.nl",589],["regiobank.nl",589],["snsbank.nl",589],["vulcan.net.pl",[590,591]],["ogresnovads.lv",592],["partenamut.be",593],["pirelli.com",594],["unicredit.it",595],["effector.pl",596],["zikodermo.pl",[597,598]],["devolksbank.nl",599],["caixabank.es",600],["cyberport.de",602],["cyberport.at",602],["slevomat.cz",603],["kfzparts24.de",604],["runnersneed.com",605],["aachener-zeitung.de",606],["sportpursuit.com",607],["druni.es",[608,619]],["druni.pt",[608,619]],["delta.com",609],["onliner.by",[610,611]],["vejdirektoratet.dk",612],["usaa.com",613],["consorsbank.de",614],["metroag.de",615],["kupbilecik.pl",616],["oxfordeconomics.com",617],["routershop.nl",618],["woo.pt",618],["e-jumbo.gr",620],["alza.*",621],["rmf.fm",623],["rmf24.pl",623],["tracfone.com",624],["lequipe.fr",625],["global.abb",626],["gala.fr",627],["purepeople.com",628],["3sat.de",629],["zdf.de",629],["filmfund.lu",630],["welcometothejungle.com",630],["triblive.com",631],["rai.it",632],["fbto.nl",633],["europa.eu",634],["caisse-epargne.fr",635],["banquepopulaire.fr",635],["bigmammagroup.com",636],["studentagency.sk",636],["studentagency.eu",636],["winparts.be",637],["winparts.nl",637],["winparts.eu",638],["winparts.ie",638],["winparts.se",638],["sportano.*",[639,640]],["crocs.*",641],["chronext.ch",642],["chronext.de",642],["chronext.at",642],["chronext.com",643],["chronext.co.uk",643],["chronext.fr",644],["chronext.nl",645],["chronext.it",646],["galerieslafayette.com",647],["bazarchic.com",648],["stilord.*",649],["tiko.pt",650],["nsinternational.com",651],["meinbildkalender.de",652],["gls-group.com",653],["gls-group.eu",653],["univie.ac.at",653],["chilis.com",654],["account.bhvr.com",656],["everand.com",656],["lucidchart.com",656],["intercars.ro",[656,657]],["scribd.com",656],["guidepoint.com",656],["erlebnissennerei-zillertal.at",658],["hintertuxergletscher.at",658],["tiwag.at",658],["playseatstore.com",659],["swiss-sport.tv",661],["targobank-magazin.de",662],["zeit-verlagsgruppe.de",662],["online-physiotherapie.de",662],["kieferorthopaede-freisingsmile.de",663],["nltraining.nl",664],["kmudigital.at",665],["mintysquare.com",666],["consent.thetimes.com",667],["cadenaser.com",668],["berlinale.de",669],["lebonlogiciel.com",670],["iberiaexpress.com",671],["easycosmetic.ch",672],["pharmastar.it",673],["washingtonpost.com",674],["brillenplatz.de",675],["angelplatz.de",675],["dt.mef.gov.it",676],["raffeldeals.com",677],["stepstone.de",678],["kobo.com",679],["zoxs.de",681],["offistore.fi",682],["collinsaerospace.com",683],["radioapp.lv",686],["hagengrote.de",687],["hemden-meister.de",687],["vorteilshop.com",688],["capristores.gr",689],["getaround.com",691],["technomarket.bg",692],["epiphone.com",694],["gibson.com",694],["maestroelectronics.com",694],["cropp.com",[695,696]],["housebrand.com",[695,696]],["mohito.com",[695,696]],["autoczescizielonki.pl",697],["b-s.de",698],["novakid.pl",699],["piecesauto24.com",700],["earpros.com",701],["portalridice.cz",702],["kitsapcu.org",703],["nutsinbulk.*",704],["berlin-buehnen.de",705],["metropoliten.rs",706],["educa2.madrid.org",707],["immohal.de",708],["sourcepoint.theguardian.com",709],["rtlplay.be",710],["natgeotv.com",710],["llama.com",711],["meta.com",711],["setasdesevilla.com",712],["cruyff-foundation.org",713],["allianz.*",714],["energiedirect-bayern.de",715],["postnl.be",716],["postnl.nl",716],["sacyr.com",717],["volkswagen-newsroom.com",718],["openbank.*",719],["tagus-eoficina.grupogimeno.com",720],["tidal.com",721],["knax.de",722],["ordblindenetvaerket.dk",723],["boligbeton.dk",723],["dukh.dk",723],["pevgrow.com",724],["ya.ru",725],["ipolska24.pl",726],["17bankow.com",726],["kazimierzdolny.pl",726],["vpolshchi.pl",726],["dobreprogramy.pl",[726,727]],["essanews.com",726],["money.pl",726],["autokult.pl",726],["komorkomania.pl",726],["polygamia.pl",726],["autocentrum.pl",726],["homebook.pl",726],["domodi.pl",726],["jastrzabpost.pl",726],["open.fm",726],["gadzetomania.pl",726],["fotoblogia.pl",726],["abczdrowie.pl",726],["parenting.pl",726],["kafeteria.pl",726],["vibez.pl",726],["wakacje.pl",726],["extradom.pl",726],["totalmoney.pl",726],["superauto.pl",726],["nerwica.com",726],["forum.echirurgia.pl",726],["dailywrap.net",726],["pysznosci.pl",726],["genialne.pl",726],["finansowysupermarket.pl",726],["deliciousmagazine.pl",726],["audioteka.com",726],["easygo.pl",726],["so-magazyn.pl",726],["o2.pl",726],["pudelek.pl",726],["benchmark.pl",726],["wp.pl",726],["altibox.dk",728],["altibox.no",728],["talksport.com",729],["zuiderzeemuseum.nl",730],["gota.io",731],["nwzonline.de",732],["scaleway.com",733],["bistro.sk",734],["spk-schaumburg.de",735],["computerbase.de",736],["comdirect.de",737],["metro.co.uk",738],["imaios.com",739],["myprivacy.dpgmedia.nl",740],["myprivacy.dpgmedia.be",740],["www.dpgmediagroup.com",740],["exxen.com",741],["cbsnews.com",742],["infshop.fi",743]]);
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
