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
/* global cloneInto */

'use strict';

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedSetCookie = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["SOCS","CAESHAgBEhJnd3NfMjAyMzA2MTItMF9SQzIaAmZpIAEaBgiAzK6kBg","1year"],["datr","__GMZCgwVF5BbyvAtfJojQwg","1year","","reload","1"],["ig_did","0C826C21-17C3-444A-ABB7-EBABD37214D7","1year","","reload","1"],["euconsent-v2","CPtgasAPtgasAAGABCENDECgAAAAAAAAAApAAAAAAAAA.YAAAAAAAAAAA","1year"],["consentUUID","dde2fbcb-0722-417a-92be-67407ba369de_20","1year"],["euconsent-v2","CPt3fQAPt3fQACNAFAENDLCgAAAAAAAAACiQAAAOCgDAB-AIsAZ8A6QDBAHBAAAA.YAAAAAAAAAAA","1year"],["tracking-opt-in-status","rejected","1year"],["addtl_consent","1~","1year"],["dm-euconsent-v2","CPt6yMAPt6yMABpAGAENDECgAAAAAH_AAAqIAAAS3AJMNW4gC7MocGbQMIoEQIwrCQigUAEFAMLRAQAODgp2VgE-sIkAKAUARgRAhwBRkQCAAASAJCIAJAiwQAAAiAQAAgAQCIQAMDAIKACwEAgABAdAxRCgAECQgSIiIhTAgKgSCAlsqEEoLpDTCAKssAKARGwUACIJARWAAICwcAwRICViwQJMQbRAAMAKAUSoVqKT00BCxmQAAAAA","1year"],["consentUUID","9f883906-c5ae-4d90-80a1-6623a4211ad4_21","1year"],["consentUUID","629d4124-fa7b-43b4-8158-d596cef1004d_23"],["consentUUID","f0aaedd0-2a07-443a-b90f-055c553b5160_21","1year"],["consentUUID","14ec7082-be8b-4b4c-a5b4-668972e0e04b_21","1year"],["fig_save_consent","iTTPgpSWqAGGcd3vV88zNDbHsABxE1hB","1year"],["euconsent-v2","CPubvkAPubvkAAHABBENDMCgAAAAAAAAAB5YAAAAAAAA.YAAAAAAAAAAA","1year"],["c24-consent","AAAAH0Eq","1year","","reload","1"],["wt_tandc","20190527%3A1"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0008%3A0","1year"],["_scw_rgpd_hash","1676567096","1year"],["PUR_SUBSCRIPTION","PREMIUM"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false}","1year"],["cb","1_1970_01_01_2-3","1year","","reload","1"],["datr","mWTaZBxAoW8lFl0v3EpECGYi","1year","","reload","1"],["COOKIES_CONSENT","essential"],["myscript","{%22acceptance%22:true%2C%22analytics%22:false}"],["tm_cookie_setting","Analytics","","","reload","1"],["BCP","AD=0&AL=0&SM=0"],["cookies","{\"system\":1,\"target\":0}"],["CookieControl","{\"interactedWith\":true\\,\"acceptedCategories\":[\"essentials\"]}"],["cookie_preference","functional"],["OptanonAlertBoxClosed","$currentDate$","1year"],["_EVAcookieaccept","Y","1year"],["_EVAGDPRfunctional","Y","1year"],["OptanonConsent","groups=C0004%3A0%2CC0003%3A1%2CC0002%3A0%2CC0001%3A1%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPt6LrpPt6LrpAcABBENDKCgAAAAAAAAAAYgGBtX_T5eb2vj-3ZcN_tkaYwP55y3o2wzhhaIke8NwIeH7BoGJ2MwvBV4JiACGBAkkiKBAQVlHGBcCQAAgIgRiSKMYk2MjzNKJLJAilMbO0NYCD9mnkHT2ZCY70-uO__zvneAAAAYJABAXmKgAgLzGQAQF5joAIC8yUAEBeZSACAvMAAA.YAAAAAAAAAAA","1year","","reload","1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A1%2CBG57%3A0%2CBG58%3A0%2CBG59%3A0","1year"],["TcString","CPtgasAPtgasABUAMAFIDICgAP_AAAAAAApAAAAMEgLgALAAqABkADwAIAAZAA0AB8AEQAJgATwA5gB-AEIANEAbIBFgC0gGKAM-AmQBeYDBACQkBAABYAFQAMgAeABAADIAGgARAAmABPADmAH4AQgA2QDFALzDQAgBsgFpEQAQBsioAYATAC0gLzGQAgAmALzHQFAAFgAVAAyACAAGQANAAfABEACYAE8AOYAfgBogDZAIsAWkAxQB1AEyALzIQBgAFgAZACYAWkAxQB1CUAkABYAGQAiABMAGyAWkAxQB1AF5lICAACwAKgAZABAADIAGgARAAmABPADmAH4AaIA2QCLAGKAXmAAA.YAAAAAAAAIAA","1year"],["gravitoData","{\"NonTCFVendors\":[{\"id\":1,\"name\":\"Facebook\",\"consent\":true},{\"id\":3,\"name\":\"Google\",\"consent\":true},{\"id\":9,\"name\":\"Twitter\",\"consent\":true}]}","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0%2CC0005%3A0","1year"],["ladies-cookies-overlay","%7B%22cookie-category-essential%22%3Atrue%2C%22cookie-category-stats%22%3Afalse%2C%22cookie-category-map_services%22%3Atrue%7D","","","reload","1"],["opt_out","analyse,werbe"],["OptanonConsent","groups=C0001%3A1%2CC0003%3A1%2CSPD_BG%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1","","","reload","1"],["STYXKEY_your_privacy_settings","%7B%22strict%22%3A%221%22%2C%22thirdparty%22%3A%221%22%2C%22advanced%22%3A%220%22%7D","1year","","reload","1"],["consentUUID","5937071e-5211-4df8-b4f9-89a0d5919eae_20","1year"],["consentUUID","8fde91ba-0aba-476f-af30-e7427e3c246d_21"],["OptanonConsent","groups=C0001%3A1%2CC0009%3A0%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["allowCookies","{\"uvc\":true,\"__cfduid\":true}"],["cookieConsent","%5B%7B%22name%22%3A%22essenziell%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22komfort%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22marketing%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22statistik%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22speichern%22%2C%22value%22%3A%22on%22%7D%5D","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1","1year"],["consents",":4:6:7:8:9:10:11:12:13:19:"],["__cmpcpc","__1_2__"],["__cmpcvc","__c24599_s94_c24102_s40_s1052_s65_c24103_s23_c9953_c24290_c24098_s26_s2612_s135_s1104_s1409_s905_s24_c24202_c22143_c21373_s77_s30_U__"],["__cmpconsentx40263","BPuKNGaPuKNGaAfEHBFIABAAAAA_mABAfyA"],["consent-levels","1-1_2-1_3-0_4-0","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A1"],["euconsent-v2","CPubvkAPubvkAAHABBENDMCgAM_AAE7AAAqII7FF_X7eTSPheWp_Y_tUOY0ewVQ_4-AhBgCJA4gBCRpAsJQEkGAIIEDAIAAKAAYEIGJBAAElAAFABEAAYIEBACHMAAAAIRAAIDKAAAAAAgBACABYEwAAAAIAgEBUABUAiAIAABogwMBAEAAgBEAAAAogAIBBAAAAACAAwAAQAAAIAggAAAAAAAAEAAAEAAAAEAAABJKADAAEExQ0AGAAIJiioAMAAQTFKQAYAAgmKOgAwABBMUhABgACCYoSADAAEExREAGAAIJijIAMAAQTFAAA.efgACdgAAAAA","1year","","reload","1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A0%2CBG40%3A0%2CBG41%3A0%2CBG42%3A0","1year"],["euconsent-v2","CPuy0IAPuy0IAAHABBENDNCgAAAAAAAAAAAAJNFB_G5cSWNhOHJvY9tUaQ0HwFR4o6AgDgCZA4wBCRIAMIwF0GAAIEBAIAgAAAAEAAJAAAAEAAHAAAAAAIEBASCIAEAAIBAAICAAAAABQgAACABJGwAAEAAAAEQEABQAgAIAQBuAQEAAAAAAAAAAAAgBAABBAAAAAAAgAAAIAAAAAAgAEAAAAAAAAAAAABAAEAAAAAEAAABIaADAAEExRUAGAAIJihIAMAAQTFEQAYAAgmKMgAwABBMUdABgACCYpCADAAEExSUAGAAIJilIAMAAQTFA.YAAAAAAAAAAA"],["_ul_cookie_consent","allow"],["p","eyJnZHByX3RwIjoyLCJnZHByX3AiOjF9","1year","","reload","1"],["cmplz_consented_services","{\"youtube\":true}"],["xf_consent","%5B%22_third_party%22%5D","","","reload","1"],["cookieConsent","functional","1year","","reload","1"],["je-cookieConsent","necessary","1year"],["customerCookieConsent","%5B%7B%22consentTypeId%22%3A103%2C%22consentTypeName%22%3A%22necessary%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A104%2C%22consentTypeName%22%3A%22functional%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A105%2C%22consentTypeName%22%3A%22analytical%22%2C%22isAccepted%22%3Afalse%7D%2C%7B%22consentTypeId%22%3A106%2C%22consentTypeName%22%3A%22personalized%22%2C%22isAccepted%22%3Afalse%7D%5D","1year"],["cookie-optin","{%22version%22:1%2C%22settings%22:{%22required%22:true%2C%22analytical%22:false%2C%22marketing%22:false%2C%22thirdparty%22:true}}","1year"],["cookiefirst-consent","%7B%22cookiefirst%22%3Atrue%2C%22google_analytics%22%3Atrue%2C%22google_tag_manager%22%3Atrue%2C%22linkedin_ads%22%3Afalse%2C%22hubspot%22%3Atrue%2C%22twitter%22%3Afalse%2C%22active-campaign%22%3Atrue%2C%22email-marketing%22%3Atrue%2C%22bing_ads%22%3Afalse%2C%22type%22%3A%22granular%22%7D"],["consentUUID","1e01fddf-ec1b-482a-aa3b-b82bde080398_22"],["euconsent-v2","CPvxb8APvxb8AAGABBENDPCgAIAAAH_AAAwIJLNV_G__bW9jcfr_aft0eY1P9_qz7uQjDBXNk-4F3L_WvLwX52E5NF16tqoKmRQEs1JBIUNlGMHUBUmwaoEFpyHsakycoTJKJ6BEkHMRE2dYGE5qmRpjeQKY5_p9d1bx2B-o_Nv819j2z81Xj3dZV-2k0PCdU5-9BfmtRRfK89IKdtbUv4p8_1drkm_WV_3f7tdz-DBJUAgwEQCAAgAAAAgAAAhAABAAJACAAAAAAAFAAAC4KAEIWARAggAAoRABCAACEEBABAAAAAAAkAAAEAJBAAAAABAACAAAAAAAQEAAIAJAQAAAAAkBFMIABQKAAIAACAMAEoAIIAQggACAskMAIAqigAAAECBQAIgABAYAAALAwDBAgJUBAAEEAIAAAQAoBRKBCIBHQDwkFEABAAC4AKAAqABkADkAHgAgABgADKAGgAagA8gCGAIgARwAmABPACqAGYAN4AcwA9ACEAENAIgAiQBHACWAE0AKUAYAAw4BlAGWANmAdwB3gD2AHwAPsAfsA_wEAAIGARQAjABGoCSgJMAUEAp4BUQCrgFzALsAYoA0QBrADaAG4AOIAh0BIgCdgFDgKPAUiApoBbAC5AGGwMjAyQBlwDOQGkQNXA1kBuoDkwHLgPHAe0A-kCDAEIYIWgheBDkCHoEPwJFBQAQAGwF0BAAQBNAFuBoBoAywCAAEYAKeAWgAuwBrADqgIdAXIAyMBnIEihEAwAZYBAACMAFPALsAawA6oCHQFyAMjAZyBIoVAJACGAMsAtABdgFyAMjAZyBC8CRQyAQAEMAZYBdgFyAMjAZyBC8CRRCBoAAsACgAGQAYgA1ACGAEwAKoAXAAxABvAD0AI4AUoAwABlQDuAO8Af4BFACSgFBAKeAVEAq4BaAC5gF2AMUAbQA5wB1AEqAKaAVYAsUBZQC0QFwALkAZGAzkBogDgAHjgPpAgwBCgCFoELwIdAQ9AkUOgwgALgAoACoAGQAOQAfACCAGAAZQA0ADUAHkAQwBEACOAEwAJ4AVYAuAC6AGIAMwAbwA5gB6AENAIgAiQBLACaAFGAKUAYAAwwBlADRAGyAO8AewA-wB-gD_AIGARQAjABHYCSgJMAS4AoIBTwCogFXALEAWgAuYBdoC8gL0AYoA2gBuADiAHOAOoAh0BF4CRAEqAJ2AUOAo8BTQCrAFigLKAWwAuABcgC7QGGgMegZGBkgDKgGWAMuAZmAzkBogDSAGsAN1AcWA5MBy4DxwHtAPpAfWBAECDAELQIXwQ5BDoCHoEihwAEBbhKBoAAgABYAFAAMgAcAA_ADAAMQAagA8ACIAEcAJgAVQAuABiAENAIgAiQBHACjAGAANkAd4BTwCogFXALQAXMAuwBigDqAIdARMAi8BIgCjwFigLKAWxAyMDJAGcgNIAawA4AB7QD6QIAgQYAhCBC8CHoEigJKkgAIC3CkEsABcAFAAVAAyAByAD4AQQAwADGAGgAagA8gCGAIgARwAmABPACkAFUAMQAZgA5gCGgEQARIAowBSgDAAGUANEAbIA7wB-gEYAI6ASUAoIBUQCrgFzALsAXkAxQBtADcAHUAPaAh0BEwCLwEiAJ2AUOAqwBX4CxQFsALgAXIAu0BhsDIwMkAZYAy4BnIDSIGsAayA3UByYDlwHigPHAe0A-kCDAEIQIWgQvghyCHQEPQJFFQAQBIgEylAAIC3AAAA.YAAAAAAAAAAA"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPwbUmgPwbUmgAcABBENDSCgAAAAAH_AAChQJnNf_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdl-8N3f_X_L8X52M5vF36tqoKuR4ku3bBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PEmlMbM2dYGH9_n9_z-ZKY7___f__z_v-v___9____7-3f3__5__--__e_V_-9zfn9_____9vP___9v-_9_3________3_r9_7_D_-f_87_XWxBQAJMNS4gC7IkZCbaMIoEQIwrCQqgUAFEAkLRAYQurgp2VwE-sBkAIEUATwQAhgBRkACAAASAJCIAJAjgQCAQCAQAAgAVCAQAMbAAPAC0EAgAFAdCxTigCUCwgyISIhTAhKkSCgnsqEEoP1BXCEMssCKDR_xUICNZAxWBEJCxehwBICXiSQPdUb4ACEAKAUUoViKT8wBDgmbLVXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAA.YAAAD_gAAAAA","1year"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:true%2Cmarketing:true}","1year"],["AtomStore[COOKIES_ACCEPTED]","1","1year","","reload","1"],["AtomStore[FUNCTIONAL_COOKIES_ACCEPTED]","1","1year"],["AtomStore[MARKETING_COOKIES_ACCEPTED]","0","1year"],["solt_cookie_preferences","functional%2Cperformance","1year"],["cookie-layer-settings","{\"id\":\"b2575cbc6f69c6ff02140366ef7473e9\",\"options\":[{\"analytics-is-enabled\":false},{\"komfort-is-enabled\":false},{\"personalisierung-is-enabled\":false},{\"external-data-is-enabled\":true},{\"cf-ga-opt-in\":false},{\"cf-fb-opt-in\":false},{\"cf-go-opt-in\":false},{\"cf-sn-opt-in\":false},{\"cf-am-opt-in\":false},{\"cf-pi-opt-in\":false},{\"cf-tw-opt-in\":false},{\"cf-li-opt-in\":false},{\"cf-te-opt-in\":false},{\"cf-ti-opt-in\":false},{\"cf-ttd-opt-in\":false},{\"external-data-youtube-is-enabled\":true},{\"external-data-spotify-is-enabled\":true},{\"external-data-googlemaps-is-enabled\":true},{\"external-data-universal-is-enabled\":true}]}","1year"],["d_prefs","MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw"],["didomi_token","eyJ1c2VyX2lkIjoiMThhNmQyZGEtOGNmOC02YTE0LWI3OWQtNzViOGU4ZjA2YmYyIiwiY3JlYXRlZCI6IjIwMjMtMDktMDdUMDE6MDc6MTQuNTIwWiIsInVwZGF0ZWQiOiIyMDIzLTA5LTA3VDAxOjA3OjE0LjUyMFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpwaWFuby1ic1hwclg4dyIsImM6bHVjaWRob2xkLXlmdGJXVGY3IiwiYzpzYWxlc2ZvcmNlLUI0WEI1UU5aIiwiYzpsaXZlZnlyZS00Y2JOV1lFeiIsImM6eW91dHViZS1EV3RqQ1VLYiIsImM6YWNjZW5nYWdlLUVXRUx4MzRnIiwiYzpjaGFydGJlYXQtaHhLaEZiQXciLCJjOmFtYXpvbmFkcy05YzVUTkdhaiIsImM6dHdpdHRlcndpLXdVbUJubkt5IiwiYzpmYWNlYm9va3ctMmthN1Z3UTgiLCJjOmdvb2dsZW9wdC1RaGlBZG1WYSIsImM6Z2djcm9sbHVwLW5OSGVpMmFXIiwiYzpmYWNlYm9va2EtZnJVOU01SlkiLCJjOmdvb2dsZWFuYS1HMmJzRUp5VCIsImM6Z29vZ2xlYXVkLUxEalZZa2VhIiwiYzppbnN0YWdyYW0tdFdtSmdKcHEiLCJjOm5ldHF1ZXN0LU4yblc0ZnBHIiwiYzpwcm9jdGVyYW4tSzROdzh4TUMiLCJjOmNvbXNjb3JlLWpVRmM5aWNZIiwiYzpzcG90aW0tM0ZLSDYyeUMiLCJjOnl1c3AtejhOaTQ0Wk0iLCJjOndlbWFzc21lZC1QR1o2M0Z4WSIsImM6ZXZvbG9rLWl6S3o3QVlWIiwiYzpnb29nbGVmaXItSDhrY2lGSkciLCJjOmxhbGlnYS1ZNllRMjJSUiIsImM6YWRzdml1LVZUMjZtM1FiIl19LCJwdXJwb3NlcyI6eyJkaXNhYmxlZCI6WyJnZW9sb2NhdGlvbl9kYXRhIiwiY29tcGFydGlyLWRwSGdKRUphIiwia0VlRHNMQ3AiLCJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIl19LCJ2ZW5kb3JzX2xpIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIl19LCJ2ZXJzaW9uIjoyLCJhYyI6IkRIYUNJQUVJQUl3QVdRQXVnQnNBRDBBSlVBWWdBOFFCLWdFM0FLTUFZb0F6NEI0Z0R6UUh1QWU4QkRnQ1N3R1lnTTFBZXFCQWtDRFlFUkFJamdSSkFpbUJHY0NVUUVzUUphZ1M3QW40QlJVQ3FvRmh3TFVnWWlBem1CcWNEaUFIS0FPbkFkV0E3Q0I3RURfd0lHQVJtZ2tNQkwyQ2M0RTd3S0NBVUhncFNCVHFDczhGb0FMUmdXeUF1ZEJlU0Mtb0dIUU1iZ1k3QUFBQS5ESGFDSUFFSUFJd0FXUUF1Z0JzQUQwQUpVQVlnQThRQi1nRTNBS01BWW9BejRCNGdEelFIdUFlOEJEZ0NTd0dZZ00xQWVxQkFrQ0RZRVJBSWpnUkpBaW1CR2NDVVFFc1FKYWdTN0FuNEJSVUNxb0Zod0xVZ1lpQXptQnFjRGlBSEtBT25BZFdBN0NCN0VEX3dJR0FSbWdrTUJMMkNjNEU3d0tDQVVIZ3BTQlRxQ3M4Rm9BTFJnV3lBdWRCZVNDLW9HSFFNYmdZN0FBQUEifQ=="],["euconsent-v2","CPxurkAPxurkAAHABBENDVCgAP8AAE4AAAiQIkNf_X_fb2vj-_p99_t0eY1P9_6_t6wzjheNk-8NyZ_X_J4Xp2M6rB34pqIKuR4kunLBIQdlHGHcTUgg4IkFoSPsYk2MizJKJ7JEmlMbE2dYGG9vn8TT-ZKY70__f__zvn-r___97oAAhCAABAAAAAgAAIAAAgAIAAAAAAAAAAAAAAAAAAAAAAAADA4tAsy0bqaFsHT0Lpo4igRGjCuJWoBQGUQCwtkBhmTPCnZHAR-wnUAAxAADBByGAFEaAICCIIAkKgIkEOBAqJAIdAACgAUIBAFRIgEoiLAQCAA0B8PAKKAJSLGDKhIidcCMKxIPu-QAAEAQAAIAAQAAAABAJCgAYAAiCgGgAwABEFARABgACIKAqADAAEQUBkAGAAIgoDwAMAARBQIQAYAAiCgTAAwABEFAqABgACIKAAAA.f-AACcAAAAAA"],["cookie_consent","%7B%22allowEssentials%22%3Atrue%2C%22allowFunctional%22%3Atrue%2C%22allowAnalytics%22%3Afalse%2C%22allowMarketing%22%3Afalse%7D"],["SOCS","CAISNQgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMwODI5LjA3X3AxGgJlbiADGgYIgJnPpwY","","","reload","1"],["cad","$now$"],["cc","2.4"],["cp",".16.21."],["cva","W2.0"],["ubs_cookie_settings_2.0.4","0-2-1"],["ConsentChecked","{\"userHasSetCookies\":true,\"functionalityCookies\":true,\"statisticCookies\":false,\"marketingCookies\":false}","","","reload","1"],["_iub_cs-817732","%7B%22purposes%22%3A%7B%221%22%3Atrue%2C%223%22%3Atrue%2C%224%22%3Afalse%2C%225%22%3Afalse%7D%2C%22id%22%3A817732%2C%22cons%22%3A%7B%22rand%22%3A%223ec000%22%7D%7D"]];

