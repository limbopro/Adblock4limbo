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

const genericSelectorMap = [[778,".fold_home__pasica_banner:not(html, body, :empty)"],[1099,"#googleglava"],[2684,"#googledesnovertikalna"],[1893,"#googleispodteksta"],[3745,"#googledolje"],[3223,".reklama-na-indexu:not(html, body, :empty)"],[2540,".homepage-top-google-banner:not(html, body, :empty)"],[3513,".js-gpt-ad:not(html, body, :empty)"],[2898,".banner-izdvojeno:not(html, body, :empty)"],[2651,".elementor-widget-smartmag-codes:not(html, body, :empty)"],[665,".banner__placeholder:not(html, body, :empty)"],[866,".cxenseignore:not(html, body, :empty, [id])"],[2177,"div.lesnina_widget"],[1469,".td-a-ad:not(html, body, :empty)"],[3801,".adaplace:not(html, body, :empty)"],[1089,".gpt-ad-banner:not(html, body, :empty)"],[1345,".ad-loading-placeholder:not(html, body, :empty)"],[2803,".gddanas:not(html, body, :empty)"],[1117,".article-block__banner:not(html, body, :empty)"],[1998,"div#box-over-content-revive"]];
const genericExceptionSieve = [3819];
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
