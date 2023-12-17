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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["adblock.check","noopFunc"],["eyeOfErstream.detectedBloke","falseFunc"],["ads","falseFunc"],["xv_ad_block","0"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["canRunAds","true"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["player.vroll","noopFunc"],["window.config.adv","{}"],["openPopup","false"],["config.adv","{}"],["wpsaData","undefined"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklamsayisi","0"],["player.vroll","undefined"],["config.adv.enabled","0"],["volumeClearInterval","0"],["rek_kontrol","noopFunc"],["clicked","true"],["adSearchTitle","undefined"],["Object.prototype.ads","noopFunc"],["HBiddings.vastUrl",""],["AdvPlayer","undefined"],["initOpen","undefined"],["initNewAd","noopFunc"],["rg","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"]];

const hostnamesMap = new Map([["iyibeslenme.net",0],["teknop.net",0],["kirtkirtla.com",0],["buneymis.net",0],["ozgunbilgi.com",0],["beceriksizler.net",0],["exxen.com",1],["animeizletr.com",2],["exceldepo.com",3],["tgyama.com",4],["uzaymanga.com",[5,25]],["e-kitapstore.com",6],["wheel-size.com.tr",7],["karnaval.com",8],["mangaship.net",9],["mangaship.com",9],["miuitr.info",10],["puhutv.com",11],["coinotag.com",12],["cnnturk.com",[13,14]],["kanald.com.tr",[15,16]],["iddaaorantahmin.com",17],["oyungibi.com",18],["veterinerhekimleri.com",18],["turkdenizcileri.com",19],["bilgalem.blogspot.com",19],["klavyeanaliz.org",20],["hdfilmizle.site",21],["sinepal1.vip",21],["hdsinemax.com",21],["hdfilmizle.org",21],["siyahfilmizle.pro",21],["tafdi4.com",21],["tafdi5.com",21],["elzemfilm.org",21],["fullhdfilmizlesene4.org",21],["tafdi3.com",21],["anizle.com",21],["hdfilmseyircisi.org",21],["sinemol.net",21],["dizirun2.com",21],["kozfilm.com",21],["hdfilmhit.org",21],["hdfilmizle.in",21],["dizipall.org",21],["diziyou.co",21],["filmizlew.net",21],["tafdi2.com",21],["dizimag.eu",21],["bumfilmizle1.com",21],["1080hdfilmizle.com",21],["dipfilmizle.net",21],["turkerotikizle.com",21],["yabancidizibax.com",21],["sinemangoo.org",21],["sexfilmleriizle.com",21],["fullhdfilm.pro",[21,31]],["geziforumu.com",21],["efendim.xyz",21],["dizipaltv.net",21],["filmjr1.com",21],["fluffcore.com",21],["hdfilmfullizle.com",21],["hdfilmcehennemizle.com",21],["netfullfilmizle3.com",21],["filmmodu.info",21],["dizifilm.pro",21],["arrowizle.com",21],["hdfilmifullizle.com",21],["jokerfilmizle.com",21],["720pfilmiizle.net",21],["seehdfilm.com",21],["filmcus.com",21],["hazirfilm.com",21],["filmizlew.org",21],["zoof1.xyz",21],["sinemakolik.net",21],["sinefilmizlesen.com",21],["zarize.com",21],["pornobuna.com",21],["zarizeporno.com",21],["burdenfly.com",21],["zzerotik.com",21],["filmgo.org",21],["sinemafilmizle.net",21],["fullhdfilmiizle.org",21],["hdfilmw.org",21],["filmkuzusu1.com",21],["hdfilmcix.net",21],["sinemadelisi.com",21],["hdsexfilmizle.com",21],["erotik-film.org",21],["erotikfilmtube.com",21],["pornoanne.com",21],["koredizileri.tv",21],["diziboxx.com",21],["turkaliz.com",21],["jetdiziizle.net",21],["vkfilmizle.net",21],["dizimom.live",21],["yerlidizi.pw",21],["fullhdfilmizleyin.com",21],["filmizlet.net",21],["pornorips.com",21],["bumfilmizle.com",21],["shirl.club",21],["evrenselfilmlerim.org",21],["turkcealtyazilipornom.com",21],["sinema.cc",21],["hdfilmizletv.net",21],["sinemaizle.co",21],["netfilmtvizle.com",21],["hdfilmcehennem.live",21],["xbox360torrent.com",21],["efullizle.com",21],["asyafanatiklerim.com",21],["dizilost.com",21],["fileru.net",21],["fullhdfilmdeposu.com",21],["volsex.com",21],["torba.info",21],["divx720pfilmizle.org",21],["justintvizle11.pro",21],["justintvizle12.pro",21],["justintvizle13.pro",21],["justintvizle14.pro",21],["justintvizle15.pro",21],["justintvizle16.pro",21],["justintvizle17.pro",21],["justintvizle18.pro",21],["justintvizle19.pro",21],["justintvizle20.pro",21],["justintvizle21.pro",21],["justintvizle22.pro",21],["justintvizle23.pro",21],["justintvizle24.pro",21],["justintvizle25.pro",21],["justintvizle26.pro",21],["justintvizle27.pro",21],["justintvizle28.pro",21],["justintvizle29.pro",21],["justintvizle30.pro",21],["canlitribun53.com",21],["canlitribun54.com",21],["canlitribun55.com",21],["canlitribun56.com",21],["canlitribun57.com",21],["canlitribun58.com",21],["canlitribun59.com",21],["canlitribun60.com",21],["canlitribun61.com",21],["canlitribun62.com",21],["canlitribun63.com",21],["canlitribun64.com",21],["canlitribun65.com",21],["canlitribun66.com",21],["canlitribun67.com",21],["canlitribun68.com",21],["canlitribun69.com",21],["canlitribun70.com",21],["dizipal580.com",21],["dizipal581.com",21],["dizipal582.com",21],["dizipal583.com",21],["dizipal584.com",21],["dizipal585.com",21],["dizipal586.com",21],["dizipal587.com",21],["dizipal588.com",21],["dizipal589.com",21],["dizipal590.com",21],["dizipal591.com",21],["dizipal592.com",21],["dizipal593.com",21],["dizipal594.com",21],["dizipal595.com",21],["dizipal596.com",21],["dizipal597.com",21],["dizipal598.com",21],["dizipal599.com",21],["dizipal600.com",21],["dizipal607.com",21],["dizipal608.com",21],["dizipal609.com",21],["dizipal610.com",21],["dizipal611.com",21],["dizipal612.com",21],["dizipal613.com",21],["dizipal614.com",21],["dizipal615.com",21],["dizipal616.com",21],["dizipal617.com",21],["dizipal618.com",21],["dizipal619.com",21],["dizipal620.com",21],["dizipal621.com",21],["dizipal622.com",21],["dizipal623.com",21],["dizipal624.com",21],["dizipal625.com",21],["dizipal626.com",21],["dizipal627.com",21],["dizipal628.com",21],["dizipal629.com",21],["dizipal630.com",21],["dizipal631.com",21],["dizipal632.com",21],["dizipal633.com",21],["dizipal634.com",21],["dizipal635.com",21],["dizipal636.com",21],["dizipal637.com",21],["dizipal638.com",21],["dizipal639.com",21],["dizipal640.com",21],["dizipal641.com",21],["dizipal642.com",21],["dizipal643.com",21],["dizipal644.com",21],["dizipal645.com",21],["dizipal646.com",21],["dizipal647.com",21],["dizipal648.com",21],["dizipal649.com",21],["dizipal650.com",21],["dizipal651.com",21],["dizipal652.com",21],["dizipal653.com",21],["dizipal654.com",21],["dizipal655.com",21],["dizipal656.com",21],["dizipal657.com",21],["dizipal658.com",21],["dizipal659.com",21],["dizipal660.com",21],["dizipal661.com",21],["dizipal662.com",21],["dizipal663.com",21],["dizipal664.com",21],["dizipal665.com",21],["dizipal666.com",21],["dizipal667.com",21],["dizipal668.com",21],["dizipal669.com",21],["dizipal670.com",21],["dizipal671.com",21],["dizipal672.com",21],["dizipal673.com",21],["dizipal674.com",21],["dizipal675.com",21],["dizipal676.com",21],["dizipal677.com",21],["dizipal678.com",21],["dizipal679.com",21],["dizipal680.com",21],["dizipal681.com",21],["dizipal682.com",21],["dizipal683.com",21],["dizipal684.com",21],["dizipal685.com",21],["dizipal686.com",21],["dizipal687.com",21],["dizipal688.com",21],["dizipal689.com",21],["dizipal690.com",21],["dizipal691.com",21],["dizipal692.com",21],["dizipal693.com",21],["dizipal694.com",21],["dizipal695.com",21],["dizipal696.com",21],["dizipal697.com",21],["dizipal698.com",21],["dizipal699.com",21],["dizipal700.com",21],["dizimom1.com",22],["trgoalshosting.cf",[22,33]],["tekfullfilmizle5.com",22],["yovmiyelazim.com",22],["tekfullfilmizle3.com",22],["izleorg2.org",22],["trgoals605.xyz",[22,26]],["trgoals606.xyz",[22,26]],["trgoals607.xyz",[22,26]],["trgoals608.xyz",[22,26]],["trgoals609.xyz",[22,26]],["trgoals610.xyz",[22,26]],["trgoals611.xyz",[22,26]],["trgoals612.xyz",[22,26]],["trgoals613.xyz",[22,26]],["trgoals614.xyz",[22,26]],["trgoals615.xyz",[22,26]],["trgoals616.xyz",[22,26]],["trgoals617.xyz",[22,26]],["trgoals618.xyz",[22,26]],["trgoals619.xyz",[22,26]],["trgoals620.xyz",[22,26]],["trgoals483.xyz",22],["trgoals484.xyz",22],["trgoals485.xyz",[22,26]],["trgoals486.xyz",[22,26]],["trgoals487.xyz",[22,26]],["trgoals488.xyz",[22,26]],["trgoals489.xyz",[22,26]],["trgoals490.xyz",[22,26]],["trgoals491.xyz",[22,26]],["trgoals492.xyz",[22,26]],["trgoals493.xyz",[22,26]],["trgoals494.xyz",[22,26]],["trgoals495.xyz",[22,26]],["trgoals496.xyz",[22,26]],["trgoals497.xyz",[22,26]],["trgoals498.xyz",[22,26]],["trgoals499.xyz",[22,26]],["trgoals500.xyz",[22,26]],["trgoals501.xyz",[22,26]],["trgoals502.xyz",[22,26]],["trgoals503.xyz",[22,26]],["trgoals504.xyz",[22,26]],["trgoals505.xyz",[22,26]],["trgoals506.xyz",[22,26]],["trgoals507.xyz",[22,26]],["trgoals508.xyz",[22,26]],["trgoals509.xyz",[22,26]],["trgoals510.xyz",[22,26]],["trgoals511.xyz",[22,26]],["trgoals512.xyz",[22,26]],["trgoals513.xyz",[22,26]],["trgoals514.xyz",[22,26]],["trgoals515.xyz",[22,26]],["trgoals516.xyz",[22,26]],["trgoals517.xyz",[22,26]],["trgoals518.xyz",[22,26]],["trgoals519.xyz",[22,26]],["trgoals520.xyz",[22,26]],["trgoals521.xyz",[22,26]],["trgoals522.xyz",[22,26]],["trgoals523.xyz",[22,26]],["trgoals524.xyz",[22,26]],["trgoals525.xyz",[22,26]],["trgoals526.xyz",[22,26]],["trgoals527.xyz",[22,26]],["trgoals528.xyz",[22,26]],["trgoals529.xyz",[22,26]],["trgoals530.xyz",[22,26]],["trgoals531.xyz",[22,26]],["trgoals532.xyz",[22,26]],["trgoals533.xyz",[22,26]],["trgoals534.xyz",[22,26]],["trgoals535.xyz",[22,26]],["trgoals536.xyz",[22,26]],["trgoals537.xyz",[22,26]],["trgoals538.xyz",[22,26]],["trgoals539.xyz",[22,26]],["trgoals540.xyz",[22,26]],["trgoals541.xyz",[22,26]],["trgoals542.xyz",[22,26]],["trgoals543.xyz",[22,26]],["trgoals544.xyz",[22,26]],["trgoals545.xyz",[22,26]],["trgoals546.xyz",[22,26]],["trgoals547.xyz",[22,26]],["trgoals548.xyz",[22,26]],["trgoals549.xyz",[22,26]],["trgoals550.xyz",[22,26]],["trgoals551.xyz",[22,26]],["trgoals552.xyz",[22,26]],["trgoals553.xyz",[22,26]],["trgoals554.xyz",[22,26]],["trgoals555.xyz",[22,26]],["trgoals556.xyz",[22,26]],["trgoals557.xyz",[22,26]],["trgoals558.xyz",[22,26]],["trgoals559.xyz",[22,26]],["trgoals560.xyz",[22,26]],["trgoals561.xyz",[22,26]],["trgoals562.xyz",[22,26]],["trgoals563.xyz",[22,26]],["trgoals564.xyz",[22,26]],["trgoals565.xyz",[22,26]],["trgoals566.xyz",[22,26]],["trgoals567.xyz",[22,26]],["trgoals568.xyz",[22,26]],["trgoals569.xyz",[22,26]],["trgoals570.xyz",[22,26]],["trgoals571.xyz",[22,26]],["trgoals572.xyz",[22,26]],["trgoals573.xyz",[22,26]],["trgoals574.xyz",[22,26]],["trgoals575.xyz",[22,26]],["trgoals576.xyz",[22,26]],["trgoals577.xyz",[22,26]],["trgoals578.xyz",[22,26]],["trgoals579.xyz",[22,26]],["trgoals580.xyz",[22,26]],["trgoals581.xyz",[22,26]],["trgoals582.xyz",[22,26]],["trgoals583.xyz",[22,26]],["trgoals584.xyz",[22,26]],["trgoals585.xyz",[22,26]],["trgoals586.xyz",[22,26]],["trgoals587.xyz",[22,26]],["trgoals588.xyz",[22,26]],["trgoals589.xyz",[22,26]],["trgoals590.xyz",[22,26]],["trgoals591.xyz",[22,26]],["trgoals592.xyz",[22,26]],["trgoals593.xyz",[22,26]],["trgoals594.xyz",[22,26]],["trgoals595.xyz",[22,26]],["trgoals596.xyz",[22,26]],["trgoals597.xyz",[22,26]],["trgoals598.xyz",[22,26]],["trgoals599.xyz",[22,26]],["trgoals600.xyz",[22,26]],["dizipal70.cloud",22],["dizipal71.cloud",22],["dizipal72.cloud",22],["dizipal73.cloud",22],["dizipal74.cloud",22],["dizipal75.cloud",22],["dizipal76.cloud",22],["dizipal77.cloud",22],["dizipal78.cloud",22],["dizipal79.cloud",22],["dizipal80.cloud",22],["dizipal81.cloud",22],["dizipal82.cloud",22],["dizipal83.cloud",22],["dizipal84.cloud",22],["dizipal85.cloud",22],["dizipal86.cloud",22],["dizipal87.cloud",22],["dizipal88.cloud",22],["dizipal89.cloud",22],["dizipal90.cloud",22],["dizipal91.cloud",22],["dizipal92.cloud",22],["dizipal93.cloud",22],["dizipal94.cloud",22],["dizipal95.cloud",22],["dizipal96.cloud",22],["dizipal97.cloud",22],["dizipal98.cloud",22],["dizipal99.cloud",22],["dizipal100.cloud",22],["dizipal101.cloud",22],["dizipal102.cloud",22],["dizipal103.cloud",22],["dizipal104.cloud",22],["dizipal105.cloud",22],["dizipal106.cloud",22],["dizipal107.cloud",22],["dizipal108.cloud",22],["dizipal109.cloud",22],["dizipal110.cloud",22],["dizipal111.cloud",22],["dizipal112.cloud",22],["dizipal113.cloud",22],["dizipal114.cloud",22],["dizipal115.cloud",22],["dizipal116.cloud",22],["dizipal117.cloud",22],["dizipal118.cloud",22],["dizipal119.cloud",22],["dizipal120.cloud",22],["dizipal121.cloud",22],["dizipal122.cloud",22],["dizipal123.cloud",22],["dizipal124.cloud",22],["dizipal125.cloud",22],["dizipal126.cloud",22],["dizipal127.cloud",22],["dizipal128.cloud",22],["dizipal129.cloud",22],["dizipal130.cloud",22],["dizipal131.cloud",22],["dizipal132.cloud",22],["dizipal133.cloud",22],["dizipal134.cloud",22],["dizipal135.cloud",22],["dizipal136.cloud",22],["dizipal137.cloud",22],["dizipal138.cloud",22],["dizipal139.cloud",22],["dizipal140.cloud",22],["dizipal141.cloud",22],["dizipal142.cloud",22],["dizipal143.cloud",22],["dizipal144.cloud",22],["dizipal145.cloud",22],["dizipal146.cloud",22],["dizipal147.cloud",22],["dizipal148.cloud",22],["dizipal149.cloud",22],["dizipal150.cloud",22],["dizipal151.cloud",22],["dizipal152.cloud",22],["dizipal153.cloud",22],["dizipal154.cloud",22],["dizipal155.cloud",22],["dizipal156.cloud",22],["dizipal157.cloud",22],["dizipal158.cloud",22],["dizipal159.cloud",22],["dizipal160.cloud",22],["dizipal161.cloud",22],["dizipal162.cloud",22],["dizipal163.cloud",22],["dizipal164.cloud",22],["dizipal165.cloud",22],["dizipal166.cloud",22],["dizipal167.cloud",22],["dizipal168.cloud",22],["dizipal169.cloud",22],["dizipal170.cloud",22],["dizipal171.cloud",22],["dizipal172.cloud",22],["dizipal173.cloud",22],["dizipal174.cloud",22],["dizipal175.cloud",22],["dizipal176.cloud",22],["dizipal177.cloud",22],["dizipal178.cloud",22],["dizipal179.cloud",22],["dizipal180.cloud",22],["dizipal181.cloud",22],["dizipal182.cloud",22],["dizipal183.cloud",22],["dizipal184.cloud",22],["dizipal185.cloud",22],["dizipal186.cloud",22],["dizipal187.cloud",22],["dizipal188.cloud",22],["dizipal189.cloud",22],["dizipal190.cloud",22],["dizipal191.cloud",22],["dizipal192.cloud",22],["dizipal193.cloud",22],["dizipal194.cloud",22],["dizipal195.cloud",22],["dizipal196.cloud",22],["dizipal197.cloud",22],["dizipal198.cloud",22],["dizipal199.cloud",22],["dizipal200.cloud",22],["ypsd.xyz",23],["cvdd.one",23],["pllsfored.com",24],["inattv324.pro",26],["inattv325.pro",26],["inattv326.pro",26],["inattv327.pro",26],["inattv328.pro",26],["inattv329.pro",26],["inattv330.pro",26],["inattv331.pro",26],["inattv332.pro",26],["inattv333.pro",26],["inattv334.pro",26],["inattv335.pro",26],["inattv336.pro",26],["inattv337.pro",26],["inattv338.pro",26],["inattv339.pro",26],["inattv270.pro",26],["inattv271.pro",26],["inattv272.pro",26],["inattv273.pro",26],["inattv274.pro",26],["inattv275.pro",26],["inattv276.pro",26],["inattv277.pro",26],["inattv278.pro",26],["inattv279.pro",26],["inattv280.pro",26],["inattv281.pro",26],["inattv282.pro",26],["inattv283.pro",26],["inattv284.pro",26],["inattv285.pro",26],["inattv286.pro",26],["inattv287.pro",26],["inattv288.pro",26],["inattv289.pro",26],["inattv290.pro",26],["inattv291.pro",26],["inattv292.pro",26],["inattv293.pro",26],["inattv294.pro",26],["inattv295.pro",26],["inattv296.pro",26],["inattv297.pro",26],["inattv298.pro",26],["inattv299.pro",26],["inattv300.pro",26],["netsportv158.com",26],["filmmodu.co",27],["dizipal12.site",27],["dizipal13.site",27],["dizipal14.site",27],["dizipal15.site",27],["dizipal16.site",27],["dizipal17.site",27],["dizipal18.site",27],["dizipal19.site",27],["dizipal20.site",27],["dizipal21.site",27],["dizipal22.site",27],["dizipal23.site",27],["dizipal24.site",27],["dizipal25.site",27],["dizipal26.site",27],["dizipal27.site",27],["dizipal28.site",27],["dizipal29.site",27],["dizipal30.site",27],["arsiv.mackolik.com",28],["nefisyemektarifleri.com",30],["izlesene.com",30],["play.diziyou.co",32],["tranimeci.com",34],["filmmakinesi1.com",35],["turkanime.co",36],["forum.donanimhaber.com",37],["filmmodu9.com",38],["filmmodu10.com",38],["filmmodu11.com",38],["filmmodu12.com",38],["filmmodu13.com",38],["filmmodu14.com",38],["filmmodu15.com",38],["filmmodu16.com",38],["filmmodu17.com",38],["filmmodu18.com",38],["filmmodu19.com",38],["filmmodu20.com",38],["atv.com.tr",39],["turkturk.org",40],["turkturk.net",40],["contentx.me",41],["superfilmgeldi.com",42],["edebiyatdefteri.com",43],["belgeselizlesene.com",44],["technopat.net",45],["aydindenge.com.tr",46],["diziall.com",47]]);

const entitiesMap = new Map([["dizicaps",21],["filmizletv1",21],["fullhdfilmizle5",[21,31]],["fullfilmizle",21],["sinepal",21],["yabancidizilertv",21],["hdfilmcehennemi",21],["izlekolik",21],["elzemfilmizle",21],["dizipal",21],["filmizletv",21],["tekparthdfilmizle",21],["dizisup",21],["dizikorea",21],["diziyo",21],["dafflix",21],["yabancidizitv",21],["hddiziport",21],["dizimov",21],["torrentarsivi",21],["setfilmizle",21],["fullhdfilmmodu2",21],["pembetv18",21],["filmyani",21],["tranimeizle",21],["altyazilifilm",21],["webteizle",22],["diziroll",27],["dizilla",27],["jetfilmizle",29]]);

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
        } else if ( cValue === '[]' || cValue === 'emptyArr' ) {
            cValue = [];
        } else if ( cValue === '{}' || cValue === 'emptyObj' ) {
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
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
            }
        } else {
            return;
        }
        if ( extraArgs.as !== undefined ) {
            const value = cValue;
            if ( extraArgs.as === 'function' ) {
                cValue = ( ) => value;
            } else if ( extraArgs.as === 'callback' ) {
                cValue = ( ) => (( ) => value);
            } else if ( extraArgs.as === 'resolved' ) {
                cValue = Promise.resolve(value);
            } else if ( extraArgs.as === 'rejected' ) {
                cValue = Promise.reject(value);
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
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
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
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
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
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
