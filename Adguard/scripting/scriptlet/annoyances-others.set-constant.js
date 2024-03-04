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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ultimediaVisiblePlayer.scrollVisiblePlayer","noopFunc"],["Taplytics","{}"],["Taplytics.featureFlagEnabled","trueFunc"],["isGwd","true"],["Object.prototype.stickyEnabled","false"],["document.hasStorageAccess","undefined"],["dtkPlayer.infos.visible_plus","0"],["$.cookie","trueFunc"],["Object.prototype.enable_floating","false"],["Nickles.Consent.show","noopFunc"],["Object.prototype.startShow","noopFunc"],["Makeup.subscribePopup","undefined"],["floatingPlayer.isFloatingEnabled","false"],["Object.prototype.isFloatingEnabled","false"],["paywall","noopFunc"],["Object.prototype.forcingFixedMonitorOff","true"],["AdGlare","{}"],["aax_getad_mpb","false"],["document.hasFocus","trueFunc"],["waktu","-1"],["countDown","1"],["waitTime","0"],["count","0"],["timer","0"],["Object.prototype.embedPlayer.autoplay","false"],["Object.prototype.minPlayingVisibleHeight",""],["counter","-1"],["segundos","0"],["Notification","undefined"],["timeSec","0"],["valid","1"],["isGGSurvey","true"],["enable_dl_after_countdown","true"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["wt","-1"],["app.window.isVisible","trueFunc"],["sec","0"],["Object.prototype.autoPlay","noopFunc"],["gsecs","0"],["seconde","-1"],["timeleft","0"],["waitSeconds","0"],["document.hidden","false"],["countdown","0"],["Object.prototype.isPremium","true"],["blurred","false"],["scrollTo","noopFunc"],["tempo2","0"],["snow","undefined"],["setblur","noopFunc"],["youtube","1"],["time","0"],["fiveSecs","0"],["ONTVminiatureBlocked","trueFunc"],["width","100"],["waiting_time","0"],["Time_Start","0"],["Object.prototype.autoplay","0"],["document.oncontextmenu","null"],["document.onselectstart","null"],["document.ondragstart","null"],["disableEnterKey","noopFunc"],["disable_copy","noopFunc"],["disable_copy_ie","noopFunc"],["cancelContextMenu","noopFunc"],["noCopy","noopFunc"],["addLink","noopFunc"],["rightClickOpenYn","false"],["autoSourcingYn","false"],["vidcheck","1"],["NewsSource.addSource","noopFunc"],["linkback.l","true"],["var7","0"],["window.B.Article.preventSelection","noopFunc"],["mug.viewer.protectPost","noopFunc"],["document.onkeypress","null"],["document.onkeydown","null"],["document.onmousedown","null"],["mouseClickRight","noopFunc"],["document.oncopy","undefined"],["Object.prototype.getFooterText","undefined"],["wrbm_gb.copyAlert","undefined"],["disableSelection","noopFunc"],["nocontext","noopFunc"],["onload","null"],["document.oncontextmenu","{}"],["MdpAppender","undefined"],["window.disableselect","noopFunc"],["document.onpaste","undefined"],["document.oncontextmenu","undefined"],["document.onselectstart","undefined"],["oncontextmenu","undefined"]];

