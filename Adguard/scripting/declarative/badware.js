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

// ruleset: badware

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"main::before\",\"action\":[\"style\",\"content: 'uBlock is unrelated to the well-known uBlock Origin.' !important; font-size: 32px !important; color: red !important; font-weight: bold !important;\"]}","{\"selector\":\"div.hero-unit > div.search-box--hero-unit::before\",\"action\":[\"style\",\"content: 'uBlock is unrelated to the well-known uBlock Origin.' !important; font-size: var(--font-size-h2) !important; color: red !important; font-weight: bold !important;\"]}"];
const argsSeqs = [0,1,2];
const hostnamesMap = new Map([["ublock.org",1],["~support.ublock.org",1],["support.ublock.org",2]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
