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

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["adblock.check","noopFunc"],["eyeOfErstream.detectedBloke","falseFunc"],["ads","falseFunc"],["xv_ad_block","0"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["canRunAds","true"],["window.google_jobrunner","true"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["wpsaData","undefined"],["config.adv","{}"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklamsayisi","0"],["player.vroll","undefined"],["config.adv.enabled","0"],["volumeClearInterval","0"],["rek_kontrol","noopFunc"],["clicked","true"],["adSearchTitle","undefined"],["Object.prototype.ads","noopFunc"],["HBiddings.vastUrl",""],["AdvPlayer","undefined"],["initOpen","undefined"],["initNewAd","noopFunc"],["rg","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"]];

const hostnamesMap = new Map([["iyibeslenme.net",0],["teknop.net",0],["kirtkirtla.com",0],["buneymis.net",0],["ozgunbilgi.com",0],["exxen.com",1],["animeizletr.com",2],["exceldepo.com",3],["tgyama.com",4],["uzaymanga.com",5],["e-kitapstore.com",6],["wheel-size.com.tr",7],["karnaval.com",8],["mangaship.net",9],["mangaship.com",9],["miuitr.info",10],["puhutv.com",11],["coinotag.com",12],["cnnturk.com",[13,14]],["kanald.com.tr",[15,16]],["iddaaorantahmin.com",17],["forum.auraroleplay.com",18],["oyungibi.com",19],["veterinerhekimleri.com",19],["turkdenizcileri.com",20],["bilgalem.blogspot.com",20],["okulsoru.com",20],["klavyeanaliz.org",21],["sinepal1.vip",22],["hdsinemax.com",22],["hdfilmizle.org",22],["siyahfilmizle.pro",22],["tafdi4.com",22],["tafdi5.com",22],["elzemfilm.org",22],["fullhdfilmizlesene4.org",22],["tafdi3.com",22],["anizle.com",22],["hdfilmseyircisi.org",22],["sinemol.net",22],["dizirun2.com",22],["kozfilm.com",22],["hdfilmhit.org",22],["hdfilmizle.in",22],["dizipall.org",22],["diziyou.co",22],["filmizlew.net",22],["tafdi2.com",22],["fullfilmizle.net",22],["dizimag.eu",22],["bumfilmizle1.com",22],["yabancidizilertv.com",22],["1080hdfilmizle.com",22],["vipfilmlerizle.me",22],["dipfilmizle.net",22],["turkerotikizle.com",22],["yabancidizibax.com",22],["sinemangoo.org",22],["sexfilmleriizle.com",22],["fullhdfilm.pro",[22,29]],["pembetv18.com",22],["geziforumu.com",22],["ddizipal.com",22],["efendim.xyz",22],["dizipaltv.net",22],["filmjr1.com",22],["fluffcore.com",22],["hdfilmfullizle.com",22],["hdfilmcehennemizle.com",22],["netfullfilmizle3.com",22],["filmmodu.info",22],["izlekolik.com",22],["dizipaltv.com",22],["dizifilm.pro",22],["dizivid.net",22],["arrowizle.com",22],["hdfilmifullizle.com",22],["jokerfilmizle.com",22],["720pfilmiizle.net",22],["seehdfilm.com",22],["filmcus.com",22],["hazirfilm.com",22],["filmizlew.org",22],["zoof1.xyz",22],["sinemakolik.net",22],["sinefilmizlesen.com",22],["zarize.com",22],["pornobuna.com",22],["zarizeporno.com",22],["burdenfly.com",22],["zzerotik.com",22],["filmgo.org",22],["filmiifullizlee.net",22],["sinemafilmizle.net",22],["fullhdfilmiizle.org",22],["hdfilmw.org",22],["filmkuzusu1.com",22],["hdfilmcix.net",22],["sinemadelisi.com",22],["hdsexfilmizle.com",22],["erotik-film.org",22],["erotikfilmtube.com",22],["erotik-filmler.net",22],["erotikfilms.net",22],["filmbabasi.com",22],["pornoanne.com",22],["dizikorea.org",22],["diziyo.cx",22],["koredizileri.tv",22],["diziboxx.com",22],["turkaliz.com",22],["jetdiziizle.net",22],["vkfilmizle.net",22],["dizimom.live",22],["yerlidizi.pw",22],["fullhdfilmizleyin.com",22],["filmizlet.net",22],["filmgooo.com",22],["pornorips.com",22],["bumfilmizle.com",22],["shirl.club",22],["evrenselfilmlerim.org",22],["turkcealtyazilipornom.com",22],["sinema.cc",22],["hdfilmizletv.net",22],["sinemaizle.co",22],["netfilmtvizle.com",22],["hdfilmcehennem.live",22],["xbox360torrent.com",22],["efullizle.com",22],["asyafanatiklerim.com",22],["guncelhdfilm.com",22],["dizilost.com",22],["fileru.net",22],["fullhdfilmdeposu.com",22],["volsex.com",22],["torba.info",22],["erotiksexizle.com",22],["divx720pfilmizle.org",22],["justintvizle11.pro",22],["justintvizle12.pro",22],["justintvizle13.pro",22],["justintvizle14.pro",22],["justintvizle15.pro",22],["justintvizle16.pro",22],["justintvizle17.pro",22],["justintvizle18.pro",22],["justintvizle19.pro",22],["justintvizle20.pro",22],["justintvizle21.pro",22],["justintvizle22.pro",22],["justintvizle23.pro",22],["justintvizle24.pro",22],["justintvizle25.pro",22],["justintvizle26.pro",22],["justintvizle27.pro",22],["justintvizle28.pro",22],["justintvizle29.pro",22],["justintvizle30.pro",22],["canlitribun53.com",22],["canlitribun54.com",22],["canlitribun55.com",22],["canlitribun56.com",22],["canlitribun57.com",22],["canlitribun58.com",22],["canlitribun59.com",22],["canlitribun60.com",22],["canlitribun61.com",22],["canlitribun62.com",22],["canlitribun63.com",22],["canlitribun64.com",22],["canlitribun65.com",22],["canlitribun66.com",22],["canlitribun67.com",22],["canlitribun68.com",22],["canlitribun69.com",22],["canlitribun70.com",22],["dizipal580.com",22],["dizipal581.com",22],["dizipal582.com",22],["dizipal583.com",22],["dizipal584.com",22],["dizipal585.com",22],["dizipal586.com",22],["dizipal587.com",22],["dizipal588.com",22],["dizipal589.com",22],["dizipal590.com",22],["dizipal591.com",22],["dizipal592.com",22],["dizipal593.com",22],["dizipal594.com",22],["dizipal595.com",22],["dizipal596.com",22],["dizipal597.com",22],["dizipal598.com",22],["dizipal599.com",22],["dizipal600.com",22],["dizipal607.com",22],["dizipal608.com",22],["dizipal609.com",22],["dizipal610.com",22],["dizipal611.com",22],["dizipal612.com",22],["dizipal613.com",22],["dizipal614.com",22],["dizipal615.com",22],["dizipal616.com",22],["dizipal617.com",22],["dizipal618.com",22],["dizipal619.com",22],["dizipal620.com",22],["dizipal621.com",22],["dizipal622.com",22],["dizipal623.com",22],["dizipal624.com",22],["dizipal625.com",22],["dizipal626.com",22],["dizipal627.com",22],["dizipal628.com",22],["dizipal629.com",22],["dizipal630.com",22],["dizipal631.com",22],["dizipal632.com",22],["dizipal633.com",22],["dizipal634.com",22],["dizipal635.com",22],["dizipal636.com",22],["dizipal637.com",22],["dizipal638.com",22],["dizipal639.com",22],["dizipal640.com",22],["dizipal641.com",22],["dizipal642.com",22],["dizipal643.com",22],["dizipal644.com",22],["dizipal645.com",22],["dizipal646.com",22],["dizipal647.com",22],["dizipal648.com",22],["dizipal649.com",22],["dizipal650.com",22],["dizipal651.com",22],["dizipal652.com",22],["dizipal653.com",22],["dizipal654.com",22],["dizipal655.com",22],["dizipal656.com",22],["dizipal657.com",22],["dizipal658.com",22],["dizipal659.com",22],["dizipal660.com",22],["dizipal661.com",22],["dizipal662.com",22],["dizipal663.com",22],["dizipal664.com",22],["dizipal665.com",22],["dizipal666.com",22],["dizipal667.com",22],["dizipal668.com",22],["dizipal669.com",22],["dizipal670.com",22],["dizipal671.com",22],["dizipal672.com",22],["dizipal673.com",22],["dizipal674.com",22],["dizipal675.com",22],["dizipal676.com",22],["dizipal677.com",22],["dizipal678.com",22],["dizipal679.com",22],["dizipal680.com",22],["dizipal681.com",22],["dizipal682.com",22],["dizipal683.com",22],["dizipal684.com",22],["dizipal685.com",22],["dizipal686.com",22],["dizipal687.com",22],["dizipal688.com",22],["dizipal689.com",22],["dizipal690.com",22],["dizipal691.com",22],["dizipal692.com",22],["dizipal693.com",22],["dizipal694.com",22],["dizipal695.com",22],["dizipal696.com",22],["dizipal697.com",22],["dizipal698.com",22],["dizipal699.com",22],["dizipal700.com",22],["dizimom1.com",23],["trgoalshosting.cf",[23,31]],["tekfullfilmizle5.com",23],["yovmiyelazim.com",23],["tekfullfilmizle3.com",23],["izleorg2.org",23],["trgoals483.xyz",[23,25]],["trgoals484.xyz",[23,25]],["trgoals485.xyz",[23,25]],["trgoals486.xyz",[23,25]],["trgoals487.xyz",[23,25]],["trgoals488.xyz",[23,25]],["trgoals489.xyz",[23,25]],["trgoals490.xyz",[23,25]],["trgoals491.xyz",[23,25]],["trgoals492.xyz",[23,25]],["trgoals493.xyz",[23,25]],["trgoals494.xyz",[23,25]],["trgoals495.xyz",[23,25]],["trgoals496.xyz",[23,25]],["trgoals497.xyz",[23,25]],["trgoals498.xyz",[23,25]],["trgoals499.xyz",[23,25]],["trgoals500.xyz",[23,25]],["trgoals501.xyz",[23,25]],["trgoals502.xyz",[23,25]],["trgoals503.xyz",[23,25]],["trgoals504.xyz",[23,25]],["trgoals505.xyz",[23,25]],["trgoals506.xyz",[23,25]],["trgoals507.xyz",[23,25]],["trgoals508.xyz",[23,25]],["trgoals509.xyz",[23,25]],["trgoals510.xyz",[23,25]],["trgoals511.xyz",[23,25]],["trgoals512.xyz",[23,25]],["trgoals513.xyz",[23,25]],["trgoals514.xyz",[23,25]],["trgoals515.xyz",[23,25]],["trgoals516.xyz",[23,25]],["trgoals517.xyz",[23,25]],["trgoals518.xyz",[23,25]],["trgoals519.xyz",[23,25]],["trgoals520.xyz",[23,25]],["trgoals521.xyz",[23,25]],["trgoals522.xyz",[23,25]],["trgoals523.xyz",[23,25]],["trgoals524.xyz",[23,25]],["trgoals525.xyz",[23,25]],["trgoals526.xyz",[23,25]],["trgoals527.xyz",[23,25]],["trgoals528.xyz",[23,25]],["trgoals529.xyz",[23,25]],["trgoals530.xyz",[23,25]],["trgoals531.xyz",[23,25]],["trgoals532.xyz",[23,25]],["trgoals533.xyz",[23,25]],["trgoals534.xyz",[23,25]],["trgoals535.xyz",[23,25]],["trgoals536.xyz",[23,25]],["trgoals537.xyz",[23,25]],["trgoals538.xyz",[23,25]],["trgoals539.xyz",[23,25]],["trgoals540.xyz",[23,25]],["trgoals541.xyz",[23,25]],["trgoals542.xyz",[23,25]],["trgoals543.xyz",[23,25]],["trgoals544.xyz",[23,25]],["trgoals545.xyz",[23,25]],["trgoals546.xyz",[23,25]],["trgoals547.xyz",[23,25]],["trgoals548.xyz",[23,25]],["trgoals549.xyz",[23,25]],["trgoals550.xyz",[23,25]],["trgoals551.xyz",[23,25]],["trgoals552.xyz",[23,25]],["trgoals553.xyz",[23,25]],["trgoals554.xyz",[23,25]],["trgoals555.xyz",[23,25]],["trgoals556.xyz",[23,25]],["trgoals557.xyz",[23,25]],["trgoals558.xyz",[23,25]],["trgoals559.xyz",[23,25]],["trgoals560.xyz",[23,25]],["trgoals561.xyz",[23,25]],["trgoals562.xyz",[23,25]],["trgoals563.xyz",[23,25]],["trgoals564.xyz",[23,25]],["trgoals565.xyz",[23,25]],["trgoals566.xyz",[23,25]],["trgoals567.xyz",[23,25]],["trgoals568.xyz",[23,25]],["trgoals569.xyz",[23,25]],["trgoals570.xyz",[23,25]],["trgoals571.xyz",[23,25]],["trgoals572.xyz",[23,25]],["trgoals573.xyz",[23,25]],["trgoals574.xyz",[23,25]],["trgoals575.xyz",[23,25]],["trgoals576.xyz",[23,25]],["trgoals577.xyz",[23,25]],["trgoals578.xyz",[23,25]],["trgoals579.xyz",[23,25]],["trgoals580.xyz",[23,25]],["trgoals581.xyz",[23,25]],["trgoals582.xyz",[23,25]],["trgoals583.xyz",[23,25]],["trgoals584.xyz",[23,25]],["trgoals585.xyz",[23,25]],["trgoals586.xyz",[23,25]],["trgoals587.xyz",[23,25]],["trgoals588.xyz",[23,25]],["trgoals589.xyz",[23,25]],["trgoals590.xyz",[23,25]],["trgoals591.xyz",[23,25]],["trgoals592.xyz",[23,25]],["trgoals593.xyz",[23,25]],["trgoals594.xyz",[23,25]],["trgoals595.xyz",[23,25]],["trgoals596.xyz",[23,25]],["trgoals597.xyz",[23,25]],["trgoals598.xyz",[23,25]],["trgoals599.xyz",[23,25]],["trgoals600.xyz",[23,25]],["dizipal70.cloud",23],["dizipal71.cloud",23],["dizipal72.cloud",23],["dizipal73.cloud",23],["dizipal74.cloud",23],["dizipal75.cloud",23],["dizipal76.cloud",23],["dizipal77.cloud",23],["dizipal78.cloud",23],["dizipal79.cloud",23],["dizipal80.cloud",23],["dizipal81.cloud",23],["dizipal82.cloud",23],["dizipal83.cloud",23],["dizipal84.cloud",23],["dizipal85.cloud",23],["dizipal86.cloud",23],["dizipal87.cloud",23],["dizipal88.cloud",23],["dizipal89.cloud",23],["dizipal90.cloud",23],["dizipal91.cloud",23],["dizipal92.cloud",23],["dizipal93.cloud",23],["dizipal94.cloud",23],["dizipal95.cloud",23],["dizipal96.cloud",23],["dizipal97.cloud",23],["dizipal98.cloud",23],["dizipal99.cloud",23],["dizipal100.cloud",23],["dizipal101.cloud",23],["dizipal102.cloud",23],["dizipal103.cloud",23],["dizipal104.cloud",23],["dizipal105.cloud",23],["dizipal106.cloud",23],["dizipal107.cloud",23],["dizipal108.cloud",23],["dizipal109.cloud",23],["dizipal110.cloud",23],["dizipal111.cloud",23],["dizipal112.cloud",23],["dizipal113.cloud",23],["dizipal114.cloud",23],["dizipal115.cloud",23],["dizipal116.cloud",23],["dizipal117.cloud",23],["dizipal118.cloud",23],["dizipal119.cloud",23],["dizipal120.cloud",23],["dizipal121.cloud",23],["dizipal122.cloud",23],["dizipal123.cloud",23],["dizipal124.cloud",23],["dizipal125.cloud",23],["dizipal126.cloud",23],["dizipal127.cloud",23],["dizipal128.cloud",23],["dizipal129.cloud",23],["dizipal130.cloud",23],["dizipal131.cloud",23],["dizipal132.cloud",23],["dizipal133.cloud",23],["dizipal134.cloud",23],["dizipal135.cloud",23],["dizipal136.cloud",23],["dizipal137.cloud",23],["dizipal138.cloud",23],["dizipal139.cloud",23],["dizipal140.cloud",23],["dizipal141.cloud",23],["dizipal142.cloud",23],["dizipal143.cloud",23],["dizipal144.cloud",23],["dizipal145.cloud",23],["dizipal146.cloud",23],["dizipal147.cloud",23],["dizipal148.cloud",23],["dizipal149.cloud",23],["dizipal150.cloud",23],["dizipal151.cloud",23],["dizipal152.cloud",23],["dizipal153.cloud",23],["dizipal154.cloud",23],["dizipal155.cloud",23],["dizipal156.cloud",23],["dizipal157.cloud",23],["dizipal158.cloud",23],["dizipal159.cloud",23],["dizipal160.cloud",23],["dizipal161.cloud",23],["dizipal162.cloud",23],["dizipal163.cloud",23],["dizipal164.cloud",23],["dizipal165.cloud",23],["dizipal166.cloud",23],["dizipal167.cloud",23],["dizipal168.cloud",23],["dizipal169.cloud",23],["dizipal170.cloud",23],["dizipal171.cloud",23],["dizipal172.cloud",23],["dizipal173.cloud",23],["dizipal174.cloud",23],["dizipal175.cloud",23],["dizipal176.cloud",23],["dizipal177.cloud",23],["dizipal178.cloud",23],["dizipal179.cloud",23],["dizipal180.cloud",23],["dizipal181.cloud",23],["dizipal182.cloud",23],["dizipal183.cloud",23],["dizipal184.cloud",23],["dizipal185.cloud",23],["dizipal186.cloud",23],["dizipal187.cloud",23],["dizipal188.cloud",23],["dizipal189.cloud",23],["dizipal190.cloud",23],["dizipal191.cloud",23],["dizipal192.cloud",23],["dizipal193.cloud",23],["dizipal194.cloud",23],["dizipal195.cloud",23],["dizipal196.cloud",23],["dizipal197.cloud",23],["dizipal198.cloud",23],["dizipal199.cloud",23],["dizipal200.cloud",23],["filmmodu.co",24],["dizipal12.site",24],["dizipal13.site",24],["dizipal14.site",24],["dizipal15.site",24],["dizipal16.site",24],["dizipal17.site",24],["dizipal18.site",24],["dizipal19.site",24],["dizipal20.site",24],["dizipal21.site",24],["dizipal22.site",24],["dizipal23.site",24],["dizipal24.site",24],["dizipal25.site",24],["dizipal26.site",24],["dizipal27.site",24],["dizipal28.site",24],["dizipal29.site",24],["dizipal30.site",24],["netsportv158.com",25],["arsiv.mackolik.com",26],["nefisyemektarifleri.com",28],["izlesene.com",28],["play.diziyou.co",30],["tranimeci.com",32],["filmmakinesi1.com",33],["turkanime.co",34],["forum.donanimhaber.com",35],["filmmodu9.com",36],["filmmodu10.com",36],["filmmodu11.com",36],["filmmodu12.com",36],["filmmodu13.com",36],["filmmodu14.com",36],["filmmodu15.com",36],["filmmodu16.com",36],["filmmodu17.com",36],["filmmodu18.com",36],["filmmodu19.com",36],["filmmodu20.com",36],["atv.com.tr",37],["turkturk.org",38],["turkturk.net",38],["contentx.me",39],["superfilmgeldi.com",40],["edebiyatdefteri.com",41],["belgeselizlesene.com",42],["technopat.net",43],["aydindenge.com.tr",44],["diziall.com",45]]);

const entitiesMap = new Map([["dizicaps",22],["filmizletv1",22],["fullhdfilmizle5",[22,29]],["sinepal",22],["hdfilmcehennemi",22],["elzemfilmizle",22],["dizipal",22],["filmizletv",22],["tekparthdfilmizle",22],["dizisup",22],["dafflix",22],["yabancidizitv",22],["hddiziport",22],["dizimov",22],["torrentarsivi",22],["setfilmizle",22],["fullhdfilmmodu2",22],["filmyani",22],["tranimeizle",22],["altyazilifilm",22],["webteizle",23],["diziroll",24],["dizilla",24],["jetfilmizle",27]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantCore(false, ...args);
}

function setConstantCore(
    trusted = false,
    chain = '',
    cValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, cValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            const proxy = new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
            return proxy;
        };
        if ( cValue === 'undefined' ) {
            cValue = undefined;
        } else if ( cValue === 'false' ) {
            cValue = false;
        } else if ( cValue === 'true' ) {
            cValue = true;
        } else if ( cValue === 'null' ) {
            cValue = null;
        } else if ( cValue === "''" || cValue === '' ) {
            cValue = '';
        } else if ( cValue === '[]' ) {
            cValue = [];
        } else if ( cValue === '{}' ) {
            cValue = {};
        } else if ( cValue === 'noopFunc' ) {
            cValue = cloakFunc(function(){});
        } else if ( cValue === 'trueFunc' ) {
            cValue = cloakFunc(function(){ return true; });
        } else if ( cValue === 'falseFunc' ) {
            cValue = cloakFunc(function(){ return false; });
        } else if ( /^-?\d+$/.test(cValue) ) {
            cValue = parseInt(cValue);
            if ( isNaN(cValue) ) { return; }
            if ( Math.abs(cValue) > 0x7FFF ) { return; }
        } else if ( trusted ) {
            if ( cValue.startsWith('{') && cValue.endsWith('}') ) {
                try { cValue = safe.jsonParse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => cValue;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => cValue);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(cValue);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(cValue);
            }
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (cValue !== undefined && cValue !== null) &&
                (typeof v !== typeof cValue);
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : cValue) === false ) { return; }
            const odesc = Object.getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof Object ) {
                owner[prop] = cValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter(); // cValue
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
            } catch(ex) {
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        return document.currentScript === thisScript
                            ? this.v
                            : cValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        cValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, cValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Error': self.Error,
        'Math_floor': Math.floor,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
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
    try { setConstant(...argsList[i]); }
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
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
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
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
