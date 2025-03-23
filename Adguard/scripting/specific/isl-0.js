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

const argsList = ["","#atop","#banner","#banners","#cboxOverlay","#ctl00_ctl00_cphMain_cphMain_RandomBanner4_divBanner","#mvp-leader-wrap","#snppopup-welcome","#spoton",".AuglysingaHnappur",".HeimildinAd_ad310400__iUf_1",".HorizontalAd_container__6Aymu",".PulsAd310x400_iframe__9pkTN",".TopAd_all___Rrm_",".ad",".ad-banner",".ad-front-310x400",".ad-front-635x150",".adbannermain",".adbox",".au-block",".adw",".augl",".augl-wrapper",".bannergroup",".bp26",".bp4",".bsaProItems",".elementor-716869",".elementor-716826",".elementor-716890",".elementor-716842",".elementor-716846",".elementor-716862",".g",".iframead-spot-a",".laufid-border.cover-photo",".mt-5.mb-5",".netgiroInsuranceSection",".real-estate-block",".real-estate-container",".randombanner-upperright",".side-augl-wrapper",".strevda",".td-a-rec",".tdi_103_674",".tdi_5_7f3",".tdi_5_cc0",".ticker-ad",".widget_custom_html",".widget_media_image","[class*=\"FrontPageIS_\"]","[href^=\"/is/moya/adverts/\"]\n[id^=\"box_aitem\"]\naside","[href^=\"https://airpark.is\"]","[href^=\"https://old.1819.is/linkto/\"]","div[class^=\"col-\"]:has([class*=\"advertisement-spot-\"])","div[id*=\"advImg\"]","div[id^=\"banner\"]","div[style^=\"margin:0px auto;height:310px;\"]"];
const argsSeqs = [0,-1,43,-2,-43,52,3,4,-5,-8,-25,-26,41,-6,-49,53,7,9,-10,-12,-13,51,-11,-23,-36,-42,54,14,-15,27,-16,17,18,19,-20,-39,40,21,-22,-37,48,24,-28,-29,-30,-31,-32,33,34,-34,50,-35,55,-38,56,43,44,-45,-46,47,49,50,57,58];
const hostnamesMap = new Map([["vikubladid.is",1],["akureyri.net",3],["vaktin.is",6],["dv.is",7],["pressan.is",8],["veitingageirinn.is",13],["hun.is",16],["kki.is",17],["blika.is",18],["1819.is",22],["heimildin.is",27],["vf.is",27],["eidfaxi.is",28],["skessuhorn.is",30],["auroraforecast.is",32],["doktor.is",33],["vb.is",34],["ja.is",37],["mbl.is",38],["austurfrett.is",41],["eyjafrettir.is",42],["bb.is",48],["eyjar.net",48],["utvarpsaga.is",48],["veitingastadir.is",49],["bilasolur.is",51],["bland.is",53],["hringbraut.is",55],["karfan.is",56],["nutiminn.is",57],["discover.is",60],["icelandwithaview.com",61],["fotbolti.net",62],["smugan.is",63]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
