/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#CookieWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#ask-consent\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".gb_g\",\"tasks\":[[\"has-text\",\"cookie\"]]}"],["{\"selector\":\"#moduleCookies\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".hasParental.cookies-modal\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"dialog\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"display: block !important\"],\"tasks\":[[\"has\",{\"selector\":\".article-body p\",\"tasks\":[[\"has-text\",\"Sisältöä ei voitu ladata.Tämä voi johtua selainlaajennuksesta.\"]]}],[\"spath\",\" > .alma-cmpv2-container\"]]}"]];

const hostnamesMap = new Map([["schwarzenbacher-kundl.at",0],["e-comas.com",1],["play.google.com",2],["topographic-map.com",3],["xhamster.com",4],["xhamster2.com",4],["xhamster3.com",4],["xhamster18.desi",4],["computerbase.de",5],["arvopaperi.fi",6],["www.kauppalehti.fi",6],["mediuutiset.fi",6],["mikrobitti.fi",6],["talouselama.fi",6],["tekniikkatalous.fi",6],["tivi.fi",6],["www.uusisuomi.fi",6]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
