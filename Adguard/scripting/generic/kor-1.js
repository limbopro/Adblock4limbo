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

// kor-1

const toImport = [[1774173,".ad_wrapper"],[10330050,"._popIn_recommend_article_ad"],[13642955,"#admaru"],[4542809,".revenue_unit_item.tenping,.revenue_unit_item.dable,.revenue_unit_item.adfit"],[327848,"ins.viewus-ad"],[3683313,"#livereAdWrapper"],[186570,"ins.fastview-ad"],[2201688,"ins.adsbyadop"],[16153475,"ins.adsbygoogle[data-ad-slot]"],[15922369,"ins.kakao_ad_area"]];

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
