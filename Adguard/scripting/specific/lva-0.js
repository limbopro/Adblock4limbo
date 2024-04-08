/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
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

// ruleset: lva-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["td[style=\"padding-top:10px;padding-left:6px;padding-bottom:10px;\"]","#reklamas_rt","#opencredit,\ndiv[style=\"padding:3px; font-size:13px;\"]",".banner",".r_article,\ntable[style=\"width: 240px; height: 97px;\"]",".category-summary--content-intro,\n.related--ads",".LabsservissAdd",".creamcredit",".reklama2",".content-add-desktop-description","div[style=\"position: absolute; inset: 0px; background: rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%; z-index: 1004;\"]","#execphp-10",".banner_clicker,\n.main_column_banner,\n.top_banner","#shop-item,\n.bootlv_recommends,\n.top_header_wrapper,\ndiv[style=\"padding: 10px;text-align:center;\"],\ntd[style=\"padding: 0 0 0 10px; width: 250px; vertical-align: top;\"]",".with_banner","#outer-left,\n#outer-right,\n#slid_close","#AS-Widget,\n#background-giga,\n#bp-ads-block-1,\n#column3 a[style=\"margin-bottom: 10px;\"],\n#custom-ads-block-33,\n#horoweatherblock,\n#inch-lv,\n#top-banner,\n.ads-block-small,\n.ads-blocks-link,\n.adsAdmin-section,\n.airbaltic-blog,\n.car-city24,\n.city24-2nd,\n.city24-2nd-block-title,\n.city24-2nd-items,\n.city24-2nd-news,\n.city24-articles,\n.city24-topBlock-extraLine,\n.city24-topBlock-wrapper,\n.city24ni,\n.city24nib,\n.d-sm-block,\n.pardod-widget,\n.top-banner,\n.veikali-banners-active,\n.zave-wrapper,\n.zave_r,\ndiv.adsAdmin-iblock-pinned,\ndiv.adsAdmin-section,\ndiv[style=\"background:#fef2d9;\"],\ndiv[style=\"margin:10px;border:1px dashed #8e8e9e;overflow:auto;padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px\"],\ndiv[style=\"margin:10px;margin-bottom:0;padding-bottom:10px;text-align:center;border-bottom:1px solid #b4c8de;text-align:center;\"],\ndiv[style=\"width:150px;margin-bottom:5px;\"],\ntable[style=\"background-color: #ECECEC; width:250px;\"]",".clo","#right,\n.delfi_shop,\n[id^=\"adoceandelfilv\"]",".articlebanner","div[style=\"width:250px;\"]:last-child","#rightTop,\n.iepazisanas",".toolblock","#tagcloud",".adv","#mammtet_box,\n.adv_urls,\n.adv_urls_b,\n.adv_urls_t,\n.right_widget_item.tvnet","[class^=\"adholder\"],\ndiv[style=\"padding-top:5px;text-align:center;margin-bottom:10px;line-height:1;\"]",".adv-txt","div[style=\"width:568px;height:60px;background-color:#000000;\"]",".placeholder","#rhscol,\n#taw","#inboxshops_div,\n#inx-main-roof,\n#inx-textAds,\n#inxAds-imr,\n#inxHeadAdsPlace,\n.bxS-text_link,\n[style^=\"background:url(http://b.inbox.lv/\"]","tr[id^=\"row\"]","div[style=\"margin: 8px 0px; cursor: hand;\"]","#abonbanner",".ad-container,\n.ad-dfp,\n.ad-giga-banner,\n.meta-info__subscribe,\n.shop-list,\n.shop-multiple-items",".adv_column","#leja_scroll,\n#top_ba_pos,\n.campaignblock1,\n.campaignblock2,\n.labsblock1,\n.labsblock2,\n.producttd[style=\"border:solid 1px #448c26;background:#fafafa;\"]",".pum",".banner-container.header",".side-banner",".article-advertisement","[id^=\"fixme_\"]",".adbox","#blocks > .tabsaction + .news,\n#footer > div:last-child,\n#section_full + #blocks > .news:first-child,\n.aptauja[style=\"margin-top:0px;margin-bottom:20px;\"],\n.banner_center,\n.hostnet","div[style=\"position:absolute;width:725px;height:90px;margin-left:250px;margin-top:33px;\"]","div[style=\"padding-top:2px; font-size:0.917em;\"]","div[style=\"width:180px; overflow:hidden; background:#ffffff; border: solid 1px #D30528; font-family:Verdana; font-size:11px; margin: 5px 0px 10px 0px;\"]",".card--alternative,\n.row > .text-center,\n.text-center.card,\np:has(> a[href*=\"img\"])","#footer > table[width=\"100%\"],\n.top_slud.sakums",".ads--banner,\n.post-content-inner--ad-block,\n.zdorovje-widget","#slider-wrap",".right_column,\ndiv[style=\"margin-bottom:15px;\"]","#_ctl16_HtmlBanner,\n[id^=\"_ctl20_Elements__\"]","#ctl00_divAd1","div[style=\"float:none;margin:10px 0 10px 0;text-align:center;\"]","#AM_bottom,\n#AM_giga,\n#AM_giga_main,\n#AM_mobile_1,\n#AM_scroll_row,\n#AM_tower_div,\n#AM_tower_sub,\n.item_link[href^=\"/rekred.php\"],\n.item_link[href^=\"/rekred1click\"],\n[id^=\"media_place\"]","[id^=\"_fw_frame_\"]","#ads_sys_div1,\n#sys_bnr_tbl","#fancybox-overlay","#REKLAI","table + #div_main_right_block","#ad_center_top_500x150,\n#ag_b_wrapper,\n#ag_wrapper,\n#c24-container,\n#flag-banner,\n#footer_banner,\n#middle_156_xml,\n#shops_offer,\n#whatcar,\n.ad__kvadrats,\n.article-content-width__ads,\n.article-lead-image-ad,\n.autoplius-ad,\n.banner-block-new,\n.banner_container,\n.c24-box,\n.city24bl-cont,\n.comment-baner-outer,\n.customers,\n.divTable_la,\n.fp_horiz_ads_150x150,\n.lead-banner,\n.list.customer,\n.pattern-side--ads,\n.right-sidebar-top__ad,\n.right_custom_ad_2_pics,\n.right_custom_ad_four_pics_city24,\n[id^=\"ad120x600\"],\na[style=\"text-decoration: underline; cursor: pointer; padding-right: 17px; background: url('/assets/images/title_link.gif') right center no-repeat;\"],\ndiv[style=\"height:53px; width:100%; position:fixed; bottom:0px; left:0px; background-color:white; z-index:999999; background-position:center center; background-image: url('http://b.itvnet.lv/_sa_alkohols.jpg'); background-repeat:no-repeat;\"]","#e-shop-banner-block,\n.banner-block,\n.banner-block-small,\n.custom-ad-widget,\n.e-shop-banner-block","#spec_head","[style=\"text-align:center;border:1px dashed #000000;width:468px;height:60px;position:absolute;overflow:hidden;margin-top:-20px;margin-right:160px;\"],\n[style^=\"background-image:none !important\"]","#sz",".ad_prian,\n.textbanners",".infobox","#banner","#perkam_group_banner,\n.zip_spotlight.main_td",".widget_execphp:has([class^=\"tag\"][class*=\"cloud\"])"];

