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

const argsList = [["ultimediaVisiblePlayer.scrollVisiblePlayer","noopFunc"],["Taplytics","{}"],["Taplytics.featureFlagEnabled","trueFunc"],["isGwd","true"],["Object.prototype.stickyEnabled","false"],["document.hasStorageAccess","undefined"],["dtkPlayer.infos.visible_plus","0"],["$.cookie","trueFunc"],["Object.prototype.enable_floating","false"],["Nickles.Consent.show","noopFunc"],["Object.prototype.startShow","noopFunc"],["Makeup.subscribePopup","undefined"],["floatingPlayer.isFloatingEnabled","false"],["Object.prototype.isFloatingEnabled","false"],["paywall","noopFunc"],["AdGlare","{}"],["aax_getad_mpb","false"],["document.hasFocus","trueFunc"],["waktu","-1"],["countDown","1"],["waitTime","0"],["count","0"],["timer","0"],["Object.prototype.embedPlayer.autoplay","false"],["Object.prototype.minPlayingVisibleHeight",""],["counter","-1"],["segundos","0"],["Notification","undefined"],["timeSec","0"],["valid","1"],["isGGSurvey","true"],["enable_dl_after_countdown","true"],["Object.prototype.IS_CHECK_REGISTRATION","false"],["wt","-1"],["app.window.isVisible","trueFunc"],["counter","0"],["window_focus","true"],["sec","0"],["Object.prototype.autoPlay","noopFunc"],["gsecs","0"],["seconde","-1"],["timeleft","0"],["waitSeconds","0"],["document.hidden","false"],["countdown","0"],["Object.prototype.isPremium","true"],["blurred","false"],["scrollTo","noopFunc"],["tempo2","0"],["snow","undefined"],["setblur","noopFunc"],["youtube","1"],["time","0"],["fiveSecs","0"],["ONTVminiatureBlocked","trueFunc"],["width","100"],["waiting_time","0"],["Time_Start","0"],["Object.prototype.autoplay","0"],["document.oncontextmenu","null"],["document.onselectstart","null"],["document.ondragstart","null"],["disableEnterKey","noopFunc"],["disable_copy","noopFunc"],["disable_copy_ie","noopFunc"],["cancelContextMenu","noopFunc"],["noCopy","noopFunc"],["addLink","noopFunc"],["rightClickOpenYn","false"],["autoSourcingYn","false"],["vidcheck","1"],["NewsSource.addSource","noopFunc"],["linkback.l","true"],["var7","0"],["window.B.Article.preventSelection","noopFunc"],["mug.viewer.protectPost","noopFunc"],["document.onkeypress","null"],["document.onkeydown","null"],["document.onmousedown","null"],["mouseClickRight","noopFunc"],["document.oncopy","undefined"],["Object.prototype.getFooterText","undefined"],["wrbm_gb.copyAlert","undefined"],["disableSelection","noopFunc"],["nocontext","noopFunc"],["onload","null"],["document.oncontextmenu","{}"],["MdpAppender","undefined"],["window.disableselect","noopFunc"],["document.onpaste","undefined"],["document.oncontextmenu","undefined"],["document.onselectstart","undefined"],["oncontextmenu","undefined"]];

