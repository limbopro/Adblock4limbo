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

const argsList = [["{\"selector\":\"body, html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"]}"],["{\"selector\":\".page-header\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"body, html\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}"],["{\"selector\":\"figure\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: unset !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\".ch-bubble-border.clickable .ch-bubble-action\",\"action\":[\"style\",\"pointer-events: auto;\"]}","{\"selector\":\".ch-bubble-border.clickable\",\"action\":[\"style\",\"pointer-events: none;\"]}"],["{\"selector\":\".site-header__inner__ZJDlb\",\"action\":[\"style\",\"top:0 !important\"]}"],["{\"selector\":\"._2kkM6y\",\"action\":[\"style\",\"padding-top: unset !important;\"]}","{\"selector\":\".modal_open\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"position: static !important; overflow: auto !important; width: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: scroll !important\"]}"],["{\"selector\":\".topic-in-gated-category .container.posts::before\",\"action\":[\"style\",\"background: transparent !important;\"]}"],["{\"selector\":\"body.sg-dialog-no-scroll\",\"action\":[\"style\",\"overflow: auto !important; position: static !important;\"]}"],["{\"selector\":\".no-scroll\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display: block !important\"]}"]];

const hostnamesMap = new Map([["thecradle.co",0],["abhiandroid.com",0],["fastcompany.com",0],["huckberry.com",0],["4kdownload.com",1],["apnews.com",2],["imagecolorpicker.com",2],["levernews.com",2],["neilpatel.com",2],["nerdwallet.com",2],["newrepublic.com",2],["valuewalk.com",2],["e360.yale.edu",2],["kartable.fr",2],["ociservices.gov.in",2],["commondreams.org",2],["timeslive.co.za",2],["bloomberg.com",3],["forvo.com",4],["grammarly.com",5],["route-fifty.com",5],["themoscowtimes.com",5],["revolver.news",5],["linuxbabe.com",6],["splashlearn.com",6],["mathway.com",7],["reuters.com",8],["scribd.com",9],["shein.com",10],["t-nation.com",11],["walletinvestor.com",12],["watchsomuchproxy.com",12],["linux.do",13],["brainly.co.id",14],["ufret.jp",15],["onegreenplanet.org",16]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
