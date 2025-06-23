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

// ruleset: cze-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important; padding-top: 0 !important;\"]}","{\"selector\":\"div.body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"padding-top:0px !important;\"]}","{\"selector\":\".top_bg_content\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".headerbanner-wrapper\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\"header.lsa\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#page_wrapper\",\"action\":[\"style\",\"cursor: auto !important;\"]}","{\"selector\":\".content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"#frs\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}","{\"selector\":\".article-of-day-doxxbet-sponsor\",\"action\":[\"style\",\"background-color:black !important;background-image:none !important\"]}\n{\"selector\":\".main-block-3.section-ms-v-hokeji-2025 .block-title.main\",\"action\":[\"style\",\"padding-bottom:0 !important\"]}\n{\"selector\":\".main-block-3.section-ms-v-hokeji-2025\",\"action\":[\"style\",\"background-color:black !important;background-image:none !important\"]}\n{\"selector\":\".section-tiposbet-sponsor .main-block-3\",\"action\":[\"style\",\"background-color:red !important;background-image:none !important\"]}\n{\"selector\":\"main\",\"action\":[\"style\",\"background-color:white !important;background-image:none !important\"]}","{\"selector\":\"#head_c\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background:none !important;\"]}","{\"selector\":\"div[class=\\\"advertisement-item-container\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\"div.jeg_topbar\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}"];
const argsSeqs = [0,1,2,3,4,-5,-6,7,-6,7,7,8,9,10,11,12,13,14];
const hostnamesMap = new Map([["cdr.cz",1],["diit.cz",1],["csfd.cz",2],["csfd.sk",2],["epochaplus.cz",3],["kupi.cz",4],["letemsvetemapplem.eu",5],["samsungmagazine.eu",5],["androidmagazine.eu",8],["jablickar.cz",10],["prehrajto.cz",11],["sector.sk",12],["kinema.sk",12],["sport.aktuality.sk",13],["titulky.com",14],["uschovna.cz",15],["vranovske.sk",16],["zing.cz",17]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
