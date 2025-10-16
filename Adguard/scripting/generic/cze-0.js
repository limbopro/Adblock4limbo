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

// cze-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[1275,"#ad_popup"],[2075,"#adRectangle"],[2912,"#onlajny-stickers"],[2432,"#promo-box"],[3426,"#reklama-etarget"],[2331,"#reklamni-box"],[3553,"#reklamy"],[3312,"#sklik"],[2571,"#slevomat_ad"],[371,"#topbanner"],[683,"#zivefirmy"],[337,".adform-adbox"],[2113,".bx-leaderboard"],[1436,".cnc-ads"],[3869,".etarget"],[503,".hp-advert"],[261,".jobscz"],[2965,".lsads-banner"],[2178,".nativead"],[376,".ownad"],[2336,".perex-adblock-warning"],[188,".r-main"],[2029,".reklama-3"],[256,".reklama-bottom"],[2118,".reklama-box"],[2513,".reklama-left"],[3140,".reklama-lista"],[3093,".reklama-megaboard"],[1115,".reklama-right"],[1304,".reklama-top"],[4012,".reklamaBottom"],[2538,".reklamaHorniLista"],[3290,".reklama_ahead"],[1517,".reklama_square"],[1202,".rklm"],[3069,".sklik"],[471,".sklik-block"],[2409,".sklik-box"],[2330,".sklik_left"],[3280,".sklik_right"],[2436,".topreklama"],[2093,".vreklama"]];
const genericExceptionSieve = [615,2118,188,2548,1175,1202,1071,519,2711,4033,1565];
const genericExceptionMap = [["denik.cz",".ads-box\n.reklama-box"],["hyundai.com",".r-main"],["jaguar-club.net",".reklama"],["mazdaclub.cz",".reklama"],["nissanclub.cz",".reklama"],["novinky.cz",".g_ad"],["www.parabola.cz",".rklm"],["skrblik.cz","#adsense"],["sluzebnik.cz","#adverts"],["aktuality.sk",".adBanner"],["dobre-recepty.sk","#ad_skin"],["vranovske.sk",".advertising-content"]];

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
