/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: cze-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["[class*=\"sda\"]:not(.post-content)","div.banner_position","#banner-left-pane,\n#banner-top-four,\n#sportObchodBanner,\ndiv.bannerHolderZapasRight","#branding_anchor_left,\n#branding_anchor_right,\n.adtea_inpage,\n.adtea_leaderboard",".amalker","#pagefoot","#tblHorniLista",".native-ads",".wpa.top",".banner-header","#biglink","#content-right > div[style]:first-of-type","#header-banner","#leva-reklama","#content-lead,\ndiv.sky-wrapper","#header-reklama,\n.side-bann-l,\n.side-bann-r",".rklh",".banner2,\n.wrap + div:not(#footer)",".ads",".square_banner","#skyscraper","#sideScrapperLayout,\ndiv[id*=\"Banner\"]","#js-branding,\ndiv[id^=\"czech-\"]","#pr-prace-blok-view,\ndiv.block-jobs-link,\ndiv[class*=\"openx-async\"]","[id^=\"hyperbox\"]",".box-offer",".cornerbox,\n.heurekaIframeHeader","div#td-outer-wrap > div.td-container",".ad-obal",".box-banner",".widget-group-2 li:has(div.ad-pmg)",".r-main","div[class^=\"reklama\"]","div#highlitesAds",".layoutTop","#g-top-bannery","#topSite,\n.gallery-advertisement",".intent-exit-box.l-row,\n.js-popup-quest.intent-exit-popup--quest.intent-exit-popup,\ndiv[class*=\"adcontainer\"]",".adsense,\n.leaderboard,\n.seriesadvert,\n.skyscraper",".banner","#r-leaderboardhp","#fancybox-overlay,\n#h_part_right","#t-content",".topbanner","div[id^=\"ad-leaderboard\"]",".advert","#invelt","div.klik--leaderboard","#blackfooter",".topbanners","#box.mb,\n.arr-red","#ahead","#stOverlay,\n.promobox","div._banner","div.ogm-branding > div > div","div.bottom-partners","div.container.partners",".filtr.category-partner,\ndiv[class$=\"advert\"],\ndiv[class*=\"__banner\"]","[class*=\"sda-\"]",".TopFullBanner","div[id^=\"hyper\"]","[class*=\"r-main\"]","div.advert-leader-board-container",".mone_box",".reklama-background","#social",".bannLead","[class*=\"ad_\"]",".rleft,\n.rright,\n.tree","div[id^=\"banner\"]",".ad",".v-card--link:has(.ad),\n.v-card.mb-6","[class*=\"partnеr\"],\na[rel=\"sponsored\"]",".top_background","#z990x200,\n#zr300x600,\n[id^=\"adv_\"],\na[href*=\"utm_campaign=kurzy_\"],\niframe[src^=\"https://img.kurzy.cz/og\"]",".square","#box-over-content-a",".design-advert-placeholder,\n.design-box--jobs,\ndiv.article--content:has(div.design-advert)","#box-3,\n#rbackground-link,\ndiv[id*=\"reklama\"]",".banns-group","#block-nodesinblock-0",".header_banner","div[id^=\"mp_banner_\"]",".scroll_banner",".banner, .left-side-banner, .right-side-banner,\na[trgurl], a[href*=\"relocate.php\"],\ndiv:has(> a[href*=\"?act=detail&f=8\"])",".komerce",".npab","[class*=\"advertisement\"]","pp",".right","div[style^=\"float:left;width:468px;\"] + img[src^=\"data:image/gif;base64,\"]",".advtick","a[class^=\"levakolejroku\"],\na[class^=\"pravakolejroku\"]","#leaderBox,\n.sticky-wrapper","#fixedMenu,\n#rek3,\n#rodkaz",".body_message--ad",".roumingLista","#pvMid","a[href^=\"https://prehrajto.cz/?cc=prlbmso2\"]",".mid-lead-hp",".gadget--zbozi,\ndiv[data-dot*=\"gadgetCommercial\"]","div[data-e-b-n*=\"advert\"],\ndiv[data-e-b-n*=\"sklik\"]","div[class^=\"branding-ad\"]","div.ad-exclusive,\ndiv.dragging-enabled:has(div.gadget--reklama),\ndiv.ogm-sticky-repeater","a[href*=\"track.smartmania.cz\"]","#P_reklama_horni,\n.reklamni_sdeleni,\n.rs_reklama,\n[style=\"vertical-align:middle; text-align: left; width: 139px;\"]",".mabo.faa,\n[style=\"width:960px;margin:0 auto;text-align:left\"]","a[data-dot=\"c_pozadi\"],\na[data-dot=\"hp_pozadi\"],\ndiv.ad","#ad",".bbtitle","#vyjizdeciBoxikDiv",".sidebar-banner,\n.skyscrapper-right",".branding-link",".banner-brand",".center,\nobject[id*=\"bfad\"]","#adLocation-21,\n#popwrapper,\n#t-overlay,\n.row0,\na[href=\"http://acu.cz\"],\nh3","[class^=\"ws-banner-\"]",".SkyLeft.Banner","div.main-top,\ndiv.site-reklama",".bannero2","#branding_conts,\n#floatad,\n#headertopbanner,\n.headerbanner","#aa1","div[style*=\"position:absolute;\"]","div[id][style=\"position: absolute; top: 0; left: 0; width: 100%; height: 380px; text-align: center;\"]",".desktop-wrapper:has([id^=\"div-gpt-ad\"])",".c_banner300x300","div[class^=\"banner_box\"]","a[href=\"http://www.Onlinefilmy.eu\"],\na[href=\"http://www.movieportal.eu\"],\ndiv[style=\"font-size:20px; font-family:Arial Black, Arial; color:#FF0000; font-weight:bold\"]","div[id^=\"ad\"]","div[class*=\"pohodoWidget\"]","a.predpredaj-black",".h2.grad2.kupons_games",".header_info_text",".s-branding,\n[id^=\"banner-\"],\ndiv[style*=\"Roboto\"][style*=\"fixed\"],\nstripemark","[id^=\"back\"][onclick]","#footer,\n#headerSlideContent1,\n#ocko","[id^=\"mk-branding-\"]","#brnd","a[href*=\"trackBannerAd\"]","iframe[data-src^=\"/default-ad\"]","#top-offers-slider,\n.addbox.avizo,\n.box_advertisment.addbox.recycle,\n.nastip,\n.takeoverKlik",".gate-advert-wrap",".dragobj > div:nth-of-type(2),\n.stn.stns > a[target=\"_blank\"],\n.stn.stnu > a[target=\"_blank\"]",".content-item:has(.header a[href^=\"/reklama/\"])","div[class=\"advertisement-list-component\"],\ndiv[class^=\"item h2\"]","a[href^=\"https://boxu.sk\"]",".post.bg5",".overlay,\na[class^=\"tv-\"]",".banner-under,\n.product-ad-wrapper,\n.sqaure-mobile-ad"];

