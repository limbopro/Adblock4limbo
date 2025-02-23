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

// ruleset: fin-0

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"#nm-300x300-fb\",\"action\":[\"style\",\"min-height: 30px !important\"]}","{\"selector\":\"#nm-980x400-fb\",\"action\":[\"style\",\"min-height: unset !important\"]}"],["{\"selector\":\"#ad-top-banner-placeholder\",\"action\":[\"style\",\"min-height: 0px !important\"]}"],["{\"selector\":\"tbody > tr > td[style=\\\"width:468px\\\"][valign=\\\"top\\\"]\",\"action\":[\"style\",\"width: unset !important\"]}"],["{\"selector\":\".SearchResultList__Row--advertisement, .Profile__TopCard--advertisement, .SearchResultList--advertisement\",\"action\":[\"style\",\"width: 100% !important; min-height: unset !important; margin-right: unset !important; float: unset !important;\"]}"],["{\"selector\":\"#layout-left.with-right-side\",\"action\":[\"style\",\"width: 100% !important\"]}"],["{\"selector\":\".section--ad__parade\",\"action\":[\"style\",\"margin: 20px !important\"]}"],["{\"selector\":\".top-ad-space\",\"action\":[\"style\",\"min-height: 0 !important\"]}"],["{\"selector\":\".site__wrapper\",\"action\":[\"style\",\"margin-top: 0.5em !important\"]}"],["{\"selector\":\"body.home #section-0 article:nth-child(1), body.category #om_commercialpostlisting-1 article:nth-child(1)\",\"action\":[\"style\",\"margin-bottom: unset !important;\"]}"],["{\"selector\":\"body.oxy-modal-active\",\"action\":[\"style\",\"overflow: auto !important; position: initial !important\"]}"],["{\"selector\":\"#headermob\",\"action\":[\"style\",\"position: static !important\"]}","{\"selector\":\"#show_merkki\",\"action\":[\"style\",\"margin-top: 2em !important\"]}","{\"selector\":\".mainbody.extended\",\"action\":[\"style\",\"margin-top: 2em !important\"]}"],["{\"selector\":\".featured-row-small\",\"action\":[\"style\",\"background-color: white !important\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"background-image: unset !important\"]}"],["{\"selector\":\".index-wrap\",\"action\":[\"style\",\"left: 0px !important\"]}"],["{\"selector\":\"#tik_fixed.with-ebanner\",\"action\":[\"style\",\"top: 0 !important\"]}"],["{\"selector\":\".main-hero .huge-banner__wrapper\",\"action\":[\"style\",\"min-height: unset !important\"]}"],["{\"selector\":\"div[class^=\\\"ThreadGridItemWrapper__CardCol\\\"][width=\\\"100%\\\"] * div[class^=\\\"ThreadCardFooter__CardFooter\\\"] > div[class^=\\\"ThreadCardFooter__ColumnContainer\\\"]\",\"action\":[\"style\",\"padding-right: 15px !important\"]}","{\"selector\":\"div[class^=\\\"ThreadGridItemWrapper__CardCol\\\"][width=\\\"50%\\\"] > div[class^=\\\"ThreadGridItemWrapper__CardWrapper\\\"]\",\"action\":[\"style\",\"padding-left: 0px !important\"]}","{\"selector\":\"div[class^=\\\"ThreadGridItemWrapper__CardCol\\\"][width=\\\"50%\\\"]:has(+ div[class^=\\\"ThreadGridItemWrapper__CardCol\\\"][width=\\\"100%\\\"])\",\"action\":[\"style\",\"width:100% !important\"]}","{\"selector\":\"div[width=\\\"100%\\\"] + [width=\\\"50%\\\"] + div[class^=\\\"ThreadGridItemWrapper__CardCol\\\"][width=\\\"50%\\\"] * div[class^=\\\"ThreadCardFooter__CardFooter\\\"] > div[class^=\\\"ThreadCardFooter__ColumnContainer\\\"]\",\"action\":[\"style\",\"padding-right: 15px !important\"]}","{\"selector\":\"div[width=\\\"100%\\\"] + div[width=\\\"50%\\\"] + div[width=\\\"50%\\\"] + div[class^=\\\"ThreadGridItemWrapper__CardCol\\\"][width=\\\"50%\\\"] > div\",\"action\":[\"style\",\"border-right: none !important; border-left: 1px solid lightgray !important\"]}","{\"selector\":\"div[width=\\\"100%\\\"] + div[width=\\\"50%\\\"] + div[width=\\\"50%\\\"] + div[width=\\\"50%\\\"] > div[class^=\\\"ThreadGridItemWrapper__CardWrapper\\\"] > div\",\"action\":[\"style\",\"padding-left: 15px !important\"]}","{\"selector\":\"div[width=\\\"50%\\\"] + div[width=\\\"50%\\\"] + [width=\\\"50%\\\"] + div[class^=\\\"ThreadGridItemWrapper__CardCol\\\"][width=\\\"50%\\\"] * div[class^=\\\"ThreadCardFooter__CardFooter\\\"] > div[class^=\\\"ThreadCardFooter__ColumnContainer\\\"]\",\"action\":[\"style\",\"padding-right: 15px !important\"]}"],["{\"selector\":\"body.noImages .content img\",\"action\":[\"style\",\"display: inline-block !important\"]}"]];

const hostnamesMap = new Map([["dawn.fi",0],["download.fi",1],["edukas.fi",1],["etn.fi",2],["finder.fi",3],["finnkino.fi",4],["golfpiste.com",5],["hardware.fi",6],["ilkkapohjalainen.fi",7],["kaksplus.fi",8],["kodinkoneopas.com",9],["mobiili.fi",10],["mvlehti.net",11],["proshop.fi",12],["puhelinvertailu.com",13],["tiketti.fi",14],["www.nettimoto.com",15],["www.nettivene.com",15],["www.suomi24.fi",16],["muropaketti.com",17]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
