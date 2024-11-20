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

// ruleset: rus-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать больше/\"]]}","{\"selector\":\"html[style] > body a.rounded[href][target=\\\"_blank\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has-text\",\"/^Узнать /\"]]}","{\"selector\":\"html[style] [id] div[class]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> h2 ~ script\",\"tasks\":[[\"has-text\",\"/return/\"]]}]]}"],["{\"selector\":\"script\",\"tasks\":[[\"has-text\",\"getPrefixes\"]]}"],["{\"selector\":\"[aria-label*=\\\"Лент\\\"] article\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div\",\"tasks\":[[\"matches-css\",{\"name\":\"display\",\"value\":\"^none$\"}]]}]]}"],["{\"selector\":\".content__right div\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}","{\"selector\":\"[id][aria-label] > [class*=\\\"_card\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"> div > button\",\"tasks\":[[\"matches-attr\",{\"attr\":\"/[a-z0-9]/\",\"value\":\"/advertiser/\"}]]}]]}"],["{\"selector\":\".touch-feed > div > .feed-item[id^=\\\"zen-row-\\\"]\",\"action\":[\"style\",\"display: none !important\"],\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"zen-ui-channel-info\\\"][class$=\\\"subtitle-text\\\"]\",\"tasks\":[[\"has-text\",\"промо\"]]}]]}"],["{\"selector\":\".mail-Page-Body .Popup2 > .Tooltip-Content\",\"tasks\":[[\"has-text\",\"2001—2024\"]]}"],["{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"],[\"spath\",\" + div\"]]}","{\"selector\":\".sidebar > .menu-wrap > .menu-head\",\"tasks\":[[\"has-text\",\"Счетчики\"]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .block-title\",\"tasks\":[[\"has-text\",\"Счётчики\"]]}]]}"],["{\"selector\":\".heading\",\"tasks\":[[\"has-text\",\"Рекомендуем ещё\"]]}"]];

const hostnamesMap = new Map([["gazeta.ru",1],["hdreactor.club",6],["hdreactor.su",6],["freehd.com.ua",6],["uniongang.net",7],["uniongang.org",7],["ferra.ru",8],["letidor.ru",8],["moslenta.ru",8],["motor.ru",8],["passion.ru",8],["quto.ru",8],["wmj.ru",8]]);

const entitiesMap = new Map([["4pda",0],["www.afisha",1],["avtorambler",1],["championat",1],["eda",1],["lenta",1],["letidor",1],["moslenta",1],["motor",1],["passion",1],["quto",1],["rambler",1],["wmj",1],["dzen",2],["ya",3],["yandex",[3,4]],["mail.yandex",5]]);

const exceptionsMap = new Map([["id.rambler.ru",[1]],["quiz.rambler.ru",[1]],["vp.rambler.ru",[1]]]);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
