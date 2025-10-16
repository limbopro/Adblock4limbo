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

// ruleset: isr-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\"button\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > span\",\"tasks\":[[\"has-text\",\"ממומן\"]]}]]},{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> div > div > div > div > div > p\",\"tasks\":[[\"has-text\",\"ממומן\"]]}]]}]","[{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"(window)}catch\"]]},{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"responseText\"]]}]","[{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"200===\"]]}]","[{\"selector\":\"html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"],\"cssable\":true},{\"selector\":\"span:has([href*=\\\"promo\\\"])\",\"tasks\":[[\"xpath\",\"..\"]]}]","[{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"admiral\"]]}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"],\"cssable\":true}]","[{\"selector\":\"div[aria-label*=\\\"המחלקה המסחרית\\\"]\",\"tasks\":[[\"upward\",5]]},{\"selector\":\"iframe[title*=\\\"Banner\\\"]\",\"tasks\":[[\"upward\",4]]}]","[{\"selector\":\"#rb-checktag\",\"action\":[\"remove\",\"\"]}]"];
const argsSeqs = [0,1,-2,3,2,4,5,6,7,8];
const hostnamesMap = new Map([["wolt.com",1],["sheee.co.il",2],["walla.co.il",2],["~mail.walla.co.il",4],["haaretz.co.il",5],["www-haaretz-co-il.eu1.proxy.openathens.net",5],["morfix.co.il",6],["bhol.co.il",7],["www.kikar.co.il",8],["hwzone.co.il",9]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
