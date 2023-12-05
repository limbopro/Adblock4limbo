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

/* jshint esversion:11 */

'use strict';

// ruleset: isl-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".ir-surprise-list",".augl-wrapper,\n.augl.augl-size-1018,\n.side-augl-wrapper",".widget.widget_media_image",".bannergroup",".banner-container",".banner","div[class^=\"col-\"]:has([class*=\"advertisement-spot-\"])","#footer-netgiro,\n.boughtsmas.box,\n.box.classifedSmas,\n.box.isotopeItem.spaceAugl,\n.netgiroInsuranceSection,\n.slider-wrapper,\ndiv[id*=\"advImg\"]",".gardina","#cboxOverlay",".forsaugl","#nm_container","#ForsidaBotn,\n#ForsidaMB1,\n#ForsidaMB2,\n.col2,\n.turn","#adinj-2","div[class^=\"ad\"]","#wp_editor_widget-18,\n.widget,\n.widgetizedArea",".ad",".ad2",".strevda","#snppopup-welcome","#like",".adw",".ad-pos",".AuglysingaHnappur","#flexslider3,\n.auglysing_h1,\n.new-ads-slider,\n.new-ads-slider-small,\n.new-auglysing_h2,\n.stod_grein","#slot-668,\n#yfirhaus-ad,\n#yfirhaus-augl,\n.augl,\n.augl-parallax-frontpage,\n.augl-wide,\n.dlk-13,\n.dlk-23,\n.mt-5.mb-5","#floating-box-right,\n#footer_section_1,\n#text_mnky-2,\n#text_mnky-3,\n.g.g-2,\n.g.g-7,\n.su-column.su-column-1-3.su-column-style-1,\n.textwidget,\n.topz","#image-3,\n#text-113","#ctl00_RandomBanner2_divBanner,\n#ctl00_RandomBanner3_divBanner,\n#ctl00_cphMain_Wrapper1_ctl06_divBanner,\n#ctl00_ctl00_cphMain_cphMain_RandomBanner4_divBanner,\n#ctl00_ctl00_cphRullugardina_cphRullugardina_RandomBannerRullugardina_divBanner,\n#skyscrapper,\n#spoton,\n.bp26,\n.bp4,\n.randombanner-upperright",".fb_ltr","#imgAuglRight_1,\n#imgAuglRight_4,\n.imgAuglHead,\n.kostad-efni,\n.tdAuglMidja",".header_add,\nOBJECT[width=\"300\"]","#sambio-banner,\n#top-banner,\n.ad-tower,\nDIV[style=\"padding: 20px 0; text-align: center;\"]",".ad_310.add_marg_20_b",".add_top_border.left_floater,\n.head_ad_360x100,\n.left_floater.add_top_border,\n.top_customer_banner,\nIMG[src=\"/thumb/550x200/53d278ef882dd.jpg\"]","#ad-overlay-container",".col-item","[id*=\"HeaderAd\"]","#banner-310x400-Right,\n.row.ad","#topadbanner","#banner,\n[href^=\"/is/moya/adverts/\"],\n[id^=\"box_aitem\"],\naside",".col-md-8.ad.hausad","#banner1,\n#banner10,\n#banner11,\n#banner12,\n#banner13,\n#banner14,\n#banner15,\n#banner16,\n#banner17,\n#banner2,\n#banner23,\n#banner3,\n#banner4,\n#banner5,\n#banner6,\n#banner7,\n#banner8,\n#banner9"];

const hostnamesMap = new Map([["icelandreview.com",0],["1819.is",1],["auroraforecast.is",2],["austurfrett.is",3],["bb.is",[4,5]],["sporttv.is",[5,32]],["bilasolur.is",6],["bland.is",7],["dv.is",[8,9]],["krom.is",[8,24]],["eidfaxi.is",10],["clients.ennemm.is",11],["flass.is",12],["foreldrahandbokin.is",13],["frettabladid.is",14],["frettanetid.is",15],["frettatiminn.is",[16,17]],["kjarni.is",16],["hringbraut.is",18],["hun.is",19],["infront.is",20],["ja.is",21],["karfan.is",22],["kki.is",23],["mbl.is",25],["menn.is",26],["pjatt.is",27],["pressan.is",28],["bleikt.pressan.is",29],["skessuhorn.is",30],["smugan.is",31],["spyr.is",[33,34]],["stundin.is",35],["sumarferdir.is",36],["veitingastadir.is",37],["vf.is",38],["visir.is",39],["akureyri.net",40],["eyjar.net",41],["fotbolti.net",42]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
