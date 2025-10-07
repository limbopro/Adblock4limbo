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

// ruleset: grc-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\"#mvp-site-main\",\"action\":[\"style\",\"margin-top: 0px !important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"],\"cssable\":true}]","[{\"selector\":\"#LRGR\",\"action\":[\"style\",\"background: none !important;\"],\"cssable\":true}]","[{\"selector\":\".article-fullcontent > div\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]","[{\"selector\":\".elementor-widget\",\"tasks\":[[\"has-text\",\"Διαφήμιση\"]]}]","[{\"selector\":\"#sp-component\",\"action\":[\"style\",\"width: 100% !important;\"],\"cssable\":true}]","[{\"selector\":\".left-col\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Advertise\"]]}]]}]","[{\"selector\":\"#hp-readmore-cross-article .article\",\"tasks\":[[\"has\",{\"selector\":\".byline_date\",\"tasks\":[[\"has-text\",\"ADVERTORIAL\"]]}]]}]","[{\"selector\":\"#primary\",\"action\":[\"style\",\"margin: 0 auto !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9];
const hostnamesMap = new Map([["kalamatatimes.gr",1],["kozanilife.gr",2],["lamiareport.gr",3],["moneyonline.gr",4],["parentsgo.kidsgo.com.cy",5],["serraikanea.gr",6],["sexgr.net",7],["sport24.gr",8],["start2click.com",9]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
