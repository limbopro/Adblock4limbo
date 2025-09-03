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

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_noWebrtc() {

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

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [[]];
const hostnamesMap = new Map([["2ddl.*",0],["allitebooks.*",0],["bonstreams.net",0],["convertinmp4.com",0],["ddlvalley.me",0],["dramamate.*",0],["eztv.*",0],["fluvore.com",0],["kiss-anime.*",0],["letmewatchthis.*",0],["mkvcage.*",0],["oceanoffgames.com",0],["skidrowcrack.com",0],["uptobox.com",0],["yts.*",0],["zooqle.*",0],["torlock.*",0],["torlock2.*",0],["srt.am",0],["watchseries.unblocked.*",0],["ouo.*",0],["watch-series.*",0],["watchseries.*",0],["1fichier.com",0],["planetfools.com",0],["cpmlink.net",0],["short.pe",0],["mejortorrent.*",0],["mejortorrento.*",0],["mejortorrents.*",0],["mejortorrents1.*",0],["mejortorrentt.*",0],["wizhdsports.fi",0],["peliculasmx.net",0],["animeid.tv",0],["m4ufree.*",0],["streamm4u.*",0],["coinfaucet.io",0],["freecardano.com",0],["freenem.com",0],["ganool.*",0],["gtaall.com",0],["subtorrents.*",0],["subtorrents1.*",0],["uii.io",0],["mimaletamusical.blogspot.com",0],["xrivonet.info",0],["pirateproxy.*",0],["onhockey.tv",0],["web.livecricket.is",0],["hdvid.*",0],["onvid.*",0],["ovid.*",0],["vidhd.*",0],["starmusiq.*",0],["tamilmv.*",0],["mywatchseries.*",0],["mycoolmoviez.*",0],["watchtvseries.*",0],["startseite.to",0],["kinoger.to",0],["animekb.*",0],["kstreaming.*",0],["blizzboygames.net",0],["software-on.com",0],["sharemods.com",0],["modsbase.com",0],["streameast.*",0],["thestreameast.*",0],["glodls.*",0],["thevidhd.*",0],["okanime.*",0],["shrink.*",0],["f1livegp.net",0],["zimabdko.com",0],["kinoz.*",0],["aii.sh",0],["buffstreamz.com",0],["topstreams.*",0],["ex-foary.com",0],["yesmovies.*",0],["hentaisaturn.com",0],["italydownload.com",0],["oasidownload.com",0],["sms-anonyme.net",0],["racaty.*",0],["iulive.blogspot.com",0],["livehere.*",0],["eroticmoviesonline.me",0],["1337x.*",0],["x1337x.*",0],["1337x.ninjaproxy1.com",0],["torrentdownloads.*",0],["mangaku.*",0],["daddylive.*",0],["bilibili.com",0],["dandanzan.top",0],["v.qq.com",0]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { noWebrtc(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
