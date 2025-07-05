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

// ruleset: idn-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\".content-paralax\",\"action\":[\"style\",\"top: 0!important;\"]}","{\"selector\":\".outer-wrapper\",\"action\":[\"style\",\"margin-top:60px!important;\"]}","{\"selector\":\"body.sticky-header\",\"action\":[\"style\",\"padding: unset!important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: unset !important; pointer-events: auto !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"];
const argsSeqs = [0,1,2,3,4,5];
const hostnamesMap = new Map([["sindonews.com",1],["dutaislam.com",2],["intip24news.com",3],["juragan.film",4],["hrv.okestream365.xyz",5]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
