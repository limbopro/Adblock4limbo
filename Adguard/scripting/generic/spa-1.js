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

// spa-1

const toImport = [[8888103,".pubContainer"],[4247019,".cnt-publi"],[14006096,".dfp-tag-wrapper-container"],[7677238,".voc-advertising"],[6057735,".publicity-content"],[3283703,".publicidad"],[9707103,"#PublicidadCentro"],[7830425,"#PublicidadSuperior"],[2565246,"#Publicidade"],[625173,"#ad-230x100-1"],[586601,"#ad-300x40-5"],[485262,"#ad-635x40-1"],[7953969,"#ad4"],[1017386,"#ad_publicidad"],[13532495,"#adhome"],[13625798,"#ads_top"],[15157746,"#adsense2"],[3286834,"#adsense2pos"],[15442350,"#adsensePreCuerpo"],[9671548,"#adsensepo"],[16547902,"#adv_bottom_1"],[6221547,"#adv_left_1"],[6220443,"#adv_middle"],[16168610,"#adv_middle_2"],[15824957,"#adv_position_1,#adv_position_4"],[10045480,"#adv_top_1"],[16506076,"#adv_top_right"],[620766,"#advertising_header"],[2738705,"#anunciosGoogle"],[1959508,"#avazu_ads_slide"],[2421496,"#barraPublicidade"],[15475895,"#liBannerDireita"],[6825030,"#liPublicidadeAdsense"],[16488928,"#pmocntr2"],[1159014,"#publiEspecial"],[1811746,"#publicidad-02"],[13950104,"#publicidad-contextual"],[12919196,"#publicidad-top"],[1814777,"#publicidadTop"],[2392339,"#publicidad_button_home"],[13005377,"#publicidade-topo"],[11412446,"#publicidadeIsland"],[1959424,"#publicidade_not"],[13006613,"#publicidades_top"],[12921591,"#publicidadhead"],[9822273,"#publicidadheadernota"],[1813879,"#publicidadsky"],[13968413,"#publicidadtop_content"],[7877047,"#queTooltip"],[10889694,"#topopublicidade"],[16616021,".AdsPot"],[13527379,".Publicidade"],[11460603,".PublicidadeSidebarSuperior"],[13822933,".ad-superbanner"],[2215194,".arriba-publicidad"],[3078164,".bannerBox"],[5081067,".bb-lt-adv"],[4751754,".bb-pub-120_600"],[4749581,".bb-pub-300_250"],[2785230,".ctn-advertising"],[15682854,".esp_publicidad"],[10087010,".google-ads-obj"],[2184222,".google-ads-rodape"],[3833102,".googleAdFoot"],[13227230,".hpPublicidadTop"],[12675549,".lomadee-wp-related-offers"],[9586477,".lv24hpublicidad"],[15305750,".main-ads"],[3748474,".publicidad-bg"],[3748457,".publicidad-ct"],[1632520,".publicidadMiddle"],[176340,".publicidadSuperior"],[1923173,".publicidad_big"],[7562832,".publicidad_especial"],[1923171,".publicidad_top"],[2608435,".publicidade"],[2611916,".publicidade-abre_padrao"],[175709,".publicidade-dotted"],[3119258,".publicidade_superbanner"],[8826292,".publicidades"],[6154067,".publicidadright"],[3745488,".publicidadtxt"],[247976,".standard-ad"],[8389150,".video_ads_overdiv"]];

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
