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

// ruleset: idn-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"/decodeURIComponent\\\\(escape|fairAdblock/\"]]}]","[{\"selector\":\".content-paralax\",\"action\":[\"style\",\"top: 0!important;\"],\"cssable\":true}]","[{\"selector\":\".outer-wrapper\",\"action\":[\"style\",\"margin-top:60px!important;\"],\"cssable\":true}]","[{\"selector\":\"[data-qa-id=\\\"desktop-article-page-below-images\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ADVERTISEMENT/i\"]]}]]},{\"selector\":\"[data-qa-id^=\\\"desktop-article-page-inline-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/ADVERTISEMENT/i\"]]}]]}]","[{\"selector\":\"[data-src^=\\\"https://neonime.net/wp-content/\\\"]\",\"tasks\":[[\"xpath\",\"..\"]]}]","[{\"selector\":\"body.sticky-header\",\"action\":[\"style\",\"padding: unset!important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"remove-class\",\"pad-apps\"]}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: unset !important; pointer-events: auto !important;\"],\"cssable\":true}]","[{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"],\"cssable\":true}]","[{\"selector\":\"#IDN_InFeed1\",\"tasks\":[[\"upward\",1]]},{\"selector\":\"#IDN_InFeed2\",\"tasks\":[[\"upward\",1]]}]","[{\"selector\":\".product-card\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^Ad$/\"]]}]]},{\"selector\":\"div[data-testid=\\\"divCarouselProduct\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^Ad$/\"]]}]]},{\"selector\":\"div[data-testid=\\\"lazy-frame\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^Ad$/\"]]}]]},{\"selector\":\"div[data-testid^=\\\"divProductRecommendation\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"/^Ad$/\"]]}]]}]","[{\"selector\":\"center\",\"tasks\":[[\"has-text\",\"ADVERTISEMENT\"]]}]","[{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
const hostnamesMap = new Map([["3gpterbaru.com",1],["duniaseksi.com",1],["sindonews.com",2],["dutaislam.com",3],["kumparan.com",4],["neonime.net",5],["intip24news.com",6],["tempo.co",7],["juragan.film",8],["hrv.okestream365.xyz",9],["yummy.co.id",10],["tokopedia.com",11],["cari.com.my",12],["cloud.majalahhewan.com",13],["info.vebma.com",13]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
