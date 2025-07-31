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

// ruleset: easyprivacy

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\"html[class^=\\\"loading\\\"]\",\"action\":[\"style\",\"visibility: visible !important;\"],\"cssable\":true}]","[{\"selector\":\".inviewSection:not(.is-show)\",\"action\":[\"style\",\"transform: translateY(0) !important; opacity: 1 !important;\"],\"cssable\":true}]","[{\"selector\":\"body[style=\\\"opacity: 0;\\\"]\",\"action\":[\"style\",\"opacity: 1 !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3];
const hostnamesMap = new Map([["anikore.jp",1],["e-begin.jp",2],["mustar.meitetsu.co.jp",3],["bitdefender.com",3]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
