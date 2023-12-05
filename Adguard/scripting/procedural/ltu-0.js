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

// ruleset: ltu-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".obj-cont dt\",\"tasks\":[[\"has-text\",\" Reklama/\"]]}"],["{\"selector\":\"#sidebar1 > div\",\"tasks\":[[\"has-text\",\"mods\"]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has-text\",\"/^Nuorodos/\"]]}"],["{\"selector\":\".partner-item\",\"tasks\":[[\"upward\",\".bg-gray-100\"]]}"],["{\"selector\":\".portlet_block\",\"tasks\":[[\"has-text\",\"Partneriai\"]]}"],["{\"selector\":\"#sidebar > div.custom-div\",\"tasks\":[[\"has-text\",\"REKLAMA\"]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"]];

const hostnamesMap = new Map([["aruodas.lt",0],["kaunozinios.lt",1],["klaipedoszinios.lt",2],["xn--iauliinios-z9b5t9e.lt",2],["lkl.lt",3],["technologijos.lt",4],["tv3.lt",5],["itiketini-faktai.online",6]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
