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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["_blocker_hidden","1"],["dismissCheck","1"],["fblb","1"],["cookies_newsletter","1"],["patch_top_tooltip_next_door_dismissed","true"],["patch_email_mobile_modal_dismissed","true"],["bulletin_new_31","1"],["avPopupCookie","1"],["DictPopShownToday","true"],["notification-newsletter-closed","true"],["pum-14592","true"],["modal","true"],["closed-black-banner","1"],["consultation_modal_shown","1"],["courses_quiz_completed","1"],["discover-disable-sitewide-article","true"],["showPopUp","true"],["isShowSociety","1"],["user_sign_up_modal_closed","true"],["common_sign_up_show","1"],["popShowed10s","yes"],["showLoginPopup","1"],["hide_promo_popup","true"],["nft-now-modal","1"],["do_not_show_mortgage_banner","1"],["divioverlay240311","true"],["divioverlay240768","true"],["amp_modal","1"],["pum-2309","true"],["support-ukraine","true"],["viewedOuibounceModal","true"],["acquisitionModalShowed","1"],["pageHint","1"],["intModalViewed","true"],["modal_rss","true"],["gmu_leadform","1"],["unlogin_scroll_step","1"],["cp_id_85057","true"],["movie-displayed","true"],["njt-close-notibar","true"],["signup_modal","true"],["signup_win_closed","true"],["__TRAVEL_QUIZ__","true"],["emailSignupCookie","true"],["efblog__hide_subscribe_popup","true"],["newsletteroverlayopened","true"],["popup_kapali","true"],["subbanner","true"],["home-layer","false"],["OogCCO","1"],["ck_glue_visit","1"],["exit_intent","true"],["seen-sl-signup-modal","true"],["wp-dl-nrxt","1"],["mag-newsletterbox","1"],["_pc_signed_up","true"],["nosi","1"],["ilike","1"],["disableNewsletterOverlay","1"],["inc_optin_popup_long_hidden-1_417","1"],["mvpopnews","1"],["NewsletterPopup","1"],["_pc_annoyed","1"],["_Wmpci_Popup","true"],["modalShown","1"],["chocolatey_hide_packages_disclaimer","true"],["mobile_main_half_popup","Y"],["saiupagina","true"],["SignupDismissed","1"],["forti.engagement_popup_banner","1"],["discountPrice","true"],["__expert.modal.campaign.welcome2023","true"],["AframeNewsletter","true"],["exitModal","true"],["newsletter-popup-shown","true"],["_showed_subscribeModal_og","1"],["neverNewsletterPopup","1"],["widget_show","1"],["newsletter","1"],["digest_sub_cookie_4","true"],["NewsLetterDismissed","true"],["modalShown","true"],["closedsticky","true"],["skipped_subsctiption_popup","true"],["ad_sess_pt_email","true"],["ad_sess_pb_email","true"],["ad_sess_pk_email","true"],["ad_sess_we_email","true"],["ad_sess_ws_email","true"],["NewsletterPopupEUROPA","true"],["pum-32511","true"],["a9-beforeyouleave-popin","1"],["likePopupShown","1"],["newsletter_popup_closed","true"],["newsletter_shown","false"],["conversion_action_done","true"],["views-since-welcome-ad","3"],["_pc_NL1","true"],["subscription_was_close","true"],["lr_subscribed","true"],["mrn_nl_abo","1"],["newsletterDisplayed","1"],["newsletterBox","1"],["sabl","1"],["logged_in","1","","reload","1"],["ezgwcc","1"]];

const hostnamesMap = new Map([["rambler.ua",0],["rambler.ru",0],["dailyadvertiser.com.au",1],["canberratimes.com.au",1],["thecourier.com.au",1],["portnews.com.au",1],["illawarramercury.com.au",1],["dailyliberal.com.au",1],["centralwesterndaily.com.au",1],["newcastleherald.com.au",1],["examiner.com.au",1],["bendigoadvertiser.com.au",1],["vw-passat.pl",2],["poradnikogrodniczy.pl",3],["patch.com",[4,5]],["boylove1.mobi",[6,7]],["lingq.com",8],["gatonplayseries.com",10],["imerodromos.gr",11],["flowwow.com",12],["netology.ru",13],["musescore.com",14],["helloyishi.com.tw",15],["reverseimagesearch.com",16],["kikinote.net",17],["litalico-c.jp",18],["careers360.com",19],["blog.csdn.net",[20,36]],["map.baidu.com",21],["bilkom.pl",22],["nftnow.com",23],["cian.ru",24],["disntr.com",[25,26]],["ampmedia.jp",27],["mrt.od.ua",28],["customfw.xyz",29],["intellinews.com",30],["pfister.ch",31],["1-2-3.tv",32],["academicearth.org",33],["lkslodz.pl",34],["getmyuni.com",35],["gettinenglish.com",37],["texacopolska.pl",38],["mylivewallpapers.com",39],["ebth.com",40],["findamasters.com",41],["tripoto.com",42],["horizonhobby.de",43],["ef.com",44],["uniqlo.com",45],["benguturk.com",46],["cifrus.ru",47],["kmplayer.com",48],["oogarden.de",49],["tvfindr.com",50],["adacreisen.de",51],["dropbox.com",52],["delamar.de",53],["lebensmittel-sonderposten.de",54],["linkradquadrat.de",54],["forward.com",55],["abload.de",56],["puntocellulare.it",57],["hekatron-brandschutz.de",58],["prowebscraper.com",59],["moneyvox.fr",60],["kaiser-elektro.de",61],["thedailybeast.com",62],["careerkarma.com",63],["ruggable.com",64],["chocolatey.org",65],["m.qoo10.jp",66],["girafa.com.br",67],["warnerbrosgames.com",68],["community.fortinet.com",69],["onlinepngtools.com",70],["onlinetools.com",70],["expert.it",71],["aframe.oscars.org",72],["mymuesli.com",74],["onlinegibdd.ru",75],["auxologico.it",76],["onclinic.ua",77],["geizdental.de",78],["unisender.com",79],["pbs.org",[80,81]],["profgalloway.com",82],["bbbl.dev",83],["pbteen.com",84],["potterybarn.com",85],["potterybarnkids.com",86],["westelm.com",87],["williams-sonoma.com",88],["porsche-design.com",89],["ordnungsliebe.net",90],["gymglish.com",91],["shoppingpl.com",92],["mozo.com.au",93],["parfois.com",94],["wiseadvice-it.ru",95],["nextgov.com",96],["thebulletin.org",97],["quto.ru",98],["freedomplatform.tv",99],["marianne.net",100],["lampenwelt.de",101],["fahrradmanufaktur.de",102],["techonthenet.com",103],["tumblr.com",104],["scitechdaily.com",105]]);

const entitiesMap = new Map([["vivre",9],["zendesk",73]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setCookie(
    name = '',
    value = '',
    path = ''
) {
    if ( name === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-cookie', name, value, path);
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

    const done = setCookieFn(
        false,
        name,
        value,
        '',
        path,
        safeSelf().getExtraArgs(Array.from(arguments), 3)
    );

    if ( done ) {
        safe.uboLog(logPrefix, 'Done');
    }
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

    const done = getCookieFn(name) === value;
    if ( done && options.reload ) {
        window.location.reload();
    }

    return done;
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
