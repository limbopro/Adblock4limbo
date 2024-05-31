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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["datr","__GMZCgwVF5BbyvAtfJojQwg","1year","","reload","1"],["ig_did","0C826C21-17C3-444A-ABB7-EBABD37214D7","1year","","reload","1"],["euconsent-v2","CPt3fQAPt3fQACNAFAENDLCgAAAAAAAAACiQAAAOCgDAB-AIsAZ8A6QDBAHBAAAA.YAAAAAAAAAAA","1year"],["tracking-opt-in-status","rejected","1year"],["addtl_consent","1~","1year"],["dm-euconsent-v2","CPt6yMAPt6yMABpAGAENDECgAAAAAH_AAAqIAAAS3AJMNW4gC7MocGbQMIoEQIwrCQigUAEFAMLRAQAODgp2VgE-sIkAKAUARgRAhwBRkQCAAASAJCIAJAiwQAAAiAQAAgAQCIQAMDAIKACwEAgABAdAxRCgAECQgSIiIhTAgKgSCAlsqEEoLpDTCAKssAKARGwUACIJARWAAICwcAwRICViwQJMQbRAAMAKAUSoVqKT00BCxmQAAAAA","1year"],["fig_save_consent","iTTPgpSWqAGGcd3vV88zNDbHsABxE1hB","1year"],["euconsent-v2","CPubvkAPubvkAAHABBENDMCgAAAAAAAAAB5YAAAAAAAA.YAAAAAAAAAAA","1year"],["wt_tandc","20190527%3A1"],["__wtcm","CP03uwAP03uwAPnACAENAxCAAEIAEEJAEAABGbwFgABAAMABlAEQARQAnABlADcAH4ATABCACLAEcAKQAVkAuoBpgDiAH8AXmAwQBkkjKSM3AAAAAAAA.JGbwFgABAAMABlAEQARQAnABlADcAH4ATABCACLAEcAKQAVkAuoBpgDiAH8AXmAwQBkkjKSM3AAA"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0008%3A0","1year"],["_scw_rgpd_hash","408362395"],["PUR_SUBSCRIPTION","PREMIUM"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false}","1year"],["cb","1_1970_01_01_2-3","1year","","reload","1"],["datr","mWTaZBxAoW8lFl0v3EpECGYi","1year","","reload","1"],["COOKIES_CONSENT","essential"],["myscript","{%22acceptance%22:true%2C%22analytics%22:false}"],["tm_cookie_setting","Analytics","","","reload","1"],["BCP","AD=0&AL=0&SM=0"],["cookies","{\"system\":1,\"target\":0}"],["CookieControl","{\"interactedWith\":true,\"acceptedCategories\":[\"essentials\"]}"],["cookie_preference","functional"],["trackingPermissionConsentsValue","%7B%22cookies_analytics%22%3Afalse%2C%22cookies_personalization%22%3Afalse%2C%22cookies_advertisement%22%3Afalse%7D"],["euconsent-v2","CPzEX8APzEX8ADtACBESAUEgAAAAAAAAAAiQAAAAAAAA"],["euconsent-v2-addtl","%20"],["pfUserCookPolicy","12562660:1"],["viucom-cookie-accept","[\"technical_necessary\"]"],["BN.User.CookieConsent","CAE%3D"],["CookieConsent","{stamp:%27BvqlZ34xqOpzSOaxY1VgwOy5CZ1lfC4Xs2JNiDqz9M4rNuyyAY56Jg==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1697932000537}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:2}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:3}","1year"],["CookieConsent","{stamp:%27fbbiPQWa8SRQm47Ge8hRVOAPAgw2jXlG8o/+hp1euVVi1qtFQj1O3w==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:4}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:5}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:6}","1year"],["SK.Website.ConsentManager","W1siYmFzZSIsdHJ1ZV0sWyJnb29nbGVhbmFseXRpY3MiLGZhbHNlXSxbIm1ldGFwaXhlbCIsZmFsc2VdXQ=="],["consent","%7B%22level%22%3A%5B%22necessary%22%5D%2C%22revision%22%3A0%2C%22data%22%3A%7B%22id%22%3A%22DarYF7gx7v%22%7D%2C%22rfc_cookie%22%3Atrue%7D"],["CookieConsents","{\"StrictlyNecessary\":true,\"Analytical\":false,\"Performance\":false,\"AdvertisingAndTargeting\":false,\"timestamp\":\"\"}"],["kmt_rd","no-consent","","","reload","1"],["cr_consent","2|tracking=false+analytics=false+marketing=false","","","reload","1"],["hbl_cookie_prefs_v1","[%22Essential%22]"],["mmc-cookie-consent","{\"Id\":\"c2457eddbecc20cbab3869374900e864\",\"CategoryID\":4}","1year"],["fixami.app_state","eyJzdGF0ZSI6eyJpc1RheEluY2x1ZGVkIjp0cnVlLCJpc0ZpcnN0VmlzaXQiOnRydWUsImlzQ3VzdG9tZXJTZXJ2aWNlTW9kYWxPcGVuIjpmYWxzZSwiYWNjZXB0ZWRDb29raWVzIjoiMCIsImhhc0FjY2VwdGVkQ29va2llcyI6dHJ1ZSwiaGFzQWNjZXB0ZWRNYXJrZXRpbmdDb29raWVzIjp0cnVlLCJoYXNBY2NlcHRlZFN0YXRpc3RpY3NDb29raWVzIjp0cnVlfSwidmVyc2lvbiI6MH0="],["website_cookies_bar","{\"required\": true, \"optional\": false}"],["FCCDCF","%5Bnull%2Cnull%2Cnull%2C%5B%22CP2G1QAP2G1QAEsACDENAdEgAAAAAAAAAAwIAAAGfgAgGfAA%22%2C%221~%22%2C%22EA7F77A0-0F26-47A6-A8A4-74D65175A664%22%5D%2Cnull%2Cnull%2C%5B%5D%5D"],["Arena Cookie Consent","{\"categories\":[\"necessary\"],\"level\":[\"necessary\"],\"revision\":0,\"data\":null,\"rfc_cookie\":false,\"consent_date\":\"1970-00-00T00:00:00.000Z\",\"consent_uuid\":\"00000000-0000-0000-0000-000000000000\",\"last_consent_update\":\"1970-01-01T00:00:00.000Z\"}","1year"],["euconsent-v2","CP2KIMAP2KIMAAHABBENAcEgAAAAAAAAAAiQAAAAAAEEoAMAARBqDQAYAAiDUKgAwABEGopABgACINQ6ADAAEQaiEAGAAIg1BIAMAARBqGQAYAAiDUAA.YAAAAAAAAAAA","1year","","domain","softonic.com"],["swapcard-cookie-consent","%7B%22accepted%22%3Afalse%7D"],["cookies-consent","agree"],["cookie_consent","100","1year"],["consent_setting","analytics%3A0%7Cfunctional%3A1%7Cmarketing%3A0","","","reload","1"],["user_cookie_consent","essential"],["cookieConsent","functional=1&analytics=0&marketing=0","","","reload","1"],["euconsent-v2","CP20-YAP20-YAAKAyBENAfEgAAAAAAAAAAwIAAAI8gBAGfAR4AAA.YAAAAAAAAAAA","1year"],["consentUUID","cefc5c9f-0e4c-4d6f-ad00-41a1e49409ed_27_29"],["uxcon","enforce=false&p13n=false&ads=false","","","domain","walmart.ca"],["OptanonAlertBoxClosed","$currentDate$","1year"],["cookie_consent","necessary%3A1%2Cstatistics%3A0%2Cmarketing%3A0"],["FTConsent","marketingBypost%3Aoff%2CmarketingByemail%3Aoff%2CmarketingByphonecall%3Aoff%2CmarketingByfax%3Aoff%2CmarketingBysms%3Aoff%2CenhancementBypost%3Aoff%2CenhancementByemail%3Aoff%2CenhancementByphonecall%3Aoff%2CenhancementByfax%3Aoff%2CenhancementBysms%3Aoff%2CbehaviouraladsOnsite%3Aoff%2CdemographicadsOnsite%3Aoff%2CrecommendedcontentOnsite%3Aon%2CprogrammaticadsOnsite%3Aoff%2CcookiesUseraccept%3Aoff%2CcookiesOnsite%3Aoff%2CmembergetmemberByemail%3Aoff%2CpermutiveadsOnsite%3Aoff%2CpersonalisedmarketingOnsite%3Aoff","","","domain","ft.com"],["cookie_preferences","{%22marketing%22:false%2C%22analytics%22:false}"],["gsbbanner","closed"],["consent","%7B%22functional%22%3A%7B%22consent%22%3Atrue%7D%2C%22analytical%22%3A%7B%22consent%22%3Afalse%7D%2C%22personalization%22%3A%7B%22consent%22%3Afalse%7D%2C%22geolocation%22%3A%7B%22consent%22%3Afalse%7D%2C%22ads%22%3A%7B%22consent%22%3Afalse%7D%7D"],["server_consent","%7B%22functional%22%3A%7B%22consent%22%3Atrue%7D%2C%22analytical%22%3A%7B%22consent%22%3Afalse%7D%2C%22personalization%22%3A%7B%22consent%22%3Afalse%7D%2C%22geolocation%22%3A%7B%22consent%22%3Afalse%7D%2C%22ads%22%3A%7B%22consent%22%3Afalse%7D%7D"],["server_addtl_consent","1~"],["N0_CONSENT","essential"],["consents","essential"],["ho_cookie_consent","essential"],["LEGO_COOKIE_SETTINGS","{\"preferences\":[{\"key\":\"necessary\",\"value\":true},{\"key\":\"analytics\",\"value\":false},{\"key\":\"legomarketing\",\"value\":false},{\"key\":\"thirdparty\",\"value\":false}]}"],["cookie_preferences","{%22performance%22:false%2C%22marketing%22:false%2C%22necessary%22:true}"],["veriff_cookie_consent","%7B%22performance%22%3Afalse%2C%22functionality%22%3Afalse%2C%22targeting%22%3Afalse%7D"],["USE_COOKIE_CONSENT_STATE","{%22necessary%22:true}"],["consentCookie","{\"arena-functional\":true,\"sentry\":false,\"cloudflare\":true,\"google-tag-manager\":false,\"google-analytics\":false,\"facebook-ads\":false,\"google-ads\":false,\"bing-ads\":false,\"arena-advertising\":false}","","","domain","arena.pl"],["cookieConsent","technical=true&analytics=false&advertising=false"],["acceptTracking","{\"technical\":true,\"analytics\":false,\"advertising\":false}"],["gdprConsent","%7B%22adv%22%3Afalse%2C%22func%22%3Afalse%2C%22tech%22%3Afalse%7D","","","domain","deal.by"],["cookie_preference","functional","","","domain","zwenkwielen.net"],["__consent","%5B%22required%22%5D"],["sncc","P%3D15%3AV%3D33.0.0%26C%3DC01%26D%3Dtrue","","","domain","biomedcentral.com"],["bolConsentChoices","source#OFC|version#6|int-tran#false|ext-tran#false|int-beh#false|ext-beh#false","","","domain","www.bol.com","reload","1"],["SOCS","CAISNQgQEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjQwNTE0LjA2X3AwGgJmaSADGgYIgOu0sgY"],["_EVAcookieaccept","Y","1year"],["_EVAGDPRfunctional","Y","1year"],["OptanonConsent","groups=C0004%3A0%2CC0003%3A1%2CC0002%3A0%2CC0001%3A1%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPt6LrpPt6LrpAcABBENDKCgAAAAAAAAAAYgGBtX_T5eb2vj-3ZcN_tkaYwP55y3o2wzhhaIke8NwIeH7BoGJ2MwvBV4JiACGBAkkiKBAQVlHGBcCQAAgIgRiSKMYk2MjzNKJLJAilMbO0NYCD9mnkHT2ZCY70-uO__zvneAAAAYJABAXmKgAgLzGQAQF5joAIC8yUAEBeZSACAvMAAA.YAAAAAAAAAAA","1year","","reload","1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A1%2CBG57%3A0%2CBG58%3A0%2CBG59%3A0","1year"],["gravitoData","{\"NonTCFVendors\":[{\"id\":1,\"name\":\"Facebook\",\"consent\":true},{\"id\":3,\"name\":\"Google\",\"consent\":true},{\"id\":9,\"name\":\"Twitter\",\"consent\":true},{\"id\":10,\"name\":\"Wordpress\",\"consent\":true},{\"id\":15,\"name\":\"Linkedin\",\"consent\":true},{\"id\":19,\"name\":\"Vimeo\",\"consent\":true},{\"id\":27,\"name\":\"Apple\",\"consent\":true}]}","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0%2CC0005%3A0","1year"],["ladies-cookies-overlay","%7B%22cookie-category-essential%22%3Atrue%2C%22cookie-category-stats%22%3Afalse%2C%22cookie-category-map_services%22%3Atrue%7D","","","reload","1"],["opt_out","analyse,werbe"],["OptanonConsent","groups=C0001%3A1%2CC0003%3A1%2CSPD_BG%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1","","","reload","1"],["STYXKEY_your_privacy_settings","%7B%22strict%22%3A%221%22%2C%22thirdparty%22%3A%221%22%2C%22advanced%22%3A%220%22%7D","1year","","reload","1"],["OptanonConsent","groups=C0001%3A1%2CC0009%3A0%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["allowCookies","{\"uvc\":true,\"__cfduid\":true}"],["cookieConsent","%5B%7B%22name%22%3A%22essenziell%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22komfort%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22marketing%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22statistik%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22speichern%22%2C%22value%22%3A%22on%22%7D%5D","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1","1year"],["consents",":4:6:7:8:9:10:11:12:13:19:"],["__cmpcpc","__1_2__"],["__cmpcvc","__c24599_s94_c24102_s40_s1052_s65_c24103_s23_c9953_c24290_c24098_s26_s2612_s135_s1104_s1409_s905_s24_c24202_c22143_c21373_s77_s30_U__"],["__cmpconsentx40263","BPuKNGaPuKNGaAfEHBFIABAAAAA_mABAfyA"],["consent-levels","1-1_2-1_3-0_4-0","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A0%2CBG40%3A0%2CBG41%3A0%2CBG42%3A0","1year"],["euconsent-v2","CPuy0IAPuy0IAAHABBENDNCgAAAAAAAAAAAAJNFB_G5cSWNhOHJvY9tUaQ0HwFR4o6AgDgCZA4wBCRIAMIwF0GAAIEBAIAgAAAAEAAJAAAAEAAHAAAAAAIEBASCIAEAAIBAAICAAAAABQgAACABJGwAAEAAAAEQEABQAgAIAQBuAQEAAAAAAAAAAAAgBAABBAAAAAAAgAAAIAAAAAAgAEAAAAAAAAAAAABAAEAAAAAEAAABIaADAAEExRUAGAAIJihIAMAAQTFEQAYAAgmKMgAwABBMUdABgACCYpCADAAEExSUAGAAIJilIAMAAQTFA.YAAAAAAAAAAA"],["p","eyJnZHByX3RwIjoyLCJnZHByX3AiOjF9","1year","","reload","1"],["cmplz_consented_services","{\"youtube\":true}"],["xf_consent","%5B%22_third_party%22%5D","","","reload","1"],["cookieConsent","functional","1year","","reload","1"],["je-cookieConsent","necessary","1year"],["customerCookieConsent","%5B%7B%22consentTypeId%22%3A103%2C%22consentTypeName%22%3A%22necessary%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A104%2C%22consentTypeName%22%3A%22functional%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A105%2C%22consentTypeName%22%3A%22analytical%22%2C%22isAccepted%22%3Afalse%7D%2C%7B%22consentTypeId%22%3A106%2C%22consentTypeName%22%3A%22personalized%22%2C%22isAccepted%22%3Afalse%7D%5D","1year"],["cookie-optin","{%22version%22:1%2C%22settings%22:{%22required%22:true%2C%22analytical%22:false%2C%22marketing%22:false%2C%22thirdparty%22:true}}","1year"],["cookiefirst-consent","%7B%22cookiefirst%22%3Atrue%2C%22google_analytics%22%3Atrue%2C%22google_tag_manager%22%3Atrue%2C%22linkedin_ads%22%3Afalse%2C%22hubspot%22%3Atrue%2C%22twitter%22%3Afalse%2C%22active-campaign%22%3Atrue%2C%22email-marketing%22%3Atrue%2C%22bing_ads%22%3Afalse%2C%22type%22%3A%22granular%22%7D"],["consentUUID","f2fed351-3e4d-4e37-a3d6-bf942c6146e1_25"],["euconsent-v2","CP0C_wAP0C_wAAGABBENDbCgAP_AAAAAAApAJLNV_H__bX9r8X7_6ft0eY1f9_jz7uQxBhfJk-4F3LvW_JwX32E7NF36tq4KmRoEu1JBIUNlHIHUDUmwaogVrzHsakWcpTNKJ6BkkFMRU2dYCF5um4tjeQKY5_p_d3f52T-9_dv839zz38VHv3cZX--12PDdU5-9Dfn9fRfb89IL9_78v4v8_t_rk2_eT13_tetr_DAAAAaEgogAIAAXABQAFQAOQAeACAAGAAMoAaABqADwAIgATAAngBVADMAG8APQAfgBCQCGAIkARwAlgBNAClAGAAMOAZQBlgDZgHcAd8A9gD4gH2AfsA_wEAAIpARcBGACNAElAJSAUGAp4CrgFzAMUAaIA2gBuADiAIdASIAnYBQ4CjwFIgLYAXIAu8BgwDDYGRgZIAycBlwDOQGfANIgauBrIDbwG6gOCgcmBygDlwHjgPaAfSBBgCEMELQQvAhyBD0CH4EcQI-gR_AkUBJAIACAJoAtwNAEAKeAh0BnwDlBEAQAp4CHQGfAOUFQAwGfAOUAheMgBgM-AcoBC8hA4AAWABQAFwAMQAagBMACmAFUALgAYgA3gB6AEcAKUAYAAyoB3AHeAP8AigBJQCUgFBAKfAVEBVwC5gGKANoAc4A6gCVAFNAKsAWKAsoBaIC4AFyAMjAZOAzkBnwDRAGqgOAAcoA8cB9IEGAIUAQtAheBDoCHoEcQJFASQHQaQAFwAUABUADkAHwAgABdADAAMoAaABqADwAIgATAAngBVgC4ALoAYgAzABvAD0AH6AQwBEgCWAE0AKMAUoAwABhgDKAGiANkAd4A9oB9gH6AP8AikBFgEYAI6ASUAlIBQQCnwFRAVcAsQBc4C8gL0AYoA2gBuADiAHOAOoAfYBDoCLwEiAJUATIAnYBQ4CjwFNAKsAWKAsoBbAC3QFwALkAXaAu8BfQDBgGGgMegZGBkgDJwGVAMsAZcAzMBnIDPgGiANIAarA1cDWAG3gN1AcXA5MDlAHLgPHAe0A-kB9YEAQIMAQtAhfBDkEOgIegRxAjsBH0CP4EigJIDgAIC3CUDQABAACwAKAAcAA_ADAAMQAeABEACYAFUALgAYoBDAESAI4AUYAwABsgDvAH4AU-AqICrgFzAMUAdQBDoCJgEXgJEAUeAsUBZQC2IGRgZIAycBnIDPgGkANYAbeA4AB7QD6QIAgQPAgwBCECF4EPQI4gSKAkgBJUkABAW4UgpAALgAoACoAHIAPgBBADAAMYAaABqADwAIgATAAngBSACqAGIAMwAfoBDAESAKMAUoAwABlADRAGyAO-AfgB-gEWAIwAR0AkoBKQCgwFRAVcAuYBeQDFAG0ANwAdQA9oB9gEOgImAReAkQBOwChwFWALFAWwAuABcgC7QF9AMNgZGBkgDJwGWAMuAZyAz4BpEDWANZAbeA3UBwUDkwOUAcuA8UB44D2gH0gQYAhCBC0CF4EM4Icgh0BHECOwEfQI_gSKAkgUAAgLc.YAAAAAAAAAAA","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPwbUmgPwbUmgAcABBENDSCgAAAAAH_AAChQJnNf_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdl-8N3f_X_L8X52M5vF36tqoKuR4ku3bBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PEmlMbM2dYGH9_n9_z-ZKY7___f__z_v-v___9____7-3f3__5__--__e_V_-9zfn9_____9vP___9v-_9_3________3_r9_7_D_-f_87_XWxBQAJMNS4gC7IkZCbaMIoEQIwrCQqgUAFEAkLRAYQurgp2VwE-sBkAIEUATwQAhgBRkACAAASAJCIAJAjgQCAQCAQAAgAVCAQAMbAAPAC0EAgAFAdCxTigCUCwgyISIhTAhKkSCgnsqEEoP1BXCEMssCKDR_xUICNZAxWBEJCxehwBICXiSQPdUb4ACEAKAUUoViKT8wBDgmbLVXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAA.YAAAD_gAAAAA","1year"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:true%2Cmarketing:true}","1year"],["AtomStore[COOKIES_ACCEPTED]","1","1year","","reload","1"],["AtomStore[FUNCTIONAL_COOKIES_ACCEPTED]","1","1year"],["AtomStore[MARKETING_COOKIES_ACCEPTED]","0","1year"],["solt_cookie_preferences","functional%2Cperformance","1year"],["cookie-layer-settings","{\"id\":\"b2575cbc6f69c6ff02140366ef7473e9\",\"options\":[{\"analytics-is-enabled\":false},{\"komfort-is-enabled\":false},{\"personalisierung-is-enabled\":false},{\"external-data-is-enabled\":true},{\"cf-ga-opt-in\":false},{\"cf-fb-opt-in\":false},{\"cf-go-opt-in\":false},{\"cf-sn-opt-in\":false},{\"cf-am-opt-in\":false},{\"cf-pi-opt-in\":false},{\"cf-tw-opt-in\":false},{\"cf-li-opt-in\":false},{\"cf-te-opt-in\":false},{\"cf-ti-opt-in\":false},{\"cf-ttd-opt-in\":false},{\"external-data-youtube-is-enabled\":true},{\"external-data-spotify-is-enabled\":true},{\"external-data-googlemaps-is-enabled\":true},{\"external-data-universal-is-enabled\":true}]}","1year"],["d_prefs","MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw"],["didomi_token","eyJ1c2VyX2lkIjoiMThhNmQyZGEtOGNmOC02YTE0LWI3OWQtNzViOGU4ZjA2YmYyIiwiY3JlYXRlZCI6IjIwMjMtMDktMDdUMDE6MDc6MTQuNTIwWiIsInVwZGF0ZWQiOiIyMDIzLTA5LTA3VDAxOjA3OjE0LjUyMFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpwaWFuby1ic1hwclg4dyIsImM6bHVjaWRob2xkLXlmdGJXVGY3IiwiYzpzYWxlc2ZvcmNlLUI0WEI1UU5aIiwiYzpsaXZlZnlyZS00Y2JOV1lFeiIsImM6eW91dHViZS1EV3RqQ1VLYiIsImM6YWNjZW5nYWdlLUVXRUx4MzRnIiwiYzpjaGFydGJlYXQtaHhLaEZiQXciLCJjOmFtYXpvbmFkcy05YzVUTkdhaiIsImM6dHdpdHRlcndpLXdVbUJubkt5IiwiYzpmYWNlYm9va3ctMmthN1Z3UTgiLCJjOmdvb2dsZW9wdC1RaGlBZG1WYSIsImM6Z2djcm9sbHVwLW5OSGVpMmFXIiwiYzpmYWNlYm9va2EtZnJVOU01SlkiLCJjOmdvb2dsZWFuYS1HMmJzRUp5VCIsImM6Z29vZ2xlYXVkLUxEalZZa2VhIiwiYzppbnN0YWdyYW0tdFdtSmdKcHEiLCJjOm5ldHF1ZXN0LU4yblc0ZnBHIiwiYzpwcm9jdGVyYW4tSzROdzh4TUMiLCJjOmNvbXNjb3JlLWpVRmM5aWNZIiwiYzpzcG90aW0tM0ZLSDYyeUMiLCJjOnl1c3AtejhOaTQ0Wk0iLCJjOndlbWFzc21lZC1QR1o2M0Z4WSIsImM6ZXZvbG9rLWl6S3o3QVlWIiwiYzpnb29nbGVmaXItSDhrY2lGSkciLCJjOmxhbGlnYS1ZNllRMjJSUiIsImM6YWRzdml1LVZUMjZtM1FiIl19LCJwdXJwb3NlcyI6eyJkaXNhYmxlZCI6WyJnZW9sb2NhdGlvbl9kYXRhIiwiY29tcGFydGlyLWRwSGdKRUphIiwia0VlRHNMQ3AiLCJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIl19LCJ2ZW5kb3JzX2xpIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIl19LCJ2ZXJzaW9uIjoyLCJhYyI6IkRIYUNJQUVJQUl3QVdRQXVnQnNBRDBBSlVBWWdBOFFCLWdFM0FLTUFZb0F6NEI0Z0R6UUh1QWU4QkRnQ1N3R1lnTTFBZXFCQWtDRFlFUkFJamdSSkFpbUJHY0NVUUVzUUphZ1M3QW40QlJVQ3FvRmh3TFVnWWlBem1CcWNEaUFIS0FPbkFkV0E3Q0I3RURfd0lHQVJtZ2tNQkwyQ2M0RTd3S0NBVUhncFNCVHFDczhGb0FMUmdXeUF1ZEJlU0Mtb0dIUU1iZ1k3QUFBQS5ESGFDSUFFSUFJd0FXUUF1Z0JzQUQwQUpVQVlnQThRQi1nRTNBS01BWW9BejRCNGdEelFIdUFlOEJEZ0NTd0dZZ00xQWVxQkFrQ0RZRVJBSWpnUkpBaW1CR2NDVVFFc1FKYWdTN0FuNEJSVUNxb0Zod0xVZ1lpQXptQnFjRGlBSEtBT25BZFdBN0NCN0VEX3dJR0FSbWdrTUJMMkNjNEU3d0tDQVVIZ3BTQlRxQ3M4Rm9BTFJnV3lBdWRCZVNDLW9HSFFNYmdZN0FBQUEifQ=="],["euconsent-v2","CPxurkAPxurkAAHABBENDVCgAP8AAE4AAAiQIkNf_X_fb2vj-_p99_t0eY1P9_6_t6wzjheNk-8NyZ_X_J4Xp2M6rB34pqIKuR4kunLBIQdlHGHcTUgg4IkFoSPsYk2MizJKJ7JEmlMbE2dYGG9vn8TT-ZKY70__f__zvn-r___97oAAhCAABAAAAAgAAIAAAgAIAAAAAAAAAAAAAAAAAAAAAAAADA4tAsy0bqaFsHT0Lpo4igRGjCuJWoBQGUQCwtkBhmTPCnZHAR-wnUAAxAADBByGAFEaAICCIIAkKgIkEOBAqJAIdAACgAUIBAFRIgEoiLAQCAA0B8PAKKAJSLGDKhIidcCMKxIPu-QAAEAQAAIAAQAAAABAJCgAYAAiCgGgAwABEFARABgACIKAqADAAEQUBkAGAAIgoDwAMAARBQIQAYAAiCgTAAwABEFAqABgACIKAAAA.f-AACcAAAAAA"],["cookie_consent","%7B%22allowEssentials%22%3Atrue%2C%22allowFunctional%22%3Atrue%2C%22allowAnalytics%22%3Afalse%2C%22allowMarketing%22%3Afalse%7D"],["SOCS","CAISNQgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMwODI5LjA3X3AxGgJlbiADGgYIgJnPpwY","","","reload","1","domain","youtube.com"],["cad","$now$"],["cc","2.4"],["cp",".16.21."],["cva","W2.0"],["ubs_cookie_settings_2.0.4","0-2-1"],["ConsentChecked","{\"userHasSetCookies\":true,\"functionalityCookies\":true,\"statisticCookies\":false,\"marketingCookies\":false}","","","reload","1"],["allow_cookies","{\"essential\":\"1\",\"functional\":{\"all\":\"1\"},\"marketing\":{\"all\":\"0\"}}"],["euconsent-v2","CPywmUAPywmUAAHABBENDYCsAP_AAH_AAAAAJrNf_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdF-8N3f_X_L8X52M5vF36tqoKuR4ku3bBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PkmlMbM2dYGH9_n9_z-ZKY7___f__z_v-v___9____7-3f3__5__--__e_V_-9zfn9_____9vP___9v-_9_3________3_r9_7_D_-f_87_XW-8E1ACTDQuIAuwJGQm2jCKBACMKwkKoFABRAJC0QGELq4KdlcBPrARACBFAAcEAIYAUZAAgAAAgCQiACQI4EAgEAgEAAIAFQgEABGwACgAsBAIABQHQsU4oAlAsIMiMiIUwIQpEgoJ7KhBKD9QVwhDLLACg0f8VCAgUAMVgRCQsXocASAlwkkC3VG-AAhACgFFKFYgk9MAA4JGy1B4IAA.f_gAD_gAAAAA"],["didomi_token","eyJ1c2VyX2lkIjoiMThhZDY1NzMtZGY4YS02YzJhLWJkZmUtOGI5ZjkwMDU5MmQwIiwiY3JlYXRlZCI6IjIwMjMtMDktMjdUMTE6MTI6MzcuNzk3WiIsInVwZGF0ZWQiOiIyMDIzLTA5LTI3VDExOjEyOjM3Ljc5N1oiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpkbXB3ZWJlZGktblRCSEFrNDQiLCJjOmFtYXpvbnRhbS1lWTRpTjROViIsImM6YmF0Y2gtYkp0R3R0eEwiLCJjOndhcm5lcmJyby1BUEpXeUFHUCIsImM6ZmFjZWJvb2std0RpR25KV1YiLCJjOnNuYXBjaGF0LWhXMnJNSmZZIiwiYzp0aWt0b2stV2J5cEEzWmQiLCJjOnR3aXR0ZXIteGJERXhKUGsiLCJjOmdvb2dsZWFuYS1YTXFhZ2F3YSJdfSwicHVycG9zZXMiOnsiZW5hYmxlZCI6WyJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIiwiZ2VvbG9jYXRpb25fZGF0YSJdfSwidmVuZG9yc19saSI6eyJlbmFibGVkIjpbImdvb2dsZSJdfSwidmVyc2lvbiI6Mn0="],["_iub_cs-30166201","%7B%22timestamp%22%3A%222023-09-28T08%3A20%3A53.130Z%22%2C%22version%22%3A%221.51.0%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%222%22%3Afalse%2C%223%22%3Atrue%2C%224%22%3Afalse%2C%225%22%3Afalse%7D%2C%22id%22%3A30166201%2C%22cons%22%3A%7B%22rand%22%3A%22e747e3%22%7D%7D"],["didomi_token","eyJ1c2VyX2lkIjoiMThhZWVmZTgtNGJjMS02NjhmLWE5YTgtNmNhM2VmMmQ0NzVkIiwiY3JlYXRlZCI6IjIwMjMtMTAtMDJUMDY6MDY6NDQuODA0WiIsInVwZGF0ZWQiOiIyMDIzLTEwLTAyVDA2OjA2OjQ0LjgwNFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiYzphYi10YXN0eSIsImM6YWNhc3QtQ2M3MmNoWHAiLCJjOmFjcG0tSkIzNEJicmQiLCJjOmFwbG96ZS14NDdKZlhVSyIsImM6YXBwc2ZseWVyLXdETmJrQ2I2IiwiYzphdGludGVybmUtY1dRS0hlSloiLCJjOmJlb3AtdEdSV0hIYUYiLCJjOmJpbmctYWRzIiwiYzpjaGFydGJlYXQiLCJjOmNsaWNraW50ZXh0IiwiYzpkYWlseW1vdGlvLWhyRldwVEtDIiwiYzpzcXVhZGF0YS1lYXN5ZG1wIiwiYzpkeW5hbWljbWEtNzhlUmpLY1YiLCJjOmZhY2Vib29rLXRrQWpXM2k2IiwiYzpmbG91cmlzaC14bnhZTVo2TiIsImM6Z2VuaWFsbHktWjhiUmhxRW4iLCJnb29nbGUiLCJjOmdvb2dsZW1hcC1kRDdDWkNKZyIsImM6aW5mb2dyYW0tcXFoZDNoZk0iLCJjOmluc3RhZ3JhbS1MWmthNlI0NCIsImM6aW5zdGFncmFtIiwiYzpqdXh0YXBvc2UtTVpnSEZmWXgiLCJjOm1hcHM0bmV3cy0zWDlWUVc3NiIsImM6bWljcm9zb2Z0IiwiYzptaWNyb3NvZnQtYW5hbHl0aWNzIiwiYzptaWNyb3NvZnQtb25lZHJpdmUtbGl2ZS1zZGsiLCJjOm15ZmVlbGJhY2siLCJjOm9uZXNpZ25hbC1uS1hmQ3BZcyIsImM6cGxheWJ1enotamhKcUNBeEsiLCJjOnBvb29sLWV3WjY2ZWdmIiwiYzpwb29vbC1WeWhDaXQ3TiIsImM6cHVic3RhY2stV3JDYkV5Y00iLCJjOnNob3J0aGFuZC02R01GSzJCVyIsImM6c291bmRjbG91ZC14S01ER1g0TCIsImM6c3RvcnltYXAtTFpwaWQ3WXEiLCJjOnN1YnNjcmliZS1abXdVZVVDUCIsImM6dGltZWxpbmVqLWU2WFJDS1VYIiwidHdpdHRlciIsImM6dHdpdHRlci1pNnhkQjJyVCIsImM6dmltZW8tSGlNcnpFUEgiLCJjOnlvdXR1YmUiLCJjOnlvdXR1YmUtQ2VWemptSlAiXX0sInB1cnBvc2VzIjp7ImVuYWJsZWQiOlsicmVzZWF1eHNvLTlLYmpid05oIl0sImRpc2FibGVkIjpbImdlb2xvY2F0aW9uX2RhdGEiLCJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIiwiYXVkaWVuY2VtLXhlZGVVMmdRIiwiY29udGVudXN2LWhGVDhpZmRSIiwiY29udGVudXNjLXBYQVZVdDhyIiwibWVzdXJlZGEtaDdHUWVyclQiXX0sInZlcnNpb24iOjIsImFjIjoiQ25XQUdBRmtCSllLZFFBQS5BRm1BQ0FGayJ9"],["euconsent-v2","CPzBFAAPzBFAAAHABBENDYCgAAAAAAAAAAAAJNFB_W_fD2Ni-35_avt0aQ1dwVC_6-UxDgKZB4kFyRpEMKwX3mAKKFXgpKAKGBYEsUZAIQBlHCHEDECwQIERLzHMIAEQJQIAJqJEgFERAkJQCBpZHwMACAIQgHRWATFIiB-HaBroyfhEMaC0AUBQ4AonhMTPAoSdwXCkg7uaHIgIImgFASBAIoYMEEEEBlTkFABAAAkAAABJSADAAEQUCUAGAAIgoDoAMAARBQIQAYAAiCgEgAwABEFARABgACIKAyADAAEQUA0AGAAIgoCoAMAARBQA.YAAAAAAAAAAA"],["CTC","eyJBIjoxNzA4NTg5MjM3MTc1LCJCIjoxNzA4NTg5MjM3MTc1LCJEIjpmYWxzZSwiRSI6dHJ1ZSwiRiI6ZmFsc2UsIkciOmZhbHNlLCJIIjpmYWxzZSwiSSI6Wy01ODM2OSw3ODU1NzVdLCJKIjpbOTgzNTg1LDMwNzJdfQ==","","","reload","1"],["the_green_city","[%22preference%22%2C%22technical%22]"],["consentCookie","%7B%22id%22%3A%22d28cc3d1-22a4-4137-9477-3e82b6936e01%22%2C%22permissions%22%3A%7B%22social%22%3Atrue%2C%22personalization%22%3Afalse%2C%22tracking%22%3Afalse%7D%2C%22createdAt%22%3A%222023-10-13T02%3A54%3A20.54Z%22%7D","","","reload","1"],["cookieconsent_dismissed","1%7C%7C1%7C%7Crt2d2f69if8tq2hiq7dmjejrd2","1year","","reload","1"],["OptanonAlertBoxClosed","$currentDate$"],["OptanonConsent","groups=C0003%3A1%2CC0002%3A1%2CC0001%3A1%2CC0005%3A1%2CC0004%3A1","1year"],["cookiepreferences","necessary#true|marketing#true"],["cookie-preferences","{\"performance\":false,\"marketing\":false,\"functionality\":true,\"social\":true,\"essential\":true}"],["hp__gdpr_consent","!demographics=false!googletagmanager=false!facebook=true!twitter=true!instagram=true!youtube=true!optimize=false!helphero=false!fbpixel=false!iterable=false!kayakWidget=false!vimeo=true!lastminute=false!apple=true!google=true!hotjar=false!getYourGuide=false!gad=false","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1}","1year"],["cm_default_preferences","{%22consent%22:[%22necessary%22%2C%22functional%22]%2C%22region%22:%22DEFAULT%22}"],["cm_eu_preferences","{%22consent%22:[%22necessary%22%2C%22functional%22]%2C%22region%22:%22EU%22}"],["gdpr","{%22version%22:%221.0_tracking%22%2C%22options%22:{%22typo3%22:true%2C%22gdpr%22:true%2C%22openstreetmap%22:true%2C%22vimeo%22:true%2C%22youtube%22:true%2C%22recaptcha%22:true%2C%22googlemaps%22:true%2C%22tracking%22:false}}"],["euconsent-v2","CPtgasAPtgasAAGABCENDECgAAAAAAAAAApAAAAAAAAA.YAAAAAAAAAAA","1year"],["_iub_cs-495815","%7B%22timestamp%22%3A%222023-10-26T10%3A24%3A25.058Z%22%2C%22version%22%3A%221.48.0%22%2C%22consent%22%3Atrue%2C%22id%22%3A495815%2C%22cons%22%3A%7B%22rand%22%3A%2287691d%22%7D%7D","1year"],["_iub_cs-15665353","%7B%22timestamp%22%3A%222023-10-26T10%3A24%3A25.058Z%22%2C%22version%22%3A%221.48.0%22%2C%22consent%22%3Atrue%2C%22id%22%3A495815%2C%22cons%22%3A%7B%22rand%22%3A%2287691d%22%7D%7D","1year"],["consentUUID","30fa6cf5-9b2a-40b5-a14f-183629a4f9e7_25"],["privacy_consent","%7B%22essentials%22%3Atrue%2C%22statistics%22%3Afalse%2C%22marketing%22%3Afalse%2C%22maps%22%3Atrue%2C%22youtube%22%3Atrue%7D"],["hs365-accepted-cookies","[{%22description%22:%22Enable%20you%20to%20navigate%20and%20use%20the%20basic%20functions%20and%20to%20store%20preferences.%22%2C%22key%22:%22technically_required%22%2C%22label%22:%22Technically%20necessary%20cookies%22%2C%22isMandatory%22:true}%2C{%22description%22:%22Display%20third%20party%20content%20like%2C%20for%20example%2C%20YouTube%20videos%20or%20twitter%20feeds.%22%2C%22key%22:%223rdParty%22%2C%22label%22:%22Third-Party%20Content%22}]"],["notion_cookie_consent","{%22id%22:%2282a41727-b652-4011-a0a4-13a4499c039a%22%2C%22permission%22:{%22necessary%22:true%2C%22preference%22:true%2C%22performance%22:false%2C%22targeting%22:false}%2C%22policy_version%22:%22v8%22}"],["eupubconsent-v2","CP0tkXAP0tkXAAcABBENAXEwAAAAAAAAAAYgAAAAAAHBAHwAAQADQAOAA8ADIALAAjgBQACuAFsARYAlwBfQDUANUAc4A8gB8gEDAIOARwAn8BQwFFALsAZwA3gB6AD5AIbAReAj0BIoCSwErAJlgTYBNoClwFPgLCgWIBYoC6gF3ALyAYFAw8DEAGLQMhAyMBkwDPwGhANGAaYA1MBroDaAG3AN0AcEA6gB2ADuoHkgeUA96B8gHyhIHAACAAFwAUABUADkAHgAgABhADIANQAeABMACqAG8APQAhIBDAESAI4ASwAmgBSgDDAGWANkAd8A9gD4gH2AfoBAICLgIwARoAlIBQQCoAFXALmAYoA2gBuADiAJEATsAocBR4CkQFNgLYAXIAu8BeYDBgGGgMkAZOAzmBrAGsgN1AcmA5cB44YCgAAEAAwADgAKAAigBOAFgAMIAeAB6AEIAI4ATAAqABXgC2ALkAcwB3AEMAIkARYAlwBSACtAGcANSAbIBwADjAHOAPIAfgBAACMAEmAJ0AUUApcBXgFfALsAX4AzgBsgDbAG8AOOAc0A6gB2QD1AHyAP2AhIBDYCLwEdQJEAkUBJcCWgJeATYAnYBQkCkQKSAU2AsUBaIC5AF0ALuAXoAwIBh4DHoGRgZIAycBnIDPAGhANMga0BrsDcgN0AdQA7gB7wgCcAAEAAwADgAKAAigBOAFgAMIAeAB6AEIAI4ATAArgBbgDmAO4AhgBEgCLAEuAKQAVoAzgBqQDZAOAAcYA5wB5AD5AH4AQAAjABJgCdAFFAKXAV4BXwC7AF-AM4AagA2wBvADjgHNAOyAeoA-QB-wEJAIbAReAjuBIgEigJLgS0BLwCbAE7AKEAUkApuBYgFigLRAXIAugBdwC9AGBAMPAY8AyQBk4DOQGhANMga0BroDdAHUAO4Ae8KARgAigBUAFgAQgAmABcAEcAKQAZQA1ABwAEcAKLAV4BXwC7AF-AM4AbwA5oB-wEegJFAS8AmwBYoC0QFsALuAXoAw8BnIDPAGhQNaA14BuQD3hgCAAEUAKgAsACEAEwARwApABqADgAI4AUWArwCvgF2AL8AZwA3gBzQD9gI9ASKAl4BNgC0QFsALuAXoAw8BnIDPAGhQNaA10B7wD4hwF6AAwAEQAOAA8AC4AGQAWAA5AB8AEcAJoAUAArgBbAC-AGgAQgAiwBHACXAFIALIAXwAwoBmgGcANQAc4A7gB5AD5gIAAgcBBwEIAI4ATiAnwCfgFFAKWAVAArIBdgC9AGcAN4AccA6QB6AD5AIbAREAioBHoCRQElgJWATEAmWBNgE2gKQAUmApcBVQCxAFlALUAWzAugC6gF3AL6AYEAxABiYDFgGQgMmAZeAz8BoQDRoGmAaaA1OBroGwANoAbcA48BywDnwHWAOwAdxA8kDygHpAPeAfEA-UB9oD8R0EcABcAFAAVAA5AB8AIAAXQAwADUAHgATAAqwBcAF0AMQAZgA3gB6gEMARIAlgBNACjAFKAMMAZQA0QBsgDvAHtAPsA_QB_wEWARgAlIBQQCrgFiALmAXkAxQBtADcAHEAOoAi8BIgCVAEyAJ2AUOAo-BTQFNgLFAWwAuABcgC7QF3gLzAYMAw0BjwDJAGTgMqAZYAzkBogDVQGsAN1AcWA5MBy4DxwH1kAFwACAAMgAsACaAF8ANAApABZAC-AGcANQAc4BHACcAE-gKGAooBSwCsgFiALSAXYA3gBzQD0AI9ASLAmwCbQFJgLEgWyBbQC7gF5AMCAYlAzwDPwGhANTAa6A2ABtwDnwHRgOwgeSB5QD3gHxEIEAACwAKAAuABiAEwAKoAXAAxABvAD0AI4Ad4A_wCUgFBAKuAXMAxQBtADqAJUAU0AsUBaIC4AFyAMnAZyA0QBqoDgAHjkgGIABgAHAAXAAyACwAHIARwAmgBUAC-AGQANoAhABSACyAGdANQA1QB3AEAAI4AT6ApoCoAFZALSAXYA3gB8gEVAI6AR6AkUBKwCWoE2ATaApMBVICxAFlALuAYsAyyBngGfgNCAa6A2ABuQDsAHlAPeJQHQAEAALAAoAByAGAAYgA8ACYAFUALgAYoBDAESAI4AUYA2QB3gD8AKuAYoA6gCLwEiAKPAWKAtgBeYDJwGcgNYAcAUgYgALgAoACoAHIAPgBBADAANQAeABMACkAFUAMQAZoBDAESAKMAUoAygBogDZAHfAPwA_QCLAEYAJSAUEAq4BcwC8gGKANoAbgBF4CRAE7AKHAU2AsUBbAC4AFyALtAXmAw0BkgDJwGcwNYA1kBuoDkwHLgPHKAQAALgAZABYADkAI4ATQAqABfADIAG0AQgAiwBHACZAFIALIAXwAwgBnQDUANUAc4A7oB8gH2AQAAjgBPgChgFLgKyArYBYoC6gLsAa8A3gB2wD0AH_AR0Aj0BIoCSwExQJsAm0BSACnwFiALoAXcAvIBfQDAgGLAMmgZ4Bn4DQgGiQNSA1OBroGwAOCAdgA7gB5QD3gHxAPlAA.YAAAAAAAAAAA","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0005%3A0%2CC0004%3A0%2CC0048%3A1%2CC0030%3A1%2CC0046%3A1%2CC0032%3A1%2CC0033%3A1%2CC0057%3A1%2CC0054%3A1%2CC0056%3A1%2CC0043%3A1%2CC0029%3A1%2CC0055%3A1%2CC0026%3A1","1year"],["Vendd:AcceptedCookieConsents","FunctionalityCookies=-29&StatisticsCookies=-30&MarketingCookies=-31"],["sv-cookie-consent","true","","","reload","1"],["CookieConsent","{necessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1}","1year","","reload","1"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":false}"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":true,\"6\":false}"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"5\":false,\"6\":true}"],["sj_consent_v1","%7B%22consent%22%3A%7B%22PERSONALIZATION%22%3Afalse%2C%22MARKETING%22%3Afalse%7D%2C%22uuid%22%3A%22d599dc64-52b7-4dc7-bff3-1e18d5cebc1a%22%7D"],["vl-cookie-consent-cookie-consent-date","$now$"],["consent_identifier","16f69085-c6f2-42f6-a4cd-807b24a37c0b","","","reload","1"],["consent_setting","analytics%3A0%7Cfunctional%3A1%7Cmarketing%3A0"],["__cmpcccu33611","aBP1oXvjgABbQABAAIABYADQAJgAXAA0AB4AEQAKAAXAA0gCAAIIASgAmwBWAFcALIAXgAwACHAFsAMcAaYA5AB2AD4AH6AQCAhQCFgEQgI4AjoBJACUAEwAKIAUcApIBSwCngFXALMAX4AwYBjgDIgGcANEAaUA3YBvgDogHbAPYAfoBAcCFwIYAQ8AiQBGACOQEegJGASSAksBKICVgE6gJ9AUGApQBT4CpAFUwKvArABXACvQFgQLDAsQBcIC8QF-AMoAZeAzUBnwDSQGqgNbAa8A2IBwQDiQHbAPLAe2BBwCaAFLwLAgWiAxxBoUGkgNsAbtA3iBvkDfoHBAOHAcUA4sByoDlgHLgOZQc8Bz0DoIHRwOlAdMA6eB1QDroHZAOzgdpA7iB4EDyIHlgPQAelA9YB7gD54H0QPuAffA_GB-YD9AH6gP_AgMBAkCBsEDoIJgQVggtBBiCDQEHAIPAQiAhGhCSEJcIUAhRBDCCGQEOwIeARAAiVBEwCKQEU4I8oSCBIMCQsEioJJ4SXBJeCTYEnQJRgSlAlNBKiCVYErIJXQUaAAoBdA"],["__cmpconsent33611","CP1lmTAP1lmTAAfVnBFIAbEgAIAAAAAAAAigIjQBgBBgJVATOAuIB3IERgRGgDACDASqAmcBcQDuQIjAAA"],["zdf_cmp_client","{%22version%22:%22v1%22%2C%22iteration%22:1%2C%22consents%22:[{%22id%22:%22personalisierung%22%2C%22value%22:false}%2C{%22id%22:%22socialMedia%22%2C%22value%22:true}%2C{%22id%22:%22instagram%22%2C%22value%22:true}%2C{%22id%22:%22twitter%22%2C%22value%22:true}%2C{%22id%22:%22facebook%22%2C%22value%22:true}%2C{%22id%22:%22drittsysteme%22%2C%22value%22:true}%2C{%22id%22:%22erforderlich%22%2C%22value%22:true}%2C{%22id%22:%22erfolgsmessung%22%2C%22value%22:true}]}"],["MBCC","%7B%22version%22%3A1%2C%22functional%22%3Atrue%2C%22analytics%22%3Afalse%7D"],["ConsentStatus","%7B%22necessary%22%3Atrue%2C%22siteFeatures%22%3Atrue%2C%22statistics%22%3Afalse%2C%22marketing%22%3Afalse%7D","","","reload","1"],["CookieConsent","1.0.0.0.0"],["euconsent-v2","CP2APYAP2APYADtACBDEAcEgAAAAAAAAACiQAAAAAAAA"],["OptanonConsent","groups=C0003%3A0%2CC0002%3A0%2CC0004%3A1%2CC0001%3A1%2CC0009%3A0","1year"],["consentUUID","accee7b2-0121-45d7-aa34-4d4572577125_26"],["user","%7B%22necessary%22%3Atrue%2C%22preferences%22%3Afalse%2C%22statistics%22%3Afalse%2C%22marketing%22%3Afalse%7D"],["tarteaucitron","!tarteaucitron=true!website=true!analytics=false!regex_analytic=false!regex_ads=true!googletagmanager=false!facebookpixel=false!addtoanyshare=false!youtube=true","1year"],["consentUUID","a602d41d-1dcc-4304-9566-1138801bab52_31_32"],["cookiesSettings","%7B%22necessary%22%3Atrue%2C%22preferential%22%3Atrue%7D","","","reload","1"],["acceptedCookies","{\"necessary\":true,\"functionallity\":true,\"analysis\":false,\"marketing\":false}"],["3sat_cmp_client","{%22version%22:%22v1%22%2C%22iteration%22:1%2C%22consents%22:[{%22id%22:%22erforderlich%22%2C%22value%22:true}%2C{%22id%22:%22erfolgsmessung%22%2C%22value%22:true}%2C{%22id%22:%22personalisierung%22%2C%22value%22:false}%2C{%22id%22:%22socialMedia%22%2C%22value%22:false}%2C{%22id%22:%22twitter%22%2C%22value%22:false}%2C{%22id%22:%22instagram%22%2C%22value%22:false}%2C{%22id%22:%22facebook%22%2C%22value%22:false}%2C{%22id%22:%22drittsysteme%22%2C%22value%22:false}]}"],["cn-cc","%7B%22ccGoogleTagManager%22%3Afalse%2C%22ccGA4%22%3Afalse%2C%22ccSalesviewer%22%3Afalse%7D"],["OptanonConsent","groups=C0004%3A0%2CC0003%3A1%2CC0002%3A0%2CC0001%3A1","1year"],["OnetrustActiveGroups","C0003C0001","1year"],["userConsent","%7B%22essential%22%3Atrue%2C%22analytical%22%3Afalse%2C%22preferential%22%3Atrue%7D"],["rwc","%7B%22data%22%3A%5B%7B%22code%22%3A%22analytics%22%2C%22permissions%22%3A%5B%5D%7D%2C%7B%22code%22%3A%22marketing%22%2C%22permissions%22%3A%5B%5D%7D%5D%2C%22common%22%3A%7B%22accepted%22%3A1703366235541%7D%7D"],["OptanonConsent","groups=C0001%3A1%2CC0005%3A1%2CC0002%3A0%2CC0004%3A0%2CC0003%3A0","1year","","reload","1","domain","mesta.net"],["wmm-visitor_token","4cb8860d-4194-4ab5-be04-10f9a26afaa8"],["cookieConsent","{%22essential%22:true%2C%22tracking%22:false%2C%22marketing%22:false}"],["consts","{%22ad_storage%22:%22denied%22%2C%22analytics_storage%22:%22denied%22%2C%22functionality_storage%22:%22granted%22}"],["_CookiesPolicyAccepted","[%22necessary%22]"],["user_preferences","{\"necessary\":\"on\",\"marketing\":\"off\",\"analytics\":\"off\",\"preferences\":\"off\",\"unclassified\":\"off\"}"],["umr-data-consent","{%22essential%22:true%2C%22functional%22:null%2C%22statistics%22:false%2C%22marketing%22:false}"],["wpsaurus_cookie_banner_plugin","functional"],["_consent_cookie","{\"services\":[\"jwp\",\"twitter\"]}"],["cookies_accept","local,third"],["nero_consents","%7B%22analytics%22%3Afalse%2C%22targeting%22%3Afalse%7D"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0"],["dsm-cookie-preferences","{%221%22:true%2C%222%22:true}"],["notice_gdpr_prefs","0,1,2::implied"],["notice_preferences","2:"],["cmapi_cookie_privacy","permit 1,2,3"],["qubitconsent","Declined"],["qubitconsent_version","2.0.0"],["privacyConsent_type","explicit"],["tracking-preferences","{%22destinations%22:{%22Amplitude%22:false%2C%22Braze%20Cloud%20Mode%20(Actions)%22:false%2C%22Braze%20Web%20Mode%20(Actions)%22:false%2C%22FullStory%22:false%2C%22Hindsight%22:false%2C%22Impact%20Partnership%20Cloud%22:false%2C%22Oura%20Marketing%20Id%20Middleware%20(Oura)%22:false%2C%22Statsig%22:false%2C%22Visual%20Tagger%22:false%2C%22Webhooks%22:false%2C%22Facebook%20Conversions%20API%20(Actions)%22:false%2C%22Google%20Tag%20Manager%22:false%2C%22Snap%20Conversions%20Api%22:false}%2C%22custom%22:{%22functional%22:false%2C%22marketing%22:false%2C%22advertising%22:false}}"],["SEBConsents","%7B%22version%22%3A%222%22%2C%22consents%22%3A%7B%22mandatory%22%3Atrue%2C%22statistical%22%3Afalse%2C%22marketing%22%3Afalse%2C%22simplified_login%22%3Atrue%7D%7D"],["consentUUID","8f037acf-4f70-48de-af04-de7380df79ce_27"],["eupubconsent-v2","CP4mi7gP4mi7gAcABBENAjEgAAAAAAAAACiQAAAAAAAA.YAAAAAAAAAAA"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A0%2CV2STACK42%3A0","1year"],["didomi_token","eyJ1c2VyX2lkIjoiMThkMmRlNWUtZWViOC02YmY3LWJiMGItYTA4MzI0OWNiNGFhIiwiY3JlYXRlZCI6IjIwMjQtMDEtMjFUMjE6MjE6MDAuMTg0WiIsInVwZGF0ZWQiOiIyMDI0LTAxLTIxVDIxOjIxOjA0Ljg4OFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpmYWNlYm9vay1ZeUpSQXllZCIsImM6eW91dHViZSIsImM6YWRvYmVhdWRpLUFXZTdyd3FkIiwiYzphbnVuY2lhbnRlX2xhX2xpZ2EiLCJjOmJlc29jeS1tRlVFYVpCTSJdfSwicHVycG9zZXMiOnsiZW5hYmxlZCI6WyJkYXRhX3NoYXJpbmciLCJkYXRhX3NoYXJpbmdfd2ViIiwiZGV2aWNlX2NoYXJhY3RlcmlzdGljcyIsImdlb2xvY2F0aW9uX2RhdGEiXX0sInZlcnNpb24iOjIsImFjIjoiREU2QU9BRVlBTmdBbFFEekFJY0FpU0RFNEFBQS5BQUFBIn0="],["euconsent-v2","CP4u7EAP4u7EAAHABBENAjEsAP_gAAAAAAAAg1NX_H__bX9r8Xr36ft0eY1f99j77uQxBhfJk-4FzLvW_JwX32EzNA26tqYKmRIEu3ZBIQFlHJHURVigaogVrzHsYkGchTNKJ6BkiFMRc2dYCF5vmYtj-QKY5_p_d3f52T-9_dv83dzzz81nv3f5f-clcLCdQ58tDfn_bRKb-5IO9_78v4v09t_rk2_eTVn_tevr7B-uft-7_XV-9_ffeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAxKADAAEQaikAGAAIg1DoAMAARBqIQAYAAiDUEgAwABEGotABgACINQAAA.f_wAAAAAAAAA"],["website_privacycookie_relaunch","accetta"],["website_privacycookie","accetta"],["DDCookiePolicyDialog","hide","","","reload","1"],["CookieConsentLevel","functional_analytics"],["correosCookies","{\"tecnicas\":\"true\",\"analiticas\":\"false\",\"publicidad\":\"false\"}"],["bkpolicy","aceptacion=selectiva//tecnicas=si//personalizacion=si//analiticas=no//publicitarias=no//version=0","","","domain","bankinter.com"],["CookieChoicesApr2021","%7B%22functionality%22%3Afalse%2C%22anonymousMeasurement%22%3Afalse%2C%22performance%22%3Afalse%2C%22advertising%22%3Afalse%7D"],["CONSENTMGR","c1:1%7Cc2:0%7Cc3:1%7Cc4:0%7Cts:1706835520229%7Cconsent:true"],["cookie-policy-agreement","%7B%22REVISION%22%3A20%2C%22consentLevel%22%3A1%7D"],["cookiesAccepted","%7B%22necessary%22%3Atrue%2C%22statistical%22%3Afalse%2C%22marketing%22%3Afalse%7D"],["cookiepolicy","1-1722973184631"],["cookie-management-status","{\"analytics\":false,\"functional\":true,\"strictlyNecessary\":true}"],["CookieConsent","%7B%22Mode%22%3A0%7D","","","reload","1"],["aok_cookie_settings","{\"functional\":{\"key\":\"functional\",\"name\":\"Funktionale Cookies\",\"required\":true,\"approved\":true},\"comfort\":{\"key\":\"comfort\",\"name\":\"Komfort-Cookies\",\"required\":false,\"approved\":false},\"tracking\":{\"key\":\"tracking\",\"name\":\"Marketing-Cookies\",\"required\":false,\"approved\":false}}"],["user_cookie_settings","WyJwcC1mdW5jdGlvbmFsIl0=","","","reload","1"],["orejime","{\"matomo\":false,\"youtube\":true}"],["BCP","AD=0&AL=0&SM=0","1year"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2CV2STACK42%3A0"],["CookieConsentV2","YES%2CTOI","","","domain","matkahuolto.fi"],["CookieConsent","mandatory|external"],["cookie_consent","{%22cookies_statistical%22:false%2C%22cookies_ad%22:true}","1year"],["consent-cookie-toggles","[{%22type%22:%22social%22%2C%22value%22:3}%2C{%22type%22:%22remaining%22%2C%22value%22:3}]"],["plenty-shop-cookie","{\"necessary\":{\"amazonPay\":true,\"consent\":true,\"consentActiveStatus\":true,\"externalId\":true,\"session\":true,\"csrf\":true,\"paypal-cookies\":true},\"tracking\":{\"googleanalytics\":false,\"bingads\":false},\"marketing\":{\"googleads\":false,\"facebookpixel\":false,\"pinterest\":false},\"media\":{\"reCaptcha\":true},\"convenience\":{\"languageDetection\":false}}"],["CONSENTMGR","c1:0|c2:0|c3:0|c4:0|c5:0|c6:0|c7:0|c8:0|c9:0|c10:0|c11:0|c12:0|c13:0|c14:0|c15:0|ts:1709021997479|consent:false|id:018de9a4f59200821a700cf146e80406f001906700ef8"],["disclaimer","2015040809"],["cookieControlPrefs","[\"comfort\"]"],["euconsent-v2","CP6vdoAP6vdoAAHABBENApEgAAAAAAAAAAAAAAAAAAAA.YAAAAAAAAAAA"],["cookie-consent-settings","{\"necessary\":true,\"statistics\":false,\"marketing\":false,\"personalization\":true}"],["CookiesConsent","{\"ad_storage\":\"denied\",\"analytics_storage\":\"denied\",\"personalization_storage\":\"denied\"}"],["omCookieConsent","group-1.1,group-3.1,dismiss"],["ConsentCookie","required:1,functional:1,analytic:0"],["txl_consent_status","functional","","","domain","transferxl.com"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1%2CV2STACK42%3A0","","","domain","20min.ch"],["euconsent-v2","CP7Tt8AP7Tt8AAHABBENArEsAP_gAEPgAAAAg1NX_H__bW9r8Xr3aft0eY1P99j77sQxBhfJE-4FzLvW_JwXx2ExNA36tqIKmRIEu3bBIQFlHJDUTVigaogVryDMakWcgTNKJ6BkiFMRM2dYCF5vmQtj-QKY5vp9d3dx2D-t_dv83dzyz8VHn3e5_2e0eJCdA58tDfv9bROb-9IPd_58v4v0_F_rk2_eT1l_tevp7B8uft87_XU-9_fff79AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQagCzDQqIA-wJCQi0HCKBACoKwgIoEAAAAJA0QEAJgwKdgYBLrCRACAFAAMEAIAAUZAAgAAAgAQiACQAoEAAEAgUAAIAAAgEABAwAAgAsBAIAAQHQIUwIAFAsAEjMiIUwIQoEggJbKBBICgQVwgCLPAAgERMFAAAAAAVgACAsFgMSSAlQkECXEG0AABAAgEEIFQgk4MAAwJGy1A4Im0ZWkAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAA.f_wACHwAAAAA"],["CookiePermissionInfo","{\"LastModifiedDate\":\"1\",\"ExpirationDate\":\"1\",\"Allow\":true,\"CategoryPermission\":[{\"Category\":\"Cat.8\",\"Permission\":true},{\"Category\":\"Cat.9\",\"Permission\":true},{\"Category\":\"Cat.10\",\"Permission\":false},{\"Category\":\"Cat.12\",\"Permission\":false}]}"],["userconsent","{\"analytics\":false,\"youtube\":true}"],["aceptarCookiesSeen","{\"necesarias\":true,\"estadisticas\":false}","","","reload","1"],["cookieConsent","{\"necessary\":1}"],["cc_cookie","{\"categories\":[\"necessary\"],\"level\":[\"necessary\"],\"revision\":1,\"data\":null,\"rfc_cookie\":true,\"consent_date\":\"1\",\"consent_uuid\":\"1\",\"last_consent_update\":\"1\"}"],["UN_cookie_consent_v2","{\"marketing\":0,\"statistics\":0,\"personalization\":0,\"time\":1}","","","reload","1"],["cc_cookie","{\"level\":[\"necessary\"],\"revision\":0,\"data\":null,\"rfc_cookie\":false}"],["consentPreferences","{\"timestamp\":\"1\",\"version\":1,\"functional_storage\":\"granted\",\"analytics_storage\":\"denied\",\"personalization_storage\":\"denied\",\"ad_storage\":\"denied\",\"ad_user_data\":\"denied\",\"ad_personalization\":\"denied\"}"],["cc_cookie","{\"level\":[\"tecnici\"],\"revision\":0,\"data\":null,\"rfc_cookie\":false}"],["dp_cookieconsent_status","{\"status\":\"approved\",\"checkboxes\":[{\"name\":\"statistics\",\"checked\":false},{\"name\":\"marketing\",\"checked\":false},{\"name\":\"functional\",\"checked\":true},{\"name\":\"read-speaker\",\"checked\":true}]}"],["GDPR","[\"gdpr\",\"youtube\"]"],["cookiesaccepted","{%22marketing%22:false%2C%22statistic%22:false%2C%22thirdParty%22:true}"],["sve_cc_options","{\"values\":[{\"key\":\"necessary\",\"checked\":true},{\"key\":\"ad_storage\",\"checked\":false},{\"key\":\"analytics_storage\",\"checked\":false},{\"key\":\"functionality_storage\",\"checked\":false}],\"version\":\"2023-1\",\"timestamp\":1}"],["CookieConsent","necessary:true%2C%20preference:true%2C%20statistics:false%2C%20marketing:false"],["UN_cookie_consent_v2","%7B%22marketing%22%3A0%2C%22statistics%22%3A0%2C%22personalization%22%3A0%2C%22time%22%3A1711880201%2C%22id%22%3A%221%22%7D","","","reload","1"],["consentUUID","191c03c5-1154-4937-aa26-ced186f90097_30","","","reload","1"],["cookieconsent","saved=1&functional=1&analytics=0&marketing=0","","","reload","1"],["cookie-consent","{\"required\":true,\"optional\":false,\"analytics\":false}"],["OptanonConsent","groups=C1%3A1%2CC2%3A0%2CC3%3A0%2CC4%3A0%2CC5%3A0%2CC8%3A0%2CC9%3A0&hosts=H184%3A1%2CH108%3A1%2CH109%3A1%2CH36%3A1%2CH58%3A1%2CH159%3A1%2CH37%3A1%2CH112%3A1%2CH331%3A1%2CH39%3A1%2CH348%3A1%2CH67%3A1%2CH115%3A1%2CH306%3A1%2CH63%3A1%2CH117%3A1%2CH118%3A1%2CH119%3A1%2CH120%3A1%2CH121%3A1%2CH122%3A1%2CH66%3A1%2CH304%3A0%2CH338%3A0%2CH40%3A0%2CH43%3A0%2CH183%3A0%2CH60%3A0%2CH274%3A0%2CH97%3A0%2CH142%3A0%2CH48%3A0%2CH49%3A0%2CH149%3A0%2CH83%3A0%2CH38%3A0%2CH176%3A0%2CH150%3A0%2CH330%3A0%2CH85%3A0%2CH151%3A0%2CH324%3A0%2CH402%3A0%2CH272%3A0%2CH14%3A0%2CH275%3A0%2CH23%3A0%2CH41%3A0%2CH101%3A0%2CH153%3A0%2CH6%3A0%2CH283%3A0%2CH42%3A0%2CH32%3A0%2CH145%3A0%2CH15%3A0%2CH322%3A0%2CH148%3A0%2CH333%3A0%2CH104%3A0%2CH55%3A0%2CH143%3A0%2CH17%3A0%2CH18%3A0%2CH57%3A0%2CH359%3A0%2CH129%3A0","1year"],["TC_PRIVACY","1%40032%7C1%7C4525%40%402%401713310882911%2C1713310882911%2C1747006882911%40"],["cookiesRules","{\"analytics\":false,\"personalized\":false,\"ads\":false}"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:true}"],["OptanonConsent","groups=BG117%3A1%2CC0001%3A1%2CC0003%3A1%2CC0002%3A1%2CSPD_BG%3A1%2CC0004%3A1"],["euconsent-v2","CP-wiwAP-wiwAD3ACLCSA1EsAP_gAEPgAATIJVwQgAAwAKAAsACAAFQALgAZAA6ACAAFAAKgAWgAyABoADmAIgAigBHACSAEwAJwAVQAtgBfgDCAMUAgACEgEQARQAjoBOAE6AL4AaQA4gB3ADxAH6AQgAkwBOACegFIAKyAWYAuoBgQDTgG0APkAjUBHQCaQE2gJ0AVIAtQBbgC8wGMgMkAZcA0oBqYDugHfgQHAhcBGYCTQEqwQugRQAKAAsACoAFwAQAAyABoAEQAI4ATAAqgBiAD8AISARABEgCOAE4AMsAZoA7gB-gEIAIsAXUA2gCbQFSALUAW4AvMBggDJAGXANTAhcAA.YAAAAAAAAWAA","","","domain","seznam.cz"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1","","","domain","olympics.com"],["consentUUID","f584bd6f-c648-4499-b2ed-73d6554fc45f_32"],["pleaseFix.privacy","{%22analyticsCookie%22:false%2C%22personalisationCookie%22:false%2C%22targetedAdvertisingCookie%22:false%2C%22multimediaPlayerCookie%22:true}"],["euconsent-v2","CP_K6QAP_K6QAAHABBENA1EsAP_gAELAAAAAKKtV_H__bX1r8X736ft0eY1f9_j77sQxBhfJk-4FzLvW_JwX32EzNA36tqYKmRIEu3bBIQNlHJDUTVCgaogVrzDMakWcoTNKJ6BkiFMRe2dYCF5vmwtj-QKY5vr_93d52T-9_dv83dzyz4Vnv3a9_-e1WJCdA58tDfv_bROb-9IP9_58v4v0_N_rE2_eT1l_tevp7D9-ct-7_XX-9_fff79Pl9-gAAAGJQAYAAgoqUgAwABBRUdABgACCipCADAAEFFQkAGAAIKKloAMAAQUVAAA.f_wACFgAAAAA"],["euconsent-v2","CP_K6QAP_K6QAAHABBENA1EsAP_gAEPgAAAAKKtV_H__bW1r8X73aft0eY1P9_j77sQxBhfJE-4FzLvW_JwXx2ExNA36tqIKmRIEu3bBIQNlHJDUTVCgaogVryDMakWcoTNKJ6BkiFMRO2dYCF5vmwtj-QKY5vr993dx2D-t_dv83dzyz4VHn3a5_2e0WJCdA58tDfv9bROb-9IPd_58v4v0_F_rE2_eT1l_tevp7D9-ct87_XW-9_fff79Ll9-goqAWYaFRAHWBISEGgYRQIAVBWEBFAgAAABIGiAgBMGBTsDAJdYSIAQAoABggBAACjIAEAAAEACEQAQAFAgAAgECgABAAgEAgAIGAAEAFgIBAACA6BCmBBAoFgAkZkRCmBCFAkEBLZUIJAECCuEIRZ4AEAiJgoAAAAACsAAQFgsDiSQEqEggS4g2gAAIAEAghAqEEnJgACBI2WoPBE2jK0gDQ04SAAAAA.f_wACHwAAAAA"],["euconsent-v2","CP_K6QAP_K6QAB7FIBITA2EsAP_gAAAAAAAAJxNV7H-_bX1r8Xr36dtkeY1P98j77sQxBhfJk-4FyDvW_IwX32EyJA26tqIKmRIEuzZBIQFlHJDURVCgSogVryDEYkGcgTNKJ6BkgFMRI2dYCFxvmQtjeQKY5vp9d3dx2D2t_dv83dzyz4FHn1Y5PmckUICdA58tDfn9bRIb-5IOd-58v4v09F_rE2_eDVl_tevp7B8ucts7_XU29_cFHICoAOADPgI8ASqA3wB2wDuQIKASIAkoBKMCWgExwJkgTSAn2BQQCg4FFAKLQUaBRwAoJABgACAloaADAAEBLREAGAAICWioAMAAQEtGQAYAAgJaOgAwABAS0hABgACAlpKADAAEBLSkAGAAICWloAMAAQEt","1year","","domain",".ilmessaggero.it"],["_iub_cs-29298946","%7B%22timestamp%22%3A%222024-05-25T10%3A34%3A25.212Z%22%2C%22version%22%3A%221.61.0%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%222%22%3Atrue%2C%223%22%3Atrue%2C%224%22%3Atrue%2C%225%22%3Atrue%7D%2C%22id%22%3A29298946%2C%22cons%22%3A%7B%22rand%22%3A%228d344f%22%7D%7D","1year","","domain",".ilmessaggero.it"]];

const hostnamesMap = new Map([["facebook.com",0],["instagram.com",1],["fandom.com",[2,3,4]],["dailymotion.com",5],["lefigaro.fr",6],["filmweb.pl",7],["wetransfer.com",[8,9]],["thetrainline.com",[10,56]],["scaleway.com",11],["all3dp.com",12],["threads.net",14],["messenger.com",15],["trading212.com",16],["myscript.com",17],["odido.nl",18],["bing.com",19],["procvetok.ua",20],["stwater.co.uk",21],["boogschietshop.nl",22],["hashop.nl",22],["x-kom.pl",23],["tiempo.com",[24,25]],["pizzafan.gr",26],["windhager.eu",27],["banknorwegian.no",28],["biomarkt.de",29],["plaion.com",29],["apetro.pt",30],["apoteket.se",30],["bergbauernmilch.de",30],["berlingske.dk",30],["cineplex.de",30],["danbolig.dk",30],["egmont.com",30],["euroatla.pt",30],["finanzmarktwelt.de",30],["harzwasserwerke.de",30],["hoyavision.com",30],["nos.pt",30],["neue.at",30],["nngroup.com",30],["nordiskfilm.com",30],["storyhouseegmont.dk",30],["storyhouseegmont.no",30],["storyhouseegmont.se",30],["toyota-forklifts.se",30],["vn.at",30],["werder.de",30],["werkenbijlidl.nl",30],["wwf.fi",30],["refinery29.com",31],["dasinvestment.com",31],["fof.se",31],["mein-grundeinkommen.de",31],["ekstrabladet.dk",32],["kino.dk",33],["dr.dk",34],["schauspiel.koeln",35],["onlinestempel.ch",36],["chase.co.uk",37],["komoot.com",38],["komoot.de",38],["chatreplay.stream",39],["hubblehq.com",40],["hwebber.co.uk",41],["gereedschapcentrum.nl",42],["ontinet.com",43],["fplstatistics.co.uk",44],["kirjasto.vaasa.fi",45],["softonic.com",46],["informatech.com",47],["aonsolutions.es",48],["launer.com",49],["bever.nl",50],["sixt-neuwagen.de",51],["oem.no",52],["forums.tomsguide.com",53],["tomsguide.com",54],["walmart.ca",55],["cc.com",56],["1001games.com",[56,159,160]],["1001hry.cz",[56,159,160]],["1001jeux.fr",[56,159,160]],["1001jocuri.ro",[56,159,160]],["1001jogos.com.br",[56,159,160]],["1001jogos.pt",[56,159,160]],["1001pelit.com",[56,159,160]],["1001spiele.de",[56,159,160]],["elkspel.nl",[56,159,160]],["gamespot.com",[56,86]],["giochixl.it",[56,159,160]],["glamour.com",[56,178]],["grajteraz.pl",[56,159,160]],["isladejuegos.com",[56,159,160]],["jatekokxl.hu",[56,159,160]],["mtvuutiset.fi",[56,84]],["paixnidiaxl.gr",[56,159,160]],["pushsquare.com",[56,114,115]],["spelo.se",[56,159,160]],["spillespill.no",[56,159,160]],["spilxl.dk",[56,159,160]],["thejournal.ie",[56,101]],["vkmag.com",[56,82,83]],["zdnet.com",[56,94]],["zoom.us",[56,187,188]],["mesta.net",[56,191]],["tredz.co.uk",[56,202]],["uphold.com",[56,213,214]],["webuyanycar.com",56],["resursbank.fi",57],["ft.com",58],["what3words.com",59],["aufstiegs-bafoeg.de",60],["bafa.de",60],["ble.de",60],["bmbf.de",60],["bne-portal.de",60],["bundespolizei.de",60],["schleswig-holstein.de",60],["verfassungsschutz.de",60],["delfi.ee",[61,62,63]],["flynorse.com",64],["fruugonorge.com",65],["fruugo.de",65],["hyperoptic.com",66],["education.lego.com",67],["planningportal.co.uk",68],["veriff.com",69],["programme.conventus.de",70],["arena.pl",71],["govirtuo.com",[72,73]],["deal.by",74],["zwenkwielen.net",75],["lastmile.lt",76],["biomedcentral.com",77],["bol.com",78],["evaair.com",[80,81]],["ampparit.com",85],["arvopaperi.fi",85],["iltalehti.fi",85],["kauppalehti.fi",85],["mediuutiset.fi",85],["mikrobitti.fi",85],["talouselama.fi",85],["tekniikkatalous.fi",85],["tivi.fi",85],["uusisuomi.fi",85],["asialadies.de",87],["avladies.de",87],["badeladies.de",87],["behaarteladies.de",87],["bizarrladies.de",87],["busenladies.de",87],["deutscheladies.de",87],["devoteladies.de",87],["dominanteladies.de",87],["erfahreneladies.de",87],["escorts24.de",87],["exklusivladies.de",87],["fkk24.de",87],["grosseladies.de",87],["hobbyladies.de",87],["jungeladies.de",87],["kollegin.de",87],["kussladies.de",87],["ladies.de",87],["latinaladies.de",87],["massierendeladies.de",87],["mollyladies.de",87],["nsladies.de",87],["nymphomaneladies.de",87],["orientladies.de",87],["osteuropaladies.de",87],["piercingladies.de",87],["rasierteladies.de",87],["schokoladies.de",87],["tattooladies.de",87],["tsladies.de",87],["zaertlicheladies.de",87],["zierlicheladies.de",87],["1a-finanzmarkt.de",88],["1a-immobilienmarkt.de",88],["1a-reisemarkt.de",88],["1a-singleboerse.de",88],["1a-stellenmarkt.de",88],["gameinformer.com",89],["christianconcern.com",90],["vogue.co.uk",91],["wired.com",91],["jekabpils.lv",92],["aachener-bank.de",93],["bernhauser-bank.de",93],["bodenseebank.de",93],["bremischevb.de",93],["cvw-privatbank-ag.de",93],["dervolksbanker.de",93],["gladbacher-bank.de",93],["meine-rvb.de",93],["meinebank.de",93],["muenchner-bank.de",93],["nordthueringer-volksbank.de",93],["owl-immobilien.de",93],["raiba-gr.de",93],["raiba-ndwa.de",93],["raiba-westhausen.de",93],["rb-berghuelen.de",93],["rb-denzlingen-sexau.de",93],["rb-eching.de",93],["rb-hardt-bruhrain.de",93],["rb-oberaudorf.de",93],["rb-sondelfingen.de",93],["rv-banken.de",93],["saechsischer-gewinnsparverein.de",93],["skbwitten.de",93],["sparda-bank-hamburg.de",93],["sparda-sw.de",93],["vb-lauterecken.de",93],["vb-mittelhessen.de",93],["vb-rb.de",93],["vbleos.de",93],["vbsuedemsland.de",93],["voba-deisslingen.de",93],["voba-moeckmuehl.de",93],["volksbank-aktiv.de",93],["volksbank-backnang.de",93],["volksbank-daaden.de",93],["volksbank-dh.de",93],["volksbank-freiburg.de",93],["volksbank-international.de",93],["volksbank-kirnau.de",93],["volksbank-mittleres-erzgebirge.de",93],["volksbank-remseck.de",93],["volksbank-thueringen-mitte.de",93],["volksbank-trossingen.de",93],["volksbankeg.de",93],["vr-nopf.cz",93],["vrb-spangenberg.de",93],["vrbankeg.de",93],["vrbankimmobilien.de",93],["vvr-bank.de",93],["vvrbank-krp.de",93],["news.sky.com",95],["lippu.fi",[96,97,98]],["starcart.com",99],["sydan.fi",100],["cmore.fi",102],["europe1.fr",103],["etsy.com",104],["technopat.net",[105,106]],["justeat.it",[107,108,109]],["pyszne.pl",[107,108,109]],["takeaway.com",[107,108,109]],["thuisbezorgd.nl",[107,108,109]],["telekom.com",110],["hemmersbach.com",111],["eurogamer.nl",[112,113]],["eurogamer.es",[112,113]],["eurogamer.cz",[112,113]],["eurogamer.net",[112,113]],["eurogamer.pl",[112,113]],["eurogamer.pt",[112,113]],["bt.dk",116],["dlalakierni.pl",[117,118,119]],["officiallondontheatre.com",120],["constantin.film",121],["twitter.com",122],["x.com",122],["mundodeportivo.com",[123,124]],["nordax.com",125],["youtube.com",126],["empik.com",[127,128,129,130]],["ubs.com",131],["vicko.gr",132],["call-a-pizza.de",133],["jeuxvideo.com",[134,135]],["player.boom973.com",136],["privacy.ledauphine-presse.fr",[137,138]],["canva.com",139],["thegreencity.gr",140],["ohra.nl",141],["sandberg.world",142],["everyeye.it",143],["larousse.fr",[143,234]],["20min.ch",[143,249]],["milwaukeetool.eu",[143,269]],["costcobusinessdelivery.com",[143,273]],["olympics.com",[143,275]],["breitbart.com",144],["saniweb.nl",145],["uswitch.com",146],["ferienpiraten.ch",147],["holidaypirates.com",147],["piratinviaggio.it",147],["travelpirates.com",147],["urlaubspiraten.at",147],["urlaubspiraten.de",147],["vakantiepiraten.nl",147],["viajerospiratas.es",147],["voyagespirates.fr",147],["wakacyjnipiraci.pl",147],["stadtmobil.de",148],["coinbase.com",[149,150]],["go-e.com",151],["multiplayer.it",[152,153]],["ansa.it",[152,154]],["zeit.de",155],["starcar.de",156],["hubsite365.com",157],["notion.so",158],["stergioufamily.gr",161],["viss.nu",162],["goed.at",163],["babolat-tenis.pl",164],["denonmarkabolt.hu",164],["monocerus.pl",164],["plastiflora.pl",164],["s4home.pl",164],["salonydenon.pl",164],["vipera.com.pl",164],["zdrowomania.pl",164],["avstore.pl",165],["bednarek.sklep.pl",165],["byinsomnia.com",165],["foto-tip.pl",165],["handloteka.net",165],["hiprom.pl",165],["meblewypoczynkowe.pl",165],["plantica.pl",165],["produkcjakartonow.pl",165],["supportart.pl",165],["yoclub.pl",165],["audioforum-berlin.de",166],["salonydenon.cz",166],["sj.se",167],["omgevingsloketinzage.omgeving.vlaanderen.be",168],["snowandrock.com",[169,170]],["racingnews365.com",[171,172]],["zdf.de",173],["microbit.org",174],["ab.gr",176],["tameteo.com",177],["tempo.pt",177],["yourweather.co.uk",177],["meteored.cl",177],["meteored.mx",177],["tempo.com",177],["ilmeteo.net",177],["meteored.com.ar",177],["daswetter.com",177],["rtl.de",179],["collectibles.mclaren.com",180],["tobis.de",181],["chip.de",182],["lekarnaave.cz",183],["lekarnalemon.cz",183],["algarvevacation.net",184],["3sat.de",185],["crossnative.com",186],["trezor.io",189],["rb.cz",190],["mafu.de",192],["paf.com",193],["flip.gr",194],["andersiahotel.pl",195],["tether.to",196],["med.uni-rostock.de",197],["advalvas.vu.nl",198],["chron.com",199],["greenwichtime.com",199],["houstonchronicle.com",199],["mysanantonio.com",199],["seattlepi.com",199],["sfchronicle.com",199],["sfgate.com",199],["thetelegraph.com",199],["timesunion.com",199],["24ur.com",200],["greencaffenero.pl",201],["getdigitalradio.com",203],["sap.com",[204,205,206]],["oxxio.nl",[207,208,209]],["ouraring.com",210],["seb.lv",211],["seb.lt",211],["seb.ee",211],["faz.net",212],["as.com",[215,216]],["generali.at",[217,218]],["butterflyshop.dk",219],["praxis.nl",220],["brico.be",220],["correos.es",221],["bankinter.com",222],["mishcon.com",223],["lufthansa.com",224],["anwb.nl",225],["fishingclash.game",226],["bancaditalia.it",227],["kent.gov.uk",228],["www.aok.de",230],["meine.aok.de",231],["haut-koenigsbourg.fr",232],["copilot.microsoft.com",233],["matkahuolto.fi",235],["wolff-mueller.de",236],["vrtranspoint.fi",237],["gld.nl",238],["omroepwest.nl",238],["omroepzeeland.nl",238],["omropfryslan.nl",238],["rijnmond.nl",238],["rtvdrenthe.nl",238],["rtvnoord.nl",238],["rtvutrecht.nl",238],["stilord.com",239],["stilord.pl",239],["stilord.de",239],["stilord.fr",239],["ls-tc.de",241],["mobile-fueling.de",242],["bfmtv.com",243],["pieceauto-discount.com",244],["onlia.ca",245],["spieljochbahn.at",246],["sogeti.com",247],["transferxl.com",248],["allocine.fr",250],["postnl.nl",251],["pharmacieauterive-ropars.mesoigner.fr",252],["seen.es",253],["my.smartpost.ee",254],["extrudr.com",255],["vilagitasok.hu",256],["yazio.com",257],["kosik.cz",258],["inps.it",259],["versorgungslandkarte.de",260],["hrlab.de",261],["sazkamobil.cz",262],["svepomoci.cz",263],["leabank.no",264],["tlkhorgaszaruhaz.hu",265],["derstandard.at",266],["derstandard.de",266],["cencenelec.eu",267],["white.market",268],["mytheresa.com",270],["canatura.com",271],["fastnedcharging.com",272],["seznam.cz",274],["heise.de",276],["issue-council.robertsspaceindustries.com",277],["marca.com",278],["index.hr",279],["ilmessaggero.it",[280,281]]]);

const entitiesMap = new Map([["lidl",13],["www.google",79],["just-eat",[107,108,109]],["lieferando",[107,108,109]],["coolstuff",175],["wolfswinkel",229],["esprit",240]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedSetCookie(
    name = '',
    value = '',
    offsetExpiresSec = '',
    path = ''
) {
    if ( name === '' ) { return; }

    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-cookie', name, value, path);
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

    const done = setCookieFn(
        true,
        name,
        value,
        expires,
        path,
        safeSelf().getExtraArgs(Array.from(arguments), 4)
    );

    if ( done ) {
        safe.uboLog(logPrefix, 'Done');
    }
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
                return { matchAll: true };
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
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    return safe;
}

function setCookieFn(
    trusted = false,
    name = '',
    value = '',
    expires = '',
    path = '',
    options = {},
) {
    // https://datatracker.ietf.org/doc/html/rfc2616#section-2.2
    // https://github.com/uBlockOrigin/uBlock-issues/issues/2777
    if ( trusted === false && /[^!#$%&'*+\-.0-9A-Z[\]^_`a-z|~]/.test(name) ) {
        name = encodeURIComponent(name);
    }
    // https://datatracker.ietf.org/doc/html/rfc6265#section-4.1.1
    // The characters [",] are given a pass from the RFC requirements because
    // apparently browsers do not follow the RFC to the letter.
    if ( /[^ -:<-[\]-~]/.test(value) ) {
        value = encodeURIComponent(value);
    }

    const cookieBefore = getCookieFn(name);
    if ( cookieBefore !== undefined && options.dontOverwrite ) { return; }
    if ( cookieBefore === value && options.reload ) { return; }

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

    if ( trusted ) {
        if ( options.domain ) {
            cookieParts.push(`; domain=${options.domain}`);
        }
        cookieParts.push('; Secure');
    }

    try {
        document.cookie = cookieParts.join('');
    } catch(_) {
    }

    const done = getCookieFn(name) === value;
    if ( done && options.reload ) {
        window.location.reload();
    }

    return done;
}

function getCookieFn(
    name = ''
) {
    for ( const s of document.cookie.split(/\s*;\s*/) ) {
        const pos = s.indexOf('=');
        if ( pos === -1 ) { continue; }
        if ( s.slice(0, pos) !== name ) { continue; }
        return s.slice(pos+1).trim();
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

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
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
