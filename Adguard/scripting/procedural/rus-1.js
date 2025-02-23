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

const argsList = [["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .block-title\",\"tasks\":[[\"has-text\",\"Счётчики\"]]}]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has-text\",\"Рекомендуем ещё\"]]}"],["{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"],[\"spath\",\" + div\"]]}","{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"getPrefixes\"]]}"],["{\"selector\":\"a[href*=\\\":2053\\\"]\",\"action\":[\"remove-class\",\"btn\"]}"],["{\"selector\":\"[aria-label*=\\\"Лент\\\"] article\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}"],["{\"selector\":\".mail-Page-Body .Popup2 > .Tooltip-Content\",\"tasks\":[[\"has-text\",\"2001—202\"]]}"],["{\"selector\":\".content__right div\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}","{\"selector\":\"[id][aria-label] > [class*=\\\"_card\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}"],["{\"selector\":\".touch-feed > div > .feed-item[id^=\\\"zen-row-\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"zen-ui-channel-info\\\"][class$=\\\"subtitle-text\\\"]\",\"tasks\":[[\"has-text\",\"промо\"]]}]]}"],["{\"selector\":\"a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать больше/\"]]}","{\"selector\":\"html[style] > body a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать /\"]]}","{\"selector\":\"html[style] [id] div[class]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> h2 ~ script\",\"tasks\":[[\"has-text\",\"/return/\"]]}]]}"]];

const hostnamesMap = new Map([["uniongang.net",0],["uniongang.org",0],["ferra.ru",1],["letidor.ru",1],["moslenta.ru",1],["motor.ru",1],["passion.ru",1],["quto.ru",1],["wmj.ru",1],["freehd.com.ua",2],["hdreactor.club",2],["hdreactor.su",2],["gazeta.ru",3],["id.rambler.ru",3],["quiz.rambler.ru",3],["vp.rambler.ru",3]]);

const entitiesMap = new Map([["avtorambler",3],["championat",3],["eda",3],["lenta",3],["letidor",3],["moslenta",3],["motor",3],["passion",3],["quto",3],["rambler",3],["wmj",3],["www.afisha",3],["dzen",5],["mail.yandex",6],["ya",7],["yandex",[7,8]],["4pda",9]]);

const exceptionsMap = new Map([["online-fix.*",[4]]]);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
