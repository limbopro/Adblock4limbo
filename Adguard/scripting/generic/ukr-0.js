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

// ukr-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[15487892,"#ad_top"],[15446900,"#ad_Top"],[5093236,"#AD_Top"],[11429022,"#ad-300"],[12944704,"#ad-lead"],[11127759,"#homead"],[11128751,"#homeAd"],[2236478,"#td-ad-placeholder"],[13656179,".ad-300"],[16531403,".ads-content"],[580058,".ads-header"],[12396141,".ads300"],[9945729,".advert-container"],[12230588,".advert-text"],[2629479,".advtext"],[3711815,".advText"],[612309,".adx_center"],[3078332,".bannerAds"],[7603329,".bannerAside"],[11827429,".headad"],[11826181,".headAd"],[10589953,".header-adv"],[12028152,".newspack_global_ad"],[11868393,".nts-ad"],[16300881,".nts-video-wrapper"],[7609832,".side_ad"],[15262332,".site-header__ads"],[751037,".td-a-ad"],[5819991,".td-a-rec-id-custom_ad_1,\n.td-a-rec-id-custom_ad_2,\n.td-a-rec-id-custom_ad_3,\n.td-a-rec-id-custom_ad_4,\n.td-a-rec-id-custom_ad_5"],[674161,".td-ad-m"],[674156,".td-ad-p"],[2899287,".td-ad-tp"],[4957373,".td-adspot-title"],[16153475,"ins.adsbygoogle[data-ad-client],\nins.adsbygoogle[data-ad-slot]"]];
const genericExceptionSieve = undefined;
const genericExceptionMap = undefined;

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
