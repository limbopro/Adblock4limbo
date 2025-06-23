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

const genericSelectorMap = [[10581253,"#Area_Iklan_Atas"],[4310141,"#Area_Iklan_Bawah"],[13313875,"#Area_Iklan_Tengah"],[8946512,"#Iklan-Melayang"],[13623404,"#ad_bawah"],[9676905,"#adsbawah1,\n#adskanan1"],[3461960,"#adsimgxatas"],[2794959,"#adsimgxatas2,\n#adsimgxatass"],[2794280,"#adsimgxbawah"],[4711739,"#adsimgxbawah2"],[1070229,"#adskiri1"],[1070230,"#adskiri2"],[1070231,"#adskiri3"],[8707442,"#aiklanatas1"],[8325600,"#aiklanatasd1"],[3015096,"#aiklanheader1"],[3015099,"#aiklanheader2"],[3015098,"#aiklanheader3"],[3015101,"#aiklanheader4"],[3015100,"#aiklanheader5"],[3015103,"#aiklanheader6"],[3168879,"#aiklantengah1"],[12121160,"#area-iklan-kanan-atas"],[15749143,"#area-iklan-kiri-atas"],[13732415,"#banner_iklan_top"],[12846969,"#banner_kanan"],[4164222,"#banner_kiri"],[11308349,"#banner_top_detail"],[4308197,"#bawahpads"],[5626588,"#bireklam"],[6533206,"#desaiklan"],[1403062,"#floatadsatas"],[3343334,"#floatadsatas1"],[3335210,"#floatadsbawah"],[10354887,"#idiklan_kanan"],[5948180,"#idiklan_kiri"],[10967232,"#idmuvi-adb-enabled"],[2330186,"#idmuvi-popup"],[12760679,"#iklan"],[13297698,"#iklan-atas,\n#iklanBawah,\n#iklan_atas,\n#iklanbawah"],[5199646,"#iklan-bawah,\n#iklan_bawah"],[13335863,"#iklan-giantbanner"],[7416567,"#iklan-kanan-postingan"],[13298043,"#iklan-kiri,\n#iklan_kiri"],[1319004,"#iklan-newsfeed"],[4396595,"#iklan-paralax"],[205346,"#iklan-pos"],[1736927,"#iklan-rekanan1,\n#iklan-rekanan2"],[4369346,"#iklan-sidebar"],[1972385,"#iklan-sidebar1"],[10261141,"#iklan-sticky"],[10251711,"#iklan-tengah,\n#iklan_tengah"],[4283151,"#iklan-tengah1"],[4283148,"#iklan-tengah2"],[13298382,"#iklan-text"],[8812213,"#iklan1"],[8812214,"#iklan2"],[8812215,"#iklan3"],[8812208,"#iklan4"],[13298127,"#iklanFloat"],[4148409,"#iklanSidebar1"],[4148410,"#iklanSidebar2"],[4148411,"#iklanSidebar3"],[4148412,"#iklanSidebar4"],[5208808,"#iklan_kanan"],[205554,"#iklanarea"],[205478,"#iklanatas"],[13298373,"#iklanatas1,\n#iklanatas2,\n#iklanatas3,\n#iklanatas4"],[5198034,"#iklanbawah1"],[5198033,"#iklanbawah2"],[5198032,"#iklanbawah3"],[5198039,"#iklanbawah4"],[13073375,"#iklanfoatingbawah"],[10241527,"#iklanheader1,\n#iklanheader2,\n#iklanheader3,\n#iklanheader4"],[205195,"#iklanhome"],[12253494,"#iklankirikanan1"],[12256797,"#iklankirislider"],[10241877,"#iklanpersegi"],[13298168,"#iklanpopup"],[13297966,"#iklanside1,\n#iklanside2"],[10241486,"#iklantengah1"],[1813531,"#imgiklanatas1"],[1813528,"#imgiklanatas2"],[462637,"#imgiklanatasd1"],[468532,"#imgiklanbawah1"],[15302261,"#imgiklanheader1"],[15302262,"#imgiklanheader2"],[16294306,"#imgiklantengah1"],[16475118,"#kode-iklan-atas"],[865942,"#kode-iklan-bawah"],[6272062,"#kode-iklan-tengah1,\n#kode-iklan-tengah2"],[6680140,"#kontolbanner"],[6151021,"#megabillboard"],[4530189,"#netkevin-overlay"],[8773004,"#netkevin-popup"],[7744805,"#popup_bawah"],[2828088,"#popupklan"],[25431,"#popupklanfooter"],[10579880,"#r_iklan"],[2865426,"#rebahin-banner"],[10624505,"#sticky-iklan"],[10590043,"#tupiklan"],[10917335,".SectionAds"],[9092979,".ad-bawah"],[3558522,".ads-atas"],[6191097,".ads-atas-player"],[2215080,".ads-bawah"],[15537573,".ads-bawah-player"],[2215222,".ads-besar"],[11567315,".ads-kanan-player"],[2225649,".ads-kecil"],[3126304,".ads-kiri-player"],[4203609,".ads-skyscrapper"],[1658504,".ads-sticky-atas"],[13012400,".ads-sticky-bawah,\n.ads-sticky-kanan"],[8684867,".ads-sticky-bottom"],[1657903,".ads-sticky-kiri"],[3387383,".ads-widget-kanan"],[3387259,".ads-widget-kecil"],[6426616,".adsatas"],[9185286,".adsatas1"],[9185285,".adsatas2"],[9185284,".adsatas3"],[8455149,".adsbawah"],[2210532,".adsbawah1,\n.adskanan1"],[2210535,".adsbawah2,\n.adskanan2"],[2210534,".adsbawah3,\n.adskanan3"],[8594551,".adsbesar"],[2017009,".adsiklan"],[574491,".adsimgatas"],[16598471,".adsimgbawah"],[16589553,".adsimgkanan"],[574274,".adsimgkiri"],[6164207,".adsimgs"],[9324091,".adskanan"],[9470968,".adskecil"],[6235398,".adskiri"],[9023864,".adskiri1"],[9023867,".adskiri2"],[9023866,".adskiri3"],[576319,".adspost520"],[2206463,".adstengah"],[13024437,".aiklanheader1"],[13024438,".aiklanheader2"],[13024439,".aiklanheader3"],[13024432,".aiklanheader4"],[12551703,".ane-iklan-billboard"],[10279894,".ane-iklan-box"],[4467715,".ane-iklan-box-paralax"],[12558277,".ane-iklan-container"],[10279660,".ane-iklan-isi"],[12073722,".ane-iklan-longbanner-header"],[12940744,".area-iklan-atas"],[1432712,".areaiklan"],[7484550,".banner-atas"],[9934828,".banner-iklan"],[4238646,".banner-iklan-rmid"],[3482118,".banner-iklanwrap"],[6288080,".bannerbawahheader"],[15626606,".bannermini"],[7580667,".bannerpusat"],[8372248,".bgads"],[1032497,".bireklam"],[10662843,".block-iklan-5"],[5228092,".bottom-iklan"],[7169151,".bottom-iklan-detail"],[10700385,".campaign-atas"],[9725159,".close-iklan"],[14815293,".float-ads-footer"],[3721413,".float-ads-left"],[8519599,".float-ads-right"],[4563543,".frame_iklan_baris"],[12442718,".gambar-iklan1"],[6413088,".gambarbanner"],[1235432,".gap-iklan-desktop"],[6885398,".header_kabar_ads"],[6118127,".idblog-center-ads"],[4926762,".idblog-center-banner"],[2424337,".idblog-topbanner"],[10034261,".idblog-topbanner-aftermenu"],[2214640,".idmuvi-afterplayer"],[15755181,".idmuvi-banner-aftercontent"],[16286169,".idmuvi-banner-beforecontent"],[16265356,".idmuvi-banner-insidecontent"],[11866659,".idmuvi-bannerplayer"],[15086714,".idmuvi-bannerplayer-wrap"],[12501705,".idmuvi-bottombanner"],[10720310,".idmuvi-center-ads"],[2187822,".idmuvi-floatbanner"],[4774942,".idmuvi-floatbanner-footer"],[348160,".idmuvi-floatbanner-left"],[6423246,".idmuvi-floatbanner-right"],[11833453,".idmuvi-footerbanner"],[6295911,".idmuvi-topbanner"],[3829868,".idmuvi-topbanner-aftermenu"],[9730672,".idmuvi-topbanner-archive"],[6311450,".idmuvi-topplayer"],[11674872,".iframeiklan"],[11116869,".ikan-atas"],[9332097,".ikan-bawah"],[8219466,".ikan-tengah"],[14754154,".iklan"],[8818351,".iklan-atas,\n.iklan_atas,\n.iklanbawah"],[10887708,".iklan-atas-post"],[10951170,".iklan-ataskomen"],[7746088,".iklan-ataspost"],[14847807,".iklan-banner-skin"],[15068941,".iklan-baris"],[15069043,".iklan-bawah,\n.iklan_bawah"],[2241298,".iklan-bawah-artikel"],[6232990,".iklan-bawah-player"],[2697139,".iklan-bawah-postingan"],[5952588,".iklan-bawahpost"],[9939457,".iklan-billboard-header"],[11186631,".iklan-billboard-news"],[10672118,".iklan-box"],[3738714,".iklan-container"],[16146963,".iklan-dalam-post"],[15071060,".iklan-depan"],[13152101,".iklan-footer"],[8818245,".iklan-full"],[14748890,".iklan-giantbanner"],[8818059,".iklan-half"],[13141413,".iklan-header"],[15057011,".iklan-header-item"],[7431449,".iklan-homepage"],[1815685,".iklan-insertion"],[15058821,".iklan-kanan,\n.iklan_kanan"],[8818166,".iklan-kiri,\n.iklan_kiri"],[6450878,".iklan-latest-kanan"],[14922657,".iklan-latest-kiri"],[14919887,".iklan-leaderboard"],[8817925,".iklan-left"],[5291942,".iklan-longbanner-header"],[13146636,".iklan-middle"],[13146954,".iklan-mobile"],[7648657,".iklan-newsfeed"],[15086968,".iklan-paralax-wrapper"],[10672431,".iklan-pos"],[8818841,".iklan-puff"],[5658380,".iklan-related-post"],[15085935,".iklan-right"],[13759288,".iklan-samping"],[13766543,".iklan-sidebar"],[8818933,".iklan-skin"],[13752309,".iklan-sponsor"],[14303583,".iklan-square-news"],[5901447,".iklan-sticky-kanal"],[8818704,".iklan-teks"],[13171666,".iklan-tengah,\n.iklan_tengah"],[1400189,".iklan-tengah-postingan"],[14104152,".iklan-top-banner"],[14141682,".iklan-top-desktop"],[14120018,".iklan-top-mobile"],[13396824,".iklan1"],[13396827,".iklan2"],[13396826,".iklan3"],[14843154,".iklanBox"],[5570212,".iklan_beranda_1"],[5570215,".iklan_beranda_2"],[5570214,".iklan_beranda_3"],[6444818,".iklan_laman_berita"],[13758352,".iklan_semprot"],[6025850,".iklan_semprot_h"],[13396744,".iklana"],[14809105,".iklanads"],[10672299,".iklanatas"],[15073299,".iklanbanner"],[13114963,".iklanbergerak"],[9441261,".iklanbg"],[13155368,".iklandesktop"],[8817922,".iklanfloat"],[12865355,".iklanfloating"],[15055047,".iklanfooter"],[10672277,".iklanfull"],[15054499,".iklangoogle"],[10671757,".iklanhead"],[13155354,".iklanheader1,\n.iklanheader2,\n.iklanheader3,\n.iklanheader4"],[8818219,".iklanlebar"],[10671773,".iklanleft"],[10671628,".iklanmini"],[15054701,".iklanmobile"],[7899938,".iklannewsflash"],[10671703,".iklanpost"],[8818747,".iklanpusat"],[8818094,".iklanright"],[13151638,".iklansamping"],[13155491,".iklantengah1"],[14821740,".iklantop"],[14824829,".iklanwid"],[9441377,".iklanx1"],[8869534,".ikln_kanan"],[10655293,".ikln_kiri"],[13411309,".ikltop"],[1009065,".iniiklan"],[11270511,".inner-floatbanner-bottom"],[8931147,".inside-player-ad"],[8418611,".ivs-overlay-adcontainer"],[5808214,".ivs-overlay-ads"],[15295257,".ixlan"],[3513804,".kill-adblock-container"],[4282980,".kln.mlb.blox"],[4414586,".kotak_iklan"],[7432250,".kotakiklan"],[6119403,".ktz-aftermenubanner"],[1064444,".ktz-bannersingletop"],[1943449,".kurungiklan"],[5818348,".labeliklan"],[218895,".loading.ads-50"],[11228663,".part_iklan_content"],[408564,".part_iklan_footer"],[408766,".part_iklan_header"],[12086002,".pengiklan"],[12301730,".popUpBannerBox"],[16022744,".popupflyin-clicks-area"],[2274033,".qode-banner-left"],[15758197,".qode-banner-right"],[10138756,".rkads"],[16526882,".show-first-ads"],[9684079,".sidebar-iklan"],[7170875,".simple_advert"],[10100066,".single_ad_728x90"],[97753,".skin-iklan"],[6344528,".slotiklan"],[3238096,".slotiklan-topdesktop"],[1265400,".sticky-ad-atas"],[1424068,".sticky-ad-bawah"],[9512936,".sticky-adku"],[4557315,".subiklan"],[1930959,".topads-kanan"],[3309123,".warning_iklan"],[691906,".widget_iklan_atas"],[8981490,"#adsic364x90-bokep"],[12339541,"#judi"],[7762918,"#judi2"],[10340915,"#togel"],[2127698,".ads-1xbet"],[16292397,".dominowalet"],[10902895,".happypoker"],[1099704,".judi"],[4795838,".togel"]];
const genericExceptionSieve = [15755181,6295911,3829868,16022744,4402585,11571713,13348651];
const genericExceptionMap = [["adikanime.com",".idmuvi-banner-aftercontent"],["juragan.film",".idmuvi-topbanner"],["103.70.114.35",".idmuvi-topbanner-aftermenu"],["109.234.34.246",".idmuvi-topbanner-aftermenu"],["193.142.147.230",".idmuvi-topbanner-aftermenu"],["layardrama21.club",".idmuvi-topbanner-aftermenu"],["layardrama21.com",".idmuvi-topbanner-aftermenu"],["tokosatu.com",".popupflyin-clicks-area"],["oomph.co.id",".shareit"],["pemersatu.top","#adright"],["pemersatudotfun.com","#adright"],["pemersatufun.site","#adright"],["pemersatufun.*","#adright"],["semprot.com",".adUnit"]];

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
