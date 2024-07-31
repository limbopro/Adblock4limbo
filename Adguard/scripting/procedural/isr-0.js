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

// ruleset: isr-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"button\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > span\",\"tasks\":[[\"has-text\",\"ממומן\"]]}]]}","{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > div > div > p\",\"tasks\":[[\"has-text\",\"ממומן\"]]}]]}"],["{\"selector\":\"span:has([href*=\\\"promo\\\"])\",\"tasks\":[[\"xpath\",\"..\"]]}"],["{\"selector\":\"div[aria-label*=\\\"המחלקה המסחרית\\\"]\",\"tasks\":[[\"upward\",5]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"admiral\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"(window)}catch\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"200===\"]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"responseText\"]]}"]];

const hostnamesMap = new Map([["wolt.com",0],["haaretz.co.il",1],["www-haaretz-co-il.eu1.proxy.openathens.net",1],["www.kikar.co.il",2],["morfix.co.il",3],["sheee.co.il",4],["walla.co.il",4]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
