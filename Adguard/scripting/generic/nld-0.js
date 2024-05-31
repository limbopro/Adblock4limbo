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

/* jshint esversion:11 */

'use strict';

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// nld-0

const toImport = [[7428881,"#adBoven"],[3872821,"#adRechts"],[8560348,"#adRechts2"],[6486329,"#advertentie"],[16540680,".advertentie-2-container"],[15623700,".advertentie_226"],[4520496,".advertentie_links"],[10533452,".content-rechts-ad"],[6690507,".gamereel_featured-ad"],[9774073,".gesponsord_blokje"],[1341337,".gesponsord_blokje_wrap"],[7868731,".hoofdAd2"],[492903,".kwebler-ad-minimal"],[5850488,".massarius-dfp-unit"],[3167098,"#advertentieblokjeid"],[14621105,"#gesponsordelink"],[11298664,"#reclame2"],[14046077,"#reclame_rechts"],[4669158,"#reclamebanner"],[13462229,"#reclamediv"],[9618827,"#rightbanner_adbest"],[8764461,"#semilo-lrectangle"],[5653322,"#sidereclame"],[4972199,"#vipAdmarktBannerBlock"],[574524,".ads-mobiel"],[13107885,".adstekst"],[12287956,".advertentie"],[6188051,".advertenties"],[3458311,".advertorial_koersen_home_top"],[15467484,".ankeiler--advertisement"],[8206400,".aw_url_admarkt_bottom"],[2124065,".banner_advert6blok"],[9529652,".banner_advertentie_footer"],[14805874,".bericht_adv1"],[1596209,".bovenadvertentiediv"],[11424550,".category-advertentie"],[12342364,".gesponsordelink"],[8842488,".groei-ad"],[15968050,".justLease_ad"],[12472515,".mp-adsense-header-top"],[8412889,".ontwerp_ads"],[702968,".reclame"],[9348892,".reclameIndex"],[867230,".reclamekop"],[9348919,".reclamelogos"],[14368658,".sponsorbalk"]];

const genericSelectorMap = self.genericSelectorMap || new Map();

if ( genericSelectorMap.size === 0 ) {
    self.genericSelectorMap = new Map(toImport);
    return;
}

for ( const toImportEntry of toImport ) {
    const existing = genericSelectorMap.get(toImportEntry[0]);
    genericSelectorMap.set(
        toImportEntry[0],
        existing === undefined
            ? toImportEntry[1]
            : `${existing},${toImportEntry[1]}`
    );
}

self.genericSelectorMap = genericSelectorMap;

/******************************************************************************/

})();

/******************************************************************************/
