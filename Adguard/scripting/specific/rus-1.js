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

const argsList = ["","a[href*=\"rambler.ru/top100/\"]\na[href*=\"top100.rambler.ru/\"]","a[href=\"http://vtambove.ru/advert/banner_network/\"]","#banner_counters","#bigmirTop","#p-counters","#page_footer > .copyright > center:first-child","#picContainer > img","#side_right > .block_r:has(> div [href*=\"liveinternet.ru/\"])","._3S8wP > div:first-child + div",".ad_title",".ad_title > a",".b-footer__counters",".bbanerr",".bc > .il:last-child > .bp",".bcounts",".c-liveinternet",".contbaner",".copyright ~ .copyright",".counters",".disableAdvButton__container",".footer [id]:has(> b)",".liveinternet",".main > #footer ~ table",".ph-logo_doodle[href^=\"https://universal-link.mail.ru/\"]",".region-sidebar-first > .block:has(> .content > [href*=\"metrika\"])",".revolvermaps",".sibnet-footer__counters","[aria-label=\"raichuLogoLink\"]","[class^=\"Footer_liveinternet\"]","[data-react-rcm-block]","article div:has(> div > [id^=\"rcmw-container-\"])\ncircle[stroke-dashoffset]\nsection > nav ~ div div:has(> div > [id^=\"rcmw-container-\"])","div[id^=\"leaderboard_ad\"] > *","footer > .counter","img[alt=\"liru\"]","img[width=\"1\"][height=\"1\"]",".adbanner"];
const argsSeqs = [0,1,2,3,-4,22,5,6,7,8,-9,-20,31,10,-11,32,12,13,14,15,16,17,18,19,21,23,24,25,-26,33,27,28,29,30,31,34,35,36];
const hostnamesMap = new Map([["~rambler.ru",1],["~vtambove.ru",2],["sfw.so",3],["sinoptik.ua",4],["lurkmo.re",6],["lurkmore.to",6],["game4you.top",7],["rustorka.com",7],["rustorka.net",7],["rustorka.top",7],["rustorkacom.lib",7],["fastpic.ru",8],["happy-hack.net",9],["rambler.ru",10],["~inoreader.com",13],["inoreader.com",14],["svpressa.ru",16],["militaryreview.su",17],["www.sibnet.ru",18],["ingrus.net",19],["kanobu.ru",20],["yakusubstudio.home-forum.com",21],["yakusubstudio.ru",21],["80-e.ru",22],["24warez.ru",23],["ngnovoros.ru",23],["ngzt.ru",23],["progorod59.ru",23],["progorodchelny.ru",23],["progorodnsk.ru",23],["progorodsamara.ru",23],["prokazan.ru",23],["virtualbrest.ru",24],["samlab.ws",25],["mail.ru",26],["istmat.org",27],["radioprofusion.com",28],["sibnet.ru",30],["rutube.ru",31],["tass.ru",32],["lena-miro.ru",33],["levik.blog",33],["livejournal.com",33],["olegmakarenko.ru",33],["periskop.su",33],["shakko.ru",33],["shiro-kino.ru",33],["vadimrazumov.ru",33],["avtorambler.com",34],["otzovik.com",35],["lostfilm.tv",36],["lostfilm.tw",36],["~only-paper.*",37]]);
const hasEntities = true;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
