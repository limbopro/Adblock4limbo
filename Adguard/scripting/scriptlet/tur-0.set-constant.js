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
/* global cloneInto */

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["adblock.check","noopFunc"],["canRunAds","true"],["eyeOfErstream.detectedBloke","falseFunc"],["xv_ad_block","0"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["maari","noopFunc"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["app.ads","{}"],["adsConfigs.0.enabled","0"],["window.config.adv.enabled","0"],["window.config.match.watermark",""],["player.vroll","noopFunc"],["window.config.adv","{}"],["openPopup","false"],["wpsaData","undefined"],["config.adv","{}"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklam_1",""],["reklamsayisi","0"],["player.vroll","undefined"],["volumeClearInterval","0"],["rek_kontrol","noopFunc"],["clicked","true"],["adSearchTitle","undefined"],["HBiddings.vastUrl",""],["AdvPlayer","undefined"],["initOpen","undefined"],["rg","noopFunc"],["Object.prototype.video_ads","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"],["PopBanner","undefined"],["ads","{}"],["reklamsayisi","1"],["window.config.advertisement.0.enabled","0"],["Object.prototype.ads","noopFunc"]];

const hostnamesMap = new Map([["iyibeslenme.net",0],["teknop.net",0],["kirtkirtla.com",0],["ozgunbilgi.com",0],["beceriksizler.net",0],["promy.pro",1],["iddaaorantahmin.com",1],["exxen.com",2],["exceldepo.com",3],["tgyama.com",4],["uzaymanga.com",[5,29]],["e-kitapstore.com",6],["wheel-size.com.tr",7],["karnaval.com",8],["mangaship.net",9],["mangaship.com",9],["miuitr.info",10],["puhutv.com",[11,12]],["coinotag.com",13],["cnnturk.com",[14,15]],["kanald.com.tr",[16,17]],["oyungibi.com",18],["veterinerhekimleri.com",18],["turkdenizcileri.com",19],["bilgalem.blogspot.com",19],["klavyeanaliz.org",20],["filmzirvesi.to",21],["filmifullizle.online",21],["sinemakolik.org",21],["filmerotixxx.com",21],["filmfc.com",21],["filmizletv18.com",[21,35]],["onlinefilmizle.site",21],["playerzz.xyz",21],["filmjr.org",21],["asfilmizle.com",21],["dizikral.com",21],["dizifast.net",21],["filmhe.com",21],["hdfilmizle.site",21],["sinepal1.vip",21],["hdsinemax.com",21],["hdfilmizle.org",21],["tafdi4.com",21],["tafdi5.com",21],["elzemfilm.org",21],["tafdi3.com",21],["anizle.com",21],["hdfilmseyircisi.org",21],["kozfilm.com",21],["hdfilmizle.in",21],["diziyou.co",21],["filmizlew.net",21],["dizimag.eu",21],["bumfilmizle1.com",21],["1080hdfilmizle.com",21],["yabancidizibax.com",21],["sinemangoo.org",21],["sexfilmleriizle.com",21],["fullhdfilm.pro",[21,36]],["geziforumu.com",21],["efendim.xyz",21],["dizipaltv.net",21],["fluffcore.com",21],["hdfilmfullizle.com",21],["hdfilmcehennemizle.com",21],["netfullfilmizle3.com",21],["filmmodu.info",21],["arrowizle.com",21],["hdfilmifullizle.com",21],["jokerfilmizle.com",21],["720pfilmiizle.net",21],["filmcus.com",21],["filmizlew.org",21],["zoof1.xyz",21],["sinemakolik.net",21],["sinefilmizlesen.com",21],["zarize.com",21],["burdenfly.com",21],["zzerotik.com",21],["filmgo.org",21],["sinemafilmizle.net",21],["fullhdfilmiizle.org",21],["filmkuzusu1.com",21],["hdfilmcix.net",21],["sinemadelisi.com",21],["hdsexfilmizle.com",21],["erotikfilmtube.com",21],["pornoanne.com",21],["diziboxx.com",21],["turkaliz.com",21],["vkfilmizle.net",21],["filmizlet.net",21],["pornorips.com",21],["bumfilmizle.com",21],["shirl.club",21],["evrenselfilmlerim.org",21],["turkcealtyazilipornom.com",21],["sinema.cx",[21,53]],["hdfilmizletv.net",21],["sinemaizle.co",21],["hdfilmcehennem.live",21],["efullizle.com",21],["asyafanatiklerim.com",21],["dizilost.com",21],["fullhdfilmdeposu.com",21],["volsex.com",21],["divx720pfilmizle.org",21],["justintvizle21.pro",21],["dizipal700.com",21],["dizipal701.com",21],["dizipal702.com",21],["dizipal703.com",21],["dizipal704.com",21],["dizipal705.com",21],["dizipal706.com",21],["dizipal707.com",21],["dizipal708.com",21],["dizipal709.com",21],["dizipal710.com",21],["dizipal711.com",21],["dizipal712.com",21],["dizipal713.com",21],["dizipal714.com",21],["dizipal715.com",21],["dizipal716.com",21],["dizipal717.com",21],["dizipal718.com",21],["dizipal719.com",21],["dizipal720.com",21],["dizipal721.com",21],["dizipal722.com",21],["dizipal723.com",21],["dizipal724.com",21],["dizipal725.com",21],["dizipal726.com",21],["dizipal727.com",21],["dizipal728.com",21],["dizipal729.com",21],["dizipal730.com",21],["dizipal731.com",21],["dizipal732.com",21],["dizipal733.com",21],["dizipal734.com",21],["dizipal735.com",21],["dizipal736.com",21],["dizipal737.com",21],["dizipal738.com",21],["dizipal739.com",21],["dizipal740.com",21],["dizipal741.com",21],["dizipal742.com",21],["dizipal743.com",21],["dizipal744.com",21],["dizipal745.com",21],["dizipal746.com",21],["dizipal747.com",21],["dizipal748.com",21],["dizipal749.com",21],["dizipal750.com",21],["dizipal751.com",21],["dizipal752.com",21],["dizipal753.com",21],["dizipal754.com",21],["dizipal755.com",21],["dizipal756.com",21],["dizipal757.com",21],["dizipal758.com",21],["dizipal759.com",21],["dizipal760.com",21],["dizipal761.com",21],["dizipal762.com",21],["dizipal763.com",21],["dizipal764.com",21],["dizipal765.com",21],["dizipal766.com",21],["dizipal767.com",21],["dizipal768.com",21],["dizipal769.com",21],["dizipal770.com",21],["dizipal771.com",21],["dizipal772.com",21],["dizipal773.com",21],["dizipal774.com",21],["dizipal775.com",21],["dizipal776.com",21],["dizipal777.com",21],["dizipal778.com",21],["dizipal779.com",21],["dizipal780.com",21],["dizipal781.com",21],["dizipal782.com",21],["dizipal783.com",21],["dizipal784.com",21],["dizipal785.com",21],["dizipal786.com",21],["dizipal787.com",21],["dizipal788.com",21],["dizipal789.com",21],["dizipal790.com",21],["dizipal791.com",21],["dizipal792.com",21],["dizipal793.com",21],["dizipal794.com",21],["dizipal795.com",21],["dizipal796.com",21],["dizipal797.com",21],["dizipal798.com",21],["dizipal799.com",21],["dizipal800.com",21],["dizipal801.com",21],["dizipal802.com",21],["dizipal803.com",21],["dizipal804.com",21],["dizipal805.com",21],["dizipal806.com",21],["dizipal807.com",21],["dizipal808.com",21],["dizipal809.com",21],["dizipal810.com",21],["dizipal811.com",21],["dizipal812.com",21],["dizipal813.com",21],["dizipal814.com",21],["dizipal815.com",21],["dizipal816.com",21],["dizipal817.com",21],["dizipal818.com",21],["dizipal819.com",21],["dizipal820.com",21],["dizipal821.com",21],["dizipal822.com",21],["dizipal823.com",21],["dizipal824.com",21],["dizipal825.com",21],["dizipal826.com",21],["dizipal827.com",21],["dizipal828.com",21],["dizipal829.com",21],["dizipal830.com",21],["dizipal831.com",21],["dizipal832.com",21],["dizipal833.com",21],["dizipal834.com",21],["dizipal835.com",21],["dizipal836.com",21],["dizipal837.com",21],["dizipal838.com",21],["dizipal839.com",21],["dizipal840.com",21],["dizipal841.com",21],["dizipal842.com",21],["dizipal843.com",21],["dizipal844.com",21],["dizipal845.com",21],["dizipal846.com",21],["dizipal847.com",21],["dizipal848.com",21],["dizipal849.com",21],["dizipal850.com",21],["filmizle5.org",21],["filmizle6.org",21],["filmizle7.org",21],["filmizle8.org",21],["filmizle9.org",21],["filmizle10.org",21],["filmizle11.org",21],["filmizle12.org",21],["filmizle13.org",21],["filmizle14.org",21],["filmizle15.org",21],["filmizle16.org",21],["filmizle17.org",21],["filmizle18.org",21],["filmizle19.org",21],["filmizle20.org",21],["filmizle21.org",21],["filmizle22.org",21],["filmizle23.org",21],["filmizle24.org",21],["filmizle25.org",21],["inattvhd188.xyz",21],["inattvhd189.xyz",21],["inattvhd190.xyz",21],["inattvhd191.xyz",21],["inattvhd192.xyz",21],["inattvhd193.xyz",21],["inattvhd194.xyz",21],["inattvhd195.xyz",21],["inattvhd196.xyz",21],["inattvhd197.xyz",21],["inattvhd198.xyz",21],["inattvhd199.xyz",21],["inattvhd200.xyz",21],["inattvhd201.xyz",21],["inattvhd202.xyz",21],["inattvhd203.xyz",21],["inattvhd204.xyz",21],["inattvhd205.xyz",21],["inattvhd206.xyz",21],["inattvhd207.xyz",21],["inattvhd208.xyz",21],["inattvhd209.xyz",21],["inattvhd210.xyz",21],["inattvhd211.xyz",21],["inattvhd212.xyz",21],["inattvhd213.xyz",21],["inattvhd214.xyz",21],["inattvhd215.xyz",21],["inattvhd216.xyz",21],["inattvhd217.xyz",21],["inattvhd218.xyz",21],["inattvhd219.xyz",21],["inattvhd220.xyz",21],["inattvhd221.xyz",21],["tekfullfilmizle5.com",22],["trgoals625.xyz",[22,31]],["trgoals605.xyz",[22,31]],["trgoals606.xyz",[22,31]],["trgoals607.xyz",[22,31]],["trgoals608.xyz",[22,31]],["trgoals609.xyz",[22,31]],["trgoals610.xyz",[22,31]],["trgoals611.xyz",[22,31]],["trgoals612.xyz",[22,31]],["trgoals613.xyz",[22,31]],["trgoals614.xyz",[22,31]],["trgoals615.xyz",[22,31]],["trgoals616.xyz",[22,31]],["trgoals617.xyz",[22,31]],["trgoals618.xyz",[22,31]],["trgoals619.xyz",[22,31]],["trgoals620.xyz",[22,31]],["trgoals483.xyz",22],["trgoals484.xyz",22],["trgoals485.xyz",[22,31]],["trgoals486.xyz",[22,31]],["trgoals487.xyz",[22,31]],["trgoals488.xyz",[22,31]],["trgoals489.xyz",[22,31]],["trgoals490.xyz",[22,31]],["trgoals491.xyz",[22,31]],["trgoals492.xyz",[22,31]],["trgoals493.xyz",[22,31]],["trgoals494.xyz",[22,31]],["trgoals495.xyz",[22,31]],["trgoals496.xyz",[22,31]],["trgoals497.xyz",[22,31]],["trgoals498.xyz",[22,31]],["trgoals499.xyz",[22,31]],["trgoals500.xyz",[22,31]],["trgoals501.xyz",[22,31]],["trgoals502.xyz",[22,31]],["trgoals503.xyz",[22,31]],["trgoals504.xyz",[22,31]],["trgoals505.xyz",[22,31]],["trgoals506.xyz",[22,31]],["trgoals507.xyz",[22,31]],["trgoals508.xyz",[22,31]],["trgoals509.xyz",[22,31]],["trgoals510.xyz",[22,31]],["trgoals511.xyz",[22,31]],["trgoals512.xyz",[22,31]],["trgoals513.xyz",[22,31]],["trgoals514.xyz",[22,31]],["trgoals515.xyz",[22,31]],["trgoals516.xyz",[22,31]],["trgoals517.xyz",[22,31]],["trgoals518.xyz",[22,31]],["trgoals519.xyz",[22,31]],["trgoals520.xyz",[22,31]],["trgoals521.xyz",[22,31]],["trgoals522.xyz",[22,31]],["trgoals523.xyz",[22,31]],["trgoals524.xyz",[22,31]],["trgoals525.xyz",[22,31]],["trgoals526.xyz",[22,31]],["trgoals527.xyz",[22,31]],["trgoals528.xyz",[22,31]],["trgoals529.xyz",[22,31]],["trgoals530.xyz",[22,31]],["trgoals531.xyz",[22,31]],["trgoals532.xyz",[22,31]],["trgoals533.xyz",[22,31]],["trgoals534.xyz",[22,31]],["trgoals535.xyz",[22,31]],["trgoals536.xyz",[22,31]],["trgoals537.xyz",[22,31]],["trgoals538.xyz",[22,31]],["trgoals539.xyz",[22,31]],["trgoals540.xyz",[22,31]],["trgoals541.xyz",[22,31]],["trgoals542.xyz",[22,31]],["trgoals543.xyz",[22,31]],["trgoals544.xyz",[22,31]],["trgoals545.xyz",[22,31]],["trgoals546.xyz",[22,31]],["trgoals547.xyz",[22,31]],["trgoals548.xyz",[22,31]],["trgoals549.xyz",[22,31]],["trgoals550.xyz",[22,31]],["trgoals551.xyz",[22,31]],["trgoals552.xyz",[22,31]],["trgoals553.xyz",[22,31]],["trgoals554.xyz",[22,31]],["trgoals555.xyz",[22,31]],["trgoals556.xyz",[22,31]],["trgoals557.xyz",[22,31]],["trgoals558.xyz",[22,31]],["trgoals559.xyz",[22,31]],["trgoals560.xyz",[22,31]],["trgoals561.xyz",[22,31]],["trgoals562.xyz",[22,31]],["trgoals563.xyz",[22,31]],["trgoals564.xyz",[22,31]],["trgoals565.xyz",[22,31]],["trgoals566.xyz",[22,31]],["trgoals567.xyz",[22,31]],["trgoals568.xyz",[22,31]],["trgoals569.xyz",[22,31]],["trgoals570.xyz",[22,31]],["trgoals571.xyz",[22,31]],["trgoals572.xyz",[22,31]],["trgoals573.xyz",[22,31]],["trgoals574.xyz",[22,31]],["trgoals575.xyz",[22,31]],["trgoals576.xyz",[22,31]],["trgoals577.xyz",[22,31]],["trgoals578.xyz",[22,31]],["trgoals579.xyz",[22,31]],["trgoals580.xyz",[22,31]],["trgoals581.xyz",[22,31]],["trgoals582.xyz",[22,31]],["trgoals583.xyz",[22,31]],["trgoals584.xyz",[22,31]],["trgoals585.xyz",[22,31]],["trgoals586.xyz",[22,31]],["trgoals587.xyz",[22,31]],["trgoals588.xyz",[22,31]],["trgoals589.xyz",[22,31]],["trgoals590.xyz",[22,31]],["trgoals591.xyz",[22,31]],["trgoals592.xyz",[22,31]],["trgoals593.xyz",[22,31]],["trgoals594.xyz",[22,31]],["trgoals595.xyz",[22,31]],["trgoals596.xyz",[22,31]],["trgoals597.xyz",[22,31]],["trgoals598.xyz",[22,31]],["trgoals599.xyz",[22,31]],["trgoals600.xyz",[22,31]],["dizipal73.cloud",22],["dizipal74.cloud",22],["dizipal132.cloud",22],["dizipal133.cloud",22],["dizipal134.cloud",22],["dizipal135.cloud",22],["dizipal140.cloud",22],["webteizle.info",22],["webteizle1.info",22],["webteizle2.info",22],["webteizle3.info",22],["webteizle4.info",22],["webteizle5.info",22],["webteizle6.info",22],["webteizle7.info",22],["webteizle8.info",22],["webteizle9.info",22],["webteizle10.info",22],["filmizlehdizle.com",23],["fullfilmizlesene.net",23],["xyzsprtsfrmr1.site",24],["mgviagrtoomuch.com",[25,26]],["ypsd.xyz",27],["cvdd.one",27],["pllsfored.com",28],["filmmodu.co",30],["dizipal12.site",30],["dizipal13.site",30],["dizipal14.site",30],["dizipal15.site",30],["dizipal16.site",30],["dizipal17.site",30],["dizipal18.site",30],["dizipal19.site",30],["dizipal20.site",30],["dizipal21.site",30],["dizipal22.site",30],["dizipal23.site",30],["dizipal24.site",30],["dizipal25.site",30],["dizipal26.site",30],["dizipal27.site",30],["dizipal28.site",30],["dizipal30.site",30],["pllsfored.co",31],["taraftarium.co",31],["corsproxy.pro",31],["inattv454.xyz",31],["inattv455.xyz",31],["inattv456.xyz",31],["inattv457.xyz",31],["inattv458.xyz",31],["inattv459.xyz",31],["inattv460.xyz",31],["inattv461.xyz",31],["inattv462.xyz",31],["inattv463.xyz",31],["inattv464.xyz",31],["inattv465.xyz",31],["inattv466.xyz",31],["inattv467.xyz",31],["inattv468.xyz",31],["inattv469.xyz",31],["inattv470.xyz",31],["inattv471.xyz",31],["inattv472.xyz",31],["inattv473.xyz",31],["inattv474.xyz",31],["inattv475.xyz",31],["inattv476.xyz",31],["inattv477.xyz",31],["inattv478.xyz",31],["inattv479.xyz",31],["inattv480.xyz",31],["inattv481.xyz",31],["inattv482.xyz",31],["inattv483.xyz",31],["inattv484.xyz",31],["inattv485.xyz",31],["inattv486.xyz",31],["inattv487.xyz",31],["inattv488.xyz",31],["inattv489.xyz",31],["inattv490.xyz",31],["inattv491.xyz",31],["inattv492.xyz",31],["inattv493.xyz",31],["inattv494.xyz",31],["inattv495.xyz",31],["inattv496.xyz",31],["inattv497.xyz",31],["inattv498.xyz",31],["inattv499.xyz",31],["inattv500.xyz",31],["arsiv.mackolik.com",32],["nefisyemektarifleri.com",34],["izlesene.com",34],["filmizletv2.com",35],["play.diziyou.co",37],["tranimeci.com",38],["filmmakinesi1.com",39],["turkanime.co",40],["forum.donanimhaber.com",41],["atv.com.tr",42],["turkturk.org",43],["turkturk.net",43],["contentx.me",44],["edebiyatdefteri.com",45],["belgeselizlesene.com",[46,47]],["technopat.net",48],["pchocasi.com.tr",48],["aydindenge.com.tr",49],["diziall.com",50],["yeniasya.com.tr",51],["domplayer.org",52],["filmizlehdfilm.com",53],["fullfilmizle.cc",53],["hdfilmcix.org",53],["hdfilmizlesene.org",53],["xyzsports173.xyz",54],["xyzsports174.xyz",54],["xyzsports175.xyz",54],["xyzsports176.xyz",54],["xyzsports177.xyz",54],["xyzsports178.xyz",54],["xyzsports179.xyz",54],["xyzsports180.xyz",54],["xyzsports181.xyz",54],["xyzsports182.xyz",54],["xyzsports183.xyz",54],["xyzsports184.xyz",54],["xyzsports185.xyz",54],["xyzsports186.xyz",54],["xyzsports187.xyz",54],["xyzsports188.xyz",54],["xyzsports189.xyz",54],["xyzsports190.xyz",54],["xyzsports191.xyz",54],["xyzsports192.xyz",54],["xyzsports193.xyz",54],["xyzsports194.xyz",54],["xyzsports195.xyz",54],["xyzsports196.xyz",54],["xyzsports197.xyz",54],["xyzsports198.xyz",54],["xyzsports199.xyz",54],["xyzsports200.xyz",54],["filmmodu9.com",55],["filmmodu10.com",55],["filmmodu11.com",55],["filmmodu12.com",55],["filmmodu13.com",55],["filmmodu14.com",55],["filmmodu15.com",55],["filmmodu16.com",55],["filmmodu17.com",55],["filmmodu18.com",55],["filmmodu19.com",55],["filmmodu20.com",55]]);

const entitiesMap = new Map([["tranimaci",21],["siyahfilmizle",21],["dizicaps",21],["filmizletv1",21],["fullhdfilmizle",[21,36,53]],["fullfilmizle",[21,53]],["sinepal",21],["yabancidizilertv",21],["hdfilmcehennemi",[21,53]],["izlekolik",21],["dizipal",21],["filmizletv",[21,35,53]],["tekparthdfilmizle",21],["dizikorea",21],["diziyo",21],["dafflix",21],["dizimov",21],["fullhdfilmmodu2",21],["pembetv18",21],["tranimeizle",21],["diziroll",30],["dizilla",30],["jetfilmizle",33],["fullhdfilmizletv",53]]);

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
            'loading': 1, 'asap': 1,
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
        if ( raw.startsWith('json:') ) {
            try { value = safe.JSON_parse(raw.slice(5)); } catch(ex) { return; }
        } else if ( raw.startsWith('{') && raw.endsWith('}') ) {
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
}
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
