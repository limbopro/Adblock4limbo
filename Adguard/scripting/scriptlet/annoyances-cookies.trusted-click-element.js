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

/* eslint-disable indent */
/* global cloneInto */

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedClickElement = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],[".almacmp-button--settings, #purposeConsents1, #purposeConsents2, #purposeConsents3, #purposeConsents4, #purposeConsents5, #purposeConsents6, #purposeConsents7, #purposeConsents8, #purposeConsents9, #purposeConsents10, #purposeConsents11, #specialFeatureConsents1, #specialFeatureConsents2, #almacmp-save-layer2"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["button[id=\"onetrust-accept-btn-handler\"]"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["button#minf-privacy-open-modal-btn-id, button.iubenda-cs-close-btn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],[".gdpr-btn.small-right, .thirdlayer .gdpr-btn-lbl"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button#onetrust-accept-btn-handler"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["#acceptAllMain","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"]];

const hostnamesMap = new Map([["consent.youtube.com",[0,1]],["sourcepointcmp.bloomberg.com",[2,3,4]],["sourcepointcmp.bloomberg.co.jp",[2,3,4]],["giga.de",4],["cmpv2.standard.co.uk",[5,6]],["cmpv2.independent.co.uk",[7,8,9]],["wetransfer.com",[10,11]],["spiegel.de",12],["www.nytimes.com",13],["consent.yahoo.com",14],["tumblr.com",15],["fplstatistics.co.uk",16],["e-shop.leonidas.com",17],["cdn.privacy-mgmt.com",[18,19,29,30,31,67,73,75,81,86,100,101]],["festoolcanada.com",20],["dr-beckmann.com",20],["consent.ladbible.com",[21,22]],["consent.unilad.com",[21,22]],["consent.gamingbible.com",[21,22]],["consent.sportbible.com",[21,22]],["consent.tyla.com",[21,22]],["consent.ladbiblegroup.com",[21,22]],["m2o.it",23],["deejay.it",23],["capital.it",23],["ilmattino.it",[23,24]],["leggo.it",23],["libero.it",23],["tiscali.it",23],["consent-manager.ft.com",[25,26]],["ampparit.com",28],["arvopaperi.fi",28],["iltalehti.fi",28],["kauppalehti.fi",28],["mediuutiset.fi",28],["mikrobitti.fi",28],["talouselama.fi",28],["tekniikkatalous.fi",28],["tivi.fi",28],["uusisuomi.fi",28],["digitalfoundry.net",32],["egx.net",32],["eurogamer.it",32],["mcmcomiccon.com",32],["nintendolife.com",32],["paxsite.com",32],["purexbox.com",32],["pushsquare.com",32],["starwarscelebration.com",32],["thehaul.com",32],["timeextension.com",32],["sportiva.shueisha.co.jp",32],["wpb.shueisha.co.jp",32],["dicebreaker.com",[33,34]],["eurogamer.cz",[33,34]],["eurogamer.es",[33,34]],["eurogamer.net",[33,34]],["eurogamer.nl",[33,34]],["eurogamer.pl",[33,34]],["eurogamer.pt",[33,34]],["gamesindustry.biz",[33,34]],["jelly.deals",[33,34]],["reedpop.com",[33,34]],["rockpapershotgun.com",[33,34]],["thepopverse.com",[33,34]],["vg247.com",[33,34]],["videogameschronicle.com",[33,34]],["eurogamer.de",35],["roadtovr.com",36],["corriere.it",37],["gazzetta.it",37],["oggi.it",37],["cmp.sky.it",38],["tennisassa.fi",39],["formula1.com",40],["f1racing.pl",41],["digi24.ro",43],["digisport.ro",43],["consent-pref.trustarc.com",44],["highlights.legaseriea.it",45],["calciomercato.com",45],["sosfanta.com",46],["wetter.com",49],["youmath.it",50],["pip.gov.pl",51],["forbes.com",52],["mediaset.it",53],["fortune.com",54],["cmp.dpgmedia.nl",[55,57]],["cmp.dpgmedia.be",[55,57]],["cmp.ad.nl",[55,57]],["cmp.autotrack.nl",[55,57]],["cmp.autoweek.nl",[55,57]],["cmp.bd.nl",[55,57]],["cmp.bndestem.nl",[55,57]],["cmp.demorgen.be",[55,57]],["cmp.deondernemer.nl",[55,57]],["cmp.destentor.nl",[55,57]],["cmp.ed.nl",[55,57]],["cmp.gaspedaal.nl",[55,57]],["cmp.gelderlander.nl",[55,57]],["cmp.hln.be",[55,57]],["cmp.humo.be",[55,57]],["cmp.margriet.nl",[55,57]],["cmp.nu.nl",[55,57]],["cmp.qmusic.nl",[55,57]],["cmp.stijlvol-wonen.com",[55,57]],["cmp.trouw.nl",[55,57]],["cmp.tubantia.nl",[55,57]],["cmp.vtwonen.be",[55,57]],["cmp.vtwonen.nl",[55,57]],["cmp.pzc.nl",[55,57]],["cmp.zozitdat.nl",[55,57]],["cmp-sp.vrt.be",[56,57]],["myprivacy.dpgmedia.nl",58],["dpgmediagroup.com",58],["story.nl",58],["veronicasuperguide.nl",58],["ilrestodelcarlino.it",59],["quotidiano.net",59],["lanazione.it",59],["ilgiorno.it",59],["iltelegrafolivorno.it",59],["frandroid.com",60],["nutri-plus.de",61],["aa.com",62],["programme-tv.net",63],["cmp.e24.no",[64,65]],["cmp.vg.no",[64,65]],["huffingtonpost.fr",66],["geopop.it",68],["fanpage.it",68],["rainews.it",69],["remarkable.com",70],["netzwelt.de",71],["money.it",72],["cmp.computerbild.de",74],["cmp-sp.siegener-zeitung.de",74],["cmp-sp.sportbuzzer.de",74],["eneco.nl",76],["deichmann.com",77],["blackpoolgazette.co.uk",78],["lep.co.uk",78],["northamptonchron.co.uk",78],["scotsman.com",78],["shieldsgazette.com",78],["thestar.co.uk",78],["portsmouth.co.uk",78],["sunderlandecho.com",78],["northernirelandworld.com",78],["3addedminutes.com",78],["anguscountyworld.co.uk",78],["banburyguardian.co.uk",78],["bedfordtoday.co.uk",78],["biggleswadetoday.co.uk",78],["bucksherald.co.uk",78],["burnleyexpress.net",78],["buxtonadvertiser.co.uk",78],["chad.co.uk",78],["daventryexpress.co.uk",78],["derbyshiretimes.co.uk",78],["derbyworld.co.uk",78],["derryjournal.com",78],["dewsburyreporter.co.uk",78],["doncasterfreepress.co.uk",78],["falkirkherald.co.uk",78],["fifetoday.co.uk",78],["glasgowworld.com",78],["halifaxcourier.co.uk",78],["harboroughmail.co.uk",78],["harrogateadvertiser.co.uk",78],["hartlepoolmail.co.uk",78],["hemeltoday.co.uk",78],["hucknalldispatch.co.uk",78],["lancasterguardian.co.uk",78],["leightonbuzzardonline.co.uk",78],["lincolnshireworld.com",78],["liverpoolworld.uk",78],["londonworld.com",78],["lutontoday.co.uk",78],["manchesterworld.uk",78],["meltontimes.co.uk",78],["miltonkeynes.co.uk",78],["newcastleworld.com",78],["newryreporter.com",78],["newsletter.co.uk",78],["northantstelegraph.co.uk",78],["northumberlandgazette.co.uk",78],["nottinghamworld.com",78],["peterboroughtoday.co.uk",78],["rotherhamadvertiser.co.uk",78],["stornowaygazette.co.uk",78],["surreyworld.co.uk",78],["thescarboroughnews.co.uk",78],["thesouthernreporter.co.uk",78],["totallysnookered.com",78],["wakefieldexpress.co.uk",78],["walesworld.com",78],["warwickshireworld.com",78],["wigantoday.net",78],["worksopguardian.co.uk",78],["yorkshireeveningpost.co.uk",78],["yorkshirepost.co.uk",78],["eurocard.com",79],["saseurobonusmastercard.se",80],["tver.jp",82],["linkedin.com",83],["elmundo.es",84],["mapillary.com",85],["raiplay.it",87],["derstandard.at",88],["derstandard.de",88],["3bmeteo.com",89],["ansa.it",89],["huffingtonpost.it",89],["ilmessaggero.it",89],["ilsecoloxix.it",89],["lastampa.it",89],["movieplayer.it",89],["multiplayer.it",89],["repubblica.it",89],["tomshw.it",89],["tuttoandroid.net",89],["tuttotech.net",89],["privacy.motorradonline.de",90],["dailystar.co.uk",[91,92]],["mirror.co.uk",[91,92]],["20minutos.es",93],["abc.es",93],["actu.fr",93],["bonniernews.se",93],["cadenaser.com",93],["cope.es",93],["diepresse.com",93],["dnevnik.hr",93],["elcomercio.es",93],["elconfidencial.com",93],["elpais.com",93],["elpais.es",93],["euronews.com",93],["expressen.se",93],["france24.com",93],["gva.be",93],["hbvl.be",93],["krone.at",93],["ledauphine.com",93],["marmiton.org",93],["metronieuws.nl",93],["nicematin.com",93],["nieuwsblad.be",93],["rfi.fr",93],["rossmann.pl",93],["rtl.lu",93],["sensacine.com",93],["silicon.es",93],["ryobitools.eu",[94,95]],["player.pl",96],["americanexpress.com",97],["golem.de",98],["atresplayer.com",99],["antena3.com",99],["atresmedia.com",99],["lasexta.com",99],["melodia-fm.com",99],["europafm.com",99],["ondacero.es",99],["atresmediastudios.com",99],["atresmediapublicidad.com",99],["antena3internacional.com",99],["correryfitness.com",99],["1und1.de",103]]);

const entitiesMap = new Map([["consent.google",0],["festool",20],["hertz",27],["gmx",32],["music.amazon",42],["chrono24",[47,48]],["americanairlines",62],["degiro",102]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '',
    delay = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-click-element', selectors, extraMatch, delay);

    if ( extraMatch !== '' ) {
        const assertions = extraMatch.split(',').map(s => {
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

    const selectorList = selectors.split(/\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch(_) {
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
    return document.cookie.split(/\s*;\s*/).map(s => {
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
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
                return { matchAll: true };
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
            catch(ex) {
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
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { trustedClickElement(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_trustedClickElement();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedClickElement = cloneInto([
            [ '(', uBOL_trustedClickElement.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedClickElement);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_trustedClickElement;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
