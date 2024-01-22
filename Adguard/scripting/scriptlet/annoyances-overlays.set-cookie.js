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

const argsList = [["_blocker_hidden","1"],["dismissCheck","1"],["patch_top_tooltip_next_door_dismissed","true"],["patch_email_mobile_modal_dismissed","true"],["bulletin_new_31","1"],["avPopupCookie","1"],["DictPopShownToday","true"],["notification-newsletter-closed","true"],["pum-14592","true"],["modal","true"],["closed-black-banner","1"],["consultation_modal_shown","1"],["courses_quiz_completed","1"],["discover-disable-sitewide-article","true"],["showPopUp","true"],["isShowSociety","1"],["user_sign_up_modal_closed","true"],["common_sign_up_show","1"],["popShowed10s","yes"],["showLoginPopup","1"],["hide_promo_popup","true"],["nft-now-modal","1"],["do_not_show_mortgage_banner","1"],["divioverlay240311","true"],["divioverlay240768","true"],["amp_modal","1"],["pum-2309","true"],["support-ukraine","true"],["viewedOuibounceModal","true"],["acquisitionModalShowed","1"],["pageHint","1"],["intModalViewed","true"],["modal_rss","true"],["gmu_leadform","1"],["unlogin_scroll_step","1"],["cp_id_85057","true"],["movie-displayed","true"],["njt-close-notibar","true"],["signup_modal","true"],["signup_win_closed","true"],["__TRAVEL_QUIZ__","true"],["emailSignupCookie","true"],["efblog__hide_subscribe_popup","true"],["newsletteroverlayopened","true"],["popup_kapali","true"],["subbanner","true"],["home-layer","false"],["OogCCO","1"],["ck_glue_visit","1"],["exit_intent","true"],["seen-sl-signup-modal","true"],["wp-dl-nrxt","1"],["mag-newsletterbox","1"],["_pc_signed_up","true"],["nosi","1"],["ilike","1"],["disableNewsletterOverlay","1"],["inc_optin_popup_long_hidden-1_417","1"],["mvpopnews","1"],["NewsletterPopup","1"],["_pc_annoyed","1"],["_Wmpci_Popup","true"],["modalShown","1"],["chocolatey_hide_packages_disclaimer","true"],["mobile_main_half_popup","Y"],["saiupagina","true"],["SignupDismissed","1"],["forti.engagement_popup_banner","1"],["discountPrice","true"],["__expert.modal.campaign.welcome2023","true"],["AframeNewsletter","true"],["exitModal","true"],["newsletter-popup-shown","true"],["_showed_subscribeModal_og","1"],["neverNewsletterPopup","1"],["widget_show","1"],["newsletter","1"],["digest_sub_cookie_4","true"],["NewsLetterDismissed","true"],["modalShown","true"],["closedsticky","true"],["skipped_subsctiption_popup","true"],["ad_sess_pt_email","true"],["ad_sess_pb_email","true"],["ad_sess_pk_email","true"],["ad_sess_we_email","true"],["ad_sess_ws_email","true"],["NewsletterPopupEUROPA","true"],["pum-32511","true"],["a9-beforeyouleave-popin","1"],["likePopupShown","1"],["newsletter_popup_closed","true"],["newsletter_shown","false"],["conversion_action_done","true"],["views-since-welcome-ad","3"],["_pc_NL1","true"],["subscription_was_close","true"],["lr_subscribed","true"],["mrn_nl_abo","1"],["newsletterDisplayed","1"],["newsletterBox","1"],["sabl","1"],["logged_in","1","","reload","1"],["ezgwcc","1"]];

const hostnamesMap = new Map([["rambler.ua",0],["rambler.ru",0],["dailyadvertiser.com.au",1],["canberratimes.com.au",1],["thecourier.com.au",1],["portnews.com.au",1],["illawarramercury.com.au",1],["dailyliberal.com.au",1],["centralwesterndaily.com.au",1],["newcastleherald.com.au",1],["examiner.com.au",1],["bendigoadvertiser.com.au",1],["patch.com",[2,3]],["boylove1.mobi",[4,5]],["lingq.com",6],["gatonplayseries.com",8],["imerodromos.gr",9],["flowwow.com",10],["netology.ru",11],["musescore.com",12],["helloyishi.com.tw",13],["reverseimagesearch.com",14],["kikinote.net",15],["litalico-c.jp",16],["careers360.com",17],["blog.csdn.net",[18,34]],["map.baidu.com",19],["bilkom.pl",20],["nftnow.com",21],["cian.ru",22],["disntr.com",[23,24]],["ampmedia.jp",25],["mrt.od.ua",26],["customfw.xyz",27],["intellinews.com",28],["pfister.ch",29],["1-2-3.tv",30],["academicearth.org",31],["lkslodz.pl",32],["getmyuni.com",33],["gettinenglish.com",35],["texacopolska.pl",36],["mylivewallpapers.com",37],["ebth.com",38],["findamasters.com",39],["tripoto.com",40],["horizonhobby.de",41],["ef.com",42],["uniqlo.com",43],["benguturk.com",44],["cifrus.ru",45],["kmplayer.com",46],["oogarden.de",47],["tvfindr.com",48],["adacreisen.de",49],["dropbox.com",50],["delamar.de",51],["lebensmittel-sonderposten.de",52],["linkradquadrat.de",52],["forward.com",53],["abload.de",54],["puntocellulare.it",55],["hekatron-brandschutz.de",56],["prowebscraper.com",57],["moneyvox.fr",58],["kaiser-elektro.de",59],["thedailybeast.com",60],["careerkarma.com",61],["ruggable.com",62],["chocolatey.org",63],["m.qoo10.jp",64],["girafa.com.br",65],["warnerbrosgames.com",66],["community.fortinet.com",67],["onlinepngtools.com",68],["onlinetools.com",68],["expert.it",69],["aframe.oscars.org",70],["mymuesli.com",72],["onlinegibdd.ru",73],["auxologico.it",74],["onclinic.ua",75],["geizdental.de",76],["unisender.com",77],["pbs.org",[78,79]],["profgalloway.com",80],["bbbl.dev",81],["pbteen.com",82],["potterybarn.com",83],["potterybarnkids.com",84],["westelm.com",85],["williams-sonoma.com",86],["porsche-design.com",87],["ordnungsliebe.net",88],["gymglish.com",89],["shoppingpl.com",90],["mozo.com.au",91],["parfois.com",92],["wiseadvice-it.ru",93],["nextgov.com",94],["thebulletin.org",95],["quto.ru",96],["freedomplatform.tv",97],["marianne.net",98],["lampenwelt.de",99],["fahrradmanufaktur.de",100],["techonthenet.com",101],["tumblr.com",102],["scitechdaily.com",103]]);

const entitiesMap = new Map([["vivre",7],["zendesk",71]]);

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
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
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
    const cookieBefore = getCookieFn(name);
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

    if ( options.reload && getCookieFn(name) === value ) {
        window.location.reload();
    }
}

function getCookieFn(
    name = ''
) {
    for ( const s of document.cookie.split(/\s*;\s*/) ) {
        const pos = s.indexOf('=');
        if ( pos === -1 ) { continue; }
        if ( s.slice(0, pos) !== name ) { continue; }
        return s.slice(pos+1).trim();
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
