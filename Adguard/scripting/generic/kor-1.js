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

// kor-1

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[605,".ad_wrapper"],[4034,"._popIn_recommend_article_ad"],[3275,"#admaru"],[345,".revenue_unit_item.tenping,\n.revenue_unit_item.dable,\n.revenue_unit_item.adfit"],[168,"ins.viewus-ad"],[1009,"#livereAdWrapper"],[2250,"ins.fastview-ad"],[2136,"ins.adsbyadop"],[2947,"ins.adsbygoogle[data-ad-slot]"],[1217,"ins.kakao_ad_area"]];
const genericExceptionSieve = [1243,1276,3443,1973,1187,3910,1471,2528,857,1217,4020,2421,1514,2947,2289,1575,3775,817,1908,1344,3023,3000,635,3271,1270,167,1199,100,293];
const genericExceptionMap = [["grip.show",".top-banners"],["blackdesertm.com",".left_bnr"],["novelpia.com",".sponsor-btns\n#sponsorTab"],["mimacstudy.com",".adinfo"],["displayad.naver.com",".ad_item"],["te31.com","#gallery-advert"],["x86.co.kr",".download_ad"],["kakaotv.daum.net","#adContainer\nins.kakao_ad_area\n#adBlockPixelTag\n.banner_ad"],["play-tv.kakao.com","#adContainer\nins.kakao_ad_area\n#adBlockPixelTag\n.banner_ad"],["tv.kakao.com","#adContainer\nins.kakao_ad_area\n#adBlockPixelTag\n.banner_ad"],["meeco.kr",".googleAd"],["remiz.co.kr",".googleAd\nins.adsbygoogle[data-ad-slot]\n.ad-body\n#googleAd"],["aagag.com","ins.adsbygoogle[data-ad-slot]"],["t.hi098123.com","ins.adsbygoogle[data-ad-slot]"],["uda1004.tistory.com","ins.adsbygoogle[data-ad-slot]\nins.adsbygoogle[data-ad-slot]"],["exey.io","ins.adsbygoogle[data-ad-slot]"],["ff14angler.com","ins.adsbygoogle[data-ad-slot]"],["play.aidungeon.io","ins.adsbygoogle[data-ad-slot]"],["tamrieltradecentre.com","ins.adsbygoogle[data-ad-slot]"],["downloads.descendant.me","ins.adsbygoogle[data-ad-slot]"],["html5.gamedistribution.com","ins.adsbygoogle[data-ad-slot]"],["paraphraser.io","ins.adsbygoogle[data-ad-slot]"],["sekai-kabuka.com","ins.adsbygoogle[data-ad-slot]"],["teemo.gg","ins.adsbygoogle[data-ad-slot]"],["xtremestream.co","ins.adsbygoogle[data-ad-slot]"],["vod.jtbc.co.kr",".ad-unit:not(.textads)\n.ad-zone:not(.textads)"],["tabriz.kr","#AdHeader\n#AD_Top\n#ad-lead\n#homead"],["avdbs.com",".ad-btn"],["bera.world",".ads\n#google_ads"],["sellas.ink",".ads\n#google_ads"],["1412.live",".ads\n#google_ads"],["somenotes247.blogspot.com",".vertical-ads"],["mnews.jtbc.co.kr",".ad_bottom"],["clien.net",".ad_banner"],["persnacons.tistory.com",".topAD"]];

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
