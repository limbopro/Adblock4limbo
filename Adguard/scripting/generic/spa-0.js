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

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// spa-0

const toImport = [[9913218,"#Publi300600x"],[7830425,"#PublicidadSuperior"],[2842386,"#ads_singles_bottom"],[6179414,"#audimaAdDesktop"],[12846560,"#banner_publi"],[4204735,"#bloque-publicidad-1"],[4204732,"#bloque-publicidad-2"],[4204727,"#bloque-publicidad-9"],[14394680,"#bloque-publicidad-campania"],[1125984,"#ctl00_PublicidadSuperior"],[3364065,"#noticias-publicidad-1,#noticias-publicidad-2,#noticias-publicidad-3,#noticias-publicidad-4,#noticias-publicidad-5,#noticias-publicidad-6"],[4005184,"#publicolumna"],[13100053,".PubliDereFlo"],[10882494,".PubliIzquiFlo"],[11248252,".PublicidadArriba"],[11118531,"._mo_recs"],[6830248,"._mo_recs_cti"],[15318578,"._mo_recs_vi"],[8791049,".ad-cabecera"],[795828,".ad-zocalo__container"],[4251326,".banner-publicidad"],[4247019,".cnt-publi"],[11652617,".contenedorAdcentrado"],[10836291,".contenedor_publicidad"],[12806347,".content_gpt_caja1_ads,.content_gpt_caja2_ads"],[13384463,".edi-advertising"],[9852236,".publi300x250-sidebar"],[13509033,".publi300x600-sidebard"],[11959812,".publi_MPU"],[2601769,".publi_space"],[1926871,".publicidad-pie"],[7547599,".publicidad_cabecera,.publicidad-cabecera"],[1923178,".publicidad_dfp"],[9745053,".publicidad_footer_sticky"],[7527108,".publicidadbflotante"],[8836397,".publicolumna"],[2560607,".ue-c-ad"],[193795,".v-adv"],[7677238,".voc-advertising"],[2774450,".voc-article--sponsored"],[10634799,".voc-sponsored"],[1174835,"#PubMiddle1,#PubMiddle2"],[12947564,"#PubRight"],[9495321,"#PubTop1"],[9495322,"#PubTop2"],[4912560,"#PubliFixedLeft"],[15542112,"#RobaPagina"],[664143,"#adGgV160"],[4884746,"#ad_250x300"],[6710321,"#adsforsearchGrid"],[2287598,"#adsforsearch_content"],[2742844,"#afsposicion1,#afsposicion2"],[6893208,"#contenedor_pub_superior"],[11862822,"#content-ads-top"],[15791153,"#derpub"],[16043243,"#eplAdDivlateralder"],[16043238,"#eplAdDivlateralizq"],[5978260,"#eplAdDivtopbanner"],[12459502,"#fix_publicidad_inferior"],[5259177,"#gAddTop"],[138820,"#google-ad2"],[2159133,"#googleads_dr"],[1385811,"#oasTOP"],[4055176,"#posicion-publicidad-superior"],[16354237,"#pub_superior_left"],[14511619,"#pubinf"],[3452179,"#publiLink"],[12919196,"#publicidad-top"],[1983272,"#publicidadMovil"],[13056179,"#publicidadTablet"],[11411971,"#publicidad_header"],[1815343,"#publicidad_inferior"],[7929575,"#publicidad_lateral_inferior"],[3379394,"#publicidad_lateral_medio"],[7929628,"#publicidad_lateral_superior"],[13069443,"#publicidad_subir"],[1817780,"#publicidad_superior"],[7100384,"#publiheader"],[4499970,"#publitop"],[1408776,"#slider-oferplan"],[12415377,"#sp-top-ads"],[3615079,"#sponsored-container"],[10037955,"#texto_publicidad"],[2014238,"#titulo-publicidad"],[7420389,".Adboost300x250"],[7420384,".Adboost300x600"],[4436842,".PublicidadCabecera"],[3012717,".RobaPagina"],[7146818,".WIDGET-Publicidad"],[8677714,".a_pub"],[9896733,".ad-300x250-solo"],[13242537,".ad-tl2b"],[7548820,".ad_728_90_page"],[1932898,".ad_dfp_estandar"],[4056039,".adcontainer-portlet"],[12308220,".adsCon"],[12301442,".adsEpi"],[555178,".adsEpiItem"],[225774,".adsIndex"],[4857060,".adsSide"],[1489264,".ads_160x600"],[494502,".ads_960x90"],[565918,".adsderecha"],[12326044,".adsforsearchGrid"],[7304484,".adsforsearch_roba"],[6593128,".adsmovie"],[12107794,".advertisingLeft"],[4993058,".app-container > .questions-container-banner"],[1192613,".bg-ad-left"],[3180943,".bg-ad-right"],[8272438,".bl_publi_top"],[13257924,".block-dfp-midcentral_home"],[6359510,".block-dfp-roba_pagina_top_home"],[10781754,".bloco-anuncios"],[11548186,".bloco-anuncios__banner"],[15039770,".bloco-anuncios__publicidade"],[15652445,".blog-publi"],[9169862,".bloquepubli"],[4712459,".borde_publi"],[14349113,".c_anun_pub"],[1417643,".caja_cuponisimo_slider200"],[1453946,".cnt-pub"],[7516964,".cnt-publicidad"],[10633176,".cont_mer_publicidades"],[14191113,".cont_publicidad"],[6358849,".container-ads"],[6786035,".containerOas"],[2336123,".contenedor_superior_publi"],[7223654,".contpubliSuper"],[9716197,".des-adv"],[5499394,".dfp-queue"],[13475405,".dfpbanners"],[5784714,".digo_ads"],[12578337,".div_publicidad"],[6748474,".div_publicidades"],[2867937,".envoltorio_publi"],[16549911,".ep-pub"],[13633081,".espacioPublicitario"],[1724809,".find_bar_publicidades"],[2540898,".flex__publi"],[2153363,".header-adds"],[9734707,".mclics"],[12609043,".mod-roba"],[2342832,".modPublicidad"],[4925323,".myml-menu-navigation > .container-banner,.myml-menu-navigation > .purchases-banner"],[8942809,".offer-add"],[13226056,".pane-publicidad"],[450263,".pane-publicidades"],[2355887,".patrocinio"],[11362126,".producto-doble-publi"],[2688797,".promocion_libre"],[204189,".pu300"],[4072598,".pub-300x250"],[4072466,".pub-300x600"],[4431999,".pub-950x100"],[257769,".pub-h"],[3183304,".pub160x600"],[3185611,".pub300x250"],[11869419,".pub468x80"],[11873775,".pub728x90"],[9609427,".pub950"],[255561,".publi"],[2596637,".publi-texto"],[1551671,".publi-vertical"],[8751297,".publi300x300"],[13642127,".publiTop"],[5922232,".publi_710x176"],[8931327,".publi_flotante_push"],[1078474,".publi_horizontal"],[3901118,".publi_lateral"],[3877955,".publi_mar_top"],[3830649,".publi_opinion"],[2600761,".publi_pie_2"],[15397981,".publi_skin_wrap"],[11958678,".publi_sky"],[1566130,".publi_widget_1,.publi_widget_2"],[4983454,".publicLateral"],[7921132,".publicLateralTop"],[3284347,".publicVert"],[178340,".publicidad-1110x90"],[178317,".publicidad-160-600"],[178383,".publicidad-300-250,.publicidad-300x250"],[7489455,".publicidad-300-250a"],[5996101,".publicidad-728x90"],[14969325,".publicidad-728x90-Nota"],[9941609,".publicidad-bloque-centro"],[175399,".publicidad-content"],[6781675,".publicidad-horizontal"],[1926852,".publicidad-izq"],[1730756,".publicidad-label"],[1926865,".publicidad-top"],[7542796,".publicidad-vertical"],[2608487,".publicidad1"],[2608484,".publicidad2"],[2608485,".publicidad3"],[2608482,".publicidad4"],[2608483,".publicidad5"],[2608480,".publicidad6"],[1922692,".publicidadPaga"],[3744734,".publicidad_01"],[7562832,".publicidad_especial"],[175406,".publicidad_modulo1,.publicidad_modulo2"],[1648180,".publicidad_movil"],[8826254,".publicidad_p"],[3744652,".publicidad_pc"],[5993451,".publicidad_titulo"],[12639855,".publicidad_tras_bajada"],[6057735,".publicity-content"],[6500590,".publicity-content-google"],[13609583,".publitop"],[11962479,".pubslider"],[11780498,".rmsads"],[15326922,".roba-container"],[882797,".robapagina"],[7471743,".robapaginas"],[1891006,".spub"],[4160848,".story-patrocinio"],[15063377,".td-g-rec-id-custom_ad_3"],[16316398,".top-add"],[6574216,".topads728"],[4459964,".txtPubli"],[16332532,".views-row-ads"],[5338445,".vip-section-advertising"],[1717675,".voc-sponsored-and-adv"],[1230336,".widget-publi"],[4770096,".widget_categorias_publi"],[2637438,".widget_text_publicidad"],[1788929,".wrap-bnr"],[14625259,"a > #bg-ad"],[11650803,"#deadblocker_dialog"],[15506019,".adblockInfo"],[9508001,".deadblocker-header-bar"],[12755603,".regular.closable"]];

const genericSelectorMap = self.genericSelectorMap || new Map();

if ( genericSelectorMap.size === 0 ) {
    self.genericSelectorMap = new Map(toImport);
    return;
}

for ( const toImportEntry of toImport ) {
    const existing = genericSelectorMap.get(toImportEntry[0]);
    genericSelectorMap.set(
        toImportEntry[0],
        existing === undefined
            ? toImportEntry[1]
            : `${existing},${toImportEntry[1]}`
    );
}

self.genericSelectorMap = genericSelectorMap;

/******************************************************************************/

})();

/******************************************************************************/
