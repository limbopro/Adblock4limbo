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

const genericSelectorMap = [[1774173,".ad_wrapper"],[10330050,"._popIn_recommend_article_ad"],[13642955,"#admaru"],[4542809,".revenue_unit_item.tenping,\n.revenue_unit_item.dable,\n.revenue_unit_item.adfit"],[327848,"ins.viewus-ad"],[3683313,"#livereAdWrapper"],[186570,"ins.fastview-ad"],[2201688,"ins.adsbyadop"],[16153475,"ins.adsbygoogle[data-ad-slot]"],[15922369,"ins.kakao_ad_area"]];
const genericExceptionSieve = [13780187,5166332,12770675,14628789,11556003,7384902,11912639,16595424,15709017,15922369,10694580,3078517,12498410,16153475,7893809,5093236,12944704,11127759,13564856,4285051,9186503,140534,4825255,3429551,3436644,4776229];
const genericExceptionMap = [["grip.show",".top-banners"],["blackdesertm.com",".left_bnr"],["novelpia.com",".sponsor-btns\n#sponsorTab"],["mimacstudy.com",".adinfo"],["displayad.naver.com",".ad_item"],["te31.com","#gallery-advert"],["x86.co.kr",".download_ad"],["kakaotv.daum.net","#adContainer\nins.kakao_ad_area\n#adBlockPixelTag\n.banner_ad"],["play-tv.kakao.com","#adContainer\nins.kakao_ad_area\n#adBlockPixelTag\n.banner_ad"],["tv.kakao.com","#adContainer\nins.kakao_ad_area\n#adBlockPixelTag\n.banner_ad"],["meeco.kr",".googleAd"],["remiz.co.kr",".googleAd\nins.adsbygoogle[data-ad-slot]\n#googleAd"],["aagag.com","ins.adsbygoogle[data-ad-slot]"],["t.hi098123.com","ins.adsbygoogle[data-ad-slot]"],["uda1004.tistory.com","ins.adsbygoogle[data-ad-slot]\nins.adsbygoogle[data-ad-slot]"],["exey.io","ins.adsbygoogle[data-ad-slot]"],["ff14angler.com","ins.adsbygoogle[data-ad-slot]"],["play.aidungeon.io","ins.adsbygoogle[data-ad-slot]"],["tamrieltradecentre.com","ins.adsbygoogle[data-ad-slot]"],["downloads.descendant.me","ins.adsbygoogle[data-ad-slot]"],["html5.gamedistribution.com","ins.adsbygoogle[data-ad-slot]"],["paraphraser.io","ins.adsbygoogle[data-ad-slot]"],["sekai-kabuka.com","ins.adsbygoogle[data-ad-slot]"],["teemo.gg","ins.adsbygoogle[data-ad-slot]"],["xtremestream.co","ins.adsbygoogle[data-ad-slot]"],["tabriz.kr","#AdHeader\n#AD_Top\n#ad-lead\n#homead"],["avdbs.com",".ad-btn"],["bera.world",".ads\n#google_ads"],["sellas.ink",".ads\n#google_ads"],["1412.live",".ads\n#google_ads"],["somenotes247.blogspot.com",".vertical-ads"],["mnews.jtbc.co.kr",".ad_bottom"],["clien.net",".ad_banner"],["persnacons.tistory.com",".topAD"]];

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
