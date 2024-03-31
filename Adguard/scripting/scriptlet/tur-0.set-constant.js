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

const argsList = [["adblock.check","noopFunc"],["eyeOfErstream.detectedBloke","falseFunc"],["xv_ad_block","0"],["tie.ad_blocker_disallow_images_placeholder","undefined"],["eazy_ad_unblocker_msg_var",""],["adbEnableForPage","false"],["detector_active","true"],["adblock_active","false"],["adBlockRunning","false"],["adb","false"],["adBlockEnabled","false"],["kan_vars.adblock","undefined"],["hasAdblock","false"],["AdblockDetector","undefined"],["adblockCheckUrl",""],["adservice","{}"],["canRunAds","true"],["jQuery.adblock","false"],["koddostu_com_adblock_yok","null"],["adblock","false"],["puShown","true"],["isShow","true"],["reklamsayisi","1"],["app.ads","{}"],["adsConfigs.0.enabled","0"],["window.config.adv.enabled","0"],["window.config.match.watermark",""],["player.vroll","noopFunc"],["window.config.adv","{}"],["openPopup","false"],["wpsaData","undefined"],["config.adv","{}"],["AdmostClient","noopFunc"],["S_Popup","2"],["loadPlayerAds","trueFunc"],["reklam_1",""],["reklamsayisi","0"],["player.vroll","undefined"],["volumeClearInterval","0"],["rek_kontrol","noopFunc"],["clicked","true"],["adSearchTitle","undefined"],["Object.prototype.ads","noopFunc"],["HBiddings.vastUrl",""],["AdvPlayer","undefined"],["initOpen","undefined"],["rg","noopFunc"],["Object.prototype.ads_enable","false"],["td_ad_background_click_link",""],["start","1"],["popup","noopFunc"]];

