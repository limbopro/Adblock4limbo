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

// ruleset: annoyances-others

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["isGwd","true"],["Object.prototype.stickyEnabled","false"],["document.hasStorageAccess","undefined"],["dtkPlayer.infos.visible_plus","0"],["$.cookie","trueFunc"],["Object.prototype.enable_floating","false"],["Nickles.Consent.show","noopFunc"],["Object.prototype.adPlayerId",""],["QiyiPlayerProphetData.a.data.originRes.adSlots","{}"],["QiyiPlayerProphetData.a.data.showResponse.slots","{}"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.startShow","noopFunc"],["Makeup.subscribePopup","undefined"],["floatingPlayer.isFloatingEnabled","false"],["Object.prototype.isFloatingEnabled","false"],["paywall","noopFunc"],["AdGlare","{}"],["aax_getad_mpb","false"],["waitTime","0"],["count","0"],["document.hasFocus","trueFunc"],["timer","0"],["Object.prototype.embedPlayer.autoplay","false"],["Object.prototype.minPlayingVisibleHeight",""],["counter","-1"],["segundos","0"],["Notification","undefined"],["timeSec","0"],["valid","1"],["isGGSurvey","true"],["enable_dl_after_countdown","true"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["wt","-1"],["app.window.isVisible","trueFunc"],["counter","0"],["window_focus","true"],["sec","0"],["Object.prototype.autoPlay","noopFunc"],["gsecs","0"],["seconde","-1"],["timeleft","0"],["waitSeconds","0"],["document.hidden","false"],["countdown","0"],["blurred","false"],["scrollTo","noopFunc"],["tempo2","0"],["snow","undefined"],["setblur","noopFunc"],["youtube","1"],["time","0"],["fiveSecs","0"],["ONTVminiatureBlocked","trueFunc"],["gazeta_pl.Player.FloatingPlayer.floatPlayer","noopFunc"],["width","100"],["waiting_time","0"],["Time_Start","0"],["Object.prototype.autoplay","0"],["document.oncontextmenu","null"],["document.onselectstart","null"],["document.ondragstart","null"],["disableEnterKey","noopFunc"],["disable_copy","noopFunc"],["disable_copy_ie","noopFunc"],["noCopy","noopFunc"],["addLink","noopFunc"],["rightClickOpenYn","false"],["autoSourcingYn","false"],["vidcheck","1"],["NewsSource.addSource","noopFunc"],["linkback.l","true"],["var7","0"],["window.B.Article.preventSelection","noopFunc"],["mug.viewer.protectPost","noopFunc"],["document.onkeypress","null"],["document.onkeydown","null"],["document.onmousedown","null"],["mouseClickRight","noopFunc"],["document.oncopy","undefined"],["Object.prototype.getFooterText","undefined"],["wrbm_gb.copyAlert","undefined"],["disableSelection","noopFunc"],["nocontext","noopFunc"],["onload","null"],["document.oncontextmenu","{}"],["MdpAppender","undefined"],["window.disableselect","noopFunc"],["document.onpaste","undefined"],["document.oncontextmenu","undefined"],["document.onselectstart","undefined"],["oncontextmenu","undefined"]];

const hostnamesMap = new Map([["scitechdaily.com",0],["zeberka.pl",1],["kozaczek.pl",1],["papilot.pl",1],["k2s.cc",2],["tezfiles.com",2],["fboom.me",2],["ultimedia.com",3],["hpplus.jp",4],["reuters.com",5],["nickles.de",6],["sports.iqiyi.com",7],["m.iqiyi.com",7],["iqiyi.com",[8,9,10,11]],["igeeksblog.com",12],["makeup.ru",13],["auto-swiat.pl",14],["przegladsportowy.onet.pl",14],["komputerswiat.pl",14],["businessinsider.com.pl",15],["fakt.pl",15],["plejada.pl",15],["medonet.pl",15],["onet.pl",15],["nextmgz.com",16],["nextmag.com.tw",16],["appledaily.com",16],["findamasters.com",17],["phoronix.com",18],["quesignifi.ca",19],["mdn.rest",19],["mcafee-com.com",[20,21]],["globlenews.in",20],["rontymobile.in",20],["revadvert.com",20],["mynewsmedia.co",20],["app.trangchu.news",20],["adfoc.us",20],["ffworld.xyz",20],["x86.co.kr",20],["kolaykisalt.com",20],["surfsees.com",20],["kisalt.xyz",20],["blog.carstopia.net",21],["blog.coinsvalue.net",21],["blog.cookinguide.net",21],["blog.freeoseocheck.com",21],["blog.makeupguide.net",21],["exactpay.online",21],["btcbitco.in",21],["btcsatoshi.net",21],["cempakajaya.com",21],["crypto4yu.com",21],["readbitcoin.org",21],["wiour.com",21],["mdn.lol",21],["m4cut.com",22],["pickhopes.com",22],["manga2day.com",22],["sport4you.net",22],["shardnat.tech",22],["dynamo.kiev.ua",23],["vp.rambler.ru",[24,38]],["tech24us.com",25],["udemycourses.me",25],["psychpoint.com",25],["goodssh.com",25],["criarjogosandroid.com",26],["makemoneywithurl.com",28],["shortit.pw",29],["ac-illust.com",[30,31]],["photo-ac.com",[30,31]],["player.vgtrk.com",32],["ebookmela.co.in",33],["destyy.com",34],["gestyy.com",34],["linksht.com",[35,36]],["icutlink.com",37],["fcportables.com",39],["mylink1.biz",40],["mylinks.xyz",40],["drosbraift.com",41],["anonymous-links.com",42],["sundryfiles.com",43],["cgtips.org",44],["easycut.io",45],["linkpoi.me",45],["adpayl.ink",45],["viewfr.com",45],["news.speedynews.xyz",45],["exeurl.com",45],["panyshort.link",45],["casperhd.com",45],["short2url.xyz",45],["exego.app",45],["rewayatcafe.com",45],["link4earn.com",45],["safelink.asia",45],["cravesandflames.com",45],["xpshort.com",45],["exalink.fun",45],["infotamizhan.xyz",45],["novelsapps.com",45],["cybertechng.com",45],["animerigel.com",45],["gainl.ink",45],["megaurl.in",45],["megafly.in",45],["linx.cc",45],["bitlk.com",45],["reqlinks.net",45],["rgl.vn",45],["youlink.ga",45],["wu8.in",45],["qlinks.eu",45],["upfilesurls.com",45],["mgnetu.com",45],["shorturl.unityassets4free.com",45],["financerites.in",45],["paid4file.com",45],["atglinks.com",45],["tii.la",45],["techsguy.com",45],["exeo.app",45],["smallinfo.in",45],["cutty.app",45],["adrinolinks.in",45],["shareus.site",45],["cut-y.co",45],["disheye.com",45],["enit.in",45],["veganab.co",45],["mdisklink.link",45],["kinemaster.cc",45],["short.freeltc.top",45],["faucetcrypto.net",45],["download.windowslite.net",45],["dlsite.win",45],["oko.sh",45],["ckk.ai",45],["ovlinks.com",45],["ier.ai",45],["links.medipost.org",45],["forex-trnd.com",45],["paylinnk.com",45],["adpps.com",45],["go.linkbnao.com",45],["baicho.xyz",45],["technemo.xyz",45],["adshorti.co",45],["loptelink.com",45],["crt.im",45],["mshort.top",45],["link-yz.com",45],["cut-y.net",45],["short2fly.xyz",45],["adslink.pw",45],["shortx.net",45],["du-link.in",45],["mozlink.net",45],["haonguyen.top",45],["pandaznetwork.com",45],["bestcash2020.com",45],["dash-free.com",45],["cekip.xyz",45],["cryptoon.xyz",45],["btcwalk.com",45],["vhorizads.com",45],["theconomy.me",45],["wealthystyle.online",45],["zlink.tk",45],["easysky.in",45],["techgeek.digital",45],["csd.xmod.in",45],["link.tokenoto.com",45],["skincarie.com",45],["shortie.link",45],["defaultfreeshort.in",45],["adsafelink.com",45],["linkshortify.site",45],["kolotoken.site",45],["powerclicks.xyz",45],["akashort.com",45],["rocklink.in",45],["insurance-space.xyz",45],["rajsayt.xyz",45],["insurglobal.xyz",45],["linkszia.co",45],["usanewstoday.club",45],["earnforclick.online",45],["tlin.me",45],["adlinkfly.wartakilat.com",45],["shorthero.site",45],["cutp.in",45],["clk.asia",45],["cookdov.com",45],["aylink.info",45],["adinsurance.xyz",45],["usdshort.com",45],["onroid.com",45],["filmyzilla-in.xyz",45],["sohexo.org",45],["zirof.com",45],["katflys.com",45],["samaa-pro.com",45],["earnme.club",45],["myshrinker.com",45],["seulink.online",45],["encurta.eu",45],["adurly.cc",45],["shorte.anxcinema.com",45],["nini08.com",45],["linkjust.com",45],["download.freestudyweb.com",45],["ultraten.net",45],["vrlinks.xyz",45],["crazyblog.in",45],["shortlink.prz.pw",45],["swzz.xyz",45],["mixfaucet.com",45],["getlink.tienichmaytinh.net",45],["adly.fun",45],["try2link.com",45],["go.netfile.cc",45],["fameen.xyz",45],["gameen.xyz",45],["yameen.xyz",45],["abre.click",45],["adcripto.com",45],["linkbr.xyz",45],["meulynk.com",45],["myad.biz",45],["baominh.tech",45],["bblink.com",45],["shortz.one",45],["newsalret.com",45],["clickscoin.com",45],["za.uy",45],["toptap.website",45],["gtlink.co",45],["upshrink.com",45],["gir.ist",45],["upfiles.io",45],["link.turkdown.com",45],["beingtek.com",45],["automotur.club",45],["insuranceblog.xyz",45],["coinadfly.com",45],["linkres.in",45],["link1s.com",45],["fire-link.net",45],["enagato.com",45],["dl.tech-story.net",45],["cpm10.org",45],["123link.biz",45],["rancah.com",45],["shrtvip.com",45],["linkerhub.tk",45],["kingurls.com",45],["download.sharenulled.net",45],["go.gets4link.com",45],["lucidcam.com",45],["clikern.com",45],["musicc.xyz",45],["pix4link.com",45],["zipurls.com",45],["theblissempire.com",45],["linkadshield.xyz",45],["xfiles.io",45],["upfiles.com",45],["zshort.cc",45],["filezipa.com",45],["arab-chat.club",45],["dz-linkk.com",45],["newshour.pw",45],["paidthe.site",45],["cslink.in",45],["jp88.xyz",45],["shortenmm.cf",45],["shrink.icu",45],["bevru.club",45],["bitlinks.pw",45],["hoastie.com",45],["arurio.club",45],["fclcc.com",45],["ptc.wtf",45],["tei.ai",45],["url4cut.xyz",45],["birdurls.com",45],["claimfreebits.com",45],["allcryptoz.net",45],["shrlink.top",45],["webshort.in",45],["coinsparty.mcrypto.club",45],["zshort.io",45],["eririo.club",45],["nerdy.vn",45],["jameeltips.us",45],["payskip.org",45],["freshi.site",45],["yxoshort.com",45],["pewgame.com",45],["sanos.xyz",45],["shrinkzzy.link",45],["srek.net",45],["shrinke.me",45],["foxseotools.com",45],["oncehelp.com",45],["earnwithshortlink.com",45],["enrt.eu",45],["tui.click",45],["adfloz.co",45],["shrx.in",45],["short.food-royal.com",45],["adpop.me",45],["galaxy-link.space",45],["link.ltc24.com",45],["kiiw.icu",45],["vshort.link",45],["adnit.xyz",45],["fwarycash.moviestar.fun",45],["linkebr.com",45],["bloggingguidance.com",45],["smoner.com",45],["charexempire.com",45],["cut-fly.com",45],["gplinks.co",45],["adomainscan.com",45],["bitmos.co.in",45],["cuts-url.com",45],["gainbtc.click",45],["profitlink.info",45],["artipedia.id",45],["gonety.com",45],["viraloc.com",45],["beautyram.info",45],["cashearn.cc",45],["go2.surf",45],["cryptoads.space",45],["adcorto.me",45],["modapk.link",45],["holaurl.com",45],["adbl.live",45],["miklpro.com",45],["kutt.io",45],["sanoybonito.club",45],["afly.pro",45],["cutlink.link",45],["short88.com",45],["pngit.live",45],["exe.app",45],["adsrt.click",45],["adcorto.xyz",45],["shortbled.com",45],["cuturl.in",45],["womenhaircolors.review",45],["srts.me",45],["paidtomoney.com",45],["lite-link.xyz",45],["apkshrt.com",45],["linkshorts.me",45],["androidnougatapk.com",45],["pureshort.link",45],["recipestutorials.com",45],["droplink.co",45],["tawiia.com",45],["exy.ai",45],["lite-link.com",45],["bdnewsx.com",45],["eio.io",45],["mealip.com",45],["earnfasts.com",45],["linksfire.co",45],["giscr.ac.th",45],["internewstv.com",45],["ivn3.com",45],["pslfive.com",45],["linksly.co",45],["illink.net",45],["coin.mg",45],["trinddz.com",45],["ilinks.in",45],["techupme.com",45],["bitfly.io",45],["earnguap.com",45],["news.techrfour.com",45],["shortzzy.in",45],["asiashort.link",45],["imagenesderopaparaperros.com",45],["c-ut.com",45],["toroox.com",45],["saungfirmware.id",45],["shrinkme.in",45],["fir3.net",45],["softairbay.com",45],["link1s.net",45],["cashurl.in",45],["doctor-groups.com",45],["bitcoinly.in",45],["clk.ink",45],["abdeo8.com",45],["apksvip.com",45],["gibit.xyz",45],["claimcrypto.cc",45],["btcdot.xyz",45],["pkr.pw",45],["shrinkbtc.cc",45],["todaynewspk.win",45],["manikusa.com",45],["try2link.net",45],["stfly.me",45],["dz4win.com",45],["real-sky.com",45],["bolssc.com",45],["short2.cash",45],["fx4vip.com",45],["cutdl.xyz",45],["shrinkurl.org",45],["mediumarticles.com",45],["asupload.com",45],["exee.io",45],["srt.leechpremium.link",45],["adsrt.live",45],["cheappath.com",45],["fcc.lc",45],["shorthitz.com",45],["savelink.site",45],["linkshorten.xyz",45],["tmearn.com",45],["samapro.me",45],["adsy.pw",45],["owllink.net",45],["mondainai.moe",45],["2ota.com",45],["popimed.com",45],["aii.sh",45],["sekilastekno.com",45],["miuiku.com",45],["articlix.com",45],["intothelink.com",45],["pingit.link",45],["slink.bid",45],["7r6.com",45],["loptelink.vip",45],["iir.ai",45],["biroads.com",45],["win10.vn",[45,52]],["mitly.us",45],["adsrt.net",45],["afly.us",45],["tii.ai",45],["linkviet.xyz",45],["coredp.com",45],["linkrex.net",45],["bit-url.com",45],["adsrt.org",45],["bestearnonline.com",45],["gamesrs.com",45],["shorten.sh",45],["ouofly.com",45],["clicksbee.com",45],["shorterall.com",45],["dutchycorp.space",45],["linkshrnk.com",45],["linkad.in",45],["fc.lc",45],["adslinkfly.online",45],["shrinkme.io",45],["imgqec.online",46],["imgwbfh.online",46],["imgyer.store",46],["imgxuh.cfd",46],["imgngc.sbs",46],["imgezx.sbs",46],["imgxza.store",46],["imgwqr.online",46],["tr3fit.xyz",47],["daz3d.ru",48],["translit.net",49],["translit.ru",49],["cheatsquad.gg",50],["file4go.com",51],["file4go.net",51],["bankier.pl",53],["claudia.pl",53],["dyskusje24.pl",53],["edziecko.pl",53],["haps.pl",53],["infozdrowie24.pl",53],["kobieta.pl",53],["moto.pl",53],["gazeta.pl",53],["tokfm.pl",[53,54]],["sport.pl",53],["plotek.pl",53],["cocoleech.com",55],["prem.link",56],["dl.pcgamestorrents.org",57],["get-url.com",57],["dailymotion.com",58],["t24.com.tr",58],["interface31.ru",[59,60]],["ktv.jp",59],["releasewitch.com",[59,62]],["news.ntv.co.jp",59],["novatoscans.top",59],["7days2die.info",[59,61]],["flying-lines.com",[59,60]],["fssp.gov.ru",[59,60]],["ilife97.com",[59,61]],["rdsong.com",[59,60]],["lubedk.com",[59,60,75,76]],["itempage3.auction.co.kr",59],["cdramalove.com",59],["10000recipe.com",59],["nike.com",[59,60]],["a2zapk.com",[59,61,62]],["fully-fundedscholarships.com",[59,61,62]],["shoneekapoor.com",59],["cda-hd.cc",[59,60,76]],["studysolve.online",[59,61,82]],["animeindia.in",[59,61,82]],["bufftoon.plaync.com",59],["studyguideindia.com",[59,77]],["codedosa.com",[59,61,62,63,64,82]],["newslibrary.naver.com",59],["insight.co.kr",[59,60,61]],["gamefinity.id",[59,61,84]],["cafe.naver.com",[59,60,61]],["half-musiq.blogspot.com",[60,77]],["tistory.com",[60,78,87]],["gradium.co.kr",[61,62,63,64,83]],["javsubtitle.co",62],["programasvirtualespc.net",62],["legionscans.com",62],["flinsetyadi.com",62],["theaircurrent.com",62],["now.rememberapp.co.kr",62],["semesters.in",[62,63,64,82,83]],["dora-guide.com",[63,64,83]],["uta-net.com",65],["lyricsondemand.com",66],["blog.naver.com",[67,68]],["dizilab9.com",69],["sedaily.com",70],["khan.co.kr",71],["hani.co.kr",71],["fmkorea.com",72],["brunch.co.kr",73],["post.naver.com",74],["fishki.net",79],["city-data.com",79],["patrika.com",[79,88]],["ogznet.com",79],["deepl.com",80],["foodnavigator.com",81],["digitalsynopsis.com",83],["electricalvoice.com",83],["nordkorea-info.de",85],["tunovelaligera.com",86],["runningnews.gr",87],["gaypornmasters.com",[89,90]],["gaypornwave.com",89],["sporx.com",89],["muharebetarihi.com",91]]);

const entitiesMap = new Map([["bildirim",27],["wplink",45],["adshort",45],["linkfly",45],["exey",45],["linkshorts",45],["bluemediafile",57],["bluemediafiles",57]]);

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
