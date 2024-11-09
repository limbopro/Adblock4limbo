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

// jpn-1

const toImport = [[2563439,".full-tab > div.full-right-col"],[15562106,".__isboostReturnAd"],[10523900,".__uz__third_party_ad"],[11390972,"._popIn_infinite_ad"],[16346111,"._popIn_infinite_video"],[10329262,"._popIn_recommend_ad_section"],[10330050,"._popIn_recommend_article_ad"],[12873967,"._popIn_recommend_article_ad_reserved"],[1913014,".google-afc-image"],[3295591,"#ad-60days-area"],[14754346,"#ad-recommend"],[6194065,"#fc2_bottom_bnr"],[7932167,"#float-bnr"],[4638329,"#fluct-pc-sticky-ad"],[11474529,"#footerafficode"],[13108168,"#geniee_overlay_outer"],[9211041,"#headerafficode"],[12691658,"#id_ads_enc"],[914470,"#im_panel"],[4577702,"#im_panel_pc"],[165815,"#im_panel_pc_left"],[770259,"#kauli_yad_1"],[770256,"#kauli_yad_2"],[770257,"#kauli_yad_3"],[770262,"#kauli_yad_4"],[55256,"#meerkat-contents"],[14507854,"#ninja-blog-inactive"],[10874162,"#overlay-ad-div-id"],[2950987,"#prtaglink"],[14861149,"#seesaa-bnr"],[1310703,"#trackword_banner"],[5510615,".NinjaEntryCommercial"],[8629709,".ad-single-h2"],[3417945,".ad_splify"],[4564434,".ad1-title"],[13441749,".adPost"],[1778463,".ad_overlay"],[16559235,".adarea-box"],[7290061,".adboxcontainer_t"],[4366346,".adgoogle"],[12575057,".adgoogle-wrapper"],[1719329,".admax-ads"],[16348302,".ads-flexbox"],[2277341,".advrbox"],[11222649,".archive__item-infeedPc1,.archive__item-infeedPc2,.archive__item-infeedPc3"],[6693785,".archiveItem-infeed"],[6669967,".archiveList-infeed"],[15733960,".blogroll-ad-text"],[1984746,".blogroll_ads"],[1949012,".bns-bl"],[14615212,".c-infeedAd"],[15067187,".csw_non_search_ad_block_2"],[14982259,".diver_widget_adarea"],[2498525,".double-rectangle"],[823766,".fujoho_custom_banner"],[14150590,".ggbox"],[10074380,".google-2ad"],[3871527,".google-2ad-a,.google-2ad-b,.google-2ad-c,.google-2ad-f,.google-2ad-h,.google-2ad-m"],[10083884,".google-2ad-mid"],[9642690,".google-user-ad-728"],[11582181,".google-user-ad-side1"],[6785934,".i2i-content-bottom"],[6785841,".i2i-content-middle"],[10842841,".i2i-content-top"],[8993544,".i2i-header"],[1665210,".insentence-adsense"],[5841080,".invalid + .rakko_area"],[10770095,".itiran-ad"],[11716417,".js-kb-click"],[1911822,".logly-lift-ad-ad"],[4550623,".master-post-advert"],[12120853,".my_ads"],[8349926,".p-entry__ad"],[320880,".plugin-rakuten"],[4879477,".rectangle > div.rectangle__item + .rectangle__title"],[2628181,".rectangle__item"],[14228560,".related-ad-area"],[7285720,".seesaa-cmn__pr"],[6574698,".sherpa-component[data-ad_type]"],[416684,".side_widget_surfing_adsense_widget"],[5446717,".sleeping-ad-in-entry"],[5462307,".sleeping-ads"],[4515618,".sponsor-h2-center"],[14368316,".sponsor-top"],[14984387,".st-h-ad"],[5998706,".st-infeed-adunit"],[8234369,".st-magazine-infeed"],[10698857,".thk_ps_widget"],[15809402,".veu_insertAds"],[15043898,".widget_common_ad"],[4441971,".widget_fit_aditem_class"],[15039381,".widget_mobile_ad"],[1104745,".widget_pc_ad"],[11487183,".widget_st_custom_html_ad_widget"],[6500002,".widget_swell_ad_widget"],[4008801,".widget_tsnc_ad_custom_html"],[14222541,".widget_tsnc_ads_custom_html"],[9282032,".wipe-ad-div-class"],[2208527,".ys-ad-content"],[6122938,"iframe.lazyloaded[data-src^=\"https://ad.jp.ap.valuecommerce.com/\"]"],[10694788,".plugin-freearea > div[id^=\"msmaflink\"],.plugin-freearea a[href*=\"al.dmm.co\"],.plugin-freearea a[href*=\"amazon.co.jp\"],.plugin-freearea a[href*=\"e-nls.com/access.php\"]"],[6736878,".plugin-memo > .side > a[href*=\"al.dmm.co\"],.plugin-memo > .side > a[href*=\"amazon.co.jp/exec/\"],.plugin-memo > .side > a[href*=\"e-nls.com/access.php\"],.plugin-memo > .side > a[href^=\"https://affiliate.suruga-ya.jp\"]"],[4303972,".t_b > a[href^=\"https://hb.afl.rakuten.co.jp\"],.t_b > div > a[href^=\"https://al.dmm.co\"],.t_b ~ .amazon,.t_b ~ a[href^=\"https://amzn.to\"],.t_b ~ a[href^=\"https://hb.afl.rakuten.co.jp\"],.t_b ~ a[href^=\"https://www.amazon.co.jp\"],.t_b ~ div > a[href^=\"https://al.dmm.co\"],.t_b ~ div > a[href^=\"https://www.amazon.co.jp\"]"],[14829470,".textwidget a[href^=\"https://pcmax.jp/lp/?ad_id=\"] > img"],[6074297,".widget_custom_html > .custom-html-widget > a[href^=\"https://www.e-nls.com/access.php\"]"]];

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
