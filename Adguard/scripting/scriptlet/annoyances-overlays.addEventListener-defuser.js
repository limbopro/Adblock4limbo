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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["/selectionchange|mousedown/","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["timeanddate.com",[2,17]],["slideshare.net",[3,11]],["warcraftlogs.com",4],["nwdb.info",5],["explorecams.com",5],["tiermaker.com",5],["freeforumzone.com",6],["megogo.sport",7],["megogo.ru",7],["ynet.co.il",8],["infobae.com",8],["abcnyheter.no",8],["sme.sk",8],["yourdictionary.com",8],["foxnews.com",8],["blog.csdn.net",[9,60]],["boyfriendtv.com",10],["milenio.com",[12,29]],["jakiwniosek.pl",12],["hikakaku.com",13],["wacul-ai.com",14],["qodeinteractive.com",15],["digitalvidya.com",15],["bbc.co.uk",16],["imovelguide.com.br",18],["facebook.com",19],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",19],["cnyfertility.com",20],["da-direkt.de",21],["westwing.de",22],["tv.golfnetwork.co.jp",23],["posterxxl.de",24],["bijutsutecho.com",25],["try-it.jp",26],["s0urce.io",27],["filefox.cc",28],["uol.com.br",29],["gazetadopovo.com.br",29],["gazetaonline.com.br",29],["indiatimes.com",29],["odiario.com",29],["otempo.com.br",29],["estadao.com.br",29],["bacaan.id",29],["ofuxico.com.br",29],["pentruea.com",29],["ciberduvidas.iscte-iul.pt",29],["globo.com",29],["citas.in",29],["blitzrechner.de",29],["emailfake.com",29],["lyrical-nonsense.com",29],["mediafax.ro",29],["economica.net",29],["polsatnews.pl",29],["novagente.pt",29],["arlinadzgn.com",29],["time.geekbang.org",[29,90]],["nowcoder.com",29],["libertatea.ro",29],["erinsakura.com",29],["yuque.com",29],["deepl.com",29],["digi24.ro",29],["onna.kr",29],["ziare.com",29],["agrointel.ro",29],["skyozora.com",29],["veneto.info",29],["peliculas24.me",30],["roztoczanskipn.pl",30],["economictimes.indiatimes.com",[30,34]],["dzwignice.info",30],["script-stack.com",[30,66]],["mio.to",30],["husseinezzat.com",[30,41]],["taxo-acc.pl",30],["portalwrc.pl",30],["lublin.eu",30],["onlystream.tv",30],["dddance.party",30],["kapiert.de",30],["hitcena.pl",30],["tv-asahi.co.jp",30],["digitalfernsehen.de",30],["suzylu.co.uk",30],["music.apple.com",30],["skidrowcodex.net",30],["vsco.co",30],["nationalgeographic.com",30],["festival-cannes.com",30],["strcloud.in",30],["ufret.jp",30],["thenekodark.com",30],["artesacro.org",30],["poli-vsp.ru",30],["polyvsp.ru",30],["ananweb.jp",30],["daimangajiten.com",30],["digital.lasegunda.com",30],["hibiki-radio.jp",30],["garyfeinbergphotography.com",30],["clubulbebelusilor.ro",30],["gplinks.co",30],["ifdreamscametrue.com",30],["marksandspencer.com",30],["stowarzyszenie-impuls.eu",30],["viveretenerife.com",30],["oferty.dsautomobiles.pl",30],["wzamrani.com",30],["citroen.pl",30],["peugeot.pl",30],["wirtualnyspac3r.pl",30],["antena3.com",30],["lasexta.com",30],["pashplus.jp",30],["upvideo.to",30],["kpopsea.com",30],["cnki.net",30],["wpchen.net",30],["hongxiu.com",30],["readnovel.com",30],["uihtm.com",30],["uslsoftware.com",30],["rule34hentai.net",30],["cloudemb.com",30],["news24.jp",30],["gaminplay.com",30],["njjzxl.net",30],["voe.sx",[30,95]],["voe-unblock.com",[30,95]],["scrolller.com",30],["cocomanga.com",30],["nusantararom.org",[30,101]],["virpe.cc",30],["pobre.tv",[30,101]],["ukrainashop.com",30],["celtadigital.com",30],["matzoo.pl",30],["asia2tv.cn",30],["labs.j-novel.club",30],["turbo1.co",30],["futbollatam.com",30],["read.amazon.com",30],["box-manga.com",30],["the-masters-voice.com",30],["hemas.pl",30],["accgroup.vn",30],["btvnovinite.bg",30],["allcryptoz.net",30],["crewbase.net",30],["crewus.net",30],["shinbhu.net",30],["shinchu.net",30],["thumb8.net",30],["thumb9.net",30],["topcryptoz.net",30],["uniqueten.net",30],["ultraten.net",30],["cloudcomputingtopics.net",30],["bianity.net",30],["coinsparty.com",30],["postype.com",30],["lofter.com",[30,109]],["hentaihaven.xxx",30],["espn.com",30],["4media.com",30],["przegladpiaseczynski.pl",30],["freewaysintl.com",30],["cool-etv.net",30],["j91.asia",30],["sgd.de",30],["gaz.com.br",30],["knshow.com",31],["jusbrasil.com.br",32],["promobit.com.br",34],["techjunkie.com",34],["zerohedge.com",34],["1mg.com",34],["khou.com",34],["10tv.com",34],["artsy.net",35],["boards.net",35],["freeforums.net",35],["proboards.com",35],["tastycookery.com",36],["animeshouse.net",37],["free-mp3-download.net",37],["tepat.id",37],["techsupportall.com",38],["lugarcerto.com.br",39],["satcesc.com",40],["animatedshows.to",40],["miraculous.to",[40,59]],["jootc.com",41],["hikarinoakari.com",41],["operatorsekolahdbn.com",41],["wawlist.com",41],["statelibrary.us",42],["bigulnews.tv",44],["news.chosun.com",45],["androidweblog.com",46],["cronista.com",47],["fcportables.com",48],["venea.net",49],["uta-net.com",50],["downloadtutorials.net",[50,66]],["blog.naver.com",50],["myschool-eng.com",51],["orangespotlight.com",52],["th-world.com",[52,72]],["itvn.pl",53],["itvnextra.pl",53],["kuchniaplus.pl",53],["miniminiplus.pl",53],["player.pl",53],["ttv.pl",53],["tvn.pl",53],["tvn24.pl",53],["tvn24bis.pl",53],["tvn7.pl",53],["tvnfabula.pl",53],["tvnstyle.pl",53],["tvnturbo.pl",53],["x-link.pl",53],["x-news.pl",53],["kickante.com.br",12],["thestar.com.my",12],["corriereadriatico.it",12],["ilsole24ore.com",12],["scribd.com",54],["thehouseofportable.com",55],["ntvspor.net",55],["book.zhulang.com",55],["tadu.com",55],["selfstudyhistory.com",56],["lokercirebon.com",57],["avdelphi.com",58],["maxstream.video",59],["wpb.shueisha.co.jp",59],["tiktok.com",[59,70]],["vedantu.com",59],["zsti.zsti.civ.pl",59],["cigarlessarefy.com",[59,96]],["figeterpiazine.com",[59,96]],["yodelswartlike.com",[59,96]],["generatesnitrosate.com",[59,96]],["crownmakermacaronicism.com",[59,96]],["chromotypic.com",[59,96]],["gamoneinterrupted.com",[59,96]],["metagnathtuggers.com",[59,96]],["wolfdyslectic.com",[59,96]],["rationalityaloelike.com",[59,96]],["sizyreelingly.com",[59,96]],["simpulumlamerop.com",[59,96]],["urochsunloath.com",[59,96]],["monorhinouscassaba.com",[59,96]],["counterclockwisejacky.com",[59,96]],["35volitantplimsoles5.com",[59,96]],["scatch176duplicities.com",[59,96]],["antecoxalbobbing1010.com",[59,96]],["boonlessbestselling244.com",[59,96]],["cyamidpulverulence530.com",[59,96]],["guidon40hyporadius9.com",[59,96]],["449unceremoniousnasoseptal.com",[59,96]],["19turanosephantasia.com",[59,96]],["30sensualizeexpression.com",[59,96]],["321naturelikefurfuroid.com",[59,96]],["745mingiestblissfully.com",[59,96]],["availedsmallest.com",[59,96]],["greaseball6eventual20.com",[59,96]],["toxitabellaeatrebates306.com",[59,96]],["20demidistance9elongations.com",[59,96]],["audaciousdefaulthouse.com",[59,96]],["fittingcentermondaysunday.com",[59,96]],["fraudclatterflyingcar.com",[59,96]],["launchreliantcleaverriver.com",[59,96]],["matriculant401merited.com",[59,96]],["realfinanceblogcenter.com",[59,96]],["reputationsheriffkennethsand.com",[59,96]],["telyn610zoanthropy.com",[59,96]],["tubelessceliolymph.com",[59,96]],["tummulerviolableness.com",[59,96]],["un-block-voe.net",[59,96]],["v-o-e-unblock.com",[59,96]],["voe-un-block.com",[59,96]],["voeun-block.net",[59,96]],["voeunbl0ck.com",[59,96]],["voeunblck.com",[59,96]],["voeunblk.com",[59,96]],["voeunblock3.com",[59,96]],["audiotools.pro",59],["magesy.blog",59],["magesypro.pro",59],["audioztools.com",59],["www.ntv.co.jp",59],["faptiti.com",59],["wormate.io",59],["selfstudys.com",59],["adslink.pw",59],["jpopsingles.eu",59],["vinstartheme.com",[59,118]],["leakedzone.com",[59,121]],["fjordd.com",59],["mastercomfig.com",59],["alphapolis.co.jp",60],["juejin.cn",60],["sweetslyrics.com",60],["thegatewaypundit.com",61],["thegearhunt.com",62],["jfdb.jp",63],["loginhit.com.ng",63],["charbelnemnom.com",63],["bphimmoi.net",63],["goodhub.xyz",63],["edailybuzz.com",65],["zhihu.com",65],["qidian.com",65],["invado.pl",65],["webnovel.com",65],["bajecnavareska.sk",66],["lunas.pro",66],["onlinefreecourse.net",66],["pisr.org",66],["uplod.net",66],["thewpclub.net",66],["thememazing.com",66],["themebanks.com",66],["mesquitaonline.com",66],["skandynawiainfo.pl",66],["onlinecoursebay.com",66],["magnet-novels.com",67],["dreamsfriend.com",68],["trakteer.id",69],["699pic.com",69],["kutub3lpdf.com",71],["sklep-agroland.pl",73],["polagriparts.pl",74],["nordkorea-info.de",75],["geotips.net",76],["hardcoregames.ca",77],["lataifas.ro",78],["toppremiumpro.com",79],["wattpad.com",80],["starbene.it",81],["fauxid.com",82],["androidtvbox.eu",83],["nicematin.com",84],["bilibili.com",85],["yamibo.com",86],["fimfiction.net",87],["moegirl.org.cn",88],["bbs.mihoyo.com",89],["jianshu.com",89],["leetcode-cn.com",89],["peekme.cc",91],["ihbarweb.org.tr",92],["baixedetudo.net.br",93],["gardenia.net",94],["wpking.in",97],["hollywoodmask.com",98],["mbalib.com",98],["wenku.baidu.com",99],["mooc.chaoxing.com",100],["www-daftarharga.blogspot.com",101],["realpython.com",102],["linkmate.xyz",103],["cristelageorgescu.ro",104],["novelpia.com",105],["privivkainfo.ru",106],["frameboxxindore.com",106],["descargatepelis.com",107],["vercalendario.info",108],["poipiku.com",110],["postcourier.com.pg",111],["gmx.co.uk",113],["gmx.com",113],["likey.me",114],["wallpaperaccess.com",115],["shortform.com",116],["joysound.com",117],["colors.sonicthehedgehog.com",119],["senpa.io",120],["txori.com",120],["comikey.com",122]]);

const entitiesMap = new Map([["mangaku",30],["dood",30],["streamtape",30],["asiatv",30],["bg-gledai",30],["descarga-animex",33],["tabonitobrasil",43],["anisubindo",43],["wstream",59],["voe-unblock",[59,96]],["pobre",[59,112]],["bmovies",64]]);

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
