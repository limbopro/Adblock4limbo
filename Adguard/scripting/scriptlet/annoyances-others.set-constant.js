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

const argsList = [["ultimediaVisiblePlayer.scrollVisiblePlayer","noopFunc"],["Taplytics","{}"],["Taplytics.featureFlagEnabled","trueFunc"],["isGwd","true"],["Object.prototype.stickyEnabled","false"],["document.hasStorageAccess","undefined"],["dtkPlayer.infos.visible_plus","0"],["$.cookie","trueFunc"],["Object.prototype.enable_floating","false"],["Nickles.Consent.show","noopFunc"],["Object.prototype.startShow","noopFunc"],["Makeup.subscribePopup","undefined"],["floatingPlayer.isFloatingEnabled","false"],["Object.prototype.isFloatingEnabled","false"],["paywall","noopFunc"],["Object.prototype.forcingFixedMonitorOff","true"],["AdGlare","{}"],["aax_getad_mpb","false"],["document.hasFocus","trueFunc"],["waktu","-1"],["countDown","1"],["waitTime","0"],["count","0"],["timer","0"],["Object.prototype.embedPlayer.autoplay","false"],["Object.prototype.minPlayingVisibleHeight",""],["counter","-1"],["segundos","0"],["Notification","undefined"],["timeSec","0"],["valid","1"],["isGGSurvey","true"],["enable_dl_after_countdown","true"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["wt","-1"],["app.window.isVisible","trueFunc"],["counter","0"],["window_focus","true"],["sec","0"],["Object.prototype.autoPlay","noopFunc"],["gsecs","0"],["seconde","-1"],["timeleft","0"],["waitSeconds","0"],["document.hidden","false"],["countdown","0"],["Object.prototype.isPremium","true"],["blurred","false"],["scrollTo","noopFunc"],["tempo2","0"],["snow","undefined"],["setblur","noopFunc"],["youtube","1"],["time","0"],["fiveSecs","0"],["ONTVminiatureBlocked","trueFunc"],["width","100"],["waiting_time","0"],["Time_Start","0"],["Object.prototype.autoplay","0"],["document.oncontextmenu","null"],["document.onselectstart","null"],["document.ondragstart","null"],["disableEnterKey","noopFunc"],["disable_copy","noopFunc"],["disable_copy_ie","noopFunc"],["cancelContextMenu","noopFunc"],["noCopy","noopFunc"],["addLink","noopFunc"],["rightClickOpenYn","false"],["autoSourcingYn","false"],["vidcheck","1"],["NewsSource.addSource","noopFunc"],["linkback.l","true"],["var7","0"],["window.B.Article.preventSelection","noopFunc"],["mug.viewer.protectPost","noopFunc"],["document.onkeypress","null"],["document.onkeydown","null"],["document.onmousedown","null"],["mouseClickRight","noopFunc"],["document.oncopy","undefined"],["Object.prototype.getFooterText","undefined"],["wrbm_gb.copyAlert","undefined"],["disableSelection","noopFunc"],["nocontext","noopFunc"],["onload","null"],["document.oncontextmenu","{}"],["MdpAppender","undefined"],["window.disableselect","noopFunc"],["document.onpaste","undefined"],["document.oncontextmenu","undefined"],["document.onselectstart","undefined"],["oncontextmenu","undefined"]];

const hostnamesMap = new Map([["lavoixdunord.fr",0],["lest-eclair.fr",0],["ouest-france.fr",0],["foxnews.com",[1,2]],["securityonline.info",3],["scitechdaily.com",3],["zeberka.pl",4],["kozaczek.pl",4],["papilot.pl",4],["k2s.cc",5],["tezfiles.com",5],["fboom.me",5],["ultimedia.com",6],["hpplus.jp",7],["reuters.com",8],["nickles.de",9],["igeeksblog.com",10],["makeup.ru",11],["auto-swiat.pl",12],["przegladsportowy.onet.pl",12],["komputerswiat.pl",[12,13]],["businessinsider.com.pl",13],["fakt.pl",13],["plejada.pl",13],["medonet.pl",13],["onet.pl",13],["nextmgz.com",14],["nextmag.com.tw",14],["appledaily.com",14],["interia.pl",15],["findamasters.com",16],["phoronix.com",17],["exactpay.online",18],["btcbitco.in",18],["btcsatoshi.net",18],["cempakajaya.com",18],["crypto4yu.com",18],["readbitcoin.org",18],["wiour.com",18],["mdn.lol",18],["mcafee-com.com",[18,22]],["exego.app",[18,47]],["blog.carstopia.net",18],["blog.coinsvalue.net",18],["blog.cookinguide.net",18],["blog.freeoseocheck.com",18],["blog.makeupguide.net",18],["modapkvn.com",19],["apkmodvn.com",19],["anonymfile.com",20],["antonimos.de",21],["quesignifi.ca",21],["mdn.rest",21],["app.trangchu.news",22],["adfoc.us",22],["ffworld.xyz",22],["x86.co.kr",22],["kolaykisalt.com",22],["surfsees.com",22],["kisalt.xyz",22],["m4cut.com",23],["pickhopes.com",23],["manga2day.com",23],["sport4you.net",23],["shardnat.tech",23],["dynamo.kiev.ua",24],["vp.rambler.ru",[25,39]],["tech24us.com",26],["udemycourses.me",26],["psychpoint.com",26],["goodssh.com",26],["criarjogosandroid.com",27],["makemoneywithurl.com",29],["shortit.pw",30],["ac-illust.com",[31,32]],["photo-ac.com",[31,32]],["player.vgtrk.com",33],["ebookmela.co.in",34],["destyy.com",35],["gestyy.com",35],["linksht.com",[36,37]],["icutlink.com",38],["fcportables.com",40],["mylink1.biz",41],["mylinks.xyz",41],["drosbraift.com",42],["anonymous-links.com",43],["sundryfiles.com",44],["cgtips.org",45],["surfline.com",46],["yoykp.com",47],["pwrpa.cc",47],["tinys.click",47],["kiddyshort.com",47],["cl1ca.com",47],["4br.me",47],["fir3.net",47],["link.paid4link.com",47],["forextrader.site",47],["cutyurls.com",47],["linkmo.net",47],["doshrink.com",47],["link.almaftuchin.com",47],["easycut.io",47],["linkpoi.me",47],["adpayl.ink",47],["viewfr.com",47],["news.speedynews.xyz",47],["exeurl.com",47],["panyshort.link",47],["casperhd.com",47],["short2url.xyz",47],["rewayatcafe.com",47],["link4earn.com",47],["safelink.asia",47],["cravesandflames.com",47],["xpshort.com",47],["exalink.fun",47],["infotamizhan.xyz",47],["novelsapps.com",47],["cybertechng.com",47],["animerigel.com",47],["gainl.ink",47],["megaurl.in",47],["megafly.in",47],["linx.cc",47],["bitlk.com",47],["reqlinks.net",47],["rgl.vn",47],["youlink.ga",47],["wu8.in",47],["qlinks.eu",47],["upfilesurls.com",47],["mgnetu.com",47],["shorturl.unityassets4free.com",47],["financerites.in",47],["paid4file.com",47],["atglinks.com",47],["tii.la",47],["techsguy.com",47],["exeo.app",47],["smallinfo.in",47],["cutty.app",47],["adrinolinks.in",47],["shareus.site",47],["disheye.com",47],["enit.in",47],["veganab.co",47],["mdisklink.link",47],["kinemaster.cc",47],["short.freeltc.top",47],["faucetcrypto.net",47],["download.windowslite.net",47],["dlsite.win",47],["oko.sh",47],["ckk.ai",47],["ovlinks.com",47],["ier.ai",47],["links.medipost.org",47],["forex-trnd.com",47],["paylinnk.com",47],["adpps.com",47],["go.linkbnao.com",47],["baicho.xyz",47],["technemo.xyz",47],["adshorti.co",47],["loptelink.com",47],["crt.im",47],["mshort.top",47],["link-yz.com",47],["short2fly.xyz",47],["adslink.pw",47],["shortx.net",47],["du-link.in",47],["mozlink.net",47],["haonguyen.top",47],["pandaznetwork.com",47],["bestcash2020.com",47],["dash-free.com",47],["cekip.xyz",47],["cryptoon.xyz",47],["btcwalk.com",47],["vhorizads.com",47],["theconomy.me",47],["wealthystyle.online",47],["zlink.tk",47],["easysky.in",47],["techgeek.digital",47],["csd.xmod.in",47],["link.tokenoto.com",47],["skincarie.com",47],["shortie.link",47],["defaultfreeshort.in",47],["adsafelink.com",47],["linkshortify.site",47],["kolotoken.site",47],["powerclicks.xyz",47],["akashort.com",47],["rocklink.in",47],["insurance-space.xyz",47],["rajsayt.xyz",47],["insurglobal.xyz",47],["linkszia.co",47],["usanewstoday.club",47],["earnforclick.online",47],["tlin.me",47],["adlinkfly.wartakilat.com",47],["shorthero.site",47],["cutp.in",47],["clk.asia",47],["cookdov.com",47],["aylink.info",47],["adinsurance.xyz",47],["usdshort.com",47],["onroid.com",47],["filmyzilla-in.xyz",47],["sohexo.org",47],["zirof.com",47],["katflys.com",47],["samaa-pro.com",47],["earnme.club",47],["myshrinker.com",47],["seulink.online",47],["encurta.eu",47],["adurly.cc",47],["shorte.anxcinema.com",47],["nini08.com",47],["linkjust.com",47],["download.freestudyweb.com",47],["ultraten.net",47],["vrlinks.xyz",47],["crazyblog.in",47],["shortlink.prz.pw",47],["swzz.xyz",47],["mixfaucet.com",47],["getlink.tienichmaytinh.net",47],["adly.fun",47],["try2link.com",47],["go.netfile.cc",47],["fameen.xyz",47],["gameen.xyz",47],["yameen.xyz",47],["abre.click",47],["adcripto.com",47],["linkbr.xyz",47],["meulynk.com",47],["myad.biz",47],["baominh.tech",47],["bblink.com",47],["shortz.one",47],["newsalret.com",47],["clickscoin.com",47],["za.uy",47],["toptap.website",47],["gtlink.co",47],["upshrink.com",47],["gir.ist",47],["upfiles.io",47],["link.turkdown.com",47],["beingtek.com",47],["automotur.club",47],["insuranceblog.xyz",47],["coinadfly.com",47],["linkres.in",47],["link1s.com",47],["fire-link.net",47],["enagato.com",47],["dl.tech-story.net",47],["cpm10.org",47],["123link.biz",47],["rancah.com",47],["shrtvip.com",47],["linkerhub.tk",47],["kingurls.com",47],["download.sharenulled.net",47],["go.gets4link.com",47],["lucidcam.com",47],["clikern.com",47],["musicc.xyz",47],["pix4link.com",47],["zipurls.com",47],["theblissempire.com",47],["linkadshield.xyz",47],["xfiles.io",47],["upfiles.com",47],["zshort.cc",47],["filezipa.com",47],["arab-chat.club",47],["dz-linkk.com",47],["newshour.pw",47],["paidthe.site",47],["cslink.in",47],["jp88.xyz",47],["shortenmm.cf",47],["shrink.icu",47],["bevru.club",47],["bitlinks.pw",47],["hoastie.com",47],["arurio.club",47],["fclcc.com",47],["ptc.wtf",47],["tei.ai",47],["url4cut.xyz",47],["birdurls.com",47],["claimfreebits.com",47],["allcryptoz.net",47],["shrlink.top",47],["webshort.in",47],["coinsparty.mcrypto.club",47],["zshort.io",47],["eririo.club",47],["nerdy.vn",47],["jameeltips.us",47],["payskip.org",47],["freshi.site",47],["yxoshort.com",47],["pewgame.com",47],["sanos.xyz",47],["shrinkzzy.link",47],["shrinke.me",47],["foxseotools.com",47],["oncehelp.com",47],["earnwithshortlink.com",47],["enrt.eu",47],["tui.click",47],["adfloz.co",47],["shrx.in",47],["short.food-royal.com",47],["adpop.me",47],["galaxy-link.space",47],["link.ltc24.com",47],["kiiw.icu",47],["vshort.link",47],["adnit.xyz",47],["fwarycash.moviestar.fun",47],["linkebr.com",47],["bloggingguidance.com",47],["smoner.com",47],["charexempire.com",47],["cut-fly.com",47],["gplinks.co",47],["adomainscan.com",47],["bitmos.co.in",47],["cuts-url.com",47],["gainbtc.click",47],["profitlink.info",47],["artipedia.id",47],["gonety.com",47],["viraloc.com",47],["beautyram.info",47],["cashearn.cc",47],["go2.surf",47],["cryptoads.space",47],["adcorto.me",47],["modapk.link",47],["holaurl.com",47],["adbl.live",47],["miklpro.com",47],["kutt.io",47],["sanoybonito.club",47],["afly.pro",47],["cutlink.link",47],["short88.com",47],["pngit.live",47],["exe.app",47],["adsrt.click",47],["adcorto.xyz",47],["shortbled.com",47],["cuturl.in",47],["womenhaircolors.review",47],["srts.me",47],["paidtomoney.com",47],["lite-link.xyz",47],["apkshrt.com",47],["linkshorts.me",47],["androidnougatapk.com",47],["pureshort.link",47],["recipestutorials.com",47],["droplink.co",47],["tawiia.com",47],["exy.ai",47],["lite-link.com",47],["bdnewsx.com",47],["eio.io",47],["mealip.com",47],["earnfasts.com",47],["linksfire.co",47],["giscr.ac.th",47],["internewstv.com",47],["ivn3.com",47],["pslfive.com",47],["linksly.co",47],["illink.net",47],["coin.mg",47],["trinddz.com",47],["ilinks.in",47],["techupme.com",47],["bitfly.io",47],["earnguap.com",47],["news.techrfour.com",47],["shortzzy.in",47],["asiashort.link",47],["imagenesderopaparaperros.com",47],["c-ut.com",47],["toroox.com",47],["saungfirmware.id",47],["shrinkme.in",47],["softairbay.com",47],["link1s.net",47],["cashurl.in",47],["doctor-groups.com",47],["bitcoinly.in",47],["clk.ink",47],["abdeo8.com",47],["apksvip.com",47],["gibit.xyz",47],["claimcrypto.cc",47],["btcdot.xyz",47],["pkr.pw",47],["shrinkbtc.cc",47],["todaynewspk.win",47],["manikusa.com",47],["try2link.net",47],["stfly.me",47],["dz4win.com",47],["real-sky.com",47],["bolssc.com",47],["short2.cash",47],["fx4vip.com",47],["cutdl.xyz",47],["shrinkurl.org",47],["mediumarticles.com",47],["asupload.com",47],["exee.io",47],["srt.leechpremium.link",47],["adsrt.live",47],["cheappath.com",47],["fcc.lc",47],["shorthitz.com",47],["savelink.site",47],["linkshorten.xyz",47],["tmearn.com",47],["samapro.me",47],["adsy.pw",47],["owllink.net",47],["mondainai.moe",47],["2ota.com",47],["popimed.com",47],["aii.sh",47],["sekilastekno.com",47],["miuiku.com",47],["articlix.com",47],["intothelink.com",47],["pingit.link",47],["slink.bid",47],["7r6.com",47],["loptelink.vip",47],["iir.ai",47],["biroads.com",47],["win10.vn",[47,54]],["mitly.us",47],["adsrt.net",47],["afly.us",47],["tii.ai",47],["linkviet.xyz",47],["coredp.com",47],["linkrex.net",47],["bit-url.com",47],["adsrt.org",47],["bestearnonline.com",47],["gamesrs.com",47],["ouofly.com",47],["clicksbee.com",47],["shorterall.com",47],["dutchycorp.space",47],["linkshrnk.com",47],["linkad.in",47],["fc.lc",47],["adslinkfly.online",47],["shrinkme.io",47],["imgqec.online",48],["imgwbfh.online",48],["imgyer.store",48],["imgxuh.cfd",48],["imgngc.sbs",48],["imgezx.sbs",48],["imgxza.store",48],["imgwqr.online",48],["tr3fit.xyz",49],["daz3d.ru",50],["translit.net",51],["translit.ru",51],["cheatsquad.gg",52],["file4go.com",53],["file4go.net",53],["bankier.pl",55],["claudia.pl",55],["dyskusje24.pl",55],["edziecko.pl",55],["haps.pl",55],["infozdrowie24.pl",55],["kobieta.pl",55],["moto.pl",55],["gazeta.pl",55],["tokfm.pl",55],["sport.pl",55],["plotek.pl",55],["cocoleech.com",56],["prem.link",57],["bluemediadownload.lat",58],["bluemediaurls.lol",58],["bluemedialink.online",58],["dl.pcgamestorrents.org",58],["get-url.com",58],["t24.com.tr",59],["filmzone.com",[60,61,78]],["interface31.ru",[60,61]],["ktv.jp",60],["releasewitch.com",[60,63]],["news.ntv.co.jp",60],["novatoscans.top",60],["7days2die.info",[60,62]],["flying-lines.com",[60,61]],["fssp.gov.ru",[60,61]],["ilife97.com",[60,62]],["rdsong.com",[60,61]],["lubedk.com",[60,61,77,78]],["itempage3.auction.co.kr",60],["cdramalove.com",60],["10000recipe.com",60],["nike.com",[60,61]],["a2zapk.com",[60,62,63]],["fully-fundedscholarships.com",[60,62,63]],["shoneekapoor.com",60],["cda-hd.cc",[60,61,78]],["studysolve.online",[60,62,84]],["animeindia.in",[60,62,84]],["bufftoon.plaync.com",60],["studyguideindia.com",[60,79]],["codedosa.com",[60,62,63,64,65,84]],["newslibrary.naver.com",60],["insight.co.kr",[60,61,62]],["gamefinity.id",[60,62,86]],["cafe.naver.com",[60,61,62]],["half-musiq.blogspot.com",[61,79]],["tistory.com",[61,80,89]],["gradium.co.kr",[62,63,64,65,85]],["javsubtitle.co",63],["programasvirtualespc.net",63],["legionscans.com",63],["flinsetyadi.com",63],["theaircurrent.com",63],["now.rememberapp.co.kr",63],["semesters.in",[63,64,65,84,85]],["dora-guide.com",[64,65,85]],["topsporter.net",66],["uta-net.com",67],["lyricsondemand.com",68],["blog.naver.com",[69,70]],["dizilab9.com",71],["sedaily.com",72],["khan.co.kr",73],["fmkorea.com",74],["brunch.co.kr",75],["post.naver.com",76],["fishki.net",81],["city-data.com",81],["patrika.com",[81,90]],["ogznet.com",81],["deepl.com",82],["foodnavigator.com",83],["digitalsynopsis.com",85],["electricalvoice.com",85],["nordkorea-info.de",87],["tunovelaligera.com",88],["runningnews.gr",89],["gaypornmasters.com",[91,92]],["gaypornwave.com",91],["sporx.com",91],["muharebetarihi.com",93]]);

const entitiesMap = new Map([["bildirim",28],["seulink",47],["encurtalink",47],["wplink",47],["adshort",47],["linkfly",47],["exey",47],["linkshorts",47],["bluemediafile",58],["bluemediafiles",58]]);

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