const hostnamesMap = new Map([["facebook.com",1],["instagram.com",2],["bloomberg.com",[3,4]],["bloomberg.co.jp",4],["fandom.com",[5,6,7]],["dailymotion.com",8],["standard.co.uk",9],["independent.co.uk",10],["theguardian.com",11],["bbc.com",12],["lefigaro.fr",13],["filmweb.pl",14],["wetransfer.com",16],["thetrainline.com",[17,30]],["scaleway.com",18],["all3dp.com",19],["lidl.fi",20],["threads.net",21],["messenger.com",22],["trading212.com",23],["myscript.com",24],["odido.nl",25],["bing.com",26],["procvetok.ua",27],["stwater.co.uk",28],["boogschietshop.nl",29],["gamespot.com",[30,38]],["mtvuutiset.fi",[30,35]],["pushsquare.com",[30,70,71]],["thejournal.ie",[30,55]],["vkmag.com",[30,33,34]],["zdnet.com",[30,48]],["evaair.com",[31,32]],["arvopaperi.fi",[36,37]],["iltalehti.fi",[36,37]],["kauppalehti.fi",[36,37]],["mediuutiset.fi",[36,37]],["mikrobitti.fi",[36,37]],["talouselama.fi",[36,37]],["tekniikkatalous.fi",[36,37]],["tivi.fi",[36,37]],["uusisuomi.fi",[36,37]],["asialadies.de",39],["avladies.de",39],["badeladies.de",39],["behaarteladies.de",39],["bizarrladies.de",39],["busenladies.de",39],["deutscheladies.de",39],["devoteladies.de",39],["dominanteladies.de",39],["erfahreneladies.de",39],["escorts24.de",39],["exklusivladies.de",39],["fkk24.de",39],["grosseladies.de",39],["hobbyladies.de",39],["jungeladies.de",39],["kollegin.de",39],["kussladies.de",39],["ladies.de",39],["latinaladies.de",39],["massierendeladies.de",39],["mollyladies.de",39],["nsladies.de",39],["nymphomaneladies.de",39],["orientladies.de",39],["osteuropaladies.de",39],["piercingladies.de",39],["rasierteladies.de",39],["schokoladies.de",39],["tattooladies.de",39],["tsladies.de",39],["zaertlicheladies.de",39],["zierlicheladies.de",39],["1a-finanzmarkt.de",40],["1a-immobilienmarkt.de",40],["1a-reisemarkt.de",40],["1a-singleboerse.de",40],["1a-stellenmarkt.de",40],["gameinformer.com",41],["christianconcern.com",42],["aamulehti.fi",43],["etlehti.fi",43],["gloria.fi",43],["hs.fi",43],["hyvaterveys.fi",43],["is.fi",43],["jamsanseutu.fi",43],["janakkalansanomat.fi",43],["kankaanpaanseutu.fi",43],["kmvlehti.fi",43],["kodinkuvalehti.fi",43],["merikarvialehti.fi",43],["nokianuutiset.fi",43],["rannikkoseutu.fi",43],["satakunnankansa.fi",43],["soppa365.fi",43],["suurkeuruu.fi",43],["sydansatakunta.fi",43],["tyrvaansanomat.fi",43],["valkeakoskensanomat.fi",43],["vauva.fi",43],["eurogamer.de",44],["vogue.co.uk",45],["wired.com",45],["jekabpils.lv",46],["aachener-bank.de",47],["bernhauser-bank.de",47],["bodenseebank.de",47],["bremischevb.de",47],["cvw-privatbank-ag.de",47],["dervolksbanker.de",47],["gladbacher-bank.de",47],["meine-rvb.de",47],["meinebank.de",47],["muenchner-bank.de",47],["nordthueringer-volksbank.de",47],["owl-immobilien.de",47],["raiba-gr.de",47],["raiba-ndwa.de",47],["raiba-westhausen.de",47],["rb-berghuelen.de",47],["rb-denzlingen-sexau.de",47],["rb-eching.de",47],["rb-hardt-bruhrain.de",47],["rb-oberaudorf.de",47],["rb-sondelfingen.de",47],["rv-banken.de",47],["saechsischer-gewinnsparverein.de",47],["skbwitten.de",47],["sparda-bank-hamburg.de",47],["sparda-sw.de",47],["vb-lauterecken.de",47],["vb-mittelhessen.de",47],["vb-rb.de",47],["vbleos.de",47],["vbsuedemsland.de",47],["voba-deisslingen.de",47],["voba-moeckmuehl.de",47],["volksbank-aktiv.de",47],["volksbank-backnang.de",47],["volksbank-daaden.de",47],["volksbank-dh.de",47],["volksbank-freiburg.de",47],["volksbank-international.de",47],["volksbank-kirnau.de",47],["volksbank-mittleres-erzgebirge.de",47],["volksbank-remseck.de",47],["volksbank-thueringen-mitte.de",47],["volksbank-trossingen.de",47],["volksbankeg.de",47],["vr-nopf.cz",47],["vrb-spangenberg.de",47],["vrbankeg.de",47],["vrbankimmobilien.de",47],["vvr-bank.de",47],["vvrbank-krp.de",47],["news.sky.com",49],["lippu.fi",[50,51,52]],["starcart.com",53],["sydan.fi",54],["rfi.fr",56],["cmore.fi",57],["europe1.fr",58],["teket.jp",59],["etsy.com",60],["technopat.net",[61,62]],["justeat.it",[63,64,65]],["pyszne.pl",[63,64,65]],["takeaway.com",[63,64,65]],["thuisbezorgd.nl",[63,64,65]],["telekom.com",66],["hemmersbach.com",67],["eurogamer.nl",[68,69]],["eurogamer.es",[68,69]],["eurogamer.cz",[68,69]],["eurogamer.net",[68,69]],["eurogamer.pl",[68,69]],["eurogamer.pt",[68,69]],["rockpapershotgun.com",[68,69]],["vg247.com",[68,69]],["bt.dk",72],["dlalakierni.pl",[73,74,75]],["officiallondontheatre.com",76],["constantin.film",77],["twitter.com",78],["mundodeportivo.com",[79,80]],["nordax.com",81],["youtube.com",82],["empik.com",[83,84,85,86]],["ubs.com",87],["vicko.gr",88],["3bmeteo.com",89]]);

