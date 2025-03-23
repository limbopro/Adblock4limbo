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

const argsList = ["",["{\"selector\":\".obj-cont dt\",\"tasks\":[[\"has-text\",\" Reklama/\"]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\".portlet_block\",\"tasks\":[[\"has-text\",\"Partneriai\"]]}"],["{\"selector\":\"#sidebar1 > div\",\"tasks\":[[\"has-text\",\"mods\"]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has-text\",\"/^Nuorodos/\"]]}"],["{\"selector\":\".partner-item\",\"tasks\":[[\"upward\",\".bg-gray-100\"]]}"],["{\"selector\":\"#sidebar > div.custom-div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"]];
const argsSeqs = [0,1,2,3,4,5,6,7];
const hostnamesMap = new Map([["aruodas.lt",1],["itiketini-faktai.online",2],["technologijos.lt",3],["kaunozinios.lt",4],["klaipedoszinios.lt",5],["xn--iauliinios-z9b5t9e.lt",5],["lkl.lt",6],["tv3.lt",7]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
