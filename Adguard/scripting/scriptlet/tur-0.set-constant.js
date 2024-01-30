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

const argsList = [["adblock.check","noopFunc"],["eyeOfErstream.detectedBloke","falseFunc"],["ads","falseFunc"],["xv_ad_block","0"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["canRunAds","true"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["window.config.adv.enabled","0"],["window.config.match.watermark",""],["player.vroll","noopFunc"],["window.config.adv","{}"],["openPopup","false"],["config.adv","{}"],["wpsaData","undefined"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklam_1",""],["reklamsayisi","0"],["player.vroll","undefined"],["config.adv.enabled","0"],["volumeClearInterval","0"],["rek_kontrol","noopFunc"],["clicked","true"],["adSearchTitle","undefined"],["Object.prototype.ads","noopFunc"],["HBiddings.vastUrl",""],["AdvPlayer","undefined"],["initOpen","undefined"],["initNewAd","noopFunc"],["rg","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"]];

const hostnamesMap = new Map([["iyibeslenme.net",0],["teknop.net",0],["kirtkirtla.com",0],["buneymis.net",0],["ozgunbilgi.com",0],["beceriksizler.net",0],["exxen.com",1],["animeizletr.com",2],["exceldepo.com",3],["tgyama.com",4],["uzaymanga.com",[5,27]],["e-kitapstore.com",6],["wheel-size.com.tr",7],["karnaval.com",8],["mangaship.net",9],["mangaship.com",9],["miuitr.info",10],["puhutv.com",11],["coinotag.com",12],["cnnturk.com",[13,14]],["kanald.com.tr",[15,16]],["iddaaorantahmin.com",17],["oyungibi.com",18],["veterinerhekimleri.com",18],["turkdenizcileri.com",19],["bilgalem.blogspot.com",19],["klavyeanaliz.org",20],["hdfilmizle.site",21],["sinepal1.vip",21],["hdsinemax.com",21],["hdfilmizle.org",21],["siyahfilmizle.pro",21],["tafdi4.com",21],["tafdi5.com",21],["elzemfilm.org",21],["tafdi3.com",21],["anizle.com",21],["hdfilmseyircisi.org",21],["sinemol.net",21],["dizirun2.com",21],["kozfilm.com",21],["hdfilmhit.org",21],["hdfilmizle.in",21],["dizipall.org",21],["diziyou.co",21],["filmizlew.net",21],["tafdi2.com",21],["dizimag.eu",21],["bumfilmizle1.com",21],["1080hdfilmizle.com",21],["dipfilmizle.net",21],["turkerotikizle.com",21],["yabancidizibax.com",21],["sinemangoo.org",21],["sexfilmleriizle.com",21],["fullhdfilm.pro",[21,34]],["geziforumu.com",21],["efendim.xyz",21],["dizipaltv.net",21],["filmjr1.com",21],["fluffcore.com",21],["hdfilmfullizle.com",21],["hdfilmcehennemizle.com",21],["netfullfilmizle3.com",21],["filmmodu.info",21],["dizifilm.pro",21],["arrowizle.com",21],["hdfilmifullizle.com",21],["jokerfilmizle.com",21],["720pfilmiizle.net",21],["seehdfilm.com",21],["filmcus.com",21],["hazirfilm.com",21],["filmizlew.org",21],["zoof1.xyz",21],["sinemakolik.net",21],["sinefilmizlesen.com",21],["zarize.com",21],["pornobuna.com",21],["zarizeporno.com",21],["burdenfly.com",21],["zzerotik.com",21],["filmgo.org",21],["sinemafilmizle.net",21],["fullhdfilmiizle.org",21],["hdfilmw.org",21],["filmkuzusu1.com",21],["hdfilmcix.net",21],["sinemadelisi.com",21],["hdsexfilmizle.com",21],["erotik-film.org",21],["erotikfilmtube.com",21],["pornoanne.com",21],["koredizileri.tv",21],["diziboxx.com",21],["turkaliz.com",21],["jetdiziizle.net",21],["vkfilmizle.net",21],["dizimom.live",21],["fullhdfilmizleyin.com",21],["filmizlet.net",21],["pornorips.com",21],["bumfilmizle.com",21],["shirl.club",21],["evrenselfilmlerim.org",21],["turkcealtyazilipornom.com",21],["sinema.cc",21],["hdfilmizletv.net",21],["sinemaizle.co",21],["netfilmtvizle.com",21],["hdfilmcehennem.live",21],["efullizle.com",21],["asyafanatiklerim.com",21],["dizilost.com",21],["fileru.net",21],["fullhdfilmdeposu.com",21],["volsex.com",21],["torba.info",21],["divx720pfilmizle.org",21],["justintvizle11.pro",21],["justintvizle12.pro",21],["justintvizle13.pro",21],["justintvizle14.pro",21],["justintvizle15.pro",21],["justintvizle16.pro",21],["justintvizle17.pro",21],["justintvizle18.pro",21],["justintvizle19.pro",21],["justintvizle20.pro",21],["justintvizle21.pro",21],["justintvizle22.pro",21],["justintvizle23.pro",21],["justintvizle24.pro",21],["justintvizle25.pro",21],["justintvizle26.pro",21],["justintvizle27.pro",21],["justintvizle28.pro",21],["justintvizle29.pro",21],["justintvizle30.pro",21],["canlitribun53.com",21],["canlitribun54.com",21],["canlitribun55.com",21],["canlitribun56.com",21],["canlitribun57.com",21],["canlitribun58.com",21],["canlitribun59.com",21],["canlitribun60.com",21],["canlitribun61.com",21],["canlitribun62.com",21],["canlitribun63.com",21],["canlitribun64.com",21],["canlitribun65.com",21],["canlitribun66.com",21],["canlitribun67.com",21],["canlitribun68.com",21],["canlitribun69.com",21],["canlitribun70.com",21],["dizipal700.com",21],["dizipal701.com",21],["dizipal702.com",21],["dizipal703.com",21],["dizipal704.com",21],["dizipal705.com",21],["dizipal706.com",21],["dizipal707.com",21],["dizipal708.com",21],["dizipal709.com",21],["dizipal710.com",21],["dizipal711.com",21],["dizipal712.com",21],["dizipal713.com",21],["dizipal714.com",21],["dizipal715.com",21],["dizipal716.com",21],["dizipal717.com",21],["dizipal718.com",21],["dizipal719.com",21],["dizipal720.com",21],["dizipal721.com",21],["dizipal722.com",21],["dizipal723.com",21],["dizipal724.com",21],["dizipal725.com",21],["dizipal726.com",21],["dizipal727.com",21],["dizipal728.com",21],["dizipal729.com",21],["dizipal730.com",21],["dizipal731.com",21],["dizipal732.com",21],["dizipal733.com",21],["dizipal734.com",21],["dizipal735.com",21],["dizipal736.com",21],["dizipal737.com",21],["dizipal738.com",21],["dizipal739.com",21],["dizipal740.com",21],["dizipal741.com",21],["dizipal742.com",21],["dizipal743.com",21],["dizipal744.com",21],["dizipal745.com",21],["dizipal746.com",21],["dizipal747.com",21],["dizipal748.com",21],["dizipal749.com",21],["dizipal750.com",21],["dizipal751.com",21],["dizipal752.com",21],["dizipal753.com",21],["dizipal754.com",21],["dizipal755.com",21],["dizipal756.com",21],["dizipal757.com",21],["dizipal758.com",21],["dizipal759.com",21],["dizipal760.com",21],["dizipal761.com",21],["dizipal762.com",21],["dizipal763.com",21],["dizipal764.com",21],["dizipal765.com",21],["dizipal766.com",21],["dizipal767.com",21],["dizipal768.com",21],["dizipal769.com",21],["filmizle5.org",21],["filmizle6.org",21],["filmizle7.org",21],["filmizle8.org",21],["filmizle9.org",21],["filmizle10.org",21],["filmizle11.org",21],["filmizle12.org",21],["filmizle13.org",21],["filmizle14.org",21],["filmizle15.org",21],["filmizle16.org",21],["filmizle17.org",21],["filmizle18.org",21],["filmizle19.org",21],["filmizle20.org",21],["filmizle21.org",21],["filmizle22.org",21],["filmizle23.org",21],["filmizle24.org",21],["filmizle25.org",21],["dizimom1.com",22],["trgoalshosting.cf",[22,36]],["tekfullfilmizle5.com",22],["yovmiyelazim.com",22],["tekfullfilmizle3.com",22],["izleorg2.org",22],["trgoals625.xyz",[22,28]],["trgoals605.xyz",[22,28]],["trgoals606.xyz",[22,28]],["trgoals607.xyz",[22,28]],["trgoals608.xyz",[22,28]],["trgoals609.xyz",[22,28]],["trgoals610.xyz",[22,28]],["trgoals611.xyz",[22,28]],["trgoals612.xyz",[22,28]],["trgoals613.xyz",[22,28]],["trgoals614.xyz",[22,28]],["trgoals615.xyz",[22,28]],["trgoals616.xyz",[22,28]],["trgoals617.xyz",[22,28]],["trgoals618.xyz",[22,28]],["trgoals619.xyz",[22,28]],["trgoals620.xyz",[22,28]],["trgoals483.xyz",22],["trgoals484.xyz",22],["trgoals485.xyz",[22,28]],["trgoals486.xyz",[22,28]],["trgoals487.xyz",[22,28]],["trgoals488.xyz",[22,28]],["trgoals489.xyz",[22,28]],["trgoals490.xyz",[22,28]],["trgoals491.xyz",[22,28]],["trgoals492.xyz",[22,28]],["trgoals493.xyz",[22,28]],["trgoals494.xyz",[22,28]],["trgoals495.xyz",[22,28]],["trgoals496.xyz",[22,28]],["trgoals497.xyz",[22,28]],["trgoals498.xyz",[22,28]],["trgoals499.xyz",[22,28]],["trgoals500.xyz",[22,28]],["trgoals501.xyz",[22,28]],["trgoals502.xyz",[22,28]],["trgoals503.xyz",[22,28]],["trgoals504.xyz",[22,28]],["trgoals505.xyz",[22,28]],["trgoals506.xyz",[22,28]],["trgoals507.xyz",[22,28]],["trgoals508.xyz",[22,28]],["trgoals509.xyz",[22,28]],["trgoals510.xyz",[22,28]],["trgoals511.xyz",[22,28]],["trgoals512.xyz",[22,28]],["trgoals513.xyz",[22,28]],["trgoals514.xyz",[22,28]],["trgoals515.xyz",[22,28]],["trgoals516.xyz",[22,28]],["trgoals517.xyz",[22,28]],["trgoals518.xyz",[22,28]],["trgoals519.xyz",[22,28]],["trgoals520.xyz",[22,28]],["trgoals521.xyz",[22,28]],["trgoals522.xyz",[22,28]],["trgoals523.xyz",[22,28]],["trgoals524.xyz",[22,28]],["trgoals525.xyz",[22,28]],["trgoals526.xyz",[22,28]],["trgoals527.xyz",[22,28]],["trgoals528.xyz",[22,28]],["trgoals529.xyz",[22,28]],["trgoals530.xyz",[22,28]],["trgoals531.xyz",[22,28]],["trgoals532.xyz",[22,28]],["trgoals533.xyz",[22,28]],["trgoals534.xyz",[22,28]],["trgoals535.xyz",[22,28]],["trgoals536.xyz",[22,28]],["trgoals537.xyz",[22,28]],["trgoals538.xyz",[22,28]],["trgoals539.xyz",[22,28]],["trgoals540.xyz",[22,28]],["trgoals541.xyz",[22,28]],["trgoals542.xyz",[22,28]],["trgoals543.xyz",[22,28]],["trgoals544.xyz",[22,28]],["trgoals545.xyz",[22,28]],["trgoals546.xyz",[22,28]],["trgoals547.xyz",[22,28]],["trgoals548.xyz",[22,28]],["trgoals549.xyz",[22,28]],["trgoals550.xyz",[22,28]],["trgoals551.xyz",[22,28]],["trgoals552.xyz",[22,28]],["trgoals553.xyz",[22,28]],["trgoals554.xyz",[22,28]],["trgoals555.xyz",[22,28]],["trgoals556.xyz",[22,28]],["trgoals557.xyz",[22,28]],["trgoals558.xyz",[22,28]],["trgoals559.xyz",[22,28]],["trgoals560.xyz",[22,28]],["trgoals561.xyz",[22,28]],["trgoals562.xyz",[22,28]],["trgoals563.xyz",[22,28]],["trgoals564.xyz",[22,28]],["trgoals565.xyz",[22,28]],["trgoals566.xyz",[22,28]],["trgoals567.xyz",[22,28]],["trgoals568.xyz",[22,28]],["trgoals569.xyz",[22,28]],["trgoals570.xyz",[22,28]],["trgoals571.xyz",[22,28]],["trgoals572.xyz",[22,28]],["trgoals573.xyz",[22,28]],["trgoals574.xyz",[22,28]],["trgoals575.xyz",[22,28]],["trgoals576.xyz",[22,28]],["trgoals577.xyz",[22,28]],["trgoals578.xyz",[22,28]],["trgoals579.xyz",[22,28]],["trgoals580.xyz",[22,28]],["trgoals581.xyz",[22,28]],["trgoals582.xyz",[22,28]],["trgoals583.xyz",[22,28]],["trgoals584.xyz",[22,28]],["trgoals585.xyz",[22,28]],["trgoals586.xyz",[22,28]],["trgoals587.xyz",[22,28]],["trgoals588.xyz",[22,28]],["trgoals589.xyz",[22,28]],["trgoals590.xyz",[22,28]],["trgoals591.xyz",[22,28]],["trgoals592.xyz",[22,28]],["trgoals593.xyz",[22,28]],["trgoals594.xyz",[22,28]],["trgoals595.xyz",[22,28]],["trgoals596.xyz",[22,28]],["trgoals597.xyz",[22,28]],["trgoals598.xyz",[22,28]],["trgoals599.xyz",[22,28]],["trgoals600.xyz",[22,28]],["dizipal70.cloud",22],["dizipal71.cloud",22],["dizipal72.cloud",22],["dizipal73.cloud",22],["dizipal74.cloud",22],["dizipal75.cloud",22],["dizipal76.cloud",22],["dizipal77.cloud",22],["dizipal78.cloud",22],["dizipal79.cloud",22],["dizipal80.cloud",22],["dizipal81.cloud",22],["dizipal82.cloud",22],["dizipal83.cloud",22],["dizipal84.cloud",22],["dizipal85.cloud",22],["dizipal86.cloud",22],["dizipal87.cloud",22],["dizipal88.cloud",22],["dizipal89.cloud",22],["dizipal90.cloud",22],["dizipal91.cloud",22],["dizipal92.cloud",22],["dizipal93.cloud",22],["dizipal94.cloud",22],["dizipal95.cloud",22],["dizipal96.cloud",22],["dizipal97.cloud",22],["dizipal98.cloud",22],["dizipal99.cloud",22],["dizipal100.cloud",22],["dizipal101.cloud",22],["dizipal102.cloud",22],["dizipal103.cloud",22],["dizipal104.cloud",22],["dizipal105.cloud",22],["dizipal106.cloud",22],["dizipal107.cloud",22],["dizipal108.cloud",22],["dizipal109.cloud",22],["dizipal110.cloud",22],["dizipal111.cloud",22],["dizipal112.cloud",22],["dizipal113.cloud",22],["dizipal114.cloud",22],["dizipal115.cloud",22],["dizipal116.cloud",22],["dizipal117.cloud",22],["dizipal118.cloud",22],["dizipal119.cloud",22],["dizipal120.cloud",22],["dizipal121.cloud",22],["dizipal122.cloud",22],["dizipal123.cloud",22],["dizipal124.cloud",22],["dizipal125.cloud",22],["dizipal126.cloud",22],["dizipal127.cloud",22],["dizipal128.cloud",22],["dizipal129.cloud",22],["dizipal130.cloud",22],["dizipal131.cloud",22],["dizipal132.cloud",22],["dizipal133.cloud",22],["dizipal134.cloud",22],["dizipal135.cloud",22],["dizipal136.cloud",22],["dizipal137.cloud",22],["dizipal138.cloud",22],["dizipal139.cloud",22],["dizipal140.cloud",22],["dizipal141.cloud",22],["dizipal142.cloud",22],["dizipal143.cloud",22],["dizipal144.cloud",22],["dizipal145.cloud",22],["dizipal146.cloud",22],["dizipal147.cloud",22],["dizipal148.cloud",22],["dizipal149.cloud",22],["dizipal150.cloud",22],["dizipal151.cloud",22],["dizipal152.cloud",22],["dizipal153.cloud",22],["dizipal154.cloud",22],["dizipal155.cloud",22],["dizipal156.cloud",22],["dizipal157.cloud",22],["dizipal158.cloud",22],["dizipal159.cloud",22],["dizipal160.cloud",22],["dizipal161.cloud",22],["dizipal162.cloud",22],["dizipal163.cloud",22],["dizipal164.cloud",22],["dizipal165.cloud",22],["dizipal166.cloud",22],["dizipal167.cloud",22],["dizipal168.cloud",22],["dizipal169.cloud",22],["dizipal170.cloud",22],["dizipal171.cloud",22],["dizipal172.cloud",22],["dizipal173.cloud",22],["dizipal174.cloud",22],["dizipal175.cloud",22],["dizipal176.cloud",22],["dizipal177.cloud",22],["dizipal178.cloud",22],["dizipal179.cloud",22],["dizipal180.cloud",22],["dizipal181.cloud",22],["dizipal182.cloud",22],["dizipal183.cloud",22],["dizipal184.cloud",22],["dizipal185.cloud",22],["dizipal186.cloud",22],["dizipal187.cloud",22],["dizipal188.cloud",22],["dizipal189.cloud",22],["dizipal190.cloud",22],["dizipal191.cloud",22],["dizipal192.cloud",22],["dizipal193.cloud",22],["dizipal194.cloud",22],["dizipal195.cloud",22],["dizipal196.cloud",22],["dizipal197.cloud",22],["dizipal198.cloud",22],["dizipal199.cloud",22],["dizipal200.cloud",22],["mgviagrtoomuch.com",[23,24]],["ypsd.xyz",25],["cvdd.one",25],["pllsfored.com",26],["inattv372.xyz",28],["inattv373.xyz",28],["inattv374.xyz",28],["inattv375.xyz",28],["inattv376.xyz",28],["inattv377.xyz",28],["inattv378.xyz",28],["inattv379.xyz",28],["inattv380.xyz",28],["inattv381.xyz",28],["inattv382.xyz",28],["inattv383.xyz",28],["inattv384.xyz",28],["inattv385.xyz",28],["inattv386.xyz",28],["inattv387.xyz",28],["inattv388.xyz",28],["inattv389.xyz",28],["inattv390.xyz",28],["inattv391.xyz",28],["inattv392.xyz",28],["inattv393.xyz",28],["inattv394.xyz",28],["inattv395.xyz",28],["inattv396.xyz",28],["inattv397.xyz",28],["inattv398.xyz",28],["inattv399.xyz",28],["inattv400.xyz",28],["inattv401.xyz",28],["inattv402.xyz",28],["inattv403.xyz",28],["inattv404.xyz",28],["inattv405.xyz",28],["inattv406.xyz",28],["inattv407.xyz",28],["inattv408.xyz",28],["inattv409.xyz",28],["inattv410.xyz",28],["netsportv158.com",28],["filmmodu.co",29],["dizipal12.site",29],["dizipal13.site",29],["dizipal14.site",29],["dizipal15.site",29],["dizipal16.site",29],["dizipal17.site",29],["dizipal18.site",29],["dizipal19.site",29],["dizipal20.site",29],["dizipal21.site",29],["dizipal22.site",29],["dizipal23.site",29],["dizipal24.site",29],["dizipal25.site",29],["dizipal26.site",29],["dizipal27.site",29],["dizipal28.site",29],["dizipal29.site",29],["dizipal30.site",29],["arsiv.mackolik.com",30],["nefisyemektarifleri.com",32],["izlesene.com",32],["filmizletv2.com",33],["filmizletv3.com",33],["filmizletv4.com",33],["filmizletv5.com",33],["filmizletv6.com",33],["filmizletv7.com",33],["filmizletv8.com",33],["filmizletv9.com",33],["filmizletv10.com",33],["filmizletv11.com",33],["filmizletv12.com",33],["filmizletv13.com",33],["filmizletv14.com",33],["filmizletv15.com",33],["filmizletv16.com",33],["filmizletv17.com",33],["filmizletv18.com",33],["filmizletv19.com",33],["filmizletv20.com",33],["play.diziyou.co",35],["tranimeci.com",37],["filmmakinesi1.com",38],["turkanime.co",39],["forum.donanimhaber.com",40],["filmmodu9.com",41],["filmmodu10.com",41],["filmmodu11.com",41],["filmmodu12.com",41],["filmmodu13.com",41],["filmmodu14.com",41],["filmmodu15.com",41],["filmmodu16.com",41],["filmmodu17.com",41],["filmmodu18.com",41],["filmmodu19.com",41],["filmmodu20.com",41],["atv.com.tr",42],["turkturk.org",43],["turkturk.net",43],["contentx.me",44],["superfilmgeldi.com",45],["edebiyatdefteri.com",46],["belgeselizlesene.com",47],["technopat.net",48],["aydindenge.com.tr",49],["diziall.com",50]]);

const entitiesMap = new Map([["dizicaps",21],["filmizletv1",21],["fullhdfilmizle5",[21,34]],["fullfilmizle",21],["sinepal",21],["yabancidizilertv",21],["hdfilmcehennemi",21],["izlekolik",21],["elzemfilmizle",21],["dizipal",21],["filmizletv",[21,33]],["tekparthdfilmizle",21],["dizisup",21],["dizikorea",21],["diziyo",21],["dafflix",21],["yabancidizitv",21],["hddiziport",21],["dizimov",21],["torrentarsivi",21],["setfilmizle",21],["fullhdfilmmodu2",21],["pembetv18",21],["filmyani",21],["tranimeizle",21],["altyazilifilm",21],["webteizle",22],["diziroll",29],["dizilla",29],["jetfilmizle",31]]);

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
        let normalValue = validateConstantFn(trusted, rawValue);
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

function validateConstantFn(trusted, raw) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
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
