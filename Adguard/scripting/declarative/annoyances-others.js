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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body, html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"]}"],["{\"selector\":\".page-header\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"body, html\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}"],["{\"selector\":\"figure\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"position: static !important; overflow: auto !important; width: auto !important;\"]}"],["{\"selector\":\"#map-container\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: unset !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\".ch-bubble-border.clickable .ch-bubble-action\",\"action\":[\"style\",\"pointer-events: auto;\"]}","{\"selector\":\".ch-bubble-border.clickable\",\"action\":[\"style\",\"pointer-events: none;\"]}"],["{\"selector\":\".widget-placed\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\".site-header__inner__ZJDlb\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"._2kkM6y\",\"action\":[\"style\",\"padding-top: unset !important;\"]}","{\"selector\":\".modal_open\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: scroll !important\"]}"],["{\"selector\":\".post.blur\",\"action\":[\"style\",\"filter: none !important;\"]}"],["{\"selector\":\".topic-in-gated-category .container.posts::before\",\"action\":[\"style\",\"background: transparent !important;\"]}"],["{\"selector\":\"body.sg-dialog-no-scroll\",\"action\":[\"style\",\"overflow: auto !important; position: static !important;\"]}"],["{\"selector\":\".no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".sticky__blackbar\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display: block !important\"]}"]];

const hostnamesMap = new Map([["thecradle.co",0],["abhiandroid.com",0],["fastcompany.com",0],["huckberry.com",0],["4kdownload.com",1],["apnews.com",2],["imagecolorpicker.com",2],["levernews.com",2],["news.mongabay.com",2],["neilpatel.com",2],["nerdwallet.com",2],["newrepublic.com",2],["valuewalk.com",2],["e360.yale.edu",2],["kartable.fr",2],["ociservices.gov.in",2],["timeslive.co.za",2],["bloomberg.com",3],["flightconnections.com",[4,5]],["t-nation.com",4],["ground.news",4],["forvo.com",6],["grammarly.com",7],["route-fifty.com",7],["themoscowtimes.com",7],["linuxbabe.com",8],["splashlearn.com",8],["mathway.com",9],["reason.com",10],["reuters.com",11],["scribd.com",12],["shein.com",13],["walletinvestor.com",14],["watchsomuchproxy.com",14],["yoreparo.com",15],["linux.do",16],["brainly.co.id",17],["ufret.jp",18],["commondreams.org",19],["onegreenplanet.org",20]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
