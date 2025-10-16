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

const genericSelectorMap = [[3376,"#a-d-s"],[1515,"#a_201"],[1346,"#a_d_billboard"],[2820,"#ad_gora_srodek"],[2714,"#adsense_main_lewa"],[106,"#adtify-widget"],[3808,"#arlington-optin"],[3478,"#ceneo-placeholder-ceneo-12"],[2162,"#ceneo_slider"],[198,"#goback"],[2670,"#like-us-adblock-modal"],[2642,"#main_advertisement"],[1403,"#middleboxrectangle"],[2288,"#nsix_baloon"],[1980,"#oponeoWidget"],[308,"#poza-gridem"],[1811,"#seeAlsoBox"],[1219,".BanerHPBig"],[2772,".Reklama"],[2872,".a-d-v"],[2939,".ad-offers"],[185,".ad_Handle"],[3487,".addv-container"],[857,".adexonModuleportel.pl"],[630,".adoceanGora1Wrapper"],[3400,".boxAdvert"],[3586,".advContainer"],[1230,".adverstiment-box"],[862,".advertisemen-block"],[855,".advertisment-panel"],[1274,".adviewDFPBanner"],[1700,".appAdvContainer"],[1334,".article_advertisement"],[1755,".banery_750_100"],[1496,".box.ofero24"],[526,".boxAdv"],[1612,"#ceneokobieta2"],[1788,".ceneo-products.clearfix"],[502,".cg2-ad"],[805,".cookemessagecloseico"],[295,".dynamicAD"],[2946,".hide-for-small.baner-promo-euro"],[3136,".home_ads"],[245,".homeadv"],[3857,".houdini"],[1062,".jqmOverlay"],[267,".mod.mod_cpCommerce.small"],[2133,".opacitybox"],[337,".oponeoWidget"],[3784,".popup-premium__apla"],[3326,".rek_kontener"],[2606,".reklama-gora"],[3928,".sec.ecommerce"],[3663,".tvn-advertisement"],[3506,".zalando-ad"],[3614,".zalando-placeholder"],[2256,"div#skapiec_ad"],[1815,"ul.sharing-tools"],[481,".banneritem"],[3102,".a-d-v-i"],[3527,"IMG[alt=\"Reklama\"], .l-box--99.l-box > .text-center"]];
const genericExceptionSieve = [3326,481,3102,3527,2516,1634,386,2406,1533,2894,3686,1466,473,31,1637,2178,1202,2548,3609,167,1174,3058];
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
