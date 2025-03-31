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

// ruleset: rus-1

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["",["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .block-title\",\"tasks\":[[\"has-text\",\"Счётчики\"]]}]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has-text\",\"Рекомендуем ещё\"]]}"],["{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"],[\"spath\",\" + div\"]]}","{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"getPrefixes\"]]}"],["{\"selector\":\"a[href*=\\\":2053\\\"]\",\"action\":[\"remove-class\",\"btn\"]}"],["{\"selector\":\"\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"matches-path\",\"articles\"],[\"spath\",\" div[id]:has(> article[id])\"]]}","{\"selector\":\"[aria-label*=\\\"Лент\\\"] article\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}","{\"selector\":\"div\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/media-banner/\"}]]}"],["{\"selector\":\".mail-Page-Body .Popup2 > .Tooltip-Content\",\"tasks\":[[\"has-text\",\"2001—202\"]]}"],["{\"selector\":\".content__right div\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}","{\"selector\":\"[id][aria-label] > [class]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}"],["{\"selector\":\"#search-result > [class*=\\\"__card\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > span\",\"tasks\":[[\"has-text\",\"Реклама\"]]}]]}"],["{\"selector\":\".touch-feed > div > .feed-item[id^=\\\"zen-row-\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"zen-ui-channel-info\\\"][class$=\\\"subtitle-text\\\"]\",\"tasks\":[[\"has-text\",\"промо\"]]}]]}"],["{\"selector\":\"a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать больше/\"]]}","{\"selector\":\"html[style] > body a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать /\"]]}","{\"selector\":\"html[style] [id] div[class]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> h2 ~ script\",\"tasks\":[[\"has-text\",\"/return/\"]]}]]}"]];
const argsSeqs = [0,1,2,3,4,5,6,7,-8,9,-8,10,11];
const hostnamesMap = new Map([["uniongang.net",1],["uniongang.org",1],["ferra.ru",2],["letidor.ru",2],["moslenta.ru",2],["motor.ru",2],["passion.ru",2],["quto.ru",2],["wmj.ru",2],["freehd.com.ua",3],["hdreactor.club",3],["hdreactor.su",3],["avtorambler.*",4],["championat.*",4],["eda.*",4],["gazeta.ru",4],["lenta.*",4],["letidor.*",4],["moslenta.*",4],["motor.*",4],["passion.*",4],["quto.*",4],["rambler.*",4],["wmj.*",4],["www.afisha.*",4],["~id.rambler.ru",4],["~quiz.rambler.ru",4],["~vp.rambler.ru",4],["~online-fix.*",5],["dzen.*",6],["mail.yandex.*",7],["ya.*",8],["yandex.*",10],["4pda.*",12]]);
const hasEntities = true;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
