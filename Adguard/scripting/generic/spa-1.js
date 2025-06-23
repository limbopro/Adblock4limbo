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

const genericSelectorMap = [[14585514,"#banner-728x90-area"],[10801041,"#banner-300x600-area"],[8888103,".pubContainer"],[4247019,".cnt-publi"],[14006096,".dfp-tag-wrapper-container"],[7677238,".voc-advertising"],[6057735,".publicity-content"],[3283703,".publicidad"],[9707103,"#PublicidadCentro"],[7830425,"#PublicidadSuperior"],[2565246,"#Publicidade"],[625173,"#ad-230x100-1"],[586601,"#ad-300x40-5"],[485262,"#ad-635x40-1"],[7953969,"#ad4"],[1017386,"#ad_publicidad"],[13532495,"#adhome"],[13625798,"#ads_top"],[15157746,"#adsense2"],[3286834,"#adsense2pos"],[15442350,"#adsensePreCuerpo"],[9671548,"#adsensepo"],[16547902,"#adv_bottom_1"],[6221547,"#adv_left_1"],[6220443,"#adv_middle"],[16168610,"#adv_middle_2"],[15824957,"#adv_position_1,\n#adv_position_4"],[10045480,"#adv_top_1"],[16506076,"#adv_top_right"],[620766,"#advertising_header"],[2738705,"#anunciosGoogle"],[1959508,"#avazu_ads_slide"],[2421496,"#barraPublicidade"],[15475895,"#liBannerDireita"],[6825030,"#liPublicidadeAdsense"],[16488928,"#pmocntr2"],[1159014,"#publiEspecial"],[1811746,"#publicidad-02"],[13950104,"#publicidad-contextual"],[12919196,"#publicidad-top"],[1814777,"#publicidadTop"],[2392339,"#publicidad_button_home"],[13005377,"#publicidade-topo"],[11412446,"#publicidadeIsland"],[1959424,"#publicidade_not"],[13006613,"#publicidades_top"],[12921591,"#publicidadhead"],[9822273,"#publicidadheadernota"],[1813879,"#publicidadsky"],[13968413,"#publicidadtop_content"],[7877047,"#queTooltip"],[10889694,"#topopublicidade"],[16616021,".AdsPot"],[13527379,".Publicidade"],[11460603,".PublicidadeSidebarSuperior"],[13822933,".ad-superbanner"],[2215194,".arriba-publicidad"],[3078164,".bannerBox"],[5081067,".bb-lt-adv"],[4751754,".bb-pub-120_600"],[4749581,".bb-pub-300_250"],[2785230,".ctn-advertising"],[15682854,".esp_publicidad"],[10087010,".google-ads-obj"],[2184222,".google-ads-rodape"],[3833102,".googleAdFoot"],[13227230,".hpPublicidadTop"],[12675549,".lomadee-wp-related-offers"],[9586477,".lv24hpublicidad"],[15305750,".main-ads"],[3748474,".publicidad-bg"],[3748457,".publicidad-ct"],[1632520,".publicidadMiddle"],[176340,".publicidadSuperior"],[1923173,".publicidad_big"],[7562832,".publicidad_especial"],[1923171,".publicidad_top"],[2608435,".publicidade"],[2611916,".publicidade-abre_padrao"],[175709,".publicidade-dotted"],[3119258,".publicidade_superbanner"],[8826292,".publicidades"],[6154067,".publicidadright"],[3745488,".publicidadtxt"],[247976,".standard-ad"],[8389150,".video_ads_overdiv"]];
const genericExceptionSieve = [13280807,13564629,9622090,13582015,10834050,2210568,1545971,7311170,16153475,8454759,2237219,6058650,6235226,634943,9003352,12770490,1785039,6877315,7540376,7892988,15709017,4065922,2215859,11958992,16635595,8251810,11039594,11482424,6443148,1706311,12327497,9739528,12318293,12860724,285984,13388985,12950506,12000131,6589818,4825255,14811876,14491369,3078164,12658951];
const genericExceptionMap = [["autotop.net",".ad-unit:not(.textads)"],["cinelatino.net",".ad-unit:not(.textads)\n.ad-space\n.ad-zone"],["mundolucha.com",".ad-box:not(#ad-banner):not(:empty)"],["animefire.plus",".ad-box:not(#ad-banner):not(:empty)"],["animesonlinecc.us",".ad-box:not(#ad-banner):not(:empty)"],["animesup.info",".ad-box:not(#ad-banner):not(:empty)"],["animeyabu.net",".ad-box:not(#ad-banner):not(:empty)"],["animeyabu.org",".ad-box:not(#ad-banner):not(:empty)"],["drstonebr.com",".ad-box:not(#ad-banner):not(:empty)"],["goanimes.vip",".ad-box:not(#ad-banner):not(:empty)"],["goyabu.us",".ad-box:not(#ad-banner):not(:empty)"],["otakuanimess.net",".ad-box:not(#ad-banner):not(:empty)"],["3djuegos.com",".ad-box:not(#ad-banner):not(:empty)\n.bottomAd\n.ad_300x250\n.ad-lat2"],["3djuegosguias.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["3djuegospc.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["applesfera.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["compradiccion.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["directoalpaladar.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["elblogsalmon.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["espinof.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["genbeta.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["mundoxiaomi.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["trendencias.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["trendenciashombre.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["vidaextra.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["vitonica.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xataka.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakaciencia.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakafoto.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakahome.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakamovil.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakandroid.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["xatakawindows.com",".ad-box:not(#ad-banner):not(:empty)\n.ad-lat2"],["goyabu.to",".ad-placeholder:not(#filter_ads_by_classname):not(#detect_ad_empire):not(#detect):not(.adsbox)"],["aquiyahorajuegos.net",".adsBanner"],["futbolfantasy.com",".adsBanner"],["dicasdefinancas.net",".ad-1\n.ads-2"],["receitasdalu.net",".ad-1"],["softwareany.net","ins.adsbygoogle[data-ad-client]\nins.adsbygoogle[data-ad-slot]"],["animesonline.nz",".ads-box"],["guianoticiario.net",".ads-box"],["canalnatelinhaonline.blogspot.com","#ads-menu\n#adtech_1\n#adv_config\n#rightAdsDiv"],["negociosecommerce.com",".adxs-vertisements"],["puromarketing.com",".adxs-vertisements"],["todostartups.com",".adxs-vertisements"],["niusdiario.es",".sponsored_ad"],["tipsdesalud.tips",".ad_content\n.ad_body\n.ad_main\n.ad_title"],["saludmasya.com",".ad_content\n.ad_body\n.ad_main\n.ad_title"],["radiopanamericana.com","#adContainer\n.adclass"],["oplanetatv.clickgratis.com.br",".ads-block"],["daemon-hentai.com",".publicite"],["coempregos.com.br",".AdsBox"],["anitube.us",".AdsBox"],["anitube.vip",".AdsBox"],["hinatasoul.com",".AdsBox"],["tecnologiaonline.site",".ad-placement"],["fazendorendaextra.xyz",".ad-placement"],["grandnoticias.com",".ad-placement"],["hartico.com",".ad-placement"],["hobba.tv","#ad-block\n#ad-box"],["sapo.pt",".adslot"],["maisgasolina.com","#adblock"],["peru21.pe",".adstop"],["nationalgeographic.com.es",".ad-item"],["paste1c.ru",".share-panel"],["poder360.com.br",".box-advertising"],["cozinhandofitness.com","#ads2"],["nebrija.com","#publicidad"],["elsuperfullhd.com",".vertical-ads"],["flatout.com.br",".penci-google-adsense\n.penci_single_ad_before_content"],["gczs.gldjc.com",".bannerBox"],["charmingescortsamsterdam.com",".bannerBox"],["simple.ripley.com.pe",".dfp-ad-unit"]];

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
