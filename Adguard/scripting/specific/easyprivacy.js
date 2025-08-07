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

// ruleset: easyprivacy

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["","#right-aside-wrapper"];
const argsSeqs = [0,1];
const hostnamesMap = new Map([["birminghammail.co.uk",1],["bristolpost.co.uk",1],["dailyrecord.co.uk",1],["irishstar.com",1],["liverpoolecho.co.uk",1],["manchestereveningnews.co.uk",1],["stokesentinel.co.uk",1],["walesonline.co.uk",1]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
