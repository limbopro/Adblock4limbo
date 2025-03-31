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

// fin-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[6474532,"#atwAdFrame"],[15062341,"#keskimainos"],[4838054,"#mainokset"],[6414565,"#mainokset_oikea"],[6423979,"#mainokset_vasen"],[13572634,"#mainokset_yla"],[5406194,"#mainos"],[12991397,"#mainosbanneri"],[13909958,"#mainosbannerit"],[15174472,"#mainoskaruselli"],[13982409,"#mainoslaatikko"],[522998,"#mainospaikka"],[1079866,"#mainostila"],[7243995,"#natiivit"],[2123407,"#parade-container"],[6512302,"#sponsori"],[4308675,"#sponsorit"],[6410891,"#yhteistyokaruselli"],[6410796,"#yhteistyokumppanit"],[4313955,"#yhteistyossa"],[2326646,"#ylamainokset"],[2023566,"#ylamainos"],[15963300,".adbox_content"],[14395122,".card--native"],[1051296,".dfpBoxBottom"],[191564,".dfpListNativeBanner"],[4961138,".diks-display-ad"],[14118062,".diks-native-ad"],[1072424,".keskimainos"],[6039851,".mainokset"],[12639368,".mainokset_oikea"],[12663750,".mainokset_vasen"],[4529623,".mainokset_yla"],[2872095,".mainos"],[3990312,".mainosbanneri"],[12078987,".mainosbannerit"],[1884709,".mainoskaruselli"],[11867140,".mainoslaatikko"],[13170588,".mainosnosto"],[15331355,".mainospaikka"],[4260023,".mainostila"],[1951427,".sponsori"],[6329486,".sponsorit"],[8266418,".tdt-desktop-ad"],[6517907,".tdt-manager-element"],[4923280,".tdt-minilanding-button"],[6619657,".tdt-mobile-ad"],[13658598,".yhteistyokaruselli"],[13658689,".yhteistyokumppanit"],[8899214,".yhteistyossa"],[7665307,".ylamainokset"],[13252419,".ylamainos"],[5409129,"div#commercial-carousel"]];
const genericExceptionSieve = [2026265,16153475,7954035,6039851,2872095,5406194,1647817,2616067,7105871];
const genericExceptionMap = [["hardware.fi",".top-ad-space"],["murha.info",".adsbygoogle"],["classic.nettiauto.com","#adv"],["www.nettiauto.com","#adv"],["hs.fi",".mainokset\n.mainos"],["sokos.fi",".mainokset"],["tilannehuone.fi",".mainos"],["pienimatkaopas.com","#mainos"],["netticaravan.fi","article.ad"],["www.seurakuntalainen.fi","#CookieBanner"],["srk.fi","#CookielawBanner"]];

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
