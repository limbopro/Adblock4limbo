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

// hun-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[2408,".ad__main"],[845,".adblokk"],[1174,".cikk_reklam"],[2724,".cikk-reklam"],[3732,".cikkreklam"],[1616,".google_hirdetes"],[2819,".google_hirdetesek"],[482,".google-hirdetes"],[2353,".google-hirdetesek"],[3294,".googlehirdetes"],[2277,".googlehirdetesek"],[2440,".hirdetes_box"],[4044,".hirdetes_container,\n.hirdetes-container"],[805,".hirdetes_doboz"],[2170,".hirdetes-box"],[3991,".hirdetes-doboz"],[2911,".hirdetes-linkek"],[2543,".hirdetesek_box"],[2643,".hirdetesek_container,\n.hirdetesek-container"],[830,".hirdetesek_doboz"],[2141,".hirdetesek-box"],[1804,".hirdetesek-doboz"],[1101,".optimonk-container"],[521,".optimonk-iframe-container"],[3740,".optimonk-middle"],[2295,".reklam-doboz"],[3486,".reklamok"],[3584,"#adblokk"],[3640,"#cemp_doboz"],[1060,"#cenmg"],[187,"#cikk_reklam"],[1609,"#cikk-reklam"],[345,"#cikkreklam"],[2128,"#etarget"],[4029,"#google_hirdetes"],[3630,"#google_hirdetesek"],[3087,"#google-hirdetes"],[3036,"#google-hirdetesek"],[2963,"#googlehirdetes"],[904,"#googlehirdetesek"],[2725,"#hirdetes_box"],[1441,"#hirdetes_container,\n#hirdetes-container"],[2152,"#hirdetes_doboz"],[1280,"#hirdetes_linkek"],[2199,"#hirdetes-box"],[986,"#hirdetes-doboz"],[1714,"#hirdetes-linkek"],[1762,"#hirdetesek_box"],[414,"#hirdetesek_container,\n#hirdetesek-container"],[1235,"#hirdetesek_doboz"],[3088,"#hirdetesek-box"],[2273,"#hirdetesek-doboz"],[529,"#optimonk-iframe-container-campaign-12"],[3761,"#optimonk-overlay-campaign-12"],[3482,"#reklam-doboz"],[1907,"#reklamok"]];
const genericExceptionSieve = [2711,199];
const genericExceptionMap = [["videa.hu",".adBanner"],["videaloop.hu",".adBanner"],["greendex.hu",".heateor_sss_sharing_container"]];

if ( genericSelectorMap ) {
    const map = self.genericSelectorMap =
        self.genericSelectorMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericSelectorMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before},\n${entry[1]}`);
            }
        }
    } else {
        self.genericSelectorMap = new Map(genericSelectorMap);
    }
    genericSelectorMap.length = 0;
}

if ( genericExceptionSieve ) {
    const hashes = self.genericExceptionSieve =
        self.genericExceptionSieve || new Set();
    if ( hashes.size !== 0 ) {
        for ( const hash of genericExceptionSieve ) {
            hashes.add(hash);
        }
    } else {
        self.genericExceptionSieve = new Set(genericExceptionSieve);
    }
    genericExceptionSieve.length = 0;
}

if ( genericExceptionMap ) {
    const map = self.genericExceptionMap =
        self.genericExceptionMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericExceptionMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before}\n${entry[1]}`);
            }
        }
    } else {
        self.genericExceptionMap = new Map(genericExceptionMap);
    }
    genericExceptionMap.length = 0;
}

/******************************************************************************/

})();

/******************************************************************************/
