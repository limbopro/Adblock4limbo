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
const uBOL_setLocalStorageItem = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["sports:views:anti-adblock:shower","null"],["adsok","true"],["ignoring_adblock","1"],["adbViews","0"],["altses","false"],["firstFirebaseModalShow","true"],["emailLightBox","false"],["SIGN_UP_BONUS_MODAL_SHOWN","true"],["exit_attempt","true"],["barchart.bcFreeAccountModal","true"],["barchart.bcIsEvenLoggingModal","true"],["ONBOARDING_MODAL_DISPLAYED","true"],["firstEnter","false"],["showModal","true"],["dontShow","true"],["video_muted","true"],["music-announce-showed","true"],["msgads","true"],["entd:newsletter-layer","emptyObj"],["hasSeenAddToChromeNudge","1"],["announcement","1"],["IsModalShown","true"],["hasShownWelcome","true"],["sub_telegram","true"],["hide-airtime-blue-header","true"],["storeToolTipSeen","1"],["__iberion__publisherPromptSeen","3"],["alreadySawHomepageModal","true"],["has_popout_notification_dialog_recently","1"],["notifModal","true"],["homeExpressEmailSignupExitIntentModal","1"],["Visitundefined","1"],["MCPopUp","true"],["detailedview-clicks","5"],["isNotificationsReleaseModalVisible","false"],["newsletterAdvise","1"],["newsletter-flyout","1"],["lp.message.wall.active","$remove$"]];

const hostnamesMap = new Map([["sports.ru",0],["craftpip.github.io",1],["luscious.net",2],["duellinksmeta.com",3],["masterduelmeta.com",3],["makemytrip.com",4],["ensonhaber.com",5],["1800petmeds.com",6],["emusic.com",7],["znanierussia.ru",8],["barchart.com",[9,10]],["calendar.com",11],["map.baidu.com",12],["freevpnplanet.com",13],["imgcreator.zmo.ai",14],["masterclass.com",15],["coub.com",16],["empire-streaming.co",17],["babista.de",18],["you.com",19],["smartnator.com",20],["imovelguide.com.br",21],["thirdweb.com",22],["series.az",23],["peervideo.club",24],["peterengland.com",25],["biznesinfo.pl",26],["rolnikinfo.pl",26],["wawainfo.pl",26],["wtv.pl",26],["turysci.pl",26],["pacjenci.pl",26],["swiatsportu.pl",26],["swiatgwiazd.pl",26],["swiatzwierzat.pl",26],["techgame.pl",26],["domekiogrodek.pl",26],["goniec.pl",26],["zdrogi.pl",26],["diffchecker.com",27],["mildom.com",28],["afkgaming.com",29],["instacart.ca",30],["instacart.com",30],["bonprix.com.br",31],["mercatoemcasa.com.br",32],["context.reverso.net",33],["otodom.pl",34],["dgbrechtsschutz.de",35],["moses-verlag.de",36],["lapresse.ca",37]]);

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
