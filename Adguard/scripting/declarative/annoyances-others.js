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

const argsList = ["","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important\"]}","{\"selector\":\"body, html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"]}","{\"selector\":\"body, html\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}","{\"selector\":\"figure\",\"action\":[\"style\",\"opacity: 1 !important;\"]}","{\"selector\":\".topic-in-gated-category .container.posts::before\",\"action\":[\"style\",\"background: transparent !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"position: static !important; overflow: auto !important; width: auto !important;\"]}","{\"selector\":\".widget-placed\",\"action\":[\"style\",\"top:0 !important\"]}","{\"selector\":\".sticky__blackbar\",\"action\":[\"style\",\"top:0 !important\"]}","{\"selector\":\"._2kkM6y\",\"action\":[\"style\",\"padding-top: unset !important;\"]}\n{\"selector\":\".modal_open\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: unset !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"display: block !important\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: scroll !important\"]}","{\"selector\":\".ch-bubble-border.clickable .ch-bubble-action\",\"action\":[\"style\",\"pointer-events: auto;\"]}\n{\"selector\":\".ch-bubble-border.clickable\",\"action\":[\"style\",\"pointer-events: none;\"]}","{\"selector\":\".site-header__inner__3w4vv\",\"action\":[\"style\",\"top:0 !important\"]}","{\"selector\":\".page-header\",\"action\":[\"style\",\"top:0 !important\"]}","{\"selector\":\"#map-container\",\"action\":[\"style\",\"top:0 !important\"]}","{\"selector\":\"body.sg-dialog-no-scroll\",\"action\":[\"style\",\"overflow: auto !important; position: static !important;\"]}","{\"selector\":\".post.blur\",\"action\":[\"style\",\"filter: none !important;\"]}","{\"selector\":\".no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\".suppress-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"body[style=\\\"overflow-y: hidden;\\\"]\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"];
const argsSeqs = [0,1,2,3,-3,8,4,5,6,-6,18,7,9,10,11,12,13,14,15,16,17,19,20,21,22,23];
const hostnamesMap = new Map([["splashlearn.com",1],["linuxbabe.com",1],["fastcompany.com",2],["huckberry.com",2],["thecradle.co",2],["abhiandroid.com",2],["nerdwallet.com",3],["timeslive.co.za",3],["commondreams.org",4],["truthout.org",3],["kartable.fr",3],["ociservices.gov.in",3],["e360.yale.edu",3],["valuewalk.com",3],["neilpatel.com",3],["levernews.com",3],["newrepublic.com",3],["imagecolorpicker.com",3],["apnews.com",3],["currentaffairs.org",3],["news.mongabay.com",3],["bloomberg.com",6],["linux.do",7],["ground.news",8],["t-nation.com",8],["flightconnections.com",9],["reason.com",11],["scribd.com",12],["shein.com",13],["salary.com",13],["forvo.com",14],["route-fifty.com",15],["themoscowtimes.com",15],["grammarly.com",15],["medscape.com",15],["onegreenplanet.org",16],["walletinvestor.com",17],["watchsomuchproxy.com",17],["mathway.com",18],["reuters.com",19],["4kdownload.com",20],["brainly.co.id",21],["yoreparo.com",22],["ufret.jp",23],["paircare.jp",24],["saisoncard.co.jp",25]]);
const hasEntities = false;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
