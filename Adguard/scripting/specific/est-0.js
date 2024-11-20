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

// ruleset: est-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["iframe[src*=\"hotelliveeb.ee\"]",".article-share,\n.article-share__item",".top-bar-content,\ndiv[id^=\"bsa-block\"]",".top-banner-container","OBJECT[width=\"200\"],\nOBJECT[width=\"468\"]",".panel.bg3 > div:nth-child(1) > div:nth-child(2) > center:nth-child(1)","aside[class*=\"widget_image\"],\naside[id^=\"black-studio-tinymce\"],\ndiv[class*=\"main-banner\"],\ndiv[class*=\"useful_banner_manager\"]","DIV[style*=\"img/ads\"]","#player-ads","#content-box-right",".ad-box","#freefilePopup_background,\n#freefilePopup_wrapper,\n.noticeBoxAbs","div[class*=\"banner-placeholder\"]","DIV.adzones,\nDIV[id*=\"_panels_kb_ad\"]","DIV.banner",".noscriptcssresponsive.noscriptcss.panel,\n.viewtopicads.panel","a[href*=\"site_banner\"]","#cookie_ribbon,\n.C-ad-block-layer,\n.C-banner,\n.ad-block-layer,\n.ad-block-layer-content,\n.flex.col-300.col:has(> .col-has-ad),\n.md-banner-placement,\n.row.row-space-around.ad-container,\ndiv[class$=\"C-group-had-bg\"][style*=\"background-color:#EDF2F4\"],\ndiv[class$=\"col-has-ad\"] div[id^=\"dwidget\"],\ndiv[class$=\"col-has-ad\"] table,\ndiv[class*=\"col-has-ad\"],\ndiv[id*=\"sliding\"][style*=\"width: 192px\"]",".adblock-notice","#right","a[href*=\"EPL_suur\"]",".banner-slides","#banner.left","div[itemtype=\"https://schema.org/WPAdBlock\"]","#modal","a[class~=\"player\"][href*=\"reklaam_\"],\ndiv[class~=\"img\"][style*=\"reklaam_\"],\ndiv[class~=\"thumb\"][style*=\"reklaam_\"]","div[class=\"banners\"]",".adblock-notif",".is-sticky.advads-close.advads-background-click-close.advads-has-background.rklm-geenius-layer-onload.advads-duration-100.advads-effect-fadein.advads-effect.rklm-geenius-layer.rklm-geenius-layer-desktop,\na[href*=\"delivery/ck.php\"]","#rek160,\n#rek728,\n.banner-single,\nA[href*=\"delivery/ck.php\"],\nDIV.rek585,\nDIV.specials,\nDIV[class=\"tb\"],\ndiv.col-c-1-4,\ndiv[id^=\"ox_\"],\nscript[src*=\"delivery/fl.js\"]",".header-banner","#taust,\n.sideboxads,\n.thisad","#mt-796b5c8a5dd38dee","DIV[class$=\"top-reklaam\"],\nDIV[class*=\"advert-box\"]","#titleBannerWidget,\na[href*=\"www/delivery/ck.php\"],\ndiv[id*=\"idAdbill\"]","#ad_channelgroup,\n#ad_header_1000x120,\n#rightsideBanner,\nDIV.ad_container,\nDIV.overlay2,\nDIV[class*=\"kava_ad_\"],\nIFRAME[id=\"frmleftcolads\"],\nIFRAME[src^=\"http://www.facebook.com/plugins/login_button.php\"],\niframe[src^=\"https://www.cvkeskus.ee\"]","#bannertop","button.scrolling-container","div.ads_right_column_adjust","#auto24,\nDIV[id*=\"dBannerLeft\"],\nDIV[id*=\"dBannerTextInPostView\"],\nDIV[id*=\"dBannerTower\"],\nDIV[id=\"dBannerTop\"],\nDIV[id^=\"dBannerPromo\"],\nTD[class*=\"banner_fp_box\"],\nTD[class*=\"banner_mp_box\"]","#header_banner,\nDIV.banner_container_1","a[href*=\"plugins/adrotate\"],\nembed[src*=\"plugins/adrotate\"]","#rt-drawer,\n.bannergroup,\n.header-banners,\n.widget_sp_image-image-link","DIV.col2","#inx-main-roof,\ntr[id^=\"row\"]","#FooterAds,\n#banner_top_image,\nDIV.aditem","a[class=\"banner-link\"]","#fcadcontainer,\n.adocean-top","div.text-banners,\ndiv[id^=\"banner-adoceanohtuleht\"]","#ad,\n#dealsdeals,\n#top-smartad","#topBoxContainer","#first-page-top-banner-holder,\ndiv[onclick*=\"promotions\"]","#reklaam,\nins[class=\"bookingaff\"]",".scrollbanners_block","#gBgAd,\n#newsletter-form-popup,\n#sisuturundus,\n.ad-block-notification-overlay,\n.articles-recommendations,\n.coma-carousel--arco-vara,\n.coma-carousel--seb,\n.cookie-container,\n.dfp-ad,\n.digipakett-branding-root-container-piano,\n.flex--direction-column.flex.layout--right:has(> .flex--equal-width.aside--ad),\n.group-branding,\n.group-topic-with-custom-header--elu24,\n.section-branding-container,\n.structured-content__group--commercial,\n.surprise-container,\n.tp-active.tp-backdrop,\n.tp-modal,\nDIV.reisiguruBlockContents,\ndiv:has(> div > div > div > article.list-article--commercial),\niframe[src*=\"cron/ostakvsoov\"],\nsection.gameFriik,\nsection[id=\"customAdProjectBlock\"]","DIV.top_banner",".cookieConsent,\n.top-space",".dfp_ad","DIV.ban_bottom","div[class*=\"wp_bannerize\"]","ul[class=\"oi-banner__list\"]","#fancybox-container-1","#adcontainer,\n#news_list_banner,\n#right_banner,\ndiv[class*=\"lb_overlay\"],\ndiv[class=\"content-ad\"]","#ap24",".right","#ads_right_column,\ndiv.block_custom_wrapper","#ads,\n.site-player-blocker.site-player-blocker-adblock.site-player-blocker-active","a[onclick*=\"click_ad_\"]","#gkBannerTop,\n#gkInset > div:first-of-type,\n#gkMainbodyBottom > div:first-of-type,\na[href*=\"flexbanner\"],\ndiv[class^=\"flexbanner\"]","#ad_placeholder,\n#big","#checkout-container","#bn-bot-wrap,\n.bn-idx"];

