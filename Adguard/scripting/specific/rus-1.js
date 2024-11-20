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

/* jshint esversion:11 */

'use strict';

// ruleset: rus-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["a[href*=\"rambler.ru/top100/\"],\na[href*=\"top100.rambler.ru/\"]","a[href=\"http://vtambove.ru/advert/banner_network/\"]","#js-mail-layout-content-header > .message-list-banner-portal + div[id]:empty","article div:has(> div > [id^=\"rcmw-container-\"]),\ncircle[stroke-dashoffset],\nsection > nav ~ div div:has(> div > [id^=\"rcmw-container-\"])",".contbaner",".ad_title > a,\ndiv[id^=\"leaderboard_ad\"] > *","img[alt=\"liru\"]",".revolvermaps,\nfooter > .counter","#page_footer > .copyright > center:first-child","#side_right > .block_r:has(> div [href*=\"liveinternet.ru/\"])",".bcounts",".region-sidebar-first > .block:has(> .content > [href*=\"metrika\"])","#p-counters",".counters",".copyright ~ .copyright","#picContainer > img",".c-liveinternet",".ph-logo_doodle[href^=\"https://universal-link.mail.ru/\"]","._3S8wP > div:first-child + div,\n.disableAdvButton__container",".sibnet-footer__counters",".bc > .il:last-child > .bp",".b-footer__counters","[class^=\"Footer_liveinternet\"]",".footer [id]:has(> b)","#banner_counters",".bbanerr","img[width=\"1\"][height=\"1\"]","#bigmirTop,\n.liveinternet",".main > #footer ~ table"];

const hostnamesMap = new Map([["*",[0,1]],["avtorambler.com",3],["rambler.ru",[3,18]],["yakusubstudio.home-forum.com",4],["yakusubstudio.ru",4],["inoreader.com",5],["otzovik.com",6],["radioprofusion.com",7],["rustorka.com",8],["rustorkacom.lib",8],["rustorka.net",8],["game4you.top",8],["games-pc.top",8],["rustorka.top",8],["happy-hack.net",9],["ingrus.net",10],["istmat.org",11],["lurkmo.re",12],["lurkmore.to",12],["24warez.ru",13],["ngnovoros.ru",13],["ngzt.ru",13],["progorod59.ru",13],["progorodchelny.ru",13],["progorodnsk.ru",13],["progorodsamara.ru",13],["prokazan.ru",13],["80-e.ru",14],["fastpic.ru",15],["kanobu.ru",16],["mail.ru",17],["sibnet.ru",19],["www.sibnet.ru",20],["svpressa.ru",21],["tass.ru",22],["virtualbrest.ru",23],["sfw.so",24],["militaryreview.su",25],["lostfilm.tv",26],["lostfilm.tw",26],["sinoptik.ua",27],["samlab.ws",28]]);

const entitiesMap = new Map([["mail.yandex",2]]);

const exceptionsMap = new Map([["rambler.ru",[0]],["vtambove.ru",[1]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
