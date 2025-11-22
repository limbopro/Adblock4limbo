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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#CybotCookiebotDialogBodyButtonDecline"],["#pubtech-cmp button[aria-label=\"Continue without accepting\"]"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button[data-t=\"rejectAll\"]","","1000"],["#gdpr-banner-cmp-button","","1000"],["button[aria-label=\"Datenschutzbestimmungen und Einstellungen ablehnen\"]","","1200"],["#iubenda-cs-banner button.iubenda-cs-close-btn"],["button.message-button[aria-label=\"More Options\"]"],["button.sp_choice_type_REJECT_ALL","","2000"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"consent\"]:not([class*=\"reject\"])"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[aria-label]","","1000"],["ytm-button-renderer.eom-accept button","","2000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","2000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["#pmConsentWall .pmConsentWall-button:not([href])","","1000","reloadAfterClick:200"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["#qc-cmp2-container button#accept-btn"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1500"],["button[title=\"Zustimmen\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-e2e=\"pure-accept-ads\"]","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button.brlbs-btn-save","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.js-alert-cookie-reject","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button[title=\"Accept & Continue\"]","","1000"],["button#ensRejectAll","","1500"],["button#ensSave","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],[".modal-actions-accept-btn","","2000"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button.btn.customize","","800"],["button.confirm-button","","1200"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button[id=\"ketch-banner-button-secondary\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Agree\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button#js-data-privacy-manage-cookies","","1000"],["button#js-manage-data-privacy-save-button","1500"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#btnAcceptPDPA","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],["button.btn-secondary[autofocus=\"true\"]","","1000"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button[title=\"Accept and continue\"]","","2000"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],["button#acceptCookiesTerms","","1000"],["a.footer-cookies-button-save-all","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["body > div[class] > div[class] > div[class]:has(a[href*=\"holding.wp.pl\"]) > div[class] > div[class]:only-child > button:first-child"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"],["#cookie-consent-button","","1500"],["com-consent-layer >>> #cmpDenyAll","","2500"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"level1PrimaryButton-\"]:not([class*=\"reject\"])"],["div#continueWithoutAccepting","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["body > div.w-screen.p-\\[1\\.25rem\\].fixed.left-0.top-0.flex button:first-child + button"],["#ketch-banner-buttons-container-compact > button#ketch-banner-button-primary"],[".prelim-manage-cookies-button.btn-default"],["button[data-role=\"necessary\"]"],[".cookie-banner--open button[data-variant=\"primary\"] + [data-variant=\"primary\"]","","1000"],["button[data-hook=\"consent-banner-decline-all-button\""],["cmp-banner >>> cmp-dialog >>> cmp-button >>> .button.button--primary","","1000"],["button#c-t-bn"],["a[fs-consent-element=\"deny\"]","","2000"],["button.c_link","","1000"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["heise.de",7],["bloomberg.com",[8,9]],["forbes.com",[8,84]],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,192]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,188]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["tomsguide.com>>",[24,25]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["oeamtc.at",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,189]],["ubereats.com",[39,189]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["bbc.com>>",43],["ilgiornale.it",44],["dimensione.com",45],["wero-wallet.eu",45],["everyeye.it",46],["pepper.pl",47],["dealabs.com",47],["hotukdeals.com",47],["chollometro.com",47],["preisjaeger.at",48],["mydealz.de",48],["kleinanzeigen.de",[49,50]],["105.net",51],["pcgamer.com>>",[52,53]],["dailymail.co.uk",54],["almamedia.fi>>",55],["ampparit.com>>",55],["arvopaperi.fi>>",55],["iltalehti.fi>>",55],["kauppalehti.fi>>",55],["mikrobitti.fi>>",55],["talouselama.fi>>",55],["tekniikkatalous.fi>>",55],["tivi.fi>>",55],["uusisuomi.fi>>",55],["aamulehti.fi>>",[56,57,58]],["etlehti.fi>>",[56,57,58]],["gloria.fi>>",[56,57,58]],["hs.fi>>",[56,57,58]],["hyvaterveys.fi>>",[56,57,58]],["is.fi>>",[56,57,58]],["jamsanseutu.fi>>",[56,57,58]],["janakkalansanomat.fi>>",[56,57,58]],["kankaanpaanseutu.fi>>",[56,57,58]],["kmvlehti.fi>>",[56,57,58]],["kodinkuvalehti.fi>>",[56,57,58]],["merikarvialehti.fi>>",[56,57,58]],["nokianuutiset.fi>>",[56,57,58]],["pelikone.fi>>",[56,57,58]],["rannikkoseutu.fi>>",[56,57,58]],["ruutu.fi>>",[56,57,58]],["satakunnankansa.fi>>",[56,57,58]],["soppa365.fi>>",[56,57,58]],["suurkeuruu.fi>>",[56,57,58]],["sydansatakunta.fi>>",[56,57,58]],["tyrvaansanomat.fi>>",[56,57,58]],["valkeakoskensanomat.fi>>",[56,57,58]],["vauva.fi>>",[56,57,58]],["telekom.com",59],["telekom.de",59],["abola.pt",60],["flytap.com",60],["ansons.de",60],["blick.ch",60],["buienradar.be",60],["crunchyroll.com",60],["digi24.ro",60],["digisport.ro",60],["digitalfoundry.net",60],["egx.net",60],["emirates.com",60],["eurogamer.it",60],["foto-erhardt.de",60],["gmx.*",60],["kizi.com",60],["mail.com",60],["mcmcomiccon.com",60],["nachrichten.at",60],["nintendolife.com",60],["oe24.at",60],["observatornews.ro",60],["paxsite.com",60],["peacocktv.com",60],["player.pl",60],["plus500.*",60],["pricerunner.com",60],["pricerunner.se",60],["pricerunner.dk",60],["proximus.be",[60,662]],["proximus.com",60],["purexbox.com",60],["pushsquare.com",60],["rugbypass.com",60],["southparkstudios.com",[60,304]],["southwest.com",60],["starwarscelebration.com",60],["sweatybetty.com",60],["theaa.ie",60],["thehaul.com",60],["timeextension.com",60],["travelandleisure.com",60],["tunein.com",60],["tvn24.pl",60],["uefa.com",60],["videoland.com",60],["wizzair.com",60],["wetter.at",60],["wowbiz.ro",60],["dicebreaker.com",[61,62]],["eurogamer.es",[61,62]],["eurogamer.net",[61,62]],["eurogamer.nl",[61,62]],["eurogamer.pl",[61,62]],["eurogamer.pt",[61,62]],["gamesindustry.biz",[61,62]],["reedpop.com",[61,62]],["rockpapershotgun.com",[61,62]],["thepopverse.com",[61,62]],["vg247.com",[61,62]],["videogameschronicle.com",[61,62]],["eurogamer.de",63],["roadtovr.com",64],["jotex.*",64],["mundodeportivo.com",[65,136]],["www.youtube.com",66],["m.youtube.com",67],["ohra.nl",68],["corriere.it",69],["gazzetta.it",69],["oggi.it",69],["cmp.sky.it",70],["tennisassa.fi",71],["formula1.com",72],["f1racing.pl",73],["music.amazon.*",[74,75]],["consent-pref.trustarc.com",76],["highlights.legaseriea.it",77],["calciomercato.com",77],["sosfanta.com",78],["chrono24.*",[79,80]],["wetter.com",81],["youmath.it",82],["pip.gov.pl",83],["dailybuzz.nl",85],["bnn.de",85],["dosenbach.ch",85],["dw.com",85],["kinepolis.*",85],["mediaite.com",85],["nzz.ch",85],["winfuture.de",85],["lippu.fi",85],["racingnews365.com",85],["reifendirekt.ch",85],["vaillant.*",85],["bauhaus.no",86],["bauhaus.se",86],["beko-group.de",86],["billiger.de",86],["burda.com",86],["vanharen.nl",86],["deichmann.com",[86,109,493]],["meraluna.de",86],["slashdot.org",86],["hermann-saunierduval.it",86],["protherm.cz",86],["saunierduval.es",86],["protherm.sk",86],["protherm.ua",86],["saunierduval.hu",86],["saunierduval.ro",86],["saunierduval.at",86],["awb.nl",86],["spar.hu",87],["group.vattenfall.com",87],["mediaset.it",88],["fortune.com",89],["ilrestodelcarlino.it",90],["quotidiano.net",90],["lanazione.it",90],["ilgiorno.it",90],["iltelegrafolivorno.it",90],["auto.it",91],["beauxarts.com",91],["beinsports.com",91],["bfmtv.com",[91,137]],["boursobank.com",91],["boursorama.com",[91,137]],["boursier.com",[91,235]],["brut.media",91],["canalplus.com",91],["decathlon.fr",[91,232]],["diverto.tv",91],["eden-park.com",91],["foodvisor.io",91],["franceinfo.fr",91],["frandroid.com",91],["jobijoba.*",91],["hotelsbarriere.com",91],["intersport.*",[91,203]],["idealista.it",91],["o2.fr",91],["lejdd.fr",[91,136]],["lechorepublicain.fr",91],["la-croix.com",91],["linfo.re",91],["lamontagne.fr",91],["laredoute.fr",91],["largus.fr",91],["leprogres.fr",91],["lesnumeriques.com",91],["libramemoria.com",91],["lopinion.fr",91],["marieclaire.fr",91],["maville.com",91],["michelin.*",91],["midilibre.fr",[91,691]],["meteofrance.com",91],["mondialtissus.fr",91],["orange.fr",91],["orpi.com",91],["oscaro.com",91],["ouest-france.fr",[91,105,137,692]],["parismatch.com",91],["pagesjaunes.fr",91],["programme-television.org",[91,137]],["publicsenat.fr",[91,137]],["rmcbfmplay.com",[91,137]],["science-et-vie.com",[91,136]],["seloger.com",91],["societe.com",91],["suzuki.fr",91],["sudouest.fr",91],["web-agri.fr",91],["nutri-plus.de",92],["americanairlines.*",93],["consent.capital.fr",94],["consent.programme.tv",94],["consent.voici.fr",94],["programme-tv.net",94],["cmpv2.finn.no",95],["cmp.tek.no",[96,97]],["cmp.e24.no",[96,97]],["minmote.no",[96,97]],["cmp.vg.no",[96,97]],["cloud.google.com",98],["developer.android.com",98],["registry.google",98],["safety.google",98],["huffingtonpost.fr",99],["rainews.it",100],["remarkable.com",101],["netzwelt.de",102],["money.it",103],["imore.com>>",104],["allocine.fr",105],["jeuxvideo.com",105],["ozap.com",105],["le10sport.com",105],["xataka.com",105],["cmp.fitbook.de",106],["cmp.autobild.de",106],["sourcepoint.sport.de",106],["cmp-sp.tagesspiegel.de",106],["cmp.bz-berlin.de",106],["cmp.cicero.de",106],["cmp.techbook.de",106],["cmp.stylebook.de",106],["cmp2.bild.de",106],["cmp2.freiepresse.de",106],["sourcepoint.wetter.de",106],["consent.finanzen.at",106],["consent.finanzen.net",106],["consent.up.welt.de",106],["sourcepoint.n-tv.de",106],["sourcepoint.kochbar.de",106],["sourcepoint.rtl.de",106],["cmp.computerbild.de",106],["cmp.petbook.de",106],["cmp-sp.siegener-zeitung.de",106],["cmp-sp.sportbuzzer.de",106],["klarmobil.de",106],["technikum-wien.at",107],["eneco.nl",108],["salomon.com",110],["blackpoolgazette.co.uk",111],["lep.co.uk",111],["northamptonchron.co.uk",111],["scotsman.com",111],["shieldsgazette.com",111],["thestar.co.uk",111],["portsmouth.co.uk",111],["sunderlandecho.com",111],["northernirelandworld.com",111],["3addedminutes.com",111],["anguscountyworld.co.uk",111],["banburyguardian.co.uk",111],["bedfordtoday.co.uk",111],["biggleswadetoday.co.uk",111],["bucksherald.co.uk",111],["burnleyexpress.net",111],["buxtonadvertiser.co.uk",111],["chad.co.uk",111],["daventryexpress.co.uk",111],["derbyshiretimes.co.uk",111],["derbyworld.co.uk",111],["derryjournal.com",111],["dewsburyreporter.co.uk",111],["doncasterfreepress.co.uk",111],["falkirkherald.co.uk",111],["fifetoday.co.uk",111],["glasgowworld.com",111],["halifaxcourier.co.uk",111],["harboroughmail.co.uk",111],["harrogateadvertiser.co.uk",111],["hartlepoolmail.co.uk",111],["hemeltoday.co.uk",111],["hucknalldispatch.co.uk",111],["lancasterguardian.co.uk",111],["leightonbuzzardonline.co.uk",111],["lincolnshireworld.com",111],["liverpoolworld.uk",111],["londonworld.com",111],["lutontoday.co.uk",111],["manchesterworld.uk",111],["meltontimes.co.uk",111],["miltonkeynes.co.uk",111],["newcastleworld.com",111],["newryreporter.com",111],["newsletter.co.uk",111],["northantstelegraph.co.uk",111],["northumberlandgazette.co.uk",111],["nottinghamworld.com",111],["peterboroughtoday.co.uk",111],["rotherhamadvertiser.co.uk",111],["stornowaygazette.co.uk",111],["surreyworld.co.uk",111],["thescarboroughnews.co.uk",111],["thesouthernreporter.co.uk",111],["totallysnookered.com",111],["wakefieldexpress.co.uk",111],["walesworld.com",111],["warwickshireworld.com",111],["wigantoday.net",111],["worksopguardian.co.uk",111],["yorkshireeveningpost.co.uk",111],["yorkshirepost.co.uk",111],["eurocard.com",112],["saseurobonusmastercard.se",113],["barrons.com>>",114],["tver.jp",115],["linkedin.com",116],["elmundo.es",[117,137]],["expansion.com",117],["s-pankki.fi",118],["srf.ch",118],["alternate.de",118],["bayer04.de",118],["douglas.de",118],["dr-beckmann.com",118],["falke.com",118],["fitnessfirst.de",118],["flaschenpost.de",118],["gloeckle.de",118],["hornbach.nl",118],["hypofriend.de",118],["lactostop.de",118],["neumann.com",118],["post.ch",118],["postbank.de",118],["rts.ch",118],["zalando.*",118],["immowelt.de",119],["joyn.*",119],["morenutrition.de",119],["mapillary.com",120],["transfermarkt.com>>",121],["cmp.seznam.cz",122],["marca.com",123],["raiplay.it",124],["raiplaysound.it",124],["consent.faz.net",125],["derstandard.at",125],["derstandard.de",125],["automoto.it",126],["ansa.it",126],["cdt.ch",126],["delladio.it",126],["huffingtonpost.it",126],["internazionale.it",126],["lastampa.it",126],["macitynet.it",126],["moto.it",126],["movieplayer.it",126],["multiplayer.it",126],["repubblica.it",126],["tomshw.it",126],["skuola.net",126],["spaziogames.it",126],["today.it",126],["tuttoandroid.net",126],["tuttotech.net",126],["ilgazzettino.it",127],["ilmessaggero.it",127],["ilsecoloxix.it",127],["weather.com>>",[128,129]],["privacy.motorradonline.de",130],["impulse.de>>",130],["consent.watson.de",130],["consent.kino.de",130],["consent.desired.de",130],["cmpv2.fn.de",130],["spp.nextpit.de",130],["dailystar.co.uk",[131,132,133,134]],["mirror.co.uk",[131,132,133,134]],["idnes.cz",135],["20minutes.fr",136],["20minutos.es",136],["24sata.hr",136],["abc.es",136],["actu.fr",136],["antena3.com",136],["antena3internacional.com",136],["atresmedia.com",136],["atresmediapublicidad.com",136],["atresmediastudios.com",136],["atresplayer.com",136],["autopista.es",136],["belfasttelegraph.co.uk",136],["bemad.es",136],["bonduelle.it",136],["bonniernews.se",136],["bt.se",136],["cadenadial.com",136],["caracol.com.co",136],["cas.sk",136],["charentelibre.fr",136],["ciclismoafondo.es",136],["cnews.fr",136],["cope.es",136],["correryfitness.com",136],["courrier-picard.fr",136],["cuatro.com",136],["decathlon.nl",136],["decathlon.pl",136],["di.se",136],["diariocordoba.com",136],["diariodenavarra.es",136],["diariosur.es",136],["diariovasco.com",136],["diepresse.com",136],["divinity.es",136],["dn.se",136],["dnevnik.hr",136],["dumpert.nl",136],["ebuyclub.com",136],["edreams.de",136],["edreams.net",136],["elcomercio.es",136],["elconfidencial.com",136],["elcorreo.com",136],["eldesmarque.com",136],["eldiario.es",136],["eldiariomontanes.es",136],["elespanol.com",136],["elle.fr",136],["elpais.com",[136,138]],["elperiodico.com",136],["elperiodicodearagon.com",136],["elplural.com",136],["energytv.es",136],["engadget.com",136],["es.ara.cat",136],["euronews.com",136],["europafm.com",136],["expressen.se",136],["factoriadeficcion.com",136],["filmstarts.de",136],["flooxernow.com",136],["folkbladet.nu",136],["footmercato.net",136],["france.tv",136],["france24.com",136],["fussballtransfers.com",136],["ghacks.net",136],["gva.be",136],["hbvl.be",136],["heraldo.es",136],["hoy.es",136],["ideal.es",136],["idealista.pt",136],["krone.at",136],["kurier.at",136],["lacoste.com",136],["ladepeche.fr",136],["lalibre.be",136],["lanouvellerepublique.fr",136],["larazon.es",136],["lasexta.com",136],["lasprovincias.es",136],["latribune.fr",136],["lavanguardia.com",136],["laverdad.es",136],["lavozdegalicia.es",136],["leboncoin.fr",136],["lecturas.com",136],["ledauphine.com",136],["lejsl.com",136],["leparisien.fr",136],["lesoir.be",136],["letelegramme.fr",136],["libremercado.com",136],["localeyes.dk",136],["los40.com",136],["lotoquebec.com",136],["lunion.fr",136],["m6.fr",136],["marianne.cz",136],["marmiton.org",136],["mediaset.es",136],["melodia-fm.com",136],["metronieuws.nl",136],["moviepilot.de",136],["mtmad.es",136],["multilife.com.pl",136],["naszemiasto.pl",136],["nationalgeographic.com.es",136],["nicematin.com",136],["nieuwsblad.be",136],["notretemps.com",136],["numerama.com",136],["okdiario.com",136],["ondacero.es",136],["podiumpodcast.com",136],["portail.lotoquebec.com",136],["profil.at",136],["public.fr",136],["publico.es",136],["radiofrance.fr",136],["rankia.com",136],["rfi.fr",136],["rossmann.pl",136],["rtbf.be",[136,232]],["rtl.lu",136],["sensacine.com",136],["sfgame.net",136],["shure.com",136],["silicon.es",136],["sncf-connect.com",136],["sport.es",136],["sydsvenskan.se",136],["techcrunch.com",136],["telegraaf.nl",136],["telequebec.tv",136],["tf1.fr",136],["tradingsat.com",136],["trailrun.es",136],["video-streaming.orange.fr",136],["xpress.fr",136],["laprovincia.es",137],["informacion.es",137],["tportal.hr",137],["ivoox.com",137],["as.com",137],["slam.nl",137],["bienpublic.com",137],["funradio.fr",137],["gamepro.de",[137,200,201]],["lemon.fr",137],["lexpress.fr",137],["shadow.tech",137],["letemps.ch",137],["mein-mmo.de",137],["heureka.sk",137],["film.at",137],["dhnet.be",137],["lesechos.fr",[137,237]],["marianne.net",[137,232]],["jeanmarcmorandini.com",[137,233]],["dna.fr",137],["sudinfo.be",137],["europe1.fr",[137,233]],["rtl.be",[137,232]],["reviewingthebrew.com",137],["jaysjournal.com",137],["reignoftroy.com",137],["ryobitools.eu",[139,140]],["americanexpress.com",141],["rtvc.es>>",142],["beteve.cat>>",143],["whatcar.com>>",143],["bloodyelbow.com>>",144],["consent.radiotimes.com",144],["sp-consent.szbz.de",145],["cmp.omni.se",146],["cmp.svd.se",146],["cmp.aftonbladet.se",146],["cmp.tv.nu",146],["weltkunst.de>>",147],["consent.economist.com",148],["studentagency.cz",148],["driving.co.uk>>",149],["cmpv2.foundryco.com",149],["cmpv2.infoworld.com",149],["cmpv2.arnnet.com.au",149],["sp-cdn.pcgames.de",150],["sp-cdn.pcgameshardware.de",150],["consentv2.sport1.de",150],["boerse-online.de>>",150],["cmp.mz.de",150],["cmpv2.tori.fi",151],["tidende.dk>>",152],["consent.spielaffe.de",153],["bondekompaniet.no",154],["degiro.*",154],["epochtimes.de",154],["vikingline.com",154],["tfl.gov.uk",154],["drklein.de",154],["hildegardis-krankenhaus.de",154],["kleer.se",154],["lekiaviation.com",154],["lotto.pl",154],["mineralstech.com",154],["volunteer.digitalboost.org.uk",154],["starhotels.com",154],["tefl.com",154],["universumglobal.com",154],["tui.com",155],["rexel.*",156],["csob.sk",157],["greenstuffworld.com",158],["morele.net",[159,160]],["1und1.de",161],["infranken.de",162],["cmp.tvspielfilm.de",163],["cmp.tvtoday.de",163],["cmp.bunte.de",163],["cmp.chip.de",163],["cmp.focus.de",[163,519]],["stol.it>>",163],["estadiodeportivo.com",164],["tameteo.*",164],["tempo.pt",164],["meteored.*",164],["pogoda.com",164],["yourweather.co.uk",164],["tempo.com",164],["theweather.net",164],["tiempo.com",164],["ilmeteo.net",164],["daswetter.com",164],["kicker.de",165],["formulatv.com",166],["web.de",167],["lefigaro.fr",168],["linternaute.com",169],["consent.caminteresse.fr",170],["volksfreund.de",171],["rp-online.de",171],["dailypost.co.uk",172],["the-express.com",172],["vide-greniers.org",172],["dailyrecord.co.uk",173],["bluray-disc.de",174],["elio-systems.com",174],["stagatha-fachklinik.de",174],["tarife.mediamarkt.de",174],["lz.de",174],["gaggenau.com",174],["saturn.de",175],["eltiempo.es",[176,177]],["otempo.pt",178],["atlasformen.*",179],["cmp-sp.goettinger-tageblatt.de",180],["cmp-sp.saechsische.de",180],["cmp-sp.ln-online.de",180],["cz.de",180],["dewezet.de",180],["dnn.de",180],["haz.de",180],["gnz.de",180],["landeszeitung.de",180],["lvz.de",180],["maz-online.de",180],["ndz.de",180],["op-marburg.de",180],["ostsee-zeitung.de",180],["paz-online.de",180],["reisereporter.de",180],["rga.de",180],["rnd.de",180],["siegener-zeitung.de",180],["sn-online.de",180],["solinger-tageblatt.de",180],["sportbuzzer.de",180],["szlz.de",180],["tah.de",180],["torgauerzeitung.de",180],["waz-online.de",180],["privacy.maennersache.de",180],["refinery29.com>>",181],["sinergy.ch",182],["agglo-valais-central.ch",182],["biomedcentral.com",183],["hsbc.*",184],["hsbcnet.com",184],["hsbcinnovationbanking.com",184],["create.hsbc",184],["gbm.hsbc.com",184],["hsbc.co.uk",185],["internationalservices.hsbc.com",185],["history.hsbc.com",185],["about.hsbc.co.uk",186],["privatebanking.hsbc.com",187],["independent.co.uk",190],["privacy.crash.net",190],["the-independent.com",191],["argos.co.uk",193],["poco.de",[194,195]],["moebelix.*",194],["moemax.*",194],["xxxlutz.*",194],["xxxlesnina.*",194],["moebel24.at",195],["moebel24.ch",195],["meubles.fr",195],["meubelo.nl",195],["moebel.de",195],["lipo.ch",196],["schubiger.ch",197],["aedt.de",198],["berlin-live.de",198],["bike-magazin.de",198],["connect.de",198],["gutefrage.net",198],["insideparadeplatz.ch",198],["morgenpost.de",198],["thueringen24.de",198],["pdfupload.io",199],["gamestar.de",[200,201,241]],["verksamt.se",202],["acmemarkets.com",203],["amtrak.com",203],["beko.com",203],["bepanthen.com.au",203],["berocca.com.au",203],["booking.com",203],["carrefour.fr",203],["centrum.sk",203],["claratyne.com.au",203],["credit-suisse.com",203],["ceskatelevize.cz",203],["deporvillage.*",203],["de.vanguard",203],["dhl.de",203],["digikey.*",203],["drafthouse.com",203],["dunelm.com",203],["eurosport.fr",203],["fello.se",203],["fielmann.*",203],["flashscore.fr",203],["flightradar24.com",203],["fnac.es",203],["foodandwine.com",203],["fourseasons.com",203],["khanacademy.org",203],["konami.com",203],["jll.*",203],["jobs.redbull.com",203],["hellenicbank.com",203],["gemini.pl",203],["groceries.asda.com",203],["lamborghini.com",203],["menshealth.com",203],["n26.com",203],["nintendo.com",203],["nokia.com",203],["oneweb.net",203],["omnipod.com",203],["oralb.*",203],["panasonic.com",203],["parkside-diy.com",203],["pluto.tv",203],["popularmechanics.com",203],["polskieradio.pl",203],["pringles.com",203],["questdiagnostics.com",203],["radissonhotels.com",203],["ricardo.ch",203],["rockstargames.com",203],["rte.ie",203],["salesforce.com",203],["samsonite.*",203],["spiele.heise.de",203],["spirit.com",203],["stenaline.co.uk",203],["swisscom.ch",203],["swisspass.ch",203],["technologyfromsage.com",203],["telenet.be",203],["tntsports.co.uk",203],["theepochtimes.com",203],["toujeo.com",203],["uber-platz.de",203],["vinted.com",203],["wallapop.com",203],["wickes.co.uk",203],["workingtitlefilms.com",203],["vattenfall.de",203],["winparts.fr",203],["yoigo.com",203],["zoominfo.com",203],["allegiantair.com",204],["hallmarkchannel.com",204],["incorez.com",204],["noovle.com",204],["otter.ai",204],["plarium.com",204],["telsy.com",204],["timenterprise.it",204],["tim.it",204],["tradersunion.com",204],["fnac.*",204],["yeti.com",204],["here.com",[205,700]],["vodafone.com",205],["kooora.com>>",206],["cmp.heise.de",[207,208]],["cmp.am-online.com",207],["cmp.motorcyclenews.com",207],["consent.newsnow.co.uk",207],["cmp.todays-golfer.com",207],["koeser.com",209],["shop.schaette-pferd.de",209],["schaette.de",209],["central-bb.de",210],["fitnessfoodcorner.de",211],["kuehlungsborn.de",212],["espressocoffeeshop.com",213],["brainmarket.pl",214],["getroots.app",215],["cart-in.re",[216,625]],["prestonpublishing.pl",217],["zara.com",218],["lepermislibre.fr",218],["negociardivida.spcbrasil.org.br",219],["pons.com",220],["adidas.*",221],["privacy.topreality.sk",222],["privacy.autobazar.eu",222],["vu.lt",223],["adnkronos.com",[224,225]],["cornwalllive.com",[224,225]],["cyprus-mail.com",[224,225]],["einthusan.tv",[224,225]],["informazione.it",[224,225]],["mymovies.it",[224,225]],["tuttoeuropei.com",[224,225]],["video.lacnews24.it",[224,225]],["protothema.gr",224],["flash.gr",224],["taxscouts.com",226],["heute.at>>",227],["online.no",228],["telenor.no",228],["austrian.com",229],["lufthansa.com",229],["kampfkunst-herz.de",230],["glow25.de",230],["h-f.at",230],["hornetsecurity.com",230],["ifun.de",230],["kayzen.io",230],["wasserkunst-hamburg.de",230],["zahnspange-oelde.de",230],["xinedome.de",231],["bnc.ca",232],["egora.fr",232],["engelvoelkers.com",232],["estrategiasdeinversion.com",232],["festo.com",232],["francebleu.fr",232],["francemediasmonde.com",232],["geny.com",232],["giphy.com",232],["idealista.com",232],["infolibre.es",232],["inpost.pl",232],["information.tv5monde.com",232],["ing.es",232],["knipex.de",232],["laprovence.com",232],["lemondeinformatique.fr",232],["libertaddigital.com",232],["mappy.com",232],["orf.at",232],["philibertnet.com",232],["researchgate.net",232],["standaard.be",232],["stroilioro.com",232],["taxfix.de",232],["telecinco.es",232],["vistaalegre.com",232],["zimbra.free.fr",232],["usinenouvelle.com",234],["reussir.fr",236],["bruendl.at",238],["latamairlines.com",239],["elisa.ee",240],["baseendpoint.brigitte.de",241],["baseendpoint.gala.de",241],["baseendpoint.haeuser.de",241],["baseendpoint.stern.de",241],["baseendpoint.urbia.de",241],["cmp.tag24.de",241],["cmp-sp.handelsblatt.com",241],["cmpv2.berliner-zeitung.de",241],["golem.de",241],["rockhard.de>>",241],["consent.t-online.de",241],["sp-consent.stuttgarter-nachrichten.de",242],["btc-echo.de>>",242],["sp-consent.stuttgarter-zeitung.de",242],["regjeringen.no",243],["sp-manager-magazin-de.manager-magazin.de",244],["consent.11freunde.de",244],["f1academy.com>>",245],["timeout.com>>",[245,246]],["karlsruhe-insider.de>>",247],["promiflash.de>>",248],["wallester.com",249],["centrum24.pl",250],["replay.lsm.lv",251],["ltv.lsm.lv",251],["bernistaba.lsm.lv",251],["verl.de",252],["cubo-sauna.de",252],["mbl.is",252],["auto-medienportal.net",252],["mobile.de",253],["cookist.it",254],["fanpage.it",254],["geopop.it",254],["lexplain.it",254],["royalmail.com",255],["gmx.net",256],["gmx.ch",257],["mojehobby.pl",258],["super-hobby.*",258],["sp.stylevamp.de",[259,260]],["cmp.wetteronline.de",259],["sp.stylevamp.com",260],["audi.*",[261,262]],["easyjet.com",261],["experian.co.uk",261],["postoffice.co.uk",261],["tescobank.com",261],["internetaptieka.lv",[263,264]],["nike.com",265],["wells.pt",266],["dskdirect.bg",267],["cmpv2.dba.dk",268],["spcmp.crosswordsolver.com",269],["gbnews.com>>",[269,629]],["cdn.privacy-mgmt.com",269],["homary.com",[270,271]],["ecco.com",272],["georgjensen.com",272],["thomann.*",273],["landkreis-kronach.de",274],["effectiefgeven.be",275],["northcoast.com",275],["chaingpt.org",275],["bandenconcurrent.nl",276],["bandenexpert.be",276],["reserved.com",277],["metro.it",278],["makro.es",278],["metro.sk",278],["metro-cc.hr",278],["makro.nl",278],["metro.bg",278],["metro.at",278],["metro-tr.com",278],["metro.de",278],["metro.fr",278],["makro.cz",278],["metro.ro",278],["makro.pt",278],["makro.pl",278],["sklepy-odido.pl",278],["rastreator.com",278],["metro.ua",279],["metro.rs",279],["metro-kz.com",279],["metro.md",279],["metro.hu",279],["metro-cc.ru",279],["metro.pk",279],["balay.es",280],["constructa.com",280],["dafy-moto.com",281],["akku-shop.nl",282],["akkushop-austria.at",282],["akkushop-b2b.de",282],["akkushop.de",282],["akkushop.dk",282],["batterie-boutique.fr",282],["akkushop-schweiz.ch",283],["evzuttya.com.ua",284],["eobuv.cz",284],["eobuwie.com.pl",284],["ecipele.hr",284],["eavalyne.lt",284],["chaussures.fr",284],["ecipo.hu",284],["eobuv.sk",284],["epantofi.ro",284],["epapoutsia.gr",284],["escarpe.it",284],["eschuhe.de",284],["obuvki.bg",284],["zapatos.es",284],["swedbank.ee",285],["mudanzavila.es",286],["bienmanger.com",287],["gesipa.*",288],["gesipausa.com",288],["beckhoff.com",288],["zitekick.dk",289],["eltechno.dk",289],["okazik.pl",289],["batteryempire.*",290],["maxi.rs",291],["garmin.com",292],["invisalign.*",292],["one4all.ie",292],["osprey.com",292],["wideroe.no",293],["bmw.*",294],["kijk.nl",295],["nordania.dk",296],["danskebank.*",296],["danskeci.com",296],["danica.dk",296],["dehn.*",297],["gewerbegebiete.de",298],["cordia.fr",299],["vola.fr",300],["lafi.fr",301],["skyscanner.*",302],["coolblue.*",303],["chipotle.com",304],["sanareva.*",305],["atida.fr",305],["bbva.*",306],["bbvauk.com",306],["expertise.unimi.it",307],["altenberg.de",308],["vestel.es",309],["tsb.co.uk",310],["buienradar.nl",[311,312]],["linsenplatz.de",313],["budni.de",314],["erstecardclub.hr",314],["teufel.de",[315,316]],["abp.nl",317],["simplea.sk",318],["flip.bg",319],["kiertokanki.com",320],["supla.fi>>",321],["leirovins.be",322],["vias.be",323],["edf.fr",324],["virbac.com",324],["diners.hr",324],["squarehabitat.fr",324],["arbitrobancariofinanziario.it",325],["ivass.it",325],["economiapertutti.bancaditalia.it",325],["smit-sport.de",326],["gekko-computer.de",326],["jysk.al",327],["go-e.com",328],["malerblatt-medienservice.de",329],["architekturbuch.de",329],["medienservice-holz.de",329],["leuchtstark.de",329],["casius.nl",330],["coolinarika.com",331],["giga-hamburg.de",331],["vakgaragevannunen.nl",331],["fortuluz.es",331],["finna.fi",331],["eurogrow.es",331],["paid.ai",331],["topnatur.cz",331],["topnatur.eu",331],["vakgarage.nl",331],["whufc.com",331],["zomaplast.cz",331],["envafors.dk",332],["dabbolig.dk",[333,334]],["daruk-emelok.hu",335],["exakta.se",336],["larca.de",337],["roli.com",338],["okazii.ro",339],["lr-shop-direkt.de",339],["portalprzedszkolny.pl",339],["tgvinoui.sncf",340],["l-bank.de",341],["interhyp.de",342],["indigoneo.*",343],["transparency.meta.com",344],["dojusagro.lt",345],["eok.ee",345],["kripa.it",345],["nextdaycatering.co.uk",345],["safran-group.com",345],["sr-ramenendeuren.be",345],["ilovefreegle.org",345],["tribexr.com",345],["understandingsociety.ac.uk",345],["bestbuycyprus.com",346],["strato.*",347],["strato-hosting.co.uk",347],["auto.de",348],["contentkingapp.com",349],["comune.palermo.it",350],["get-in-engineering.de",351],["spp.nextpit.com",352],["spp.nextpit.es",353],["spp.nextpit.it",354],["spp.nextpit.com.br",355],["spp.nextpit.fr",356],["otterbox.com",357],["stoertebeker-brauquartier.com",358],["stoertebeker.com",358],["stoertebeker-eph.com",358],["aparts.pl",359],["sinsay.com",[360,361]],["benu.cz",362],["stockholmresilience.org",363],["ludvika.se",363],["kammarkollegiet.se",363],["cazenovecapital.com",364],["statestreet.com",365],["beopen.lv",366],["cesukoncertzale.lv",367],["dodo.fr",368],["makelaarsland.nl",369],["bezirk-schwaben.de",370],["dorfen.de",370],["nutsinbulk.co.uk",371],["bricklink.com",372],["bestinver.es",373],["icvs2023.conf.tuwien.ac.at",374],["racshop.co.uk",[375,376]],["baabuk.com",377],["sapien.io",377],["tradedoubler.com",377],["app.lepermislibre.fr",378],["multioferta.es",379],["testwise.com",[380,381]],["tonyschocolonely.com",382],["fitplus.is",382],["fransdegrebber.nl",382],["lilliputpress.ie",382],["lexibo.com",382],["marin-milou.com",382],["dare2tri.com",382],["t3micro.*",382],["la-vie-naturelle.com",[383,384]],["inovelli.com",385],["uonetplus.vulcan.net.pl",[386,387]],["consent.helagotland.se",388],["oper.koeln",[389,390]],["deezer.com",391],["hoteldesartssaigon.com",392],["autoritedelaconcurrence.fr",393],["groupeonepoint.com",393],["geneanet.org",393],["carrieres.groupegalerieslafayette.com",393],["immo-banques.fr",393],["lingvanex.com",393],["turncamp.com",394],["ejobs.ro",[395,396]],["kupbilecik.*",[397,398]],["coolbe.com",399],["serienjunkies.de",400],["computerhoy.20minutos.es",401],["clickskeks.at",402],["clickskeks.de",402],["abt-sportsline.de",402],["wittmann-group.com",402],["exemplary.ai",403],["forbo.com",403],["stores.sk",403],["nerdstar.de",403],["prace.cz",403],["profesia.sk",403],["profesia.cz",403],["pracezarohem.cz",403],["atmoskop.cz",403],["seduo.sk",403],["seduo.cz",403],["teamio.com",403],["arnold-robot.com",403],["cvonline.lt",403],["cv.lv",403],["cv.ee",403],["dirbam.lt",403],["visidarbi.lv",403],["otsintood.ee",403],["webtic.it",403],["gerth.de",404],["pamiatki.pl",405],["initse.com",406],["salvagny.org",407],["augsburger-allgemeine.de",408],["stabila.com",409],["stwater.co.uk",410],["suncalc.org",[411,412]],["swisstph.ch",413],["taxinstitute.ie",414],["get-in-it.de",415],["tempcover.com",[416,417]],["guildford.gov.uk",418],["easyparts.*",[419,420]],["easyparts-recambios.es",[419,420]],["easyparts-rollerteile.de",[419,420]],["drimsim.com",421],["canyon.com",[422,423,424]],["vevovo.be",[425,426]],["vendezvotrevoiture.be",[425,426]],["wirkaufendeinauto.at",[425,426]],["vikoberallebiler.dk",[425,426]],["wijkopenautos.nl",[425,426]],["vikoperdinbil.se",[425,426]],["noicompriamoauto.it",[425,426]],["vendezvotrevoiture.fr",[425,426]],["compramostucoche.es",[425,426]],["wijkopenautos.be",[425,426]],["auto-doc.*",427],["autodoc.*",427],["autodoc24.*",427],["topautoosat.fi",427],["autoteiledirekt.de",427],["autoczescionline24.pl",427],["tuttoautoricambi.it",427],["onlinecarparts.co.uk",427],["autoalkatreszek24.hu",427],["autodielyonline24.sk",427],["reservdelar24.se",427],["pecasauto24.pt",427],["reservedeler24.co.no",427],["piecesauto24.lu",427],["rezervesdalas24.lv",427],["besteonderdelen.nl",427],["recambioscoche.es",427],["antallaktikaexartimata.gr",427],["piecesauto.fr",427],["teile-direkt.ch",427],["lpi.org",428],["divadelniflora.cz",429],["mahle-aftermarket.com",430],["refurbed.*",431],["eingutertag.org",432],["flyingtiger.com",[432,575]],["borgomontecedrone.it",432],["maharishistore.com",432],["recaro-shop.com",432],["gartenhotel-crystal.at",432],["fayn.com",433],["serica-watches.com",433],["sklavenitis.gr",434],["eam-netz.de",435],["umicore.*",436],["veiligverkeer.be",436],["vsv.be",436],["dehogerielen.be",436],["gera.de",437],["mfr-chessy.fr",438],["mfr-lamure.fr",438],["mfr-saint-romain.fr",438],["mfr-lapalma.fr",438],["mfrvilliemorgon.asso.fr",438],["mfr-charentay.fr",438],["mfr.fr",438],["nationaltrust.org.uk",439],["hej-natural.*",440],["ib-hansmeier.de",441],["rsag.de",442],["esaa-eu.org",442],["aknw.de",442],["answear.*",443],["theprotocol.it",[444,445]],["lightandland.co.uk",446],["etransport.pl",447],["wohnen-im-alter.de",448],["johnmuirhealth.com",[449,450]],["markushaenni.com",451],["airbaltic.com",452],["gamersgate.com",452],["zorgzaam010.nl",453],["etos.nl",454],["paruvendu.fr",455],["privacy.bazar.sk",456],["hennamorena.com",457],["newsello.pl",458],["porp.pl",459],["golfbreaks.com",460],["lieferando.de",461],["just-eat.*",461],["justeat.*",461],["pyszne.pl",461],["lieferando.at",461],["takeaway.com",461],["thuisbezorgd.nl",461],["holidayhypermarket.co.uk",462],["unisg.ch",463],["wassererleben.ch",463],["psgaz.pl",464],["play-asia.com",465],["centralthe1card.com",466],["atu.de",467],["atu-flottenloesungen.de",467],["but.fr",467],["edeka.de",467],["fortuneo.fr",467],["maif.fr",467],["meteo.tf1.fr",467],["particuliers.sg.fr",467],["sparkasse.at",467],["group.vig",467],["tf1info.fr",467],["dpdgroup.com",468],["dpd.com",468],["cosmosdirekt.de",468],["bstrongoutlet.pt",469],["isarradweg.de",[470,471]],["flaxmanestates.com",471],["inland-casas.com",471],["finlayson.fi",[472,473]],["cowaymega.ca",[472,473]],["arktis.de",474],["desktronic.de",474],["belleek.com",474],["brauzz.com",474],["cowaymega.com",474],["dockin.de",474],["dryrobe.com",[474,475]],["formswim.com",474],["hairtalk.se",474],["hallmark.co.uk",[474,475]],["loopearplugs.com",[474,475]],["oleus.com",474],["peopleofshibuya.com",474],["pullup-dip.com",474],["sanctum.shop",474],["tbco.com",474],["desktronic.*",475],["hq-germany.com",475],["tepedirect.com",475],["maxi-pet.ro",475],["paper-republic.com",475],["pullup-dip.*",475],["vitabiotics.com",475],["smythstoys.com",476],["beam.co.uk",[477,478]],["autobahn.de",479],["krakow.pl",480],["shop.app",481],["shopify.com",481],["wufoo.com",482],["consent.dailymotion.com",483],["laposte.fr",483],["help.instagram.com",484],["crazygames.com>>",[485,687]],["consent-manager.thenextweb.com",486],["consent-cdn.zeit.de",487],["coway-usa.com",488],["steiners.shop",489],["ecmrecords.com",490],["cigarjournal.com",490],["invidis.com",490],["malaikaraiss.com",490],["koch-mit.de",490],["zeitreisen.zeit.de",490],["wefashion.com",491],["merkur.dk",492],["ionos.*",494],["omegawatches.com",495],["carefully.be",496],["aerotime.aero",496],["rocket-league.com",497],["dws.com",498],["bosch-homecomfort.com",499],["elmleblanc-optibox.fr",499],["monservicechauffage.fr",499],["boschrexroth.com",499],["home-connect.com",500],["lowrider.at",[501,502]],["mesto.de",503],["intersport.gr",504],["intersport.bg",504],["intersport.com.cy",504],["intersport.ro",504],["ticsante.com",505],["techopital.com",505],["millenniumprize.org",506],["hepster.com",507],["peterstaler.de",508],["blackforest-still.de",508],["tiendaplayaundi.com",509],["ajtix.co.uk",510],["raja.fr",511],["rajarani.de",511],["rajapack.*",[511,512]],["avery-zweckform.com",513],["1xinternet.com",513],["futterhaus.de",513],["dasfutterhaus.at",513],["frischeparadies.de",513],["fmk-steuer.de",513],["selgros.de",513],["transgourmet.de",513],["mediapart.fr",514],["athlon.com",515],["alumniportal-deutschland.org",516],["snoopmedia.com",516],["myguide.de",516],["daad.de",516],["cornelsen.de",[517,518]],["vinmonopolet.no",520],["tvp.info",521],["tvp.pl",521],["tvpworld.com",521],["brtvp.pl",521],["tvpparlament.pl",521],["belsat.eu",521],["warnung.bund.de",522],["mediathek.lfv-bayern.de",523],["allegro.*",524],["allegrolokalnie.pl",524],["ceneo.pl",524],["czc.cz",524],["eon.pl",[525,526]],["ylasatakunta.fi",[527,528]],["mega-image.ro",529],["louisvuitton.com",530],["bodensee-airport.eu",531],["department56.com",532],["allendesignsstudio.com",532],["designsbylolita.co",532],["shop.enesco.com",532],["savoriurbane.com",533],["miumiu.com",534],["church-footwear.com",534],["clickdoc.fr",535],["car-interface.com",536],["monolithdesign.it",536],["thematchahouse.com",536],["smileypack.de",[537,538]],["finom.co",539],["orange.es",[540,541]],["fdm-travel.dk",542],["hummel.dk",542],["jysk.nl",542],["power.no",542],["skousen.dk",542],["velliv.dk",542],["whiteaway.com",542],["whiteaway.no",542],["whiteaway.se",542],["skousen.no",542],["energinet.dk",542],["elkjop.no",542],["medimax.de",543],["costautoricambi.com",544],["lotto.it",544],["readspeaker.com",544],["team.blue",544],["ibistallinncenter.ee",545],["aaron.ai",546],["futureverse.com",547],["tandem.co.uk",547],["insights.com",548],["thebathcollection.com",549],["coastfashion.com",[550,551]],["oasisfashion.com",[550,551]],["warehousefashion.com",[550,551]],["misspap.com",[550,551]],["karenmillen.com",[550,551]],["boohooman.com",[550,551]],["hdt.de",552],["wolt.com",553],["xohotels.com",554],["sourcepoint.theguardian.com",[554,716]],["sim24.de",555],["tnt.com",556],["uza.be",557],["uzafoundation.be",557],["uzajobs.be",557],["bergzeit.*",[558,559]],["cinemas-lumiere.com",560],["cdiscount.com",561],["brabus.com",562],["roborock.com",563],["strumentimusicali.net",564],["maisonmargiela.com",565],["webfleet.com",566],["dragonflyshipping.ca",567],["broekhuis.nl",568],["groningenairport.nl",568],["nemck.cz",569],["zdfheute.de",570],["sap-press.com",571],["roughguides.com",[572,573]],["korvonal.com",574],["rexbo.*",576],["itau.com.br",577],["bbg.gv.at",578],["portal.taxi.eu",579],["topannonces.fr",580],["homap.fr",581],["artifica.fr",582],["plan-interactif.com",582],["ville-cesson.fr",582],["moismoliere.com",583],["unihomes.co.uk",584],["bkk.hu",585],["coiffhair.com",586],["ptc.eu",587],["ziegert-group.com",[588,697]],["lassuranceretraite.fr",589],["interieur.gouv.fr",589],["toureiffel.paris",589],["economie.gouv.fr",589],["education.gouv.fr",589],["livoo.fr",589],["su.se",589],["zappo.fr",589],["smdv.de",590],["digitalo.de",590],["petiteamelie.*",591],["mojanorwegia.pl",592],["koempf24.ch",[593,594]],["teichitekten24.de",[593,594]],["koempf24.de",[593,594]],["wolff-finnhaus-shop.de",[593,594]],["asnbank.nl",595],["blgwonen.nl",595],["regiobank.nl",595],["snsbank.nl",595],["vulcan.net.pl",[596,597]],["ogresnovads.lv",598],["partenamut.be",599],["pirelli.com",600],["unicredit.it",601],["effector.pl",602],["zikodermo.pl",[603,604]],["devolksbank.nl",605],["caixabank.es",606],["me.motorsport.com>>",607],["motorsport.com>>",608],["cyberport.de",609],["cyberport.at",609],["slevomat.cz",610],["kfzparts24.de",611],["runnersneed.com",612],["aachener-zeitung.de",613],["sportpursuit.com",614],["druni.es",[615,626]],["druni.pt",[615,626]],["delta.com",616],["onliner.by",[617,618]],["vejdirektoratet.dk",619],["usaa.com",620],["consorsbank.de",621],["metroag.de",622],["kupbilecik.pl",623],["oxfordeconomics.com",624],["routershop.nl",625],["woo.pt",625],["e-jumbo.gr",627],["alza.*",628],["rmf.fm",630],["rmf24.pl",630],["tracfone.com",631],["lequipe.fr",632],["global.abb",633],["gala.fr",634],["purepeople.com",635],["3sat.de",636],["zdf.de",636],["filmfund.lu",637],["welcometothejungle.com",637],["triblive.com",638],["rai.it",639],["fbto.nl",640],["europa.eu",641],["caisse-epargne.fr",642],["banquepopulaire.fr",642],["bigmammagroup.com",643],["studentagency.sk",643],["studentagency.eu",643],["winparts.be",644],["winparts.nl",644],["winparts.eu",645],["winparts.ie",645],["winparts.se",645],["sportano.*",[646,647]],["crocs.*",648],["chronext.ch",649],["chronext.de",649],["chronext.at",649],["chronext.com",650],["chronext.co.uk",650],["chronext.fr",651],["chronext.nl",652],["chronext.it",653],["galerieslafayette.com",654],["bazarchic.com",655],["stilord.*",656],["tiko.pt",657],["nsinternational.com",658],["meinbildkalender.de",659],["gls-group.com",660],["gls-group.eu",660],["univie.ac.at",660],["chilis.com",661],["account.bhvr.com",663],["everand.com",663],["lucidchart.com",663],["intercars.ro",[663,664]],["scribd.com",663],["guidepoint.com",663],["erlebnissennerei-zillertal.at",665],["hintertuxergletscher.at",665],["tiwag.at",665],["playseatstore.com",666],["tivify.tv>>",667],["swiss-sport.tv",668],["targobank-magazin.de",669],["zeit-verlagsgruppe.de",669],["online-physiotherapie.de",669],["kieferorthopaede-freisingsmile.de",670],["nltraining.nl",671],["kmudigital.at",672],["mintysquare.com",673],["consent.thetimes.com",674],["cadenaser.com",675],["berlinale.de",676],["lebonlogiciel.com",677],["iberiaexpress.com",678],["easycosmetic.ch",679],["pharmastar.it",680],["washingtonpost.com",681],["brillenplatz.de",682],["angelplatz.de",682],["dt.mef.gov.it",683],["raffeldeals.com",684],["stepstone.de",685],["kobo.com",686],["zoxs.de",688],["offistore.fi",689],["collinsaerospace.com",690],["radioapp.lv",693],["hagengrote.de",694],["hemden-meister.de",694],["vorteilshop.com",695],["capristores.gr",696],["getaround.com",698],["technomarket.bg",699],["epiphone.com",701],["gibson.com",701],["maestroelectronics.com",701],["cropp.com",[702,703]],["housebrand.com",[702,703]],["mohito.com",[702,703]],["autoczescizielonki.pl",704],["b-s.de",705],["novakid.pl",706],["piecesauto24.com",707],["earpros.com",708],["portalridice.cz",709],["kitsapcu.org",710],["nutsinbulk.*",711],["berlin-buehnen.de",712],["metropoliten.rs",713],["educa2.madrid.org",714],["immohal.de",715],["rtlplay.be",717],["natgeotv.com",717],["llama.com",718],["meta.com",718],["setasdesevilla.com",719],["cruyff-foundation.org",720],["allianz.*",721],["energiedirect-bayern.de",722],["postnl.be",723],["postnl.nl",723],["sacyr.com",724],["volkswagen-newsroom.com",725],["openbank.*",726],["tagus-eoficina.grupogimeno.com",727],["tidal.com",728],["knax.de",729],["ordblindenetvaerket.dk",730],["boligbeton.dk",730],["dukh.dk",730],["pevgrow.com",731],["ya.ru",732],["ipolska24.pl",733],["17bankow.com",733],["kazimierzdolny.pl",733],["vpolshchi.pl",733],["dobreprogramy.pl",[733,734]],["essanews.com",733],["money.pl",733],["autokult.pl",733],["komorkomania.pl",733],["polygamia.pl",733],["autocentrum.pl",733],["homebook.pl",733],["domodi.pl",733],["jastrzabpost.pl",733],["open.fm",733],["gadzetomania.pl",733],["fotoblogia.pl",733],["abczdrowie.pl",733],["parenting.pl",733],["kafeteria.pl",733],["vibez.pl",733],["wakacje.pl",733],["extradom.pl",733],["totalmoney.pl",733],["superauto.pl",733],["nerwica.com",733],["forum.echirurgia.pl",733],["dailywrap.net",733],["pysznosci.pl",733],["genialne.pl",733],["finansowysupermarket.pl",733],["deliciousmagazine.pl",733],["audioteka.com",733],["easygo.pl",733],["so-magazyn.pl",733],["o2.pl",733],["pudelek.pl",733],["benchmark.pl",733],["wp.pl",733],["altibox.dk",735],["altibox.no",735],["talksport.com",736],["zuiderzeemuseum.nl",737],["gota.io",738],["nwzonline.de",739],["scaleway.com",740],["bistro.sk",741],["spk-schaumburg.de",742],["computerbase.de",743],["comdirect.de",744],["metro.co.uk",745],["imaios.com",746],["myprivacy.dpgmedia.nl",747],["myprivacy.dpgmedia.be",747],["www.dpgmediagroup.com",747],["exxen.com",748],["cbsnews.com",749],["infshop.fi",750],["jimms.fi",751],["avinor.no",752],["accursia-capital.de",753],["joyn.de",754],["oeq.org",755],["codewars.com",756],["formazionepro.it",757]]);
const exceptionsMap = new Map([["facebook.com",[52,53]],["twitter.com",[52,53]],["youtube.com",[52,53]]]);
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
