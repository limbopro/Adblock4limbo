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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".bg-gradient-to-br\",\"tasks\":[[\"has-text\",\"Cookbook\"]]}"],["{\"selector\":\".element-action-button\",\"tasks\":[[\"has-text\",\"SHARE YOUR STORY\"]]}"],["{\"selector\":\".mt-10\",\"tasks\":[[\"has-text\",\"Laravel Jobs\"]]}"],["{\"selector\":\".text-\\\\[18px\\\\]\",\"tasks\":[[\"has-text\",\"Support Us\"]]}"],["{\"selector\":\".tds-content > p\",\"tasks\":[[\"has-text\",\"Donate now\"]]}"],["{\"selector\":\".pb--medium\",\"tasks\":[[\"has-text\",\"Be part of the solution\"]]}"],["{\"selector\":\".bb-aside\",\"tasks\":[[\"has-text\",\"Get in Touch\"]]}"],["{\"selector\":\".common-html-frame.html-content\",\"tasks\":[[\"has-text\",\"how much\"]]}"],["{\"selector\":\".wp-block-group__inner-container\",\"tasks\":[[\"has-text\",\"Support the Washington Monthly\"]]}"],["{\"selector\":\".Ryrdad\",\"tasks\":[[\"has-text\",\"Please help us improve\"]]}","{\"selector\":\"div[jsname=\\\"wA2P2b\\\"]\",\"tasks\":[[\"has-text\",\"How helpful were the results\"]]}"],["{\"selector\":\".devsite-snackbar-snack\",\"tasks\":[[\"has-text\",\"Please help us\"]]}"],["{\"selector\":\"#content > .ytd-rich-section-renderer\",\"tasks\":[[\"has-text\",\"YouTube Playables\"]]}","{\"selector\":\".YtdTalkToRecsFlowRendererHost\",\"tasks\":[[\"has-text\",\"What hobbies are you interested in developing?\"]]}","{\"selector\":\"tp-yt-paper-dialog.ytd-popup-container\",\"tasks\":[[\"has-text\",\"/following Premium|Choose all that apply|Become a member|Free trial|How are your|How interested|Live TV|Wish videos|background play|better TV|cable box|cable reimagined|hidden fees|of YouTube TV|on YouTube TV|unlimited DVR|with YouTube TV|without the ads|try this feature|Terms apply/\"]]}"],["{\"selector\":\"tp-yt-paper-dialog.ytmusic-popup-container\",\"tasks\":[[\"has-text\",\"/family plan|Premium|ad-free|background play|kept playing/\"]]}"],["{\"selector\":\"body.topic-in-gated-category\",\"action\":[\"remove-class\",\"topic-in-gated-category\"]}"],["{\"selector\":\".react-responsive-modal-root\",\"tasks\":[[\"has-text\",\"Get Started\"]]}","{\"selector\":\".z-1000\",\"tasks\":[[\"has-text\",\"Get Started\"]]}"],["{\"selector\":\".ReactModalPortal\",\"tasks\":[[\"has-text\",\"confidence\"]]}"],["{\"selector\":\"[data-broadcast-modal]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".MuiPaper-root.MuiPaper-elevation\",\"tasks\":[[\"has-text\",\"Create your own My DHL account\"]]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/\\\\/(search|tag)\\\\//\"],[\"spath\",\" .nicoadVideoItem\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/\"],[\"spath\",\".nicodicNicoadVideoList\"]]}"]];

const hostnamesMap = new Map([["airfry.pro",0],["nzherald.co.nz",1],["laravel-news.com",2],["theintercept.com",3],["dailysignal.com",4],["positive.news",5],["propublica.org",6],["stuff.co.nz",7],["washingtonmonthly.com",8],["google.com",9],["developer.android.com",10],["www.youtube.com",11],["music.youtube.com",12],["linux.do",13],["ground.news",14],["grammarly.com",15],["freshchoice.co.nz",16],["my.dhlparcel.nl",17],["www.nicovideo.jp",18]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
