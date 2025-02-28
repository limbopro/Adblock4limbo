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

// ruleset: ita-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".cont-ev-list\",\"tasks\":[[\"has\",{\"selector\":\".title-channel\",\"tasks\":[[\"has-text\",\"in Evidenza\"]]}]]}"],["{\"selector\":\".agi-article-card\",\"tasks\":[[\"has\",{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"BRANDED CONTENT\"]]}]]}"],["{\"selector\":\".td_block_template_1\",\"tasks\":[[\"has\",{\"selector\":\".td-block-title-wrap\",\"tasks\":[[\"has-text\",\"Banner\"]]}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\".box-head\",\"tasks\":[[\"has-text\",\"WM Sponsor\"]]}]]}"],["{\"selector\":\"center\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Esponi i tuoi banner sul forum\"]]}]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"div.categories\",\"tasks\":[[\"has-text\",\"pubbliredazionale\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Contenuti sponsorizzati\"]]}]]}"],["{\"selector\":\".boxAnnunci\",\"tasks\":[[\"has\",{\"selector\":\"h4\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}"],["{\"selector\":\".container-fluid.py-3.bg-white-color.pl-5.pr-5\",\"tasks\":[[\"has\",{\"selector\":\".text-black.weight-400.mb-0\",\"tasks\":[[\"has-text\",\"I Nostri Partners\"]]}]]}"],["{\"selector\":\".testo > div\",\"tasks\":[[\"has\",{\"selector\":\"b\",\"tasks\":[[\"has-text\",\"PARTNERS COMMERCIALI\"]]}]]}"],["{\"selector\":\".cl-amp-important-information\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}","{\"selector\":\".custom-html\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Annuncio pubblicitario\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Contenuti sponsorizzati\"]]}]]}"],["{\"selector\":\".article-blog-default\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"CONTENUTO SPONSORIZZATO\"]]}]]}"],["{\"selector\":\"li[data-index-number]\",\"tasks\":[[\"has\",{\"selector\":\"[data-test=\\\"mms-product-card\\\"]\",\"tasks\":[[\"has-text\",\"Sponsorizzati\"]]}]]}"],["{\"selector\":\".search-itm\",\"tasks\":[[\"has\",{\"selector\":\".search-itm__label\",\"tasks\":[[\"has-text\",\"annuncio\"]]}]]}"],["{\"selector\":\".similar-post-holder\",\"tasks\":[[\"has\",{\"selector\":\".categoria\",\"tasks\":[[\"has-text\",\"Post sponsorizzato\"]]}]]}"],["{\"selector\":\".feat-widget-wrap\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"INFORMAZIONE REDAZIONALE\"]]}]]}"],["{\"selector\":\".block.is-postit\",\"tasks\":[[\"has\",{\"selector\":\".block__overtitle\",\"tasks\":[[\"has-text\",\"Contenuti promozionali\"]]}]]}"],["{\"selector\":\".td_block_wrap\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]]}"],["{\"selector\":\"div[data-testid=\\\"section\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Contenuto sponsorizzato\"]]}]]}"],["{\"selector\":\".card.dark\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Adv\"]]}]]}"]];

const hostnamesMap = new Map([["adnkronos.com",0],["agi.it",1],["cronacadiverona.com",2],["forum-wranglermania.com",3],["guadagna.net",4],["ilpiccolo.net",5],["ilprogettistaindustriale.it",6],["impiego24.it",7],["investire.biz",8],["lalaziosiamonoi.it",9],["laleggepertutti.it",10],["logisticanews.it",11],["lospiffero.com",12],["mediamarkt.ch",13],["mediaworld.it",13],["paginegialle.it",14],["pharmacyscanner.it",15],["radioluna.it",16],["repubblica.it",17],["technofashion.it",18],["tgcom24.mediaset.it",19],["tuttoandroid.net",20]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
