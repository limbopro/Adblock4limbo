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

const genericSelectorMap = [[1977996,"#_AM_POPUP_FRAME"],[3075652,"#ads-preload"],[11083042,"#banner-top"],[14424411,"#mobileCatfish"],[14727432,"#pmadv"],[4238981,".aanetwork-ads-box"],[15434546,".ad_location"],[16153475,".adsbygoogle[data-ad-slot]"],[15628580,".banner-ads"],[4159676,".close-ads"],[3942003,".float-ck"],[9624758,".google-auto-placed"],[3079339,".jw-cue"],[14738640,".midroll-marker"],[16672551,".quangcao"],[4723804,".right-box.top-block"],[4317978,".samBannerUnit"],[4954116,".tpm-unit"],[1648350,".qc"],[11090577,".banner-bottom"]];
const genericExceptionSieve = [1648350,11090577,10669509,3074695,16153475,4449035,14488712,15998283,2722794,4319895,14112296,14285148,2213262,370285,4116060,7038291];
const genericExceptionMap = [["livescore.com",".qc"],["msn.com",".qc"],["dm.de",".qc"],["medium.com",".qc"],["vnexpress.net",".banner-bottom"],["gicovietnam.blogspot.com",".inline-ad"],["hhkungfu.club",".banner-ad"],["ios.codevn.net","ins.adsbygoogle[data-ad-slot]"],["ipacrack.com","ins.adsbygoogle[data-ad-slot]"],["nhipcaudautu.vn",".ads_top"],["phongroblox.com","#horizontal-ad\n.blogAd"],["pops.vn","#adsContainer"],["thanhnien.vn",".imageads"],["timvanban.vn","#ad-slot"],["tratu.soha.vn",".adheader"],["truyenaudiocv.org",".ads-large"],["vn2.vn",".advertiser"],["vndoc.com",".showads"],["sayhentaii.art",".c-ads"]];

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
