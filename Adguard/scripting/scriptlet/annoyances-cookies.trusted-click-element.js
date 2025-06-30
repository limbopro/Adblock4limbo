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
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","800"],["button[title=\"REJECT ALL\"]","","1200"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button#W0wltc","","500"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button.cookie-decline-all","","1800"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["div.decline","","1000"],["button#declineAllConsentSummary","","1500"],["button.deny-btn","","1000"],["span#idxrcookiesKO","","1000"],["button[data-action=\"cookie-consent#onToggleShowManager\"]","","900"],["button[data-action=\"cookie-consent#onSaveSetting\"]","","1200"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1500"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[onclick=\"cookiesAlert.rejectAll()\"]","","1000"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button[title=\"Schließen & Akzeptieren\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.cookieselection-confirm-necessary","","2500"],["button[value=\"essential\"]","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button.swal2-cancel","","1000"],["button[data-component-name=\"reject\"]","","1000"],["button.fides-reject-all-button","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["div[aria-label=\"Only allow essential cookies\"]","","1000"],["button[title=\"Agree & Continue\"]","","1800"],["button[title=\"Reject All\"]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button[title=\"Adjust cookie preferences\"]","","500"],["button[title=\"Deny all cookies\"]","","650"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","2500"],["button[onclick*=\"(()=>{ CassieWidgetLoader.Widget.rejectAll\"]","","1000"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],["a.ea_ignore","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[data-test=\"terms-accept-button\"]","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"],["button#CybotCookiebotDialogBodyButtonDecline"],["button.cta-size-big.cta-outline"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",[7,8]],["forbes.com",[7,74]],["nike.com",7],["consent.fastcar.co.uk",7],["tapmaster.ca",7],["cmpv2.standard.co.uk",[9,10]],["cmpv2.independent.co.uk",[11,12,13,179]],["wetransfer.com",[14,15]],["spiegel.de",[16,17]],["nytimes.com",[18,175]],["consent.yahoo.com",19],["tumblr.com",20],["fplstatistics.co.uk",21],["fplstatistics.com",21],["e-shop.leonidas.com",22],["cdn.privacy-mgmt.com",[23,24,43,46,47,48,49,93,95,103,110,117,118,119,130,131,132,135,137,138,151,168,193,213,226,227,230,231,232,233,250,299,433,463,587,610,648,666]],["walmart.ca",25],["sams.com.mx",26],["my.tonies.com",27],["cambio-carsharing.de",27],["festool.*",27],["festoolcanada.com",27],["fuso-trucks.*",27],["tracker.fressnapf.de",27],["myfabrics.co.uk",27],["zinus.*",27],["consent.ladbible.com",[28,29]],["consent.unilad.com",[28,29]],["consent.uniladtech.com",[28,29]],["consent.gamingbible.com",[28,29]],["consent.sportbible.com",[28,29]],["consent.tyla.com",[28,29]],["consent.ladbiblegroup.com",[28,29]],["m2o.it",30],["deejay.it",30],["capital.it",30],["ilmattino.it",[30,31]],["leggo.it",[30,31]],["libero.it",30],["tiscali.it",30],["consent-manager.ft.com",[32,33,34]],["hertz.*",35],["mediaworld.it",36],["mediamarkt.*",36],["mediamarktsaturn.com",37],["uber.com",[38,176]],["ubereats.com",[38,176]],["lego.com",39],["ai.meta.com",40],["lilly.com",41],["cosmo-hairshop.de",42],["storyhouseegmont.no",42],["ilgiornale.it",44],["www.google.*",45],["telekom.com",50],["telekom.net",50],["telekom.de",50],["abola.pt",51],["flytap.com",51],["ansons.de",51],["blick.ch",51],["buienradar.be",51],["crunchyroll.com",51],["digi24.ro",51],["digisport.ro",51],["digitalfoundry.net",51],["egx.net",51],["emirates.com",51],["eurogamer.it",51],["foto-erhardt.de",51],["gmx.*",51],["kizi.com",51],["mail.com",51],["mcmcomiccon.com",51],["nachrichten.at",51],["nintendolife.com",51],["oe24.at",51],["paxsite.com",51],["peacocktv.com",51],["player.pl",51],["plus500.*",51],["pricerunner.com",51],["pricerunner.se",51],["pricerunner.dk",51],["proximus.be",[51,643]],["proximus.com",51],["purexbox.com",51],["pushsquare.com",51],["rugbypass.com",51],["southparkstudios.com",51],["southwest.com",51],["starwarscelebration.com",51],["sweatybetty.com",51],["theaa.ie",51],["thehaul.com",51],["timeextension.com",51],["travelandleisure.com",51],["tunein.com",51],["uefa.com",51],["videoland.com",51],["wizzair.com",51],["wetter.at",51],["dicebreaker.com",[52,53]],["eurogamer.cz",[52,53]],["eurogamer.es",[52,53]],["eurogamer.net",[52,53]],["eurogamer.nl",[52,53]],["eurogamer.pl",[52,53]],["eurogamer.pt",[52,53]],["gamesindustry.biz",[52,53]],["jelly.deals",[52,53]],["reedpop.com",[52,53]],["rockpapershotgun.com",[52,53]],["thepopverse.com",[52,53]],["vg247.com",[52,53]],["videogameschronicle.com",[52,53]],["eurogamer.de",54],["roadtovr.com",55],["jotex.*",55],["mundodeportivo.com",[56,125]],["m.youtube.com",57],["www.youtube.com",57],["ohra.nl",58],["corriere.it",59],["gazzetta.it",59],["oggi.it",59],["cmp.sky.it",60],["tennisassa.fi",61],["formula1.com",62],["f1racing.pl",63],["music.amazon.*",[64,65]],["consent-pref.trustarc.com",66],["highlights.legaseriea.it",67],["calciomercato.com",67],["sosfanta.com",68],["chrono24.*",[69,70]],["wetter.com",71],["youmath.it",72],["pip.gov.pl",73],["dailybuzz.nl",75],["bnn.de",75],["dosenbach.ch",75],["dw.com",75],["kinepolis.*",75],["mediaite.com",75],["nzz.ch",75],["winfuture.de",75],["lippu.fi",75],["racingnews365.com",75],["reifendirekt.ch",75],["vaillant.*",75],["bauhaus.no",76],["bauhaus.se",76],["beko-group.de",76],["billiger.de",76],["burda.com",76],["vanharen.nl",76],["deichmann.com",[76,98,471]],["meraluna.de",76],["slashdot.org",76],["hermann-saunierduval.it",76],["protherm.cz",76],["saunierduval.es",76],["protherm.sk",76],["protherm.ua",76],["saunierduval.hu",76],["saunierduval.ro",76],["saunierduval.at",76],["awb.nl",76],["spar.hu",77],["group.vattenfall.com",77],["mediaset.it",78],["fortune.com",79],["ilrestodelcarlino.it",80],["quotidiano.net",80],["lanazione.it",80],["ilgiorno.it",80],["iltelegrafolivorno.it",80],["auto.it",81],["beauxarts.com",81],["beinsports.com",81],["bfmtv.com",[81,126]],["boursobank.com",81],["boursorama.com",[81,126]],["boursier.com",[81,220]],["brut.media",81],["canalplus.com",81],["decathlon.fr",[81,217]],["diverto.tv",81],["eden-park.com",81],["foodvisor.io",81],["frandroid.com",81],["jobijoba.*",81],["hotelsbarriere.com",81],["intersport.*",[81,190]],["idealista.it",81],["o2.fr",81],["lejdd.fr",[81,125]],["lechorepublicain.fr",81],["la-croix.com",81],["linfo.re",81],["lamontagne.fr",81],["laredoute.fr",81],["largus.fr",81],["leprogres.fr",81],["lesnumeriques.com",81],["libramemoria.com",81],["lopinion.fr",81],["marieclaire.fr",81],["maville.com",81],["michelin.*",81],["midilibre.fr",[81,670]],["meteofrance.com",81],["mondialtissus.fr",81],["orange.fr",81],["orpi.com",81],["oscaro.com",81],["ouest-france.fr",[81,94,126,671]],["parismatch.com",81],["pagesjaunes.fr",81],["programme-television.org",[81,126]],["publicsenat.fr",[81,126]],["rmcbfmplay.com",[81,126]],["science-et-vie.com",[81,125]],["seloger.com",81],["societe.com",81],["suzuki.fr",81],["sudouest.fr",81],["web-agri.fr",81],["nutri-plus.de",82],["aa.com",83],["americanairlines.*",83],["consent.capital.fr",84],["consent.voici.fr",84],["programme-tv.net",84],["cmpv2.finn.no",85],["cmp.tek.no",[86,87]],["cmp.e24.no",[86,87]],["minmote.no",[86,87]],["cmp.vg.no",[86,87]],["huffingtonpost.fr",88],["rainews.it",89],["remarkable.com",90],["netzwelt.de",91],["money.it",92],["allocine.fr",94],["jeuxvideo.com",94],["ozap.com",94],["le10sport.com",94],["xataka.com",94],["cmp.fitbook.de",95],["cmp.autobild.de",95],["sourcepoint.sport.de",95],["cmp-sp.tagesspiegel.de",95],["cmp.bz-berlin.de",95],["cmp.cicero.de",95],["cmp.techbook.de",95],["cmp.stylebook.de",95],["cmp2.bild.de",95],["cmp2.freiepresse.de",95],["sourcepoint.wetter.de",95],["consent.finanzen.at",95],["consent.finanzen.net",95],["consent.up.welt.de",95],["sourcepoint.n-tv.de",95],["sourcepoint.kochbar.de",95],["sourcepoint.rtl.de",95],["cmp.computerbild.de",95],["cmp.petbook.de",95],["cmp-sp.siegener-zeitung.de",95],["cmp-sp.sportbuzzer.de",95],["klarmobil.de",95],["technikum-wien.at",96],["eneco.nl",97],["salomon.com",99],["blackpoolgazette.co.uk",100],["lep.co.uk",100],["northamptonchron.co.uk",100],["scotsman.com",100],["shieldsgazette.com",100],["thestar.co.uk",100],["portsmouth.co.uk",100],["sunderlandecho.com",100],["northernirelandworld.com",100],["3addedminutes.com",100],["anguscountyworld.co.uk",100],["banburyguardian.co.uk",100],["bedfordtoday.co.uk",100],["biggleswadetoday.co.uk",100],["bucksherald.co.uk",100],["burnleyexpress.net",100],["buxtonadvertiser.co.uk",100],["chad.co.uk",100],["daventryexpress.co.uk",100],["derbyshiretimes.co.uk",100],["derbyworld.co.uk",100],["derryjournal.com",100],["dewsburyreporter.co.uk",100],["doncasterfreepress.co.uk",100],["falkirkherald.co.uk",100],["fifetoday.co.uk",100],["glasgowworld.com",100],["halifaxcourier.co.uk",100],["harboroughmail.co.uk",100],["harrogateadvertiser.co.uk",100],["hartlepoolmail.co.uk",100],["hemeltoday.co.uk",100],["hucknalldispatch.co.uk",100],["lancasterguardian.co.uk",100],["leightonbuzzardonline.co.uk",100],["lincolnshireworld.com",100],["liverpoolworld.uk",100],["londonworld.com",100],["lutontoday.co.uk",100],["manchesterworld.uk",100],["meltontimes.co.uk",100],["miltonkeynes.co.uk",100],["newcastleworld.com",100],["newryreporter.com",100],["newsletter.co.uk",100],["northantstelegraph.co.uk",100],["northumberlandgazette.co.uk",100],["nottinghamworld.com",100],["peterboroughtoday.co.uk",100],["rotherhamadvertiser.co.uk",100],["stornowaygazette.co.uk",100],["surreyworld.co.uk",100],["thescarboroughnews.co.uk",100],["thesouthernreporter.co.uk",100],["totallysnookered.com",100],["wakefieldexpress.co.uk",100],["walesworld.com",100],["warwickshireworld.com",100],["wigantoday.net",100],["worksopguardian.co.uk",100],["yorkshireeveningpost.co.uk",100],["yorkshirepost.co.uk",100],["eurocard.com",101],["saseurobonusmastercard.se",102],["tver.jp",104],["linkedin.com",105],["elmundo.es",[106,126]],["expansion.com",106],["s-pankki.fi",107],["srf.ch",107],["alternate.de",107],["bayer04.de",107],["douglas.de",107],["dr-beckmann.com",107],["falke.com",107],["fitnessfirst.de",107],["flaschenpost.de",107],["gloeckle.de",107],["hornbach.nl",107],["hypofriend.de",107],["lactostop.de",107],["neumann.com",107],["post.ch",107],["postbank.de",107],["immowelt.de",108],["joyn.*",108],["morenutrition.de",108],["mapillary.com",109],["cmp.seznam.cz",111],["marca.com",112],["raiplay.it",113],["raiplaysound.it",113],["derstandard.at",114],["derstandard.de",114],["faz.net",114],["automoto.it",115],["ansa.it",115],["delladio.it",115],["huffingtonpost.it",115],["internazionale.it",115],["lastampa.it",115],["macitynet.it",115],["moto.it",115],["movieplayer.it",115],["multiplayer.it",115],["repubblica.it",115],["tomshw.it",115],["skuola.net",115],["spaziogames.it",115],["tuttoandroid.net",115],["tuttotech.net",115],["ilgazzettino.it",116],["ilmessaggero.it",116],["ilsecoloxix.it",116],["privacy.motorradonline.de",119],["consent.watson.de",119],["consent.kino.de",119],["consent.desired.de",119],["cmpv2.fn.de",119],["spp.nextpit.de",119],["dailystar.co.uk",[120,121,122,123]],["mirror.co.uk",[120,121,122,123]],["idnes.cz",124],["20minutes.fr",125],["20minutos.es",125],["24sata.hr",125],["abc.es",125],["actu.fr",125],["antena3.com",125],["antena3internacional.com",125],["atresmedia.com",125],["atresmediapublicidad.com",125],["atresmediastudios.com",125],["atresplayer.com",125],["autopista.es",125],["belfasttelegraph.co.uk",125],["bemad.es",125],["bonduelle.it",125],["bonniernews.se",125],["bt.se",125],["cadenadial.com",125],["caracol.com.co",125],["cas.sk",125],["charentelibre.fr",125],["ciclismoafondo.es",125],["cnews.fr",125],["cope.es",125],["correryfitness.com",125],["courrier-picard.fr",125],["cuatro.com",125],["decathlon.nl",125],["decathlon.pl",125],["di.se",125],["diariocordoba.com",125],["diariodenavarra.es",125],["diariosur.es",125],["diariovasco.com",125],["diepresse.com",125],["divinity.es",125],["dn.se",125],["dnevnik.hr",125],["dumpert.nl",125],["ebuyclub.com",125],["edreams.de",125],["edreams.net",125],["elcomercio.es",125],["elconfidencial.com",125],["elcorreo.com",125],["eldesmarque.com",125],["eldiario.es",125],["eldiariomontanes.es",125],["elespanol.com",125],["elle.fr",125],["elpais.com",125],["elpais.es",125],["elperiodico.com",125],["elperiodicodearagon.com",125],["elplural.com",125],["energytv.es",125],["engadget.com",125],["es.ara.cat",125],["euronews.com",125],["europafm.com",125],["expressen.se",125],["factoriadeficcion.com",125],["filmstarts.de",125],["flooxernow.com",125],["folkbladet.nu",125],["footmercato.net",125],["france.tv",125],["france24.com",125],["francetvinfo.fr",125],["fussballtransfers.com",125],["fyndiq.se",125],["ghacks.net",125],["gva.be",125],["hbvl.be",125],["heraldo.es",125],["hoy.es",125],["ideal.es",125],["idealista.pt",125],["k.at",125],["krone.at",125],["kurier.at",125],["lacoste.com",125],["ladepeche.fr",125],["lalibre.be",125],["lanouvellerepublique.fr",125],["larazon.es",125],["lasexta.com",125],["lasprovincias.es",125],["latribune.fr",125],["lavanguardia.com",125],["laverdad.es",125],["lavozdegalicia.es",125],["leboncoin.fr",125],["lecturas.com",125],["ledauphine.com",125],["lejsl.com",125],["leparisien.fr",125],["lesoir.be",125],["letelegramme.fr",125],["levoixdunord.fr",125],["libremercado.com",125],["los40.com",125],["lotoquebec.com",125],["lunion.fr",125],["m6.fr",125],["marianne.cz",125],["marmiton.org",125],["mediaset.es",125],["melodia-fm.com",125],["metronieuws.nl",125],["moviepilot.de",125],["mtmad.es",125],["multilife.com.pl",125],["naszemiasto.pl",125],["nationalgeographic.com.es",125],["nicematin.com",125],["nieuwsblad.be",125],["notretemps.com",125],["numerama.com",125],["okdiario.com",125],["ondacero.es",125],["podiumpodcast.com",125],["portail.lotoquebec.com",125],["profil.at",125],["public.fr",125],["publico.es",125],["radiofrance.fr",125],["rankia.com",125],["rfi.fr",125],["rossmann.pl",125],["rtbf.be",[125,217]],["rtl.lu",125],["sensacine.com",125],["sfgame.net",125],["shure.com",125],["silicon.es",125],["sncf-connect.com",125],["sport.es",125],["sydsvenskan.se",125],["techcrunch.com",125],["telegraaf.nl",125],["telequebec.tv",125],["tf1.fr",125],["tradingsat.com",125],["trailrun.es",125],["video-streaming.orange.fr",125],["xpress.fr",125],["ivoox.com",126],["as.com",126],["slam.nl",126],["bienpublic.com",126],["funradio.fr",126],["gamepro.de",[126,187,188]],["lemon.fr",126],["lexpress.fr",126],["shadow.tech",126],["letemps.ch",126],["mein-mmo.de",126],["heureka.sk",126],["film.at",126],["dhnet.be",126],["lesechos.fr",[126,222]],["marianne.net",[126,217]],["jeanmarcmorandini.com",[126,218]],["dna.fr",126],["sudinfo.be",126],["europe1.fr",[126,218]],["rtl.be",[126,217]],["reviewingthebrew.com",126],["jaysjournal.com",126],["reignoftroy.com",126],["ryobitools.eu",[127,128]],["americanexpress.com",129],["consent.radiotimes.com",132],["sp-consent.szbz.de",133],["cmp.omni.se",134],["cmp.svd.se",134],["cmp.aftonbladet.se",134],["cmp.tv.nu",134],["consent.economist.com",136],["studentagency.cz",136],["cmpv2.foundryco.com",137],["cmpv2.infoworld.com",137],["cmpv2.arnnet.com.au",137],["sp-cdn.pcgames.de",138],["sp-cdn.pcgameshardware.de",138],["consentv2.sport1.de",138],["cmp.mz.de",138],["cmpv2.tori.fi",139],["cdn.privacy-mgmt.co",140],["consent.spielaffe.de",141],["bondekompaniet.no",142],["degiro.*",142],["epochtimes.de",142],["vikingline.com",142],["tfl.gov.uk",142],["drklein.de",142],["hildegardis-krankenhaus.de",142],["kleer.se",142],["lekiaviation.com",142],["lotto.pl",142],["mineralstech.com",142],["volunteer.digitalboost.org.uk",142],["starhotels.com",142],["tefl.com",142],["universumglobal.com",142],["tui.com",143],["rexel.*",144],["csob.sk",145],["greenstuffworld.com",146],["morele.net",[147,148]],["1und1.de",149],["infranken.de",150],["cmp.bunte.de",151],["cmp.chip.de",151],["cmp.focus.de",[151,498]],["estadiodeportivo.com",152],["tameteo.*",152],["tempo.pt",152],["meteored.*",152],["pogoda.com",152],["yourweather.co.uk",152],["tempo.com",152],["theweather.net",152],["tiempo.com",152],["ilmeteo.net",152],["daswetter.com",152],["kicker.de",153],["formulatv.com",154],["web.de",155],["lefigaro.fr",156],["linternaute.com",157],["consent.caminteresse.fr",158],["volksfreund.de",159],["rp-online.de",159],["dailypost.co.uk",160],["the-express.com",160],["vide-greniers.org",160],["bluray-disc.de",161],["elio-systems.com",161],["stagatha-fachklinik.de",161],["tarife.mediamarkt.de",161],["lz.de",161],["gaggenau.com",161],["saturn.de",162],["eltiempo.es",[163,164]],["otempo.pt",165],["atlasformen.*",166],["cmp-sp.goettinger-tageblatt.de",167],["cmp-sp.saechsische.de",167],["cmp-sp.ln-online.de",167],["cz.de",167],["dewezet.de",167],["dnn.de",167],["haz.de",167],["gnz.de",167],["landeszeitung.de",167],["lvz.de",167],["maz-online.de",167],["ndz.de",167],["op-marburg.de",167],["ostsee-zeitung.de",167],["paz-online.de",167],["reisereporter.de",167],["rga.de",167],["rnd.de",167],["siegener-zeitung.de",167],["sn-online.de",167],["solinger-tageblatt.de",167],["sportbuzzer.de",167],["szlz.de",167],["tah.de",167],["torgauerzeitung.de",167],["waz-online.de",167],["privacy.maennersache.de",167],["sinergy.ch",169],["agglo-valais-central.ch",169],["biomedcentral.com",170],["hsbc.*",171],["hsbcnet.com",171],["hsbcinnovationbanking.com",171],["create.hsbc",171],["gbm.hsbc.com",171],["hsbc.co.uk",172],["internationalservices.hsbc.com",172],["history.hsbc.com",172],["about.hsbc.co.uk",173],["privatebanking.hsbc.com",174],["independent.co.uk",177],["privacy.crash.net",177],["the-independent.com",178],["argos.co.uk",180],["poco.de",[181,182]],["moebelix.*",181],["moemax.*",181],["xxxlutz.*",181],["xxxlesnina.*",181],["moebel24.ch",182],["meubles.fr",182],["meubelo.nl",182],["moebel.de",182],["lipo.ch",183],["schubiger.ch",184],["aedt.de",185],["berlin-live.de",185],["connect.de",185],["gutefrage.net",185],["insideparadeplatz.ch",185],["morgenpost.de",185],["play3.de",185],["thueringen24.de",185],["pdfupload.io",186],["gamestar.de",[187,188,226]],["verksamt.se",189],["acmemarkets.com",190],["amtrak.com",190],["beko.com",190],["bepanthen.com.au",190],["berocca.com.au",190],["booking.com",190],["carrefour.fr",190],["centrum.sk",190],["claratyne.com.au",190],["credit-suisse.com",190],["ceskatelevize.cz",190],["deporvillage.*",190],["de.vanguard",190],["dhl.de",190],["digikey.*",190],["drafthouse.com",190],["dunelm.com",190],["eurosport.fr",190],["fello.se",190],["fielmann.*",190],["flashscore.fr",190],["flightradar24.com",190],["fnac.es",190],["foodandwine.com",190],["fourseasons.com",190],["khanacademy.org",190],["konami.com",190],["jll.*",190],["jobs.redbull.com",190],["hellenicbank.com",190],["gemini.pl",190],["groceries.asda.com",190],["lamborghini.com",190],["menshealth.com",190],["n26.com",190],["nintendo.com",190],["nokia.com",190],["oneweb.net",190],["omnipod.com",190],["oralb.*",190],["panasonic.com",190],["parkside-diy.com",190],["pluto.tv",190],["popularmechanics.com",190],["polskieradio.pl",190],["pringles.com",190],["radissonhotels.com",190],["ricardo.ch",190],["rockstargames.com",190],["rte.ie",190],["salesforce.com",190],["samsonite.*",190],["spiele.heise.de",190],["spirit.com",190],["stenaline.co.uk",190],["swisscom.ch",190],["swisspass.ch",190],["technologyfromsage.com",190],["telenet.be",190],["tntsports.co.uk",190],["theepochtimes.com",190],["toujeo.com",190],["uber-platz.de",190],["questdiagnostics.com",190],["wallapop.com",190],["wickes.co.uk",190],["workingtitlefilms.com",190],["vattenfall.de",190],["winparts.fr",190],["yoigo.com",190],["zoominfo.com",190],["allegiantair.com",191],["hallmarkchannel.com",191],["incorez.com",191],["noovle.com",191],["otter.ai",191],["plarium.com",191],["telsy.com",191],["timenterprise.it",191],["tim.it",191],["tradersunion.com",191],["fnac.*",191],["yeti.com",191],["here.com",[192,679]],["vodafone.com",192],["cmp.heise.de",194],["cmp.am-online.com",194],["cmp.motorcyclenews.com",194],["consent.newsnow.co.uk",194],["cmp.todays-golfer.com",194],["spp.nextpit.com",194],["koeser.com",195],["shop.schaette-pferd.de",195],["schaette.de",195],["ocre-project.eu",196],["central-bb.de",197],["fitnessfoodcorner.de",198],["kuehlungsborn.de",199],["espressocoffeeshop.com",200],["brainmarket.pl",201],["getroots.app",202],["cart-in.re",[203,606]],["prestonpublishing.pl",204],["zara.com",205],["lepermislibre.fr",205],["negociardivida.spcbrasil.org.br",206],["adidas.*",207],["privacy.topreality.sk",208],["privacy.autobazar.eu",208],["vu.lt",209],["adnkronos.com",[210,211]],["cornwalllive.com",[210,211]],["cyprus-mail.com",[210,211]],["einthusan.tv",[210,211]],["informazione.it",[210,211]],["mymovies.it",[210,211]],["tuttoeuropei.com",[210,211]],["video.lacnews24.it",[210,211]],["protothema.gr",210],["flash.gr",210],["taxscouts.com",212],["online.no",214],["telenor.no",214],["austrian.com",215],["lufthansa.com",215],["kampfkunst-herz.de",216],["glow25.de",216],["h-f.at",216],["hornetsecurity.com",216],["kayzen.io",216],["wasserkunst-hamburg.de",216],["zahnspange-oelde.de",216],["bnc.ca",217],["egora.fr",217],["engelvoelkers.com",217],["estrategiasdeinversion.com",217],["festo.com",217],["franceinfo.fr",217],["francebleu.fr",217],["francemediasmonde.com",217],["geny.com",217],["giphy.com",217],["idealista.com",217],["infolibre.es",217],["information.tv5monde.com",217],["ing.es",217],["knipex.de",217],["laprovence.com",217],["lemondeinformatique.fr",217],["libertaddigital.com",217],["mappy.com",217],["orf.at",217],["philibertnet.com",217],["researchgate.net",217],["standaard.be",217],["stroilioro.com",217],["taxfix.de",217],["telecinco.es",217],["vistaalegre.com",217],["zimbra.free.fr",217],["usinenouvelle.com",219],["reussir.fr",221],["bruendl.at",223],["latamairlines.com",224],["elisa.ee",225],["baseendpoint.brigitte.de",226],["baseendpoint.gala.de",226],["baseendpoint.haeuser.de",226],["baseendpoint.stern.de",226],["baseendpoint.urbia.de",226],["cmp.tag24.de",226],["cmp-sp.handelsblatt.com",226],["cmpv2.berliner-zeitung.de",226],["golem.de",226],["consent.t-online.de",226],["sp-consent.stuttgarter-nachrichten.de",227],["sp-consent.stuttgarter-zeitung.de",227],["regjeringen.no",228],["sp-manager-magazin-de.manager-magazin.de",229],["consent.11freunde.de",229],["centrum24.pl",234],["replay.lsm.lv",235],["ltv.lsm.lv",235],["bernistaba.lsm.lv",235],["stadt-wien.at",236],["verl.de",236],["cubo-sauna.de",236],["mbl.is",236],["auto-medienportal.net",236],["mobile.de",237],["cookist.it",238],["fanpage.it",238],["geopop.it",238],["lexplain.it",238],["royalmail.com",239],["gmx.net",240],["gmx.ch",241],["mojehobby.pl",242],["super-hobby.*",242],["sp.stylevamp.de",243],["cmp.wetteronline.de",243],["audi.*",244],["easyjet.com",244],["experian.co.uk",244],["postoffice.co.uk",244],["tescobank.com",244],["internetaptieka.lv",[245,246]],["wells.pt",247],["dskdirect.bg",248],["cmpv2.dba.dk",249],["spcmp.crosswordsolver.com",250],["ecco.com",251],["georgjensen.com",251],["thomann.*",252],["landkreis-kronach.de",253],["effectiefgeven.be",254],["northcoast.com",254],["chaingpt.org",254],["bandenconcurrent.nl",255],["bandenexpert.be",255],["reserved.com",256],["metro.it",257],["makro.es",257],["metro.sk",257],["metro-cc.hr",257],["makro.nl",257],["metro.bg",257],["metro.at",257],["metro-tr.com",257],["metro.de",257],["metro.fr",257],["makro.cz",257],["metro.ro",257],["makro.pt",257],["makro.pl",257],["sklepy-odido.pl",257],["rastreator.com",257],["metro.ua",258],["metro.rs",258],["metro-kz.com",258],["metro.md",258],["metro.hu",258],["metro-cc.ru",258],["metro.pk",258],["balay.es",259],["constructa.com",259],["dafy-moto.com",260],["akku-shop.nl",261],["akkushop-austria.at",261],["akkushop-b2b.de",261],["akkushop.de",261],["akkushop.dk",261],["batterie-boutique.fr",261],["akkushop-schweiz.ch",262],["evzuttya.com.ua",263],["eobuv.cz",263],["eobuwie.com.pl",263],["ecipele.hr",263],["eavalyne.lt",263],["efootwear.eu",263],["eschuhe.ch",263],["eskor.se",263],["chaussures.fr",263],["ecipo.hu",263],["eobuv.com.ua",263],["eobuv.sk",263],["epantofi.ro",263],["epapoutsia.gr",263],["escarpe.it",263],["eschuhe.de",263],["obuvki.bg",263],["zapatos.es",263],["swedbank.ee",264],["mudanzavila.es",265],["bienmanger.com",266],["gesipa.*",267],["gesipausa.com",267],["beckhoff.com",267],["zitekick.dk",268],["eltechno.dk",268],["okazik.pl",268],["batteryempire.*",269],["maxi.rs",270],["garmin.com",271],["invisalign.*",271],["one4all.ie",271],["osprey.com",271],["wideroe.no",272],["bmw.*",273],["kijk.nl",274],["nordania.dk",275],["danskebank.*",275],["danskeci.com",275],["danicapension.dk",275],["dehn.*",276],["gewerbegebiete.de",277],["cordia.fr",278],["vola.fr",279],["lafi.fr",280],["skyscanner.*",281],["coolblue.*",282],["sanareva.*",283],["atida.fr",283],["bbva.*",284],["bbvauk.com",284],["expertise.unimi.it",285],["altenberg.de",286],["vestel.es",287],["tsb.co.uk",288],["buienradar.nl",[289,290]],["linsenplatz.de",291],["budni.de",292],["erstecardclub.hr",292],["teufel.de",[293,294]],["abp.nl",295],["simplea.sk",296],["flip.bg",297],["kiertokanki.com",298],["leirovins.be",300],["vias.be",301],["edf.fr",302],["virbac.com",302],["diners.hr",302],["squarehabitat.fr",302],["arbitrobancariofinanziario.it",303],["ivass.it",303],["economiapertutti.bancaditalia.it",303],["smit-sport.de",304],["gekko-computer.de",304],["jysk.al",305],["go-e.com",306],["malerblatt-medienservice.de",307],["architekturbuch.de",307],["medienservice-holz.de",307],["leuchtstark.de",307],["casius.nl",308],["coolinarika.com",309],["giga-hamburg.de",309],["vakgaragevannunen.nl",309],["fortuluz.es",309],["finna.fi",309],["eurogrow.es",309],["topnatur.cz",309],["topnatur.eu",309],["vakgaragevandertholen.nl",309],["whufc.com",309],["zomaplast.cz",309],["envafors.dk",310],["dabbolig.dk",[311,312]],["daruk-emelok.hu",313],["exakta.se",314],["larca.de",315],["roli.com",316],["okazii.ro",317],["lr-shop-direkt.de",317],["portalprzedszkolny.pl",317],["tgvinoui.sncf",318],["l-bank.de",319],["interhyp.de",320],["indigoneo.*",321],["transparency.meta.com",322],["dojusagro.lt",323],["eok.ee",323],["kripa.it",323],["nextdaycatering.co.uk",323],["safran-group.com",323],["sr-ramenendeuren.be",323],["ilovefreegle.org",323],["tribexr.com",323],["understandingsociety.ac.uk",323],["bestbuycyprus.com",324],["strato.*",325],["strato-hosting.co.uk",325],["auto.de",326],["contentkingapp.com",327],["comune.palermo.it",328],["get-in-engineering.de",329],["spp.nextpit.es",330],["spp.nextpit.it",331],["spp.nextpit.com.br",332],["spp.nextpit.fr",333],["otterbox.com",334],["stoertebeker-brauquartier.com",335],["stoertebeker.com",335],["stoertebeker-eph.com",335],["aparts.pl",336],["sinsay.com",[337,338]],["benu.cz",339],["stockholmresilience.org",340],["ludvika.se",340],["kammarkollegiet.se",340],["cazenovecapital.com",341],["statestreet.com",342],["beopen.lv",343],["cesukoncertzale.lv",344],["dodo.fr",345],["pepper.it",346],["pepper.pl",346],["preisjaeger.at",346],["mydealz.de",346],["dealabs.com",346],["hotukdeals.com",346],["chollometro.com",346],["makelaarsland.nl",347],["bezirk-schwaben.de",348],["nutsinbulk.co.uk",349],["bricklink.com",350],["bestinver.es",351],["icvs2023.conf.tuwien.ac.at",352],["racshop.co.uk",[353,354]],["baabuk.com",355],["sapien.io",355],["tradedoubler.com",355],["app.lepermislibre.fr",356],["multioferta.es",357],["testwise.com",[358,359]],["tonyschocolonely.com",360],["fitplus.is",360],["fransdegrebber.nl",360],["lilliputpress.ie",360],["lexibo.com",360],["marin-milou.com",360],["dare2tri.com",360],["t3micro.*",360],["la-vie-naturelle.com",[361,362]],["inovelli.com",363],["uonetplus.vulcan.net.pl",[364,365]],["consent.helagotland.se",366],["oper.koeln",[367,368]],["deezer.com",369],["hoteldesartssaigon.com",370],["autoritedelaconcurrence.fr",371],["groupeonepoint.com",371],["geneanet.org",371],["carrieres.groupegalerieslafayette.com",371],["immo-banques.fr",371],["lingvanex.com",371],["turncamp.com",372],["ejobs.ro",[373,374]],["kupbilecik.*",[375,376]],["coolbe.com",377],["serienjunkies.de",378],["computerhoy.20minutos.es",379],["clickskeks.at",380],["clickskeks.de",380],["abt-sportsline.de",380],["exemplary.ai",381],["forbo.com",381],["stores.sk",381],["nerdstar.de",381],["prace.cz",381],["profesia.sk",381],["profesia.cz",381],["pracezarohem.cz",381],["atmoskop.cz",381],["seduo.sk",381],["seduo.cz",381],["teamio.com",381],["arnold-robot.com",381],["cvonline.lt",381],["cv.lv",381],["cv.ee",381],["dirbam.lt",381],["visidarbi.lv",381],["otsintood.ee",381],["webtic.it",381],["gerth.de",382],["pamiatki.pl",383],["initse.com",384],["salvagny.org",385],["augsburger-allgemeine.de",386],["stabila.com",387],["stwater.co.uk",388],["suncalc.org",[389,390]],["swisstph.ch",391],["taxinstitute.ie",392],["get-in-it.de",393],["tempcover.com",[394,395]],["guildford.gov.uk",396],["easyparts.*",[397,398]],["easyparts-recambios.es",[397,398]],["easyparts-rollerteile.de",[397,398]],["drimsim.com",399],["canyon.com",[400,401]],["vevovo.be",[402,403]],["vendezvotrevoiture.be",[402,403]],["wirkaufendeinauto.at",[402,403]],["vikoberallebiler.dk",[402,403]],["wijkopenautos.nl",[402,403]],["vikoperdinbil.se",[402,403]],["noicompriamoauto.it",[402,403]],["vendezvotrevoiture.fr",[402,403]],["compramostucoche.es",[402,403]],["wijkopenautos.be",[402,403]],["auto-doc.*",404],["autodoc.*",404],["autodoc24.*",404],["topautoosat.fi",404],["autoteiledirekt.de",404],["autoczescionline24.pl",404],["tuttoautoricambi.it",404],["onlinecarparts.co.uk",404],["autoalkatreszek24.hu",404],["autodielyonline24.sk",404],["reservdelar24.se",404],["pecasauto24.pt",404],["reservedeler24.co.no",404],["piecesauto24.lu",404],["rezervesdalas24.lv",404],["besteonderdelen.nl",404],["recambioscoche.es",404],["antallaktikaexartimata.gr",404],["piecesauto.fr",404],["teile-direkt.ch",404],["lpi.org",405],["divadelniflora.cz",406],["mahle-aftermarket.com",407],["refurbed.*",408],["eingutertag.org",409],["flyingtiger.com",[409,555]],["borgomontecedrone.it",409],["maharishistore.com",409],["recaro-shop.com",409],["gartenhotel-crystal.at",409],["fayn.com",410],["serica-watches.com",410],["sklavenitis.gr",411],["eam-netz.de",412],["umicore.*",413],["veiligverkeer.be",413],["vsv.be",413],["dehogerielen.be",413],["gera.de",414],["mfr-chessy.fr",415],["mfr-lamure.fr",415],["mfr-saint-romain.fr",415],["mfr-lapalma.fr",415],["mfrvilliemorgon.asso.fr",415],["mfr-charentay.fr",415],["mfr.fr",415],["nationaltrust.org.uk",416],["hej-natural.*",417],["ib-hansmeier.de",418],["rsag.de",419],["esaa-eu.org",419],["aknw.de",419],["answear.*",420],["theprotocol.it",[421,422]],["lightandland.co.uk",423],["etransport.pl",424],["wohnen-im-alter.de",425],["johnmuirhealth.com",[426,427]],["markushaenni.com",428],["airbaltic.com",429],["gamersgate.com",429],["zorgzaam010.nl",430],["etos.nl",431],["paruvendu.fr",432],["cmpv2.bistro.sk",434],["privacy.bazar.sk",434],["hennamorena.com",435],["newsello.pl",436],["porp.pl",437],["golfbreaks.com",438],["lieferando.de",439],["just-eat.*",439],["justeat.*",439],["pyszne.pl",439],["lieferando.at",439],["takeaway.com",439],["thuisbezorgd.nl",439],["holidayhypermarket.co.uk",440],["unisg.ch",441],["wassererleben.ch",441],["psgaz.pl",442],["play-asia.com",443],["atu.de",444],["atu-flottenloesungen.de",444],["but.fr",444],["edeka.de",444],["fortuneo.fr",444],["maif.fr",444],["particuliers.sg.fr",444],["sparkasse.at",444],["group.vig",444],["tf1info.fr",444],["dpdgroup.com",445],["dpd.fr",445],["dpd.com",445],["cosmosdirekt.de",445],["bstrongoutlet.pt",446],["nobbot.com",447],["isarradweg.de",[448,449]],["flaxmanestates.com",449],["inland-casas.com",449],["finlayson.fi",[450,451]],["cowaymega.ca",[450,451]],["arktis.de",452],["desktronic.de",452],["belleek.com",452],["brauzz.com",452],["cowaymega.com",452],["dockin.de",452],["dryrobe.com",[452,453]],["formswim.com",452],["hairtalk.se",452],["hallmark.co.uk",[452,453]],["loopearplugs.com",[452,453]],["oleus.com",452],["peopleofshibuya.com",452],["pullup-dip.com",452],["sanctum.shop",452],["tartanblanketco.com",452],["desktronic.*",453],["hq-germany.com",453],["tepedirect.com",453],["maxi-pet.ro",453],["paper-republic.com",453],["pullup-dip.*",453],["vitabiotics.com",453],["smythstoys.com",454],["beam.co.uk",[455,456]],["autobahn.de",457],["krakow.pl",458],["shop.app",459],["shopify.com",459],["wufoo.com",460],["consent.dailymotion.com",461],["laposte.fr",461],["help.instagram.com",462],["consent-manager.thenextweb.com",464],["consent-cdn.zeit.de",465],["coway-usa.com",466],["steiners.shop",467],["ecmrecords.com",468],["malaikaraiss.com",468],["koch-mit.de",468],["zeitreisen.zeit.de",468],["wefashion.com",469],["merkur.dk",470],["ionos.*",472],["omegawatches.com",473],["carefully.be",474],["aerotime.aero",474],["rocket-league.com",475],["dws.com",476],["bosch-homecomfort.com",477],["elmleblanc-optibox.fr",477],["monservicechauffage.fr",477],["boschrexroth.com",477],["home-connect.com",478],["lowrider.at",[479,480]],["mesto.de",481],["intersport.gr",482],["intersport.bg",482],["intersport.com.cy",482],["intersport.ro",482],["ticsante.com",483],["techopital.com",483],["millenniumprize.org",484],["hepster.com",485],["ellisphere.fr",486],["peterstaler.de",487],["blackforest-still.de",487],["tiendaplayaundi.com",488],["ajtix.co.uk",489],["raja.fr",490],["rajarani.de",490],["rajapack.*",[490,491]],["avery-zweckform.com",492],["1xinternet.de",492],["futterhaus.de",492],["dasfutterhaus.at",492],["frischeparadies.de",492],["fmk-steuer.de",492],["selgros.de",492],["transgourmet.de",492],["mediapart.fr",493],["athlon.com",494],["alumniportal-deutschland.org",495],["snoopmedia.com",495],["myguide.de",495],["study-in-germany.de",495],["daad.de",495],["cornelsen.de",[496,497]],["vinmonopolet.no",499],["tvp.info",500],["tvp.pl",500],["tvpworld.com",500],["brtvp.pl",500],["tvpparlament.pl",500],["belsat.eu",500],["warnung.bund.de",501],["mediathek.lfv-bayern.de",502],["allegro.*",503],["allegrolokalnie.pl",503],["ceneo.pl",503],["czc.cz",503],["eon.pl",[504,505]],["ylasatakunta.fi",[506,507]],["mega-image.ro",508],["louisvuitton.com",509],["bodensee-airport.eu",510],["department56.com",511],["allendesignsstudio.com",511],["designsbylolita.co",511],["shop.enesco.com",511],["savoriurbane.com",512],["miumiu.com",513],["church-footwear.com",513],["clickdoc.fr",514],["car-interface.com",515],["monolithdesign.it",515],["thematchahouse.com",515],["smileypack.de",[516,517]],["finom.co",518],["orange.es",[519,520]],["fdm-travel.dk",521],["hummel.dk",521],["jysk.nl",521],["power.no",521],["skousen.dk",521],["velliv.dk",521],["whiteaway.com",521],["whiteaway.no",521],["whiteaway.se",521],["skousen.no",521],["energinet.dk",521],["elkjop.no",521],["medimax.de",522],["costautoricambi.com",523],["lotto.it",523],["readspeaker.com",523],["team.blue",523],["ibistallinncenter.ee",524],["aaron.ai",525],["futureverse.com",526],["tandem.co.uk",526],["insights.com",527],["thebathcollection.com",528],["coastfashion.com",[529,530]],["oasisfashion.com",[529,530]],["warehousefashion.com",[529,530]],["misspap.com",[529,530]],["karenmillen.com",[529,530]],["boohooman.com",[529,530]],["hdt.de",531],["wolt.com",532],["myprivacy.dpgmedia.nl",533],["myprivacy.dpgmedia.be",533],["www.dpgmediagroup.com",533],["xohotels.com",534],["sim24.de",535],["tnt.com",536],["uza.be",537],["uzafoundation.be",537],["uzajobs.be",537],["bergzeit.*",[538,539]],["cinemas-lumiere.com",540],["cdiscount.com",541],["brabus.com",542],["roborock.com",543],["strumentimusicali.net",544],["maisonmargiela.com",545],["webfleet.com",546],["dragonflyshipping.ca",547],["broekhuis.nl",548],["groningenairport.nl",548],["nemck.cz",549],["bokio.se",550],["sap-press.com",551],["roughguides.com",[552,553]],["korvonal.com",554],["rexbo.*",556],["itau.com.br",557],["bbg.gv.at",558],["portal.taxi.eu",559],["topannonces.fr",560],["homap.fr",561],["artifica.fr",562],["plan-interactif.com",562],["ville-cesson.fr",562],["moismoliere.com",563],["unihomes.co.uk",564],["bkk.hu",565],["coiffhair.com",566],["ptc.eu",567],["ziegert-group.com",[568,676]],["lassuranceretraite.fr",569],["interieur.gouv.fr",569],["toureiffel.paris",569],["economie.gouv.fr",569],["education.gouv.fr",569],["livoo.fr",569],["su.se",569],["zappo.fr",569],["smdv.de",570],["digitalo.de",570],["petiteamelie.*",571],["mojanorwegia.pl",572],["koempf24.ch",[573,574]],["teichitekten24.de",[573,574]],["koempf24.de",[573,574]],["wolff-finnhaus-shop.de",[573,574]],["asnbank.nl",575],["blgwonen.nl",575],["regiobank.nl",575],["snsbank.nl",575],["vulcan.net.pl",[576,577]],["ogresnovads.lv",578],["partenamut.be",579],["pirelli.com",580],["unicredit.it",581],["effector.pl",582],["zikodermo.pl",[583,584]],["devolksbank.nl",585],["caixabank.es",586],["cyberport.de",588],["cyberport.at",588],["slevomat.cz",589],["kfzparts24.de",590],["runnersneed.com",591],["aachener-zeitung.de",592],["sportpursuit.com",593],["druni.es",[594,607]],["druni.pt",[594,607]],["delta.com",595],["onliner.by",[596,597]],["vejdirektoratet.dk",598],["usaa.com",599],["consorsbank.de",600],["metroag.de",601],["kupbilecik.pl",602],["oxfordeconomics.com",603],["oxfordeconomics.com.au",[604,605]],["routershop.nl",606],["woo.pt",606],["e-jumbo.gr",608],["alza.*",609],["rmf.fm",611],["rmf24.pl",611],["tracfone.com",612],["lequipe.fr",613],["global.abb",614],["gala.fr",615],["purepeople.com",616],["3sat.de",617],["zdf.de",617],["filmfund.lu",618],["welcometothejungle.com",618],["triblive.com",619],["rai.it",620],["fbto.nl",621],["europa.eu",622],["caisse-epargne.fr",623],["banquepopulaire.fr",623],["bigmammagroup.com",624],["studentagency.sk",624],["studentagency.eu",624],["winparts.be",625],["winparts.nl",625],["winparts.eu",626],["winparts.ie",626],["winparts.se",626],["sportano.*",[627,628]],["crocs.*",629],["chronext.ch",630],["chronext.de",630],["chronext.at",630],["chronext.com",631],["chronext.co.uk",631],["chronext.fr",632],["chronext.nl",633],["chronext.it",634],["galerieslafayette.com",635],["bazarchic.com",636],["stilord.*",637],["tiko.pt",638],["nsinternational.com",639],["meinbildkalender.de",640],["gls-group.com",641],["gls-group.eu",641],["chilis.com",642],["account.bhvr.com",644],["everand.com",644],["lucidchart.com",644],["intercars.ro",[644,645]],["scribd.com",644],["guidepoint.com",644],["erlebnissennerei-zillertal.at",646],["hintertuxergletscher.at",646],["tiwag.at",646],["anwbvignetten.nl",647],["playseatstore.com",647],["swiss-sport.tv",649],["targobank-magazin.de",650],["zeit-verlagsgruppe.de",650],["online-physiotherapie.de",650],["kieferorthopaede-freisingsmile.de",651],["nltraining.nl",652],["kmudigital.at",653],["mintysquare.com",654],["consent.thetimes.com",655],["cadenaser.com",656],["berlinale.de",657],["lebonlogiciel.com",658],["pharmastar.it",659],["washingtonpost.com",660],["brillenplatz.de",661],["angelplatz.de",661],["dt.mef.gov.it",662],["raffeldeals.com",663],["stepstone.de",664],["kobo.com",665],["zoxs.de",667],["offistore.fi",668],["collinsaerospace.com",669],["radioapp.lv",672],["hagengrote.de",673],["hemden-meister.de",673],["vorteilshop.com",674],["capristores.gr",675],["getaround.com",677],["technomarket.bg",678],["epiphone.com",680],["gibson.com",680],["maestroelectronics.com",680],["cropp.com",[681,682]],["housebrand.com",[681,682]],["mohito.com",[681,682]],["autoczescizielonki.pl",683],["b-s.de",684],["novakid.pl",685],["piecesauto24.com",686],["earpros.com",687],["portalridice.cz",688],["kitsapcu.org",689],["nutsinbulk.*",690],["berlin-buehnen.de",691],["metropoliten.rs",692],["educa2.madrid.org",693],["immohal.de",694],["sourcepoint.theguardian.com",695],["rtlplay.be",696],["natgeotv.com",696],["llama.com",697],["meta.com",697],["setasdesevilla.com",698],["cruyff-foundation.org",699],["allianz.*",700],["energiedirect-bayern.de",701],["postnl.be",702],["postnl.nl",702],["sacyr.com",703],["volkswagen-newsroom.com",704],["openbank.*",705],["tagus-eoficina.grupogimeno.com",706],["tidal.com",707],["knax.de",708],["ordblindenetvaerket.dk",709],["boligbeton.dk",709],["dukh.dk",709],["pevgrow.com",710],["ya.ru",711],["ipolska24.pl",712],["17bankow.com",712],["5mindlazdrowia.pl",712],["kazimierzdolny.pl",712],["vpolshchi.pl",712],["dobreprogramy.pl",712],["essanews.com",712],["dailywrap.ca",712],["dailywrap.uk",712],["money.pl",712],["autokult.pl",712],["komorkomania.pl",712],["polygamia.pl",712],["autocentrum.pl",712],["allani.pl",712],["homebook.pl",712],["domodi.pl",712],["jastrzabpost.pl",712],["open.fm",712],["gadzetomania.pl",712],["fotoblogia.pl",712],["abczdrowie.pl",712],["parenting.pl",712],["kafeteria.pl",712],["vibez.pl",712],["wakacje.pl",712],["extradom.pl",712],["totalmoney.pl",712],["superauto.pl",712],["nerwica.com",712],["forum.echirurgia.pl",712],["dailywrap.net",712],["pysznosci.pl",712],["genialne.pl",712],["finansowysupermarket.pl",712],["deliciousmagazine.pl",712],["audioteka.com",712],["easygo.pl",712],["so-magazyn.pl",712],["o2.pl",712],["pudelek.pl",712],["benchmark.pl",712],["wp.pl",712],["altibox.dk",713],["altibox.no",713],["talksport.com",714],["zuiderzeemuseum.nl",715],["gota.io",716],["nwzonline.de",717],["wero-wallet.eu",718],["scaleway.com",719]]);
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
