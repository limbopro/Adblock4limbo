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

const argsList = [["{\"selector\":\"#whitetop\",\"action\":[\"style\",\"margin-top: 0px !important\"]}","{\"selector\":\".n_ListHeader\",\"action\":[\"style\",\"margin-top: 5px !important\"]}"],["{\"selector\":\"#ad-top-banner-placeholder\",\"action\":[\"style\",\"min-height: 0px !important\"]}"],["{\"selector\":\"body.haslocation12\",\"action\":[\"style\",\"padding-top: 10px !important\"]}"],["{\"selector\":\".modal-container.open\",\"action\":[\"style\",\"padding-top: unset !important\"]}","{\"selector\":\".site-wrapper[data-state=\\\"panorama\\\"]\",\"action\":[\"style\",\"padding-top: 70px !important\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-left: 0 !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important\"]}"],["{\"selector\":\".custom-background\",\"action\":[\"style\",\"background-image: none !important\"]}"],["{\"selector\":\".paywall-wrapper\",\"action\":[\"style\",\"top: unset !important\"]}"],["{\"selector\":\".paywall\",\"action\":[\"style\",\"top: 0px !important\"]}"],["{\"selector\":\".article-container > .row > .col-12.col-xl-8\",\"action\":[\"style\",\"width: 98.1% !important; max-width: none !important; flex: none !important\"]}"],["{\"selector\":\".ads\",\"action\":[\"style\",\"display: block !important\"]}"],["{\"selector\":\".product-list-row .description\",\"action\":[\"style\",\"position: static !important; word-break: break-word !important\"]}"],["{\"selector\":\".wrapper\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\"#paywall\",\"action\":[\"style\",\"margin-top: 0px !important\"]}","{\"selector\":\".paywall-box\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\"html > body\",\"action\":[\"style\",\"background-image: none !important\"]}"],["{\"selector\":\".article\",\"action\":[\"style\",\"padding-bottom: 10px !important\"]}"],["{\"selector\":\".background-ad\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".promotion\",\"action\":[\"style\",\"top: 0px !important\"]}"],["{\"selector\":\"#wrapper > #leaderboard > div\",\"action\":[\"style\",\"display: block !important\"]}"],["{\"selector\":\".auto_expandable\",\"action\":[\"style\",\"margin-top: 21px !important\"]}"],["{\"selector\":\"#topbanner\",\"action\":[\"style\",\"height: 1px !important\"]}"],["{\"selector\":\".container\",\"action\":[\"style\",\"margin-top: 0 !important\"]}","{\"selector\":\".main-header\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"],["{\"selector\":\".padded.limit--tight.limit\",\"action\":[\"style\",\"padding-top: 15px !important\"]}","{\"selector\":\"div.padded--no-bottom.padded--less.padded.limit\",\"action\":[\"style\",\"padding-top: 5px !important\"]}"],["{\"selector\":\"#aid-overlay\",\"action\":[\"style\",\"background: none !important; height: 0px !important; min-height: unset !important\"]}","{\"selector\":\"amedia-incentive\",\"action\":[\"style\",\"top: 1600px !important\"]}","{\"selector\":\"amedia-include[src*=\\\"/incentive/\\\"]\",\"action\":[\"style\",\"border: 10px !important; border-color: #CD5C5C !important; border-style: solid !important\"]}"],["{\"selector\":\".aid-background-blur\",\"action\":[\"style\",\"filter: none !important\"]}"],["{\"selector\":\".container-newsfeed + section .c-teaser__image\",\"action\":[\"style\",\"max-height: none !important\"]}","{\"selector\":\".container-newsfeed + section .o-grid__col:not(.u-size-onethird-medium):not([data-ga-action=\\\"1\\\"])\",\"action\":[\"style\",\"height: 200px !important\"]}"],["{\"selector\":\".article-content\",\"action\":[\"style\",\"padding: 0\"]}"],["{\"selector\":\"body[style^=\\\"padding\\\"]\",\"action\":[\"style\",\"padding-top: 80px !important\"]}"],["{\"selector\":\".article-text-preview\",\"action\":[\"style\",\"-webkit-text-fill-color: black !important\"]}"],["{\"selector\":\"footer\",\"action\":[\"style\",\"margin: 0 !important\"]}"],["{\"selector\":\"#googlead-toppbanner\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".rightColumn\",\"action\":[\"style\",\"margin-top: 10px !important\"]}"],["{\"selector\":\".teaser\",\"action\":[\"style\",\"mask-image: none !important\"]}"],["{\"selector\":\".faded-content\",\"action\":[\"style\",\"max-height: none !important\"]}"],["{\"selector\":\".paywall-fade-out\",\"action\":[\"style\",\"overflow-y: unset !important\"]}","{\"selector\":\".paywall-login\",\"action\":[\"style\",\"margin-top: 30px !important\"]}"],["{\"selector\":\"#content\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".t3-header\",\"action\":[\"style\",\"margin-top: 0px !important\"]}"],["{\"selector\":\".content-marketing-ribbon\",\"action\":[\"style\",\"margin-top: 20px !important\"]}"],["{\"selector\":\"main\",\"action\":[\"style\",\"min-height: unset !important\"]}","{\"selector\":\"section > section:first-of-type + section:last-of-type:has([class*=\\\"  \\\"])\",\"action\":[\"style\",\"width: 100% !important; max-width: 675px !important\"]}","{\"selector\":\"section[class^=\\\"GreatCanvas__smallArticles-\\\"]\",\"action\":[\"style\",\"width: 100% !important\"]}","{\"selector\":\"section[hidden] + section\",\"action\":[\"style\",\"column-count: 3 !important; width: 100% !important\"]}"],["{\"selector\":\".page-container\",\"action\":[\"style\",\"margin-top: 0 !important\"]}"]];

