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

// ruleset: nld-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"#b_re\",\"action\":[\"style\",\"display: block !important; min-height: 2px !important;\"]}\n{\"selector\":\".widebnr\",\"action\":[\"style\",\"display: block !important; min-height: 2px !important;\"]}","{\"selector\":\"body .pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: initial !important;\"]}","{\"selector\":\".pub300x250.pub300x250m.pub728x90.text-ad.textAd.textad.textads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".css-19tp5d5\",\"action\":[\"style\",\"max-width: unset !important; margin-right: unset !important;\"]}","{\"selector\":\".takeover #main #maincontainer\",\"action\":[\"style\",\"margin-top: 15px !important;\"]}","{\"selector\":\".article-sidebar__ad\",\"action\":[\"style\",\"visibility: hidden !important;\"]}","{\"selector\":\"aside[class^=\\\"Ad_\\\"]\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".ad-banner-container\",\"action\":[\"style\",\"position: absolute!important; left: -3000px!important;\"]}","{\"selector\":\"#advertentie-top\",\"action\":[\"style\",\"height: 0!important;\"]}","{\"selector\":\".adcontainer-Rectangle\",\"action\":[\"style\",\"position: absolute!important; left: -4000px!important;\"]}"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10];
const hostnamesMap = new Map([["tweakers.net",1],["kijk.nl",2],["player.medialaancdn.be",3],["vtm.be",3],["rtl.nl",4],["datumprikker.nl",5],["rtlnieuws.nl",6],["gpblog.com",7],["omroepbrabant.nl",8],["handbalstartpunt.nl",9],["omroepwest.nl",10]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