const hostnamesMap = new Map([["europeanhitradio.com",0],["europeanhitradio.lv",0],["krusttevs.com",1],["miljons.com",2],["sportacentrs.com",[3,4]],["db.lv",[3,15]],["tvnet.lv",[3,10,62]],["sportazinas.com",5],["1188.lv",6],["1a.lv",7],["1s.lv",8],["aluksniesiem.lv",9],["bauskasdzive.lv",[9,11]],["dzirkstele.lv",9],["rekurzeme.lv",9],["staburags.lv",9],["ziemellatvija.lv",9],["zz.lv",[9,71]],["apollo.lv",10],["bilesuserviss.lv",12],["boot.lv",13],["cvmarket.lv",14],["delfi.lv",[16,17,18,19]],["gudriem.lv",17],["kurpirkt.lv",[17,37]],["morning.lv",[18,19]],["skats.lv",19],["forums.delfi.lv",20],["izklaide.delfi.lv",21],["tv.delfi.lv",22],["diena.lv",23],["draugiem.lv",24],["e-klase.lv",25],["easyget.lv",26],["elektroenergija.lv",27],["gay.lv",28],["gismeteo.lv",29],["google.lv",30],["inbox.lv",31],["mail.inbox.lv",32],["intim.lv",33],["ir.lv",34],["jauns.lv",35],["kopaa.lv",36],["kursors.lv",38],["kurzemnieks.lv",39],["la.lv",40],["lasi.lv",41],["lattelecom.lv",42],["lsm.lv",43],["notepad.lv",44],["nozare.lv",45],["nra.lv",46],["oho.lv",47],["pilseta24.lv",48],["pornotv.lv",49],["press.lv",50],["receptes.lv",51],["reklama.lv",52],["riga.lv",53],["rigaslaiks.lv",54],["runabildes.lv",55],["salidzini.lv",56],["skaties.lv",57],["ss.lv",58],["tele2.lv",59],["tera.lv",60],["travelnews.lv",61],["apollo.tvnet.lv",63],["spoki.tvnet.lv",64],["gramata.ucoz.lv",65],["uzkartes.lv",66],["varianti.lv",67],["vgk.lv",68],["zeltazivtina.lv",69],["zip.lv",70]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
