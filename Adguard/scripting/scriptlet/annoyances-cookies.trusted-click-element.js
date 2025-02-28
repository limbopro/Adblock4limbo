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

/* eslint-disable indent */

// ruleset: annoyances-cookies

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedClickElement = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[aria-labelledby=\"manage_cookies_title\"] [aria-hidden=\"true\"]:has(> [aria-disabled=\"true\"][role=\"button\"]) + [aria-label][role=\"button\"][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki evästeet\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt zustimmen\"]","","1000"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","1000"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["button.js-decline-all-cookies","","1000"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button[field-reject-button-name]","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1000"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1000"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.reject-btn","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#popin_tc_privacy_button_2","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","1000"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["span.gtm-cookies-close","","1000"],["button[data-accept-cookie=\"true\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["div[data-test-id=\"CookieConsentsBanner.Root\"] button[data-test-id=\"decline-button\"]","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["button#cookie-donottrack","","1000"],["div.agree-mandatory","","1000"],["button[data-cookiefirst-action=\"adjust\"]","","600"],["button[data-cookiefirst-action=\"save\"]","","750"],["a[data-ga-action=\"disallow_all_cookies\"]","","1000"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1000"],["button[data-cookie_version=\"true3\"]","","1000"],["a#DeclineAll","","1000"],["div.new-cookies__btn","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#elc-decline-all-link","","1000"],["button[title=\"القبول والمتابعة\"]","","1800"],["mon-cb-main >>> mon-cb-home >>> mon-cb-button[e2e-tag=\"acceptAllCookiesButton\"]","","1000"],["button#gdpr_consent_accept_essential_btn","","1000"],["#cookiescript_reject","","500"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"],["#cookietoggle, input[id=\"CookieFunctional\"], [value=\"Hyväksy vain valitut\"]"]];

const hostnamesMap = new Map([["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["bloomberg.com",7],["forbes.com",[7,69]],["nike.com",7],["consent.fastcar.co.uk",7],["cmpv2.standard.co.uk",[8,9]],["cmpv2.independent.co.uk",[10,11,12]],["wetransfer.com",[13,14]],["spiegel.de",[15,16]],["nytimes.com",[17,160]],["consent.yahoo.com",18],["tumblr.com",19],["fplstatistics.co.uk",20],["e-shop.leonidas.com",21],["cdn.privacy-mgmt.com",[22,23,41,42,43,44,83,88,89,96,103,110,121,122,123,126,128,129,153,176,187,195,196,199,200,201,262,364,482]],["festoolcanada.com",24],["tracker.fressnapf.de",24],["dr-beckmann.com",24],["consent.ladbible.com",[25,26]],["consent.unilad.com",[25,26]],["consent.uniladtech.com",[25,26]],["consent.gamingbible.com",[25,26]],["consent.sportbible.com",[25,26]],["consent.tyla.com",[25,26]],["consent.ladbiblegroup.com",[25,26]],["m2o.it",27],["deejay.it",27],["capital.it",27],["ilmattino.it",[27,28]],["leggo.it",[27,28]],["libero.it",27],["tiscali.it",27],["consent-manager.ft.com",[29,30,31]],["mediaworld.it",33],["mediamarktsaturn.com",34],["tf1info.fr",35],["uber.com",[36,161]],["ubereats.com",36],["lego.com",37],["ai.meta.com",38],["lilly.com",39],["cosmo-hairshop.de",40],["storyhouseegmont.no",40],["telekom.com",45],["telekom.net",45],["telekom.de",45],["ansons.de",46],["blick.ch",46],["buienradar.be",46],["digi24.ro",46],["digisport.ro",46],["digitalfoundry.net",46],["egx.net",46],["eurogamer.it",46],["mail.com",46],["mcmcomiccon.com",46],["nachrichten.at",46],["nintendolife.com",46],["oe24.at",46],["paxsite.com",46],["peacocktv.com",46],["player.pl",46],["pricerunner.com",46],["pricerunner.se",46],["pricerunner.dk",46],["proximus.be",46],["proximus.com",46],["purexbox.com",46],["pushsquare.com",46],["rugbypass.com",46],["southparkstudios.com",46],["starwarscelebration.com",46],["sweatybetty.com",46],["thehaul.com",46],["timeextension.com",46],["travelandleisure.com",46],["tunein.com",46],["videoland.com",46],["wizzair.com",46],["wetter.at",46],["dicebreaker.com",[47,48]],["eurogamer.cz",[47,48]],["eurogamer.es",[47,48]],["eurogamer.net",[47,48]],["eurogamer.nl",[47,48]],["eurogamer.pl",[47,48]],["eurogamer.pt",[47,48]],["gamesindustry.biz",[47,48]],["jelly.deals",[47,48]],["reedpop.com",[47,48]],["rockpapershotgun.com",[47,48]],["thepopverse.com",[47,48]],["vg247.com",[47,48]],["videogameschronicle.com",[47,48]],["eurogamer.de",49],["roadtovr.com",50],["mundodeportivo.com",[51,117]],["m.youtube.com",52],["www.youtube.com",52],["ohra.nl",53],["corriere.it",54],["gazzetta.it",54],["oggi.it",54],["cmp.sky.it",55],["tennisassa.fi",56],["formula1.com",57],["f1racing.pl",58],["consent-pref.trustarc.com",61],["highlights.legaseriea.it",62],["calciomercato.com",62],["sosfanta.com",63],["wetter.com",66],["youmath.it",67],["pip.gov.pl",68],["bnn.de",70],["dosenbach.ch",70],["dw.com",70],["winfuture.de",70],["lippu.fi",70],["racingnews365.com",70],["bauhaus.no",71],["beko-group.de",71],["billiger.de",71],["vanharen.nl",71],["deichmann.com",[71,92,383]],["meraluna.de",71],["slashdot.org",71],["spar.hu",72],["group.vattenfall.com",72],["mediaset.it",73],["fortune.com",74],["ilrestodelcarlino.it",75],["quotidiano.net",75],["lanazione.it",75],["ilgiorno.it",75],["iltelegrafolivorno.it",75],["auto.it",76],["boursobank.com",76],["canalplus.com",76],["eden-park.com",76],["frandroid.com",76],["o2.fr",76],["meteofrance.com",76],["mondialtissus.fr",76],["oscaro.com",76],["publicsenat.fr",76],["rmcbfmplay.com",76],["seloger.com",76],["suzuki.fr",76],["nutri-plus.de",77],["aa.com",78],["consent.capital.fr",79],["consent.voici.fr",79],["programme-tv.net",79],["cmp.e24.no",[80,81]],["cmp.vg.no",[80,81]],["huffingtonpost.fr",82],["rainews.it",84],["remarkable.com",85],["netzwelt.de",86],["money.it",87],["cmp-sp.tagesspiegel.de",89],["cmp.bz-berlin.de",89],["cmp.cicero.de",89],["cmp.techbook.de",89],["cmp.stylebook.de",89],["cmp2.bild.de",89],["sourcepoint.wetter.de",89],["consent.finanzen.at",89],["consent.up.welt.de",89],["sourcepoint.n-tv.de",89],["sourcepoint.kochbar.de",89],["sourcepoint.rtl.de",89],["cmp.computerbild.de",89],["cmp.petbook.de",89],["cmp-sp.siegener-zeitung.de",89],["cmp-sp.sportbuzzer.de",89],["klarmobil.de",89],["technikum-wien.at",90],["eneco.nl",91],["blackpoolgazette.co.uk",93],["lep.co.uk",93],["northamptonchron.co.uk",93],["scotsman.com",93],["shieldsgazette.com",93],["thestar.co.uk",93],["portsmouth.co.uk",93],["sunderlandecho.com",93],["northernirelandworld.com",93],["3addedminutes.com",93],["anguscountyworld.co.uk",93],["banburyguardian.co.uk",93],["bedfordtoday.co.uk",93],["biggleswadetoday.co.uk",93],["bucksherald.co.uk",93],["burnleyexpress.net",93],["buxtonadvertiser.co.uk",93],["chad.co.uk",93],["daventryexpress.co.uk",93],["derbyshiretimes.co.uk",93],["derbyworld.co.uk",93],["derryjournal.com",93],["dewsburyreporter.co.uk",93],["doncasterfreepress.co.uk",93],["falkirkherald.co.uk",93],["fifetoday.co.uk",93],["glasgowworld.com",93],["halifaxcourier.co.uk",93],["harboroughmail.co.uk",93],["harrogateadvertiser.co.uk",93],["hartlepoolmail.co.uk",93],["hemeltoday.co.uk",93],["hucknalldispatch.co.uk",93],["lancasterguardian.co.uk",93],["leightonbuzzardonline.co.uk",93],["lincolnshireworld.com",93],["liverpoolworld.uk",93],["londonworld.com",93],["lutontoday.co.uk",93],["manchesterworld.uk",93],["meltontimes.co.uk",93],["miltonkeynes.co.uk",93],["newcastleworld.com",93],["newryreporter.com",93],["newsletter.co.uk",93],["northantstelegraph.co.uk",93],["northumberlandgazette.co.uk",93],["nottinghamworld.com",93],["peterboroughtoday.co.uk",93],["rotherhamadvertiser.co.uk",93],["stornowaygazette.co.uk",93],["surreyworld.co.uk",93],["thescarboroughnews.co.uk",93],["thesouthernreporter.co.uk",93],["totallysnookered.com",93],["wakefieldexpress.co.uk",93],["walesworld.com",93],["warwickshireworld.com",93],["wigantoday.net",93],["worksopguardian.co.uk",93],["yorkshireeveningpost.co.uk",93],["yorkshirepost.co.uk",93],["eurocard.com",94],["saseurobonusmastercard.se",95],["tver.jp",97],["linkedin.com",98],["elmundo.es",99],["srf.ch",100],["alternate.de",100],["bayer04.de",100],["douglas.de",100],["falke.com",100],["flaschenpost.de",100],["hornbach.nl",100],["postbank.de",100],["immowelt.de",101],["morenutrition.de",101],["mapillary.com",102],["cmp.seznam.cz",104],["marca.com",105],["raiplay.it",106],["derstandard.at",107],["derstandard.de",107],["faz.net",107],["ansa.it",108],["delladio.it",108],["huffingtonpost.it",108],["lastampa.it",108],["movieplayer.it",108],["multiplayer.it",108],["repubblica.it",108],["tomshw.it",108],["tuttoandroid.net",108],["tuttotech.net",108],["ilgazzettino.it",109],["ilmessaggero.it",109],["ilsecoloxix.it",109],["privacy.motorradonline.de",110],["consent.watson.de",110],["consent.kino.de",110],["dailystar.co.uk",[111,112,113,114]],["mirror.co.uk",[111,112,113,114]],["jeuxvideo.com",115],["idnes.cz",116],["20minutes.fr",117],["20minutos.es",117],["24sata.hr",117],["abc.es",117],["actu.fr",117],["antena3.com",117],["antena3internacional.com",117],["atresmedia.com",117],["atresmediapublicidad.com",117],["atresmediastudios.com",117],["atresplayer.com",117],["autopista.es",117],["belfasttelegraph.co.uk",117],["bt.se",117],["bonduelle.it",117],["bonniernews.se",117],["ciclismoafondo.es",117],["cnews.fr",117],["cope.es",117],["correryfitness.com",117],["decathlon.nl",117],["decathlon.pl",117],["di.se",117],["diariocordoba.com",117],["diepresse.com",117],["dn.se",117],["dnevnik.hr",117],["dumpert.nl",117],["ebuyclub.com",117],["edreams.de",117],["edreams.net",117],["elcomercio.es",117],["elconfidencial.com",117],["eldesmarque.com",117],["elespanol.com",117],["elpais.com",117],["elpais.es",117],["engadget.com",117],["euronews.com",117],["europafm.com",117],["expressen.se",117],["filmstarts.de",117],["flooxernow.com",117],["france.tv",117],["france24.com",117],["fussballtransfers.com",117],["ghacks.net",117],["gva.be",117],["hbvl.be",117],["k.at",117],["krone.at",117],["kurier.at",117],["ladepeche.fr",117],["lalibre.be",117],["lasexta.com",117],["lasprovincias.es",117],["ledauphine.com",117],["lejdd.fr",117],["leparisien.fr",117],["lexpress.fr",117],["libremercado.com",117],["lotoquebec.com",117],["okdiario.com",117],["marmiton.org",117],["melodia-fm.com",117],["moviepilot.de",117],["m6.fr",117],["metronieuws.nl",117],["naszemiasto.pl",117],["nicematin.com",117],["nieuwsblad.be",117],["numerama.com",117],["ondacero.es",117],["profil.at",117],["radiofrance.fr",117],["rankia.com",117],["rfi.fr",117],["rossmann.pl",117],["rtbf.be",117],["rtl.lu",117],["science-et-vie.com",117],["sensacine.com",117],["sfgame.net",117],["shure.com",117],["silicon.es",117],["sncf-connect.com",117],["sport.es",117],["techcrunch.com",117],["telegraaf.nl",117],["telequebec.tv",117],["trailrun.es",117],["video-streaming.orange.fr",117],["ryobitools.eu",[118,119]],["americanexpress.com",120],["consent.radiotimes.com",123],["sp-consent.szbz.de",124],["cmp.omni.se",125],["cmp.svd.se",125],["cmp.aftonbladet.se",125],["consent.economist.com",127],["cmpv2.foundryco.com",128],["cmpv2.infoworld.com",128],["cmpv2.arnnet.com.au",128],["sp-cdn.pcgames.de",129],["sp-cdn.pcgameshardware.de",129],["consentv2.sport1.de",129],["cmpv2.tori.fi",130],["cdn.privacy-mgmt.co",131],["consent.spielaffe.de",132],["vikingline.com",133],["tfl.gov.uk",133],["drklein.de",133],["1und1.de",134],["infranken.de",135],["cmp.bunte.de",136],["cmp.chip.de",136],["cmp.focus.de",[136,411]],["estadiodeportivo.com",137],["tempo.pt",137],["pogoda.com",137],["yourweather.co.uk",137],["tempo.com",137],["tiempo.com",137],["ilmeteo.net",137],["daswetter.com",137],["kicker.de",138],["formulatv.com",139],["web.de",140],["lefigaro.fr",141],["linternaute.com",142],["consent.caminteresse.fr",143],["volksfreund.de",144],["dailypost.co.uk",145],["the-express.com",145],["tarife.mediamarkt.de",146],["gaggenau.com",146],["saturn.de",147],["eltiempo.es",[148,149]],["otempo.pt",150],["cmp-sp.goettinger-tageblatt.de",152],["cmp-sp.saechsische.de",152],["cz.de",152],["dewezet.de",152],["dnn.de",152],["haz.de",152],["gnz.de",152],["landeszeitung.de",152],["lvz.de",152],["maz-online.de",152],["ndz.de",152],["op-marburg.de",152],["ostsee-zeitung.de",152],["paz-online.de",152],["reisereporter.de",152],["rga.de",152],["rnd.de",152],["siegener-zeitung.de",152],["sn-online.de",152],["solinger-tageblatt.de",152],["sportbuzzer.de",152],["szlz.de",152],["tah.de",152],["torgauerzeitung.de",152],["waz-online.de",152],["privacy.maennersache.de",152],["sinergy.ch",154],["agglo-valais-central.ch",154],["biomedcentral.com",155],["hsbcnet.com",156],["hsbcinnovationbanking.com",156],["create.hsbc",156],["gbm.hsbc.com",156],["hsbc.co.uk",157],["internationalservices.hsbc.com",157],["history.hsbc.com",157],["about.hsbc.co.uk",158],["privatebanking.hsbc.com",159],["independent.co.uk",162],["privacy.crash.net",162],["the-independent.com",163],["argos.co.uk",164],["poco.de",[165,166]],["moebel24.ch",166],["meubles.fr",166],["meubelo.nl",166],["moebel.de",166],["lipo.ch",167],["schubiger.ch",168],["aedt.de",169],["berlin-live.de",169],["gutefrage.net",169],["insideparadeplatz.ch",169],["morgenpost.de",169],["play3.de",169],["thueringen24.de",169],["pdfupload.io",170],["gamestar.de",[171,195]],["verksamt.se",172],["beko.com",173],["bepanthen.com.au",173],["berocca.com.au",173],["booking.com",173],["centrum.sk",173],["claratyne.com.au",173],["de.vanguard",173],["dhl.de",173],["fello.se",173],["khanacademy.org",173],["konami.com",173],["groceries.asda.com",173],["n26.com",173],["nintendo.com",173],["panasonic.com",173],["pluto.tv",173],["swisscom.ch",173],["swisspass.ch",173],["telenet.be",173],["toujeo.com",173],["questdiagnostics.com",173],["wallapop.com",173],["yoigo.com",173],["noovle.com",174],["telsy.com",174],["timenterprise.it",174],["tim.it",174],["here.com",175],["cmp.heise.de",177],["cmp.am-online.com",177],["consent.newsnow.co.uk",177],["zara.com",178],["lepermislibre.fr",178],["negociardivida.spcbrasil.org.br",179],["privacy.topreality.sk",181],["privacy.autobazar.eu",181],["s-pankki.fi",182],["vu.lt",183],["adnkronos.com",[184,185]],["cornwalllive.com",[184,185]],["cyprus-mail.com",[184,185]],["informazione.it",[184,185]],["mymovies.it",[184,185]],["tuttoeuropei.com",[184,185]],["video.lacnews24.it",[184,185]],["taxscouts.com",186],["online.no",188],["telenor.no",188],["austrian.com",189],["hornetsecurity.com",190],["kayzen.io",190],["wasserkunst-hamburg.de",190],["bnc.ca",191],["festo.com",191],["standaard.be",191],["engelvoelkers.com",191],["knipex.de",191],["ing.es",191],["taxfix.de",191],["tf1.fr",191],["bruendl.at",192],["latamairlines.com",193],["elisa.ee",194],["baseendpoint.brigitte.de",195],["baseendpoint.gala.de",195],["baseendpoint.haeuser.de",195],["baseendpoint.stern.de",195],["baseendpoint.urbia.de",195],["cmp.tag24.de",195],["cmpv2.berliner-zeitung.de",195],["golem.de",195],["consent.t-online.de",195],["cmp-sp.handelsblatt.com",195],["sp-consent.stuttgarter-nachrichten.de",196],["regjeringen.no",197],["sp-manager-magazin-de.manager-magazin.de",198],["consent.11freunde.de",198],["centrum24.pl",202],["replay.lsm.lv",203],["stadt-wien.at",204],["verl.de",204],["mobile.de",205],["cookist.it",206],["fanpage.it",206],["geopop.it",206],["lexplain.it",206],["royalmail.com",207],["gmx.net",208],["gmx.ch",209],["mojehobby.pl",210],["sp.stylevamp.de",211],["easyjet.com",212],["experian.co.uk",212],["postoffice.co.uk",212],["tescobank.com",212],["internetaptieka.lv",[213,214]],["wells.pt",215],["thomann.de",216],["landkreis-kronach.de",217],["northcoast.com",218],["chaingpt.org",218],["bandenconcurrent.nl",219],["bandenexpert.be",219],["reserved.com",220],["metro-tr.com",221],["balay.es",222],["constructa.com",222],["dafy-moto.com",223],["akku-shop.nl",224],["akkushop-austria.at",224],["akkushop-b2b.de",224],["akkushop.de",224],["akkushop.dk",224],["batterie-boutique.fr",224],["akkushop-schweiz.ch",225],["evzuttya.com.ua",226],["eobuv.cz",226],["eobuwie.com.pl",226],["ecipele.hr",226],["eavalyne.lt",226],["efootwear.eu",226],["eschuhe.ch",226],["eskor.se",226],["chaussures.fr",226],["ecipo.hu",226],["eobuv.com.ua",226],["eobuv.sk",226],["epantofi.ro",226],["epapoutsia.gr",226],["escarpe.it",226],["eschuhe.de",226],["obuvki.bg",226],["zapatos.es",226],["swedbank.ee",227],["mudanzavila.es",228],["bienmanger.com",229],["gesipausa.com",230],["beckhoff.com",230],["zitekick.dk",231],["eltechno.dk",231],["okazik.pl",231],["maxi.rs",233],["one4all.ie",234],["wideroe.no",235],["kijk.nl",237],["nordania.dk",238],["danskeci.com",238],["danicapension.dk",238],["gewerbegebiete.de",240],["cordia.fr",241],["vola.fr",242],["lafi.fr",243],["atida.fr",246],["bbvauk.com",247],["expertise.unimi.it",248],["altenberg.de",249],["vestel.es",250],["tsb.co.uk",251],["buienradar.nl",[252,253]],["linsenplatz.de",254],["budni.de",255],["erstecardclub.hr",255],["teufel.de",[256,257]],["abp.nl",258],["simplea.sk",259],["flip.bg",260],["kiertokanki.com",261],["leirovins.be",263],["vias.be",264],["virbac.com",265],["diners.hr",265],["squarehabitat.fr",265],["arbitrobancariofinanziario.it",266],["smit-sport.de",267],["go-e.com",268],["malerblatt-medienservice.de",269],["architekturbuch.de",269],["medienservice-holz.de",269],["leuchtstark.de",269],["casius.nl",270],["vakgaragevannunen.nl",271],["fortuluz.es",271],["finna.fi",271],["eurogrow.es",271],["vakgaragevandertholen.nl",271],["envafors.dk",272],["dabbolig.dk",[273,274]],["daruk-emelok.hu",275],["exakta.se",276],["larca.de",277],["roli.com",278],["okazii.ro",279],["tgvinoui.sncf",280],["sklepy-odido.pl",281],["rastreator.com",281],["l-bank.de",282],["interhyp.de",283],["transparency.meta.com",285],["safran-group.com",286],["sr-ramenendeuren.be",286],["strato-hosting.co.uk",287],["auto.de",288],["contentkingapp.com",289],["otterbox.com",290],["stoertebeker-brauquartier.com",291],["stoertebeker.com",291],["stoertebeker-eph.com",291],["aparts.pl",292],["sinsay.com",[293,294]],["benu.cz",295],["stockholmresilience.org",296],["ludvika.se",296],["kammarkollegiet.se",296],["cazenovecapital.com",297],["statestreet.com",298],["beopen.lv",299],["cesukoncertzale.lv",300],["dodo.fr",301],["pepper.it",302],["pepper.pl",302],["preisjaeger.at",302],["mydealz.de",302],["dealabs.com",302],["hotukdeals.com",302],["chollometro.com",302],["makelaarsland.nl",303],["bricklink.com",304],["bestinver.es",305],["icvs2023.conf.tuwien.ac.at",306],["racshop.co.uk",[307,308]],["baabuk.com",309],["app.lepermislibre.fr",310],["multioferta.es",311],["testwise.com",[312,313]],["tonyschocolonely.com",314],["fitplus.is",314],["fransdegrebber.nl",314],["lilliputpress.ie",314],["lexibo.com",314],["marin-milou.com",314],["dare2tri.com",314],["la-vie-naturelle.com",[315,316]],["inovelli.com",317],["uonetplus.vulcan.net.pl",[318,319]],["consent.helagotland.se",320],["oper.koeln",[321,322]],["deezer.com",323],["hoteldesartssaigon.com",324],["groupeonepoint.com",325],["clickskeks.at",326],["abt-sportsline.de",326],["nerdstar.de",327],["pamiatki.pl",328],["initse.com",329],["salvagny.org",330],["taxinstitute.ie",331],["get-in-it.de",332],["tempcover.com",[333,334]],["guildford.gov.uk",335],["easyparts-recambios.es",[336,337]],["easyparts-rollerteile.de",[336,337]],["drimsim.com",338],["canyon.com",339],["vevovo.be",[340,341]],["vendezvotrevoiture.be",[340,341]],["wirkaufendeinauto.at",[340,341]],["vikoberallebiler.dk",[340,341]],["wijkopenautos.nl",[340,341]],["vikoperdinbil.se",[340,341]],["noicompriamoauto.it",[340,341]],["vendezvotrevoiture.fr",[340,341]],["compramostucoche.es",[340,341]],["wijkopenautos.be",[340,341]],["topautoosat.fi",342],["autoteiledirekt.de",342],["autoczescionline24.pl",342],["tuttoautoricambi.it",342],["onlinecarparts.co.uk",342],["autoalkatreszek24.hu",342],["autodielyonline24.sk",342],["reservdelar24.se",342],["pecasauto24.pt",342],["reservedeler24.co.no",342],["piecesauto24.lu",342],["rezervesdalas24.lv",342],["besteonderdelen.nl",342],["recambioscoche.es",342],["antallaktikaexartimata.gr",342],["piecesauto.fr",342],["teile-direkt.ch",342],["lpi.org",343],["flyingtiger.com",345],["borgomontecedrone.it",345],["gera.de",346],["mfr-chessy.fr",347],["mfr-lamure.fr",347],["mfr-saint-romain.fr",347],["mfr-lapalma.fr",347],["mfrvilliemorgon.asso.fr",347],["mfr-charentay.fr",347],["mfr.fr",347],["nationaltrust.org.uk",348],["ib-hansmeier.de",350],["rsag.de",351],["esaa-eu.org",351],["theprotocol.it",[353,354]],["lightandland.co.uk",355],["etransport.pl",356],["wohnen-im-alter.de",357],["johnmuirhealth.com",[358,359]],["markushaenni.com",360],["airbaltic.com",361],["gamersgate.com",361],["zorgzaam010.nl",362],["paruvendu.fr",363],["cmpv2.bistro.sk",365],["privacy.bazar.sk",365],["hennamorena.com",366],["newsello.pl",367],["porp.pl",368],["golfbreaks.com",369],["lieferando.de",370],["pyszne.pl",370],["lieferando.at",370],["takeaway.com",370],["thuisbezorgd.nl",370],["holidayhypermarket.co.uk",371],["atu.de",372],["atu-flottenloesungen.de",372],["but.fr",372],["fortuneo.fr",372],["maif.fr",372],["sparkasse.at",372],["bstrongoutlet.pt",373],["nobbot.com",374],["finlayson.fi",[375,376]],["cowaymega.ca",[375,376]],["arktis.de",377],["desktronic.de",377],["dockin.de",377],["dryrobe.com",377],["hairtalk.se",377],["hallmark.co.uk",377],["loopearplugs.com",377],["peopleofshibuya.com",377],["sanctum.shop",377],["tartanblanketco.com",377],["beam.co.uk",[378,379]],["malaikaraiss.com",380],["wefashion.com",381],["merkur.dk",382],["omegawatches.com",385],["carefully.be",386],["aerotime.aero",386],["rocket-league.com",387],["dws.com",388],["bosch-homecomfort.com",389],["elmleblanc-optibox.fr",389],["monservicechauffage.fr",389],["boschrexroth.com",389],["home-connect.com",390],["lowrider.at",[391,392]],["mesto.de",393],["veiligverkeer.be",394],["vsv.be",394],["dehogerielen.be",394],["intersport.gr",395],["intersport.bg",395],["intersport.com.cy",395],["intersport.ro",395],["ticsante.com",396],["techopital.com",396],["millenniumprize.org",397],["hepster.com",398],["ellisphere.fr",399],["peterstaler.de",400],["blackforest-still.de",400],["tiendaplayaundi.com",401],["ajtix.co.uk",402],["raja.fr",403],["rajarani.de",403],["avery-zweckform.com",405],["1xinternet.de",405],["futterhaus.de",405],["dasfutterhaus.at",405],["frischeparadies.de",405],["fmk-steuer.de",405],["mediapart.fr",406],["athlon.com",407],["alumniportal-deutschland.org",408],["snoopmedia.com",408],["myguide.de",408],["study-in-germany.de",408],["daad.de",408],["cornelsen.de",[409,410]],["vinmonopolet.no",412],["tvp.info",413],["tvp.pl",413],["tvpworld.com",413],["brtvp.pl",413],["tvpparlament.pl",413],["belsat.eu",413],["warnung.bund.de",414],["mediathek.lfv-bayern.de",415],["allegrolokalnie.pl",416],["eon.pl",[417,418]],["ylasatakunta.fi",[419,420]],["mega-image.ro",421],["louisvuitton.com",422],["bodensee-airport.eu",423],["department56.com",424],["allendesignsstudio.com",424],["designsbylolita.co",424],["shop.enesco.com",424],["savoriurbane.com",425],["miumiu.com",426],["church-footwear.com",426],["clickdoc.fr",427],["car-interface.com",428],["monolithdesign.it",428],["smileypack.de",[429,430]],["malijunaki.si",431],["finom.co",432],["orange.es",[433,434]],["skousen.no",435],["energinet.dk",435],["medimax.de",436],["lotto.it",437],["readspeaker.com",437],["ibistallinncenter.ee",438],["aaron.ai",439],["thebathcollection.com",440],["coastfashion.com",[441,442]],["oasisfashion.com",[441,442]],["warehousefashion.com",[441,442]],["misspap.com",[441,442]],["karenmillen.com",[441,442]],["boohooman.com",[441,442]],["hdt.de",443],["wolt.com",444],["myprivacy.dpgmedia.nl",445],["myprivacy.dpgmedia.be",445],["www.dpgmediagroup.com",445],["tnt.com",446],["uza.be",447],["uzafoundation.be",447],["uzajobs.be",447],["cinemas-lumiere.com",450],["cdiscount.com",451],["brabus.com",452],["roborock.com",453],["strumentimusicali.net",454],["maisonmargiela.com",455],["webfleet.com",456],["dragonflyshipping.ca",457],["broekhuis.nl",458],["nemck.cz",459],["bokio.se",460],["sap-press.com",461],["roughguides.com",[462,463]],["topannonces.fr",465],["homap.fr",466],["artifica.fr",467],["plan-interactif.com",467],["ville-cesson.fr",467],["moismoliere.com",468],["unihomes.co.uk",469],["bkk.hu",470],["coiffhair.com",471],["ptc.eu",472],["ziegert-group.com",473],["toureiffel.paris",474],["livoo.fr",474],["smdv.de",475],["digitalo.de",475],["mojanorwegia.pl",477],["koempf24.ch",[478,479]],["teichitekten24.de",[478,479]],["koempf24.de",[478,479]],["wolff-finnhaus-shop.de",[478,479]],["asnbank.nl",480],["snsbank.nl",480],["devolksbank.nl",481],["vejdirektoratet.dk",483],["usaa.com",484],["swiss-sport.tv",485],["cadenaser.com",486],["offistore.fi",487]]);

const entitiesMap = new Map([["consent.google",0],["festool",24],["fuso-trucks",24],["hertz",32],["mediamarkt",33],["gmx",46],["plus500",46],["music.amazon",[59,60]],["chrono24",[64,65]],["kinepolis",70],["vaillant",70],["jobijoba",76],["intersport",[76,173]],["americanairlines",78],["joyn",101],["degiro",133],["tameteo",137],["meteored",137],["atlasformen",151],["hsbc",156],["moebelix",165],["moemax",165],["xxxlutz",165],["xxxlesnina",165],["jll",173],["samsonite",173],["adidas",180],["super-hobby",210],["metro",221],["makro",221],["gesipa",230],["batteryempire",232],["invisalign",234],["bmw",236],["danskebank",238],["dehn",239],["skyscanner",244],["coolblue",245],["sanareva",246],["bbva",247],["indigoneo",284],["strato",287],["t3micro",314],["easyparts",[336,337]],["auto-doc",342],["autodoc",342],["autodoc24",342],["refurbed",344],["hej-natural",349],["answear",352],["just-eat",370],["justeat",370],["ionos",384],["rajapack",[403,404]],["allegro",416],["bergzeit",[448,449]],["rexbo",464],["petiteamelie",476]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '',
    delay = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-click-element', selectors, extraMatch, delay);

    if ( extraMatch !== '' ) {
        const assertions = safe.String_split.call(extraMatch, ',').map(s => {
            const pos1 = s.indexOf(':');
            const s1 = pos1 !== -1 ? s.slice(0, pos1) : s;
            const not = s1.startsWith('!');
            const type = not ? s1.slice(1) : s1;
            const s2 = pos1 !== -1 ? s.slice(pos1+1).trim() : '';
            if ( s2 === '' ) { return; }
            const out = { not, type };
            const match = /^\/(.+)\/(i?)$/.exec(s2);
            if ( match !== null ) {
                out.re = new RegExp(match[1], match[2] || undefined);
                return out;
            }
            const pos2 = s2.indexOf('=');
            const key = pos2 !== -1 ? s2.slice(0, pos2).trim() : s2;
            const value = pos2 !== -1 ? s2.slice(pos2+1).trim() : '';
            out.re = new RegExp(`^${this.escapeRegexChars(key)}=${this.escapeRegexChars(value)}`);
            return out;
        }).filter(details => details !== undefined);
        const allCookies = assertions.some(o => o.type === 'cookie')
            ? getAllCookiesFn()
            : [];
        const allStorageItems = assertions.some(o => o.type === 'localStorage')
            ? getAllLocalStorageFn()
            : [];
        const hasNeedle = (haystack, needle) => {
            for ( const { key, value } of haystack ) {
                if ( needle.test(`${key}=${value}`) ) { return true; }
            }
            return false;
        };
        for ( const { not, type, re } of assertions ) {
            switch ( type ) {
            case 'cookie':
                if ( hasNeedle(allCookies, re) === not ) { return; }
                break;
            case 'localStorage':
                if ( hasNeedle(allStorageItems, re) === not ) { return; }
                break;
            }
        }
    }

    const getShadowRoot = elem => {
        // Firefox
        if ( elem.openOrClosedShadowRoot ) {
            return elem.openOrClosedShadowRoot;
        }
        // Chromium
        if ( typeof chrome === 'object' ) {
            if ( chrome.dom && chrome.dom.openOrClosedShadowRoot ) {
                return chrome.dom.openOrClosedShadowRoot(elem);
            }
        }
        return null;
    };

    const querySelectorEx = (selector, context = document) => {
        const pos = selector.indexOf(' >>> ');
        if ( pos === -1 ) { return context.querySelector(selector); }
        const outside = selector.slice(0, pos).trim();
        const inside = selector.slice(pos + 5).trim();
        const elem = context.querySelector(outside);
        if ( elem === null ) { return null; }
        const shadowRoot = getShadowRoot(elem);
        return shadowRoot && querySelectorEx(inside, shadowRoot);
    };

    const selectorList = safe.String_split.call(selectors, /\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch {
                return false;
            }
            return true;
        });
    if ( selectorList.length === 0 ) { return; }

    const clickDelay = parseInt(delay, 10) || 1;
    const t0 = Date.now();
    const tbye = t0 + 10000;
    let tnext = selectorList.length !== 1 ? t0 : t0 + clickDelay;

    const terminate = ( ) => {
        selectorList.length = 0;
        next.stop();
        observe.stop();
    };

    const next = notFound => {
        if ( selectorList.length === 0 ) {
            safe.uboLog(logPrefix, 'Completed');
            return terminate();
        }
        const tnow = Date.now();
        if ( tnow >= tbye ) {
            safe.uboLog(logPrefix, 'Timed out');
            return terminate();
        }
        if ( notFound ) { observe(); }
        const delay = Math.max(notFound ? tbye - tnow : tnext - tnow, 1);
        next.timer = setTimeout(( ) => {
            next.timer = undefined;
            process();
        }, delay);
        safe.uboLog(logPrefix, `Waiting for ${selectorList[0]}...`);
    };
    next.stop = ( ) => {
        if ( next.timer === undefined ) { return; }
        clearTimeout(next.timer);
        next.timer = undefined;
    };

    const observe = ( ) => {
        if ( observe.observer !== undefined ) { return; }
        observe.observer = new MutationObserver(( ) => {
            if ( observe.timer !== undefined ) { return; }
            observe.timer = setTimeout(( ) => {
                observe.timer = undefined;
                process();
            }, 20);
        });
        observe.observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    };
    observe.stop = ( ) => {
        if ( observe.timer !== undefined ) {
            clearTimeout(observe.timer);
            observe.timer = undefined;
        }
        if ( observe.observer ) {
            observe.observer.disconnect();
            observe.observer = undefined;
        }
    };

    const process = ( ) => {
        next.stop();
        if ( Date.now() < tnext ) { return next(); }
        const selector = selectorList.shift();
        if ( selector === undefined ) { return terminate(); }
        const elem = querySelectorEx(selector);
        if ( elem === null ) {
            selectorList.unshift(selector);
            return next(true);
        }
        safe.uboLog(logPrefix, `Clicked ${selector}`);
        elem.click();
        tnext += clickDelay;
        next();
    };

    runAtHtmlElementFn(process);
}

function getAllCookiesFn() {
    const safe = safeSelf();
    return safe.String_split.call(document.cookie, /\s*;\s*/).map(s => {
        const pos = s.indexOf('=');
        if ( pos === 0 ) { return; }
        if ( pos === -1 ) { return `${s.trim()}=`; }
        const key = s.slice(0, pos).trim();
        const value = s.slice(pos+1).trim();
        return { key, value };
    }).filter(s => s !== undefined);
}

function getAllLocalStorageFn(which = 'localStorage') {
    const storage = self[which];
    const out = [];
    for ( let i = 0; i < storage.length; i++ ) {
        const key = storage.key(i);
        const value = storage.getItem(key);
        return { key, value };
    }
    return out;
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true, expect: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            if ( bcBuffer === undefined ) {
                return bc.postMessage({ what: 'messageToLogger', type, text });
            }
            bcBuffer.push({ type, text });
        };
        bc.onmessage = ev => {
            const msg = ev.data;
            switch ( msg ) {
            case 'iamready!':
                if ( bcBuffer === undefined ) { break; }
                bcBuffer.forEach(({ type, text }) =>
                    bc.postMessage({ what: 'messageToLogger', type, text })
                );
                bcBuffer = undefined;
                break;
            case 'setScriptletLogLevelToOne':
                safe.logLevel = 1;
                break;
            case 'setScriptletLogLevelToTwo':
                safe.logLevel = 2;
                break;
            }
        };
        bc.postMessage('areyouready?');
    } catch {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
} catch {
}
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { trustedClickElement(...argsList[i]); }
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_trustedClickElement();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
