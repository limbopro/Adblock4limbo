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

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// pol-0

const toImport = [[1473840,"#a-d-s"],[3245547,"#a_201"],[11101506,"#a_d_billboard"],[16599812,"#ad_gora_srodek"],[6924954,"#adsense_main_lewa"],[6389866,"#adtify-widget"],[4194016,"#arlington-optin"],[12021142,"#ceneo-placeholder-ceneo-12"],[16169074,"#ceneo_slider"],[6262982,"#goback"],[5372526,"#like-us-adblock-modal"],[13761106,"#main_advertisement"],[8762747,"#middleboxrectangle"],[3160304,"#nsix_baloon"],[9562044,"#oponeoWidget"],[15081780,"#poza-gridem"],[14853907,"#seeAlsoBox"],[1033411,".BanerHPBig"],[4053716,".Reklama"],[9407288,".a-d-v"],[4152187,".ad-offers"],[3436729,".ad_Handle"],[12762527,".addv-container"],[5874521,".adexonModuleportel.pl"],[6894198,".adoceanGora1Wrapper"],[3575112,".boxAdvert"],[6929922,".advContainer"],[2036942,".adverstiment-box"],[12342110,".advertisemen-block"],[12333911,".advertisment-panel"],[15758586,".adviewDFPBanner"],[16426660,".appAdvContainer"],[8811830,".article_advertisement"],[2791131,".banery_750_100"],[4290008,".box.ofero24"],[979470,".boxAdv"],[13506124,"#ceneokobieta2"],[16320252,".ceneo-products.clearfix"],[6992374,".cg2-ad"],[13124389,".cookemessagecloseico"],[5427495,".dynamicAD"],[13261698,".hide-for-small.baner-promo-euro"],[3198016,".home_ads"],[15409397,".homeadv"],[10276625,".houdini"],[7959590,".jqmOverlay"],[4272395,".mod.mod_cpCommerce.small"],[2295893,".opacitybox"],[13197649,".oponeoWidget"],[5021384,".popup-premium__apla"],[2054702,".reklama-gora"],[4308824,".sec.ecommerce"],[14732879,".tvn-advertisement"],[9903538,".zalando-ad"],[912926,".zalando-placeholder"],[14706896,"div#skapiec_ad"],[14485271,"ul.sharing-tools"],[3513804,".kill-adblock-container"],[15505559,".adblock-alt"],[10827884,".adblock-placeholder"],[11722471,".ban-69.row.ban"],[7068266,".scrolled.infoBlock"]];

const genericSelectorMap = self.genericSelectorMap || new Map();

if ( genericSelectorMap.size === 0 ) {
    self.genericSelectorMap = new Map(toImport);
    return;
}

for ( const toImportEntry of toImport ) {
    const existing = genericSelectorMap.get(toImportEntry[0]);
    genericSelectorMap.set(
        toImportEntry[0],
        existing === undefined
            ? toImportEntry[1]
            : `${existing},${toImportEntry[1]}`
    );
}

self.genericSelectorMap = genericSelectorMap;

/******************************************************************************/

})();

/******************************************************************************/
