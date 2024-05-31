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

// ruleset: rou-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".post_block:has([class^=\\\"guest\\\"])\",\"tasks\":[[\"has-text\",\"Anunturi\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has-text\",\"/Recomandate/\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"Post\"]]}]]}"],["{\"selector\":\"div.grey-section\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}"],["{\"selector\":\".t-records\",\"tasks\":[[\"has-text\",\"arderea \"]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\"*\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"ADVERTISING\"}]]}"],["{\"selector\":\".td-pb-span3\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"eMAG\"]]}"],["{\"selector\":\".td-pb-span12\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris International\"]]}"],["{\"selector\":\".mh-widget\",\"tasks\":[[\"has-text\",\"/PROMO|PARTENER/i\"]]}"],["{\"selector\":\".custom_textwidget\",\"tasks\":[[\"has-text\",\"publicitar\"]]}"],["{\"selector\":\".ContentArticle\",\"tasks\":[[\"has-text\",\" tutunului\"]]}"],["{\"selector\":\".single__container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".gridview-box-inside\",\"tasks\":[[\"has-text\",\"PROMO\"]]}"],["{\"selector\":\"#custom_html-10\",\"tasks\":[[\"has-text\",\"Advertising\"]]}"],["{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\"td > center\",\"tasks\":[[\"has-text\",\"Reclama\"]]}"],["{\"selector\":\".elementor-element\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"susținut de Philip Morris\"]]}"],["{\"selector\":\".special-box-pm > p\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}"],["{\"selector\":\".article-view\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}","{\"selector\":\".textlink\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"PUB\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"[href*=\\\"litoraltv.ro\\\"]\"],[\"spath\",\":not(*:has([href*=\\\"facebook.com\\\"]))\"]]}]]}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Publicitate|Asemanatoare/\"]]}"],["{\"selector\":\"#article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".elementor-column\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\".widget_header\",\"tasks\":[[\"has-text\",\"/recomand/i\"]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"sponsor\"]]}"],["{\"selector\":\"#sidebar > .widget_text\",\"tasks\":[[\"not\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Horoscop\"]]}]]}"],["{\"selector\":\".ipsWidget_title.ipsType_reset\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"article > div.td-post-content > p\",\"tasks\":[[\"has-text\",\"/^\\\\u00A0$/\"]]}"],["{\"selector\":\".inside-right-sidebar\",\"tasks\":[[\"has-text\",\"ads\"]]}"],["{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"/Philip Morris|țigar/\"]]}","{\"selector\":\".article-category-featured\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}"],["{\"selector\":\".article-wrap\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".boxstire2head\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"]];

const hostnamesMap = new Map([["forum.softpedia.com",0],["cespun.eu",1],["7media.md",2],["agora.md",3],["locals.md",4],["buzau.net",5],["acasatv.ro",6],["sport.ro",6],["stirileprotv.ro",6],["agro-tv.ro",7],["agrointel.ro",8],["arhiblog.ro",9],["autolatest.ro",10],["buletindecarei.ro",11],["campinatv.ro",12],["ciutacu.ro",13],["click.ro",14],["evz.ro",14],["csid.ro",15],["ctnews.ro",16],["curier.ro",17],["dcmedical.ro",18],["descopera.ro",19],["digi24.ro",20],["dilemaveche.ro",21],["editiedevrancea.ro",22],["evmarket.ro",23],["gandul.ro",24],["gazetavalceana.ro",25],["girlshare.ro",26],["graiulsalajului.ro",27],["hotnews.ro",28],["jurnalul.ro",29],["kudika.ro",30],["lauralaurentiu.ro",31],["litoraltv.ro",32],["lovendal.ro",33],["mediafax.ro",34],["mesageruldesibiu.ro",35],["mesagerulneamt.ro",36],["news.ro",37],["nwradu.ro",38],["presadeazi.ro",39],["ramnicuvalceaweek.ro",40],["sa-mp.ro",41],["smlive.ro",42],["stireadeazi.ro",43],["stiripesurse.ro",44],["wall-street.ro",45],["weradio.ro",46],["ziarpiatraneamt.ro",47],["ziarulargesul.ro",48],["zvj.ro",49]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
