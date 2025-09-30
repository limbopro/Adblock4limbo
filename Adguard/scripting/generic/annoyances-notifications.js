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

const genericSelectorMap = [[3041619,"#FCMpush-slidedown-container"],[13642146,"#NotificationsAskMsg"],[3679757,"#SubscribePush"],[7117571,"#SubscribePushNotificationPanel"],[2591079,"#Znotify_Prompt"],[12196315,"#\\5f __tdspushdiv"],[6886699,"#___ndtvpushdiv"],[2613185,"#app-follow-banner"],[2607608,"#app-promo-overlay"],[4081379,"#auplusflash"],[15483326,"#auwnotificationpopup"],[567112,"#bigpicture-webpush-widget"],[11356238,"#browser-notifications-prompt"],[1022750,"#confirmaPush_Cont"],[1299579,"#cont_webpush"],[15583876,"#crocopush_banner"],[10967420,"#desktop-notification-ask-dialog"],[341390,"#desktop-notifications"],[11155904,"#dialog-push-notification"],[2950554,"#divPnot"],[5214974,"#edrone--push--alert--box"],[15970048,"#frizbit-prompter"],[8941649,"#ggpush-main-area"],[8893986,"#grow-consent-modal"],[97767,"#hint-push-service"],[7414188,"#ilabspush-optin-container"],[4941719,"#jeapie-prompt-widget"],[10623744,"#js-gcm-notif"],[1377915,"#lwp-popover-container"],[13279232,"#modalCognitoPush"],[1549004,"#my_web_push_app_box_confirm"],[13085654,"#nlSubscriptionCookie"],[12149617,"#noti_msg"],[6643245,"#noti_subscribe_dialog"],[7501754,"#notification-permission"],[15210753,"#notification-push"],[4417717,"#notificationAllowPrompt"],[15211898,"#notificationPopUp"],[15211866,"#notificationPopup"],[780608,"#notify-optin-wrap"],[16679253,"#og-banner"],[6752486,"#oiNotification"],[3638864,"#onesignal-popover-container"],[9489011,"#pa-push-notification-subscription"],[14392432,"#popUpNotification"],[880673,"#push-alert-block"],[6607181,"#push-notification"],[7990283,"#push-notification-box"],[7163929,"#push-notification-pop-up"],[566116,"#push-overlay"],[6168653,"#push-prompt"],[10054780,"#push-subscription-button"],[10055223,"#push-subscription-prompt"],[155123,"#pushAdUpBanner"],[11399476,"#pushNotification"],[11650487,"#pushNotification-disclaimer"],[2880178,"#pushOffer"],[3090575,"#pushSec"],[14477304,"#pushSubscribeModal"],[6968480,"#pushSubscriptionModal"],[6037259,"#push_alert"],[14345422,"#push_notifications"],[5173735,"#push_subscribe"],[8815371,"#push_switcher"],[6057955,"#pushbanner"],[6602121,"#pushinstruments_popup"],[12119576,"#pushpushgo-container"],[16701437,"#pushwoosh-pop"],[11615949,"#qrzpush-prompt-widget"],[6775913,"#rd-webpush-modal"],[16672980,"#shopify-section-order-notifications"],[11800475,"#smart_push_smio_overlay"],[16127655,"#smart_push_smio_window"],[15982957,"#spm_msg_push_notification"],[5822016,"#subscribeToPush"],[6748956,"#subscribeToWebPush"],[15700662,"#visilabs_web_push_perm_box"],[10144373,"#web-alerts-modal"],[458108,"#web-push-prompt"],[12809405,"#webPushPopup"],[5443088,"#webpush-info-div"],[1055837,"#webpushSelctorFormId"],[4366179,"#webpush_modal"],[965150,"#webpush_overlay_back"],[5542612,"#webpush_soft_prompt"],[13078063,"#webpushr-prompt-wrapper"],[6785053,"#widget-pushNotification"],[2031326,".FCMpush-slidedown-container"],[5150208,".PushNotification--base"],[5743088,".PushNotification--top"],[132030,".PushNotification-popover-dialog"],[760205,".PushSubscription-block"],[10794233,".ampnotification"],[16757883,".apn-popover-container"],[2114849,".aswpn-fire-push-popup"],[4515232,".b-notification-push"],[71616,".b-push-notification"],[16387752,".bk-wonderpush"],[1704309,".block-sbase-bene-newsletter"],[11289654,".branded-app-shortcode-inarticle"],[8091978,".bs-push-noti"],[2848729,".bubble-push"],[11655681,".c-push-notification"],[4684837,".cleverpush-backdrop"],[5579511,".cleverpush-confirm"],[8092886,".cont_webpush"],[2187226,".contentwebpush"],[4072337,".desktop-notification-ask-dialog"],[10747696,".dmgpush-popover-container"],[4831918,".e-push-notification-popup"],[11764736,".et_push_notification"],[13646574,".firebase-slidedown-container"],[278614,".frizbit-prompt"],[7246668,".grv-dialog-host"],[1592097,".hs-push"],[7241085,".htpush-chrome-style-notification"],[12496651,".i-push-notification"],[11801653,".id-StoryElement-embed--cleverPush"],[3885745,".insider-opt-in-notification"],[11566300,".item-newsletter-form"],[11254013,".j-push-notifications-feature"],[5659658,".jeg_push_notification_content"],[2696508,".js-custom-push-notifications"],[13575575,".js-notifications-button"],[5222915,".js-push-allow"],[7276634,".kraken-popup"],[6795459,".lightbox-push"],[6731491,".m-notifications-banner"],[9700003,".m-webpush-layer"],[12356608,".message-push-notification"],[4626050,".modal-push"],[16604467,".naf-web-notifications-popup"],[6086083,".nav-link--notification-handler"],[4773548,".notBar"],[9779088,".notf-overlay"],[5251606,".notificacao.registerPush"],[4385390,".notification-prompt-wrapper"],[4114944,".notification-pwa"],[14644348,".notification-upsell-push"],[5585264,".notificationConfirmationOverlay"],[5084845,".notify-optin-wrap"],[2020645,".ns-notification-popup"],[9239152,".ntfc_overlay"],[3632841,".ntfc_popup"],[6245946,".oi-notify"],[12039510,".page__notifications"],[1200765,".perfecty-push-dialog-container"],[721842,".pnfpb-push-subscribe-icon"],[16604370,".push-area-btn"],[8327296,".push-bx"],[4699973,".push-modal-wrapper"],[15937128,".push-notice"],[8423494,".push-notification-box"],[5197387,".push-notification-opt-in"],[15241134,".push-notification-popover"],[5198004,".push-notification-prompt"],[15241324,".push-notifications-primer"],[15241322,".push-notifications-prompt"],[12515081,".push-overlay"],[5303634,".push-sdk-prompt-shell"],[4571003,".push-subscription-alert"],[8042641,".push-subscription-button"],[8043354,".push-subscription-prompt"],[11750324,".push-subscription-wrapper"],[11207179,".push-wrap:not(body):not(html)"],[12519627,".push-wrapper:not(body):not(html)"],[2530654,".pushNotWrap"],[12054937,".pushNotification"],[11197777,".push_back"],[10667424,".push_notification"],[5196851,".push_notifications_alert"],[9845162,".push_subscribe"],[11197780,".push_warn"],[4560986,".pushinstruments"],[15029781,".pushly_popover"],[9123478,".pushowl-optin"],[1167525,".pwa-modal-prompt"],[11652867,".rdmapps-push-dialog"],[11804124,".setrow-push-popup-container"],[15164871,".showtvPushOverlay"],[12672381,".simple-subscription-form"],[2245805,".sk-notification-dialog"],[2528770,".softPush_notification"],[3899906,".surveymonkey-popup"],[14292000,".tsoft-push--in-notification"],[6722074,".ud_webpush_sticky"],[10095375,".web-notification"],[10189605,".web-push"],[2930998,".web-push-box"],[2811868,".webpush_wrap"],[2923395,".window-push"],[15774948,".wordpress-fire-push-popup"],[4255664,".ys-push"],[988591,"#SmarterBannerContainer"],[6981890,"#appInstallNotification"],[6024567,"#appOpenNotification"],[5071515,"#appinstall_bnr"],[1630086,"#aside-app-banner"],[371773,"#bannerInstallApp"],[5453185,"#branch-banner-iframe"],[7308006,"#brzpushpermission"],[13156276,"#custom_smartbanner"],[16453241,"#daraz-smart-banner"],[11702953,"#download_app_banner_btn"],[13684529,"#floatingAppButton"],[1117253,"#head-app-download"],[12811418,"#inlineBannerForApp"],[12895201,"#iossmartbanner"],[58636,"#js-getAppHeader"],[8420334,"#mn-app-banner"],[14646020,"#smart-bnr-rbcapp"],[4036458,"#smartbanner-desktop"],[9678963,"#smartbanner.android,\n#smartbanner.ios"],[9632475,"#tapcart-web-banner"],[5117365,"#xm_app_stickyHeader"],[6145075,".app-ad-container-desktop"],[5360897,".app-banner-container"],[8590767,".app-banner-header"],[3906305,".app-down-banner-container"],[3331262,".appInstlBnr"],[5003236,".app_banner_link"],[330617,".appbnr-box"],[1567075,".appdown_popup"],[9521055,".banner-download-app-hidden"],[12531443,".branch-banner"],[15312357,".c-app-banner-header-wrap"],[12131910,".c-app-install"],[1508451,".c-install-banner"],[1304458,".c-notification-link-app"],[4881087,".cept-banner-link"],[10661557,".footer-app-download"],[14376778,".footer__download-app-container"],[9390953,".gh-app-banner"],[1044098,".gta-header-banner"],[12362538,".header-app-banner"],[3275565,".headerGetApp"],[2345617,".installAppPopup-top"],[5937964,".js-link-to-app"],[11130928,".js-openAppBox"],[4251586,".mobile-app-banner,\n.mopile-app-banner"],[11819349,".mobile-download-app-tout"],[10792272,".mobile-web-redirect-bar"],[5086817,".native-app-banner"],[7747078,".open-app-banner"],[16178865,".p-webtoapp-banner"],[14659801,".rsttop-webtoapp-banner-overlay"],[15555353,".smart-banner-collection"],[15453251,".smart-banner-download"],[4170943,".smartbanner--android"],[16666407,".smartbanner--ios"],[7178639,".smartbanner-android"],[4569351,".smartbanner-container"],[7184487,".smartbanner-desktop"],[15840224,".smartbanner-ios"],[13303150,".smartbnr-android"],[862376,".smartbnr-ios"],[13983950,".tmblr-iframe--app-cta-button"],[8312553,".z-bit-smartbanner"],[14392857,".subscription-widget-wrap > .show-subscribe"],[12201012,"#uutiskirje-nosto"]];
const genericExceptionSieve = [304692,13575575,12940839,11207179,12519627,10095375];
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
