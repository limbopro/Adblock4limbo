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

// ruleset: annoyances-notifications

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\".bottom.fixed-container.m\",\"tasks\":[[\"has-text\",\"Get the best experience\"]]}]","[{\"selector\":\".e1s06mna1\",\"tasks\":[[\"has-text\",\"Know the news\"]]}]","[{\"selector\":\"[data-component=\\\"RelatedCard\\\"]\",\"tasks\":[[\"has-text\",\"Stream your favourite shows\"]]}]","[{\"selector\":\".z-20.bottom-full\",\"tasks\":[[\"has-text\",\"Get Extension\"]]}]","[{\"selector\":\".gb-button\",\"tasks\":[[\"has-text\",\"Open App\"]]}]","[{\"selector\":\".fixed.lg\\\\:w-\\\\[750px\\\\]\",\"tasks\":[[\"has-text\",\"Stay Updated\"]]},{\"selector\":\".min-h-16\",\"tasks\":[[\"has-text\",\"Get Notifications\"]]}]","[{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"GET THE FOX NEWS APP\"]]}]","[{\"selector\":\".gkz0-toast\",\"tasks\":[[\"has-text\",\"Get Price Alerts\"]]}]","[{\"selector\":\"div#public_post_contextual-sign-in\",\"tasks\":[[\"has-text\",\"Sign in to view more content\"]]}]","[{\"selector\":\"[aria-label=\\\"Notification\\\"]\",\"tasks\":[[\"has-text\",\"app\"]]}]","[{\"selector\":\".cwDafx\",\"tasks\":[[\"has-text\",\"Continue in the Bitcoin.com App\"]]},{\"selector\":\".hsnyER.sc-fEpuOf\",\"action\":[\"style\",\"top:0 !important\"],\"cssable\":true}]","[{\"selector\":\".noVerticalPad\",\"tasks\":[[\"has-text\",\"Download the TPG App\"]]}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important\"],\"cssable\":true}]","[{\"selector\":\"body, html\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"pointer-events:auto !important;\"],\"cssable\":true},{\"selector\":\"body.scroll-disabled\",\"action\":[\"style\",\"overflow: visible!important; position: static!important;\"],\"cssable\":true},{\"selector\":\"shreddit-async-loader[bundlename=\\\"app_selector\\\"]\",\"action\":[\"remove\",\"\"]}]","[{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"margin-top:0px !important\"],\"cssable\":true}]","[{\"selector\":\"body, html\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"height: auto !important; overflow: auto !important\"],\"cssable\":true}]","[{\"selector\":\".MuiModal-root.MuiDialog-root\",\"tasks\":[[\"has-text\",\"Open in Bambu Handy\"]]}]","[{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: scroll !important\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"],\"cssable\":true}]","[{\"selector\":\"body\",\"action\":[\"style\",\"overflow: unset !important\"],\"cssable\":true}]","[{\"selector\":\"html\",\"action\":[\"style\",\"--g-header-top-pos: 0vw !important;\"],\"cssable\":true}]","[{\"selector\":\"#pfs-upsell\",\"action\":[\"remove\",\"\"]},{\"selector\":\".exposed-filters\",\"action\":[\"style\",\"top:0 !important\"],\"cssable\":true}]","[{\"selector\":\".shadow-xl\",\"tasks\":[[\"has-text\",\"Would you like to be notified\"]]}]","[{\"selector\":\".sticky-2vWAY\",\"action\":[\"style\",\"top: 0px; transform: translate(-50%, 0rem) !important\"],\"cssable\":true}]","[{\"selector\":\".app-header\",\"action\":[\"style\",\"top:0 !important\"],\"cssable\":true}]","[{\"selector\":\"#s_header[style=\\\"top: 84px;\\\"]\",\"action\":[\"style\",\"top: 0 !important;\"],\"cssable\":true},{\"selector\":\"html[data-smartbanner-original-margin-top=\\\"0\\\"][style=\\\"margin-top: 84px;\\\"]\",\"action\":[\"style\",\"margin-top: 0 !important;\"],\"cssable\":true}]","[{\"selector\":\".smartbanner-show\",\"action\":[\"style\",\"margin-top: 0 !important;\"],\"cssable\":true}]","[{\"selector\":\"body, html\",\"action\":[\"style\",\"overflow-y: auto !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,-9,15,10,11,12,13,14,15,-15,21,16,17,18,19,20,22,23,24,25,26,27,28,29,30,31,32,33];
const hostnamesMap = new Map([["m.facebook.com",1],["www.facebook.com",1],["7news.com.au",2],["abc.net.au",3],["chatgpt.com",4],["dailynews24.in",5],["dexerto.com",6],["foxnews.com",7],["kayak.com",8],["linkedin.com",9],["mail.proton.me",11],["news.bitcoin.com",12],["thepointsguy.com",13],["puuilo.fi",14],["ask.fm",14],["autoevolution.com",15],["phonearena.com",16],["trip.com",16],["makerworld.com",17],["imgur.io",16],["coinpaprika.com",16],["slickdeals.net",16],["canva.com",16],["nextdoor.com",16],["insider.com",16],["businessinsider.com",16],["reddit.com",19],["lightnovelworld.com",20],["bestbuy.com",21],["expedia.at",22],["expedia.co.id",22],["expedia.co.in",22],["expedia.co.jp",22],["expedia.co.kr",22],["expedia.co.nz",22],["expedia.co.th",22],["expedia.co.uk",22],["expedia.com.ar",22],["expedia.com.au",22],["expedia.com.hk",22],["expedia.com.sg",22],["expedia.de",22],["expedia.dk",22],["expedia.es",22],["expedia.fi",22],["expedia.fr",22],["expedia.it",22],["expedia.no",22],["expedia.se",22],["hotels.com",22],["expedia.nl",22],["expedia.com",22],["behance.net",22],["ifunny.co",22],["player.fm",22],["m.economictimes.com",22],["m.yelp.com",22],["m.yelp.co.uk",22],["m.yelp.ca",22],["m.yelp.com.au",22],["m.yelp.co.nz",22],["m.yelp.dk",22],["m.yelp.de",22],["m.yelp.fi",22],["m.yelp.cz",22],["m.yelp.fr",22],["m.yelp.es",22],["m.yelp.pt",22],["m.yelp.it",22],["m.yelp.no",22],["m.yelp.se",22],["m.yelp.ie",22],["m.yelp.com.tr",22],["m.yelp.com.br",22],["m.yelp.nl",22],["m.yelp.com.mx",22],["m.yelp.co.jp",22],["m.yelp.com.tw",22],["m.yelp.be",22],["thedesignlove.com",22],["simpleswap.io",22],["thestar.com",22],["sports.ndtv.com",22],["thedp.com",22],["eksisozluk.com",22],["copilot.microsoft.com",22],["asia.nikkei.com",23],["businesspost.ie",23],["rappler.com",23],["sprintmedical.in",23],["cnet.com",23],["realestate.co.nz",23],["instacart.com",23],["newsbreak.com",23],["ebay.com",24],["audius.co",25],["9gag.com",26],["makemytrip.com",27],["miravia.es",28],["zillow.com",29],["benzinga.com",30],["temu.com",31],["similarweb.com",32],["izumi.jp",33],["cecile.co.jp",34],["nola-novel.com",34],["s.tabelog.com",35]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
