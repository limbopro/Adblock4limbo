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

// idn-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[1285,"#Area_Iklan_Atas"],[1149,"#Area_Iklan_Bawah"],[1875,"#Area_Iklan_Tengah"],[848,"#Iklan-Melayang"],[108,"#ad_bawah,\n.idmuvi-topbanner-aftermenu"],[2153,"#adsbawah1,\n#adskanan1"],[840,"#adsimgxatas"],[1487,"#adsimgxatas2,\n#adsimgxatass"],[808,"#adsimgxbawah"],[1339,"#adsimgxbawah2"],[1173,"#adskiri1"],[1174,"#adskiri2"],[1175,"#adskiri3"],[3442,"#aiklanatas1"],[2528,"#aiklanatasd1"],[440,"#aiklanheader1"],[443,"#aiklanheader2"],[442,"#aiklanheader3"],[445,"#aiklanheader4"],[444,"#aiklanheader5"],[447,"#aiklanheader6"],[2671,"#aiklantengah1"],[1096,"#area-iklan-kanan-atas"],[23,"#area-iklan-kiri-atas"],[416,"#banner-tengah"],[2623,"#banner_iklan_top"],[1913,"#banner_kanan"],[2686,"#banner_kiri"],[3389,"#banner_top_detail"],[3301,"#bawahpads"],[2780,"#bireklam"],[86,"#desaiklan,\n.ivs-overlay-ads"],[2230,"#floatadsatas"],[998,"#floatadsatas1,\n#judi2"],[1066,"#floatadsbawah"],[2227,"#floatbannerkanan"],[3692,"#floatbannerkiri"],[3802,"#floating_banner_top"],[199,"#idiklan_kanan"],[788,"#idiklan_kiri"],[2240,"#idmuvi-adb-enabled"],[3658,"#idmuvi-popup"],[1639,"#iklan"],[2082,"#iklan-atas,\n#iklanBawah,\n#iklan_atas,\n#iklanbawah"],[1822,"#iklan-bawah,\n#iklan_bawah"],[3383,"#iklan-giantbanner"],[2807,"#iklan-kanan-postingan"],[2427,"#iklan-kiri,\n#iklan_kiri"],[92,"#iklan-newsfeed"],[922,"#iklan-overlay"],[1587,"#iklan-paralax"],[546,"#iklan-pos"],[223,"#iklan-rekanan1,\n#iklan-rekanan2"],[3010,"#iklan-sidebar"],[2209,"#iklan-sidebar1"],[661,"#iklan-sticky"],[3519,"#iklan-tengah,\n#iklan_tengah"],[2831,"#iklan-tengah1"],[2828,"#iklan-tengah2"],[2766,"#iklan-text"],[1717,"#iklan1"],[1718,"#iklan2"],[1719,"#iklan3"],[3196,"#iklan300x100"],[1712,"#iklan4"],[2511,"#iklanFloat"],[3257,"#iklanSidebar1"],[3258,"#iklanSidebar2"],[3259,"#iklanSidebar3"],[3260,"#iklanSidebar4"],[2792,"#iklan_kanan"],[754,"#iklanarea"],[678,"#iklanatas"],[2757,"#iklanatas1,\n#iklanatas2,\n#iklanatas3,\n#iklanatas4"],[210,"#iklanbawah1"],[209,"#iklanbawah2"],[208,"#iklanbawah3"],[215,"#iklanbawah4"],[3039,"#iklanfoatingbawah"],[1527,"#iklanheader1,\n#iklanheader2,\n#iklanheader3,\n#iklanheader4,\n.part_iklan_content"],[395,"#iklanhome"],[2358,"#iklankirikanan1"],[1565,"#iklankirislider"],[1877,"#iklanpersegi"],[2552,"#iklanpopup"],[2350,"#iklanside1,\n#iklanside2"],[1486,"#iklantengah1"],[3099,"#imgiklanatas1"],[3096,"#imgiklanatas2"],[3885,"#imgiklanatasd1"],[1588,"#imgiklanbawah1"],[3701,"#imgiklanheader1"],[3702,"#imgiklanheader2"],[418,"#imgiklantengah1"],[2107,"#inpage-float-ad"],[1006,"#kode-iklan-atas"],[1686,"#kode-iklan-bawah"],[1086,"#kode-iklan-tengah1,\n#kode-iklan-tengah2"],[3660,"#kontolbanner"],[2925,"#megabillboard"],[13,"#netkevin-overlay"],[3468,"#netkevin-popup"],[3365,"#popup_bawah"],[1848,"#popupklan"],[855,"#popupklanfooter"],[4008,"#r_iklan"],[2322,"#rebahin-banner"],[1070,"#sidebar-banner-160x600-kanan"],[1473,"#sidebar-banner-160x600-kiri"],[3577,"#sticky-iklan"],[1883,"#tupiklan"],[2560,"#under-video-ads"],[1495,".SectionAds"],[3955,".ad-bawah,\n.iklan-bawah,\n.iklan_bawah"],[3673,".ad-container"],[1949,".adBar-vertical,\n.adBar-vertical.left,\n.adBar-vertical.right"],[2343,".ads--stick-parent-250px.clearfix.mt3.ads"],[2374,".ads--stick-parent-300px.clearfix.mt3.ads"],[2273,".ads--stick-parent-400px.clearfix.mt3.ads"],[4003,".ads--stick-parent.clearfix.mt3.ads"],[3094,".ads-50"],[3194,".ads-atas,\n.kotak_iklan"],[2041,".ads-atas-player"],[3240,".ads-bawah"],[1445,".ads-bawah-player,\n.iklan-header"],[3382,".ads-besar,\n.banner-iklan-rmid"],[211,".ads-kanan-player"],[1521,".ads-kecil"],[1056,".ads-kiri-player"],[1113,".ads-skyscrapper"],[3720,".ads-sticky-atas"],[3504,".ads-sticky-bawah,\n.ads-sticky-kanan"],[1347,".ads-sticky-bottom"],[3119,".ads-sticky-kiri"],[4087,".ads-widget-kanan"],[3963,".ads-widget-kecil"],[3652,".ads72890.banner"],[1555,".ads__giant__banner"],[4088,".adsatas"],[2054,".adsatas1"],[2053,".adsatas2"],[2052,".adsatas3"],[1005,".adsbawah,\n.ikltop"],[2788,".adsbawah1,\n.adskanan1"],[2791,".adsbawah2,\n.adskanan2"],[2790,".adsbawah3,\n.adskanan3"],[1143,".adsbesar"],[1777,".adsiklan"],[1051,".adsimgatas"],[1479,".adsimgbawah"],[753,".adsimgkanan,\n.qode-banner-left"],[834,".adsimgkiri"],[3823,".adsimgs"],[1595,".adskanan"],[1016,".adskecil"],[1286,".adskiri"],[376,".adskiri1"],[379,".adskiri2"],[378,".adskiri3"],[2879,".adspost520"],[2815,".adstengah"],[3253,".aiklanheader1"],[3254,".aiklanheader2"],[3255,".aiklanheader3"],[3248,".aiklanheader4"],[1559,".ane-iklan-billboard"],[3030,".ane-iklan-box"],[3075,".ane-iklan-box-paralax"],[4037,".ane-iklan-container"],[2796,".ane-iklan-isi"],[2810,".ane-iklan-longbanner-header"],[1480,".area-iklan-atas"],[3208,".areaiklan"],[2177,".article-adv"],[1158,".banner-atas"],[2028,".banner-iklan,\n.labeliklan"],[518,".banner-iklanwrap"],[720,".bannerbawahheader"],[366,".bannermini"],[3067,".bannerpusat"],[24,".bgads"],[305,".bireklam"],[955,".block-iklan-5"],[1596,".bottom-iklan"],[1151,".bottom-iklan-detail"],[2498,".bottom_sticky-ads"],[1633,".campaign-atas"],[136,".clearfix.mt3.ads"],[1255,".close-iklan"],[61,".float-ads-footer"],[2245,".float-ads-left"],[4015,".float-ads-right"],[599,".frame_iklan_baris"],[3166,".gambar-iklan1"],[2848,".gambarbanner"],[2536,".gap-iklan-desktop"],[22,".header_kabar_ads"],[2799,".idblog-center-ads"],[3370,".idblog-center-banner"],[3601,".idblog-topbanner"],[3157,".idblog-topbanner-aftermenu"],[2800,".idmuvi-afterplayer"],[1965,".idmuvi-banner-aftercontent"],[473,".idmuvi-banner-beforecontent"],[140,".idmuvi-banner-insidecontent"],[547,".idmuvi-bannerplayer"],[1146,".idmuvi-bannerplayer-wrap"],[713,".idmuvi-bottombanner"],[1078,".idmuvi-center-ads"],[558,".idmuvi-floatbanner"],[3102,".idmuvi-floatbanner-footer"],[0,".idmuvi-floatbanner-left"],[718,".idmuvi-floatbanner-right"],[109,".idmuvi-footerbanner"],[359,".idmuvi-topbanner"],[2672,".idmuvi-topbanner-archive"],[3610,".idmuvi-topplayer"],[1272,".iframeiklan"],[325,".ikan-atas"],[1409,".ikan-bawah"],[2890,".ikan-tengah,\n.iklan-mobile"],[362,".iklan"],[3759,".iklan-atas,\n.iklan_atas,\n.iklanbawah"],[540,".iklan-atas-post"],[2562,".iklan-ataskomen"],[552,".iklan-ataspost"],[3903,".iklan-banner-skin"],[3853,".iklan-baris"],[786,".iklan-bawah-artikel"],[1739,".iklan-bawah-menu"],[2974,".iklan-bawah-player"],[1971,".iklan-bawah-postingan"],[1100,".iklan-bawahpost"],[2561,".iklan-billboard-header"],[455,".iklan-billboard-news"],[2038,".iklan-box"],[3162,".iklan-container"],[531,".iklan-dalam-post"],[1876,".iklan-depan"],[3941,".iklan-footer"],[3653,".iklan-full"],[3290,".iklan-giantbanner"],[3467,".iklan-half"],[115,".iklan-header-item"],[1305,".iklan-homepage"],[1157,".iklan-insertion"],[1925,".iklan-kanan,\n.iklan_kanan"],[3574,".iklan-kiri,\n.iklan_kiri"],[3774,".iklan-latest-kanan"],[929,".iklan-latest-kiri"],[2255,".iklan-leaderboard"],[3333,".iklan-left"],[4006,".iklan-longbanner-header"],[2572,".iklan-middle"],[1425,".iklan-newsfeed"],[1400,".iklan-paralax-wrapper"],[2351,".iklan-pos"],[153,".iklan-puff"],[1804,".iklan-related-post"],[367,".iklan-right"],[824,".iklan-samping"],[3983,".iklan-sidebar"],[430,".iklan-sidebar-homepage"],[245,".iklan-skin"],[2037,".iklan-sponsor"],[351,".iklan-square-news"],[3207,".iklan-sticky-kanal"],[16,".iklan-teks"],[3026,".iklan-tengah,\n.iklan_tengah"],[3453,".iklan-tengah-postingan"],[1624,".iklan-top-banner"],[2290,".iklan-top-desktop"],[1106,".iklan-top-mobile"],[732,".iklan-wrapper"],[2904,".iklan1"],[2907,".iklan2"],[2906,".iklan3"],[3346,".iklanBox"],[3748,".iklan_beranda_1"],[3751,".iklan_beranda_2"],[3750,".iklan_beranda_3"],[1810,".iklan_laman_berita"],[3984,".iklan_semprot"],[634,".iklan_semprot_h"],[2824,".iklana"],[2065,".iklanads"],[2219,".iklanatas"],[19,".iklanbanner"],[3667,".iklanbergerak"],[4077,".iklanbg"],[3112,".iklandesktop"],[3330,".iklanfloat"],[3915,".iklanfloating"],[2247,".iklanfooter"],[2197,".iklanfull"],[1699,".iklangoogle"],[1677,".iklanhead"],[3098,".iklanheader1,\n.iklanheader2,\n.iklanheader3,\n.iklanheader4"],[3627,".iklanlebar"],[1693,".iklanleft"],[1548,".iklanmini"],[1901,".iklanmobile"],[2850,".iklannewsflash"],[1623,".iklanpost"],[59,".iklanpusat"],[3502,".iklanright"],[3478,".iklansamping"],[3235,".iklantengah1"],[2412,".iklantop"],[1405,".iklanwid"],[97,".iklanx1"],[1694,".ikln_kanan"],[1597,".ikln_kiri"],[1449,".iniiklan"],[2415,".inner-floatbanner-bottom"],[1867,".inside-player-ad"],[1331,".ivs-overlay-adcontainer"],[793,".ixlan"],[3532,".kill-adblock-container"],[2660,".kln.mlb.blox"],[2549,".klnrec"],[2106,".kotakiklan"],[4075,".ktz-aftermenubanner"],[3580,".ktz-bannersingletop"],[1945,".kurungiklan"],[3514,".lazyloaded.ads-50"],[1807,".loading.ads-50"],[393,".mask-ads"],[3060,".part_iklan_footer"],[3262,".part_iklan_header"],[2802,".pengiklan"],[1442,".popUpBannerBox"],[3288,".popupflyin-clicks-area"],[885,".qode-banner-right"],[1156,".rkads"],[3618,".show-first-ads"],[1135,".sidebar-iklan"],[2875,".simple_advert"],[3426,".single_ad_728x90"],[3545,".skin-iklan"],[3920,".slotiklan"],[2256,".slotiklan-topdesktop"],[3832,".sticky-ad-atas"],[2756,".sticky-ad-bawah"],[2024,".sticky-adku"],[1541,".sticky-ads-left"],[1354,".sticky-ads-right"],[2563,".subiklan"],[1743,".topads-kanan"],[3651,".warning_iklan"],[3778,".widget_iklan_atas"],[2749,".wrapper-iklan-sidebar-artikel"],[1644,"#ad-link.visible"],[3475,"#adsic160bokep1,\n#adsic160bokep2"],[3058,"#adsic364x90-bokep"],[2389,"#judi"],[2611,"#togel"],[1874,".ads-1xbet"],[2605,".dominowalet"],[3439,".happypoker"],[1976,".judi"],[1500,".slot-machine-wrapper"],[3518,".togel"]];
const genericExceptionSieve = [1965,359,108,3288,3481,4044,513,3883];
const genericExceptionMap = [["adikanime.com",".idmuvi-banner-aftercontent"],["juragan.film",".idmuvi-topbanner"],["103.70.114.35",".idmuvi-topbanner-aftermenu"],["109.234.34.246",".idmuvi-topbanner-aftermenu"],["193.142.147.230",".idmuvi-topbanner-aftermenu"],["layardrama21.beauty",".idmuvi-topbanner-aftermenu"],["layardrama21.club",".idmuvi-topbanner-aftermenu"],["layardrama21.com",".idmuvi-topbanner-aftermenu"],["layardrama21.*",".idmuvi-topbanner-aftermenu"],["tokosatu.com",".popupflyin-clicks-area"],["oomph.co.id",".shareit"],["sindonews.com","#header-ads"],["pemersatu.top","#adright"],["pemersatudotfun.com","#adright"],["pemersatufun.site","#adright"],["pemersatufun.*","#adright"],["semprot.com",".adUnit"]];

if ( genericSelectorMap ) {
    const map = self.genericSelectorMap =
        self.genericSelectorMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericSelectorMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before},\n${entry[1]}`);
            }
        }
    } else {
        self.genericSelectorMap = new Map(genericSelectorMap);
    }
    genericSelectorMap.length = 0;
}

if ( genericExceptionSieve ) {
    const hashes = self.genericExceptionSieve =
        self.genericExceptionSieve || new Set();
    if ( hashes.size !== 0 ) {
        for ( const hash of genericExceptionSieve ) {
            hashes.add(hash);
        }
    } else {
        self.genericExceptionSieve = new Set(genericExceptionSieve);
    }
    genericExceptionSieve.length = 0;
}

if ( genericExceptionMap ) {
    const map = self.genericExceptionMap =
        self.genericExceptionMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericExceptionMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before}\n${entry[1]}`);
            }
        }
    } else {
        self.genericExceptionMap = new Map(genericExceptionMap);
    }
    genericExceptionMap.length = 0;
}

/******************************************************************************/

})();

/******************************************************************************/
