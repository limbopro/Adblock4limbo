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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setLocalStorageItem = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["kick_cookie_accepted","true"],["cookieConsent","1"],["cookie-consent-level","1"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["contao-privacy-center.hidden","1"],["otherCookie","true"],["saveCookie","true"],["hide-cookie-permission-1","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["cookieConsent","true"],["acceptCookies","no"],["hasAcceptedGdpr","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["analytics","false"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"]];

const hostnamesMap = new Map([["kick.com",0],["sneakerfreaker.com",1],["flyingblue.com",2],["byfood.com",3],["andsafe.de",4],["edostavka.by",5],["emall.by",5],["eezy.nrw",6],["bahnland-bayern.de",6],["evropochta.by",[7,8]],["hitado.de",9],["inselberlin.de",10],["gronkh.tv",11],["parrotsec.org",12],["adfilteringdevsummit.com",13],["learngerman.dw.com",14],["gostanford.com",15],["namensetiketten.de",16],["drafthound.com",[17,18]],["wokularach.pl",19],["bidup.amtrak.com",20],["eschuhe.de",21],["revanced.app",22],["flyingpapers.com",23],["beta.character.ai",[24,25]]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setLocalStorageItem(key = '', value = '') {
    setLocalStorageItemCore('local', false, key, value);
}

function setLocalStorageItemCore(
    which = 'local',
    trusted = false,
    key = '',
    value = '',
) {
    if ( key === '' ) { return; }

    const trustedValues = [
        '',
        'undefined', 'null',
        'false', 'true',
        'yes', 'no',
        '{}', '[]', '""',
        '$remove$',
    ];

    if ( trusted ) {
        if ( value === '$now$' ) {
            value = Date.now();
        } else if ( value === '$currentDate$' ) {
            value = `${Date()}`;
        } else if ( value === '$currentISODate$' ) {
            value = (new Date()).toISOString();
        }
    } else {
        if ( trustedValues.includes(value.toLowerCase()) === false ) {
            if ( /^\d+$/.test(value) === false ) { return; }
            value = parseInt(value, 10);
            if ( value > 32767 ) { return; }
        }
    }

    try {
        const storage = `${which}Storage`;
        if ( value === '$remove$' ) {
            self[storage].removeItem(key);
        } else {
            self[storage].setItem(key, `${value}`);
        }
    } catch(ex) {
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
    try { setLocalStorageItem(...argsList[i]); }
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
    return uBOL_setLocalStorageItem();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setLocalStorageItem = cloneInto([
            [ '(', uBOL_setLocalStorageItem.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setLocalStorageItem);
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
    delete page.uBOL_setLocalStorageItem;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
