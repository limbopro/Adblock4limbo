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

// ruleset: nld-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"div[class^=\\\"Flex-styled__StyledFlex-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Gesponsorde producten\"]]}]]}"],["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has-text\",\"Topadvertentie\"]]}","{\"selector\":\"ul.mp-Listings > li.mp-Listing\",\"tasks\":[[\"has\",{\"selector\":\"> .mp-Listing-coverLink > .mp-Listing-group > .mp-Listing-group--price-date-feature > span.mp-Listing-priority > span\",\"tasks\":[[\"has-text\",\"/^Topadvertentie$/\"]]}]]}"],["{\"selector\":\".hz-Listing--list-item\",\"tasks\":[[\"has\",{\"selector\":\".hz-Listing-priority\",\"tasks\":[[\"has-text\",\"Topadvertentie\"]]}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\".section-heading\",\"tasks\":[[\"has-text\",\"partners\"]]}]]}"],["{\"selector\":\".component__plugin\",\"tasks\":[[\"has\",{\"selector\":\"h6\",\"tasks\":[[\"has-text\",\"advertentie\"]]}]]}"],["{\"selector\":\".linklist\",\"tasks\":[[\"has\",{\"selector\":\"h1\",\"tasks\":[[\"has-text\",\"Lekker Dichtbij Deals\"]]}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Beter Beleggen\"]]}]]}"],["{\"selector\":\"[data-cy=\\\"plp-tile-container\\\"]\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}","{\"selector\":\"li\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}"],["{\"selector\":\".article.row.no-image\",\"tasks\":[[\"has\",{\"selector\":\".row.compost-warn\",\"tasks\":[[\"has-text\",\"- ingezonden mededeling -\"]]}]]}"],["{\"selector\":\".Article__inner\",\"tasks\":[[\"has\",{\"selector\":\".Article__title\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".article-column_article\",\"tasks\":[[\"has\",{\"selector\":\".category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}","{\"selector\":\".article-row_article\",\"tasks\":[[\"has\",{\"selector\":\".article-row_category.category-label_label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\"[data-index-number]\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}"],["{\"selector\":\".grid-item.grid-item-pebble\",\"tasks\":[[\"has\",{\"selector\":\"#pebble-label\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".footer-artikelen\",\"tasks\":[[\"has\",{\"selector\":\".footer-h6\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\".td-post-category\",\"tasks\":[[\"has-text\",\"Gesponsord\"]]}]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\".block-title\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".o-hpgrid__row-tijdconnect\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Gesponsorde inhoud\"]]}]]}"],["{\"selector\":\"section.network\",\"tasks\":[[\"has\",{\"selector\":\".contentheader.contentheader--network\",\"tasks\":[[\"has-text\",\"Gesponsorde links\"]]}]]}"],["{\"selector\":\".c-articles-list__item.c-articles-list__item--highlight\",\"tasks\":[[\"has\",{\"selector\":\".c-tag.c-articles-list__label\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\".blok\",\"tasks\":[[\"has\",{\"selector\":\"h3\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".widget-container\",\"tasks\":[[\"has\",{\"selector\":\".h3.mb-4\",\"tasks\":[[\"has-text\",\"Wielerdeals\"]]}]]}","{\"selector\":\"li.list-item.list-item-aside\",\"tasks\":[[\"has\",{\"selector\":\".badge\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}","{\"selector\":\"li.list-item.list-item-default\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Ad\"]]}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"#advertentie\"]]}]]}"],["{\"selector\":\".widebnr > *\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class^=\\\"col\\\"] > div.center\",\"tasks\":[[\"has\",{\"selector\":\"> div.g > div.g-single > center > i\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > aside.penci_latest_news_widget > h4.widget-title\",\"tasks\":[[\"has-text\",\"Advertentie\"]]}"],["{\"selector\":\".ct-sidebar > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Partners\"]]}]]}"],["{\"selector\":\".content-start > * > div[style]\",\"tasks\":[[\"has-text\",\"/Externe links|Externe websites/i\"]]}"],["{\"selector\":\"div[class=\\\"sidebar_item\\\"][style=\\\"padding-bottom: 16px;\\\"]:has(> a > img[width=\\\"276\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".pd-results-container > .results-inner > .pd-advisor-offer-container:first-child\",\"tasks\":[[\"has\",{\"selector\":\"> .pd-advisor-offer > .result-badge\",\"tasks\":[[\"has-text\",\"Adv.\"]]}]]}"],["{\"selector\":\"div[id^=\\\"ster-ad-bnnvara-\\\"]\",\"tasks\":[[\"upward\",1]]}"]];

const hostnamesMap = new Map([["krefel.be",0],["marktplaats.nl",1],["2dehands.be",2],["almere-nieuws.nl",3],["amstelveensnieuwsblad.nl",4],["baarnschecourant.nl",4],["barneveldsekrant.nl",4],["bennekomsnieuwsblad.nl",4],["biltschecourant.nl",4],["deputtenaer.nl",4],["derijnpost.nl",4],["destadamersfoort.nl",4],["destadgorinchem.nl",4],["dewoudenberger.nl",4],["edestad.nl",4],["ermelosweekblad.nl",4],["harderwijkercourant.nl",4],["hcnieuws.nl",4],["hetkompashardinxveld-giessendam.nl",4],["hetkompassliedrecht.nl",4],["houtensnieuws.nl",4],["huisaanhuiselburg.nl",4],["huisaanhuisoldebroek.nl",4],["leusderkrant.nl",4],["nieuwsbladdekaap.nl",4],["nunspeethuisaanhuis.nl",4],["recreatiekrantveluwe.nl",4],["regiosportveenendaal.nl",4],["rijnenveluwe.nl",4],["scherpenzeelsekrant.nl",4],["soestercourant.nl",4],["stadnijkerk.nl",4],["stadwageningen.nl",4],["weekbladvoorouderamstel.nl",4],["wijksnieuws.nl",4],["buienradar.nl",5],["businessinsider.nl",6],["fonq.nl",7],["geenstijl.nl",8],["glutenvrij.nl",9],["linda.nl",10],["mediamarkt.be",11],["mediamarkt.nl",11],["mnm.be",12],["moviemeter.nl",13],["nieuwsopbeeld.nl",14],["psvinside.nl",15],["tijd.be",16],["tostrams.nl",17],["vi.nl",18],["voetbalcentraal.nl",19],["wielerflits.nl",20],["wkdarts.nl",21],["tweakers.net",22],["centraalplus.nl",23],["ans-online.nl",24],["apparata.nl",25],["arenalokaal.nl",26],["turksemedia.nl",27],["androidplanet.nl",28],["bnnvara.nl",29]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
