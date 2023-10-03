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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["/selectionchange|mousedown/","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["/contextmenu|keyup|keydown/"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["timeanddate.com",[2,18]],["slideshare.net",[3,12]],["warcraftlogs.com",4],["nwdb.info",5],["explorecams.com",5],["tiermaker.com",5],["freeforumzone.com",6],["megogo.sport",7],["megogo.ru",7],["ynet.co.il",8],["infobae.com",8],["abcnyheter.no",8],["sme.sk",8],["yourdictionary.com",8],["foxnews.com",8],["financer.com",9],["blog.csdn.net",[10,61]],["boyfriendtv.com",11],["milenio.com",[13,30]],["jakiwniosek.pl",13],["hikakaku.com",14],["wacul-ai.com",15],["qodeinteractive.com",16],["digitalvidya.com",16],["bbc.co.uk",17],["imovelguide.com.br",19],["facebook.com",20],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",20],["cnyfertility.com",21],["da-direkt.de",22],["westwing.de",23],["tv.golfnetwork.co.jp",24],["posterxxl.de",25],["bijutsutecho.com",26],["try-it.jp",27],["s0urce.io",28],["filefox.cc",29],["uol.com.br",30],["gazetadopovo.com.br",30],["gazetaonline.com.br",30],["indiatimes.com",30],["odiario.com",30],["otempo.com.br",30],["estadao.com.br",30],["bacaan.id",30],["ofuxico.com.br",30],["pentruea.com",30],["ciberduvidas.iscte-iul.pt",30],["globo.com",30],["citas.in",30],["blitzrechner.de",30],["emailfake.com",30],["lyrical-nonsense.com",30],["mediafax.ro",30],["economica.net",30],["polsatnews.pl",30],["novagente.pt",30],["arlinadzgn.com",30],["time.geekbang.org",[30,91]],["nowcoder.com",30],["libertatea.ro",30],["erinsakura.com",30],["yuque.com",30],["deepl.com",30],["digi24.ro",30],["onna.kr",30],["ziare.com",30],["agrointel.ro",30],["skyozora.com",30],["veneto.info",30],["transinfo.pl",30],["peliculas24.me",31],["roztoczanskipn.pl",31],["economictimes.indiatimes.com",[31,35]],["dzwignice.info",31],["script-stack.com",[31,67]],["mio.to",31],["husseinezzat.com",[31,42]],["taxo-acc.pl",31],["portalwrc.pl",31],["lublin.eu",31],["onlystream.tv",31],["dddance.party",31],["kapiert.de",31],["hitcena.pl",31],["tv-asahi.co.jp",31],["digitalfernsehen.de",31],["suzylu.co.uk",31],["music.apple.com",31],["skidrowcodex.net",31],["vsco.co",31],["nationalgeographic.com",31],["festival-cannes.com",31],["strcloud.in",31],["ufret.jp",31],["thenekodark.com",31],["artesacro.org",31],["poli-vsp.ru",31],["polyvsp.ru",31],["ananweb.jp",31],["daimangajiten.com",31],["digital.lasegunda.com",31],["hibiki-radio.jp",31],["garyfeinbergphotography.com",31],["clubulbebelusilor.ro",31],["gplinks.co",31],["ifdreamscametrue.com",31],["marksandspencer.com",31],["stowarzyszenie-impuls.eu",31],["viveretenerife.com",31],["oferty.dsautomobiles.pl",31],["wzamrani.com",31],["citroen.pl",31],["peugeot.pl",31],["wirtualnyspac3r.pl",31],["antena3.com",31],["lasexta.com",31],["pashplus.jp",31],["upvideo.to",31],["kpopsea.com",31],["cnki.net",31],["wpchen.net",31],["hongxiu.com",31],["readnovel.com",31],["uihtm.com",31],["uslsoftware.com",31],["rule34hentai.net",31],["cloudemb.com",31],["news24.jp",31],["gaminplay.com",31],["njjzxl.net",31],["voe.sx",[31,96]],["voe-unblock.com",[31,96]],["scrolller.com",31],["cocomanga.com",31],["nusantararom.org",[31,102]],["virpe.cc",31],["pobre.tv",[31,102]],["ukrainashop.com",31],["celtadigital.com",31],["matzoo.pl",31],["asia2tv.cn",31],["labs.j-novel.club",31],["turbo1.co",31],["futbollatam.com",31],["read.amazon.com",31],["box-manga.com",31],["the-masters-voice.com",31],["hemas.pl",31],["accgroup.vn",31],["btvnovinite.bg",31],["allcryptoz.net",31],["crewbase.net",31],["crewus.net",31],["shinbhu.net",31],["shinchu.net",31],["thumb8.net",31],["thumb9.net",31],["topcryptoz.net",31],["uniqueten.net",31],["ultraten.net",31],["cloudcomputingtopics.net",31],["bianity.net",31],["coinsparty.com",31],["postype.com",31],["lofter.com",[31,110]],["hentaihaven.xxx",31],["espn.com",31],["4media.com",31],["przegladpiaseczynski.pl",31],["freewaysintl.com",31],["cool-etv.net",31],["j91.asia",31],["sgd.de",31],["gaz.com.br",31],["knshow.com",32],["jusbrasil.com.br",33],["promobit.com.br",35],["techjunkie.com",35],["zerohedge.com",35],["1mg.com",35],["khou.com",35],["10tv.com",35],["artsy.net",36],["boards.net",36],["freeforums.net",36],["proboards.com",36],["tastycookery.com",37],["animeshouse.net",38],["free-mp3-download.net",38],["tepat.id",38],["techsupportall.com",39],["lugarcerto.com.br",40],["satcesc.com",41],["animatedshows.to",41],["miraculous.to",[41,60]],["jootc.com",42],["hikarinoakari.com",42],["operatorsekolahdbn.com",42],["wawlist.com",42],["statelibrary.us",43],["bigulnews.tv",45],["news.chosun.com",46],["androidweblog.com",47],["cronista.com",48],["fcportables.com",49],["venea.net",50],["uta-net.com",51],["downloadtutorials.net",[51,67]],["blog.naver.com",51],["myschool-eng.com",52],["orangespotlight.com",53],["th-world.com",[53,73]],["itvn.pl",54],["itvnextra.pl",54],["kuchniaplus.pl",54],["miniminiplus.pl",54],["player.pl",54],["ttv.pl",54],["tvn.pl",54],["tvn24.pl",54],["tvn24bis.pl",54],["tvn7.pl",54],["tvnfabula.pl",54],["tvnstyle.pl",54],["tvnturbo.pl",54],["x-link.pl",54],["x-news.pl",54],["kickante.com.br",13],["thestar.com.my",13],["corriereadriatico.it",13],["ilsole24ore.com",13],["scribd.com",55],["thehouseofportable.com",56],["ntvspor.net",56],["book.zhulang.com",56],["tadu.com",56],["selfstudyhistory.com",57],["lokercirebon.com",58],["avdelphi.com",59],["maxstream.video",60],["wpb.shueisha.co.jp",60],["tiktok.com",[60,71]],["vedantu.com",60],["zsti.zsti.civ.pl",60],["timberwoodanotia.com",[60,97]],["strawberriesporail.com",[60,97]],["valeronevijao.com",[60,97]],["cigarlessarefy.com",[60,97]],["figeterpiazine.com",[60,97]],["yodelswartlike.com",[60,97]],["generatesnitrosate.com",[60,97]],["crownmakermacaronicism.com",[60,97]],["chromotypic.com",[60,97]],["gamoneinterrupted.com",[60,97]],["metagnathtuggers.com",[60,97]],["wolfdyslectic.com",[60,97]],["rationalityaloelike.com",[60,97]],["sizyreelingly.com",[60,97]],["simpulumlamerop.com",[60,97]],["urochsunloath.com",[60,97]],["monorhinouscassaba.com",[60,97]],["counterclockwisejacky.com",[60,97]],["35volitantplimsoles5.com",[60,97]],["scatch176duplicities.com",[60,97]],["antecoxalbobbing1010.com",[60,97]],["boonlessbestselling244.com",[60,97]],["cyamidpulverulence530.com",[60,97]],["guidon40hyporadius9.com",[60,97]],["449unceremoniousnasoseptal.com",[60,97]],["19turanosephantasia.com",[60,97]],["30sensualizeexpression.com",[60,97]],["321naturelikefurfuroid.com",[60,97]],["745mingiestblissfully.com",[60,97]],["availedsmallest.com",[60,97]],["greaseball6eventual20.com",[60,97]],["toxitabellaeatrebates306.com",[60,97]],["20demidistance9elongations.com",[60,97]],["audaciousdefaulthouse.com",[60,97]],["fittingcentermondaysunday.com",[60,97]],["fraudclatterflyingcar.com",[60,97]],["launchreliantcleaverriver.com",[60,97]],["matriculant401merited.com",[60,97]],["realfinanceblogcenter.com",[60,97]],["reputationsheriffkennethsand.com",[60,97]],["telyn610zoanthropy.com",[60,97]],["tubelessceliolymph.com",[60,97]],["tummulerviolableness.com",[60,97]],["un-block-voe.net",[60,97]],["v-o-e-unblock.com",[60,97]],["voe-un-block.com",[60,97]],["voeun-block.net",[60,97]],["voeunbl0ck.com",[60,97]],["voeunblck.com",[60,97]],["voeunblk.com",[60,97]],["voeunblock3.com",[60,97]],["audiotools.pro",60],["magesy.blog",60],["magesypro.pro",60],["audioztools.com",60],["www.ntv.co.jp",60],["faptiti.com",60],["wormate.io",60],["selfstudys.com",60],["adslink.pw",60],["jpopsingles.eu",60],["vinstartheme.com",[60,119]],["leakedzone.com",[60,122]],["fjordd.com",60],["alphapolis.co.jp",61],["juejin.cn",61],["sweetslyrics.com",61],["thegatewaypundit.com",62],["thegearhunt.com",63],["jfdb.jp",64],["loginhit.com.ng",64],["charbelnemnom.com",64],["bphimmoi.net",64],["goodhub.xyz",64],["edailybuzz.com",66],["zhihu.com",66],["qidian.com",66],["invado.pl",66],["webnovel.com",66],["bajecnavareska.sk",67],["lunas.pro",67],["onlinefreecourse.net",67],["pisr.org",67],["uplod.net",67],["thewpclub.net",67],["thememazing.com",67],["themebanks.com",67],["mesquitaonline.com",67],["skandynawiainfo.pl",67],["onlinecoursebay.com",67],["magnet-novels.com",68],["dreamsfriend.com",69],["trakteer.id",70],["699pic.com",70],["kutub3lpdf.com",72],["sklep-agroland.pl",74],["polagriparts.pl",75],["nordkorea-info.de",76],["geotips.net",77],["hardcoregames.ca",78],["lataifas.ro",79],["toppremiumpro.com",80],["wattpad.com",81],["starbene.it",82],["fauxid.com",83],["androidtvbox.eu",84],["nicematin.com",85],["bilibili.com",86],["yamibo.com",87],["fimfiction.net",88],["moegirl.org.cn",89],["bbs.mihoyo.com",90],["jianshu.com",90],["leetcode-cn.com",90],["peekme.cc",92],["ihbarweb.org.tr",93],["baixedetudo.net.br",94],["gardenia.net",95],["wpking.in",98],["hollywoodmask.com",99],["mbalib.com",99],["wenku.baidu.com",100],["mooc.chaoxing.com",101],["www-daftarharga.blogspot.com",102],["realpython.com",103],["linkmate.xyz",104],["cristelageorgescu.ro",105],["novelpia.com",106],["privivkainfo.ru",107],["frameboxxindore.com",107],["descargatepelis.com",108],["vercalendario.info",109],["zipcode.com.ng",109],["poipiku.com",111],["postcourier.com.pg",112],["gmx.co.uk",114],["gmx.com",114],["likey.me",115],["wallpaperaccess.com",116],["shortform.com",117],["joysound.com",118],["colors.sonicthehedgehog.com",120],["senpa.io",121],["txori.com",121],["comikey.com",123],["translate.goog",124]]);

const entitiesMap = new Map([["mangaku",31],["dood",31],["streamtape",31],["asiatv",31],["bg-gledai",31],["descarga-animex",34],["tabonitobrasil",44],["anisubindo",44],["wstream",60],["voe-unblock",[60,97]],["pobre",[60,113]],["bmovies",65]]);

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
