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

const argsList = ["[]","[{\"selector\":\".elementor-column\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}]","[{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".h-text\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]]}]","[{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Publ\"]]}]","[{\"selector\":\"article > div.td-post-content > p\",\"tasks\":[[\"has-text\",\"/^\\\\u00A0$/\"]]}]","[{\"selector\":\"div.grey-section\",\"tasks\":[[\"has-text\",\"Advertorial\"]]}]","[{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}]","[{\"selector\":\".container\",\"tasks\":[[\"has\",{\"selector\":\"> .part-right:has([href*=\\\"freakhosting.com\\\"])\"}]]}]","[{\"selector\":\".ipsWidget_title.ipsType_reset\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]","[{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"PUB\"]]}]","[{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"/Publicitate|Asemanatoare/\"]]}]","[{\"selector\":\".post_block:has([class^=\\\"guest\\\"])\",\"tasks\":[[\"has-text\",\"Anunturi\"]]}]","[{\"selector\":\".article-view\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]},{\"selector\":\".textlink\",\"tasks\":[[\"has-text\",\"ad\"]]}]","[{\"selector\":\"#custom_html-10\",\"tasks\":[[\"has-text\",\"Advertising\"]]}]","[{\"selector\":\".widget_header\",\"tasks\":[[\"has-text\",\"/recomand/i\"]]}]","[{\"selector\":\".td-pb-span12\",\"tasks\":[[\"has-text\",\"Advertisement\"]]}]","[{\"selector\":\".sidebar-widget\",\"tasks\":[[\"has-text\",\"/Recomandate/\"],[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"Post\"]]}]]}]","[{\"selector\":\".inside-right-sidebar\",\"tasks\":[[\"has-text\",\"ads\"]]}]","[{\"selector\":\".td-pb-span3\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"PUBLICITATE\"]]}]","[{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".custom_textwidget\",\"tasks\":[[\"has-text\",\"publicitar\"]]}]","[{\"selector\":\"section\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}]","[{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has-text\",\"ad\"]]}]","[{\"selector\":\".elementor-element\",\"tasks\":[[\"has-text\",\"ad\"]]}]","[{\"selector\":\".code-block\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\"#sidebar > div.widget\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".boxstire2head\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\".tdm-descr\",\"tasks\":[[\"has-text\",\"sponsor\"]]}]","[{\"selector\":\".mh-widget\",\"tasks\":[[\"has-text\",\"/PROMO|PARTENER/i\"]]}]","[{\"selector\":\".widget_media_image\",\"tasks\":[[\"has\",{\"selector\":\"[href]\",\"tasks\":[[\"not\",{\"selector\":\"*\",\"tasks\":[[\"has-text\",\"[href*=\\\"litoraltv.ro\\\"]\"],[\"spath\",\":not(*:has([href*=\\\"facebook.com\\\"]))\"]]}]]}]]},{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"],\"cssable\":true}]","[{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"Reclame\"]]}]","[{\"selector\":\"td > center\",\"tasks\":[[\"has-text\",\"Reclama\"]]}]","[{\"selector\":\".special-box-pm > p\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}]","[{\"selector\":\".article-category\",\"tasks\":[[\"has-text\",\"/Philip Morris|țigar/\"]]},{\"selector\":\".article-category-featured\",\"tasks\":[[\"has-text\",\"Philip Morris\"]]}]","[{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"susținut de Philip Morris\"]]}]","[{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris International\"]]}]","[{\"selector\":\".single__content\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}]","[{\"selector\":\".article-body\",\"tasks\":[[\"has-text\",\"Philip Morris România\"]]}]","[{\"selector\":\"#article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".article-wrap\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".single__container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".container\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\"article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".t-records\",\"tasks\":[[\"has-text\",\"arderea \"]]}]","[{\"selector\":\".article\",\"tasks\":[[\"has-text\",\"arderea tutunului\"]]}]","[{\"selector\":\".ContentArticle\",\"tasks\":[[\"has-text\",\" tutunului\"]]}]","[{\"selector\":\"#sidebar > .widget_text\",\"tasks\":[[\"not\",{\"selector\":\".widgettitle\",\"tasks\":[[\"has-text\",\"Horoscop\"]]}]]}]","[{\"selector\":\".widget_text.widget\",\"tasks\":[[\"has-text\",\"eMAG\"]]}]","[{\"selector\":\".gridview-box-inside\",\"tasks\":[[\"has-text\",\"PROMO\"]]}]","[{\"selector\":\".striped_table_row:has(> div > .multicolumndayproginnerad)\",\"action\":[\"style\",\"position: absolute;\"],\"cssable\":true}]","[{\"selector\":\".small\",\"tasks\":[[\"has-text\",\"Publicitate\"]]}]","[{\"selector\":\"*\",\"action\":[\"remove\",\"\"],\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"ADVERTISING\"}]]}]","[{\"selector\":\"#header\",\"action\":[\"style\",\"position:static!important; top: 0 !important;\"],\"cssable\":true},{\"selector\":\"#main_container\",\"action\":[\"style\",\"padding-top: 0 !important;\"],\"cssable\":true},{\"selector\":\".header_nav\",\"action\":[\"style\",\"position:static !important;\"],\"cssable\":true}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55];
const hostnamesMap = new Map([["mesagerulneamt.ro",1],["ziarpiatraneamt.ro",2],["presasm.ro",3],["smlive.ro",4],["agora.md",5],["agrointel.ro",6],["cspower.ro",7],["sa-mp.ro",8],["lauralaurentiu.ro",9],["lovendal.ro",10],["forum.softpedia.com",11],["kudika.ro",12],["evmarket.ro",13],["nwradu.ro",14],["autolatest.ro",15],["7media.md",16],["stireadeazi.ro",17],["agro-tv.ro",18],["mesageruldesibiu.ro",19],["weradio.ro",20],["curier.ro",21],["campinatv.ro",22],["buletindecarei.ro",23],["ciutacu.ro",24],["ziarulargesul.ro",25],["graiulsalajului.ro",26],["cespun.eu",27],["buzau.net",28],["zvj.ro",29],["presadeazi.ro",30],["ctnews.ro",31],["litoraltv.ro",32],["gazetavalceana.ro",33],["girlshare.ro",34],["jurnalul.ro",35],["stiripesurse.ro",36],["hotnews.ro",37],["csid.ro",38],["gandul.ro",39],["news.ro",40],["mediafax.ro",41],["wall-street.ro",42],["descopera.ro",43],["click.ro",44],["evz.ro",44],["dilemaveche.ro",45],["locals.md",46],["digi24.ro",47],["dcmedical.ro",48],["ramnicuvalceaweek.ro",49],["arhiblog.ro",50],["editiedevrancea.ro",51],["program-tv.ro",52],["catalog-az.ro",53],["stirileprotv.ro",54],["acasatv.ro",54],["sport.ro",54],["cinemagia.ro",55]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
