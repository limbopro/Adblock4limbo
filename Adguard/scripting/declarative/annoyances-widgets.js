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

// ruleset: annoyances-widgets

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#left[style^=\\\"position: fixed\\\"]\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important; padding-right: 0 !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-top: 40px !important;\"]}"],["{\"selector\":\"#sub\",\"action\":[\"style\",\"margin-top: 0!important;\"]}"],["{\"selector\":\".raibudoasine\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".left-container\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\".rss-wrapper2\",\"action\":[\"style\",\"height: 0 !important; background: none !important; padding-bottom: 0 !important;\"]}"],["{\"selector\":\"#blog-body-outer > #left-t\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".top-right\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"#content11\",\"action\":[\"style\",\"padding-top:0 !important;\"]}","{\"selector\":\"#wrap-main\",\"action\":[\"style\",\"padding-top:0 !important;\"]}"],["{\"selector\":\"#banner\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".td-outer-container\",\"action\":[\"style\",\"background-image: none !important; cursor: default !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-top: 180px!important;\"]}"]];

const hostnamesMap = new Map([["2chav.com",0],["cavalierdaily.com",1],["idol-blog.com",2],["inazumanews2.com",3],["nijimoemoe.com",4],["shurabanote.com",5],["kagekidan.net",5],["anicobin.ldblog.jp",6],["blog.livedoor.jp",7],["pokemon-matome.net",8],["geino2news.seesaa.net",9],["osboxes.org",10],["proagro.com.ua",11],["hromadske.ua",12],["ironsaga-msoku.xyz",13]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
