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

// nor-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[935,"#ad_superboard:not(html, body, :empty)"],[837,"#ad_topp:not(html, body, :empty)"],[1909,"#no-familieklubben-wde-front_topboard:not(html, body, :empty)"],[891,".annonselenker:not(html, body, :empty)"],[1343,".sponset-innlegg:not(html, body, :empty)"],[1249,".annonsetag:not(html, body, :empty)"],[1918,".jubii-adunit:not(html, body, :empty)"],[2558,".full-width.daily-offers:not(html, body, :empty)"],[1471,".gofollow:not([href*=\"nyhetsbrev\"], [href*=\"radio\"], html, body, :empty)"],[2840,".ad-paied-cont-front:not(html, body, :empty)"],[1158,".spklw-post-attr[data-recommendation-type=\"ad\"]:not(html, body, :empty),\n.spklw-post-attr[data-type=\"ad\"]:not(html, body, :empty),\n.spklw-post-attr[data-recommendation-type=\"sprinkleit\"]:not(html, body, :empty)"],[1226,".prisguidePost:not(html, body, :empty)"],[1750,".native-ad-kicker:not(html, body, :empty)"],[97,".content-adunit:not(html, body, :empty)"],[3005,".multiple-vevlysingar:not(html, body, :empty),\n.tag-page-ad-container:not(html, body, :empty)"],[2163,".full-width-vevlysingar:not(html, body, :empty)"],[4037,".annonceringBox:not(html, body, :empty)"],[3245,".rotating-junglebogen:not(html, body, :empty)"],[58,"#junglebogen-left:not(html, body, :empty)"],[1474,"#junglebogen-right:not(html, body, :empty)"],[724,".annonseheader:not(html, body, :empty)"],[2211,".reklame-spot:not(html, body, :empty)"],[1831,"#ctl00_phMain_lnkAd:not(html, body, :empty)"],[238,"#ctl00_phMain_divParallax:not(html, body, :empty)"],[1150,".nf-o-annonse:not(html, body, :empty)"],[1475,".nf-c-adblock-title:not(html, body, :empty)"],[3609,".native-advertisement:not(html, body, :empty)"],[926,".commercial-teaser:not(html, body, :empty)"],[2048,"#newswire-banner:not(html, body, :empty)"],[3324,"#reklamebolk1wrap:not(html, body, :empty),\n.ticker-ad:not(html, body)"],[1194,".lp_p2_api_ad:not(html, body, :empty)"],[577,"#art-pomimuko:not(html, body, :empty)"],[3027,".currencyaugl:not(html, body, :empty)"],[2503,".row > div[class=\"top-fixed-wrapper\"]:not(body, :empty)"],[3762,".section-module.blog-frontpage-module.margin-top-10.row:not(html, body, :empty)"],[1271,".splitblock__column > .block > .adblock:not(:empty)"],[300,".bannerizor-banner:not(html, body, :empty)"],[2744,".mowgli-right:not(html, body, :empty)"],[2199,".mowgli-inread:not(html, body, :empty)"],[3446,".top-mowgli:not(html, body, :empty)"],[2488,".main-article-right-container > div[id][style^=\"margin-bottom:\"]:not(body, :empty)"],[26,"#front-page-app .row > #box2-container:not(:empty)"],[2236,".eiker-adlabel:not(html, body, :empty)"],[2668,".hringekja__wrapper:not(html, body, :empty),\n.fpblock--ad:not(html, body, :empty)"],[1932,".adsbymanatee:not(html, body, :empty),\n#invideo_2:not(:empty)"],[3450,".ad-front-310x400:not(html, body, :empty)"],[1851,".advertisement:not(html, body, :empty, [class*=\" ads \"])"],[2498,"#BannerEniro:not(html, body, :empty)"],[2371,"#GoogleAdsenseWideSkyscraper:not(html, body, :empty)"],[962,"#GoogleAdsenseWideSkyscraperLeft:not(html, body, :empty)"],[3508,"#viewItemAdsenseBanner:not(html, body, :empty)"],[3337,"#viewItemEniroBanner:not(html, body, :empty)"],[2751,".annonse:not(.article-entity, html, body, :empty)"],[3455,".block-AnnonceBlocksAdform:not(html, body, :empty)"],[136,".clearfix.top_banner_container:not(html, body, :empty)"],[1381,".adform__topbanner:not(html, body, :empty)"],[2491,".googlepublisherpluginad:not(html, body, :empty)"],[979,".polarisMarketing:not(html, body, :empty)"],[3401,".sub.menu-primary.default.polarisMenu.widget:not(html, body, :empty)"],[2369,".bazaarSpinnerContainer:not(html, body, :empty)"],[372,"#jobads-topbanner:not(html, body, :empty)"],[976,".tv2-ad:not(html, body, :empty)"],[1597,".auglysing_ticker:not(html, body, :empty)"],[1391,".premium-spot:not(html, body, :empty)"],[4066,".annonser:not(html, body, :empty)"],[2298,".mh-loop-ad:not(html, body, :empty)"],[1326,".wallpaper > .horseshoe:not(body, :empty)"],[4024,"#GoogleAdsensePanorama:not(html, body, :empty)"],[1420,"#GoogleAdsenseFooter:not(html, body, :empty)"],[536,".poster-placeholder:not(html, body, :empty)"],[2318,".banners.post_sticky:not(html, body, :empty)"],[1225,".ad[data-config-name]:not(html, body, :empty),\n.ad.text-center:not(html, body, :empty),\n.ad[id^=\"netboard_\"]:not(html, body, :empty),\n.ad[id^=\"skyscraper\"]:not(html, body, :empty),\n.ad.topBanner:not(html, body, :empty)"],[363,"#sponsorstripe:not(html, body, :empty)"],[3365,"#adBlinkContainer:not(html, body, :empty)"],[3041,"#innocode-ad:not(html, body, :empty)"],[3639,".ads__grid-item:not(html, body, :empty)"],[1130,".undirsidaad:not(html, body, :empty),\n#st-ami + div[id][class*=\" \"]"],[3725,".am-page-ad:not(html, body, :empty)"],[3128,".adnuntius-ad:not(html, body, :empty)"],[2052,".intersect-ads-load:not(html, body, :empty)"],[1283,".mobile-banner-widget:not(html, body, :empty)"],[3750,".widgerFullWidth:not(html, body, :empty)"],[1936,".desktop-banner-widget:not(html, body, :empty)"],[2017,".featuresplash-container:not(html, body, :empty)"],[3946,".ad-cookie:not(html, body, :empty)"],[1572,".adform__text:not(html, body, :empty)"],[3708,".augl-container:not(html, body, :empty)"],[1912,".hestesko-section:not(html, body, :empty)"],[1491,"#top-ads-container:not(html, body, :empty)"],[1425,".vertical-x1-ad > .column--big:not(body, :empty)"],[690,".grid > div[class=\"flow-banner\"]:not(body)"],[3456,".wg-banner:not(html, body, :empty)"],[915,".navigation__advertisement:not(html, body, :empty)"],[2087,".article__content > .article__adblock:not(body, :empty)"],[1881,".article__body > .article__adblock:not(body, :empty)"],[706,".block > .adblock--panorama:not(body, :empty)"],[2013,".splitblock__column--2 > .block > .adblock:not(:empty)"],[1156,"#toppbanner:not(html, body, :empty),\n.rkads:not(:empty)"],[3398,".ehm-megaboard:not(html, body, :empty)"],[2794,".maelstrom-skyscraper:not(html, body, :empty)"],[1592,".forum-ad-box:not(html, body, :empty)"],[2767,".maelstrom-topbanner:not(html, body, :empty)"],[2040,".skyscraper-ads-container:not(html, body, :empty)"],[220,".adguru-modal-popup:not(html, body, :empty)"],[1826,"#wallpaperAds:not(html, body, :empty)"],[695,".container.container-topbanner:not(html, body, :empty)"],[3042,".ad-iframe-nt:not(html, body, :empty)"],[2915,".arcad-block-container:not(html, body, :empty)"],[3291,".adunit-content-marketing:not(html, body, :empty)"],[379,".nf-adholder:not(html, body, :empty)"],[2674,".single-adrotate:not(html, body, :empty)"],[1199,".banner-container-monster-topscroll:not(html, body, :empty)"],[429,"#mobiltoppbanner:not(html, body, :empty)"],[301,".scrolling-side-ad-container:not(html, body, :empty)"],[3236,".ticker-ad-wrapper:not(html, body, :empty)"],[2709,"#ad-sidefloat-container:not(html, body, :empty)"],[3606,".topbanner-desktop:not(body, html, :empty)"],[4083,".topscroll-placeholder:not(body, html, :empty)"],[2499,".td-a-rec:not(html, body, :empty)"],[381,"#addemam-wrapper:not(:empty)"],[4038,"div.inArticleBanner"],[1998,"div#box-over-content-revive"],[875,"div.gridnetboard"],[874,"div.tc_adwrap"],[2351,"div.c-lw-adContainer:not(:empty)"],[1594,".e-banner:not(html, body, :empty)"],[3254,".g-single:not(html, body, :empty)"],[2051,".grid-article-sponsored:not(html, body, :empty)"],[3020,".top-poster-wrap:not(html, body, :empty)"],[759,".yb-top-spot:not(html, body, :empty)"],[3839,".nf-o-moduleblock-module:has(> .nf-o-annonse)"],[1651,"div.nf-js-scrollable-item:not(:has(*))"],[362,".component__pubble-banner:not(html, body, :empty)"],[798,".tx-dce-container:not(html, body, :empty)"],[2649,".ad-topbanner-container:not(html, body, :empty)"],[3224,".td-header-rec-wrap:not(html, body, :empty)"],[2782,".idle-timeout-blend:not(html, body, :empty)"],[3018,".KCL_ad-rotator:not(html, body, :empty)"],[2095,"#sidebar-floating-ad"],[2931,".strevda__item:not(html, body, :empty)"],[2046,".banner--topscroll:not(html, body, :empty)"],[3675,".lm-banner:not(html, body, :empty)"],[14,"#related-articles + div[class^=\" hyperion-css-\"]:not(html, body, :empty)"],[402,".bonnier-ad:not(html, body)"],[1532,".skille:not(html, body)"],[2251,".Article-header-body::before"],[964,".paywall-fade:not(html, body)"],[3756,".polarisSpid.widget::before"],[1357,".CTA-body-faded:not(html, body)"],[3935,".faded-article-content::after"],[411,".paywall-gradient:not(html, body)"],[669,"#ntwidget:not(html, body, :empty)"],[447,".ntbox-btn:not(html, body, :empty)"],[229,".ntbox-tab.bg-primary:not(html, body, :empty)"],[2711,"#sportspill-box-top:not(html, body, :empty)"],[364,".sportspill-container[href*=\"lotto\"]:not(html, body, :empty)"],[1480,".norsk-tipping-widget:not(html, body, :empty)"],[16,"#topBanners"],[312,"#adbtm[onclick=\"badr();\"]"],[268,"#adyes:not(:empty)"],[3733,"#anuncio:not(:empty)"],[936,"#bt-ads:not(:empty)"],[824,"#clickCatcher31:not(:empty),\n#clickCatcher32:not(:empty)"],[374,"#close-teaser:not(:empty)"],[3408,"#donate > a[href][style][onclick=\"thank_you()\"][target=\"_blank\"][rel=\"nofollow\"]"],[1342,"#dontfoid:not(:empty)"],[2955,"#go-to-top + div[id][class]"],[3133,"#invid_call:not(:empty)"],[3755,"#invideo_data:not(:empty)"],[2341,"#invideo_new:not(:empty)"],[1903,"#micast_ads:not(:empty)"],[2022,"#placeAds:not(:empty)"],[1622,"#player div[style$=\"cursor: pointer; position: absolute; width: 100%; height: 100%; padding: 1rem; z-index: 2147483647;\"]"],[2117,"#playerOverlay[style=\"position:absolute; z-index:3\"]"],[151,"#plban:not(:empty)"],[2287,"#sidearm-adblock-modal:not(:empty)"],[2790,"#stop_ad:not(:empty)"],[2075,"#stop_ad2:not(:empty)"],[3053,"#tabVideo > .rmedia"],[3000,"#TapatalkFooterDesktopAds:not(:empty)"],[3043,"#teaser3[style^=\"width: 100%;height:0;text-align: center;display: scroll;position:fixed;\"]"],[525,"#vidcloud-player > #overlay-container"],[3210,"#video-id_fluid_html_on_pause:not(:empty)"],[2694,"#video_player ~ div[id] div[style^=\"position:fixed;inset:0px;z-index:\"]"],[2850,"#zdn-adblock-overlay:not(:empty)"],[2078,".aan_fake:not(:empty)"],[401,".aan_fake__video-units:not(:empty)"],[4001,".adde_modal-overlay:not(:empty),\n.close-btn2[onclick=\"closeAd2()\"],\n.close-btn3[onclick=\"closeAd3()\"],\n.close-btn4[onclick=\"closeAd4()\"]"],[2606,".adde_modal_detector:not(:empty)"],[246,".ads-btns:not(:empty)"],[1437,".adsbyrunactive:not(:empty)"],[24,".advboxemb:not(:empty)"],[501,".aff-content-col:not(:empty)"],[3358,".aff-inner-col:not(:empty)"],[3064,".aff-item-list:not(:empty)"],[1652,".amp-ad-inner:not(:empty)"],[2103,".ark-ad-message:not(:empty)"],[3883,".ave-pl:not(:empty)"],[3086,".bloc-pub:not(:empty)"],[4000,".bloc-pub2:not(:empty)"],[298,".blocker-overlay:not(:empty)"],[615,".bottom-hor-block:not(:empty)"],[4016,".brs-block:not(:empty)"],[1485,".buttonautocl:not(:empty)"],[2050,".close-btn[onclick=\"closeAd()\"]"],[2021,".exo-horizontal:not(:empty)"],[2483,".fints-block__row:not(:empty)"],[1003,".fp-player > div[style=\"position: absolute; inset: 0px; overflow: hidden; z-index: 160; background: transparent; display: block;\"]"],[3788,".fp-ui > a[href][target=\"_blank\"][style^=\"position: absolute; inset: 0px;\"]"],[906,".glx-watermark-container:not(:empty)"],[1727,".header-menu-bottom-ads:not(:empty)"],[1303,".hor_banner:not(:empty)"],[2269,".in_stream_banner:not(:empty)"],[1328,".infiniteads_placeholder:not(:empty)"],[3345,".inplayer-ad:not(:empty)"],[289,".inplayer_banners:not(:empty)"],[2792,".jwplayer ~ div[style=\"position:absolute;top:0;left:0;width: 100%;height: 100%;z-index:2147483647\"]"],[1514,".mdp-deblocker-wrapper:not(:empty)"],[2085,".ninja-recommend-block:not(:empty)"],[794,".overlay-advertising-new:not(:empty),\n.samBannerUnit:not(:empty)"],[587,".player-bns-block:not(:empty)"],[355,".preroll-blocker:not(:empty)"],[782,".rps_player_ads:not(:empty)"],[1515,".samCodeUnit:not(:empty)"],[2898,".stream-item-widget:not(:empty)"],[1601,".trafficjunky-float-right:not(:empty)"],[575,".wp-block-savage-platform-primis-video:not(:empty)"],[2967,"body > .security-container[style=\"opacity: 1; transform: translateY(0px);\"]"],[3130,"html#html[sti][vic][lang] > body#allbody"]];
const genericExceptionSieve = [1226,1150,1851,2751,2499,3686,3088,2192,340,498,1785,2823,2974,2723,3903,1480,1783];
const genericExceptionMap = [["prisguiden.no",".prisguidePost:not(html, body, :empty)"],["sagat.no",".nf-o-annonse:not(html, body, :empty)"],["bygdebladet.no",".nf-o-annonse:not(html, body, :empty)"],["basketnews.lt",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["basketnews.com",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["hero-magazine.com",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["ut.no",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["flasharch.com",".advertisement:not(html, body, :empty, [class*=\" ads \"])"],["rockefeller.no",".annonse:not(.article-entity, html, body, :empty)"],["tipsbladet.no",".td-a-rec:not(html, body, :empty)"],["nytid.no",".td-a-rec:not(html, body, :empty)"],["krom.is",".share-container"],["lampegiganten.dk","#newsletter-overlay"],["lampegiganten.no","#newsletter-overlay"],["tikkio.com",".mfp-ready"],["eyjar.net",".side_ads"],["check-in.dk",".home-ads\n.ads-top"],["babyklar.dk",".ad-cell\n.ads300-250"],["findbolig.nu",".advertLink"],["sosialurin.fo",".ads-banner"],["norsk-tipping.no",".norsk-tipping-widget:not(html, body, :empty)"],["tipster.no",".norsk-tipping-widget:not(html, body, :empty)"],["online.no",".norsk-tipping-widget:not(html, body, :empty)"],["epost.telenor.no",".norsk-tipping-widget:not(html, body, :empty)"],["com",".norsk-tipping-widget:not(html, body, :empty)"],["ukenr.no",".bannerad"],["ugenr.dk",".bannerad"]];

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
