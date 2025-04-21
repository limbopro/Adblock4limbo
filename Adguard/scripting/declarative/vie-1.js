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
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\".aScr\",\"action\":[\"style\",\"display:block!important\"]}\n{\"selector\":\".aSlB\",\"action\":[\"style\",\"display:flex!important\"]}\n{\"selector\":\".aft\",\"action\":[\"style\",\"display:block!important\"]}\n{\"selector\":\".pstL\",\"action\":[\"style\",\"display:inline-flex!important\"]}","{\"selector\":\"#header\",\"action\":[\"style\",\"margin-top: 0 !important\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"position: static !important\"]}","{\"selector\":\"div.layout.pt-mobi-top\",\"action\":[\"style\",\"padding-top: 0 !important\"]}\n{\"selector\":\"header.bg-white\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"];
const argsSeqs = [0,1,2,3,4,5];
const hostnamesMap = new Map([["apkmoddone.phongroblox.com",1],["chotlo3s.com",2],["hhpanda.sh",3],["thempho.xyz",3],["www.o-study.net",4],["www.saostar.vn",5]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
