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

// ruleset: annoyances-social

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".border-y.py-2\",\"tasks\":[[\"has-text\",\"Share\"]]}"],["{\"selector\":\".col-xs-12 > div\",\"tasks\":[[\"has-text\",\"Follow AppleInsider\"]]}"],["{\"selector\":\".dcr-4gwv1z > ul\",\"tasks\":[[\"has-text\",\"Get our\"]]}"],["{\"selector\":\".edproj-share-video-wrapper\",\"tasks\":[[\"has-text\",\"Share your video\"]]}","{\"selector\":\".edproj-speedhub-wrapper\",\"tasks\":[[\"has-text\",\"read now\"]]}","{\"selector\":\".free-body.text-block > p.content-item\",\"tasks\":[[\"has-text\",\"Email\"]]}"],["{\"selector\":\".elementor-button-wrapper\",\"tasks\":[[\"has-text\",\"Social Media\"]]}"],["{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"SHARE\"]]}"],["{\"selector\":\".elementor-widget-container > h2\",\"tasks\":[[\"has-text\",\"Please share\"]]}"],["{\"selector\":\".execphpwidget\",\"tasks\":[[\"has-text\",\"FREE UPDATES!\"]]}"],["{\"selector\":\".heading-title\",\"tasks\":[[\"has-text\",\"Follow US\"]]}"],["{\"selector\":\".justify-between.items-center\",\"tasks\":[[\"has-text\",\"Share:\"]]}"],["{\"selector\":\".mar-b-6\",\"tasks\":[[\"has-text\",\"Follow Us\"]]}"],["{\"selector\":\".po-fr__heading\",\"tasks\":[[\"has-text\",\"Share this article\"]]}"],["{\"selector\":\".post_style_zk > p\",\"tasks\":[[\"has-text\",\"Please subscribe\"]]}"],["{\"selector\":\".promo-card-muted\",\"tasks\":[[\"has-text\",\"RSS feed\"]]}"],["{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Share this page!\"]]}"],["{\"selector\":\"[data-ga-track-action]\",\"tasks\":[[\"has-text\",\"Join The Conversation\"]]}"],["{\"selector\":\"p.cms-textAlign-center\",\"tasks\":[[\"has-text\",\"follow NBC Sports\"]]}"]];

const hostnamesMap = new Map([["thedispatch.com",0],["appleinsider.com",1],["theguardian.com",2],["stuff.co.nz",3],["newskarnataka.com",4],["bitcoinsensus.com",5],["freethoughtnow.org",6],["openculture.com",7],["cryptotimes.io",8],["neon.tech",9],["techissuestoday.com",10],["jacobin.com",11],["lifenews.com",12],["newsroom.ucla.edu",13],["ruwix.com",14],["theintercept.com",15],["nbcsports.com",16]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
