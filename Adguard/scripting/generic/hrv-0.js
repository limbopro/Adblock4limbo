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

'use strict';

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// hrv-0

const toImport = [[12989194,".fold_home__pasica_banner:not(html, body, :empty)"],[15451211,"#googleglava"],[10680956,"#googledesnovertikalna"],[5855077,"#googleispodteksta"],[15445665,"#googledolje"],[10652823,".reklama-na-indexu:not(html, body, :empty)"],[6879724,".homepage-top-google-banner:not(html, body, :empty)"],[13987257,".js-gpt-ad:not(html, body, :empty)"],[2689874,".banner-izdvojeno:not(html, body, :empty)"],[8608347,".elementor-widget-smartmag-codes:not(html, body, :empty)"],[14656153,".banner__placeholder:not(html, body, :empty)"],[1377122,".cxenseignore:not(html, body, :empty, [id])"]];

const genericSelectorMap = self.genericSelectorMap || new Map();

if ( genericSelectorMap.size === 0 ) {
    self.genericSelectorMap = new Map(toImport);
    return;
}

for ( const toImportEntry of toImport ) {
    const existing = genericSelectorMap.get(toImportEntry[0]);
    genericSelectorMap.set(
        toImportEntry[0],
        existing === undefined
            ? toImportEntry[1]
            : `${existing},${toImportEntry[1]}`
    );
}

self.genericSelectorMap = genericSelectorMap;

/******************************************************************************/

})();

/******************************************************************************/
