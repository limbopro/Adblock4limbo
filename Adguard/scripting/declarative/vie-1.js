/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto!important\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\"div.layout.pt-mobi-top\",\"action\":[\"style\",\"padding-top: 0 !important\"]}","{\"selector\":\"header.bg-white\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"]];

const hostnamesMap = new Map([["vebo8.link",0],["khomuc9.live",0],["vebot.live",0],["90phutx.tv",0],["mitomb.tv",0],["xoilac89.tv",0],["cakhia7.vip",0],["blog.abit.vn",0],["chotlo.me",1],["saostar.vn",2]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
