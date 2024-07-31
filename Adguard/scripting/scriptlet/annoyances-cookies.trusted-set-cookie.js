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

const argsList = [["datr","__GMZCgwVF5BbyvAtfJojQwg","1year","","reload","1"],["ig_did","0C826C21-17C3-444A-ABB7-EBABD37214D7","1year","","reload","1"],["euconsent-v2","CPt3fQAPt3fQACNAFAENDLCgAAAAAAAAACiQAAAOCgDAB-AIsAZ8A6QDBAHBAAAA.YAAAAAAAAAAA","1year"],["tracking-opt-in-status","rejected","1year"],["addtl_consent","1~","1year"],["dm-euconsent-v2","CPt6yMAPt6yMABpAGAENDECgAAAAAH_AAAqIAAAS3AJMNW4gC7MocGbQMIoEQIwrCQigUAEFAMLRAQAODgp2VgE-sIkAKAUARgRAhwBRkQCAAASAJCIAJAiwQAAAiAQAAgAQCIQAMDAIKACwEAgABAdAxRCgAECQgSIiIhTAgKgSCAlsqEEoLpDTCAKssAKARGwUACIJARWAAICwcAwRICViwQJMQbRAAMAKAUSoVqKT00BCxmQAAAAA","1year"],["consentUUID","5ffc4740-d276-4a4b-8ed0-4b68feeed1ba_34","","","domain","theguardian.com"],["fig_save_consent","iTTPgpSWqAGGcd3vV88zNDbHsABxE1hB","1year"],["euconsent-v2","CPubvkAPubvkAAHABBENDMCgAAAAAAAAAB5YAAAAAAAA.YAAAAAAAAAAA","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0008%3A0","1year"],["_scw_rgpd_hash","408362395"],["PUR_SUBSCRIPTION","PREMIUM"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false}","1year"],["cb","1_1970_01_01_2-3","1year","","reload","1"],["datr","mWTaZBxAoW8lFl0v3EpECGYi","1year","","reload","1"],["COOKIES_CONSENT","essential"],["myscript","{%22acceptance%22:true%2C%22analytics%22:false}"],["tm_cookie_setting","Analytics","","","reload","1"],["BCP","AD=0&AL=0&SM=0"],["cookies","{\"system\":1,\"target\":0}"],["CookieControl","{\"interactedWith\":true,\"acceptedCategories\":[\"essentials\"]}"],["cookie_preference","functional"],["trackingPermissionConsentsValue","%7B%22cookies_analytics%22%3Afalse%2C%22cookies_personalization%22%3Afalse%2C%22cookies_advertisement%22%3Afalse%7D"],["euconsent-v2","CPzEX8APzEX8ADtACBESAUEgAAAAAAAAAAiQAAAAAAAA"],["euconsent-v2-addtl","%20"],["pfUserCookPolicy","12562660:1"],["viucom-cookie-accept","[\"technical_necessary\"]"],["BN.User.CookieConsent","CAE%3D"],["CookieConsent","{stamp:%27BvqlZ34xqOpzSOaxY1VgwOy5CZ1lfC4Xs2JNiDqz9M4rNuyyAY56Jg==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:1%2Cutc:1697932000537}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:2}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:3}","1year"],["CookieConsent","{stamp:%27fbbiPQWa8SRQm47Ge8hRVOAPAgw2jXlG8o/+hp1euVVi1qtFQj1O3w==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:4}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:5}","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:false%2Cmethod:%27explicit%27%2Cver:6}","1year"],["SK.Website.ConsentManager","W1siYmFzZSIsdHJ1ZV0sWyJnb29nbGVhbmFseXRpY3MiLGZhbHNlXSxbIm1ldGFwaXhlbCIsZmFsc2VdXQ=="],["consent","%7B%22level%22%3A%5B%22necessary%22%5D%2C%22revision%22%3A0%2C%22data%22%3A%7B%22id%22%3A%22DarYF7gx7v%22%7D%2C%22rfc_cookie%22%3Atrue%7D"],["CookieConsents","{\"StrictlyNecessary\":true,\"Analytical\":false,\"Performance\":false,\"AdvertisingAndTargeting\":false,\"timestamp\":\"\"}"],["cookie-consent-1","{\"optedIn\":true,\"functionality\":false,\"statistics\":false}"],["kmt_rd","no-consent","","","reload","1"],["cr_consent","2|tracking=false+analytics=false+marketing=false","","","reload","1"],["hbl_cookie_prefs_v1","[%22Essential%22]"],["mmc-cookie-consent","{\"Id\":\"c2457eddbecc20cbab3869374900e864\",\"CategoryID\":4}","1year"],["fixami.app_state","eyJzdGF0ZSI6eyJpc1RheEluY2x1ZGVkIjp0cnVlLCJpc0ZpcnN0VmlzaXQiOnRydWUsImlzQ3VzdG9tZXJTZXJ2aWNlTW9kYWxPcGVuIjpmYWxzZSwiYWNjZXB0ZWRDb29raWVzIjoiMCIsImhhc0FjY2VwdGVkQ29va2llcyI6dHJ1ZSwiaGFzQWNjZXB0ZWRNYXJrZXRpbmdDb29raWVzIjp0cnVlLCJoYXNBY2NlcHRlZFN0YXRpc3RpY3NDb29raWVzIjp0cnVlfSwidmVyc2lvbiI6MH0="],["website_cookies_bar","{\"required\": true, \"optional\": false}"],["FCCDCF","%5Bnull%2Cnull%2Cnull%2C%5B%22CP2G1QAP2G1QAEsACDENAdEgAAAAAAAAAAwIAAAGfgAgGfAA%22%2C%221~%22%2C%22EA7F77A0-0F26-47A6-A8A4-74D65175A664%22%5D%2Cnull%2Cnull%2C%5B%5D%5D"],["Arena Cookie Consent","{\"categories\":[\"necessary\"],\"level\":[\"necessary\"],\"revision\":0,\"data\":null,\"rfc_cookie\":false,\"consent_date\":\"1970-00-00T00:00:00.000Z\",\"consent_uuid\":\"00000000-0000-0000-0000-000000000000\",\"last_consent_update\":\"1970-01-01T00:00:00.000Z\"}","1year"],["euconsent-v2","CP2KIMAP2KIMAAHABBENAcEgAAAAAAAAAAiQAAAAAAEEoAMAARBqDQAYAAiDUKgAwABEGopABgACINQ6ADAAEQaiEAGAAIg1BIAMAARBqGQAYAAiDUAA.YAAAAAAAAAAA","1year","","domain","softonic.com"],["swapcard-cookie-consent","%7B%22accepted%22%3Afalse%7D"],["cookies-consent","agree"],["cookie_consent","100","1year"],["consent_setting","analytics%3A0%7Cfunctional%3A1%7Cmarketing%3A0","","","reload","1"],["user_cookie_consent","essential"],["cookieConsent","functional=1&analytics=0&marketing=0","","","reload","1"],["euconsent-v2","CP20-YAP20-YAAKAyBENAfEgAAAAAAAAAAwIAAAI8gBAGfAR4AAA.YAAAAAAAAAAA","1year"],["consentUUID","cefc5c9f-0e4c-4d6f-ad00-41a1e49409ed_27_29"],["uxcon","enforce=false&p13n=false&ads=false","","","domain","walmart.ca"],["OptanonAlertBoxClosed","$currentDate$","1year"],["cookie_consent","necessary%3A1%2Cstatistics%3A0%2Cmarketing%3A0"],["FTConsent","marketingBypost%3Aoff%2CmarketingByemail%3Aoff%2CmarketingByphonecall%3Aoff%2CmarketingByfax%3Aoff%2CmarketingBysms%3Aoff%2CenhancementBypost%3Aoff%2CenhancementByemail%3Aoff%2CenhancementByphonecall%3Aoff%2CenhancementByfax%3Aoff%2CenhancementBysms%3Aoff%2CbehaviouraladsOnsite%3Aoff%2CdemographicadsOnsite%3Aoff%2CrecommendedcontentOnsite%3Aon%2CprogrammaticadsOnsite%3Aoff%2CcookiesUseraccept%3Aoff%2CcookiesOnsite%3Aoff%2CmembergetmemberByemail%3Aoff%2CpermutiveadsOnsite%3Aoff%2CpersonalisedmarketingOnsite%3Aoff","","","domain","ft.com"],["cookie_preferences","{%22marketing%22:false%2C%22analytics%22:false}"],["gsbbanner","closed"],["consent","%7B%22functional%22%3A%7B%22consent%22%3Atrue%7D%2C%22analytical%22%3A%7B%22consent%22%3Afalse%7D%2C%22personalization%22%3A%7B%22consent%22%3Afalse%7D%2C%22geolocation%22%3A%7B%22consent%22%3Afalse%7D%2C%22ads%22%3A%7B%22consent%22%3Afalse%7D%7D"],["server_consent","%7B%22functional%22%3A%7B%22consent%22%3Atrue%7D%2C%22analytical%22%3A%7B%22consent%22%3Afalse%7D%2C%22personalization%22%3A%7B%22consent%22%3Afalse%7D%2C%22geolocation%22%3A%7B%22consent%22%3Afalse%7D%2C%22ads%22%3A%7B%22consent%22%3Afalse%7D%7D"],["server_addtl_consent","1~"],["N0_CONSENT","essential"],["consents","essential"],["ho_cookie_consent","essential"],["LEGO_COOKIE_SETTINGS","{\"preferences\":[{\"key\":\"necessary\",\"value\":true},{\"key\":\"analytics\",\"value\":false},{\"key\":\"legomarketing\",\"value\":false},{\"key\":\"thirdparty\",\"value\":false}]}"],["LEGO_COOKIE_SETTINGS","{\"preferences\":[{\"key\":\"analytics\",\"value\":false},{\"key\":\"legomarketing\",\"value\":false},{\"key\":\"necessary\",\"value\":true},{\"key\":\"thirdparty\",\"value\":false}]}"],["LEGO_OPT_OUT_SETTINGS","{\"preferences\":[{\"key\":\"doNotAdvertiseBasedOnMyPersonalData\",\"value\":true}]}"],["cookie_preferences","{%22performance%22:false%2C%22marketing%22:false%2C%22necessary%22:true}"],["veriff_cookie_consent","%7B%22performance%22%3Afalse%2C%22functionality%22%3Afalse%2C%22targeting%22%3Afalse%7D"],["USE_COOKIE_CONSENT_STATE","{%22necessary%22:true}"],["consentCookie","{\"arena-functional\":true,\"sentry\":false,\"cloudflare\":true,\"google-tag-manager\":false,\"google-analytics\":false,\"facebook-ads\":false,\"google-ads\":false,\"bing-ads\":false,\"arena-advertising\":false}","","","domain","arena.pl"],["cookieConsent","technical=true&analytics=false&advertising=false"],["acceptTracking","{\"technical\":true,\"analytics\":false,\"advertising\":false}"],["gdprConsent","%7B%22adv%22%3Afalse%2C%22func%22%3Afalse%2C%22tech%22%3Afalse%7D","","","domain","deal.by"],["cookie_preference","functional","","","domain","zwenkwielen.net"],["__consent","%5B%22required%22%5D"],["sncc","P%3D15%3AV%3D33.0.0%26C%3DC01%26D%3Dtrue","","","domain","biomedcentral.com"],["bolConsentChoices","source#OFC|version#6|int-tran#false|ext-tran#false|int-beh#false|ext-beh#false","","","domain","www.bol.com","reload","1"],["cookie_consent","{\"purposes\":{\"marketing\":false,\"analytics\":false}}"],["cookiesjsr","%7B%22functional%22%3Atrue%2C%22analytics%22%3Afalse%2C%22facebook_pixel%22%3Afalse%2C%22iframe%22%3Atrue%2C%22video%22%3Atrue%2C%22facebook_messenger%22%3Afalse%7D"],["cookieconsent_status","dismiss"],["cpmt_xa","16200","","","domain","open.online"],["euconsent-v2","CQBYokAQBYokADaAAAENA7EgAAAAAAAAABCYAAAAAADBIMIACAAFwAUABUADgAHgAQAAvgBkAGoAPAAiABMACqAG8APQAfgBCQCGAIkARwAlgBNADAAGHAMoAywBsgDngHcAd8A9gD4gH2AfsA_wEAAIpARcBGACNQEiASWAn4CgwFQAVcAuYBegDFAGiANoAbgA4gCHYEegSKAnYBQ4CjwFIgLYAXIAu8BeYDBgGGwMjAyQBk4DLgGZgM5gauBrIDYwG0ANvAbmA3UBwQDkwHLgPHAe0A_4CCYEGAIQwQtBC8CHMEPQQ_gj6CP4EigJIQSYBJkCWYEtwJfATAgmWCZgEzgJqgTcAnMBOkCdwE8AKEAULAoqBSUlA7AAQAAsACgAHAAeABEACYAFUALgAYoBDAESAI4AUYAwABsgDvAH5AVEBVwC5gGKAOoAhABDoCJgEXwI9AkUBR4CmgFigLYAXnAyMDJAGTgM5AawA28B7QEAQIHgQYAhCBD0CPoEigJIASVAl0BL6CZYJmATOAmqBNwCcIE5gJ3ATwAnmBRUCko6DsAAuACgAKgAcABBAC4AL4AZABqADwAIgATAApgBVgC4ALoAYgA3gB6AD9AIYAiQBLACaAE4AKMAYAAwwBlADRAGyAOeAdwB3wD2APiAfYB-gD_gIoAjEBHQElgJ-AoMBUQFXALEAXOAvIC9AGKANoAbgA4gB1AD7AIQAQ6Ai-BHoEigJkATsAoeBR4FIAKaAVYAsWBbAFsgLdAXAAuQBdoC7wF5gL6AYMAw0Bj0DIwMkAZOAyqBlgGXAMzAZyA00BqsDVwNYAbQA28BuoDiwHJgOXAeOA8kB7QD6wH3AP7Af8BAECDAELYIcgh0BD2CPoI_gSKAkgBJkCWYEugJfATAAmYBM4CaoE3AJvAThAnMBOmCdoJ3ATwAnmBQACgwFCwKJAUVApKQgaAALAAoAC4AGoATAAqgBcADEAG8APQAjgBgADngHcAd4A_wCKAEpAKDAVEBVwC5gGKANoAdQBHoCmgFWALFAWiAuABcgDIwGTgM5AaqA8cB_YEGAIUAQtAh0BD0CRQEkAJdATOAnMBO4CeAE8wKDAUVApKUgtAALgAoACoAHAAQQAyADUAHgARAAmABSACqAGIAP0AhgCJAFGAMAAZQA0QBsgDnAHfAPsA_QCLAEYgI6AkoBQYCogKuAXMAvIBigDaAG4AOoAe0A-wCHQETAIvgR6BIoCdgFDgKQAU0AqwBYoC2AFwALkAXaAvMBfQDDYGRgZIAyeBlgGXAM5gawBrIDbwG6gOCAcmA8UB44D2gH9gP-AgmBBgCEIELQIZwQ5BDqCPoI_gSKAkhBJgEmQJZgS6Al8BMACZgEzgJqgTeAnMBO4CeAE8wKFgUVApKWgIgA1AEcAMAAdwBegD7AKaAVYAzMB44EPQJmATcAnMBO4CeAFJA.YAAAAAAAAAAA","","","domain","open.online"],["euconsent","CQB2TAAQB2TAAGRABAENA8EgAAAAAAAAAAAAAAAUrgAAAAAA.YAAAAAAAAAAA,","","","domain","ilovefreegle.org"],["cookieyes-consent","consent:no,action:yes,necessary:yes,functional:no,analytics:no,performance:no,advertisement:no,other:no","","","domain","ilovefreegle.org"],["CONSENTMGR","c14:1|c1:0|c2:0|c3:0|c4:0|c5:0|c6:0|c7:0|c8:0|c9:0|c10:0|c11:0|c12:0|c13:0|c15:0|ts:1721686992938|consent:true","","","domain","eurostar.com"],["SOCS","CAISNQgQEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjQwNTE0LjA2X3AwGgJmaSADGgYIgOu0sgY","1year"],["_EVAcookieaccept","Y","1year"],["_EVAGDPRfunctional","Y","1year"],["OptanonConsent","groups=C0004%3A0%2CC0003%3A1%2CC0002%3A0%2CC0001%3A1%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPt6LrpPt6LrpAcABBENDKCgAAAAAAAAAAYgGBtX_T5eb2vj-3ZcN_tkaYwP55y3o2wzhhaIke8NwIeH7BoGJ2MwvBV4JiACGBAkkiKBAQVlHGBcCQAAgIgRiSKMYk2MjzNKJLJAilMbO0NYCD9mnkHT2ZCY70-uO__zvneAAAAYJABAXmKgAgLzGQAQF5joAIC8yUAEBeZSACAvMAAA.YAAAAAAAAAAA","1year","","reload","1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A1%2CBG57%3A0%2CBG58%3A0%2CBG59%3A0","1year"],["gravitoData","{\"NonTCFVendors\":[{\"id\":1,\"name\":\"Facebook\",\"consent\":true},{\"id\":3,\"name\":\"Google\",\"consent\":true},{\"id\":9,\"name\":\"Twitter\",\"consent\":true},{\"id\":10,\"name\":\"Wordpress\",\"consent\":true},{\"id\":15,\"name\":\"Linkedin\",\"consent\":true},{\"id\":19,\"name\":\"Vimeo\",\"consent\":true},{\"id\":27,\"name\":\"Apple\",\"consent\":true}]}","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A0%2CC0005%3A0","1year"],["ladies-cookies-overlay","%7B%22cookie-category-essential%22%3Atrue%2C%22cookie-category-stats%22%3Afalse%2C%22cookie-category-map_services%22%3Atrue%7D","","","reload","1"],["opt_out","analyse,werbe"],["OptanonConsent","groups=C0001%3A1%2CC0003%3A1%2CSPD_BG%3A1%2CC0002%3A1%2CC0004%3A1%2CC0005%3A1","","","reload","1"],["STYXKEY_your_privacy_settings","%7B%22strict%22%3A%221%22%2C%22thirdparty%22%3A%221%22%2C%22advanced%22%3A%220%22%7D","1year","","reload","1"],["OptanonConsent","groups=C0001%3A1%2CC0009%3A0%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["allowCookies","{\"uvc\":true,\"__cfduid\":true}"],["cookieConsent","%5B%7B%22name%22%3A%22essenziell%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22komfort%22%2C%22value%22%3A%22on%22%7D%2C%7B%22name%22%3A%22marketing%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22statistik%22%2C%22value%22%3A%22off%22%7D%2C%7B%22name%22%3A%22speichern%22%2C%22value%22%3A%22on%22%7D%5D","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1","1year"],["consents",":4:6:7:8:9:10:11:12:13:19:"],["__cmpcpc","__1_2__"],["__cmpcvc","__c24599_s94_c24102_s40_s1052_s65_c24103_s23_c9953_c24290_c24098_s26_s2612_s135_s1104_s1409_s905_s24_c24202_c22143_c21373_s77_s30_U__"],["__cmpconsentx40263","BPuKNGaPuKNGaAfEHBFIABAAAAA_mABAfyA"],["consent-levels","1-1_2-1_3-0_4-0","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A1","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A1"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2C5%3A0%2CBG40%3A0%2CBG41%3A0%2CBG42%3A0","1year"],["euconsent-v2","CPuy0IAPuy0IAAHABBENDNCgAAAAAAAAAAAAJNFB_G5cSWNhOHJvY9tUaQ0HwFR4o6AgDgCZA4wBCRIAMIwF0GAAIEBAIAgAAAAEAAJAAAAEAAHAAAAAAIEBASCIAEAAIBAAICAAAAABQgAACABJGwAAEAAAAEQEABQAgAIAQBuAQEAAAAAAAAAAAAgBAABBAAAAAAAgAAAIAAAAAAgAEAAAAAAAAAAAABAAEAAAAAEAAABIaADAAEExRUAGAAIJihIAMAAQTFEQAYAAgmKMgAwABBMUdABgACCYpCADAAEExSUAGAAIJilIAMAAQTFA.YAAAAAAAAAAA"],["p","eyJnZHByX3RwIjoyLCJnZHByX3AiOjF9","1year","","reload","1"],["cmplz_consented_services","{\"youtube\":true}"],["xf_consent","%5B%22_third_party%22%5D","","","reload","1"],["cookieConsent","functional","1year","","reload","1"],["je-cookieConsent","necessary","1year"],["customerCookieConsent","%5B%7B%22consentTypeId%22%3A103%2C%22consentTypeName%22%3A%22necessary%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A104%2C%22consentTypeName%22%3A%22functional%22%2C%22isAccepted%22%3Atrue%7D%2C%7B%22consentTypeId%22%3A105%2C%22consentTypeName%22%3A%22analytical%22%2C%22isAccepted%22%3Afalse%7D%2C%7B%22consentTypeId%22%3A106%2C%22consentTypeName%22%3A%22personalized%22%2C%22isAccepted%22%3Afalse%7D%5D","1year"],["cookie-optin","{%22version%22:1%2C%22settings%22:{%22required%22:true%2C%22analytical%22:false%2C%22marketing%22:false%2C%22thirdparty%22:true}}","1year"],["cookiefirst-consent","%7B%22cookiefirst%22%3Atrue%2C%22google_analytics%22%3Atrue%2C%22google_tag_manager%22%3Atrue%2C%22linkedin_ads%22%3Afalse%2C%22hubspot%22%3Atrue%2C%22twitter%22%3Afalse%2C%22active-campaign%22%3Atrue%2C%22email-marketing%22%3Atrue%2C%22bing_ads%22%3Afalse%2C%22type%22%3A%22granular%22%7D"],["consentUUID","f2fed351-3e4d-4e37-a3d6-bf942c6146e1_25"],["euconsent-v2","CP0C_wAP0C_wAAGABBENDbCgAP_AAAAAAApAJLNV_H__bX9r8X7_6ft0eY1f9_jz7uQxBhfJk-4F3LvW_JwX32E7NF36tq4KmRoEu1JBIUNlHIHUDUmwaogVrzHsakWcpTNKJ6BkkFMRU2dYCF5um4tjeQKY5_p_d3f52T-9_dv839zz38VHv3cZX--12PDdU5-9Dfn9fRfb89IL9_78v4v8_t_rk2_eT13_tetr_DAAAAaEgogAIAAXABQAFQAOQAeACAAGAAMoAaABqADwAIgATAAngBVADMAG8APQAfgBCQCGAIkARwAlgBNAClAGAAMOAZQBlgDZgHcAd8A9gD4gH2AfsA_wEAAIpARcBGACNAElAJSAUGAp4CrgFzAMUAaIA2gBuADiAIdASIAnYBQ4CjwFIgLYAXIAu8BgwDDYGRgZIAycBlwDOQGfANIgauBrIDbwG6gOCgcmBygDlwHjgPaAfSBBgCEMELQQvAhyBD0CH4EcQI-gR_AkUBJAIACAJoAtwNAEAKeAh0BnwDlBEAQAp4CHQGfAOUFQAwGfAOUAheMgBgM-AcoBC8hA4AAWABQAFwAMQAagBMACmAFUALgAYgA3gB6AEcAKUAYAAyoB3AHeAP8AigBJQCUgFBAKfAVEBVwC5gGKANoAc4A6gCVAFNAKsAWKAsoBaIC4AFyAMjAZOAzkBnwDRAGqgOAAcoA8cB9IEGAIUAQtAheBDoCHoEcQJFASQHQaQAFwAUABUADkAHwAgABdADAAMoAaABqADwAIgATAAngBVgC4ALoAYgAzABvAD0AH6AQwBEgCWAE0AKMAUoAwABhgDKAGiANkAd4A9oB9gH6AP8AikBFgEYAI6ASUAlIBQQCnwFRAVcAsQBc4C8gL0AYoA2gBuADiAHOAOoAfYBDoCLwEiAJUATIAnYBQ4CjwFNAKsAWKAsoBbAC3QFwALkAXaAu8BfQDBgGGgMegZGBkgDJwGVAMsAZcAzMBnIDPgGiANIAarA1cDWAG3gN1AcXA5MDlAHLgPHAe0A-kB9YEAQIMAQtAhfBDkEOgIegRxAjsBH0CP4EigJIDgAIC3CUDQABAACwAKAAcAA_ADAAMQAeABEACYAFUALgAYoBDAESAI4AUYAwABsgDvAH4AU-AqICrgFzAMUAdQBDoCJgEXgJEAUeAsUBZQC2IGRgZIAycBnIDPgGkANYAbeA4AB7QD6QIAgQPAgwBCECF4EPQI4gSKAkgBJUkABAW4UgpAALgAoACoAHIAPgBBADAAMYAaABqADwAIgATAAngBSACqAGIAMwAfoBDAESAKMAUoAwABlADRAGyAO-AfgB-gEWAIwAR0AkoBKQCgwFRAVcAuYBeQDFAG0ANwAdQA9oB9gEOgImAReAkQBOwChwFWALFAWwAuABcgC7QF9AMNgZGBkgDJwGWAMuAZyAz4BpEDWANZAbeA3UBwUDkwOUAcuA8UB44D2gH0gQYAhCBC0CF4EM4Icgh0BHECOwEfQI_gSKAkgUAAgLc.YAAAAAAAAAAA","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CSTACK42%3A0","1year"],["eupubconsent-v2","CPwbUmgPwbUmgAcABBENDSCgAAAAAH_AAChQJnNf_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdl-8N3f_X_L8X52M5vF36tqoKuR4ku3bBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PEmlMbM2dYGH9_n9_z-ZKY7___f__z_v-v___9____7-3f3__5__--__e_V_-9zfn9_____9vP___9v-_9_3________3_r9_7_D_-f_87_XWxBQAJMNS4gC7IkZCbaMIoEQIwrCQqgUAFEAkLRAYQurgp2VwE-sBkAIEUATwQAhgBRkACAAASAJCIAJAjgQCAQCAQAAgAVCAQAMbAAPAC0EAgAFAdCxTigCUCwgyISIhTAhKkSCgnsqEEoP1BXCEMssCKDR_xUICNZAxWBEJCxehwBICXiSQPdUb4ACEAKAUUoViKT8wBDgmbLVXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAA.YAAAD_gAAAAA","1year"],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:true%2Cmarketing:true}","1year"],["AtomStore[COOKIES_ACCEPTED]","1","1year","","reload","1"],["AtomStore[FUNCTIONAL_COOKIES_ACCEPTED]","1","1year"],["AtomStore[MARKETING_COOKIES_ACCEPTED]","0","1year"],["solt_cookie_preferences","functional%2Cperformance","1year"],["cookie-layer-settings","{\"id\":\"b2575cbc6f69c6ff02140366ef7473e9\",\"options\":[{\"analytics-is-enabled\":false},{\"komfort-is-enabled\":false},{\"personalisierung-is-enabled\":false},{\"external-data-is-enabled\":true},{\"cf-ga-opt-in\":false},{\"cf-fb-opt-in\":false},{\"cf-go-opt-in\":false},{\"cf-sn-opt-in\":false},{\"cf-am-opt-in\":false},{\"cf-pi-opt-in\":false},{\"cf-tw-opt-in\":false},{\"cf-li-opt-in\":false},{\"cf-te-opt-in\":false},{\"cf-ti-opt-in\":false},{\"cf-ttd-opt-in\":false},{\"external-data-youtube-is-enabled\":true},{\"external-data-spotify-is-enabled\":true},{\"external-data-googlemaps-is-enabled\":true},{\"external-data-universal-is-enabled\":true}]}","1year"],["d_prefs","MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw"],["didomi_token","eyJ1c2VyX2lkIjoiMThhNmQyZGEtOGNmOC02YTE0LWI3OWQtNzViOGU4ZjA2YmYyIiwiY3JlYXRlZCI6IjIwMjMtMDktMDdUMDE6MDc6MTQuNTIwWiIsInVwZGF0ZWQiOiIyMDIzLTA5LTA3VDAxOjA3OjE0LjUyMFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpwaWFuby1ic1hwclg4dyIsImM6bHVjaWRob2xkLXlmdGJXVGY3IiwiYzpzYWxlc2ZvcmNlLUI0WEI1UU5aIiwiYzpsaXZlZnlyZS00Y2JOV1lFeiIsImM6eW91dHViZS1EV3RqQ1VLYiIsImM6YWNjZW5nYWdlLUVXRUx4MzRnIiwiYzpjaGFydGJlYXQtaHhLaEZiQXciLCJjOmFtYXpvbmFkcy05YzVUTkdhaiIsImM6dHdpdHRlcndpLXdVbUJubkt5IiwiYzpmYWNlYm9va3ctMmthN1Z3UTgiLCJjOmdvb2dsZW9wdC1RaGlBZG1WYSIsImM6Z2djcm9sbHVwLW5OSGVpMmFXIiwiYzpmYWNlYm9va2EtZnJVOU01SlkiLCJjOmdvb2dsZWFuYS1HMmJzRUp5VCIsImM6Z29vZ2xlYXVkLUxEalZZa2VhIiwiYzppbnN0YWdyYW0tdFdtSmdKcHEiLCJjOm5ldHF1ZXN0LU4yblc0ZnBHIiwiYzpwcm9jdGVyYW4tSzROdzh4TUMiLCJjOmNvbXNjb3JlLWpVRmM5aWNZIiwiYzpzcG90aW0tM0ZLSDYyeUMiLCJjOnl1c3AtejhOaTQ0Wk0iLCJjOndlbWFzc21lZC1QR1o2M0Z4WSIsImM6ZXZvbG9rLWl6S3o3QVlWIiwiYzpnb29nbGVmaXItSDhrY2lGSkciLCJjOmxhbGlnYS1ZNllRMjJSUiIsImM6YWRzdml1LVZUMjZtM1FiIl19LCJwdXJwb3NlcyI6eyJkaXNhYmxlZCI6WyJnZW9sb2NhdGlvbl9kYXRhIiwiY29tcGFydGlyLWRwSGdKRUphIiwia0VlRHNMQ3AiLCJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIl19LCJ2ZW5kb3JzX2xpIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIl19LCJ2ZXJzaW9uIjoyLCJhYyI6IkRIYUNJQUVJQUl3QVdRQXVnQnNBRDBBSlVBWWdBOFFCLWdFM0FLTUFZb0F6NEI0Z0R6UUh1QWU4QkRnQ1N3R1lnTTFBZXFCQWtDRFlFUkFJamdSSkFpbUJHY0NVUUVzUUphZ1M3QW40QlJVQ3FvRmh3TFVnWWlBem1CcWNEaUFIS0FPbkFkV0E3Q0I3RURfd0lHQVJtZ2tNQkwyQ2M0RTd3S0NBVUhncFNCVHFDczhGb0FMUmdXeUF1ZEJlU0Mtb0dIUU1iZ1k3QUFBQS5ESGFDSUFFSUFJd0FXUUF1Z0JzQUQwQUpVQVlnQThRQi1nRTNBS01BWW9BejRCNGdEelFIdUFlOEJEZ0NTd0dZZ00xQWVxQkFrQ0RZRVJBSWpnUkpBaW1CR2NDVVFFc1FKYWdTN0FuNEJSVUNxb0Zod0xVZ1lpQXptQnFjRGlBSEtBT25BZFdBN0NCN0VEX3dJR0FSbWdrTUJMMkNjNEU3d0tDQVVIZ3BTQlRxQ3M4Rm9BTFJnV3lBdWRCZVNDLW9HSFFNYmdZN0FBQUEifQ=="],["euconsent-v2","CPxurkAPxurkAAHABBENDVCgAP8AAE4AAAiQIkNf_X_fb2vj-_p99_t0eY1P9_6_t6wzjheNk-8NyZ_X_J4Xp2M6rB34pqIKuR4kunLBIQdlHGHcTUgg4IkFoSPsYk2MizJKJ7JEmlMbE2dYGG9vn8TT-ZKY70__f__zvn-r___97oAAhCAABAAAAAgAAIAAAgAIAAAAAAAAAAAAAAAAAAAAAAAADA4tAsy0bqaFsHT0Lpo4igRGjCuJWoBQGUQCwtkBhmTPCnZHAR-wnUAAxAADBByGAFEaAICCIIAkKgIkEOBAqJAIdAACgAUIBAFRIgEoiLAQCAA0B8PAKKAJSLGDKhIidcCMKxIPu-QAAEAQAAIAAQAAAABAJCgAYAAiCgGgAwABEFARABgACIKAqADAAEQUBkAGAAIgoDwAMAARBQIQAYAAiCgTAAwABEFAqABgACIKAAAA.f-AACcAAAAAA"],["cookie_consent","%7B%22allowEssentials%22%3Atrue%2C%22allowFunctional%22%3Atrue%2C%22allowAnalytics%22%3Afalse%2C%22allowMarketing%22%3Afalse%7D"],["SOCS","CAISNQgDEitib3FfaWRlbnRpdHlmcm9udGVuZHVpc2VydmVyXzIwMjMwODI5LjA3X3AxGgJlbiADGgYIgJnPpwY","","","reload","1","domain","youtube.com"],["cad","$now$"],["cc","2.4"],["cp",".16.21."],["cva","W2.0"],["ubs_cookie_settings_2.0.4","0-2-1"],["ConsentChecked","{\"userHasSetCookies\":true,\"functionalityCookies\":true,\"statisticCookies\":false,\"marketingCookies\":false}","","","reload","1"],["allow_cookies","{\"essential\":\"1\",\"functional\":{\"all\":\"1\"},\"marketing\":{\"all\":\"0\"}}"],["euconsent-v2","CPywmUAPywmUAAHABBENDYCsAP_AAH_AAAAAJrNf_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdF-8N3f_X_L8X52M5vF36tqoKuR4ku3bBIUdlHPHcTVmw6okVryPsbk2cr7NKJ7PkmlMbM2dYGH9_n9_z-ZKY7___f__z_v-v___9____7-3f3__5__--__e_V_-9zfn9_____9vP___9v-_9_3________3_r9_7_D_-f_87_XW-8E1ACTDQuIAuwJGQm2jCKBACMKwkKoFABRAJC0QGELq4KdlcBPrARACBFAAcEAIYAUZAAgAAAgCQiACQI4EAgEAgEAAIAFQgEABGwACgAsBAIABQHQsU4oAlAsIMiMiIUwIQpEgoJ7KhBKD9QVwhDLLACg0f8VCAgUAMVgRCQsXocASAlwkkC3VG-AAhACgFFKFYgk9MAA4JGy1B4IAA.f_gAD_gAAAAA"],["didomi_token","eyJ1c2VyX2lkIjoiMThhZDY1NzMtZGY4YS02YzJhLWJkZmUtOGI5ZjkwMDU5MmQwIiwiY3JlYXRlZCI6IjIwMjMtMDktMjdUMTE6MTI6MzcuNzk3WiIsInVwZGF0ZWQiOiIyMDIzLTA5LTI3VDExOjEyOjM3Ljc5N1oiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpkbXB3ZWJlZGktblRCSEFrNDQiLCJjOmFtYXpvbnRhbS1lWTRpTjROViIsImM6YmF0Y2gtYkp0R3R0eEwiLCJjOndhcm5lcmJyby1BUEpXeUFHUCIsImM6ZmFjZWJvb2std0RpR25KV1YiLCJjOnNuYXBjaGF0LWhXMnJNSmZZIiwiYzp0aWt0b2stV2J5cEEzWmQiLCJjOnR3aXR0ZXIteGJERXhKUGsiLCJjOmdvb2dsZWFuYS1YTXFhZ2F3YSJdfSwicHVycG9zZXMiOnsiZW5hYmxlZCI6WyJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIiwiZ2VvbG9jYXRpb25fZGF0YSJdfSwidmVuZG9yc19saSI6eyJlbmFibGVkIjpbImdvb2dsZSJdfSwidmVyc2lvbiI6Mn0="],["_iub_cs-30166201","%7B%22timestamp%22%3A%222023-09-28T08%3A20%3A53.130Z%22%2C%22version%22%3A%221.51.0%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%222%22%3Afalse%2C%223%22%3Atrue%2C%224%22%3Afalse%2C%225%22%3Afalse%7D%2C%22id%22%3A30166201%2C%22cons%22%3A%7B%22rand%22%3A%22e747e3%22%7D%7D"],["didomi_token","eyJ1c2VyX2lkIjoiMThhZWVmZTgtNGJjMS02NjhmLWE5YTgtNmNhM2VmMmQ0NzVkIiwiY3JlYXRlZCI6IjIwMjMtMTAtMDJUMDY6MDY6NDQuODA0WiIsInVwZGF0ZWQiOiIyMDIzLTEwLTAyVDA2OjA2OjQ0LjgwNFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiYzphYi10YXN0eSIsImM6YWNhc3QtQ2M3MmNoWHAiLCJjOmFjcG0tSkIzNEJicmQiLCJjOmFwbG96ZS14NDdKZlhVSyIsImM6YXBwc2ZseWVyLXdETmJrQ2I2IiwiYzphdGludGVybmUtY1dRS0hlSloiLCJjOmJlb3AtdEdSV0hIYUYiLCJjOmJpbmctYWRzIiwiYzpjaGFydGJlYXQiLCJjOmNsaWNraW50ZXh0IiwiYzpkYWlseW1vdGlvLWhyRldwVEtDIiwiYzpzcXVhZGF0YS1lYXN5ZG1wIiwiYzpkeW5hbWljbWEtNzhlUmpLY1YiLCJjOmZhY2Vib29rLXRrQWpXM2k2IiwiYzpmbG91cmlzaC14bnhZTVo2TiIsImM6Z2VuaWFsbHktWjhiUmhxRW4iLCJnb29nbGUiLCJjOmdvb2dsZW1hcC1kRDdDWkNKZyIsImM6aW5mb2dyYW0tcXFoZDNoZk0iLCJjOmluc3RhZ3JhbS1MWmthNlI0NCIsImM6aW5zdGFncmFtIiwiYzpqdXh0YXBvc2UtTVpnSEZmWXgiLCJjOm1hcHM0bmV3cy0zWDlWUVc3NiIsImM6bWljcm9zb2Z0IiwiYzptaWNyb3NvZnQtYW5hbHl0aWNzIiwiYzptaWNyb3NvZnQtb25lZHJpdmUtbGl2ZS1zZGsiLCJjOm15ZmVlbGJhY2siLCJjOm9uZXNpZ25hbC1uS1hmQ3BZcyIsImM6cGxheWJ1enotamhKcUNBeEsiLCJjOnBvb29sLWV3WjY2ZWdmIiwiYzpwb29vbC1WeWhDaXQ3TiIsImM6cHVic3RhY2stV3JDYkV5Y00iLCJjOnNob3J0aGFuZC02R01GSzJCVyIsImM6c291bmRjbG91ZC14S01ER1g0TCIsImM6c3RvcnltYXAtTFpwaWQ3WXEiLCJjOnN1YnNjcmliZS1abXdVZVVDUCIsImM6dGltZWxpbmVqLWU2WFJDS1VYIiwidHdpdHRlciIsImM6dHdpdHRlci1pNnhkQjJyVCIsImM6dmltZW8tSGlNcnpFUEgiLCJjOnlvdXR1YmUiLCJjOnlvdXR1YmUtQ2VWemptSlAiXX0sInB1cnBvc2VzIjp7ImVuYWJsZWQiOlsicmVzZWF1eHNvLTlLYmpid05oIl0sImRpc2FibGVkIjpbImdlb2xvY2F0aW9uX2RhdGEiLCJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIiwiYXVkaWVuY2VtLXhlZGVVMmdRIiwiY29udGVudXN2LWhGVDhpZmRSIiwiY29udGVudXNjLXBYQVZVdDhyIiwibWVzdXJlZGEtaDdHUWVyclQiXX0sInZlcnNpb24iOjIsImFjIjoiQ25XQUdBRmtCSllLZFFBQS5BRm1BQ0FGayJ9"],["euconsent-v2","CPzBFAAPzBFAAAHABBENDYCgAAAAAAAAAAAAJNFB_W_fD2Ni-35_avt0aQ1dwVC_6-UxDgKZB4kFyRpEMKwX3mAKKFXgpKAKGBYEsUZAIQBlHCHEDECwQIERLzHMIAEQJQIAJqJEgFERAkJQCBpZHwMACAIQgHRWATFIiB-HaBroyfhEMaC0AUBQ4AonhMTPAoSdwXCkg7uaHIgIImgFASBAIoYMEEEEBlTkFABAAAkAAABJSADAAEQUCUAGAAIgoDoAMAARBQIQAYAAiCgEgAwABEFARABgACIKAyADAAEQUA0AGAAIgoCoAMAARBQA.YAAAAAAAAAAA"],["CTC","eyJBIjoxNzA4NTg5MjM3MTc1LCJCIjoxNzA4NTg5MjM3MTc1LCJEIjpmYWxzZSwiRSI6dHJ1ZSwiRiI6ZmFsc2UsIkciOmZhbHNlLCJIIjpmYWxzZSwiSSI6Wy01ODM2OSw3ODU1NzVdLCJKIjpbOTgzNTg1LDMwNzJdfQ==","","","reload","1"],["the_green_city","[%22preference%22%2C%22technical%22]"],["consentCookie","%7B%22id%22%3A%22d28cc3d1-22a4-4137-9477-3e82b6936e01%22%2C%22permissions%22%3A%7B%22social%22%3Atrue%2C%22personalization%22%3Afalse%2C%22tracking%22%3Afalse%7D%2C%22createdAt%22%3A%222023-10-13T02%3A54%3A20.54Z%22%7D","","","reload","1"],["cookieconsent_dismissed","1%7C%7C1%7C%7Crt2d2f69if8tq2hiq7dmjejrd2","1year","","reload","1"],["OptanonAlertBoxClosed","$currentDate$"],["OptanonConsent","groups=C0003%3A1%2CC0002%3A1%2CC0001%3A1%2CC0005%3A1%2CC0004%3A1","1year"],["cookiepreferences","necessary#true|marketing#true"],["cookie-preferences","{\"performance\":false,\"marketing\":false,\"functionality\":true,\"social\":true,\"essential\":true}"],["hp__gdpr_consent","!demographics=false!googletagmanager=false!facebook=true!twitter=true!instagram=true!youtube=true!optimize=false!helphero=false!fbpixel=false!iterable=false!kayakWidget=false!vimeo=true!lastminute=false!apple=true!google=true!hotjar=false!getYourGuide=false!gad=false","1year"],["CookieConsent","{stamp:%27Uv9YOAVP5djCBw71lxhE4rNAfTObaGck2Sn3rKWf9dPCYpqcWvAlpA==%27%2Cnecessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1}","1year"],["cm_default_preferences","{%22consent%22:[%22necessary%22%2C%22functional%22]%2C%22region%22:%22DEFAULT%22}"],["cm_eu_preferences","{%22consent%22:[%22necessary%22%2C%22functional%22]%2C%22region%22:%22EU%22}"],["gdpr","{%22version%22:%221.0_tracking%22%2C%22options%22:{%22typo3%22:true%2C%22gdpr%22:true%2C%22openstreetmap%22:true%2C%22vimeo%22:true%2C%22youtube%22:true%2C%22recaptcha%22:true%2C%22googlemaps%22:true%2C%22tracking%22:false}}"],["euconsent-v2","CPtgasAPtgasAAGABCENDECgAAAAAAAAAApAAAAAAAAA.YAAAAAAAAAAA","1year"],["_iub_cs-495815","%7B%22timestamp%22%3A%222023-10-26T10%3A24%3A25.058Z%22%2C%22version%22%3A%221.48.0%22%2C%22consent%22%3Atrue%2C%22id%22%3A495815%2C%22cons%22%3A%7B%22rand%22%3A%2287691d%22%7D%7D","1year"],["_iub_cs-15665353","%7B%22timestamp%22%3A%222023-10-26T10%3A24%3A25.058Z%22%2C%22version%22%3A%221.48.0%22%2C%22consent%22%3Atrue%2C%22id%22%3A495815%2C%22cons%22%3A%7B%22rand%22%3A%2287691d%22%7D%7D","1year"],["privacy_consent","%7B%22essentials%22%3Atrue%2C%22statistics%22%3Afalse%2C%22marketing%22%3Afalse%2C%22maps%22%3Atrue%2C%22youtube%22%3Atrue%7D"],["hs365-accepted-cookies","[{%22description%22:%22Enable%20you%20to%20navigate%20and%20use%20the%20basic%20functions%20and%20to%20store%20preferences.%22%2C%22key%22:%22technically_required%22%2C%22label%22:%22Technically%20necessary%20cookies%22%2C%22isMandatory%22:true}%2C{%22description%22:%22Display%20third%20party%20content%20like%2C%20for%20example%2C%20YouTube%20videos%20or%20twitter%20feeds.%22%2C%22key%22:%223rdParty%22%2C%22label%22:%22Third-Party%20Content%22}]"],["notion_cookie_consent","{%22id%22:%2282a41727-b652-4011-a0a4-13a4499c039a%22%2C%22permission%22:{%22necessary%22:true%2C%22preference%22:true%2C%22performance%22:false%2C%22targeting%22:false}%2C%22policy_version%22:%22v8%22}"],["eupubconsent-v2","CP0tkXAP0tkXAAcABBENAXEwAAAAAAAAAAYgAAAAAAHBAHwAAQADQAOAA8ADIALAAjgBQACuAFsARYAlwBfQDUANUAc4A8gB8gEDAIOARwAn8BQwFFALsAZwA3gB6AD5AIbAReAj0BIoCSwErAJlgTYBNoClwFPgLCgWIBYoC6gF3ALyAYFAw8DEAGLQMhAyMBkwDPwGhANGAaYA1MBroDaAG3AN0AcEA6gB2ADuoHkgeUA96B8gHyhIHAACAAFwAUABUADkAHgAgABhADIANQAeABMACqAG8APQAhIBDAESAI4ASwAmgBSgDDAGWANkAd8A9gD4gH2AfoBAICLgIwARoAlIBQQCoAFXALmAYoA2gBuADiAJEATsAocBR4CkQFNgLYAXIAu8BeYDBgGGgMkAZOAzmBrAGsgN1AcmA5cB44YCgAAEAAwADgAKAAigBOAFgAMIAeAB6AEIAI4ATAAqABXgC2ALkAcwB3AEMAIkARYAlwBSACtAGcANSAbIBwADjAHOAPIAfgBAACMAEmAJ0AUUApcBXgFfALsAX4AzgBsgDbAG8AOOAc0A6gB2QD1AHyAP2AhIBDYCLwEdQJEAkUBJcCWgJeATYAnYBQkCkQKSAU2AsUBaIC5AF0ALuAXoAwIBh4DHoGRgZIAycBnIDPAGhANMga0BrsDcgN0AdQA7gB7wgCcAAEAAwADgAKAAigBOAFgAMIAeAB6AEIAI4ATAArgBbgDmAO4AhgBEgCLAEuAKQAVoAzgBqQDZAOAAcYA5wB5AD5AH4AQAAjABJgCdAFFAKXAV4BXwC7AF-AM4AagA2wBvADjgHNAOyAeoA-QB-wEJAIbAReAjuBIgEigJLgS0BLwCbAE7AKEAUkApuBYgFigLRAXIAugBdwC9AGBAMPAY8AyQBk4DOQGhANMga0BroDdAHUAO4Ae8KARgAigBUAFgAQgAmABcAEcAKQAZQA1ABwAEcAKLAV4BXwC7AF-AM4AbwA5oB-wEegJFAS8AmwBYoC0QFsALuAXoAw8BnIDPAGhQNaA14BuQD3hgCAAEUAKgAsACEAEwARwApABqADgAI4AUWArwCvgF2AL8AZwA3gBzQD9gI9ASKAl4BNgC0QFsALuAXoAw8BnIDPAGhQNaA10B7wD4hwF6AAwAEQAOAA8AC4AGQAWAA5AB8AEcAJoAUAArgBbAC-AGgAQgAiwBHACXAFIALIAXwAwoBmgGcANQAc4A7gB5AD5gIAAgcBBwEIAI4ATiAnwCfgFFAKWAVAArIBdgC9AGcAN4AccA6QB6AD5AIbAREAioBHoCRQElgJWATEAmWBNgE2gKQAUmApcBVQCxAFlALUAWzAugC6gF3AL6AYEAxABiYDFgGQgMmAZeAz8BoQDRoGmAaaA1OBroGwANoAbcA48BywDnwHWAOwAdxA8kDygHpAPeAfEA-UB9oD8R0EcABcAFAAVAA5AB8AIAAXQAwADUAHgATAAqwBcAF0AMQAZgA3gB6gEMARIAlgBNACjAFKAMMAZQA0QBsgDvAHtAPsA_QB_wEWARgAlIBQQCrgFiALmAXkAxQBtADcAHEAOoAi8BIgCVAEyAJ2AUOAo-BTQFNgLFAWwAuABcgC7QF3gLzAYMAw0BjwDJAGTgMqAZYAzkBogDVQGsAN1AcWA5MBy4DxwH1kAFwACAAMgAsACaAF8ANAApABZAC-AGcANQAc4BHACcAE-gKGAooBSwCsgFiALSAXYA3gBzQD0AI9ASLAmwCbQFJgLEgWyBbQC7gF5AMCAYlAzwDPwGhANTAa6A2ABtwDnwHRgOwgeSB5QD3gHxEIEAACwAKAAuABiAEwAKoAXAAxABvAD0AI4Ad4A_wCUgFBAKuAXMAxQBtADqAJUAU0AsUBaIC4AFyAMnAZyA0QBqoDgAHjkgGIABgAHAAXAAyACwAHIARwAmgBUAC-AGQANoAhABSACyAGdANQA1QB3AEAAI4AT6ApoCoAFZALSAXYA3gB8gEVAI6AR6AkUBKwCWoE2ATaApMBVICxAFlALuAYsAyyBngGfgNCAa6A2ABuQDsAHlAPeJQHQAEAALAAoAByAGAAYgA8ACYAFUALgAYoBDAESAI4AUYA2QB3gD8AKuAYoA6gCLwEiAKPAWKAtgBeYDJwGcgNYAcAUgYgALgAoACoAHIAPgBBADAANQAeABMACkAFUAMQAZoBDAESAKMAUoAygBogDZAHfAPwA_QCLAEYAJSAUEAq4BcwC8gGKANoAbgBF4CRAE7AKHAU2AsUBbAC4AFyALtAXmAw0BkgDJwGcwNYA1kBuoDkwHLgPHKAQAALgAZABYADkAI4ATQAqABfADIAG0AQgAiwBHACZAFIALIAXwAwgBnQDUANUAc4A7oB8gH2AQAAjgBPgChgFLgKyArYBYoC6gLsAa8A3gB2wD0AH_AR0Aj0BIoCSwExQJsAm0BSACnwFiALoAXcAvIBfQDAgGLAMmgZ4Bn4DQgGiQNSA1OBroGwAOCAdgA7gB5QD3gHxAPlAA.YAAAAAAAAAAA","1year"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0005%3A0%2CC0004%3A0%2CC0048%3A1%2CC0030%3A1%2CC0046%3A1%2CC0032%3A1%2CC0033%3A1%2CC0057%3A1%2CC0054%3A1%2CC0056%3A1%2CC0043%3A1%2CC0029%3A1%2CC0055%3A1%2CC0026%3A1","1year"],["Vendd:AcceptedCookieConsents","FunctionalityCookies=-29&StatisticsCookies=-30&MarketingCookies=-31"],["sv-cookie-consent","true","","","reload","1"],["CookieConsent","{necessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:1}","1year","","reload","1"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":false,\"6\":false}"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"4\":false,\"5\":true,\"6\":false}"],["_x13eucookie","{\"1\":true,\"2\":false,\"3\":false,\"5\":false,\"6\":true}"],["sj_consent_v1","%7B%22consent%22%3A%7B%22PERSONALIZATION%22%3Afalse%2C%22MARKETING%22%3Afalse%7D%2C%22uuid%22%3A%22d599dc64-52b7-4dc7-bff3-1e18d5cebc1a%22%7D"],["vl-cookie-consent-cookie-consent-date","$now$"],["consent_identifier","16f69085-c6f2-42f6-a4cd-807b24a37c0b","","","reload","1"],["consent_setting","analytics%3A0%7Cfunctional%3A1%7Cmarketing%3A0"],["__cmpcccu33611","aBP1oXvjgABbQABAAIABYADQAJgAXAA0AB4AEQAKAAXAA0gCAAIIASgAmwBWAFcALIAXgAwACHAFsAMcAaYA5AB2AD4AH6AQCAhQCFgEQgI4AjoBJACUAEwAKIAUcApIBSwCngFXALMAX4AwYBjgDIgGcANEAaUA3YBvgDogHbAPYAfoBAcCFwIYAQ8AiQBGACOQEegJGASSAksBKICVgE6gJ9AUGApQBT4CpAFUwKvArABXACvQFgQLDAsQBcIC8QF-AMoAZeAzUBnwDSQGqgNbAa8A2IBwQDiQHbAPLAe2BBwCaAFLwLAgWiAxxBoUGkgNsAbtA3iBvkDfoHBAOHAcUA4sByoDlgHLgOZQc8Bz0DoIHRwOlAdMA6eB1QDroHZAOzgdpA7iB4EDyIHlgPQAelA9YB7gD54H0QPuAffA_GB-YD9AH6gP_AgMBAkCBsEDoIJgQVggtBBiCDQEHAIPAQiAhGhCSEJcIUAhRBDCCGQEOwIeARAAiVBEwCKQEU4I8oSCBIMCQsEioJJ4SXBJeCTYEnQJRgSlAlNBKiCVYErIJXQUaAAoBdA"],["__cmpconsent33611","CP1lmTAP1lmTAAfVnBFIAbEgAIAAAAAAAAigIjQBgBBgJVATOAuIB3IERgRGgDACDASqAmcBcQDuQIjAAA"],["zdf_cmp_client","{%22version%22:%22v1%22%2C%22iteration%22:1%2C%22consents%22:[{%22id%22:%22personalisierung%22%2C%22value%22:false}%2C{%22id%22:%22socialMedia%22%2C%22value%22:true}%2C{%22id%22:%22instagram%22%2C%22value%22:true}%2C{%22id%22:%22twitter%22%2C%22value%22:true}%2C{%22id%22:%22facebook%22%2C%22value%22:true}%2C{%22id%22:%22drittsysteme%22%2C%22value%22:true}%2C{%22id%22:%22erforderlich%22%2C%22value%22:true}%2C{%22id%22:%22erfolgsmessung%22%2C%22value%22:true}]}"],["MBCC","%7B%22version%22%3A1%2C%22functional%22%3Atrue%2C%22analytics%22%3Afalse%7D"],["ConsentStatus","%7B%22necessary%22%3Atrue%2C%22siteFeatures%22%3Atrue%2C%22statistics%22%3Afalse%2C%22marketing%22%3Afalse%7D","","","reload","1"],["CookieConsent","1.0.0.0.0"],["euconsent-v2","CP2APYAP2APYADtACBDEAcEgAAAAAAAAACiQAAAAAAAA"],["OptanonConsent","groups=C0003%3A0%2CC0002%3A0%2CC0004%3A1%2CC0001%3A1%2CC0009%3A0","1year"],["user","%7B%22necessary%22%3Atrue%2C%22preferences%22%3Afalse%2C%22statistics%22%3Afalse%2C%22marketing%22%3Afalse%7D"],["tarteaucitron","!tarteaucitron=true!website=true!analytics=false!regex_analytic=false!regex_ads=true!googletagmanager=false!facebookpixel=false!addtoanyshare=false!youtube=true","1year"],["cookiesSettings","%7B%22necessary%22%3Atrue%2C%22preferential%22%3Atrue%7D","","","reload","1"],["acceptedCookies","{\"necessary\":true,\"functionallity\":true,\"analysis\":false,\"marketing\":false}"],["3sat_cmp_client","{%22version%22:%22v1%22%2C%22iteration%22:1%2C%22consents%22:[{%22id%22:%22erforderlich%22%2C%22value%22:true}%2C{%22id%22:%22erfolgsmessung%22%2C%22value%22:true}%2C{%22id%22:%22personalisierung%22%2C%22value%22:false}%2C{%22id%22:%22socialMedia%22%2C%22value%22:false}%2C{%22id%22:%22twitter%22%2C%22value%22:false}%2C{%22id%22:%22instagram%22%2C%22value%22:false}%2C{%22id%22:%22facebook%22%2C%22value%22:false}%2C{%22id%22:%22drittsysteme%22%2C%22value%22:false}]}"],["cn-cc","%7B%22ccGoogleTagManager%22%3Afalse%2C%22ccGA4%22%3Afalse%2C%22ccSalesviewer%22%3Afalse%7D"],["OptanonConsent","groups=C0004%3A0%2CC0003%3A1%2CC0002%3A0%2CC0001%3A1","1year"],["OnetrustActiveGroups","C0003C0001","1year"],["userConsent","%7B%22essential%22%3Atrue%2C%22analytical%22%3Afalse%2C%22preferential%22%3Atrue%7D"],["rwc","%7B%22data%22%3A%5B%7B%22code%22%3A%22analytics%22%2C%22permissions%22%3A%5B%5D%7D%2C%7B%22code%22%3A%22marketing%22%2C%22permissions%22%3A%5B%5D%7D%5D%2C%22common%22%3A%7B%22accepted%22%3A1703366235541%7D%7D"],["OptanonConsent","groups=C0001%3A1%2CC0005%3A1%2CC0002%3A0%2CC0004%3A0%2CC0003%3A0","1year","","reload","1","domain","mesta.net"],["wmm-visitor_token","4cb8860d-4194-4ab5-be04-10f9a26afaa8"],["cookieConsent","{%22essential%22:true%2C%22tracking%22:false%2C%22marketing%22:false}"],["consts","{%22ad_storage%22:%22denied%22%2C%22analytics_storage%22:%22denied%22%2C%22functionality_storage%22:%22granted%22}"],["_CookiesPolicyAccepted","[%22necessary%22]"],["user_preferences","{\"necessary\":\"on\",\"marketing\":\"off\",\"analytics\":\"off\",\"preferences\":\"off\",\"unclassified\":\"off\"}"],["umr-data-consent","{%22essential%22:true%2C%22functional%22:null%2C%22statistics%22:false%2C%22marketing%22:false}"],["wpsaurus_cookie_banner_plugin","functional"],["_consent_cookie","{\"services\":[\"jwp\",\"twitter\"]}"],["cookies_accept","local,third"],["nero_consents","%7B%22analytics%22%3Afalse%2C%22targeting%22%3Afalse%7D"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0"],["dsm-cookie-preferences","{%221%22:true%2C%222%22:true}"],["notice_gdpr_prefs","0,1,2::implied"],["notice_preferences","2:"],["cmapi_cookie_privacy","permit 1,2,3"],["qubitconsent","Declined"],["qubitconsent_version","2.0.0"],["privacyConsent_type","explicit"],["tracking-preferences","{%22destinations%22:{%22Amplitude%22:false%2C%22Braze%20Cloud%20Mode%20(Actions)%22:false%2C%22Braze%20Web%20Mode%20(Actions)%22:false%2C%22FullStory%22:false%2C%22Hindsight%22:false%2C%22Impact%20Partnership%20Cloud%22:false%2C%22Oura%20Marketing%20Id%20Middleware%20(Oura)%22:false%2C%22Statsig%22:false%2C%22Visual%20Tagger%22:false%2C%22Webhooks%22:false%2C%22Facebook%20Conversions%20API%20(Actions)%22:false%2C%22Google%20Tag%20Manager%22:false%2C%22Snap%20Conversions%20Api%22:false}%2C%22custom%22:{%22functional%22:false%2C%22marketing%22:false%2C%22advertising%22:false}}"],["SEBConsents","%7B%22version%22%3A%222%22%2C%22consents%22%3A%7B%22mandatory%22%3Atrue%2C%22statistical%22%3Afalse%2C%22marketing%22%3Afalse%2C%22simplified_login%22%3Atrue%7D%7D"],["eupubconsent-v2","CP4mi7gP4mi7gAcABBENAjEgAAAAAAAAACiQAAAAAAAA.YAAAAAAAAAAA"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A0%2CC0004%3A0%2CV2STACK42%3A0","1year"],["didomi_token","eyJ1c2VyX2lkIjoiMThkMmRlNWUtZWViOC02YmY3LWJiMGItYTA4MzI0OWNiNGFhIiwiY3JlYXRlZCI6IjIwMjQtMDEtMjFUMjE6MjE6MDAuMTg0WiIsInVwZGF0ZWQiOiIyMDI0LTAxLTIxVDIxOjIxOjA0Ljg4OFoiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiZ29vZ2xlIiwiYzpmYWNlYm9vay1ZeUpSQXllZCIsImM6eW91dHViZSIsImM6YWRvYmVhdWRpLUFXZTdyd3FkIiwiYzphbnVuY2lhbnRlX2xhX2xpZ2EiLCJjOmJlc29jeS1tRlVFYVpCTSJdfSwicHVycG9zZXMiOnsiZW5hYmxlZCI6WyJkYXRhX3NoYXJpbmciLCJkYXRhX3NoYXJpbmdfd2ViIiwiZGV2aWNlX2NoYXJhY3RlcmlzdGljcyIsImdlb2xvY2F0aW9uX2RhdGEiXX0sInZlcnNpb24iOjIsImFjIjoiREU2QU9BRVlBTmdBbFFEekFJY0FpU0RFNEFBQS5BQUFBIn0="],["euconsent-v2","CP4u7EAP4u7EAAHABBENAjEsAP_gAAAAAAAAg1NX_H__bX9r8Xr36ft0eY1f99j77uQxBhfJk-4FzLvW_JwX32EzNA26tqYKmRIEu3ZBIQFlHJHURVigaogVrzHsYkGchTNKJ6BkiFMRc2dYCF5vmYtj-QKY5_p_d3f52T-9_dv83dzzz81nv3f5f-clcLCdQ58tDfn_bRKb-5IO9_78v4v09t_rk2_eTVn_tevr7B-uft-7_XV-9_ffeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAxKADAAEQaikAGAAIg1DoAMAARBqIQAYAAiDUEgAwABEGotABgACINQAAA.f_wAAAAAAAAA"],["website_privacycookie_relaunch","accetta"],["website_privacycookie","accetta"],["DDCookiePolicyDialog","hide","","","reload","1"],["CookieConsentLevel","functional_analytics"],["correosCookies","{\"tecnicas\":\"true\",\"analiticas\":\"false\",\"publicidad\":\"false\"}"],["bkpolicy","aceptacion=selectiva//tecnicas=si//personalizacion=si//analiticas=no//publicitarias=no//version=0","","","domain","bankinter.com"],["CookieChoicesApr2021","%7B%22functionality%22%3Afalse%2C%22anonymousMeasurement%22%3Afalse%2C%22performance%22%3Afalse%2C%22advertising%22%3Afalse%7D"],["CONSENTMGR","c1:1%7Cc2:0%7Cc3:1%7Cc4:0%7Cts:1706835520229%7Cconsent:true"],["cookie-policy-agreement","%7B%22REVISION%22%3A20%2C%22consentLevel%22%3A1%7D"],["cookiesAccepted","%7B%22necessary%22%3Atrue%2C%22statistical%22%3Afalse%2C%22marketing%22%3Afalse%7D"],["cookiepolicy","1-1722973184631"],["cookie-management-status","{\"analytics\":false,\"functional\":true,\"strictlyNecessary\":true}"],["CookieConsent","%7B%22Mode%22%3A0%7D","","","reload","1"],["aok_cookie_settings","{\"functional\":{\"key\":\"functional\",\"name\":\"Funktionale Cookies\",\"required\":true,\"approved\":true},\"comfort\":{\"key\":\"comfort\",\"name\":\"Komfort-Cookies\",\"required\":false,\"approved\":false},\"tracking\":{\"key\":\"tracking\",\"name\":\"Marketing-Cookies\",\"required\":false,\"approved\":false}}"],["user_cookie_settings","WyJwcC1mdW5jdGlvbmFsIl0=","","","reload","1"],["orejime","{\"matomo\":false,\"youtube\":true}"],["BCP","AD=0&AL=0&SM=0","1year"],["OptanonConsent","groups=1%3A1%2C2%3A0%2C3%3A1%2C4%3A0%2CV2STACK42%3A0"],["CookieConsentV2","YES%2CTOI","","","domain","matkahuolto.fi"],["CookieConsent","mandatory|external"],["cookie_consent","{%22cookies_statistical%22:false%2C%22cookies_ad%22:true}","1year"],["consent-cookie-toggles","[{%22type%22:%22social%22%2C%22value%22:3}%2C{%22type%22:%22remaining%22%2C%22value%22:3}]"],["plenty-shop-cookie","{\"necessary\":{\"amazonPay\":true,\"consent\":true,\"consentActiveStatus\":true,\"externalId\":true,\"session\":true,\"csrf\":true,\"paypal-cookies\":true},\"tracking\":{\"googleanalytics\":false,\"bingads\":false},\"marketing\":{\"googleads\":false,\"facebookpixel\":false,\"pinterest\":false},\"media\":{\"reCaptcha\":true},\"convenience\":{\"languageDetection\":false}}"],["CONSENTMGR","c1:0|c2:0|c3:0|c4:0|c5:0|c6:0|c7:0|c8:0|c9:0|c10:0|c11:0|c12:0|c13:0|c14:0|c15:0|ts:1709021997479|consent:false|id:018de9a4f59200821a700cf146e80406f001906700ef8"],["disclaimer","2015040809"],["cookieControlPrefs","[\"comfort\"]"],["euconsent-v2","CP6vdoAP6vdoAAHABBENApEgAAAAAAAAAAAAAAAAAAAA.YAAAAAAAAAAA"],["cookie-consent-settings","{\"necessary\":true,\"statistics\":false,\"marketing\":false,\"personalization\":true}"],["CookiesConsent","{\"ad_storage\":\"denied\",\"analytics_storage\":\"denied\",\"personalization_storage\":\"denied\"}"],["omCookieConsent","group-1.1,group-3.1,dismiss"],["ConsentCookie","required:1,functional:1,analytic:0"],["txl_consent_status","functional","","","domain","transferxl.com"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1%2CV2STACK42%3A0","","","domain","20min.ch"],["euconsent-v2","CP7Tt8AP7Tt8AAHABBENArEsAP_gAEPgAAAAg1NX_H__bW9r8Xr3aft0eY1P99j77sQxBhfJE-4FzLvW_JwXx2ExNA36tqIKmRIEu3bBIQFlHJDUTVigaogVryDMakWcgTNKJ6BkiFMRM2dYCF5vmQtj-QKY5vp9d3dx2D-t_dv83dzyz8VHn3e5_2e0eJCdA58tDfv9bROb-9IPd_58v4v0_F_rk2_eT1l_tevp7B8uft87_XU-9_fff79AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEQagCzDQqIA-wJCQi0HCKBACoKwgIoEAAAAJA0QEAJgwKdgYBLrCRACAFAAMEAIAAUZAAgAAAgAQiACQAoEAAEAgUAAIAAAgEABAwAAgAsBAIAAQHQIUwIAFAsAEjMiIUwIQoEggJbKBBICgQVwgCLPAAgERMFAAAAAAVgACAsFgMSSAlQkECXEG0AABAAgEEIFQgk4MAAwJGy1A4Im0ZWkAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAA.f_wACHwAAAAA"],["CookiePermissionInfo","{\"LastModifiedDate\":\"1\",\"ExpirationDate\":\"1\",\"Allow\":true,\"CategoryPermission\":[{\"Category\":\"Cat.8\",\"Permission\":true},{\"Category\":\"Cat.9\",\"Permission\":true},{\"Category\":\"Cat.10\",\"Permission\":false},{\"Category\":\"Cat.12\",\"Permission\":false}]}"],["userconsent","{\"analytics\":false,\"youtube\":true}"],["aceptarCookiesSeen","{\"necesarias\":true,\"estadisticas\":false}","","","reload","1"],["cookieConsent","{\"necessary\":1}"],["cc_cookie","{\"categories\":[\"necessary\"],\"level\":[\"necessary\"],\"revision\":1,\"data\":null,\"rfc_cookie\":true,\"consent_date\":\"1\",\"consent_uuid\":\"1\",\"last_consent_update\":\"1\"}"],["UN_cookie_consent_v2","{\"marketing\":0,\"statistics\":0,\"personalization\":0,\"time\":1}","","","reload","1"],["cc_cookie","{\"level\":[\"necessary\"],\"revision\":0,\"data\":null,\"rfc_cookie\":false}"],["consentPreferences","{\"timestamp\":\"1\",\"version\":1,\"functional_storage\":\"granted\",\"analytics_storage\":\"denied\",\"personalization_storage\":\"denied\",\"ad_storage\":\"denied\",\"ad_user_data\":\"denied\",\"ad_personalization\":\"denied\"}"],["cc_cookie","{\"level\":[\"tecnici\"],\"revision\":0,\"data\":null,\"rfc_cookie\":false}"],["dp_cookieconsent_status","{\"status\":\"approved\",\"checkboxes\":[{\"name\":\"statistics\",\"checked\":false},{\"name\":\"marketing\",\"checked\":false},{\"name\":\"functional\",\"checked\":true},{\"name\":\"read-speaker\",\"checked\":true}]}"],["GDPR","[\"gdpr\",\"youtube\"]"],["cookiesaccepted","{%22marketing%22:false%2C%22statistic%22:false%2C%22thirdParty%22:true}"],["sve_cc_options","{\"values\":[{\"key\":\"necessary\",\"checked\":true},{\"key\":\"ad_storage\",\"checked\":false},{\"key\":\"analytics_storage\",\"checked\":false},{\"key\":\"functionality_storage\",\"checked\":false}],\"version\":\"2023-1\",\"timestamp\":1}"],["CookieConsent","necessary:true%2C%20preference:true%2C%20statistics:false%2C%20marketing:false"],["UN_cookie_consent_v2","%7B%22marketing%22%3A0%2C%22statistics%22%3A0%2C%22personalization%22%3A0%2C%22time%22%3A1711880201%2C%22id%22%3A%221%22%7D","","","reload","1"],["cookieconsent","saved=1&functional=1&analytics=0&marketing=0","","","reload","1"],["cookie-consent","{\"required\":true,\"optional\":false,\"analytics\":false}"],["OptanonConsent","groups=C1%3A1%2CC2%3A0%2CC3%3A0%2CC4%3A0%2CC5%3A0%2CC8%3A0%2CC9%3A0&hosts=H184%3A1%2CH108%3A1%2CH109%3A1%2CH36%3A1%2CH58%3A1%2CH159%3A1%2CH37%3A1%2CH112%3A1%2CH331%3A1%2CH39%3A1%2CH348%3A1%2CH67%3A1%2CH115%3A1%2CH306%3A1%2CH63%3A1%2CH117%3A1%2CH118%3A1%2CH119%3A1%2CH120%3A1%2CH121%3A1%2CH122%3A1%2CH66%3A1%2CH304%3A0%2CH338%3A0%2CH40%3A0%2CH43%3A0%2CH183%3A0%2CH60%3A0%2CH274%3A0%2CH97%3A0%2CH142%3A0%2CH48%3A0%2CH49%3A0%2CH149%3A0%2CH83%3A0%2CH38%3A0%2CH176%3A0%2CH150%3A0%2CH330%3A0%2CH85%3A0%2CH151%3A0%2CH324%3A0%2CH402%3A0%2CH272%3A0%2CH14%3A0%2CH275%3A0%2CH23%3A0%2CH41%3A0%2CH101%3A0%2CH153%3A0%2CH6%3A0%2CH283%3A0%2CH42%3A0%2CH32%3A0%2CH145%3A0%2CH15%3A0%2CH322%3A0%2CH148%3A0%2CH333%3A0%2CH104%3A0%2CH55%3A0%2CH143%3A0%2CH17%3A0%2CH18%3A0%2CH57%3A0%2CH359%3A0%2CH129%3A0","1year"],["TC_PRIVACY","1%40032%7C1%7C4525%40%402%401713310882911%2C1713310882911%2C1747006882911%40"],["cookiesRules","{\"analytics\":false,\"personalized\":false,\"ads\":false}"],["didomi_token","eyJ1c2VyX2lkIjoiMTkwODMwZjQtNzUxYy02NDczLTk5NzItZDMzMWU2ZWRiNDFhIiwiY3JlYXRlZCI6IjIwMjQtMDctMDVUMTM6MjI6MTQuOTkzWiIsInVwZGF0ZWQiOiIyMDI0LTA3LTA1VDEzOjIyOjUyLjM5M1oiLCJ2ZW5kb3JzIjp7ImVuYWJsZWQiOlsiYzppbnNpZGVyLU5GUDdZcTlGIiwiYzphaXJzaGlwLWJyVWVnM0J0IiwiYzpjaGFydGJlYXQtWHdtYUVIY1IiLCJjOmFkb2JlYW5hbC14TVBFcFpFYiJdLCJkaXNhYmxlZCI6WyJnb29nbGUiLCJ0d2l0dGVyIiwiYzphZHNsb3QtZ3FzeXdBNE0iLCJjOm1pbnV0ZWx5LUZiQ3paU01YIiwiYzp5b3V0dWJlIiwiYzpncmFwZXNob3QiLCJjOnJlZGRpdC1idXR0b25zIiwiYzpsaW5rZWRpbiIsImM6cG9vb2wtMmRrS0t6bU0iLCJjOmdvb2dsZWFuYS00VFhuSmlnUiIsImM6dG10LURMQ2tkN3RHIiwiYzphZGp1c3QtY2NKSFg2UWUiXX0sInB1cnBvc2VzIjp7ImVuYWJsZWQiOlsiZ2VvX2FkcyIsImdlb19tYXJrZXRpbmdfc3R1ZGllcyJdLCJkaXNhYmxlZCI6WyJkZXZpY2VfY2hhcmFjdGVyaXN0aWNzIiwiZ2VvbG9jYXRpb25fZGF0YSJdfSwidmVuZG9yc19saSI6eyJkaXNhYmxlZCI6WyJnb29nbGUiXX0sInZlcnNpb24iOjIsImFjIjoiQUFBQS5BQUFBIn0="],["CookieConsent","{necessary:true%2Cpreferences:false%2Cstatistics:false%2Cmarketing:true}"],["OptanonConsent","groups=BG117%3A1%2CC0001%3A1%2CC0003%3A1%2CC0002%3A1%2CSPD_BG%3A1%2CC0004%3A1"],["euconsent-v2","CP-wiwAP-wiwAD3ACLCSA1EsAP_gAEPgAATIJVwQgAAwAKAAsACAAFQALgAZAA6ACAAFAAKgAWgAyABoADmAIgAigBHACSAEwAJwAVQAtgBfgDCAMUAgACEgEQARQAjoBOAE6AL4AaQA4gB3ADxAH6AQgAkwBOACegFIAKyAWYAuoBgQDTgG0APkAjUBHQCaQE2gJ0AVIAtQBbgC8wGMgMkAZcA0oBqYDugHfgQHAhcBGYCTQEqwQugRQAKAAsACoAFwAQAAyABoAEQAI4ATAAqgBiAD8AISARABEgCOAE4AMsAZoA7gB-gEIAIsAXUA2gCbQFSALUAW4AvMBggDJAGXANTAhcAA.YAAAAAAAAWAA","","","domain","seznam.cz"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1%2CC0004%3A0%2CC0005%3A1","","","domain","olympics.com"],["pleaseFix.privacy","{%22analyticsCookie%22:false%2C%22personalisationCookie%22:false%2C%22targetedAdvertisingCookie%22:false%2C%22multimediaPlayerCookie%22:true}"],["euconsent-v2","CP_K6QAP_K6QAAHABBENA1EsAP_gAELAAAAAKKtV_H__bX1r8X736ft0eY1f9_j77sQxBhfJk-4FzLvW_JwX32EzNA36tqYKmRIEu3bBIQNlHJDUTVCgaogVrzDMakWcoTNKJ6BkiFMRe2dYCF5vmwtj-QKY5vr_93d52T-9_dv83dzyz4Vnv3a9_-e1WJCdA58tDfv_bROb-9IP9_58v4v0_N_rE2_eT1l_tevp7D9-ct-7_XX-9_fff79Pl9-gAAAGJQAYAAgoqUgAwABBRUdABgACCipCADAAEFFQkAGAAIKKloAMAAQUVAAA.f_wACFgAAAAA"],["euconsent-v2","CP_K6QAP_K6QAAHABBENA1EsAP_gAEPgAAAAKKtV_H__bW1r8X73aft0eY1P9_j77sQxBhfJE-4FzLvW_JwXx2ExNA36tqIKmRIEu3bBIQNlHJDUTVCgaogVryDMakWcoTNKJ6BkiFMRO2dYCF5vmwtj-QKY5vr993dx2D-t_dv83dzyz4VHn3a5_2e0WJCdA58tDfv9bROb-9IPd_58v4v0_F_rE2_eT1l_tevp7D9-ct87_XW-9_fff79Ll9-goqAWYaFRAHWBISEGgYRQIAVBWEBFAgAAABIGiAgBMGBTsDAJdYSIAQAoABggBAACjIAEAAAEACEQAQAFAgAAgECgABAAgEAgAIGAAEAFgIBAACA6BCmBBAoFgAkZkRCmBCFAkEBLZUIJAECCuEIRZ4AEAiJgoAAAAACsAAQFgsDiSQEqEggS4g2gAAIAEAghAqEEnJgACBI2WoPBE2jK0gDQ04SAAAAA.f_wACHwAAAAA"],["euconsent-v2","CP_K6QAP_K6QAB7FIBITA2EsAP_gAAAAAAAAJxNV7H-_bX1r8Xr36dtkeY1P98j77sQxBhfJk-4FyDvW_IwX32EyJA26tqIKmRIEuzZBIQFlHJDURVCgSogVryDEYkGcgTNKJ6BkgFMRI2dYCFxvmQtjeQKY5vp9d3dx2D2t_dv83dzyz4FHn1Y5PmckUICdA58tDfn9bRIb-5IOd-58v4v09F_rE2_eDVl_tevp7B8ucts7_XU29_cFHICoAOADPgI8ASqA3wB2wDuQIKASIAkoBKMCWgExwJkgTSAn2BQQCg4FFAKLQUaBRwAoJABgACAloaADAAEBLREAGAAICWioAMAAQEtGQAYAAgJaOgAwABAS0hABgACAlpKADAAEBLSkAGAAICWloAMAAQEt","1year","","domain",".ilmessaggero.it"],["_iub_cs-29298946","%7B%22timestamp%22%3A%222024-05-25T10%3A34%3A25.212Z%22%2C%22version%22%3A%221.61.0%22%2C%22purposes%22%3A%7B%221%22%3Atrue%2C%222%22%3Atrue%2C%223%22%3Atrue%2C%224%22%3Atrue%2C%225%22%3Atrue%7D%2C%22id%22%3A29298946%2C%22cons%22%3A%7B%22rand%22%3A%228d344f%22%7D%7D","1year","","domain",".ilmessaggero.it"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1%2CC0005%3A1"],["pwd-cookie-consent","0,1"],["CONSENTMGR","c1:0|c2:0|c3:0|c4:0|c5:0|c6:0|c7:0|c8:0|c9:0|c10:0|c11:0|c12:0|c13:0|c14:0|c15:0|ts:1717325114359|consent:false"],["CCP","{\"publicuser\":{\"cat2\":\"off\",\"cat3\":\"off\",\"cat4\":\"off\"}}"],["mml-cookie-agreed-version","1.0.0"],["consentUUID","191c03c5-1154-4937-aa26-ced186f90097_30_33","","","reload","1"],["consentUUID","a05bb3f1-519f-44da-92f3-6a10e3f75e53_32"],["consentUUID","8c7e01cc-3108-4650-a225-681acde1db99_32_33_34"],["consentUUID","798788d9-0aa9-4d39-b8f0-edb272b7ca39_32"],["consentUUID","cc3fda07-066e-4c67-a9eb-72d5dce1a921_32_33"],["consentUUID","6c38740a-9fcf-4ac4-8841-f3cee0293e84_34"],["consentUUID","4de1a7f3-4c2d-4f4e-9d18-b809b5d73ddb_33_34"],["consentUUID","9a37eb15-cd55-4e72-9073-e7c42c5998fd_32"],["consentUUID","e4ca3d8d-75f7-4b97-a468-25fc5e9dc1fd_32_33_34"],["consentUUID","dfc6bb88-a979-4c3c-8c8a-01ae94bcca36_32_34"],["consentUUID","e4fe2f39-dea0-4d85-b59e-943f634018b9_32_33"],["consentUUID","fc189801-d558-4c56-937e-6711599acde2_32"],["consentUUID","f2196ea7-1afa-4986-87e4-2a28d05bd56b_32_33"],["consentUUID","478090ac-09a6-451f-a2c3-20789ac47314_32_33_34"],["consentUUID","c0edd7ff-dd9a-462e-af9d-7cbebe196657_32_33_34"],["consentUUID","3a29f3e5-95ec-438e-b5ec-24c3f7daf220_32_33"],["consentUUID","a673c12a-841c-4ef9-9019-1cecb12d7cdd_32"],["consentUUID","5d7fa3c6-e0a9-4497-bad8-79ab003de47d_32"],["consentUUID","8717f4cd-f101-4527-9818-21e1be78a1ef_32"],["consentUUID","9f9ccda5-c4b8-49bf-973c-3470fb663bbc_32_33"],["consentUUID","8ec72931-7f30-41ee-8e7a-3eeed042376e_32_33"],["consentUUID","039f14d5-214e-46a6-a3ab-0eebd5198635_32_33"],["consentUUID","5a2997bb-3886-4fa1-b0f2-66a8d716c19c_32_33"],["consentUUID","3dbdc74e-c687-41d4-9b01-9d04a7d02c2e_32"],["consentUUID","80f57ffd-7468-4ca5-8fff-c442bcc6f276_32"],["consentUUID","2cc64b48-60ab-4161-b42c-45f25a6e338c_32_33"],["consentUUID","de4972d9-e581-40c3-921b-296d6456fad0_34"],["consentUUID","1_34"],["CONSENTMGR","c1:0|c6:0|c9:0|ts:1718751098255|consent:false|id:01902d7e715a00551abb1b4878180206f003606700fb9","","","domain",".tedbaker.com"],["__Secure-HO_Cookie_Consent_Declined","1"],["OptanonConsent","groups=C0001%3A1%2CC0002%3A0%2CC0003%3A1","","","domain","www.redbull.com"],["OptanonAlertBoxClosed","$currentDate$","","","domain","www.redbull.com"],["cookie_consent_202401","{\"sentry\":false,\"braze\":false,\"userpilot\":false,\"googleAnalytics\":false,\"amplitude\":false,\"hotjar\":false,\"facebookPixel\":false,\"googleAds\":false,\"kwanko\":false}"],["wnet_vppa_assent","{\"choice\":\"decline\",\"expires\":1}"],["cc","2:f","","","reload","1"]];

const hostnamesMap = new Map([["facebook.com",0],["instagram.com",1],["fandom.com",[2,3,4]],["dailymotion.com",5],["theguardian.com",6],["lefigaro.fr",7],["filmweb.pl",8],["thetrainline.com",[9,56]],["scaleway.com",10],["all3dp.com",11],["threads.net",13],["messenger.com",14],["trading212.com",15],["myscript.com",16],["odido.nl",17],["bing.com",18],["procvetok.ua",19],["stwater.co.uk",20],["boogschietshop.nl",21],["hashop.nl",21],["x-kom.pl",22],["tiempo.com",[23,24]],["pizzafan.gr",25],["windhager.eu",26],["banknorwegian.no",27],["biomarkt.de",28],["plaion.com",28],["apetro.pt",29],["apoteket.se",29],["bergbauernmilch.de",29],["berlingske.dk",29],["cineplex.de",29],["danbolig.dk",29],["egmont.com",29],["euroatla.pt",29],["finanzmarktwelt.de",29],["harzwasserwerke.de",29],["hoyavision.com",29],["nos.pt",29],["neue.at",29],["nngroup.com",29],["nordiskfilm.com",29],["storyhouseegmont.dk",29],["storyhouseegmont.no",29],["storyhouseegmont.se",29],["toyota-forklifts.se",29],["vn.at",29],["werder.de",29],["werkenbijlidl.nl",29],["wwf.fi",29],["refinery29.com",30],["dasinvestment.com",30],["fof.se",30],["mein-grundeinkommen.de",30],["ekstrabladet.dk",31],["kino.dk",32],["dr.dk",33],["schauspiel.koeln",34],["onlinestempel.ch",35],["chase.co.uk",36],["svt.se",37],["komoot.com",38],["komoot.de",38],["chatreplay.stream",39],["hubblehq.com",40],["hwebber.co.uk",41],["gereedschapcentrum.nl",42],["ontinet.com",43],["fplstatistics.co.uk",44],["kirjasto.vaasa.fi",45],["softonic.com",46],["informatech.com",47],["aonsolutions.es",48],["launer.com",49],["bever.nl",50],["sixt-neuwagen.de",51],["oem.no",52],["forums.tomsguide.com",53],["tomsguide.com",54],["walmart.ca",55],["cc.com",56],["1001games.com",[56,168,169]],["1001hry.cz",[56,168,169]],["1001jeux.fr",[56,168,169]],["1001jocuri.ro",[56,168,169]],["1001jogos.com.br",[56,168,169]],["1001jogos.pt",[56,168,169]],["1001pelit.com",[56,168,169]],["1001spiele.de",[56,168,169]],["elkspel.nl",[56,168,169]],["gamespot.com",[56,96]],["giochixl.it",[56,168,169]],["glamour.com",[56,187]],["grajteraz.pl",[56,168,169]],["isladejuegos.com",[56,168,169]],["jatekokxl.hu",[56,168,169]],["mtvuutiset.fi",[56,94]],["paixnidiaxl.gr",[56,168,169]],["pushsquare.com",[56,124,125]],["spelo.se",[56,168,169]],["spillespill.no",[56,168,169]],["spilxl.dk",[56,168,169]],["thejournal.ie",[56,111]],["vkmag.com",[56,92,93]],["zdnet.com",[56,104]],["zoom.us",[56,194,195]],["mesta.net",[56,198]],["tredz.co.uk",[56,209]],["uphold.com",[56,219,220]],["webuyanycar.com",56],["resursbank.fi",57],["ft.com",58],["what3words.com",59],["aufstiegs-bafoeg.de",60],["bafa.de",60],["ble.de",60],["bmbf.de",60],["bne-portal.de",60],["bundespolizei.de",60],["schleswig-holstein.de",60],["verfassungsschutz.de",60],["delfi.ee",[61,62,63]],["flynorse.com",64],["fruugonorge.com",65],["fruugo.de",65],["hyperoptic.com",66],["education.lego.com",67],["lego.com",[68,69]],["planningportal.co.uk",70],["veriff.com",71],["programme.conventus.de",72],["arena.pl",73],["govirtuo.com",[74,75]],["deal.by",76],["zwenkwielen.net",77],["lastmile.lt",78],["biomedcentral.com",79],["bol.com",80],["fotografiska.com",81],["osmanlicakelam.net",82],["mic.eucast.org",83],["open.online",[84,85]],["ilovefreegle.org",[86,87]],["eurostar.com",88],["evaair.com",[90,91]],["ampparit.com",95],["arvopaperi.fi",95],["iltalehti.fi",95],["kauppalehti.fi",95],["mediuutiset.fi",95],["mikrobitti.fi",95],["talouselama.fi",95],["tekniikkatalous.fi",95],["tivi.fi",95],["uusisuomi.fi",95],["asialadies.de",97],["avladies.de",97],["badeladies.de",97],["behaarteladies.de",97],["bizarrladies.de",97],["busenladies.de",97],["deutscheladies.de",97],["devoteladies.de",97],["dominanteladies.de",97],["erfahreneladies.de",97],["escorts24.de",97],["exklusivladies.de",97],["fkk24.de",97],["grosseladies.de",97],["hobbyladies.de",97],["jungeladies.de",97],["kollegin.de",97],["kussladies.de",97],["ladies.de",97],["latinaladies.de",97],["massierendeladies.de",97],["mollyladies.de",97],["nsladies.de",97],["nymphomaneladies.de",97],["orientladies.de",97],["osteuropaladies.de",97],["piercingladies.de",97],["rasierteladies.de",97],["schokoladies.de",97],["tattooladies.de",97],["tsladies.de",97],["zaertlicheladies.de",97],["zierlicheladies.de",97],["1a-finanzmarkt.de",98],["1a-immobilienmarkt.de",98],["1a-reisemarkt.de",98],["1a-singleboerse.de",98],["1a-stellenmarkt.de",98],["gameinformer.com",99],["christianconcern.com",100],["vogue.co.uk",101],["wired.com",101],["jekabpils.lv",102],["aachener-bank.de",103],["bernhauser-bank.de",103],["bodenseebank.de",103],["bremischevb.de",103],["cvw-privatbank-ag.de",103],["dervolksbanker.de",103],["gladbacher-bank.de",103],["meine-rvb.de",103],["meinebank.de",103],["muenchner-bank.de",103],["nordthueringer-volksbank.de",103],["owl-immobilien.de",103],["raiba-gr.de",103],["raiba-ndwa.de",103],["raiba-westhausen.de",103],["rb-berghuelen.de",103],["rb-denzlingen-sexau.de",103],["rb-eching.de",103],["rb-hardt-bruhrain.de",103],["rb-oberaudorf.de",103],["rb-sondelfingen.de",103],["rv-banken.de",103],["saechsischer-gewinnsparverein.de",103],["skbwitten.de",103],["sparda-bank-hamburg.de",103],["sparda-sw.de",103],["vb-lauterecken.de",103],["vb-mittelhessen.de",103],["vb-rb.de",103],["vbleos.de",103],["vbsuedemsland.de",103],["voba-deisslingen.de",103],["voba-moeckmuehl.de",103],["volksbank-aktiv.de",103],["volksbank-backnang.de",103],["volksbank-daaden.de",103],["volksbank-dh.de",103],["volksbank-freiburg.de",103],["volksbank-international.de",103],["volksbank-kirnau.de",103],["volksbank-mittleres-erzgebirge.de",103],["volksbank-remseck.de",103],["volksbank-thueringen-mitte.de",103],["volksbank-trossingen.de",103],["volksbankeg.de",103],["vr-nopf.cz",103],["vrb-spangenberg.de",103],["vrbankeg.de",103],["vrbankimmobilien.de",103],["vvr-bank.de",103],["vvrbank-krp.de",103],["news.sky.com",105],["lippu.fi",[106,107,108]],["starcart.com",109],["sydan.fi",110],["cmore.fi",112],["europe1.fr",113],["etsy.com",114],["technopat.net",[115,116]],["justeat.it",[117,118,119]],["pyszne.pl",[117,118,119]],["takeaway.com",[117,118,119]],["thuisbezorgd.nl",[117,118,119]],["telekom.com",120],["hemmersbach.com",121],["eurogamer.nl",[122,123]],["eurogamer.es",[122,123]],["eurogamer.cz",[122,123]],["eurogamer.net",[122,123]],["eurogamer.pl",[122,123]],["eurogamer.pt",[122,123]],["bt.dk",126],["dlalakierni.pl",[127,128,129]],["officiallondontheatre.com",130],["constantin.film",131],["twitter.com",132],["x.com",132],["mundodeportivo.com",[133,134]],["nordax.com",135],["youtube.com",136],["empik.com",[137,138,139,140]],["ubs.com",141],["vicko.gr",142],["call-a-pizza.de",143],["jeuxvideo.com",[144,145]],["player.boom973.com",146],["privacy.ledauphine-presse.fr",[147,148]],["canva.com",149],["thegreencity.gr",150],["ohra.nl",151],["sandberg.world",152],["everyeye.it",153],["larousse.fr",[153,240]],["20min.ch",[153,255]],["milwaukeetool.eu",[153,274]],["costcobusinessdelivery.com",[153,279]],["olympics.com",[153,281]],["patagonia.com",[153,287]],["breitbart.com",154],["saniweb.nl",155],["uswitch.com",156],["ferienpiraten.ch",157],["holidaypirates.com",157],["piratinviaggio.it",157],["travelpirates.com",157],["urlaubspiraten.at",157],["urlaubspiraten.de",157],["vakantiepiraten.nl",157],["viajerospiratas.es",157],["voyagespirates.fr",157],["wakacyjnipiraci.pl",157],["stadtmobil.de",158],["coinbase.com",[159,160]],["go-e.com",161],["multiplayer.it",[162,163]],["ansa.it",[162,164]],["starcar.de",165],["hubsite365.com",166],["notion.so",167],["stergioufamily.gr",170],["viss.nu",171],["goed.at",172],["babolat-tenis.pl",173],["denonmarkabolt.hu",173],["monocerus.pl",173],["plastiflora.pl",173],["s4home.pl",173],["salonydenon.pl",173],["vipera.com.pl",173],["zdrowomania.pl",173],["avstore.pl",174],["bednarek.sklep.pl",174],["byinsomnia.com",174],["foto-tip.pl",174],["handloteka.net",174],["hiprom.pl",174],["meblewypoczynkowe.pl",174],["plantica.pl",174],["produkcjakartonow.pl",174],["supportart.pl",174],["yoclub.pl",174],["audioforum-berlin.de",175],["salonydenon.cz",175],["sj.se",176],["omgevingsloketinzage.omgeving.vlaanderen.be",177],["snowandrock.com",[178,179]],["racingnews365.com",[180,181]],["zdf.de",182],["microbit.org",183],["ab.gr",185],["tameteo.com",186],["tempo.pt",186],["yourweather.co.uk",186],["meteored.cl",186],["meteored.mx",186],["tempo.com",186],["ilmeteo.net",186],["meteored.com.ar",186],["daswetter.com",186],["collectibles.mclaren.com",188],["tobis.de",189],["lekarnaave.cz",190],["lekarnalemon.cz",190],["algarvevacation.net",191],["3sat.de",192],["crossnative.com",193],["trezor.io",196],["rb.cz",197],["mafu.de",199],["paf.com",200],["flip.gr",201],["andersiahotel.pl",202],["tether.to",203],["med.uni-rostock.de",204],["advalvas.vu.nl",205],["chron.com",206],["greenwichtime.com",206],["houstonchronicle.com",206],["mysanantonio.com",206],["seattlepi.com",206],["sfchronicle.com",206],["sfgate.com",206],["thetelegraph.com",206],["timesunion.com",206],["24ur.com",207],["greencaffenero.pl",208],["getdigitalradio.com",210],["sap.com",[211,212,213]],["oxxio.nl",[214,215,216]],["ouraring.com",217],["seb.lv",218],["seb.lt",218],["seb.ee",218],["as.com",[221,222]],["generali.at",[223,224]],["butterflyshop.dk",225],["praxis.nl",226],["brico.be",226],["correos.es",227],["bankinter.com",228],["mishcon.com",229],["lufthansa.com",230],["anwb.nl",231],["fishingclash.game",232],["bancaditalia.it",233],["kent.gov.uk",234],["www.aok.de",236],["meine.aok.de",237],["haut-koenigsbourg.fr",238],["copilot.microsoft.com",239],["matkahuolto.fi",241],["wolff-mueller.de",242],["vrtranspoint.fi",243],["gld.nl",244],["omroepwest.nl",244],["omroepzeeland.nl",244],["omropfryslan.nl",244],["rijnmond.nl",244],["rtvdrenthe.nl",244],["rtvnoord.nl",244],["rtvutrecht.nl",244],["stilord.com",245],["stilord.pl",245],["stilord.de",245],["stilord.fr",245],["ls-tc.de",247],["mobile-fueling.de",248],["bfmtv.com",249],["pieceauto-discount.com",250],["onlia.ca",251],["spieljochbahn.at",252],["sogeti.com",253],["transferxl.com",254],["allocine.fr",256],["postnl.nl",257],["pharmacieauterive-ropars.mesoigner.fr",258],["seen.es",259],["my.smartpost.ee",260],["extrudr.com",261],["vilagitasok.hu",262],["yazio.com",263],["kosik.cz",264],["inps.it",265],["versorgungslandkarte.de",266],["hrlab.de",267],["sazkamobil.cz",268],["svepomoci.cz",269],["leabank.no",270],["tlkhorgaszaruhaz.hu",271],["cencenelec.eu",272],["white.market",273],["mytheresa.com",275],["canatura.com",276],["euronews.com",277],["fastnedcharging.com",278],["seznam.cz",280],["issue-council.robertsspaceindustries.com",282],["marca.com",283],["index.hr",284],["ilmessaggero.it",[285,286]],["pohjanmaanhyvinvointi.fi",288],["barclays.co.uk",289],["home.barclays",290],["maanmittauslaitos.fi",291],["derstandard.at",292],["derstandard.de",292],["zeit.de",293],["chip.de",294],["faz.net",295],["heise.de",296],["welt.de",297],["spiegel.de",298],["t3n.de",299],["t-online.de",300],["autobild.de",301],["bild.de",302],["computerbild.de",303],["stern.de",304],["pcwelt.de",305],["focus.de",306],["geo.de",307],["familie.de",308],["sport1.de",309],["kino.de",310],["likehifi.de",311],["faszination-fankurve.de",312],["raspberry-pi-geek.de",313],["rtl.de",314],["krzbb.de",315],["techstage.de",316],["n-tv.de",317],["lbc.co.uk",318],["aftonbladet.se",319],["omniekonomi.se",319],["bt.no",319],["vg.no",319],["tedbaker.com",320],["hetzner.com",321],["redbull.com",[322,323]],["vroomly.com",324],["njspotlightnews.org",325],["wliw.org",325],["thirteen.org",325],["njpbs.org",325],["allarts.org",325],["bergans.com",326]]);

const entitiesMap = new Map([["lidl",12],["www.google",89],["just-eat",[117,118,119]],["lieferando",[117,118,119]],["coolstuff",184],["wolfswinkel",235],["esprit",246]]);

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

    if ( value.includes('$now$') ) {
        value = value.replaceAll('$now$', time.getTime());
    }
    if ( value.includes('$currentDate$') ) {
        value = value.replaceAll('$currentDate$', time.toUTCString());
    }
    if ( value.includes('$currentISODate$') ) {
        value = value.replaceAll('$currentISODate$', time.toISOString());
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
    } else if ( /^__(Host|Secure)-/.test(name) ) {
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
