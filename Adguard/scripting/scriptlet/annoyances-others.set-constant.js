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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["ultimediaVisiblePlayer.scrollVisiblePlayer","noopFunc"],["isGwd","true"],["Object.prototype.stickyEnabled","false"],["document.hasStorageAccess","undefined"],["dtkPlayer.infos.visible_plus","0"],["$.cookie","trueFunc"],["Object.prototype.enable_floating","false"],["Nickles.Consent.show","noopFunc"],["Object.prototype.startShow","noopFunc"],["Makeup.subscribePopup","undefined"],["floatingPlayer.isFloatingEnabled","false"],["Object.prototype.isFloatingEnabled","false"],["paywall","noopFunc"],["AdGlare","{}"],["aax_getad_mpb","false"],["countDown","1"],["waitTime","0"],["count","0"],["document.hasFocus","trueFunc"],["timer","0"],["Object.prototype.embedPlayer.autoplay","false"],["Object.prototype.minPlayingVisibleHeight",""],["counter","-1"],["segundos","0"],["Notification","undefined"],["timeSec","0"],["valid","1"],["isGGSurvey","true"],["enable_dl_after_countdown","true"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["wt","-1"],["app.window.isVisible","trueFunc"],["counter","0"],["window_focus","true"],["sec","0"],["Object.prototype.autoPlay","noopFunc"],["gsecs","0"],["seconde","-1"],["timeleft","0"],["waitSeconds","0"],["document.hidden","false"],["countdown","0"],["Object.prototype.isPremium","true"],["blurred","false"],["scrollTo","noopFunc"],["tempo2","0"],["snow","undefined"],["setblur","noopFunc"],["youtube","1"],["time","0"],["fiveSecs","0"],["ONTVminiatureBlocked","trueFunc"],["width","100"],["waiting_time","0"],["Time_Start","0"],["Object.prototype.autoplay","0"],["document.oncontextmenu","null"],["document.onselectstart","null"],["document.ondragstart","null"],["disableEnterKey","noopFunc"],["disable_copy","noopFunc"],["disable_copy_ie","noopFunc"],["cancelContextMenu","noopFunc"],["noCopy","noopFunc"],["addLink","noopFunc"],["rightClickOpenYn","false"],["autoSourcingYn","false"],["vidcheck","1"],["NewsSource.addSource","noopFunc"],["linkback.l","true"],["var7","0"],["window.B.Article.preventSelection","noopFunc"],["mug.viewer.protectPost","noopFunc"],["document.onkeypress","null"],["document.onkeydown","null"],["document.onmousedown","null"],["mouseClickRight","noopFunc"],["document.oncopy","undefined"],["Object.prototype.getFooterText","undefined"],["wrbm_gb.copyAlert","undefined"],["disableSelection","noopFunc"],["nocontext","noopFunc"],["onload","null"],["document.oncontextmenu","{}"],["MdpAppender","undefined"],["window.disableselect","noopFunc"],["document.onpaste","undefined"],["document.oncontextmenu","undefined"],["document.onselectstart","undefined"],["oncontextmenu","undefined"]];

