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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["/selectionchange|mousedown/","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["mysb555.com",2],["timeanddate.com",[3,19]],["slideshare.net",[4,13]],["warcraftlogs.com",5],["nwdb.info",6],["explorecams.com",6],["tiermaker.com",6],["freeforumzone.com",7],["megogo.sport",8],["megogo.ru",8],["ynet.co.il",9],["infobae.com",9],["abcnyheter.no",9],["sme.sk",9],["yourdictionary.com",9],["foxnews.com",9],["financer.com",10],["blog.csdn.net",[11,62]],["boyfriendtv.com",12],["milenio.com",[14,31]],["jakiwniosek.pl",14],["hikakaku.com",15],["wacul-ai.com",16],["qodeinteractive.com",17],["digitalvidya.com",17],["bbc.co.uk",18],["imovelguide.com.br",20],["facebook.com",21],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",21],["cnyfertility.com",22],["da-direkt.de",23],["westwing.de",24],["tv.golfnetwork.co.jp",25],["posterxxl.de",26],["bijutsutecho.com",27],["try-it.jp",28],["s0urce.io",29],["filefox.cc",30],["uol.com.br",31],["gazetadopovo.com.br",31],["gazetaonline.com.br",31],["indiatimes.com",31],["odiario.com",31],["otempo.com.br",31],["estadao.com.br",31],["bacaan.id",31],["ofuxico.com.br",31],["pentruea.com",31],["ciberduvidas.iscte-iul.pt",31],["globo.com",31],["citas.in",31],["blitzrechner.de",31],["emailfake.com",31],["lyrical-nonsense.com",31],["mediafax.ro",31],["economica.net",31],["polsatnews.pl",31],["novagente.pt",31],["arlinadzgn.com",31],["time.geekbang.org",[31,92]],["nowcoder.com",31],["libertatea.ro",31],["erinsakura.com",31],["yuque.com",31],["deepl.com",31],["digi24.ro",31],["onna.kr",31],["ziare.com",31],["agrointel.ro",31],["skyozora.com",31],["veneto.info",31],["transinfo.pl",31],["peliculas24.me",32],["roztoczanskipn.pl",32],["economictimes.indiatimes.com",[32,36]],["dzwignice.info",32],["script-stack.com",[32,68]],["mio.to",32],["husseinezzat.com",[32,43]],["taxo-acc.pl",32],["portalwrc.pl",32],["lublin.eu",32],["onlystream.tv",32],["dddance.party",32],["kapiert.de",32],["hitcena.pl",32],["tv-asahi.co.jp",32],["digitalfernsehen.de",32],["suzylu.co.uk",32],["music.apple.com",32],["skidrowcodex.net",32],["vsco.co",32],["nationalgeographic.com",32],["festival-cannes.com",32],["strcloud.in",32],["ufret.jp",32],["thenekodark.com",32],["artesacro.org",32],["poli-vsp.ru",32],["polyvsp.ru",32],["ananweb.jp",32],["daimangajiten.com",32],["digital.lasegunda.com",32],["hibiki-radio.jp",32],["garyfeinbergphotography.com",32],["clubulbebelusilor.ro",32],["gplinks.co",32],["ifdreamscametrue.com",32],["marksandspencer.com",32],["stowarzyszenie-impuls.eu",32],["viveretenerife.com",32],["oferty.dsautomobiles.pl",32],["wzamrani.com",32],["citroen.pl",32],["peugeot.pl",32],["wirtualnyspac3r.pl",32],["antena3.com",32],["lasexta.com",32],["pashplus.jp",32],["upvideo.to",32],["kpopsea.com",32],["cnki.net",32],["wpchen.net",32],["hongxiu.com",32],["readnovel.com",32],["uihtm.com",32],["uslsoftware.com",32],["rule34hentai.net",32],["cloudemb.com",32],["news24.jp",32],["gaminplay.com",32],["njjzxl.net",32],["voe.sx",[32,97]],["voe-unblock.com",[32,97]],["scrolller.com",32],["cocomanga.com",32],["nusantararom.org",[32,103]],["virpe.cc",32],["pobre.tv",[32,103]],["ukrainashop.com",32],["celtadigital.com",32],["matzoo.pl",32],["asia2tv.cn",32],["labs.j-novel.club",32],["turbo1.co",32],["futbollatam.com",32],["read.amazon.com",32],["box-manga.com",32],["the-masters-voice.com",32],["hemas.pl",32],["accgroup.vn",32],["btvnovinite.bg",32],["allcryptoz.net",32],["crewbase.net",32],["crewus.net",32],["shinbhu.net",32],["shinchu.net",32],["thumb8.net",32],["thumb9.net",32],["topcryptoz.net",32],["uniqueten.net",32],["ultraten.net",32],["cloudcomputingtopics.net",32],["bianity.net",32],["coinsparty.com",32],["postype.com",32],["lofter.com",[32,111]],["hentaihaven.xxx",32],["espn.com",32],["4media.com",32],["przegladpiaseczynski.pl",32],["freewaysintl.com",32],["cool-etv.net",32],["j91.asia",32],["sgd.de",32],["gaz.com.br",32],["knshow.com",33],["jusbrasil.com.br",34],["promobit.com.br",36],["techjunkie.com",36],["zerohedge.com",36],["1mg.com",36],["khou.com",36],["10tv.com",36],["artsy.net",37],["boards.net",37],["freeforums.net",37],["proboards.com",37],["tastycookery.com",38],["animeshouse.net",39],["free-mp3-download.net",39],["tepat.id",39],["techsupportall.com",40],["lugarcerto.com.br",41],["satcesc.com",42],["animatedshows.to",42],["miraculous.to",[42,61]],["jootc.com",43],["hikarinoakari.com",43],["operatorsekolahdbn.com",43],["wawlist.com",43],["statelibrary.us",44],["bigulnews.tv",46],["news.chosun.com",47],["androidweblog.com",48],["cronista.com",49],["fcportables.com",50],["venea.net",51],["uta-net.com",52],["downloadtutorials.net",[52,68]],["blog.naver.com",52],["myschool-eng.com",53],["orangespotlight.com",54],["th-world.com",[54,74]],["itvn.pl",55],["itvnextra.pl",55],["kuchniaplus.pl",55],["miniminiplus.pl",55],["player.pl",55],["ttv.pl",55],["tvn.pl",55],["tvn24.pl",55],["tvn24bis.pl",55],["tvn7.pl",55],["tvnfabula.pl",55],["tvnstyle.pl",55],["tvnturbo.pl",55],["x-link.pl",55],["x-news.pl",55],["kickante.com.br",14],["thestar.com.my",14],["corriereadriatico.it",14],["ilsole24ore.com",14],["scribd.com",56],["thehouseofportable.com",57],["ntvspor.net",57],["book.zhulang.com",57],["tadu.com",57],["selfstudyhistory.com",58],["lokercirebon.com",59],["avdelphi.com",60],["maxstream.video",61],["wpb.shueisha.co.jp",61],["tiktok.com",[61,72]],["vedantu.com",61],["zsti.zsti.civ.pl",61],["apinchcaseation.com",[61,98]],["timberwoodanotia.com",[61,98]],["strawberriesporail.com",[61,98]],["valeronevijao.com",[61,98]],["cigarlessarefy.com",[61,98]],["figeterpiazine.com",[61,98]],["yodelswartlike.com",[61,98]],["generatesnitrosate.com",[61,98]],["crownmakermacaronicism.com",[61,98]],["chromotypic.com",[61,98]],["gamoneinterrupted.com",[61,98]],["metagnathtuggers.com",[61,98]],["wolfdyslectic.com",[61,98]],["rationalityaloelike.com",[61,98]],["sizyreelingly.com",[61,98]],["simpulumlamerop.com",[61,98]],["urochsunloath.com",[61,98]],["monorhinouscassaba.com",[61,98]],["counterclockwisejacky.com",[61,98]],["35volitantplimsoles5.com",[61,98]],["scatch176duplicities.com",[61,98]],["antecoxalbobbing1010.com",[61,98]],["boonlessbestselling244.com",[61,98]],["cyamidpulverulence530.com",[61,98]],["guidon40hyporadius9.com",[61,98]],["449unceremoniousnasoseptal.com",[61,98]],["19turanosephantasia.com",[61,98]],["30sensualizeexpression.com",[61,98]],["321naturelikefurfuroid.com",[61,98]],["745mingiestblissfully.com",[61,98]],["availedsmallest.com",[61,98]],["greaseball6eventual20.com",[61,98]],["toxitabellaeatrebates306.com",[61,98]],["20demidistance9elongations.com",[61,98]],["audaciousdefaulthouse.com",[61,98]],["fittingcentermondaysunday.com",[61,98]],["fraudclatterflyingcar.com",[61,98]],["launchreliantcleaverriver.com",[61,98]],["matriculant401merited.com",[61,98]],["realfinanceblogcenter.com",[61,98]],["reputationsheriffkennethsand.com",[61,98]],["telyn610zoanthropy.com",[61,98]],["tubelessceliolymph.com",[61,98]],["tummulerviolableness.com",[61,98]],["un-block-voe.net",[61,98]],["v-o-e-unblock.com",[61,98]],["voe-un-block.com",[61,98]],["voeun-block.net",[61,98]],["voeunbl0ck.com",[61,98]],["voeunblck.com",[61,98]],["voeunblk.com",[61,98]],["voeunblock3.com",[61,98]],["audiotools.pro",61],["magesy.blog",61],["magesypro.pro",61],["audioztools.com",61],["www.ntv.co.jp",61],["faptiti.com",61],["wormate.io",61],["selfstudys.com",61],["adslink.pw",61],["jpopsingles.eu",61],["vinstartheme.com",[61,120]],["leakedzone.com",[61,123]],["fjordd.com",61],["alphapolis.co.jp",62],["juejin.cn",62],["sweetslyrics.com",62],["thegatewaypundit.com",63],["thegearhunt.com",64],["jfdb.jp",65],["loginhit.com.ng",65],["charbelnemnom.com",65],["bphimmoi.net",65],["goodhub.xyz",65],["edailybuzz.com",67],["zhihu.com",67],["qidian.com",67],["invado.pl",67],["webnovel.com",67],["bajecnavareska.sk",68],["lunas.pro",68],["onlinefreecourse.net",68],["pisr.org",68],["uplod.net",68],["thewpclub.net",68],["thememazing.com",68],["themebanks.com",68],["mesquitaonline.com",68],["skandynawiainfo.pl",68],["onlinecoursebay.com",68],["magnet-novels.com",69],["dreamsfriend.com",70],["trakteer.id",71],["699pic.com",71],["kutub3lpdf.com",73],["sklep-agroland.pl",75],["polagriparts.pl",76],["nordkorea-info.de",77],["geotips.net",78],["hardcoregames.ca",79],["lataifas.ro",80],["toppremiumpro.com",81],["wattpad.com",82],["starbene.it",83],["fauxid.com",84],["androidtvbox.eu",85],["nicematin.com",86],["bilibili.com",87],["yamibo.com",88],["fimfiction.net",89],["moegirl.org.cn",90],["bbs.mihoyo.com",91],["jianshu.com",91],["leetcode-cn.com",91],["peekme.cc",93],["ihbarweb.org.tr",94],["baixedetudo.net.br",95],["gardenia.net",96],["wpking.in",99],["hollywoodmask.com",100],["mbalib.com",100],["wenku.baidu.com",101],["mooc.chaoxing.com",102],["www-daftarharga.blogspot.com",103],["realpython.com",104],["linkmate.xyz",105],["cristelageorgescu.ro",106],["novelpia.com",107],["privivkainfo.ru",108],["frameboxxindore.com",108],["descargatepelis.com",109],["vercalendario.info",110],["zipcode.com.ng",110],["poipiku.com",112],["postcourier.com.pg",113],["gmx.co.uk",115],["gmx.com",115],["likey.me",116],["wallpaperaccess.com",117],["shortform.com",118],["joysound.com",119],["colors.sonicthehedgehog.com",121],["senpa.io",122],["txori.com",122],["comikey.com",124],["translate.goog",125],["oreilly.com",126]]);

const entitiesMap = new Map([["mangaku",32],["dood",32],["streamtape",32],["asiatv",32],["bg-gledai",32],["descarga-animex",35],["tabonitobrasil",45],["anisubindo",45],["wstream",61],["voe-unblock",[61,98]],["pobre",[61,114]],["bmovies",66]]);

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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
