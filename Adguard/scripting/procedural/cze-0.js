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

const argsList = [["{\"selector\":\"html\",\"action\":[\"remove-class\",\"ads-cls-fix\"]}"],["{\"selector\":\".ct-related\",\"tasks\":[[\"has-text\",\"/^\\\\s+Reklama/\"]]}"],["{\"selector\":\".block-imageblock\",\"tasks\":[[\"has-text\",\"Reklama\"]]}"],["{\"selector\":\"div.box\",\"tasks\":[[\"has-text\",\"/^reklama/i\"]]}"],["{\"selector\":\".text-center\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"reklama\"]]}]]}","{\"selector\":\"img[src^=\\\"/upload/data/\\\"]\",\"tasks\":[[\"upward\",3]]}","{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"reklama\"]]}"],["{\"selector\":\"body\",\"action\":[\"remove-class\",\"modal-open\"]}"],["{\"selector\":\"div\",\"action\":[\"remove-class\",\"with-active-branding\"]}"],["{\"selector\":\"a[id*=\\\"zatvorit\\\"]\",\"action\":[\"remove-attr\",\"href\"]}"],["{\"selector\":\"img[src*=\\\"/img/atlas\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"img[alt=\\\"casopis\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"a\",\"tasks\":[[\"matches-css\",{\"name\":\"background-image\",\"value\":\"url\"}],[\"matches-css\",{\"name\":\"position\",\"value\":\"^fixed$\"}],[\"upward\",1]]}"],["{\"selector\":\"a[href*=\\\"kosmetika-brno\\\" i]\",\"action\":[\"style\",\"opacity:0;pointer-events:none\"],\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"stopPrntScr\"]]}","{\"selector\":\"style\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"has-text\",\"::selection\"]]}"]];

const hostnamesMap = new Map([["hnonline.sk",0],["brainee.hnonline.sk",0],["dia.hnonline.sk",0],["hn24.hnonline.sk",0],["mediweb.hnonline.sk",0],["csfd.cz",1],["doktorka.cz",2],["dotekomanie.cz",3],["enigmaplus.cz",[4,8]],["epochaplus.cz",[4,9]],["autozurnal.com",[5,6]],["pppeter.shop",5],["bombuj.si",7],["serialy.bombuj.si",7],["indian-tv.cz",10],["nerdfix.cz",10],["titulky.com",11],["vranovske.sk",12]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
