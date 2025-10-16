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

// spa-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[898,"#Publi300600x"],[2969,"#PublicidadSuperior"],[3858,"#ads_singles_bottom"],[2646,"#audimaAdDesktop"],[1504,"#banner_publi"],[2239,"#bloque-publicidad-1"],[2236,"#bloque-publicidad-2"],[2231,"#bloque-publicidad-9"],[1336,"#bloque-publicidad-campania"],[3680,"#ctl00_PublicidadSuperior"],[1249,"#noticias-publicidad-1,\n#noticias-publicidad-2,\n#noticias-publicidad-3,\n#noticias-publicidad-4,\n#noticias-publicidad-5,\n#noticias-publicidad-6"],[3392,"#publicolumna"],[1045,".PubliDereFlo"],[3518,".PubliIzquiFlo"],[636,".PublicidadArriba"],[1987,"._mo_recs"],[2216,"._mo_recs_cti"],[3634,"._mo_recs_vi"],[1033,".ad-cabecera"],[998,".ad-container-m1"],[1204,".ad-zocalo__container"],[3774,".banner-publicidad"],[3563,".cnt-publi"],[3593,".contenedorAdcentrado"],[2371,".contenedor_publicidad"],[2251,".content_gpt_caja1_ads,\n.content_gpt_caja2_ads"],[2831,".edi-advertising"],[1609,".publi"],[1356,".publi300x250-sidebar"],[425,".publi300x600-sidebard"],[3588,".publi_MPU"],[809,".publi_space"],[1751,".publicidad-pie"],[2767,".publicidad_cabecera,\n.publicidad-cabecera"],[2154,".publicidad_dfp"],[669,".publicidad_footer_sticky"],[2756,".publicidadbflotante"],[1325,".publicolumna"],[1025,".publinker-ad"],[1283,".v-adv"],[1334,".voc-advertising"],[1458,".voc-article--sponsored,\n.publi_widget_1,\n.publi_widget_2"],[1583,".voc-sponsored"],[3379,"#PubMiddle1,\n#PubMiddle2"],[108,"#PubRight"],[793,"#PubTop1"],[794,"#PubTop2"],[1456,"#PubliFixedLeft"],[1888,"#RobaPagina"],[591,"#adGgV160"],[2314,"#ad_250x300"],[1073,"#adsforsearchGrid,\n#derpub"],[2030,"#adsforsearch_content,\n.top-add"],[2620,"#afsposicion1,\n#afsposicion2"],[3736,"#contenedor_pub_superior"],[806,"#content-ads-top"],[3307,"#eplAdDivlateralder,\n.pub468x80"],[3302,"#eplAdDivlateralizq"],[2196,"#eplAdDivtopbanner"],[3566,"#fix_publicidad_inferior"],[4009,"#gAddTop"],[3652,"#google-ad2"],[541,"#googleads_dr"],[1363,"#oasTOP"],[136,"#posicion-publicidad-superior,\n.topads728"],[3005,"#pub_superior_left"],[3587,"#pubinf"],[3347,"#publiLink"],[412,"#publicidad-top"],[808,"#publicidadMovil"],[2227,"#publicidadTablet"],[515,"#publicidad_header"],[815,"#publicidad_inferior"],[3815,"#publicidad_lateral_inferior"],[194,"#publicidad_lateral_medio"],[3868,"#publicidad_lateral_superior"],[3203,"#publicidad_subir"],[3252,"#publicidad_superior"],[2016,"#publiheader"],[2562,"#publitop,\n.dfp-queue"],[3848,"#slider-oferplan"],[401,"#sp-top-ads"],[2407,"#sponsored-container"],[2755,"#texto_publicidad"],[3102,"#titulo-publicidad"],[2533,".Adboost300x250"],[2528,".Adboost300x600"],[874,".PublicidadCabecera"],[2157,".RobaPagina,\n.robapagina"],[3394,".WIDGET-Publicidad"],[2386,".a_pub"],[797,".ad-300x250-solo"],[169,".ad-tl2b"],[3988,".ad_728_90_page"],[3682,".ad_dfp_estandar"],[999,".adcontainer-portlet"],[3836,".adsCon"],[1154,".adsEpi"],[2218,".adsEpiItem"],[494,".adsIndex"],[3300,".adsSide"],[2416,".ads_160x600"],[2982,".ads_960x90"],[670,".adsderecha"],[1180,".adsforsearchGrid"],[1316,".adsforsearch_roba"],[2664,".adsmovie"],[18,".advertisingLeft"],[34,".app-container > .questions-container-banner"],[677,".bg-ad-left"],[2447,".bg-ad-right,\n.publiTop"],[2614,".bl_publi_top"],[3268,".block-dfp-midcentral_home"],[2518,".block-dfp-roba_pagina_top_home"],[1082,".bloco-anuncios"],[1562,".bloco-anuncios__banner"],[3354,".bloco-anuncios__publicidade"],[1629,".blog-publi"],[3014,".bloquepubli"],[2059,".borde_publi"],[825,".c_anun_pub"],[427,".caja_cuponisimo_slider200"],[3962,".cnt-pub"],[804,".cnt-publicidad"],[4056,".cont_mer_publicidades"],[2569,".cont_publicidad"],[3059,".containerOas"],[1403,".contenedor_superior_publi"],[2406,".contpubliSuper"],[485,".des-adv"],[3661,".dfpbanners"],[1162,".digo_ads"],[3617,".div_publicidad"],[2362,".div_publicidades"],[737,".envoltorio_publi"],[2071,".ep-pub"],[1593,".espacioPublicitario"],[393,".find_bar_publicidades"],[1378,".flex__publi"],[2963,".header-adds"],[2611,".mclics"],[1555,".mod-roba"],[4016,".modPublicidad"],[1931,".myml-menu-navigation > .container-banner,\n.myml-menu-navigation > .purchases-banner"],[1241,".offer-add"],[72,".pane-publicidad"],[3799,".pane-publicidades"],[687,".patrocinio"],[3918,".producto-doble-publi"],[1821,".promocion_libre"],[3485,".pu300"],[1174,".pub-300x250"],[1042,".pub-300x600"],[127,".pub-950x100"],[3817,".pub-h"],[712,".pub160x600"],[3019,".pub300x250"],[3567,".pub728x90"],[211,".pub950"],[3869,".publi-texto"],[3383,".publi-vertical"],[2241,".publi300x300"],[3512,".publi_710x176"],[2047,".publi_flotante_push"],[1226,".publi_horizontal"],[1726,".publi_lateral"],[3139,".publi_mar_top"],[889,".publi_opinion"],[3897,".publi_pie_2"],[1117,".publi_skin_wrap"],[2454,".publi_sky"],[2718,".publicLateral"],[3564,".publicLateralTop"],[3451,".publicVert"],[2212,".publicidad-1110x90"],[2189,".publicidad-160-600"],[2255,".publicidad-300-250,\n.publicidad-300x250"],[1967,".publicidad-300-250a"],[3653,".publicidad-728x90"],[2541,".publicidad-728x90-Nota"],[617,".publicidad-bloque-centro"],[3367,".publicidad-content"],[2795,".publicidad-horizontal"],[1732,".publicidad-izq"],[2244,".publicidad-label"],[1745,".publicidad-top"],[2060,".publicidad-vertical"],[3431,".publicidad1"],[3428,".publicidad2"],[3429,".publicidad3"],[3426,".publicidad4"],[3427,".publicidad5"],[3424,".publicidad6"],[1668,".publicidadPaga"],[990,".publicidad_01"],[1616,".publicidad_especial"],[3374,".publicidad_modulo1,\n.publicidad_modulo2"],[1588,".publicidad_movil"],[3470,".publicidad_p"],[908,".publicidad_pc"],[1003,".publicidad_titulo"],[3695,".publicidad_tras_bajada"],[3847,".publicity-content"],[238,".publicity-content-google"],[2671,".publitop"],[2159,".pubslider"],[402,".rmsads"],[3786,".roba-container"],[639,".robapaginas"],[2750,".spub"],[3408,".story-patrocinio"],[2385,".td-g-rec-id-custom_ad_3"],[3516,".txtPubli"],[1780,".views-row-ads"],[1357,".vip-section-advertising"],[1451,".voc-sponsored-and-adv"],[1536,".widget-publi"],[2352,".widget_categorias_publi"],[3710,".widget_text_publicidad"],[3073,".wrap-bnr"],[2539,"a > #bg-ad"],[1779,"#deadblocker_dialog"],[2659,".adblockInfo"],[1185,".deadblocker-header-bar"],[659,".regular.closable"]];
const genericExceptionSieve = [2316,621,2311,3986,526,1268,2499,1792,1394,1857,1609];
const genericExceptionMap = [["misteryinternet.com","#footer-ads"],["fondosmil.co",".ads1"],["ripley.cl",".dfp-ad-unit"],["viveusa.mx",".dfp-tag-wrapper"],["sport.es",".following-ad-container"],["1000respuestas.net",".right-ads"],["buscasencuentras.net",".right-ads"],["preguntasrespuestas.net",".right-ads"],["festradio.com.ar",".td-a-rec"],["lacacharpaya.com.ar",".td-a-rec"],["itsoft.es",".ad-col\n.ad-full"],["mejoratuescuela.org",".container-ads"],["hitfm.es",".publi"]];

