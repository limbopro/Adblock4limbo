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

// ruleset: cze-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important; padding-top: 0 !important;\"]}"],["{\"selector\":\"div.body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top:0px !important;\"]}"],["{\"selector\":\"#page_wrapper\",\"action\":[\"style\",\"cursor: auto !important;\"]}"],["{\"selector\":\".top_bg_content\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\".content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background:none !important;\"]}"],["{\"selector\":\"div.jeg_topbar\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}"],["{\"selector\":\"header.lsa\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".headerbanner-wrapper\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"#frs\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"div[class=\\\"advertisement-item-container\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"]}"],["{\"selector\":\"div.l-wrapper\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"]];

const hostnamesMap = new Map([["cdr.cz",0],["diit.cz",0],["csfd.cz",1],["csfd.sk",1],["epochaplus.cz",2],["jablickar.cz",3],["androidmagazine.eu",[3,8]],["letemsvetemapplem.eu",[3,8,9]],["samsungmagazine.eu",[3,8,9]],["kupi.cz",4],["prehrajto.cz",5],["uschovna.cz",6],["zing.cz",7],["kinema.sk",10],["sector.sk",10],["vranovske.sk",11],["uloz.to",12]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
