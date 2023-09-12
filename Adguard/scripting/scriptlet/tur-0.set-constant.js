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

const argsList = [["adblock.check","noopFunc"],["eyeOfErstream.detectedBloke","falseFunc"],["ads","falseFunc"],["xv_ad_block","0"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["canRunAds","true"],["window.google_jobrunner","true"],["jQuery.adblock","false"],["$tieE3","true"],["koddostu_com_adblock_yok","null"],["adsbygoogle.loaded","true"],["adblock","false"],["puShown","true"],["isShow","true"],["wpsaData","undefined"],["AdmostClient","noopFunc"],["config.adv","{}"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklamsayisi","0"],["player.vroll","noopFunc"],["config.adv.enabled","0"],["volumeClearInterval","0"],["rek_kontrol","noopFunc"],["clicked","true"],["adSearchTitle","undefined"],["Object.prototype.ads","noopFunc"],["HBiddings.vastUrl",""],["AdvPlayer","undefined"],["initOpen","undefined"],["initNewAd","noopFunc"],["rg","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"]];

const hostnamesMap = new Map([["iyibeslenme.net",0],["teknop.net",0],["kirtkirtla.com",0],["buneymis.net",0],["ozgunbilgi.com",0],["exxen.com",1],["animeizletr.com",2],["exceldepo.com",3],["tgyama.com",4],["uzaymanga.com",5],["e-kitapstore.com",6],["wheel-size.com.tr",7],["karnaval.com",8],["mangaship.net",9],["mangaship.com",9],["miuitr.info",10],["puhutv.com",11],["coinotag.com",12],["cnnturk.com",[13,14]],["kanald.com.tr",[13,15]],["iddaaorantahmin.com",16],["forum.auraroleplay.com",17],["oyungibi.com",18],["veterinerhekimleri.com",18],["unisinav.com",19],["turkdenizcileri.com",20],["bilgalem.blogspot.com",20],["okulsoru.com",20],["messletters.com",21],["klavyeanaliz.org",22],["sinepal1.vip",23],["hdsinemax.com",23],["hdfilmizle.org",23],["siyahfilmizle.pro",23],["tafdi4.com",23],["tafdi5.com",23],["elzemfilm.org",23],["fullhdfilmizlesene4.org",23],["tafdi3.com",23],["anizle.com",23],["hdfilmseyircisi.org",23],["sinemol.vip",23],["dizirun2.com",23],["kozfilm.com",23],["siyahfilmizle.info",23],["hdfilmhit.org",23],["hdfilmizle.in",23],["dizipall.org",23],["diziyou.co",23],["filmizlew.net",23],["tafdi2.com",23],["fullfilmizle.net",23],["dizimag.eu",23],["erotikfilmler.live",23],["bumfilmizle1.com",23],["yabancidizilertv.com",23],["1080hdfilmizle.com",23],["vipfilmlerizle.me",23],["erotikizle123.com",23],["dipfilmizle.net",23],["erotikizlefilm.com",23],["turkerotikizle.com",23],["yabancidizibax.com",23],["sinemangoo.org",23],["sexfilmleriizle.com",23],["fullhdfilm.pro",[23,30]],["pembetv18.com",23],["geziforumu.com",23],["ddizipal.com",23],["efendim.xyz",23],["dizipaltv.net",23],["dizispeed.net",23],["filmjr1.com",23],["fluffcore.com",23],["filmpaf.com",23],["hdfilmfullizle.com",23],["hdfilmcehennemizle.com",23],["netfullfilmizle3.com",23],["filmmodu.info",23],["izlekolik.com",23],["dizipaltv.com",23],["dizifilm.pro",23],["dizivid.net",23],["arrowizle.com",23],["hdfilmifullizle.com",23],["erotik123.com",23],["jokerfilmizle.com",23],["720pfilmiizle.net",23],["seehdfilm.com",23],["dizirun1.com",23],["filmfiz.net",23],["filmcus.com",23],["hazirfilm.com",23],["filmizlew.org",23],["zoof1.xyz",23],["sinemakolik.net",23],["sinefilmizlesen.com",23],["zarize.com",23],["pornobuna.com",23],["zarizeporno.com",23],["burdenfly.com",23],["diziking.vip",23],["filmdelisi.org",23],["1080pfilmizle.me",23],["zzerotik.com",23],["filmgo.org",23],["filmiifullizlee.net",23],["sinemafilmizle.net",23],["fullhdfilmiizle.org",23],["hdfilmw.org",23],["buzfilmizle1.com",23],["filmkuzusu1.com",23],["hdfilmcix.net",23],["sinemadelisi.com",23],["yetiskinfilmizle.net",23],["hdsexfilmizle.com",23],["erotik-film.org",23],["erotikfilmtube.com",23],["erotik-filmler.net",23],["erotikfilms.net",23],["erotizmfilmleri.net",23],["filmbabasi.com",23],["pornoanne.com",23],["dizikorea.org",23],["diziyo.cx",23],["koredizileri.tv",23],["diziboxx.com",23],["turkaliz.com",23],["jetdiziizle.net",23],["vkfilmizle.net",23],["dizimom.live",23],["yerlidizi.pw",23],["fullhdfilmizleyin.com",23],["filmizlet.net",23],["baglanfilme.com",23],["filmgooo.com",23],["pornorips.com",23],["bumfilmizle.com",23],["bestdizi.com",23],["shirl.club",23],["evrenselfilmlerim.org",23],["turkcealtyazilipornom.com",23],["sinema.cc",23],["hdfilmizletv.net",23],["filmmom.pro",[23,24]],["shortz.club",23],["sinemaizle.co",23],["filmlane.com",23],["netfilmtvizle.com",23],["hdfilmcehennem.live",23],["xbox360torrent.com",23],["efullizle.com",23],["morfilmizle.com",23],["asyafanatiklerim.com",23],["guncelhdfilm.com",23],["dizilost.com",23],["fileru.net",23],["dizitube.net",23],["fullhdfilmdeposu.com",23],["volsex.com",23],["torba.info",23],["erotiksexizle.com",23],["divx720pfilmizle.org",23],["justintvizle11.pro",23],["justintvizle12.pro",23],["justintvizle13.pro",23],["justintvizle14.pro",23],["justintvizle15.pro",23],["justintvizle16.pro",23],["justintvizle17.pro",23],["justintvizle18.pro",23],["justintvizle19.pro",23],["justintvizle20.pro",23],["justintvizle21.pro",23],["justintvizle22.pro",23],["justintvizle23.pro",23],["justintvizle24.pro",23],["justintvizle25.pro",23],["justintvizle26.pro",23],["justintvizle27.pro",23],["justintvizle28.pro",23],["justintvizle29.pro",23],["justintvizle30.pro",23],["canlitribun55.com",23],["canlitribun56.com",23],["canlitribun57.com",23],["canlitribun58.com",23],["canlitribun59.com",23],["canlitribun60.com",23],["canlitribun61.com",23],["canlitribun62.com",23],["canlitribun63.com",23],["canlitribun64.com",23],["canlitribun65.com",23],["canlitribun66.com",23],["canlitribun67.com",23],["canlitribun68.com",23],["canlitribun69.com",23],["canlitribun70.com",23],["dizipal580.com",23],["dizipal581.com",23],["dizipal582.com",23],["dizipal583.com",23],["dizipal584.com",23],["dizipal585.com",23],["dizipal586.com",23],["dizipal587.com",23],["dizipal588.com",23],["dizipal589.com",23],["dizipal590.com",23],["dizipal591.com",23],["dizipal592.com",23],["dizipal593.com",23],["dizipal594.com",23],["dizipal595.com",23],["dizipal596.com",23],["dizipal597.com",23],["dizipal598.com",23],["dizipal599.com",23],["dizipal600.com",23],["dizipal607.com",23],["dizipal608.com",23],["dizipal609.com",23],["dizipal610.com",23],["dizipal611.com",23],["dizipal612.com",23],["dizipal613.com",23],["dizipal614.com",23],["dizipal615.com",23],["dizipal616.com",23],["dizipal617.com",23],["dizipal618.com",23],["dizipal619.com",23],["dizipal620.com",23],["dizipal621.com",23],["dizipal622.com",23],["dizipal623.com",23],["dizipal624.com",23],["dizipal625.com",23],["dizipal626.com",23],["dizipal627.com",23],["dizipal628.com",23],["dizipal629.com",23],["dizipal630.com",23],["dizipal631.com",23],["dizipal632.com",23],["dizipal633.com",23],["dizipal634.com",23],["dizipal635.com",23],["dizipal636.com",23],["dizipal637.com",23],["dizipal638.com",23],["dizipal639.com",23],["dizipal640.com",23],["dizipal641.com",23],["dizipal642.com",23],["dizipal643.com",23],["dizipal644.com",23],["dizipal645.com",23],["dizipal646.com",23],["dizipal647.com",23],["dizipal648.com",23],["dizipal649.com",23],["dizipal650.com",23],["dizipal651.com",23],["dizipal652.com",23],["dizipal653.com",23],["dizipal654.com",23],["dizipal655.com",23],["dizipal656.com",23],["dizipal657.com",23],["dizipal658.com",23],["dizipal659.com",23],["dizipal660.com",23],["dizipal661.com",23],["dizipal662.com",23],["dizipal663.com",23],["dizipal664.com",23],["dizipal665.com",23],["dizipal666.com",23],["dizipal667.com",23],["dizipal668.com",23],["dizipal669.com",23],["dizipal670.com",23],["dizipal671.com",23],["dizipal672.com",23],["dizipal673.com",23],["dizipal674.com",23],["dizipal675.com",23],["dizipal676.com",23],["dizipal677.com",23],["dizipal678.com",23],["dizipal679.com",23],["dizipal680.com",23],["dizipal681.com",23],["dizipal682.com",23],["dizipal683.com",23],["dizipal684.com",23],["dizipal685.com",23],["dizipal686.com",23],["dizipal687.com",23],["dizipal688.com",23],["dizipal689.com",23],["dizipal690.com",23],["dizipal691.com",23],["dizipal692.com",23],["dizipal693.com",23],["dizipal694.com",23],["dizipal695.com",23],["dizipal696.com",23],["dizipal697.com",23],["dizipal698.com",23],["dizipal699.com",23],["dizipal700.com",23],["dizimom1.com",24],["trgoalshosting.cf",[24,32]],["tekfullfilmizle5.com",24],["yovmiyelazim.com",24],["tekfullfilmizle3.com",24],["izleorg2.org",24],["trgoals351.xyz",24],["trgoals185.xyz",24],["trgoals186.xyz",24],["trgoals187.xyz",24],["trgoals188.xyz",24],["trgoals189.xyz",24],["trgoals190.xyz",24],["trgoals191.xyz",24],["trgoals192.xyz",24],["trgoals193.xyz",24],["trgoals194.xyz",24],["trgoals195.xyz",24],["trgoals196.xyz",24],["trgoals197.xyz",24],["trgoals198.xyz",24],["trgoals199.xyz",24],["trgoals200.xyz",24],["trgoals201.xyz",24],["trgoals202.xyz",24],["trgoals203.xyz",24],["trgoals204.xyz",24],["trgoals205.xyz",24],["trgoals206.xyz",24],["trgoals207.xyz",24],["trgoals208.xyz",24],["trgoals209.xyz",24],["trgoals210.xyz",24],["trgoals211.xyz",24],["trgoals212.xyz",24],["trgoals213.xyz",24],["trgoals214.xyz",24],["trgoals215.xyz",24],["trgoals216.xyz",24],["trgoals217.xyz",24],["trgoals218.xyz",24],["trgoals219.xyz",24],["trgoals220.xyz",24],["trgoals221.xyz",24],["trgoals222.xyz",24],["trgoals223.xyz",24],["trgoals224.xyz",24],["trgoals225.xyz",24],["trgoals226.xyz",24],["trgoals227.xyz",24],["trgoals228.xyz",24],["trgoals229.xyz",24],["trgoals230.xyz",24],["trgoals231.xyz",24],["trgoals232.xyz",24],["trgoals233.xyz",24],["trgoals234.xyz",24],["trgoals235.xyz",24],["trgoals236.xyz",24],["trgoals237.xyz",24],["trgoals238.xyz",24],["trgoals239.xyz",24],["trgoals240.xyz",24],["trgoals241.xyz",24],["trgoals242.xyz",24],["trgoals243.xyz",24],["trgoals244.xyz",24],["trgoals245.xyz",24],["trgoals246.xyz",24],["trgoals247.xyz",24],["trgoals248.xyz",24],["trgoals249.xyz",24],["trgoals250.xyz",24],["dizipal70.cloud",24],["dizipal71.cloud",24],["dizipal72.cloud",24],["dizipal73.cloud",24],["dizipal74.cloud",24],["dizipal75.cloud",24],["dizipal76.cloud",24],["dizipal77.cloud",24],["dizipal78.cloud",24],["dizipal79.cloud",24],["dizipal80.cloud",24],["dizipal81.cloud",24],["dizipal82.cloud",24],["dizipal83.cloud",24],["dizipal84.cloud",24],["dizipal85.cloud",24],["dizipal86.cloud",24],["dizipal87.cloud",24],["dizipal88.cloud",24],["dizipal89.cloud",24],["dizipal90.cloud",24],["dizipal91.cloud",24],["dizipal92.cloud",24],["dizipal93.cloud",24],["dizipal94.cloud",24],["dizipal95.cloud",24],["dizipal96.cloud",24],["dizipal97.cloud",24],["dizipal98.cloud",24],["dizipal99.cloud",24],["dizipal100.cloud",24],["dizipal101.cloud",24],["dizipal102.cloud",24],["dizipal103.cloud",24],["dizipal104.cloud",24],["dizipal105.cloud",24],["dizipal106.cloud",24],["dizipal107.cloud",24],["dizipal108.cloud",24],["dizipal109.cloud",24],["dizipal110.cloud",24],["dizipal111.cloud",24],["dizipal112.cloud",24],["dizipal113.cloud",24],["dizipal114.cloud",24],["dizipal115.cloud",24],["dizipal116.cloud",24],["dizipal117.cloud",24],["dizipal118.cloud",24],["dizipal119.cloud",24],["dizipal120.cloud",24],["dizipal121.cloud",24],["dizipal122.cloud",24],["dizipal123.cloud",24],["dizipal124.cloud",24],["dizipal125.cloud",24],["dizipal126.cloud",24],["dizipal127.cloud",24],["dizipal128.cloud",24],["dizipal129.cloud",24],["dizipal130.cloud",24],["dizipal131.cloud",24],["dizipal132.cloud",24],["dizipal133.cloud",24],["dizipal134.cloud",24],["dizipal135.cloud",24],["dizipal136.cloud",24],["dizipal137.cloud",24],["dizipal138.cloud",24],["dizipal139.cloud",24],["dizipal140.cloud",24],["dizipal141.cloud",24],["dizipal142.cloud",24],["dizipal143.cloud",24],["dizipal144.cloud",24],["dizipal145.cloud",24],["dizipal146.cloud",24],["dizipal147.cloud",24],["dizipal148.cloud",24],["dizipal149.cloud",24],["dizipal150.cloud",24],["dizipal151.cloud",24],["dizipal152.cloud",24],["dizipal153.cloud",24],["dizipal154.cloud",24],["dizipal155.cloud",24],["dizipal156.cloud",24],["dizipal157.cloud",24],["dizipal158.cloud",24],["dizipal159.cloud",24],["dizipal160.cloud",24],["dizipal161.cloud",24],["dizipal162.cloud",24],["dizipal163.cloud",24],["dizipal164.cloud",24],["dizipal165.cloud",24],["dizipal166.cloud",24],["dizipal167.cloud",24],["dizipal168.cloud",24],["dizipal169.cloud",24],["dizipal170.cloud",24],["dizipal171.cloud",24],["dizipal172.cloud",24],["dizipal173.cloud",24],["dizipal174.cloud",24],["dizipal175.cloud",24],["dizipal176.cloud",24],["dizipal177.cloud",24],["dizipal178.cloud",24],["dizipal179.cloud",24],["dizipal180.cloud",24],["dizipal181.cloud",24],["dizipal182.cloud",24],["dizipal183.cloud",24],["dizipal184.cloud",24],["dizipal185.cloud",24],["dizipal186.cloud",24],["dizipal187.cloud",24],["dizipal188.cloud",24],["dizipal189.cloud",24],["dizipal190.cloud",24],["dizipal191.cloud",24],["dizipal192.cloud",24],["dizipal193.cloud",24],["dizipal194.cloud",24],["dizipal195.cloud",24],["dizipal196.cloud",24],["dizipal197.cloud",24],["dizipal198.cloud",24],["dizipal199.cloud",24],["dizipal200.cloud",24],["filmmodu.co",25],["dizipal12.site",25],["dizipal13.site",25],["dizipal14.site",25],["dizipal15.site",25],["dizipal16.site",25],["dizipal17.site",25],["dizipal18.site",25],["dizipal19.site",25],["dizipal20.site",25],["dizipal21.site",25],["dizipal22.site",25],["dizipal23.site",25],["dizipal24.site",25],["dizipal25.site",25],["dizipal26.site",25],["dizipal27.site",25],["dizipal28.site",25],["dizipal29.site",25],["dizipal30.site",25],["arsiv.mackolik.com",26],["netsportv158.com",27],["nefisyemektarifleri.com",29],["izlesene.com",29],["play.diziyou.co",31],["tranimeci.com",33],["filmmakinesi1.com",34],["turkanime.co",35],["forum.donanimhaber.com",36],["filmmodu9.com",37],["filmmodu10.com",37],["filmmodu11.com",37],["filmmodu12.com",37],["filmmodu13.com",37],["filmmodu14.com",37],["filmmodu15.com",37],["filmmodu16.com",37],["filmmodu17.com",37],["filmmodu18.com",37],["filmmodu19.com",37],["filmmodu20.com",37],["atv.com.tr",38],["turkturk.org",39],["turkturk.net",39],["contentx.me",40],["superfilmgeldi.com",41],["edebiyatdefteri.com",42],["belgeselizlesene.com",43],["technopat.net",44],["aydindenge.com.tr",45],["diziall.com",46]]);

const entitiesMap = new Map([["dizicaps",23],["filmizletv1",23],["fullhdfilmizle5",[23,30]],["sinepal",23],["hdfilmcehennemi",23],["elzemfilmizle",23],["dizipal",23],["filmizletv",23],["tekparthdfilmizle",23],["dizisup",23],["dafflix",23],["yabancidizitv",23],["hddiziport",23],["dizimov",23],["torrentarsivi",23],["setfilmizle",23],["fullhdfilmmodu2",23],["filmyani",23],["tranimeizle",23],["altyazilifilm",23],["webteizle",24],["diziroll",25],["dizilla",25],["jetfilmizle",28]]);

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
