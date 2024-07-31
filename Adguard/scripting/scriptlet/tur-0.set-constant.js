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

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["adblock.check","noopFunc"],["eyeOfErstream.detectedBloke","falseFunc"],["xv_ad_block","0"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["maari","noopFunc"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["canRunAds","true"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["reklamsayisi","1"],["app.ads","{}"],["adsConfigs.0.enabled","0"],["window.config.adv.enabled","0"],["window.config.match.watermark",""],["player.vroll","noopFunc"],["window.config.adv","{}"],["openPopup","false"],["wpsaData","undefined"],["config.adv","{}"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklam_1",""],["reklamsayisi","0"],["player.vroll","undefined"],["volumeClearInterval","0"],["rek_kontrol","noopFunc"],["clicked","true"],["adSearchTitle","undefined"],["HBiddings.vastUrl",""],["AdvPlayer","undefined"],["initOpen","undefined"],["rg","noopFunc"],["Object.prototype.video_ads","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"],["ads","{}"],["window.config.advertisement.0.enabled","0"],["Object.prototype.ads","noopFunc"]];

const hostnamesMap = new Map([["iyibeslenme.net",0],["teknop.net",0],["kirtkirtla.com",0],["ozgunbilgi.com",0],["beceriksizler.net",0],["exxen.com",1],["exceldepo.com",2],["tgyama.com",3],["uzaymanga.com",[4,30]],["e-kitapstore.com",5],["wheel-size.com.tr",6],["karnaval.com",7],["mangaship.net",8],["mangaship.com",8],["miuitr.info",9],["puhutv.com",[10,11]],["coinotag.com",12],["cnnturk.com",[13,14]],["kanald.com.tr",[15,16]],["iddaaorantahmin.com",17],["oyungibi.com",18],["veterinerhekimleri.com",18],["turkdenizcileri.com",19],["bilgalem.blogspot.com",19],["klavyeanaliz.org",20],["dizifast.net",21],["dizikral.com",21],["filmhe.com",21],["hdfilmizle.site",21],["sinepal1.vip",21],["hdsinemax.com",21],["hdfilmizle.org",21],["tafdi4.com",21],["tafdi5.com",21],["elzemfilm.org",21],["tafdi3.com",21],["anizle.com",21],["hdfilmseyircisi.org",21],["kozfilm.com",21],["hdfilmizle.in",21],["diziyou.co",21],["filmizlew.net",21],["dizimag.eu",21],["bumfilmizle1.com",21],["1080hdfilmizle.com",21],["yabancidizibax.com",21],["sinemangoo.org",21],["sexfilmleriizle.com",21],["fullhdfilm.pro",[21,37]],["geziforumu.com",21],["efendim.xyz",21],["dizipaltv.net",21],["filmjr1.com",21],["fluffcore.com",21],["hdfilmfullizle.com",21],["hdfilmcehennemizle.com",21],["netfullfilmizle3.com",21],["filmmodu.info",21],["arrowizle.com",21],["hdfilmifullizle.com",21],["jokerfilmizle.com",21],["720pfilmiizle.net",21],["filmcus.com",21],["filmizlew.org",21],["zoof1.xyz",21],["sinemakolik.net",21],["sinefilmizlesen.com",21],["zarize.com",21],["burdenfly.com",21],["zzerotik.com",21],["filmgo.org",21],["sinemafilmizle.net",21],["fullhdfilmiizle.org",21],["filmkuzusu1.com",21],["hdfilmcix.net",21],["sinemadelisi.com",21],["hdsexfilmizle.com",21],["erotikfilmtube.com",21],["pornoanne.com",21],["diziboxx.com",21],["turkaliz.com",21],["vkfilmizle.net",21],["filmizlet.net",21],["pornorips.com",21],["bumfilmizle.com",21],["shirl.club",21],["evrenselfilmlerim.org",21],["turkcealtyazilipornom.com",21],["sinema.cx",21],["hdfilmizletv.net",21],["sinemaizle.co",21],["hdfilmcehennem.live",21],["efullizle.com",21],["asyafanatiklerim.com",21],["dizilost.com",21],["fullhdfilmdeposu.com",21],["volsex.com",21],["divx720pfilmizle.org",21],["justintvizle21.pro",21],["dizipal700.com",21],["dizipal701.com",21],["dizipal702.com",21],["dizipal703.com",21],["dizipal704.com",21],["dizipal705.com",21],["dizipal706.com",21],["dizipal707.com",21],["dizipal708.com",21],["dizipal709.com",21],["dizipal710.com",21],["dizipal711.com",21],["dizipal712.com",21],["dizipal713.com",21],["dizipal714.com",21],["dizipal715.com",21],["dizipal716.com",21],["dizipal717.com",21],["dizipal718.com",21],["dizipal719.com",21],["dizipal720.com",21],["dizipal721.com",21],["dizipal722.com",21],["dizipal723.com",21],["dizipal724.com",21],["dizipal725.com",21],["dizipal726.com",21],["dizipal727.com",21],["dizipal728.com",21],["dizipal729.com",21],["dizipal730.com",21],["dizipal731.com",21],["dizipal732.com",21],["dizipal733.com",21],["dizipal734.com",21],["dizipal735.com",21],["dizipal736.com",21],["dizipal737.com",21],["dizipal738.com",21],["dizipal739.com",21],["dizipal740.com",21],["dizipal741.com",21],["dizipal742.com",21],["dizipal743.com",21],["dizipal744.com",21],["dizipal745.com",21],["dizipal746.com",21],["dizipal747.com",21],["dizipal748.com",21],["dizipal749.com",21],["dizipal750.com",21],["dizipal751.com",21],["dizipal752.com",21],["dizipal753.com",21],["dizipal754.com",21],["dizipal755.com",21],["dizipal756.com",21],["dizipal757.com",21],["dizipal758.com",21],["dizipal759.com",21],["dizipal760.com",21],["dizipal761.com",21],["dizipal762.com",21],["dizipal763.com",21],["dizipal764.com",21],["dizipal765.com",21],["dizipal766.com",21],["dizipal767.com",21],["dizipal768.com",21],["dizipal769.com",21],["dizipal770.com",21],["dizipal771.com",21],["dizipal772.com",21],["dizipal773.com",21],["dizipal774.com",21],["dizipal775.com",21],["dizipal776.com",21],["dizipal777.com",21],["dizipal778.com",21],["dizipal779.com",21],["dizipal780.com",21],["dizipal781.com",21],["dizipal782.com",21],["dizipal783.com",21],["dizipal784.com",21],["dizipal785.com",21],["dizipal786.com",21],["dizipal787.com",21],["dizipal788.com",21],["dizipal789.com",21],["dizipal790.com",21],["dizipal791.com",21],["dizipal792.com",21],["dizipal793.com",21],["dizipal794.com",21],["dizipal795.com",21],["dizipal796.com",21],["dizipal797.com",21],["dizipal798.com",21],["dizipal799.com",21],["dizipal800.com",21],["dizipal801.com",21],["dizipal802.com",21],["dizipal803.com",21],["dizipal804.com",21],["dizipal805.com",21],["dizipal806.com",21],["dizipal807.com",21],["dizipal808.com",21],["dizipal809.com",21],["dizipal810.com",21],["dizipal811.com",21],["dizipal812.com",21],["dizipal813.com",21],["dizipal814.com",21],["dizipal815.com",21],["dizipal816.com",21],["dizipal817.com",21],["dizipal818.com",21],["dizipal819.com",21],["dizipal820.com",21],["dizipal821.com",21],["dizipal822.com",21],["dizipal823.com",21],["dizipal824.com",21],["dizipal825.com",21],["dizipal826.com",21],["dizipal827.com",21],["dizipal828.com",21],["dizipal829.com",21],["dizipal830.com",21],["dizipal831.com",21],["dizipal832.com",21],["dizipal833.com",21],["dizipal834.com",21],["dizipal835.com",21],["dizipal836.com",21],["dizipal837.com",21],["dizipal838.com",21],["dizipal839.com",21],["dizipal840.com",21],["dizipal841.com",21],["dizipal842.com",21],["dizipal843.com",21],["dizipal844.com",21],["dizipal845.com",21],["dizipal846.com",21],["dizipal847.com",21],["dizipal848.com",21],["dizipal849.com",21],["dizipal850.com",21],["filmizle5.org",21],["filmizle6.org",21],["filmizle7.org",21],["filmizle8.org",21],["filmizle9.org",21],["filmizle10.org",21],["filmizle11.org",21],["filmizle12.org",21],["filmizle13.org",21],["filmizle14.org",21],["filmizle15.org",21],["filmizle16.org",21],["filmizle17.org",21],["filmizle18.org",21],["filmizle19.org",21],["filmizle20.org",21],["filmizle21.org",21],["filmizle22.org",21],["filmizle23.org",21],["filmizle24.org",21],["filmizle25.org",21],["inattvhd188.xyz",21],["inattvhd189.xyz",21],["inattvhd190.xyz",21],["inattvhd191.xyz",21],["inattvhd192.xyz",21],["inattvhd193.xyz",21],["inattvhd194.xyz",21],["inattvhd195.xyz",21],["inattvhd196.xyz",21],["inattvhd197.xyz",21],["inattvhd198.xyz",21],["inattvhd199.xyz",21],["inattvhd200.xyz",21],["inattvhd201.xyz",21],["inattvhd202.xyz",21],["inattvhd203.xyz",21],["inattvhd204.xyz",21],["inattvhd205.xyz",21],["inattvhd206.xyz",21],["inattvhd207.xyz",21],["inattvhd208.xyz",21],["inattvhd209.xyz",21],["inattvhd210.xyz",21],["inattvhd211.xyz",21],["inattvhd212.xyz",21],["inattvhd213.xyz",21],["inattvhd214.xyz",21],["inattvhd215.xyz",21],["inattvhd216.xyz",21],["inattvhd217.xyz",21],["inattvhd218.xyz",21],["inattvhd219.xyz",21],["inattvhd220.xyz",21],["inattvhd221.xyz",21],["tekfullfilmizle5.com",22],["trgoals625.xyz",[22,32]],["trgoals605.xyz",[22,32]],["trgoals606.xyz",[22,32]],["trgoals607.xyz",[22,32]],["trgoals608.xyz",[22,32]],["trgoals609.xyz",[22,32]],["trgoals610.xyz",[22,32]],["trgoals611.xyz",[22,32]],["trgoals612.xyz",[22,32]],["trgoals613.xyz",[22,32]],["trgoals614.xyz",[22,32]],["trgoals615.xyz",[22,32]],["trgoals616.xyz",[22,32]],["trgoals617.xyz",[22,32]],["trgoals618.xyz",[22,32]],["trgoals619.xyz",[22,32]],["trgoals620.xyz",[22,32]],["trgoals483.xyz",22],["trgoals484.xyz",22],["trgoals485.xyz",[22,32]],["trgoals486.xyz",[22,32]],["trgoals487.xyz",[22,32]],["trgoals488.xyz",[22,32]],["trgoals489.xyz",[22,32]],["trgoals490.xyz",[22,32]],["trgoals491.xyz",[22,32]],["trgoals492.xyz",[22,32]],["trgoals493.xyz",[22,32]],["trgoals494.xyz",[22,32]],["trgoals495.xyz",[22,32]],["trgoals496.xyz",[22,32]],["trgoals497.xyz",[22,32]],["trgoals498.xyz",[22,32]],["trgoals499.xyz",[22,32]],["trgoals500.xyz",[22,32]],["trgoals501.xyz",[22,32]],["trgoals502.xyz",[22,32]],["trgoals503.xyz",[22,32]],["trgoals504.xyz",[22,32]],["trgoals505.xyz",[22,32]],["trgoals506.xyz",[22,32]],["trgoals507.xyz",[22,32]],["trgoals508.xyz",[22,32]],["trgoals509.xyz",[22,32]],["trgoals510.xyz",[22,32]],["trgoals511.xyz",[22,32]],["trgoals512.xyz",[22,32]],["trgoals513.xyz",[22,32]],["trgoals514.xyz",[22,32]],["trgoals515.xyz",[22,32]],["trgoals516.xyz",[22,32]],["trgoals517.xyz",[22,32]],["trgoals518.xyz",[22,32]],["trgoals519.xyz",[22,32]],["trgoals520.xyz",[22,32]],["trgoals521.xyz",[22,32]],["trgoals522.xyz",[22,32]],["trgoals523.xyz",[22,32]],["trgoals524.xyz",[22,32]],["trgoals525.xyz",[22,32]],["trgoals526.xyz",[22,32]],["trgoals527.xyz",[22,32]],["trgoals528.xyz",[22,32]],["trgoals529.xyz",[22,32]],["trgoals530.xyz",[22,32]],["trgoals531.xyz",[22,32]],["trgoals532.xyz",[22,32]],["trgoals533.xyz",[22,32]],["trgoals534.xyz",[22,32]],["trgoals535.xyz",[22,32]],["trgoals536.xyz",[22,32]],["trgoals537.xyz",[22,32]],["trgoals538.xyz",[22,32]],["trgoals539.xyz",[22,32]],["trgoals540.xyz",[22,32]],["trgoals541.xyz",[22,32]],["trgoals542.xyz",[22,32]],["trgoals543.xyz",[22,32]],["trgoals544.xyz",[22,32]],["trgoals545.xyz",[22,32]],["trgoals546.xyz",[22,32]],["trgoals547.xyz",[22,32]],["trgoals548.xyz",[22,32]],["trgoals549.xyz",[22,32]],["trgoals550.xyz",[22,32]],["trgoals551.xyz",[22,32]],["trgoals552.xyz",[22,32]],["trgoals553.xyz",[22,32]],["trgoals554.xyz",[22,32]],["trgoals555.xyz",[22,32]],["trgoals556.xyz",[22,32]],["trgoals557.xyz",[22,32]],["trgoals558.xyz",[22,32]],["trgoals559.xyz",[22,32]],["trgoals560.xyz",[22,32]],["trgoals561.xyz",[22,32]],["trgoals562.xyz",[22,32]],["trgoals563.xyz",[22,32]],["trgoals564.xyz",[22,32]],["trgoals565.xyz",[22,32]],["trgoals566.xyz",[22,32]],["trgoals567.xyz",[22,32]],["trgoals568.xyz",[22,32]],["trgoals569.xyz",[22,32]],["trgoals570.xyz",[22,32]],["trgoals571.xyz",[22,32]],["trgoals572.xyz",[22,32]],["trgoals573.xyz",[22,32]],["trgoals574.xyz",[22,32]],["trgoals575.xyz",[22,32]],["trgoals576.xyz",[22,32]],["trgoals577.xyz",[22,32]],["trgoals578.xyz",[22,32]],["trgoals579.xyz",[22,32]],["trgoals580.xyz",[22,32]],["trgoals581.xyz",[22,32]],["trgoals582.xyz",[22,32]],["trgoals583.xyz",[22,32]],["trgoals584.xyz",[22,32]],["trgoals585.xyz",[22,32]],["trgoals586.xyz",[22,32]],["trgoals587.xyz",[22,32]],["trgoals588.xyz",[22,32]],["trgoals589.xyz",[22,32]],["trgoals590.xyz",[22,32]],["trgoals591.xyz",[22,32]],["trgoals592.xyz",[22,32]],["trgoals593.xyz",[22,32]],["trgoals594.xyz",[22,32]],["trgoals595.xyz",[22,32]],["trgoals596.xyz",[22,32]],["trgoals597.xyz",[22,32]],["trgoals598.xyz",[22,32]],["trgoals599.xyz",[22,32]],["trgoals600.xyz",[22,32]],["dizipal73.cloud",22],["dizipal74.cloud",22],["dizipal132.cloud",22],["dizipal133.cloud",22],["dizipal134.cloud",22],["dizipal135.cloud",22],["dizipal140.cloud",22],["webteizle3.com",22],["webteizle4.com",22],["webteizle5.com",22],["webteizle6.com",22],["webteizle7.com",22],["webteizle8.com",22],["webteizle9.com",22],["webteizle10.com",22],["webteizle11.com",22],["webteizle12.com",22],["filmizlehdfilm.com",23],["hdfilmizlesene.org",23],["filmizlehdizle.com",24],["fullfilmizlesene.net",24],["xyzsprtsfrmr1.site",25],["mgviagrtoomuch.com",[26,27]],["ypsd.xyz",28],["cvdd.one",28],["pllsfored.com",29],["filmmodu.co",31],["dizipal12.site",31],["dizipal13.site",31],["dizipal14.site",31],["dizipal15.site",31],["dizipal16.site",31],["dizipal17.site",31],["dizipal18.site",31],["dizipal19.site",31],["dizipal20.site",31],["dizipal21.site",31],["dizipal22.site",31],["dizipal23.site",31],["dizipal24.site",31],["dizipal25.site",31],["dizipal26.site",31],["dizipal27.site",31],["dizipal28.site",31],["dizipal30.site",31],["corsproxy.pro",32],["inattv454.xyz",32],["inattv455.xyz",32],["inattv456.xyz",32],["inattv457.xyz",32],["inattv458.xyz",32],["inattv459.xyz",32],["inattv460.xyz",32],["inattv461.xyz",32],["inattv462.xyz",32],["inattv463.xyz",32],["inattv464.xyz",32],["inattv465.xyz",32],["inattv466.xyz",32],["inattv467.xyz",32],["inattv468.xyz",32],["inattv469.xyz",32],["inattv470.xyz",32],["inattv471.xyz",32],["inattv472.xyz",32],["inattv473.xyz",32],["inattv474.xyz",32],["inattv475.xyz",32],["inattv476.xyz",32],["inattv477.xyz",32],["inattv478.xyz",32],["inattv479.xyz",32],["inattv480.xyz",32],["inattv481.xyz",32],["inattv482.xyz",32],["inattv483.xyz",32],["inattv484.xyz",32],["inattv485.xyz",32],["inattv486.xyz",32],["inattv487.xyz",32],["inattv488.xyz",32],["inattv489.xyz",32],["inattv490.xyz",32],["inattv491.xyz",32],["inattv492.xyz",32],["inattv493.xyz",32],["inattv494.xyz",32],["inattv495.xyz",32],["inattv496.xyz",32],["inattv497.xyz",32],["inattv498.xyz",32],["inattv499.xyz",32],["inattv500.xyz",32],["arsiv.mackolik.com",33],["nefisyemektarifleri.com",35],["izlesene.com",35],["filmizletv2.com",36],["filmizletv18.com",36],["play.diziyou.co",38],["tranimeci.com",39],["filmmakinesi1.com",40],["turkanime.co",41],["forum.donanimhaber.com",42],["atv.com.tr",43],["turkturk.org",44],["turkturk.net",44],["contentx.me",45],["edebiyatdefteri.com",46],["belgeselizlesene.com",[47,48]],["technopat.net",49],["aydindenge.com.tr",50],["diziall.com",51],["domplayer.org",52],["xyzsports165.xyz",53],["xyzsports164.xyz",53],["xyzsports113.xyz",53],["xyzsports114.xyz",53],["xyzsports115.xyz",53],["xyzsports116.xyz",53],["xyzsports117.xyz",53],["xyzsports118.xyz",53],["xyzsports119.xyz",53],["xyzsports120.xyz",53],["xyzsports121.xyz",53],["xyzsports122.xyz",53],["filmmodu9.com",54],["filmmodu10.com",54],["filmmodu11.com",54],["filmmodu12.com",54],["filmmodu13.com",54],["filmmodu14.com",54],["filmmodu15.com",54],["filmmodu16.com",54],["filmmodu17.com",54],["filmmodu18.com",54],["filmmodu19.com",54],["filmmodu20.com",54]]);

const entitiesMap = new Map([["tranimaci",21],["siyahfilmizle",21],["dizicaps",21],["filmizletv1",21],["fullhdfilmizle",[21,37]],["fullfilmizle",21],["sinepal",21],["yabancidizilertv",21],["hdfilmcehennemi",[21,23]],["izlekolik",21],["dizipal",21],["filmizletv",[21,23,36]],["tekparthdfilmizle",21],["dizikorea",21],["diziyo",21],["dafflix",21],["dizimov",21],["fullhdfilmmodu2",21],["pembetv18",21],["tranimeizle",21],["fullhdfilmizletv",23],["diziroll",31],["dizilla",31],["jetfilmizle",34]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
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
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue, extraArgs);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
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
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
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
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
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
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, rawValue);
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

function validateConstantFn(trusted, raw, extraArgs = {}) {
    const safe = safeSelf();
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch(ex) { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
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
