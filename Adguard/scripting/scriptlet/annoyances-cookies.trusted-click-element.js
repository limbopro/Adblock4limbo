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
const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[role=\"dialog\"]:has([href=\"https://www.facebook.com/policies/cookies/\"]) [aria-hidden=\"true\"] + [aria-label][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],["button#cmp-consent-button","","2500"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["button[aria-label=\"close button\"]","","1000"],["button[class=\"w_eEg0 w_OoNT w_w8Y1\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button[title=\"I do not agree\"]"],["#qc-cmp2-container button#disagree-btn"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],[".cmp-scroll-padding .cmp-info[style] #cmp-paywall #cmp-consent #cmp-btn-accept","","2000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],["button[title=\"Godta alle\"]","","1000"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1800"],["button[title^=\"Alle akzeptieren\" i]","","1000"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[action-name=\"agreeAll\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Aceitar todos\"]","","1000"],["button.cta-button[title=\"Tümünü reddet\"]"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#didomi-notice-agree-button"],["button#cookie-onetrust-show-info","","900"],[".save-preference-btn-handler","","1100"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept","","1500"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll","","1000"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]","","1000"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[aria-label=\"Reject All\"]","","1000"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],[".cmp-accept","","3500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["a.cookie-permission--accept-button","","1600"],["button[onclick=\"cookiesAlert.rejectAll()\"]","","1000"],["button[title=\"Alle ablehnen\"]","","1800"],["button.pixelmate-general-deny","","1000"],["a.mmcm-btn-decline","","1000"],["button.hi-cookie-btn-accept-necessary","","1000"],["button[data-testid=\"buttonCookiesAccept\"]","","1500"],["a[fs-consent-element=\"deny\"]","","1000"],["a#cookies-consent-essential","","1000"],["a.hi-cookie-continue-without-accepting","","1500"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1600"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["a[href=\"javascript:Didomi.setUserDisagreeToAll()\"]","","1000"],["button[onclick=\"Didomi.setUserDisagreeToAll();\"]","","1000"],["a#cookie-accept","","1000"],["button.decline-button","","1000"],["button.inv-cmp-button.inv-font-btn","","1800"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"i]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","2600"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["a#CybotCookiebotDialogBodyButtonAcceptAll","","1000"],["button[title=\"Kun nødvendige\"]","","2500"],["button[title=\"Accept\"]","","1000"],["button[onclick=\"CookieInformation.declineAllCategories()\"]","","1000"],["button.js-decline-all-cookies","","1500"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button.reject-btn","","1000"],["button.accept-btn","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1500"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1600"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button.gdpr-btn.gdpr-btn-white","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#reject-all-gdpr","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["button.cmplz-deny","","1000"],["button[aria-label=\"Reject all\"]","","1000"],["button[title=\"Aceptar y continuar\"]","","1000"],["button[title=\"Accettare e continuare\"]","","1000"],["button[title=\"Concordar\"]","","1000"],["button[title=\"Accepter et continuer\"]","","1500"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["button.css-15p2x3e.e112qvla0","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1600"],["button[data-testing=\"cookie-bar-deny-all\"]","","1000"],["button.shared-elements-cookies-popup__modify-button","","1100"],["button.shared-cookies-modal__current-button","","1300"],["button#cookie-custom","","1200"],["button#cookie-save","","1800"],["div.rejectLink___zHIdj","","1000"],[".cmp-root-container >>> .cmp-button-accept-all","","1000"],["a[data-mrf-role=\"userPayToReject\"]","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button#c-rall-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["button#pgwl_pur-option-accept-button","","1800"],["button.cc-btn.save","","1000"],["button.btn-reject-additional-cookies","","1000"],["button#c-s-bn","","700"],["button#s-sv-bn","","850"],["button#btn-accept-banner","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["button[data-closecause=\"close-by-submit\"]","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button.primary","","1000"],["a[onclick=\"denyCookiePolicyAndSetHash();\"]","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button.cc-deny","","1000"],["button.consent-reject","","1500"],["button[data-omcookie-panel-save=\"min\"]","","3500"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["button#cookie-dismiss","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#btn-accept-required-banner","","1000"],["button.js-cookies-panel-reject-all","","1000"],["button.acbut.continue","","1000"],["button#popin_tc_privacy_button_2","","1800"],["button#popin_tc_privacy_button_3","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["button.CookieBar__Button-decline","","600"],["button.btn.btn-success","","750"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["button[aria-label=\"allow cookies\"]","","1000"],["button.ios-modal-cookie","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["button[data-cookieman-save]","","1000"],["button[title=\"Agree and continue\"]","","1000"],["span.gmt_refuse","","1000"],["span.btn-btn-save","","1500"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","2800"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["span.gtm-cookies-close","","1000"],["button[data-test=\"cookie-finom-card-continue-without-accepting\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button#wp-declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a[fs-cc=\"deny\"]","","1000"],["button#ccc-notify-accept","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["button[data-test-id=\"decline-button\"]","","2400"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button[title=\"Accept all\"]","","1000"],["button#consent_wall_optout","","1000"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[aria-label=\"deny cookies\"]","","1000"],["button[aria-label=\"deny cookies\"]","","1000"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["itau-cookie-consent-banner >>> button#itau-cookie-consent-banner-reject-cookies-btn","","1000"],[".layout-modal[style] .cookiemanagement .middle-center .intro .text-center .cookie-refuse","","1000"],["button.cc-button.cc-secondary","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1800"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#show-settings-button","","650"],["button#save-settings-button","","800"],["div.cookie-reject","","1000"],["li#sdgdpr_modal_buttons-decline","","1000"],["div#cookieCloseIcon","","1000"],["button#cookieAccepted","","1000"],["button#cookieAccept","","1000"],["div.show-more-options","","500"],["div.save-options","","650"],["button#elc-decline-all-link","","1000"],["a[data-ref-origin=\"POLITICA-COOKIES-DENEGAR-NAVEGANDO-FALDON\"]","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["button#consent-reject-all","","1000"],["a[role=\"button\"].button--secondary","","1000"],["button#denyBtn","","1000"],["button#accept-all-cookies","","1000"],["button[data-testid=\"zweiwegen-accept-button\"]","","1000"],["button[data-selector-cookie-button=\"reject-all\"]","","500"],["button[aria-label=\"Reject\"]","","1000"],["button.ens-reject","","1000"],["a#reject-button","","700"],["a#reject-button","","900"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["button.essentialCat-button","","3600"],["button#denyallcookie-btn","","1000"],["button#cookie-accept","","1800"],["button[title=\"Close cookie notice without specifying preferences\"]","","1000"],["button[title=\"Adjust cookie preferences\"]","","500"],["button[title=\"Deny all cookies\"]","","650"],["button#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll","","1000"],["button[aria-label=\"Rechazar\"]","","1000"],["a[data-vtest=\"reject-all\"]","","2000"],["a.js-cookies-info-reject","","1000"],["button[title=\"Got it\"]","","1000"],["button#gr-btn-agree","","1000"],["button#_tealiumModalClose","","1000"],["button.Cmp__action--yes","","1800"],["button.fig-consent-banner__accept","","1000"],["button[onclick*=\"setTimeout(Didomi.setUserAgreeToAll","0);\"]","","1800"],["button#zdf-cmp-deny-btn","","1000"],["button#axeptio_btn_dismiss","","1000"],["a#setCookieLinkIn","","400"],["span.as-js-close-banner","","1000"],["button[value=\"popup_decline\"]","","1000"],["a.ea_ignore","","1000"],["button#no_consent_btn","","1000"],["button.cc-nb-reject","","1000"],["a.weigeren.active","","1000"],["a.aanvaarden.green.active","","1000"],["button.button--preferences","","900"],["button.button--confirm","","1100"],["button.js-btn-reject-all","","1300"],["button[aria-label=\"Nur notwendige\"]","","1000"],["button[aria-label=\"Only necessary\"]","","1000"],["button[aria-label=\"Seulement nécessaire\"]","","1000"],["button[aria-label=\"Alleen noodzakelijk\"]","","1000"],["button[aria-label=\"Solo necessario\"]","","1000"],["a#optout_link","","1000"],["button[kind=\"purple\"]","","1000"],["button#cookie-consent-decline","","1000"],["button.tiko-btn-primary.tiko-btn-is-small","","1000"],["span.cookie-overlay__modal__footer__decline","","1000"],["button[title=\"Continue without accepting\"]","","1000"],["button[onclick=\"setCOOKIENOTIFYOK()\"]","","1000"],["button#s-rall-bn","","1000"],["button#privacy_pref_optout","","1000"],["button[data-action=\"reject\"]","","1000"],["button.osano-cm-denyAll","","1000"],["button[data-dismiss=\"modal\"]","","1500"],["button.bh-cookies-popup-save-selection","","1000"],["a.avg-btn-allow","","1000"],["button[title=\"ACEPTAR Y GUARDAR\"]","","1000"],["#cookiescript_reject","","500"],["._brlbs-refuse-btn > ._brlbs-cursor._brlbs-btn","","1000"],["._brlbs-accept > ._brlbs-btn-accept-all","","1000"],[".cookie-footer > button[type=\"submit\"]","","1000"],["button#cookie-banner-agree-all","","1000"],["button[class=\"amgdprcookie-button -allow\"]","","1000"],["button[title=\"Essential cookies only\"]","","1000"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["button.it-cc__button-decline","","1000"],["button#btn-accept-cookie","","1000"],[".in.modal .modal-dialog .modal-content .modal-footer #cc-mainpanel-btnsmain button[onclick=\"document._cookie_consentrjctll.submit()\"]","","1000"],["button#CTA_BUTTON_TEXT_CTA_WRAPPER","","2000"],["button#js_keksNurNotwendigeKnopf","","1000"],[".show .modal-dialog .modal-content .modal-footer #RejectAllCookiesModal","","1000"],["button#accept-selected","","1000"],["div#ccmgt_explicit_accept","","1000"],["button[data-testid=\"privacy-banner-decline-all-btn-desktop\"]","","1000"],["button[title=\"Reject All\"]","","1800"],[".show.gdpr-modal .gdpr-modal-dialog .js-gdpr-modal-1 .modal-body .row .justify-content-center .js-gdpr-accept-all","","1000"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"],["a.necessary_cookies","","1200"],["a#r-cookies-wall--btn--accept","","1000"],["button[data-trk-consent=\"J'accepte les cookies\"]","","1000"],["button.cookies-btn","","1000"],[".show.modal .modal-dialog .modal-content .modal-body button[onclick=\"wsConsentReject();\"]","","1000"],[".show.modal .modal-dialog .modal-content .modal-body #cookieStart input[onclick=\"wsConsentDefault();\"]","","1000"],["a.gdpr-cookie-notice-nav-item-decline","","1000"],["span[data-cookieaccept=\"current\"]","","1500"],["button.js_cookie-consent-modal__disagreement","","1000"],["button.tm-button.secondary-invert","","1000"],["div.t_cm_ec_reject_button","","1000"],[".show .modal-dialog .modal-content #essentialCookies","","1000"],["button#UCButtonSettings","","800"],["button#CybotCookiebotDialogBodyLevelButtonAccept","","900"],[".show .modal-dialog .modal-content .modal-footer .s-cookie-transparency__btn-accept-all-and-close","","1000"],["a#accept-cookies","","1000"],["button.gdpr-accept-all-btn","","1000"],["span[data-ga-action=\"disallow_all_cookies\"]","","1000"],["button.cookie-notification-secondary-btn","","1000"],["a[data-gtm-action=\"accept-all\"]","","1000"],["input[value=\"I agree\"]","","1000"],["button[label*=\"Essential\"]","","1800"],["div[class=\"hylo-button\"][role=\"button\"]","","1000"],[".cookie-warning-active .cookie-warning-wrapper .gdpr-cookie-btns a.gdpr_submit_all_button","","1000"],["a#emCookieBtnAccept","","1000"],[".yn-cookies--show .yn-cookies__inner .yn-cookies__page--visible .yn-cookies__footer #yn-cookies__deny-all","","1000"],["button[title=\"Do not sell or share my personal information\"]","","1000"],["#onetrust-consent-sdk button.ot-pc-refuse-all-handler"],["body > div[class=\"x1n2onr6 x1vjfegm\"] div[aria-hidden=\"false\"] > .x1o1ewxj div[class]:last-child > div[aria-hidden=\"true\"] + div div[role=\"button\"] > div[role=\"none\"][class^=\"x1ja2u2z\"][class*=\"x1oktzhs\"]"],["button[onclick=\"cancelCookies()\"]","","1000"],["button.js-save-all-cookies","","2600"],["a#az-cmp-btn-refuse","","1000"],["button.sp-dsgvo-privacy-btn-accept-nothing","","1000"],["pnl-cookie-wall-widget >>> button.pci-button--secondary","","2500"],["button#refuse-cookies-faldon","","1000"],["button.btn-secondary","","1800"],["button[onclick=\"onClickRefuseCookies(event)\"]","","1000"],["input#popup_ok","","1000"],["button[title=\"Ausgewählten Cookies zustimmen\"]","","1000"],["input[onclick=\"choseSelected()\"]","","1000"],["a#alcaCookieKo","","1000"],["button.Distribution-Close"],["div[class]:has(a[href*=\"holding.wp.pl\"]) div[class]:only-child > button[class*=\" \"] + button:not([class*=\" \"])","","2300"],["[id=\"CybotCookiebotDialogBodyButtonDecline\"]","","2000"],["button.allow-cookies-once"],["#CybotCookiebotDialogBodyLevelButtonStatisticsInline, #CybotCookiebotDialogBodyLevelButtonMarketingInline, #CybotCookiebotDialogBodyLevelButtonLevelOptinAllowallSelection"],["button#acceptCookies","","1000"],["#cmpwrapper >>> a.cust-btn[onclick*=\"__cmp('setConsent'","1)\"]","","1500"]];
const hostnamesMap = new Map([["consent.google.*",0],["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["theguardian.com",6],["bloomberg.com",[7,8]],["forbes.com",[7,73]],["nike.com",7],["consent.fastcar.co.uk",7],["tapmaster.ca",7],["cmpv2.standard.co.uk",[9,10]],["cmpv2.independent.co.uk",[11,12,13,171]],["wetransfer.com",[14,15]],["spiegel.de",[16,17]],["nytimes.com",[18,167]],["consent.yahoo.com",19],["tumblr.com",20],["fplstatistics.co.uk",21],["fplstatistics.com",21],["e-shop.leonidas.com",22],["cdn.privacy-mgmt.com",[23,24,43,45,46,47,48,92,94,101,108,115,116,117,128,129,130,133,135,136,143,160,185,205,218,219,222,223,224,241,290,423,572,595,633,651]],["walmart.ca",25],["sams.com.mx",26],["my.tonies.com",27],["cambio-carsharing.de",27],["festool.*",27],["festoolcanada.com",27],["fuso-trucks.*",27],["tracker.fressnapf.de",27],["myfabrics.co.uk",27],["zinus.*",27],["consent.ladbible.com",[28,29]],["consent.unilad.com",[28,29]],["consent.uniladtech.com",[28,29]],["consent.gamingbible.com",[28,29]],["consent.sportbible.com",[28,29]],["consent.tyla.com",[28,29]],["consent.ladbiblegroup.com",[28,29]],["m2o.it",30],["deejay.it",30],["capital.it",30],["ilmattino.it",[30,31]],["leggo.it",[30,31]],["libero.it",30],["tiscali.it",30],["consent-manager.ft.com",[32,33,34]],["hertz.*",35],["mediaworld.it",36],["mediamarkt.*",36],["mediamarktsaturn.com",37],["uber.com",[38,168]],["ubereats.com",[38,168]],["lego.com",39],["ai.meta.com",40],["lilly.com",41],["cosmo-hairshop.de",42],["storyhouseegmont.no",42],["ilgiornale.it",44],["telekom.com",49],["telekom.net",49],["telekom.de",49],["abola.pt",50],["flytap.com",50],["ansons.de",50],["blick.ch",50],["buienradar.be",50],["crunchyroll.com",50],["digi24.ro",50],["digisport.ro",50],["digitalfoundry.net",50],["egx.net",50],["emirates.com",50],["eurogamer.it",50],["foto-erhardt.de",50],["gmx.*",50],["kizi.com",50],["mail.com",50],["mcmcomiccon.com",50],["nachrichten.at",50],["nintendolife.com",50],["oe24.at",50],["paxsite.com",50],["peacocktv.com",50],["player.pl",50],["plus500.*",50],["pricerunner.com",50],["pricerunner.se",50],["pricerunner.dk",50],["proximus.be",[50,628]],["proximus.com",50],["purexbox.com",50],["pushsquare.com",50],["rugbypass.com",50],["southparkstudios.com",50],["southwest.com",50],["starwarscelebration.com",50],["sweatybetty.com",50],["theaa.ie",50],["thehaul.com",50],["timeextension.com",50],["travelandleisure.com",50],["tunein.com",50],["uefa.com",50],["videoland.com",50],["wizzair.com",50],["wetter.at",50],["dicebreaker.com",[51,52]],["eurogamer.cz",[51,52]],["eurogamer.es",[51,52]],["eurogamer.net",[51,52]],["eurogamer.nl",[51,52]],["eurogamer.pl",[51,52]],["eurogamer.pt",[51,52]],["gamesindustry.biz",[51,52]],["jelly.deals",[51,52]],["reedpop.com",[51,52]],["rockpapershotgun.com",[51,52]],["thepopverse.com",[51,52]],["vg247.com",[51,52]],["videogameschronicle.com",[51,52]],["eurogamer.de",53],["roadtovr.com",54],["jotex.*",54],["mundodeportivo.com",[55,123]],["m.youtube.com",56],["www.youtube.com",56],["ohra.nl",57],["corriere.it",58],["gazzetta.it",58],["oggi.it",58],["cmp.sky.it",59],["tennisassa.fi",60],["formula1.com",61],["f1racing.pl",62],["music.amazon.*",[63,64]],["consent-pref.trustarc.com",65],["highlights.legaseriea.it",66],["calciomercato.com",66],["sosfanta.com",67],["chrono24.*",[68,69]],["wetter.com",70],["youmath.it",71],["pip.gov.pl",72],["dailybuzz.nl",74],["bnn.de",74],["dosenbach.ch",74],["dw.com",74],["kinepolis.*",74],["mediaite.com",74],["nzz.ch",74],["winfuture.de",74],["lippu.fi",74],["racingnews365.com",74],["reifendirekt.ch",74],["vaillant.*",74],["bauhaus.no",75],["bauhaus.se",75],["beko-group.de",75],["billiger.de",75],["burda.com",75],["vanharen.nl",75],["deichmann.com",[75,97,454]],["meraluna.de",75],["slashdot.org",75],["hermann-saunierduval.it",75],["protherm.cz",75],["saunierduval.es",75],["protherm.sk",75],["protherm.ua",75],["saunierduval.hu",75],["saunierduval.ro",75],["saunierduval.at",75],["awb.nl",75],["spar.hu",76],["group.vattenfall.com",76],["mediaset.it",77],["fortune.com",78],["ilrestodelcarlino.it",79],["quotidiano.net",79],["lanazione.it",79],["ilgiorno.it",79],["iltelegrafolivorno.it",79],["auto.it",80],["beauxarts.com",80],["beinsports.com",80],["bfmtv.com",[80,124]],["boursobank.com",80],["boursorama.com",[80,124]],["boursier.com",[80,212]],["brut.media",80],["canalplus.com",80],["decathlon.fr",[80,209]],["diverto.tv",80],["eden-park.com",80],["foodvisor.io",80],["frandroid.com",80],["jobijoba.*",80],["hotelsbarriere.com",80],["intersport.*",[80,182]],["idealista.it",80],["o2.fr",80],["lejdd.fr",[80,123]],["lechorepublicain.fr",80],["la-croix.com",80],["linfo.re",80],["lamontagne.fr",80],["laredoute.fr",80],["largus.fr",80],["leprogres.fr",80],["lesnumeriques.com",80],["libramemoria.com",80],["lopinion.fr",80],["marieclaire.fr",80],["maville.com",80],["michelin.*",80],["midilibre.fr",[80,655]],["meteofrance.com",80],["mondialtissus.fr",80],["orange.fr",80],["orpi.com",80],["oscaro.com",80],["ouest-france.fr",[80,93,124,656]],["parismatch.com",80],["pagesjaunes.fr",80],["programme-television.org",[80,124]],["publicsenat.fr",[80,124]],["rmcbfmplay.com",[80,124]],["science-et-vie.com",[80,123]],["seloger.com",80],["societe.com",80],["suzuki.fr",80],["sudouest.fr",80],["web-agri.fr",80],["nutri-plus.de",81],["aa.com",82],["americanairlines.*",82],["consent.capital.fr",83],["consent.voici.fr",83],["programme-tv.net",83],["cmpv2.finn.no",84],["cmp.e24.no",[85,86]],["minmote.no",[85,86]],["cmp.vg.no",[85,86]],["huffingtonpost.fr",87],["rainews.it",88],["remarkable.com",89],["netzwelt.de",90],["money.it",91],["allocine.fr",93],["jeuxvideo.com",93],["ozap.com",93],["le10sport.com",93],["xataka.com",93],["cmp.fitbook.de",94],["cmp.autobild.de",94],["sourcepoint.sport.de",94],["cmp-sp.tagesspiegel.de",94],["cmp.bz-berlin.de",94],["cmp.cicero.de",94],["cmp.techbook.de",94],["cmp.stylebook.de",94],["cmp2.bild.de",94],["cmp2.freiepresse.de",94],["sourcepoint.wetter.de",94],["consent.finanzen.at",94],["consent.finanzen.net",94],["consent.up.welt.de",94],["sourcepoint.n-tv.de",94],["sourcepoint.kochbar.de",94],["sourcepoint.rtl.de",94],["cmp.computerbild.de",94],["cmp.petbook.de",94],["cmp-sp.siegener-zeitung.de",94],["cmp-sp.sportbuzzer.de",94],["klarmobil.de",94],["technikum-wien.at",95],["eneco.nl",96],["blackpoolgazette.co.uk",98],["lep.co.uk",98],["northamptonchron.co.uk",98],["scotsman.com",98],["shieldsgazette.com",98],["thestar.co.uk",98],["portsmouth.co.uk",98],["sunderlandecho.com",98],["northernirelandworld.com",98],["3addedminutes.com",98],["anguscountyworld.co.uk",98],["banburyguardian.co.uk",98],["bedfordtoday.co.uk",98],["biggleswadetoday.co.uk",98],["bucksherald.co.uk",98],["burnleyexpress.net",98],["buxtonadvertiser.co.uk",98],["chad.co.uk",98],["daventryexpress.co.uk",98],["derbyshiretimes.co.uk",98],["derbyworld.co.uk",98],["derryjournal.com",98],["dewsburyreporter.co.uk",98],["doncasterfreepress.co.uk",98],["falkirkherald.co.uk",98],["fifetoday.co.uk",98],["glasgowworld.com",98],["halifaxcourier.co.uk",98],["harboroughmail.co.uk",98],["harrogateadvertiser.co.uk",98],["hartlepoolmail.co.uk",98],["hemeltoday.co.uk",98],["hucknalldispatch.co.uk",98],["lancasterguardian.co.uk",98],["leightonbuzzardonline.co.uk",98],["lincolnshireworld.com",98],["liverpoolworld.uk",98],["londonworld.com",98],["lutontoday.co.uk",98],["manchesterworld.uk",98],["meltontimes.co.uk",98],["miltonkeynes.co.uk",98],["newcastleworld.com",98],["newryreporter.com",98],["newsletter.co.uk",98],["northantstelegraph.co.uk",98],["northumberlandgazette.co.uk",98],["nottinghamworld.com",98],["peterboroughtoday.co.uk",98],["rotherhamadvertiser.co.uk",98],["stornowaygazette.co.uk",98],["surreyworld.co.uk",98],["thescarboroughnews.co.uk",98],["thesouthernreporter.co.uk",98],["totallysnookered.com",98],["wakefieldexpress.co.uk",98],["walesworld.com",98],["warwickshireworld.com",98],["wigantoday.net",98],["worksopguardian.co.uk",98],["yorkshireeveningpost.co.uk",98],["yorkshirepost.co.uk",98],["eurocard.com",99],["saseurobonusmastercard.se",100],["tver.jp",102],["linkedin.com",103],["elmundo.es",[104,124]],["expansion.com",104],["s-pankki.fi",105],["srf.ch",105],["alternate.de",105],["bayer04.de",105],["douglas.de",105],["dr-beckmann.com",105],["falke.com",105],["fitnessfirst.de",105],["flaschenpost.de",105],["gloeckle.de",105],["hornbach.nl",105],["hypofriend.de",105],["lactostop.de",105],["neumann.com",105],["postbank.de",105],["immowelt.de",106],["joyn.*",106],["morenutrition.de",106],["mapillary.com",107],["cmp.seznam.cz",109],["marca.com",110],["raiplay.it",111],["raiplaysound.it",111],["derstandard.at",112],["derstandard.de",112],["faz.net",112],["automoto.it",113],["ansa.it",113],["delladio.it",113],["huffingtonpost.it",113],["internazionale.it",113],["lastampa.it",113],["macitynet.it",113],["moto.it",113],["movieplayer.it",113],["multiplayer.it",113],["repubblica.it",113],["tomshw.it",113],["spaziogames.it",113],["tuttoandroid.net",113],["tuttotech.net",113],["ilgazzettino.it",114],["ilmessaggero.it",114],["ilsecoloxix.it",114],["privacy.motorradonline.de",117],["consent.watson.de",117],["consent.kino.de",117],["consent.desired.de",117],["cmpv2.fn.de",117],["spp.nextpit.de",117],["dailystar.co.uk",[118,119,120,121]],["mirror.co.uk",[118,119,120,121]],["idnes.cz",122],["20minutes.fr",123],["20minutos.es",123],["24sata.hr",123],["abc.es",123],["actu.fr",123],["antena3.com",123],["antena3internacional.com",123],["atresmedia.com",123],["atresmediapublicidad.com",123],["atresmediastudios.com",123],["atresplayer.com",123],["autopista.es",123],["belfasttelegraph.co.uk",123],["bemad.es",123],["bonduelle.it",123],["bonniernews.se",123],["bt.se",123],["cadenadial.com",123],["caracol.com.co",123],["cas.sk",123],["charentelibre.fr",123],["ciclismoafondo.es",123],["cnews.fr",123],["cope.es",123],["correryfitness.com",123],["courrier-picard.fr",123],["cuatro.com",123],["decathlon.nl",123],["decathlon.pl",123],["di.se",123],["diariocordoba.com",123],["diariodenavarra.es",123],["diariosur.es",123],["diariovasco.com",123],["diepresse.com",123],["divinity.es",123],["dn.se",123],["dnevnik.hr",123],["dumpert.nl",123],["ebuyclub.com",123],["edreams.de",123],["edreams.net",123],["elcomercio.es",123],["elconfidencial.com",123],["elcorreo.com",123],["eldesmarque.com",123],["eldiario.es",123],["eldiariomontanes.es",123],["elespanol.com",123],["elle.fr",123],["elpais.com",123],["elpais.es",123],["elperiodico.com",123],["elperiodicodearagon.com",123],["elplural.com",123],["energytv.es",123],["engadget.com",123],["es.ara.cat",123],["euronews.com",123],["europafm.com",123],["expressen.se",123],["factoriadeficcion.com",123],["filmstarts.de",123],["flooxernow.com",123],["folkbladet.nu",123],["footmercato.net",123],["france.tv",123],["france24.com",123],["francetvinfo.fr",123],["fussballtransfers.com",123],["fyndiq.se",123],["ghacks.net",123],["gva.be",123],["hbvl.be",123],["heraldo.es",123],["hoy.es",123],["ideal.es",123],["idealista.pt",123],["k.at",123],["krone.at",123],["kurier.at",123],["lacoste.com",123],["ladepeche.fr",123],["lalibre.be",123],["lanouvellerepublique.fr",123],["larazon.es",123],["lasexta.com",123],["lasprovincias.es",123],["latribune.fr",123],["lavanguardia.com",123],["laverdad.es",123],["lavozdegalicia.es",123],["leboncoin.fr",123],["lecturas.com",123],["ledauphine.com",123],["lejsl.com",123],["leparisien.fr",123],["lesoir.be",123],["letelegramme.fr",123],["levoixdunord.fr",123],["libremercado.com",123],["los40.com",123],["lotoquebec.com",123],["lunion.fr",123],["m6.fr",123],["marianne.cz",123],["marmiton.org",123],["mediaset.es",123],["melodia-fm.com",123],["metronieuws.nl",123],["moviepilot.de",123],["mtmad.es",123],["multilife.com.pl",123],["naszemiasto.pl",123],["nationalgeographic.com.es",123],["nicematin.com",123],["nieuwsblad.be",123],["notretemps.com",123],["numerama.com",123],["okdiario.com",123],["ondacero.es",123],["podiumpodcast.com",123],["portail.lotoquebec.com",123],["profil.at",123],["public.fr",123],["publico.es",123],["radiofrance.fr",123],["rankia.com",123],["rfi.fr",123],["rossmann.pl",123],["rtbf.be",[123,209]],["rtl.lu",123],["sensacine.com",123],["sfgame.net",123],["shure.com",123],["silicon.es",123],["sncf-connect.com",123],["sport.es",123],["sydsvenskan.se",123],["techcrunch.com",123],["telegraaf.nl",123],["telequebec.tv",123],["tf1.fr",123],["tradingsat.com",123],["trailrun.es",123],["video-streaming.orange.fr",123],["xpress.fr",123],["ivoox.com",124],["as.com",124],["slam.nl",124],["bienpublic.com",124],["funradio.fr",124],["gamepro.de",[124,179,180]],["lemon.fr",124],["lexpress.fr",124],["shadow.tech",124],["letemps.ch",124],["mein-mmo.de",124],["heureka.sk",124],["film.at",124],["dhnet.be",124],["lesechos.fr",[124,214]],["marianne.net",[124,209]],["jeanmarcmorandini.com",[124,210]],["dna.fr",124],["sudinfo.be",124],["europe1.fr",[124,210]],["rtl.be",[124,209]],["reviewingthebrew.com",124],["jaysjournal.com",124],["reignoftroy.com",124],["ryobitools.eu",[125,126]],["americanexpress.com",127],["consent.radiotimes.com",130],["sp-consent.szbz.de",131],["cmp.omni.se",132],["cmp.svd.se",132],["cmp.aftonbladet.se",132],["cmp.tv.nu",132],["consent.economist.com",134],["studentagency.cz",134],["cmpv2.foundryco.com",135],["cmpv2.infoworld.com",135],["cmpv2.arnnet.com.au",135],["sp-cdn.pcgames.de",136],["sp-cdn.pcgameshardware.de",136],["consentv2.sport1.de",136],["cmp.mz.de",136],["cmpv2.tori.fi",137],["cdn.privacy-mgmt.co",138],["consent.spielaffe.de",139],["bondekompaniet.no",140],["degiro.*",140],["epochtimes.de",140],["vikingline.com",140],["tfl.gov.uk",140],["drklein.de",140],["hildegardis-krankenhaus.de",140],["kleer.se",140],["lekiaviation.com",140],["lotto.pl",140],["mineralstech.com",140],["volunteer.digitalboost.org.uk",140],["starhotels.com",140],["tefl.com",140],["universumglobal.com",140],["1und1.de",141],["infranken.de",142],["cmp.bunte.de",143],["cmp.chip.de",143],["cmp.focus.de",[143,481]],["estadiodeportivo.com",144],["tameteo.*",144],["tempo.pt",144],["meteored.*",144],["pogoda.com",144],["yourweather.co.uk",144],["tempo.com",144],["theweather.net",144],["tiempo.com",144],["ilmeteo.net",144],["daswetter.com",144],["kicker.de",145],["formulatv.com",146],["web.de",147],["lefigaro.fr",148],["linternaute.com",149],["consent.caminteresse.fr",150],["volksfreund.de",151],["rp-online.de",151],["dailypost.co.uk",152],["the-express.com",152],["bluray-disc.de",153],["elio-systems.com",153],["stagatha-fachklinik.de",153],["tarife.mediamarkt.de",153],["lz.de",153],["gaggenau.com",153],["saturn.de",154],["eltiempo.es",[155,156]],["otempo.pt",157],["atlasformen.*",158],["cmp-sp.goettinger-tageblatt.de",159],["cmp-sp.saechsische.de",159],["cmp-sp.ln-online.de",159],["cz.de",159],["dewezet.de",159],["dnn.de",159],["haz.de",159],["gnz.de",159],["landeszeitung.de",159],["lvz.de",159],["maz-online.de",159],["ndz.de",159],["op-marburg.de",159],["ostsee-zeitung.de",159],["paz-online.de",159],["reisereporter.de",159],["rga.de",159],["rnd.de",159],["siegener-zeitung.de",159],["sn-online.de",159],["solinger-tageblatt.de",159],["sportbuzzer.de",159],["szlz.de",159],["tah.de",159],["torgauerzeitung.de",159],["waz-online.de",159],["privacy.maennersache.de",159],["sinergy.ch",161],["agglo-valais-central.ch",161],["biomedcentral.com",162],["hsbc.*",163],["hsbcnet.com",163],["hsbcinnovationbanking.com",163],["create.hsbc",163],["gbm.hsbc.com",163],["hsbc.co.uk",164],["internationalservices.hsbc.com",164],["history.hsbc.com",164],["about.hsbc.co.uk",165],["privatebanking.hsbc.com",166],["independent.co.uk",169],["privacy.crash.net",169],["the-independent.com",170],["argos.co.uk",172],["poco.de",[173,174]],["moebelix.*",173],["moemax.*",173],["xxxlutz.*",173],["xxxlesnina.*",173],["moebel24.ch",174],["meubles.fr",174],["meubelo.nl",174],["moebel.de",174],["lipo.ch",175],["schubiger.ch",176],["aedt.de",177],["berlin-live.de",177],["connect.de",177],["gutefrage.net",177],["insideparadeplatz.ch",177],["morgenpost.de",177],["play3.de",177],["thueringen24.de",177],["pdfupload.io",178],["gamestar.de",[179,180,218]],["verksamt.se",181],["acmemarkets.com",182],["amtrak.com",182],["beko.com",182],["bepanthen.com.au",182],["berocca.com.au",182],["booking.com",182],["carrefour.fr",182],["centrum.sk",182],["claratyne.com.au",182],["credit-suisse.com",182],["ceskatelevize.cz",182],["deporvillage.*",182],["de.vanguard",182],["dhl.de",182],["digikey.*",182],["drafthouse.com",182],["dunelm.com",182],["fello.se",182],["fielmann.*",182],["flashscore.fr",182],["flightradar24.com",182],["fnac.es",182],["foodandwine.com",182],["fourseasons.com",182],["khanacademy.org",182],["konami.com",182],["jll.*",182],["jobs.redbull.com",182],["hellenicbank.com",182],["gemini.pl",182],["groceries.asda.com",182],["lamborghini.com",182],["menshealth.com",182],["n26.com",182],["nintendo.com",182],["nokia.com",182],["oneweb.net",182],["omnipod.com",182],["oralb.*",182],["panasonic.com",182],["parkside-diy.com",182],["pluto.tv",182],["popularmechanics.com",182],["polskieradio.pl",182],["pringles.com",182],["radissonhotels.com",182],["ricardo.ch",182],["rockstargames.com",182],["rte.ie",182],["salesforce.com",182],["samsonite.*",182],["spiele.heise.de",182],["spirit.com",182],["stenaline.co.uk",182],["swisscom.ch",182],["swisspass.ch",182],["technologyfromsage.com",182],["telenet.be",182],["tntsports.co.uk",182],["theepochtimes.com",182],["toujeo.com",182],["uber-platz.de",182],["questdiagnostics.com",182],["wallapop.com",182],["wickes.co.uk",182],["workingtitlefilms.com",182],["vattenfall.de",182],["winparts.fr",182],["yoigo.com",182],["zoominfo.com",182],["allegiantair.com",183],["hallmarkchannel.com",183],["incorez.com",183],["noovle.com",183],["otter.ai",183],["plarium.com",183],["telsy.com",183],["timenterprise.it",183],["tim.it",183],["tradersunion.com",183],["fnac.*",183],["yeti.com",183],["here.com",[184,664]],["vodafone.com",184],["cmp.heise.de",186],["cmp.am-online.com",186],["cmp.motorcyclenews.com",186],["consent.newsnow.co.uk",186],["cmp.todays-golfer.com",186],["spp.nextpit.com",186],["koeser.com",187],["shop.schaette-pferd.de",187],["schaette.de",187],["ocre-project.eu",188],["central-bb.de",189],["fitnessfoodcorner.de",190],["kuehlungsborn.de",191],["espressocoffeeshop.com",192],["brainmarket.pl",193],["getroots.app",194],["cart-in.re",[195,591]],["prestonpublishing.pl",196],["zara.com",197],["lepermislibre.fr",197],["negociardivida.spcbrasil.org.br",198],["adidas.*",199],["privacy.topreality.sk",200],["privacy.autobazar.eu",200],["vu.lt",201],["adnkronos.com",[202,203]],["cornwalllive.com",[202,203]],["cyprus-mail.com",[202,203]],["einthusan.tv",[202,203]],["informazione.it",[202,203]],["mymovies.it",[202,203]],["tuttoeuropei.com",[202,203]],["video.lacnews24.it",[202,203]],["protothema.gr",202],["flash.gr",202],["taxscouts.com",204],["online.no",206],["telenor.no",206],["austrian.com",207],["lufthansa.com",207],["kampfkunst-herz.de",208],["glow25.de",208],["hornetsecurity.com",208],["kayzen.io",208],["wasserkunst-hamburg.de",208],["zahnspange-oelde.de",208],["bnc.ca",209],["egora.fr",209],["engelvoelkers.com",209],["estrategiasdeinversion.com",209],["festo.com",209],["franceinfo.fr",209],["francebleu.fr",209],["francemediasmonde.com",209],["geny.com",209],["giphy.com",209],["idealista.com",209],["infolibre.es",209],["information.tv5monde.com",209],["ing.es",209],["knipex.de",209],["laprovence.com",209],["lemondeinformatique.fr",209],["libertaddigital.com",209],["mappy.com",209],["orf.at",209],["philibertnet.com",209],["researchgate.net",209],["standaard.be",209],["stroilioro.com",209],["taxfix.de",209],["telecinco.es",209],["vistaalegre.com",209],["zimbra.free.fr",209],["usinenouvelle.com",211],["reussir.fr",213],["bruendl.at",215],["latamairlines.com",216],["elisa.ee",217],["baseendpoint.brigitte.de",218],["baseendpoint.gala.de",218],["baseendpoint.haeuser.de",218],["baseendpoint.stern.de",218],["baseendpoint.urbia.de",218],["cmp.tag24.de",218],["cmp-sp.handelsblatt.com",218],["cmpv2.berliner-zeitung.de",218],["golem.de",218],["consent.t-online.de",218],["sp-consent.stuttgarter-nachrichten.de",219],["sp-consent.stuttgarter-zeitung.de",219],["regjeringen.no",220],["sp-manager-magazin-de.manager-magazin.de",221],["consent.11freunde.de",221],["centrum24.pl",225],["replay.lsm.lv",226],["ltv.lsm.lv",226],["bernistaba.lsm.lv",226],["stadt-wien.at",227],["verl.de",227],["cubo-sauna.de",227],["mbl.is",227],["auto-medienportal.net",227],["mobile.de",228],["cookist.it",229],["fanpage.it",229],["geopop.it",229],["lexplain.it",229],["royalmail.com",230],["gmx.net",231],["gmx.ch",232],["mojehobby.pl",233],["super-hobby.*",233],["sp.stylevamp.de",234],["cmp.wetteronline.de",234],["audi.*",235],["easyjet.com",235],["experian.co.uk",235],["postoffice.co.uk",235],["tescobank.com",235],["internetaptieka.lv",[236,237]],["wells.pt",238],["dskdirect.bg",239],["cmpv2.dba.dk",240],["spcmp.crosswordsolver.com",241],["ecco.com",242],["georgjensen.com",242],["thomann.*",243],["landkreis-kronach.de",244],["northcoast.com",245],["chaingpt.org",245],["bandenconcurrent.nl",246],["bandenexpert.be",246],["reserved.com",247],["metro.it",248],["makro.es",248],["metro.sk",248],["metro-cc.hr",248],["makro.nl",248],["metro.bg",248],["metro.at",248],["metro-tr.com",248],["metro.de",248],["metro.fr",248],["makro.cz",248],["metro.ro",248],["makro.pt",248],["makro.pl",248],["sklepy-odido.pl",248],["rastreator.com",248],["metro.ua",249],["metro.rs",249],["metro-kz.com",249],["metro.md",249],["metro.hu",249],["metro-cc.ru",249],["metro.pk",249],["balay.es",250],["constructa.com",250],["dafy-moto.com",251],["akku-shop.nl",252],["akkushop-austria.at",252],["akkushop-b2b.de",252],["akkushop.de",252],["akkushop.dk",252],["batterie-boutique.fr",252],["akkushop-schweiz.ch",253],["evzuttya.com.ua",254],["eobuv.cz",254],["eobuwie.com.pl",254],["ecipele.hr",254],["eavalyne.lt",254],["efootwear.eu",254],["eschuhe.ch",254],["eskor.se",254],["chaussures.fr",254],["ecipo.hu",254],["eobuv.com.ua",254],["eobuv.sk",254],["epantofi.ro",254],["epapoutsia.gr",254],["escarpe.it",254],["eschuhe.de",254],["obuvki.bg",254],["zapatos.es",254],["swedbank.ee",255],["mudanzavila.es",256],["bienmanger.com",257],["gesipa.*",258],["gesipausa.com",258],["beckhoff.com",258],["zitekick.dk",259],["eltechno.dk",259],["okazik.pl",259],["batteryempire.*",260],["maxi.rs",261],["garmin.com",262],["invisalign.*",262],["one4all.ie",262],["osprey.com",262],["wideroe.no",263],["bmw.*",264],["kijk.nl",265],["nordania.dk",266],["danskebank.*",266],["danskeci.com",266],["danicapension.dk",266],["dehn.*",267],["gewerbegebiete.de",268],["cordia.fr",269],["vola.fr",270],["lafi.fr",271],["skyscanner.*",272],["coolblue.*",273],["sanareva.*",274],["atida.fr",274],["bbva.*",275],["bbvauk.com",275],["expertise.unimi.it",276],["altenberg.de",277],["vestel.es",278],["tsb.co.uk",279],["buienradar.nl",[280,281]],["linsenplatz.de",282],["budni.de",283],["erstecardclub.hr",283],["teufel.de",[284,285]],["abp.nl",286],["simplea.sk",287],["flip.bg",288],["kiertokanki.com",289],["leirovins.be",291],["vias.be",292],["edf.fr",293],["virbac.com",293],["diners.hr",293],["squarehabitat.fr",293],["arbitrobancariofinanziario.it",294],["ivass.it",294],["economiapertutti.bancaditalia.it",294],["smit-sport.de",295],["gekko-computer.de",295],["jysk.al",296],["go-e.com",297],["malerblatt-medienservice.de",298],["architekturbuch.de",298],["medienservice-holz.de",298],["leuchtstark.de",298],["casius.nl",299],["coolinarika.com",300],["giga-hamburg.de",300],["vakgaragevannunen.nl",300],["fortuluz.es",300],["finna.fi",300],["eurogrow.es",300],["topnatur.cz",300],["topnatur.eu",300],["vakgaragevandertholen.nl",300],["whufc.com",300],["zomaplast.cz",300],["envafors.dk",301],["dabbolig.dk",[302,303]],["daruk-emelok.hu",304],["exakta.se",305],["larca.de",306],["roli.com",307],["okazii.ro",308],["lr-shop-direkt.de",308],["portalprzedszkolny.pl",308],["tgvinoui.sncf",309],["l-bank.de",310],["interhyp.de",311],["indigoneo.*",312],["transparency.meta.com",313],["dojusagro.lt",314],["eok.ee",314],["kripa.it",314],["nextdaycatering.co.uk",314],["safran-group.com",314],["sr-ramenendeuren.be",314],["ilovefreegle.org",314],["tribexr.com",314],["understandingsociety.ac.uk",314],["bestbuycyprus.com",315],["strato.*",316],["strato-hosting.co.uk",316],["auto.de",317],["contentkingapp.com",318],["comune.palermo.it",319],["get-in-engineering.de",320],["spp.nextpit.es",321],["spp.nextpit.it",322],["spp.nextpit.com.br",323],["spp.nextpit.fr",324],["otterbox.com",325],["stoertebeker-brauquartier.com",326],["stoertebeker.com",326],["stoertebeker-eph.com",326],["aparts.pl",327],["sinsay.com",[328,329]],["benu.cz",330],["stockholmresilience.org",331],["ludvika.se",331],["kammarkollegiet.se",331],["cazenovecapital.com",332],["statestreet.com",333],["beopen.lv",334],["cesukoncertzale.lv",335],["dodo.fr",336],["pepper.it",337],["pepper.pl",337],["preisjaeger.at",337],["mydealz.de",337],["dealabs.com",337],["hotukdeals.com",337],["chollometro.com",337],["makelaarsland.nl",338],["bricklink.com",339],["bestinver.es",340],["icvs2023.conf.tuwien.ac.at",341],["racshop.co.uk",[342,343]],["baabuk.com",344],["sapien.io",344],["app.lepermislibre.fr",345],["multioferta.es",346],["testwise.com",[347,348]],["tonyschocolonely.com",349],["fitplus.is",349],["fransdegrebber.nl",349],["lilliputpress.ie",349],["lexibo.com",349],["marin-milou.com",349],["dare2tri.com",349],["t3micro.*",349],["la-vie-naturelle.com",[350,351]],["inovelli.com",352],["uonetplus.vulcan.net.pl",[353,354]],["consent.helagotland.se",355],["oper.koeln",[356,357]],["deezer.com",358],["console.scaleway.com",359],["hoteldesartssaigon.com",360],["autoritedelaconcurrence.fr",361],["groupeonepoint.com",361],["geneanet.org",361],["carrieres.groupegalerieslafayette.com",361],["immo-banques.fr",361],["lingvanex.com",361],["turncamp.com",362],["ejobs.ro",[363,364]],["kupbilecik.*",[365,366]],["coolbe.com",367],["serienjunkies.de",368],["computerhoy.20minutos.es",369],["clickskeks.at",370],["clickskeks.de",370],["abt-sportsline.de",370],["exemplary.ai",371],["forbo.com",371],["stores.sk",371],["nerdstar.de",371],["prace.cz",371],["profesia.sk",371],["profesia.cz",371],["pracezarohem.cz",371],["atmoskop.cz",371],["seduo.sk",371],["seduo.cz",371],["teamio.com",371],["arnold-robot.com",371],["cvonline.lt",371],["cv.lv",371],["cv.ee",371],["dirbam.lt",371],["visidarbi.lv",371],["otsintood.ee",371],["webtic.it",371],["gerth.de",372],["pamiatki.pl",373],["initse.com",374],["salvagny.org",375],["augsburger-allgemeine.de",376],["stabila.com",377],["stwater.co.uk",378],["suncalc.org",[379,380]],["swisstph.ch",381],["taxinstitute.ie",382],["get-in-it.de",383],["tempcover.com",[384,385]],["guildford.gov.uk",386],["easyparts.*",[387,388]],["easyparts-recambios.es",[387,388]],["easyparts-rollerteile.de",[387,388]],["drimsim.com",389],["canyon.com",[390,391]],["vevovo.be",[392,393]],["vendezvotrevoiture.be",[392,393]],["wirkaufendeinauto.at",[392,393]],["vikoberallebiler.dk",[392,393]],["wijkopenautos.nl",[392,393]],["vikoperdinbil.se",[392,393]],["noicompriamoauto.it",[392,393]],["vendezvotrevoiture.fr",[392,393]],["compramostucoche.es",[392,393]],["wijkopenautos.be",[392,393]],["auto-doc.*",394],["autodoc.*",394],["autodoc24.*",394],["topautoosat.fi",394],["autoteiledirekt.de",394],["autoczescionline24.pl",394],["tuttoautoricambi.it",394],["onlinecarparts.co.uk",394],["autoalkatreszek24.hu",394],["autodielyonline24.sk",394],["reservdelar24.se",394],["pecasauto24.pt",394],["reservedeler24.co.no",394],["piecesauto24.lu",394],["rezervesdalas24.lv",394],["besteonderdelen.nl",394],["recambioscoche.es",394],["antallaktikaexartimata.gr",394],["piecesauto.fr",394],["teile-direkt.ch",394],["lpi.org",395],["divadelniflora.cz",396],["mahle-aftermarket.com",397],["refurbed.*",398],["eingutertag.org",399],["flyingtiger.com",[399,540]],["borgomontecedrone.it",399],["maharishistore.com",399],["recaro-shop.com",399],["gartenhotel-crystal.at",399],["fayn.com",400],["sklavenitis.gr",401],["eam-netz.de",402],["umicore.*",403],["veiligverkeer.be",403],["vsv.be",403],["dehogerielen.be",403],["gera.de",404],["mfr-chessy.fr",405],["mfr-lamure.fr",405],["mfr-saint-romain.fr",405],["mfr-lapalma.fr",405],["mfrvilliemorgon.asso.fr",405],["mfr-charentay.fr",405],["mfr.fr",405],["nationaltrust.org.uk",406],["hej-natural.*",407],["ib-hansmeier.de",408],["rsag.de",409],["esaa-eu.org",409],["aknw.de",409],["answear.*",410],["theprotocol.it",[411,412]],["lightandland.co.uk",413],["etransport.pl",414],["wohnen-im-alter.de",415],["johnmuirhealth.com",[416,417]],["markushaenni.com",418],["airbaltic.com",419],["gamersgate.com",419],["zorgzaam010.nl",420],["etos.nl",421],["paruvendu.fr",422],["cmpv2.bistro.sk",424],["privacy.bazar.sk",424],["hennamorena.com",425],["newsello.pl",426],["porp.pl",427],["golfbreaks.com",428],["lieferando.de",429],["just-eat.*",429],["justeat.*",429],["pyszne.pl",429],["lieferando.at",429],["takeaway.com",429],["thuisbezorgd.nl",429],["holidayhypermarket.co.uk",430],["unisg.ch",431],["wassererleben.ch",431],["psgaz.pl",432],["play-asia.com",433],["atu.de",434],["atu-flottenloesungen.de",434],["but.fr",434],["edeka.de",434],["fortuneo.fr",434],["maif.fr",434],["particuliers.sg.fr",434],["sparkasse.at",434],["group.vig",434],["tf1info.fr",434],["dpdgroup.com",435],["dpd.fr",435],["dpd.com",435],["cosmosdirekt.de",435],["bstrongoutlet.pt",436],["nobbot.com",437],["isarradweg.de",[438,439]],["flaxmanestates.com",439],["inland-casas.com",439],["finlayson.fi",[440,441]],["cowaymega.ca",[440,441]],["arktis.de",442],["desktronic.de",442],["belleek.com",442],["brauzz.com",442],["cowaymega.com",442],["dockin.de",442],["dryrobe.com",[442,443]],["formswim.com",442],["hairtalk.se",442],["hallmark.co.uk",[442,443]],["loopearplugs.com",[442,443]],["oleus.com",442],["peopleofshibuya.com",442],["pullup-dip.com",442],["sanctum.shop",442],["tartanblanketco.com",442],["desktronic.*",443],["hq-germany.com",443],["tepedirect.com",443],["maxi-pet.ro",443],["paper-republic.com",443],["pullup-dip.*",443],["vitabiotics.com",443],["smythstoys.com",444],["beam.co.uk",[445,446]],["autobahn.de",447],["consent-cdn.zeit.de",448],["coway-usa.com",449],["steiners.shop",450],["ecmrecords.com",451],["malaikaraiss.com",451],["koch-mit.de",451],["zeitreisen.zeit.de",451],["wefashion.com",452],["merkur.dk",453],["ionos.*",455],["omegawatches.com",456],["carefully.be",457],["aerotime.aero",457],["rocket-league.com",458],["dws.com",459],["bosch-homecomfort.com",460],["elmleblanc-optibox.fr",460],["monservicechauffage.fr",460],["boschrexroth.com",460],["home-connect.com",461],["lowrider.at",[462,463]],["mesto.de",464],["intersport.gr",465],["intersport.bg",465],["intersport.com.cy",465],["intersport.ro",465],["ticsante.com",466],["techopital.com",466],["millenniumprize.org",467],["hepster.com",468],["ellisphere.fr",469],["peterstaler.de",470],["blackforest-still.de",470],["tiendaplayaundi.com",471],["ajtix.co.uk",472],["raja.fr",473],["rajarani.de",473],["rajapack.*",[473,474]],["avery-zweckform.com",475],["1xinternet.de",475],["futterhaus.de",475],["dasfutterhaus.at",475],["frischeparadies.de",475],["fmk-steuer.de",475],["selgros.de",475],["transgourmet.de",475],["mediapart.fr",476],["athlon.com",477],["alumniportal-deutschland.org",478],["snoopmedia.com",478],["myguide.de",478],["study-in-germany.de",478],["daad.de",478],["cornelsen.de",[479,480]],["vinmonopolet.no",482],["tvp.info",483],["tvp.pl",483],["tvpworld.com",483],["brtvp.pl",483],["tvpparlament.pl",483],["belsat.eu",483],["warnung.bund.de",484],["mediathek.lfv-bayern.de",485],["allegro.*",486],["allegrolokalnie.pl",486],["ceneo.pl",486],["czc.cz",486],["eon.pl",[487,488]],["ylasatakunta.fi",[489,490]],["mega-image.ro",491],["louisvuitton.com",492],["bodensee-airport.eu",493],["department56.com",494],["allendesignsstudio.com",494],["designsbylolita.co",494],["shop.enesco.com",494],["savoriurbane.com",495],["miumiu.com",496],["church-footwear.com",496],["clickdoc.fr",497],["car-interface.com",498],["monolithdesign.it",498],["thematchahouse.com",498],["smileypack.de",[499,500]],["malijunaki.si",501],["finom.co",502],["orange.es",[503,504]],["fdm-travel.dk",505],["hummel.dk",505],["jysk.nl",505],["power.no",505],["skousen.dk",505],["velliv.dk",505],["whiteaway.com",505],["whiteaway.no",505],["whiteaway.se",505],["skousen.no",505],["energinet.dk",505],["elkjop.no",506],["medimax.de",507],["costautoricambi.com",508],["lotto.it",508],["readspeaker.com",508],["team.blue",508],["ibistallinncenter.ee",509],["aaron.ai",510],["futureverse.com",511],["tandem.co.uk",511],["insights.com",512],["thebathcollection.com",513],["coastfashion.com",[514,515]],["oasisfashion.com",[514,515]],["warehousefashion.com",[514,515]],["misspap.com",[514,515]],["karenmillen.com",[514,515]],["boohooman.com",[514,515]],["hdt.de",516],["wolt.com",517],["myprivacy.dpgmedia.nl",518],["myprivacy.dpgmedia.be",518],["www.dpgmediagroup.com",518],["xohotels.com",519],["sim24.de",520],["tnt.com",521],["uza.be",522],["uzafoundation.be",522],["uzajobs.be",522],["bergzeit.*",[523,524]],["cinemas-lumiere.com",525],["cdiscount.com",526],["brabus.com",527],["roborock.com",528],["strumentimusicali.net",529],["maisonmargiela.com",530],["webfleet.com",531],["dragonflyshipping.ca",532],["broekhuis.nl",533],["groningenairport.nl",533],["nemck.cz",534],["bokio.se",535],["sap-press.com",536],["roughguides.com",[537,538]],["korvonal.com",539],["rexbo.*",541],["itau.com.br",542],["bbg.gv.at",543],["portal.taxi.eu",544],["topannonces.fr",545],["homap.fr",546],["artifica.fr",547],["plan-interactif.com",547],["ville-cesson.fr",547],["moismoliere.com",548],["unihomes.co.uk",549],["bkk.hu",550],["coiffhair.com",551],["ptc.eu",552],["ziegert-group.com",[553,661]],["lassuranceretraite.fr",554],["interieur.gouv.fr",554],["toureiffel.paris",554],["economie.gouv.fr",554],["education.gouv.fr",554],["livoo.fr",554],["su.se",554],["zappo.fr",554],["smdv.de",555],["digitalo.de",555],["petiteamelie.*",556],["mojanorwegia.pl",557],["koempf24.ch",[558,559]],["teichitekten24.de",[558,559]],["koempf24.de",[558,559]],["wolff-finnhaus-shop.de",[558,559]],["asnbank.nl",560],["blgwonen.nl",560],["regiobank.nl",560],["snsbank.nl",560],["vulcan.net.pl",[561,562]],["ogresnovads.lv",563],["partenamut.be",564],["pirelli.com",565],["unicredit.it",566],["effector.pl",567],["zikodermo.pl",[568,569]],["devolksbank.nl",570],["caixabank.es",571],["cyberport.de",573],["cyberport.at",573],["slevomat.cz",574],["kfzparts24.de",575],["runnersneed.com",576],["aachener-zeitung.de",577],["sportpursuit.com",578],["druni.es",[579,592]],["druni.pt",[579,592]],["delta.com",580],["onliner.by",[581,582]],["vejdirektoratet.dk",583],["usaa.com",584],["consorsbank.de",585],["metroag.de",586],["kupbilecik.pl",587],["oxfordeconomics.com",588],["oxfordeconomics.com.au",[589,590]],["routershop.nl",591],["woo.pt",591],["e-jumbo.gr",593],["alza.*",594],["rmf.fm",596],["rmf24.pl",596],["tracfone.com",597],["lequipe.fr",598],["gala.fr",599],["purepeople.com",600],["3sat.de",601],["zdf.de",601],["filmfund.lu",602],["welcometothejungle.com",602],["triblive.com",603],["rai.it",604],["fbto.nl",605],["europa.eu",606],["caisse-epargne.fr",607],["banquepopulaire.fr",607],["bigmammagroup.com",608],["studentagency.sk",608],["studentagency.eu",608],["winparts.be",609],["winparts.nl",609],["winparts.eu",610],["winparts.ie",610],["winparts.se",610],["sportano.*",[611,612]],["crocs.*",613],["chronext.ch",614],["chronext.de",614],["chronext.at",614],["chronext.com",615],["chronext.co.uk",615],["chronext.fr",616],["chronext.nl",617],["chronext.it",618],["galerieslafayette.com",619],["bazarchic.com",620],["stilord.*",621],["tiko.pt",622],["nsinternational.com",623],["laposte.fr",624],["meinbildkalender.de",625],["gls-group.com",626],["gls-group.eu",626],["chilis.com",627],["account.bhvr.com",629],["everand.com",629],["lucidchart.com",629],["intercars.ro",[629,630]],["scribd.com",629],["guidepoint.com",629],["erlebnissennerei-zillertal.at",631],["hintertuxergletscher.at",631],["tiwag.at",631],["anwbvignetten.nl",632],["playseatstore.com",632],["swiss-sport.tv",634],["targobank-magazin.de",635],["zeit-verlagsgruppe.de",635],["online-physiotherapie.de",635],["kieferorthopaede-freisingsmile.de",636],["nltraining.nl",637],["kmudigital.at",638],["mintysquare.com",639],["consent.thetimes.com",640],["cadenaser.com",641],["berlinale.de",642],["lebonlogiciel.com",643],["pharmastar.it",644],["washingtonpost.com",645],["brillenplatz.de",646],["angelplatz.de",646],["dt.mef.gov.it",647],["raffeldeals.com",648],["stepstone.de",649],["kobo.com",650],["zoxs.de",652],["offistore.fi",653],["collinsaerospace.com",654],["radioapp.lv",657],["hagengrote.de",658],["hemden-meister.de",658],["vorteilshop.com",659],["capristores.gr",660],["getaround.com",662],["technomarket.bg",663],["epiphone.com",665],["gibson.com",665],["maestroelectronics.com",665],["cropp.com",[666,667]],["housebrand.com",[666,667]],["mohito.com",[666,667]],["autoczescizielonki.pl",668],["b-s.de",669],["novakid.pl",670],["piecesauto24.com",671],["earpros.com",672],["portalridice.cz",673],["kitsapcu.org",674],["nutsinbulk.*",675],["berlin-buehnen.de",676],["metropoliten.rs",677],["educa2.madrid.org",678],["immohal.de",679],["sourcepoint.theguardian.com",680],["rtlplay.be",681],["natgeotv.com",681],["llama.com",682],["meta.com",682],["setasdesevilla.com",683],["cruyff-foundation.org",684],["allianz.*",685],["energiedirect-bayern.de",686],["postnl.be",687],["postnl.nl",687],["sacyr.com",688],["volkswagen-newsroom.com",689],["openbank.*",690],["tagus-eoficina.grupogimeno.com",691],["knax.de",692],["ordblindenetvaerket.dk",693],["boligbeton.dk",693],["dukh.dk",693],["pevgrow.com",694],["ya.ru",695],["ipolska24.pl",696],["17bankow.com",696],["5mindlazdrowia.pl",696],["kazimierzdolny.pl",696],["vpolshchi.pl",696],["dobreprogramy.pl",696],["essanews.com",696],["dailywrap.ca",696],["dailywrap.uk",696],["money.pl",696],["autokult.pl",696],["komorkomania.pl",696],["polygamia.pl",696],["autocentrum.pl",696],["allani.pl",696],["homebook.pl",696],["domodi.pl",696],["jastrzabpost.pl",696],["open.fm",696],["gadzetomania.pl",696],["fotoblogia.pl",696],["abczdrowie.pl",696],["parenting.pl",696],["kafeteria.pl",696],["vibez.pl",696],["wakacje.pl",696],["extradom.pl",696],["totalmoney.pl",696],["superauto.pl",696],["nerwica.com",696],["forum.echirurgia.pl",696],["dailywrap.net",696],["pysznosci.pl",696],["genialne.pl",696],["finansowysupermarket.pl",696],["deliciousmagazine.pl",696],["audioteka.com",696],["easygo.pl",696],["so-magazyn.pl",696],["o2.pl",696],["pudelek.pl",696],["benchmark.pl",696],["wp.pl",696],["altibox.dk",697],["altibox.no",697],["talksport.com",698],["zuiderzeemuseum.nl",699],["gota.io",700],["nwzonline.de",701]]);
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