const hostnamesMap = new Map([["*",[0,1]],["accelerista.com",2],["aliexpress.com",3],["e-autoline.com",4],["ehitusfoorum.com",5],["mallukas.com",6],["playforia.com",7],["youtube.com",8],["1182.ee",9],["1a.ee",10],["annaabi.ee",11],["aripaev.ee",12],["auto24.ee",[13,14]],["mangukoobas.lahendus.ee",14],["motors24.ee",14],["biker.ee",15],["cherry.ee",16],["delfi.ee",[17,18,19]],["epl.ee",18],["epl.delfi.ee",20],["naistekas.delfi.ee",21],["tv.delfi.ee",22],["director.ee",23],["ehuumor.ee",24],["ajaleht.ekspress.ee",25],["lpdigileht.epl.ee",25],["ekspressauto.ee",26],["elu24.ee",27],["postimees.ee",[27,30,54,55]],["geenius.ee",28],["hinnavaatlus.ee",[29,30]],["ilm.ee",31],["www.k-rauta.ee",32],["kalale.ee",33],["kaup24.ee",34],["kava.ee",35],["keskus.ee",36],["kinnisvara24.ee",37],["kroonika.ee",38],["toidutare.ee",[38,65]],["kuldnebors.ee",39],["kv.ee",40],["online.le.ee",41],["lounaeestlane.ee",42],["maaleht.ee",43],["mail.ee",44],["nagi.ee",45],["nami-nami.ee",46],["neti.ee",47],["ohtuleht.ee",48],["okidoki.ee",49],["online.ee",50],["optibet.ee",51],["perekool.ee",52],["piletilevi.ee",53],["rate.ee",[55,58]],["kanal2.postimees.ee",56],["reporter.postimees.ee",57],["saartehaal.ee",59],["sirp.ee",60],["smsraha.ee",61],["soccernet.ee",62],["soov.ee",63],["telegram.ee",64],["tv3.ee",66],["tv3play.ee",67],["vorumaateataja.ee",68],["whatcar.ee",69],["piano.io",70],["rutracker.org",71]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["hotelliveeb.ee",[0]],["postimees.ee",[1]],["tv.delfi.ee",[19]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
