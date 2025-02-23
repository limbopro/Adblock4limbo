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

// ruleset: badware

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".entry-content > div > strong\",\"tasks\":[[\"has-text\",\"find & fix Windows error\"]]}"],["{\"selector\":\".attention-button-wrap\",\"tasks\":[[\"has-text\",\"Reimage\"]]}","{\"selector\":\".nfc-bottom-right\",\"tasks\":[[\"has-text\",\"Reimage\"]]}","{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Reimage\"]]}","{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"SpyHunter\"]]}","{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"/^Detection$/\"],[\"spath\",\" + td\"]]}","{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"/^Detection$/\"]]}"],["{\"selector\":\"#alt_content_main_div > p\",\"tasks\":[[\"has-text\",\"SpyHunter\"]]}","{\"selector\":\".entry-content > div\",\"tasks\":[[\"has-text\",\"Special Offer\"]]}"]];

const hostnamesMap = new Map([["thewindowsclub.com",0],["2-spyware.com",1],["novirus.uk",1],["faravirus.ro",1],["uirusu.jp",1],["virusi.hr",1],["wubingdu.cn",1],["avirus.hu",1],["ioys.gr",1],["odstranitvirus.cz",1],["tanpavirus.web.id",1],["utanvirus.se",1],["virukset.fi",1],["losvirus.es",1],["virusler.info.tr",1],["semvirus.pt",1],["lesvirus.fr",1],["senzavirus.it",1],["dieviren.de",1],["viruset.no",1],["usunwirusa.pl",1],["zondervirus.nl",1],["bedynet.ru",1],["virusai.lt",1],["virusi.bg",1],["viirused.ee",1],["udenvirus.dk",1],["howtoremove.guide",2]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
