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

// ruleset: lva-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["td[style=\"padding-top:10px;padding-left:6px;padding-bottom:10px;\"]","#opencredit,\ndiv[style=\"padding:3px; font-size:13px;\"]",".banner",".r_article,\ntable[style=\"width: 240px; height: 97px;\"]",".LabsservissAdd",".creamcredit",".reklama2","div[style=\"position: absolute; inset: 0px; background: rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%; z-index: 1004;\"]",".banner_clicker,\n.main_column_banner,\n.top_banner","#shop-item,\n.bootlv_recommends,\n.top_header_wrapper,\ndiv[style=\"padding: 10px;text-align:center;\"],\ntd[style=\"padding: 0 0 0 10px; width: 250px; vertical-align: top;\"]",".with_banner","#outer-left,\n#outer-right,\n#slid_close","#AS-Widget,\n#background-giga,\n#bp-ads-block-1,\n#column3 a[style=\"margin-bottom: 10px;\"],\n#custom-ads-block-33,\n#horoweatherblock,\n#inch-lv,\n#top-banner,\n.ads-block-small,\n.ads-blocks-link,\n.adsAdmin-section,\n.airbaltic-blog,\n.car-city24,\n.city24-2nd,\n.city24-2nd-block-title,\n.city24-2nd-items,\n.city24-2nd-news,\n.city24-articles,\n.city24-topBlock-extraLine,\n.city24-topBlock-wrapper,\n.city24ni,\n.city24nib,\n.d-sm-block,\n.pardod-widget,\n.top-banner,\n.veikali-banners-active,\n.zave-wrapper,\n.zave_r,\ndiv.adsAdmin-iblock-pinned,\ndiv.adsAdmin-section,\ndiv[style=\"background:#fef2d9;\"],\ndiv[style=\"margin:10px;border:1px dashed #8e8e9e;overflow:auto;padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px\"],\ndiv[style=\"margin:10px;margin-bottom:0;padding-bottom:10px;text-align:center;border-bottom:1px solid #b4c8de;text-align:center;\"],\ndiv[style=\"width:150px;margin-bottom:5px;\"],\ntable[style=\"background-color: #ECECEC; width:250px;\"]",".clo","#right,\n.delfi_shop,\n[id^=\"adoceandelfilv\"]",".articlebanner","div[style=\"width:250px;\"]:last-child","#rightTop,\n.iepazisanas",".toolblock",".adv","#mammtet_box,\n.adv_urls,\n.adv_urls_b,\n.adv_urls_t,\n.right_widget_item.tvnet","[class^=\"adholder\"],\ndiv[style=\"padding-top:5px;text-align:center;margin-bottom:10px;line-height:1;\"]",".adv-txt","div[style=\"width:568px;height:60px;background-color:#000000;\"]",".placeholder","#rhscol,\n#taw","#inboxshops_div,\n#inx-main-roof,\n#inx-textAds,\n#inxAds-imr,\n#inxHeadAdsPlace,\n.bxS-text_link,\n[style^=\"background:url(http://b.inbox.lv/\"]","tr[id^=\"row\"]","div[style=\"margin: 8px 0px; cursor: hand;\"]","#abonbanner",".ad-container,\n.ad-dfp,\n.ad-giga-banner,\n.meta-info__subscribe,\n.shop-list,\n.shop-multiple-items",".adv_column","#leja_scroll,\n#top_ba_pos,\n.campaignblock1,\n.campaignblock2,\n.labsblock1,\n.labsblock2,\n.producttd[style=\"border:solid 1px #448c26;background:#fafafa;\"]",".side-banner","[id^=\"fixme_\"]",".adbox","#blocks > .tabsaction + .news,\n#footer > div:last-child,\n#section_full + #blocks > .news:first-child,\n.aptauja[style=\"margin-top:0px;margin-bottom:20px;\"],\n.banner_center,\n.hostnet","div[style=\"position:absolute;width:725px;height:90px;margin-left:250px;margin-top:33px;\"]","div[style=\"padding-top:2px; font-size:0.917em;\"]","div[style=\"width:180px; overflow:hidden; background:#ffffff; border: solid 1px #D30528; font-family:Verdana; font-size:11px; margin: 5px 0px 10px 0px;\"]","#footer > table[width=\"100%\"],\n.top_slud.sakums",".ads--banner,\n.post-content-inner--ad-block,\n.zdorovje-widget","#slider-wrap",".right_column,\ndiv[style=\"margin-bottom:15px;\"]","#_ctl16_HtmlBanner,\n[id^=\"_ctl20_Elements__\"]","#ctl00_divAd1","div[style=\"float:none;margin:10px 0 10px 0;text-align:center;\"]","#AM_bottom,\n#AM_giga,\n#AM_mobile_1,\n#AM_scroll_row,\n#AM_tower_div,\n.item_link[href^=\"/rekred.php\"],\n[id^=\"media_place\"]","[id^=\"_fw_frame_\"]","#sys_bnr_tbl","#fancybox-overlay","#REKLAI","table + #div_main_right_block","#ad_center_top_500x150,\n#ag_b_wrapper,\n#ag_wrapper,\n#c24-container,\n#flag-banner,\n#footer_banner,\n#middle_156_xml,\n#shops_offer,\n#whatcar,\n.ad__kvadrats,\n.article-content-width__ads,\n.article-lead-image-ad,\n.autoplius-ad,\n.banner-block-new,\n.banner_container,\n.c24-box,\n.city24bl-cont,\n.comment-baner-outer,\n.customers,\n.divTable_la,\n.fp_horiz_ads_150x150,\n.lead-banner,\n.list.customer,\n.pattern-side--ads,\n.right-sidebar-top__ad,\n.right_custom_ad_2_pics,\n.right_custom_ad_four_pics_city24,\n[id^=\"ad120x600\"],\na[style=\"text-decoration: underline; cursor: pointer; padding-right: 17px; background: url('/assets/images/title_link.gif') right center no-repeat;\"],\ndiv[style=\"height:53px; width:100%; position:fixed; bottom:0px; left:0px; background-color:white; z-index:999999; background-position:center center; background-image: url('http://b.itvnet.lv/_sa_alkohols.jpg'); background-repeat:no-repeat;\"]","#e-shop-banner-block,\n.banner-block,\n.banner-block-small,\n.custom-ad-widget,\n.e-shop-banner-block","#spec_head","[style=\"text-align:center;border:1px dashed #000000;width:468px;height:60px;position:absolute;overflow:hidden;margin-top:-20px;margin-right:160px;\"],\n[style^=\"background-image:none !important\"]","#sz",".ad_prian,\n.textbanners",".infobox","#banner","#perkam_group_banner,\n.zip_spotlight.main_td"];

