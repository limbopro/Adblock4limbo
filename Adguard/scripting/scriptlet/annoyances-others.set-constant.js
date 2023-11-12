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

const argsList = [["isGwd","true"],["Object.prototype.stickyEnabled","false"],["document.hasStorageAccess","undefined"],["dtkPlayer.infos.visible_plus","0"],["$.cookie","trueFunc"],["Object.prototype.enable_floating","false"],["Nickles.Consent.show","noopFunc"],["Object.prototype.startShow","noopFunc"],["Makeup.subscribePopup","undefined"],["floatingPlayer.isFloatingEnabled","false"],["Object.prototype.isFloatingEnabled","false"],["paywall","noopFunc"],["AdGlare","{}"],["aax_getad_mpb","false"],["waitTime","0"],["count","0"],["document.hasFocus","trueFunc"],["timer","0"],["Object.prototype.embedPlayer.autoplay","false"],["Object.prototype.minPlayingVisibleHeight",""],["counter","-1"],["segundos","0"],["Notification","undefined"],["timeSec","0"],["valid","1"],["isGGSurvey","true"],["enable_dl_after_countdown","true"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["wt","-1"],["app.window.isVisible","trueFunc"],["counter","0"],["window_focus","true"],["sec","0"],["Object.prototype.autoPlay","noopFunc"],["gsecs","0"],["seconde","-1"],["timeleft","0"],["waitSeconds","0"],["document.hidden","false"],["countdown","0"],["Object.prototype.isPremium","true"],["blurred","false"],["scrollTo","noopFunc"],["tempo2","0"],["snow","undefined"],["setblur","noopFunc"],["youtube","1"],["time","0"],["fiveSecs","0"],["ONTVminiatureBlocked","trueFunc"],["width","100"],["waiting_time","0"],["Time_Start","0"],["Object.prototype.autoplay","0"],["document.oncontextmenu","null"],["document.onselectstart","null"],["document.ondragstart","null"],["disableEnterKey","noopFunc"],["disable_copy","noopFunc"],["disable_copy_ie","noopFunc"],["noCopy","noopFunc"],["addLink","noopFunc"],["rightClickOpenYn","false"],["autoSourcingYn","false"],["vidcheck","1"],["NewsSource.addSource","noopFunc"],["linkback.l","true"],["var7","0"],["window.B.Article.preventSelection","noopFunc"],["mug.viewer.protectPost","noopFunc"],["document.onkeypress","null"],["document.onkeydown","null"],["document.onmousedown","null"],["mouseClickRight","noopFunc"],["document.oncopy","undefined"],["Object.prototype.getFooterText","undefined"],["wrbm_gb.copyAlert","undefined"],["disableSelection","noopFunc"],["nocontext","noopFunc"],["onload","null"],["document.oncontextmenu","{}"],["MdpAppender","undefined"],["window.disableselect","noopFunc"],["document.onpaste","undefined"],["document.oncontextmenu","undefined"],["document.onselectstart","undefined"],["oncontextmenu","undefined"]];

const hostnamesMap = new Map([["securityonline.info",0],["scitechdaily.com",0],["zeberka.pl",1],["kozaczek.pl",1],["papilot.pl",1],["k2s.cc",2],["tezfiles.com",2],["fboom.me",2],["ultimedia.com",3],["hpplus.jp",4],["reuters.com",5],["nickles.de",6],["igeeksblog.com",7],["makeup.ru",8],["auto-swiat.pl",9],["przegladsportowy.onet.pl",9],["komputerswiat.pl",9],["businessinsider.com.pl",10],["fakt.pl",10],["plejada.pl",10],["medonet.pl",10],["onet.pl",10],["nextmgz.com",11],["nextmag.com.tw",11],["appledaily.com",11],["findamasters.com",12],["phoronix.com",13],["antonimos.de",14],["quesignifi.ca",14],["mdn.rest",14],["mcafee-com.com",[15,16]],["blog24.me",15],["onpointgame.net",15],["blogviewers.com",15],["satyaclub.in",15],["freemodapp.com",15],["howmany.co.in",15],["iwitnessnews.in",15],["jabigetjob.com",15],["kojnews.com",15],["serkarijobfind.com",15],["thenovbharattimes.com",15],["nokrimilegi.in",15],["kejriwalyojana.com",15],["netflixrelease.com",15],["mydomainscan.com",15],["onlinegratuitycalculator.com",15],["globlenews.in",15],["rontymobile.in",15],["revadvert.com",15],["mynewsmedia.co",15],["app.trangchu.news",15],["adfoc.us",15],["ffworld.xyz",15],["x86.co.kr",15],["kolaykisalt.com",15],["surfsees.com",15],["kisalt.xyz",15],["blog.carstopia.net",16],["blog.coinsvalue.net",16],["blog.cookinguide.net",16],["blog.freeoseocheck.com",16],["blog.makeupguide.net",16],["exactpay.online",16],["btcbitco.in",16],["btcsatoshi.net",16],["cempakajaya.com",16],["crypto4yu.com",16],["readbitcoin.org",16],["wiour.com",16],["mdn.lol",16],["m4cut.com",17],["pickhopes.com",17],["manga2day.com",17],["sport4you.net",17],["shardnat.tech",17],["dynamo.kiev.ua",18],["vp.rambler.ru",[19,33]],["tech24us.com",20],["udemycourses.me",20],["psychpoint.com",20],["goodssh.com",20],["criarjogosandroid.com",21],["makemoneywithurl.com",23],["shortit.pw",24],["ac-illust.com",[25,26]],["photo-ac.com",[25,26]],["player.vgtrk.com",27],["ebookmela.co.in",28],["destyy.com",29],["gestyy.com",29],["linksht.com",[30,31]],["icutlink.com",32],["fcportables.com",34],["mylink1.biz",35],["mylinks.xyz",35],["drosbraift.com",36],["anonymous-links.com",37],["sundryfiles.com",38],["cgtips.org",39],["surfline.com",40],["cl1ca.com",41],["4br.me",41],["fir3.net",41],["link.paid4link.com",41],["forextrader.site",41],["cutyurls.com",41],["linkmo.net",41],["doshrink.com",41],["link.almaftuchin.com",41],["easycut.io",41],["linkpoi.me",41],["adpayl.ink",41],["viewfr.com",41],["news.speedynews.xyz",41],["exeurl.com",41],["panyshort.link",41],["casperhd.com",41],["short2url.xyz",41],["exego.app",41],["rewayatcafe.com",41],["link4earn.com",41],["safelink.asia",41],["cravesandflames.com",41],["xpshort.com",41],["exalink.fun",41],["infotamizhan.xyz",41],["novelsapps.com",41],["cybertechng.com",41],["animerigel.com",41],["gainl.ink",41],["megaurl.in",41],["megafly.in",41],["linx.cc",41],["bitlk.com",41],["reqlinks.net",41],["rgl.vn",41],["youlink.ga",41],["wu8.in",41],["qlinks.eu",41],["upfilesurls.com",41],["mgnetu.com",41],["shorturl.unityassets4free.com",41],["financerites.in",41],["paid4file.com",41],["atglinks.com",41],["tii.la",41],["techsguy.com",41],["exeo.app",41],["smallinfo.in",41],["cutty.app",41],["adrinolinks.in",41],["shareus.site",41],["disheye.com",41],["enit.in",41],["veganab.co",41],["mdisklink.link",41],["kinemaster.cc",41],["short.freeltc.top",41],["faucetcrypto.net",41],["download.windowslite.net",41],["dlsite.win",41],["oko.sh",41],["ckk.ai",41],["ovlinks.com",41],["ier.ai",41],["links.medipost.org",41],["forex-trnd.com",41],["paylinnk.com",41],["adpps.com",41],["go.linkbnao.com",41],["baicho.xyz",41],["technemo.xyz",41],["adshorti.co",41],["loptelink.com",41],["crt.im",41],["mshort.top",41],["link-yz.com",41],["short2fly.xyz",41],["adslink.pw",41],["shortx.net",41],["du-link.in",41],["mozlink.net",41],["haonguyen.top",41],["pandaznetwork.com",41],["bestcash2020.com",41],["dash-free.com",41],["cekip.xyz",41],["cryptoon.xyz",41],["btcwalk.com",41],["vhorizads.com",41],["theconomy.me",41],["wealthystyle.online",41],["zlink.tk",41],["easysky.in",41],["techgeek.digital",41],["csd.xmod.in",41],["link.tokenoto.com",41],["skincarie.com",41],["shortie.link",41],["defaultfreeshort.in",41],["adsafelink.com",41],["linkshortify.site",41],["kolotoken.site",41],["powerclicks.xyz",41],["akashort.com",41],["rocklink.in",41],["insurance-space.xyz",41],["rajsayt.xyz",41],["insurglobal.xyz",41],["linkszia.co",41],["usanewstoday.club",41],["earnforclick.online",41],["tlin.me",41],["adlinkfly.wartakilat.com",41],["shorthero.site",41],["cutp.in",41],["clk.asia",41],["cookdov.com",41],["aylink.info",41],["adinsurance.xyz",41],["usdshort.com",41],["onroid.com",41],["filmyzilla-in.xyz",41],["sohexo.org",41],["zirof.com",41],["katflys.com",41],["samaa-pro.com",41],["earnme.club",41],["myshrinker.com",41],["seulink.online",41],["encurta.eu",41],["adurly.cc",41],["shorte.anxcinema.com",41],["nini08.com",41],["linkjust.com",41],["download.freestudyweb.com",41],["ultraten.net",41],["vrlinks.xyz",41],["crazyblog.in",41],["shortlink.prz.pw",41],["swzz.xyz",41],["mixfaucet.com",41],["getlink.tienichmaytinh.net",41],["adly.fun",41],["try2link.com",41],["go.netfile.cc",41],["fameen.xyz",41],["gameen.xyz",41],["yameen.xyz",41],["abre.click",41],["adcripto.com",41],["linkbr.xyz",41],["meulynk.com",41],["myad.biz",41],["baominh.tech",41],["bblink.com",41],["shortz.one",41],["newsalret.com",41],["clickscoin.com",41],["za.uy",41],["toptap.website",41],["gtlink.co",41],["upshrink.com",41],["gir.ist",41],["upfiles.io",41],["link.turkdown.com",41],["beingtek.com",41],["automotur.club",41],["insuranceblog.xyz",41],["coinadfly.com",41],["linkres.in",41],["link1s.com",41],["fire-link.net",41],["enagato.com",41],["dl.tech-story.net",41],["cpm10.org",41],["123link.biz",41],["rancah.com",41],["shrtvip.com",41],["linkerhub.tk",41],["kingurls.com",41],["download.sharenulled.net",41],["go.gets4link.com",41],["lucidcam.com",41],["clikern.com",41],["musicc.xyz",41],["pix4link.com",41],["zipurls.com",41],["theblissempire.com",41],["linkadshield.xyz",41],["xfiles.io",41],["upfiles.com",41],["zshort.cc",41],["filezipa.com",41],["arab-chat.club",41],["dz-linkk.com",41],["newshour.pw",41],["paidthe.site",41],["cslink.in",41],["jp88.xyz",41],["shortenmm.cf",41],["shrink.icu",41],["bevru.club",41],["bitlinks.pw",41],["hoastie.com",41],["arurio.club",41],["fclcc.com",41],["ptc.wtf",41],["tei.ai",41],["url4cut.xyz",41],["birdurls.com",41],["claimfreebits.com",41],["allcryptoz.net",41],["shrlink.top",41],["webshort.in",41],["coinsparty.mcrypto.club",41],["zshort.io",41],["eririo.club",41],["nerdy.vn",41],["jameeltips.us",41],["payskip.org",41],["freshi.site",41],["yxoshort.com",41],["pewgame.com",41],["sanos.xyz",41],["shrinkzzy.link",41],["srek.net",41],["shrinke.me",41],["foxseotools.com",41],["oncehelp.com",41],["earnwithshortlink.com",41],["enrt.eu",41],["tui.click",41],["adfloz.co",41],["shrx.in",41],["short.food-royal.com",41],["adpop.me",41],["galaxy-link.space",41],["link.ltc24.com",41],["kiiw.icu",41],["vshort.link",41],["adnit.xyz",41],["fwarycash.moviestar.fun",41],["linkebr.com",41],["bloggingguidance.com",41],["smoner.com",41],["charexempire.com",41],["cut-fly.com",41],["gplinks.co",41],["adomainscan.com",41],["bitmos.co.in",41],["cuts-url.com",41],["gainbtc.click",41],["profitlink.info",41],["artipedia.id",41],["gonety.com",41],["viraloc.com",41],["beautyram.info",41],["cashearn.cc",41],["go2.surf",41],["cryptoads.space",41],["adcorto.me",41],["modapk.link",41],["holaurl.com",41],["adbl.live",41],["miklpro.com",41],["kutt.io",41],["sanoybonito.club",41],["afly.pro",41],["cutlink.link",41],["short88.com",41],["pngit.live",41],["exe.app",41],["adsrt.click",41],["adcorto.xyz",41],["shortbled.com",41],["cuturl.in",41],["womenhaircolors.review",41],["srts.me",41],["paidtomoney.com",41],["lite-link.xyz",41],["apkshrt.com",41],["linkshorts.me",41],["androidnougatapk.com",41],["pureshort.link",41],["recipestutorials.com",41],["droplink.co",41],["tawiia.com",41],["exy.ai",41],["lite-link.com",41],["bdnewsx.com",41],["eio.io",41],["mealip.com",41],["earnfasts.com",41],["linksfire.co",41],["giscr.ac.th",41],["internewstv.com",41],["ivn3.com",41],["pslfive.com",41],["linksly.co",41],["illink.net",41],["coin.mg",41],["trinddz.com",41],["ilinks.in",41],["techupme.com",41],["bitfly.io",41],["earnguap.com",41],["news.techrfour.com",41],["shortzzy.in",41],["asiashort.link",41],["imagenesderopaparaperros.com",41],["c-ut.com",41],["toroox.com",41],["saungfirmware.id",41],["shrinkme.in",41],["softairbay.com",41],["link1s.net",41],["cashurl.in",41],["doctor-groups.com",41],["bitcoinly.in",41],["clk.ink",41],["abdeo8.com",41],["apksvip.com",41],["gibit.xyz",41],["claimcrypto.cc",41],["btcdot.xyz",41],["pkr.pw",41],["shrinkbtc.cc",41],["todaynewspk.win",41],["manikusa.com",41],["try2link.net",41],["stfly.me",41],["dz4win.com",41],["real-sky.com",41],["bolssc.com",41],["short2.cash",41],["fx4vip.com",41],["cutdl.xyz",41],["shrinkurl.org",41],["mediumarticles.com",41],["asupload.com",41],["exee.io",41],["srt.leechpremium.link",41],["adsrt.live",41],["cheappath.com",41],["fcc.lc",41],["shorthitz.com",41],["savelink.site",41],["linkshorten.xyz",41],["tmearn.com",41],["samapro.me",41],["adsy.pw",41],["owllink.net",41],["mondainai.moe",41],["2ota.com",41],["popimed.com",41],["aii.sh",41],["sekilastekno.com",41],["miuiku.com",41],["articlix.com",41],["intothelink.com",41],["pingit.link",41],["slink.bid",41],["7r6.com",41],["loptelink.vip",41],["iir.ai",41],["biroads.com",41],["win10.vn",[41,48]],["mitly.us",41],["adsrt.net",41],["afly.us",41],["tii.ai",41],["linkviet.xyz",41],["coredp.com",41],["linkrex.net",41],["bit-url.com",41],["adsrt.org",41],["bestearnonline.com",41],["gamesrs.com",41],["shorten.sh",41],["ouofly.com",41],["clicksbee.com",41],["shorterall.com",41],["dutchycorp.space",41],["linkshrnk.com",41],["linkad.in",41],["fc.lc",41],["adslinkfly.online",41],["shrinkme.io",41],["imgqec.online",42],["imgwbfh.online",42],["imgyer.store",42],["imgxuh.cfd",42],["imgngc.sbs",42],["imgezx.sbs",42],["imgxza.store",42],["imgwqr.online",42],["tr3fit.xyz",43],["daz3d.ru",44],["translit.net",45],["translit.ru",45],["cheatsquad.gg",46],["file4go.com",47],["file4go.net",47],["bankier.pl",49],["claudia.pl",49],["dyskusje24.pl",49],["edziecko.pl",49],["haps.pl",49],["infozdrowie24.pl",49],["kobieta.pl",49],["moto.pl",49],["gazeta.pl",49],["tokfm.pl",49],["sport.pl",49],["plotek.pl",49],["cocoleech.com",50],["prem.link",51],["dl.pcgamestorrents.org",52],["get-url.com",52],["t24.com.tr",53],["interface31.ru",[54,55]],["ktv.jp",54],["releasewitch.com",[54,57]],["news.ntv.co.jp",54],["novatoscans.top",54],["7days2die.info",[54,56]],["flying-lines.com",[54,55]],["fssp.gov.ru",[54,55]],["ilife97.com",[54,56]],["rdsong.com",[54,55]],["lubedk.com",[54,55,70,71]],["itempage3.auction.co.kr",54],["cdramalove.com",54],["10000recipe.com",54],["nike.com",[54,55]],["a2zapk.com",[54,56,57]],["fully-fundedscholarships.com",[54,56,57]],["shoneekapoor.com",54],["cda-hd.cc",[54,55,71]],["studysolve.online",[54,56,77]],["animeindia.in",[54,56,77]],["bufftoon.plaync.com",54],["studyguideindia.com",[54,72]],["codedosa.com",[54,56,57,58,59,77]],["newslibrary.naver.com",54],["insight.co.kr",[54,55,56]],["gamefinity.id",[54,56,79]],["cafe.naver.com",[54,55,56]],["half-musiq.blogspot.com",[55,72]],["tistory.com",[55,73,82]],["gradium.co.kr",[56,57,58,59,78]],["javsubtitle.co",57],["programasvirtualespc.net",57],["legionscans.com",57],["flinsetyadi.com",57],["theaircurrent.com",57],["now.rememberapp.co.kr",57],["semesters.in",[57,58,59,77,78]],["dora-guide.com",[58,59,78]],["uta-net.com",60],["lyricsondemand.com",61],["blog.naver.com",[62,63]],["dizilab9.com",64],["sedaily.com",65],["khan.co.kr",66],["hani.co.kr",66],["fmkorea.com",67],["brunch.co.kr",68],["post.naver.com",69],["fishki.net",74],["city-data.com",74],["patrika.com",[74,83]],["ogznet.com",74],["deepl.com",75],["foodnavigator.com",76],["digitalsynopsis.com",78],["electricalvoice.com",78],["nordkorea-info.de",80],["tunovelaligera.com",81],["runningnews.gr",82],["gaypornmasters.com",[84,85]],["gaypornwave.com",84],["sporx.com",84],["muharebetarihi.com",86]]);

const entitiesMap = new Map([["bildirim",22],["seulink",41],["encurtalink",41],["wplink",41],["adshort",41],["linkfly",41],["exey",41],["linkshorts",41],["bluemediafile",52],["bluemediafiles",52]]);

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
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
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
