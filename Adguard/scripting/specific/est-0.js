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

// ruleset: est-0

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#content-box-right",".ad-box",".top-bar-content,\ndiv[id^=\"bsa-block\"]",".top-banner-container","#freefilePopup_background,\n#freefilePopup_wrapper,\n.noticeBoxAbs","div[class*=\"banner-placeholder\"]","DIV.adzones,\nDIV[id*=\"_panels_kb_ad\"]","DIV.banner",".noscriptcssresponsive.noscriptcss.panel,\n.viewtopicads.panel","a[href*=\"site_banner\"]","#cookie_ribbon,\n.C-ad-block-layer,\n.C-banner,\n.ad-block-layer,\n.ad-block-layer-content,\n.flex.col-300.col:has(> .col-has-ad),\n.md-banner-placement,\n.row.row-space-around.ad-container,\ndiv[class$=\"C-group-had-bg\"][style*=\"background-color:#EDF2F4\"],\ndiv[class$=\"col-has-ad\"] div[id^=\"dwidget\"],\ndiv[class$=\"col-has-ad\"] table,\ndiv[class*=\"col-has-ad\"],\ndiv[id*=\"sliding\"][style*=\"width: 192px\"]",".adblock-notice","#right","div[itemtype=\"https://schema.org/WPAdBlock\"]","OBJECT[width=\"200\"],\nOBJECT[width=\"468\"]",".panel.bg3 > div:nth-child(1) > div:nth-child(2) > center:nth-child(1)","#modal","div[class=\"banners\"]",".adblock-notif","a[href*=\"EPL_suur\"]",".is-sticky.advads-close.advads-background-click-close.advads-has-background.rklm-geenius-layer-onload.advads-duration-100.advads-effect-fadein.advads-effect.rklm-geenius-layer.rklm-geenius-layer-desktop,\na[href*=\"delivery/ck.php\"]","#rek160,\n#rek728,\n.banner-single,\nA[href*=\"delivery/ck.php\"],\nDIV.rek585,\nDIV.specials,\nDIV[class=\"tb\"],\ndiv.col-c-1-4,\ndiv[id^=\"ox_\"],\nscript[src*=\"delivery/fl.js\"]",".header-banner","#taust,\n.sideboxads,\n.thisad","DIV[class$=\"top-reklaam\"],\nDIV[class*=\"advert-box\"]",".cookieConsent,\n.top-space","#titleBannerWidget,\na[href*=\"www/delivery/ck.php\"],\ndiv[id*=\"idAdbill\"]","#ad_channelgroup,\n#ad_header_1000x120,\n#rightsideBanner,\nDIV.ad_container,\nDIV.overlay2,\nDIV[class*=\"kava_ad_\"],\nIFRAME[id=\"frmleftcolads\"],\nIFRAME[src^=\"http://www.facebook.com/plugins/login_button.php\"],\niframe[src^=\"https://www.cvkeskus.ee\"]","#bannertop","button.scrolling-container","div.ads_right_column_adjust","#auto24,\nDIV[id*=\"dBannerLeft\"],\nDIV[id*=\"dBannerTextInPostView\"],\nDIV[id*=\"dBannerTower\"],\nDIV[id=\"dBannerTop\"],\nDIV[id^=\"dBannerPromo\"],\nTD[class*=\"banner_fp_box\"],\nTD[class*=\"banner_mp_box\"]","#header_banner,\nDIV.banner_container_1","#rt-drawer,\n.bannergroup,\n.header-banners,\n.widget_sp_image-image-link","a[class~=\"player\"][href*=\"reklaam_\"],\ndiv[class~=\"img\"][style*=\"reklaam_\"],\ndiv[class~=\"thumb\"][style*=\"reklaam_\"]","DIV.col2","#inx-main-roof,\ntr[id^=\"row\"]","aside[class*=\"widget_image\"],\naside[id^=\"black-studio-tinymce\"],\ndiv[class*=\"main-banner\"],\ndiv[class*=\"useful_banner_manager\"]","#FooterAds,\n#banner_top_image,\nDIV.aditem",".banner-slides","a[class=\"banner-link\"]","#fcadcontainer,\n.adocean-top","div.text-banners,\ndiv[id^=\"banner-adoceanohtuleht\"]","#ad,\n#dealsdeals,\n#top-smartad","#topBoxContainer","a[href*=\"plugins/adrotate\"],\nembed[src*=\"plugins/adrotate\"]","#first-page-top-banner-holder,\ndiv[onclick*=\"promotions\"]","#reklaam,\nins[class=\"bookingaff\"]","#checkout-container",".scrollbanners_block","DIV[style*=\"img/ads\"]","#gBgAd,\n#newsletter-form-popup,\n#sisuturundus,\n.ad-block-notification-overlay,\n.article-share,\n.article-share__item,\n.articles-recommendations,\n.coma-carousel--arco-vara,\n.coma-carousel--seb,\n.cookie-container,\n.dfp-ad,\n.digipakett-branding-root-container-piano,\n.flex--direction-column.flex.layout--right:has(> .flex--equal-width.aside--ad),\n.group-branding,\n.group-topic-with-custom-header--elu24,\n.section-branding-container,\n.structured-content__group--commercial,\n.surprise-container,\n.tp-active.tp-backdrop,\n.tp-modal,\nDIV.reisiguruBlockContents,\ndiv:has(> div > div > div > article.list-article--commercial),\niframe[src*=\"cron/ostakvsoov\"],\nsection.gameFriik,\nsection[id=\"customAdProjectBlock\"]","DIV.top_banner","DIV.ban_bottom",".dfp_ad","#bn-bot-wrap,\n.bn-idx","div[class*=\"wp_bannerize\"]","ul[class=\"oi-banner__list\"]","#fancybox-container-1","#adcontainer,\n#news_list_banner,\n#right_banner,\ndiv[class*=\"lb_overlay\"],\ndiv[class=\"content-ad\"]","#ap24",".right","#ads_right_column,\ndiv.block_custom_wrapper","#banner.left","#ads,\n.site-player-blocker.site-player-blocker-adblock.site-player-blocker-active","a[onclick*=\"click_ad_\"]","#gkBannerTop,\n#gkInset > div:first-of-type,\n#gkMainbodyBottom > div:first-of-type,\na[href*=\"flexbanner\"],\ndiv[class^=\"flexbanner\"]","#ad_placeholder,\n#big","#mt-796b5c8a5dd38dee","#player-ads","iframe[src*=\"hotelliveeb.ee\"]"];

