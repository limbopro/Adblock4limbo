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

// ruleset: hrv-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\".tie-col-md-8\",\"action\":[\"style\",\"width: 100% !important\"],\"cssable\":true}]","[{\"selector\":\"#mvp-site-main\",\"action\":[\"style\",\"margin-top: 0 !important\"],\"cssable\":true}]","[{\"selector\":\".elementor-column-gap-default\",\"tasks\":[[\"has-text\",\"/^SERV\\\\IS/\"]]}]","[{\"selector\":\".iframe-widget[src*=\\\"popularno\\\"]\",\"action\":[\"style\",\"max-height: 250px !important\"],\"cssable\":true}]","[{\"selector\":\".se-group-horizontal-ads-top\",\"action\":[\"style\",\"min-height:unset!important;width:0!important\"],\"cssable\":true}]","[{\"selector\":\"#secondary > aside\",\"tasks\":[[\"has\",{\"selector\":\"> div.widget-header > h3\",\"tasks\":[[\"has-text\",\"/^.*(Marketing|Sponzor\\\\isano).*$/\"]]}]]}]"];
const argsSeqs = [0,1,2,3,4,5,6];
const hostnamesMap = new Map([["niskevesti.rs",1],["filmitv.rs",2],["ul-info.com",3],["blic.rs",4],["oslobodjenje.ba",5],["sveopoznatima.com",6]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
