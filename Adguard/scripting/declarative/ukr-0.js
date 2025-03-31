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

// ruleset: ukr-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"div.gridSection__list\",\"action\":[\"style\",\"max-width: none !important\"]}\n{\"selector\":\"div.news__items\",\"action\":[\"style\",\"max-width: none !important\"]}","{\"selector\":\"div.playlist-player\",\"action\":[\"style\",\"max-width: 1155px !important\"]}\n{\"selector\":\"div.playlist-short-content\",\"action\":[\"style\",\"min-height: unset !important\"]}","{\"selector\":\".sb-popular\",\"action\":[\"style\",\"margin-top: 0 !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-image: unset !important\"]}","{\"selector\":\"header.page-head\",\"action\":[\"style\",\"height: unset !important\"]}","{\"selector\":\"body.access *\",\"action\":[\"style\",\"filter: none !important\"]}\n{\"selector\":\"body.access\",\"action\":[\"style\",\"overflow: auto !important; position: relative !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-color: unset !important\"]}","{\"selector\":\"div.news-sm-block.border-top-block.mt-280\",\"action\":[\"style\",\"margin-top: 0px !important; padding-top: 0px !important; border-top: unset !important\"]}","{\"selector\":\"nav.nav\",\"action\":[\"style\",\"padding-top: 0 !important\"]}","{\"selector\":\".body-pt_toplink\",\"action\":[\"style\",\"padding-top: 80px !important\"]}","{\"selector\":\"#site\",\"action\":[\"style\",\"margin-top: unset !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important; padding-top: 0 !important;\"]}","{\"selector\":\"#contentbg\",\"action\":[\"style\",\"margin-top: 35px !important\"]}\n{\"selector\":\"#totalbg\",\"action\":[\"style\",\"background-image: unset !important\"]}","{\"selector\":\"head > style:empty\",\"action\":[\"style\",\"all: inherit !important\"]}","{\"selector\":\"body.single-post > div > section > div > div > aside > ul > li.commented-posts-widget\",\"action\":[\"style\",\"margin-top: unset !important; padding-top: unset !important\"]}","{\"selector\":\"body.with-image\",\"action\":[\"style\",\"padding-top: 20px !important\"]}","{\"selector\":\"#sitewrap\",\"action\":[\"style\",\"background-image: unset !important\"]}","{\"selector\":\"div.gbg\",\"action\":[\"style\",\"top:unset !important\"]}","{\"selector\":\".site-header\",\"action\":[\"style\",\"top: 0 !important\"]}\n{\"selector\":\"div.main-wrapper\",\"action\":[\"style\",\"margin-top: 0 !important\"]}","{\"selector\":\"div.layout_content\",\"action\":[\"style\",\"margin-top: 50px !important\"]}\n{\"selector\":\"h2.b-info-block__title\",\"action\":[\"style\",\"padding-top: 10px !important\"]}","{\"selector\":\".border-shadow\",\"action\":[\"style\",\"-webkit-box-shadow: unset !important; box-shadow: unset !important\"]}","{\"selector\":\"body.branding\",\"action\":[\"style\",\"padding-top: 20px !important\"]}","{\"selector\":\"div.td-outer-container\",\"action\":[\"style\",\"background-image: unset !important; cursor: unset !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: unset !important\"]}","{\"selector\":\"div.nomobile\",\"action\":[\"style\",\"margin-top: unset !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important\"]}","{\"selector\":\".tbr-social > span > a\",\"action\":[\"style\",\"color: unset !important\"]}\n{\"selector\":\"body\",\"action\":[\"style\",\"background: unset !important\"]}","{\"selector\":\".wrap\",\"action\":[\"style\",\"padding-top:20px !important\"]}","{\"selector\":\"div.fb-s-blog-two-main__col.brxe-block\",\"action\":[\"style\",\"grid-template-columns: unset !important\"]}","{\"selector\":\".post-block:has(.banner)\",\"action\":[\"style\",\"min-height: 0 !important\"]}","{\"selector\":\"div.page-section__element--inner-fluent-side\",\"action\":[\"style\",\"max-width: 100% !important; margin-right: 0 !important\"]}\n{\"selector\":\"div.site\",\"action\":[\"style\",\"margin-top: 20px !important\"]}"];
const argsSeqs = [0,1,2,3,4,-4,18,5,6,7,8,9,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,30,31];
const hostnamesMap = new Map([["1plus1.ua",1],["1plus1.video",2],["4mama.ua",3],["agronews.ua",4],["agroreview.com",4],["ko.com.ua",5],["budport.com.ua",7],["buhgalter.com.ua",8],["buhgalter911.com",8],["businessua.com",9],["defence-ua.com",10],["dumskaya.net",11],["gagadget.com",12],["gazetapo.lviv.ua",13],["happymonday.ua",14],["infocar.ua",15],["internetua.com",16],["sinoptik.ua",16],["itc.ua",17],["kinoafisha.ua",18],["kinofilms.ua",19],["kyiv24.news",20],["mind.ua",21],["novynarnia.com",22],["nv.ua",23],["proagro.com.ua",24],["serialno.tv",25],["sportarena.com",26],["synonimy.info",27],["transkarpatia.net",28],["uaserials.pro",29],["versii.if.ua",30],["village.com.ua",31],["xsport.ua",32]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
