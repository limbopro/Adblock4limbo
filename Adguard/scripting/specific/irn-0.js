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

// ruleset: irn-0

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["","x",".textwidget > a[href=\"www.dlfox.com\"]:has(> img[alt=\"dlfox\"])",".ads_area_small_banner p:has(> a[target=\"_blank\"] > img[alt])",".home_mid_ads",".ADS_wrapper",".single_post_banner",".banner_small_dlbox_b","div[class][flexdirection=\"column\"][gap][flexwrap][justifycontent=\"flex-end\"] > div[class][spacing]:has(> div[class][rowcount][columncount] > div[class] > a[target=\"_blank\"][rel=\"sponsored\"])\ndiv[class][flexdirection][gap][flexwrap][justifycontent]:has(> div[class][spacing] > div[class][rowcount=\"1\"][columncount] > div[class] > a[target=\"_blank\"][style][href^=\"https://b2n.ir/\"] > img[alt][data-code][loading=\"lazy\"][decoding=\"async\"][data-nimg][style])\ndiv[class^=\"__className\"] > div[class] > div[class]:has(> div[rowcount=\"1\"][columncount=\"1\"] > div[class] > a[target=\"_blank\"][rel=\"sponsored\"])",".sidebar-area:has(> a[href] > img[width=\"330\"][height=\"150\"][alt=\"\"])",".code-block:has(> a[target=\"_blank\"][rel] > img[alt][width=\"800\"][height=\"100\"])","rb-chat-ads-container",".ads-active",".header-ex","button[data-test-id^=\"link-to-https://www.sheypoor.com/banner/\"]",".c-forceToLogin__overlay",".c-forceToLogin__message",".kt-inset-banner",".site-top-nav > .grid-row > li > a[rel=\"dofollow\"][target=\"_blank\"]",".farsroid-ads",".single-text-ads",".labeled-dw-ads",".ads-download",".ads-dashed-banner","a[href=\"https://panel.triboon.net/\"][target=\"_blank\"]\na[href=\"https://www.yektanet.com/\"][target=\"_blank\"]",".chavosh-ad-box",".countclick","div[class*=\"pcfadv\"]",".bottom-right-ad","#forum-native-ad",".banner-ads",".promote-puls",".top-large-ads",".b",".apnl",".fixed-post",".popup-ads",".ads"];
const argsSeqs = [0,1,-2,-3,-4,-5,-6,7,8,-9,10,11,12,13,14,-15,16,17,-18,-19,-20,-21,-22,23,24,25,-26,27,28,29,-30,31,32,-33,34,35,-36,37];
const hostnamesMap = new Map([["abadis.ir",1],["dlfox.com",2],["zoomit.ir",8],["mali3.com",9],["web.rubika.ir",11],["web.shad.ir",11],["web.eitaa.com",12],["nazriyab.app",13],["sheypoor.com",14],["jobinja.ir",15],["divar.ir",17],["farsroid.com",18],["alef.ir",24],["setare.com",25],["beytoote.com",26],["tgju.org",28],["ninisite.com",29],["aparat.com",30],["par30games.net",32],["mobile.ir",33],["yasdl.com",35],["downloadha.com",36]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
