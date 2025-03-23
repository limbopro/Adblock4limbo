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
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"#mvp-site-main\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"background-image: none !important;\"]}","{\"selector\":\"#LRGR\",\"action\":[\"style\",\"background: none !important;\"]}","{\"selector\":\"#sp-component\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#primary\",\"action\":[\"style\",\"margin: 0 auto !important;\"]}"];
const argsSeqs = [0,1,2,3,4,5];
const hostnamesMap = new Map([["kalamatatimes.gr",1],["kozanilife.gr",2],["lamiareport.gr",3],["serraikanea.gr",4],["start2click.com",5]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