const hostnamesMap = new Map([["iyibeslenme.net",0],["teknop.net",0],["kirtkirtla.com",0],["buneymis.net",0],["ozgunbilgi.com",0],["beceriksizler.net",0],["exxen.com",1],["exceldepo.com",2],["tgyama.com",3],["uzaymanga.com",[4,29]],["e-kitapstore.com",5],["wheel-size.com.tr",6],["karnaval.com",7],["mangaship.net",8],["mangaship.com",8],["miuitr.info",9],["puhutv.com",10],["coinotag.com",11],["cnnturk.com",[12,13]],["kanald.com.tr",[14,15]],["iddaaorantahmin.com",16],["oyungibi.com",17],["veterinerhekimleri.com",17],["turkdenizcileri.com",18],["bilgalem.blogspot.com",18],["klavyeanaliz.org",19],["hdfilmizle.site",20],["sinepal1.vip",20],["hdsinemax.com",20],["hdfilmizle.org",20],["tafdi4.com",20],["tafdi5.com",20],["elzemfilm.org",20],["tafdi3.com",20],["anizle.com",20],["hdfilmseyircisi.org",20],["sinemol.net",20],["kozfilm.com",20],["hdfilmhit.org",20],["hdfilmizle.in",20],["diziyou.co",20],["filmizlew.net",20],["dizimag.eu",20],["bumfilmizle1.com",20],["1080hdfilmizle.com",20],["turkerotikizle.com",20],["yabancidizibax.com",20],["sinemangoo.org",20],["sexfilmleriizle.com",20],["fullhdfilm.pro",[20,36]],["geziforumu.com",20],["efendim.xyz",20],["dizipaltv.net",20],["filmjr1.com",20],["fluffcore.com",20],["hdfilmfullizle.com",20],["hdfilmcehennemizle.com",20],["netfullfilmizle3.com",20],["filmmodu.info",20],["arrowizle.com",20],["hdfilmifullizle.com",20],["jokerfilmizle.com",20],["720pfilmiizle.net",20],["filmcus.com",20],["filmizlew.org",20],["zoof1.xyz",20],["sinemakolik.net",20],["sinefilmizlesen.com",20],["zarize.com",20],["burdenfly.com",20],["zzerotik.com",20],["filmgo.org",20],["sinemafilmizle.net",20],["fullhdfilmiizle.org",20],["filmkuzusu1.com",20],["hdfilmcix.net",20],["sinemadelisi.com",20],["hdsexfilmizle.com",20],["erotik-film.org",20],["erotikfilmtube.com",20],["pornoanne.com",20],["diziboxx.com",20],["turkaliz.com",20],["vkfilmizle.net",20],["dizimom.live",20],["filmizlet.net",20],["pornorips.com",20],["bumfilmizle.com",20],["shirl.club",20],["evrenselfilmlerim.org",20],["turkcealtyazilipornom.com",20],["sinema.cc",20],["hdfilmizletv.net",20],["sinemaizle.co",20],["netfilmtvizle.com",20],["hdfilmcehennem.live",20],["efullizle.com",20],["asyafanatiklerim.com",20],["dizilost.com",20],["fullhdfilmdeposu.com",20],["volsex.com",20],["divx720pfilmizle.org",20],["justintvizle21.pro",20],["dizipal700.com",20],["dizipal701.com",20],["dizipal702.com",20],["dizipal703.com",20],["dizipal704.com",20],["dizipal705.com",20],["dizipal706.com",20],["dizipal707.com",20],["dizipal709.com",20],["dizipal710.com",20],["dizipal711.com",20],["dizipal712.com",20],["dizipal713.com",20],["dizipal714.com",20],["dizipal715.com",20],["dizipal716.com",20],["dizipal717.com",20],["dizipal718.com",20],["dizipal719.com",20],["dizipal720.com",20],["dizipal721.com",20],["dizipal722.com",20],["dizipal723.com",20],["dizipal724.com",20],["dizipal725.com",20],["dizipal726.com",20],["dizipal727.com",20],["dizipal728.com",20],["dizipal730.com",20],["dizipal731.com",20],["dizipal732.com",20],["dizipal733.com",20],["dizipal734.com",20],["dizipal735.com",20],["dizipal736.com",20],["dizipal737.com",20],["dizipal738.com",20],["dizipal739.com",20],["dizipal740.com",20],["dizipal741.com",20],["dizipal743.com",20],["dizipal745.com",20],["dizipal755.com",20],["dizipal801.com",20],["dizipal802.com",20],["dizipal803.com",20],["dizipal804.com",20],["dizipal805.com",20],["dizipal806.com",20],["dizipal807.com",20],["dizipal808.com",20],["dizipal809.com",20],["dizipal810.com",20],["dizipal811.com",20],["dizipal812.com",20],["dizipal813.com",20],["dizipal814.com",20],["dizipal815.com",20],["dizipal816.com",20],["dizipal817.com",20],["dizipal818.com",20],["dizipal819.com",20],["dizipal820.com",20],["dizipal821.com",20],["dizipal822.com",20],["dizipal823.com",20],["dizipal824.com",20],["dizipal825.com",20],["dizipal826.com",20],["dizipal827.com",20],["dizipal828.com",20],["dizipal829.com",20],["dizipal830.com",20],["dizipal831.com",20],["dizipal832.com",20],["dizipal833.com",20],["dizipal834.com",20],["dizipal835.com",20],["dizipal836.com",20],["dizipal837.com",20],["dizipal838.com",20],["dizipal839.com",20],["dizipal840.com",20],["dizipal841.com",20],["dizipal842.com",20],["dizipal843.com",20],["filmizle5.org",20],["filmizle6.org",20],["filmizle7.org",20],["filmizle8.org",20],["filmizle9.org",20],["filmizle10.org",20],["filmizle11.org",20],["filmizle12.org",20],["filmizle13.org",20],["filmizle14.org",20],["filmizle15.org",20],["filmizle16.org",20],["filmizle17.org",20],["filmizle18.org",20],["filmizle19.org",20],["filmizle20.org",20],["filmizle21.org",20],["filmizle22.org",20],["filmizle23.org",20],["filmizle24.org",20],["filmizle25.org",20],["inattvhd188.xyz",20],["inattvhd189.xyz",20],["inattvhd190.xyz",20],["inattvhd191.xyz",20],["inattvhd192.xyz",20],["inattvhd193.xyz",20],["inattvhd194.xyz",20],["inattvhd195.xyz",20],["inattvhd196.xyz",20],["inattvhd197.xyz",20],["inattvhd198.xyz",20],["inattvhd199.xyz",20],["inattvhd200.xyz",20],["inattvhd201.xyz",20],["inattvhd202.xyz",20],["inattvhd203.xyz",20],["inattvhd204.xyz",20],["inattvhd205.xyz",20],["inattvhd206.xyz",20],["inattvhd207.xyz",20],["inattvhd208.xyz",20],["inattvhd209.xyz",20],["inattvhd210.xyz",20],["inattvhd211.xyz",20],["inattvhd212.xyz",20],["inattvhd213.xyz",20],["inattvhd214.xyz",20],["inattvhd215.xyz",20],["inattvhd216.xyz",20],["inattvhd217.xyz",20],["inattvhd218.xyz",20],["inattvhd219.xyz",20],["inattvhd220.xyz",20],["inattvhd221.xyz",20],["tekfullfilmizle5.com",21],["webteizle2.com",21],["trgoals625.xyz",[21,31]],["trgoals605.xyz",[21,31]],["trgoals606.xyz",[21,31]],["trgoals607.xyz",[21,31]],["trgoals608.xyz",[21,31]],["trgoals609.xyz",[21,31]],["trgoals610.xyz",[21,31]],["trgoals611.xyz",[21,31]],["trgoals612.xyz",[21,31]],["trgoals613.xyz",[21,31]],["trgoals614.xyz",[21,31]],["trgoals615.xyz",[21,31]],["trgoals616.xyz",[21,31]],["trgoals617.xyz",[21,31]],["trgoals618.xyz",[21,31]],["trgoals619.xyz",[21,31]],["trgoals620.xyz",[21,31]],["trgoals483.xyz",21],["trgoals484.xyz",21],["trgoals485.xyz",[21,31]],["trgoals486.xyz",[21,31]],["trgoals487.xyz",[21,31]],["trgoals488.xyz",[21,31]],["trgoals489.xyz",[21,31]],["trgoals490.xyz",[21,31]],["trgoals491.xyz",[21,31]],["trgoals492.xyz",[21,31]],["trgoals493.xyz",[21,31]],["trgoals494.xyz",[21,31]],["trgoals495.xyz",[21,31]],["trgoals496.xyz",[21,31]],["trgoals497.xyz",[21,31]],["trgoals498.xyz",[21,31]],["trgoals499.xyz",[21,31]],["trgoals500.xyz",[21,31]],["trgoals501.xyz",[21,31]],["trgoals502.xyz",[21,31]],["trgoals503.xyz",[21,31]],["trgoals504.xyz",[21,31]],["trgoals505.xyz",[21,31]],["trgoals506.xyz",[21,31]],["trgoals507.xyz",[21,31]],["trgoals508.xyz",[21,31]],["trgoals509.xyz",[21,31]],["trgoals510.xyz",[21,31]],["trgoals511.xyz",[21,31]],["trgoals512.xyz",[21,31]],["trgoals513.xyz",[21,31]],["trgoals514.xyz",[21,31]],["trgoals515.xyz",[21,31]],["trgoals516.xyz",[21,31]],["trgoals517.xyz",[21,31]],["trgoals518.xyz",[21,31]],["trgoals519.xyz",[21,31]],["trgoals520.xyz",[21,31]],["trgoals521.xyz",[21,31]],["trgoals522.xyz",[21,31]],["trgoals523.xyz",[21,31]],["trgoals524.xyz",[21,31]],["trgoals525.xyz",[21,31]],["trgoals526.xyz",[21,31]],["trgoals527.xyz",[21,31]],["trgoals528.xyz",[21,31]],["trgoals529.xyz",[21,31]],["trgoals530.xyz",[21,31]],["trgoals531.xyz",[21,31]],["trgoals532.xyz",[21,31]],["trgoals533.xyz",[21,31]],["trgoals534.xyz",[21,31]],["trgoals535.xyz",[21,31]],["trgoals536.xyz",[21,31]],["trgoals537.xyz",[21,31]],["trgoals538.xyz",[21,31]],["trgoals539.xyz",[21,31]],["trgoals540.xyz",[21,31]],["trgoals541.xyz",[21,31]],["trgoals542.xyz",[21,31]],["trgoals543.xyz",[21,31]],["trgoals544.xyz",[21,31]],["trgoals545.xyz",[21,31]],["trgoals546.xyz",[21,31]],["trgoals547.xyz",[21,31]],["trgoals548.xyz",[21,31]],["trgoals549.xyz",[21,31]],["trgoals550.xyz",[21,31]],["trgoals551.xyz",[21,31]],["trgoals552.xyz",[21,31]],["trgoals553.xyz",[21,31]],["trgoals554.xyz",[21,31]],["trgoals555.xyz",[21,31]],["trgoals556.xyz",[21,31]],["trgoals557.xyz",[21,31]],["trgoals558.xyz",[21,31]],["trgoals559.xyz",[21,31]],["trgoals560.xyz",[21,31]],["trgoals561.xyz",[21,31]],["trgoals562.xyz",[21,31]],["trgoals563.xyz",[21,31]],["trgoals564.xyz",[21,31]],["trgoals565.xyz",[21,31]],["trgoals566.xyz",[21,31]],["trgoals567.xyz",[21,31]],["trgoals568.xyz",[21,31]],["trgoals569.xyz",[21,31]],["trgoals570.xyz",[21,31]],["trgoals571.xyz",[21,31]],["trgoals572.xyz",[21,31]],["trgoals573.xyz",[21,31]],["trgoals574.xyz",[21,31]],["trgoals575.xyz",[21,31]],["trgoals576.xyz",[21,31]],["trgoals577.xyz",[21,31]],["trgoals578.xyz",[21,31]],["trgoals579.xyz",[21,31]],["trgoals580.xyz",[21,31]],["trgoals581.xyz",[21,31]],["trgoals582.xyz",[21,31]],["trgoals583.xyz",[21,31]],["trgoals584.xyz",[21,31]],["trgoals585.xyz",[21,31]],["trgoals586.xyz",[21,31]],["trgoals587.xyz",[21,31]],["trgoals588.xyz",[21,31]],["trgoals589.xyz",[21,31]],["trgoals590.xyz",[21,31]],["trgoals591.xyz",[21,31]],["trgoals592.xyz",[21,31]],["trgoals593.xyz",[21,31]],["trgoals594.xyz",[21,31]],["trgoals595.xyz",[21,31]],["trgoals596.xyz",[21,31]],["trgoals597.xyz",[21,31]],["trgoals598.xyz",[21,31]],["trgoals599.xyz",[21,31]],["trgoals600.xyz",[21,31]],["dizipal73.cloud",21],["dizipal74.cloud",21],["dizipal132.cloud",21],["dizipal133.cloud",21],["dizipal134.cloud",21],["dizipal135.cloud",21],["dizipal140.cloud",21],["hdfilmizlesene.org",22],["fullfilmizlesene.net",23],["xyzsprtsfrmr1.site",24],["mgviagrtoomuch.com",[25,26]],["ypsd.xyz",27],["cvdd.one",27],["pllsfored.com",28],["filmmodu.co",30],["dizipal12.site",30],["dizipal13.site",30],["dizipal14.site",30],["dizipal15.site",30],["dizipal16.site",30],["dizipal17.site",30],["dizipal18.site",30],["dizipal19.site",30],["dizipal20.site",30],["dizipal21.site",30],["dizipal22.site",30],["dizipal23.site",30],["dizipal24.site",30],["dizipal25.site",30],["dizipal26.site",30],["dizipal27.site",30],["dizipal28.site",30],["dizipal30.site",30],["netsportv158.com",31],["corsproxy.pro",31],["inattv454.xyz",31],["inattv455.xyz",31],["inattv456.xyz",31],["inattv457.xyz",31],["inattv458.xyz",31],["inattv459.xyz",31],["inattv460.xyz",31],["inattv461.xyz",31],["inattv462.xyz",31],["inattv463.xyz",31],["inattv464.xyz",31],["inattv465.xyz",31],["inattv466.xyz",31],["inattv467.xyz",31],["inattv468.xyz",31],["inattv469.xyz",31],["inattv470.xyz",31],["inattv471.xyz",31],["inattv472.xyz",31],["inattv473.xyz",31],["inattv474.xyz",31],["inattv475.xyz",31],["inattv476.xyz",31],["inattv477.xyz",31],["inattv478.xyz",31],["inattv479.xyz",31],["inattv480.xyz",31],["inattv481.xyz",31],["inattv482.xyz",31],["inattv483.xyz",31],["inattv484.xyz",31],["inattv485.xyz",31],["inattv486.xyz",31],["inattv487.xyz",31],["inattv488.xyz",31],["inattv489.xyz",31],["inattv490.xyz",31],["inattv491.xyz",31],["inattv492.xyz",31],["inattv493.xyz",31],["inattv494.xyz",31],["inattv495.xyz",31],["inattv496.xyz",31],["inattv497.xyz",31],["inattv498.xyz",31],["inattv499.xyz",31],["inattv500.xyz",31],["arsiv.mackolik.com",32],["nefisyemektarifleri.com",34],["izlesene.com",34],["filmizletv2.com",35],["filmizletv18.com",35],["play.diziyou.co",37],["tranimeci.com",38],["filmmakinesi1.com",39],["turkanime.co",40],["forum.donanimhaber.com",41],["filmmodu9.com",42],["filmmodu10.com",42],["filmmodu11.com",42],["filmmodu12.com",42],["filmmodu13.com",42],["filmmodu14.com",42],["filmmodu15.com",42],["filmmodu16.com",42],["filmmodu17.com",42],["filmmodu18.com",42],["filmmodu19.com",42],["filmmodu20.com",42],["atv.com.tr",43],["turkturk.org",44],["turkturk.net",44],["contentx.me",45],["edebiyatdefteri.com",46],["belgeselizlesene.com",47],["technopat.net",48],["aydindenge.com.tr",49],["diziall.com",50]]);

const entitiesMap = new Map([["tranimaci",20],["siyahfilmizle",20],["dizicaps",20],["filmizletv1",20],["fullhdfilmizle",[20,36]],["fullfilmizle",20],["sinepal",20],["yabancidizilertv",20],["hdfilmcehennemi",[20,22]],["izlekolik",20],["dizipal",20],["filmizletv",[20,35]],["tekparthdfilmizle",20],["dizikorea",20],["diziyo",20],["dafflix",20],["dizimov",20],["setfilmizle",20],["fullhdfilmmodu2",20],["pembetv18",20],["tranimeizle",20],["diziroll",30],["dizilla",30],["jetfilmizle",33]]);

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
