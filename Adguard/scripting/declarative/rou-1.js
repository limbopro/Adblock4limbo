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

// ruleset: rou-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: unset !important\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"position:static!important; top: 0 !important;\"]}","{\"selector\":\"#main_container\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\".header_nav\",\"action\":[\"style\",\"position:static !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"]];

const hostnamesMap = new Map([["epochtimes-romania.com",0],["cinemagia.ro",1],["litoraltv.ro",2]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
