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

// nor-0

const toImport = [[13874043,".annonselenker:not(html, body, :empty)"],[11160062,".full-width.daily-offers:not(html, body, :empty)"],[1774911,".sponset-innlegg:not(html, body, :empty)"],[7566783,".gofollow:not([href*=\"nyhetsbrev\"], [href*=\"radio\"], html, body, :empty)"],[10193688,".ad-paied-cont-front:not(html, body, :empty)"],[13264006,".spklw-post-attr[data-recommendation-type=\"ad\"]:not(html, body, :empty),.spklw-post-attr[data-type=\"ad\"]:not(html, body, :empty),.spklw-post-attr[data-recommendation-type=\"sprinkleit\"]:not(html, body, :empty)"],[16320214,".native-ad-kicker:not(html, body, :empty)"],[2191457,".content-adunit:not(html, body, :empty)"],[16427965,".multiple-vevlysingar:not(html, body, :empty)"],[1890419,".full-width-vevlysingar:not(html, body, :empty)"],[4714437,".annonceringBox:not(html, body, :empty)"],[10742957,".rotating-junglebogen:not(html, body, :empty)"],[5054522,"#junglebogen-left"],[13899202,"#junglebogen-right"],[13873876,".annonseheader:not(html, body, :empty)"],[2058403,".reklame-spot:not(html, body, :empty)"],[10409767,"#ctl00_phMain_lnkAd"],[14921966,"#ctl00_phMain_divParallax"],[10884222,".nf-o-annonse:not(html, body, :empty)"],[14403011,".nf-c-adblock-title:not(html, body, :empty)"],[5447193,".native-advertisement:not(html, body, :empty)"],[1393566,".commercial-teaser:not(html, body, :empty)"],[3704832,"#newswire-banner"],[16280828,"#reklamebolk1wrap"],[6300842,".lp_p2_api_ad:not(html, body, :empty)"],[13546049,"#art-pomimuko"],[11684819,".currencyaugl:not(html, body, :empty)"],[4307399,".row > div[class=\"top-fixed-wrapper\"]"],[3063474,".section-module.blog-frontpage-module.margin-top-10.row:not(html, body, :empty)"],[12854519,".splitblock__column > .block > .adblock"],[6525228,".bannerizor-banner:not(html, body, :empty)"],[14895800,".mowgli-right:not(html, body, :empty)"],[10803351,".mowgli-inread:not(html, body, :empty)"],[14536054,".top-mowgli:not(html, body, :empty)"],[13978040,".main-article-right-container > div[id][style^=\"margin-bottom:\"]"],[14176282,"#front-page-app .row > #box2-container"],[3102908,".eiker-adlabel:not(html, body, :empty)"],[2902636,".hringekja__wrapper:not(html, body, :empty)"],[2885516,".adsbymanatee:not(html, body, :empty)"],[770983,"#ad_superboard"],[7201605,"#ad_topp"],[10569589,"#no-familieklubben-wde-front_topboard"],[95457,".annonsetag:not(html, body, :empty)"],[6584190,".jubii-adunit:not(html, body, :empty)"],[5287950,"#related-articles + div[class^=\" hyperion-css-\"]"],[16722370,"#BannerEniro"],[5491011,"#GoogleAdsenseWideSkyscraper"],[16094146,"#GoogleAdsenseWideSkyscraperLeft"],[8986036,"#viewItemAdsenseBanner"],[6221065,"#viewItemEniroBanner"],[3968383,".block-AnnonceBlocksAdform:not(html, body, :empty)"],[8056968,".clearfix.top_banner_container:not(html, body, :empty)"],[15029605,".adform__topbanner:not(html, body, :empty)"],[2472379,".googlepublisherpluginad:not(html, body, :empty)"],[3806163,".polarisMarketing:not(html, body, :empty)"],[4308297,".sub.menu-primary.default.polarisMenu.widget:not(html, body, :empty)"],[11442497,".bazaarSpinnerContainer:not(html, body, :empty)"],[1020276,"#jobads-topbanner"],[2675664,".tv2-ad:not(html, body, :empty)"],[10454589,".auglysing_ticker:not(html, body, :empty)"],[2434415,".premium-spot:not(html, body, :empty)"],[10399714,".annonser:not(html, body, :empty)"],[2230522,".mh-loop-ad:not(html, body, :empty)"],[6970620,".ticker-ad:not(html, body)"],[1701166,".wallpaper > .horseshoe"],[7040952,"#GoogleAdsensePanorama"],[11642252,"#GoogleAdsenseFooter"],[13591064,".poster-placeholder:not(html, body, :empty)"],[15137038,".banners.post_sticky:not(html, body, :empty)"],[1647817,".ad[data-config-name]:not(html, body, :empty),.ad.text-center:not(html, body, :empty),.ad[id^=\"netboard_\"]:not(html, body, :empty),.ad[id^=\"skyscraper\"]:not(html, body, :empty),.ad.topBanner:not(html, body, :empty)"],[700779,"#sponsorstripe"],[1142053,"#adBlinkContainer"],[3292129,"#innocode-ad"],[3280439,".ads__grid-item:not(html, body, :empty)"],[5043306,".undirsidaad:not(html, body, :empty)"],[14548621,".am-page-ad:not(html, body, :empty)"],[13634616,".adnuntius-ad:not(html, body, :empty)"],[1738756,".intersect-ads-load:not(html, body, :empty)"],[8115459,".mobile-banner-widget:not(html, body, :empty)"],[12996262,".widgerFullWidth:not(html, body, :empty)"],[15198096,".desktop-banner-widget:not(html, body, :empty)"],[3635169,".featuresplash-container:not(html, body, :empty)"],[4145002,".ad-cookie:not(html, body, :empty)"],[5166628,".adform__text:not(html, body, :empty)"],[130684,".augl-container:not(html, body, :empty)"],[4351864,".hestesko-section:not(html, body, :empty)"],[3556819,"#top-ads-container"],[8144273,".vertical-x1-ad > .column--big"],[1491634,".grid > div[class=\"flow-banner\"]"],[16297344,".wg-banner:not(html, body, :empty)"],[12198803,".navigation__advertisement:not(html, body, :empty)"],[8435751,".article__content > .article__adblock"],[9819993,".article__body > .article__adblock"],[8123074,".block > .adblock--panorama"],[4868061,".splitblock__column--2 > .block > .adblock"],[10839172,"#toppbanner"],[11627846,".ehm-megaboard:not(html, body, :empty)"],[11389674,".maelstrom-skyscraper:not(html, body, :empty)"],[3667512,".forum-ad-box:not(html, body, :empty)"],[1772239,".maelstrom-topbanner:not(html, body, :empty)"],[13891576,".skyscraper-ads-container:not(html, body, :empty)"],[12714204,".adguru-modal-popup:not(html, body, :empty)"],[1005346,"#wallpaperAds"],[4186807,".container.container-topbanner:not(html, body, :empty)"],[8604642,".ad-iframe-nt:not(html, body, :empty)"],[16681827,".arcad-block-container:not(html, body, :empty)"],[2526427,".adunit-content-marketing:not(html, body, :empty)"],[15733115,".nf-adholder:not(html, body, :empty)"],[12855922,".single-adrotate:not(html, body, :empty)"],[3642543,".banner-container-monster-topscroll:not(html, body, :empty)"],[6365613,"#mobiltoppbanner"],[8477629,".tag-page-ad-container:not(html, body, :empty)"],[8630573,".scrolling-side-ad-container:not(html, body, :empty)"],[1899684,".ticker-ad-wrapper:not(html, body, :empty)"],[296444,".skille:not(html, body)"],[4761803,".Article-header-body::before"],[4703172,".paywall-fade:not(html, body)"],[8920748,".polarisSpid.widget::before"],[9065805,".CTA-body-faded:not(html, body)"],[3108703,".faded-article-content::after"],[14803355,".paywall-gradient:not(html, body)"],[1491613,"#ntwidget"],[7680447,".ntbox-btn:not(html, body, :empty)"],[7680229,".ntbox-tab.bg-primary:not(html, body, :empty)"],[14809751,"#sportspill-box-top"],[418156,".sportspill-container[href*=\"lotto\"]:not(html, body, :empty)"],[10833936,"#topBanners"]];

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