const hostnamesMap = new Map([["grunex.com",0],["kamsdetmi.com",1],["onlajny.com",2],["programujte.com",3],["tipcars.com",4],["titulky.com",5],["war4all.com",6],["zmeskanyhovor.com",7],["365tipu.cz",8],["appliste.cz",9],["serialzone.cz",[9,99]],["autobazar.cz",10],["autoforum.cz",[11,12]],["wmmania.cz",12],["autohit.cz",13],["autorevue.cz",14],["e15.cz",[14,36]],["maminka.cz",14],["mobilmania.cz",14],["zive.cz",14],["autosport.cz",15],["autoweb.cz",16],["autozine.cz",17],["isport.blesk.cz",18],["evropa2.cz",18],["filmporno.cz",[18,49]],["businessworld.cz",[19,20]],["computerworld.cz",[19,20,28]],["pcworld.cz",20],["busportal.cz",21],["cc.cz",22],["cdr.cz",23],["diit.cz",23],["ceskenoviny.cz",[24,25]],["nasepenize.cz",25],["cesky-jazyk.cz",26],["cnews.cz",27],["csfd.cz",[29,30]],["csfd.sk",29],["databazeknih.cz",31],["denik.cz",32],["dotekomanie.cz",33],["drbna.cz",34],["e-mostecko.cz",35],["info.cz",36],["echo24.cz",37],["edna.cz",[38,39]],["in-pocasi.cz",39],["ireceptar.cz",39],["webtrh.cz",39],["centrum.sk",[39,131]],["emimino.cz",40],["esemes.cz",[41,42]],["warforum.cz",[42,115]],["estav.cz",43],["euro.cz",44],["eurogamer.cz",45],["pravopisne.cz",45],["pravopisne.sk",45],["ewrc.cz",46],["extra.cz",47],["fdb.cz",48],["finance.cz",[50,51]],["motoforum.cz",51],["firstclass.cz",52],["fotoaparat.cz",53],["garaz.cz",54],["prozeny.cz",54],["seznamzpravy.cz",54],["hcdukla.cz",55],["hcmotor.cz",56],["heureka.cz",57],["heureka.sk",57],["hrej.cz",58],["pctuning.cz",58],["tryhard.cz",58],["zing.cz",58],["hybrid.cz",59],["idnes.cz",[60,61]],["lidovky.cz",[60,61]],["modnipeklo.cz",61],["idos.idnes.cz",62],["cnn.iprima.cz",63],["itnetwork.cz",64],["jaknaletenky.cz",65],["kaloricketabulky.cz",66],["karaoketexty.cz",67],["kladenskelisty.cz",68],["kniha.cz",69],["konzolista.cz",[70,71]],["topky.sk",[70,140]],["tvtv.sk",[70,143]],["krimi-plzen.cz",72],["kupi.cz",73],["kurzy.cz",74],["lamer.cz",75],["moda.cz",75],["livesport.cz",76],["lupa.cz",77],["root.cz",77],["matematika.cz",78],["mediar.cz",79],["medop.cz",80],["menicka.cz",81],["meteoprog.cz",82],["mladypodnikatel.cz",83],["motorkari.cz",84],["mrk.cz",85],["nasepraha.cz",86],["netconcert.cz",87],["onlymen.cz",88],["osel.cz",89],["parabola.cz",90],["pravidla.cz",91],["primat.cz",92],["reflex.cz",93],["ronnie.cz",94],["forum.root.cz",95],["rouming.cz",96],["sauto.cz",97],["serialycz.cz",98],["seznam.cz",100],["clanky.seznam.cz",101],["search.seznam.cz",101],["tv.seznam.cz",102],["www.seznam.cz",103],["smartmania.cz",104],["sms.cz",105],["stesti.cz",106],["super.cz",107],["login.szn.cz",108],["tiscali.cz",109],["topzine.cz",110],["tvfreak.cz",111],["uschovna.cz",112],["vortex.cz",113],["warezforum.cz",114],["webshare.cz",116],["zakonyprolidi.cz",117],["zena-in.cz",118],["autobazar.eu",119],["letemsvetemapplem.eu",120],["libise.eu",121],["sktorrent.eu",122],["serialy.io",123],["slovnik.aktuality.sk",124],["pokec.azet.sk",125],["behame.sk",126],["best4you.sk",127],["bmwklub.sk",128],["cas.sk",[129,130]],["feminity.zoznam.sk",129],["dsl.sk",132],["hnonline.sk",133],["kinema.sk",134],["sector.sk",[134,139]],["michalovskespravy.sk",135],["modrykonik.sk",136],["mojevideo.sk",137],["mtbiker.sk",138],["touchit.sk",141],["tv-program.sk",142],["vranovske.sk",144],["zoznam.sk",145],["pretaktovanie.zoznam.sk",146],["najserialy.to",147],["mall.tv",148]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
