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

// ruleset: fra-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = ["","{\"selector\":\"#wrapfabtest\",\"action\":[\"style\",\"height: 1px !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow-y: auto !important;\"]}","{\"selector\":\"#mywraptest\",\"action\":[\"style\",\"height: 1px !important;\"]}","{\"selector\":\"body[style^=\\\"overflow:\\\"]\",\"action\":[\"style\",\"overflow: auto !important;\"]}","{\"selector\":\".publicite.text-ad.adsbox\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow: visible !important;\"]}","{\"selector\":\".AdBox.Ligatus.pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body.no-scroll\",\"action\":[\"style\",\"overflow: auto!important;\"]}","{\"selector\":\".adsbox.ad-banner:not([style=\\\"height: 5px; width: 5px; position: absolute; top: 0;\\\"]):not(.blocker-tester + .ad-banner)\",\"action\":[\"style\",\"display: block !important;\"]}\n{\"selector\":\".pub_300x250.pub_300x250m.pub_728x90.text-ad.textAd.text_ad.text_ads.text-ads.text-ad-links\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\".ads.ad.adsbox.ad-placement.carbon-ads\",\"action\":[\"style\",\"display: block !important;\"]}","{\"selector\":\"body > iframe:not([src])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".site_content\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".sticky-wrapper\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"html > body.hasHabillage\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"#advert-bg-top\",\"action\":[\"style\",\"visibility: hidden !important; height: 0 !important;\"]}","{\"selector\":\".topad\",\"action\":[\"style\",\"min-height: 0 !important; height: 0 !important; padding: 0 !important;\"]}","{\"selector\":\"html.async-hide\",\"action\":[\"style\",\"opacity: 1 !important;\"]}","{\"selector\":\".is-remaining-chicken\",\"action\":[\"style\",\"position: absolute !important; left: -9999px !important;\"]}","{\"selector\":\".nb\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}\n{\"selector\":\"header\",\"action\":[\"style\",\"top: 0 !important;\"]}","{\"selector\":\"body .container-ads + *:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}\n{\"selector\":\"body .container-ads + .header-ariane:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}\n{\"selector\":\"body .container-ads + .tranche:not(#style_important)\",\"action\":[\"style\",\"padding-top: 50px !important;\"]}\n{\"selector\":\"body .container-ads ~ .tranche.section-article:not(#style_important)\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"html > body:not(#style_important)\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\".header-space\",\"action\":[\"style\",\"height: 10px !important;\"]}","{\"selector\":\".main\",\"action\":[\"style\",\"margin-top: 10px!important;\"]}","{\"selector\":\"#wrapper-publicite\",\"action\":[\"style\",\"padding-top: 0 !important;\"]}","{\"selector\":\"#page-body div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".three-col tr > td > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\".inner > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"#main-content > div[style*=\\\"visibility: visible !important; display: block !important; opacity:\\\"]:not([class]):not([id])\",\"action\":[\"style\",\"position: absolute !important; left: -3000px !important;\"]}","{\"selector\":\"#jSidebarSticky\",\"action\":[\"style\",\"min-height: 0 !important;\"]}","{\"selector\":\"body > #main[style^=\\\"margin-top:\\\"]\",\"action\":[\"style\",\"margin-top: 10px !important;\"]}","{\"selector\":\"body.td-ad-background-link\",\"action\":[\"style\",\"cursor: auto!important;\"]}","{\"selector\":\".adsbygoogle\",\"action\":[\"style\",\"height: 1px!important; visibility:hidden!important;\"]}","{\"selector\":\".preview-tabs-controls li\",\"action\":[\"style\",\"height: auto!important;\"]}","{\"selector\":\"#motherboard\",\"action\":[\"style\",\"top: 30px!important;\"]}","{\"selector\":\"html.v-overlay-scroll-blocked\",\"action\":[\"style\",\"position: static !important;\"]}","{\"selector\":\".BodyContent\",\"action\":[\"style\",\"margin-top: 0 !important;\"]}","{\"selector\":\"#Banniere-Haute\",\"action\":[\"style\",\"min-height: 0 !important; visibility: hidden !important;\"]}"];
const argsSeqs = [0,1,-2,37,2,-2,12,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,38];
const hostnamesMap = new Map([["francoischarron.com",1],["magazine-avantages.fr",2],["marieclaire.fr",4],["lemanip.com",4],["empire-streamz.fr",5],["empire-stream.*",5],["empire-streaming.*",5],["ebookdz.com",7],["abcbourse.com",8],["varmatin.com",9],["9docu.org",10],["lesacdechips.com",11],["sante.journaldesfemmes.fr",12],["linternaute.com",12],["lesinrocks.com",13],["qub.ca",14],["tf1.fr",15],["tf1info.fr",15],["empire-anime.com",16],["deco.fr",17],["fourchette-et-bikini.fr",17],["caminteresse.fr",18],["systemed.fr",19],["ooparc.com",20],["letemps.ch",21],["iadfrance.fr",22],["numerama.com",23],["amomama.fr",24],["funradio.fr",25],["rtl2.fr",25],["rtl.fr",25],["parlons-basket.com",26],["europe1.fr",27],["ouest-france.fr",28],["cnews.fr",29],["forumgaming.fr",30],["forumactif.com",30],["forum-airguns.com",31],["neogeo-system.com",32],["ddaynormandy.forumgaming.fr",33],["journaldunet.com",34],["monpetitforfait.com",35],["actu17.fr",36],["malekal.com",37],["cityplug.be",38],["igen.fr",39],["ouedkniss.com",40],["turbo.fr",41]]);
const hasEntities = true;

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
