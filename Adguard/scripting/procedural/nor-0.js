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

// ruleset: nor-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/[kc]as\\\\ino/i\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has\",{\"selector\":\"+ p\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}]]}"],["{\"selector\":\"section.elementor-top-section\",\"tasks\":[[\"has-text\",\"/\\\\s\\\\sAnnoncer?\\\\s\\\\s/i\"],[\"spath\",\" + section.elementor-top-section:has(.elementor-image > [loading=\\\"lazy\\\"])\"]]}","{\"selector\":\"section.elementor-top-section\",\"tasks\":[[\"has-text\",\"/\\\\s\\\\sAnnoncer?\\\\s\\\\s/i\"],[\"spath\",\":has(+ section.elementor-top-section .elementor-image > [loading=\\\"lazy\\\"])\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"spath\",\":not(:has(img))\"]]}"],["{\"selector\":\".elementor-widget-text-editor\",\"tasks\":[[\"has-text\",\"/\\\\s\\\\sANNONCER\\\\s\\\\s/\"]]}"],["{\"selector\":\".et_section_regular\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".panel-latest-forum-threads\",\"tasks\":[[\"has-text\",\" sponsor\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}"],["{\"selector\":\".list-group\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".elementor-widget-wrap > .elementor-section\",\"tasks\":[[\"has-text\",\"REKLAMER\"]]}"],["{\"selector\":\".blog-post\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"],[\"spath\",\" + div\"]]}","{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"div > .section\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\"-label\\\"]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has\",{\"selector\":\".e-con-inner:not(:has(> *))\"}]]}"],["{\"selector\":\".mvp-widget-home\",\"tasks\":[[\"has-text\",\"/^Velun{2}arar/\"]]}"],["{\"selector\":\".g-10\",\"tasks\":[[\"has-text\",\"Artikkelen fortsetter \"]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has-text\",\"/^An{2}onse:/\"]]}","{\"selector\":\"div[style^=\\\"font-size\\\"]\",\"tasks\":[[\"has-text\",\"/^An{2}onse:/\"]]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}"],["{\"selector\":\".lenkeboks\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}"],["{\"selector\":\"div[class^=\\\"css\\\"]\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Annonse\\\"$\"}]]}"],["{\"selector\":\"[data-cy=\\\"video-page-horisontal\\\"] > div\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\"article ~ div\",\"tasks\":[[\"has-text\",\"/^A[n|ĳ]n\\\\ons/i\"]]}"],["{\"selector\":\".preview\",\"tasks\":[[\"has\",{\"selector\":\".kicker\",\"tasks\":[[\"has-text\",\"/an{2}onse/i\"]]}]]}"],["{\"selector\":\".entrance\",\"tasks\":[[\"has\",{\"selector\":\".entrance__mark__text\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}"],["{\"selector\":\".bottomSmallSpaced.topMediumSpaced\",\"tasks\":[[\"has-text\",\"/^An{2}onse/\"]]}"],["{\"selector\":\".item\",\"tasks\":[[\"has\",{\"selector\":\".meta\",\"tasks\":[[\"has-text\",\"/^An{2}onse$/\"]]}]]}","{\"selector\":\".td-c-loop-item\",\"tasks\":[[\"has\",{\"selector\":\".meta-info\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\" – annonse\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"/[?:;—]\\\\san{2}ons[eø]r?$/\"]]}]]}"],["{\"selector\":\".latestnews-box\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".front optimus-element\",\"tasks\":[[\"has-text\",\"Eurojackpot\"]]}","{\"selector\":\"amedia-frontpage > .optimus-complex-front\",\"tasks\":[[\"has\",{\"selector\":\"> header > h2\",\"tasks\":[[\"has-text\",\"/Reklame|REKLAME/\"]]}]]}","{\"selector\":\"article[data-lp-section=\\\"sportspill\\\"]:has(.slotHeader)\",\"tasks\":[[\"has-text\",\"/lot{2}o/i\"]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}","{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Annonser\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\".widget-goodpress-home-block-one\",\"tasks\":[[\"has-text\",\"Annonsørinnhold\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Play-Asia\"]]}","{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reklame\"]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}"],["{\"selector\":\"article > div\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}","{\"selector\":\"div\",\"tasks\":[[\"matches-css\",{\"name\":\"min-height\",\"value\":\"^165px$\"}]]}","{\"selector\":\"div.clearfix.col-full-width\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > div > div\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > section > section\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}","{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> div > div\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}]]}"],["{\"selector\":\".one-half\",\"tasks\":[[\"has-text\",\"/[kc]as\\\\ino/i\"]]}"],["{\"selector\":\"div.large-12.row\",\"tasks\":[[\"has-text\",\"MASCUS\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has-text\",\"/^AN{2}ONSE/\"]]}"],["{\"selector\":\".fl-visible-desktop-medium\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ann-forside\\\"]\",\"tasks\":[[\"has-text\",\"/An{2}onse:/\"]]}]]}"],["{\"selector\":\".td-pb-span4\",\"tasks\":[[\"has-text\",\"ANNONSØRINNHOLD\"]]}"],["{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"spath\",\":not(:has(img))\"]]}","{\"selector\":\"tr\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"spath\",\":not(:has(img))\"]]}"],["{\"selector\":\".col-md-3 .block\",\"tasks\":[[\"has-text\",\"ponsor\"]]}"]];

const hostnamesMap = new Map([["gunnarandreassen.com",0],["icelandreview.com",1],["knr.gl",1],["nutiminn.is",1],["bir.no",1],["medier24.no",1],["anettelyskjaer.dk",[2,3]],["cuben-linedance.dk",2],["dreampapers.dk",[2,3]],["iphoneluppen.dk",[2,3]],["padleguide.dk",[2,14]],["polarmedia.dk",2],["nemsvar.nu",[2,3]],["baeredygtigtfiskeri.dk",4],["check-in.dk",5],["fiskerforum.dk",6],["fodboldspilleren.dk",7],["gaming.dk",8],["jumpb.dk",9],["kendte.dk",10],["lystfiskerguiden.dk",11],["margit-henriksen.dk",12],["thura.dk",12],["ni.dk",13],["thelocal.dk",15],["thelocal.no",15],["eyjafrettir.is",16],["veitingageirinn.is",17],["730.no",18],["arendalstidende.no",19],["bilnorge.no",20],["butikkoversikten.no",21],["dagbladet.no",[22,23]],["elbil24.no",[23,25]],["kk.no",23],["seher.no",23],["sol.no",23],["vi.no",23],["digi.no",24],["tu.no",24],["gamer.no",26],["glr.no",27],["itavisen.no",28],["leinstrand-il.no",29],["nettavisen.no",30],["pengenytt.no",31],["politainment.no",32],["ranaposten.no",33],["xn--bodposten-n8a.no",33],["retrospilling.no",34],["sorlandsavisen.no",35],["tek.no",36],["teknologia.no",37],["tungt.no",38],["tunnelsyn.no",39],["united.no",40],["utrop.no",41],["yrkesbil.no",42],["ipmsnorge.org",43]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
