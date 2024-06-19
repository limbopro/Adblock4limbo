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

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"a2blckLayer\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"testadblock\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"h3w\",\"tasks\":[[\"has-text\",\"Támogatóink\"]]}]]}","{\"selector\":\"[class*=\\\"item_container\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"_tag\\\"]\",\"tasks\":[[\"has-text\",\"hirdetés\"]]}]]}"],["{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Állásajánlat\"]]}]]}"],["{\"selector\":\".sb-widget\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.onload = window.onfocus\"]]}"],["{\"selector\":\".wrapRectangle\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"Quantcast Choice\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"cli_cookiebar_\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ai_run_\"]]}"],["{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"/(Hirdetés|[Hh].*i.*r.*d.*e.*t.*é.*s)/\"],[\"spath\",\" + div[class]\"]]}]]}"],["{\"selector\":\".ik\",\"tasks\":[[\"has-text\",\"/^[Hh]irdetés$/\"]]}"],["{\"selector\":\"div[style*=\\\"margin-bottom:10px\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"HIRDETÉS\"]]}]]}"],["{\"selector\":\"div.ct-div-block\",\"tasks\":[[\"has\",{\"selector\":\"> div.ct-div-block > div.ct-text-block\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\".sub-text\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"popUpBannerBox Ad300 hirdetes_box\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"fbmodal-title\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.atob\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ShadowRoot\"]]}"]];

const hostnamesMap = new Map([["hazipatika.com",0],["24.hu",0],["hungliaonline.com",1],["openspeedtest.com",2],["bpiautosok.hu",3],["budapestkornyeke.hu",4],["cyberpress.hu",5],["divany.hu",6],["totalbike.hu",6],["totalcar.hu",6],["egeszsegkalauz.hu",7],["gamer.hu",8],["hang.hu",9],["magyarhang.org",9],["hardverapro.hu",10],["prohardver.hu",10],["idokep.hu",11],["kezilabda.hu",12],["kiszamolo.hu",13],["mandiner.hu",14],["port.hu",15],["portfolio.hu",16],["szeretlekmagyarorszag.hu",17],["filmvilag.me",18]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
