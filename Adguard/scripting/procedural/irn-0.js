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

// ruleset: irn-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\"article > .items-center .mr-auto > .mr-1 > svg[style$=\\\"fill: var(--color-ad);\\\"] .text-neutral-500::after\",\"action\":[\"style\",\"content: ' 🚫 (تبلیغ) 🚫 ' !important; color: red !important; font-weight: bold !important;  font-size: large !important;\"],\"cssable\":true},{\"selector\":\"div[class^=\\\"product-list_ProductList__item__\\\"][data-product-index] > .block > .h-full[data-testid=\\\"product-card\\\"] > article > .items-center:has(> .ml-1 > img[src=\\\"/statics/img/svg/productCard/topBadge/PromotedIncredibleOffer.svg\\\"])::after\",\"action\":[\"style\",\"content: ' 🚫 (تبلیغ) 🚫 ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true}]","[{\"selector\":\".c-forceToLogin__content\",\"action\":[\"style\",\"filter: none !important; -webkit-filter: none !important; opacity:1 !important;\"],\"cssable\":true},{\"selector\":\"body\",\"action\":[\"style\",\"cursor: unset !important;\"],\"cssable\":true}]","[{\"selector\":\"a[href]:where([href*=\\\"doostihaa.com/\\\"], [href*=\\\"zardfilm.in/\\\"], [href*=\\\"cooldl.net/\\\"], [href*=\\\"dlrozaneh.ir/\\\"]) > h3::after\",\"action\":[\"style\",\"content: ' 🔞 (سانسور شده) 🔞 ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true},{\"selector\":\"a[href]:where([href*=\\\"soft98.ir/\\\"]) > h3::after\",\"action\":[\"style\",\"content: ' ⚠️ ضد کاربر | Anti-User ⚠️ ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true}]","[{\"selector\":\"a[href][href*=\\\"&mediaurl=\\\"][target=\\\"_blank\\\"][title][href^=\\\"/images/search?view=detail\\\"]:where([href*=\\\"doostihaa.com/\\\"], [href*=\\\"zardfilm.in/\\\"], [href*=\\\"cooldl.net/\\\"], [href*=\\\"dlrozaneh.ir/\\\"])::before\",\"action\":[\"style\",\"content: ' 🔞 (سانسور شده) 🔞 ' !important; color: red !important; font-weight: bold !important; font-size: large !important;\"],\"cssable\":true},{\"selector\":\"a[href][href*=\\\"&mediaurl=\\\"][target=\\\"_blank\\\"][title][href^=\\\"/images/search?view=detail\\\"]:where([href*=\\\"soft98.ir/\\\"])::before\",\"action\":[\"style\",\"content: ' ⚠️ ضد کاربر | Anti-User ⚠️ ' !important; color: red !important; font-weight: bold !important; font-size: large !important;\"],\"cssable\":true}]","[{\"selector\":\"a[href][data-testid=\\\"result-title-a\\\"]:where([href*=\\\"doostihaa.com/\\\"], [href*=\\\"zardfilm.in/\\\"], [href*=\\\"cooldl.net/\\\"], [href*=\\\"dlrozaneh.ir/\\\"])::after\",\"action\":[\"style\",\"content: ' 🔞 (سانسور شده) 🔞 ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true},{\"selector\":\"a[href][data-testid=\\\"result-title-a\\\"]:where([href*=\\\"soft98.ir/\\\"])::after\",\"action\":[\"style\",\"content: ' ⚠️ ضد کاربر | Anti-User ⚠️ ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true}]","[{\"selector\":\"a[href][class$=\\\"heading-serpresult\\\"]:where([href*=\\\"doostihaa.com/\\\"], [href*=\\\"zardfilm.in/\\\"], [href*=\\\"cooldl.net/\\\"], [href*=\\\"dlrozaneh.ir/\\\"])::after\",\"action\":[\"style\",\"content: ' 🔞 (سانسور شده) 🔞 ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true},{\"selector\":\"a[href][class$=\\\"heading-serpresult\\\"]:where([href*=\\\"soft98.ir/\\\"])::after\",\"action\":[\"style\",\"content: ' ⚠️ ضد کاربر | Anti-User ⚠️ ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true}]","[{\"selector\":\"a[href][class^=\\\"!text-link\\\"]:where([href*=\\\"doostihaa.com/\\\"], [href*=\\\"zardfilm.in/\\\"], [href*=\\\"cooldl.net/\\\"], [href*=\\\"dlrozaneh.ir/\\\"])::after\",\"action\":[\"style\",\"content: ' 🔞 (سانسور شده) 🔞 ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true},{\"selector\":\"a[href][class^=\\\"!text-link\\\"]:where([href*=\\\"soft98.ir/\\\"])::after\",\"action\":[\"style\",\"content: ' ⚠️ ضد کاربر | Anti-User ⚠️ ' !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3,4,5,6,7];
const hostnamesMap = new Map([["www.digikala.com",1],["jobinja.ir",2],["www.google.com",3],["www.bing.com",4],["duckduckgo.com",5],["search.brave.com",6],["zarebin.ir",7]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
