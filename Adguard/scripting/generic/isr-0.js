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

// isr-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[9997183,"#HiddenMovie > [src^=\"http://www.youtube.com\"] + #video-blocker"],[11548607,".entry > .entry-inner > .wpvl.wpvl-youtube.ng-scope.size-l"],[2034647,".wpvl.wpvl-dailymotion > .fblogin.lockoverlay.ng-scope,\n.wpvl.wpvl-youtube.ng-scope.size-xl > .ng-scope + .fblogin.lockoverlay.ng-scope,\n.wpvl.wpvl-youtube.ng-scope.size-xxl > [ng-show=\"!blocked\"] + * + .ng-scope + .fblogin.lockoverlay.ng-scope"]];
const genericExceptionSieve = [12941665,2952977,8794540,11378159,7308180,678375,15808712,16530279,9059208,1419719,16120117,16089386,1500050,12736753,12266315,10374072,15628656,2429090,4065922,15458099];
const genericExceptionMap = [["ad.co.il",".ad-link"],["adi.gov.il",".small-ad"],["bipbip.co.il","#printads\n.adlist\n.adpic"],["blms.co.il",".addtitle"],["c14.co.il","#taboola-below-article-thumbnails\n.share-zone"],["now14.co.il","#taboola-below-article-thumbnails\n.share-zone"],["callil.co.il","#AdTop"],["holmesplace.co.il",".image-advertisement"],["homeless.co.il",".postad"],["investing.com","#findABroker\n.generalOverlay"],["junkyard.co.il",".ad-body"],["kikar.co.il",".adunit"],["lavender.co.il","#topAds"],["leyada.net",".banner-300"],["pitria.com",".header-ad"],["ynet.co.il",".adclass\n.shareBtn"]];

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
