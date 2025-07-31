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

// ruleset: ubol-tests

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\"#ccf3 .fail\",\"action\":[\"style\",\"visibility: hidden\"],\"cssable\":true},{\"selector\":\"#ccf5 .fail-pseudo::before\",\"action\":[\"style\",\"visibility: hidden\"],\"cssable\":true},{\"selector\":\"#pcf10 .fail\",\"tasks\":[[\"matches-css\",{\"name\":\"position\",\"value\":\"^absolute$\"}]]},{\"selector\":\"#pcf11 .fail\",\"tasks\":[[\"has\",{\"selector\":\"a\",\"tasks\":[[\"matches-css-before\",{\"name\":\"opacity\",\"pseudo\":\"before\",\"value\":\"^0$\"}]]}]]},{\"selector\":\"#pcf12 .fail\",\"tasks\":[[\"has\",{\"selector\":\"b\",\"tasks\":[[\"matches-css-after\",{\"name\":\"opacity\",\"pseudo\":\"after\",\"value\":\"^0$\"}]]}]]},{\"selector\":\"#pcf13 .fail > a > b\",\"tasks\":[[\"upward\",2]]},{\"selector\":\"#pcf14\",\"tasks\":[[\"xpath\",\".//b/../..\"]]},{\"selector\":\"#pcf15 .fail\",\"tasks\":[[\"min-text-length\",300]]},{\"selector\":\"#pcf18 .pass\",\"tasks\":[[\"watch-attr\",[\"class\"]],[\"spath\",\" > .fail:has(b.notok)\"]]},{\"selector\":\"#pcf20 .fail\",\"tasks\":[[\"has\",{\"selector\":\"~ a:has(b)\"}]]},{\"selector\":\"#pcf21 .fail\",\"action\":[\"remove\",\"\"]},{\"selector\":\"#pcf22 b\",\"tasks\":[[\"upward\",2]]},{\"selector\":\"#pcf23 b\",\"tasks\":[[\"upward\",\".fail\"]]},{\"selector\":\"#pcf24 b\",\"action\":[\"style\",\"visibility: hidden !important\"],\"tasks\":[[\"upward\",\".fail\"]]},{\"selector\":\"#pcf7 .fail\",\"tasks\":[[\"has-text\",\"needle\"]]},{\"selector\":\"#pcf8 .fail\",\"tasks\":[[\"has-text\",\"/NEEDLE/i\"]]},{\"selector\":\"#pcf9 .fail\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"haystack\"]]}]]}]"];
const argsSeqs = [0,1];
const hostnamesMap = new Map([["ublockorigin.github.io",1],["localhost",1]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
