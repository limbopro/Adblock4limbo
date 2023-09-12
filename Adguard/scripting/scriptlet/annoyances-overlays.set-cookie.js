/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const argsList = [["_blocker_hidden","1"],["dismissCheck","1"],["showPopUp","true"],["isShowSociety","1"],["user_sign_up_modal_closed","true"],["common_sign_up_show","1"],["popShowed10s","yes"],["showLoginPopup","1"],["hide_promo_popup","true"],["nft-now-modal","1"],["do_not_show_mortgage_banner","1"],["divioverlay240311","true"],["divioverlay240768","true"],["amp_modal","1"],["pum-2309","true"],["support-ukraine","true"],["viewedOuibounceModal","true"],["acquisitionModalShowed","1"],["pageHint","1"],["intModalViewed","true"],["modal_rss","true"],["gmu_leadform","1"],["unlogin_scroll_step","1"],["cp_id_85057","true"],["movie-displayed","true"],["njt-close-notibar","true"],["signup_modal","true"],["signup_win_closed","true"],["__TRAVEL_QUIZ__","true"],["emailSignupCookie","true"],["efblog__hide_subscribe_popup","true"],["newsletteroverlayopened","true"],["popup_kapali","true"],["subbanner","true"],["home-layer","false"],["OogCCO","1"],["ck_glue_visit","1"],["exit_intent","true"],["seen-sl-signup-modal","true"],["wp-dl-nrxt","1"],["mag-newsletterbox","1"],["_pc_signed_up","true"],["nosi","1"],["ilike","1"],["disableNewsletterOverlay","1"],["inc_optin_popup_long_hidden-1_417","1"],["mvpopnews","1"],["NewsletterPopup","1"],["_pc_annoyed","1"],["_Wmpci_Popup","true"],["modalShown","1"],["chocolatey_hide_packages_disclaimer","true"],["mobile_main_half_popup","Y"],["saiupagina","true"],["_showed_subscribeModal_og","1"],["neverNewsletterPopup","1"],["widget_show","1"],["newsletter","1"],["digest_sub_cookie_4","true"],["NewsLetterDismissed","true"],["modalShown","true"],["closedsticky","true"],["skipped_subsctiption_popup","true"],["NewsletterPopupEUROPA","true"],["pum-32511","true"],["a9-beforeyouleave-popin","1"],["likePopupShown","1"],["newsletter_popup_closed","true"],["newsletter_shown","false"],["conversion_action_done","true"],["views-since-welcome-ad","3"],["_pc_NL1","true"],["subscription_was_close","true"],["lr_subscribed","true"],["mrn_nl_abo","1"],["newsletterDisplayed","1"],["newsletterBox","1"],["logged_in","1","","reload","1"],["ezgwcc","1"]];

const hostnamesMap = new Map([["rambler.ua",0],["rambler.ru",0],["dailyadvertiser.com.au",1],["canberratimes.com.au",1],["thecourier.com.au",1],["portnews.com.au",1],["illawarramercury.com.au",1],["dailyliberal.com.au",1],["centralwesterndaily.com.au",1],["newcastleherald.com.au",1],["examiner.com.au",1],["bendigoadvertiser.com.au",1],["reverseimagesearch.com",2],["kikinote.net",3],["litalico-c.jp",4],["careers360.com",5],["blog.csdn.net",[6,22]],["map.baidu.com",7],["bilkom.pl",8],["nftnow.com",9],["cian.ru",10],["disntr.com",[11,12]],["ampmedia.jp",13],["mrt.od.ua",14],["customfw.xyz",15],["intellinews.com",16],["pfister.ch",17],["1-2-3.tv",18],["academicearth.org",19],["lkslodz.pl",20],["getmyuni.com",21],["gettinenglish.com",23],["texacopolska.pl",24],["mylivewallpapers.com",25],["ebth.com",26],["findamasters.com",27],["tripoto.com",28],["horizonhobby.de",29],["ef.com",30],["uniqlo.com",31],["benguturk.com",32],["cifrus.ru",33],["kmplayer.com",34],["oogarden.de",35],["tvfindr.com",36],["adacreisen.de",37],["dropbox.com",38],["delamar.de",39],["lebensmittel-sonderposten.de",40],["linkradquadrat.de",40],["forward.com",41],["abload.de",42],["puntocellulare.it",43],["hekatron-brandschutz.de",44],["prowebscraper.com",45],["moneyvox.fr",46],["kaiser-elektro.de",47],["thedailybeast.com",48],["careerkarma.com",49],["ruggable.com",50],["chocolatey.org",51],["m.qoo10.jp",52],["girafa.com.br",53],["onlinegibdd.ru",54],["auxologico.it",55],["onclinic.ua",56],["geizdental.de",57],["unisender.com",58],["pbs.org",[59,60]],["profgalloway.com",61],["bbbl.dev",62],["porsche-design.com",63],["ordnungsliebe.net",64],["gymglish.com",65],["shoppingpl.com",66],["mozo.com.au",67],["parfois.com",68],["wiseadvice-it.ru",69],["nextgov.com",70],["thebulletin.org",71],["quto.ru",72],["freedomplatform.tv",73],["marianne.net",74],["lampenwelt.de",75],["fahrradmanufaktur.de",76],["tumblr.com",77],["scitechdaily.com",78]]);

const entitiesMap = new Map([]);

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
        'true', 'false',
        'yes', 'y', 'no', 'n',
        'ok',
        'accept', 'reject',
        'allow', 'deny',
    ];
    if ( validValues.includes(value.toLowerCase()) === false ) {
        if ( /^\d+$/.test(value) === false ) { return; }
        const n = parseInt(value, 10);
        if ( n > 15 ) { return; }
    }
    value = encodeURIComponent(value);

    setCookieHelper(
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
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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

function setCookieHelper(
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    const cookieExists = (name, value) => {
        return document.cookie.split(/\s*;\s*/).some(s => {
            const pos = s.indexOf('=');
            if ( pos === -1 ) { return false; }
            if ( s.slice(0, pos) !== name ) { return false; }
            if ( s.slice(pos+1) !== value ) { return false; }
            return true;
        });
    };

    if ( options.reload && cookieExists(name, value) ) { return; }

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
    document.cookie = cookieParts.join('');

    if ( options.reload && cookieExists(name, value) ) {
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
