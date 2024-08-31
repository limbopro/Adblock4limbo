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

const argsList = [["{\"selector\":\".tds-content > p\",\"tasks\":[[\"has-text\",\"Donate now\"]]}"],["{\"selector\":\".Ryrdad\",\"tasks\":[[\"has-text\",\"Please help us improve\"]]}"],["{\"selector\":\".ReactModalPortal\",\"tasks\":[[\"has-text\",\"confidence\"]]}"],["{\"selector\":\"tp-yt-paper-dialog.ytmusic-popup-container\",\"tasks\":[[\"has-text\",\"/family plan|Premium|ad-free|background play|kept playing/\"]]}"],["{\"selector\":\"tp-yt-paper-dialog.ytd-popup-container\",\"tasks\":[[\"has-text\",\"/How are your|How interested|Live TV|Wish videos|background play|better TV|cable box|cable reimagined|hidden fees|of YouTube TV|on YouTube TV|unlimited DVR|with YouTube TV|without the ads|try this feature/\"]]}"],["{\"selector\":\"body.topic-in-gated-category\",\"action\":[\"remove-class\",\"topic-in-gated-category\"]}"],["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/\\\\/(search|tag)\\\\//\"],[\"spath\",\" .nicoadVideoItem\"]]}","{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"/tag/\"],[\"spath\",\".nicodicNicoadVideoList\"]]}"],["{\"selector\":\".MuiPaper-root.MuiPaper-elevation\",\"tasks\":[[\"has-text\",\"Create your own My DHL account\"]]}"],["{\"selector\":\"[data-broadcast-modal]\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".common-html-frame.html-content\",\"tasks\":[[\"has-text\",\"how much\"]]}"],["{\"selector\":\".bb-aside\",\"tasks\":[[\"has-text\",\"Get in Touch\"]]}"]];

const hostnamesMap = new Map([["dailysignal.com",0],["google.com",1],["grammarly.com",2],["music.youtube.com",3],["www.youtube.com",4],["linux.do",5],["www.nicovideo.jp",6],["my.dhlparcel.nl",7],["freshchoice.co.nz",8],["stuff.co.nz",9],["propublica.org",10]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
