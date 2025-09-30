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

const argsList = ["[]","[{\"selector\":\".Button_root__UZ8td\",\"tasks\":[[\"has-text\",\"Share\"]]}]","[{\"selector\":\".article_detail__top_stories\",\"tasks\":[[\"has-text\",\"Follow us for ev updates\"]]}]","[{\"selector\":\".block-single-post__aside-heading\",\"tasks\":[[\"has-text\",\"Share\"]]}]","[{\"selector\":\".border-t-grey-200\",\"tasks\":[[\"has-text\",\"Share this story\"]]}]","[{\"selector\":\".border-y.py-2\",\"tasks\":[[\"has-text\",\"Share\"]]}]","[{\"selector\":\".col-xs-12 > div\",\"tasks\":[[\"has-text\",\"Follow AppleInsider\"]]}]","[{\"selector\":\".dcr-4gwv1z > ul\",\"tasks\":[[\"has-text\",\"Get our\"]]}]","[{\"selector\":\".edproj-share-video-wrapper\",\"tasks\":[[\"has-text\",\"Share your video\"]]},{\"selector\":\".edproj-speedhub-wrapper\",\"tasks\":[[\"has-text\",\"read now\"]]},{\"selector\":\".free-body.text-block > p.content-item\",\"tasks\":[[\"has-text\",\"Email\"]]}]","[{\"selector\":\".elementor-button-wrapper\",\"tasks\":[[\"has-text\",\"Social Media\"]]}]","[{\"selector\":\".elementor-heading-title\",\"tasks\":[[\"has-text\",\"SHARE\"]]}]","[{\"selector\":\".elementor-widget-container > h2\",\"tasks\":[[\"has-text\",\"Please share\"]]}]","[{\"selector\":\".execphpwidget\",\"tasks\":[[\"has-text\",\"FREE UPDATES!\"]]}]","[{\"selector\":\".heading-title\",\"tasks\":[[\"has-text\",\"Follow US\"]]}]","[{\"selector\":\".justify-between.items-center\",\"tasks\":[[\"has-text\",\"Share:\"]]}]","[{\"selector\":\".mar-b-6\",\"tasks\":[[\"has-text\",\"Follow Us\"]]}]","[{\"selector\":\".padding-top-small > .widgetizedArea\",\"tasks\":[[\"has-text\",\"Like this\"]]}]","[{\"selector\":\".po-fr__heading\",\"tasks\":[[\"has-text\",\"Share this article\"]]}]","[{\"selector\":\".post_style_zk > p\",\"tasks\":[[\"has-text\",\"Please subscribe\"]]}]","[{\"selector\":\".promo-card-muted\",\"tasks\":[[\"has-text\",\"RSS feed\"]]}]","[{\"selector\":\".py-4\",\"tasks\":[[\"has-text\",\"Share This Article\"]]}]","[{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"Share\"]]}]","[{\"selector\":\".tds-button\",\"tasks\":[[\"has-text\",\"FOLLOW ON GOOGLE NEWS\"]]}]","[{\"selector\":\".tw-balloon\",\"tasks\":[[\"has-text\",\"Share To\"]]}]","[{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Share this page!\"]]}]","[{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"Follow us\"]]}]","[{\"selector\":\"[data-ga-track-action]\",\"tasks\":[[\"has-text\",\"Join The Conversation\"]]}]","[{\"selector\":\"[style=\\\"position: sticky; top: 55px;\\\"]\",\"tasks\":[[\"has-text\",\"Inscrivez-vous à notre newsletter quotidienne !\"]]}]","[{\"selector\":\"p.cms-textAlign-center\",\"tasks\":[[\"has-text\",\"follow NBC Sports\"]]}]","[{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/Stay informed|Stay on top/\"]]}]","[{\"selector\":\".tve_social_items\",\"action\":[\"style\",\"visibility:hidden !important\"],\"cssable\":true}]","[{\"selector\":\"body, html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"],\"cssable\":true}]","[{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34];
const hostnamesMap = new Map([["abc.net.au",1],["carnewschina.com",2],["qodo.ai",3],["gizmodo.com",4],["thedispatch.com",5],["appleinsider.com",6],["theguardian.com",7],["stuff.co.nz",8],["newskarnataka.com",9],["bitcoinsensus.com",10],["freethoughtnow.org",11],["openculture.com",12],["cryptotimes.io",13],["neon.tech",14],["techissuestoday.com",15],["theshovel.com.au",16],["jacobin.com",17],["lifenews.com",18],["newsroom.ucla.edu",19],["futurism.com",20],["tvblackbox.com.au",21],["heritagedaily.com",22],["twitch.tv",23],["ruwix.com",24],["archaeologymag.com",25],["theintercept.com",26],["clubic.com",27],["nbcsports.com",28],["psypost.org",29],["swingliteracy.com",30],["ultraslan.com",31],["govtrack.us",32],["gulte.com",32],["aliprice.com",32],["vgtimes.com",33],["finance.yahoo.com",34]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
