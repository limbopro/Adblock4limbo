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

// ruleset: alb-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\".modal-open\",\"action\":[\"style\",\"overflow: visible\"]}","{\"selector\":\".location-choose.open > wrapper\",\"action\":[\"style\",\"visibility:hidden;\"]}","{\"selector\":\"div.col-8\",\"action\":[\"style\",\"width: 100% !important\"]}"];
const argsSeqs = [0,1,2,3];
const hostnamesMap = new Map([["bankofalbania.org",1],["cineplexx.al",2],["www.filma24.*",3]]);
const hasEntities = true;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
