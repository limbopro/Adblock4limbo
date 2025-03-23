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

// ruleset: hun-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"._bannerTop1\",\"action\":[\"style\",\"background-color: transparent !important;\"]}\n{\"selector\":\".cover-slider-cont\",\"action\":[\"style\",\"display: block !important;\"]}\n{\"selector\":\".isSubPage._bannerTop1\",\"action\":[\"style\",\"height: 90px !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 1200px)\"]]}\n{\"selector\":\".js-appAdv\",\"action\":[\"style\",\"display: none !important;\"]}","{\"selector\":\"div.container.banner-container.wide\",\"action\":[\"style\",\"min-height: 0 !important; height: auto !important;\"]}","{\"selector\":\"#popupFrontPageBanner-modal\",\"action\":[\"style\",\"display: none !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\".first-section\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}\n{\"selector\":\".oh-holder.open\",\"action\":[\"style\",\"z-index: 9999!important;\"]}","{\"selector\":\".leavingPopupLayer\",\"action\":[\"style\",\"display: none !important;\"]}","{\"selector\":\".results_body\",\"action\":[\"style\",\"height: auto !important;\"]}\n{\"selector\":\"body:has(> .background.height) .notation\",\"action\":[\"style\",\"display: block !important;\"]}\n{\"selector\":\"body:has(> [class=\\\"background\\\"]) footer\",\"action\":[\"style\",\"margin-top: 610px !important;\"]}","{\"selector\":\"header\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"#_cikk_tartalom_rb1\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}\n{\"selector\":\"div.layoutContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}\n{\"selector\":\"div.postContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"*\",\"action\":[\"style\",\"cursor: auto !important;\"]}","{\"selector\":\"div.article-headline\",\"action\":[\"style\",\"margin-top: 44px !important;\"]}","{\"selector\":\"body[style*=\\\"padding-top\\\"]\",\"action\":[\"style\",\"padding-top: 0px !important; background-color: #777 !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important\"]}","{\"selector\":\"#page-content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto!important;\"]}","{\"selector\":\"div#search_container\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}\n{\"selector\":\"section[id=\\\"content_left\\\"][class=\\\"content_content\\\"]\",\"action\":[\"style\",\"width: auto !important; padding: 0 45px 0 46px !important;\"]}\n{\"selector\":\"section[id=\\\"content_left\\\"][class=\\\"content_start\\\"]\",\"action\":[\"style\",\"padding-top: 80px !important;\"]}","{\"selector\":\"header .container\",\"action\":[\"style\",\"padding: 10px 10px 0 10px !important;\"]}","{\"selector\":\".raw-html-embed\",\"action\":[\"style\",\"min-height: auto !important;\"]}","{\"selector\":\"html, body\",\"action\":[\"style\",\"overflow:auto !important\"]}","{\"selector\":\"[class=\\\"container main single-article\\\"]\",\"action\":[\"style\",\"margin-top: 65px !important;\"],\"tasks\":[[\"matches-media\",\"(max-width: 768px)\"]]}"];
const argsSeqs = [0,1,2,-3,4,-4,6,5,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
const hostnamesMap = new Map([["myonlineradio.hu",1],["startlap.hu",2],["dehir.hu",3],["noizz.hu",5],["origo.hu",7],["menetrendek.hu",8],["atv.hu",9],["automotor.hu",10],["budapestkornyeke.hu",11],["kekvillogo.hu",11],["hosszupuskasub.com",12],["hu.ign.com",13],["hwsw.hu",14],["index.hu",15],["velvet.hu",15],["divany.hu",15],["totalbike.hu",15],["totalcar.hu",15],["jofogas.hu",16],["kektura.hu",17],["keol.hu",18],["magyarhirlap.hu",19],["mandiner.hu",20],["mkb.hu",21],["pcwplus.hu",22],["gsplus.hu",22]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
