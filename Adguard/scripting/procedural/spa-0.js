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

// ruleset: spa-0

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = ["[]","[{\"selector\":\".module--external\",\"tasks\":[[\"has-text\",\"Contenido Patrocinado\"]]}]","[{\"selector\":\".recirculation\",\"tasks\":[[\"has-text\",\"Contenido patrocinado\"]]}]","[{\"selector\":\".s.s--v\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"OFRECIDO POR\"]]}]]}]","[{\"selector\":\".wide-content\",\"tasks\":[[\"has\",{\"selector\":\"h1\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}]","[{\"selector\":\"#lateral\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Auspiciado por:\"]]}]]}]","[{\"selector\":\".Block\",\"tasks\":[[\"has\",{\"selector\":\".Title_section\",\"tasks\":[[\"has-text\",\"Contenido patrocinado\"]]}]]},{\"selector\":\".Card\",\"tasks\":[[\"has\",{\"selector\":\".Card-Section.Section\",\"tasks\":[[\"has-text\",\"Contenido patrocinado\"]]}]]}]","[{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"PUBLICIDAD\"]]}]","[{\"selector\":\".main-article-container-patr\",\"tasks\":[[\"has\",{\"selector\":\".mas-contenido\",\"tasks\":[[\"has-text\",\"Más Contenido\"]]}]]}]","[{\"selector\":\".products-carousel-wrapper\",\"tasks\":[[\"has-text\",\"Patrocinado\"]]}]","[{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]","[{\"selector\":\".display-ads\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Anuncio\"]]}]]}]","[{\"selector\":\".row.H_Img_V_Title_Center.mb-3\",\"tasks\":[[\"has-text\",\"Contenido Patrocinado\"]]}]","[{\"selector\":\".clearfix.list-cards.mb1.section-ciudadanos\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"Espacio de marca\"]]}]]}]","[{\"selector\":\".et_pb_column\",\"tasks\":[[\"has\",{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]]}]","[{\"selector\":\".dropdown\",\"tasks\":[[\"has\",{\"selector\":\"label\",\"tasks\":[[\"has-text\",\"VPN\"]]}]]}]","[{\"selector\":\".balcon.borderBottomDesktop\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"patrocinado\"]]}]]}]","[{\"selector\":\"section > h3\",\"tasks\":[[\"has-text\",\"Publicidad\"]]}]","[{\"selector\":\".section\",\"tasks\":[[\"has\",{\"selector\":\".section-subtitle\",\"tasks\":[[\"has-text\",\"Contenido en colaboración\"]]}]]}]","[{\"selector\":\".tno-article-block\",\"tasks\":[[\"has\",{\"selector\":\"span\",\"tasks\":[[\"has-text\",\"Branded content\"]]}]]}]","[{\"selector\":\"[data-testid=\\\"item-stack\\\"] > div\",\"tasks\":[[\"has-text\",\"Patrocinado\"]]}]","[{\"selector\":\".quicklink_w100\",\"tasks\":[[\"has\",{\"selector\":\".publi-tag\",\"tasks\":[[\"has-text\",\"AD\"]]}]]}]","[{\"selector\":\".ui-recommendations-carousel-wrapper-ref\",\"tasks\":[[\"has-text\",\"Promocionado\"]]}]","[{\"selector\":\".c.d1\",\"tasks\":[[\"has\",{\"selector\":\"div\",\"tasks\":[[\"has-text\",\"Más cosas interesantes\"]]}]]}]","[{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> h3\",\"tasks\":[[\"has-text\",\"WEBCAM PORNO XXX\"]]}]]}]"];
const argsSeqs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
const hostnamesMap = new Map([["eldiariony.com",1],["laopinion.com",1],["laraza.com",1],["atlantico.net",2],["laregion.es",2],["as.com",3],["diarios-argentinos.com",4],["elcomercio.pe",5],["elespectador.com",6],["elquindiano.com",7],["laboyanos.com",7],["eltiempo.com",8],["falabella.com",9],["hoy.com.do",10],["juegosdiarios.com",11],["larepublica.co",12],["lavoz.com.ar",13],["mundo724.com",14],["photocall.tv",15],["prensa.com",16],["recetasfacilescocina.com",17],["semana.com",18],["theobjective.com",19],["walmart.com.mx",20],["yorokobu.es",21],["mercadolibre.*",22],["muyzorras.com",23],["videospornogratisx.net",24]]);
const hasEntities = true;

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
