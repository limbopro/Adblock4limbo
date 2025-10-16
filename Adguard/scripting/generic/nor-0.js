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

const genericSelectorMap = [[935,"#ad_superboard:not(html, body, :empty)"],[837,"#ad_topp:not(html, body, :empty)"],[1909,"#no-familieklubben-wde-front_topboard:not(html, body, :empty)"],[891,".annonselenker:not(html, body, :empty)"],[1343,".sponset-innlegg:not(html, body, :empty)"],[1249,".annonsetag:not(html, body, :empty)"],[1918,".jubii-adunit:not(html, body, :empty)"],[2558,".full-width.daily-offers:not(html, body, :empty)"],[1471,".gofollow:not([href*=\"nyhetsbrev\"], [href*=\"radio\"], html, body, :empty)"],[2840,".ad-paied-cont-front:not(html, body, :empty)"],[1158,".spklw-post-attr[data-recommendation-type=\"ad\"]:not(html, body, :empty),\n.spklw-post-attr[data-type=\"ad\"]:not(html, body, :empty),\n.spklw-post-attr[data-recommendation-type=\"sprinkleit\"]:not(html, body, :empty)"],[1226,".prisguidePost:not(html, body, :empty),\n#total_banner"],[1750,".native-ad-kicker:not(html, body, :empty)"],[97,".content-adunit:not(html, body, :empty),\n.add_300x250:not(html, body, :empty)"],[3005,".multiple-vevlysingar:not(html, body, :empty),\n.tag-page-ad-container:not(html, body, :empty)"],[2163,".full-width-vevlysingar:not(html, body, :empty)"],[4037,".annonceringBox:not(html, body, :empty)"],[3245,".rotating-junglebogen:not(html, body, :empty)"],[58,"#junglebogen-left:not(html, body, :empty)"],[1474,"#junglebogen-right:not(html, body, :empty),\n#taw > .med + div > #tvcap > .mnr-c:not(.qs-ic) > .commercial-unit-mobile-top"],[724,".annonseheader:not(html, body, :empty)"],[2211,".reklame-spot:not(html, body, :empty)"],[1831,"#ctl00_phMain_lnkAd:not(html, body, :empty)"],[238,"#ctl00_phMain_divParallax:not(html, body, :empty)"],[1150,".nf-o-annonse:not(html, body, :empty)"],[1475,".nf-c-adblock-title:not(html, body, :empty)"],[3609,".native-advertisement:not(html, body, :empty)"],[926,".commercial-teaser:not(html, body, :empty)"],[2048,"#newswire-banner:not(html, body, :empty)"],[3324,"#reklamebolk1wrap:not(html, body, :empty),\n.ticker-ad:not(html, body)"],[1194,".lp_p2_api_ad:not(html, body, :empty)"],[577,"#art-pomimuko:not(html, body, :empty)"],[3027,".currencyaugl:not(html, body, :empty)"],[2503,".row > div[class=\"top-fixed-wrapper\"]:not(body, :empty)"],[3762,".section-module.blog-frontpage-module.margin-top-10.row:not(html, body, :empty)"],[1271,".splitblock__column > .block > .adblock:not(:empty)"],[300,".bannerizor-banner:not(html, body, :empty)"],[2744,".mowgli-right:not(html, body, :empty)"],[2199,".mowgli-inread:not(html, body, :empty)"],[3446,".top-mowgli:not(html, body, :empty)"],[2488,".main-article-right-container > div[id][style^=\"margin-bottom:\"]:not(body, :empty)"],[26,"#front-page-app .row > #box2-container:not(:empty)"],[2236,".eiker-adlabel:not(html, body, :empty)"],[2668,".hringekja__wrapper:not(html, body, :empty)"],[1932,".adsbymanatee:not(html, body, :empty)"],[3450,".ad-front-310x400:not(html, body, :empty)"],[1851,".advertisement:not(html, body, :empty, [class*=\" ads \"])"],[2498,"#BannerEniro:not(html, body, :empty)"],[2371,"#GoogleAdsenseWideSkyscraper:not(html, body, :empty)"],[962,"#GoogleAdsenseWideSkyscraperLeft:not(html, body, :empty)"],[3508,"#viewItemAdsenseBanner:not(html, body, :empty)"],[3337,"#viewItemEniroBanner:not(html, body, :empty)"],[2751,".annonse:not(.article-entity, html, body, :empty)"],[3455,".block-AnnonceBlocksAdform:not(html, body, :empty)"],[136,".clearfix.top_banner_container:not(html, body, :empty)"],[1381,".adform__topbanner:not(html, body, :empty)"],[2491,".googlepublisherpluginad:not(html, body, :empty)"],[979,".polarisMarketing:not(html, body, :empty)"],[3401,".sub.menu-primary.default.polarisMenu.widget:not(html, body, :empty)"],[2369,".bazaarSpinnerContainer:not(html, body, :empty)"],[372,"#jobads-topbanner:not(html, body, :empty)"],[976,".tv2-ad:not(html, body, :empty)"],[1597,".auglysing_ticker:not(html, body, :empty)"],[1391,".premium-spot:not(html, body, :empty)"],[4066,".annonser:not(html, body, :empty)"],[2298,".mh-loop-ad:not(html, body, :empty)"],[1326,".wallpaper > .horseshoe:not(body, :empty)"],[4024,"#GoogleAdsensePanorama:not(html, body, :empty)"],[1420,"#GoogleAdsenseFooter:not(html, body, :empty)"],[536,".poster-placeholder:not(html, body, :empty)"],[2318,".banners.post_sticky:not(html, body, :empty)"],[1225,".ad[data-config-name]:not(html, body, :empty),\n.ad.text-center:not(html, body, :empty),\n.ad[id^=\"netboard_\"]:not(html, body, :empty),\n.ad[id^=\"skyscraper\"]:not(html, body, :empty),\n.ad.topBanner:not(html, body, :empty)"],[363,"#sponsorstripe:not(html, body, :empty)"],[3365,"#adBlinkContainer:not(html, body, :empty)"],[3041,"#innocode-ad:not(html, body, :empty)"],[3639,".ads__grid-item:not(html, body, :empty)"],[1130,".undirsidaad:not(html, body, :empty)"],[3725,".am-page-ad:not(html, body, :empty)"],[3128,".adnuntius-ad:not(html, body, :empty)"],[2052,".intersect-ads-load:not(html, body, :empty)"],[1283,".mobile-banner-widget:not(html, body, :empty)"],[3750,".widgerFullWidth:not(html, body, :empty)"],[1936,".desktop-banner-widget:not(html, body, :empty)"],[2017,".featuresplash-container:not(html, body, :empty)"],[3946,".ad-cookie:not(html, body, :empty)"],[1572,".adform__text:not(html, body, :empty)"],[3708,".augl-container:not(html, body, :empty)"],[1912,".hestesko-section:not(html, body, :empty)"],[1491,"#top-ads-container:not(html, body, :empty)"],[1425,".vertical-x1-ad > .column--big:not(body, :empty)"],[690,".grid > div[class=\"flow-banner\"]:not(body)"],[3456,".wg-banner:not(html, body, :empty)"],[915,".navigation__advertisement:not(html, body, :empty)"],[2087,".article__content > .article__adblock:not(body, :empty)"],[1881,".article__body > .article__adblock:not(body, :empty)"],[706,".block > .adblock--panorama:not(body, :empty)"],[2013,".splitblock__column--2 > .block > .adblock:not(:empty)"],[1156,"#toppbanner:not(html, body, :empty),\n.puFloatLine > #puFloatDiv"],[3398,".ehm-megaboard:not(html, body, :empty)"],[2794,".maelstrom-skyscraper:not(html, body, :empty)"],[1592,".forum-ad-box:not(html, body, :empty)"],[2767,".maelstrom-topbanner:not(html, body, :empty)"],[2040,".skyscraper-ads-container:not(html, body, :empty)"],[220,".adguru-modal-popup:not(html, body, :empty)"],[1826,"#wallpaperAds:not(html, body, :empty)"],[695,".container.container-topbanner:not(html, body, :empty)"],[3042,".ad-iframe-nt:not(html, body, :empty)"],[2915,".arcad-block-container:not(html, body, :empty)"],[3291,".adunit-content-marketing:not(html, body, :empty)"],[379,".nf-adholder:not(html, body, :empty)"],[2674,".single-adrotate:not(html, body, :empty)"],[1199,".banner-container-monster-topscroll:not(html, body, :empty)"],[429,"#mobiltoppbanner:not(html, body, :empty)"],[301,".scrolling-side-ad-container:not(html, body, :empty)"],[3236,".ticker-ad-wrapper:not(html, body, :empty)"],[2709,"#ad-sidefloat-container:not(html, body, :empty)"],[3606,".topbanner-desktop:not(body, html, :empty)"],[4083,".topscroll-placeholder:not(body, html, :empty)"],[2499,".td-a-rec:not(html, body, :empty)"],[381,"#addemam-wrapper:not(:empty)"],[4038,"div.inArticleBanner"],[1998,"div#box-over-content-revive"],[875,"div.gridnetboard"],[874,"div.tc_adwrap,\n#bb_banner,\n#bp_banner"],[2351,"div.c-lw-adContainer:not(:empty)"],[1594,".e-banner:not(html, body, :empty)"],[3254,".g-single:not(html, body, :empty)"],[2051,".grid-article-sponsored:not(html, body, :empty)"],[3020,".top-poster-wrap:not(html, body, :empty)"],[759,".yb-top-spot:not(html, body, :empty)"],[3839,".nf-o-moduleblock-module:has(> .nf-o-annonse)"],[1651,"div.nf-js-scrollable-item:not(:has(*))"],[362,".component__pubble-banner:not(html, body, :empty)"],[798,".tx-dce-container:not(html, body, :empty)"],[2649,".ad-topbanner-container:not(html, body, :empty)"],[3224,".td-header-rec-wrap:not(html, body, :empty)"],[14,"#related-articles + div[class^=\" hyperion-css-\"]:not(html, body, :empty)"],[402,".bonnier-ad:not(html, body)"],[1532,".skille:not(html, body)"],[2251,".Article-header-body::before"],[964,".paywall-fade:not(html, body)"],[3756,".polarisSpid.widget::before"],[1357,".CTA-body-faded:not(html, body)"],[3935,".faded-article-content::after"],[411,".paywall-gradient:not(html, body)"],[669,"#ntwidget:not(html, body, :empty)"],[447,".ntbox-btn:not(html, body, :empty)"],[229,".ntbox-tab.bg-primary:not(html, body, :empty)"],[2711,"#sportspill-box-top:not(html, body, :empty)"],[364,".sportspill-container[href*=\"lotto\"]:not(html, body, :empty)"],[1480,".norsk-tipping-widget:not(html, body, :empty)"],[16,"#topBanners"],[340,"#ad-fullbanner2-billboard-outer"],[2955,"#ad-topper"],[2666,"#ad_300X250"],[3521,"#ad_336_singlebt"],[2987,"#ad_728h"],[3225,"#ad_google"],[3825,"#advertRightTopPosition,\n.top-header-ads-mobile:not(html, body, :empty)"],[2771,"#adxtop"],[1556,"#atvcap + #tvcap > .mnr-c > .commercial-unit-mobile-top"],[1140,"#banner-top-right"],[2297,"#BannerBox"],[3560,"#bannerfloat22"],[2000,"#blox-top-promo"],[3060,"#campaign-banner"],[3671,"#chp_ads_blocker-modal"],[2549,"#chp_ads_blocker-overlay"],[959,"#close-fixedban"],[954,"#extensible-banner"],[3213,"#fb_300x250"],[2226,"#footer-banner"],[786,"#scorecard-ad"],[1655,"#soldakayan"],[594,"#topstuff > #tads"],[2753,"#videopageadblock"],[207,".Ad__Wrapper:not(html, body, :empty)"],[3838,".ad_register_prompt:not(html, body, :empty)"],[2285,".ad_showthread_firstpost_start_placeholder:not(html, body, :empty)"],[2739,".adace-popup-detector:not(html, body, :empty)"],[1903,".adheader403:not(html, body, :empty)"],[3711,".b-header-banner:not(html, body, :empty)"],[1484,".baners_block:not(html, body, :empty)"],[2406,".banner_header:not(html, body, :empty)"],[2239,".banners-middle:not(html, body, :empty)"],[2687,".banners_block:not(html, body, :empty)"],[693,".BetterJsPopOverlay:not(html, body, :empty)"],[3829,".breakout-ad:not(html, body, :empty)"],[1977,".commercial-unit-mobile-bottom:not(html, body, :empty)"],[243,".commercial-unit-mobile-top:not(html, body, :empty),\n.commercial-unit-mobile-top .jackpot-main-content-container > .UpgKEd + .nZZLFc > .vci,\n.commercial-unit-mobile-top .jackpot-main-content-container > .UpgKEd + .nZZLFc > div > .vci,\n.commercial-unit-mobile-top > .v7hl4d,\n.commercial-unit-mobile-top > div[data-pla=\"1\"]"],[1217,".demo-wrapper[style=\"display:none;\"] + div.fadeInDown[id]"],[365,".gmr-bannerpopup:not(html, body, :empty)"],[3375,".happy-footer:not(html, body, :empty)"],[2103,".happy-player-beside:not(html, body, :empty)"],[359,".idmuvi-topbanner:not(html, body, :empty)"],[108,".idmuvi-topbanner-aftermenu:not(html, body, :empty)"],[909,".innerBanner:not(html, body, :empty)"],[1031,".jetblocker-wrapper:not(html, body, :empty)"],[927,".jetblocker_overlay:not(html, body, :empty)"],[528,".loop_google_ad:not(html, body, :empty)"],[840,".main_promo_image_container:not(html, body, :empty)"],[1902,".menu-ads:not(html, body, :empty)"],[2918,".reclamTable:not(html, body, :empty)"],[34,".remove-spots:not(html, body, :empty)"],[601,".roxot-dynamic:not(html, body, :empty)"],[2381,".SC_TBlock:not(html, body, :empty)"],[2690,".sidebar-ads-container:not(html, body, :empty)"],[452,".special-ads:not(html, body, :empty)"],[42,".sponsor-div:not(html, body, :empty)"],[260,".sponsored-home-page-inner:not(html, body, :empty)"],[3271,".sponsored-items:not(html, body, :empty)"],[3117,".stripper > a[href*=\"istripper\"] > img"],[2787,".tjads:not(html, body, :empty)"],[871,".top-adv-app:not(html, body, :empty)"],[1243,".top-banners:not(html, body, :empty)"],[451,".top-r-ads:not(html, body, :empty)"],[728,".topbannerad:not(html, body, :empty)"],[1974,".videojs-hero-overlay:not(html, body, :empty)"],[69,".widget-sidebar-right-banner:not(html, body, :empty)"],[1781,".wpcnt > .wpa"],[3568,"body > div#fixedban"]];
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
