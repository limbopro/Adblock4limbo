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

// ruleset: rus-1

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["._3S8wP > div:first-child + div,\n.disableAdvButton__container,\na[href*=\"rambler.ru/top100/\"],\na[href*=\"top100.rambler.ru/\"]","a[href=\"http://vtambove.ru/advert/banner_network/\"]","#banner_counters","#bigmirTop,\n.liveinternet","#p-counters","#page_footer > .copyright > center:first-child","#picContainer > img","#side_right > .block_r:has(> div [href*=\"liveinternet.ru/\"])",".ad_title",".ad_title > a,\ndiv[id^=\"leaderboard_ad\"] > *",".b-footer__counters",".bbanerr",".bc > .il:last-child > .bp",".bcounts",".c-liveinternet",".contbaner",".copyright ~ .copyright",".counters",".footer [id]:has(> b)",".main > #footer ~ table",".ph-logo_doodle[href^=\"https://universal-link.mail.ru/\"]",".region-sidebar-first > .block:has(> .content > [href*=\"metrika\"])",".revolvermaps,\nfooter > .counter",".sibnet-footer__counters","[aria-label=\"raichuLogoLink\"]","[class^=\"Footer_liveinternet\"]","article div:has(> div > [id^=\"rcmw-container-\"]),\ncircle[stroke-dashoffset],\nsection > nav ~ div div:has(> div > [id^=\"rcmw-container-\"])",".ImageGalleryFullscreenVertical__ad","img[alt=\"liru\"]","img[width=\"1\"][height=\"1\"]",".adbanner","[data-test-id^=\"ps-header-logo-\"] svg ~ svg","[data-test-id=\"ps-header-logo-free-badge-link\"]","#js-mail-layout-content-header > .message-list-banner-portal + div[id]:empty"];

const hostnamesMap = new Map([["rambler.ru",[0,26]],["vtambove.ru",1],["sfw.so",2],["sinoptik.ua",3],["lurkmo.re",4],["lurkmore.to",4],["game4you.top",5],["rustorka.com",5],["rustorka.net",5],["rustorka.top",5],["rustorkacom.lib",5],["fastpic.ru",6],["happy-hack.net",7],["inoreader.com",9],["svpressa.ru",10],["militaryreview.su",11],["www.sibnet.ru",12],["ingrus.net",13],["kanobu.ru",14],["yakusubstudio.home-forum.com",15],["yakusubstudio.ru",15],["80-e.ru",16],["24warez.ru",17],["ngnovoros.ru",17],["ngzt.ru",17],["progorod59.ru",17],["progorodchelny.ru",17],["progorodnsk.ru",17],["progorodsamara.ru",17],["prokazan.ru",17],["virtualbrest.ru",18],["samlab.ws",19],["mail.ru",20],["istmat.org",21],["radioprofusion.com",22],["sibnet.ru",23],["rutube.ru",24],["tass.ru",25],["avtorambler.com",26],["otzovik.com",28],["lostfilm.tv",29],["lostfilm.tw",29]]);

const entitiesMap = new Map([["disk.yandex",[31,32]],["docs.yandex",[31,32]],["mail.yandex",[32,33]]]);

const exceptionsMap = new Map([["inoreader.com",[8]],["auto.*",[27]],["only-paper.*",[30]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
