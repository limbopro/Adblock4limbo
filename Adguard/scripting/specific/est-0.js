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

const argsList = ["","#content-box-right",".ad-box",".top-bar-content","div[id^=\"bsa-block\"]",".top-banner-container","#freefilePopup_background","#freefilePopup_wrapper",".noticeBoxAbs","div[class*=\"banner-placeholder\"]","DIV.adzones","DIV[id*=\"_panels_kb_ad\"]","DIV.banner",".noscriptcssresponsive.noscriptcss.panel",".viewtopicads.panel","a[href*=\"site_banner\"]","#cookie_ribbon",".ad-block-layer",".ad-block-layer-content",".C-ad-block-layer",".C-banner",".md-banner-placement",".rembi",".row.row-space-around.ad-container","div[class$=\"C-group-had-bg\"][style*=\"background-color:#EDF2F4\"]\ndiv[class$=\"col-has-ad\"] div[id^=\"dwidget\"]\ndiv[class$=\"col-has-ad\"] table\ndiv[class*=\"col-has-ad\"]\ndiv[id*=\"sliding\"][style*=\"width: 192px\"]",".flex.col-300.col:has(> .col-has-ad)",".adblock-notice","#right","div[itemtype=\"https://schema.org/WPAdBlock\"]","OBJECT[width=\"200\"]\nOBJECT[width=\"468\"]",".panel.bg3 > div:nth-child(1) > div:nth-child(2) > center:nth-child(1)","#modal","div[class=\"banners\"]",".adblock-notif","a[href*=\"EPL_suur\"]",".is-sticky.advads-close.advads-background-click-close.advads-has-background.rklm-geenius-layer-onload.advads-duration-100.advads-effect-fadein.advads-effect.rklm-geenius-layer.rklm-geenius-layer-desktop","a[href*=\"delivery/ck.php\"]","#rek160","#rek728",".banner-single",".header-banner","A[href*=\"delivery/ck.php\"]\nDIV[class=\"tb\"]\ndiv[id^=\"ox_\"]\nscript[src*=\"delivery/fl.js\"]","div.col-c-1-4","DIV.rek585","DIV.specials","#taust",".sideboxads",".thisad","DIV[class$=\"top-reklaam\"]\nDIV[class*=\"advert-box\"]",".cookieConsent",".top-space","#titleBannerWidget","a[href*=\"www/delivery/ck.php\"]\ndiv[id*=\"idAdbill\"]","#ad_channelgroup","#ad_header_1000x120","#rightsideBanner","DIV.ad_container","DIV.overlay2","DIV[class*=\"kava_ad_\"]\nIFRAME[id=\"frmleftcolads\"]\nIFRAME[src^=\"http://www.facebook.com/plugins/login_button.php\"]\niframe[src^=\"https://www.cvkeskus.ee\"]","#bannertop","div.ads_right_column_adjust","#auto24","DIV[id*=\"dBannerLeft\"]\nDIV[id*=\"dBannerTextInPostView\"]\nDIV[id*=\"dBannerTower\"]\nDIV[id=\"dBannerTop\"]\nDIV[id^=\"dBannerPromo\"]\nTD[class*=\"banner_fp_box\"]\nTD[class*=\"banner_mp_box\"]","#header_banner","DIV.banner_container_1","#rt-drawer",".bannergroup",".header-banners",".widget_sp_image-image-link","a[class~=\"player\"][href*=\"reklaam_\"]\ndiv[class~=\"img\"][style*=\"reklaam_\"]\ndiv[class~=\"thumb\"][style*=\"reklaam_\"]","DIV.col2","#inx-main-roof","tr[id^=\"row\"]","aside[class*=\"widget_image\"]\naside[id^=\"black-studio-tinymce\"]\ndiv[class*=\"main-banner\"]\ndiv[class*=\"useful_banner_manager\"]","#banner_top_image","#FooterAds","DIV.aditem",".banner-slides","a[class=\"banner-link\"]","#fcadcontainer",".adocean-top","div.text-banners","div[id^=\"banner-adoceanohtuleht\"]","#ad","#dealsdeals","#top-smartad","#topBoxContainer","a[href*=\"plugins/adrotate\"]\nembed[src*=\"plugins/adrotate\"]","#first-page-top-banner-holder","div[onclick*=\"promotions\"]","#reklaam","ins[class=\"bookingaff\"]","#checkout-container",".scrollbanners_block","DIV[style*=\"img/ads\"]","#gBgAd","#newsletter-form-popup","#sisuturundus",".ad-block-notification-overlay",".articles-recommendations",".coma-carousel--arco-vara",".coma-carousel--seb",".cookie-container",".dfp-ad",".digipakett-branding-root-container-piano",".group-branding",".group-topic-with-custom-header--elu24",".section-branding-container",".structured-content__group--commercial",".surprise-container",".tp-active.tp-backdrop",".tp-modal","DIV.reisiguruBlockContents",".structured-content__group:has(.list-article--commercial)","iframe[src*=\"cron/ostakvsoov\"]\nsection[id=\"customAdProjectBlock\"]","section.gameFriik",".flex--direction-column.flex.layout--right:has(> .flex--equal-width.aside--ad)","DIV.top_banner","DIV.ban_bottom",".dfp_ad","#bn-bot-wrap",".bn-idx","div[class*=\"wp_bannerize\"]","ul[class=\"oi-banner__list\"]","#fancybox-container-1","#adcontainer","#news_list_banner","#right_banner","div[class*=\"lb_overlay\"]\ndiv[class=\"content-ad\"]","#ap24",".right","#ads_right_column","div.block_custom_wrapper","#banner.left","#ads",".site-player-blocker.site-player-blocker-adblock.site-player-blocker-active","a[onclick*=\"click_ad_\"]","#gkBannerTop","#gkInset > div:first-of-type","#gkMainbodyBottom > div:first-of-type","a[href*=\"flexbanner\"]\ndiv[class^=\"flexbanner\"]","#ad_placeholder","#big","#mt-796b5c8a5dd38dee","#player-ads","iframe[src*=\"hotelliveeb.ee\"]",".article-share",".article-share__item"];
const argsSeqs = [0,1,2,-3,4,5,-6,-7,8,9,-10,-11,12,12,-13,14,15,-16,-17,-18,-19,-20,-21,-22,-23,-24,-25,-26,27,26,27,28,29,30,31,32,33,-33,-40,-95,-96,-97,-98,-99,-100,-101,-102,-103,-104,-105,-106,-107,-108,-109,-110,-111,-112,-113,-114,-115,-116,117,34,-35,36,-37,-38,-39,-40,-41,-42,-43,44,-45,-46,47,48,-49,50,-51,52,-53,-54,-55,-56,-57,58,59,60,-60,-131,132,-61,62,-63,64,-65,-66,-67,68,69,70,-71,72,73,-74,-75,76,77,78,-79,80,-81,82,-83,-84,85,86,87,-88,89,-90,91,92,93,94,-117,118,119,-120,121,122,123,124,-125,-126,-127,128,129,130,133,-134,135,136,-137,-138,-139,140,-141,142,143,144,145,-146,147];
const hostnamesMap = new Map([["1182.ee",1],["1a.ee",2],["accelerista.com",3],["aliexpress.com",5],["annaabi.ee",6],["aripaev.ee",9],["auto24.ee",10],["motors24.ee",13],["mangukoobas.lahendus.ee",13],["biker.ee",14],["cherry.ee",16],["delfi.ee",17],["epl.ee",29],["~tv.delfi.ee",30],["director.ee",31],["e-autoline.com",32],["ehitusfoorum.com",33],["ehuumor.ee",34],["ekspressauto.ee",35],["elu24.ee",36],["postimees.ee",37],["epl.delfi.ee",62],["geenius.ee",63],["hinnavaatlus.ee",65],["ilm.ee",73],["kalale.ee",76],["kanal2.postimees.ee",77],["kaup24.ee",79],["kava.ee",81],["keskus.ee",87],["kroonika.ee",88],["toidutare.ee",89],["kuldnebors.ee",92],["kv.ee",94],["lounaeestlane.ee",96],["lpdigileht.epl.ee",100],["ajaleht.ekspress.ee",100],["maaleht.ee",101],["mail.ee",102],["mallukas.com",104],["nagi.ee",105],["naistekas.delfi.ee",108],["nami-nami.ee",109],["neti.ee",110],["ohtuleht.ee",112],["okidoki.ee",114],["online.ee",117],["online.le.ee",118],["optibet.ee",119],["perekool.ee",121],["piano.io",123],["piletilevi.ee",124],["playforia.com",125],["rate.ee",126],["reporter.postimees.ee",128],["rutracker.org",129],["saartehaal.ee",131],["sirp.ee",132],["smsraha.ee",133],["soccernet.ee",134],["soov.ee",138],["telegram.ee",139],["tv.delfi.ee",140],["tv3.ee",141],["tv3play.ee",143],["vorumaateataja.ee",144],["whatcar.ee",148],["www.k-rauta.ee",150],["youtube.com",151],["~hotelliveeb.ee",152],["~postimees.ee",153]]);
const hasEntities = false;

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, argsSeqs, hostnamesMap, hasEntities });

/******************************************************************************/

})();

/******************************************************************************/
