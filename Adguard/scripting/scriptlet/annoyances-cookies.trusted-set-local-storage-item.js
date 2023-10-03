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
const uBOL_trustedSetLocalStorageItem = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["CMPList","$currentDate$"],["cv:cookiesAllowed","{\"mandatoryCookies\":true,\"statsCookies\":false,\"marketingCookies\":false}"],["elementor","{\"__expiration\":{},\"pageViews\":1,\"popup_1276_times\":1}"],["mol.ads.cmp.tcf.cache","{\"getTCData\":{\"cmpId\":27,\"cmpVersion\":3,\"gdprApplies\":true,\"tcfPolicyVersion\":2,\"tcString\":\"CPyz5QAPyz5QAAbADCENC6CgAAAAAAAAAAwIAAASjAJINW4gCLMscGaQEIoEAIgjCQggUAAFAILRAQAODgp2VgE6MIkAAAUARABAhwAQAQCAAASABCAAJAAwQAAAiAQAAAAQCAAAMCAILACgAAAABANAhRCgAECQAyIAIpTAgKgSCAFsKAAADJCQCAKgMAKARGgEACIIARGAAACwMAgBICFggABMQbBAAMACAESoBoCTEwBACDQFgBkADLAGzAPsA_ACAAEFAIwASYAp8BaAFpAOqAfIBDoCJgEiAKRAXIAyMBk4DlAI_gSKEQEwBkADLAGzAPsA_ACAAEYAJMAU8A6oB8gEOgJEAUiAuQBkYDJwHKAR_AkU.f_gAAagAAAAA\",\"eventStatus\":\"useractioncomplete\",\"cmpStatus\":\"loaded\",\"isServiceSpecific\":true,\"useNonStandardStacks\":false,\"publisherCC\":\"GB\",\"purposeOneTreatment\":false,\"addtlConsent\":\"1~\",\"acmVersion\":2,\"molGvlVersion\":\"186.gb.web\",\"nrvString\":\"1~\",\"nrvVersion\":1,\"repromptVersion\":5},\"getStoredRepromptVersion\":5,\"hasUserConsentedToAll\":false,\"hasUserDissentedToAll\":true,\"getConsentDegree\":\"no\",\"getValidTCData\":{\"cmpId\":27,\"cmpVersion\":3,\"gdprApplies\":true,\"tcfPolicyVersion\":2,\"tcString\":\"CPyz5QAPyz5QAAbADCENC6CgAAAAAAAAAAwIAAASjAJINW4gCLMscGaQEIoEAIgjCQggUAAFAILRAQAODgp2VgE6MIkAAAUARABAhwAQAQCAAASABCAAJAAwQAAAiAQAAAAQCAAAMCAILACgAAAABANAhRCgAECQAyIAIpTAgKgSCAFsKAAADJCQCAKgMAKARGgEACIIARGAAACwMAgBICFggABMQbBAAMACAESoBoCTEwBACDQFgBkADLAGzAPsA_ACAAEFAIwASYAp8BaAFpAOqAfIBDoCJgEiAKRAXIAyMBk4DlAI_gSKEQEwBkADLAGzAPsA_ACAAEYAJMAU8A6oB8gEOgJEAUiAuQBkYDJwHKAR_AkU.f_gAAagAAAAA\",\"listenerId\":1,\"eventStatus\":\"useractioncomplete\",\"cmpStatus\":\"loaded\",\"isServiceSpecific\":true,\"useNonStandardStacks\":false,\"publisherCC\":\"GB\",\"purposeOneTreatment\":false,\"addtlConsent\":\"1~\",\"acmVersion\":2,\"molGvlVersion\":\"186.gb.web\",\"nrvString\":\"1~\",\"nrvVersion\":1,\"repromptVersion\":5}}"],["cookieConsent","{\"spem\":1}"],["didomi_token","eyJ1c2VyX2lkIjoiIiwiY3JlYXRlZCI6IjIwMjMtMDctMDVUMTY6MTI6MzcuMjA5WiIsInVwZGF0ZWQiOiIyMDIzLTA3LTA1VDE2OjEyOjM3LjIwOVoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsidHdpdHRlciIsImdvb2dsZSIsImM6YmF0Y2giLCJjOm5vbmxpIiwiYzp0eXBlZm9ybSJdfSwidmVyc2lvbiI6MiwiYWMiOiIifQ=="],["cookieSettings","{\"technical\":true,\"bugsnag\":false,\"adjust\":false}"],["appconsent","{\"consents\":{},\"i18n\":{},\"ui\":{},\"vendorlist\":{},\"CMP_VERSION\":10,\"xchange\":{},\"events\":[],\"client\":{\"externalIds\":{},\"floatingPurposes\":[{\"id\":\"\",\"version\":0}],\"floatingPurposesConsent\":[{\"extra_id\":\"\",\"type\":0,\"given_at\":null,\"version\":0}]},\"consentstring\":\"CPzBFAAPzBFAAACAKAFRDUCoAAAAAH_AAAqIIzNF_H_dSSNj8X5_Yft0eY1P5dAz7uQxBhaJg6QFyBLEsJwXwmAIIEnqAKgKGBIEskJAIQBlCAHABUEAYIEBISGMAEAQIQAAJiAEEEERAmJICBBJG4AgEAIQglgCABQAgAsESFsoQMhAAIAABUJAAAgggIABAgAIBDAAQAAAAAAAAgAAEAAAAAAAAAAEABBHYAkw1LiABsiAkJpAwigRAjCIICKBQAAACQMEAACQIAlBGASgwAQAgRQAEBAAAAFEAAAAAAIAEIAAgACBAABAIBAAAABAAAAAQAAAgAIAQAAAABADAEAABAAAAAAACAECEIAAIACAgAAgAEAIAAAAAAIBAIBAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAgAAAA.YAAAAAAAAAAA\",\"consentstringUpdatedAt\":{}}"],["euconsent-v2","CPzBFAAPzBFAAAHABBENDYCgAAAAAAAAAAAAJNFB_W_fD2Ni-35_avt0aQ1dwVC_6-UxDgKZB4kFyRpEMKwX3mAKKFXgpKAKGBYEsUZAIQBlHCHEDECwQIERLzHMIAEQJQIAJqJEgFERAkJQCBpZHwMACAIQgHRWATFIiB-HaBroyfhEMaC0AUBQ4AonhMTPAoSdwXCkg7uaHIgIImgFASBAIoYMEEEEBlTkFABAAAkAAABJSADAAEQUCUAGAAIgoDoAMAARBQIQAYAAiCgEgAwABEFARABgACIKAyADAAEQUA0AGAAIgoCoAMAARBQA.YAAAAAAAAAAA"]];

