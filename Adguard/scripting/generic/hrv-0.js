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

// hrv-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[12989194,".fold_home__pasica_banner:not(html, body, :empty)"],[15451211,"#googleglava"],[10680956,"#googledesnovertikalna"],[5855077,"#googleispodteksta"],[15445665,"#googledolje"],[10652823,".reklama-na-indexu:not(html, body, :empty)"],[6879724,".homepage-top-google-banner:not(html, body, :empty)"],[13987257,".js-gpt-ad:not(html, body, :empty)"],[2689874,".banner-izdvojeno:not(html, body, :empty)"],[8608347,".elementor-widget-smartmag-codes:not(html, body, :empty)"],[14656153,".banner__placeholder:not(html, body, :empty)"],[1377122,".cxenseignore:not(html, body, :empty, [id])"],[13371521,"div.lesnina_widget"],[751037,".td-a-ad:not(html, body, :empty)"],[3276505,".adaplace:not(html, body, :empty)"],[12768321,".gpt-ad-banner:not(html, body, :empty)"]];
const genericExceptionSieve = [10956523];
const genericExceptionMap = [["radiosarajevo.ba",".iAdserver"]];

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
