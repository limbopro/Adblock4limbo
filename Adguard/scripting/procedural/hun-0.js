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

// ruleset: hun-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["",["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\"h3w\",\"tasks\":[[\"has-text\",\"Támogatóink\"]]}]]}","{\"selector\":\"[class*=\\\"item_container\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"_tag\\\"]\",\"tasks\":[[\"has-text\",\"hirdetés\"]]}]]}"],["{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"div[class*=\\\"widget\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .widgettitle\",\"tasks\":[[\"has-text\",\"Állásajánlat\"]]}]]}"],["{\"selector\":\".sb-widget\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\".wrapRectangle\",\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}","{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"Quantcast Choice\"]]}"],["{\"selector\":\".ik\",\"tasks\":[[\"has-text\",\"/^[Hh]irdetés$/\"]]}"],["{\"selector\":\"div[style*=\\\"margin-bottom:10px\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"has-text\",\"HIRDETÉS\"]]}]]}"],["{\"selector\":\"div.ct-div-block\",\"tasks\":[[\"has\",{\"selector\":\"> div.ct-div-block > div.ct-text-block\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}]]}"],["{\"selector\":\".sub-text\",\"tasks\":[[\"has-text\",\"Hirdetés\"]]}"],["{\"selector\":\"div:not(.priv-thread-owner)\",\"tasks\":[[\"has\",{\"selector\":\"> h4\",\"tasks\":[[\"has-text\",\"/(Hirdetés|[Hh].*i.*r.*d.*e.*t.*é.*s)/\"],[\"spath\",\" + div[class]\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ShadowRoot\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"cli_cookiebar_\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"fbmodal-title\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"a2blckLayer\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.onload = window.onfocus\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"adblocker\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"ai_run_\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"testadblock\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"popUpBannerBox Ad300 hirdetes_box\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"window.atob\"]]}"]];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
const hostnamesMap = new Map([["bpiautosok.hu",1],["budapestkornyeke.hu",2],["cyberpress.hu",3],["egeszsegkalauz.hu",4],["idokep.hu",5],["kezilabda.hu",6],["kiszamolo.hu",7],["mandiner.hu",8],["prohardver.hu",9],["mobilarena.hu",9],["itcafe.hu",9],["gamepod.hu",9],["logout.hu",9],["hardverapro.hu",9],["filmvilag.me",10],["gamer.hu",11],["portfolio.hu",12],["24.hu",13],["hazipatika.com",13],["divany.hu",14],["totalcar.hu",14],["totalbike.hu",14],["hungliaonline.com",15],["magyarhang.org",16],["hang.hu",16],["openspeedtest.com",17],["port.hu",18],["szeretlekmagyarorszag.hu",19]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
