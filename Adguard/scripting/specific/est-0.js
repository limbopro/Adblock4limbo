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

const argsList = ["","#content-box-right",".ad-box",".top-bar-content","div[id^=\"bsa-block\"]",".top-banner-container","#freefilePopup_background","#freefilePopup_wrapper",".noticeBoxAbs","div[class*=\"banner-placeholder\"]","DIV.adzones","DIV[id*=\"_panels_kb_ad\"]","DIV.banner",".noscriptcssresponsive.noscriptcss.panel",".viewtopicads.panel","a[href*=\"site_banner\"]","#cookie_ribbon",".C-ad-block-layer",".C-banner",".md-banner-placement",".row.row-space-around.ad-container","div[class$=\"C-group-had-bg\"][style*=\"background-color:#EDF2F4\"]\ndiv[class$=\"col-has-ad\"] div[id^=\"dwidget\"]\ndiv[class$=\"col-has-ad\"] table\ndiv[class*=\"col-has-ad\"]\ndiv[id*=\"sliding\"][style*=\"width: 192px\"]",".flex.col-300.col:has(> .col-has-ad)",".adblock-notice","#right",".ad-block-layer-content",".ad-block-layer","div[itemtype=\"https://schema.org/WPAdBlock\"]","OBJECT[width=\"200\"]\nOBJECT[width=\"468\"]",".panel.bg3 > div:nth-child(1) > div:nth-child(2) > center:nth-child(1)","#modal","div[class=\"banners\"]",".adblock-notif","a[href*=\"EPL_suur\"]",".is-sticky.advads-close.advads-background-click-close.advads-has-background.rklm-geenius-layer-onload.advads-duration-100.advads-effect-fadein.advads-effect.rklm-geenius-layer.rklm-geenius-layer-desktop","a[href*=\"delivery/ck.php\"]","#rek160","#rek728",".banner-single",".header-banner","A[href*=\"delivery/ck.php\"]\nDIV[class=\"tb\"]\ndiv[id^=\"ox_\"]\nscript[src*=\"delivery/fl.js\"]","div.col-c-1-4","DIV.rek585","DIV.specials","#taust",".sideboxads",".thisad","DIV[class$=\"top-reklaam\"]\nDIV[class*=\"advert-box\"]",".cookieConsent",".top-space","#titleBannerWidget","a[href*=\"www/delivery/ck.php\"]\ndiv[id*=\"idAdbill\"]","#ad_channelgroup","#ad_header_1000x120","#rightsideBanner","DIV.ad_container","DIV.overlay2","DIV[class*=\"kava_ad_\"]\nIFRAME[id=\"frmleftcolads\"]\nIFRAME[src^=\"http://www.facebook.com/plugins/login_button.php\"]\niframe[src^=\"https://www.cvkeskus.ee\"]","#bannertop","button.scrolling-container","div.ads_right_column_adjust","#auto24","DIV[id*=\"dBannerLeft\"]\nDIV[id*=\"dBannerTextInPostView\"]\nDIV[id*=\"dBannerTower\"]\nDIV[id=\"dBannerTop\"]\nDIV[id^=\"dBannerPromo\"]\nTD[class*=\"banner_fp_box\"]\nTD[class*=\"banner_mp_box\"]","#header_banner","DIV.banner_container_1","#rt-drawer",".bannergroup",".header-banners",".widget_sp_image-image-link","a[class~=\"player\"][href*=\"reklaam_\"]\ndiv[class~=\"img\"][style*=\"reklaam_\"]\ndiv[class~=\"thumb\"][style*=\"reklaam_\"]","DIV.col2","#inx-main-roof","tr[id^=\"row\"]","aside[class*=\"widget_image\"]\naside[id^=\"black-studio-tinymce\"]\ndiv[class*=\"main-banner\"]\ndiv[class*=\"useful_banner_manager\"]","#banner_top_image","#FooterAds","DIV.aditem",".banner-slides","a[class=\"banner-link\"]","#fcadcontainer",".adocean-top","div.text-banners","div[id^=\"banner-adoceanohtuleht\"]","#ad","#dealsdeals","#top-smartad","#topBoxContainer","a[href*=\"plugins/adrotate\"]\nembed[src*=\"plugins/adrotate\"]","#first-page-top-banner-holder","div[onclick*=\"promotions\"]","#reklaam","ins[class=\"bookingaff\"]","#checkout-container",".scrollbanners_block","DIV[style*=\"img/ads\"]","#gBgAd","#newsletter-form-popup","#sisuturundus",".ad-block-notification-overlay",".articles-recommendations",".coma-carousel--arco-vara",".coma-carousel--seb",".cookie-container",".dfp-ad",".digipakett-branding-root-container-piano",".group-branding",".group-topic-with-custom-header--elu24",".section-branding-container",".structured-content__group--commercial",".surprise-container",".tp-active.tp-backdrop",".tp-modal","DIV.reisiguruBlockContents","div:has(> div > div > div > article.list-article--commercial)\niframe[src*=\"cron/ostakvsoov\"]\nsection[id=\"customAdProjectBlock\"]","section.gameFriik",".flex--direction-column.flex.layout--right:has(> .flex--equal-width.aside--ad)","DIV.top_banner","DIV.ban_bottom",".dfp_ad","#bn-bot-wrap",".bn-idx","div[class*=\"wp_bannerize\"]","ul[class=\"oi-banner__list\"]","#fancybox-container-1","#adcontainer","#news_list_banner","#right_banner","div[class*=\"lb_overlay\"]\ndiv[class=\"content-ad\"]","#ap24",".right","#ads_right_column","div.block_custom_wrapper","#banner.left","#ads",".site-player-blocker.site-player-blocker-adblock.site-player-blocker-active","a[onclick*=\"click_ad_\"]","#gkBannerTop","#gkInset > div:first-of-type","#gkMainbodyBottom > div:first-of-type","a[href*=\"flexbanner\"]\ndiv[class^=\"flexbanner\"]","#ad_placeholder","#big","#mt-796b5c8a5dd38dee","#player-ads","iframe[src*=\"hotelliveeb.ee\"]",".article-share",".article-share__item"];
const argsSeqs = [0,1,2,-3,4,5,-6,-7,8,9,-10,-11,12,12,-13,14,15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,26,23,24,27,28,29,30,31,32,-32,-39,-95,-96,-97,-98,-99,-100,-101,-102,-103,-104,-105,-106,-107,-108,-109,-110,-111,-112,-113,-114,-115,116,33,-34,35,-36,-37,-38,-39,-40,-41,-42,43,-44,-45,46,47,-48,49,-50,51,-52,-53,-54,-55,-56,57,58,59,60,-60,-130,131,-61,62,-63,64,-65,-66,-67,68,69,70,-71,72,73,-74,-75,76,77,78,-79,80,-81,82,-83,-84,85,86,87,-88,89,-90,91,92,93,94,-116,117,118,-119,120,121,122,123,-124,-125,-126,127,128,129,132,-133,134,135,-136,-137,-138,139,-140,141,142,143,144,-145,146];
const hostnamesMap = new Map([["1182.ee",1],["1a.ee",2],["accelerista.com",3],["aliexpress.com",5],["annaabi.ee",6],["aripaev.ee",9],["auto24.ee",10],["motors24.ee",13],["mangukoobas.lahendus.ee",13],["biker.ee",14],["cherry.ee",16],["delfi.ee",17],["epl.ee",28],["~tv.delfi.ee",29],["director.ee",30],["e-autoline.com",31],["ehitusfoorum.com",32],["ehuumor.ee",33],["ekspressauto.ee",34],["elu24.ee",35],["postimees.ee",36],["epl.delfi.ee",60],["geenius.ee",61],["hinnavaatlus.ee",63],["ilm.ee",71],["kalale.ee",74],["kanal2.postimees.ee",75],["kaup24.ee",77],["kava.ee",79],["keskus.ee",85],["kinnisvara24.ee",86],["kroonika.ee",87],["toidutare.ee",88],["kuldnebors.ee",91],["kv.ee",93],["lounaeestlane.ee",95],["lpdigileht.epl.ee",99],["ajaleht.ekspress.ee",99],["maaleht.ee",100],["mail.ee",101],["mallukas.com",103],["nagi.ee",104],["naistekas.delfi.ee",107],["nami-nami.ee",108],["neti.ee",109],["ohtuleht.ee",111],["okidoki.ee",113],["online.ee",116],["online.le.ee",117],["optibet.ee",118],["perekool.ee",120],["piano.io",122],["piletilevi.ee",123],["playforia.com",124],["rate.ee",125],["reporter.postimees.ee",127],["rutracker.org",128],["saartehaal.ee",130],["sirp.ee",131],["smsraha.ee",132],["soccernet.ee",133],["soov.ee",137],["telegram.ee",138],["tv.delfi.ee",139],["tv3.ee",140],["tv3play.ee",142],["vorumaateataja.ee",143],["whatcar.ee",147],["www.k-rauta.ee",149],["youtube.com",150],["~hotelliveeb.ee",151],["~postimees.ee",152]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
