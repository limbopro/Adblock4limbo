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

// adguard-mobile

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[3012,"#mobile-adhesion:not(#style_important)"],[1313,"#ad-300x250_mid_mobile"],[1269,".sp_ad_box_top"],[2787,".happy-header-mobile"],[2740,".standard-article-vertical-ad"],[1688,".header-ad-mobile"],[166,".under-player-ad-mobile"],[3620,".california-sticky-footer-ad-container"],[1725,".happy-under-player-mobile"],[808,".b-mobile-spots"],[199,"#ad_inview_area"],[3606,"#mgid_iframe1"],[188,".amp-ad container"],[1294,".amp_ad"],[2443,"#ad-300x250_mobile"]];
const genericExceptionSieve = [162,3185,1690,1402,836,2322,3278,2826,1727,1671,2970,312,961,1075,3053,3000,3597];
const genericExceptionMap = [["moroccoworldnews.com",".header-ad\n.custom-ad"],["gizchina.com",".header-ad"],["gizmobolt.com",".header-ad\n.custom-ad"],["blogdoiphone.com",".header-ad\n.custom-ad"],["westseattleblog.com",".header-ad\n.custom-ad"],["reviews.mtbr.com",".header-ad"],["stevengoh.com",".header-ad"],["idownloadblog.com",".header-ad"],["arseblog.com",".header-ad"],["mrmoneymustache.com",".custom-ad"],["milk-key.com",".header-ads-area"],["huffpost.com",".ad-leaderboard-flex"],["huffingtonpost.jp",".ad-leaderboard-flex"],["news.infoseek.co.jp",".ad_area"],["ign.com",".zad.billboard"],["matomedane.jp","#AdvHeader"],["itest.5ch.net",".js-cardview_ad-320x180"],["milesplit.com",".sticky-ad"],["niji-gazo.com",".ad-block"],["cancam.jp",".overlay-ad"],["seattletimes.com",".ad-fixed"],["vip.de",".centered-ad"],["m.tubewolf.com",".block-ads"],["m.veporn.net",".advertisment\n#topAds"],["deviantart.com",".mobile-ad"]];

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
