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

// ruleset: lva-0

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".LabsservissAdd",".creamcredit",".reklama2","#e-shop-banner-block,\n.banner-block,\n.banner-block-small,\n.custom-ad-widget,\n.e-shop-banner-block","#execphp-10",".banner_clicker,\n.main_column_banner,\n.top_banner","#shop-item,\n.bootlv_recommends,\n.top_header_wrapper,\ndiv[style=\"padding: 10px;text-align:center;\"],\ntd[style=\"padding: 0 0 0 10px; width: 250px; vertical-align: top;\"]",".with_banner","#outer-left,\n#outer-right,\n#slid_close",".banner","#AS-Widget,\n#background-giga,\n#bp-ads-block-1,\n#column3 a[style=\"margin-bottom: 10px;\"],\n#custom-ads-block-33,\n#horoweatherblock,\n#inch-lv,\n#top-banner,\n.ads-block-small,\n.ads-blocks-link,\n.adsAdmin-section,\n.airbaltic-blog,\n.car-city24,\n.city24-2nd,\n.city24-2nd-block-title,\n.city24-2nd-items,\n.city24-2nd-news,\n.city24-articles,\n.city24-topBlock-extraLine,\n.city24-topBlock-wrapper,\n.city24ni,\n.city24nib,\n.d-sm-block,\n.pardod-widget,\n.top-banner,\n.veikali-banners-active,\n.zave-wrapper,\n.zave_r,\ndiv.adsAdmin-iblock-pinned,\ndiv.adsAdmin-section,\ndiv[style=\"background:#fef2d9;\"],\ndiv[style=\"margin:10px;border:1px dashed #8e8e9e;overflow:auto;padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px\"],\ndiv[style=\"margin:10px;margin-bottom:0;padding-bottom:10px;text-align:center;border-bottom:1px solid #b4c8de;text-align:center;\"],\ndiv[style=\"width:150px;margin-bottom:5px;\"],\ntable[style=\"background-color: #ECECEC; width:250px;\"]",".clo","#right,\n.delfi_shop,\n[id^=\"adoceandelfilv\"]",".articlebanner","#tagcloud",".adv","#mammtet_box,\n.adv_urls,\n.adv_urls_b,\n.adv_urls_t,\n.right_widget_item.tvnet","[class^=\"adholder\"],\ndiv[style=\"padding-top:5px;text-align:center;margin-bottom:10px;line-height:1;\"]",".adv-txt","td[style=\"padding-top:10px;padding-left:6px;padding-bottom:10px;\"]","div[style=\"width:250px;\"]:last-child","div[style=\"width:568px;height:60px;background-color:#000000;\"]",".placeholder","#rhscol,\n#taw","[style=\"text-align:center;border:1px dashed #000000;width:468px;height:60px;position:absolute;overflow:hidden;margin-top:-20px;margin-right:160px;\"],\n[style^=\"background-image:none !important\"]","#inboxshops_div,\n#inx-main-roof,\n#inx-textAds,\n#inxAds-imr,\n#inxHeadAdsPlace,\n.bxS-text_link,\n[style^=\"background:url(http://b.inbox.lv/\"]","div[style=\"margin: 8px 0px; cursor: hand;\"]","#abonbanner","#rightTop,\n.iepazisanas",".ad-container,\n.ad-dfp,\n.ad-giga-banner,\n.meta-info__subscribe,\n.shop-list,\n.shop-multiple-items",".adv_column","#reklamas_rt","#leja_scroll,\n#top_ba_pos,\n.campaignblock1,\n.campaignblock2,\n.labsblock1,\n.labsblock2,\n.producttd[style=\"border:solid 1px #448c26;background:#fafafa;\"]",".pum",".banner-container.header",".side-banner",".article-advertisement","[id^=\"fixme_\"]",".adbox","tr[id^=\"row\"]","#opencredit,\ndiv[style=\"padding:3px; font-size:13px;\"]","#blocks > .tabsaction + .news,\n#footer > div:last-child,\n#section_full + #blocks > .news:first-child,\n.aptauja[style=\"margin-top:0px;margin-bottom:20px;\"],\n.banner_center,\n.hostnet","div[style=\"position:absolute;width:725px;height:90px;margin-left:250px;margin-top:33px;\"]","div[style=\"padding-top:2px; font-size:0.917em;\"]","div[style=\"width:180px; overflow:hidden; background:#ffffff; border: solid 1px #D30528; font-family:Verdana; font-size:11px; margin: 5px 0px 10px 0px;\"]",".card--alternative,\n.row > .text-center,\n.text-center.card,\np:has(> a[href*=\"img\"])","#footer > table[width=\"100%\"],\n.top_slud.sakums",".ads--banner,\n.post-content-inner--ad-block,\n.zdorovje-widget","#slider-wrap",".right_column,\ndiv[style=\"margin-bottom:15px;\"]","#_ctl16_HtmlBanner,\n[id^=\"_ctl20_Elements__\"]","#ctl00_divAd1","div[style=\"float:none;margin:10px 0 10px 0;text-align:center;\"]","#AM_bottom,\n#AM_giga,\n#AM_giga_main,\n#AM_mobile_1,\n#AM_scroll_row,\n#AM_tower_div,\n#AM_tower_sub,\n.item_link[href^=\"/rekred.php\"],\n.item_link[href^=\"/rekred1click\"],\n[id^=\"media_place\"]","[id^=\"_fw_frame_\"]","#spec_head",".r_article,\ntable[style=\"width: 240px; height: 97px;\"]",".category-summary--content-intro,\n.related--ads","#ads_sys_div1,\n#sys_bnr_tbl","#fancybox-overlay","#REKLAI","table + #div_main_right_block",".toolblock","#ad_center_top_500x150,\n#ag_b_wrapper,\n#ag_wrapper,\n#c24-container,\n#flag-banner,\n#footer_banner,\n#middle_156_xml,\n#shops_offer,\n#whatcar,\n.ad__kvadrats,\n.article-content-width__ads,\n.article-lead-image-ad,\n.autoplius-ad,\n.banner-block-new,\n.banner_container,\n.c24-box,\n.city24bl-cont,\n.comment-baner-outer,\n.customers,\n.divTable_la,\n.fp_horiz_ads_150x150,\n.lead-banner,\n.list.customer,\n.pattern-side--ads,\n.right-sidebar-top__ad,\n.right_custom_ad_2_pics,\n.right_custom_ad_four_pics_city24,\n[id^=\"ad120x600\"],\na[style=\"text-decoration: underline; cursor: pointer; padding-right: 17px; background: url('/assets/images/title_link.gif') right center no-repeat;\"],\ndiv[style=\"height:53px; width:100%; position:fixed; bottom:0px; left:0px; background-color:white; z-index:999999; background-position:center center; background-image: url('http://b.itvnet.lv/_sa_alkohols.jpg'); background-repeat:no-repeat;\"]","div[style=\"position: absolute; inset: 0px; background: rgba(0, 0, 0, 0.7) none repeat scroll 0% 0%; z-index: 1004;\"]","#sz",".ad_prian,\n.textbanners",".infobox","#banner","#perkam_group_banner,\n.zip_spotlight.main_td",".widget_execphp:has([class^=\"tag\"][class*=\"cloud\"])",".content-add-desktop-description",".article-ad-placeholder,\n.dfp-ad",".ad-placement,\n.adocean",".ad01,\n.adBanner,\n.dfp_ad","#ad_table,\n.single_ad"];