const hostnamesMap = new Map([["1182.ee",0],["1a.ee",1],["accelerista.com",2],["aliexpress.com",3],["annaabi.ee",4],["aripaev.ee",5],["auto24.ee",[6,7]],["motors24.ee",7],["mangukoobas.lahendus.ee",7],["biker.ee",8],["cherry.ee",9],["delfi.ee",[10,11,12]],["epl.ee",11],["tv.delfi.ee",[12,63]],["director.ee",13],["e-autoline.com",14],["ehitusfoorum.com",15],["ehuumor.ee",16],["ekspressauto.ee",17],["elu24.ee",18],["postimees.ee",[18,22,51,52]],["epl.delfi.ee",19],["geenius.ee",20],["hinnavaatlus.ee",[21,22]],["ilm.ee",23],["kalale.ee",24],["kanal2.postimees.ee",25],["kaup24.ee",26],["kava.ee",27],["keskus.ee",28],["kinnisvara24.ee",29],["kroonika.ee",30],["toidutare.ee",[30,62]],["kuldnebors.ee",31],["kv.ee",32],["lounaeestlane.ee",33],["lpdigileht.epl.ee",34],["ajaleht.ekspress.ee",34],["maaleht.ee",35],["mail.ee",36],["mallukas.com",37],["nagi.ee",38],["naistekas.delfi.ee",39],["nami-nami.ee",40],["neti.ee",41],["ohtuleht.ee",42],["okidoki.ee",43],["online.ee",44],["online.le.ee",45],["optibet.ee",46],["perekool.ee",47],["piano.io",48],["piletilevi.ee",49],["playforia.com",50],["rate.ee",[52,53]],["reporter.postimees.ee",54],["rutracker.org",55],["saartehaal.ee",56],["sirp.ee",57],["smsraha.ee",58],["soccernet.ee",59],["soov.ee",60],["telegram.ee",61],["tv3.ee",64],["tv3play.ee",65],["vorumaateataja.ee",66],["whatcar.ee",67],["www.k-rauta.ee",68],["youtube.com",69],["hotelliveeb.ee",70]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
