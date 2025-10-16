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

// swe-1

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[1319,".lazyb.panorama"],[3038,"article.NativeTeaser"],[2907,"article.annons"],[3872,"article.sponsrad"],[441,"article.article-list-item--sponsored-post"],[2004,"article.article-sponsored"],[3838,"article.article--sponsored"],[2826,"article.category-partnerartikel"],[572,"article.category-promotion"],[1354,"article.category-reklam"],[2047,"article.category-samarbete"],[3243,"article.category-samarbete-sponsrat"],[2713,"article.category-samarbete-sponsrat-inlagg,\ndiv.sgm-ad"],[1898,"article.sponsrat-inlagg"],[3260,"article.tag-adtraction"],[3318,"article.tag-annons"],[167,"article.type-partnerartikel"],[3673,"aside.ad-container"],[3474,"aside.annonser-widget"],[1156,"a#top-banner.banner-holder"],[2844,"a.Teaser[data-content-item-category=\"Annons\"]"],[3294,"a.card.-sponsored"],[2250,"a.is-native-ad"],[322,"div.NativeAd"],[3173,"div.adDivLeft"],[1430,"div.adDivRight"],[3859,"div.adLinkInner,\n.revive-ad-container:not(body):not(html)"],[2657,"div.adSidebar"],[1225,"div.ad.container,\ndiv.ad.panorama"],[3516,"div.annonsbox,\ndiv.annons-yta"],[3198,"div.bbPrisjakt"],[3158,"div.holidAds"],[2705,"div.outsideAdsWrapper"],[388,"div.panoramaAd"],[2625,"div.toppannons,\ndiv.top-annons"],[1114,"div.wppasrotate"],[2044,"div#ads-panorama"],[2041,"div#ads_column"],[3022,"div#adv_rightColumn"],[2745,"div#ad_global_below_navbar"],[930,"div#ad_top_page"],[3753,"div#annons_topp"],[1656,"div#banner_right"],[1764,"div#block-adreviveheader"],[1576,"div#custom_ads_wrapper"],[3122,"div#facebook-popup"],[2387,"div#mega-ad-content"],[3256,"div#outerAd"],[237,"div#outside-ads"],[3241,"div#panoramaad"],[2834,"div#panorama_ad"],[575,"div#prebid-ad"],[1945,"div#reklam,\ntd#reklam"],[116,"div#rich-media-ads"],[2937,"div#schibsted-data-controller-sticky"],[1515,"div#snow-container[style*=\"z-index: 999999\"]"],[12,"div#toppannons"],[298,"div#topreklam"],[2146,"div#zox-lead-bot"],[1381,"div.CMACG_AdChangerWidget"],[122,"div.Container--ad"],[1230,"div.External-ad"],[3981,"div.I-artiklar-annonser"],[4057,"div.Takeover-ad"],[657,"div.adform-container"],[3128,"div.adnuntius-ad"],[2964,"div.adsense-responsive-ad"],[3674,"div.ads-above-post"],[621,"div.ads-sticky-container"],[3348,"div.adtech_slot"],[1581,"div.advads-background"],[2864,"div.ad-after-header"],[1050,"div.ad-after-post"],[1686,"div.ad-banner"],[3697,"div.ad-component"],[944,"div.ad-container-lg"],[698,"div.ad-panorama_dynamic-wrapper"],[2957,"div.ad-toppbanner"],[2347,"div.after-article-ad"],[984,"div.article-ad-container"],[480,"div.artikelflode-annonser"],[1158,"div.ashe-preloader-wrap"],[3972,"div.bam-ad-wrapper"],[813,"div.banner-size.proad"],[454,"div.before-article-ad"],[2430,"div.better-ads-listitemad"],[1221,"div.big-desktop-ads"],[599,"div.block-bean-header-banner"],[1275,"div.borka-ad"],[2213,"div.box--squareAd,\n.category-sponsrat-innehall:not(body):not(html)"],[1938,"div.brix-ads-by-posttype"],[697,"div.bsa_pro_ajax_load"],[3928,"div.column-article.tag-annons"],[1344,"div.comment-ad_wrapper"],[3197,"div.content-center-ad"],[781,"div.content_ad_top"],[2862,"div.dfp-ads-container"],[1870,"div.dfp-ads-container-middle"],[3717,"div.egmont-ads-ad"],[1262,"div.elementor-widget-wp-widget-adrotate_widgets"],[2449,"div.feed_ad"],[769,"div.flow_ad"],[2055,"div.fs-holid-live-widescreen"],[2473,"div.helsida-ad"],[2053,"div.inner_advertisement"],[3424,"div.in-feed-ad"],[2576,"div.in-post-ad-wrap"],[3034,"div.jeg_ad"],[2941,"div.js-top-banner-container"],[436,"div.landscape-ad-space"],[3203,"div.leeads-wrapper-desktop"],[989,"div.link-ads"],[972,"div.l-footer__adtext"],[3113,"div.maaw-ad-slots"],[1810,"div.medium-ad"],[1384,"div.mgp-ads"],[1089,"div.mobile-ad-format"],[1245,"div.mosaico-ad"],[3647,"div.navbar-ad-section"],[3142,"div.novashare-buttons"],[3612,"div.outsider-ads"],[2885,"div.o-indenter--ad"],[3021,"div.panorama-ad"],[902,"div.panorama-ad-standard"],[1894,"div.panorama-annonser"],[2320,"div.panorama-banner"],[3029,"div.partnership-ads"],[582,"div.phpbb-ads-center"],[3797,"div.portrait-ad"],[1406,"div.postcard-ad"],[2025,"div.prebid-ad-slot"],[3408,"div.sb-egmont-plugin"],[270,"div.schibsted-info-sticky"],[2068,"div.sch-datacontroller--footer"],[820,"div.sch-datacontroller--subheader"],[2132,"div.sgm-header-start-ad"],[742,"div.sgm-large-ad"],[1926,"div.sidebar-annons"],[1001,"div.sidebar-item .banner-box"],[1192,"div.strossle-widget"],[3285,"div.td-a-rec-id-custom-spot"],[772,"div.td-banner-bg"],[854,"div.topmost-banner"],[1189,"div.top-advert-wrapper"],[1685,"div.tower-annonser"],[2316,"div.uder-tags-ad"],[1073,"div.view-annons-banner"],[2456,"div.vue-ad-wrapper"],[262,"div.widget_widget_dfp"],[57,"div.wp-block-ad"],[1920,"footer .sponsors-area"],[2984,"iframe#compricer_iframe"],[1018,"section.bgcolor-ad"],[1329,"ul.adsmodern"],[1095,"#RightOuterBannerDiv"],[421,"#advisa-iframe"],[2291,"#ad-fullscreen:not(body):not(html)"],[2356,"#ad-mega-container:not(body):not(html)"],[4074,"#ad-wallpaper:not(body):not(html)"],[3284,"#ad_topScroller:not(body):not(html)"],[3703,"#annons_head"],[3556,"#bottomAnnonsBar"],[1668,"#div-leeadsFullpageAd"],[354,"#leeads-panorama-container"],[3574,"#strossle-below-article-thumbnails"],[2802,"#topBannerAds"],[1678,".Teaser--nativeAd:not(body):not(html),\n.adtoma_container:not(body):not(html)"],[3892,".adContainer:not(body):not(html)"],[2265,".adrotate-group:not(body):not(html)"],[2839,".adtrue-holder:not(body):not(html)"],[1434,".advertisement_above_footer:not(body):not(html)"],[3936,".ad-inside-single-article:not(body):not(html)"],[1289,".ad-rotator:not(body):not(html)"],[3742,".ad-single-news:not(body):not(html)"],[995,".ad_container_bottom:not(body):not(html)"],[3923,".annonseArticle:not(body):not(html)"],[3450,".annonssegmenthead:not(body):not(html)"],[2965,".annons_col:not(body):not(html)"],[750,".annons_mitten:not(body):not(html)"],[1841,".annons_panorama:not(body):not(html)"],[3437,".bannerclick:not(body):not(html)"],[2891,".b-ad__wrapper:not(body):not(html)"],[2582,".carrie-ad-block:not(body):not(html)"],[1968,".casino-ad:not(body):not(html)"],[2011,".category-annonssamarbete:not(body):not(html)"],[252,".category-annons:not(body):not(html)"],[4058,".category-om-samarbeten:not(body):not(html)"],[1232,".category-samarbeten:not(body):not(html)"],[157,".category-sponsrade-inlagg:not(body):not(html)"],[1883,".category-sponsrade-reklaminlagg:not(body):not(html)"],[3532,".category-sponsrad-artikel:not(body):not(html)"],[2903,".category-sponsrad:not(body):not(html),\n.category-sponsrat:not(body):not(html)"],[3230,".category-sponsrat-content:not(body):not(html)"],[1526,".category-sponsrat-inlagg:not(body):not(html)"],[3794,".component-matchAds:not(body):not(html)"],[2811,".component-matchAds__content:not(body):not(html)"],[1450,".c-ad-wrapper:not(body):not(html)"],[3918,".c-ad__floating:not(body):not(html)"],[3842,".c-dfp_ads:not(body):not(html)"],[232,".c-post--native-ad:not(body):not(html)"],[918,".dfp-ad-widget-class:not(body):not(html)"],[896,".dj-ad-size:not(body):not(html)"],[1497,".esmg-hb-slot:not(body):not(html)"],[2228,".favethemes-content-ad-bottom:not(body):not(html)"],[2220,".favethemes-content-ad-inline:not(body):not(html)"],[1493,".favethemes-content-ad-top:not(body):not(html)"],[15,".footerannons:not(body):not(html)"],[1843,".footer-ad-wrap:not(body):not(html)"],[79,".headerannons:not(body):not(html)"],[2282,".layerAdContainer:not(body):not(html)"],[1302,".leeads-advert:not(body):not(html)"],[1550,".loop-mobile-leeads:not(body):not(html)"],[2495,".mittenannons:not(body):not(html)"],[3327,".mobile_ad:not(body):not(html)"],[3448,".node-sponsored-article:not(body):not(html)"],[2788,".nyhet_wrapper_annons:not(body):not(html)"],[3579,".o-grid__ad-column:not(body):not(html)"],[1754,".penci-infeed-fullwidth-ads:not(body):not(html)"],[2421,".plista_widget_outstream:not(body):not(html)"],[879,".react-ad:not(body):not(html)"],[2674,".rmss_main-ad:not(body):not(html)"],[1966,".sidebarannonsseg:not(body):not(html)"],[2755,".sponsorBanner:not(body):not(html)"],[483,".sponsrad-artikel:not(body):not(html)"],[2883,".swp-ad-strossle:not(body):not(html)"],[2033,".sw-popular__article--ad:not(body):not(html)"],[2255,".sw-sponsored_post:not(body):not(html)"],[218,".sw-tag-sponsored_post:not(body):not(html)"],[3551,".tag-sponsrat-inlagg:not(body):not(html)"],[963,".teaser--native-ad:not(body):not(html)"],[1016,".thb_ad_header:not(body):not(html)"],[3606,".topbanner-desktop:not(body):not(html)"],[3202,".toppannonser:not(body):not(html)"],[3700,".widget_adonnews:not(body):not(html)"],[130,".widget_ev_ad_widget:not(body):not(html),\n.widget_ic_ad_widget:not(body):not(html)"],[2269,"._ning_outer._ning_jss_zone:not(body):not(html)"]];
const genericExceptionSieve = [252,3053,2011];
const genericExceptionMap = [["alghundklubben.com",".category-annons:not(body):not(html)"],["cykla.se",".advertisment"],["lesscarbs.se",".category-annonssamarbete:not(body):not(html)"]];

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
