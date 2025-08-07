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
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\"html\",\"action\":[\"remove-class\",\"ads-cls-fix\"]}]","[{\"selector\":\".ct-related\",\"tasks\":[[\"has-text\",\"/^\\\\s+Reklama/\"]]}]","[{\"selector\":\".block-imageblock\",\"tasks\":[[\"has-text\",\"Reklama\"]]}]","[{\"selector\":\"div.box\",\"tasks\":[[\"has-text\",\"/^reklama/i\"]]}]","[{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"reklama\"]]}]]},{\"selector\":\"img[src^=\\\"/upload/data/\\\"]\",\"tasks\":[[\"upward\",3]]},{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"reklama\"]]}]","[{\"selector\":\"body\",\"action\":[\"remove-class\",\"modal-open\"]}]","[{\"selector\":\"div\",\"action\":[\"remove-class\",\"with-active-branding\"]}]","[{\"selector\":\"a[id*=\\\"zatvorit\\\"]\",\"action\":[\"remove-attr\",\"href\"]}]","[{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important; padding-top: 0 !important;\"],\"cssable\":true}]","[{\"selector\":\"div.body\",\"action\":[\"style\",\"padding-top: 0 !important;\"],\"cssable\":true}]","[{\"selector\":\"img[src*=\\\"/img/atlas\\\"]\",\"tasks\":[[\"upward\",3]]}]","[{\"selector\":\"body\",\"action\":[\"style\",\"padding-top:0px !important;\"],\"cssable\":true},{\"selector\":\"img[alt=\\\"casopis\\\"]\",\"tasks\":[[\"upward\",3]]}]","[{\"selector\":\"html, body\",\"action\":[\"style\",\"position:relative !important;top:0px !important\"],\"cssable\":true}]","[{\"selector\":\"a\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"url\"}],[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"upward\",1]]}]","[{\"selector\":\".top_bg_content\",\"action\":[\"style\",\"top: 0px !important;\"],\"cssable\":true}]","[{\"selector\":\".headerbanner-wrapper\",\"action\":[\"style\",\"min-height: 0 !important;\"],\"cssable\":true}]","[{\"selector\":\"header.lsa\",\"action\":[\"style\",\"margin-top: 0 !important;\"],\"cssable\":true}]","[{\"selector\":\"#page_wrapper\",\"action\":[\"style\",\"cursor: auto !important;\"],\"cssable\":true}]","[{\"selector\":\".content\",\"action\":[\"style\",\"margin-top: 0px !important;\"],\"cssable\":true}]","[{\"selector\":\"#frs\",\"action\":[\"style\",\"margin-top: 100px !important;\"],\"cssable\":true}]","[{\"selector\":\".article-of-day-doxxbet-sponsor\",\"action\":[\"style\",\"background-color:black !important;background-image:none !important\"],\"cssable\":true},{\"selector\":\".main-block-3.section-ms-v-hokeji-2025 .block-title.main\",\"action\":[\"style\",\"padding-bottom:0 !important\"],\"cssable\":true},{\"selector\":\".main-block-3.section-ms-v-hokeji-2025\",\"action\":[\"style\",\"background-color:black !important;background-image:none !important\"],\"cssable\":true},{\"selector\":\".section-tiposbet-sponsor .main-block-3\",\"action\":[\"style\",\"background-color:red !important;background-image:none !important\"],\"cssable\":true},{\"selector\":\"main\",\"action\":[\"style\",\"background-color:white !important;background-image:none !important\"],\"cssable\":true}]","[{\"selector\":\"#head_c\",\"action\":[\"style\",\"margin-top: 0 !important;\"],\"cssable\":true},{\"selector\":\"*\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":[\"fixed\",\"i\"]}],[\"has\",{\"selector\":\"+ * *\",\"tasks\":[[\"matches-css\",{\"name\":\"float\",\"value\":[\"left\",\"i\"]}],[\"matches-css\",{\"name\":\"background\",\"value\":[\"url.*\",\"i\"]}]]}]]},{\"selector\":\"*\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":[\"fixed\",\"i\"]}],[\"has\",{\"selector\":\"+ * img\",\"tasks\":[[\"matches-css\",{\"name\":\"float\",\"value\":[\"left\",\"i\"]}]]}]]},{\"selector\":\"*\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":[\"fixed\",\"i\"]}],[\"spath\",\" + *\"],[\"has\",{\"selector\":\"*\",\"tasks\":[[\"matches-css\",{\"name\":\"float\",\"value\":[\"left\",\"i\"]}],[\"matches-css\",{\"name\":\"background\",\"value\":[\"url.*\",\"i\"]}]]}]]},{\"selector\":\"*\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":[\"fixed\",\"i\"]}],[\"spath\",\" + *\"],[\"has\",{\"selector\":\"img\",\"tasks\":[[\"matches-css\",{\"name\":\"float\",\"value\":[\"left\",\"i\"]}]]}]]},{\"selector\":\"a\",\"tasks\":[[\"matches-css\",{\"name\":\"background\",\"value\":[\"marteva\",\"i\"]}],[\"upward\",3]]}]","[{\"selector\":\"body\",\"action\":[\"style\",\"background:none !important;\"],\"cssable\":true}]","[{\"selector\":\"div[class=\\\"advertisement-item-container\\\"]\",\"action\":[\"style\",\"visibility: hidden !important;\"],\"cssable\":true},{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"stopPrntScr\"]]},{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}]","[{\"selector\":\"div.jeg_topbar\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,-2,10,3,4,-5,11,-5,12,-6,7,6,8,9,10,13,14,15,-16,-17,18,-17,18,18,19,20,21,22,23,24,25];
const hostnamesMap = new Map([["hnonline.sk",1],["brainee.hnonline.sk",1],["dia.hnonline.sk",1],["hn24.hnonline.sk",1],["mediweb.hnonline.sk",1],["csfd.cz",2],["doktorka.cz",4],["dotekomanie.cz",5],["enigmaplus.cz",6],["epochaplus.cz",8],["autozurnal.com",10],["pppeter.shop",12],["bombuj.si",13],["serialy.bombuj.si",13],["cdr.cz",14],["diit.cz",14],["csfd.sk",15],["headliner.cz",16],["indian-tv.cz",17],["nerdfix.cz",17],["kupi.cz",18],["letemsvetemapplem.eu",19],["samsungmagazine.eu",19],["androidmagazine.eu",22],["jablickar.cz",24],["prehrajto.cz",25],["sector.sk",26],["kinema.sk",26],["sport.aktuality.sk",27],["titulky.com",28],["uschovna.cz",29],["vranovske.sk",30],["zing.cz",31]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
