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
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\".obj-cont dt\",\"tasks\":[[\"has-text\",\" Reklama/\"]]}]","[{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]","[{\"selector\":\".portlet_block\",\"tasks\":[[\"has-text\",\"Partneriai\"]]}]","[{\"selector\":\"#sidebar1 > div\",\"tasks\":[[\"has-text\",\"mods\"]]}]","[{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has-text\",\"/^Nuorodos/\"]]}]","[{\"selector\":\".background[data-url*=\\\"ttps://bit.ly/\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"],\"cssable\":true}]","[{\"selector\":\".LStatic__inner\",\"action\":[\"style\",\"padding-top: 0 !important\"],\"cssable\":true}]","[{\"selector\":\".main > #header\",\"action\":[\"style\",\"margin-top: unset !important\"],\"cssable\":true},{\"selector\":\".main > .fixed_userbar\",\"action\":[\"style\",\"margin-bottom: unset !important\"],\"cssable\":true}]","[{\"selector\":\"#mdelfi_latest_news\",\"action\":[\"style\",\"min-height: unset !important\"],\"cssable\":true}]","[{\"selector\":\".brandpage-wrapper\",\"action\":[\"style\",\"margin-top: unset !important\"],\"cssable\":true}]","[{\"selector\":\".partner-item\",\"tasks\":[[\"upward\",\".bg-gray-100\"]]}]","[{\"selector\":\".wrapper\",\"action\":[\"style\",\"margin-top: 0 !important\"],\"cssable\":true}]","[{\"selector\":\"#sidebar > div.custom-div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
const hostnamesMap = new Map([["aruodas.lt",1],["itiketini-faktai.online",2],["technologijos.lt",3],["kaunozinios.lt",4],["klaipedoszinios.lt",5],["xn--iauliinios-z9b5t9e.lt",5],["autoplius.lt",6],["lrytas.lt",7],["torrent.ai",8],["torrent.lt",8],["m.delfi.lt",9],["imones.lt",10],["lkl.lt",11],["15min.lt",12],["tv3.lt",13]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
