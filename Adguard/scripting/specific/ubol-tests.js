/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["","#ccf1 .fail","#ccf2 .fail:not(.a4)","#ccf4 .fail-pseudo::before","#pcf1 .fail:has(b)","#pcf2 .fail:has(> a > b)","#pcf3 .fail:has(+ a > b)","#pcf5 .fail:has(:is(.pass a > b))","#pcf6 .fail:not(:has(c))","#pcf16 .pass > a:has(b) + .fail","#pcf17 .pass > a:has(b) + .fail:has(b)","#pcf19 .fail:has(+ a)","#ef #gcf2 .fail"];
const argsSeqs = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9,-10,11,12];
const hostnamesMap = new Map([["ublockorigin.github.io",1],["localhost",1],["~ublockorigin.github.io",12],["~localhost",12]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
