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

'use strict';

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// annoyances-widgets

const toImport = [[2594454,".plugin-rss"],[15752519,".blogroll-wrapper"],[10329576,".plugin-blogroll"],[7458979,".blogroll-wrapper1,.blogroll-wrapper2,.blogroll-wrapper3,.blogroll-wrapper4,.blogroll-wrapper5,.blogroll-wrapper6,.blogroll-wrapper8,.blogroll-wrapper9,.blogroll_wrapper2,.blogroll_wrapper3,.blogroll_wrapper4"],[797429,".blogroll_wrapper"],[9206816,".blogroll_wrapper_2,.blogroll_wrapper_3,.blogroll_wrapper_4"],[2286495,".blogroll_wrapper_honbun"],[11160837,"#tripla-app"],[4235807,".online-chat-root-Verbox"],[8224090,".igas-widget"],[12984583,".opinarywidget"],[9654745,".opinary-widget-wrapper"],[13353803,".opinary-wrapper"],[10963163,".gsInformer"]];

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