const hostnamesMap = new Map([["lest-eclair.fr",0],["ouest-france.fr",0],["foxnews.com",[1,2]],["securityonline.info",3],["scitechdaily.com",3],["zeberka.pl",4],["kozaczek.pl",4],["papilot.pl",4],["k2s.cc",5],["tezfiles.com",5],["fboom.me",5],["ultimedia.com",6],["hpplus.jp",7],["reuters.com",8],["nickles.de",9],["igeeksblog.com",10],["makeup.ru",11],["auto-swiat.pl",12],["przegladsportowy.onet.pl",12],["komputerswiat.pl",[12,13]],["businessinsider.com.pl",13],["fakt.pl",13],["plejada.pl",13],["medonet.pl",13],["onet.pl",13],["nextmgz.com",14],["nextmag.com.tw",14],["appledaily.com",14],["findamasters.com",15],["phoronix.com",16],["exactpay.online",17],["btcbitco.in",17],["btcsatoshi.net",17],["cempakajaya.com",17],["crypto4yu.com",17],["readbitcoin.org",17],["wiour.com",17],["mdn.lol",17],["mcafee-com.com",[17,21]],["exego.app",[17,46]],["blog.carstopia.net",17],["blog.coinsvalue.net",17],["blog.cookinguide.net",17],["blog.freeoseocheck.com",17],["blog.makeupguide.net",17],["modapkvn.com",18],["apkmodvn.com",18],["anonymfile.com",19],["antonimos.de",20],["quesignifi.ca",20],["mdn.rest",20],["1stepforlife.in",21],["djrajurjm.in",21],["ojasnew.in",21],["myfirstname.in",21],["extraking.in",21],["mystudyhelp.in",21],["wwneed.com",21],["aditechz.com",21],["ccrushapp.com",21],["latestpikashowapk.com",21],["blog24.me",21],["onpointgame.net",21],["blogviewers.com",21],["satyaclub.in",21],["freemodapp.com",21],["howmany.co.in",21],["iwitnessnews.in",21],["jabigetjob.com",21],["nokrimilegi.in",21],["kejriwalyojana.com",21],["netflixrelease.com",21],["onlinegratuitycalculator.com",21],["globlenews.in",21],["rontymobile.in",21],["revadvert.com",21],["app.trangchu.news",21],["adfoc.us",21],["ffworld.xyz",21],["x86.co.kr",21],["kolaykisalt.com",21],["surfsees.com",21],["kisalt.xyz",21],["m4cut.com",22],["pickhopes.com",22],["manga2day.com",22],["sport4you.net",22],["shardnat.tech",22],["dynamo.kiev.ua",23],["vp.rambler.ru",[24,38]],["tech24us.com",25],["udemycourses.me",25],["psychpoint.com",25],["goodssh.com",25],["criarjogosandroid.com",26],["makemoneywithurl.com",28],["shortit.pw",29],["ac-illust.com",[30,31]],["photo-ac.com",[30,31]],["player.vgtrk.com",32],["ebookmela.co.in",33],["destyy.com",34],["gestyy.com",34],["linksht.com",[35,36]],["icutlink.com",37],["fcportables.com",39],["mylink1.biz",40],["mylinks.xyz",40],["drosbraift.com",41],["anonymous-links.com",42],["sundryfiles.com",43],["cgtips.org",44],["surfline.com",45],["yoykp.com",46],["pwrpa.cc",46],["tinys.click",46],["kiddyshort.com",46],["cl1ca.com",46],["4br.me",46],["fir3.net",46],["link.paid4link.com",46],["forextrader.site",46],["cutyurls.com",46],["linkmo.net",46],["doshrink.com",46],["link.almaftuchin.com",46],["easycut.io",46],["linkpoi.me",46],["adpayl.ink",46],["viewfr.com",46],["news.speedynews.xyz",46],["exeurl.com",46],["panyshort.link",46],["casperhd.com",46],["short2url.xyz",46],["rewayatcafe.com",46],["link4earn.com",46],["safelink.asia",46],["cravesandflames.com",46],["xpshort.com",46],["exalink.fun",46],["infotamizhan.xyz",46],["novelsapps.com",46],["cybertechng.com",46],["animerigel.com",46],["gainl.ink",46],["megaurl.in",46],["megafly.in",46],["linx.cc",46],["bitlk.com",46],["reqlinks.net",46],["rgl.vn",46],["youlink.ga",46],["wu8.in",46],["qlinks.eu",46],["upfilesurls.com",46],["mgnetu.com",46],["shorturl.unityassets4free.com",46],["financerites.in",46],["paid4file.com",46],["atglinks.com",46],["tii.la",46],["techsguy.com",46],["exeo.app",46],["smallinfo.in",46],["cutty.app",46],["adrinolinks.in",46],["shareus.site",46],["disheye.com",46],["enit.in",46],["veganab.co",46],["mdisklink.link",46],["kinemaster.cc",46],["short.freeltc.top",46],["faucetcrypto.net",46],["download.windowslite.net",46],["dlsite.win",46],["oko.sh",46],["ckk.ai",46],["ovlinks.com",46],["ier.ai",46],["links.medipost.org",46],["forex-trnd.com",46],["paylinnk.com",46],["adpps.com",46],["go.linkbnao.com",46],["baicho.xyz",46],["technemo.xyz",46],["adshorti.co",46],["loptelink.com",46],["crt.im",46],["mshort.top",46],["link-yz.com",46],["short2fly.xyz",46],["adslink.pw",46],["shortx.net",46],["du-link.in",46],["mozlink.net",46],["haonguyen.top",46],["pandaznetwork.com",46],["bestcash2020.com",46],["dash-free.com",46],["cekip.xyz",46],["cryptoon.xyz",46],["btcwalk.com",46],["vhorizads.com",46],["theconomy.me",46],["wealthystyle.online",46],["zlink.tk",46],["easysky.in",46],["techgeek.digital",46],["csd.xmod.in",46],["link.tokenoto.com",46],["skincarie.com",46],["shortie.link",46],["defaultfreeshort.in",46],["adsafelink.com",46],["linkshortify.site",46],["kolotoken.site",46],["powerclicks.xyz",46],["akashort.com",46],["rocklink.in",46],["insurance-space.xyz",46],["rajsayt.xyz",46],["insurglobal.xyz",46],["linkszia.co",46],["usanewstoday.club",46],["earnforclick.online",46],["tlin.me",46],["adlinkfly.wartakilat.com",46],["shorthero.site",46],["cutp.in",46],["clk.asia",46],["cookdov.com",46],["aylink.info",46],["adinsurance.xyz",46],["usdshort.com",46],["onroid.com",46],["filmyzilla-in.xyz",46],["sohexo.org",46],["zirof.com",46],["katflys.com",46],["samaa-pro.com",46],["earnme.club",46],["myshrinker.com",46],["seulink.online",46],["encurta.eu",46],["adurly.cc",46],["shorte.anxcinema.com",46],["nini08.com",46],["linkjust.com",46],["download.freestudyweb.com",46],["ultraten.net",46],["vrlinks.xyz",46],["crazyblog.in",46],["shortlink.prz.pw",46],["swzz.xyz",46],["mixfaucet.com",46],["getlink.tienichmaytinh.net",46],["adly.fun",46],["try2link.com",46],["go.netfile.cc",46],["fameen.xyz",46],["gameen.xyz",46],["yameen.xyz",46],["abre.click",46],["adcripto.com",46],["linkbr.xyz",46],["meulynk.com",46],["myad.biz",46],["baominh.tech",46],["bblink.com",46],["shortz.one",46],["newsalret.com",46],["clickscoin.com",46],["za.uy",46],["toptap.website",46],["gtlink.co",46],["upshrink.com",46],["gir.ist",46],["upfiles.io",46],["link.turkdown.com",46],["beingtek.com",46],["automotur.club",46],["insuranceblog.xyz",46],["coinadfly.com",46],["linkres.in",46],["link1s.com",46],["fire-link.net",46],["enagato.com",46],["dl.tech-story.net",46],["cpm10.org",46],["123link.biz",46],["rancah.com",46],["shrtvip.com",46],["linkerhub.tk",46],["kingurls.com",46],["download.sharenulled.net",46],["go.gets4link.com",46],["lucidcam.com",46],["clikern.com",46],["musicc.xyz",46],["pix4link.com",46],["zipurls.com",46],["theblissempire.com",46],["linkadshield.xyz",46],["xfiles.io",46],["upfiles.com",46],["zshort.cc",46],["filezipa.com",46],["arab-chat.club",46],["dz-linkk.com",46],["newshour.pw",46],["paidthe.site",46],["cslink.in",46],["jp88.xyz",46],["shortenmm.cf",46],["shrink.icu",46],["bevru.club",46],["bitlinks.pw",46],["hoastie.com",46],["arurio.club",46],["fclcc.com",46],["ptc.wtf",46],["tei.ai",46],["url4cut.xyz",46],["birdurls.com",46],["claimfreebits.com",46],["allcryptoz.net",46],["shrlink.top",46],["webshort.in",46],["coinsparty.mcrypto.club",46],["zshort.io",46],["eririo.club",46],["nerdy.vn",46],["jameeltips.us",46],["payskip.org",46],["freshi.site",46],["yxoshort.com",46],["pewgame.com",46],["sanos.xyz",46],["shrinkzzy.link",46],["shrinke.me",46],["foxseotools.com",46],["oncehelp.com",46],["earnwithshortlink.com",46],["enrt.eu",46],["tui.click",46],["adfloz.co",46],["shrx.in",46],["short.food-royal.com",46],["adpop.me",46],["galaxy-link.space",46],["link.ltc24.com",46],["kiiw.icu",46],["vshort.link",46],["adnit.xyz",46],["fwarycash.moviestar.fun",46],["linkebr.com",46],["bloggingguidance.com",46],["smoner.com",46],["charexempire.com",46],["cut-fly.com",46],["gplinks.co",46],["adomainscan.com",46],["bitmos.co.in",46],["cuts-url.com",46],["gainbtc.click",46],["profitlink.info",46],["artipedia.id",46],["gonety.com",46],["viraloc.com",46],["beautyram.info",46],["cashearn.cc",46],["go2.surf",46],["cryptoads.space",46],["adcorto.me",46],["modapk.link",46],["holaurl.com",46],["adbl.live",46],["miklpro.com",46],["kutt.io",46],["sanoybonito.club",46],["afly.pro",46],["cutlink.link",46],["short88.com",46],["pngit.live",46],["exe.app",46],["adsrt.click",46],["adcorto.xyz",46],["shortbled.com",46],["cuturl.in",46],["womenhaircolors.review",46],["srts.me",46],["paidtomoney.com",46],["lite-link.xyz",46],["apkshrt.com",46],["linkshorts.me",46],["androidnougatapk.com",46],["pureshort.link",46],["recipestutorials.com",46],["droplink.co",46],["tawiia.com",46],["exy.ai",46],["lite-link.com",46],["bdnewsx.com",46],["eio.io",46],["mealip.com",46],["earnfasts.com",46],["linksfire.co",46],["giscr.ac.th",46],["internewstv.com",46],["ivn3.com",46],["pslfive.com",46],["linksly.co",46],["illink.net",46],["coin.mg",46],["trinddz.com",46],["ilinks.in",46],["techupme.com",46],["bitfly.io",46],["earnguap.com",46],["news.techrfour.com",46],["shortzzy.in",46],["asiashort.link",46],["imagenesderopaparaperros.com",46],["c-ut.com",46],["toroox.com",46],["saungfirmware.id",46],["shrinkme.in",46],["softairbay.com",46],["link1s.net",46],["cashurl.in",46],["doctor-groups.com",46],["bitcoinly.in",46],["clk.ink",46],["abdeo8.com",46],["apksvip.com",46],["gibit.xyz",46],["claimcrypto.cc",46],["btcdot.xyz",46],["pkr.pw",46],["shrinkbtc.cc",46],["todaynewspk.win",46],["manikusa.com",46],["try2link.net",46],["stfly.me",46],["dz4win.com",46],["real-sky.com",46],["bolssc.com",46],["short2.cash",46],["fx4vip.com",46],["cutdl.xyz",46],["shrinkurl.org",46],["mediumarticles.com",46],["asupload.com",46],["exee.io",46],["srt.leechpremium.link",46],["adsrt.live",46],["cheappath.com",46],["fcc.lc",46],["shorthitz.com",46],["savelink.site",46],["linkshorten.xyz",46],["tmearn.com",46],["samapro.me",46],["adsy.pw",46],["owllink.net",46],["mondainai.moe",46],["2ota.com",46],["popimed.com",46],["aii.sh",46],["sekilastekno.com",46],["miuiku.com",46],["articlix.com",46],["intothelink.com",46],["pingit.link",46],["slink.bid",46],["7r6.com",46],["loptelink.vip",46],["iir.ai",46],["biroads.com",46],["win10.vn",[46,53]],["mitly.us",46],["adsrt.net",46],["afly.us",46],["tii.ai",46],["linkviet.xyz",46],["coredp.com",46],["linkrex.net",46],["bit-url.com",46],["adsrt.org",46],["bestearnonline.com",46],["gamesrs.com",46],["ouofly.com",46],["clicksbee.com",46],["shorterall.com",46],["dutchycorp.space",46],["linkshrnk.com",46],["linkad.in",46],["fc.lc",46],["adslinkfly.online",46],["shrinkme.io",46],["imgqec.online",47],["imgwbfh.online",47],["imgyer.store",47],["imgxuh.cfd",47],["imgngc.sbs",47],["imgezx.sbs",47],["imgxza.store",47],["imgwqr.online",47],["tr3fit.xyz",48],["daz3d.ru",49],["translit.net",50],["translit.ru",50],["cheatsquad.gg",51],["file4go.com",52],["file4go.net",52],["bankier.pl",54],["claudia.pl",54],["dyskusje24.pl",54],["edziecko.pl",54],["haps.pl",54],["infozdrowie24.pl",54],["kobieta.pl",54],["moto.pl",54],["gazeta.pl",54],["tokfm.pl",54],["sport.pl",54],["plotek.pl",54],["cocoleech.com",55],["prem.link",56],["bluemediaurls.lol",57],["bluemedialink.online",57],["dl.pcgamestorrents.org",57],["get-url.com",57],["t24.com.tr",58],["filmzone.com",[59,60,77]],["interface31.ru",[59,60]],["ktv.jp",59],["releasewitch.com",[59,62]],["news.ntv.co.jp",59],["novatoscans.top",59],["7days2die.info",[59,61]],["flying-lines.com",[59,60]],["fssp.gov.ru",[59,60]],["ilife97.com",[59,61]],["rdsong.com",[59,60]],["lubedk.com",[59,60,76,77]],["itempage3.auction.co.kr",59],["cdramalove.com",59],["10000recipe.com",59],["nike.com",[59,60]],["a2zapk.com",[59,61,62]],["fully-fundedscholarships.com",[59,61,62]],["shoneekapoor.com",59],["cda-hd.cc",[59,60,77]],["studysolve.online",[59,61,83]],["animeindia.in",[59,61,83]],["bufftoon.plaync.com",59],["studyguideindia.com",[59,78]],["codedosa.com",[59,61,62,63,64,83]],["newslibrary.naver.com",59],["insight.co.kr",[59,60,61]],["gamefinity.id",[59,61,85]],["cafe.naver.com",[59,60,61]],["half-musiq.blogspot.com",[60,78]],["tistory.com",[60,79,88]],["gradium.co.kr",[61,62,63,64,84]],["javsubtitle.co",62],["programasvirtualespc.net",62],["legionscans.com",62],["flinsetyadi.com",62],["theaircurrent.com",62],["now.rememberapp.co.kr",62],["semesters.in",[62,63,64,83,84]],["dora-guide.com",[63,64,84]],["topsporter.net",65],["uta-net.com",66],["lyricsondemand.com",67],["blog.naver.com",[68,69]],["dizilab9.com",70],["sedaily.com",71],["khan.co.kr",72],["fmkorea.com",73],["brunch.co.kr",74],["post.naver.com",75],["fishki.net",80],["city-data.com",80],["patrika.com",[80,89]],["ogznet.com",80],["deepl.com",81],["foodnavigator.com",82],["digitalsynopsis.com",84],["electricalvoice.com",84],["nordkorea-info.de",86],["tunovelaligera.com",87],["runningnews.gr",88],["gaypornmasters.com",[90,91]],["gaypornwave.com",90],["sporx.com",90],["muharebetarihi.com",92]]);

const entitiesMap = new Map([["bildirim",27],["seulink",46],["encurtalink",46],["wplink",46],["adshort",46],["linkfly",46],["exey",46],["linkshorts",46],["bluemediafile",57],["bluemediafiles",57]]);

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
