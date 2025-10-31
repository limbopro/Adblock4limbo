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

// spa-1

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[1856,"body > .content.uid ~ .footer + #adblock-modal"],[3754,"#banner-728x90-area"],[3985,"#banner-300x600-area"],[3879,".pubContainer"],[3563,".cnt-publi"],[1872,".dfp-tag-wrapper-container"],[1334,".voc-advertising"],[3847,".publicity-content"],[2807,".publicidad,\n#publicidadhead"],[3679,"#PublicidadCentro"],[2969,"#PublicidadSuperior"],[1150,"#Publicidade"],[2581,"#ad-230x100-1"],[873,"#ad-300x40-5"],[1934,"#ad-635x40-1"],[3633,"#ad4"],[1578,"#ad_publicidad"],[3407,"#adhome"],[2502,"#ads_top"],[2546,"#adsense2"],[1842,"#adsense2pos"],[430,"#adsensePreCuerpo"],[892,"#adsensepo"],[62,"#adv_bottom_1"],[3819,"#adv_left_1"],[2715,"#adv_middle"],[1698,"#adv_middle_2"],[2109,"#adv_position_1,\n#adv_position_4"],[2088,"#adv_top_1"],[3292,"#adv_top_right"],[2270,"#advertising_header"],[2577,"#anunciosGoogle"],[1620,"#avazu_ads_slide"],[760,"#barraPublicidade"],[1207,"#liBannerDireita"],[1094,"#liPublicidadeAdsense"],[2528,"#pmocntr2"],[3942,"#publiEspecial"],[1314,"#publicidad-02"],[3224,"#publicidad-contextual"],[412,"#publicidad-top"],[249,"#publicidadTop"],[275,"#publicidad_button_home"],[577,"#publicidade-topo"],[990,"#publicidadeIsland"],[1536,"#publicidade_not"],[1813,"#publicidades_top"],[65,"#publicidadheadernota"],[3447,"#publicidadsky"],[1053,"#publicidadtop_content"],[439,"#queTooltip"],[2526,"#topopublicidade"],[2645,".AdsPot"],[2387,".Publicidade"],[4091,".PublicidadeSidebarSuperior"],[3029,".ad-superbanner"],[3354,".arriba-publicidad"],[2068,".bannerBox"],[2027,".bb-lt-adv"],[394,".bb-pub-120_600"],[2317,".bb-pub-300_250"],[4046,".ctn-advertising"],[3366,".esp_publicidad"],[2658,".google-ads-obj"],[1054,".google-ads-rodape"],[3342,".googleAdFoot"],[1246,".hpPublicidadTop"],[2525,".lomadee-wp-related-offers"],[1837,".lv24hpublicidad"],[3094,".main-ads"],[634,".publicidad-bg"],[617,".publicidad-ct"],[2312,".publicidadMiddle"],[212,".publicidadSuperior"],[2149,".publicidad_big"],[1616,".publicidad_especial"],[2147,".publicidad_top"],[3379,".publicidade"],[2764,".publicidade-abre_padrao"],[3677,".publicidade-dotted"],[2202,".publicidade_superbanner"],[3508,".publicidades"],[1875,".publicidadright"],[1744,".publicidadtxt"],[2216,".standard-ad"],[542,".video_ads_overdiv"]];
const genericExceptionSieve = [2947,1575,2773,586,3775,130,2824,1779,3906,615,803,666,1114,63,344,3258,3279,131,3736,4092,857,2690,4019,2768,1739,2466,874,1336,140,2375,3336,1621,3380,3360,3257,3050,3450,167,740,3817,2068,2332,2311];
const genericExceptionMap = [["manhastro.net","ins.adsbygoogle[data-ad-slot]\nins.adsbygoogle[data-ad-client]"],["softwareany.net","ins.adsbygoogle[data-ad-slot]\nins.adsbygoogle[data-ad-client]"],["autotop.net",".ad-unit:not(.textads)"],["cinelatino.net",".ad-unit:not(.textads)\n.ad-space\n.ad-zone"],["mundolucha.com",".ad-box:not(#ad-banner):not(:empty)"],["animefire.plus",".ad-box:not(#ad-banner):not(:empty)"],["animesonlinecc.us",".ad-box:not(#ad-banner):not(:empty)"],["animesup.info",".ad-box:not(#ad-banner):not(:empty)"],["animeyabu.net",".ad-box:not(#ad-banner):not(:empty)"],["animeyabu.org",".ad-box:not(#ad-banner):not(:empty)"],["drstonebr.com",".ad-box:not(#ad-banner):not(:empty)"],["goanimes.vip",".ad-box:not(#ad-banner):not(:empty)"],["goyabu.us",".ad-box:not(#ad-banner):not(:empty)"],["otakuanimess.net",".ad-box:not(#ad-banner):not(:empty)"],["3djuegos.com",".ad-box:not(#ad-banner):not(:empty)\n.bottomAd\n.ad_300x250\n.ad-lat2"],["3djuegosguias.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["3djuegospc.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["applesfera.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["compradiccion.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["directoalpaladar.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["elblogsalmon.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["espinof.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["genbeta.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["mundoxiaomi.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["trendencias.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["trendenciashombre.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["vidaextra.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["vitonica.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xataka.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakaciencia.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakafoto.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakahome.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakamovil.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakandroid.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakawindows.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["goyabu.to",".ad-placeholder:not(#filter_ads_by_classname):not(#detect_ad_empire):not(#detect):not(.adsbox)"],["aquiyahorajuegos.net",".adsBanner"],["futbolfantasy.com",".adsBanner"],["dicasdefinancas.net",".ad-1\n.ads-2"],["receitasdalu.net",".ad-1"],["animesonline.nz",".ads-box"],["guianoticiario.net",".ads-box"],["canalnatelinhaonline.blogspot.com","#ads-menu\n#adtech_1\n#adv_config\n#rightAdsDiv"],["negociosecommerce.com",".adxs-vertisements"],["puromarketing.com",".adxs-vertisements"],["todostartups.com",".adxs-vertisements"],["niusdiario.es",".sponsored_ad"],["tipsdesalud.tips",".ad_content\n.ad_body\n.ad_main\n.ad_title"],["saludmasya.com",".ad_content\n.ad_body\n.ad_main\n.ad_title"],["radiopanamericana.com","#adContainer\n.adclass"],["oplanetatv.clickgratis.com.br",".ads-block"],["daemon-hentai.com",".publicite"],["coempregos.com.br",".AdsBox"],["anitube.us",".AdsBox"],["anitube.vip",".AdsBox"],["hinatasoul.com",".AdsBox"],["tecnologiaonline.site",".ad-placement"],["fazendorendaextra.xyz",".ad-placement"],["grandnoticias.com",".ad-placement"],["hartico.com",".ad-placement"],["hobba.tv","#ad-block\n#ad-box"],["maisgasolina.com","#adblock"],["peru21.pe",".adstop"],["nationalgeographic.com.es",".ad-item"],["paste1c.ru",".share-panel"],["poder360.com.br",".box-advertising"],["cozinhandofitness.com","#ads2"],["nebrija.com","#publicidad"],["elsuperfullhd.com",".vertical-ads"],["flatout.com.br",".penci-google-adsense\n.penci_single_ad_before_content"],["gczs.gldjc.com",".bannerBox"],["charmingescortsamsterdam.com",".bannerBox"],["brasilescola.uol.com.br",".banner"],["simple.ripley.com.pe",".dfp-ad-unit"]];

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
