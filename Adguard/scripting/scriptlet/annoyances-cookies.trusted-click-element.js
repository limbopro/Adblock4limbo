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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#CybotCookiebotDialogBodyButtonDecline"],["#pubtech-cmp button[aria-label=\"Continue without accepting\"]"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button[data-t=\"rejectAll\"]","","1000"],["#gdpr-banner-cmp-button","","1000"],["button[aria-label=\"Datenschutzbestimmungen und Einstellungen ablehnen\"]","","1200"],["#iubenda-cs-banner button.iubenda-cs-close-btn"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"consent\"]:not([class*=\"reject\"])"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[aria-label]","","1000"],["ytm-button-renderer.eom-accept button","","2000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","2000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["#pmConsentWall .pmConsentWall-button:not([href])","","1000","reloadAfterClick:200"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["#qc-cmp2-container button#accept-btn"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1500"],["button[title=\"Zustimmen\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-e2e=\"pure-accept-ads\"]","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button.brlbs-btn-save","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.js-alert-cookie-reject","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button[title=\"Accept & Continue\"]","","1000"],["button#ensRejectAll","","1500"],["button#ensSave","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],[".modal-actions-accept-btn","","2000"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button[id=\"ketch-banner-button-secondary\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Agree\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button#js-data-privacy-manage-cookies","","1000"],["button#js-manage-data-privacy-save-button","1500"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#btnAcceptPDPA","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button[title=\"Accept and continue\"]","","2000"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],["button#acceptCookiesTerms","","1000"],["a.footer-cookies-button-save-all","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["body > div[class] > div[class] > div[class]:has(a[href*=\"holding.wp.pl\"]) > div[class] > div[class]:only-child > button:first-child"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"],["#cookie-consent-button","","1500"],["com-consent-layer >>> #cmpDenyAll","","2500"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"level1PrimaryButton-\"]:not([class*=\"reject\"])"],["div#continueWithoutAccepting","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["body > div.w-screen.p-\\[1\\.25rem\\].fixed.left-0.top-0.flex button:first-child + button"],["#ketch-banner-buttons-container-compact > button#ketch-banner-button-primary"],[".prelim-manage-cookies-button.btn-default"],["button[data-role=\"necessary\"]"],[".cookie-banner--open button[data-variant=\"primary\"] + [data-variant=\"primary\"]","","1000"],["button[data-hook=\"consent-banner-decline-all-button\""],["cmp-banner >>> cmp-dialog >>> cmp-button >>> .button.button--primary","","1000"],["button#c-t-bn"],["a[fs-consent-element=\"deny\"]","","2000"],["button.c_link","","1000"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["heise.de",7],["theguardian.com",7],["bloomberg.com",[8,9]],["forbes.com",[8,82]],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,190]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,186]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["tomsguide.com>>",[24,25]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["oeamtc.at",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,187]],["ubereats.com",[39,187]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["bbc.com>>",43],["ilgiornale.it",44],["dimensione.com",45],["wero-wallet.eu",45],["everyeye.it",46],["pepper.pl",47],["dealabs.com",47],["hotukdeals.com",47],["chollometro.com",47],["preisjaeger.at",48],["mydealz.de",48],["kleinanzeigen.de",[49,50]],["105.net",51],["dailymail.co.uk",52],["almamedia.fi>>",53],["ampparit.com>>",53],["arvopaperi.fi>>",53],["iltalehti.fi>>",53],["kauppalehti.fi>>",53],["mikrobitti.fi>>",53],["talouselama.fi>>",53],["tekniikkatalous.fi>>",53],["tivi.fi>>",53],["uusisuomi.fi>>",53],["aamulehti.fi>>",[54,55,56]],["etlehti.fi>>",[54,55,56]],["gloria.fi>>",[54,55,56]],["hs.fi>>",[54,55,56]],["hyvaterveys.fi>>",[54,55,56]],["is.fi>>",[54,55,56]],["jamsanseutu.fi>>",[54,55,56]],["janakkalansanomat.fi>>",[54,55,56]],["kankaanpaanseutu.fi>>",[54,55,56]],["kmvlehti.fi>>",[54,55,56]],["kodinkuvalehti.fi>>",[54,55,56]],["merikarvialehti.fi>>",[54,55,56]],["nokianuutiset.fi>>",[54,55,56]],["pelikone.fi>>",[54,55,56]],["rannikkoseutu.fi>>",[54,55,56]],["ruutu.fi>>",[54,55,56]],["satakunnankansa.fi>>",[54,55,56]],["soppa365.fi>>",[54,55,56]],["suurkeuruu.fi>>",[54,55,56]],["sydansatakunta.fi>>",[54,55,56]],["tyrvaansanomat.fi>>",[54,55,56]],["valkeakoskensanomat.fi>>",[54,55,56]],["vauva.fi>>",[54,55,56]],["telekom.com",57],["telekom.de",57],["abola.pt",58],["flytap.com",58],["ansons.de",58],["blick.ch",58],["buienradar.be",58],["crunchyroll.com",58],["digi24.ro",58],["digisport.ro",58],["digitalfoundry.net",58],["egx.net",58],["emirates.com",58],["eurogamer.it",58],["foto-erhardt.de",58],["gmx.*",58],["kizi.com",58],["mail.com",58],["mcmcomiccon.com",58],["nachrichten.at",58],["nintendolife.com",58],["oe24.at",58],["observatornews.ro",58],["paxsite.com",58],["peacocktv.com",58],["player.pl",58],["plus500.*",58],["pricerunner.com",58],["pricerunner.se",58],["pricerunner.dk",58],["proximus.be",[58,658]],["proximus.com",58],["purexbox.com",58],["pushsquare.com",58],["rugbypass.com",58],["southparkstudios.com",[58,300]],["southwest.com",58],["starwarscelebration.com",58],["sweatybetty.com",58],["theaa.ie",58],["thehaul.com",58],["timeextension.com",58],["travelandleisure.com",58],["tunein.com",58],["tvn24.pl",58],["uefa.com",58],["videoland.com",58],["wizzair.com",58],["wetter.at",58],["wowbiz.ro",58],["dicebreaker.com",[59,60]],["eurogamer.es",[59,60]],["eurogamer.net",[59,60]],["eurogamer.nl",[59,60]],["eurogamer.pl",[59,60]],["eurogamer.pt",[59,60]],["gamesindustry.biz",[59,60]],["reedpop.com",[59,60]],["rockpapershotgun.com",[59,60]],["thepopverse.com",[59,60]],["vg247.com",[59,60]],["videogameschronicle.com",[59,60]],["eurogamer.de",61],["roadtovr.com",62],["jotex.*",62],["mundodeportivo.com",[63,134]],["www.youtube.com",64],["m.youtube.com",65],["ohra.nl",66],["corriere.it",67],["gazzetta.it",67],["oggi.it",67],["cmp.sky.it",68],["tennisassa.fi",69],["formula1.com",70],["f1racing.pl",71],["music.amazon.*",[72,73]],["consent-pref.trustarc.com",74],["highlights.legaseriea.it",75],["calciomercato.com",75],["sosfanta.com",76],["chrono24.*",[77,78]],["wetter.com",79],["youmath.it",80],["pip.gov.pl",81],["dailybuzz.nl",83],["bnn.de",83],["dosenbach.ch",83],["dw.com",83],["kinepolis.*",83],["mediaite.com",83],["nzz.ch",83],["winfuture.de",83],["lippu.fi",83],["racingnews365.com",83],["reifendirekt.ch",83],["vaillant.*",83],["bauhaus.no",84],["bauhaus.se",84],["beko-group.de",84],["billiger.de",84],["burda.com",84],["vanharen.nl",84],["deichmann.com",[84,107,489]],["meraluna.de",84],["slashdot.org",84],["hermann-saunierduval.it",84],["protherm.cz",84],["saunierduval.es",84],["protherm.sk",84],["protherm.ua",84],["saunierduval.hu",84],["saunierduval.ro",84],["saunierduval.at",84],["awb.nl",84],["spar.hu",85],["group.vattenfall.com",85],["mediaset.it",86],["fortune.com",87],["ilrestodelcarlino.it",88],["quotidiano.net",88],["lanazione.it",88],["ilgiorno.it",88],["iltelegrafolivorno.it",88],["auto.it",89],["beauxarts.com",89],["beinsports.com",89],["bfmtv.com",[89,135]],["boursobank.com",89],["boursorama.com",[89,135]],["boursier.com",[89,233]],["brut.media",89],["canalplus.com",89],["decathlon.fr",[89,230]],["diverto.tv",89],["eden-park.com",89],["foodvisor.io",89],["franceinfo.fr",89],["frandroid.com",89],["jobijoba.*",89],["hotelsbarriere.com",89],["intersport.*",[89,201]],["idealista.it",89],["o2.fr",89],["lejdd.fr",[89,134]],["lechorepublicain.fr",89],["la-croix.com",89],["linfo.re",89],["lamontagne.fr",89],["laredoute.fr",89],["largus.fr",89],["leprogres.fr",89],["lesnumeriques.com",89],["libramemoria.com",89],["lopinion.fr",89],["marieclaire.fr",89],["maville.com",89],["michelin.*",89],["midilibre.fr",[89,687]],["meteofrance.com",89],["mondialtissus.fr",89],["orange.fr",89],["orpi.com",89],["oscaro.com",89],["ouest-france.fr",[89,103,135,688]],["parismatch.com",89],["pagesjaunes.fr",89],["programme-television.org",[89,135]],["publicsenat.fr",[89,135]],["rmcbfmplay.com",[89,135]],["science-et-vie.com",[89,134]],["seloger.com",89],["societe.com",89],["suzuki.fr",89],["sudouest.fr",89],["web-agri.fr",89],["nutri-plus.de",90],["americanairlines.*",91],["consent.capital.fr",92],["consent.programme.tv",92],["consent.voici.fr",92],["programme-tv.net",92],["cmpv2.finn.no",93],["cmp.tek.no",[94,95]],["cmp.e24.no",[94,95]],["minmote.no",[94,95]],["cmp.vg.no",[94,95]],["cloud.google.com",96],["developer.android.com",96],["registry.google",96],["safety.google",96],["huffingtonpost.fr",97],["rainews.it",98],["remarkable.com",99],["netzwelt.de",100],["money.it",101],["imore.com>>",102],["allocine.fr",103],["jeuxvideo.com",103],["ozap.com",103],["le10sport.com",103],["xataka.com",103],["cmp.fitbook.de",104],["cmp.autobild.de",104],["sourcepoint.sport.de",104],["cmp-sp.tagesspiegel.de",104],["cmp.bz-berlin.de",104],["cmp.cicero.de",104],["cmp.techbook.de",104],["cmp.stylebook.de",104],["cmp2.bild.de",104],["cmp2.freiepresse.de",104],["sourcepoint.wetter.de",104],["consent.finanzen.at",104],["consent.finanzen.net",104],["consent.up.welt.de",104],["sourcepoint.n-tv.de",104],["sourcepoint.kochbar.de",104],["sourcepoint.rtl.de",104],["cmp.computerbild.de",104],["cmp.petbook.de",104],["cmp-sp.siegener-zeitung.de",104],["cmp-sp.sportbuzzer.de",104],["klarmobil.de",104],["technikum-wien.at",105],["eneco.nl",106],["salomon.com",108],["blackpoolgazette.co.uk",109],["lep.co.uk",109],["northamptonchron.co.uk",109],["scotsman.com",109],["shieldsgazette.com",109],["thestar.co.uk",109],["portsmouth.co.uk",109],["sunderlandecho.com",109],["northernirelandworld.com",109],["3addedminutes.com",109],["anguscountyworld.co.uk",109],["banburyguardian.co.uk",109],["bedfordtoday.co.uk",109],["biggleswadetoday.co.uk",109],["bucksherald.co.uk",109],["burnleyexpress.net",109],["buxtonadvertiser.co.uk",109],["chad.co.uk",109],["daventryexpress.co.uk",109],["derbyshiretimes.co.uk",109],["derbyworld.co.uk",109],["derryjournal.com",109],["dewsburyreporter.co.uk",109],["doncasterfreepress.co.uk",109],["falkirkherald.co.uk",109],["fifetoday.co.uk",109],["glasgowworld.com",109],["halifaxcourier.co.uk",109],["harboroughmail.co.uk",109],["harrogateadvertiser.co.uk",109],["hartlepoolmail.co.uk",109],["hemeltoday.co.uk",109],["hucknalldispatch.co.uk",109],["lancasterguardian.co.uk",109],["leightonbuzzardonline.co.uk",109],["lincolnshireworld.com",109],["liverpoolworld.uk",109],["londonworld.com",109],["lutontoday.co.uk",109],["manchesterworld.uk",109],["meltontimes.co.uk",109],["miltonkeynes.co.uk",109],["newcastleworld.com",109],["newryreporter.com",109],["newsletter.co.uk",109],["northantstelegraph.co.uk",109],["northumberlandgazette.co.uk",109],["nottinghamworld.com",109],["peterboroughtoday.co.uk",109],["rotherhamadvertiser.co.uk",109],["stornowaygazette.co.uk",109],["surreyworld.co.uk",109],["thescarboroughnews.co.uk",109],["thesouthernreporter.co.uk",109],["totallysnookered.com",109],["wakefieldexpress.co.uk",109],["walesworld.com",109],["warwickshireworld.com",109],["wigantoday.net",109],["worksopguardian.co.uk",109],["yorkshireeveningpost.co.uk",109],["yorkshirepost.co.uk",109],["eurocard.com",110],["saseurobonusmastercard.se",111],["barrons.com>>",112],["tver.jp",113],["linkedin.com",114],["elmundo.es",[115,135]],["expansion.com",115],["s-pankki.fi",116],["srf.ch",116],["alternate.de",116],["bayer04.de",116],["douglas.de",116],["dr-beckmann.com",116],["falke.com",116],["fitnessfirst.de",116],["flaschenpost.de",116],["gloeckle.de",116],["hornbach.nl",116],["hypofriend.de",116],["lactostop.de",116],["neumann.com",116],["post.ch",116],["postbank.de",116],["rts.ch",116],["zalando.*",116],["immowelt.de",117],["joyn.*",117],["morenutrition.de",117],["mapillary.com",118],["transfermarkt.com>>",119],["cmp.seznam.cz",120],["marca.com",121],["raiplay.it",122],["raiplaysound.it",122],["consent.faz.net",123],["derstandard.at",123],["derstandard.de",123],["automoto.it",124],["ansa.it",124],["cdt.ch",124],["delladio.it",124],["huffingtonpost.it",124],["internazionale.it",124],["lastampa.it",124],["macitynet.it",124],["moto.it",124],["movieplayer.it",124],["multiplayer.it",124],["repubblica.it",124],["tomshw.it",124],["skuola.net",124],["spaziogames.it",124],["today.it",124],["tuttoandroid.net",124],["tuttotech.net",124],["ilgazzettino.it",125],["ilmessaggero.it",125],["ilsecoloxix.it",125],["weather.com>>",[126,127]],["privacy.motorradonline.de",128],["impulse.de>>",128],["consent.watson.de",128],["consent.kino.de",128],["consent.desired.de",128],["cmpv2.fn.de",128],["spp.nextpit.de",128],["dailystar.co.uk",[129,130,131,132]],["mirror.co.uk",[129,130,131,132]],["idnes.cz",133],["20minutes.fr",134],["20minutos.es",134],["24sata.hr",134],["abc.es",134],["actu.fr",134],["antena3.com",134],["antena3internacional.com",134],["atresmedia.com",134],["atresmediapublicidad.com",134],["atresmediastudios.com",134],["atresplayer.com",134],["autopista.es",134],["belfasttelegraph.co.uk",134],["bemad.es",134],["bonduelle.it",134],["bonniernews.se",134],["bt.se",134],["cadenadial.com",134],["caracol.com.co",134],["cas.sk",134],["charentelibre.fr",134],["ciclismoafondo.es",134],["cnews.fr",134],["cope.es",134],["correryfitness.com",134],["courrier-picard.fr",134],["cuatro.com",134],["decathlon.nl",134],["decathlon.pl",134],["di.se",134],["diariocordoba.com",134],["diariodenavarra.es",134],["diariosur.es",134],["diariovasco.com",134],["diepresse.com",134],["divinity.es",134],["dn.se",134],["dnevnik.hr",134],["dumpert.nl",134],["ebuyclub.com",134],["edreams.de",134],["edreams.net",134],["elcomercio.es",134],["elconfidencial.com",134],["elcorreo.com",134],["eldesmarque.com",134],["eldiario.es",134],["eldiariomontanes.es",134],["elespanol.com",134],["elle.fr",134],["elpais.com",[134,136]],["elperiodico.com",134],["elperiodicodearagon.com",134],["elplural.com",134],["energytv.es",134],["engadget.com",134],["es.ara.cat",134],["euronews.com",134],["europafm.com",134],["expressen.se",134],["factoriadeficcion.com",134],["filmstarts.de",134],["flooxernow.com",134],["folkbladet.nu",134],["footmercato.net",134],["france.tv",134],["france24.com",134],["fussballtransfers.com",134],["ghacks.net",134],["gva.be",134],["hbvl.be",134],["heraldo.es",134],["hoy.es",134],["ideal.es",134],["idealista.pt",134],["krone.at",134],["kurier.at",134],["lacoste.com",134],["ladepeche.fr",134],["lalibre.be",134],["lanouvellerepublique.fr",134],["larazon.es",134],["lasexta.com",134],["lasprovincias.es",134],["latribune.fr",134],["lavanguardia.com",134],["laverdad.es",134],["lavozdegalicia.es",134],["leboncoin.fr",134],["lecturas.com",134],["ledauphine.com",134],["lejsl.com",134],["leparisien.fr",134],["lesoir.be",134],["letelegramme.fr",134],["libremercado.com",134],["localeyes.dk",134],["los40.com",134],["lotoquebec.com",134],["lunion.fr",134],["m6.fr",134],["marianne.cz",134],["marmiton.org",134],["mediaset.es",134],["melodia-fm.com",134],["metronieuws.nl",134],["moviepilot.de",134],["mtmad.es",134],["multilife.com.pl",134],["naszemiasto.pl",134],["nationalgeographic.com.es",134],["nicematin.com",134],["nieuwsblad.be",134],["notretemps.com",134],["numerama.com",134],["okdiario.com",134],["ondacero.es",134],["podiumpodcast.com",134],["portail.lotoquebec.com",134],["profil.at",134],["public.fr",134],["publico.es",134],["radiofrance.fr",134],["rankia.com",134],["rfi.fr",134],["rossmann.pl",134],["rtbf.be",[134,230]],["rtl.lu",134],["sensacine.com",134],["sfgame.net",134],["shure.com",134],["silicon.es",134],["sncf-connect.com",134],["sport.es",134],["sydsvenskan.se",134],["techcrunch.com",134],["telegraaf.nl",134],["telequebec.tv",134],["tf1.fr",134],["tradingsat.com",134],["trailrun.es",134],["video-streaming.orange.fr",134],["xpress.fr",134],["laprovincia.es",135],["informacion.es",135],["tportal.hr",135],["ivoox.com",135],["as.com",135],["slam.nl",135],["bienpublic.com",135],["funradio.fr",135],["gamepro.de",[135,198,199]],["lemon.fr",135],["lexpress.fr",135],["shadow.tech",135],["letemps.ch",135],["mein-mmo.de",135],["heureka.sk",135],["film.at",135],["dhnet.be",135],["lesechos.fr",[135,235]],["marianne.net",[135,230]],["jeanmarcmorandini.com",[135,231]],["dna.fr",135],["sudinfo.be",135],["europe1.fr",[135,231]],["rtl.be",[135,230]],["reviewingthebrew.com",135],["jaysjournal.com",135],["reignoftroy.com",135],["ryobitools.eu",[137,138]],["americanexpress.com",139],["rtvc.es>>",140],["beteve.cat>>",141],["whatcar.com>>",141],["bloodyelbow.com>>",142],["consent.radiotimes.com",142],["sp-consent.szbz.de",143],["cmp.omni.se",144],["cmp.svd.se",144],["cmp.aftonbladet.se",144],["cmp.tv.nu",144],["weltkunst.de>>",145],["consent.economist.com",146],["studentagency.cz",146],["driving.co.uk>>",147],["cmpv2.foundryco.com",147],["cmpv2.infoworld.com",147],["cmpv2.arnnet.com.au",147],["sp-cdn.pcgames.de",148],["sp-cdn.pcgameshardware.de",148],["consentv2.sport1.de",148],["boerse-online.de>>",148],["cmp.mz.de",148],["cmpv2.tori.fi",149],["tidende.dk>>",150],["consent.spielaffe.de",151],["bondekompaniet.no",152],["degiro.*",152],["epochtimes.de",152],["vikingline.com",152],["tfl.gov.uk",152],["drklein.de",152],["hildegardis-krankenhaus.de",152],["kleer.se",152],["lekiaviation.com",152],["lotto.pl",152],["mineralstech.com",152],["volunteer.digitalboost.org.uk",152],["starhotels.com",152],["tefl.com",152],["universumglobal.com",152],["tui.com",153],["rexel.*",154],["csob.sk",155],["greenstuffworld.com",156],["morele.net",[157,158]],["1und1.de",159],["infranken.de",160],["cmp.tvspielfilm.de",161],["cmp.tvtoday.de",161],["cmp.bunte.de",161],["cmp.chip.de",161],["cmp.focus.de",[161,515]],["stol.it>>",161],["estadiodeportivo.com",162],["tameteo.*",162],["tempo.pt",162],["meteored.*",162],["pogoda.com",162],["yourweather.co.uk",162],["tempo.com",162],["theweather.net",162],["tiempo.com",162],["ilmeteo.net",162],["daswetter.com",162],["kicker.de",163],["formulatv.com",164],["web.de",165],["lefigaro.fr",166],["linternaute.com",167],["consent.caminteresse.fr",168],["volksfreund.de",169],["rp-online.de",169],["dailypost.co.uk",170],["the-express.com",170],["vide-greniers.org",170],["dailyrecord.co.uk",171],["bluray-disc.de",172],["elio-systems.com",172],["stagatha-fachklinik.de",172],["tarife.mediamarkt.de",172],["lz.de",172],["gaggenau.com",172],["saturn.de",173],["eltiempo.es",[174,175]],["otempo.pt",176],["atlasformen.*",177],["cmp-sp.goettinger-tageblatt.de",178],["cmp-sp.saechsische.de",178],["cmp-sp.ln-online.de",178],["cz.de",178],["dewezet.de",178],["dnn.de",178],["haz.de",178],["gnz.de",178],["landeszeitung.de",178],["lvz.de",178],["maz-online.de",178],["ndz.de",178],["op-marburg.de",178],["ostsee-zeitung.de",178],["paz-online.de",178],["reisereporter.de",178],["rga.de",178],["rnd.de",178],["siegener-zeitung.de",178],["sn-online.de",178],["solinger-tageblatt.de",178],["sportbuzzer.de",178],["szlz.de",178],["tah.de",178],["torgauerzeitung.de",178],["waz-online.de",178],["privacy.maennersache.de",178],["refinery29.com>>",179],["sinergy.ch",180],["agglo-valais-central.ch",180],["biomedcentral.com",181],["hsbc.*",182],["hsbcnet.com",182],["hsbcinnovationbanking.com",182],["create.hsbc",182],["gbm.hsbc.com",182],["hsbc.co.uk",183],["internationalservices.hsbc.com",183],["history.hsbc.com",183],["about.hsbc.co.uk",184],["privatebanking.hsbc.com",185],["independent.co.uk",188],["privacy.crash.net",188],["the-independent.com",189],["argos.co.uk",191],["poco.de",[192,193]],["moebelix.*",192],["moemax.*",192],["xxxlutz.*",192],["xxxlesnina.*",192],["moebel24.at",193],["moebel24.ch",193],["meubles.fr",193],["meubelo.nl",193],["moebel.de",193],["lipo.ch",194],["schubiger.ch",195],["aedt.de",196],["berlin-live.de",196],["bike-magazin.de",196],["connect.de",196],["gutefrage.net",196],["insideparadeplatz.ch",196],["morgenpost.de",196],["thueringen24.de",196],["pdfupload.io",197],["gamestar.de",[198,199,239]],["verksamt.se",200],["acmemarkets.com",201],["amtrak.com",201],["beko.com",201],["bepanthen.com.au",201],["berocca.com.au",201],["booking.com",201],["carrefour.fr",201],["centrum.sk",201],["claratyne.com.au",201],["credit-suisse.com",201],["ceskatelevize.cz",201],["deporvillage.*",201],["de.vanguard",201],["dhl.de",201],["digikey.*",201],["drafthouse.com",201],["dunelm.com",201],["eurosport.fr",201],["fello.se",201],["fielmann.*",201],["flashscore.fr",201],["flightradar24.com",201],["fnac.es",201],["foodandwine.com",201],["fourseasons.com",201],["khanacademy.org",201],["konami.com",201],["jll.*",201],["jobs.redbull.com",201],["hellenicbank.com",201],["gemini.pl",201],["groceries.asda.com",201],["lamborghini.com",201],["menshealth.com",201],["n26.com",201],["nintendo.com",201],["nokia.com",201],["oneweb.net",201],["omnipod.com",201],["oralb.*",201],["panasonic.com",201],["parkside-diy.com",201],["pluto.tv",201],["popularmechanics.com",201],["polskieradio.pl",201],["pringles.com",201],["questdiagnostics.com",201],["radissonhotels.com",201],["ricardo.ch",201],["rockstargames.com",201],["rte.ie",201],["salesforce.com",201],["samsonite.*",201],["spiele.heise.de",201],["spirit.com",201],["stenaline.co.uk",201],["swisscom.ch",201],["swisspass.ch",201],["technologyfromsage.com",201],["telenet.be",201],["tntsports.co.uk",201],["theepochtimes.com",201],["toujeo.com",201],["uber-platz.de",201],["vinted.com",201],["wallapop.com",201],["wickes.co.uk",201],["workingtitlefilms.com",201],["vattenfall.de",201],["winparts.fr",201],["yoigo.com",201],["zoominfo.com",201],["allegiantair.com",202],["hallmarkchannel.com",202],["incorez.com",202],["noovle.com",202],["otter.ai",202],["plarium.com",202],["telsy.com",202],["timenterprise.it",202],["tim.it",202],["tradersunion.com",202],["fnac.*",202],["yeti.com",202],["here.com",[203,696]],["vodafone.com",203],["kooora.com>>",204],["cmp.heise.de",[205,206]],["cmp.am-online.com",205],["cmp.motorcyclenews.com",205],["consent.newsnow.co.uk",205],["cmp.todays-golfer.com",205],["koeser.com",207],["shop.schaette-pferd.de",207],["schaette.de",207],["central-bb.de",208],["fitnessfoodcorner.de",209],["kuehlungsborn.de",210],["espressocoffeeshop.com",211],["brainmarket.pl",212],["getroots.app",213],["cart-in.re",[214,621]],["prestonpublishing.pl",215],["zara.com",216],["lepermislibre.fr",216],["negociardivida.spcbrasil.org.br",217],["pons.com",218],["adidas.*",219],["privacy.topreality.sk",220],["privacy.autobazar.eu",220],["vu.lt",221],["adnkronos.com",[222,223]],["cornwalllive.com",[222,223]],["cyprus-mail.com",[222,223]],["einthusan.tv",[222,223]],["informazione.it",[222,223]],["mymovies.it",[222,223]],["tuttoeuropei.com",[222,223]],["video.lacnews24.it",[222,223]],["protothema.gr",222],["flash.gr",222],["taxscouts.com",224],["heute.at>>",225],["online.no",226],["telenor.no",226],["austrian.com",227],["lufthansa.com",227],["kampfkunst-herz.de",228],["glow25.de",228],["h-f.at",228],["hornetsecurity.com",228],["ifun.de",228],["kayzen.io",228],["wasserkunst-hamburg.de",228],["zahnspange-oelde.de",228],["xinedome.de",229],["bnc.ca",230],["egora.fr",230],["engelvoelkers.com",230],["estrategiasdeinversion.com",230],["festo.com",230],["francebleu.fr",230],["francemediasmonde.com",230],["geny.com",230],["giphy.com",230],["idealista.com",230],["infolibre.es",230],["inpost.pl",230],["information.tv5monde.com",230],["ing.es",230],["knipex.de",230],["laprovence.com",230],["lemondeinformatique.fr",230],["libertaddigital.com",230],["mappy.com",230],["orf.at",230],["philibertnet.com",230],["researchgate.net",230],["standaard.be",230],["stroilioro.com",230],["taxfix.de",230],["telecinco.es",230],["vistaalegre.com",230],["zimbra.free.fr",230],["usinenouvelle.com",232],["reussir.fr",234],["bruendl.at",236],["latamairlines.com",237],["elisa.ee",238],["baseendpoint.brigitte.de",239],["baseendpoint.gala.de",239],["baseendpoint.haeuser.de",239],["baseendpoint.stern.de",239],["baseendpoint.urbia.de",239],["cmp.tag24.de",239],["cmp-sp.handelsblatt.com",239],["cmpv2.berliner-zeitung.de",239],["golem.de",239],["rockhard.de>>",239],["consent.t-online.de",239],["sp-consent.stuttgarter-nachrichten.de",240],["btc-echo.de>>",240],["sp-consent.stuttgarter-zeitung.de",240],["regjeringen.no",241],["sp-manager-magazin-de.manager-magazin.de",242],["consent.11freunde.de",242],["f1academy.com>>",243],["timeout.com>>",[243,244]],["karlsruhe-insider.de>>",245],["promiflash.de>>",246],["wallester.com",247],["centrum24.pl",248],["replay.lsm.lv",249],["ltv.lsm.lv",249],["bernistaba.lsm.lv",249],["verl.de",250],["cubo-sauna.de",250],["mbl.is",250],["auto-medienportal.net",250],["mobile.de",251],["cookist.it",252],["fanpage.it",252],["geopop.it",252],["lexplain.it",252],["royalmail.com",253],["gmx.net",254],["gmx.ch",255],["mojehobby.pl",256],["super-hobby.*",256],["sp.stylevamp.de",[257,258]],["cmp.wetteronline.de",257],["sp.stylevamp.com",258],["audi.*",[259,260]],["easyjet.com",259],["experian.co.uk",259],["postoffice.co.uk",259],["tescobank.com",259],["internetaptieka.lv",[261,262]],["nike.com",263],["wells.pt",264],["dskdirect.bg",265],["cmpv2.dba.dk",266],["spcmp.crosswordsolver.com",267],["gbnews.com>>",[267,625]],["ecco.com",268],["georgjensen.com",268],["thomann.*",269],["landkreis-kronach.de",270],["effectiefgeven.be",271],["northcoast.com",271],["chaingpt.org",271],["bandenconcurrent.nl",272],["bandenexpert.be",272],["reserved.com",273],["metro.it",274],["makro.es",274],["metro.sk",274],["metro-cc.hr",274],["makro.nl",274],["metro.bg",274],["metro.at",274],["metro-tr.com",274],["metro.de",274],["metro.fr",274],["makro.cz",274],["metro.ro",274],["makro.pt",274],["makro.pl",274],["sklepy-odido.pl",274],["rastreator.com",274],["metro.ua",275],["metro.rs",275],["metro-kz.com",275],["metro.md",275],["metro.hu",275],["metro-cc.ru",275],["metro.pk",275],["balay.es",276],["constructa.com",276],["dafy-moto.com",277],["akku-shop.nl",278],["akkushop-austria.at",278],["akkushop-b2b.de",278],["akkushop.de",278],["akkushop.dk",278],["batterie-boutique.fr",278],["akkushop-schweiz.ch",279],["evzuttya.com.ua",280],["eobuv.cz",280],["eobuwie.com.pl",280],["ecipele.hr",280],["eavalyne.lt",280],["chaussures.fr",280],["ecipo.hu",280],["eobuv.sk",280],["epantofi.ro",280],["epapoutsia.gr",280],["escarpe.it",280],["eschuhe.de",280],["obuvki.bg",280],["zapatos.es",280],["swedbank.ee",281],["mudanzavila.es",282],["bienmanger.com",283],["gesipa.*",284],["gesipausa.com",284],["beckhoff.com",284],["zitekick.dk",285],["eltechno.dk",285],["okazik.pl",285],["batteryempire.*",286],["maxi.rs",287],["garmin.com",288],["invisalign.*",288],["one4all.ie",288],["osprey.com",288],["wideroe.no",289],["bmw.*",290],["kijk.nl",291],["nordania.dk",292],["danskebank.*",292],["danskeci.com",292],["danica.dk",292],["dehn.*",293],["gewerbegebiete.de",294],["cordia.fr",295],["vola.fr",296],["lafi.fr",297],["skyscanner.*",298],["coolblue.*",299],["chipotle.com",300],["sanareva.*",301],["atida.fr",301],["bbva.*",302],["bbvauk.com",302],["expertise.unimi.it",303],["altenberg.de",304],["vestel.es",305],["tsb.co.uk",306],["buienradar.nl",[307,308]],["linsenplatz.de",309],["budni.de",310],["erstecardclub.hr",310],["teufel.de",[311,312]],["abp.nl",313],["simplea.sk",314],["flip.bg",315],["kiertokanki.com",316],["supla.fi>>",317],["leirovins.be",318],["vias.be",319],["edf.fr",320],["virbac.com",320],["diners.hr",320],["squarehabitat.fr",320],["arbitrobancariofinanziario.it",321],["ivass.it",321],["economiapertutti.bancaditalia.it",321],["smit-sport.de",322],["gekko-computer.de",322],["jysk.al",323],["go-e.com",324],["malerblatt-medienservice.de",325],["architekturbuch.de",325],["medienservice-holz.de",325],["leuchtstark.de",325],["casius.nl",326],["coolinarika.com",327],["giga-hamburg.de",327],["vakgaragevannunen.nl",327],["fortuluz.es",327],["finna.fi",327],["eurogrow.es",327],["paid.ai",327],["topnatur.cz",327],["topnatur.eu",327],["vakgarage.nl",327],["whufc.com",327],["zomaplast.cz",327],["envafors.dk",328],["dabbolig.dk",[329,330]],["daruk-emelok.hu",331],["exakta.se",332],["larca.de",333],["roli.com",334],["okazii.ro",335],["lr-shop-direkt.de",335],["portalprzedszkolny.pl",335],["tgvinoui.sncf",336],["l-bank.de",337],["interhyp.de",338],["indigoneo.*",339],["transparency.meta.com",340],["dojusagro.lt",341],["eok.ee",341],["kripa.it",341],["nextdaycatering.co.uk",341],["safran-group.com",341],["sr-ramenendeuren.be",341],["ilovefreegle.org",341],["tribexr.com",341],["understandingsociety.ac.uk",341],["bestbuycyprus.com",342],["strato.*",343],["strato-hosting.co.uk",343],["auto.de",344],["contentkingapp.com",345],["comune.palermo.it",346],["get-in-engineering.de",347],["spp.nextpit.com",348],["spp.nextpit.es",349],["spp.nextpit.it",350],["spp.nextpit.com.br",351],["spp.nextpit.fr",352],["otterbox.com",353],["stoertebeker-brauquartier.com",354],["stoertebeker.com",354],["stoertebeker-eph.com",354],["aparts.pl",355],["sinsay.com",[356,357]],["benu.cz",358],["stockholmresilience.org",359],["ludvika.se",359],["kammarkollegiet.se",359],["cazenovecapital.com",360],["statestreet.com",361],["beopen.lv",362],["cesukoncertzale.lv",363],["dodo.fr",364],["makelaarsland.nl",365],["bezirk-schwaben.de",366],["dorfen.de",366],["nutsinbulk.co.uk",367],["bricklink.com",368],["bestinver.es",369],["icvs2023.conf.tuwien.ac.at",370],["racshop.co.uk",[371,372]],["baabuk.com",373],["sapien.io",373],["tradedoubler.com",373],["app.lepermislibre.fr",374],["multioferta.es",375],["testwise.com",[376,377]],["tonyschocolonely.com",378],["fitplus.is",378],["fransdegrebber.nl",378],["lilliputpress.ie",378],["lexibo.com",378],["marin-milou.com",378],["dare2tri.com",378],["t3micro.*",378],["la-vie-naturelle.com",[379,380]],["inovelli.com",381],["uonetplus.vulcan.net.pl",[382,383]],["consent.helagotland.se",384],["oper.koeln",[385,386]],["deezer.com",387],["hoteldesartssaigon.com",388],["autoritedelaconcurrence.fr",389],["groupeonepoint.com",389],["geneanet.org",389],["carrieres.groupegalerieslafayette.com",389],["immo-banques.fr",389],["lingvanex.com",389],["turncamp.com",390],["ejobs.ro",[391,392]],["kupbilecik.*",[393,394]],["coolbe.com",395],["serienjunkies.de",396],["computerhoy.20minutos.es",397],["clickskeks.at",398],["clickskeks.de",398],["abt-sportsline.de",398],["wittmann-group.com",398],["exemplary.ai",399],["forbo.com",399],["stores.sk",399],["nerdstar.de",399],["prace.cz",399],["profesia.sk",399],["profesia.cz",399],["pracezarohem.cz",399],["atmoskop.cz",399],["seduo.sk",399],["seduo.cz",399],["teamio.com",399],["arnold-robot.com",399],["cvonline.lt",399],["cv.lv",399],["cv.ee",399],["dirbam.lt",399],["visidarbi.lv",399],["otsintood.ee",399],["webtic.it",399],["gerth.de",400],["pamiatki.pl",401],["initse.com",402],["salvagny.org",403],["augsburger-allgemeine.de",404],["stabila.com",405],["stwater.co.uk",406],["suncalc.org",[407,408]],["swisstph.ch",409],["taxinstitute.ie",410],["get-in-it.de",411],["tempcover.com",[412,413]],["guildford.gov.uk",414],["easyparts.*",[415,416]],["easyparts-recambios.es",[415,416]],["easyparts-rollerteile.de",[415,416]],["drimsim.com",417],["canyon.com",[418,419,420]],["vevovo.be",[421,422]],["vendezvotrevoiture.be",[421,422]],["wirkaufendeinauto.at",[421,422]],["vikoberallebiler.dk",[421,422]],["wijkopenautos.nl",[421,422]],["vikoperdinbil.se",[421,422]],["noicompriamoauto.it",[421,422]],["vendezvotrevoiture.fr",[421,422]],["compramostucoche.es",[421,422]],["wijkopenautos.be",[421,422]],["auto-doc.*",423],["autodoc.*",423],["autodoc24.*",423],["topautoosat.fi",423],["autoteiledirekt.de",423],["autoczescionline24.pl",423],["tuttoautoricambi.it",423],["onlinecarparts.co.uk",423],["autoalkatreszek24.hu",423],["autodielyonline24.sk",423],["reservdelar24.se",423],["pecasauto24.pt",423],["reservedeler24.co.no",423],["piecesauto24.lu",423],["rezervesdalas24.lv",423],["besteonderdelen.nl",423],["recambioscoche.es",423],["antallaktikaexartimata.gr",423],["piecesauto.fr",423],["teile-direkt.ch",423],["lpi.org",424],["divadelniflora.cz",425],["mahle-aftermarket.com",426],["refurbed.*",427],["eingutertag.org",428],["flyingtiger.com",[428,571]],["borgomontecedrone.it",428],["maharishistore.com",428],["recaro-shop.com",428],["gartenhotel-crystal.at",428],["fayn.com",429],["serica-watches.com",429],["sklavenitis.gr",430],["eam-netz.de",431],["umicore.*",432],["veiligverkeer.be",432],["vsv.be",432],["dehogerielen.be",432],["gera.de",433],["mfr-chessy.fr",434],["mfr-lamure.fr",434],["mfr-saint-romain.fr",434],["mfr-lapalma.fr",434],["mfrvilliemorgon.asso.fr",434],["mfr-charentay.fr",434],["mfr.fr",434],["nationaltrust.org.uk",435],["hej-natural.*",436],["ib-hansmeier.de",437],["rsag.de",438],["esaa-eu.org",438],["aknw.de",438],["answear.*",439],["theprotocol.it",[440,441]],["lightandland.co.uk",442],["etransport.pl",443],["wohnen-im-alter.de",444],["johnmuirhealth.com",[445,446]],["markushaenni.com",447],["airbaltic.com",448],["gamersgate.com",448],["zorgzaam010.nl",449],["etos.nl",450],["paruvendu.fr",451],["privacy.bazar.sk",452],["hennamorena.com",453],["newsello.pl",454],["porp.pl",455],["golfbreaks.com",456],["lieferando.de",457],["just-eat.*",457],["justeat.*",457],["pyszne.pl",457],["lieferando.at",457],["takeaway.com",457],["thuisbezorgd.nl",457],["holidayhypermarket.co.uk",458],["unisg.ch",459],["wassererleben.ch",459],["psgaz.pl",460],["play-asia.com",461],["centralthe1card.com",462],["atu.de",463],["atu-flottenloesungen.de",463],["but.fr",463],["edeka.de",463],["fortuneo.fr",463],["maif.fr",463],["meteo.tf1.fr",463],["particuliers.sg.fr",463],["sparkasse.at",463],["group.vig",463],["tf1info.fr",463],["dpdgroup.com",464],["dpd.com",464],["cosmosdirekt.de",464],["bstrongoutlet.pt",465],["isarradweg.de",[466,467]],["flaxmanestates.com",467],["inland-casas.com",467],["finlayson.fi",[468,469]],["cowaymega.ca",[468,469]],["arktis.de",470],["desktronic.de",470],["belleek.com",470],["brauzz.com",470],["cowaymega.com",470],["dockin.de",470],["dryrobe.com",[470,471]],["formswim.com",470],["hairtalk.se",470],["hallmark.co.uk",[470,471]],["loopearplugs.com",[470,471]],["oleus.com",470],["peopleofshibuya.com",470],["pullup-dip.com",470],["sanctum.shop",470],["tbco.com",470],["desktronic.*",471],["hq-germany.com",471],["tepedirect.com",471],["maxi-pet.ro",471],["paper-republic.com",471],["pullup-dip.*",471],["vitabiotics.com",471],["smythstoys.com",472],["beam.co.uk",[473,474]],["autobahn.de",475],["krakow.pl",476],["shop.app",477],["shopify.com",477],["wufoo.com",478],["consent.dailymotion.com",479],["laposte.fr",479],["help.instagram.com",480],["crazygames.com>>",[481,683]],["consent-manager.thenextweb.com",482],["consent-cdn.zeit.de",483],["coway-usa.com",484],["steiners.shop",485],["ecmrecords.com",486],["cigarjournal.com",486],["invidis.com",486],["malaikaraiss.com",486],["koch-mit.de",486],["zeitreisen.zeit.de",486],["wefashion.com",487],["merkur.dk",488],["ionos.*",490],["omegawatches.com",491],["carefully.be",492],["aerotime.aero",492],["rocket-league.com",493],["dws.com",494],["bosch-homecomfort.com",495],["elmleblanc-optibox.fr",495],["monservicechauffage.fr",495],["boschrexroth.com",495],["home-connect.com",496],["lowrider.at",[497,498]],["mesto.de",499],["intersport.gr",500],["intersport.bg",500],["intersport.com.cy",500],["intersport.ro",500],["ticsante.com",501],["techopital.com",501],["millenniumprize.org",502],["hepster.com",503],["peterstaler.de",504],["blackforest-still.de",504],["tiendaplayaundi.com",505],["ajtix.co.uk",506],["raja.fr",507],["rajarani.de",507],["rajapack.*",[507,508]],["avery-zweckform.com",509],["1xinternet.com",509],["futterhaus.de",509],["dasfutterhaus.at",509],["frischeparadies.de",509],["fmk-steuer.de",509],["selgros.de",509],["transgourmet.de",509],["mediapart.fr",510],["athlon.com",511],["alumniportal-deutschland.org",512],["snoopmedia.com",512],["myguide.de",512],["daad.de",512],["cornelsen.de",[513,514]],["vinmonopolet.no",516],["tvp.info",517],["tvp.pl",517],["tvpworld.com",517],["brtvp.pl",517],["tvpparlament.pl",517],["belsat.eu",517],["warnung.bund.de",518],["mediathek.lfv-bayern.de",519],["allegro.*",520],["allegrolokalnie.pl",520],["ceneo.pl",520],["czc.cz",520],["eon.pl",[521,522]],["ylasatakunta.fi",[523,524]],["mega-image.ro",525],["louisvuitton.com",526],["bodensee-airport.eu",527],["department56.com",528],["allendesignsstudio.com",528],["designsbylolita.co",528],["shop.enesco.com",528],["savoriurbane.com",529],["miumiu.com",530],["church-footwear.com",530],["clickdoc.fr",531],["car-interface.com",532],["monolithdesign.it",532],["thematchahouse.com",532],["smileypack.de",[533,534]],["finom.co",535],["orange.es",[536,537]],["fdm-travel.dk",538],["hummel.dk",538],["jysk.nl",538],["power.no",538],["skousen.dk",538],["velliv.dk",538],["whiteaway.com",538],["whiteaway.no",538],["whiteaway.se",538],["skousen.no",538],["energinet.dk",538],["elkjop.no",538],["medimax.de",539],["costautoricambi.com",540],["lotto.it",540],["readspeaker.com",540],["team.blue",540],["ibistallinncenter.ee",541],["aaron.ai",542],["futureverse.com",543],["tandem.co.uk",543],["insights.com",544],["thebathcollection.com",545],["coastfashion.com",[546,547]],["oasisfashion.com",[546,547]],["warehousefashion.com",[546,547]],["misspap.com",[546,547]],["karenmillen.com",[546,547]],["boohooman.com",[546,547]],["hdt.de",548],["wolt.com",549],["xohotels.com",550],["sim24.de",551],["tnt.com",552],["uza.be",553],["uzafoundation.be",553],["uzajobs.be",553],["bergzeit.*",[554,555]],["cinemas-lumiere.com",556],["cdiscount.com",557],["brabus.com",558],["roborock.com",559],["strumentimusicali.net",560],["maisonmargiela.com",561],["webfleet.com",562],["dragonflyshipping.ca",563],["broekhuis.nl",564],["groningenairport.nl",564],["nemck.cz",565],["zdfheute.de",566],["sap-press.com",567],["roughguides.com",[568,569]],["korvonal.com",570],["rexbo.*",572],["itau.com.br",573],["bbg.gv.at",574],["portal.taxi.eu",575],["topannonces.fr",576],["homap.fr",577],["artifica.fr",578],["plan-interactif.com",578],["ville-cesson.fr",578],["moismoliere.com",579],["unihomes.co.uk",580],["bkk.hu",581],["coiffhair.com",582],["ptc.eu",583],["ziegert-group.com",[584,693]],["lassuranceretraite.fr",585],["interieur.gouv.fr",585],["toureiffel.paris",585],["economie.gouv.fr",585],["education.gouv.fr",585],["livoo.fr",585],["su.se",585],["zappo.fr",585],["smdv.de",586],["digitalo.de",586],["petiteamelie.*",587],["mojanorwegia.pl",588],["koempf24.ch",[589,590]],["teichitekten24.de",[589,590]],["koempf24.de",[589,590]],["wolff-finnhaus-shop.de",[589,590]],["asnbank.nl",591],["blgwonen.nl",591],["regiobank.nl",591],["snsbank.nl",591],["vulcan.net.pl",[592,593]],["ogresnovads.lv",594],["partenamut.be",595],["pirelli.com",596],["unicredit.it",597],["effector.pl",598],["zikodermo.pl",[599,600]],["devolksbank.nl",601],["caixabank.es",602],["me.motorsport.com>>",603],["motorsport.com>>",604],["cyberport.de",605],["cyberport.at",605],["slevomat.cz",606],["kfzparts24.de",607],["runnersneed.com",608],["aachener-zeitung.de",609],["sportpursuit.com",610],["druni.es",[611,622]],["druni.pt",[611,622]],["delta.com",612],["onliner.by",[613,614]],["vejdirektoratet.dk",615],["usaa.com",616],["consorsbank.de",617],["metroag.de",618],["kupbilecik.pl",619],["oxfordeconomics.com",620],["routershop.nl",621],["woo.pt",621],["e-jumbo.gr",623],["alza.*",624],["rmf.fm",626],["rmf24.pl",626],["tracfone.com",627],["lequipe.fr",628],["global.abb",629],["gala.fr",630],["purepeople.com",631],["3sat.de",632],["zdf.de",632],["filmfund.lu",633],["welcometothejungle.com",633],["triblive.com",634],["rai.it",635],["fbto.nl",636],["europa.eu",637],["caisse-epargne.fr",638],["banquepopulaire.fr",638],["bigmammagroup.com",639],["studentagency.sk",639],["studentagency.eu",639],["winparts.be",640],["winparts.nl",640],["winparts.eu",641],["winparts.ie",641],["winparts.se",641],["sportano.*",[642,643]],["crocs.*",644],["chronext.ch",645],["chronext.de",645],["chronext.at",645],["chronext.com",646],["chronext.co.uk",646],["chronext.fr",647],["chronext.nl",648],["chronext.it",649],["galerieslafayette.com",650],["bazarchic.com",651],["stilord.*",652],["tiko.pt",653],["nsinternational.com",654],["meinbildkalender.de",655],["gls-group.com",656],["gls-group.eu",656],["univie.ac.at",656],["chilis.com",657],["account.bhvr.com",659],["everand.com",659],["lucidchart.com",659],["intercars.ro",[659,660]],["scribd.com",659],["guidepoint.com",659],["erlebnissennerei-zillertal.at",661],["hintertuxergletscher.at",661],["tiwag.at",661],["playseatstore.com",662],["tivify.tv>>",663],["swiss-sport.tv",664],["targobank-magazin.de",665],["zeit-verlagsgruppe.de",665],["online-physiotherapie.de",665],["kieferorthopaede-freisingsmile.de",666],["nltraining.nl",667],["kmudigital.at",668],["mintysquare.com",669],["consent.thetimes.com",670],["cadenaser.com",671],["berlinale.de",672],["lebonlogiciel.com",673],["iberiaexpress.com",674],["easycosmetic.ch",675],["pharmastar.it",676],["washingtonpost.com",677],["brillenplatz.de",678],["angelplatz.de",678],["dt.mef.gov.it",679],["raffeldeals.com",680],["stepstone.de",681],["kobo.com",682],["zoxs.de",684],["offistore.fi",685],["collinsaerospace.com",686],["radioapp.lv",689],["hagengrote.de",690],["hemden-meister.de",690],["vorteilshop.com",691],["capristores.gr",692],["getaround.com",694],["technomarket.bg",695],["epiphone.com",697],["gibson.com",697],["maestroelectronics.com",697],["cropp.com",[698,699]],["housebrand.com",[698,699]],["mohito.com",[698,699]],["autoczescizielonki.pl",700],["b-s.de",701],["novakid.pl",702],["piecesauto24.com",703],["earpros.com",704],["portalridice.cz",705],["kitsapcu.org",706],["nutsinbulk.*",707],["berlin-buehnen.de",708],["metropoliten.rs",709],["educa2.madrid.org",710],["immohal.de",711],["sourcepoint.theguardian.com",712],["rtlplay.be",713],["natgeotv.com",713],["llama.com",714],["meta.com",714],["setasdesevilla.com",715],["cruyff-foundation.org",716],["allianz.*",717],["energiedirect-bayern.de",718],["postnl.be",719],["postnl.nl",719],["sacyr.com",720],["volkswagen-newsroom.com",721],["openbank.*",722],["tagus-eoficina.grupogimeno.com",723],["tidal.com",724],["knax.de",725],["ordblindenetvaerket.dk",726],["boligbeton.dk",726],["dukh.dk",726],["pevgrow.com",727],["ya.ru",728],["ipolska24.pl",729],["17bankow.com",729],["kazimierzdolny.pl",729],["vpolshchi.pl",729],["dobreprogramy.pl",[729,730]],["essanews.com",729],["money.pl",729],["autokult.pl",729],["komorkomania.pl",729],["polygamia.pl",729],["autocentrum.pl",729],["homebook.pl",729],["domodi.pl",729],["jastrzabpost.pl",729],["open.fm",729],["gadzetomania.pl",729],["fotoblogia.pl",729],["abczdrowie.pl",729],["parenting.pl",729],["kafeteria.pl",729],["vibez.pl",729],["wakacje.pl",729],["extradom.pl",729],["totalmoney.pl",729],["superauto.pl",729],["nerwica.com",729],["forum.echirurgia.pl",729],["dailywrap.net",729],["pysznosci.pl",729],["genialne.pl",729],["finansowysupermarket.pl",729],["deliciousmagazine.pl",729],["audioteka.com",729],["easygo.pl",729],["so-magazyn.pl",729],["o2.pl",729],["pudelek.pl",729],["benchmark.pl",729],["wp.pl",729],["altibox.dk",731],["altibox.no",731],["talksport.com",732],["zuiderzeemuseum.nl",733],["gota.io",734],["nwzonline.de",735],["scaleway.com",736],["bistro.sk",737],["spk-schaumburg.de",738],["computerbase.de",739],["comdirect.de",740],["metro.co.uk",741],["imaios.com",742],["myprivacy.dpgmedia.nl",743],["myprivacy.dpgmedia.be",743],["www.dpgmediagroup.com",743],["exxen.com",744],["cbsnews.com",745],["infshop.fi",746],["jimms.fi",747],["avinor.no",748],["accursia-capital.de",749],["joyn.de",750],["oeq.org",751],["codewars.com",752],["formazionepro.it",753]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = true;

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
