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

// ruleset: nor-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#whitetop\",\"action\":[\"style\",\"margin-top: 0px !important\"]}","{\"selector\":\".n_ListHeader\",\"action\":[\"style\",\"margin-top: 5px !important\"]}"],["{\"selector\":\"#ad-top-banner-placeholder\",\"action\":[\"style\",\"min-height: 0px !important\"]}"],["{\"selector\":\".modal-container.open\",\"action\":[\"style\",\"padding-top: unset !important\"]}","{\"selector\":\".site-wrapper[data-state=\\\"panorama\\\"]\",\"action\":[\"style\",\"padding-top: 70px !important\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-left: 0 !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\".custom-background\",\"action\":[\"style\",\"background-image: none !important\"]}"],["{\"selector\":\".paywall-wrapper\",\"action\":[\"style\",\"top: unset !important\"]}"],["{\"selector\":\".paywall\",\"action\":[\"style\",\"top: 0px !important\"]}"],["{\"selector\":\".article-container > .row > .col-12.col-xl-8\",\"action\":[\"style\",\"width: 98.1% !important; max-width: none !important; flex: none !important\"]}"],["{\"selector\":\".product-list-row .description\",\"action\":[\"style\",\"position: static !important; word-break: break-word !important\"]}"],["{\"selector\":\".wrapper\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\"#paywall\",\"action\":[\"style\",\"margin-top: 0px !important\"]}","{\"selector\":\".paywall-box\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".article\",\"action\":[\"style\",\"padding-bottom: 10px !important\"]}"],["{\"selector\":\".background-ad\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".promotion\",\"action\":[\"style\",\"top: 0px !important\"]}"],["{\"selector\":\"#wrapper > #leaderboard > div\",\"action\":[\"style\",\"display: block !important\"]}"],["{\"selector\":\".auto_expandable\",\"action\":[\"style\",\"margin-top: 21px !important\"]}"],["{\"selector\":\"#topbanner\",\"action\":[\"style\",\"height: 1px !important\"]}"],["{\"selector\":\".container\",\"action\":[\"style\",\"margin-top: 0 !important\"]}","{\"selector\":\".main-header\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\".padded.limit--tight.limit\",\"action\":[\"style\",\"padding-top: 15px !important\"]}","{\"selector\":\"div.padded--no-bottom.padded--less.padded.limit\",\"action\":[\"style\",\"padding-top: 5px !important\"]}"],["{\"selector\":\"#aid-overlay\",\"action\":[\"style\",\"background: none !important; height: 0px !important; min-height: unset !important\"]}","{\"selector\":\"amedia-incentive\",\"action\":[\"style\",\"top: 1600px !important\"]}","{\"selector\":\"amedia-include[src*=\\\"/incentive/\\\"]\",\"action\":[\"style\",\"border: 10px !important; border-color: #CD5C5C !important; border-style: solid !important\"]}"],["{\"selector\":\".aid-background-blur\",\"action\":[\"style\",\"filter: none !important\"]}"],["{\"selector\":\".container-newsfeed + section .c-teaser__image\",\"action\":[\"style\",\"max-height: none !important\"]}","{\"selector\":\".container-newsfeed + section .o-grid__col:not(.u-size-onethird-medium):not([data-ga-action=\\\"1\\\"])\",\"action\":[\"style\",\"height: 200px !important\"]}"],["{\"selector\":\".article-content\",\"action\":[\"style\",\"padding: 0\"]}"],["{\"selector\":\"body[style^=\\\"padding\\\"]\",\"action\":[\"style\",\"padding-top: 80px !important\"]}"],["{\"selector\":\".article-text-preview\",\"action\":[\"style\",\"-webkit-text-fill-color: black !important\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"margin: 0 !important\"]}"],["{\"selector\":\"#googlead-toppbanner\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".rightColumn\",\"action\":[\"style\",\"margin-top: 10px !important\"]}"],["{\"selector\":\".teaser\",\"action\":[\"style\",\"mask-image: none !important\"]}"],["{\"selector\":\".faded-content\",\"action\":[\"style\",\"max-height: none !important\"]}"],["{\"selector\":\".paywall-fade-out\",\"action\":[\"style\",\"overflow-y: unset !important\"]}","{\"selector\":\".paywall-login\",\"action\":[\"style\",\"margin-top: 30px !important\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".t3-header\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".content-marketing-ribbon\",\"action\":[\"style\",\"margin-top: 20px !important\"]}"],["{\"selector\":\"main\",\"action\":[\"style\",\"min-height: unset !important\"]}","{\"selector\":\"section > section:first-of-type + section:last-of-type:has([class*=\\\"  \\\"])\",\"action\":[\"style\",\"width: 100% !important; max-width: 675px !important\"]}","{\"selector\":\"section[class^=\\\"GreatCanvas__smallArticles-\\\"]\",\"action\":[\"style\",\"width: 100% !important\"]}","{\"selector\":\"section[hidden] + section\",\"action\":[\"style\",\"column-count: 3 !important; width: 100% !important\"]}"],["{\"selector\":\".page-container\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"]];

