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

// deu-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[2925,"#Ad_Win2day"],[3526,"#LxWerbeteaser"],[2700,"#ParentDivForWerbPostbit"],[537,"#SSpotIMPopSlider"],[3509,"#SlimSpot_imPop_Container,\n#werbeblock2"],[494,"#Werb_Postbit_Bottom"],[1946,"#WerbungLinks"],[1459,"#WerbungOben"],[724,"#WerbungObenRechts10_GesamtDIV"],[2520,"#WerbungObenRechts8_GesamtDIV,\n#WerbungObenRechts9_GesamtDIV"],[772,"#WerbungRechts1,\n#WerbungRechts2"],[2291,"#WerbungUnten"],[349,"#WerbungUntenLinks4_GesamtDIV,\n#WerbungUntenLinks7_GesamtDIV,\n#WerbungUntenLinks8_GesamtDIV,\n#WerbungUntenLinks9_GesamtDIV"],[4085,"#Werbung_Sky"],[2987,"#Werbung_Wide"],[1955,"#ad-bereich1-08"],[520,"#ad-bereich1-superbanner"],[1792,"#ad-bereich2-08"],[3358,"#ad-bereich2-skyscrapper"],[3527,"#ad-qm-sidebar-oben"],[996,"#ad-qm-sidebar-unten"],[3992,"#ad-rechts-block"],[950,"#ad-rechts-sky"],[3533,"#ad-sb-oben"],[3531,"#ad_gross"],[3866,"#ad_lang"],[3608,"#ad_oben"],[682,"#ad_rechts"],[1319,"#adbox_artikel"],[831,"#adcontentoben"],[3932,"#adcontentoben1"],[881,"#adkontainer"],[2950,"#adliste"],[1669,"#adunten"],[777,"#anzeigewerbungtext"],[3883,"#ar_detail_werb103"],[3760,"#bannerwerbung"],[1930,"#block-views-Topsponsoren-block_1"],[543,"#block-werbung"],[1975,"#callya_freikarte_layer,\n.werbung-fullbanner"],[236,"#cnt_bgwerbung"],[1549,"#cont-werb"],[1671,"#content_werbung"],[3733,"#footerwerbung"],[321,"#forumformwerbung"],[692,"#freikarte_layer"],[3477,"#gonamicerror"],[1560,"#google_adsense_werbung"],[914,"#gwerbung"],[1574,"#hauptnaviwerbelinks"],[373,"#headerWerbung"],[3639,"#header_werbung"],[1365,"#headerwerbung"],[626,"#inlinewerbung"],[1387,"#kalaydo_ads"],[665,"#kaufDA"],[3375,"#kaufDA-widget-container"],[976,"#kopf-werbung"],[2935,"#layerADLINKWerbung4"],[2093,"#nativendo-articlemiddle"],[2244,"#nativendo-articletop"],[839,"#nativendo-artikel"],[5,"#nativendo-home"],[3862,"#nativendo-home-1,\n#nativendo-home-2,\n#werbung_footer"],[315,"#nativendo-homemiddle"],[2681,"#nativendo-homepage"],[1588,"#nativendo-hometop"],[2327,"#nativendo-infeed-1,\n#nativendo-infeed-2,\n#nativendo-infeed-3,\n#nativendo-infeed-4,\n#nativendo-infeed-5,\n#nativendo-infeed-6"],[1172,"#nativendo-infeed1,\n#nativendo-infeed2"],[1929,"#nativendo-marginal"],[2983,"#nativendo-nachrichten-inarticle"],[3344,"#nativendo-nachrichten-unterhalb"],[2451,"#nativendo-nativendo-aktie"],[711,"#nativendo-nativendo-homepage-mobil"],[907,"#nativendo-oms-infeed"],[152,"#o2freikarte"],[3023,"#oms_gpt_billboard"],[1346,"#oms_gpt_outofpage"],[2238,"#oms_gpt_rectangle"],[780,"#oms_gpt_rectangle_halfpage"],[2413,"#oms_gpt_skyscraper"],[2831,"#oms_gpt_superbanner"],[1178,"#p-links-werbung"],[2114,"#p-rechts-werbung"],[1351,"#qm_content_ad_anzeige"],[3581,"#reklame,\n#werbungWrapper"],[2266,"#reklame-leaderboard-unten"],[3460,"#reklame-rechts-mitte"],[2491,"#reklame-rechts-oben"],[3213,"#reklame-rechts-unten"],[2049,"#reklame-rectangle"],[1876,"#reklame_layer"],[746,"#skywerbung"],[3203,"#slotright-werbung"],[678,"#sp0ns0ren"],[554,"#sspot_impopad_wrapper"],[1568,"#startwerbung"],[1001,"#t_werbung"],[2552,"#text-ads-mitte"],[3795,"#textwerbung"],[3018,"#tmobilefreikarte"],[132,"#topwerbung"],[3495,"#unisterAd_1"],[3492,"#unisterAd_2"],[241,"#videopage-werbung"],[3782,"#werb10"],[3783,"#werb11"],[3780,"#werb12,\n.symplr-ad-holder"],[3781,"#werb13"],[1875,"#werb7"],[1884,"#werb8"],[1885,"#werb9"],[3595,"#werbLayer1,\n#werbLayer2,\n#werbLayer3"],[464,"#werb_ps103"],[2312,"#werbeForm"],[2474,"#werbeFormRectangle"],[3618,"#werbeFormTop"],[2893,"#werbeadd"],[2403,"#werbeanzeige"],[2453,"#werbebanner"],[2182,"#werbeblock"],[2577,"#werbeblock_rechts"],[1913,"#werbebox"],[622,"#werbeflaeche"],[1601,"#werbeflaeche-3"],[660,"#werbeflaeche-billboard-big,\n.KalaydoRessortBox"],[2588,"#werbeflaeche-mpu-big"],[3283,"#werbekasten"],[3387,"#werbeleiste"],[1399,"#werbeslot-artikel"],[867,"#werbeslot-sidebar"],[3606,"#werbetrenner"],[3482,"#werbung"],[3891,"#werbung-banner"],[2292,"#werbung-banner-container"],[3704,"#werbung-fb"],[1106,"#werbung-left"],[98,"#werbung-map-top"],[491,"#werbung-rectangle1,\n#werbung-rectangle2"],[3260,"#werbung-seitenleiste-container"],[2747,"#werbung-skyscraper"],[3108,"#werbung1"],[3979,"#werbung125_links"],[2276,"#werbung125_rechts,\n.ps-trackingposition_Werbungskasten"],[3111,"#werbung2"],[3110,"#werbung3"],[2654,"#werbung792_2"],[3143,"#werbungR"],[3975,"#werbungRechts,\n#werbungrechts"],[95,"#werbungSuperbanner"],[2488,"#werbung_cad"],[2964,"#werbung_contentad_screen"],[2341,"#werbung_leaderboard_screen"],[3016,"#werbung_links,\n.spielen_werbung_2"],[3077,"#werbung_mitte"],[1266,"#werbung_oben"],[2975,"#werbung_rechts"],[120,"#werbung_right"],[15,"#werbung_skyscraper_bottom"],[2992,"#werbung_skyscraper_top"],[2265,"#werbung_superbanner"],[2011,"#werbung_top"],[3091,"#werbung_wideskyscraper_screen"],[2429,"#werbunglink"],[954,"#werbunglinks,\n.box_werbung_detailseite"],[1252,"#werbungrechts1,\n.popup_werbung_rechts_tom"],[2748,"#werbungrechtsfloat"],[3248,"#werbungsbox300"],[3701,"#werbungsky"],[2563,"#werbungslider"],[1043,"#werbungunten"],[890,"#wkr_werbung"],[2348,".AdRechtsLokal"],[2023,".Artikel_Ads_News"],[1500,".GridWerbung"],[1141,".KalaydoBoxLogo"],[172,".KomischeWerbeBox"],[4083,".RessortWerbungHeader"],[576,".Werbelabel"],[2145,".Werbeteaser"],[823,".Werbung"],[2389,".WerbungAdpepper"],[3610,".WerbungDetailRectangle"],[58,".WerbungLinksRechts"],[552,".WerbungMitte"],[3399,"._werbung"],[317,".ad_mitte"],[4039,".ad_platzhalter,\n.werbung_bereich"],[512,".ads-anzeige"],[4063,".ads-artikel-contentAd-medium"],[2990,".ads-artikel-contentAd-top"],[4032,".ads_bueroklammer"],[2707,".ads_rechts"],[1860,".adsense-ArtikelOben"],[2885,".adzeiger"],[289,".anzeigenwerbung"],[2708,".article-werb"],[2005,".artikelinlinead"],[2757,".azk-native-responsive"],[3186,".b-werbung"],[1665,".babbelMultilangAdBannerHorizontal"],[3330,".babbelMultilangAdRectangle"],[700,".banner-werbung-rechts"],[1045,".banner-werbung-top"],[1117,".bannerAnzeige"],[977,".bannergroup_werbung"],[1870,".banneritemwerbung_head_1,\n.banneritemwerbung_head_2,\n.banneritemwerbung_head_3,\n.banneritemwerbung_head_4"],[3205,".bdeFotoGalAd"],[3573,".bdeFotoGalAdText"],[1125,".big-werb"],[3807,".block-huss-adblocks"],[2716,".block-wozwerbung"],[2191,".block_rs4_werbung"],[1049,".bottom-werbung-box"],[490,".boxstartwerbung"],[4030,".boxwerb"],[87,".boxwerbung"],[3660,".content_body_right_werbung"],[1577,".content_header_werbung"],[439,".content_right_side_werbewrapper"],[1472,".contentwerbung4"],[1616,".dk-ad-ident"],[3806,".ecom_werbung"],[2394,".fullbanner_werbung"],[1476,".funkedigital-ad"],[2002,".fusszeile_ads"],[149,".gutZuWissenAd"],[1114,".inlinewerbungtitel"],[1802,".insidewerbung"],[879,".keyword_werbung"],[1440,".lokalwerbung"],[3756,".mob-werbung-oben"],[947,".mob-werbung-unten"],[1703,".news-item-werbung"],[3563,".newswerbung"],[42,".nfy-sebo-ad"],[3169,".nfy-slim-ad"],[3713,".orbitsoft-ad"],[385,".pane-klambt-ads-klambt-adserver-medrectangle"],[2815,".popup_werbung_oben_tom"],[1187,".rahmen_ad,\n.werbung-halfbanner"],[2544,".reklame"],[2322,".right-content-werbung"],[738,".schnaeppchenScrollAd"],[2369,".seitenleiste_werbung"],[794,".shift-widget > .cm-article,\n.werbebox2"],[1105,".sidebar-werbung"],[1550,".sidebarwerbung"],[553,".smartbrokerAds"],[529,".sponsorinaktiv"],[278,".sponsorlinkgruen"],[26,".superwerbung"],[3894,".tab_artikelwerbung"],[2198,".teaser_adliste,\n.werbung-label"],[3494,".teaser_werbung"],[2744,".text_werbung"],[1247,".textad_hauptlink"],[2616,".textlinkwerbung"],[2004,".tipps-content-ad"],[2505,".topwerbung"],[281,".trm-anzeige-separator"],[565,".tx-scandesk-werbung"],[4095,".undertitlewerbung"],[820,".userfunc-ad"],[2326,".videowerbung"],[2152,".wadtag"],[1965,".werb_container"],[3402,".werb_textlink"],[2075,".werbeadd_ueber"],[3064,".werbebanner"],[3529,".werbebanner-oben"],[459,".werbeblock,\n.werbung3"],[3078,".werbeboxBanner"],[899,".werbeflaeche"],[533,".werbehinweis"],[4033,".werbekennzeichnerrectangle"],[4072,".werbemainneu"],[701,".werbenbox"],[310,".werbepause"],[1843,".werblinks"],[2212,".werbrechts"],[599,".werbung"],[1537,".werbung-1"],[1538,".werbung-2"],[1590,".werbung-250x250"],[1539,".werbung-3"],[861,".werbung-bigbox"],[3615,".werbung-bigsize"],[2024,".werbung-box,\n.werbung_box"],[1862,".werbung-container"],[106,".werbung-content"],[1990,".werbung-contentad"],[124,".werbung-inline"],[2822,".werbung-leiste"],[2618,".werbung-rec-below-list"],[4050,".werbung-rechts"],[69,".werbung-rectangle"],[2902,".werbung-skyscraper"],[453,".werbung-skyscraper2"],[347,".werbung-unten"],[457,".werbung1"],[458,".werbung2"],[764,".werbung280x70_wrap"],[1315,".werbung300,\n.werbung301"],[2799,".werbung300x600"],[1261,".werbung970x250"],[1179,".werbungAnzeige"],[1662,".werbungContainer"],[2986,".werbungSkygrapperRight"],[90,".werbungSkygrapperTop"],[3935,".werbungTabelle"],[535,".werbung_300x250"],[3677,".werbung_728"],[1086,".werbung_banner"],[308,".werbung_fuer_300er"],[1624,".werbung_h"],[1345,".werbung_index"],[2053,".werbung_links"],[3729,".werbung_sidebar"],[2489,".werbung_text"],[397,".werbungamazon"],[2260,".werbunganzeigen"],[1505,".werbungarea"],[3506,".werbungimthread"],[3914,".werbungrechtstitel"],[882,".widget-werbung"]];
const genericExceptionSieve = [245,1863,2877,551,1905,503,1027,2248,2406,3482,823,3492,327,2337,3091,3380,2039,3463,576,3509,2633,2506,38,3171,200,2966,2954,2722,2911,1826,331,3828,1130,742,2041,599];
const genericExceptionMap = [["ping-timeout.de","#Advertisements"],["az.com.na","#ad_block_1\n.adverts"],["ad-tuning.de","#ad_footer\n#ad_header"],["energy.de","#ad_home"],["kombi.de","#left-ad\n#right-ad\n#top-ad"],["golem.de","#taboola-below-article-thumbnails"],["viply.de","#top-ad"],["filmmakers.de","#werbung"],["regenwald-schuetzen.org",".Werbung"],["hach.de",".ad-active"],["kleinanzeigen.de",".ad-active"],["eltern.de",".ad-element\n.ad-frame"],["stern.de",".ad-element"],["cash.ch",".ad-enabled"],["xdate.ch",".ad-item\n.side-ads\n.top-ads"],["11freunde.de",".ad_sidebar\n.ad_wrap\n.gujAd\n.house-ad\n.js_deferred-ad"],["finanzlexikon-online.de",".adboxclass"],["finanzen.ch",".adnz-ad-placeholder"],["rtl.de",".adslot\n.gujAd"],["wetter.de",".base-ad-slot\n.outbrain-ad-slot"],["bz-berlin.de",".cnx-player-wrapper"],["fitbook.de",".cnx-player-wrapper"],["petbook.de",".cnx-player-wrapper"],["stylebook.de",".cnx-player-wrapper"],["travelbook.de",".cnx-player-wrapper"],["welt.de",".cnx-player-wrapper"],["wallstreet-online.de",".footer-advertising"],["gala.de",".gujAd"],["geo.de",".gujAd"],["kochbar.de",".gujAd"],["vip.de",".gujAd"],["hochzeitswahn.de",".internal-ad"],["mietmobil-fuchs.ch",".jquery-script-ads"],["phytodoc.de",".plain-ad"],["handelsblatt.com",".row-ad"],["marketingportal.toyota.de",".werbung"],["werbung.oebb.at",".werbung"],["wetter.com",".werbung"]];

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