const hostnamesMap = new Map([["europeanhitradio.com",0],["europeanhitradio.lv",0],["miljons.com",1],["sportacentrs.com",[2,3]],["db.lv",[2,11]],["tvnet.lv",[2,7,53]],["1188.lv",4],["1a.lv",5],["1s.lv",6],["apollo.lv",7],["bilesuserviss.lv",8],["boot.lv",9],["cvmarket.lv",10],["delfi.lv",[12,13,14,15]],["gudriem.lv",13],["kurpirkt.lv",[13,32]],["morning.lv",[14,15]],["skats.lv",15],["forums.delfi.lv",16],["izklaide.delfi.lv",17],["tv.delfi.lv",18],["draugiem.lv",19],["e-klase.lv",20],["easyget.lv",21],["elektroenergija.lv",22],["gay.lv",23],["gismeteo.lv",24],["google.lv",25],["inbox.lv",26],["mail.inbox.lv",27],["intim.lv",28],["ir.lv",29],["jauns.lv",30],["kopaa.lv",31],["la.lv",33],["lattelecom.lv",34],["lsm.lv",35],["notepad.lv",36],["nozare.lv",37],["nra.lv",38],["oho.lv",39],["pornotv.lv",40],["press.lv",41],["receptes.lv",42],["reklama.lv",43],["riga.lv",44],["rigaslaiks.lv",45],["runabildes.lv",46],["salidzini.lv",47],["skaties.lv",48],["ss.lv",49],["tele2.lv",50],["tera.lv",51],["travelnews.lv",52],["apollo.tvnet.lv",54],["spoki.tvnet.lv",55],["gramata.ucoz.lv",56],["uzkartes.lv",57],["varianti.lv",58],["vgk.lv",59],["zeltazivtina.lv",60],["zip.lv",61]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