const hostnamesMap = new Map([["1188.lv",0],["1a.lv",1],["1s.lv",2],["apollo.tvnet.lv",3],["bauskasdzive.lv",[4,71]],["bilesuserviss.lv",5],["boot.lv",6],["cvmarket.lv",7],["db.lv",[8,9]],["sportacentrs.com",[9,56]],["tvnet.lv",[9,63,64]],["delfi.lv",[10,11,12,13]],["gudriem.lv",11],["kurpirkt.lv",[11,32]],["morning.lv",[12,13]],["skats.lv",13],["diena.lv",14],["draugiem.lv",15],["e-klase.lv",16],["easyget.lv",17],["elektroenergija.lv",18],["europeanhitradio.com",19],["europeanhitradio.lv",19],["forums.delfi.lv",20],["gay.lv",21],["gismeteo.lv",22],["google.lv",23],["gramata.ucoz.lv",24],["inbox.lv",25],["intim.lv",26],["ir.lv",27],["izklaide.delfi.lv",28],["jauns.lv",29],["kopaa.lv",30],["krusttevs.com",31],["kursors.lv",33],["kurzemnieks.lv",34],["la.lv",35],["lasi.lv",36],["lattelecom.lv",37],["lsm.lv",38],["mail.inbox.lv",39],["miljons.com",40],["notepad.lv",41],["nozare.lv",42],["nra.lv",43],["oho.lv",44],["pilseta24.lv",45],["pornotv.lv",46],["press.lv",47],["receptes.lv",48],["reklama.lv",49],["riga.lv",50],["rigaslaiks.lv",51],["runabildes.lv",52],["salidzini.lv",53],["skaties.lv",54],["spoki.tvnet.lv",55],["sportazinas.com",57],["ss.lv",58],["tele2.lv",59],["tera.lv",60],["travelnews.lv",61],["tv.delfi.lv",62],["apollo.lv",64],["uzkartes.lv",65],["varianti.lv",66],["vgk.lv",67],["zeltazivtina.lv",68],["zip.lv",69],["zz.lv",[70,71]],["staburags.lv",71],["aluksniesiem.lv",71],["dzirkstele.lv",71],["ziemellatvija.lv",71],["rekurzeme.lv",71]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["apollo.lv",[72,74]],["tvnet.lv",[72,74]],["atverskapi.delfi.lv",[73]],["varianti.lv",[75]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
