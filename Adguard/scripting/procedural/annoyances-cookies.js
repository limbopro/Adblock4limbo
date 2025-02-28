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

// ruleset: annoyances-cookies

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".MuiBox-root\",\"tasks\":[[\"has-text\",\"Welcome,\"]]}"],["{\"selector\":\".MuiStack-root\",\"tasks\":[[\"has-text\",\"Personalised ads\"]]}"],["{\"selector\":\".Wrapper--1lbmq00\",\"tasks\":[[\"has-text\",\"This website uses cookies\"]]}"],["{\"selector\":\".bom-form-alert--info.bom-form-alert\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".cdk-overlay-pane\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".css-175oi2r.r-12vffkv[style^=\\\"position: absolute; bottom: 0px; width: 100%;\\\"]\",\"tasks\":[[\"has-text\",\"data protection\"]]}"],["{\"selector\":\".dialog-lightbox-message\",\"tasks\":[[\"has-text\",\"/Cookies/i\"]]}"],["{\"selector\":\".fixed\",\"tasks\":[[\"has-text\",\"cookies\"]]}"],["{\"selector\":\".footer\",\"tasks\":[[\"has-text\",\"By using our platform\"]]}"],["{\"selector\":\".gb_g\",\"tasks\":[[\"has-text\",\"cookie\"]]}"],["{\"selector\":\".hLgTAv\",\"tasks\":[[\"has-text\",\"Terms of Sale\"]]}"],["{\"selector\":\".md\\\\:right-\\\\[40px\\\\]\",\"tasks\":[[\"has-text\",\"By continuing to use our site\"]]}"],["{\"selector\":\".t8b87\",\"tasks\":[[\"has-text\",\"Privacy Policy Notice\"]]}"],["{\"selector\":\".toast\",\"tasks\":[[\"has-text\",\"We use cookies\"]]}"],["{\"selector\":\".top-0.z-9999.fixed.bg-opacity-30\",\"tasks\":[[\"has-text\",\"Website Cookies\"]]}"],["{\"selector\":\".z-50\",\"tasks\":[[\"has-text\",\"This site uses cookies\"]]}"],["{\"selector\":\"[role=\\\"dialog\\\"]\",\"tasks\":[[\"has-text\",\"cookies\"]]}"],["{\"selector\":\"div[class^=\\\"_toastContainer_\\\"]\",\"tasks\":[[\"has-text\",\"We care about your privacy\"]]}"],["{\"selector\":\"button\",\"tasks\":[[\"has-text\",\"Accept\"],[\"upward\",\"section\"]]}"],["{\"selector\":\".cc-banner\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#CookieWrapper\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#ask-consent\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack:not([title=\\\"Sanoman sisällönjakelukumppanit\\\"]) button.pm-switch.checked\",\"action\":[\"remove-class\",\"checked\"]}"],["{\"selector\":\".videop em:not([data-video-src])\",\"action\":[\"remove\",\"\"]}"]];

const hostnamesMap = new Map([["news.abs-cbn.com",0],["memefi.club",1],["honeygain.com",2],["beta.bom.gov.au",3],["betsson.com",4],["x.com",5],["cun.edu.co",6],["join.chat",6],["milkinkstudio.com",6],["worklouder.cc",6],["blog.smithsecurity.biz",7],["sniffies.com",8],["play.google.com",9],["twitch.tv",10],["alohaprofile.com",11],["clickscope.org",12],["privatekeys.pw",13],["coopmobile.ch",14],["app.filen.io",15],["chat.mistral.ai",16],["aainflight.com",17],["xe.com",18],["nature.com",19],["link.springer.com",19],["schwarzenbacher-kundl.at",20],["e-comas.com",21],["cdn.privacy-mgmt.com",22],["winfuture.de",23]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