const hostnamesMap = new Map([["ouest-france.fr",0],["securityonline.info",1],["scitechdaily.com",1],["zeberka.pl",2],["kozaczek.pl",2],["papilot.pl",2],["k2s.cc",3],["tezfiles.com",3],["fboom.me",3],["ultimedia.com",4],["hpplus.jp",5],["reuters.com",6],["nickles.de",7],["igeeksblog.com",8],["makeup.ru",9],["auto-swiat.pl",10],["przegladsportowy.onet.pl",10],["komputerswiat.pl",[10,11]],["businessinsider.com.pl",11],["fakt.pl",11],["plejada.pl",11],["medonet.pl",11],["onet.pl",11],["nextmgz.com",12],["nextmag.com.tw",12],["appledaily.com",12],["findamasters.com",13],["phoronix.com",14],["anonymfile.com",15],["antonimos.de",16],["quesignifi.ca",16],["mdn.rest",16],["mcafee-com.com",[17,18]],["djrajurjm.in",17],["ojasnew.in",17],["myfirstname.in",17],["extraking.in",17],["mystudyhelp.in",17],["wwneed.com",17],["aditechz.com",17],["ccrushapp.com",17],["latestpikashowapk.com",17],["blog24.me",17],["onpointgame.net",17],["blogviewers.com",17],["satyaclub.in",17],["freemodapp.com",17],["howmany.co.in",17],["iwitnessnews.in",17],["jabigetjob.com",17],["kojnews.com",17],["serkarijobfind.com",17],["thenovbharattimes.com",17],["nokrimilegi.in",17],["kejriwalyojana.com",17],["netflixrelease.com",17],["mydomainscan.com",17],["onlinegratuitycalculator.com",17],["globlenews.in",17],["rontymobile.in",17],["revadvert.com",17],["mynewsmedia.co",17],["app.trangchu.news",17],["adfoc.us",17],["ffworld.xyz",17],["x86.co.kr",17],["kolaykisalt.com",17],["surfsees.com",17],["kisalt.xyz",17],["blog.carstopia.net",18],["blog.coinsvalue.net",18],["blog.cookinguide.net",18],["blog.freeoseocheck.com",18],["blog.makeupguide.net",18],["exactpay.online",18],["btcbitco.in",18],["btcsatoshi.net",18],["cempakajaya.com",18],["crypto4yu.com",18],["readbitcoin.org",18],["wiour.com",18],["mdn.lol",18],["m4cut.com",19],["pickhopes.com",19],["manga2day.com",19],["sport4you.net",19],["shardnat.tech",19],["dynamo.kiev.ua",20],["vp.rambler.ru",[21,35]],["tech24us.com",22],["udemycourses.me",22],["psychpoint.com",22],["goodssh.com",22],["criarjogosandroid.com",23],["makemoneywithurl.com",25],["shortit.pw",26],["ac-illust.com",[27,28]],["photo-ac.com",[27,28]],["player.vgtrk.com",29],["ebookmela.co.in",30],["destyy.com",31],["gestyy.com",31],["linksht.com",[32,33]],["icutlink.com",34],["fcportables.com",36],["mylink1.biz",37],["mylinks.xyz",37],["drosbraift.com",38],["anonymous-links.com",39],["sundryfiles.com",40],["cgtips.org",41],["surfline.com",42],["tinys.click",43],["kiddyshort.com",43],["cl1ca.com",43],["4br.me",43],["fir3.net",43],["link.paid4link.com",43],["forextrader.site",43],["cutyurls.com",43],["linkmo.net",43],["doshrink.com",43],["link.almaftuchin.com",43],["easycut.io",43],["linkpoi.me",43],["adpayl.ink",43],["viewfr.com",43],["news.speedynews.xyz",43],["exeurl.com",43],["panyshort.link",43],["casperhd.com",43],["short2url.xyz",43],["exego.app",43],["rewayatcafe.com",43],["link4earn.com",43],["safelink.asia",43],["cravesandflames.com",43],["xpshort.com",43],["exalink.fun",43],["infotamizhan.xyz",43],["novelsapps.com",43],["cybertechng.com",43],["animerigel.com",43],["gainl.ink",43],["megaurl.in",43],["megafly.in",43],["linx.cc",43],["bitlk.com",43],["reqlinks.net",43],["rgl.vn",43],["youlink.ga",43],["wu8.in",43],["qlinks.eu",43],["upfilesurls.com",43],["mgnetu.com",43],["shorturl.unityassets4free.com",43],["financerites.in",43],["paid4file.com",43],["atglinks.com",43],["tii.la",43],["techsguy.com",43],["exeo.app",43],["smallinfo.in",43],["cutty.app",43],["adrinolinks.in",43],["shareus.site",43],["disheye.com",43],["enit.in",43],["veganab.co",43],["mdisklink.link",43],["kinemaster.cc",43],["short.freeltc.top",43],["faucetcrypto.net",43],["download.windowslite.net",43],["dlsite.win",43],["oko.sh",43],["ckk.ai",43],["ovlinks.com",43],["ier.ai",43],["links.medipost.org",43],["forex-trnd.com",43],["paylinnk.com",43],["adpps.com",43],["go.linkbnao.com",43],["baicho.xyz",43],["technemo.xyz",43],["adshorti.co",43],["loptelink.com",43],["crt.im",43],["mshort.top",43],["link-yz.com",43],["short2fly.xyz",43],["adslink.pw",43],["shortx.net",43],["du-link.in",43],["mozlink.net",43],["haonguyen.top",43],["pandaznetwork.com",43],["bestcash2020.com",43],["dash-free.com",43],["cekip.xyz",43],["cryptoon.xyz",43],["btcwalk.com",43],["vhorizads.com",43],["theconomy.me",43],["wealthystyle.online",43],["zlink.tk",43],["easysky.in",43],["techgeek.digital",43],["csd.xmod.in",43],["link.tokenoto.com",43],["skincarie.com",43],["shortie.link",43],["defaultfreeshort.in",43],["adsafelink.com",43],["linkshortify.site",43],["kolotoken.site",43],["powerclicks.xyz",43],["akashort.com",43],["rocklink.in",43],["insurance-space.xyz",43],["rajsayt.xyz",43],["insurglobal.xyz",43],["linkszia.co",43],["usanewstoday.club",43],["earnforclick.online",43],["tlin.me",43],["adlinkfly.wartakilat.com",43],["shorthero.site",43],["cutp.in",43],["clk.asia",43],["cookdov.com",43],["aylink.info",43],["adinsurance.xyz",43],["usdshort.com",43],["onroid.com",43],["filmyzilla-in.xyz",43],["sohexo.org",43],["zirof.com",43],["katflys.com",43],["samaa-pro.com",43],["earnme.club",43],["myshrinker.com",43],["seulink.online",43],["encurta.eu",43],["adurly.cc",43],["shorte.anxcinema.com",43],["nini08.com",43],["linkjust.com",43],["download.freestudyweb.com",43],["ultraten.net",43],["vrlinks.xyz",43],["crazyblog.in",43],["shortlink.prz.pw",43],["swzz.xyz",43],["mixfaucet.com",43],["getlink.tienichmaytinh.net",43],["adly.fun",43],["try2link.com",43],["go.netfile.cc",43],["fameen.xyz",43],["gameen.xyz",43],["yameen.xyz",43],["abre.click",43],["adcripto.com",43],["linkbr.xyz",43],["meulynk.com",43],["myad.biz",43],["baominh.tech",43],["bblink.com",43],["shortz.one",43],["newsalret.com",43],["clickscoin.com",43],["za.uy",43],["toptap.website",43],["gtlink.co",43],["upshrink.com",43],["gir.ist",43],["upfiles.io",43],["link.turkdown.com",43],["beingtek.com",43],["automotur.club",43],["insuranceblog.xyz",43],["coinadfly.com",43],["linkres.in",43],["link1s.com",43],["fire-link.net",43],["enagato.com",43],["dl.tech-story.net",43],["cpm10.org",43],["123link.biz",43],["rancah.com",43],["shrtvip.com",43],["linkerhub.tk",43],["kingurls.com",43],["download.sharenulled.net",43],["go.gets4link.com",43],["lucidcam.com",43],["clikern.com",43],["musicc.xyz",43],["pix4link.com",43],["zipurls.com",43],["theblissempire.com",43],["linkadshield.xyz",43],["xfiles.io",43],["upfiles.com",43],["zshort.cc",43],["filezipa.com",43],["arab-chat.club",43],["dz-linkk.com",43],["newshour.pw",43],["paidthe.site",43],["cslink.in",43],["jp88.xyz",43],["shortenmm.cf",43],["shrink.icu",43],["bevru.club",43],["bitlinks.pw",43],["hoastie.com",43],["arurio.club",43],["fclcc.com",43],["ptc.wtf",43],["tei.ai",43],["url4cut.xyz",43],["birdurls.com",43],["claimfreebits.com",43],["allcryptoz.net",43],["shrlink.top",43],["webshort.in",43],["coinsparty.mcrypto.club",43],["zshort.io",43],["eririo.club",43],["nerdy.vn",43],["jameeltips.us",43],["payskip.org",43],["freshi.site",43],["yxoshort.com",43],["pewgame.com",43],["sanos.xyz",43],["shrinkzzy.link",43],["shrinke.me",43],["foxseotools.com",43],["oncehelp.com",43],["earnwithshortlink.com",43],["enrt.eu",43],["tui.click",43],["adfloz.co",43],["shrx.in",43],["short.food-royal.com",43],["adpop.me",43],["galaxy-link.space",43],["link.ltc24.com",43],["kiiw.icu",43],["vshort.link",43],["adnit.xyz",43],["fwarycash.moviestar.fun",43],["linkebr.com",43],["bloggingguidance.com",43],["smoner.com",43],["charexempire.com",43],["cut-fly.com",43],["gplinks.co",43],["adomainscan.com",43],["bitmos.co.in",43],["cuts-url.com",43],["gainbtc.click",43],["profitlink.info",43],["artipedia.id",43],["gonety.com",43],["viraloc.com",43],["beautyram.info",43],["cashearn.cc",43],["go2.surf",43],["cryptoads.space",43],["adcorto.me",43],["modapk.link",43],["holaurl.com",43],["adbl.live",43],["miklpro.com",43],["kutt.io",43],["sanoybonito.club",43],["afly.pro",43],["cutlink.link",43],["short88.com",43],["pngit.live",43],["exe.app",43],["adsrt.click",43],["adcorto.xyz",43],["shortbled.com",43],["cuturl.in",43],["womenhaircolors.review",43],["srts.me",43],["paidtomoney.com",43],["lite-link.xyz",43],["apkshrt.com",43],["linkshorts.me",43],["androidnougatapk.com",43],["pureshort.link",43],["recipestutorials.com",43],["droplink.co",43],["tawiia.com",43],["exy.ai",43],["lite-link.com",43],["bdnewsx.com",43],["eio.io",43],["mealip.com",43],["earnfasts.com",43],["linksfire.co",43],["giscr.ac.th",43],["internewstv.com",43],["ivn3.com",43],["pslfive.com",43],["linksly.co",43],["illink.net",43],["coin.mg",43],["trinddz.com",43],["ilinks.in",43],["techupme.com",43],["bitfly.io",43],["earnguap.com",43],["news.techrfour.com",43],["shortzzy.in",43],["asiashort.link",43],["imagenesderopaparaperros.com",43],["c-ut.com",43],["toroox.com",43],["saungfirmware.id",43],["shrinkme.in",43],["softairbay.com",43],["link1s.net",43],["cashurl.in",43],["doctor-groups.com",43],["bitcoinly.in",43],["clk.ink",43],["abdeo8.com",43],["apksvip.com",43],["gibit.xyz",43],["claimcrypto.cc",43],["btcdot.xyz",43],["pkr.pw",43],["shrinkbtc.cc",43],["todaynewspk.win",43],["manikusa.com",43],["try2link.net",43],["stfly.me",43],["dz4win.com",43],["real-sky.com",43],["bolssc.com",43],["short2.cash",43],["fx4vip.com",43],["cutdl.xyz",43],["shrinkurl.org",43],["mediumarticles.com",43],["asupload.com",43],["exee.io",43],["srt.leechpremium.link",43],["adsrt.live",43],["cheappath.com",43],["fcc.lc",43],["shorthitz.com",43],["savelink.site",43],["linkshorten.xyz",43],["tmearn.com",43],["samapro.me",43],["adsy.pw",43],["owllink.net",43],["mondainai.moe",43],["2ota.com",43],["popimed.com",43],["aii.sh",43],["sekilastekno.com",43],["miuiku.com",43],["articlix.com",43],["intothelink.com",43],["pingit.link",43],["slink.bid",43],["7r6.com",43],["loptelink.vip",43],["iir.ai",43],["biroads.com",43],["win10.vn",[43,50]],["mitly.us",43],["adsrt.net",43],["afly.us",43],["tii.ai",43],["linkviet.xyz",43],["coredp.com",43],["linkrex.net",43],["bit-url.com",43],["adsrt.org",43],["bestearnonline.com",43],["gamesrs.com",43],["ouofly.com",43],["clicksbee.com",43],["shorterall.com",43],["dutchycorp.space",43],["linkshrnk.com",43],["linkad.in",43],["fc.lc",43],["adslinkfly.online",43],["shrinkme.io",43],["imgqec.online",44],["imgwbfh.online",44],["imgyer.store",44],["imgxuh.cfd",44],["imgngc.sbs",44],["imgezx.sbs",44],["imgxza.store",44],["imgwqr.online",44],["tr3fit.xyz",45],["daz3d.ru",46],["translit.net",47],["translit.ru",47],["cheatsquad.gg",48],["file4go.com",49],["file4go.net",49],["bankier.pl",51],["claudia.pl",51],["dyskusje24.pl",51],["edziecko.pl",51],["haps.pl",51],["infozdrowie24.pl",51],["kobieta.pl",51],["moto.pl",51],["gazeta.pl",51],["tokfm.pl",51],["sport.pl",51],["plotek.pl",51],["cocoleech.com",52],["prem.link",53],["bluemedialink.online",54],["dl.pcgamestorrents.org",54],["get-url.com",54],["t24.com.tr",55],["filmzone.com",[56,57,74]],["interface31.ru",[56,57]],["ktv.jp",56],["releasewitch.com",[56,59]],["news.ntv.co.jp",56],["novatoscans.top",56],["7days2die.info",[56,58]],["flying-lines.com",[56,57]],["fssp.gov.ru",[56,57]],["ilife97.com",[56,58]],["rdsong.com",[56,57]],["lubedk.com",[56,57,73,74]],["itempage3.auction.co.kr",56],["cdramalove.com",56],["10000recipe.com",56],["nike.com",[56,57]],["a2zapk.com",[56,58,59]],["fully-fundedscholarships.com",[56,58,59]],["shoneekapoor.com",56],["cda-hd.cc",[56,57,74]],["studysolve.online",[56,58,80]],["animeindia.in",[56,58,80]],["bufftoon.plaync.com",56],["studyguideindia.com",[56,75]],["codedosa.com",[56,58,59,60,61,80]],["newslibrary.naver.com",56],["insight.co.kr",[56,57,58]],["gamefinity.id",[56,58,82]],["cafe.naver.com",[56,57,58]],["half-musiq.blogspot.com",[57,75]],["tistory.com",[57,76,85]],["gradium.co.kr",[58,59,60,61,81]],["javsubtitle.co",59],["programasvirtualespc.net",59],["legionscans.com",59],["flinsetyadi.com",59],["theaircurrent.com",59],["now.rememberapp.co.kr",59],["semesters.in",[59,60,61,80,81]],["dora-guide.com",[60,61,81]],["topsporter.net",62],["uta-net.com",63],["lyricsondemand.com",64],["blog.naver.com",[65,66]],["dizilab9.com",67],["sedaily.com",68],["khan.co.kr",69],["hani.co.kr",69],["fmkorea.com",70],["brunch.co.kr",71],["post.naver.com",72],["fishki.net",77],["city-data.com",77],["patrika.com",[77,86]],["ogznet.com",77],["deepl.com",78],["foodnavigator.com",79],["digitalsynopsis.com",81],["electricalvoice.com",81],["nordkorea-info.de",83],["tunovelaligera.com",84],["runningnews.gr",85],["gaypornmasters.com",[87,88]],["gaypornwave.com",87],["sporx.com",87],["muharebetarihi.com",89]]);

const entitiesMap = new Map([["bildirim",24],["seulink",43],["encurtalink",43],["wplink",43],["adshort",43],["linkfly",43],["exey",43],["linkshorts",43],["bluemediafile",54],["bluemediafiles",54]]);

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
