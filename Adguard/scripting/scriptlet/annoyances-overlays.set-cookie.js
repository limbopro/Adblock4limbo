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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setCookie = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["_blocker_hidden","1"],["dismissCheck","1"],["notification-newsletter-closed","true"],["pum-14592","true"],["modal","true"],["closed-black-banner","1"],["consultation_modal_shown","1"],["courses_quiz_completed","1"],["discover-disable-sitewide-article","true"],["showPopUp","true"],["isShowSociety","1"],["user_sign_up_modal_closed","true"],["common_sign_up_show","1"],["popShowed10s","yes"],["showLoginPopup","1"],["hide_promo_popup","true"],["nft-now-modal","1"],["do_not_show_mortgage_banner","1"],["divioverlay240311","true"],["divioverlay240768","true"],["amp_modal","1"],["pum-2309","true"],["support-ukraine","true"],["viewedOuibounceModal","true"],["acquisitionModalShowed","1"],["pageHint","1"],["intModalViewed","true"],["modal_rss","true"],["gmu_leadform","1"],["unlogin_scroll_step","1"],["cp_id_85057","true"],["movie-displayed","true"],["njt-close-notibar","true"],["signup_modal","true"],["signup_win_closed","true"],["__TRAVEL_QUIZ__","true"],["emailSignupCookie","true"],["efblog__hide_subscribe_popup","true"],["newsletteroverlayopened","true"],["popup_kapali","true"],["subbanner","true"],["home-layer","false"],["OogCCO","1"],["ck_glue_visit","1"],["exit_intent","true"],["seen-sl-signup-modal","true"],["wp-dl-nrxt","1"],["mag-newsletterbox","1"],["_pc_signed_up","true"],["nosi","1"],["ilike","1"],["disableNewsletterOverlay","1"],["inc_optin_popup_long_hidden-1_417","1"],["mvpopnews","1"],["NewsletterPopup","1"],["_pc_annoyed","1"],["_Wmpci_Popup","true"],["modalShown","1"],["chocolatey_hide_packages_disclaimer","true"],["mobile_main_half_popup","Y"],["saiupagina","true"],["forti.engagement_popup_banner","1"],["discountPrice","true"],["__expert.modal.campaign.welcome2023","true"],["AframeNewsletter","true"],["exitModal","true"],["newsletter-popup-shown","true"],["_showed_subscribeModal_og","1"],["neverNewsletterPopup","1"],["widget_show","1"],["newsletter","1"],["digest_sub_cookie_4","true"],["NewsLetterDismissed","true"],["modalShown","true"],["closedsticky","true"],["skipped_subsctiption_popup","true"],["ad_sess_pt_email","true"],["ad_sess_pb_email","true"],["ad_sess_pk_email","true"],["ad_sess_we_email","true"],["ad_sess_ws_email","true"],["NewsletterPopupEUROPA","true"],["pum-32511","true"],["a9-beforeyouleave-popin","1"],["likePopupShown","1"],["newsletter_popup_closed","true"],["newsletter_shown","false"],["conversion_action_done","true"],["views-since-welcome-ad","3"],["_pc_NL1","true"],["subscription_was_close","true"],["lr_subscribed","true"],["mrn_nl_abo","1"],["newsletterDisplayed","1"],["newsletterBox","1"],["sabl","1"],["logged_in","1","","reload","1"],["ezgwcc","1"]];