if ( genericSelectorMap ) {
    const map = self.genericSelectorMap =
        self.genericSelectorMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericSelectorMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before},\n${entry[1]}`);
            }
        }
    } else {
        self.genericSelectorMap = new Map(genericSelectorMap);
    }
    genericSelectorMap.length = 0;
}

if ( genericExceptionSieve ) {
    const hashes = self.genericExceptionSieve =
        self.genericExceptionSieve || new Set();
    if ( hashes.size !== 0 ) {
        for ( const hash of genericExceptionSieve ) {
            hashes.add(hash);
        }
    } else {
        self.genericExceptionSieve = new Set(genericExceptionSieve);
    }
    genericExceptionSieve.length = 0;
}

if ( genericExceptionMap ) {
    const map = self.genericExceptionMap =
        self.genericExceptionMap || new Map();
    if ( map.size !== 0 ) {
        for ( const entry of genericExceptionMap ) {
            const before = map.get(entry[0]);
            if ( before === undefined ) {
                map.set(entry[0], entry[1]);
            } else {
                map.set(entry[0], `${before}\n${entry[1]}`);
            }
        }
    } else {
        self.genericExceptionMap = new Map(genericExceptionMap);
    }
    genericExceptionMap.length = 0;
}

/******************************************************************************/

})();

/******************************************************************************/
