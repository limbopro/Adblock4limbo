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

const genericSelectorMap = [[1062,".ads_single_font"],[984,"body > div#hellobar.hellobar"],[1449,"body > div.body-clickable:empty,\nbody > a.body-clickable.justintvizle"],[601,".volestream-gorsel"],[1100,".link-group > div.features,\n.link-group > div.table-container"],[375,"#uyarikutu"],[2629,".sayfa-arka"],[4,".noxstream-gorsel"],[3627,".pfixedd"],[1522,".film-tab > a[target=\"_blank\"],\n.film-tab > div#livestream_wrapper ~ div.overlay-top,\n.film-tab > div[aria-label=\"video player\"] > div#overlay-top,\n.film-tab > div.playerimiz > div.overlay-top"],[52,".cb_splash_ads"],[3334,".arbet_tables"],[493,"#livevideo > div.overlay-bottom"],[1541,"#livestream_wrapper > div.overlay-top"],[1232,".playerimiz > div.first-notification,\n.playerimiz > a[style],\n.playerimiz > div[aria-label=\"video player\"] > div#overlay-top"],[2124,"#main > .wrap.cf > .reklam ~ p[style^=\"background-color:\"],\n#main > .wrap.cf > .reklam ~ #content > .post > p[style^=\"background-color:\"],\n#main .wpb_wrapper > center > a[target=\"_blank\"],\n#main div.wpb_raw_code > a[target=\"_blank\"] > img"],[2869,".rek-ivr,\n.rek-ivr ~ p[style^=\"background-color:\"]"],[2749,".fuck-ivr,\n.fuck-ivr ~ p[style^=\"background-color:\"]"],[408,"#preRollBd"],[1068,"#footerFixedDivWrapper"],[3684,"#mPlayerFd"],[1793,".hrklm_oblong"],[3899,"#footer_fad"],[3320,".play_ust_txt"],[3235,".g-title > div.containerAds"],[1994,".pageskin > div.mbl_psc,\n.pageskin div[class^=\"r_reklam_\"],\nbody > a[target=\"_blank\"] > div.pageskin,\nbody > div.pageskin"],[2649,".rkm"],[2584,".mst_ad"],[1974,".st_ad"],[1444,"body > div#pageskin_ayd"],[2135,".medyanet-inline-adv"],[2523,"#haber_ustu_reklam"],[3097,".nokta-display-ad"],[703,"#adStarter"],[1512,".textrek"],[1066,".playerinads"],[3037,".nogay-fixed-bottom-bar"],[3418,".nogay-fixed-top-bar"],[2436,".first-notification#nogay-notf"],[2855,".topReklam"],[2925,".widget-advert.text-center"],[2164,".reklamalani"],[3425,".reklamKodu3"],[3619,".sagkulereklam"],[1992,".solkulereklam"],[170,".reklamCerceve"],[691,".reklamKodu"],[167,"body > div#pageskin,\nbody > #pageskin"],[3178,"body > div.pgskn"],[786,"body > div#footerFixedDiv"],[2144,".bey-video-reklam"],[334,".saniye-reklam"],[2441,".reklamcontainer"],[142,".yatay-reklam,\n#otoreklam"],[2010,"#reklamCodeiframe"],[1814,".sol_reklam_160x600,\n.sag_reklam_160x600"],[977,".rkm-outer,\n#bannerbuyuk"],[2243,"ins[id^=\"rkm-par-\"].rkm.par-ad"],[734,".saniyereklam"],[1494,".frontendAd"],[3885,"#prestitial_banner"],[2255,".rk-300"],[580,"#backkapat"],[4046,"#reklamarkaplan"],[2108,".rek_300x350"],[544,".ivr > a > img"],[2593,"div.koddostu-splash.reklam-s-koddostu#amans"],[2694,"#video_player + #after-video"],[1156,".rkads,\n#top-banner"],[2197,".reklam-alani"],[3078,".flash_aciklama"],[744,".telefon-reklam"],[3229,".hizalanmis > div[class^=\"box\"] > .fra"],[985,"body > #rb_300:not([class])"],[2471,".ivr-reklam"],[100,".reklam_a"],[2771,".watch_video > center > a[rel=\"nofollow\"] > img"],[2466,".reklam-alt-sabit"],[1130,".reklam-645x90"],[72,".reklam-300x250"],[2938,"#PopWin"],[3983,"#UstReklam"],[3490,"#alt_kayan_reklam"],[3428,"#alt_reklam"],[2222,"#arkaplanreklam"],[3547,"#backgroundPopup"],[952,"#betreklam"],[3595,"#kayan_reklam"],[2503,"#kayan_reklam_sol"],[700,"#kayan_reklamsag"],[695,"#kayan_reklamsol"],[2887,"#leftreklam1div"],[2916,"#leftreklam2div"],[1945,"#reklam"],[3127,"#reklam300x250"],[2995,"#reklam300x600"],[673,"#reklam_sol"],[3569,"#reklami"],[3742,"#reklamikapat"],[638,"#ReklamiKapat"],[460,"#reklamlar"],[3573,"#reklamm"],[2458,"#sagreklam"],[1128,"#sol_kayan_reklam"],[1201,"#solreklam"],[2155,"#sreklam"],[1005,"#toolbar[style*=\"opacity: 1\"][style*=\"99999\"]"],[175,"#ustReklam,\n#ustreklam"],[3092,"#ust_ara_reklam"],[299,"#ustreklamlar"],[1553,".adnet"],[1921,".adsVideo"],[3800,".adsindirim"],[2704,".adsortalaindirim"],[3875,".arkaplanreklam"],[203,".banner300x250"],[723,".banner_logo_top"],[749,".banneralan"],[2991,".bannerkucuk"],[1288,".detayreklam"],[471,".dikeyreklam"],[215,".intbetads-FIX"],[1386,".kanalustureklam"],[135,".ortaReklam"],[9,".pmt-ad"],[2468,".reklam1"],[3580,".reklam300"],[1804,".reklam728x90"],[2507,".reklamSag"],[2334,".reklamUst"],[3773,".reklam_300_250"],[954,".reklam_300x250"],[2585,".reklam_728_90"],[1537,".reklamlar"],[150,".reklamoynama"],[777,".reklamyatay"],[1095,".sRightAdSpace"],[275,".sagReklam300x250"],[3080,".sag_reklam"],[3935,".splash-banner"],[3846,".splash-reklam"],[1481,".tepebanner"],[2662,".trgoolreklam"],[123,".ustOrtaSolReklam"],[2978,".ustReklam"],[94,".yediyuzads"],[2347,".yenireklam"],[2885,"a.yildiz-pageskin-link"],[1364,"body > div.pskinRekLam"],[3527,"div[data-isbd-main-container] > section > div.hidden-xs.text-center"],[1165,"#content .wpb_wrapper > a[target=\"_blank\"] > img,\n#content .wpb_wrapper > a[target=\"_blank\"][style^=\"color:red; background-color:black;\"]"],[3882,"#playerAdv2"],[3366,".right_bannnner"],[2130,".bannnner"],[2083,"a[target=\"_blank\"] > img.justintvizle,\n.justintvizle > a[target=\"_blank\"]"]];
const genericExceptionSieve = [1730,2947,3828,2824,2466,817,3601,1908,3023,1344,1804,3915,2179,1156,460,175,2010,167,2499,2970,3785,3846,805,3256];
const genericExceptionMap = [["gecmisi.com.tr",".adsbygoogle-noablate"],["akillikafa.com",".adsbygoogle-noablate"],["tranimaci.*","ins.adsbygoogle[data-ad-client]\nins.adsbygoogle[data-ad-slot]"],["sinnerclownceviri.com",".reklam"],["dizifon.com",".reklam"],["birasyadizi.com",".reklam"],["fontyukle.net",".reklam"],["altin.in",".reklam\n.reklam728x90"],["horseturk.com",".reklam"],["t24.com.tr",".reklam"],["uzaymanga.com",".adsBanner"],["turkanime.co",".ad-placement"],["mangaship.com",".ad-placement"],["kanald.com.tr","#AdHeader\n.adv-right\n#AD_Top\n#homead\n#ad-lead"],["silahilanlarim.com","#adslider"],["hepsiemlak.com",".adInfo"],["ralphlauren.com","#top-banner"],["ralphlauren.eu","#top-banner"],["makemytrip.com","#top-banner"],["ralphlauren.co.uk","#top-banner"],["librus.pl","#top-banner"],["festtravel.com","#top-banner"],["tvtime.com","#top-banner"],["tvshowtime.com","#top-banner"],["mislink3.com","#reklamlar"],["canakkaleolay.com","#ustreklam"],["fullhdfilm.*","#reklamCodeiframe"],["otomobilteknoloji.blogspot.com",".vertical-ads"],["hepsinefis.com",".vertical-ads"],["kopekturleri.org",".td-a-rec"],["themagger.com",".post-sponsored"],["sagligabiradim.com",".ad-desktop"],["mobile.donanimhaber.com",".splash-reklam"],["wanhaber.com",".adTop"],["alalimsatalim.com",".ads-image"]];

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
