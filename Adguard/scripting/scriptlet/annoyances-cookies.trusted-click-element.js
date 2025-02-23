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

const argsList = [["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[aria-labelledby=\"manage_cookies_title\"] [aria-hidden=\"true\"]:has(> [aria-disabled=\"true\"][role=\"button\"]) + [aria-label][role=\"button\"][tabindex=\"0\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["button[title=\"Accept Cookies\"]","","1000"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button.denyAll","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],["button.cassie-reject-all","","1000"],["#CybotCookiebotDialogBodyLevelButtonLevelOptinDeclineAll"],["button.alma-cmp-button[title=\"Hyväksy\"]"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["button[id=\"rejectAll\"]","","1000"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],["#cmpwrapper >>> .cmptxt_btn_no","","1000"],["#cmpwrapper >>> .cmptxt_btn_save","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing","","1000"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass cookies\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["button[title=\"Alles akzeptieren\"]","","1000"],["button[title=\"Godkänn alla cookies\"]","","1000"],["button[title=\"ALLE AKZEPTIEREN\"]","","1000"],["button[title=\"Reject all\"]","","1000"],["button[title=\"I Agree\"]","","1000"],["button[title=\"AKZEPTIEREN UND WEITER\"]","","1000"],["button[title=\"Hyväksy kaikki evästeet\"]","","1000"],["button[title=\"TILLAD NØDVENDIGE\"]","","1000"],["button[title=\"Accept All & Close\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline","","1000"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-purpose=\"cookieBar.button.accept\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["button.onetrust-close-btn-handler","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt\"]","","1000"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["button.cookie-notice__button--dismiss","","1000"],["button[data-testid=\"cookies-politics-reject-button--button\"]","","1000"],["cds-button[id=\"cookie-allow-necessary-et\"]","","1000"],["button[title*=\"Zustimmen\" i]","","1000"],["button[title=\"Ich bin einverstanden\"]","","","1000"],["button[id=\"userSelectAll\"]","","1000"],["button[title=\"Consent and continue\"]","","1000"],["button[title=\"Accept all\"]","","1000"],["button[title=\"Save & Exit\"]","","1000"],["button[title=\"Akzeptieren & Schließen\"]","","1000"],["button.button-reject","","1000"],["button[data-cookiefirst-action=\"accept\"]","","1000"],["button[data-cookiefirst-action=\"reject\"]","","1000"],["button.mde-consent-accept-btn","","1000"],[".gdpr-modal .gdpr-btn--secondary, .gdpr-modal .gdpr-modal__box-bottom-dx > button.gdpr-btn--br:first-child"],["button#consent_prompt_decline","","1000"],["button[id=\"save-all-pur\"]","","1000"],["button[id=\"save-all-conditionally\"]","","1000"],["a[onclick=\"AcceptAllCookies(true); \"]","","1000"],["button[title=\"Akzeptieren & Weiter\"]","","1000"],["button#ensRejectAll","","1500"],["a.js-cookie-popup","","650"],["button.button_default","","800"],["button.CybotCookiebotDialogBodyButton","","1000"],["button.js-decline-all-cookies","","1000"],["button.cookieselection-confirm-selection","","1000"],["button#btn-reject-all","","1000"],["button[data-consent-trigger=\"1\"]","","1000"],["button#cookiebotDialogOkButton","","1000"],["button[field-reject-button-name]","","1000"],["button.js-deny","","1500"],["a.jliqhtlu__close","","1000"],["a.cookie-consent--reject-button","","1000"],["button[title=\"Alle Cookies akzeptieren\"]","","1000"],["button[data-test-id=\"customer-necessary-consents-button\"]","","1000"],["button.ui-cookie-consent__decline-button","","1000"],["button.cookies-modal-warning-reject-button","","1000"],["button[data-type=\"nothing\"]","","1000"],["button.cm-btn-accept","","1000"],["button[data-dismiss=\"modal\"]","","1000"],["button#js-agree-cookies-button","","1000"],["button[data-testid=\"cookie-popup-reject\"]","","1000"],["button#truste-consent-required","","1000"],["button[data-testid=\"button-core-component-Avslå\"]","","1000"],["epaas-consent-drawer-shell >>> button.reject-button","","1000"],["button.ot-bnr-save-handler","","1000"],["button#button-accept-necessary","","1000"],["button[data-cookie-layer-accept=\"selected\"]","","1000"],[".open > ng-transclude > footer > button.accept-selected-btn","","1000"],[".open_modal .modal-dialog .modal-content form .modal-header button[name=\"refuse_all\"]","","1000"],["div.button_cookies[onclick=\"RefuseCookie()\"]"],["button[onclick=\"SelectNone()\"]","","1000"],["button[data-tracking-element-id=\"cookie_banner_essential_only\"]","","1000"],["button[name=\"decline_cookie\"]","","1000"],["button.cmpt_customer--cookie--banner--continue","","1000"],["button.cookiesgdpr__rejectbtn","","1000"],["button[onclick=\"confirmAll('theme-showcase')\"]","","1000"],["button.oax-cookie-consent-select-necessary","","1000"],["button#cookieModuleRejectAll","","1000"],["button.js-cookie-accept-all","","1000"],["label[for=\"ok\"]","","500"],["button.payok__submit","","750"],["button.btn-outline-secondary","","1000"],["button#footer_tc_privacy_button_2","","1000"],["input[name=\"pill-toggle-external-media\"]","","500"],["button.p-layer__button--selection","","750"],["button[data-analytics-cms-event-name=\"cookies.button.alleen-noodzakelijk\"]","","2600"],["button[aria-label=\"Vypnúť personalizáciu\"]","","1000"],[".cookie-text > .large-btn","","1000"],["button#zenEPrivacy_acceptAllBtn","","1000"],["button[title=\"OK\"]","","1000"],[".l-cookies-notice .btn-wrapper button[data-name=\"accept-all-cookies\"]","","1000"],["button.btn-accept-necessary","","1000"],["button#popin_tc_privacy_button","","1000"],["button#cb-RejectAll","","1000"],["button#DenyAll","","1000"],["button[name=\"decline-all\"]","","1000"],["button#saveCookieSelection","","1000"],["input.cookieacceptall","","1000"],["button[data-role=\"necessary\"]","","1000"],["input[value=\"Acceptér valgte\"]","","1000"],["button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],["cookie-consent-element >>> button[aria-label=\"Accepter kun de nødvendige cookies\"]","","1000"],[".dmc-accept-all","","1000"],["button#hs-eu-decline-button","","1000"],["button[onclick=\"wsSetAcceptedCookies(this);\"]","","1000"],["button[data-tid=\"banner-accept\"]","","1000"],["div#cookiescript_accept","","1000"],["button#popin-cookies-btn-refuse","","1000"],["button.reject-btn","","1000"],["button.AP_mdf-accept","","1500"],["button#cm-btnRejectAll","","1000"],["button[data-cy=\"iUnderstand\"]","","1000"],["button[data-cookiebanner=\"accept_button\"]","","1000"],["button.cky-btn-reject","","1000"],["button#consentDisagreeButton","","1000"],[".logoContainer > .modalBtnAccept","","1000"],["button.js-cookie-banner-decline-all","","1000"],["div#consent_prompt_decline_submit","","1000"],["button.js-acceptNecessaryCookies","","1000"],[".show.modal .modal-dialog .modal-content .modal-footer a.s-cookie-transparency__link-reject-all","","1000"],["button#UCButtonSettings","500"],["button#CybotCookiebotDialogBodyLevelButtonAccept","750"],["button[name=\"rejectAll\"]","","1000"],["button.env-button--primary","","1000"],["div#consent_prompt_reject","","1000"],["button#js-ssmp-clrButtonLabel","","1000"],[".modal.in .modal-dialog .modal-content .modal-footer button#saveGDPR","","2000"],["button#btnAcceptAllCookies","","1000"],["button[class=\"amgdprcookie-button -decline\"]","","3000"],["button[data-t=\"continueWithoutAccepting\"]","","1000"],["button.si-cookie-notice__button--reject","","1000"],["button.btn--white.l-border.cookie-notice__btn","","1000"],["a#bstCookieAlertBtnNecessary","","1000"],["button.save.btn-form.btn-inverted","","1000"],["button.manage-cookies","","500"],["button.save.primary-button","","750"],["button.ch2-deny-all-btn","","1500"],["button[data-testid=\"cookie-modal-actions-decline\"]","","1000"],["span.cookies_rechazo","","1000"],["button.ui-button-secondary.ui-button-secondary-wide","","500"],["button.ui-button-primary-wide.ui-button-text-only","","750"],["button#shopify-pc__banner__btn-decline","","1000"],["button.consent-info-cta.more","","500"],["button.consent-console-save.ko","","750"],["button[data-testid=\"reject-all-cookies-button\"]","","1000"],["button#show-settings-button","","500"],["button#save-settings-button","","750"],["button[title=\"Jag godkänner\"]","","1000"],["label[title=\"Externe Medien\"]","","1000"],["button.save-cookie-settings","","1200"],["button#gdpr-btn-refuse-all","","1000"],["a[aria-label=\"Continue without accepting\"]","","1000"],["button#tarteaucitronAllDenied2","","1000"],["button.ccm--decline-cookies","","1000"],["button#c-s-bn","","1000"],["button.cm-btn-success","","1000"],["a.p-cookie-layer__accept-selected-cookies-button[nb-cmp=\"button\"]","","1500"],["a.cc-btn-decline","","1000"],["a.disable-cookies","","1000"],["button[aria-label=\"Accept all\"]","","1000"],["button#ManageCookiesButton","","500"],["button#SaveCookiePreferencesButton","","750"],["button[type=\"submit\"].btn--cookie-consent","","1000"],["button.btn_cookie_savesettings","","500"],["button.btn_cookie_savesettings","","750"],["a[data-cookies-action=\"accept\"]","","1000"],["button.xlt-modalCookiesBtnAllowNecessary","","1000"],["span[data-qa-selector=\"gdpr-banner-configuration-button\"]","","300"],["span[data-qa-selector=\"gdpr-banner-accept-selected-button\"]","","500"],["button[data-cookies=\"disallow_all_cookies\"]","","1000"],["button#CookieBoxSaveButton","","1000"],["button#acceptNecessaryCookiesBtn","","1000"],["a.cc-deny","","1000"],["button[aria-label=\"Accept selected cookies\"]","","1000"],["button.orejime-Modal-saveButton","","1000"],["a[data-tst=\"reject-additional\"]","","1000"],["button.cookie-select-mandatory","","1000"],["a#obcookies_box_close","","1000"],["a[data-button-action=\"essential\"]","","1000"],["button[data-test=\"cookiesAcceptMandatoryButton\"]","","1000"],["button[data-test=\"button-customize\"]","","500"],["button[data-test=\"button-save\"]","","750"],["button.cc-decline","","1000"],["div.approve.button","","1000"],["button[onclick=\"CookieConsent.apply(['ESSENTIAL'])\"]","","1000"],["label[for=\"privacy_pref_optout\"]","","800"],["div#consent_prompt_submit","","1000"],["button.dp_accept","","1000"],["button.cookiebanner__buttons__deny","","1000"],["button.button-refuse","","1000"],["a[onclick=\"cmp_pv.cookie.saveConsent('onlyLI');\"]","","1000"],["button[title=\"Hyväksy\"]","","1000"],["button[title=\"Pokračovať s nevyhnutnými cookies →\"]","","1000"],["button[name=\"saveCookiesPlusPreferences\"]","","1000"],["div[onclick=\"javascript:ns_gdpr();\"]","","1000"],["button.cookies-banner__button","","1000"],["div#close_button.btn","","1000"],["pie-cookie-banner >>> pie-button[data-test-id=\"actions-necessary-only\"]","","1000"],["button#cmCloseBanner","","1000"],["button#popin_tc_privacy_button_2","","1000"],["span[aria-label=\"dismiss cookie message\"]","","1000"],["button[aria-label=\"Rechazar todas las cookies\"]","","1000"],["a[aria-label=\"settings cookies\"]","","600"],["a[onclick=\"Pandectes.fn.savePreferences()\"]","","750"],["a[aria-label=\"allow cookies\"]","","1000"],["div.privacy-more-information","","600"],["div#preferences_prompt_submit","","750"],["a#CookieBoxSaveButton","","1000"],["span[data-content=\"WEIGEREN\"]","","1000"],[".is-open .o-cookie__overlay .o-cookie__container .o-cookie__actions .is-space-between button[data-action=\"save\"]","","1000"],["a[onclick=\"consentLayer.buttonAcceptMandatory();\"]","","1000"],["button[id=\"confirmSelection\"]","","2000"],["button[data-action=\"disallow-all\"]","","1000"],["div#cookiescript_reject","","1000"],["button#acceptPrivacyPolicy","","1000"],["button#consent_prompt_reject","","1000"],["dock-privacy-settings >>> bbg-button#decline-all-modal-dialog","","1000"],["button.js-deny","","1000"],["a[role=\"button\"][data-cookie-individual]","","3200"],["a[role=\"button\"][data-cookie-accept]","","3500"],["button[title=\"Deny all cookies\"]","","1000"],["button#cookieconsent-banner-accept-necessary-button","","1000"],["div[data-vtest=\"reject-all\"]","","1000"],["button#consentRefuseAllCookies","","1000"],["button.cookie-consent__button--decline","","1000"],["button#saveChoice","","1000"],["button#refuseCookiesBtn","","1000"],["button.p-button.p-privacy-settings__accept-selected-button","","2500"],["button.cookies-ko","","1000"],["button.reject","","1000"],["button.ot-btn-deny","","1000"],["button.js-ot-deny","","1000"],["button.cn-decline","","1000"],["button#js-gateaux-secs-deny","","1500"],["button[data-cookie-consent-accept-necessary-btn]","","1000"],["button.qa-cookie-consent-accept-required","","1500"],[".cvcm-cookie-consent-settings-basic__learn-more-button","","600"],[".cvcm-cookie-consent-settings-detail__footer-button","","750"],["button.accept-all"],[".btn-primary"],["div.tvp-covl__ab","","1000"],["span.decline","","1500"],["a.-confirm-selection","","1000"],["button[data-role=\"reject-rodo\"]","","2500"],["button#moreSettings","","600"],["button#saveSettings","","750"],["button#modalSettingBtn","","1500"],["button#allRejectBtn","","1750"],["button[data-stellar=\"Secondary-button\"]","","1500"],["span.ucm-popin-close-text","","1000"],["a.cookie-essentials","","1800"],["button.Avada-CookiesBar_BtnDeny","","1000"],["button#ez-accept-all","","1000"],["a.cookie__close_text","","1000"],["button[class=\"consent-button agree-necessary-cookie\"]","","1000"],["button#accept-all-gdpr","","1000"],["a#eu-cookie-details-anzeigen-b","","600"],["button.consentManagerButton__NQM","","750"],["span.gtm-cookies-close","","1000"],["button[data-accept-cookie=\"true\"]","","2000"],["button#consent_config","","600"],["button#consent_saveConfig","","750"],["button#declineButton","","1000"],["button.cookies-overlay-dialog__save-btn","","1000"],["button.iubenda-cs-reject-btn","1000"],["span.macaronbtn.refuse","","1000"],["a.fs-cc-banner_button-2","","1000"],["a.reject--cookies","","1000"],["button[aria-label=\"LET ME CHOOSE\"]","","2000"],["button[aria-label=\"Save My Preferences\"]","","2300"],[".dsgvo-cookie-modal .content .dsgvo-cookie .cookie-permission--content .dsgvo-cookie--consent-manager .cookie-removal--inline-manager .cookie-consent--save .cookie-consent--save-button","","1000"],["div[data-test-id=\"CookieConsentsBanner.Root\"] button[data-test-id=\"decline-button\"]","","1000"],["#pg-host-shadow-root >>> button#pg-configure-btn, #pg-host-shadow-root >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-host-shadow-root >>> button#pg-save-preferences-btn"],["button.cc-button--rejectAll","","","1000"],["a.eu-cookie-compliance-rocketship--accept-minimal.button","","1000"],["button[class=\"cookie-disclaimer__button-save | button\"]","","1000"],["button[class=\"cookie-disclaimer__button | button button--secondary\"]","","1000"],["button#tarteaucitronDenyAll","","1000"],["button#footer_tc_privacy_button_3","","1000"],["button#saveCookies","","1800"],["button[aria-label=\"dismiss cookie message\"]","","1000"],["div#cookiescript_button_continue_text","","1000"],["div.modal-close","","1000"],["button#wi-CookieConsent_Selection","","1000"],["button#c-t-bn","","1000"],["button#CookieInfoDialogDecline","","1000"],["button[aria-label=\"vypnout personalizaci\"]","","1800"],["span.sd-cmp-2jmDj","","1000"],["div.rgpdRefuse","","1000"],["button.modal-cookie-consent-btn-reject","","1000"],["button#myModalCookieConsentBtnContinueWithoutAccepting","","1000"],["button.cookiesBtn__link","","1000"],["button[data-action=\"basic-cookie\"]","","1000"],["button.CookieModal--reject-all","","1000"],["button.consent_agree_essential","","1000"],["span[data-cookieaccept=\"current\"]","","1000"],["button.tarteaucitronDeny","","1000"],["button[data-cookie_version=\"true3\"]","","1000"],["button.button-tertiary","","600"],["button[class=\"focus:text-gray-500\"]","","1000"],[".cookie-overlay[style] .cookie-consent .cookie-button-group .cookie-buttons #cookie-deny","","1000"],["button#elc-decline-all-link","","1000"],["#cookiescript_reject","","500"],["#redesignCmpWrapper > div > div > a[href^=\"https://cadenaser.com/\"]"]];

const hostnamesMap = new Map([["consent.youtube.com",[0,1]],["facebook.com",2],["instagram.com",3],["sourcepointcmp.bloomberg.com",[4,5,6]],["sourcepointcmp.bloomberg.co.jp",[4,5,6]],["giga.de",6],["bloomberg.com",7],["forbes.com",[7,69]],["nike.com",7],["consent.fastcar.co.uk",7],["cmpv2.standard.co.uk",[8,9]],["cmpv2.independent.co.uk",[10,11,12]],["wetransfer.com",[13,14]],["spiegel.de",[15,16]],["nytimes.com",[17,161]],["consent.yahoo.com",18],["tumblr.com",19],["fplstatistics.co.uk",20],["e-shop.leonidas.com",21],["cdn.privacy-mgmt.com",[22,23,41,42,43,44,83,88,89,96,104,111,122,123,124,127,129,154,177,188,196,200,201,202,263,365]],["festoolcanada.com",24],["tracker.fressnapf.de",24],["dr-beckmann.com",24],["consent.ladbible.com",[25,26]],["consent.unilad.com",[25,26]],["consent.uniladtech.com",[25,26]],["consent.gamingbible.com",[25,26]],["consent.sportbible.com",[25,26]],["consent.tyla.com",[25,26]],["consent.ladbiblegroup.com",[25,26]],["m2o.it",27],["deejay.it",27],["capital.it",27],["ilmattino.it",[27,28]],["leggo.it",[27,28]],["libero.it",27],["tiscali.it",27],["consent-manager.ft.com",[29,30,31]],["mediaworld.it",33],["mediamarktsaturn.com",34],["tf1info.fr",35],["uber.com",[36,162]],["ubereats.com",36],["lego.com",37],["ai.meta.com",38],["lilly.com",39],["cosmo-hairshop.de",40],["storyhouseegmont.no",40],["telekom.com",45],["telekom.net",45],["telekom.de",45],["ansons.de",46],["blick.ch",46],["buienradar.be",46],["digi24.ro",46],["digisport.ro",46],["digitalfoundry.net",46],["egx.net",46],["eurogamer.it",46],["mail.com",46],["mcmcomiccon.com",46],["nachrichten.at",46],["nintendolife.com",46],["oe24.at",46],["paxsite.com",46],["peacocktv.com",46],["player.pl",46],["pricerunner.com",46],["pricerunner.se",46],["pricerunner.dk",46],["proximus.be",46],["proximus.com",46],["purexbox.com",46],["pushsquare.com",46],["rugbypass.com",46],["southparkstudios.com",46],["starwarscelebration.com",46],["sweatybetty.com",46],["thehaul.com",46],["timeextension.com",46],["travelandleisure.com",46],["tunein.com",46],["videoland.com",46],["wizzair.com",46],["wetter.at",46],["dicebreaker.com",[47,48]],["eurogamer.cz",[47,48]],["eurogamer.es",[47,48]],["eurogamer.net",[47,48]],["eurogamer.nl",[47,48]],["eurogamer.pl",[47,48]],["eurogamer.pt",[47,48]],["gamesindustry.biz",[47,48]],["jelly.deals",[47,48]],["reedpop.com",[47,48]],["rockpapershotgun.com",[47,48]],["thepopverse.com",[47,48]],["vg247.com",[47,48]],["videogameschronicle.com",[47,48]],["eurogamer.de",49],["roadtovr.com",50],["mundodeportivo.com",[51,118]],["m.youtube.com",52],["www.youtube.com",52],["ohra.nl",53],["corriere.it",54],["gazzetta.it",54],["oggi.it",54],["cmp.sky.it",55],["tennisassa.fi",56],["formula1.com",57],["f1racing.pl",58],["consent-pref.trustarc.com",61],["highlights.legaseriea.it",62],["calciomercato.com",62],["sosfanta.com",63],["wetter.com",66],["youmath.it",67],["pip.gov.pl",68],["bnn.de",70],["dosenbach.ch",70],["dw.com",70],["winfuture.de",70],["lippu.fi",70],["racingnews365.com",70],["bauhaus.no",71],["beko-group.de",71],["billiger.de",71],["vanharen.nl",71],["deichmann.com",[71,92,384]],["meraluna.de",71],["slashdot.org",71],["spar.hu",72],["group.vattenfall.com",72],["mediaset.it",73],["fortune.com",74],["ilrestodelcarlino.it",75],["quotidiano.net",75],["lanazione.it",75],["ilgiorno.it",75],["iltelegrafolivorno.it",75],["auto.it",76],["boursobank.com",76],["canalplus.com",76],["eden-park.com",76],["frandroid.com",76],["o2.fr",76],["meteofrance.com",76],["mondialtissus.fr",76],["oscaro.com",76],["publicsenat.fr",76],["rmcbfmplay.com",76],["seloger.com",76],["suzuki.fr",76],["nutri-plus.de",77],["aa.com",78],["consent.capital.fr",79],["consent.voici.fr",79],["programme-tv.net",79],["cmp.e24.no",[80,81]],["cmp.vg.no",[80,81]],["huffingtonpost.fr",82],["rainews.it",84],["remarkable.com",85],["netzwelt.de",86],["money.it",87],["cmp-sp.tagesspiegel.de",89],["cmp.bz-berlin.de",89],["cmp.cicero.de",89],["cmp.techbook.de",89],["cmp.stylebook.de",89],["cmp2.bild.de",89],["sourcepoint.wetter.de",89],["consent.finanzen.at",89],["consent.up.welt.de",89],["sourcepoint.n-tv.de",89],["sourcepoint.kochbar.de",89],["sourcepoint.rtl.de",89],["cmp.computerbild.de",89],["cmp.petbook.de",89],["cmp-sp.siegener-zeitung.de",89],["cmp-sp.sportbuzzer.de",89],["klarmobil.de",89],["technikum-wien.at",90],["eneco.nl",91],["blackpoolgazette.co.uk",93],["lep.co.uk",93],["northamptonchron.co.uk",93],["scotsman.com",93],["shieldsgazette.com",93],["thestar.co.uk",93],["portsmouth.co.uk",93],["sunderlandecho.com",93],["northernirelandworld.com",93],["3addedminutes.com",93],["anguscountyworld.co.uk",93],["banburyguardian.co.uk",93],["bedfordtoday.co.uk",93],["biggleswadetoday.co.uk",93],["bucksherald.co.uk",93],["burnleyexpress.net",93],["buxtonadvertiser.co.uk",93],["chad.co.uk",93],["daventryexpress.co.uk",93],["derbyshiretimes.co.uk",93],["derbyworld.co.uk",93],["derryjournal.com",93],["dewsburyreporter.co.uk",93],["doncasterfreepress.co.uk",93],["falkirkherald.co.uk",93],["fifetoday.co.uk",93],["glasgowworld.com",93],["halifaxcourier.co.uk",93],["harboroughmail.co.uk",93],["harrogateadvertiser.co.uk",93],["hartlepoolmail.co.uk",93],["hemeltoday.co.uk",93],["hucknalldispatch.co.uk",93],["lancasterguardian.co.uk",93],["leightonbuzzardonline.co.uk",93],["lincolnshireworld.com",93],["liverpoolworld.uk",93],["londonworld.com",93],["lutontoday.co.uk",93],["manchesterworld.uk",93],["meltontimes.co.uk",93],["miltonkeynes.co.uk",93],["newcastleworld.com",93],["newryreporter.com",93],["newsletter.co.uk",93],["northantstelegraph.co.uk",93],["northumberlandgazette.co.uk",93],["nottinghamworld.com",93],["peterboroughtoday.co.uk",93],["rotherhamadvertiser.co.uk",93],["stornowaygazette.co.uk",93],["surreyworld.co.uk",93],["thescarboroughnews.co.uk",93],["thesouthernreporter.co.uk",93],["totallysnookered.com",93],["wakefieldexpress.co.uk",93],["walesworld.com",93],["warwickshireworld.com",93],["wigantoday.net",93],["worksopguardian.co.uk",93],["yorkshireeveningpost.co.uk",93],["yorkshirepost.co.uk",93],["eurocard.com",94],["saseurobonusmastercard.se",95],["tver.jp",97],["linkedin.com",98],["elmundo.es",99],["srf.ch",100],["alternate.de",100],["bayer04.de",100],["douglas.de",100],["falke.com",100],["flaschenpost.de",100],["hornbach.nl",100],["postbank.de",100],["immowelt.de",101],["morenutrition.de",101],["moebel24.ch",[102,167]],["meubles.fr",102],["meubelo.nl",102],["moebel.de",102],["mapillary.com",103],["cmp.seznam.cz",105],["marca.com",106],["raiplay.it",107],["derstandard.at",108],["derstandard.de",108],["faz.net",108],["ansa.it",109],["delladio.it",109],["huffingtonpost.it",109],["lastampa.it",109],["movieplayer.it",109],["multiplayer.it",109],["repubblica.it",109],["tomshw.it",109],["tuttoandroid.net",109],["tuttotech.net",109],["ilgazzettino.it",110],["ilmessaggero.it",110],["ilsecoloxix.it",110],["privacy.motorradonline.de",111],["consent.watson.de",111],["consent.kino.de",111],["dailystar.co.uk",[112,113,114,115]],["mirror.co.uk",[112,113,114,115]],["jeuxvideo.com",116],["idnes.cz",117],["20minutes.fr",118],["20minutos.es",118],["24sata.hr",118],["abc.es",118],["actu.fr",118],["antena3.com",118],["antena3internacional.com",118],["atresmedia.com",118],["atresmediapublicidad.com",118],["atresmediastudios.com",118],["atresplayer.com",118],["autopista.es",118],["belfasttelegraph.co.uk",118],["bt.se",118],["bonduelle.it",118],["bonniernews.se",118],["ciclismoafondo.es",118],["cnews.fr",118],["cope.es",118],["correryfitness.com",118],["decathlon.nl",118],["decathlon.pl",118],["di.se",118],["diariocordoba.com",118],["diepresse.com",118],["dn.se",118],["dnevnik.hr",118],["dumpert.nl",118],["ebuyclub.com",118],["edreams.de",118],["edreams.net",118],["elcomercio.es",118],["elconfidencial.com",118],["eldesmarque.com",118],["elespanol.com",118],["elpais.com",118],["elpais.es",118],["engadget.com",118],["euronews.com",118],["europafm.com",118],["expressen.se",118],["filmstarts.de",118],["flooxernow.com",118],["france.tv",118],["france24.com",118],["fussballtransfers.com",118],["ghacks.net",118],["gva.be",118],["hbvl.be",118],["k.at",118],["krone.at",118],["kurier.at",118],["ladepeche.fr",118],["lalibre.be",118],["lasexta.com",118],["lasprovincias.es",118],["ledauphine.com",118],["lejdd.fr",118],["leparisien.fr",118],["lexpress.fr",118],["libremercado.com",118],["lotoquebec.com",118],["okdiario.com",118],["marmiton.org",118],["melodia-fm.com",118],["moviepilot.de",118],["m6.fr",118],["metronieuws.nl",118],["naszemiasto.pl",118],["nicematin.com",118],["nieuwsblad.be",118],["numerama.com",118],["ondacero.es",118],["profil.at",118],["radiofrance.fr",118],["rankia.com",118],["rfi.fr",118],["rossmann.pl",118],["rtbf.be",118],["rtl.lu",118],["science-et-vie.com",118],["sensacine.com",118],["sfgame.net",118],["shure.com",118],["silicon.es",118],["sncf-connect.com",118],["sport.es",118],["techcrunch.com",118],["telegraaf.nl",118],["telequebec.tv",118],["trailrun.es",118],["video-streaming.orange.fr",118],["ryobitools.eu",[119,120]],["americanexpress.com",121],["consent.radiotimes.com",124],["sp-consent.szbz.de",125],["cmp.omni.se",126],["cmp.svd.se",126],["cmp.aftonbladet.se",126],["consent.economist.com",128],["cmpv2.foundryco.com",129],["cmpv2.infoworld.com",129],["cmpv2.arnnet.com.au",129],["sp-cdn.pcgames.de",130],["sp-cdn.pcgameshardware.de",130],["consentv2.sport1.de",130],["cmpv2.tori.fi",131],["cdn.privacy-mgmt.co",132],["consent.spielaffe.de",133],["vikingline.com",134],["tfl.gov.uk",134],["1und1.de",135],["infranken.de",136],["cmp.bunte.de",137],["cmp.chip.de",137],["cmp.focus.de",[137,412]],["estadiodeportivo.com",138],["tempo.pt",138],["pogoda.com",138],["yourweather.co.uk",138],["tempo.com",138],["tiempo.com",138],["ilmeteo.net",138],["daswetter.com",138],["kicker.de",139],["formulatv.com",140],["web.de",141],["lefigaro.fr",142],["linternaute.com",143],["consent.caminteresse.fr",144],["volksfreund.de",145],["dailypost.co.uk",146],["the-express.com",146],["tarife.mediamarkt.de",147],["gaggenau.com",147],["saturn.de",148],["eltiempo.es",[149,150]],["otempo.pt",151],["cmp-sp.goettinger-tageblatt.de",153],["cmp-sp.saechsische.de",153],["cz.de",153],["dewezet.de",153],["dnn.de",153],["haz.de",153],["gnz.de",153],["landeszeitung.de",153],["lvz.de",153],["maz-online.de",153],["ndz.de",153],["op-marburg.de",153],["ostsee-zeitung.de",153],["paz-online.de",153],["reisereporter.de",153],["rga.de",153],["rnd.de",153],["siegener-zeitung.de",153],["sn-online.de",153],["solinger-tageblatt.de",153],["sportbuzzer.de",153],["szlz.de",153],["tah.de",153],["torgauerzeitung.de",153],["waz-online.de",153],["privacy.maennersache.de",153],["sinergy.ch",155],["agglo-valais-central.ch",155],["biomedcentral.com",156],["hsbcnet.com",157],["hsbcinnovationbanking.com",157],["create.hsbc",157],["gbm.hsbc.com",157],["hsbc.co.uk",158],["internationalservices.hsbc.com",158],["history.hsbc.com",158],["about.hsbc.co.uk",159],["privatebanking.hsbc.com",160],["independent.co.uk",163],["privacy.crash.net",163],["the-independent.com",164],["argos.co.uk",165],["poco.de",[166,167]],["lipo.ch",168],["schubiger.ch",169],["aedt.de",170],["berlin-live.de",170],["gutefrage.net",170],["insideparadeplatz.ch",170],["morgenpost.de",170],["play3.de",170],["thueringen24.de",170],["pdfupload.io",171],["gamestar.de",[172,196]],["verksamt.se",173],["beko.com",174],["bepanthen.com.au",174],["berocca.com.au",174],["booking.com",174],["centrum.sk",174],["claratyne.com.au",174],["de.vanguard",174],["dhl.de",174],["fello.se",174],["khanacademy.org",174],["konami.com",174],["groceries.asda.com",174],["n26.com",174],["nintendo.com",174],["panasonic.com",174],["pluto.tv",174],["swisscom.ch",174],["swisspass.ch",174],["telenet.be",174],["toujeo.com",174],["questdiagnostics.com",174],["wallapop.com",174],["yoigo.com",174],["noovle.com",175],["telsy.com",175],["timenterprise.it",175],["tim.it",175],["here.com",176],["cmp.heise.de",178],["cmp.am-online.com",178],["consent.newsnow.co.uk",178],["zara.com",179],["lepermislibre.fr",179],["negociardivida.spcbrasil.org.br",180],["privacy.topreality.sk",182],["privacy.autobazar.eu",182],["s-pankki.fi",183],["vu.lt",184],["adnkronos.com",[185,186]],["cornwalllive.com",[185,186]],["cyprus-mail.com",[185,186]],["informazione.it",[185,186]],["mymovies.it",[185,186]],["tuttoeuropei.com",[185,186]],["video.lacnews24.it",[185,186]],["taxscouts.com",187],["online.no",189],["telenor.no",189],["austrian.com",190],["hornetsecurity.com",191],["kayzen.io",191],["wasserkunst-hamburg.de",191],["bnc.ca",192],["festo.com",192],["standaard.be",192],["engelvoelkers.com",192],["knipex.de",192],["ing.es",192],["taxfix.de",192],["tf1.fr",192],["bruendl.at",193],["latamairlines.com",194],["elisa.ee",195],["baseendpoint.brigitte.de",196],["baseendpoint.gala.de",196],["baseendpoint.haeuser.de",196],["baseendpoint.stern.de",196],["baseendpoint.urbia.de",196],["cmp.tag24.de",196],["cmpv2.berliner-zeitung.de",196],["golem.de",196],["consent.t-online.de",196],["cmp-sp.handelsblatt.com",196],["sp-consent.stuttgarter-nachrichten.de",197],["regjeringen.no",198],["sp-manager-magazin-de.manager-magazin.de",199],["consent.11freunde.de",199],["centrum24.pl",203],["replay.lsm.lv",204],["stadt-wien.at",205],["verl.de",205],["mobile.de",206],["cookist.it",207],["fanpage.it",207],["geopop.it",207],["lexplain.it",207],["royalmail.com",208],["gmx.net",209],["gmx.ch",210],["mojehobby.pl",211],["sp.stylevamp.de",212],["easyjet.com",213],["experian.co.uk",213],["postoffice.co.uk",213],["tescobank.com",213],["internetaptieka.lv",[214,215]],["wells.pt",216],["thomann.de",217],["landkreis-kronach.de",218],["northcoast.com",219],["chaingpt.org",219],["bandenconcurrent.nl",220],["bandenexpert.be",220],["reserved.com",221],["metro-tr.com",222],["balay.es",223],["constructa.com",223],["dafy-moto.com",224],["akku-shop.nl",225],["akkushop-austria.at",225],["akkushop-b2b.de",225],["akkushop.de",225],["akkushop.dk",225],["batterie-boutique.fr",225],["akkushop-schweiz.ch",226],["evzuttya.com.ua",227],["eobuv.cz",227],["eobuwie.com.pl",227],["ecipele.hr",227],["eavalyne.lt",227],["efootwear.eu",227],["eschuhe.ch",227],["eskor.se",227],["chaussures.fr",227],["ecipo.hu",227],["eobuv.com.ua",227],["eobuv.sk",227],["epantofi.ro",227],["epapoutsia.gr",227],["escarpe.it",227],["eschuhe.de",227],["obuvki.bg",227],["zapatos.es",227],["swedbank.ee",228],["mudanzavila.es",229],["bienmanger.com",230],["gesipausa.com",231],["beckhoff.com",231],["zitekick.dk",232],["eltechno.dk",232],["okazik.pl",232],["maxi.rs",234],["one4all.ie",235],["wideroe.no",236],["kijk.nl",238],["nordania.dk",239],["danskeci.com",239],["danicapension.dk",239],["gewerbegebiete.de",241],["cordia.fr",242],["vola.fr",243],["lafi.fr",244],["atida.fr",247],["bbvauk.com",248],["expertise.unimi.it",249],["altenberg.de",250],["vestel.es",251],["tsb.co.uk",252],["buienradar.nl",[253,254]],["linsenplatz.de",255],["budni.de",256],["erstecardclub.hr",256],["teufel.de",[257,258]],["abp.nl",259],["simplea.sk",260],["flip.bg",261],["kiertokanki.com",262],["leirovins.be",264],["vias.be",265],["virbac.com",266],["diners.hr",266],["squarehabitat.fr",266],["arbitrobancariofinanziario.it",267],["smit-sport.de",268],["go-e.com",269],["malerblatt-medienservice.de",270],["architekturbuch.de",270],["medienservice-holz.de",270],["leuchtstark.de",270],["casius.nl",271],["vakgaragevannunen.nl",272],["fortuluz.es",272],["finna.fi",272],["eurogrow.es",272],["vakgaragevandertholen.nl",272],["envafors.dk",273],["dabbolig.dk",[274,275]],["daruk-emelok.hu",276],["exakta.se",277],["larca.de",278],["roli.com",279],["okazii.ro",280],["tgvinoui.sncf",281],["sklepy-odido.pl",282],["rastreator.com",282],["l-bank.de",283],["interhyp.de",284],["transparency.meta.com",286],["safran-group.com",287],["sr-ramenendeuren.be",287],["strato-hosting.co.uk",288],["auto.de",289],["contentkingapp.com",290],["otterbox.com",291],["stoertebeker-brauquartier.com",292],["stoertebeker.com",292],["stoertebeker-eph.com",292],["aparts.pl",293],["sinsay.com",[294,295]],["benu.cz",296],["stockholmresilience.org",297],["ludvika.se",297],["kammarkollegiet.se",297],["cazenovecapital.com",298],["statestreet.com",299],["beopen.lv",300],["cesukoncertzale.lv",301],["dodo.fr",302],["pepper.it",303],["pepper.pl",303],["preisjaeger.at",303],["mydealz.de",303],["dealabs.com",303],["hotukdeals.com",303],["chollometro.com",303],["makelaarsland.nl",304],["bricklink.com",305],["bestinver.es",306],["icvs2023.conf.tuwien.ac.at",307],["racshop.co.uk",[308,309]],["baabuk.com",310],["app.lepermislibre.fr",311],["multioferta.es",312],["testwise.com",[313,314]],["tonyschocolonely.com",315],["fitplus.is",315],["fransdegrebber.nl",315],["lilliputpress.ie",315],["dare2tri.com",315],["la-vie-naturelle.com",[316,317]],["inovelli.com",318],["uonetplus.vulcan.net.pl",[319,320]],["consent.helagotland.se",321],["oper.koeln",[322,323]],["deezer.com",324],["hoteldesartssaigon.com",325],["groupeonepoint.com",326],["clickskeks.at",327],["abt-sportsline.de",327],["nerdstar.de",328],["pamiatki.pl",329],["initse.com",330],["salvagny.org",331],["taxinstitute.ie",332],["get-in-it.de",333],["tempcover.com",[334,335]],["guildford.gov.uk",336],["easyparts-recambios.es",[337,338]],["easyparts-rollerteile.de",[337,338]],["drimsim.com",339],["canyon.com",340],["vevovo.be",[341,342]],["vendezvotrevoiture.be",[341,342]],["wirkaufendeinauto.at",[341,342]],["vikoberallebiler.dk",[341,342]],["wijkopenautos.nl",[341,342]],["vikoperdinbil.se",[341,342]],["noicompriamoauto.it",[341,342]],["vendezvotrevoiture.fr",[341,342]],["compramostucoche.es",[341,342]],["wijkopenautos.be",[341,342]],["topautoosat.fi",343],["autoteiledirekt.de",343],["autoczescionline24.pl",343],["tuttoautoricambi.it",343],["onlinecarparts.co.uk",343],["autoalkatreszek24.hu",343],["autodielyonline24.sk",343],["reservdelar24.se",343],["pecasauto24.pt",343],["reservedeler24.co.no",343],["piecesauto24.lu",343],["rezervesdalas24.lv",343],["besteonderdelen.nl",343],["recambioscoche.es",343],["antallaktikaexartimata.gr",343],["piecesauto.fr",343],["teile-direkt.ch",343],["lpi.org",344],["flyingtiger.com",346],["borgomontecedrone.it",346],["gera.de",347],["mfr-chessy.fr",348],["mfr-lamure.fr",348],["mfr-saint-romain.fr",348],["mfr-lapalma.fr",348],["mfrvilliemorgon.asso.fr",348],["mfr-charentay.fr",348],["mfr.fr",348],["nationaltrust.org.uk",349],["ib-hansmeier.de",351],["rsag.de",352],["esaa-eu.org",352],["theprotocol.it",[354,355]],["lightandland.co.uk",356],["etransport.pl",357],["wohnen-im-alter.de",358],["johnmuirhealth.com",[359,360]],["markushaenni.com",361],["airbaltic.com",362],["gamersgate.com",362],["zorgzaam010.nl",363],["paruvendu.fr",364],["cmpv2.bistro.sk",366],["privacy.bazar.sk",366],["hennamorena.com",367],["newsello.pl",368],["porp.pl",369],["golfbreaks.com",370],["lieferando.de",371],["pyszne.pl",371],["lieferando.at",371],["takeaway.com",371],["thuisbezorgd.nl",371],["holidayhypermarket.co.uk",372],["atu.de",373],["atu-flottenloesungen.de",373],["but.fr",373],["fortuneo.fr",373],["maif.fr",373],["sparkasse.at",373],["bstrongoutlet.pt",374],["nobbot.com",375],["finlayson.fi",[376,377]],["cowaymega.ca",[376,377]],["arktis.de",378],["desktronic.de",378],["dockin.de",378],["dryrobe.com",378],["hairtalk.se",378],["hallmark.co.uk",378],["loopearplugs.com",378],["peopleofshibuya.com",378],["sanctum.shop",378],["beam.co.uk",[379,380]],["malaikaraiss.com",381],["wefashion.com",382],["merkur.dk",383],["omegawatches.com",386],["carefully.be",387],["aerotime.aero",387],["rocket-league.com",388],["dws.com",389],["bosch-homecomfort.com",390],["elmleblanc-optibox.fr",390],["monservicechauffage.fr",390],["boschrexroth.com",390],["home-connect.com",391],["lowrider.at",[392,393]],["mesto.de",394],["veiligverkeer.be",395],["vsv.be",395],["dehogerielen.be",395],["intersport.gr",396],["intersport.bg",396],["intersport.com.cy",396],["intersport.ro",396],["ticsante.com",397],["techopital.com",397],["millenniumprize.org",398],["hepster.com",399],["ellisphere.fr",400],["peterstaler.de",401],["blackforest-still.de",401],["tiendaplayaundi.com",402],["ajtix.co.uk",403],["raja.fr",404],["rajarani.de",404],["avery-zweckform.com",406],["1xinternet.de",406],["futterhaus.de",406],["dasfutterhaus.at",406],["frischeparadies.de",406],["fmk-steuer.de",406],["mediapart.fr",407],["athlon.com",408],["alumniportal-deutschland.org",409],["snoopmedia.com",409],["myguide.de",409],["study-in-germany.de",409],["daad.de",409],["cornelsen.de",[410,411]],["vinmonopolet.no",413],["tvp.info",414],["tvp.pl",414],["tvpworld.com",414],["brtvp.pl",414],["tvpparlament.pl",414],["belsat.eu",414],["warnung.bund.de",415],["mediathek.lfv-bayern.de",416],["allegrolokalnie.pl",417],["eon.pl",[418,419]],["ylasatakunta.fi",[420,421]],["mega-image.ro",422],["louisvuitton.com",423],["bodensee-airport.eu",424],["department56.com",425],["allendesignsstudio.com",425],["designsbylolita.co",425],["shop.enesco.com",425],["savoriurbane.com",426],["miumiu.com",427],["church-footwear.com",427],["clickdoc.fr",428],["car-interface.com",429],["monolithdesign.it",429],["smileypack.de",[430,431]],["malijunaki.si",432],["finom.co",433],["orange.es",[434,435]],["skousen.no",436],["medimax.de",437],["lotto.it",438],["readspeaker.com",438],["ibistallinncenter.ee",439],["aaron.ai",440],["thebathcollection.com",441],["coastfashion.com",[442,443]],["oasisfashion.com",[442,443]],["warehousefashion.com",[442,443]],["misspap.com",[442,443]],["karenmillen.com",[442,443]],["boohooman.com",[442,443]],["hdt.de",444],["wolt.com",445],["myprivacy.dpgmedia.nl",446],["myprivacy.dpgmedia.be",446],["www.dpgmediagroup.com",446],["tnt.com",447],["uza.be",448],["uzafoundation.be",448],["uzajobs.be",448],["cinemas-lumiere.com",451],["cdiscount.com",452],["brabus.com",453],["roborock.com",454],["strumentimusicali.net",455],["maisonmargiela.com",456],["webfleet.com",457],["dragonflyshipping.ca",458],["broekhuis.nl",459],["nemck.cz",460],["topannonces.fr",461],["homap.fr",462],["artifica.fr",463],["plan-interactif.com",463],["ville-cesson.fr",463],["moismoliere.com",464],["unihomes.co.uk",465],["bkk.hu",466],["coiffhair.com",467],["ptc.eu",468],["ziegert-group.com",469],["toureiffel.paris",470],["smdv.de",471],["digitalo.de",471],["koempf24.ch",[472,473]],["teichitekten24.de",[472,473]],["koempf24.de",[472,473]],["wolff-finnhaus-shop.de",[472,473]],["asnbank.nl",474],["snsbank.nl",474],["devolksbank.nl",475],["swiss-sport.tv",476],["cadenaser.com",477]]);

const entitiesMap = new Map([["consent.google",0],["festool",24],["fuso-trucks",24],["hertz",32],["mediamarkt",33],["gmx",46],["plus500",46],["music.amazon",[59,60]],["chrono24",[64,65]],["kinepolis",70],["vaillant",70],["jobijoba",76],["intersport",[76,174]],["americanairlines",78],["joyn",101],["degiro",134],["tameteo",138],["meteored",138],["atlasformen",152],["hsbc",157],["moebelix",166],["moemax",166],["xxxlutz",166],["xxxlesnina",166],["jll",174],["samsonite",174],["adidas",181],["super-hobby",211],["metro",222],["makro",222],["gesipa",231],["batteryempire",233],["invisalign",235],["bmw",237],["danskebank",239],["dehn",240],["skyscanner",245],["coolblue",246],["sanareva",247],["bbva",248],["indigoneo",285],["strato",288],["t3micro",315],["easyparts",[337,338]],["auto-doc",343],["autodoc",343],["autodoc24",343],["refurbed",345],["hej-natural",350],["answear",353],["just-eat",371],["justeat",371],["ionos",385],["rajapack",[404,405]],["allegro",417],["bergzeit",[449,450]]]);

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
