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

// vie-1

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[3724,"#_AM_POPUP_FRAME"],[3652,"#ads-preload"],[3362,"#banner-top"],[2395,"#mobileCatfish"],[2312,"#pmadv"],[3717,".aanetwork-ads-box"],[818,".ad_location"],[2947,".adsbygoogle[data-ad-slot]"],[2340,".banner-ads"],[2236,".close-ads"],[1651,".float-ck"],[3254,".google-auto-placed"],[3243,".jw-cue"],[1232,".midroll-marker"],[1831,".quangcao"],[1116,".right-box.top-block"],[794,".samBannerUnit"],[2052,".tpm-unit"],[1758,".qc"],[2705,".banner-bottom"]];
const genericExceptionSieve = [1758,2705,3525,2695,2947,779,1160,3403,3050,2711,1576,2396,1645,3676,1363];
const genericExceptionMap = [["livescore.com",".qc"],["msn.com",".qc"],["dm.de",".qc"],["medium.com",".qc"],["vnexpress.net",".banner-bottom"],["gicovietnam.blogspot.com",".inline-ad"],["hhkungfu.vip",".banner-ad"],["ios.codevn.net","ins.adsbygoogle[data-ad-slot]"],["ipacrack.com","ins.adsbygoogle[data-ad-slot]"],["nhipcaudautu.vn",".ads_top"],["phongroblox.com","#horizontal-ad\n.blogAd"],["pops.vn","#adsContainer"],["thanhnien.vn",".imageads"],["timvanban.vn","#ad-slot"],["tratu.soha.vn",".adheader"],["vn2.vn",".advertiser"],["vndoc.com",".showads"],["sayhentaii.art",".c-ads"]];

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
