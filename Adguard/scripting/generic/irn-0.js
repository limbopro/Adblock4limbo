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

// irn-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[2284,".zxc,\n.zxc"],[3146,".zxc-m"],[3535,".zxc-stik"],[663,".zxc_home"],[23,".zxc_news"],[2723,".zxc_left"],[1038,".zxc_matni"],[3582,".zxc-mobile"],[3360,".zxc-header-zxc"],[3796,".zxc-visible-fixed"],[598,".zxc-padding-custom,\n.zxc-padding-custom"],[2689,".main-zxc"],[357,".home-zxc"],[2460,".top_zxc"],[3420,".zxc_top"],[21,".side_txt_zxc"],[1115,"#kaprila_linktable"]];
const genericExceptionSieve = [4043,3665,3646,691,3183,3721,1622,3800,368,1710,1785,2698,3104,1985,719,2037,1621,1979,2701,98,2200,555,1414,2870,1335,3040,1301,2939,3962,3256];
const genericExceptionMap = [["cooldl.net",".ads-content"],["sakhtafzar.com",".ads-content\n.tz_ad300_widget"],["elmefarda.com","#head728\n#ad728\n#ad640a"],["estekhtam.com",".ads-bottom"],["footofan.com",".ad-custom-size\n.ad-cat"],["7ganj.ir",".herald-ad"],["gamesib.ir",".ads_2"],["gooyait.com",".page-ads"],["gadgetnews.net",".ads-top"],["honarehzendegi.com",".logo-ad"],["ifixit.ir",".advert-image\n.block-advert\n.advert-wrap"],["ilna.ir",".adv_title"],["javan-musics.com",".adstop"],["miniroid.com",".adBox"],["mybia4music.com",".adlink\n.adstext"],["netnevesht.com",".widget-ad"],["nicmusic.net",".boxads"],["ninisite.com",".footer__subscribe"],["plaza.ir",".ad__header"],["parsfootball.com",".navad"],["persianv.com",".ads-text"],["shahrebours.com",".box_ads"],["toranji.ir",".square-ad"],["wikisemnan.com",".ads-image"]];

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
