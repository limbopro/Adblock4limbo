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

// ruleset: vie-1

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"small\",\"tasks\":[[\"has-text\",\"QUẢNG CÁO\"]]}]]}]","[{\"selector\":\"#header\",\"action\":[\"style\",\"margin-top: 0 !important\"],\"cssable\":true}]","[{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"position: static !important\"],\"cssable\":true}]","[{\"selector\":\"div.layout.pt-mobi-top\",\"action\":[\"style\",\"padding-top: 0 !important\"],\"cssable\":true},{\"selector\":\"header.bg-white\",\"action\":[\"style\",\"margin-top: 0px !important\"],\"cssable\":true}]","[{\"selector\":\"video[src^=\\\"/\\\"]\",\"action\":[\"style\",\"pointer-events: none\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3,4,5,6];
const hostnamesMap = new Map([["metruyencv.com",1],["metruyencv.net",1],["chotlo3s.com",2],["hhtq.click",3],["thempho2.com",3],["phimchautinhtri.net",3],["www.o-study.net",4],["www.saostar.vn",5],["xem15.net",6]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
