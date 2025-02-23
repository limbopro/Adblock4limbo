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

// ruleset: ltu-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".background[data-url^=\\\"https://bit.ly/\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\".LStatic__inner\",\"action\":[\"style\",\"padding-top: 0 !important\"]}"],["{\"selector\":\".main > #header\",\"action\":[\"style\",\"margin-top: unset !important\"]}","{\"selector\":\".main > .fixed_userbar\",\"action\":[\"style\",\"margin-bottom: unset !important\"]}"],["{\"selector\":\"#mdelfi_latest_news\",\"action\":[\"style\",\"min-height: unset !important\"]}"],["{\"selector\":\".brandpage-wrapper\",\"action\":[\"style\",\"margin-top: unset !important\"]}"],["{\"selector\":\".wrapper\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"]];

const hostnamesMap = new Map([["autoplius.lt",0],["lrytas.lt",1],["torrent.ai",2],["torrent.lt",2],["m.delfi.lt",3],["imones.lt",4],["15min.lt",5]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
