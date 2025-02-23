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

// ruleset: nld-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".product-item\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}"],["{\"selector\":\"div[class^=\\\"Flex-styled__StyledFlex-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Gesponsorde producten\"]]}]]}"],["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has-text\",\"Topadvertentie\"]]}","{\"selector\":\"ul.mp-Listings > li.mp-Listing\",\"tasks\":[[\"has\",{\"selector\":\"> .mp-Listing-coverLink > .mp-Listing-group > .mp-Listing-group--price-date-feature > span.mp-Listing-priority > span\",\"tasks\":[[\"has-text\",\"/^Topadvertentie$/\"]]}]]}"],["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has\",{\"selector\":\".hz-Listing-priority\",\"tasks\":[[\"has-text\",\"Topadvertentie\"]]}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\".section-heading\",\"tasks\":[[\"has-text\",\"partners\"]]}]]}"],["{\"selector\":\".component__plugin\",\"tasks\":[[\"has\",{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"advertentie\"]]}]]}"],["{\"selector\":\".linklist\",\"tasks\":[[\"has\",{\"selector\":\"h1\",\"tasks\":[[\"has-text\",\"Lekker Dichtbij Deals\"]]}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Beter Beleggen\"]]}]]}"],["{\"selector\":\"[data-cy=\\\"plp-tile-container\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}","{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}"],["{\"selector\":\".article.row.no-image\",\"tasks\":[[\"has\",{\"selector\":\".row.compost-warn\",\"tasks\":[[\"has-text\",\"- ingezonden mededeling -\"]]}]]}"],["{\"selector\":\".Article__inner\",\"tasks\":[[\"has\",{\"selector\":\".Article__title\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".article-column_article\",\"tasks\":[[\"has\",{\"selector\":\".category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".article-row_article\",\"tasks\":[[\"has\",{\"selector\":\".article-row_category.category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\"[data-index-number]\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}"],["{\"selector\":\".grid-item.grid-item-pebble\",\"tasks\":[[\"has\",{\"selector\":\"#pebble-label\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".footer-artikelen\",\"tasks\":[[\"has\",{\"selector\":\".footer-h6\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-category\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\".block-title\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".o-hpgrid__row-tijdconnect\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Gesponsorde inhoud\"]]}]]}"],["{\"selector\":\"section.network\",\"tasks\":[[\"has\",{\"selector\":\".contentheader.contentheader--network\",\"tasks\":[[\"has-text\",\"Gesponsorde links\"]]}]]}"],["{\"selector\":\".c-articles-list__item.c-articles-list__item--highlight\",\"tasks\":[[\"has\",{\"selector\":\".c-tag.c-articles-list__label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".blok\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\".h3.mb-4\",\"tasks\":[[\"has-text\",\"Wielerdeals\"]]}]]}","{\"selector\":\"li.list-item.list-item-aside\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}","{\"selector\":\"li.list-item.list-item-default\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"#advertentie\"]]}]]}"],["{\"selector\":\".widebnr > *\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span:first-child\",\"tasks\":[[\"has-text\",\"Advert\"]]}]]}"],["{\"selector\":\"div[class^=\\\"col\\\"] > div.center\",\"tasks\":[[\"has\",{\"selector\":\"> div.g > div.g-single > center > i\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > aside.penci_latest_news_widget > h4.widget-title\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".ct-sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".content-start > * > div[style]\",\"tasks\":[[\"has-text\",\"/Externe links|Externe websites/i\"]]}"],["{\"selector\":\"div[class=\\\"sidebar_item\\\"][style=\\\"padding-bottom: 16px;\\\"]:has(> a > img[width=\\\"276\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".pd-results-container > .results-inner > .pd-advisor-offer-container:first-child\",\"tasks\":[[\"has\",{\"selector\":\"> .pd-advisor-offer > .result-badge\",\"tasks\":[[\"has-text\",\"Adv.\"]]}]]}"],["{\"selector\":\"div[id^=\\\"ster-ad-bnnvara-\\\"]\",\"tasks\":[[\"upward\",1]]}"]];

const hostnamesMap = new Map([["delhaize.be",0],["krefel.be",1],["marktplaats.nl",2],["2dehands.be",3],["almere-nieuws.nl",4],["amstelveensnieuwsblad.nl",5],["baarnschecourant.nl",5],["barneveldsekrant.nl",5],["bennekomsnieuwsblad.nl",5],["biltschecourant.nl",5],["deputtenaer.nl",5],["derijnpost.nl",5],["destadamersfoort.nl",5],["destadgorinchem.nl",5],["dewoudenberger.nl",5],["edestad.nl",5],["ermelosweekblad.nl",5],["harderwijkercourant.nl",5],["hcnieuws.nl",5],["hetkompashardinxveld-giessendam.nl",5],["hetkompassliedrecht.nl",5],["houtensnieuws.nl",5],["huisaanhuiselburg.nl",5],["huisaanhuisoldebroek.nl",5],["leusderkrant.nl",5],["nieuwsbladdekaap.nl",5],["nunspeethuisaanhuis.nl",5],["recreatiekrantveluwe.nl",5],["regiosportveenendaal.nl",5],["rijnenveluwe.nl",5],["scherpenzeelsekrant.nl",5],["soestercourant.nl",5],["stadnijkerk.nl",5],["stadwageningen.nl",5],["weekbladvoorouderamstel.nl",5],["wijksnieuws.nl",5],["buienradar.nl",6],["businessinsider.nl",7],["fonq.nl",8],["geenstijl.nl",9],["glutenvrij.nl",10],["linda.nl",11],["mediamarkt.be",12],["mediamarkt.nl",12],["mnm.be",13],["moviemeter.nl",14],["nieuwsopbeeld.nl",15],["psvinside.nl",16],["tijd.be",17],["tostrams.nl",18],["vi.nl",19],["voetbalcentraal.nl",20],["wielerflits.nl",21],["wkdarts.nl",22],["tweakers.net",23],["hartvannederland.nl",24],["centraalplus.nl",25],["ans-online.nl",26],["apparata.nl",27],["arenalokaal.nl",28],["turksemedia.nl",29],["androidplanet.nl",30],["bnnvara.nl",31]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
