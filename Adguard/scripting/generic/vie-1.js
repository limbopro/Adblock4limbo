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

// vie-1

const toImport = [[13551736,"#ad-case"],[3075652,"#ads-preload"],[13930790,"#adunit"],[11298178,"#balloonads"],[11492145,"#balloonads2"],[11083042,"#banner-top"],[13615970,"#banner_FloatLeft"],[11302388,"#banner_FloatRight"],[4204423,"#bar_float"],[11811037,"#bn_bottom_fixed_left"],[9174525,"#bn_bottom_fixed_right"],[15961141,"#floating_ads_bottom_textcss_container"],[14424411,"#mobileCatfish"],[13439867,"#mobile_content_bottom"],[6707668,"#player-ads"],[14727432,"#pmadv"],[4552223,"#qcBallonright"],[7750290,"#quangcaomb"],[7750287,"#quangcaopc"],[7774380,"#watch7-sidebar-ads"],[2566477,".SC_TBlock"],[13660477,".ad-728"],[12483541,".ad-card"],[10985614,".ad-right"],[3440810,".ad_header"],[15434546,".ad_location"],[8703533,".ads-block-warning"],[15263221,".ads-fix-bottom"],[574835,".ads-middle"],[16454781,".ads_area_01"],[16454783,".ads_area_03"],[16454776,".ads_area_04"],[553922,".ads_player"],[2201688,".adsbyadop"],[565319,".adsmessage"],[446946,".adv-box"],[423292,".adv-top"],[12343853,".advertisement-text"],[7936191,".avert"],[11090577,".banner-bottom"],[15628096,".banner_728"],[16028562,".boun-media"],[1817570,".boun-media1"],[14929012,".ezoic-ad"],[601681,".ff-banner"],[3942003,".float-ck"],[438061,".google-ad-square-sidebar"],[11317937,".img_ad"],[11338013,".iosAdsiosAds-layout"],[3079339,".jw-cue"],[5910566,".leftAdsBanner"],[5115164,".logged_out_ad"],[14738640,".midroll-marker"],[3960611,".module_home_ads"],[13675703,".module_single_ads"],[4522264,".player-midpoint-progress"],[4534627,".preroll-blocker"],[16672551,".quangcao"],[3705643,".question_page_ad"],[4723804,".right-box.top-block"],[536784,".safeuploada-filter"],[5236221,".top-ad-content"],[13674127,".top-ad-wrap"],[16316409,".top-ads"],[985099,".top_ads"],[317704,".video-ads"],[16624647,".ytp-ad-progress"],[11662007,".ytp-ad-progress-list"]];

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
