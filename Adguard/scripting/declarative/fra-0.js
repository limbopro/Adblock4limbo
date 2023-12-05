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

// ruleset: fra-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".preview-tabs-controls li\",\"action\":[\"style\",\"height: auto!important;\"]}"],["{\"selector\":\".adsbox.ad-banner:not([style=\\\"height: 5px; width: 5px; position: absolute; top: 0;\\\"]):not(.blocker-tester + .ad-banner)\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"a[href^=\\\"magnet:?\\\"]\",\"action\":[\"style\",\"width: 100%!important;\"]}"],["{\"selector\":\".topad\",\"action\":[\"style\",\"min-height: 0 !important; height: 0 !important; padding: 0 !important;\"]}"],["{\"selector\":\"#mywraptest\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display:block!important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}"],["{\"selector\":\".three-col tr > td > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#page-body div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"#jSidebarSticky\",\"action\":[\"style\",\"min-height: 0 !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}"],["{\"selector\":\"body.no-scroll\",\"action\":[\"style\",\"overflow: auto!important;\"]}"],["{\"selector\":\".AdBox.Ligatus.pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px!important; visibility:hidden!important;\"]}"],["{\"selector\":\"body > #main[style^=\\\"margin-top:\\\"]\",\"action\":[\"style\",\"margin-top: 10px !important;\"]}"],["{\"selector\":\".inner > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\".is-remaining-chicken\",\"action\":[\"style\",\"position: absolute !important; left: -9999px !important;\"]}"],["{\"selector\":\"#advert-bg-top\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}"],["{\"selector\":\"html > body:not(#style_important)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}"],["{\"selector\":\"body.td-ad-background-link\",\"action\":[\"style\",\"cursor: auto!important;\"]}"],["{\"selector\":\"#wrapfabtest\",\"action\":[\"style\",\"height: 1px!important;\"]}"],["{\"selector\":\".nb\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"header\",\"action\":[\"style\",\"top: 0 !important;\"]}"],["{\"selector\":\"#wrapper-publicite\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\".header-space\",\"action\":[\"style\",\"height: 10px !important;\"]}"],["{\"selector\":\"#main-content > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}"],["{\"selector\":\"body .container-ads + *:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"body .container-ads + .header-ariane:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"body .container-ads + .tranche:not(#style_important)\",\"action\":[\"style\",\"padding-top: 50px !important;\"]}","{\"selector\":\"body .container-ads ~ .tranche.section-article:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}"],["{\"selector\":\"html.async-hide\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\"#motherboard\",\"action\":[\"style\",\"top: 30px!important;\"]}"],["{\"selector\":\".main\",\"action\":[\"style\",\"margin-top: 10px!important;\"]}"],["{\"selector\":\".ads.ad.adsbox.ad-placement.carbon-ads\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#layer2\",\"action\":[\"style\",\"top:50px!important; left:950px!important;\"]}"],["{\"selector\":\".publicite.text-ad.adsbox\",\"action\":[\"style\",\"display: block !important;\"]}"]];

const hostnamesMap = new Map([["lemanip.com",0],["empire-stream.net",0],["cityplug.be",1],["qub.ca",2],["torrents9.cc",3],["letemps.ch",4],["abcbourse.com",5],["cookomix.com",6],["ebookdz.com",7],["forum-airguns.com",8],["forumactif.com",9],["forumgaming.fr",9],["journaldunet.com",10],["lesacdechips.com",11],["lesinrocks.com",12],["linternaute.com",13],["sante.journaldesfemmes.fr",13],["malekal.com",14],["monpetitforfait.com",15],["neogeo-system.com",16],["numerama.com",17],["ooparc.com",18],["parlons-basket.com",19],["actu17.fr",20],["adala-news.fr",21],["amomama.fr",22],["cnews.fr",23],["europe1.fr",24],["ddaynormandy.forumgaming.fr",25],["funradio.fr",26],["rtl.fr",26],["rtl2.fr",26],["iadfrance.fr",27],["igen.fr",28],["ouest-france.fr",29],["tf1.fr",30],["tf1info.fr",30],["vpnmag.fr",31],["all-stadium.net",32],["9docu.org",33]]);

const entitiesMap = new Map([["empire-streaming",0]]);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
