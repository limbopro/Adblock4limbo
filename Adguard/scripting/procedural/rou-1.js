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

const argsList = ["[]","[{\"selector\":\".elementor-column\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}]","[{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]]}]","[{\"selector\":\"article > div.td-post-content > p\",\"tasks\":[[\"has-text\",\"/^\\\\u00A0$/\"]]}]","[{\"selector\":\"div.grey-section\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]","[{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}]","[{\"selector\":\".container\",\"tasks\":[[\"has\",{\"selector\":\"> .part-right:has([href*=\\\"freakhosting.com\\\"])\"}]]}]","[{\"selector\":\".ipsWidget_title.ipsType_reset\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]","[{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"PUB\"]]}]","[{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Publicitate|Asemanatoare/\"]]}]","[{\"selector\":\".post_block:has([class^=\\\"guest\\\"])\",\"tasks\":[[\"has-text\",\"Anunturi\"]]}]","[{\"selector\":\".article-view\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]},{\"selector\":\".textlink\",\"tasks\":[[\"has-text\",\"ad\"]]}]","[{\"selector\":\"#custom_html-10\",\"tasks\":[[\"has-text\",\"Advertising\"]]}]","[{\"selector\":\".widget_header\",\"tasks\":[[\"has-text\",\"/recomand/i\"]]}]","[{\"selector\":\".td-pb-span12\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]","[{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has-text\",\"/Recomandate/\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"Post\"]]}]]}]","[{\"selector\":\".inside-right-sidebar\",\"tasks\":[[\"has-text\",\"ads\"]]}]","[{\"selector\":\".td-pb-span3\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}]","[{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".custom_textwidget\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]","[{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}]","[{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"ad\"]]}]","[{\"selector\":\".elementor-element\",\"tasks\":[[\"has-text\",\"ad\"]]}]","[{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".boxstire2head\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"sponsor\"]]}]","[{\"selector\":\".mh-widget\",\"tasks\":[[\"has-text\",\"/PROMO|PARTENER/i\"]]}]","[{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"[href*=\\\"litoraltv.ro\\\"]\"],[\"spath\",\":not(*:has([href*=\\\"facebook.com\\\"]))\"]]}]]}]]},{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"],\"cssable\":true}]","[{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}]","[{\"selector\":\"td > center\",\"tasks\":[[\"has-text\",\"Reclama\"]]}]","[{\"selector\":\".special-box-pm > p\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}]","[{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"/Philip Morris|țigar/\"]]},{\"selector\":\".article-category-featured\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}]","[{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"susținut de Philip Morris\"]]}]","[{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris International\"]]}]","[{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}]","[{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}]","[{\"selector\":\"#article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".article-wrap\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".single__container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".t-records\",\"tasks\":[[\"has-text\",\"arderea \"]]}]","[{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".ContentArticle\",\"tasks\":[[\"has-text\",\" tutunului\"]]}]","[{\"selector\":\"#sidebar > .widget_text\",\"tasks\":[[\"not\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Horoscop\"]]}]]}]","[{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"eMAG\"]]}]","[{\"selector\":\".gridview-box-inside\",\"tasks\":[[\"has-text\",\"PROMO\"]]}]","[{\"selector\":\".striped_table_row:has(> div > .multicolumndayproginnerad)\",\"action\":[\"style\",\"position: absolute;\"],\"cssable\":true}]","[{\"selector\":\".small\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\"*\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"ADVERTISING\"}]]}]","[{\"selector\":\"#header\",\"action\":[\"style\",\"position:static!important; top: 0 !important;\"],\"cssable\":true},{\"selector\":\"#main_container\",\"action\":[\"style\",\"padding-top: 0 !important;\"],\"cssable\":true},{\"selector\":\".header_nav\",\"action\":[\"style\",\"position:static !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54];
const hostnamesMap = new Map([["mesagerulneamt.ro",1],["ziarpiatraneamt.ro",2],["smlive.ro",3],["agora.md",4],["agrointel.ro",5],["cspower.ro",6],["sa-mp.ro",7],["lauralaurentiu.ro",8],["lovendal.ro",9],["forum.softpedia.com",10],["kudika.ro",11],["evmarket.ro",12],["nwradu.ro",13],["autolatest.ro",14],["7media.md",15],["stireadeazi.ro",16],["agro-tv.ro",17],["mesageruldesibiu.ro",18],["weradio.ro",19],["curier.ro",20],["campinatv.ro",21],["buletindecarei.ro",22],["ciutacu.ro",23],["ziarulargesul.ro",24],["graiulsalajului.ro",25],["cespun.eu",26],["buzau.net",27],["zvj.ro",28],["presadeazi.ro",29],["ctnews.ro",30],["litoraltv.ro",31],["gazetavalceana.ro",32],["girlshare.ro",33],["jurnalul.ro",34],["stiripesurse.ro",35],["hotnews.ro",36],["csid.ro",37],["gandul.ro",38],["news.ro",39],["mediafax.ro",40],["wall-street.ro",41],["descopera.ro",42],["click.ro",43],["evz.ro",43],["dilemaveche.ro",44],["locals.md",45],["digi24.ro",46],["dcmedical.ro",47],["ramnicuvalceaweek.ro",48],["arhiblog.ro",49],["editiedevrancea.ro",50],["program-tv.ro",51],["catalog-az.ro",52],["stirileprotv.ro",53],["acasatv.ro",53],["sport.ro",53],["cinemagia.ro",54]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