const entitiesMap = new Map([["www.google",0],["chrono24",15],["just-eat",[63,64,65]],["lieferando",[63,64,65]]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedSetCookie(
    name = '',
    value = '',
    offsetExpiresSec = '',
    path = ''
) {
    if ( name === '' ) { return; }

    const time = new Date();

    if ( value === '$now$' ) {
        value = Date.now();
    } else if ( value === '$currentDate$' ) {
        value = time.toUTCString();
    }

    let expires = '';
    if ( offsetExpiresSec !== '' ) {
        if ( offsetExpiresSec === '1day' ) {
            time.setDate(time.getDate() + 1);
        } else if ( offsetExpiresSec === '1year' ) {
            time.setFullYear(time.getFullYear() + 1);
        } else {
            if ( /^\d+$/.test(offsetExpiresSec) === false ) { return; }
            time.setSeconds(time.getSeconds() + parseInt(offsetExpiresSec, 10));
        }
        expires = time.toUTCString();
    }

    setCookieHelper(
        name,
        value,
        expires,
        path,
        safeSelf().getExtraArgs(Array.from(arguments), 4)
    );
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
            }
            catch(ex) {
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function setCookieHelper(
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    const cookieExists = (name, value) => {
        return document.cookie.split(/\s*;\s*/).some(s => {
            const pos = s.indexOf('=');
            if ( pos === -1 ) { return false; }
            if ( s.slice(0, pos) !== name ) { return false; }
            if ( s.slice(pos+1) !== value ) { return false; }
            return true;
        });
    };

    if ( options.reload && cookieExists(name, value) ) { return; }

    const cookieParts = [ name, '=', value ];
    if ( expires !== '' ) {
        cookieParts.push('; expires=', expires);
    }

    if ( path === '' ) { path = '/'; }
    else if ( path === 'none' ) { path = ''; }
    if ( path !== '' && path !== '/' ) { return; }
    if ( path === '/' ) {
        cookieParts.push('; path=/');
    }
    document.cookie = cookieParts.join('');

    if ( options.reload && cookieExists(name, value) ) {
        window.location.reload();
    }
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
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
    try { trustedSetCookie(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
    return uBOL_trustedSetCookie();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_trustedSetCookie = cloneInto([
            [ '(', uBOL_trustedSetCookie.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_trustedSetCookie);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_trustedSetCookie;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
