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

// idn-0

const toImport = [[5024439,"#Box-Banner-ads"],[8946512,"#Iklan-Melayang"],[6183202,"#Kolom-Iklan-728"],[16368182,"#SidebarIklan-wrapper"],[13837322,"#ad_box_1"],[4839092,"#ad_divLeft"],[2710148,"#ads-vert-300"],[513689,"#ads_banner_left"],[1450438,"#ads_banner_left1"],[1450838,"#ads_banner_right"],[9668187,"#ads_hd_bt"],[2498982,"#ads_top_list"],[9676905,"#adsbawah1,#adskanan1"],[3461960,"#adsimgxatas"],[2794959,"#adsimgxatas2,#adsimgxatass"],[2794280,"#adsimgxbawah"],[4711739,"#adsimgxbawah2"],[1070229,"#adskiri1"],[1070230,"#adskiri2"],[1070231,"#adskiri3"],[1940822,"#adv-placeholder"],[13732415,"#banner_iklan_top"],[11308349,"#banner_top_detail"],[4308197,"#bawahpads"],[5626588,"#bireklam"],[11306031,"#bottom_exclusive_ads"],[8709678,"#cfs_top_div"],[6533206,"#desaiklan"],[8225680,"#df-wrapper-ads-top"],[11389999,"#div-ad-read_body_1"],[8809869,"#div-ad-right_1,#div-ad-right_2,#div-ad-right_3"],[15202754,"#div-ad-skin_left"],[6029669,"#div-ad-skin_right"],[1392667,"#float-banner.visible-lg"],[3335210,"#floatadsbawah"],[10134669,"#floating_ads_bottom_textcss_ad"],[15600123,"#floatingad"],[15285440,"#flowads"],[345296,"#footer-adcont"],[11076292,"#gpt-ad-leaderboard"],[11179183,"#gpt-ad-middleleaderboard"],[953636,"#gpt-ad-mr1,#gpt-ad-mr2"],[979225,"#idblog-adb-enabled"],[10967232,"#idmuvi-adb-enabled"],[2330186,"#idmuvi-popup"],[12760679,"#iklan"],[13297698,"#iklan-atas,#iklan_atas,#iklanbawah"],[5199646,"#iklan-bawah,#iklan_bawah"],[205346,"#iklan-pos"],[4369346,"#iklan-sidebar"],[10251711,"#iklan-tengah,#iklan_tengah"],[13298382,"#iklan-text"],[8812213,"#iklan1"],[10187900,"#iklan125x127"],[8812214,"#iklan2"],[8812215,"#iklan3"],[10189948,"#iklan300x100"],[8812208,"#iklan4"],[11268797,"#iklan700"],[13298127,"#iklanFloat"],[5208808,"#iklan_kanan"],[13298043,"#iklan_kiri"],[205554,"#iklanarea"],[205478,"#iklanatas"],[10241877,"#iklanpersegi"],[822360,"#myadsmodal"],[4530189,"#netkevin-overlay"],[8773004,"#netkevin-popup"],[7737602,"#popupwindow"],[12717199,"#srcadsurlblock"],[4251834,"#switch-ad"],[3317065,"#tisisads"],[12934187,"#top_ad_full"],[10590043,"#tupiklan"],[7736292,"#vp-advert"],[10917335,".SectionAds"],[14538464,".ad-ekspose"],[1896435,".ad-left-image"],[7187338,".ad-right-image"],[3424478,".ad_primex"],[3525973,".ads-head"],[16613156,".ads-partner-wrap"],[8443645,".ads-pop"],[8684867,".ads-sticky-bottom"],[1370064,".ads728-slot"],[12276368,".ads_2c"],[12276383,".ads_2l"],[12276353,".ads_2r"],[2236358,".ads__side"],[2219192,".ads_image"],[15719548,".ads_top_728"],[6426616,".adsatas"],[9185286,".adsatas1"],[9185285,".adsatas2"],[9185284,".adsatas3"],[8455149,".adsbawah"],[2210532,".adsbawah1,.adskanan1"],[2210535,".adsbawah2,.adskanan2"],[2210534,".adsbawah3,.adskanan3"],[2201839,".adsbymgid"],[8176701,".adsbyown"],[7644573,".adsbyrunactive"],[6374978,".adsgen1"],[6164207,".adsimgs"],[9324091,".adskanan"],[6235398,".adskiri"],[9023864,".adskiri1"],[9023867,".adskiri2"],[9023866,".adskiri3"],[16453264,".adspace_300"],[576319,".adspost520,.adspost728"],[2206463,".adstengah"],[4430047,".adtext01"],[3971257,".adunits"],[9934828,".banner-iklan"],[8372248,".bgads"],[1032497,".bireklam"],[12478634,".box_item_ads_popup"],[11766893,".disads300px"],[9394000,".fake_player"],[9118656,".floatingBanner728"],[12867716,".floatingads"],[13632984,".footer-ad-mobile"],[13772901,".forads"],[123523,".fotads_showalign"],[4563543,".frame_iklan_baris"],[16050684,".gbcontent,.gpcontent"],[1917293,".gmr-bannerpopup"],[15224443,".happy-inside-player"],[6123799,".headads"],[1263256,".header-ad-mobile"],[6118127,".idblog-center-ads"],[10034261,".idblog-topbanner-aftermenu"],[2214640,".idmuvi-afterplayer"],[15755181,".idmuvi-banner-aftercontent"],[16286169,".idmuvi-banner-beforecontent"],[16265356,".idmuvi-banner-insidecontent"],[11866659,".idmuvi-bannerplayer"],[15086714,".idmuvi-bannerplayer-wrap"],[10720310,".idmuvi-center-ads"],[2187822,".idmuvi-floatbanner"],[4774942,".idmuvi-floatbanner-footer"],[348160,".idmuvi-floatbanner-left"],[6423246,".idmuvi-floatbanner-right"],[11833453,".idmuvi-footerbanner"],[6295911,".idmuvi-topbanner"],[3829868,".idmuvi-topbanner-aftermenu"],[9730672,".idmuvi-topbanner-archive"],[6311450,".idmuvi-topplayer"],[11674872,".iframeiklan"],[14754154,".iklan"],[8818351,".iklan-atas,.iklan_atas"],[15069043,".iklan-bawah,.iklan_bawah"],[6232990,".iklan-bawah-player"],[15057011,".iklan-header-item"],[15058821,".iklan-kanan,.iklan_kanan"],[8818166,".iklan-kiri,.iklan_kiri"],[6450878,".iklan-latest-kanan"],[14922657,".iklan-latest-kiri"],[8817925,".iklan-left"],[10672431,".iklan-pos"],[8818841,".iklan-puff"],[15085935,".iklan-right"],[13759288,".iklan-samping"],[13396824,".iklan1"],[13396827,".iklan2"],[13396826,".iklan3"],[14895828,".iklan300"],[14891546,".iklan728"],[14843154,".iklanBox"],[13758352,".iklan_semprot"],[6025850,".iklan_semprot_h"],[13171666,".iklan_tengah"],[10672299,".iklanatas"],[15073299,".iklanbanner"],[10672277,".iklanfull"],[10671757,".iklanhead"],[8818219,".iklanlebar"],[10671773,".iklanleft"],[10671628,".iklanmini"],[10671703,".iklanpost"],[8818747,".iklanpusat"],[8818094,".iklanright"],[9441377,".iklanx1"],[13411309,".ikltop"],[15347083,".inarticle-ads"],[9309159,".infeed-ads"],[11270511,".inner-floatbanner-bottom"],[8931147,".inside-player-ad"],[8418611,".ivs-overlay-adcontainer"],[5808214,".ivs-overlay-ads"],[3513804,".kill-adblock-container"],[7871090,".klan300"],[4414586,".kotak_iklan"],[7432250,".kotakiklan"],[6119403,".ktz-aftermenubanner"],[1064444,".ktz-bannersingletop"],[218895,".loading.ads-50"],[6985475,".marginads"],[5061020,".mobileAd_bottom_floating"],[6407638,".mobileads"],[16102524,".mobileadstop"],[6520749,".para_ads"],[12086002,".pengiklan"],[12301730,".popUpBannerBox"],[16022744,".popupflyin-clicks-area"],[6707416,".pusat728"],[2274033,".qode-banner-left"],[15758197,".qode-banner-right"],[10138756,".rkads"],[16526882,".show-first-ads"],[7170875,".simple_advert"],[10100066,".single_ad_728x90"],[97753,".skin-iklan"],[1265400,".sticky-ad-atas"],[1424068,".sticky-ad-bawah"],[4557315,".subiklan"],[3993031,".text-center.adv"],[14527858,".topadsense"],[11079779,".wrapper-ads"],[13623404,"#ad_bawah"],[8981490,"#adsic364x90-bokep"],[12339541,"#judi"],[7762918,"#judi2"],[10340915,"#togel"],[2127698,".ads-1xbet"],[16292397,".dominowalet"],[10902895,".happypoker"],[1099704,".judi"],[4795838,".togel"]];

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
