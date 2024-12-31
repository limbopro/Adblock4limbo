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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Welcome,\"]]}"],["{\"selector\":\".MuiStack-root\",\"tasks\":[[\"has-text\",\"Personalised ads\"]]}"],["{\"selector\":\".Wrapper--1lbmq00\",\"tasks\":[[\"has-text\",\"This website uses cookies\"]]}"],["{\"selector\":\".cdk-overlay-pane\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".css-175oi2r.r-12vffkv[style^=\\\"position: absolute; bottom: 0px; width: 100%;\\\"]\",\"tasks\":[[\"has-text\",\"data protection\"]]}"],["{\"selector\":\".fixed\",\"tasks\":[[\"has-text\",\"cookies\"]]}"],["{\"selector\":\".footer\",\"tasks\":[[\"has-text\",\"By using our platform\"]]}"],["{\"selector\":\".gb_g\",\"tasks\":[[\"has-text\",\"cookie\"]]}"],["{\"selector\":\".hLgTAv\",\"tasks\":[[\"has-text\",\"Terms of Sale\"]]}"],["{\"selector\":\".md\\\\:right-\\\\[40px\\\\]\",\"tasks\":[[\"has-text\",\"By continuing to use our site\"]]}"],["{\"selector\":\".t8b87\",\"tasks\":[[\"has-text\",\"Privacy Policy Notice\"]]}"],["{\"selector\":\".toast\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".top-0.z-9999.fixed.bg-opacity-30\",\"tasks\":[[\"has-text\",\"Website Cookies\"]]}"],["{\"selector\":\".z-50\",\"tasks\":[[\"has-text\",\"This site uses cookies\"]]}"],["{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Accept\"],[\"upward\",\"section\"]]}"],["{\"selector\":\".cc-banner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#moduleCookies\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#CookieWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#ask-consent\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body\",\"action\":[\"remove-attr\",\"data-eu-cookie-compliance-once\"]}"],["{\"selector\":\".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack:not([title=\\\"Sanoman sisällönjakelukumppanit\\\"]) button.pm-switch.checked\",\"action\":[\"remove-class\",\"checked\"]}"],["{\"selector\":\".videop em:not([data-video-src])\",\"action\":[\"remove\",\"\"]}"]];

const hostnamesMap = new Map([["news.abs-cbn.com",0],["memefi.club",1],["honeygain.com",2],["betsson.com",3],["x.com",4],["blog.smithsecurity.biz",5],["sniffies.com",6],["play.google.com",7],["twitch.tv",8],["alohaprofile.com",9],["clickscope.org",10],["privatekeys.pw",11],["coopmobile.ch",12],["app.filen.io",13],["xe.com",14],["nature.com",15],["link.springer.com",15],["topographic-map.com",16],["schwarzenbacher-kundl.at",17],["e-comas.com",18],["omnipedia.app",19],["cdn.privacy-mgmt.com",20],["winfuture.de",21]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
