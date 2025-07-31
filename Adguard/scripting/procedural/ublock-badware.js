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

const argsList = ["[]","[{\"selector\":\"main::before\",\"action\":[\"style\",\"content: 'uBlock is unrelated to the well-known uBlock Origin.' !important; font-size: 32px !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true}]","[{\"selector\":\"div.hero-unit > div.search-box--hero-unit::before\",\"action\":[\"style\",\"content: 'uBlock is unrelated to the well-known uBlock Origin.' !important; font-size: var(--font-size-h2) !important; color: red !important; font-weight: bold !important;\"],\"cssable\":true}]","[{\"selector\":\".entry-content > div > strong\",\"tasks\":[[\"has-text\",\"find & fix Windows error\"]]}]","[{\"selector\":\".attention-button-wrap\",\"tasks\":[[\"has-text\",\"Reimage\"]]},{\"selector\":\".nfc-bottom-right\",\"tasks\":[[\"has-text\",\"Reimage\"]]},{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"Reimage\"]]},{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"SpyHunter\"]]},{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"/^Detection$/\"],[\"spath\",\" + td\"]]},{\"selector\":\"th\",\"tasks\":[[\"has-text\",\"/^Detection$/\"]]}]","[{\"selector\":\"#alt_content_main_div > p\",\"tasks\":[[\"has-text\",\"SpyHunter\"]]},{\"selector\":\".entry-content > div\",\"tasks\":[[\"has-text\",\"Special Offer\"]]}]"];
const argsSeqs = [0,1,2,3,4,5];
const hostnamesMap = new Map([["ublock.org",1],["~support.ublock.org",1],["support.ublock.org",2],["thewindowsclub.com",3],["2-spyware.com",4],["novirus.uk",4],["faravirus.ro",4],["uirusu.jp",4],["virusi.hr",4],["wubingdu.cn",4],["avirus.hu",4],["odstranitvirus.cz",4],["tanpavirus.web.id",4],["utanvirus.se",4],["virukset.fi",4],["losvirus.es",4],["virusler.info.tr",4],["semvirus.pt",4],["lesvirus.fr",4],["senzavirus.it",4],["dieviren.de",4],["viruset.no",4],["usunwirusa.pl",4],["zondervirus.nl",4],["bedynet.ru",4],["virusai.lt",4],["virusi.bg",4],["viirused.ee",4],["udenvirus.dk",4],["howtoremove.guide",5]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
