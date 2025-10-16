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

// annoyances-notifications

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

const genericSelectorMap = [[2387,"#FCMpush-slidedown-container"],[2466,"#NotificationsAskMsg"],[1549,"#SubscribePush"],[2819,"#SubscribePushNotificationPanel"],[2407,"#Znotify_Prompt"],[2523,"#\\5f __tdspushdiv"],[1323,"#___ndtvpushdiv"],[4033,"#app-follow-banner"],[2552,"#app-promo-overlay"],[1763,"#auplusflash,\n.m-notifications-banner"],[446,"#auwnotificationpopup"],[1864,"#bigpicture-webpush-widget"],[2126,"#browser-notifications-prompt"],[2846,"#confirmaPush_Cont"],[1147,"#cont_webpush,\n.apn-popover-container"],[2692,"#crocopush_banner"],[2428,"#desktop-notification-ask-dialog"],[1422,"#desktop-notifications"],[2496,"#dialog-push-notification"],[1434,"#divPnot"],[766,"#edrone--push--alert--box"],[3840,"#frizbit-prompter"],[81,"#ggpush-main-area"],[1570,"#grow-consent-modal"],[3559,"#hint-push-service"],[428,"#ilabspush-optin-container"],[1943,"#jeapie-prompt-widget"],[2816,"#js-gcm-notif"],[1659,"#lwp-popover-container"],[0,"#modalCognitoPush"],[716,"#my_web_push_app_box_confirm"],[3030,"#nlSubscriptionCookie"],[881,"#noti_msg"],[3629,"#noti_subscribe_dialog"],[1978,"#notification-permission"],[2305,"#notification-push"],[2229,"#notificationAllowPrompt"],[3450,"#notificationPopUp"],[3418,"#notificationPopup"],[2368,"#notify-optin-wrap"],[341,"#og-banner"],[2278,"#oiNotification"],[1616,"#onesignal-popover-container"],[2675,"#pa-push-notification-subscription"],[3184,"#popUpNotification"],[33,"#push-alert-block"],[333,"#push-notification"],[3083,"#push-notification-box"],[25,"#push-notification-pop-up"],[868,"#push-overlay"],[77,"#push-prompt"],[3196,"#push-subscription-button"],[3639,"#push-subscription-prompt"],[3571,"#pushAdUpBanner"],[308,"#pushNotification"],[1463,"#pushNotification-disclaimer"],[690,"#pushOffer"],[2191,"#pushSec"],[2040,"#pushSubscribeModal"],[1184,"#pushSubscriptionModal"],[3851,"#push_alert,\n.i-push-notification"],[1230,"#push_notifications"],[487,"#push_subscribe"],[779,"#push_switcher"],[4067,"#pushbanner"],[3465,"#pushinstruments_popup"],[3608,"#pushpushgo-container"],[2045,"#pushwoosh-pop"],[3789,"#qrzpush-prompt-widget"],[1129,"#rd-webpush-modal"],[2260,"#shopify-section-order-notifications"],[3995,"#smart_push_smio_overlay"],[1703,"#smart_push_smio_window"],[365,"#spm_msg_push_notification"],[1600,"#subscribeToPush"],[2844,"#subscribeToWebPush"],[694,"#visilabs_web_push_perm_box"],[2677,"#web-alerts-modal"],[3452,"#web-push-prompt"],[1213,"#webPushPopup"],[3600,"#webpush-info-div"],[3165,"#webpushSelctorFormId"],[3939,"#webpush_modal"],[2590,"#webpush_overlay_back"],[724,"#webpush_soft_prompt"],[3631,"#webpushr-prompt-wrapper"],[2077,"#widget-pushNotification"],[3806,".FCMpush-slidedown-container"],[1536,".PushNotification--base"],[496,".PushNotification--top"],[958,".PushNotification-popover-dialog"],[2445,".PushSubscription-block"],[1273,".ampnotification"],[1313,".aswpn-fire-push-popup"],[1440,".b-notification-push,\n.push_notification"],[1984,".b-push-notification"],[3752,".bk-wonderpush"],[373,".block-sbase-bene-newsletter"],[1078,".branded-app-shortcode-inarticle"],[2378,".bs-push-noti"],[2009,".bubble-push"],[2561,".c-push-notification"],[3109,".cleverpush-backdrop"],[759,".cleverpush-confirm"],[3286,".cont_webpush"],[4058,".contentwebpush"],[913,".desktop-notification-ask-dialog"],[3888,".dmgpush-popover-container"],[2734,".e-push-notification-popup"],[1024,".et_push_notification"],[2798,".firebase-slidedown-container"],[86,".frizbit-prompt"],[844,".grv-dialog-host"],[2849,".hs-push"],[3453,".htpush-chrome-style-notification,\n.simple-subscription-form"],[1077,".id-StoryElement-embed--cleverPush"],[2737,".insider-opt-in-notification"],[3292,".item-newsletter-form"],[2301,".j-push-notifications-feature"],[3082,".jeg_push_notification_content"],[1340,".js-custom-push-notifications"],[1431,".js-notifications-button"],[515,".js-push-allow"],[2138,".kraken-popup,\n.pushinstruments"],[195,".lightbox-push"],[675,".m-webpush-layer"],[3072,".message-push-notification"],[1666,".modal-push"],[3379,".naf-web-notifications-popup"],[3523,".nav-link--notification-handler"],[1708,".notBar"],[1936,".notf-overlay"],[534,".notificacao.registerPush"],[2670,".notification-prompt-wrapper"],[2560,".notification-pwa"],[1148,".notification-upsell-push"],[2416,".notificationConfirmationOverlay"],[1709,".notify-optin-wrap"],[1317,".ns-notification-popup"],[2672,".ntfc_overlay"],[3785,".ntfc_popup"],[3642,".oi-notify"],[1366,".page__notifications"],[637,".perfecty-push-dialog-container"],[946,".pnfpb-push-subscribe-icon"],[3282,".push-area-btn"],[128,".push-bx"],[1861,".push-modal-wrapper"],[3688,".push-notice"],[2118,".push-notification-box"],[3659,".push-notification-opt-in"],[4014,".push-notification-popover"],[180,".push-notification-prompt"],[108,".push-notifications-primer"],[106,".push-notifications-prompt"],[1801,".push-overlay"],[3410,".push-sdk-prompt-shell"],[3963,".push-subscription-alert"],[2193,".push-subscription-button"],[2906,".push-subscription-prompt"],[2996,".push-subscription-wrapper"],[523,".push-wrap:not(body):not(html)"],[2251,".push-wrapper:not(body):not(html)"],[3422,".pushNotWrap"],[409,".pushNotification"],[3409,".push_back"],[3123,".push_notifications_alert"],[2474,".push_subscribe"],[3412,".push_warn"],[1557,".pushly_popover"],[1686,".pushowl-optin"],[165,".pwa-modal-prompt"],[3843,".rdmapps-push-dialog"],[3548,".setrow-push-popup-container"],[1479,".showtvPushOverlay"],[1197,".sk-notification-dialog"],[1538,".softPush_notification"],[514,".surveymonkey-popup"],[1056,".tsoft-push--in-notification"],[538,".ud_webpush_sticky"],[2831,".web-notification"],[2853,".web-push"],[2358,".web-push-box"],[2012,".webpush_wrap"],[2947,".window-push"],[1252,".wordpress-fire-push-popup"],[4016,".ys-push"],[1455,"#SmarterBannerContainer,\n.app-banner-header"],[2306,"#appInstallNotification"],[3447,"#appOpenNotification"],[667,"#appinstall_bnr"],[3974,"#aside-app-banner"],[3133,"#bannerInstallApp"],[1409,"#branch-banner-iframe"],[742,"#brzpushpermission"],[4020,"#custom_smartbanner"],[3705,"#daraz-smart-banner"],[681,"#download_app_banner_btn"],[3889,"#floatingAppButton"],[3141,"#head-app-download"],[3226,"#inlineBannerForApp"],[993,"#iossmartbanner"],[1292,"#js-getAppHeader"],[3054,"#mn-app-banner"],[2820,"#smart-bnr-rbcapp"],[1898,"#smartbanner-desktop"],[115,"#smartbanner.android,\n#smartbanner.ios"],[2779,"#tapcart-web-banner"],[1461,"#xm_app_stickyHeader"],[1075,".app-ad-container-desktop"],[3329,".app-banner-container"],[2817,".app-down-banner-container"],[1214,".appInstlBnr"],[2020,".app_banner_link"],[2937,".appbnr-box"],[2403,".appdown_popup"],[1951,".banner-download-app-hidden"],[1779,".branch-banner"],[1509,".c-app-banner-header-wrap"],[3654,".c-app-install"],[1123,".c-install-banner"],[1930,".c-notification-link-app"],[2751,".cept-banner-link"],[3765,".footer-app-download"],[3914,".footer__download-app-container"],[2921,".gh-app-banner"],[3714,".gta-header-banner"],[810,".header-app-banner"],[2861,".headerGetApp"],[2705,".installAppPopup-top"],[2860,".js-link-to-app"],[2096,".js-openAppBox"],[4034,".mobile-app-banner,\n.mopile-app-banner"],[2389,".mobile-download-app-tout"],[3408,".mobile-web-redirect-bar"],[3681,".native-app-banner"],[1542,".open-app-banner"],[3761,".p-webtoapp-banner"],[217,".rsttop-webtoapp-banner-overlay"],[2841,".smart-banner-collection"],[3139,".smart-banner-download"],[1215,".smartbanner--android"],[3879,".smartbanner--ios"],[2447,".smartbanner-android"],[2311,".smartbanner-container"],[103,".smartbanner-desktop"],[992,".smartbanner-ios"],[3438,".smartbnr-android"],[2216,".smartbnr-ios"],[206,".tmblr-iframe--app-cta-button"],[1769,".z-bit-smartbanner"],[3609,".subscription-widget-wrap > .show-subscribe"],[3124,"#uutiskirje-nosto"]];
const genericExceptionSieve = [1588,1431,1575,523,2251,2831];
const genericExceptionMap = [["audionetwork.com","#push-container:not(body):not(html)"],["carlsenfritzoe.no","#push-container:not(body):not(html)"],["otvet.mail.ru",".js-notifications-button"],["joinhandshake.com",".notifications-wrapper"],["online.rsb.ru",".notifications-wrapper"],["asbclassic.co.nz",".push-wrap:not(body):not(html)"],["envirowaste.co.nz",".push-wrap:not(body):not(html)"],["harmoney.co.nz",".push-wrap:not(body):not(html)"],["harmoney.com.au",".push-wrap:not(body):not(html)"],["mstream.io",".push-wrap:not(body):not(html)"],["rocketlabusa.com",".push-wrap:not(body):not(html)"],["underconsideration.com",".push-wrap:not(body):not(html)"],["arabbank.com.au",".push-wrapper:not(body):not(html)"],["color4care.co.uk",".push-wrapper:not(body):not(html)"],["color4care.dk",".push-wrapper:not(body):not(html)"],["color4care.fi",".push-wrapper:not(body):not(html)"],["color4care.no",".push-wrapper:not(body):not(html)"],["operon.pl",".push-wrapper:not(body):not(html)"],["vardvaskan.se",".push-wrapper:not(body):not(html)"],["rescuetime.com",".web-notification"]];

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
