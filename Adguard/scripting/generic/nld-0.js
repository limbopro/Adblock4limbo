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

const genericSelectorMap = [[7428881,"#adBoven"],[3872821,"#adRechts"],[8560348,"#adRechts2"],[6486329,"#advertentie"],[16540680,".advertentie-2-container"],[15623700,".advertentie_226"],[4520496,".advertentie_links"],[10533452,".content-rechts-ad"],[6690507,".gamereel_featured-ad"],[9774073,".gesponsord_blokje"],[1341337,".gesponsord_blokje_wrap"],[7868731,".hoofdAd2"],[492903,".kwebler-ad-minimal"],[5850488,".massarius-dfp-unit"],[3167098,"#advertentieblokjeid"],[14621105,"#gesponsordelink"],[11298664,"#reclame2"],[14046077,"#reclame_rechts"],[4669158,"#reclamebanner"],[13462229,"#reclamediv"],[9618827,"#rightbanner_adbest"],[8764461,"#semilo-lrectangle"],[5653322,"#sidereclame"],[4972199,"#vipAdmarktBannerBlock"],[574524,".ads-mobiel"],[13107885,".adstekst"],[12287956,".advertentie"],[6188051,".advertenties"],[3458311,".advertorial_koersen_home_top"],[15467484,".ankeiler--advertisement"],[8206400,".aw_url_admarkt_bottom"],[2124065,".banner_advert6blok"],[9529652,".banner_advertentie_footer"],[14805874,".bericht_adv1"],[1596209,".bovenadvertentiediv"],[11424550,".category-advertentie"],[12342364,".gesponsordelink"],[8842488,".groei-ad"],[15968050,".justLease_ad"],[12472515,".mp-adsense-header-top"],[8412889,".ontwerp_ads"],[702968,".reclame"],[9348892,".reclameIndex"],[867230,".reclamekop"],[9348919,".reclamelogos"],[14368658,".sponsorbalk"]];
const genericExceptionSieve = [12736753,2219192,9945729,6269871,12287956,370285,12302442,6699588,13786787,1978561,15270707,14523205,12312277,5163167,6486329,11082487,12498410,7205220,11686360,7380607,2429090];
const genericExceptionMap = [["bokt.nl",".ad-body\n.node-ad"],["gratisaftehalen.nl",".ads-image"],["mechanisatiemarkt.nl",".advert-container\n.advert-title\n.advertiser"],["fok.nl",".advertentie"],["paginamarkt.nl",".advertentie"],["frontpage.fok.nl",".advertentie"],["veeteelt.nl",".advertorial"],["modekoninginmaxima.nl",".after-content-ad"],["vakantieplaats.nl",".feed-ad\n.topAds"],["ajaxreport.nl",".top-ads-block"],["ajaxrss.nl",".top-ads-block"],["blockchainvandaag.com",".top-ads-block"],["casinoreport.nl",".top-ads-block"],["casinovergelijkingen.com",".top-ads-block"],["cryptobelegging.com",".top-ads-block"],["cryptotoekomst.com",".top-ads-block"],["feyenoordreport.nl",".top-ads-block"],["formula1report.com",".top-ads-block"],["fultimateteam.com",".top-ads-block"],["gamblingreport.nl",".top-ads-block"],["livestreamvandaag.be",".top-ads-block"],["psvreport.nl",".top-ads-block"],["vergelijkbookmakers.nl",".top-ads-block"],["voetbalnotering.nl",".top-ads-block"],["voetbalsnafu.nl",".top-ads-block"],["voetbalvisie.com",".top-ads-block"],["directwonen.nl",".top-advert"],["hardware.info",".AdBar"],["tweakers.net",".AdBar"],["forum.fok.nl","#advertentie"],["538.nl","#topbanner_ad"],["hartvannederland.nl","#topbanner_ad"],["vier.be",".googleAd"],["voetbalwedstrijdenvandaag.nl","#sponsorText"],["marktnet.nl",".ad-description"],["underarmour.nl",".b-header-banner"],["klusidee.nl",".header-ad"]];

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
