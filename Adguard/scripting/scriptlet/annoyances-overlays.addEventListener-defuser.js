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

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["/selectionchange|mousedown/","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["xenvn.com",2],["mysb555.com",3],["timeanddate.com",[4,20]],["slideshare.net",[5,14]],["warcraftlogs.com",6],["nwdb.info",7],["explorecams.com",7],["tiermaker.com",7],["freeforumzone.com",8],["megogo.sport",9],["megogo.ru",9],["ynet.co.il",10],["infobae.com",10],["abcnyheter.no",10],["sme.sk",10],["yourdictionary.com",10],["foxnews.com",10],["financer.com",11],["blog.csdn.net",[12,63]],["boyfriendtv.com",13],["milenio.com",[15,32]],["jakiwniosek.pl",15],["hikakaku.com",16],["wacul-ai.com",17],["qodeinteractive.com",18],["digitalvidya.com",18],["bbc.co.uk",19],["imovelguide.com.br",21],["facebook.com",22],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",22],["cnyfertility.com",23],["da-direkt.de",24],["westwing.de",25],["tv.golfnetwork.co.jp",26],["posterxxl.de",27],["bijutsutecho.com",28],["try-it.jp",29],["s0urce.io",30],["filefox.cc",31],["uol.com.br",32],["gazetadopovo.com.br",32],["indiatimes.com",32],["odiario.com",32],["otempo.com.br",32],["estadao.com.br",32],["bacaan.id",32],["ofuxico.com.br",32],["pentruea.com",32],["ciberduvidas.iscte-iul.pt",32],["globo.com",32],["citas.in",32],["blitzrechner.de",32],["emailfake.com",32],["lyrical-nonsense.com",32],["mediafax.ro",32],["economica.net",32],["polsatnews.pl",32],["novagente.pt",32],["arlinadzgn.com",32],["time.geekbang.org",[32,93]],["nowcoder.com",32],["libertatea.ro",32],["erinsakura.com",32],["yuque.com",32],["deepl.com",32],["digi24.ro",32],["onna.kr",32],["ziare.com",32],["agrointel.ro",32],["skyozora.com",32],["veneto.info",32],["transinfo.pl",32],["peliculas24.me",33],["roztoczanskipn.pl",33],["economictimes.indiatimes.com",[33,37]],["dzwignice.info",33],["script-stack.com",[33,69]],["mio.to",33],["husseinezzat.com",[33,44]],["taxo-acc.pl",33],["portalwrc.pl",33],["lublin.eu",33],["onlystream.tv",33],["dddance.party",33],["kapiert.de",33],["hitcena.pl",33],["tv-asahi.co.jp",33],["digitalfernsehen.de",33],["suzylu.co.uk",33],["music.apple.com",33],["skidrowcodex.net",33],["vsco.co",33],["nationalgeographic.com",33],["festival-cannes.com",33],["strcloud.in",33],["ufret.jp",33],["thenekodark.com",33],["artesacro.org",33],["poli-vsp.ru",33],["polyvsp.ru",33],["ananweb.jp",33],["daimangajiten.com",33],["digital.lasegunda.com",33],["hibiki-radio.jp",33],["garyfeinbergphotography.com",33],["clubulbebelusilor.ro",33],["gplinks.co",33],["ifdreamscametrue.com",33],["marksandspencer.com",33],["stowarzyszenie-impuls.eu",33],["viveretenerife.com",33],["oferty.dsautomobiles.pl",33],["wzamrani.com",33],["citroen.pl",33],["peugeot.pl",33],["wirtualnyspac3r.pl",33],["antena3.com",33],["lasexta.com",33],["pashplus.jp",33],["upvideo.to",33],["kpopsea.com",33],["cnki.net",33],["wpchen.net",33],["hongxiu.com",33],["readnovel.com",33],["uihtm.com",33],["uslsoftware.com",33],["rule34hentai.net",33],["cloudemb.com",33],["news24.jp",33],["gaminplay.com",33],["njjzxl.net",33],["voe.sx",[33,98]],["voe-unblock.com",[33,98]],["scrolller.com",33],["cocomanga.com",33],["nusantararom.org",[33,104]],["virpe.cc",33],["pobre.tv",[33,104]],["ukrainashop.com",33],["celtadigital.com",33],["matzoo.pl",33],["asia2tv.cn",33],["labs.j-novel.club",33],["turbo1.co",33],["futbollatam.com",33],["read.amazon.com",33],["box-manga.com",33],["the-masters-voice.com",33],["hemas.pl",33],["accgroup.vn",33],["btvnovinite.bg",33],["allcryptoz.net",33],["crewbase.net",33],["crewus.net",33],["shinbhu.net",33],["shinchu.net",33],["thumb8.net",33],["thumb9.net",33],["topcryptoz.net",33],["uniqueten.net",33],["ultraten.net",33],["cloudcomputingtopics.net",33],["bianity.net",33],["coinsparty.com",33],["postype.com",33],["lofter.com",[33,112]],["hentaihaven.xxx",33],["espn.com",33],["4media.com",33],["przegladpiaseczynski.pl",33],["freewaysintl.com",33],["cool-etv.net",33],["j91.asia",33],["sgd.de",33],["gaz.com.br",33],["knshow.com",34],["jusbrasil.com.br",35],["promobit.com.br",37],["techjunkie.com",37],["zerohedge.com",37],["1mg.com",37],["khou.com",37],["10tv.com",37],["artsy.net",38],["boards.net",38],["freeforums.net",38],["proboards.com",38],["tastycookery.com",39],["animeshouse.net",40],["free-mp3-download.net",40],["tepat.id",40],["techsupportall.com",41],["lugarcerto.com.br",42],["satcesc.com",43],["animatedshows.to",43],["miraculous.to",[43,62]],["jootc.com",44],["hikarinoakari.com",44],["operatorsekolahdbn.com",44],["wawlist.com",44],["statelibrary.us",45],["bigulnews.tv",47],["news.chosun.com",48],["androidweblog.com",49],["cronista.com",50],["fcportables.com",51],["venea.net",52],["uta-net.com",53],["downloadtutorials.net",[53,69]],["blog.naver.com",53],["myschool-eng.com",54],["orangespotlight.com",55],["th-world.com",[55,75]],["itvn.pl",56],["itvnextra.pl",56],["kuchniaplus.pl",56],["miniminiplus.pl",56],["player.pl",56],["ttv.pl",56],["tvn.pl",56],["tvn24.pl",56],["tvn24bis.pl",56],["tvn7.pl",56],["tvnfabula.pl",56],["tvnstyle.pl",56],["tvnturbo.pl",56],["x-link.pl",56],["x-news.pl",56],["kickante.com.br",15],["thestar.com.my",15],["corriereadriatico.it",15],["ilsole24ore.com",15],["scribd.com",57],["thehouseofportable.com",58],["ntvspor.net",58],["book.zhulang.com",58],["tadu.com",58],["selfstudyhistory.com",59],["lokercirebon.com",60],["avdelphi.com",61],["maxstream.video",62],["wpb.shueisha.co.jp",62],["tiktok.com",[62,73]],["vedantu.com",62],["zsti.zsti.civ.pl",62],["nectareousoverelate.com",[62,99]],["timberwoodanotia.com",[62,99]],["strawberriesporail.com",[62,99]],["valeronevijao.com",[62,99]],["cigarlessarefy.com",[62,99]],["figeterpiazine.com",[62,99]],["yodelswartlike.com",[62,99]],["generatesnitrosate.com",[62,99]],["crownmakermacaronicism.com",[62,99]],["chromotypic.com",[62,99]],["gamoneinterrupted.com",[62,99]],["metagnathtuggers.com",[62,99]],["wolfdyslectic.com",[62,99]],["rationalityaloelike.com",[62,99]],["sizyreelingly.com",[62,99]],["simpulumlamerop.com",[62,99]],["urochsunloath.com",[62,99]],["monorhinouscassaba.com",[62,99]],["counterclockwisejacky.com",[62,99]],["35volitantplimsoles5.com",[62,99]],["scatch176duplicities.com",[62,99]],["antecoxalbobbing1010.com",[62,99]],["boonlessbestselling244.com",[62,99]],["cyamidpulverulence530.com",[62,99]],["guidon40hyporadius9.com",[62,99]],["449unceremoniousnasoseptal.com",[62,99]],["19turanosephantasia.com",[62,99]],["30sensualizeexpression.com",[62,99]],["321naturelikefurfuroid.com",[62,99]],["745mingiestblissfully.com",[62,99]],["availedsmallest.com",[62,99]],["greaseball6eventual20.com",[62,99]],["toxitabellaeatrebates306.com",[62,99]],["20demidistance9elongations.com",[62,99]],["audaciousdefaulthouse.com",[62,99]],["fittingcentermondaysunday.com",[62,99]],["fraudclatterflyingcar.com",[62,99]],["launchreliantcleaverriver.com",[62,99]],["matriculant401merited.com",[62,99]],["realfinanceblogcenter.com",[62,99]],["reputationsheriffkennethsand.com",[62,99]],["telyn610zoanthropy.com",[62,99]],["tubelessceliolymph.com",[62,99]],["tummulerviolableness.com",[62,99]],["un-block-voe.net",[62,99]],["v-o-e-unblock.com",[62,99]],["voe-un-block.com",[62,99]],["voeun-block.net",[62,99]],["voeunbl0ck.com",[62,99]],["voeunblck.com",[62,99]],["voeunblk.com",[62,99]],["voeunblock3.com",[62,99]],["audiotools.pro",62],["magesy.blog",62],["magesypro.pro",62],["audioztools.com",62],["www.ntv.co.jp",62],["faptiti.com",62],["wormate.io",62],["selfstudys.com",62],["adslink.pw",62],["jpopsingles.eu",62],["vinstartheme.com",[62,121]],["leakedzone.com",[62,124]],["fjordd.com",62],["alphapolis.co.jp",63],["juejin.cn",63],["sweetslyrics.com",63],["thegatewaypundit.com",64],["thegearhunt.com",65],["jfdb.jp",66],["loginhit.com.ng",66],["charbelnemnom.com",66],["bphimmoi.net",66],["goodhub.xyz",66],["edailybuzz.com",68],["zhihu.com",68],["qidian.com",68],["invado.pl",68],["webnovel.com",68],["bajecnavareska.sk",69],["lunas.pro",69],["onlinefreecourse.net",69],["pisr.org",69],["uplod.net",69],["thewpclub.net",69],["thememazing.com",69],["themebanks.com",69],["mesquitaonline.com",69],["skandynawiainfo.pl",69],["onlinecoursebay.com",69],["magnet-novels.com",70],["dreamsfriend.com",71],["trakteer.id",72],["699pic.com",72],["kutub3lpdf.com",74],["sklep-agroland.pl",76],["polagriparts.pl",77],["nordkorea-info.de",78],["geotips.net",79],["hardcoregames.ca",80],["lataifas.ro",81],["toppremiumpro.com",82],["wattpad.com",83],["starbene.it",84],["fauxid.com",85],["androidtvbox.eu",86],["nicematin.com",87],["bilibili.com",88],["yamibo.com",89],["fimfiction.net",90],["moegirl.org.cn",91],["bbs.mihoyo.com",92],["jianshu.com",92],["leetcode-cn.com",92],["peekme.cc",94],["ihbarweb.org.tr",95],["baixedetudo.net.br",96],["gardenia.net",97],["wpking.in",100],["hollywoodmask.com",101],["mbalib.com",101],["wenku.baidu.com",102],["mooc.chaoxing.com",103],["www-daftarharga.blogspot.com",104],["realpython.com",105],["linkmate.xyz",106],["cristelageorgescu.ro",107],["novelpia.com",108],["privivkainfo.ru",109],["frameboxxindore.com",109],["descargatepelis.com",110],["vercalendario.info",111],["zipcode.com.ng",111],["poipiku.com",113],["postcourier.com.pg",114],["gmx.co.uk",116],["gmx.com",116],["likey.me",117],["wallpaperaccess.com",118],["shortform.com",119],["joysound.com",120],["colors.sonicthehedgehog.com",122],["senpa.io",123],["txori.com",123],["comikey.com",125],["translate.goog",126],["oreilly.com",127]]);

const entitiesMap = new Map([["mangaku",33],["dood",33],["streamtape",33],["asiatv",33],["bg-gledai",33],["descarga-animex",36],["tabonitobrasil",46],["anisubindo",46],["wstream",62],["voe-unblock",[62,99]],["pobre",[62,115]],["bmovies",67]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = String(args[1]);
                } catch(ex) {
                }
                const matchesType = safe.RegExp_test.call(reType, type);
                const matchesHandler = safe.RegExp_test.call(rePattern, handler);
                const matchesEither = matchesType || matchesHandler;
                const matchesBoth = matchesType && matchesHandler;
                if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
                    safe.uboLog(`addEventListener('${type}', ${handler})`);
                }
                if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
                    debugger; // jshint ignore:line
                }
                if ( matchesBoth ) { return; }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
    try { addEventListenerDefuser(...argsList[i]); }
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
    return uBOL_addEventListenerDefuser();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_addEventListenerDefuser = cloneInto([
            [ '(', uBOL_addEventListenerDefuser.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_addEventListenerDefuser);
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
    delete page.uBOL_addEventListenerDefuser;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
