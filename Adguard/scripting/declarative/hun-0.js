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

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"._bannerTop1\",\"action\":[\"style\",\"background-color: transparent !important;\"]}","{\"selector\":\".cover-slider-cont\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".isSubPage._bannerTop1\",\"action\":[\"style\",\"height: 90px !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 1200px)\"]]}","{\"selector\":\".js-appAdv\",\"action\":[\"style\",\"display: none !important;\"]}"],["{\"selector\":\"div.container.banner-container.wide\",\"action\":[\"style\",\"min-height: 0 !important; height: auto !important;\"]}"],["{\"selector\":\"#popupFrontPageBanner-modal\",\"action\":[\"style\",\"display: none !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".first-section\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".oh-holder.open\",\"action\":[\"style\",\"z-index: 9999!important;\"]}"],["{\"selector\":\".results_body\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"body:has(> .background.height) .notation\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body:has(> [class=\\\"background\\\"]) footer\",\"action\":[\"style\",\"margin-top: 610px !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#_cikk_tartalom_rb1\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"div.layoutContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"div.postContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"*\",\"action\":[\"style\",\"cursor: auto !important;\"]}"],["{\"selector\":\"div.article-headline\",\"action\":[\"style\",\"margin-top: 44px !important;\"]}"],["{\"selector\":\"body[style*=\\\"padding-top\\\"]\",\"action\":[\"style\",\"padding-top: 0px !important; background-color: #777 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\"#page-content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto!important;\"]}"],["{\"selector\":\"div#search_container\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\"section[id=\\\"content_left\\\"][class=\\\"content_content\\\"]\",\"action\":[\"style\",\"width: auto !important; padding: 0 45px 0 46px !important;\"]}","{\"selector\":\"section[id=\\\"content_left\\\"][class=\\\"content_start\\\"]\",\"action\":[\"style\",\"padding-top: 80px !important;\"]}"],["{\"selector\":\"header .container\",\"action\":[\"style\",\"padding: 10px 10px 0 10px !important;\"]}"],["{\"selector\":\".raw-html-embed\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\"html, body\",\"action\":[\"style\",\"overflow:auto !important\"]}"]];

const hostnamesMap = new Map([["myonlineradio.hu",0],["startlap.hu",1],["dehir.hu",2],["origo.hu",3],["menetrendek.hu",4],["atv.hu",5],["automotor.hu",6],["budapestkornyeke.hu",7],["kekvillogo.hu",7],["hosszupuskasub.com",8],["hu.ign.com",9],["hwsw.hu",10],["index.hu",11],["velvet.hu",11],["divany.hu",11],["totalbike.hu",11],["totalcar.hu",11],["jofogas.hu",12],["kektura.hu",13],["keol.hu",14],["magyarhirlap.hu",15],["mandiner.hu",16],["mkb.hu",17]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
