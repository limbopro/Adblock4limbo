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

const genericSelectorMap = [[4850939,"#ad_popup"],[190491,"#adRectangle"],[11594592,"#onlajny-stickers"],[3287424,"#promo-box"],[6638946,"#reklama-etarget"],[7145755,"#reklamni-box"],[14958049,"#reklamy"],[15973616,"#sklik"],[14449163,"#slevomat_ad"],[7561587,"#topbanner"],[12677803,"#zivefirmy"],[5222737,".adform-adbox"],[538689,".bx-leaderboard"],[9377180,".cnc-ads"],[15666973,".etarget"],[16343543,".hp-advert"],[8253701,".jobscz"],[9296789,".lsads-banner"],[10025090,".nativead"],[5251448,".ownad"],[1583392,".perex-adblock-warning"],[16756924,".r-main"],[5167085,".reklama-3"],[15630592,".reklama-bottom"],[1845318,".reklama-box"],[2054609,".reklama-left"],[6048836,".reklama-lista"],[10656789,".reklama-megaboard"],[6038619,".reklama-right"],[1844504,".reklama-top"],[6049708,".reklamaBottom"],[10676714,".reklamaHorniLista"],[6061274,".reklama_ahead"],[15615469,".reklama_square"],[1938610,".rklm"],[11480061,".sklik"],[6017495,".sklik-block"],[6170985,".sklik-box"],[16632090,".sklik_left"],[5999824,".sklik_right"],[14526852,".topreklama"],[5302317,".vreklama"]];
const genericExceptionSieve = [8454759,1845318,16756924,8567284,1512599,1938610,12747823,15864327,449175,7380929,12211741];
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