const hostnamesMap = new Map([["rambler.ua",0],["rambler.ru",0],["dailyadvertiser.com.au",1],["canberratimes.com.au",1],["thecourier.com.au",1],["portnews.com.au",1],["illawarramercury.com.au",1],["dailyliberal.com.au",1],["centralwesterndaily.com.au",1],["newcastleherald.com.au",1],["examiner.com.au",1],["bendigoadvertiser.com.au",1],["gatonplayseries.com",3],["imerodromos.gr",4],["flowwow.com",5],["netology.ru",6],["musescore.com",7],["helloyishi.com.tw",8],["reverseimagesearch.com",9],["kikinote.net",10],["litalico-c.jp",11],["careers360.com",12],["blog.csdn.net",[13,29]],["map.baidu.com",14],["bilkom.pl",15],["nftnow.com",16],["cian.ru",17],["disntr.com",[18,19]],["ampmedia.jp",20],["mrt.od.ua",21],["customfw.xyz",22],["intellinews.com",23],["pfister.ch",24],["1-2-3.tv",25],["academicearth.org",26],["lkslodz.pl",27],["getmyuni.com",28],["gettinenglish.com",30],["texacopolska.pl",31],["mylivewallpapers.com",32],["ebth.com",33],["findamasters.com",34],["tripoto.com",35],["horizonhobby.de",36],["ef.com",37],["uniqlo.com",38],["benguturk.com",39],["cifrus.ru",40],["kmplayer.com",41],["oogarden.de",42],["tvfindr.com",43],["adacreisen.de",44],["dropbox.com",45],["delamar.de",46],["lebensmittel-sonderposten.de",47],["linkradquadrat.de",47],["forward.com",48],["abload.de",49],["puntocellulare.it",50],["hekatron-brandschutz.de",51],["prowebscraper.com",52],["moneyvox.fr",53],["kaiser-elektro.de",54],["thedailybeast.com",55],["careerkarma.com",56],["ruggable.com",57],["chocolatey.org",58],["m.qoo10.jp",59],["girafa.com.br",60],["community.fortinet.com",61],["onlinepngtools.com",62],["onlinetools.com",62],["expert.it",63],["aframe.oscars.org",64],["mymuesli.com",66],["onlinegibdd.ru",67],["auxologico.it",68],["onclinic.ua",69],["geizdental.de",70],["unisender.com",71],["pbs.org",[72,73]],["profgalloway.com",74],["bbbl.dev",75],["pbteen.com",76],["potterybarn.com",77],["potterybarnkids.com",78],["westelm.com",79],["williams-sonoma.com",80],["porsche-design.com",81],["ordnungsliebe.net",82],["gymglish.com",83],["shoppingpl.com",84],["mozo.com.au",85],["parfois.com",86],["wiseadvice-it.ru",87],["nextgov.com",88],["thebulletin.org",89],["quto.ru",90],["freedomplatform.tv",91],["marianne.net",92],["lampenwelt.de",93],["fahrradmanufaktur.de",94],["techonthenet.com",95],["tumblr.com",96],["scitechdaily.com",97]]);

const entitiesMap = new Map([["vivre",2],["zendesk",65]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setCookie(
    name = '',
    value = '',
    path = ''
) {
    if ( name === '' ) { return; }
    name = encodeURIComponent(name);

    const validValues = [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'deny',
        'allowed', 'disallow',
        'enable', 'disable',
        'enabled', 'disabled',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
        'necessary', 'required',
    ];
    const normalized = value.toLowerCase();
    const match = /^("?)(.+)\1$/.exec(normalized);
    const unquoted = match && match[2] || normalized;
    if ( validValues.includes(unquoted) === false ) {
        if ( /^\d+$/.test(unquoted) === false ) { return; }
        const n = parseInt(value, 10);
        if ( n > 15 ) { return; }
    }

    setCookieFn(
        false,
        name,
        value,
        '',
        path,
        safeSelf().getExtraArgs(Array.from(arguments), 3)
    );
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function setCookieFn(
    trusted = false,
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    const getCookieValue = name => {
        for ( const s of document.cookie.split(/\s*;\s*/) ) {
            const pos = s.indexOf('=');
            if ( pos === -1 ) { continue; }
            if ( s.slice(0, pos) !== name ) { continue; }
            return s.slice(pos+1);
        }
    };

    const cookieBefore = getCookieValue(name);
    if ( cookieBefore !== undefined && options.dontOverwrite ) { return; }
    if ( cookieBefore === value && options.reload ) { return; }

    const cookieParts = [ name, '=', value ];
    if ( expires !== '' ) {
        cookieParts.push('; expires=', expires);
    }

    if ( path === '' ) { path = '/'; }
    else if ( path === 'none' ) { path = ''; }
    if ( path !== '' && path !== '/' ) { return; }
    if ( path === '/' ) {
        cookieParts.push('; path=/');
    }

    if ( trusted ) {
        if ( options.domain ) {
            cookieParts.push(`; domain=${options.domain}`);
        }
        cookieParts.push('; Secure');
    }

    try {
        document.cookie = cookieParts.join('');
    } catch(_) {
    }

    if ( options.reload && getCookieValue(name) === value ) {
        window.location.reload();
    }
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
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
    try { setCookie(...argsList[i]); }
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
    return uBOL_setCookie();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setCookie = cloneInto([
            [ '(', uBOL_setCookie.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setCookie);
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
    delete page.uBOL_setCookie;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
