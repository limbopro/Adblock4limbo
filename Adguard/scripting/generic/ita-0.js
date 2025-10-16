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

// ita-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[2750,"#adk_article-middle,\n.adv_esterno"],[2353,"#adk_article-top"],[2839,"#adk_interstitial"],[2636,"#adk_spalla-bottom"],[2569,"#adk_spalla-middle,\n#MediamondAd_bp_1"],[2875,"#adk_spalla-top"],[2125,"#admputop"],[2438,"#adv-Middle1-hr"],[472,"#adv-Middle1-mobile,\n#adv-Middle2-mobile,\n#adv-Middle3-mobile"],[3817,"#adv-Middle3"],[2730,"#adv-TopLeft"],[3142,"#adv-x40"],[3217,"#adv-x40-mobile"],[1170,"#adv_nativa"],[1333,"#advertisingStriscia"],[4082,"#eadv-aside,\n#box_single_adv_sotto_2"],[1433,"#eadv-aside-2,\n#eadv-aside-3"],[3033,"#eadv-billboard"],[2898,"#eadv-bottom"],[3730,"#eadv-in-content"],[1224,"#eadv-in-content-2,\n#eadv-in-content-3,\n#MediamondAd_bp"],[2850,"#eadv-related"],[630,"#ioladv-wallpaper"],[3552,"#rcsad_TopLeft_container"],[3989,"#video-evo-desktop"],[3399,"#video-evo-mobile"],[1136,"#video-evo-player.player_evolution"],[1181,"#video-mh-mob.player_evolution"],[3200,"#yobee-top-page"],[1143,".AlterVista_Banner"],[1203,".AlterVista_GoogleAdsense"],[1012,".ads--primo-piano"],[2463,".adunit-mark"],[313,".adv-gptslot"],[787,".banner_pubblicita"],[1515,".box_adv_cliccaofferta"],[2943,".eadv-aside,\n.pubblicitapremium"],[404,".eadv-billboard"],[2751,".eadv-bottom"],[3071,".eadv-in-content"],[2127,".eadv-related"],[256,".evolve-custom-header"],[3393,".footer-adv"],[2307,".gptslot-li"],[293,".gptslotvideo"],[3176,".live-adv-container"],[1352,".partial-static-adv"],[1290,".partial-sticky-adv"],[3821,".pubblicita,\n.adv_video"],[3139,".pubblicitacentrata"],[861,".pubbliredazionale"],[958,".sal-list-sponsored"],[3693,".sb-box-pubbliredazionale"],[1414,".slyvi-ads-inserter-ad-unit"],[748,".sponsorizzati"],[102,".wrapper-adv"],[2322,".yb-floorad"],[1597,".yb-sticky,\n.extra--adv"],[3086,".yobee-adv,\n#body-adv-link"],[1669,"#ADV_leaderboard_atf,\n.adv-margin,\n.adv_margin"],[1222,"#ADVrettangolo"],[2427,"#ADVrettangolopiede"],[2112,"#ADVstriscia"],[1342,"#HALFPAGE2_advadagio,\n#HALFPAGE3_advadagio"],[2403,"#HALFPAGE_BOTTOM_advadagio"],[3903,"#HALFPAGE_advadagio"],[2406,"#MID_RECTANGLE1_advadagio,\n#MID_RECTANGLE2_advadagio"],[2073,"#MediamondAd_rn_2,\n#MediamondAd_rn_u"],[2104,"#MediamondAd_sn_u,\n#pubblicita-menu"],[2171,"#Sponsor728x90Top"],[1338,"#UNITIS_ads_300250"],[3505,"#WIDELEADERBOARD2_advadagio"],[1908,"#WIDELEADERBOARD_BOTTOM_advadagio,\n#pubblicita-sotto-immagine"],[2622,"#ad_testa_foto"],[3096,"#adasta_box_ros_2"],[3698,"#adbanner-laterale"],[2417,"#adbanner-stampa"],[1874,"#adk_masthead"],[2989,"#ads-interno-1"],[2990,"#ads-interno-2"],[251,"#ads-laterale"],[817,"#adsense-destra"],[180,"#adsense-notizia"],[110,"#adsense_lato"],[1517,"#adv-Piede"],[2885,"#adv-Piede-sticky"],[54,"#adv-box-1"],[2681,"#adv-broker-overlayer"],[3166,"#adv-broker-overlayer-background"],[1469,"#adv-iframe-sx-home"],[2176,"#adv-masthead-0"],[2887,"#adv-pushdown-1,\n#pubbli_top"],[1273,"#adv-skin-colonnadx,\n#adv-skin-colonnasx"],[2613,"#adv00"],[2615,"#adv02"],[1773,"#advAutopromo1"],[1774,"#advAutopromo2"],[1974,"#advBB-left"],[2492,"#advBB-right"],[219,"#advBB-top"],[247,"#advSwiper_article"],[921,"#adv_ManchetteDx,\n#adv_ManchetteSx"],[1261,"#adv_Skin_left"],[1566,"#adv_Skin_right"],[1970,"#adv_Skin_top"],[3383,"#adv_adagio,\n#kauppa_box"],[1628,"#adv_click"],[786,"#adv_in_post"],[1958,"#adv_nativ_sopracartina"],[3860,"#adv_outbrain_AR_1_sottocartina"],[3047,"#adv_sotto_navigatore"],[2842,"#adv_sponsor_canale_tematico,\n.mg-adv-controller"],[2834,"#advcolonnadx"],[2821,"#advcolonnasx"],[3175,"#advdivbp1"],[314,"#advsfondo,\n#syTagContainer"],[267,"#altervista_banner-3"],[1643,"#annunciGoogle"],[2049,"#annunci_google"],[695,"#annuncio-virgilio"],[653,"#blocco_servizi_sponsor1"],[3714,"#box_single_adv_sotto"],[4081,"#box_single_adv_sotto_1"],[2502,"#bt_adv_div"],[931,"#cardAdv"],[920,"#contPubb"],[2143,"#corpo_video_sponsor"],[1519,"#deaAdvTop"],[3722,"#divPubblicita"],[3859,"#evolutionadv,\n.jadv_leoadv_pd"],[3888,"#fullAdv-dx"],[3879,"#fullAdv-sx"],[1268,"#fwnetblocco"],[285,"#fwnetblocco160x600"],[350,"#fwnetblocco300x300"],[3396,"#fwnetblocco_v"],[1139,"#hp_sez_advmkt_01"],[2556,"#leo-adv"],[672,"#lg-spalla-ads01-down"],[3441,"#lg-spalla-ads01-up"],[1553,"#lg-spalla-ads03"],[147,"#libero_header_adv"],[761,"#main_360_adv"],[1413,"#mmAdDivSkDx,\n#mmAdDivSkSx"],[1439,"#mmAdDivSkLb"],[1728,"#ppn_ad_div"],[1240,"#pubbli-alto"],[2272,"#pubblicita"],[713,"#pubblicita-libero-top"],[3590,"#pubblicita_blog_post_testa"],[402,"#quattrownet_468x60"],[1292,"#rcsad_BottomLeft_1"],[72,"#rcsad_Frame1,\n#rcsad_Frame2"],[1246,"#rcsad_TopLeft"],[1572,"#ripBoxAdvCentroSX2"],[3359,"#skinadvdx,\n#skinadvsx"],[1962,"#sp-adv-header"],[4028,"#tccAdPlayer"],[3199,"#top3-pubbli"],[141,".Banner_VideoAd_Interno"],[3597,".Pubblicita,\n.widget_adv_multi"],[2122,".ab-box-adv-cn"],[1946,".actio-adlabel"],[2222,".ad-fisso"],[307,".ad-orizzontale"],[2384,".ad-verticale"],[2488,".adSenseLaterale"],[16,".ad_pedice"],[3677,".adagiowritebanner_dmtag"],[1647,".ads-dx"],[856,".ads-sx"],[2333,".ads_dx"],[1300,".ads_pagineprof"],[2058,".ads_singolo"],[969,".ads_topdx,\n.ads_topsx"],[807,".adsbyawcloud"],[3665,".adv--lg,\n.wl_WidgetRel_Sponsor1"],[3320,".adv--sq"],[2194,".adv-100x100"],[911,".adv-articolo,\n.adv_articolo,\n.googleAnnunci"],[2352,".adv-banner-wrap,\n.wl_WidgetRel_Sponsor"],[1486,".adv-cnt"],[2591,".adv-footer-kauppa"],[345,".adv-h-100"],[1239,".adv-iframe-sx"],[4052,".adv-inside-text"],[2523,".adv-loc-container"],[2658,".adv-masthead"],[3178,".adv-promobox"],[2923,".adv-sfondo"],[3143,".adv-skin"],[1856,".adv-skin-weben"],[3412,".adv-son-300x650-page"],[2793,".adv-sponsor__content"],[1627,".adv-strip-container"],[693,".adv-testata"],[3509,".adv-width-box"],[394,".adv-wpz"],[202,".adv100"],[1420,".adv300eni"],[731,".adv300x100vd"],[2172,".advArt"],[3458,".advBot"],[2856,".advBoxDxBis"],[676,".advCollapse"],[3833,".advFooter"],[1610,".advHm-cont-Ape"],[3605,".advPostLibri"],[2183,".advTestuale"],[2193,".adv_120x600_categoria,\n.adv_160x600_categoria"],[355,".adv_468x60_categoria"],[3902,".adv_block__text"],[1900,".adv_bug_float"],[1485,".adv_inner_notizia"],[4053,".adv_lateral_dx"],[4034,".adv_lateral_sx"],[4037,".adv_news"],[2916,".adv_oriz"],[1087,".adv_vert"],[233,".advborder"],[1383,".advdsk"],[274,".advhead"],[3642,".advnext_correlati"],[3841,".advricaricamediamond"],[3152,".alp-advert"],[2663,".archive-post__adv"],[1321,".aside-adv-scroll"],[3961,".av-banner-728X90"],[1758,".bannerPubblicita"],[2670,".bannerPubblicitaOrizz"],[349,".banner_300x250_read"],[1902,".barraSipra"],[1090,".bck-adv-sponsor"],[3999,".bk-adv"],[3617,".blocco_servizi_sponsor"],[4027,".box-pubb"],[3187,".box-pubblicita"],[2436,".box-pubblicita-multimedia"],[2707,".box-pubbliredazionale"],[3598,".boxADV"],[526,".boxAdv"],[1892,".box_adv_annunci"],[22,".box_adv_speciali_hp"],[3855,".boxpubblicita"],[277,".boxpubblicitasx"],[4002,".bt_adv1"],[2567,".bt_sub_adv1"],[266,".c-iol-ad"],[3306,".cellulare-adv"],[2533,".center-adv"],[1115,".center-adv-news"],[2309,".cmt_bgadv"],[2437,".contenitore_ad_top"],[4,".content-adv-manager"],[88,".contenuto-sponsorizzato"],[1022,".cp_adv-box"],[2778,".cp_adv300x250"],[2545,".dads-lk"],[3497,".dm20-adv-slot"],[1503,".edSponsor"],[3612,".ed_Related_Record_Div_Sponsor"],[909,".ed_Related_Sponsor"],[3933,".ed_Related_Sponsor_Top_Container"],[2063,".ed_Sponsor"],[2323,".edinet_adv_container"],[3464,".edinews_widget_link_sponsorizzati"],[95,".epeex_Sas"],[1425,".evolve-adv"],[3728,".first_adv"],[445,".flexi-pubblicita"],[2924,".foc-adv-slot"],[1405,".foglia-middle-adv"],[2337,".google-adx-corpo"],[694,".google-adx-spalla"],[3105,".google_adx_corpo"],[2528,".gptslot--adv"],[3672,".gtv-adv-slot"],[3417,".header-adv-wr"],[1152,".header-mobile-mega-adv"],[2991,".home-rubriche-adv"],[495,".inews_adv_top"],[901,".inread_adv"],[2114,".intro-adv"],[2068,".lancio_adv"],[2521,".leaderboard-adv"],[25,".lg-titolo-ads"],[2048,".lg-titolo-ads-dx"],[2071,".lg-titolo-ads-sx"],[3414,".linksponsorizzati"],[3398,".listatonativeadv"],[2378,".live-adv-square"],[2931,".live-adv-top,\n.pat-adv-300x250"],[1933,".live-article-adv-container"],[732,".modPubblicita"],[779,".netd_300x600adv"],[1324,".newtekadv"],[3347,".nk-adv"],[3579,".nk-adv-in-article-1"],[3576,".nk-adv-in-article-2"],[1622,".nw_adv_full"],[844,".pat-adv-box"],[2682,".pat-adv-masthead"],[3403,".post_pubblicita"],[1973,".promo_sp"],[2691,".pub_text"],[1998,".pubblicit"],[3051,".pubblicita-banner"],[75,".pubblicita-box"],[755,".pubblicitaGoogle"],[3752,".pubblicitaSlider"],[1284,".pubblicita_728x90"],[3561,".pubblicita_col1"],[3114,".pubblicita_sottile"],[1311,".pubblitalocaleaddADV"],[2321,".pubblitalocaleaddpiccola"],[3742,".publi_ad"],[1808,".qtr-bacheca-adv"],[2148,".rcsad_BottomLeft_x_content"],[2652,".related-adv"],[3216,".sal-adv-adsense"],[854,".sal-adv-slot"],[3918,".sdbadv"],[3829,".sidebar-adv"],[3292,".sidebar-item-adv"],[2334,".sidebar__adv"],[1223,".sito-adv-sopra-main"],[3996,".slot-adv"],[1497,".sponsor160x600Dx"],[3565,".sponsor300x250Sx"],[3868,".tabella2Pubblicita,\n.tabella3Pubblicita"],[3440,".tabellaPubblicita"],[3778,".tbm-adv-inside_desktop"],[3002,".tbm-adv-inside_mobile"],[3721,".tbm-adv-outside_desktop"],[2099,".tbm-adv-outside_mobile"],[250,".tcc-banner"],[1357,".tccbanner"],[2672,".textual-adv-text"],[382,".tn_adv"],[1579,".topadv_left"],[252,".topadv_right"],[3297,".trama_ads"],[2846,".tw-adv-native"],[621,".tw-adv-slot"],[681,".view-pubblicita"],[2987,".widget_eepex"],[953,".widget_n1ad"],[3356,".yobee-lazyadv"]];
const genericExceptionSieve = [3542,1046,2718,2084,417,944,3797];
const genericExceptionMap = [["adnkronos.com",".avp-p-wrapper"],["ilgiornaleditalia.it",".bannervcms"],["questaseratv.it",".channelBoxAds"],["unionesarda.it",".leftAds\n.rightAds\n.topAds"],["radioalfalab.it",".penci-adsense-below-slider"]];

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