const hostnamesMap = new Map([["lavoixdunord.fr",0],["lest-eclair.fr",0],["ouest-france.fr",0],["foxnews.com",[1,2]],["securityonline.info",3],["scitechdaily.com",3],["zeberka.pl",4],["kozaczek.pl",4],["papilot.pl",4],["k2s.cc",5],["tezfiles.com",5],["fboom.me",5],["ultimedia.com",6],["hpplus.jp",7],["reuters.com",8],["nickles.de",9],["igeeksblog.com",10],["makeup.ru",11],["auto-swiat.pl",12],["przegladsportowy.onet.pl",12],["komputerswiat.pl",[12,13]],["businessinsider.com.pl",13],["fakt.pl",13],["plejada.pl",13],["medonet.pl",13],["onet.pl",13],["nextmgz.com",14],["nextmag.com.tw",14],["appledaily.com",14],["interia.pl",15],["findamasters.com",16],["phoronix.com",17],["exactpay.online",18],["btcbitco.in",18],["btcsatoshi.net",18],["cempakajaya.com",18],["wiour.com",18],["mdn.lol",18],["mcafee-com.com",[18,22]],["exego.app",[18,45]],["blog.carstopia.net",18],["blog.coinsvalue.net",18],["blog.cookinguide.net",18],["blog.freeoseocheck.com",18],["blog.makeupguide.net",18],["modapkvn.com",19],["apkmodvn.com",19],["anonymfile.com",20],["antonimos.de",21],["quesignifi.ca",21],["app.trangchu.news",22],["adfoc.us",22],["ffworld.xyz",22],["x86.co.kr",22],["surfsees.com",22],["kisalt.xyz",22],["m4cut.com",23],["pickhopes.com",23],["manga2day.com",23],["sport4you.net",23],["shardnat.tech",23],["dynamo.kiev.ua",24],["vp.rambler.ru",[25,37]],["tech24us.com",26],["udemycourses.me",26],["psychpoint.com",26],["goodssh.com",26],["criarjogosandroid.com",27],["makemoneywithurl.com",29],["shortit.pw",30],["ac-illust.com",[31,32]],["photo-ac.com",[31,32]],["player.vgtrk.com",33],["ebookmela.co.in",34],["destyy.com",35],["gestyy.com",35],["icutlink.com",36],["fcportables.com",38],["mylink1.biz",39],["mylinks.xyz",39],["drosbraift.com",40],["anonymous-links.com",41],["sundryfiles.com",42],["cgtips.org",43],["surfline.com",44],["yoykp.com",45],["pwrpa.cc",45],["tinys.click",45],["kiddyshort.com",45],["cl1ca.com",45],["4br.me",45],["fir3.net",45],["link.paid4link.com",45],["forextrader.site",45],["cutyurls.com",45],["linkmo.net",45],["doshrink.com",45],["link.almaftuchin.com",45],["easycut.io",45],["linkpoi.me",45],["adpayl.ink",45],["viewfr.com",45],["news.speedynews.xyz",45],["exeurl.com",45],["panyshort.link",45],["casperhd.com",45],["short2url.xyz",45],["rewayatcafe.com",45],["link4earn.com",45],["safelink.asia",45],["cravesandflames.com",45],["xpshort.com",45],["exalink.fun",45],["infotamizhan.xyz",45],["novelsapps.com",45],["cybertechng.com",45],["animerigel.com",45],["gainl.ink",45],["megaurl.in",45],["megafly.in",45],["linx.cc",45],["bitlk.com",45],["reqlinks.net",45],["rgl.vn",45],["youlink.ga",45],["wu8.in",45],["qlinks.eu",45],["upfilesurls.com",45],["mgnetu.com",45],["shorturl.unityassets4free.com",45],["financerites.in",45],["paid4file.com",45],["atglinks.com",45],["tii.la",45],["techsguy.com",45],["exeo.app",45],["smallinfo.in",45],["cutty.app",45],["adrinolinks.in",45],["shareus.site",45],["disheye.com",45],["enit.in",45],["veganab.co",45],["kinemaster.cc",45],["short.freeltc.top",45],["faucetcrypto.net",45],["download.windowslite.net",45],["oko.sh",45],["ckk.ai",45],["ovlinks.com",45],["ier.ai",45],["links.medipost.org",45],["forex-trnd.com",45],["paylinnk.com",45],["adpps.com",45],["baicho.xyz",45],["technemo.xyz",45],["adshorti.co",45],["loptelink.com",45],["link-yz.com",45],["short2fly.xyz",45],["adslink.pw",45],["shortx.net",45],["du-link.in",45],["mozlink.net",45],["haonguyen.top",45],["pandaznetwork.com",45],["bestcash2020.com",45],["dash-free.com",45],["cekip.xyz",45],["cryptoon.xyz",45],["btcwalk.com",45],["vhorizads.com",45],["theconomy.me",45],["wealthystyle.online",45],["easysky.in",45],["techgeek.digital",45],["csd.xmod.in",45],["link.tokenoto.com",45],["skincarie.com",45],["defaultfreeshort.in",45],["adsafelink.com",45],["linkshortify.site",45],["akashort.com",45],["rocklink.in",45],["insurance-space.xyz",45],["rajsayt.xyz",45],["insurglobal.xyz",45],["linkszia.co",45],["usanewstoday.club",45],["tlin.me",45],["shorthero.site",45],["cutp.in",45],["clk.asia",45],["cookdov.com",45],["aylink.info",45],["usdshort.com",45],["onroid.com",45],["filmyzilla-in.xyz",45],["sohexo.org",45],["zirof.com",45],["katflys.com",45],["samaa-pro.com",45],["earnme.club",45],["myshrinker.com",45],["seulink.online",45],["encurta.eu",45],["adurly.cc",45],["shorte.anxcinema.com",45],["nini08.com",45],["linkjust.com",45],["crazyblog.in",45],["shortlink.prz.pw",45],["swzz.xyz",45],["mixfaucet.com",45],["try2link.com",45],["gameen.xyz",45],["linkbr.xyz",45],["meulynk.com",45],["myad.biz",45],["baominh.tech",45],["bblink.com",45],["shortz.one",45],["newsalret.com",45],["clickscoin.com",45],["za.uy",45],["toptap.website",45],["gtlink.co",45],["upshrink.com",45],["upfiles.io",45],["link.turkdown.com",45],["beingtek.com",45],["automotur.club",45],["insuranceblog.xyz",45],["coinadfly.com",45],["link1s.com",45],["enagato.com",45],["dl.tech-story.net",45],["cpm10.org",45],["123link.biz",45],["rancah.com",45],["kingurls.com",45],["download.sharenulled.net",45],["go.gets4link.com",45],["lucidcam.com",45],["clikern.com",45],["musicc.xyz",45],["pix4link.com",45],["zipurls.com",45],["theblissempire.com",45],["xfiles.io",45],["upfiles.com",45],["filezipa.com",45],["arab-chat.club",45],["dz-linkk.com",45],["cslink.in",45],["jp88.xyz",45],["shrink.icu",45],["hoastie.com",45],["fclcc.com",45],["ptc.wtf",45],["tei.ai",45],["url4cut.xyz",45],["birdurls.com",45],["claimfreebits.com",45],["allcryptoz.net",45],["shrlink.top",45],["webshort.in",45],["coinsparty.mcrypto.club",45],["zshort.io",45],["eririo.club",45],["nerdy.vn",45],["jameeltips.us",45],["payskip.org",45],["freshi.site",45],["yxoshort.com",45],["pewgame.com",45],["shrinke.me",45],["foxseotools.com",45],["oncehelp.com",45],["earnwithshortlink.com",45],["enrt.eu",45],["tui.click",45],["adfloz.co",45],["shrx.in",45],["short.food-royal.com",45],["adpop.me",45],["galaxy-link.space",45],["link.ltc24.com",45],["kiiw.icu",45],["vshort.link",45],["adnit.xyz",45],["fwarycash.moviestar.fun",45],["linkebr.com",45],["bloggingguidance.com",45],["smoner.com",45],["charexempire.com",45],["cut-fly.com",45],["gplinks.co",45],["adomainscan.com",45],["cuts-url.com",45],["gainbtc.click",45],["profitlink.info",45],["artipedia.id",45],["gonety.com",45],["viraloc.com",45],["beautyram.info",45],["cashearn.cc",45],["cryptoads.space",45],["adcorto.me",45],["modapk.link",45],["holaurl.com",45],["adbl.live",45],["miklpro.com",45],["kutt.io",45],["sanoybonito.club",45],["afly.pro",45],["cutlink.link",45],["short88.com",45],["pngit.live",45],["exe.app",45],["adcorto.xyz",45],["cuturl.in",45],["womenhaircolors.review",45],["paidtomoney.com",45],["lite-link.xyz",45],["apkshrt.com",45],["linkshorts.me",45],["pureshort.link",45],["recipestutorials.com",45],["droplink.co",45],["tawiia.com",45],["exy.ai",45],["lite-link.com",45],["bdnewsx.com",45],["eio.io",45],["mealip.com",45],["earnfasts.com",45],["linksfire.co",45],["internewstv.com",45],["ivn3.com",45],["pslfive.com",45],["linksly.co",45],["illink.net",45],["trinddz.com",45],["ilinks.in",45],["techupme.com",45],["bitfly.io",45],["earnguap.com",45],["news.techrfour.com",45],["asiashort.link",45],["imagenesderopaparaperros.com",45],["c-ut.com",45],["toroox.com",45],["saungfirmware.id",45],["shrinkme.in",45],["softairbay.com",45],["link1s.net",45],["cashurl.in",45],["doctor-groups.com",45],["bitcoinly.in",45],["clk.ink",45],["abdeo8.com",45],["apksvip.com",45],["gibit.xyz",45],["claimcrypto.cc",45],["pkr.pw",45],["shrinkbtc.cc",45],["todaynewspk.win",45],["try2link.net",45],["stfly.me",45],["dz4win.com",45],["real-sky.com",45],["bolssc.com",45],["short2.cash",45],["fx4vip.com",45],["cutdl.xyz",45],["shrinkurl.org",45],["mediumarticles.com",45],["exee.io",45],["srt.leechpremium.link",45],["adsrt.live",45],["cheappath.com",45],["shorthitz.com",45],["savelink.site",45],["tmearn.com",45],["samapro.me",45],["adsy.pw",45],["owllink.net",45],["mondainai.moe",45],["2ota.com",45],["popimed.com",45],["aii.sh",45],["sekilastekno.com",45],["miuiku.com",45],["intothelink.com",45],["slink.bid",45],["7r6.com",45],["loptelink.vip",45],["iir.ai",45],["biroads.com",45],["win10.vn",[45,52]],["mitly.us",45],["adsrt.net",45],["afly.us",45],["tii.ai",45],["linkviet.xyz",45],["coredp.com",45],["linkrex.net",45],["bit-url.com",45],["adsrt.org",45],["bestearnonline.com",45],["gamesrs.com",45],["ouofly.com",45],["clicksbee.com",45],["shorterall.com",45],["dutchycorp.space",45],["linkshrnk.com",45],["linkad.in",45],["fc.lc",45],["adslinkfly.online",45],["shrinkme.io",45],["imgqec.online",46],["imgwbfh.online",46],["imgyer.store",46],["imgxuh.cfd",46],["imgngc.sbs",46],["imgezx.sbs",46],["imgxza.store",46],["imgwqr.online",46],["tr3fit.xyz",47],["daz3d.ru",48],["translit.net",49],["translit.ru",49],["cheatsquad.gg",50],["file4go.com",51],["file4go.net",51],["bankier.pl",53],["claudia.pl",53],["dyskusje24.pl",53],["edziecko.pl",53],["haps.pl",53],["infozdrowie24.pl",53],["kobieta.pl",53],["moto.pl",53],["gazeta.pl",53],["tokfm.pl",53],["sport.pl",53],["plotek.pl",53],["cocoleech.com",54],["prem.link",55],["bluemediadownload.lat",56],["bluemediaurls.lol",56],["bluemedialink.online",56],["dl.pcgamestorrents.org",56],["get-url.com",56],["t24.com.tr",57],["filmzone.com",[58,59,76]],["interface31.ru",[58,59]],["ktv.jp",58],["releasewitch.com",[58,61]],["news.ntv.co.jp",58],["novatoscans.top",58],["7days2die.info",[58,60]],["flying-lines.com",[58,59]],["fssp.gov.ru",[58,59]],["ilife97.com",[58,60]],["rdsong.com",[58,59]],["lubedk.com",[58,59,75,76]],["itempage3.auction.co.kr",58],["cdramalove.com",58],["10000recipe.com",58],["nike.com",[58,59]],["a2zapk.com",[58,60,61]],["fully-fundedscholarships.com",[58,60,61]],["shoneekapoor.com",58],["cda-hd.cc",[58,59,76]],["studysolve.online",[58,60,82]],["animeindia.in",[58,60,82]],["bufftoon.plaync.com",58],["studyguideindia.com",[58,77]],["codedosa.com",[58,60,61,62,63,82]],["newslibrary.naver.com",58],["insight.co.kr",[58,59,60]],["gamefinity.id",[58,60,84]],["cafe.naver.com",[58,59,60]],["half-musiq.blogspot.com",[59,77]],["tistory.com",[59,78,87]],["gradium.co.kr",[60,61,62,63,83]],["vernamagazine.com",61],["javsubtitle.co",61],["programasvirtualespc.net",61],["legionscans.com",61],["flinsetyadi.com",61],["theaircurrent.com",61],["now.rememberapp.co.kr",61],["semesters.in",[61,62,63,82,83]],["dora-guide.com",[62,63,83]],["topsporter.net",64],["uta-net.com",65],["lyricsondemand.com",66],["blog.naver.com",[67,68]],["dizilab9.com",69],["sedaily.com",70],["khan.co.kr",71],["fmkorea.com",72],["brunch.co.kr",73],["post.naver.com",74],["fishki.net",79],["city-data.com",79],["patrika.com",[79,88]],["ogznet.com",79],["deepl.com",80],["foodnavigator.com",81],["digitalsynopsis.com",83],["electricalvoice.com",83],["nordkorea-info.de",85],["tunovelaligera.com",86],["runningnews.gr",87],["gaypornmasters.com",[89,90]],["gaypornwave.com",89],["sporx.com",89],["muharebetarihi.com",91]]);

const entitiesMap = new Map([["bildirim",28],["seulink",45],["encurtalink",45],["wplink",45],["adshort",45],["linkfly",45],["exey",45],["linkshorts",45],["bluemediafile",56],["bluemediafiles",56]]);

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
