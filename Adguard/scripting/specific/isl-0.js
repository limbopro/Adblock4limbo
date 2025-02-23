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

// ruleset: isl-0

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#atop","#banner,\n[href^=\"/is/moya/adverts/\"],\n[id^=\"box_aitem\"],\naside","#banners","#cboxOverlay","#ctl00_ctl00_cphMain_cphMain_RandomBanner4_divBanner,\n#spoton,\n.bp26,\n.bp4,\n.randombanner-upperright","#mvp-leader-wrap,\n[href^=\"https://airpark.is\"]","#snppopup-welcome",".AuglysingaHnappur",".HeimildinAd_ad310400__iUf_1,\n.PulsAd310x400_iframe__9pkTN,\n.TopAd_all___Rrm_,\n[class*=\"FrontPageIS_\"]",".HorizontalAd_container__6Aymu,\n.augl-wrapper,\n.laufid-border.cover-photo,\n.side-augl-wrapper,\n[href^=\"https://old.1819.is/linkto/\"]",".ad",".ad-banner,\n.bsaProItems",".ad-front-310x400,\n.ad-front-635x150",".adbannermain",".adbox",".au-block,\n.real-estate-block,\n.real-estate-container",".adw",".augl,\n.mt-5.mb-5,\n.ticker-ad",".bannergroup",".elementor-716826,\n.elementor-716842,\n.elementor-716846,\n.elementor-716862,\n.elementor-716869,\n.elementor-716890",".g",".iframead-spot-a,\ndiv[class^=\"col-\"]:has([class*=\"advertisement-spot-\"])",".netgiroInsuranceSection,\ndiv[id*=\"advImg\"]",".strevda",".td-a-rec",".tdi_103_674,\n.tdi_5_7f3,\n.tdi_5_cc0",".widget_custom_html",".widget_media_image","div[id^=\"banner\"]","div[style^=\"margin:0px auto;height:310px;\"]"];

const hostnamesMap = new Map([["vikubladid.is",[0,23]],["akureyri.net",[1,23]],["vaktin.is",2],["dv.is",3],["pressan.is",4],["veitingageirinn.is",[5,26]],["hun.is",6],["kki.is",7],["blika.is",8],["1819.is",9],["heimildin.is",10],["vf.is",10],["eidfaxi.is",11],["skessuhorn.is",12],["auroraforecast.is",13],["doktor.is",14],["vb.is",15],["ja.is",16],["mbl.is",17],["austurfrett.is",18],["eyjafrettir.is",19],["bb.is",20],["eyjar.net",20],["utvarpsaga.is",20],["veitingastadir.is",[20,27]],["bilasolur.is",21],["bland.is",22],["hringbraut.is",23],["karfan.is",24],["nutiminn.is",25],["discover.is",26],["icelandwithaview.com",27],["fotbolti.net",28],["smugan.is",29]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
