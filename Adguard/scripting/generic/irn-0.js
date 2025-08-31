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

const genericSelectorMap = [[4298988,".zxc,\n.zxc"],[687178,".zxc-m"],[11918799,".zxc-stik"],[5194391,".zxc_home"],[5255191,".zxc_news"],[5323427,".zxc_left"],[14353422,".zxc_matni"],[10341886,".zxc-mobile"],[7765280,".zxc-header-zxc"],[7634644,".zxc-visible-fixed"],[13791830,".zxc-padding-custom,\n.zxc-padding-custom"],[15329921,".main-zxc"],[15974757,".home-zxc"],[956828,".top_zxc"],[14368092,".zxc_top"],[5820437,".side_txt_zxc"],[5035099,"#kaprila_linktable"]];
const genericExceptionSieve = [16531403,2133585,3673662,11780787,564335,13475465,13571670,3030744,7307632,12543662,8447737,14248586,6269984,890817,12231375,2086901,12318293,7260091,11377293,5980258,1427608,1012267,9504134,1788726,3573047,3103712,11019541,2579323,5295994,2219192];
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
