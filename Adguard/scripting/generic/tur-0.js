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

// tur-0

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[5608524,".link-group > div.features,\n.link-group > div.table-container"],[16245111,"#uyarikutu"],[16247365,".sayfa-arka"],[15974404,".noxstream-gorsel"],[6057515,".pfixedd"],[1947122,".film-tab > a[target=\"_blank\"],\n.film-tab > div#livestream_wrapper ~ div.overlay-top,\n.film-tab > div[aria-label=\"video player\"] > div#overlay-top,\n.film-tab > div.playerimiz > div.overlay-top,\n.film-tab > div#reki"],[12312628,".cb_splash_ads"],[589062,".arbet_tables"],[13713901,"#livevideo > div.overlay-bottom"],[6043141,"#livestream_wrapper > div.overlay-top"],[3298512,".playerimiz > div.first-notification,\n.playerimiz > a[style],\n.playerimiz > div[aria-label=\"video player\"] > div#overlay-top"],[12154956,"#main > .wrap.cf > .reklam ~ p[style^=\"background-color:\"],\n#main > .wrap.cf > .reklam ~ #content > .post > p[style^=\"background-color:\"]"],[6433589,".rek-ivr,\n.rek-ivr ~ p[style^=\"background-color:\"]"],[4209341,".fuck-ivr,\n.fuck-ivr ~ p[style^=\"background-color:\"]"],[3486104,"#preRollBd"],[11600940,"#footerFixedDivWrapper"],[4681316,"#mPlayerFd"],[13039361,".hrklm_oblong"],[15580987,"#footer_fad"],[13057272,".play_ust_txt"],[15617187,".g-title > div.containerAds"],[9603018,".pageskin > div.mbl_psc,\n.pageskin div[class^=\"r_reklam_\"],\nbody > div.pageskin"],[4307545,".rkm"],[11143704,".mst_ad"],[11114422,".st_ad"],[210340,"body > div#pageskin_ayd"],[7972951,".medyanet-inline-adv"],[16701915,"#haber_ustu_reklam"],[1666073,".nokta-display-ad"],[8594111,"#adStarter"],[8283624,".textrek"],[13325354,".playerinads"],[16579549,".nogay-fixed-bottom-bar"],[14507354,".nogay-fixed-top-bar"],[6449540,".first-notification#nogay-notf"],[6568743,".topReklam"],[5778285,".widget-advert.text-center.my-3"],[1845364,".reklamalani"],[1867105,".reklamKodu3"],[15506979,".sagkulereklam"],[15615944,".solkulereklam"],[7192746,".reklamCerceve"],[1155763,".reklamKodu"],[12152999,"body > div#pageskin,\nbody > #pageskin"],[605290,"body > div.pgskn"],[10449682,"body > div#footerFixedDiv"],[10819680,".bey-video-reklam"],[8372558,".saniye-reklam"],[11504009,".reklamcontainer"],[9437326,".yatay-reklam"],[12122074,"#reklamCodeiframe"],[15025942,".sol_reklam_160x600,\n.sag_reklam_160x600"],[5092305,".rkm-outer"],[6478019,"ins[id^=\"rkm-par-\"].rkm.par-ad"],[14450830,"#otoreklam"],[11363038,".saniyereklam"],[11146710,".frontendAd"],[114477,"#prestitial_banner"],[3496143,".rk-300"],[3584580,"#backkapat"],[3121102,"#reklamarkaplan"],[15902780,".rek_300x350"],[4276768,".ivr > a > img"],[11004449,"div.koddostu-splash.reklam-s-koddostu#amans"],[7289478,"#video_player + #after-video"],[10138756,".rkads"],[1976469,".reklam-alani"],[12549126,".flash_aciklama"],[4653800,".telefon-reklam"],[10857629,".hizalanmis > div[class^=\"box\"] > .fra"],[9171929,"body > #rb_300:not([class])"],[10000807,".ivr-reklam"],[14217316,".reklam_a"],[15600339,".watch_video > center > a[rel=\"nofollow\"] > img"],[9845154,".reklam-alt-sabit"],[8258666,".reklam-645x90"],[13242440,".reklam-300x250"],[12520314,"#PopWin"],[4136847,"#UstReklam"],[5983650,"#alt_kayan_reklam"],[6290788,"#alt_reklam"],[7014574,"#arkaplanreklam"],[12156379,"#backgroundPopup"],[4174801,"#bannerbuyuk"],[4133816,"#betreklam"],[14605835,"#kayan_reklam"],[6834631,"#kayan_reklam_sol"],[11834044,"#kayan_reklamsag"],[11834039,"#kayan_reklamsol"],[8289095,"#leftreklam1div"],[8289124,"#leftreklam2div"],[12134297,"#reklam"],[7642167,"#reklam300x250"],[7642035,"#reklam300x600"],[13173409,"#reklam_sol"],[14958065,"#reklami"],[7147166,"#reklamikapat"],[2208382,"#ReklamiKapat"],[5509580,"#reklamlar"],[14958069,"#reklamm"],[4606362,"#sagreklam"],[6095976,"#sol_kayan_reklam"],[4355249,"#solreklam"],[8857707,"#sreklam"],[4592621,"#toolbar[style*=\"opacity: 1\"][style*=\"99999\"]"],[10839172,"#top-banner"],[15499439,"#ustReklam,\n#ustreklam"],[1891348,"#ust_ara_reklam"],[2113835,"#ustreklamlar"],[7280145,".adnet"],[9410433,".adsVideo"],[569048,".adsindirim"],[4811408,".adsortalaindirim"],[8822563,".arkaplanreklam"],[11784395,".banner300x250"],[8180435,".banner_logo_top"],[15626989,".banneralan"],[7560111,".bannerkucuk"],[255240,".detayreklam"],[2482647,".dikeyreklam"],[9117911,".intbetads-FIX"],[5584234,".kanalustureklam"],[2998407,".ortaReklam"],[1536009,".pmt-ad"],[8567204,".reklam1"],[5168636,".reklam300"],[1967884,".reklam728x90"],[5167563,".reklamSag"],[5167390,".reklamUst"],[16289469,".reklam_300_250"],[16290746,".reklam_300x250"],[6433305,".reklam_728_90"],[5166593,".reklamlar"],[2044054,".reklamoynama"],[1819401,".reklamyatay"],[6325319,".sRightAdSpace"],[11280659,".sagReklam300x250"],[16440328,".sag_reklam"],[7544671,".splash-banner"],[7548678,".splash-reklam"],[14521801,".tepebanner"],[1071718,".trgoolreklam"],[13967483,".ustOrtaSolReklam"],[15403938,".ustReklam"],[11268190,".yediyuzads"],[11192619,".yenireklam"],[1755973,"a.yildiz-pageskin-link"],[12539220,"body > div.pskinRekLam"]];
const genericExceptionSieve = [10380994,16153475,4783860,2210568,8251810,7893809,2088465,5093236,11127759,12944704,1967884,12638339,10839172,5509580,15499439,12122074,4825255,5107531,4938179,5348250,14552777,7548678,7271205,2219192];
const genericExceptionMap = [["gecmisi.com.tr",".adsbygoogle-noablate"],["akillikafa.com",".adsbygoogle-noablate"],["kazanimtestleri.com.tr",".adsbygoogle-noablate"],["tranimaci.*","ins.adsbygoogle[data-ad-client]\nins.adsbygoogle[data-ad-slot]"],["sinnerclownceviri.com",".reklam"],["dizifon.com",".reklam"],["birasyadizi.com",".reklam"],["fontyukle.net",".reklam"],["altin.in",".reklam\n.reklam728x90"],["horseturk.com",".reklam"],["t24.com.tr",".reklam"],["uzaymanga.com",".adsBanner"],["turkanime.co",".ad-placement"],["mangaship.com",".ad-placement"],["kanald.com.tr","#AdHeader\n.adv-right\n#AD_Top\n#homead\n#ad-lead"],["hepsiemlak.com",".adInfo"],["ralphlauren.com","#top-banner"],["ralphlauren.eu","#top-banner"],["makemytrip.com","#top-banner"],["ralphlauren.co.uk","#top-banner"],["librus.pl","#top-banner"],["festtravel.com","#top-banner"],["tvtime.com","#top-banner"],["tvshowtime.com","#top-banner"],["mislink3.com","#reklamlar"],["canakkaleolay.com","#ustreklam"],["fullhdfilm.*","#reklamCodeiframe"],["otomobilteknoloji.blogspot.com",".vertical-ads"],["hepsinefis.com",".vertical-ads"],["silahilanlari.com","#adslider"],["kopekturleri.org",".td-a-rec"],["themagger.com",".post-sponsored"],["sagligabiradim.com",".ad-desktop"],["mobile.donanimhaber.com",".splash-reklam"],["wanhaber.com",".adTop"],["alalimsatalim.com",".ads-image"]];

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
