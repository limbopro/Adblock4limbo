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

const genericSelectorMap = [[1473840,"#a-d-s"],[3245547,"#a_201"],[11101506,"#a_d_billboard"],[16599812,"#ad_gora_srodek"],[6924954,"#adsense_main_lewa"],[6389866,"#adtify-widget"],[4194016,"#arlington-optin"],[12021142,"#ceneo-placeholder-ceneo-12"],[16169074,"#ceneo_slider"],[6262982,"#goback"],[5372526,"#like-us-adblock-modal"],[13761106,"#main_advertisement"],[8762747,"#middleboxrectangle"],[3160304,"#nsix_baloon"],[9562044,"#oponeoWidget"],[15081780,"#poza-gridem"],[14853907,"#seeAlsoBox"],[1033411,".BanerHPBig"],[4053716,".Reklama"],[9407288,".a-d-v"],[4152187,".ad-offers"],[3436729,".ad_Handle"],[12762527,".addv-container"],[5874521,".adexonModuleportel.pl"],[6894198,".adoceanGora1Wrapper"],[3575112,".boxAdvert"],[6929922,".advContainer"],[2036942,".adverstiment-box"],[12342110,".advertisemen-block"],[12333911,".advertisment-panel"],[15758586,".adviewDFPBanner"],[16426660,".appAdvContainer"],[8811830,".article_advertisement"],[2791131,".banery_750_100"],[4290008,".box.ofero24"],[979470,".boxAdv"],[13506124,"#ceneokobieta2"],[16320252,".ceneo-products.clearfix"],[6992374,".cg2-ad"],[13124389,".cookemessagecloseico"],[5427495,".dynamicAD"],[13261698,".hide-for-small.baner-promo-euro"],[3198016,".home_ads"],[15409397,".homeadv"],[10276625,".houdini"],[7959590,".jqmOverlay"],[4272395,".mod.mod_cpCommerce.small"],[2295893,".opacitybox"],[13197649,".oponeoWidget"],[5021384,".popup-premium__apla"],[1567998,".rek_kontener"],[2054702,".reklama-gora"],[4308824,".sec.ecommerce"],[14732879,".tvn-advertisement"],[9903538,".zalando-ad"],[912926,".zalando-placeholder"],[14706896,"div#skapiec_ad"],[14485271,"ul.sharing-tools"],[15626721,".banneritem"],[3136542,".a-d-v-i"],[3993031,"IMG[alt=\"Reklama\"], .l-box--99.l-box > .text-center"],[3513804,".kill-adblock-container"],[15505559,".adblock-alt"],[10827884,".adblock-placeholder"],[11722471,".ban-69.row.ban"],[7068266,".scrolled.infoBlock"]];
const genericExceptionSieve = [1567998,15626721,3136542,3993031,8411604,15144546,4837762,10393958,4105725,1444686,7872102,2766266,14553561,15228959,5760613,55426,1381554,8567284,15621657,4825255,4072598,3345394,15864389,13818820,12747823,7205220,14784955,4144466,3482616,7375267,10292561,3180160,8328142,8371964,7019440,8422071,7370304,628129,13642219,8035137,10054324,12349939,14958073,12839506,449175,371857,9822077,13577215,15116980,1700990,10984224,12341963,12309163,13712782,4110591,10390333,3223873,4155030,14112296,11690969,2276907,16153475];
const genericExceptionMap = [["lubartow24.pl",".rek_kontener"],["m3esolutions.com",".banneritem"],["sloworegionu.pl",".banneritem"],["4active.eu",".banneritem"],["valida.pl",".banneritem"],["foodprint.pl",".banneritem"],["roztoczanskipn.pl",".banneritem"],["plonskwsieci.pl",".a-d-v-i"],["szydlowiecki.eu","IMG[alt=\"Reklama\"], .l-box--99.l-box > .text-center"],["www.wykop.pl","IMG[alt=\"Reklama\"], .l-box--99.l-box > .text-center"],["infopodkarpacie.pl",".bg_ad"],["e-stargard.pl",".bg_ad"],["mojeinfo24.pl",".bg_ad"],["freedisc.pl",".footer-ad"],["gralandia.tv","#ad_content"],["memytutaj.pl","#top-ad"],["partech.pl",".advertising_block"],["wtkplay.pl",".advertising_block\n.reklama"],["epoznan.pl",".advertising_block\n.reklama"],["lech.tv",".advertising_block\n.reklama\n.advertising_banner"],["pks-czestochowa.pl",".widget-advertisement"],["spottedlublin.pl",".share-container"],["windowsowo.pl","#adBanner"],["poczta.interia.pl",".ad-message"],["int.pl",".ad-message"],["digest.com.pl",".display-ad-block"],["epainfo.pl",".td-ad-background-link\n.pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["filmyfilmy.pl",".sidebar_advert"],["kafeteria.pl",".is-sponsored"],["mandarinodesign.eu",".reklama"],["ddb24.pl",".reklama"],["iotwock.info",".reklama"],["ototorun.pl",".reklama"],["twojradom.pl",".reklama"],["szczecinek.com",".reklama"],["zycie.pila.pl",".reklama"],["kurierpodlaski.pl",".reklama"],["zambrow.org",".reklama"],["egarwolin.pl",".reklama"],["lowicz24.eu",".reklama"],["ciechanowinaczej.pl",".reklama"],["itvpiaseczno.pl",".reklama"],["ikampinos.pl",".reklama"],["infosiedlce.pl",".reklama"],["ibialoleka.pl",".reklama"],["izoliborz.pl",".reklama"],["imokotow.pl",".reklama"],["nolesnica.pl",".reklama"],["lipno-cli.pl",".reklama"],["golub-cgd.pl",".reklama"],["ibielsk.pl",".reklama"],["brodnica-cbr.pl",".reklama"],["egorzow.pl",".reklama"],["ipragapoludnie.pl",".reklama"],["rypin-cry.pl",".reklama"],["wabrzezno-cwa.pl",".reklama"],["wio.waw.pl",".reklama"],["e-wyszogrod.pl",".reklama"],["brzozow24.pl",".reklama"],["bukowsko24.pl",".reklama"],["esanok.pl",".reklama"],["jaslo24.pl",".reklama"],["rzeszow24.pl",".reklama"],["strzyzow24.pl",".reklama"],["tvpodkarpacie.pl",".reklama"],["ustrzyki24.pl",".reklama"],["zagorz24.pl",".reklama"],["zarszyn24.pl",".reklama"],["kurierzamojski.pl",".reklama"],["plonszczak.pl",".reklama"],["katowickisport.pl",".reklama\n.pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads\n#admain"],["purepc.pl",".reklama"],["walbrzych24.com","#gwd-ad"],["zloty-pociag.com","#gwd-ad"],["naswieczniku-blog.pl",".vertical-ads"],["so-magazyn.pl",".pub_300x250\n.text_ads"],["o2.pl",".pub_300x250\n.text_ads"],["pudelek.pl",".pub_300x250\n.text_ads"],["film.wp.pl",".pub_300x250\n.text_ads"],["finanse.wp.pl",".pub_300x250\n.text_ads"],["gwiazdy.wp.pl",".pub_300x250\n.text_ads"],["kobieta.wp.pl",".pub_300x250\n.text_ads"],["ksiazki.wp.pl",".pub_300x250\n.text_ads"],["magazyn.wp.pl",".pub_300x250\n.text_ads"],["moto.wp.pl",".pub_300x250\n.text_ads"],["opinie.wp.pl",".pub_300x250\n.text_ads"],["sportowefakty.wp.pl",".pub_300x250\n.text_ads"],["tech.wp.pl",".pub_300x250\n.text_ads"],["teleshow.wp.pl",".pub_300x250\n.text_ads"],["wiadomosci.wp.pl",".pub_300x250\n.text_ads"],["jbzdy.com.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["jbzdy.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["kwejk.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["piwniczkamemow.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["eszkola.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["dobreprogramy.pl",".pub_300x250\n.pub_300x250\n.text_ads\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads\n.ad_container"],["interia.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["kwantowo.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["imeds.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["pl.aleteia.org",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["overwatch.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["jackcaleib.com",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["waw4free.pl",".pub_300x250\n.text_ads\n#adsense\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads\n.adsbox\n.showad\n.showbox\n.zobacz-box, #detal_top, #opis > div > A, .adsbygoogle"],["dziwneobrazki.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["fm.tuba.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["hentai-online.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["bajeczki.org",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["tvbraniewo24.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["anime-odcinki.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["bh-res.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["scentre.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["towideo.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["cypr24.eu",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["cdahd.co",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["player.radiozet.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["meloradio.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["antyradio.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["chillizet.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["radioplus.pl",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["tarnowska.tv",".pub_300x250\n.text_ads\n.pub_300x250m\n.pub_728x90\n.text_ad\n.text-ad\n.textAd\n.text-ad-links\n.text-ads"],["polskatimes.pl","#advert1\n#advert1\n.div-gpt-ad\n.div-gpt-ad"],["dziennikbaltycki.pl","#advert1\n#advert1\n.div-gpt-ad\n.div-gpt-ad"],["expressilustrowany.pl","#advert1\n.div-gpt-ad"],["www.realmadryt.pl",".div-gpt-ad\n.adsbox"],["24gliwice.pl","#adsense"],["wyborkierowcow.pl","#adsense"],["kino123.pl","#adsense"],["jednoslad.pl","#adsense"],["how2play.pl","#adsense"],["polskiedzieje.pl","#adsense"],["ciekawe.org","#adsense"],["baza-lekow.com.pl","#adsense"],["testhub.pl","#adsense"],["widzewtomy.net","#adsense"],["gadzet.telchina.pl","#adsense"],["ostatniatawerna.pl","#adsense"],["kulturalnemedia.pl","#adsense"],["newonce.net","#adsense"],["variatkowo.pl","#adsense"],["legendyboksu.pl","#adsense"],["mywildforest.pl","#adsense"],["magyazyn.pl","#adsense"],["chillitorun.pl","#adsense"],["zwiadowcahistorii.pl","#adsense"],["bp24.pl","#adsense"],["adtaily.pl","#sponsorText"],["dziennikwschodni.pl",".adholder\n.ad-holder"],["e-dokument.org","#banner_ad"],["znaki.vxm.pl","#banner_ad"],["forum.komputerswiat.pl","#ks_breaking_news"],["vod.pl",".text-ad\n.infoCloud"],["jeja.pl","#bottomAd"],["kreskowkazone.pl",".myTestAd"],["leaseplan.pl",".afs_ads"],["novafusion.pl",".afs_ads"],["funnygames.pl",".afs_ads"],["minecraftpolska.net","#reklama"],["pracawgdansku.com.pl","#reklama"],["mojawyspa.co.uk",".adtable"],["pecetowicz.pl",".adBanner"],["senda.pl",".advert_box"],["start.me",".app__message > .info-message, .cookiebar\n.app__main-layout > .app__message"],["swiat-magii.pl","#ad-container"],["webinsider.pl",".etad"],["vorek.pl",".adsbox"],["gry-planszowe.pl",".adsbox"],["darmowe-torenty.pl",".adsbox"],["torrentcity.pl",".adsbox"],["bitnova.info",".adsbox"],["darmowyskin.pl",".adsbox"],["lunaticfiles.com",".adsbox"],["www.nadmorski24.pl",".adsbox"],["telewizjattm.pl",".adsbox"],["nadmorski24.pl",".adsbox"],["kociewie24.pl",".adsbox"],["virpe.com",".adsBox"],["fileone.tv",".adsBox"],["muratorplus.pl",".adsBox"],["zarabiam.com",".adplacement"],["reddit.com",".ad-banner"],["exsites.pl","#ad-slot"],["filmweb.pl",".ws__wrapper\nbody .ws__wrapper"],["yafud.pl",".adsbygoogle, #adsense_banner_top"]];

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
