/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

/* jshint esversion:11 */

'use strict';

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssGenericImport() {

/******************************************************************************/

// annoyances-overlays

const toImport = [[3513804,".kill-adblock-container"],[15193444,".ad-blocking-advisor-wrapper"],[7056900,".gliaplayer-container"],[1595486,".ays-fpl-modal"],[4668179,".fix_swell_banner"],[8287150,"#wpd-bubble-wrapper"],[15484606,".tmblr-iframe--follow-teaser"],[2079203,"#siradaki-haberler"],[2910893,"#trd-exitintentbox"],[4179832,"#wbounce-modal"],[11162750,".gs-subscribe"],[878155,".td-more-articles-box"],[9982692,"#credential_picker_container"],[2225696,"#credential_picker_iframe"],[11279196,".daftplugPublic"],[2949779,".js-push-notifications-modal-dialog"],[10737638,"#kp-subscribe-window"],[13642146,"#NotificationsAskMsg"],[3638864,"#onesignal-popover-container"],[11800475,"#smart_push_smio_overlay"],[16127655,"#smart_push_smio_window"],[15700662,"#visilabs_web_push_perm_box"],[3885745,".insider-opt-in-notification"],[14292000,".tsoft-push--in-notification"],[10396965,".cleverpush-bell"],[2197758,".smartmag-widget-newsletter"],[14049048,".newsletter-slice"],[14648410,".newsletter-inbodyContent-slice"],[10311469,".skinny-signup"],[5697801,".mailpoet_form_popup_overlay"],[14526191,".mailpoet_form"],[9111480,".sqs-popup-overlay"],[1769593,".followit--follow-form-container"],[15467350,".widget_blog_subscription"],[15062355,".adblock-whitelist-messaging__article-wrapper"],[12703215,".adblock-whitelist-messaging__wrapper"]];

const genericSelectorMap = self.genericSelectorMap || new Map();

if ( genericSelectorMap.size === 0 ) {
    self.genericSelectorMap = new Map(toImport);
    return;
}

for ( const toImportEntry of toImport ) {
    const existing = genericSelectorMap.get(toImportEntry[0]);
    genericSelectorMap.set(
        toImportEntry[0],
        existing === undefined
            ? toImportEntry[1]
            : `${existing},${toImportEntry[1]}`
    );
}

self.genericSelectorMap = genericSelectorMap;

/******************************************************************************/

})();

/******************************************************************************/
