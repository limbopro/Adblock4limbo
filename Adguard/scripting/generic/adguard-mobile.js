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

const genericSelectorMap = [[16149444,"#mobile-adhesion:not(#style_important)"],[13818134,".gnt_xmst"],[15230241,"#ad-300x250_mid_mobile"],[9733365,".sp_ad_box_top"],[6699747,".happy-header-mobile"],[9919156,".standard-article-vertical-ad"],[1263256,".header-ad-mobile"],[15212710,".under-player-ad-mobile"],[6860324,".california-sticky-footer-ad-container"],[923325,".happy-under-player-mobile"],[6431528,".b-mobile-spots"],[14987463,"#ad_inview_area"],[16768534,"#mgid_iframe1"],[16602129,"#mgid_iframe"],[13732212,".amp-ad-container"],[3940540,".amp-ad container"],[4027662,".amp_ad"],[6547851,"#ad-300x250_mobile"]];
const genericExceptionSieve = [2429090,4586609,15857306,288122,7086916,4299026,15469774,6896394,6276799,8701575,2427802,4075832,10769345,2819123,6200301,10374072,6409741];
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
