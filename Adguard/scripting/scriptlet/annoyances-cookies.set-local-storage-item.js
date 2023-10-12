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

const argsList = [["201805-policy|accepted","1"],["kick_cookie_accepted","true"],["cookie_consent","false"],["cookieConsent","1"],["enableCookieBanner","false"],["cookie-consent-level","1"],["byFoodCookiePolicyRequire","false"],["ascookie--decision","true"],["isAcceptCookiesNew","true"],["contao-privacy-center.hidden","1"],["otherCookie","true"],["saveCookie","true"],["hide-cookie-permission-1","true"],["userAcceptsCookies","1"],["grnk-cookies-accepted","true"],["cookieConsent","true"],["acceptCookies","no"],["hasAcceptedGdpr","true"],["cookies-accept","true"],["load-scripts-v2","2"],["acceptsAnalyticsCookies","false"],["acceptsNecessaryCookies","true"],["display_cookie_modal","false"],["pg-accept-cookies","true"],["__EOBUWIE__consents_accepted","true","","reload","1"],["analytics","false"],["FP_cookiesAccepted","true"],["VISITED_0","true"],["OPTIONAL_COOKIES_ACCEPTED_0","true"]];

const hostnamesMap = new Map([["betterprogramming.pub",0],["medium.com",0],["500ish.com",0],["gitconnected.com",0],["bettermarketing.pub",0],["diylifetech.com",0],["thebolditalic.com",0],["writingcooperative.com",0],["fanfare.pub",0],["betterhumans.pub",0],["kick.com",1],["happiful.com",2],["sneakerfreaker.com",3],["walmart.ca",4],["flyingblue.com",5],["byfood.com",6],["andsafe.de",7],["edostavka.by",8],["emall.by",8],["eezy.nrw",9],["bahnland-bayern.de",9],["evropochta.by",[10,11]],["hitado.de",12],["inselberlin.de",13],["gronkh.tv",14],["parrotsec.org",15],["adfilteringdevsummit.com",16],["learngerman.dw.com",17],["gostanford.com",18],["namensetiketten.de",19],["drafthound.com",[20,21]],["wokularach.pl",22],["bidup.amtrak.com",23],["eschuhe.de",24],["revanced.app",25],["flyingpapers.com",26],["beta.character.ai",[27,28]]]);

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
