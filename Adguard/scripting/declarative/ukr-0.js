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

const argsList = [["{\"selector\":\"div.gridSection__list\",\"action\":[\"style\",\"max-width: none !important\"]}","{\"selector\":\"div.news__items\",\"action\":[\"style\",\"max-width: none !important\"]}"],["{\"selector\":\"div.playlist-player\",\"action\":[\"style\",\"max-width: 1155px !important\"]}","{\"selector\":\"div.playlist-short-content\",\"action\":[\"style\",\"min-height: unset !important\"]}"],["{\"selector\":\".sb-popular\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\"header.page-head\",\"action\":[\"style\",\"height: unset !important\"]}"],["{\"selector\":\"body.access *\",\"action\":[\"style\",\"filter: none !important\"]}","{\"selector\":\"body.access\",\"action\":[\"style\",\"overflow: auto !important; position: relative !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-color: unset !important\"]}"],["{\"selector\":\"div.news-sm-block.border-top-block.mt-280\",\"action\":[\"style\",\"margin-top: 0px !important; padding-top: 0px !important; border-top: unset !important\"]}"],["{\"selector\":\"nav.nav\",\"action\":[\"style\",\"padding-top: 0 !important\"]}"],["{\"selector\":\".body-pt_toplink\",\"action\":[\"style\",\"padding-top: 80px !important\"]}"],["{\"selector\":\"#site\",\"action\":[\"style\",\"margin-top: unset !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important; padding-top: 0 !important;\"]}"],["{\"selector\":\"#contentbg\",\"action\":[\"style\",\"margin-top: 35px !important\"]}","{\"selector\":\"#totalbg\",\"action\":[\"style\",\"background-image: unset !important\"]}"],["{\"selector\":\"head > style:empty\",\"action\":[\"style\",\"all: inherit !important\"]}"],["{\"selector\":\"body.single-post > div > section > div > div > aside > ul > li.commented-posts-widget\",\"action\":[\"style\",\"margin-top: unset !important; padding-top: unset !important\"]}"],["{\"selector\":\"body.with-image\",\"action\":[\"style\",\"padding-top: 20px !important\"]}"],["{\"selector\":\"#sitewrap\",\"action\":[\"style\",\"background-image: unset !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: unset !important\"]}","{\"selector\":\"div.gbg\",\"action\":[\"style\",\"top:unset !important\"]}"],["{\"selector\":\".site-header\",\"action\":[\"style\",\"top: 0 !important\"]}","{\"selector\":\"div.main-wrapper\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\"div.layout_content\",\"action\":[\"style\",\"margin-top: 50px !important\"]}","{\"selector\":\"h2.b-info-block__title\",\"action\":[\"style\",\"padding-top: 10px !important\"]}"],["{\"selector\":\".border-shadow\",\"action\":[\"style\",\"-webkit-box-shadow: unset !important; box-shadow: unset !important\"]}"],["{\"selector\":\"body.branding\",\"action\":[\"style\",\"padding-top: 20px !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: unset !important\"]}"],["{\"selector\":\"div.nomobile\",\"action\":[\"style\",\"margin-top: unset !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important\"]}"],["{\"selector\":\".tbr-social > span > a\",\"action\":[\"style\",\"color: unset !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background: unset !important\"]}"],["{\"selector\":\".wrap\",\"action\":[\"style\",\"padding-top:20px !important\"]}"],["{\"selector\":\"div.fb-s-blog-two-main__col.brxe-block\",\"action\":[\"style\",\"grid-template-columns: unset !important\"]}"],["{\"selector\":\".post-block:has(.banner)\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\"div.page-section__element--inner-fluent-side\",\"action\":[\"style\",\"max-width: 100% !important; margin-right: 0 !important\"]}","{\"selector\":\"div.site\",\"action\":[\"style\",\"margin-top: 20px !important\"]}"]];

const hostnamesMap = new Map([["1plus1.ua",0],["1plus1.video",1],["4mama.ua",2],["budport.com.ua",3],["buhgalter.com.ua",4],["buhgalter911.com",4],["businessua.com",5],["defence-ua.com",6],["dumskaya.net",7],["gagadget.com",8],["gazetapo.lviv.ua",9],["happymonday.ua",10],["infocar.ua",11],["internetua.com",12],["sinoptik.ua",12],["itc.ua",13],["kinoafisha.ua",14],["kinofilms.ua",15],["ko.com.ua",16],["kyiv24.news",17],["mind.ua",18],["novynarnia.com",19],["nv.ua",20],["serialno.tv",21],["sportarena.com",22],["synonimy.info",23],["transkarpatia.net",24],["uaserials.pro",25],["versii.if.ua",26],["village.com.ua",27],["xsport.ua",28]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
