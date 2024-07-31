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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#header\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"position: static !important\"]}"],["{\"selector\":\"div.layout.pt-mobi-top\",\"action\":[\"style\",\"padding-top: 0 !important\"]}","{\"selector\":\"header.bg-white\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"]];

const hostnamesMap = new Map([["chotlo247.me",0],["xem19.gavang1.net",1],["xem20.gavang1.net",1],["live.thapcam22.net",1],["blog.abit.vn",1],["www.o-study.net",2],["www.saostar.vn",3]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