const hostnamesMap = new Map([["no.afterdawn.com",1],["mytastednk.com",2],["mytastenor.com",2],["nakenprat.com",3],["playpilot.com",4],["www.aftenposten.no",4],["tvkampen.com",5],["tvsporten.dk",5],["berlingske.dk",6],["borsen.dk",7],["bt.dk",8],["edbpriser.dk",9],["esportsmagasinet.dk",10],["information.dk",11],["journalisten.dk",12],["lydogbillede.dk",13],["lydogbilde.no",13],["mm.dk",14],["mx.dk",15],["skagensavis.dk",16],["spanienidag.es",17],["mbl.is",18],["visir.is",19],["aasavis.no",[20,21]],["amta.no",[20,21]],["an.no",[20,21]],["ao.no",[20,21]],["auraavis.no",[20,21]],["austagderblad.no",[20,21]],["avisenagder.no",[20,21]],["ba.no",[20,21]],["bygdebladet.no",[20,21]],["bygdeposten.no",[20,21]],["dalane-tidende.no",[20,21]],["dt.no",[20,21]],["eikerbladet.no",[20,21]],["enebakkavis.no",[20,21]],["f-b.no",[20,21]],["finnmarkdagblad.no",[20,21]],["finnmarken.no",[20,21]],["firda.no",[20,21]],["firdaposten.no",[20,21]],["fremover.no",[20,21]],["gbnett.no",[20,21]],["gjengangeren.no",[20,21]],["glomdalen.no",[20,21]],["h-avis.no",[20,21]],["ha-halden.no",[20,21]],["hadeland.no",[20,21]],["hardanger-folkeblad.no",[20,21]],["helg.no",[20,21]],["iharstad.no",[20,21]],["indre.no",[20,21]],["jarlsbergavis.no",[20,21]],["jbl.no",[20,21]],["kv.no",[20,21]],["kvinnheringen.no",[20,21]],["laagendalsposten.no",[20,21]],["lierposten.no",[20,21]],["lofotposten.no",[20,21]],["lyngdalsavis.no",[20,21]],["merakerposten.no",[20,21]],["moss-avis.no",[20,21]],["nettavisen.no",[20,21]],["nidaros.no",[20,21]],["noblad.no",[20,21]],["nordhordland.no",[20,21]],["nordlys.no",[20,21]],["nt24.no",[20,21]],["oa.no",[20,21]],["oblad.no",[20,21]],["op.no",[20,21]],["ostlendingen.no",[20,21]],["oyene.no",[20,21]],["r-a.no",[20,21]],["rablad.no",[20,21]],["ranablad.no",[20,21]],["rb.no",[20,21]],["retten.no",[20,21]],["rha.no",[20,21]],["ringblad.no",[20,21]],["ringsaker-blad.no",[20,21]],["sa.no",[20,21]],["sandeavis.no",[20,21]],["sandnesposten.no",[20,21]],["sb.no",[20,21]],["smaalenene.no",[20,21]],["sognavis.no",[20,21]],["solabladet.no",[20,21]],["solungavisa.no",[20,21]],["strandbuen.no",[20,21]],["svelviksposten.no",[20,21]],["ta.no",[20,21]],["tb.no",[20,21]],["telen.no",[20,21]],["tk.no",[20,21]],["tvedestrandsposten.no",[20,21]],["varingen.no",[20,21]],["vestbyavis.no",[20,21]],["alt.no",21],["abcnyheter.no",22],["aftenbladet.no",23],["byggebolig.no",24],["canariavisen.no",25],["digi.no",26],["tu.no",26],["dn.no",27],["e24.no",28],["friflyt.no",29],["jeger.no",29],["landevei.no",29],["norsk-klatring.no",29],["terrengsykkel.no",29],["utemagasinet.no",29],["h-a.no",30],["lokal-avisa.no",30],["ringsakern.no",30],["stangeavisa.no",30],["kommunal-rapport.no",31],["kondis.no",32],["samler.no",33],["seher.no",34],["tek.no",35],["vgtv.no",36]]);

const entitiesMap = new Map([["qxl",0]]);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
