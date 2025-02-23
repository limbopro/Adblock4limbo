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

// ruleset: rou-1

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".elementor-column\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]]}"],["{\"selector\":\"article > div.td-post-content > p\",\"tasks\":[[\"has-text\",\"/^\\\\u00A0$/\"]]}"],["{\"selector\":\"div.grey-section\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has\",{\"selector\":\"> .part-right:has([href*=\\\"freakhosting.com\\\"])\"}]]}"],["{\"selector\":\".ipsWidget_title.ipsType_reset\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"PUB\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Publicitate|Asemanatoare/\"]]}"],["{\"selector\":\".post_block:has([class^=\\\"guest\\\"])\",\"tasks\":[[\"has-text\",\"Anunturi\"]]}"],["{\"selector\":\".article-view\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}","{\"selector\":\".textlink\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\"#custom_html-10\",\"tasks\":[[\"has-text\",\"Advertising\"]]}"],["{\"selector\":\".widget_header\",\"tasks\":[[\"has-text\",\"/recomand/i\"]]}"],["{\"selector\":\".td-pb-span12\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}"],["{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has-text\",\"/Recomandate/\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"Post\"]]}]]}"],["{\"selector\":\".inside-right-sidebar\",\"tasks\":[[\"has-text\",\"ads\"]]}"],["{\"selector\":\".td-pb-span3\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".custom_textwidget\",\"tasks\":[[\"has-text\",\"publicitar\"]]}"],["{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".elementor-element\",\"tasks\":[[\"has-text\",\"ad\"]]}"],["{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".boxstire2head\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}"],["{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"sponsor\"]]}"],["{\"selector\":\".mh-widget\",\"tasks\":[[\"has-text\",\"/PROMO|PARTENER/i\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"[href*=\\\"litoraltv.ro\\\"]\"],[\"spath\",\":not(*:has([href*=\\\"facebook.com\\\"]))\"]]}]]}]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}"],["{\"selector\":\"td > center\",\"tasks\":[[\"has-text\",\"Reclama\"]]}"],["{\"selector\":\".special-box-pm > p\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}"],["{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"/Philip Morris|țigar/\"]]}","{\"selector\":\".article-category-featured\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"susținut de Philip Morris\"]]}"],["{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris International\"]]}"],["{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}"],["{\"selector\":\"#article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".article-wrap\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".single__container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".t-records\",\"tasks\":[[\"has-text\",\"arderea \"]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}"],["{\"selector\":\".ContentArticle\",\"tasks\":[[\"has-text\",\" tutunului\"]]}"],["{\"selector\":\"#sidebar > .widget_text\",\"tasks\":[[\"not\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Horoscop\"]]}]]}"],["{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"eMAG\"]]}"],["{\"selector\":\".gridview-box-inside\",\"tasks\":[[\"has-text\",\"PROMO\"]]}"],["{\"selector\":\"*\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"ADVERTISING\"}]]}"]];

const hostnamesMap = new Map([["mesagerulneamt.ro",0],["ziarpiatraneamt.ro",1],["smlive.ro",2],["agora.md",3],["agrointel.ro",4],["cspower.ro",5],["sa-mp.ro",6],["lauralaurentiu.ro",7],["lovendal.ro",8],["forum.softpedia.com",9],["kudika.ro",10],["evmarket.ro",11],["nwradu.ro",12],["autolatest.ro",13],["7media.md",14],["stireadeazi.ro",15],["agro-tv.ro",16],["mesageruldesibiu.ro",17],["weradio.ro",18],["curier.ro",19],["campinatv.ro",20],["buletindecarei.ro",21],["ciutacu.ro",22],["ziarulargesul.ro",23],["graiulsalajului.ro",24],["cespun.eu",25],["buzau.net",26],["zvj.ro",27],["presadeazi.ro",28],["ctnews.ro",29],["litoraltv.ro",30],["gazetavalceana.ro",31],["girlshare.ro",32],["jurnalul.ro",33],["stiripesurse.ro",34],["hotnews.ro",35],["csid.ro",36],["gandul.ro",37],["news.ro",38],["mediafax.ro",39],["wall-street.ro",40],["descopera.ro",41],["click.ro",42],["evz.ro",42],["dilemaveche.ro",43],["locals.md",44],["digi24.ro",45],["dcmedical.ro",46],["ramnicuvalceaweek.ro",47],["arhiblog.ro",48],["editiedevrancea.ro",49],["stirileprotv.ro",50],["acasatv.ro",50],["sport.ro",50]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
