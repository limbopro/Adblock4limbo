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

const argsList = [["{\"selector\":\"*\",\"action\":[\"style\",\"cursor: auto !important;\"]}"],["{\"selector\":\"div.article-headline\",\"action\":[\"style\",\"margin-top: 44px !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#_cikk_tartalom_rb1\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"div.layoutContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"div.postContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"#popupFrontPageBanner-modal\",\"action\":[\"style\",\"display: none !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\"body[style*=\\\"padding-top\\\"]\",\"action\":[\"style\",\"padding-top: 0px !important; background-color: #777 !important;\"]}"],["{\"selector\":\"#page-content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto!important;\"]}"],["{\"selector\":\"div#search_container\",\"action\":[\"style\",\"margin-bottom: 0 !important;\"]}","{\"selector\":\"section[id=\\\"content_left\\\"][class=\\\"content_content\\\"]\",\"action\":[\"style\",\"width: auto !important; padding: 0 45px 0 46px !important;\"]}","{\"selector\":\"section[id=\\\"content_left\\\"][class=\\\"content_start\\\"]\",\"action\":[\"style\",\"padding-top: 80px !important;\"]}"],["{\"selector\":\"header .container\",\"action\":[\"style\",\"padding: 10px 10px 0 10px !important;\"]}"],["{\"selector\":\".raw-html-embed\",\"action\":[\"style\",\"min-height: auto !important;\"]}"],["{\"selector\":\".results_body\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"body:has(> .background.height) .notation\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body:has(> [class=\\\"background\\\"]) footer\",\"action\":[\"style\",\"margin-top: 610px !important;\"]}"],["{\"selector\":\"html, body\",\"action\":[\"style\",\"overflow:auto !important\"]}"],["{\"selector\":\"._bannerTop1\",\"action\":[\"style\",\"background-color: transparent !important;\"]}","{\"selector\":\".cover-slider-cont\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".isSubPage._bannerTop1\",\"action\":[\"style\",\"height: 90px !important;\"],\"tasks\":[[\"matches-media\",\"(min-width: 1200px)\"]]}","{\"selector\":\".js-appAdv\",\"action\":[\"style\",\"display: none !important;\"]}"],["{\"selector\":\".first-section\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".oh-holder.open\",\"action\":[\"style\",\"z-index: 9999!important;\"]}"],["{\"selector\":\"div.container.banner-container.wide\",\"action\":[\"style\",\"min-height: 0 !important; height: auto !important;\"]}"]];

const hostnamesMap = new Map([["hosszupuskasub.com",0],["hu.ign.com",1],["atv.hu",2],["automotor.hu",3],["budapestkornyeke.hu",4],["kekvillogo.hu",4],["dehir.hu",5],["divany.hu",6],["index.hu",6],["totalbike.hu",6],["totalcar.hu",6],["velvet.hu",6],["hwsw.hu",7],["jofogas.hu",8],["kektura.hu",9],["keol.hu",10],["magyarhirlap.hu",11],["mandiner.hu",12],["menetrendek.hu",13],["mkb.hu",14],["myonlineradio.hu",15],["origo.hu",16],["startlap.hu",17]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
