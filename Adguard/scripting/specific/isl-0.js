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

const argsList = [".widget_media_image",".HorizontalAd_container__6Aymu,\n.augl-wrapper,\n.laufid-border.cover-photo,\n.side-augl-wrapper,\n[href^=\"https://old.1819.is/linkto/\"]",".adbannermain",".bannergroup",".g",".iframead-spot-a,\ndiv[class^=\"col-\"]:has([class*=\"advertisement-spot-\"])",".netgiroInsuranceSection,\ndiv[id*=\"advImg\"]",".HeimildinAd_ad310400__iUf_1,\n.PulsAd310x400_iframe__9pkTN,\n.TopAd_all___Rrm_,\n[class*=\"FrontPageIS_\"]",".widget_custom_html",".adbox","#cboxOverlay",".ad-banner,\n.bsaProItems",".elementor-716826,\n.elementor-716842,\n.elementor-716846,\n.elementor-716862,\n.elementor-716869,\n.elementor-716890",".ad",".strevda","#snppopup-welcome",".adw",".td-a-rec",".AuglysingaHnappur",".augl,\n.mt-5.mb-5,\n.ticker-ad",".tdi_103_674,\n.tdi_5_7f3,\n.tdi_5_cc0","#ctl00_ctl00_cphMain_cphMain_RandomBanner4_divBanner,\n#spoton,\n.bp26,\n.bp4,\n.randombanner-upperright",".ad-front-310x400,\n.ad-front-635x150","div[style^=\"margin:0px auto;height:310px;\"]","#banners",".au-block,\n.real-estate-block,\n.real-estate-container","#mvp-leader-wrap,\n[href^=\"https://airpark.is\"]","#atop","#banner,\n[href^=\"/is/moya/adverts/\"],\n[id^=\"box_aitem\"],\naside","div[id^=\"banner\"]"];

const hostnamesMap = new Map([["icelandwithaview.com",0],["veitingastadir.is",[0,4]],["1819.is",1],["auroraforecast.is",2],["austurfrett.is",3],["bb.is",4],["utvarpsaga.is",4],["eyjar.net",4],["bilasolur.is",5],["bland.is",6],["blika.is",7],["discover.is",8],["veitingageirinn.is",[8,26]],["doktor.is",9],["dv.is",10],["eidfaxi.is",11],["eyjafrettir.is",12],["heimildin.is",13],["vf.is",13],["hringbraut.is",14],["vikubladid.is",[14,27]],["akureyri.net",[14,28]],["hun.is",15],["ja.is",16],["karfan.is",17],["kki.is",18],["mbl.is",19],["nutiminn.is",20],["pressan.is",21],["skessuhorn.is",22],["smugan.is",23],["vaktin.is",24],["vb.is",25],["fotbolti.net",29]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