const hostnamesMap = new Map([["express.co.uk",0],["carvertical.com",1],["easyfind.ch",2],["dailymail.co.uk",3],["aamulehti.fi",4],["etlehti.fi",4],["gloria.fi",4],["hs.fi",4],["hyvaterveys.fi",4],["is.fi",4],["jamsanseutu.fi",4],["janakkalansanomat.fi",4],["kankaanpaanseutu.fi",4],["kmvlehti.fi",4],["kodinkuvalehti.fi",4],["merikarvialehti.fi",4],["nokianuutiset.fi",4],["rannikkoseutu.fi",4],["satakunnankansa.fi",4],["soppa365.fi",4],["suurkeuruu.fi",4],["sydansatakunta.fi",4],["tyrvaansanomat.fi",4],["valkeakoskensanomat.fi",4],["vauva.fi",4],["rfi.fr",5],["app.solit-kapital.de",6],["lachainemeteo.com",7],["ledauphine.com",8]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedSetLocalStorageItem(key = '', value = '') {
    setLocalStorageItemCore('local', true, key, value);
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
    try { trustedSetLocalStorageItem(...argsList[i]); }
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
    return uBOL_trustedSetLocalStorageItem();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedSetLocalStorageItem = cloneInto([
            [ '(', uBOL_trustedSetLocalStorageItem.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedSetLocalStorageItem);
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
    delete page.uBOL_trustedSetLocalStorageItem;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
