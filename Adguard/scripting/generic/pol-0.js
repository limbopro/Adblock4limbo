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

// pol-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[1473840,"#a-d-s"],[3245547,"#a_201"],[11101506,"#a_d_billboard"],[16599812,"#ad_gora_srodek"],[6924954,"#adsense_main_lewa"],[6389866,"#adtify-widget"],[4194016,"#arlington-optin"],[12021142,"#ceneo-placeholder-ceneo-12"],[16169074,"#ceneo_slider"],[6262982,"#goback"],[5372526,"#like-us-adblock-modal"],[13761106,"#main_advertisement"],[8762747,"#middleboxrectangle"],[3160304,"#nsix_baloon"],[9562044,"#oponeoWidget"],[15081780,"#poza-gridem"],[14853907,"#seeAlsoBox"],[1033411,".BanerHPBig"],[4053716,".Reklama"],[9407288,".a-d-v"],[4152187,".ad-offers"],[3436729,".ad_Handle"],[12762527,".addv-container"],[5874521,".adexonModuleportel.pl"],[6894198,".adoceanGora1Wrapper"],[3575112,".boxAdvert"],[6929922,".advContainer"],[2036942,".adverstiment-box"],[12342110,".advertisemen-block"],[12333911,".advertisment-panel"],[15758586,".adviewDFPBanner"],[16426660,".appAdvContainer"],[8811830,".article_advertisement"],[2791131,".banery_750_100"],[4290008,".box.ofero24"],[979470,".boxAdv"],[13506124,"#ceneokobieta2"],[16320252,".ceneo-products.clearfix"],[6992374,".cg2-ad"],[13124389,".cookemessagecloseico"],[5427495,".dynamicAD"],[13261698,".hide-for-small.baner-promo-euro"],[3198016,".home_ads"],[15409397,".homeadv"],[10276625,".houdini"],[7959590,".jqmOverlay"],[4272395,".mod.mod_cpCommerce.small"],[2295893,".opacitybox"],[13197649,".oponeoWidget"],[5021384,".popup-premium__apla"],[2054702,".reklama-gora"],[4308824,".sec.ecommerce"],[14732879,".tvn-advertisement"],[9903538,".zalando-ad"],[912926,".zalando-placeholder"],[14706896,"div#skapiec_ad"],[14485271,"ul.sharing-tools"]];
const genericExceptionSieve = [1567998,15626721,3136542,3993031,8411604,15144546,4837762,10393958,4105725,1444686,7872102,2766266,14553561,15228959,5760613,55426,1381554,8567284,15621657,4825255,4072598,3345394];
const genericExceptionMap = [["lubartow24.pl",".rek_kontener"],["m3esolutions.com",".banneritem"],["sloworegionu.pl",".banneritem"],["4active.eu",".banneritem"],["valida.pl",".banneritem"],["foodprint.pl",".banneritem"],["roztoczanskipn.pl",".banneritem"],["plonskwsieci.pl",".a-d-v-i"],["szydlowiecki.eu","IMG[alt=\"Reklama\"], .l-box--99.l-box > .text-center"],["www.wykop.pl","IMG[alt=\"Reklama\"], .l-box--99.l-box > .text-center"],["infopodkarpacie.pl",".bg_ad"],["e-stargard.pl",".bg_ad"],["mojeinfo24.pl",".bg_ad"],["freedisc.pl",".footer-ad"],["gralandia.tv","#ad_content"],["memytutaj.pl","#top-ad"],["partech.pl",".advertising_block"],["pks-czestochowa.pl",".widget-advertisement"],["spottedlublin.pl",".share-container"],["windowsowo.pl","#adBanner"],["poczta.interia.pl",".ad-message"],["int.pl",".ad-message"],["digest.com.pl",".display-ad-block"],["epainfo.pl",".td-ad-background-link"],["filmyfilmy.pl",".sidebar_advert"],["kafeteria.pl",".is-sponsored"],["mandarinodesign.eu",".reklama"],["ddb24.pl",".reklama"],["iotwock.info",".reklama"],["ototorun.pl",".reklama"],["twojradom.pl",".reklama"],["szczecinek.com",".reklama"],["zycie.pila.pl",".reklama"],["kurierpodlaski.pl",".reklama"],["zambrow.org",".reklama"],["egarwolin.pl",".reklama"],["lowicz24.eu",".reklama"],["ciechanowinaczej.pl",".reklama"],["itvpiaseczno.pl",".reklama"],["ikampinos.pl",".reklama"],["infosiedlce.pl",".reklama"],["ibialoleka.pl",".reklama"],["izoliborz.pl",".reklama"],["imokotow.pl",".reklama"],["nolesnica.pl",".reklama"],["lipno-cli.pl",".reklama"],["golub-cgd.pl",".reklama"],["ibielsk.pl",".reklama"],["brodnica-cbr.pl",".reklama"],["egorzow.pl",".reklama"],["ipragapoludnie.pl",".reklama"],["rypin-cry.pl",".reklama"],["wabrzezno-cwa.pl",".reklama"],["wio.waw.pl",".reklama"],["e-wyszogrod.pl",".reklama"],["brzozow24.pl",".reklama"],["bukowsko24.pl",".reklama"],["esanok.pl",".reklama"],["jaslo24.pl",".reklama"],["rzeszow24.pl",".reklama"],["strzyzow24.pl",".reklama"],["tvpodkarpacie.pl",".reklama"],["ustrzyki24.pl",".reklama"],["zagorz24.pl",".reklama"],["zarszyn24.pl",".reklama"],["kurierzamojski.pl",".reklama"],["plonszczak.pl",".reklama"],["walbrzych24.com","#gwd-ad"],["zloty-pociag.com","#gwd-ad"],["naswieczniku-blog.pl",".vertical-ads"],["so-magazyn.pl",".pub_300x250\n.text_ads"],["o2.pl",".pub_300x250\n.text_ads"],["pudelek.pl",".pub_300x250\n.text_ads"],["film.wp.pl",".pub_300x250\n.text_ads"],["finanse.wp.pl",".pub_300x250\n.text_ads"],["gwiazdy.wp.pl",".pub_300x250\n.text_ads"],["kobieta.wp.pl",".pub_300x250\n.text_ads"],["ksiazki.wp.pl",".pub_300x250\n.text_ads"],["magazyn.wp.pl",".pub_300x250\n.text_ads"],["moto.wp.pl",".pub_300x250\n.text_ads"],["opinie.wp.pl",".pub_300x250\n.text_ads"],["sportowefakty.wp.pl",".pub_300x250\n.text_ads"],["tech.wp.pl",".pub_300x250\n.text_ads"],["teleshow.wp.pl",".pub_300x250\n.text_ads"],["wiadomosci.wp.pl",".pub_300x250\n.text_ads"]];

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
