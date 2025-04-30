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

// ruleset: ublock-badware

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["",["{\"selector\":\".entry-content > div > strong\",\"tasks\":[[\"has-text\",\"find & fix Windows error\"]]}"],["{\"selector\":\".attention-button-wrap\",\"tasks\":[[\"has-text\",\"Reimage\"]]}","{\"selector\":\".nfc-bottom-right\",\"tasks\":[[\"has-text\",\"Reimage\"]]}","{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Reimage\"]]}","{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"SpyHunter\"]]}","{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"/^Detection$/\"],[\"spath\",\" + td\"]]}","{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"/^Detection$/\"]]}"],["{\"selector\":\"#alt_content_main_div > p\",\"tasks\":[[\"has-text\",\"SpyHunter\"]]}","{\"selector\":\".entry-content > div\",\"tasks\":[[\"has-text\",\"Special Offer\"]]}"]];
const argsSeqs = [0,1,2,3];
const hostnamesMap = new Map([["thewindowsclub.com",1],["2-spyware.com",2],["novirus.uk",2],["faravirus.ro",2],["uirusu.jp",2],["virusi.hr",2],["wubingdu.cn",2],["avirus.hu",2],["ioys.gr",2],["odstranitvirus.cz",2],["tanpavirus.web.id",2],["utanvirus.se",2],["virukset.fi",2],["losvirus.es",2],["virusler.info.tr",2],["semvirus.pt",2],["lesvirus.fr",2],["senzavirus.it",2],["dieviren.de",2],["viruset.no",2],["usunwirusa.pl",2],["zondervirus.nl",2],["bedynet.ru",2],["virusai.lt",2],["virusi.bg",2],["viirused.ee",2],["udenvirus.dk",2],["howtoremove.guide",3]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
