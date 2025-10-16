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

// fin-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[2852,"#atwAdFrame"],[1349,"#keskimainos"],[678,"#mainokset"],[229,"#mainokset_oikea"],[1451,"#mainokset_vasen"],[2586,"#mainokset_yla"],[3570,"#mainos"],[2981,"#mainosbanneri"],[4038,"#mainosbannerit"],[2888,"#mainoskaruselli"],[2761,"#mainoslaatikko"],[2806,"#mainospaikka"],[2618,"#mainostila"],[2267,"#natiivit"],[1679,"#parade-container"],[3758,"#sponsori"],[3779,"#sponsorit"],[651,"#yhteistyokaruselli"],[556,"#yhteistyokumppanit"],[867,"#yhteistyossa"],[118,"#ylamainokset"],[142,"#ylamainos"],[1188,".adbox_content"],[1778,".card--native"],[2720,".dfpBoxBottom"],[3148,".dfpListNativeBanner"],[882,".diks-display-ad"],[3246,".diks-native-ad"],[3041,".etuovi-embed"],[3368,".keskimainos"],[2347,".mainokset"],[3208,".mainokset_oikea"],[3014,".mainokset_vasen"],[3543,".mainokset_yla"],[799,".mainos"],[808,".mainosbanneri"],[3979,".mainosbannerit"],[549,".mainoskaruselli"],[1028,".mainoslaatikko"],[1948,".mainosnosto"],[27,".mainospaikka"],[183,".mainostila"],[1731,".sponsori"],[1166,".sponsorit"],[690,".tdt-desktop-ad"],[1171,".tdt-manager-element"],[3984,".tdt-minilanding-button"],[521,".tdt-mobile-ad"],[2534,".yhteistyokaruselli"],[2625,".yhteistyokumppanit"],[2702,".yhteistyossa"],[1691,".ylamainokset"],[1859,".ylamainos"],[2409,"div#commercial-carousel"]];
const genericExceptionSieve = [2947,2347,799,3570,1225,2819,3407];
const genericExceptionMap = [["murha.info",".adsbygoogle"],["hs.fi",".mainokset\n.mainos"],["sokos.fi",".mainokset"],["tilannehuone.fi",".mainos"],["pienimatkaopas.com","#mainos"],["netticaravan.fi","article.ad"],["www.seurakuntalainen.fi","#CookieBanner"],["srk.fi","#CookielawBanner"]];

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
