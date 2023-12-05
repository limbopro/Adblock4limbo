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

// hun-0

const toImport = [[6912360,".ad__main"],[5194573,".adblokk"],[15488150,".cikk_reklam"],[16063140,".cikk-reklam"],[14708372,".cikkreklam"],[9451088,".google_hirdetes"],[4954883,".google_hirdetesek"],[10846690,".google-hirdetes"],[2185521,".google-hirdetesek"],[8121566,".googlehirdetes"],[1300709,".googlehirdetesek"],[16566664,".hirdetes_box"],[3837900,".hirdetes_container,.hirdetes-container"],[5694245,".hirdetes_doboz"],[16570490,".hirdetes-box"],[5685143,".hirdetes-doboz"],[670559,".hirdetes-linkek"],[5757423,".hirdetesek_box"],[5007955,".hirdetesek_container,.hirdetesek-container"],[9335614,".hirdetesek_doboz"],[5761117,".hirdetesek-box"],[9418508,".hirdetesek-doboz"],[3613773,".optimonk-container"],[15118857,".optimonk-iframe-container"],[8171164,".optimonk-middle"],[1976567,".reklam-doboz"],[14216606,".reklamok"],[9739776,"#adblokk"],[12365368,"#cemp_doboz"],[13444132,"#cenmg"],[16470203,"#cikk_reklam"],[12445257,"#cikk-reklam"],[12321113,"#cikkreklam"],[4057168,"#etarget"],[7479229,"#google_hirdetes"],[6598190,"#google_hirdetesek"],[6155279,"#google-hirdetes"],[8420316,"#google-hirdetesek"],[7850899,"#googlehirdetes"],[12424072,"#googlehirdetesek"],[6613669,"#hirdetes_box"],[9131425,"#hirdetes_container,#hirdetes-container"],[15165544,"#hirdetes_doboz"],[11322624,"#hirdetes_linkek"],[6617239,"#hirdetes-box"],[15147994,"#hirdetes-doboz"],[8312498,"#hirdetes-linkek"],[15214306,"#hirdetesek_box"],[3502494,"#hirdetesek_container,#hirdetesek-container"],[4531411,"#hirdetesek_doboz"],[15211536,"#hirdetesek-box"],[4409569,"#hirdetesek-doboz"],[4682257,"#optimonk-iframe-container-campaign-12"],[5975729,"#optimonk-overlay-campaign-12"],[7216538,"#reklam-doboz"],[2385779,"#reklamok"]];

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
