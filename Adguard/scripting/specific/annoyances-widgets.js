/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: annoyances-widgets

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["","#chatbotToronto","#floating-experience-feature-tour-popover","#view-__module-context__-_amzn_conversational-experience-module__tandalone-0",".chat-button",".chat-container",".chatWindow",".chatbotSection",".chatbotSlider",".chatbotentrybtn",".healthshotsChannels",".rufus-panel-container",".secBannerWidget",".woot-widget-bubble"];
const argsSeqs = [0,1,-2,3,-4,5,-6,-7,-8,-9,-10,12,11,13];
const hostnamesMap = new Map([["hp.com",1],["docs.aws.amazon.com",2],["casbin.org",4],["healthshots.com",6],["amazon.com",12],["therealdeal.com",13]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
