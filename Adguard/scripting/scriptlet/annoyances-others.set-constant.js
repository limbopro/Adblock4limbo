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

const argsList = [["isGwd","true"],["Object.prototype.stickyEnabled","false"],["document.hasStorageAccess","undefined"],["dtkPlayer.infos.visible_plus","0"],["$.cookie","trueFunc"],["Object.prototype.enable_floating","false"],["Nickles.Consent.show","noopFunc"],["Object.prototype.adPlayerId",""],["QiyiPlayerProphetData.a.data.originRes.adSlots","{}"],["QiyiPlayerProphetData.a.data.showResponse.slots","{}"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.startShow","noopFunc"],["Makeup.subscribePopup","undefined"],["floatingPlayer.isFloatingEnabled","false"],["Object.prototype.isFloatingEnabled","false"],["paywall","noopFunc"],["AdGlare","{}"],["aax_getad_mpb","false"],["waitTime","0"],["count","0"],["document.hasFocus","trueFunc"],["timer","0"],["Object.prototype.embedPlayer.autoplay","false"],["Object.prototype.minPlayingVisibleHeight",""],["counter","-1"],["segundos","0"],["Notification","undefined"],["timeSec","0"],["valid","1"],["isGGSurvey","true"],["enable_dl_after_countdown","true"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["wt","-1"],["app.window.isVisible","trueFunc"],["counter","0"],["window_focus","true"],["sec","0"],["Object.prototype.autoPlay","noopFunc"],["gsecs","0"],["seconde","-1"],["timeleft","0"],["waitSeconds","0"],["document.hidden","false"],["countdown","0"],["Object.prototype.isPremium","true"],["blurred","false"],["scrollTo","noopFunc"],["tempo2","0"],["snow","undefined"],["setblur","noopFunc"],["youtube","1"],["time","0"],["fiveSecs","0"],["ONTVminiatureBlocked","trueFunc"],["gazeta_pl.Player.FloatingPlayer.floatPlayer","noopFunc"],["width","100"],["waiting_time","0"],["Time_Start","0"],["Object.prototype.autoplay","0"],["document.oncontextmenu","null"],["document.onselectstart","null"],["document.ondragstart","null"],["disableEnterKey","noopFunc"],["disable_copy","noopFunc"],["disable_copy_ie","noopFunc"],["noCopy","noopFunc"],["addLink","noopFunc"],["rightClickOpenYn","false"],["autoSourcingYn","false"],["vidcheck","1"],["NewsSource.addSource","noopFunc"],["linkback.l","true"],["var7","0"],["window.B.Article.preventSelection","noopFunc"],["mug.viewer.protectPost","noopFunc"],["document.onkeypress","null"],["document.onkeydown","null"],["document.onmousedown","null"],["mouseClickRight","noopFunc"],["document.oncopy","undefined"],["Object.prototype.getFooterText","undefined"],["wrbm_gb.copyAlert","undefined"],["disableSelection","noopFunc"],["nocontext","noopFunc"],["onload","null"],["document.oncontextmenu","{}"],["MdpAppender","undefined"],["window.disableselect","noopFunc"],["document.onpaste","undefined"],["document.oncontextmenu","undefined"],["document.onselectstart","undefined"],["oncontextmenu","undefined"]];

const hostnamesMap = new Map([["securityonline.info",0],["scitechdaily.com",0],["zeberka.pl",1],["kozaczek.pl",1],["papilot.pl",1],["k2s.cc",2],["tezfiles.com",2],["fboom.me",2],["ultimedia.com",3],["hpplus.jp",4],["reuters.com",5],["nickles.de",6],["sports.iqiyi.com",7],["m.iqiyi.com",7],["iqiyi.com",[8,9,10,11]],["igeeksblog.com",12],["makeup.ru",13],["auto-swiat.pl",14],["przegladsportowy.onet.pl",14],["komputerswiat.pl",14],["businessinsider.com.pl",15],["fakt.pl",15],["plejada.pl",15],["medonet.pl",15],["onet.pl",15],["nextmgz.com",16],["nextmag.com.tw",16],["appledaily.com",16],["findamasters.com",17],["phoronix.com",18],["antonimos.de",19],["quesignifi.ca",19],["mdn.rest",19],["mcafee-com.com",[20,21]],["serkarijobfind.com",20],["thenovbharattimes.com",20],["nokrimilegi.in",20],["kejriwalyojana.com",20],["netflixrelease.com",20],["mydomainscan.com",20],["onlinegratuitycalculator.com",20],["globlenews.in",20],["rontymobile.in",20],["revadvert.com",20],["mynewsmedia.co",20],["app.trangchu.news",20],["adfoc.us",20],["ffworld.xyz",20],["x86.co.kr",20],["kolaykisalt.com",20],["surfsees.com",20],["kisalt.xyz",20],["blog.carstopia.net",21],["blog.coinsvalue.net",21],["blog.cookinguide.net",21],["blog.freeoseocheck.com",21],["blog.makeupguide.net",21],["exactpay.online",21],["btcbitco.in",21],["btcsatoshi.net",21],["cempakajaya.com",21],["crypto4yu.com",21],["readbitcoin.org",21],["wiour.com",21],["mdn.lol",21],["m4cut.com",22],["pickhopes.com",22],["manga2day.com",22],["sport4you.net",22],["shardnat.tech",22],["dynamo.kiev.ua",23],["vp.rambler.ru",[24,38]],["tech24us.com",25],["udemycourses.me",25],["psychpoint.com",25],["goodssh.com",25],["criarjogosandroid.com",26],["makemoneywithurl.com",28],["shortit.pw",29],["ac-illust.com",[30,31]],["photo-ac.com",[30,31]],["player.vgtrk.com",32],["ebookmela.co.in",33],["destyy.com",34],["gestyy.com",34],["linksht.com",[35,36]],["icutlink.com",37],["fcportables.com",39],["mylink1.biz",40],["mylinks.xyz",40],["drosbraift.com",41],["anonymous-links.com",42],["sundryfiles.com",43],["cgtips.org",44],["surfline.com",45],["forextrader.site",46],["cutyurls.com",46],["linkmo.net",46],["doshrink.com",46],["link.almaftuchin.com",46],["easycut.io",46],["linkpoi.me",46],["adpayl.ink",46],["viewfr.com",46],["news.speedynews.xyz",46],["exeurl.com",46],["panyshort.link",46],["casperhd.com",46],["short2url.xyz",46],["exego.app",46],["rewayatcafe.com",46],["link4earn.com",46],["safelink.asia",46],["cravesandflames.com",46],["xpshort.com",46],["exalink.fun",46],["infotamizhan.xyz",46],["novelsapps.com",46],["cybertechng.com",46],["animerigel.com",46],["gainl.ink",46],["megaurl.in",46],["megafly.in",46],["linx.cc",46],["bitlk.com",46],["reqlinks.net",46],["rgl.vn",46],["youlink.ga",46],["wu8.in",46],["qlinks.eu",46],["upfilesurls.com",46],["mgnetu.com",46],["shorturl.unityassets4free.com",46],["financerites.in",46],["paid4file.com",46],["atglinks.com",46],["tii.la",46],["techsguy.com",46],["exeo.app",46],["smallinfo.in",46],["cutty.app",46],["adrinolinks.in",46],["shareus.site",46],["disheye.com",46],["enit.in",46],["veganab.co",46],["mdisklink.link",46],["kinemaster.cc",46],["short.freeltc.top",46],["faucetcrypto.net",46],["download.windowslite.net",46],["dlsite.win",46],["oko.sh",46],["ckk.ai",46],["ovlinks.com",46],["ier.ai",46],["links.medipost.org",46],["forex-trnd.com",46],["paylinnk.com",46],["adpps.com",46],["go.linkbnao.com",46],["baicho.xyz",46],["technemo.xyz",46],["adshorti.co",46],["loptelink.com",46],["crt.im",46],["mshort.top",46],["link-yz.com",46],["short2fly.xyz",46],["adslink.pw",46],["shortx.net",46],["du-link.in",46],["mozlink.net",46],["haonguyen.top",46],["pandaznetwork.com",46],["bestcash2020.com",46],["dash-free.com",46],["cekip.xyz",46],["cryptoon.xyz",46],["btcwalk.com",46],["vhorizads.com",46],["theconomy.me",46],["wealthystyle.online",46],["zlink.tk",46],["easysky.in",46],["techgeek.digital",46],["csd.xmod.in",46],["link.tokenoto.com",46],["skincarie.com",46],["shortie.link",46],["defaultfreeshort.in",46],["adsafelink.com",46],["linkshortify.site",46],["kolotoken.site",46],["powerclicks.xyz",46],["akashort.com",46],["rocklink.in",46],["insurance-space.xyz",46],["rajsayt.xyz",46],["insurglobal.xyz",46],["linkszia.co",46],["usanewstoday.club",46],["earnforclick.online",46],["tlin.me",46],["adlinkfly.wartakilat.com",46],["shorthero.site",46],["cutp.in",46],["clk.asia",46],["cookdov.com",46],["aylink.info",46],["adinsurance.xyz",46],["usdshort.com",46],["onroid.com",46],["filmyzilla-in.xyz",46],["sohexo.org",46],["zirof.com",46],["katflys.com",46],["samaa-pro.com",46],["earnme.club",46],["myshrinker.com",46],["seulink.online",46],["encurta.eu",46],["adurly.cc",46],["shorte.anxcinema.com",46],["nini08.com",46],["linkjust.com",46],["download.freestudyweb.com",46],["ultraten.net",46],["vrlinks.xyz",46],["crazyblog.in",46],["shortlink.prz.pw",46],["swzz.xyz",46],["mixfaucet.com",46],["getlink.tienichmaytinh.net",46],["adly.fun",46],["try2link.com",46],["go.netfile.cc",46],["fameen.xyz",46],["gameen.xyz",46],["yameen.xyz",46],["abre.click",46],["adcripto.com",46],["linkbr.xyz",46],["meulynk.com",46],["myad.biz",46],["baominh.tech",46],["bblink.com",46],["shortz.one",46],["newsalret.com",46],["clickscoin.com",46],["za.uy",46],["toptap.website",46],["gtlink.co",46],["upshrink.com",46],["gir.ist",46],["upfiles.io",46],["link.turkdown.com",46],["beingtek.com",46],["automotur.club",46],["insuranceblog.xyz",46],["coinadfly.com",46],["linkres.in",46],["link1s.com",46],["fire-link.net",46],["enagato.com",46],["dl.tech-story.net",46],["cpm10.org",46],["123link.biz",46],["rancah.com",46],["shrtvip.com",46],["linkerhub.tk",46],["kingurls.com",46],["download.sharenulled.net",46],["go.gets4link.com",46],["lucidcam.com",46],["clikern.com",46],["musicc.xyz",46],["pix4link.com",46],["zipurls.com",46],["theblissempire.com",46],["linkadshield.xyz",46],["xfiles.io",46],["upfiles.com",46],["zshort.cc",46],["filezipa.com",46],["arab-chat.club",46],["dz-linkk.com",46],["newshour.pw",46],["paidthe.site",46],["cslink.in",46],["jp88.xyz",46],["shortenmm.cf",46],["shrink.icu",46],["bevru.club",46],["bitlinks.pw",46],["hoastie.com",46],["arurio.club",46],["fclcc.com",46],["ptc.wtf",46],["tei.ai",46],["url4cut.xyz",46],["birdurls.com",46],["claimfreebits.com",46],["allcryptoz.net",46],["shrlink.top",46],["webshort.in",46],["coinsparty.mcrypto.club",46],["zshort.io",46],["eririo.club",46],["nerdy.vn",46],["jameeltips.us",46],["payskip.org",46],["freshi.site",46],["yxoshort.com",46],["pewgame.com",46],["sanos.xyz",46],["shrinkzzy.link",46],["srek.net",46],["shrinke.me",46],["foxseotools.com",46],["oncehelp.com",46],["earnwithshortlink.com",46],["enrt.eu",46],["tui.click",46],["adfloz.co",46],["shrx.in",46],["short.food-royal.com",46],["adpop.me",46],["galaxy-link.space",46],["link.ltc24.com",46],["kiiw.icu",46],["vshort.link",46],["adnit.xyz",46],["fwarycash.moviestar.fun",46],["linkebr.com",46],["bloggingguidance.com",46],["smoner.com",46],["charexempire.com",46],["cut-fly.com",46],["gplinks.co",46],["adomainscan.com",46],["bitmos.co.in",46],["cuts-url.com",46],["gainbtc.click",46],["profitlink.info",46],["artipedia.id",46],["gonety.com",46],["viraloc.com",46],["beautyram.info",46],["cashearn.cc",46],["go2.surf",46],["cryptoads.space",46],["adcorto.me",46],["modapk.link",46],["holaurl.com",46],["adbl.live",46],["miklpro.com",46],["kutt.io",46],["sanoybonito.club",46],["afly.pro",46],["cutlink.link",46],["short88.com",46],["pngit.live",46],["exe.app",46],["adsrt.click",46],["adcorto.xyz",46],["shortbled.com",46],["cuturl.in",46],["womenhaircolors.review",46],["srts.me",46],["paidtomoney.com",46],["lite-link.xyz",46],["apkshrt.com",46],["linkshorts.me",46],["androidnougatapk.com",46],["pureshort.link",46],["recipestutorials.com",46],["droplink.co",46],["tawiia.com",46],["exy.ai",46],["lite-link.com",46],["bdnewsx.com",46],["eio.io",46],["mealip.com",46],["earnfasts.com",46],["linksfire.co",46],["giscr.ac.th",46],["internewstv.com",46],["ivn3.com",46],["pslfive.com",46],["linksly.co",46],["illink.net",46],["coin.mg",46],["trinddz.com",46],["ilinks.in",46],["techupme.com",46],["bitfly.io",46],["earnguap.com",46],["news.techrfour.com",46],["shortzzy.in",46],["asiashort.link",46],["imagenesderopaparaperros.com",46],["c-ut.com",46],["toroox.com",46],["saungfirmware.id",46],["shrinkme.in",46],["fir3.net",46],["softairbay.com",46],["link1s.net",46],["cashurl.in",46],["doctor-groups.com",46],["bitcoinly.in",46],["clk.ink",46],["abdeo8.com",46],["apksvip.com",46],["gibit.xyz",46],["claimcrypto.cc",46],["btcdot.xyz",46],["pkr.pw",46],["shrinkbtc.cc",46],["todaynewspk.win",46],["manikusa.com",46],["try2link.net",46],["stfly.me",46],["dz4win.com",46],["real-sky.com",46],["bolssc.com",46],["short2.cash",46],["fx4vip.com",46],["cutdl.xyz",46],["shrinkurl.org",46],["mediumarticles.com",46],["asupload.com",46],["exee.io",46],["srt.leechpremium.link",46],["adsrt.live",46],["cheappath.com",46],["fcc.lc",46],["shorthitz.com",46],["savelink.site",46],["linkshorten.xyz",46],["tmearn.com",46],["samapro.me",46],["adsy.pw",46],["owllink.net",46],["mondainai.moe",46],["2ota.com",46],["popimed.com",46],["aii.sh",46],["sekilastekno.com",46],["miuiku.com",46],["articlix.com",46],["intothelink.com",46],["pingit.link",46],["slink.bid",46],["7r6.com",46],["loptelink.vip",46],["iir.ai",46],["biroads.com",46],["win10.vn",[46,53]],["mitly.us",46],["adsrt.net",46],["afly.us",46],["tii.ai",46],["linkviet.xyz",46],["coredp.com",46],["linkrex.net",46],["bit-url.com",46],["adsrt.org",46],["bestearnonline.com",46],["gamesrs.com",46],["shorten.sh",46],["ouofly.com",46],["clicksbee.com",46],["shorterall.com",46],["dutchycorp.space",46],["linkshrnk.com",46],["linkad.in",46],["fc.lc",46],["adslinkfly.online",46],["shrinkme.io",46],["imgqec.online",47],["imgwbfh.online",47],["imgyer.store",47],["imgxuh.cfd",47],["imgngc.sbs",47],["imgezx.sbs",47],["imgxza.store",47],["imgwqr.online",47],["tr3fit.xyz",48],["daz3d.ru",49],["translit.net",50],["translit.ru",50],["cheatsquad.gg",51],["file4go.com",52],["file4go.net",52],["bankier.pl",54],["claudia.pl",54],["dyskusje24.pl",54],["edziecko.pl",54],["haps.pl",54],["infozdrowie24.pl",54],["kobieta.pl",54],["moto.pl",54],["gazeta.pl",54],["tokfm.pl",[54,55]],["sport.pl",54],["plotek.pl",54],["cocoleech.com",56],["prem.link",57],["dl.pcgamestorrents.org",58],["get-url.com",58],["t24.com.tr",59],["interface31.ru",[60,61]],["ktv.jp",60],["releasewitch.com",[60,63]],["news.ntv.co.jp",60],["novatoscans.top",60],["7days2die.info",[60,62]],["flying-lines.com",[60,61]],["fssp.gov.ru",[60,61]],["ilife97.com",[60,62]],["rdsong.com",[60,61]],["lubedk.com",[60,61,76,77]],["itempage3.auction.co.kr",60],["cdramalove.com",60],["10000recipe.com",60],["nike.com",[60,61]],["a2zapk.com",[60,62,63]],["fully-fundedscholarships.com",[60,62,63]],["shoneekapoor.com",60],["cda-hd.cc",[60,61,77]],["studysolve.online",[60,62,83]],["animeindia.in",[60,62,83]],["bufftoon.plaync.com",60],["studyguideindia.com",[60,78]],["codedosa.com",[60,62,63,64,65,83]],["newslibrary.naver.com",60],["insight.co.kr",[60,61,62]],["gamefinity.id",[60,62,85]],["cafe.naver.com",[60,61,62]],["half-musiq.blogspot.com",[61,78]],["tistory.com",[61,79,88]],["gradium.co.kr",[62,63,64,65,84]],["javsubtitle.co",63],["programasvirtualespc.net",63],["legionscans.com",63],["flinsetyadi.com",63],["theaircurrent.com",63],["now.rememberapp.co.kr",63],["semesters.in",[63,64,65,83,84]],["dora-guide.com",[64,65,84]],["uta-net.com",66],["lyricsondemand.com",67],["blog.naver.com",[68,69]],["dizilab9.com",70],["sedaily.com",71],["khan.co.kr",72],["hani.co.kr",72],["fmkorea.com",73],["brunch.co.kr",74],["post.naver.com",75],["fishki.net",80],["city-data.com",80],["patrika.com",[80,89]],["ogznet.com",80],["deepl.com",81],["foodnavigator.com",82],["digitalsynopsis.com",84],["electricalvoice.com",84],["nordkorea-info.de",86],["tunovelaligera.com",87],["runningnews.gr",88],["gaypornmasters.com",[90,91]],["gaypornwave.com",90],["sporx.com",90],["muharebetarihi.com",92]]);

const entitiesMap = new Map([["bildirim",27],["wplink",46],["adshort",46],["linkfly",46],["exey",46],["linkshorts",46],["bluemediafile",58],["bluemediafiles",58]]);

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
                try { cValue = safe.JSON_parse(cValue).value; } catch(ex) { return; }
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
        'Array_from': Array.from,
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
        'JSON_parse': self.JSON.parse.bind(self.JSON),
        'JSON_stringify': self.JSON.stringify.bind(self.JSON),
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
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
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
