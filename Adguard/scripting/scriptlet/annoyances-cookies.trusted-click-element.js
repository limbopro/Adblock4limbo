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
const argsList = [["button#W0wltc","","500"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#CybotCookiebotDialogBodyButtonDecline"],["#pubtech-cmp button[aria-label=\"Continue without accepting\"]"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button[data-t=\"rejectAll\"]","","1000"],["#gdpr-banner-cmp-button","","1000"],["button[aria-label=\"Datenschutzbestimmungen und Einstellungen ablehnen\"]","","1200"],["#iubenda-cs-banner button.iubenda-cs-close-btn"],["button.message-button[aria-label=\"More Options\"]"],["button.sp_choice_type_REJECT_ALL","","2000"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"consent\"]:not([class*=\"reject\"])"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[aria-label]","","1000"],["ytm-button-renderer.eom-accept button","","2000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button.glue-cookie-notification-bar__reject","","1000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","2000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["#pmConsentWall .pmConsentWall-button:not([href])","","1000","reloadAfterClick:200"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["#qc-cmp2-container button#accept-btn"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1500"],["button[title=\"Zustimmen\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-e2e=\"pure-accept-ads\"]","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button.brlbs-btn-save","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.js-alert-cookie-reject","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button[title=\"Accept & Continue\"]","","1000"],["button#ensRejectAll","","1500"],["button#ensSave","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],[".modal-actions-accept-btn","","2000"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button[id=\"ketch-banner-button-secondary\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Agree\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button#js-data-privacy-manage-cookies","","1000"],["button#js-manage-data-privacy-save-button","1500"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#btnAcceptPDPA","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button[data-testid=\"cmp-revoke-all\"]","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button[title=\"Accept and continue\"]","","2000"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],[".wt-ecl-button[href=\"#refuse\"]","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],["button#acceptCookiesTerms","","1000"],["a.footer-cookies-button-save-all","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["body > div[class] > div[class] > div[class]:has(a[href*=\"holding.wp.pl\"]) > div[class] > div[class]:only-child > button:first-child"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button.cta-size-big.cta-outline"],["pie-cookie-banner >>> [data-test-id=\"actions-manage-prefs\"], pie-cookie-banner >>> #functional >>> .c-switch-input, pie-cookie-banner >>> pie-modal >>> pie-button >>> button[type=\"submit\"]","","1000"],["[data-form=\".eprivacy_optin_decline\"]","","1000"],["#cookie-consent-button","","1500"],["com-consent-layer >>> #cmpDenyAll","","2500"],["div[data-project=\"mol-fe-cmp\"] button[class*=\"level1PrimaryButton-\"]:not([class*=\"reject\"])"],["div#continueWithoutAccepting","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["body > div.w-screen.p-\\[1\\.25rem\\].fixed.left-0.top-0.flex button:first-child + button"],["#ketch-banner-buttons-container-compact > button#ketch-banner-button-primary"],[".prelim-manage-cookies-button.btn-default"],["button[data-role=\"necessary\"]"],[".cookie-banner--open button[data-variant=\"primary\"] + [data-variant=\"primary\"]","","1000"],["button[data-hook=\"consent-banner-decline-all-button\""],["cmp-banner >>> cmp-dialog >>> cmp-button >>> .button.button--primary","","1000"],["button#c-t-bn"],["a[fs-consent-element=\"deny\"]","","2000"],["button.c_link","","1000"]];
const hostnamesMap = new Map([["www.google.*",0],["consent.google.*",1],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["heise.de",7],["bloomberg.com",[8,9]],["forbes.com",[8,84]],["consent.fastcar.co.uk",8],["tapmaster.ca",8],["cmpv2.standard.co.uk",[10,11]],["cmpv2.independent.co.uk",[12,13,14,192]],["wetransfer.com",[15,16]],["spiegel.de",[17,18]],["nytimes.com",[19,188]],["consent.yahoo.com",20],["tumblr.com",21],["fplstatistics.co.uk",22],["fplstatistics.com",22],["e-shop.leonidas.com",23],["tomsguide.com>>",[24,25]],["walmart.ca",26],["sams.com.mx",27],["my.tonies.com",28],["cambio-carsharing.de",28],["festool.*",28],["festoolcanada.com",28],["fuso-trucks.*",28],["tracker.fressnapf.de",28],["myfabrics.co.uk",28],["zinus.*",28],["oeamtc.at",28],["consent.ladbible.com",[29,30]],["consent.unilad.com",[29,30]],["consent.uniladtech.com",[29,30]],["consent.gamingbible.com",[29,30]],["consent.sportbible.com",[29,30]],["consent.tyla.com",[29,30]],["consent.ladbiblegroup.com",[29,30]],["m2o.it",31],["deejay.it",31],["capital.it",31],["ilmattino.it",[31,32]],["leggo.it",[31,32]],["libero.it",31],["tiscali.it",31],["consent-manager.ft.com",[33,34,35]],["hertz.*",36],["mediaworld.it",37],["mediamarkt.*",37],["mediamarktsaturn.com",38],["uber.com",[39,189]],["ubereats.com",[39,189]],["lego.com",40],["ai.meta.com",41],["lilly.com",42],["bbc.com>>",43],["ilgiornale.it",44],["dimensione.com",45],["wero-wallet.eu",45],["everyeye.it",46],["pepper.pl",47],["dealabs.com",47],["hotukdeals.com",47],["chollometro.com",47],["preisjaeger.at",48],["mydealz.de",48],["kleinanzeigen.de",[49,50]],["105.net",51],["pcgamer.com>>",[52,53]],["dailymail.co.uk",54],["almamedia.fi>>",55],["ampparit.com>>",55],["arvopaperi.fi>>",55],["iltalehti.fi>>",55],["kauppalehti.fi>>",55],["mikrobitti.fi>>",55],["talouselama.fi>>",55],["tekniikkatalous.fi>>",55],["tivi.fi>>",55],["uusisuomi.fi>>",55],["aamulehti.fi>>",[56,57,58]],["etlehti.fi>>",[56,57,58]],["gloria.fi>>",[56,57,58]],["hs.fi>>",[56,57,58]],["hyvaterveys.fi>>",[56,57,58]],["is.fi>>",[56,57,58]],["jamsanseutu.fi>>",[56,57,58]],["janakkalansanomat.fi>>",[56,57,58]],["kankaanpaanseutu.fi>>",[56,57,58]],["kmvlehti.fi>>",[56,57,58]],["kodinkuvalehti.fi>>",[56,57,58]],["merikarvialehti.fi>>",[56,57,58]],["nokianuutiset.fi>>",[56,57,58]],["pelikone.fi>>",[56,57,58]],["rannikkoseutu.fi>>",[56,57,58]],["ruutu.fi>>",[56,57,58]],["satakunnankansa.fi>>",[56,57,58]],["soppa365.fi>>",[56,57,58]],["suurkeuruu.fi>>",[56,57,58]],["sydansatakunta.fi>>",[56,57,58]],["tyrvaansanomat.fi>>",[56,57,58]],["valkeakoskensanomat.fi>>",[56,57,58]],["vauva.fi>>",[56,57,58]],["telekom.com",59],["telekom.de",59],["abola.pt",60],["flytap.com",60],["ansons.de",60],["blick.ch",60],["buienradar.be",60],["crunchyroll.com",60],["digi24.ro",60],["digisport.ro",60],["digitalfoundry.net",60],["egx.net",60],["emirates.com",60],["eurogamer.it",60],["foto-erhardt.de",60],["gmx.*",60],["kizi.com",60],["mail.com",60],["mcmcomiccon.com",60],["nachrichten.at",60],["nintendolife.com",60],["oe24.at",60],["observatornews.ro",60],["paxsite.com",60],["peacocktv.com",60],["player.pl",60],["plus500.*",60],["pricerunner.com",60],["pricerunner.se",60],["pricerunner.dk",60],["proximus.be",[60,660]],["proximus.com",60],["purexbox.com",60],["pushsquare.com",60],["rugbypass.com",60],["southparkstudios.com",[60,302]],["southwest.com",60],["starwarscelebration.com",60],["sweatybetty.com",60],["theaa.ie",60],["thehaul.com",60],["timeextension.com",60],["travelandleisure.com",60],["tunein.com",60],["tvn24.pl",60],["uefa.com",60],["videoland.com",60],["wizzair.com",60],["wetter.at",60],["wowbiz.ro",60],["dicebreaker.com",[61,62]],["eurogamer.es",[61,62]],["eurogamer.net",[61,62]],["eurogamer.nl",[61,62]],["eurogamer.pl",[61,62]],["eurogamer.pt",[61,62]],["gamesindustry.biz",[61,62]],["reedpop.com",[61,62]],["rockpapershotgun.com",[61,62]],["thepopverse.com",[61,62]],["vg247.com",[61,62]],["videogameschronicle.com",[61,62]],["eurogamer.de",63],["roadtovr.com",64],["jotex.*",64],["mundodeportivo.com",[65,136]],["www.youtube.com",66],["m.youtube.com",67],["ohra.nl",68],["corriere.it",69],["gazzetta.it",69],["oggi.it",69],["cmp.sky.it",70],["tennisassa.fi",71],["formula1.com",72],["f1racing.pl",73],["music.amazon.*",[74,75]],["consent-pref.trustarc.com",76],["highlights.legaseriea.it",77],["calciomercato.com",77],["sosfanta.com",78],["chrono24.*",[79,80]],["wetter.com",81],["youmath.it",82],["pip.gov.pl",83],["dailybuzz.nl",85],["bnn.de",85],["dosenbach.ch",85],["dw.com",85],["kinepolis.*",85],["mediaite.com",85],["nzz.ch",85],["winfuture.de",85],["lippu.fi",85],["racingnews365.com",85],["reifendirekt.ch",85],["vaillant.*",85],["bauhaus.no",86],["bauhaus.se",86],["beko-group.de",86],["billiger.de",86],["burda.com",86],["vanharen.nl",86],["deichmann.com",[86,109,491]],["meraluna.de",86],["slashdot.org",86],["hermann-saunierduval.it",86],["protherm.cz",86],["saunierduval.es",86],["protherm.sk",86],["protherm.ua",86],["saunierduval.hu",86],["saunierduval.ro",86],["saunierduval.at",86],["awb.nl",86],["spar.hu",87],["group.vattenfall.com",87],["mediaset.it",88],["fortune.com",89],["ilrestodelcarlino.it",90],["quotidiano.net",90],["lanazione.it",90],["ilgiorno.it",90],["iltelegrafolivorno.it",90],["auto.it",91],["beauxarts.com",91],["beinsports.com",91],["bfmtv.com",[91,137]],["boursobank.com",91],["boursorama.com",[91,137]],["boursier.com",[91,235]],["brut.media",91],["canalplus.com",91],["decathlon.fr",[91,232]],["diverto.tv",91],["eden-park.com",91],["foodvisor.io",91],["franceinfo.fr",91],["frandroid.com",91],["jobijoba.*",91],["hotelsbarriere.com",91],["intersport.*",[91,203]],["idealista.it",91],["o2.fr",91],["lejdd.fr",[91,136]],["lechorepublicain.fr",91],["la-croix.com",91],["linfo.re",91],["lamontagne.fr",91],["laredoute.fr",91],["largus.fr",91],["leprogres.fr",91],["lesnumeriques.com",91],["libramemoria.com",91],["lopinion.fr",91],["marieclaire.fr",91],["maville.com",91],["michelin.*",91],["midilibre.fr",[91,689]],["meteofrance.com",91],["mondialtissus.fr",91],["orange.fr",91],["orpi.com",91],["oscaro.com",91],["ouest-france.fr",[91,105,137,690]],["parismatch.com",91],["pagesjaunes.fr",91],["programme-television.org",[91,137]],["publicsenat.fr",[91,137]],["rmcbfmplay.com",[91,137]],["science-et-vie.com",[91,136]],["seloger.com",91],["societe.com",91],["suzuki.fr",91],["sudouest.fr",91],["web-agri.fr",91],["nutri-plus.de",92],["americanairlines.*",93],["consent.capital.fr",94],["consent.programme.tv",94],["consent.voici.fr",94],["programme-tv.net",94],["cmpv2.finn.no",95],["cmp.tek.no",[96,97]],["cmp.e24.no",[96,97]],["minmote.no",[96,97]],["cmp.vg.no",[96,97]],["cloud.google.com",98],["developer.android.com",98],["registry.google",98],["safety.google",98],["huffingtonpost.fr",99],["rainews.it",100],["remarkable.com",101],["netzwelt.de",102],["money.it",103],["imore.com>>",104],["allocine.fr",105],["jeuxvideo.com",105],["ozap.com",105],["le10sport.com",105],["xataka.com",105],["cmp.fitbook.de",106],["cmp.autobild.de",106],["sourcepoint.sport.de",106],["cmp-sp.tagesspiegel.de",106],["cmp.bz-berlin.de",106],["cmp.cicero.de",106],["cmp.techbook.de",106],["cmp.stylebook.de",106],["cmp2.bild.de",106],["cmp2.freiepresse.de",106],["sourcepoint.wetter.de",106],["consent.finanzen.at",106],["consent.finanzen.net",106],["consent.up.welt.de",106],["sourcepoint.n-tv.de",106],["sourcepoint.kochbar.de",106],["sourcepoint.rtl.de",106],["cmp.computerbild.de",106],["cmp.petbook.de",106],["cmp-sp.siegener-zeitung.de",106],["cmp-sp.sportbuzzer.de",106],["klarmobil.de",106],["technikum-wien.at",107],["eneco.nl",108],["salomon.com",110],["blackpoolgazette.co.uk",111],["lep.co.uk",111],["northamptonchron.co.uk",111],["scotsman.com",111],["shieldsgazette.com",111],["thestar.co.uk",111],["portsmouth.co.uk",111],["sunderlandecho.com",111],["northernirelandworld.com",111],["3addedminutes.com",111],["anguscountyworld.co.uk",111],["banburyguardian.co.uk",111],["bedfordtoday.co.uk",111],["biggleswadetoday.co.uk",111],["bucksherald.co.uk",111],["burnleyexpress.net",111],["buxtonadvertiser.co.uk",111],["chad.co.uk",111],["daventryexpress.co.uk",111],["derbyshiretimes.co.uk",111],["derbyworld.co.uk",111],["derryjournal.com",111],["dewsburyreporter.co.uk",111],["doncasterfreepress.co.uk",111],["falkirkherald.co.uk",111],["fifetoday.co.uk",111],["glasgowworld.com",111],["halifaxcourier.co.uk",111],["harboroughmail.co.uk",111],["harrogateadvertiser.co.uk",111],["hartlepoolmail.co.uk",111],["hemeltoday.co.uk",111],["hucknalldispatch.co.uk",111],["lancasterguardian.co.uk",111],["leightonbuzzardonline.co.uk",111],["lincolnshireworld.com",111],["liverpoolworld.uk",111],["londonworld.com",111],["lutontoday.co.uk",111],["manchesterworld.uk",111],["meltontimes.co.uk",111],["miltonkeynes.co.uk",111],["newcastleworld.com",111],["newryreporter.com",111],["newsletter.co.uk",111],["northantstelegraph.co.uk",111],["northumberlandgazette.co.uk",111],["nottinghamworld.com",111],["peterboroughtoday.co.uk",111],["rotherhamadvertiser.co.uk",111],["stornowaygazette.co.uk",111],["surreyworld.co.uk",111],["thescarboroughnews.co.uk",111],["thesouthernreporter.co.uk",111],["totallysnookered.com",111],["wakefieldexpress.co.uk",111],["walesworld.com",111],["warwickshireworld.com",111],["wigantoday.net",111],["worksopguardian.co.uk",111],["yorkshireeveningpost.co.uk",111],["yorkshirepost.co.uk",111],["eurocard.com",112],["saseurobonusmastercard.se",113],["barrons.com>>",114],["tver.jp",115],["linkedin.com",116],["elmundo.es",[117,137]],["expansion.com",117],["s-pankki.fi",118],["srf.ch",118],["alternate.de",118],["bayer04.de",118],["douglas.de",118],["dr-beckmann.com",118],["falke.com",118],["fitnessfirst.de",118],["flaschenpost.de",118],["gloeckle.de",118],["hornbach.nl",118],["hypofriend.de",118],["lactostop.de",118],["neumann.com",118],["post.ch",118],["postbank.de",118],["rts.ch",118],["zalando.*",118],["immowelt.de",119],["joyn.*",119],["morenutrition.de",119],["mapillary.com",120],["transfermarkt.com>>",121],["cmp.seznam.cz",122],["marca.com",123],["raiplay.it",124],["raiplaysound.it",124],["consent.faz.net",125],["derstandard.at",125],["derstandard.de",125],["automoto.it",126],["ansa.it",126],["cdt.ch",126],["delladio.it",126],["huffingtonpost.it",126],["internazionale.it",126],["lastampa.it",126],["macitynet.it",126],["moto.it",126],["movieplayer.it",126],["multiplayer.it",126],["repubblica.it",126],["tomshw.it",126],["skuola.net",126],["spaziogames.it",126],["today.it",126],["tuttoandroid.net",126],["tuttotech.net",126],["ilgazzettino.it",127],["ilmessaggero.it",127],["ilsecoloxix.it",127],["weather.com>>",[128,129]],["privacy.motorradonline.de",130],["impulse.de>>",130],["consent.watson.de",130],["consent.kino.de",130],["consent.desired.de",130],["cmpv2.fn.de",130],["spp.nextpit.de",130],["dailystar.co.uk",[131,132,133,134]],["mirror.co.uk",[131,132,133,134]],["idnes.cz",135],["20minutes.fr",136],["20minutos.es",136],["24sata.hr",136],["abc.es",136],["actu.fr",136],["antena3.com",136],["antena3internacional.com",136],["atresmedia.com",136],["atresmediapublicidad.com",136],["atresmediastudios.com",136],["atresplayer.com",136],["autopista.es",136],["belfasttelegraph.co.uk",136],["bemad.es",136],["bonduelle.it",136],["bonniernews.se",136],["bt.se",136],["cadenadial.com",136],["caracol.com.co",136],["cas.sk",136],["charentelibre.fr",136],["ciclismoafondo.es",136],["cnews.fr",136],["cope.es",136],["correryfitness.com",136],["courrier-picard.fr",136],["cuatro.com",136],["decathlon.nl",136],["decathlon.pl",136],["di.se",136],["diariocordoba.com",136],["diariodenavarra.es",136],["diariosur.es",136],["diariovasco.com",136],["diepresse.com",136],["divinity.es",136],["dn.se",136],["dnevnik.hr",136],["dumpert.nl",136],["ebuyclub.com",136],["edreams.de",136],["edreams.net",136],["elcomercio.es",136],["elconfidencial.com",136],["elcorreo.com",136],["eldesmarque.com",136],["eldiario.es",136],["eldiariomontanes.es",136],["elespanol.com",136],["elle.fr",136],["elpais.com",[136,138]],["elperiodico.com",136],["elperiodicodearagon.com",136],["elplural.com",136],["energytv.es",136],["engadget.com",136],["es.ara.cat",136],["euronews.com",136],["europafm.com",136],["expressen.se",136],["factoriadeficcion.com",136],["filmstarts.de",136],["flooxernow.com",136],["folkbladet.nu",136],["footmercato.net",136],["france.tv",136],["france24.com",136],["fussballtransfers.com",136],["ghacks.net",136],["gva.be",136],["hbvl.be",136],["heraldo.es",136],["hoy.es",136],["ideal.es",136],["idealista.pt",136],["krone.at",136],["kurier.at",136],["lacoste.com",136],["ladepeche.fr",136],["lalibre.be",136],["lanouvellerepublique.fr",136],["larazon.es",136],["lasexta.com",136],["lasprovincias.es",136],["latribune.fr",136],["lavanguardia.com",136],["laverdad.es",136],["lavozdegalicia.es",136],["leboncoin.fr",136],["lecturas.com",136],["ledauphine.com",136],["lejsl.com",136],["leparisien.fr",136],["lesoir.be",136],["letelegramme.fr",136],["libremercado.com",136],["localeyes.dk",136],["los40.com",136],["lotoquebec.com",136],["lunion.fr",136],["m6.fr",136],["marianne.cz",136],["marmiton.org",136],["mediaset.es",136],["melodia-fm.com",136],["metronieuws.nl",136],["moviepilot.de",136],["mtmad.es",136],["multilife.com.pl",136],["naszemiasto.pl",136],["nationalgeographic.com.es",136],["nicematin.com",136],["nieuwsblad.be",136],["notretemps.com",136],["numerama.com",136],["okdiario.com",136],["ondacero.es",136],["podiumpodcast.com",136],["portail.lotoquebec.com",136],["profil.at",136],["public.fr",136],["publico.es",136],["radiofrance.fr",136],["rankia.com",136],["rfi.fr",136],["rossmann.pl",136],["rtbf.be",[136,232]],["rtl.lu",136],["sensacine.com",136],["sfgame.net",136],["shure.com",136],["silicon.es",136],["sncf-connect.com",136],["sport.es",136],["sydsvenskan.se",136],["techcrunch.com",136],["telegraaf.nl",136],["telequebec.tv",136],["tf1.fr",136],["tradingsat.com",136],["trailrun.es",136],["video-streaming.orange.fr",136],["xpress.fr",136],["laprovincia.es",137],["informacion.es",137],["tportal.hr",137],["ivoox.com",137],["as.com",137],["slam.nl",137],["bienpublic.com",137],["funradio.fr",137],["gamepro.de",[137,200,201]],["lemon.fr",137],["lexpress.fr",137],["shadow.tech",137],["letemps.ch",137],["mein-mmo.de",137],["heureka.sk",137],["film.at",137],["dhnet.be",137],["lesechos.fr",[137,237]],["marianne.net",[137,232]],["jeanmarcmorandini.com",[137,233]],["dna.fr",137],["sudinfo.be",137],["europe1.fr",[137,233]],["rtl.be",[137,232]],["reviewingthebrew.com",137],["jaysjournal.com",137],["reignoftroy.com",137],["ryobitools.eu",[139,140]],["americanexpress.com",141],["rtvc.es>>",142],["beteve.cat>>",143],["whatcar.com>>",143],["bloodyelbow.com>>",144],["consent.radiotimes.com",144],["sp-consent.szbz.de",145],["cmp.omni.se",146],["cmp.svd.se",146],["cmp.aftonbladet.se",146],["cmp.tv.nu",146],["weltkunst.de>>",147],["consent.economist.com",148],["studentagency.cz",148],["driving.co.uk>>",149],["cmpv2.foundryco.com",149],["cmpv2.infoworld.com",149],["cmpv2.arnnet.com.au",149],["sp-cdn.pcgames.de",150],["sp-cdn.pcgameshardware.de",150],["consentv2.sport1.de",150],["boerse-online.de>>",150],["cmp.mz.de",150],["cmpv2.tori.fi",151],["tidende.dk>>",152],["consent.spielaffe.de",153],["bondekompaniet.no",154],["degiro.*",154],["epochtimes.de",154],["vikingline.com",154],["tfl.gov.uk",154],["drklein.de",154],["hildegardis-krankenhaus.de",154],["kleer.se",154],["lekiaviation.com",154],["lotto.pl",154],["mineralstech.com",154],["volunteer.digitalboost.org.uk",154],["starhotels.com",154],["tefl.com",154],["universumglobal.com",154],["tui.com",155],["rexel.*",156],["csob.sk",157],["greenstuffworld.com",158],["morele.net",[159,160]],["1und1.de",161],["infranken.de",162],["cmp.tvspielfilm.de",163],["cmp.tvtoday.de",163],["cmp.bunte.de",163],["cmp.chip.de",163],["cmp.focus.de",[163,517]],["stol.it>>",163],["estadiodeportivo.com",164],["tameteo.*",164],["tempo.pt",164],["meteored.*",164],["pogoda.com",164],["yourweather.co.uk",164],["tempo.com",164],["theweather.net",164],["tiempo.com",164],["ilmeteo.net",164],["daswetter.com",164],["kicker.de",165],["formulatv.com",166],["web.de",167],["lefigaro.fr",168],["linternaute.com",169],["consent.caminteresse.fr",170],["volksfreund.de",171],["rp-online.de",171],["dailypost.co.uk",172],["the-express.com",172],["vide-greniers.org",172],["dailyrecord.co.uk",173],["bluray-disc.de",174],["elio-systems.com",174],["stagatha-fachklinik.de",174],["tarife.mediamarkt.de",174],["lz.de",174],["gaggenau.com",174],["saturn.de",175],["eltiempo.es",[176,177]],["otempo.pt",178],["atlasformen.*",179],["cmp-sp.goettinger-tageblatt.de",180],["cmp-sp.saechsische.de",180],["cmp-sp.ln-online.de",180],["cz.de",180],["dewezet.de",180],["dnn.de",180],["haz.de",180],["gnz.de",180],["landeszeitung.de",180],["lvz.de",180],["maz-online.de",180],["ndz.de",180],["op-marburg.de",180],["ostsee-zeitung.de",180],["paz-online.de",180],["reisereporter.de",180],["rga.de",180],["rnd.de",180],["siegener-zeitung.de",180],["sn-online.de",180],["solinger-tageblatt.de",180],["sportbuzzer.de",180],["szlz.de",180],["tah.de",180],["torgauerzeitung.de",180],["waz-online.de",180],["privacy.maennersache.de",180],["refinery29.com>>",181],["sinergy.ch",182],["agglo-valais-central.ch",182],["biomedcentral.com",183],["hsbc.*",184],["hsbcnet.com",184],["hsbcinnovationbanking.com",184],["create.hsbc",184],["gbm.hsbc.com",184],["hsbc.co.uk",185],["internationalservices.hsbc.com",185],["history.hsbc.com",185],["about.hsbc.co.uk",186],["privatebanking.hsbc.com",187],["independent.co.uk",190],["privacy.crash.net",190],["the-independent.com",191],["argos.co.uk",193],["poco.de",[194,195]],["moebelix.*",194],["moemax.*",194],["xxxlutz.*",194],["xxxlesnina.*",194],["moebel24.at",195],["moebel24.ch",195],["meubles.fr",195],["meubelo.nl",195],["moebel.de",195],["lipo.ch",196],["schubiger.ch",197],["aedt.de",198],["berlin-live.de",198],["bike-magazin.de",198],["connect.de",198],["gutefrage.net",198],["insideparadeplatz.ch",198],["morgenpost.de",198],["thueringen24.de",198],["pdfupload.io",199],["gamestar.de",[200,201,241]],["verksamt.se",202],["acmemarkets.com",203],["amtrak.com",203],["beko.com",203],["bepanthen.com.au",203],["berocca.com.au",203],["booking.com",203],["carrefour.fr",203],["centrum.sk",203],["claratyne.com.au",203],["credit-suisse.com",203],["ceskatelevize.cz",203],["deporvillage.*",203],["de.vanguard",203],["dhl.de",203],["digikey.*",203],["drafthouse.com",203],["dunelm.com",203],["eurosport.fr",203],["fello.se",203],["fielmann.*",203],["flashscore.fr",203],["flightradar24.com",203],["fnac.es",203],["foodandwine.com",203],["fourseasons.com",203],["khanacademy.org",203],["konami.com",203],["jll.*",203],["jobs.redbull.com",203],["hellenicbank.com",203],["gemini.pl",203],["groceries.asda.com",203],["lamborghini.com",203],["menshealth.com",203],["n26.com",203],["nintendo.com",203],["nokia.com",203],["oneweb.net",203],["omnipod.com",203],["oralb.*",203],["panasonic.com",203],["parkside-diy.com",203],["pluto.tv",203],["popularmechanics.com",203],["polskieradio.pl",203],["pringles.com",203],["questdiagnostics.com",203],["radissonhotels.com",203],["ricardo.ch",203],["rockstargames.com",203],["rte.ie",203],["salesforce.com",203],["samsonite.*",203],["spiele.heise.de",203],["spirit.com",203],["stenaline.co.uk",203],["swisscom.ch",203],["swisspass.ch",203],["technologyfromsage.com",203],["telenet.be",203],["tntsports.co.uk",203],["theepochtimes.com",203],["toujeo.com",203],["uber-platz.de",203],["vinted.com",203],["wallapop.com",203],["wickes.co.uk",203],["workingtitlefilms.com",203],["vattenfall.de",203],["winparts.fr",203],["yoigo.com",203],["zoominfo.com",203],["allegiantair.com",204],["hallmarkchannel.com",204],["incorez.com",204],["noovle.com",204],["otter.ai",204],["plarium.com",204],["telsy.com",204],["timenterprise.it",204],["tim.it",204],["tradersunion.com",204],["fnac.*",204],["yeti.com",204],["here.com",[205,698]],["vodafone.com",205],["kooora.com>>",206],["cmp.heise.de",[207,208]],["cmp.am-online.com",207],["cmp.motorcyclenews.com",207],["consent.newsnow.co.uk",207],["cmp.todays-golfer.com",207],["koeser.com",209],["shop.schaette-pferd.de",209],["schaette.de",209],["central-bb.de",210],["fitnessfoodcorner.de",211],["kuehlungsborn.de",212],["espressocoffeeshop.com",213],["brainmarket.pl",214],["getroots.app",215],["cart-in.re",[216,623]],["prestonpublishing.pl",217],["zara.com",218],["lepermislibre.fr",218],["negociardivida.spcbrasil.org.br",219],["pons.com",220],["adidas.*",221],["privacy.topreality.sk",222],["privacy.autobazar.eu",222],["vu.lt",223],["adnkronos.com",[224,225]],["cornwalllive.com",[224,225]],["cyprus-mail.com",[224,225]],["einthusan.tv",[224,225]],["informazione.it",[224,225]],["mymovies.it",[224,225]],["tuttoeuropei.com",[224,225]],["video.lacnews24.it",[224,225]],["protothema.gr",224],["flash.gr",224],["taxscouts.com",226],["heute.at>>",227],["online.no",228],["telenor.no",228],["austrian.com",229],["lufthansa.com",229],["kampfkunst-herz.de",230],["glow25.de",230],["h-f.at",230],["hornetsecurity.com",230],["ifun.de",230],["kayzen.io",230],["wasserkunst-hamburg.de",230],["zahnspange-oelde.de",230],["xinedome.de",231],["bnc.ca",232],["egora.fr",232],["engelvoelkers.com",232],["estrategiasdeinversion.com",232],["festo.com",232],["francebleu.fr",232],["francemediasmonde.com",232],["geny.com",232],["giphy.com",232],["idealista.com",232],["infolibre.es",232],["inpost.pl",232],["information.tv5monde.com",232],["ing.es",232],["knipex.de",232],["laprovence.com",232],["lemondeinformatique.fr",232],["libertaddigital.com",232],["mappy.com",232],["orf.at",232],["philibertnet.com",232],["researchgate.net",232],["standaard.be",232],["stroilioro.com",232],["taxfix.de",232],["telecinco.es",232],["vistaalegre.com",232],["zimbra.free.fr",232],["usinenouvelle.com",234],["reussir.fr",236],["bruendl.at",238],["latamairlines.com",239],["elisa.ee",240],["baseendpoint.brigitte.de",241],["baseendpoint.gala.de",241],["baseendpoint.haeuser.de",241],["baseendpoint.stern.de",241],["baseendpoint.urbia.de",241],["cmp.tag24.de",241],["cmp-sp.handelsblatt.com",241],["cmpv2.berliner-zeitung.de",241],["golem.de",241],["rockhard.de>>",241],["consent.t-online.de",241],["sp-consent.stuttgarter-nachrichten.de",242],["btc-echo.de>>",242],["sp-consent.stuttgarter-zeitung.de",242],["regjeringen.no",243],["sp-manager-magazin-de.manager-magazin.de",244],["consent.11freunde.de",244],["f1academy.com>>",245],["timeout.com>>",[245,246]],["karlsruhe-insider.de>>",247],["promiflash.de>>",248],["wallester.com",249],["centrum24.pl",250],["replay.lsm.lv",251],["ltv.lsm.lv",251],["bernistaba.lsm.lv",251],["verl.de",252],["cubo-sauna.de",252],["mbl.is",252],["auto-medienportal.net",252],["mobile.de",253],["cookist.it",254],["fanpage.it",254],["geopop.it",254],["lexplain.it",254],["royalmail.com",255],["gmx.net",256],["gmx.ch",257],["mojehobby.pl",258],["super-hobby.*",258],["sp.stylevamp.de",[259,260]],["cmp.wetteronline.de",259],["sp.stylevamp.com",260],["audi.*",[261,262]],["easyjet.com",261],["experian.co.uk",261],["postoffice.co.uk",261],["tescobank.com",261],["internetaptieka.lv",[263,264]],["nike.com",265],["wells.pt",266],["dskdirect.bg",267],["cmpv2.dba.dk",268],["spcmp.crosswordsolver.com",269],["gbnews.com>>",[269,627]],["ecco.com",270],["georgjensen.com",270],["thomann.*",271],["landkreis-kronach.de",272],["effectiefgeven.be",273],["northcoast.com",273],["chaingpt.org",273],["bandenconcurrent.nl",274],["bandenexpert.be",274],["reserved.com",275],["metro.it",276],["makro.es",276],["metro.sk",276],["metro-cc.hr",276],["makro.nl",276],["metro.bg",276],["metro.at",276],["metro-tr.com",276],["metro.de",276],["metro.fr",276],["makro.cz",276],["metro.ro",276],["makro.pt",276],["makro.pl",276],["sklepy-odido.pl",276],["rastreator.com",276],["metro.ua",277],["metro.rs",277],["metro-kz.com",277],["metro.md",277],["metro.hu",277],["metro-cc.ru",277],["metro.pk",277],["balay.es",278],["constructa.com",278],["dafy-moto.com",279],["akku-shop.nl",280],["akkushop-austria.at",280],["akkushop-b2b.de",280],["akkushop.de",280],["akkushop.dk",280],["batterie-boutique.fr",280],["akkushop-schweiz.ch",281],["evzuttya.com.ua",282],["eobuv.cz",282],["eobuwie.com.pl",282],["ecipele.hr",282],["eavalyne.lt",282],["chaussures.fr",282],["ecipo.hu",282],["eobuv.sk",282],["epantofi.ro",282],["epapoutsia.gr",282],["escarpe.it",282],["eschuhe.de",282],["obuvki.bg",282],["zapatos.es",282],["swedbank.ee",283],["mudanzavila.es",284],["bienmanger.com",285],["gesipa.*",286],["gesipausa.com",286],["beckhoff.com",286],["zitekick.dk",287],["eltechno.dk",287],["okazik.pl",287],["batteryempire.*",288],["maxi.rs",289],["garmin.com",290],["invisalign.*",290],["one4all.ie",290],["osprey.com",290],["wideroe.no",291],["bmw.*",292],["kijk.nl",293],["nordania.dk",294],["danskebank.*",294],["danskeci.com",294],["danica.dk",294],["dehn.*",295],["gewerbegebiete.de",296],["cordia.fr",297],["vola.fr",298],["lafi.fr",299],["skyscanner.*",300],["coolblue.*",301],["chipotle.com",302],["sanareva.*",303],["atida.fr",303],["bbva.*",304],["bbvauk.com",304],["expertise.unimi.it",305],["altenberg.de",306],["vestel.es",307],["tsb.co.uk",308],["buienradar.nl",[309,310]],["linsenplatz.de",311],["budni.de",312],["erstecardclub.hr",312],["teufel.de",[313,314]],["abp.nl",315],["simplea.sk",316],["flip.bg",317],["kiertokanki.com",318],["supla.fi>>",319],["leirovins.be",320],["vias.be",321],["edf.fr",322],["virbac.com",322],["diners.hr",322],["squarehabitat.fr",322],["arbitrobancariofinanziario.it",323],["ivass.it",323],["economiapertutti.bancaditalia.it",323],["smit-sport.de",324],["gekko-computer.de",324],["jysk.al",325],["go-e.com",326],["malerblatt-medienservice.de",327],["architekturbuch.de",327],["medienservice-holz.de",327],["leuchtstark.de",327],["casius.nl",328],["coolinarika.com",329],["giga-hamburg.de",329],["vakgaragevannunen.nl",329],["fortuluz.es",329],["finna.fi",329],["eurogrow.es",329],["paid.ai",329],["topnatur.cz",329],["topnatur.eu",329],["vakgarage.nl",329],["whufc.com",329],["zomaplast.cz",329],["envafors.dk",330],["dabbolig.dk",[331,332]],["daruk-emelok.hu",333],["exakta.se",334],["larca.de",335],["roli.com",336],["okazii.ro",337],["lr-shop-direkt.de",337],["portalprzedszkolny.pl",337],["tgvinoui.sncf",338],["l-bank.de",339],["interhyp.de",340],["indigoneo.*",341],["transparency.meta.com",342],["dojusagro.lt",343],["eok.ee",343],["kripa.it",343],["nextdaycatering.co.uk",343],["safran-group.com",343],["sr-ramenendeuren.be",343],["ilovefreegle.org",343],["tribexr.com",343],["understandingsociety.ac.uk",343],["bestbuycyprus.com",344],["strato.*",345],["strato-hosting.co.uk",345],["auto.de",346],["contentkingapp.com",347],["comune.palermo.it",348],["get-in-engineering.de",349],["spp.nextpit.com",350],["spp.nextpit.es",351],["spp.nextpit.it",352],["spp.nextpit.com.br",353],["spp.nextpit.fr",354],["otterbox.com",355],["stoertebeker-brauquartier.com",356],["stoertebeker.com",356],["stoertebeker-eph.com",356],["aparts.pl",357],["sinsay.com",[358,359]],["benu.cz",360],["stockholmresilience.org",361],["ludvika.se",361],["kammarkollegiet.se",361],["cazenovecapital.com",362],["statestreet.com",363],["beopen.lv",364],["cesukoncertzale.lv",365],["dodo.fr",366],["makelaarsland.nl",367],["bezirk-schwaben.de",368],["dorfen.de",368],["nutsinbulk.co.uk",369],["bricklink.com",370],["bestinver.es",371],["icvs2023.conf.tuwien.ac.at",372],["racshop.co.uk",[373,374]],["baabuk.com",375],["sapien.io",375],["tradedoubler.com",375],["app.lepermislibre.fr",376],["multioferta.es",377],["testwise.com",[378,379]],["tonyschocolonely.com",380],["fitplus.is",380],["fransdegrebber.nl",380],["lilliputpress.ie",380],["lexibo.com",380],["marin-milou.com",380],["dare2tri.com",380],["t3micro.*",380],["la-vie-naturelle.com",[381,382]],["inovelli.com",383],["uonetplus.vulcan.net.pl",[384,385]],["consent.helagotland.se",386],["oper.koeln",[387,388]],["deezer.com",389],["hoteldesartssaigon.com",390],["autoritedelaconcurrence.fr",391],["groupeonepoint.com",391],["geneanet.org",391],["carrieres.groupegalerieslafayette.com",391],["immo-banques.fr",391],["lingvanex.com",391],["turncamp.com",392],["ejobs.ro",[393,394]],["kupbilecik.*",[395,396]],["coolbe.com",397],["serienjunkies.de",398],["computerhoy.20minutos.es",399],["clickskeks.at",400],["clickskeks.de",400],["abt-sportsline.de",400],["wittmann-group.com",400],["exemplary.ai",401],["forbo.com",401],["stores.sk",401],["nerdstar.de",401],["prace.cz",401],["profesia.sk",401],["profesia.cz",401],["pracezarohem.cz",401],["atmoskop.cz",401],["seduo.sk",401],["seduo.cz",401],["teamio.com",401],["arnold-robot.com",401],["cvonline.lt",401],["cv.lv",401],["cv.ee",401],["dirbam.lt",401],["visidarbi.lv",401],["otsintood.ee",401],["webtic.it",401],["gerth.de",402],["pamiatki.pl",403],["initse.com",404],["salvagny.org",405],["augsburger-allgemeine.de",406],["stabila.com",407],["stwater.co.uk",408],["suncalc.org",[409,410]],["swisstph.ch",411],["taxinstitute.ie",412],["get-in-it.de",413],["tempcover.com",[414,415]],["guildford.gov.uk",416],["easyparts.*",[417,418]],["easyparts-recambios.es",[417,418]],["easyparts-rollerteile.de",[417,418]],["drimsim.com",419],["canyon.com",[420,421,422]],["vevovo.be",[423,424]],["vendezvotrevoiture.be",[423,424]],["wirkaufendeinauto.at",[423,424]],["vikoberallebiler.dk",[423,424]],["wijkopenautos.nl",[423,424]],["vikoperdinbil.se",[423,424]],["noicompriamoauto.it",[423,424]],["vendezvotrevoiture.fr",[423,424]],["compramostucoche.es",[423,424]],["wijkopenautos.be",[423,424]],["auto-doc.*",425],["autodoc.*",425],["autodoc24.*",425],["topautoosat.fi",425],["autoteiledirekt.de",425],["autoczescionline24.pl",425],["tuttoautoricambi.it",425],["onlinecarparts.co.uk",425],["autoalkatreszek24.hu",425],["autodielyonline24.sk",425],["reservdelar24.se",425],["pecasauto24.pt",425],["reservedeler24.co.no",425],["piecesauto24.lu",425],["rezervesdalas24.lv",425],["besteonderdelen.nl",425],["recambioscoche.es",425],["antallaktikaexartimata.gr",425],["piecesauto.fr",425],["teile-direkt.ch",425],["lpi.org",426],["divadelniflora.cz",427],["mahle-aftermarket.com",428],["refurbed.*",429],["eingutertag.org",430],["flyingtiger.com",[430,573]],["borgomontecedrone.it",430],["maharishistore.com",430],["recaro-shop.com",430],["gartenhotel-crystal.at",430],["fayn.com",431],["serica-watches.com",431],["sklavenitis.gr",432],["eam-netz.de",433],["umicore.*",434],["veiligverkeer.be",434],["vsv.be",434],["dehogerielen.be",434],["gera.de",435],["mfr-chessy.fr",436],["mfr-lamure.fr",436],["mfr-saint-romain.fr",436],["mfr-lapalma.fr",436],["mfrvilliemorgon.asso.fr",436],["mfr-charentay.fr",436],["mfr.fr",436],["nationaltrust.org.uk",437],["hej-natural.*",438],["ib-hansmeier.de",439],["rsag.de",440],["esaa-eu.org",440],["aknw.de",440],["answear.*",441],["theprotocol.it",[442,443]],["lightandland.co.uk",444],["etransport.pl",445],["wohnen-im-alter.de",446],["johnmuirhealth.com",[447,448]],["markushaenni.com",449],["airbaltic.com",450],["gamersgate.com",450],["zorgzaam010.nl",451],["etos.nl",452],["paruvendu.fr",453],["privacy.bazar.sk",454],["hennamorena.com",455],["newsello.pl",456],["porp.pl",457],["golfbreaks.com",458],["lieferando.de",459],["just-eat.*",459],["justeat.*",459],["pyszne.pl",459],["lieferando.at",459],["takeaway.com",459],["thuisbezorgd.nl",459],["holidayhypermarket.co.uk",460],["unisg.ch",461],["wassererleben.ch",461],["psgaz.pl",462],["play-asia.com",463],["centralthe1card.com",464],["atu.de",465],["atu-flottenloesungen.de",465],["but.fr",465],["edeka.de",465],["fortuneo.fr",465],["maif.fr",465],["meteo.tf1.fr",465],["particuliers.sg.fr",465],["sparkasse.at",465],["group.vig",465],["tf1info.fr",465],["dpdgroup.com",466],["dpd.com",466],["cosmosdirekt.de",466],["bstrongoutlet.pt",467],["isarradweg.de",[468,469]],["flaxmanestates.com",469],["inland-casas.com",469],["finlayson.fi",[470,471]],["cowaymega.ca",[470,471]],["arktis.de",472],["desktronic.de",472],["belleek.com",472],["brauzz.com",472],["cowaymega.com",472],["dockin.de",472],["dryrobe.com",[472,473]],["formswim.com",472],["hairtalk.se",472],["hallmark.co.uk",[472,473]],["loopearplugs.com",[472,473]],["oleus.com",472],["peopleofshibuya.com",472],["pullup-dip.com",472],["sanctum.shop",472],["tbco.com",472],["desktronic.*",473],["hq-germany.com",473],["tepedirect.com",473],["maxi-pet.ro",473],["paper-republic.com",473],["pullup-dip.*",473],["vitabiotics.com",473],["smythstoys.com",474],["beam.co.uk",[475,476]],["autobahn.de",477],["krakow.pl",478],["shop.app",479],["shopify.com",479],["wufoo.com",480],["consent.dailymotion.com",481],["laposte.fr",481],["help.instagram.com",482],["crazygames.com>>",[483,685]],["consent-manager.thenextweb.com",484],["consent-cdn.zeit.de",485],["coway-usa.com",486],["steiners.shop",487],["ecmrecords.com",488],["cigarjournal.com",488],["invidis.com",488],["malaikaraiss.com",488],["koch-mit.de",488],["zeitreisen.zeit.de",488],["wefashion.com",489],["merkur.dk",490],["ionos.*",492],["omegawatches.com",493],["carefully.be",494],["aerotime.aero",494],["rocket-league.com",495],["dws.com",496],["bosch-homecomfort.com",497],["elmleblanc-optibox.fr",497],["monservicechauffage.fr",497],["boschrexroth.com",497],["home-connect.com",498],["lowrider.at",[499,500]],["mesto.de",501],["intersport.gr",502],["intersport.bg",502],["intersport.com.cy",502],["intersport.ro",502],["ticsante.com",503],["techopital.com",503],["millenniumprize.org",504],["hepster.com",505],["peterstaler.de",506],["blackforest-still.de",506],["tiendaplayaundi.com",507],["ajtix.co.uk",508],["raja.fr",509],["rajarani.de",509],["rajapack.*",[509,510]],["avery-zweckform.com",511],["1xinternet.com",511],["futterhaus.de",511],["dasfutterhaus.at",511],["frischeparadies.de",511],["fmk-steuer.de",511],["selgros.de",511],["transgourmet.de",511],["mediapart.fr",512],["athlon.com",513],["alumniportal-deutschland.org",514],["snoopmedia.com",514],["myguide.de",514],["daad.de",514],["cornelsen.de",[515,516]],["vinmonopolet.no",518],["tvp.info",519],["tvp.pl",519],["tvpworld.com",519],["brtvp.pl",519],["tvpparlament.pl",519],["belsat.eu",519],["warnung.bund.de",520],["mediathek.lfv-bayern.de",521],["allegro.*",522],["allegrolokalnie.pl",522],["ceneo.pl",522],["czc.cz",522],["eon.pl",[523,524]],["ylasatakunta.fi",[525,526]],["mega-image.ro",527],["louisvuitton.com",528],["bodensee-airport.eu",529],["department56.com",530],["allendesignsstudio.com",530],["designsbylolita.co",530],["shop.enesco.com",530],["savoriurbane.com",531],["miumiu.com",532],["church-footwear.com",532],["clickdoc.fr",533],["car-interface.com",534],["monolithdesign.it",534],["thematchahouse.com",534],["smileypack.de",[535,536]],["finom.co",537],["orange.es",[538,539]],["fdm-travel.dk",540],["hummel.dk",540],["jysk.nl",540],["power.no",540],["skousen.dk",540],["velliv.dk",540],["whiteaway.com",540],["whiteaway.no",540],["whiteaway.se",540],["skousen.no",540],["energinet.dk",540],["elkjop.no",540],["medimax.de",541],["costautoricambi.com",542],["lotto.it",542],["readspeaker.com",542],["team.blue",542],["ibistallinncenter.ee",543],["aaron.ai",544],["futureverse.com",545],["tandem.co.uk",545],["insights.com",546],["thebathcollection.com",547],["coastfashion.com",[548,549]],["oasisfashion.com",[548,549]],["warehousefashion.com",[548,549]],["misspap.com",[548,549]],["karenmillen.com",[548,549]],["boohooman.com",[548,549]],["hdt.de",550],["wolt.com",551],["xohotels.com",552],["sourcepoint.theguardian.com",[552,714]],["sim24.de",553],["tnt.com",554],["uza.be",555],["uzafoundation.be",555],["uzajobs.be",555],["bergzeit.*",[556,557]],["cinemas-lumiere.com",558],["cdiscount.com",559],["brabus.com",560],["roborock.com",561],["strumentimusicali.net",562],["maisonmargiela.com",563],["webfleet.com",564],["dragonflyshipping.ca",565],["broekhuis.nl",566],["groningenairport.nl",566],["nemck.cz",567],["zdfheute.de",568],["sap-press.com",569],["roughguides.com",[570,571]],["korvonal.com",572],["rexbo.*",574],["itau.com.br",575],["bbg.gv.at",576],["portal.taxi.eu",577],["topannonces.fr",578],["homap.fr",579],["artifica.fr",580],["plan-interactif.com",580],["ville-cesson.fr",580],["moismoliere.com",581],["unihomes.co.uk",582],["bkk.hu",583],["coiffhair.com",584],["ptc.eu",585],["ziegert-group.com",[586,695]],["lassuranceretraite.fr",587],["interieur.gouv.fr",587],["toureiffel.paris",587],["economie.gouv.fr",587],["education.gouv.fr",587],["livoo.fr",587],["su.se",587],["zappo.fr",587],["smdv.de",588],["digitalo.de",588],["petiteamelie.*",589],["mojanorwegia.pl",590],["koempf24.ch",[591,592]],["teichitekten24.de",[591,592]],["koempf24.de",[591,592]],["wolff-finnhaus-shop.de",[591,592]],["asnbank.nl",593],["blgwonen.nl",593],["regiobank.nl",593],["snsbank.nl",593],["vulcan.net.pl",[594,595]],["ogresnovads.lv",596],["partenamut.be",597],["pirelli.com",598],["unicredit.it",599],["effector.pl",600],["zikodermo.pl",[601,602]],["devolksbank.nl",603],["caixabank.es",604],["me.motorsport.com>>",605],["motorsport.com>>",606],["cyberport.de",607],["cyberport.at",607],["slevomat.cz",608],["kfzparts24.de",609],["runnersneed.com",610],["aachener-zeitung.de",611],["sportpursuit.com",612],["druni.es",[613,624]],["druni.pt",[613,624]],["delta.com",614],["onliner.by",[615,616]],["vejdirektoratet.dk",617],["usaa.com",618],["consorsbank.de",619],["metroag.de",620],["kupbilecik.pl",621],["oxfordeconomics.com",622],["routershop.nl",623],["woo.pt",623],["e-jumbo.gr",625],["alza.*",626],["rmf.fm",628],["rmf24.pl",628],["tracfone.com",629],["lequipe.fr",630],["global.abb",631],["gala.fr",632],["purepeople.com",633],["3sat.de",634],["zdf.de",634],["filmfund.lu",635],["welcometothejungle.com",635],["triblive.com",636],["rai.it",637],["fbto.nl",638],["europa.eu",639],["caisse-epargne.fr",640],["banquepopulaire.fr",640],["bigmammagroup.com",641],["studentagency.sk",641],["studentagency.eu",641],["winparts.be",642],["winparts.nl",642],["winparts.eu",643],["winparts.ie",643],["winparts.se",643],["sportano.*",[644,645]],["crocs.*",646],["chronext.ch",647],["chronext.de",647],["chronext.at",647],["chronext.com",648],["chronext.co.uk",648],["chronext.fr",649],["chronext.nl",650],["chronext.it",651],["galerieslafayette.com",652],["bazarchic.com",653],["stilord.*",654],["tiko.pt",655],["nsinternational.com",656],["meinbildkalender.de",657],["gls-group.com",658],["gls-group.eu",658],["univie.ac.at",658],["chilis.com",659],["account.bhvr.com",661],["everand.com",661],["lucidchart.com",661],["intercars.ro",[661,662]],["scribd.com",661],["guidepoint.com",661],["erlebnissennerei-zillertal.at",663],["hintertuxergletscher.at",663],["tiwag.at",663],["playseatstore.com",664],["tivify.tv>>",665],["swiss-sport.tv",666],["targobank-magazin.de",667],["zeit-verlagsgruppe.de",667],["online-physiotherapie.de",667],["kieferorthopaede-freisingsmile.de",668],["nltraining.nl",669],["kmudigital.at",670],["mintysquare.com",671],["consent.thetimes.com",672],["cadenaser.com",673],["berlinale.de",674],["lebonlogiciel.com",675],["iberiaexpress.com",676],["easycosmetic.ch",677],["pharmastar.it",678],["washingtonpost.com",679],["brillenplatz.de",680],["angelplatz.de",680],["dt.mef.gov.it",681],["raffeldeals.com",682],["stepstone.de",683],["kobo.com",684],["zoxs.de",686],["offistore.fi",687],["collinsaerospace.com",688],["radioapp.lv",691],["hagengrote.de",692],["hemden-meister.de",692],["vorteilshop.com",693],["capristores.gr",694],["getaround.com",696],["technomarket.bg",697],["epiphone.com",699],["gibson.com",699],["maestroelectronics.com",699],["cropp.com",[700,701]],["housebrand.com",[700,701]],["mohito.com",[700,701]],["autoczescizielonki.pl",702],["b-s.de",703],["novakid.pl",704],["piecesauto24.com",705],["earpros.com",706],["portalridice.cz",707],["kitsapcu.org",708],["nutsinbulk.*",709],["berlin-buehnen.de",710],["metropoliten.rs",711],["educa2.madrid.org",712],["immohal.de",713],["rtlplay.be",715],["natgeotv.com",715],["llama.com",716],["meta.com",716],["setasdesevilla.com",717],["cruyff-foundation.org",718],["allianz.*",719],["energiedirect-bayern.de",720],["postnl.be",721],["postnl.nl",721],["sacyr.com",722],["volkswagen-newsroom.com",723],["openbank.*",724],["tagus-eoficina.grupogimeno.com",725],["tidal.com",726],["knax.de",727],["ordblindenetvaerket.dk",728],["boligbeton.dk",728],["dukh.dk",728],["pevgrow.com",729],["ya.ru",730],["ipolska24.pl",731],["17bankow.com",731],["kazimierzdolny.pl",731],["vpolshchi.pl",731],["dobreprogramy.pl",[731,732]],["essanews.com",731],["money.pl",731],["autokult.pl",731],["komorkomania.pl",731],["polygamia.pl",731],["autocentrum.pl",731],["homebook.pl",731],["domodi.pl",731],["jastrzabpost.pl",731],["open.fm",731],["gadzetomania.pl",731],["fotoblogia.pl",731],["abczdrowie.pl",731],["parenting.pl",731],["kafeteria.pl",731],["vibez.pl",731],["wakacje.pl",731],["extradom.pl",731],["totalmoney.pl",731],["superauto.pl",731],["nerwica.com",731],["forum.echirurgia.pl",731],["dailywrap.net",731],["pysznosci.pl",731],["genialne.pl",731],["finansowysupermarket.pl",731],["deliciousmagazine.pl",731],["audioteka.com",731],["easygo.pl",731],["so-magazyn.pl",731],["o2.pl",731],["pudelek.pl",731],["benchmark.pl",731],["wp.pl",731],["altibox.dk",733],["altibox.no",733],["talksport.com",734],["zuiderzeemuseum.nl",735],["gota.io",736],["nwzonline.de",737],["scaleway.com",738],["bistro.sk",739],["spk-schaumburg.de",740],["computerbase.de",741],["comdirect.de",742],["metro.co.uk",743],["imaios.com",744],["myprivacy.dpgmedia.nl",745],["myprivacy.dpgmedia.be",745],["www.dpgmediagroup.com",745],["exxen.com",746],["cbsnews.com",747],["infshop.fi",748],["jimms.fi",749],["avinor.no",750],["accursia-capital.de",751],["joyn.de",752],["oeq.org",753],["codewars.com",754],["formazionepro.it",755]]);
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