const hostnamesMap = new Map([["no.afterdawn.com",1],["langrenn.com",2],["mytastednk.com",3],["mytastenor.com",3],["nakenprat.com",4],["playpilot.com",5],["www.aftenposten.no",5],["tvkampen.com",6],["tvsporten.dk",6],["berlingske.dk",7],["borsen.dk",8],["bt.dk",9],["dagensbyggeri.dk",10],["edbpriser.dk",11],["esportsmagasinet.dk",12],["information.dk",13],["inputmag.dk",14],["journalisten.dk",15],["lydogbillede.dk",16],["lydogbilde.no",16],["mm.dk",17],["mx.dk",18],["skagensavis.dk",19],["spanienidag.es",20],["mbl.is",21],["visir.is",22],["aasavis.no",[23,24]],["amta.no",[23,24]],["an.no",[23,24]],["ao.no",[23,24]],["auraavis.no",[23,24]],["austagderblad.no",[23,24]],["avisenagder.no",[23,24]],["ba.no",[23,24]],["bygdebladet.no",[23,24]],["bygdeposten.no",[23,24]],["dalane-tidende.no",[23,24]],["dt.no",[23,24]],["eikerbladet.no",[23,24]],["enebakkavis.no",[23,24]],["f-b.no",[23,24]],["finnmarkdagblad.no",[23,24]],["finnmarken.no",[23,24]],["firda.no",[23,24]],["firdaposten.no",[23,24]],["fremover.no",[23,24]],["gbnett.no",[23,24]],["gjengangeren.no",[23,24]],["glomdalen.no",[23,24]],["h-avis.no",[23,24]],["ha-halden.no",[23,24]],["hadeland.no",[23,24]],["hardanger-folkeblad.no",[23,24]],["helg.no",[23,24]],["iharstad.no",[23,24]],["indre.no",[23,24]],["jarlsbergavis.no",[23,24]],["jbl.no",[23,24]],["kv.no",[23,24]],["kvinnheringen.no",[23,24]],["laagendalsposten.no",[23,24]],["lierposten.no",[23,24]],["lofotposten.no",[23,24]],["lyngdalsavis.no",[23,24]],["merakerposten.no",[23,24]],["moss-avis.no",[23,24]],["nettavisen.no",[23,24]],["nidaros.no",[23,24]],["noblad.no",[23,24]],["nordhordland.no",[23,24]],["nordlys.no",[23,24]],["nt24.no",[23,24]],["oa.no",[23,24]],["oblad.no",[23,24]],["op.no",[23,24]],["ostlendingen.no",[23,24]],["oyene.no",[23,24]],["r-a.no",[23,24]],["rablad.no",[23,24]],["ranablad.no",[23,24]],["rb.no",[23,24]],["retten.no",[23,24]],["rha.no",[23,24]],["ringblad.no",[23,24]],["ringsaker-blad.no",[23,24]],["sa.no",[23,24]],["sandeavis.no",[23,24]],["sandnesposten.no",[23,24]],["sb.no",[23,24]],["smaalenene.no",[23,24]],["sognavis.no",[23,24]],["solabladet.no",[23,24]],["solungavisa.no",[23,24]],["strandbuen.no",[23,24]],["svelviksposten.no",[23,24]],["ta.no",[23,24]],["tb.no",[23,24]],["telen.no",[23,24]],["tk.no",[23,24]],["tvedestrandsposten.no",[23,24]],["varingen.no",[23,24]],["vestbyavis.no",[23,24]],["alt.no",24],["abcnyheter.no",25],["aftenbladet.no",26],["byggebolig.no",27],["canariavisen.no",28],["digi.no",29],["tu.no",29],["dn.no",30],["e24.no",31],["friflyt.no",32],["jeger.no",32],["landevei.no",32],["norsk-klatring.no",32],["terrengsykkel.no",32],["utemagasinet.no",32],["h-a.no",33],["lokal-avisa.no",33],["ringsakern.no",33],["stangeavisa.no",33],["kommunal-rapport.no",34],["kondis.no",35],["samler.no",36],["seher.no",37],["tek.no",38],["vgtv.no",39]]);

const entitiesMap = new Map([["qxl",0]]);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
