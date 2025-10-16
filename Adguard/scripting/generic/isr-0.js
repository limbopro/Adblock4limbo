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

const genericSelectorMap = [[2943,"#HiddenMovie > [src^=\"http://www.youtube.com\"] + #video-blocker"],[1983,".entry > .entry-inner > .wpvl.wpvl-youtube.ng-scope.size-l"],[3031,".wpvl.wpvl-dailymotion > .fblogin.lockoverlay.ng-scope,\n.wpvl.wpvl-youtube.ng-scope.size-xl > .ng-scope + .fblogin.lockoverlay.ng-scope,\n.wpvl.wpvl-youtube.ng-scope.size-xxl > [ng-show=\"!blocked\"] + * + .ng-scope + .fblogin.lockoverlay.ng-scope"],[727,"#bthn"]];
const genericExceptionSieve = [2401,3857,428,3567,916,2535,2248,2919,2952,2503,2357,298,914,2289,2891,3000,2416,162,2690,3891];
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
