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

// ruleset: ublock-badware

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["",".code-block",".appua-reimage-top",".info.box",".download_button_info_texts",".js-download_button_additional_links",".primary_download",".sidebar_download_inner","div.attention-button-box-green","b:has(a[target^=\"reimage\"])",".ui-content > .win",".sidebar_download_inner > :not(.voting-box):not(.colorbg-grey)",".js-download_button_offer",".automatic_removal_list",".quick-download-button-placeholder",".quick-download-button-text","div[style^=\"border:2px\"]","#solution_v2_de","#gray_de",".automatic_removal_list_w > .ar_block_description","center > [class*=\"buttonPress-\"]","div[class^=\"code-block code-block-\"]",".getox","center > a[target=\"_blank\"][rel=\"nofollow noreferrer noopener\"]","div[style=\"float: none; margin:10px 0 10px 0; text-align:center;\"]","[id^=\"haxno-\"]","a[rel=\"nofollow noreferrer noopener\"][target=\"_blank\"]",".cente-1","[class*=\"buttonPress-\"]","center > .button-container:has(> #directDownload)","center > a","div[style=\"\"] > center > center","center#yangchen > iframe#external-frame[src=\"https://im136.mom/\"]:not([class])","html.w-mod-js:not(.wf-active) > body:not([class]):not([id]) > a[class=\"w-inline-block\"][href^=\"http\"]","#ad-gs-05"];
const argsSeqs = [0,1,-2,3,-4,-5,-6,-7,8,-6,-10,-11,-12,-13,-14,-15,19,9,-16,-17,18,-20,21,20,-20,22,-20,30,-20,23,-20,-21,23,21,-21,22,-21,23,22,-22,30,-22,28,23,-23,29,24,25,26,27,28,30,31,32,33,34];
const hostnamesMap = new Map([["windowsreport.com",1],["appuals.com",2],["pcseguro.es",4],["sauguspc.lt",4],["sichernpc.de",4],["ugetfix.com",4],["wyleczpc.pl",4],["2-spyware.com",9],["novirus.uk",9],["faravirus.ro",9],["uirusu.jp",9],["virusi.hr",9],["wubingdu.cn",9],["avirus.hu",9],["odstranitvirus.cz",9],["tanpavirus.web.id",9],["utanvirus.se",9],["virukset.fi",9],["losvirus.es",9],["virusler.info.tr",9],["semvirus.pt",9],["lesvirus.fr",9],["senzavirus.it",9],["dieviren.de",9],["viruset.no",9],["usunwirusa.pl",9],["zondervirus.nl",9],["bedynet.ru",9],["virusai.lt",9],["virusi.bg",9],["viirused.ee",9],["udenvirus.dk",9],["majorgeeks.com",17],["howtoremove.guide",18],["installcracks.com",21],["maliksofts.com",23],["crackpropc.com",24],["ayeshapc.com",26],["trycracksoftware.com",26],["organiccrack.com",23],["procrackkey.co",23],["up4pc.com",23],["crackdownload.org",23],["corecrack.com",23],["shanpc.com",23],["torrentfilefree.com",28],["patchcracks.com",21],["newproductkey.com",21],["osproductkey.com",23],["serialkeysfree.org",28],["autocracking.com",28],["greencracks.com",21],["profullversion.com",28],["crackswall.com",28],["rootcracks.org",21],["idmcrackeys.com",23],["crackedhere.com",23],["licensekeysfree.org",23],["assadpc.com",21],["thecrackbox.com",28],["crackproductkey.com",23],["keystool.com",21],["crackedpcs.com",23],["cracksmad.com",23],["licensekeyup.com",28],["chcracked.com",23],["finalcracked.com",23],["activatorpros.com",23],["crackedmod.com",23],["cracksoon.com",23],["boxcracked.com",23],["crackedsoftpc.com",23],["proapkcrack.com",23],["softscracked.com",23],["freeappstorepc.com",28],["usecracked.com",23],["crackedversion.com",23],["aryancrack.com",23],["fultech.org",23],["cracksray.com",23],["pcwarezbox.com",23],["cracksmat.com",21],["startcrack.co",23],["crackbros.com",21],["pcfullversion.com",21],["bypassapp.com",23],["fileserial.com",23],["pc4download.com",23],["freeprocrack.org",23],["upcrack.org",23],["topkeygen.com",30],["crackproduct.com",21],["downloadpirate.com",23],["combpc.pro",23],["lewdgames.to",33],["warezcrack.net",33],["freeprosoftz.com",33],["scracked.com",33],["cyberspc.com",33],["crackintopc.com",33],["crackshere.com",33],["crackdj.com",33],["cracktopc.com",33],["serialsofts.com",33],["zscracked.com",33],["procrackerz.com",34],["pcfullcrack.org",34],["downloadcracker.com",33],["piratesfile.com",36],["activatorwin.com",33],["crackcan.com",33],["crackit.org",33],["seeratpc.com",33],["activators4windows.com",33],["letcracks.com",36],["latestcracked.com",33],["fullversionforever.com",33],["vlsoft.net",33],["topcracked.com",33],["goharpc.com",33],["freecrackdownload.com",33],["crackpcsoft.net",33],["excrack.com",33],["mahcrack.com",33],["get4pcs.com",33],["mycrackfree.com",33],["cracksdat.com",33],["licensekeysfree.com",33],["freecrack4u.com",33],["getintomac.net",33],["crackreview.com",33],["activatorskey.com",33],["kuyhaa.cc",33],["game-repack.site",33],["dodi-repacks.download",33],["getpcsofts.net",33],["macfiles.org",33],["softzspot.com",33],["hdlicense.org",33],["spaxmedia.net",33],["licensedkey.co",33],["crackedmac.com",33],["getprocrack.net",33],["softwarance.com",33],["hitproversion.com",33],["cracktube.net",33],["abbaspc.net",33],["keygenstore.com",33],["pcfull.net",33],["sjcrack.com",33],["nkcrack.com",33],["filepuma.org",33],["pcsoftsfull.org",33],["licenselink.info",33],["crackkits.com",38],["haxmac.cc",38],["cracka2zsoft.com",39],["onhax.in",41],["haxpc.net",38],["karancrack.com",38],["productkeyfree.org",43],["productkeyforfree.com",43],["wazusoft.com",43],["kalicrack.com",44],["sadeempc.com",43],["thepiratecity.co",43],["torrentmac.net",43],["ryuugames.com",43],["pesktop.com",43],["proappcrack.com",43],["zgamespc.com",43],["crack11.com",43],["gvnvh.net",43],["pccrackbox.com",43],["pcwarezbox.net",43],["4howcrack.com",43],["softserialkey.com",43],["productkeys.org",43],["crackedsoft.org",43],["activationkey.org",43],["serialkeypatch.org",43],["crackpro.org",43],["cracksoftwaress.net",46],["haxnode.net",47],["romsdl.net",48],["zuketcreation.net",49],["igetintopc.info",50],["trycracksetup.com",51],["9to5crack.com",51],["crackmak.com",51],["yasir-252.net",51],["cracksmid.com",52],["app",53],["webflow.io",54],["uploadfox.net",55]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
