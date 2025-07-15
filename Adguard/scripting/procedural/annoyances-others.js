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

// ruleset: annoyances-others

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["",["{\"selector\":\".p-4.z-50\",\"tasks\":[[\"has-text\",\"Upgrade to\"]]}"],["{\"selector\":\"div.my-2\",\"tasks\":[[\"has-text\",\"Support SpaceWeatherLive.com!\"]]}"],["{\"selector\":\"#cartology-product-cig-tile\",\"tasks\":[[\"has-text\",\"Start Free Trial\"]]}","{\"selector\":\"cdx-cta\",\"tasks\":[[\"has-text\",\"Learn more\"]]}"],["{\"selector\":\".bg-gradient-to-br\",\"tasks\":[[\"has-text\",\"Cookbook\"]]}"],["{\"selector\":\".mui-style-9ulf7o-root\",\"tasks\":[[\"has-text\",\"Donate today!\"]]}"],["{\"selector\":\".tds-content > p\",\"tasks\":[[\"has-text\",\"Donate now\"]]}"],["{\"selector\":\".mt-10\",\"tasks\":[[\"has-text\",\"Laravel Jobs\"]]}"],["{\"selector\":\".element-action-button\",\"tasks\":[[\"has-text\",\"DO YOU KNOW MORE\"]]}","{\"selector\":\".element-action-button\",\"tasks\":[[\"has-text\",\"SHARE YOUR STORY\"]]}"],["{\"selector\":\".pb--medium\",\"tasks\":[[\"has-text\",\"Be part of the solution\"]]}"],["{\"selector\":\".bb-aside\",\"tasks\":[[\"has-text\",\"Get in Touch\"]]}"],["{\"selector\":\".common-html-frame.html-content\",\"tasks\":[[\"has-text\",\"how much\"]]}"],["{\"selector\":\".text-\\\\[18px\\\\]\",\"tasks\":[[\"has-text\",\"Support Us\"]]}"],["{\"selector\":\".player-overlay-background\",\"tasks\":[[\"has-text\",\"Consider Turbo\"]]}"],["{\"selector\":\".wp-block-group__inner-container\",\"tasks\":[[\"has-text\",\"Support the Washington Monthly\"]]}"],["{\"selector\":\".Ryrdad\",\"tasks\":[[\"has-text\",\"Please help us improve\"]]}","{\"selector\":\"[jscontroller=\\\"HCSvae\\\"]\",\"tasks\":[[\"has-text\",\"Sign in to Google\"]]}"],["{\"selector\":\".devsite-snackbar-snack\",\"tasks\":[[\"has-text\",\"Please help us\"]]}"],["{\"selector\":\"div[jsname=\\\"wA2P2b\\\"]\",\"tasks\":[[\"has-text\",\"How helpful were the results\"]]}"],["{\"selector\":\"#content > .ytd-rich-section-renderer\",\"tasks\":[[\"has-text\",\"YouTube Playables\"]]}","{\"selector\":\".YtdTalkToRecsFlowRendererHost\",\"tasks\":[[\"has-text\",\"What hobbies are you interested in developing?\"]]}","{\"selector\":\"tp-yt-paper-dialog.ytd-popup-container\",\"tasks\":[[\"has-text\",\"/following Premium|Choose all that apply|Become a member|Free trial|How are your|How interested|Live TV|Wish videos|background play|better TV|cable box|cable reimagined|hidden fees|of YouTube TV|on YouTube TV|unlimited DVR|with YouTube TV|without the ads|try this feature|Terms apply/\"]]}"],["{\"selector\":\"tp-yt-paper-dialog.ytmusic-popup-container\",\"tasks\":[[\"has-text\",\"/family plan|Premium|ad-free|background play|kept playing|month free|without the ads|Try YouTube Music/\"]]}"],["{\"selector\":\".MuiPaper-elevation.MuiPaper-root\",\"tasks\":[[\"has-text\",\"Create an Account\"]]}"],["{\"selector\":\"[style=\\\"background-color: rgb(124, 92, 255); color: rgb(255, 255, 255);\\\"]\",\"tasks\":[[\"has-text\",\"Join over 100 million people\"]]}"],["{\"selector\":\"body.topic-in-gated-category\",\"action\":[\"remove-class\",\"topic-in-gated-category\"]}"],["{\"selector\":\".react-responsive-modal-root\",\"tasks\":[[\"has-text\",\"Get Started\"]]}","{\"selector\":\".z-1000\",\"tasks\":[[\"has-text\",\"Get Started\"]]}"],["{\"selector\":\".ReactModalPortal\",\"tasks\":[[\"has-text\",\"confidence\"]]}"],["{\"selector\":\"[data-broadcast-modal]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".MuiPaper-root.MuiPaper-elevation\",\"tasks\":[[\"has-text\",\"Create your own My DHL account\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/\\\\/(search|tag)\\\\//\"],[\"spath\",\" .nicoadVideoItem\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/\"],[\"spath\",\".nicodicNicoadVideoList\"]]}"]];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,-15,17,16,18,19,20,21,22,23,24,25,26,27];
const hostnamesMap = new Map([["asuracomic.net",1],["spaceweatherlive.com",2],["woolworths.co.nz",3],["airfry.pro",4],["theworld.org",5],["dailysignal.com",6],["laravel-news.com",7],["nzherald.co.nz",8],["positive.news",9],["propublica.org",10],["stuff.co.nz",11],["theintercept.com",12],["twitch.tv",13],["washingtonmonthly.com",14],["google.ca",15],["google.co.nz",15],["google.co.uk",15],["google.com",16],["google.com.au",15],["google.de",15],["google.es",15],["google.fr",15],["google.it",15],["google.nl",15],["google.pt",15],["developer.android.com",18],["www.youtube.com",19],["music.youtube.com",20],["usnews.com",21],["tumblr.com",22],["linux.do",23],["ground.news",24],["grammarly.com",25],["freshchoice.co.nz",26],["my.dhlparcel.nl",27],["www.nicovideo.jp",28]]);
const hasEntities = false;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
