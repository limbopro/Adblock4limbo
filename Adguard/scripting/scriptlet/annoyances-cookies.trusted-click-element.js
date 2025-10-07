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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#CybotCookiebotDialogBodyButtonDecline"],["#pubtech-cmp button[aria-label=\"Continue without accepting\"]"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button[data-t=\"rejectAll\"]","","1000"],["#gdpr-banner-cmp-button","","1000"],["button[aria-label=\"Datenschutzbestimmungen und Einstellungen ablehnen\"]","","1200"],["#iubenda-cs-banner button.iubenda-cs-close-btn"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"consent\"]:not([class*=\"reject\"])"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","2000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["#qc-cmp2-container button#accept-btn"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1500"],["button[title=\"Zustimmen\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-e2e=\"pure-accept-ads\"]","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.js-alert-cookie-reject","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button[title=\"Accept & Continue\"]","","1000"],["button#ensRejectAll","","1500"],["button#ensSave","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],[".modal-actions-accept-btn","","2000"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button[id=\"ketch-banner-button-secondary\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Agree\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#btnAcceptPDPA","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],["button#acceptCookiesTerms","","1000"],["a.footer-cookies-button-save-all","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["body > div[class] > div[class] > div[class]:has(a[href*=\"holding.wp.pl\"]) > div[class] > div[class]:only-child > button:first-child"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"],["#cookie-consent-button","","1500"],["com-consent-layer >>> #cmpDenyAll","","2500"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"level1PrimaryButton-\"]:not([class*=\"reject\"])"],["div#continueWithoutAccepting","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["body > div.w-screen.p-\\[1\\.25rem\\].fixed.left-0.top-0.flex button:first-child + button"],["#ketch-banner-buttons-container-compact > button#ketch-banner-button-primary"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["heise.de",7],["theguardian.com",7],["bloomberg.com",[8,9]],["forbes.com",[8,81]],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,188]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,184]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["cdn.privacy-mgmt.com",[24,25,43,53,54,55,56,101,103,111,118,125,126,127,138,139,140,143,145,146,148,159,177,202,223,236,237,240,241,242,243,264,314,477,599,620,658,678]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,185]],["ubereats.com",[39,185]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["ilgiornale.it",44],["dimensione.com",45],["wero-wallet.eu",45],["everyeye.it",46],["pepper.pl",47],["dealabs.com",47],["hotukdeals.com",47],["chollometro.com",47],["preisjaeger.at",48],["mydealz.de",48],["kleinanzeigen.de",[49,50]],["105.net",51],["dailymail.co.uk",52],["telekom.com",57],["telekom.de",57],["abola.pt",58],["flytap.com",58],["ansons.de",58],["blick.ch",58],["buienradar.be",58],["crunchyroll.com",58],["digi24.ro",58],["digisport.ro",58],["digitalfoundry.net",58],["egx.net",58],["emirates.com",58],["eurogamer.it",58],["foto-erhardt.de",58],["gmx.*",58],["kizi.com",58],["mail.com",58],["mcmcomiccon.com",58],["nachrichten.at",58],["nintendolife.com",58],["oe24.at",58],["observatornews.ro",58],["paxsite.com",58],["peacocktv.com",58],["player.pl",58],["plus500.*",58],["pricerunner.com",58],["pricerunner.se",58],["pricerunner.dk",58],["proximus.be",[58,653]],["proximus.com",58],["purexbox.com",58],["pushsquare.com",58],["rugbypass.com",58],["southparkstudios.com",[58,297]],["southwest.com",58],["starwarscelebration.com",58],["sweatybetty.com",58],["theaa.ie",58],["thehaul.com",58],["timeextension.com",58],["travelandleisure.com",58],["tunein.com",58],["tvn24.pl",58],["uefa.com",58],["videoland.com",58],["wizzair.com",58],["wetter.at",58],["wowbiz.ro",58],["dicebreaker.com",[59,60]],["eurogamer.es",[59,60]],["eurogamer.net",[59,60]],["eurogamer.nl",[59,60]],["eurogamer.pl",[59,60]],["eurogamer.pt",[59,60]],["gamesindustry.biz",[59,60]],["reedpop.com",[59,60]],["rockpapershotgun.com",[59,60]],["thepopverse.com",[59,60]],["vg247.com",[59,60]],["videogameschronicle.com",[59,60]],["eurogamer.de",61],["roadtovr.com",62],["jotex.*",62],["mundodeportivo.com",[63,133]],["m.youtube.com",64],["www.youtube.com",64],["ohra.nl",65],["corriere.it",66],["gazzetta.it",66],["oggi.it",66],["cmp.sky.it",67],["tennisassa.fi",68],["formula1.com",69],["f1racing.pl",70],["music.amazon.*",[71,72]],["consent-pref.trustarc.com",73],["highlights.legaseriea.it",74],["calciomercato.com",74],["sosfanta.com",75],["chrono24.*",[76,77]],["wetter.com",78],["youmath.it",79],["pip.gov.pl",80],["dailybuzz.nl",82],["bnn.de",82],["dosenbach.ch",82],["dw.com",82],["kinepolis.*",82],["mediaite.com",82],["nzz.ch",82],["winfuture.de",82],["lippu.fi",82],["racingnews365.com",82],["reifendirekt.ch",82],["vaillant.*",82],["bauhaus.no",83],["bauhaus.se",83],["beko-group.de",83],["billiger.de",83],["burda.com",83],["vanharen.nl",83],["deichmann.com",[83,106,485]],["meraluna.de",83],["slashdot.org",83],["hermann-saunierduval.it",83],["protherm.cz",83],["saunierduval.es",83],["protherm.sk",83],["protherm.ua",83],["saunierduval.hu",83],["saunierduval.ro",83],["saunierduval.at",83],["awb.nl",83],["spar.hu",84],["group.vattenfall.com",84],["mediaset.it",85],["fortune.com",86],["ilrestodelcarlino.it",87],["quotidiano.net",87],["lanazione.it",87],["ilgiorno.it",87],["iltelegrafolivorno.it",87],["auto.it",88],["beauxarts.com",88],["beinsports.com",88],["bfmtv.com",[88,134]],["boursobank.com",88],["boursorama.com",[88,134]],["boursier.com",[88,230]],["brut.media",88],["canalplus.com",88],["decathlon.fr",[88,227]],["diverto.tv",88],["eden-park.com",88],["foodvisor.io",88],["franceinfo.fr",88],["frandroid.com",88],["jobijoba.*",88],["hotelsbarriere.com",88],["intersport.*",[88,199]],["idealista.it",88],["o2.fr",88],["lejdd.fr",[88,133]],["lechorepublicain.fr",88],["la-croix.com",88],["linfo.re",88],["lamontagne.fr",88],["laredoute.fr",88],["largus.fr",88],["leprogres.fr",88],["lesnumeriques.com",88],["libramemoria.com",88],["lopinion.fr",88],["marieclaire.fr",88],["maville.com",88],["michelin.*",88],["midilibre.fr",[88,682]],["meteofrance.com",88],["mondialtissus.fr",88],["orange.fr",88],["orpi.com",88],["oscaro.com",88],["ouest-france.fr",[88,102,134,683]],["parismatch.com",88],["pagesjaunes.fr",88],["programme-television.org",[88,134]],["publicsenat.fr",[88,134]],["rmcbfmplay.com",[88,134]],["science-et-vie.com",[88,133]],["seloger.com",88],["societe.com",88],["suzuki.fr",88],["sudouest.fr",88],["web-agri.fr",88],["nutri-plus.de",89],["americanairlines.*",90],["consent.capital.fr",91],["consent.programme.tv",91],["consent.voici.fr",91],["programme-tv.net",91],["cmpv2.finn.no",92],["cmp.tek.no",[93,94]],["cmp.e24.no",[93,94]],["minmote.no",[93,94]],["cmp.vg.no",[93,94]],["cloud.google.com",95],["developer.android.com",95],["registry.google",95],["safety.google",95],["huffingtonpost.fr",96],["rainews.it",97],["remarkable.com",98],["netzwelt.de",99],["money.it",100],["allocine.fr",102],["jeuxvideo.com",102],["ozap.com",102],["le10sport.com",102],["xataka.com",102],["cmp.fitbook.de",103],["cmp.autobild.de",103],["sourcepoint.sport.de",103],["cmp-sp.tagesspiegel.de",103],["cmp.bz-berlin.de",103],["cmp.cicero.de",103],["cmp.techbook.de",103],["cmp.stylebook.de",103],["cmp2.bild.de",103],["cmp2.freiepresse.de",103],["sourcepoint.wetter.de",103],["consent.finanzen.at",103],["consent.finanzen.net",103],["consent.up.welt.de",103],["sourcepoint.n-tv.de",103],["sourcepoint.kochbar.de",103],["sourcepoint.rtl.de",103],["cmp.computerbild.de",103],["cmp.petbook.de",103],["cmp-sp.siegener-zeitung.de",103],["cmp-sp.sportbuzzer.de",103],["klarmobil.de",103],["technikum-wien.at",104],["eneco.nl",105],["salomon.com",107],["blackpoolgazette.co.uk",108],["lep.co.uk",108],["northamptonchron.co.uk",108],["scotsman.com",108],["shieldsgazette.com",108],["thestar.co.uk",108],["portsmouth.co.uk",108],["sunderlandecho.com",108],["northernirelandworld.com",108],["3addedminutes.com",108],["anguscountyworld.co.uk",108],["banburyguardian.co.uk",108],["bedfordtoday.co.uk",108],["biggleswadetoday.co.uk",108],["bucksherald.co.uk",108],["burnleyexpress.net",108],["buxtonadvertiser.co.uk",108],["chad.co.uk",108],["daventryexpress.co.uk",108],["derbyshiretimes.co.uk",108],["derbyworld.co.uk",108],["derryjournal.com",108],["dewsburyreporter.co.uk",108],["doncasterfreepress.co.uk",108],["falkirkherald.co.uk",108],["fifetoday.co.uk",108],["glasgowworld.com",108],["halifaxcourier.co.uk",108],["harboroughmail.co.uk",108],["harrogateadvertiser.co.uk",108],["hartlepoolmail.co.uk",108],["hemeltoday.co.uk",108],["hucknalldispatch.co.uk",108],["lancasterguardian.co.uk",108],["leightonbuzzardonline.co.uk",108],["lincolnshireworld.com",108],["liverpoolworld.uk",108],["londonworld.com",108],["lutontoday.co.uk",108],["manchesterworld.uk",108],["meltontimes.co.uk",108],["miltonkeynes.co.uk",108],["newcastleworld.com",108],["newryreporter.com",108],["newsletter.co.uk",108],["northantstelegraph.co.uk",108],["northumberlandgazette.co.uk",108],["nottinghamworld.com",108],["peterboroughtoday.co.uk",108],["rotherhamadvertiser.co.uk",108],["stornowaygazette.co.uk",108],["surreyworld.co.uk",108],["thescarboroughnews.co.uk",108],["thesouthernreporter.co.uk",108],["totallysnookered.com",108],["wakefieldexpress.co.uk",108],["walesworld.com",108],["warwickshireworld.com",108],["wigantoday.net",108],["worksopguardian.co.uk",108],["yorkshireeveningpost.co.uk",108],["yorkshirepost.co.uk",108],["eurocard.com",109],["saseurobonusmastercard.se",110],["tver.jp",112],["linkedin.com",113],["elmundo.es",[114,134]],["expansion.com",114],["s-pankki.fi",115],["srf.ch",115],["alternate.de",115],["bayer04.de",115],["douglas.de",115],["dr-beckmann.com",115],["falke.com",115],["fitnessfirst.de",115],["flaschenpost.de",115],["gloeckle.de",115],["hornbach.nl",115],["hypofriend.de",115],["lactostop.de",115],["neumann.com",115],["post.ch",115],["postbank.de",115],["rts.ch",115],["zalando.*",115],["immowelt.de",116],["joyn.*",116],["morenutrition.de",116],["mapillary.com",117],["cmp.seznam.cz",119],["marca.com",120],["raiplay.it",121],["raiplaysound.it",121],["derstandard.at",122],["derstandard.de",122],["faz.net",122],["automoto.it",123],["ansa.it",123],["cdt.ch",123],["delladio.it",123],["huffingtonpost.it",123],["internazionale.it",123],["lastampa.it",123],["macitynet.it",123],["moto.it",123],["movieplayer.it",123],["multiplayer.it",123],["repubblica.it",123],["tomshw.it",123],["skuola.net",123],["spaziogames.it",123],["today.it",123],["tuttoandroid.net",123],["tuttotech.net",123],["ilgazzettino.it",124],["ilmessaggero.it",124],["ilsecoloxix.it",124],["privacy.motorradonline.de",127],["consent.watson.de",127],["consent.kino.de",127],["consent.desired.de",127],["cmpv2.fn.de",127],["spp.nextpit.de",127],["dailystar.co.uk",[128,129,130,131]],["mirror.co.uk",[128,129,130,131]],["idnes.cz",132],["20minutes.fr",133],["20minutos.es",133],["24sata.hr",133],["abc.es",133],["actu.fr",133],["antena3.com",133],["antena3internacional.com",133],["atresmedia.com",133],["atresmediapublicidad.com",133],["atresmediastudios.com",133],["atresplayer.com",133],["autopista.es",133],["belfasttelegraph.co.uk",133],["bemad.es",133],["bonduelle.it",133],["bonniernews.se",133],["bt.se",133],["cadenadial.com",133],["caracol.com.co",133],["cas.sk",133],["charentelibre.fr",133],["ciclismoafondo.es",133],["cnews.fr",133],["cope.es",133],["correryfitness.com",133],["courrier-picard.fr",133],["cuatro.com",133],["decathlon.nl",133],["decathlon.pl",133],["di.se",133],["diariocordoba.com",133],["diariodenavarra.es",133],["diariosur.es",133],["diariovasco.com",133],["diepresse.com",133],["divinity.es",133],["dn.se",133],["dnevnik.hr",133],["dumpert.nl",133],["ebuyclub.com",133],["edreams.de",133],["edreams.net",133],["elcomercio.es",133],["elconfidencial.com",133],["elcorreo.com",133],["eldesmarque.com",133],["eldiario.es",133],["eldiariomontanes.es",133],["elespanol.com",133],["elle.fr",133],["elpais.com",133],["elperiodico.com",133],["elperiodicodearagon.com",133],["elplural.com",133],["energytv.es",133],["engadget.com",133],["es.ara.cat",133],["euronews.com",133],["europafm.com",133],["expressen.se",133],["factoriadeficcion.com",133],["filmstarts.de",133],["flooxernow.com",133],["folkbladet.nu",133],["footmercato.net",133],["france.tv",133],["france24.com",133],["fussballtransfers.com",133],["ghacks.net",133],["gva.be",133],["hbvl.be",133],["heraldo.es",133],["hoy.es",133],["ideal.es",133],["idealista.pt",133],["krone.at",133],["kurier.at",133],["lacoste.com",133],["ladepeche.fr",133],["lalibre.be",133],["lanouvellerepublique.fr",133],["larazon.es",133],["lasexta.com",133],["lasprovincias.es",133],["latribune.fr",133],["lavanguardia.com",133],["laverdad.es",133],["lavozdegalicia.es",133],["leboncoin.fr",133],["lecturas.com",133],["ledauphine.com",133],["lejsl.com",133],["leparisien.fr",133],["lesoir.be",133],["letelegramme.fr",133],["libremercado.com",133],["localeyes.dk",133],["los40.com",133],["lotoquebec.com",133],["lunion.fr",133],["m6.fr",133],["marianne.cz",133],["marmiton.org",133],["mediaset.es",133],["melodia-fm.com",133],["metronieuws.nl",133],["moviepilot.de",133],["mtmad.es",133],["multilife.com.pl",133],["naszemiasto.pl",133],["nationalgeographic.com.es",133],["nicematin.com",133],["nieuwsblad.be",133],["notretemps.com",133],["numerama.com",133],["okdiario.com",133],["ondacero.es",133],["podiumpodcast.com",133],["portail.lotoquebec.com",133],["profil.at",133],["public.fr",133],["publico.es",133],["radiofrance.fr",133],["rankia.com",133],["rfi.fr",133],["rossmann.pl",133],["rtbf.be",[133,227]],["rtl.lu",133],["sensacine.com",133],["sfgame.net",133],["shure.com",133],["silicon.es",133],["sncf-connect.com",133],["sport.es",133],["sydsvenskan.se",133],["techcrunch.com",133],["telegraaf.nl",133],["telequebec.tv",133],["tf1.fr",133],["tradingsat.com",133],["trailrun.es",133],["video-streaming.orange.fr",133],["xpress.fr",133],["laprovincia.es",134],["informacion.es",134],["tportal.hr",134],["ivoox.com",134],["as.com",134],["slam.nl",134],["bienpublic.com",134],["funradio.fr",134],["gamepro.de",[134,196,197]],["lemon.fr",134],["lexpress.fr",134],["shadow.tech",134],["letemps.ch",134],["mein-mmo.de",134],["heureka.sk",134],["film.at",134],["dhnet.be",134],["lesechos.fr",[134,232]],["marianne.net",[134,227]],["jeanmarcmorandini.com",[134,228]],["dna.fr",134],["sudinfo.be",134],["europe1.fr",[134,228]],["rtl.be",[134,227]],["reviewingthebrew.com",134],["jaysjournal.com",134],["reignoftroy.com",134],["ryobitools.eu",[135,136]],["americanexpress.com",137],["consent.radiotimes.com",140],["sp-consent.szbz.de",141],["cmp.omni.se",142],["cmp.svd.se",142],["cmp.aftonbladet.se",142],["cmp.tv.nu",142],["consent.economist.com",144],["studentagency.cz",144],["cmpv2.foundryco.com",145],["cmpv2.infoworld.com",145],["cmpv2.arnnet.com.au",145],["sp-cdn.pcgames.de",146],["sp-cdn.pcgameshardware.de",146],["consentv2.sport1.de",146],["cmp.mz.de",146],["cmpv2.tori.fi",147],["consent.spielaffe.de",149],["bondekompaniet.no",150],["degiro.*",150],["epochtimes.de",150],["vikingline.com",150],["tfl.gov.uk",150],["drklein.de",150],["hildegardis-krankenhaus.de",150],["kleer.se",150],["lekiaviation.com",150],["lotto.pl",150],["mineralstech.com",150],["volunteer.digitalboost.org.uk",150],["starhotels.com",150],["tefl.com",150],["universumglobal.com",150],["tui.com",151],["rexel.*",152],["csob.sk",153],["greenstuffworld.com",154],["morele.net",[155,156]],["1und1.de",157],["infranken.de",158],["cmp.tvtoday.de",159],["cmp.tvspielfilm.de",159],["cmp.bunte.de",159],["cmp.chip.de",159],["cmp.focus.de",[159,511]],["estadiodeportivo.com",160],["tameteo.*",160],["tempo.pt",160],["meteored.*",160],["pogoda.com",160],["yourweather.co.uk",160],["tempo.com",160],["theweather.net",160],["tiempo.com",160],["ilmeteo.net",160],["daswetter.com",160],["kicker.de",161],["formulatv.com",162],["web.de",163],["lefigaro.fr",164],["linternaute.com",165],["consent.caminteresse.fr",166],["volksfreund.de",167],["rp-online.de",167],["dailypost.co.uk",168],["the-express.com",168],["vide-greniers.org",168],["dailyrecord.co.uk",169],["bluray-disc.de",170],["elio-systems.com",170],["stagatha-fachklinik.de",170],["tarife.mediamarkt.de",170],["lz.de",170],["gaggenau.com",170],["saturn.de",171],["eltiempo.es",[172,173]],["otempo.pt",174],["atlasformen.*",175],["cmp-sp.goettinger-tageblatt.de",176],["cmp-sp.saechsische.de",176],["cmp-sp.ln-online.de",176],["cz.de",176],["dewezet.de",176],["dnn.de",176],["haz.de",176],["gnz.de",176],["landeszeitung.de",176],["lvz.de",176],["maz-online.de",176],["ndz.de",176],["op-marburg.de",176],["ostsee-zeitung.de",176],["paz-online.de",176],["reisereporter.de",176],["rga.de",176],["rnd.de",176],["siegener-zeitung.de",176],["sn-online.de",176],["solinger-tageblatt.de",176],["sportbuzzer.de",176],["szlz.de",176],["tah.de",176],["torgauerzeitung.de",176],["waz-online.de",176],["privacy.maennersache.de",176],["sinergy.ch",178],["agglo-valais-central.ch",178],["biomedcentral.com",179],["hsbc.*",180],["hsbcnet.com",180],["hsbcinnovationbanking.com",180],["create.hsbc",180],["gbm.hsbc.com",180],["hsbc.co.uk",181],["internationalservices.hsbc.com",181],["history.hsbc.com",181],["about.hsbc.co.uk",182],["privatebanking.hsbc.com",183],["independent.co.uk",186],["privacy.crash.net",186],["the-independent.com",187],["argos.co.uk",189],["poco.de",[190,191]],["moebelix.*",190],["moemax.*",190],["xxxlutz.*",190],["xxxlesnina.*",190],["moebel24.ch",191],["meubles.fr",191],["meubelo.nl",191],["moebel.de",191],["lipo.ch",192],["schubiger.ch",193],["aedt.de",194],["berlin-live.de",194],["bike-magazin.de",194],["connect.de",194],["gutefrage.net",194],["insideparadeplatz.ch",194],["morgenpost.de",194],["thueringen24.de",194],["pdfupload.io",195],["gamestar.de",[196,197,236]],["verksamt.se",198],["acmemarkets.com",199],["amtrak.com",199],["beko.com",199],["bepanthen.com.au",199],["berocca.com.au",199],["booking.com",199],["carrefour.fr",199],["centrum.sk",199],["claratyne.com.au",199],["credit-suisse.com",199],["ceskatelevize.cz",199],["deporvillage.*",199],["de.vanguard",199],["dhl.de",199],["digikey.*",199],["drafthouse.com",199],["dunelm.com",199],["eurosport.fr",199],["fello.se",199],["fielmann.*",199],["flashscore.fr",199],["flightradar24.com",199],["fnac.es",199],["foodandwine.com",199],["fourseasons.com",199],["khanacademy.org",199],["konami.com",199],["jll.*",199],["jobs.redbull.com",199],["hellenicbank.com",199],["gemini.pl",199],["groceries.asda.com",199],["lamborghini.com",199],["menshealth.com",199],["n26.com",199],["nintendo.com",199],["nokia.com",199],["oneweb.net",199],["omnipod.com",199],["oralb.*",199],["panasonic.com",199],["parkside-diy.com",199],["pluto.tv",199],["popularmechanics.com",199],["polskieradio.pl",199],["pringles.com",199],["questdiagnostics.com",199],["radissonhotels.com",199],["ricardo.ch",199],["rockstargames.com",199],["rte.ie",199],["salesforce.com",199],["samsonite.*",199],["spiele.heise.de",199],["spirit.com",199],["stenaline.co.uk",199],["swisscom.ch",199],["swisspass.ch",199],["technologyfromsage.com",199],["telenet.be",199],["tntsports.co.uk",199],["theepochtimes.com",199],["toujeo.com",199],["uber-platz.de",199],["vinted.com",199],["wallapop.com",199],["wickes.co.uk",199],["workingtitlefilms.com",199],["vattenfall.de",199],["winparts.fr",199],["yoigo.com",199],["zoominfo.com",199],["allegiantair.com",200],["hallmarkchannel.com",200],["incorez.com",200],["noovle.com",200],["otter.ai",200],["plarium.com",200],["telsy.com",200],["timenterprise.it",200],["tim.it",200],["tradersunion.com",200],["fnac.*",200],["yeti.com",200],["here.com",[201,691]],["vodafone.com",201],["cmp.heise.de",[203,204]],["cmp.am-online.com",203],["cmp.motorcyclenews.com",203],["consent.newsnow.co.uk",203],["cmp.todays-golfer.com",203],["koeser.com",205],["shop.schaette-pferd.de",205],["schaette.de",205],["central-bb.de",206],["fitnessfoodcorner.de",207],["kuehlungsborn.de",208],["espressocoffeeshop.com",209],["brainmarket.pl",210],["getroots.app",211],["cart-in.re",[212,616]],["prestonpublishing.pl",213],["zara.com",214],["lepermislibre.fr",214],["negociardivida.spcbrasil.org.br",215],["pons.com",216],["adidas.*",217],["privacy.topreality.sk",218],["privacy.autobazar.eu",218],["vu.lt",219],["adnkronos.com",[220,221]],["cornwalllive.com",[220,221]],["cyprus-mail.com",[220,221]],["einthusan.tv",[220,221]],["informazione.it",[220,221]],["mymovies.it",[220,221]],["tuttoeuropei.com",[220,221]],["video.lacnews24.it",[220,221]],["protothema.gr",220],["flash.gr",220],["taxscouts.com",222],["online.no",224],["telenor.no",224],["austrian.com",225],["lufthansa.com",225],["kampfkunst-herz.de",226],["glow25.de",226],["h-f.at",226],["hornetsecurity.com",226],["kayzen.io",226],["wasserkunst-hamburg.de",226],["zahnspange-oelde.de",226],["bnc.ca",227],["egora.fr",227],["engelvoelkers.com",227],["estrategiasdeinversion.com",227],["festo.com",227],["francebleu.fr",227],["francemediasmonde.com",227],["geny.com",227],["giphy.com",227],["idealista.com",227],["infolibre.es",227],["inpost.pl",227],["information.tv5monde.com",227],["ing.es",227],["knipex.de",227],["laprovence.com",227],["lemondeinformatique.fr",227],["libertaddigital.com",227],["mappy.com",227],["orf.at",227],["philibertnet.com",227],["researchgate.net",227],["standaard.be",227],["stroilioro.com",227],["taxfix.de",227],["telecinco.es",227],["vistaalegre.com",227],["zimbra.free.fr",227],["usinenouvelle.com",229],["reussir.fr",231],["bruendl.at",233],["latamairlines.com",234],["elisa.ee",235],["baseendpoint.brigitte.de",236],["baseendpoint.gala.de",236],["baseendpoint.haeuser.de",236],["baseendpoint.stern.de",236],["baseendpoint.urbia.de",236],["cmp.tag24.de",236],["cmp-sp.handelsblatt.com",236],["cmpv2.berliner-zeitung.de",236],["golem.de",236],["consent.t-online.de",236],["sp-consent.stuttgarter-nachrichten.de",237],["sp-consent.stuttgarter-zeitung.de",237],["regjeringen.no",238],["sp-manager-magazin-de.manager-magazin.de",239],["consent.11freunde.de",239],["wallester.com",244],["centrum24.pl",245],["replay.lsm.lv",246],["ltv.lsm.lv",246],["bernistaba.lsm.lv",246],["verl.de",247],["cubo-sauna.de",247],["mbl.is",247],["auto-medienportal.net",247],["mobile.de",248],["cookist.it",249],["fanpage.it",249],["geopop.it",249],["lexplain.it",249],["royalmail.com",250],["gmx.net",251],["gmx.ch",252],["mojehobby.pl",253],["super-hobby.*",253],["sp.stylevamp.de",[254,255]],["cmp.wetteronline.de",254],["sp.stylevamp.com",255],["audi.*",[256,257]],["easyjet.com",256],["experian.co.uk",256],["postoffice.co.uk",256],["tescobank.com",256],["internetaptieka.lv",[258,259]],["nike.com",260],["wells.pt",261],["dskdirect.bg",262],["cmpv2.dba.dk",263],["spcmp.crosswordsolver.com",264],["ecco.com",265],["georgjensen.com",265],["thomann.*",266],["landkreis-kronach.de",267],["effectiefgeven.be",268],["northcoast.com",268],["chaingpt.org",268],["bandenconcurrent.nl",269],["bandenexpert.be",269],["reserved.com",270],["metro.it",271],["makro.es",271],["metro.sk",271],["metro-cc.hr",271],["makro.nl",271],["metro.bg",271],["metro.at",271],["metro-tr.com",271],["metro.de",271],["metro.fr",271],["makro.cz",271],["metro.ro",271],["makro.pt",271],["makro.pl",271],["sklepy-odido.pl",271],["rastreator.com",271],["metro.ua",272],["metro.rs",272],["metro-kz.com",272],["metro.md",272],["metro.hu",272],["metro-cc.ru",272],["metro.pk",272],["balay.es",273],["constructa.com",273],["dafy-moto.com",274],["akku-shop.nl",275],["akkushop-austria.at",275],["akkushop-b2b.de",275],["akkushop.de",275],["akkushop.dk",275],["batterie-boutique.fr",275],["akkushop-schweiz.ch",276],["evzuttya.com.ua",277],["eobuv.cz",277],["eobuwie.com.pl",277],["ecipele.hr",277],["eavalyne.lt",277],["chaussures.fr",277],["ecipo.hu",277],["eobuv.sk",277],["epantofi.ro",277],["epapoutsia.gr",277],["escarpe.it",277],["eschuhe.de",277],["obuvki.bg",277],["zapatos.es",277],["swedbank.ee",278],["mudanzavila.es",279],["bienmanger.com",280],["gesipa.*",281],["gesipausa.com",281],["beckhoff.com",281],["zitekick.dk",282],["eltechno.dk",282],["okazik.pl",282],["batteryempire.*",283],["maxi.rs",284],["garmin.com",285],["invisalign.*",285],["one4all.ie",285],["osprey.com",285],["wideroe.no",286],["bmw.*",287],["kijk.nl",288],["nordania.dk",289],["danskebank.*",289],["danskeci.com",289],["danica.dk",289],["dehn.*",290],["gewerbegebiete.de",291],["cordia.fr",292],["vola.fr",293],["lafi.fr",294],["skyscanner.*",295],["coolblue.*",296],["chipotle.com",297],["sanareva.*",298],["atida.fr",298],["bbva.*",299],["bbvauk.com",299],["expertise.unimi.it",300],["altenberg.de",301],["vestel.es",302],["tsb.co.uk",303],["buienradar.nl",[304,305]],["linsenplatz.de",306],["budni.de",307],["erstecardclub.hr",307],["teufel.de",[308,309]],["abp.nl",310],["simplea.sk",311],["flip.bg",312],["kiertokanki.com",313],["leirovins.be",315],["vias.be",316],["edf.fr",317],["virbac.com",317],["diners.hr",317],["squarehabitat.fr",317],["arbitrobancariofinanziario.it",318],["ivass.it",318],["economiapertutti.bancaditalia.it",318],["smit-sport.de",319],["gekko-computer.de",319],["jysk.al",320],["go-e.com",321],["malerblatt-medienservice.de",322],["architekturbuch.de",322],["medienservice-holz.de",322],["leuchtstark.de",322],["casius.nl",323],["coolinarika.com",324],["giga-hamburg.de",324],["vakgaragevannunen.nl",324],["fortuluz.es",324],["finna.fi",324],["eurogrow.es",324],["paid.ai",324],["topnatur.cz",324],["topnatur.eu",324],["vakgarage.nl",324],["whufc.com",324],["zomaplast.cz",324],["envafors.dk",325],["dabbolig.dk",[326,327]],["daruk-emelok.hu",328],["exakta.se",329],["larca.de",330],["roli.com",331],["okazii.ro",332],["lr-shop-direkt.de",332],["portalprzedszkolny.pl",332],["tgvinoui.sncf",333],["l-bank.de",334],["interhyp.de",335],["indigoneo.*",336],["transparency.meta.com",337],["dojusagro.lt",338],["eok.ee",338],["kripa.it",338],["nextdaycatering.co.uk",338],["safran-group.com",338],["sr-ramenendeuren.be",338],["ilovefreegle.org",338],["tribexr.com",338],["understandingsociety.ac.uk",338],["bestbuycyprus.com",339],["strato.*",340],["strato-hosting.co.uk",340],["auto.de",341],["contentkingapp.com",342],["comune.palermo.it",343],["get-in-engineering.de",344],["spp.nextpit.com",345],["spp.nextpit.es",346],["spp.nextpit.it",347],["spp.nextpit.com.br",348],["spp.nextpit.fr",349],["otterbox.com",350],["stoertebeker-brauquartier.com",351],["stoertebeker.com",351],["stoertebeker-eph.com",351],["aparts.pl",352],["sinsay.com",[353,354]],["benu.cz",355],["stockholmresilience.org",356],["ludvika.se",356],["kammarkollegiet.se",356],["cazenovecapital.com",357],["statestreet.com",358],["beopen.lv",359],["cesukoncertzale.lv",360],["dodo.fr",361],["makelaarsland.nl",362],["bezirk-schwaben.de",363],["dorfen.de",363],["nutsinbulk.co.uk",364],["bricklink.com",365],["bestinver.es",366],["icvs2023.conf.tuwien.ac.at",367],["racshop.co.uk",[368,369]],["baabuk.com",370],["sapien.io",370],["tradedoubler.com",370],["app.lepermislibre.fr",371],["multioferta.es",372],["testwise.com",[373,374]],["tonyschocolonely.com",375],["fitplus.is",375],["fransdegrebber.nl",375],["lilliputpress.ie",375],["lexibo.com",375],["marin-milou.com",375],["dare2tri.com",375],["t3micro.*",375],["la-vie-naturelle.com",[376,377]],["inovelli.com",378],["uonetplus.vulcan.net.pl",[379,380]],["consent.helagotland.se",381],["oper.koeln",[382,383]],["deezer.com",384],["hoteldesartssaigon.com",385],["autoritedelaconcurrence.fr",386],["groupeonepoint.com",386],["geneanet.org",386],["carrieres.groupegalerieslafayette.com",386],["immo-banques.fr",386],["lingvanex.com",386],["turncamp.com",387],["ejobs.ro",[388,389]],["kupbilecik.*",[390,391]],["coolbe.com",392],["serienjunkies.de",393],["computerhoy.20minutos.es",394],["clickskeks.at",395],["clickskeks.de",395],["abt-sportsline.de",395],["exemplary.ai",396],["forbo.com",396],["stores.sk",396],["nerdstar.de",396],["prace.cz",396],["profesia.sk",396],["profesia.cz",396],["pracezarohem.cz",396],["atmoskop.cz",396],["seduo.sk",396],["seduo.cz",396],["teamio.com",396],["arnold-robot.com",396],["cvonline.lt",396],["cv.lv",396],["cv.ee",396],["dirbam.lt",396],["visidarbi.lv",396],["otsintood.ee",396],["webtic.it",396],["gerth.de",397],["pamiatki.pl",398],["initse.com",399],["salvagny.org",400],["augsburger-allgemeine.de",401],["stabila.com",402],["stwater.co.uk",403],["suncalc.org",[404,405]],["swisstph.ch",406],["taxinstitute.ie",407],["get-in-it.de",408],["tempcover.com",[409,410]],["guildford.gov.uk",411],["easyparts.*",[412,413]],["easyparts-recambios.es",[412,413]],["easyparts-rollerteile.de",[412,413]],["drimsim.com",414],["canyon.com",[415,416]],["vevovo.be",[417,418]],["vendezvotrevoiture.be",[417,418]],["wirkaufendeinauto.at",[417,418]],["vikoberallebiler.dk",[417,418]],["wijkopenautos.nl",[417,418]],["vikoperdinbil.se",[417,418]],["noicompriamoauto.it",[417,418]],["vendezvotrevoiture.fr",[417,418]],["compramostucoche.es",[417,418]],["wijkopenautos.be",[417,418]],["auto-doc.*",419],["autodoc.*",419],["autodoc24.*",419],["topautoosat.fi",419],["autoteiledirekt.de",419],["autoczescionline24.pl",419],["tuttoautoricambi.it",419],["onlinecarparts.co.uk",419],["autoalkatreszek24.hu",419],["autodielyonline24.sk",419],["reservdelar24.se",419],["pecasauto24.pt",419],["reservedeler24.co.no",419],["piecesauto24.lu",419],["rezervesdalas24.lv",419],["besteonderdelen.nl",419],["recambioscoche.es",419],["antallaktikaexartimata.gr",419],["piecesauto.fr",419],["teile-direkt.ch",419],["lpi.org",420],["divadelniflora.cz",421],["mahle-aftermarket.com",422],["refurbed.*",423],["eingutertag.org",424],["flyingtiger.com",[424,567]],["borgomontecedrone.it",424],["maharishistore.com",424],["recaro-shop.com",424],["gartenhotel-crystal.at",424],["fayn.com",425],["serica-watches.com",425],["sklavenitis.gr",426],["eam-netz.de",427],["umicore.*",428],["veiligverkeer.be",428],["vsv.be",428],["dehogerielen.be",428],["gera.de",429],["mfr-chessy.fr",430],["mfr-lamure.fr",430],["mfr-saint-romain.fr",430],["mfr-lapalma.fr",430],["mfrvilliemorgon.asso.fr",430],["mfr-charentay.fr",430],["mfr.fr",430],["nationaltrust.org.uk",431],["hej-natural.*",432],["ib-hansmeier.de",433],["rsag.de",434],["esaa-eu.org",434],["aknw.de",434],["answear.*",435],["theprotocol.it",[436,437]],["lightandland.co.uk",438],["etransport.pl",439],["wohnen-im-alter.de",440],["johnmuirhealth.com",[441,442]],["markushaenni.com",443],["airbaltic.com",444],["gamersgate.com",444],["zorgzaam010.nl",445],["etos.nl",446],["paruvendu.fr",447],["privacy.bazar.sk",448],["hennamorena.com",449],["newsello.pl",450],["porp.pl",451],["golfbreaks.com",452],["lieferando.de",453],["just-eat.*",453],["justeat.*",453],["pyszne.pl",453],["lieferando.at",453],["takeaway.com",453],["thuisbezorgd.nl",453],["holidayhypermarket.co.uk",454],["unisg.ch",455],["wassererleben.ch",455],["psgaz.pl",456],["play-asia.com",457],["centralthe1card.com",458],["atu.de",459],["atu-flottenloesungen.de",459],["but.fr",459],["edeka.de",459],["fortuneo.fr",459],["maif.fr",459],["meteo.tf1.fr",459],["particuliers.sg.fr",459],["sparkasse.at",459],["group.vig",459],["tf1info.fr",459],["dpdgroup.com",460],["dpd.com",460],["cosmosdirekt.de",460],["bstrongoutlet.pt",461],["isarradweg.de",[462,463]],["flaxmanestates.com",463],["inland-casas.com",463],["finlayson.fi",[464,465]],["cowaymega.ca",[464,465]],["arktis.de",466],["desktronic.de",466],["belleek.com",466],["brauzz.com",466],["cowaymega.com",466],["dockin.de",466],["dryrobe.com",[466,467]],["formswim.com",466],["hairtalk.se",466],["hallmark.co.uk",[466,467]],["loopearplugs.com",[466,467]],["oleus.com",466],["peopleofshibuya.com",466],["pullup-dip.com",466],["sanctum.shop",466],["tbco.com",466],["desktronic.*",467],["hq-germany.com",467],["tepedirect.com",467],["maxi-pet.ro",467],["paper-republic.com",467],["pullup-dip.*",467],["vitabiotics.com",467],["smythstoys.com",468],["beam.co.uk",[469,470]],["autobahn.de",471],["krakow.pl",472],["shop.app",473],["shopify.com",473],["wufoo.com",474],["consent.dailymotion.com",475],["laposte.fr",475],["help.instagram.com",476],["consent-manager.thenextweb.com",478],["consent-cdn.zeit.de",479],["coway-usa.com",480],["steiners.shop",481],["ecmrecords.com",482],["invidis.com",482],["malaikaraiss.com",482],["koch-mit.de",482],["zeitreisen.zeit.de",482],["wefashion.com",483],["merkur.dk",484],["ionos.*",486],["omegawatches.com",487],["carefully.be",488],["aerotime.aero",488],["rocket-league.com",489],["dws.com",490],["bosch-homecomfort.com",491],["elmleblanc-optibox.fr",491],["monservicechauffage.fr",491],["boschrexroth.com",491],["home-connect.com",492],["lowrider.at",[493,494]],["mesto.de",495],["intersport.gr",496],["intersport.bg",496],["intersport.com.cy",496],["intersport.ro",496],["ticsante.com",497],["techopital.com",497],["millenniumprize.org",498],["hepster.com",499],["peterstaler.de",500],["blackforest-still.de",500],["tiendaplayaundi.com",501],["ajtix.co.uk",502],["raja.fr",503],["rajarani.de",503],["rajapack.*",[503,504]],["avery-zweckform.com",505],["1xinternet.com",505],["futterhaus.de",505],["dasfutterhaus.at",505],["frischeparadies.de",505],["fmk-steuer.de",505],["selgros.de",505],["transgourmet.de",505],["mediapart.fr",506],["athlon.com",507],["alumniportal-deutschland.org",508],["snoopmedia.com",508],["myguide.de",508],["daad.de",508],["cornelsen.de",[509,510]],["vinmonopolet.no",512],["tvp.info",513],["tvp.pl",513],["tvpworld.com",513],["brtvp.pl",513],["tvpparlament.pl",513],["belsat.eu",513],["warnung.bund.de",514],["mediathek.lfv-bayern.de",515],["allegro.*",516],["allegrolokalnie.pl",516],["ceneo.pl",516],["czc.cz",516],["eon.pl",[517,518]],["ylasatakunta.fi",[519,520]],["mega-image.ro",521],["louisvuitton.com",522],["bodensee-airport.eu",523],["department56.com",524],["allendesignsstudio.com",524],["designsbylolita.co",524],["shop.enesco.com",524],["savoriurbane.com",525],["miumiu.com",526],["church-footwear.com",526],["clickdoc.fr",527],["car-interface.com",528],["monolithdesign.it",528],["thematchahouse.com",528],["smileypack.de",[529,530]],["finom.co",531],["orange.es",[532,533]],["fdm-travel.dk",534],["hummel.dk",534],["jysk.nl",534],["power.no",534],["skousen.dk",534],["velliv.dk",534],["whiteaway.com",534],["whiteaway.no",534],["whiteaway.se",534],["skousen.no",534],["energinet.dk",534],["elkjop.no",534],["medimax.de",535],["costautoricambi.com",536],["lotto.it",536],["readspeaker.com",536],["team.blue",536],["ibistallinncenter.ee",537],["aaron.ai",538],["futureverse.com",539],["tandem.co.uk",539],["insights.com",540],["thebathcollection.com",541],["coastfashion.com",[542,543]],["oasisfashion.com",[542,543]],["warehousefashion.com",[542,543]],["misspap.com",[542,543]],["karenmillen.com",[542,543]],["boohooman.com",[542,543]],["hdt.de",544],["wolt.com",545],["xohotels.com",546],["sim24.de",547],["tnt.com",548],["uza.be",549],["uzafoundation.be",549],["uzajobs.be",549],["bergzeit.*",[550,551]],["cinemas-lumiere.com",552],["cdiscount.com",553],["brabus.com",554],["roborock.com",555],["strumentimusicali.net",556],["maisonmargiela.com",557],["webfleet.com",558],["dragonflyshipping.ca",559],["broekhuis.nl",560],["groningenairport.nl",560],["nemck.cz",561],["zdfheute.de",562],["sap-press.com",563],["roughguides.com",[564,565]],["korvonal.com",566],["rexbo.*",568],["itau.com.br",569],["bbg.gv.at",570],["portal.taxi.eu",571],["topannonces.fr",572],["homap.fr",573],["artifica.fr",574],["plan-interactif.com",574],["ville-cesson.fr",574],["moismoliere.com",575],["unihomes.co.uk",576],["bkk.hu",577],["coiffhair.com",578],["ptc.eu",579],["ziegert-group.com",[580,688]],["lassuranceretraite.fr",581],["interieur.gouv.fr",581],["toureiffel.paris",581],["economie.gouv.fr",581],["education.gouv.fr",581],["livoo.fr",581],["su.se",581],["zappo.fr",581],["smdv.de",582],["digitalo.de",582],["petiteamelie.*",583],["mojanorwegia.pl",584],["koempf24.ch",[585,586]],["teichitekten24.de",[585,586]],["koempf24.de",[585,586]],["wolff-finnhaus-shop.de",[585,586]],["asnbank.nl",587],["blgwonen.nl",587],["regiobank.nl",587],["snsbank.nl",587],["vulcan.net.pl",[588,589]],["ogresnovads.lv",590],["partenamut.be",591],["pirelli.com",592],["unicredit.it",593],["effector.pl",594],["zikodermo.pl",[595,596]],["devolksbank.nl",597],["caixabank.es",598],["cyberport.de",600],["cyberport.at",600],["slevomat.cz",601],["kfzparts24.de",602],["runnersneed.com",603],["aachener-zeitung.de",604],["sportpursuit.com",605],["druni.es",[606,617]],["druni.pt",[606,617]],["delta.com",607],["onliner.by",[608,609]],["vejdirektoratet.dk",610],["usaa.com",611],["consorsbank.de",612],["metroag.de",613],["kupbilecik.pl",614],["oxfordeconomics.com",615],["routershop.nl",616],["woo.pt",616],["e-jumbo.gr",618],["alza.*",619],["rmf.fm",621],["rmf24.pl",621],["tracfone.com",622],["lequipe.fr",623],["global.abb",624],["gala.fr",625],["purepeople.com",626],["3sat.de",627],["zdf.de",627],["filmfund.lu",628],["welcometothejungle.com",628],["triblive.com",629],["rai.it",630],["fbto.nl",631],["europa.eu",632],["caisse-epargne.fr",633],["banquepopulaire.fr",633],["bigmammagroup.com",634],["studentagency.sk",634],["studentagency.eu",634],["winparts.be",635],["winparts.nl",635],["winparts.eu",636],["winparts.ie",636],["winparts.se",636],["sportano.*",[637,638]],["crocs.*",639],["chronext.ch",640],["chronext.de",640],["chronext.at",640],["chronext.com",641],["chronext.co.uk",641],["chronext.fr",642],["chronext.nl",643],["chronext.it",644],["galerieslafayette.com",645],["bazarchic.com",646],["stilord.*",647],["tiko.pt",648],["nsinternational.com",649],["meinbildkalender.de",650],["gls-group.com",651],["gls-group.eu",651],["univie.ac.at",651],["chilis.com",652],["account.bhvr.com",654],["everand.com",654],["lucidchart.com",654],["intercars.ro",[654,655]],["scribd.com",654],["guidepoint.com",654],["erlebnissennerei-zillertal.at",656],["hintertuxergletscher.at",656],["tiwag.at",656],["playseatstore.com",657],["swiss-sport.tv",659],["targobank-magazin.de",660],["zeit-verlagsgruppe.de",660],["online-physiotherapie.de",660],["kieferorthopaede-freisingsmile.de",661],["nltraining.nl",662],["kmudigital.at",663],["mintysquare.com",664],["consent.thetimes.com",665],["cadenaser.com",666],["berlinale.de",667],["lebonlogiciel.com",668],["iberiaexpress.com",669],["easycosmetic.ch",670],["pharmastar.it",671],["washingtonpost.com",672],["brillenplatz.de",673],["angelplatz.de",673],["dt.mef.gov.it",674],["raffeldeals.com",675],["stepstone.de",676],["kobo.com",677],["zoxs.de",679],["offistore.fi",680],["collinsaerospace.com",681],["radioapp.lv",684],["hagengrote.de",685],["hemden-meister.de",685],["vorteilshop.com",686],["capristores.gr",687],["getaround.com",689],["technomarket.bg",690],["epiphone.com",692],["gibson.com",692],["maestroelectronics.com",692],["cropp.com",[693,694]],["housebrand.com",[693,694]],["mohito.com",[693,694]],["autoczescizielonki.pl",695],["b-s.de",696],["novakid.pl",697],["piecesauto24.com",698],["earpros.com",699],["portalridice.cz",700],["kitsapcu.org",701],["nutsinbulk.*",702],["berlin-buehnen.de",703],["metropoliten.rs",704],["educa2.madrid.org",705],["immohal.de",706],["sourcepoint.theguardian.com",707],["rtlplay.be",708],["natgeotv.com",708],["llama.com",709],["meta.com",709],["setasdesevilla.com",710],["cruyff-foundation.org",711],["allianz.*",712],["energiedirect-bayern.de",713],["postnl.be",714],["postnl.nl",714],["sacyr.com",715],["volkswagen-newsroom.com",716],["openbank.*",717],["tagus-eoficina.grupogimeno.com",718],["tidal.com",719],["knax.de",720],["ordblindenetvaerket.dk",721],["boligbeton.dk",721],["dukh.dk",721],["pevgrow.com",722],["ya.ru",723],["ipolska24.pl",724],["17bankow.com",724],["kazimierzdolny.pl",724],["vpolshchi.pl",724],["dobreprogramy.pl",[724,725]],["essanews.com",724],["money.pl",724],["autokult.pl",724],["komorkomania.pl",724],["polygamia.pl",724],["autocentrum.pl",724],["homebook.pl",724],["domodi.pl",724],["jastrzabpost.pl",724],["open.fm",724],["gadzetomania.pl",724],["fotoblogia.pl",724],["abczdrowie.pl",724],["parenting.pl",724],["kafeteria.pl",724],["vibez.pl",724],["wakacje.pl",724],["extradom.pl",724],["totalmoney.pl",724],["superauto.pl",724],["nerwica.com",724],["forum.echirurgia.pl",724],["dailywrap.net",724],["pysznosci.pl",724],["genialne.pl",724],["finansowysupermarket.pl",724],["deliciousmagazine.pl",724],["audioteka.com",724],["easygo.pl",724],["so-magazyn.pl",724],["o2.pl",724],["pudelek.pl",724],["benchmark.pl",724],["wp.pl",724],["altibox.dk",726],["altibox.no",726],["talksport.com",727],["zuiderzeemuseum.nl",728],["gota.io",729],["nwzonline.de",730],["scaleway.com",731],["bistro.sk",732],["spk-schaumburg.de",733],["computerbase.de",734],["comdirect.de",735],["metro.co.uk",736],["imaios.com",737],["myprivacy.dpgmedia.nl",738],["myprivacy.dpgmedia.be",738],["www.dpgmediagroup.com",738],["exxen.com",739],["cbsnews.com",740]]);
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
