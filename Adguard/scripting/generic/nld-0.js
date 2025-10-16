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

// nld-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[2833,"#adBoven"],[2101,"#adRechts"],[3804,"#adRechts2"],[2361,"#advertentie"],[1032,".advertentie-2-container"],[1556,".advertentie_226"],[2608,".advertentie_links"],[2636,".content-rechts-ad"],[1739,".gamereel_featured-ad"],[1017,".gesponsord_blokje"],[1945,".gesponsord_blokje_wrap"],[315,".hoofdAd2"],[1383,".kwebler-ad-minimal"],[1400,".massarius-dfp-unit"],[2077,".rmn-advert"],[890,"#advertentieblokjeid"],[2481,"#gesponsordelink"],[1896,"#reclame2"],[893,"#reclame_rechts"],[3814,"#reclamebanner"],[2773,"#reclamediv"],[1419,"#rightbanner_adbest"],[3117,"#semilo-lrectangle"],[842,"#sidereclame"],[3751,"#vipAdmarktBannerBlock"],[1084,".ads-mobiel"],[685,".adstekst"],[4052,".advertentie"],[3091,".advertenties"],[1287,".advertorial_koersen_home_top"],[988,".ankeiler--advertisement"],[2112,".aw_url_admarkt_bottom"],[2337,".banner_advert6blok"],[2356,".banner_advertentie_footer"],[2930,".bericht_adv1"],[2865,".bovenadvertentiediv"],[806,".category-advertentie"],[1116,".gesponsordelink"],[3320,".groei-ad"],[1842,".justLease_ad"],[195,".mp-adsense-header-top"],[3801,".ontwerp_ads"],[2552,".reclame"],[1820,".reclameIndex"],[2974,".reclamekop"],[1847,".reclamelogos"],[3986,".sponsorbalk"]];
const genericExceptionSieve = [2289,3256,641,2991,4052,1645,2154,2628,3747,193,819,2885,3797,2207,2361,2807,1514,356,472,3711,162];
const genericExceptionMap = [["bokt.nl",".ad-body\n.node-ad"],["gratisaftehalen.nl",".ads-image"],["mechanisatiemarkt.nl",".advert-container\n.advert-title\n.advertiser"],["fok.nl",".advertentie"],["paginamarkt.nl",".advertentie"],["frontpage.fok.nl",".advertentie"],["veeteelt.nl",".advertorial"],["modekoninginmaxima.nl",".after-content-ad"],["vakantieplaats.nl",".feed-ad\n.topAds"],["ajaxreport.nl",".top-ads-block"],["ajaxrss.nl",".top-ads-block"],["blockchainvandaag.com",".top-ads-block"],["casinoreport.nl",".top-ads-block"],["casinovergelijkingen.com",".top-ads-block"],["cryptobelegging.com",".top-ads-block"],["cryptotoekomst.com",".top-ads-block"],["feyenoordreport.nl",".top-ads-block"],["formula1report.com",".top-ads-block"],["fultimateteam.com",".top-ads-block"],["gamblingreport.nl",".top-ads-block"],["livestreamvandaag.be",".top-ads-block"],["psvreport.nl",".top-ads-block"],["vergelijkbookmakers.nl",".top-ads-block"],["voetbalnotering.nl",".top-ads-block"],["voetbalsnafu.nl",".top-ads-block"],["voetbalvisie.com",".top-ads-block"],["directwonen.nl",".top-advert"],["hardware.info",".AdBar"],["tweakers.net",".AdBar"],["forum.fok.nl","#advertentie"],["vandaaginside.nl","#topbanner_ad"],["538.nl","#topbanner_ad"],["hartvannederland.nl","#topbanner_ad"],["kijk.nl","#topbanner_ad"],["vier.be",".googleAd"],["voetbalwedstrijdenvandaag.nl","#sponsorText"],["marktnet.nl",".ad-description"],["underarmour.nl",".b-header-banner"],["klusidee.nl",".header-ad"]];

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
