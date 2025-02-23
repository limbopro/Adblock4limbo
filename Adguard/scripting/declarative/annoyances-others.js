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

// ruleset: annoyances-others

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\"body, html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"]}"],["{\"selector\":\"body, html\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}"],["{\"selector\":\"figure\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".topic-in-gated-category .container.posts::before\",\"action\":[\"style\",\"background: transparent !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"position: static !important; overflow: auto !important; width: auto !important;\"]}"],["{\"selector\":\".widget-placed\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\".sticky__blackbar\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"._2kkM6y\",\"action\":[\"style\",\"padding-top: unset !important;\"]}","{\"selector\":\".modal_open\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: unset !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display: block !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: scroll !important\"]}"],["{\"selector\":\".ch-bubble-border.clickable .ch-bubble-action\",\"action\":[\"style\",\"pointer-events: auto;\"]}","{\"selector\":\".ch-bubble-border.clickable\",\"action\":[\"style\",\"pointer-events: none;\"]}"],["{\"selector\":\".site-header__inner__3w4vv\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\".page-header\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"#map-container\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"body.sg-dialog-no-scroll\",\"action\":[\"style\",\"overflow: auto !important; position: static !important;\"]}"],["{\"selector\":\".post.blur\",\"action\":[\"style\",\"filter: none !important;\"]}"],["{\"selector\":\".no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"]];

const hostnamesMap = new Map([["splashlearn.com",0],["linuxbabe.com",0],["fastcompany.com",1],["huckberry.com",1],["thecradle.co",1],["abhiandroid.com",1],["nerdwallet.com",2],["timeslive.co.za",2],["commondreams.org",[2,7]],["truthout.org",2],["kartable.fr",2],["ociservices.gov.in",2],["e360.yale.edu",2],["valuewalk.com",2],["neilpatel.com",2],["levernews.com",2],["newrepublic.com",2],["imagecolorpicker.com",2],["apnews.com",2],["currentaffairs.org",2],["news.mongabay.com",2],["bloomberg.com",3],["linux.do",4],["ground.news",5],["t-nation.com",5],["flightconnections.com",[5,17]],["reason.com",6],["scribd.com",8],["shein.com",9],["forvo.com",10],["route-fifty.com",11],["themoscowtimes.com",11],["grammarly.com",11],["medscape.com",11],["onegreenplanet.org",12],["walletinvestor.com",13],["watchsomuchproxy.com",13],["mathway.com",14],["reuters.com",15],["4kdownload.com",16],["brainly.co.id",18],["yoreparo.com",19],["ufret.jp",20]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
