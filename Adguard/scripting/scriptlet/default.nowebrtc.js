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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_noWebrtc = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [[]];

const hostnamesMap = new Map([["123movies.net",0],["bonstreams.net",0],["convertinmp4.com",0],["crictime.com",0],["ddlvalley.me",0],["fluvore.com",0],["mac-torrents.com",0],["nflstream.io",0],["oceanoffgames.com",0],["pastehere.xyz",0],["sawlive.tv",0],["skidrowcrack.com",0],["toros.co",0],["uptobox.com",0],["torrentfunk.com",0],["dxb.to",0],["adyou.me",0],["srt.am",0],["sintelevisor.com",0],["tvpor-internet.com",0],["1fichier.com",0],["planetfools.com",0],["cpmlink.net",0],["short.pe",0],["185.153.231.222",0],["hindimean.com",0],["wizhdsports.fi",0],["peliculasmx.net",0],["animeid.tv",0],["coinfaucet.io",0],["freecardano.com",0],["freenem.com",0],["gtaall.com",0],["uii.io",0],["mimaletamusical.blogspot.com",0],["xrivonet.info",0],["gounlimited.to",0],["ebookdz.com",0],["onhockey.tv",0],["web.livecricket.is",0],["dualpaste.net",0],["startseite.to",0],["kinoger.to",0],["blizzboygames.net",0],["telepisodes.org",0],["software-on.com",0],["sharemods.com",0],["modsbase.com",0],["cyfostreams.com",0],["rlslog.net",0],["f1livegp.net",0],["zimabdko.com",0],["aii.sh",0],["buffstreamz.com",0],["vupload.com",0],["seriesytv.tv",0],["owllink.net",0],["gaybeeg.info",0],["ex-foary.com",0],["pstream.net",0],["hentaisaturn.com",0],["italydownload.com",0],["leggenditalia.com",0],["oasidownload.com",0],["semprehawk.com",0],["sms-anonyme.net",0],["iulive.blogspot.com",0],["embedstream.me",0],["eroticmoviesonline.me",0],["france.tv",0],["bilibili.com",0],["dandanzan.top",0],["v.qq.com",0]]);

const entitiesMap = new Map([["2ddl",0],["allitebooks",0],["dramamate",0],["eztv",0],["kiss-anime",0],["letmewatchthis",0],["mkvcage",0],["yts",0],["zooqle",0],["streanplay",0],["torlock",0],["torlock2",0],["watchseries.unblocked",0],["ouo",0],["watch-series",0],["watchseries",0],["mejortorrent",0],["mejortorrento",0],["mejortorrents",0],["mejortorrents1",0],["mejortorrentt",0],["daddylive",0],["m4ufree",0],["streamm4u",0],["mangaku",0],["ganool",0],["subtorrents",0],["subtorrents1",0],["pirateproxy",0],["hdvid",0],["onvid",0],["ovid",0],["vidhd",0],["starmusiq",0],["tamilmv",0],["mywatchseries",0],["yesmovies",0],["mycoolmoviez",0],["watchtvseries",0],["animekb",0],["kstreaming",0],["streameast",0],["thestreameast",0],["glodls",0],["thevidhd",0],["okanime",0],["shrink",0],["kinoz",0],["topstreams",0],["1337x",0],["x1337x",0],["torrentdownloads",0],["racaty",0],["livehere",0],["nunuyy",0]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function noWebrtc() {
    var rtcName = window.RTCPeerConnection ? 'RTCPeerConnection' : (
        window.webkitRTCPeerConnection ? 'webkitRTCPeerConnection' : ''
    );
    if ( rtcName === '' ) { return; }
    var log = console.log.bind(console);
    var pc = function(cfg) {
        log('Document tried to create an RTCPeerConnection: %o', cfg);
    };
    const noop = function() {
    };
    pc.prototype = {
        close: noop,
        createDataChannel: noop,
        createOffer: noop,
        setRemoteDescription: noop,
        toString: function() {
            return '[object RTCPeerConnection]';
        }
    };
    var z = window[rtcName];
    window[rtcName] = pc.bind(window);
    if ( z.prototype ) {
        z.prototype.createDataChannel = function() {
            return {
                close: function() {},
                send: function() {}
            };
        }.bind(null);
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
    try { noWebrtc(...argsList[i]); }
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_noWebrtc();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_noWebrtc = cloneInto([
            [ '(', uBOL_noWebrtc.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_noWebrtc);
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
    delete page.uBOL_noWebrtc;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
