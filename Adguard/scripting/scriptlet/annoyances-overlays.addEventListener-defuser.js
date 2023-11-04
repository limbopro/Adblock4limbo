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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["DOMContentLoaded","InactivityPopin"],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["/selectionchange|mousedown/","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["visualcapitalist.com",1],["news8000.com",1],["kxly.com",1],["thethings.com",1],["koamnewsnow.com",1],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["xenvn.com",2],["mysb555.com",3],["timeanddate.com",[4,21]],["slideshare.net",[5,15]],["warcraftlogs.com",6],["nwdb.info",7],["explorecams.com",7],["tiermaker.com",7],["freeforumzone.com",8],["megogo.sport",9],["megogo.ru",9],["ynet.co.il",10],["infobae.com",10],["abcnyheter.no",10],["sme.sk",10],["yourdictionary.com",10],["foxnews.com",10],["actu.orange.fr",11],["financer.com",12],["blog.csdn.net",[13,64]],["boyfriendtv.com",14],["milenio.com",[16,33]],["jakiwniosek.pl",16],["hikakaku.com",17],["wacul-ai.com",18],["qodeinteractive.com",19],["digitalvidya.com",19],["bbc.co.uk",20],["imovelguide.com.br",22],["facebook.com",23],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",23],["cnyfertility.com",24],["da-direkt.de",25],["westwing.de",26],["tv.golfnetwork.co.jp",27],["posterxxl.de",28],["bijutsutecho.com",29],["try-it.jp",30],["s0urce.io",31],["filefox.cc",32],["uol.com.br",33],["gazetadopovo.com.br",33],["indiatimes.com",33],["odiario.com",33],["otempo.com.br",33],["estadao.com.br",33],["bacaan.id",33],["ofuxico.com.br",33],["pentruea.com",33],["ciberduvidas.iscte-iul.pt",33],["globo.com",33],["citas.in",33],["blitzrechner.de",33],["emailfake.com",33],["lyrical-nonsense.com",33],["mediafax.ro",33],["economica.net",33],["polsatnews.pl",33],["novagente.pt",33],["arlinadzgn.com",33],["time.geekbang.org",[33,94]],["nowcoder.com",33],["libertatea.ro",33],["erinsakura.com",33],["yuque.com",33],["deepl.com",33],["digi24.ro",33],["onna.kr",33],["ziare.com",33],["agrointel.ro",33],["skyozora.com",33],["veneto.info",33],["transinfo.pl",33],["peliculas24.me",34],["roztoczanskipn.pl",34],["economictimes.indiatimes.com",[34,38]],["dzwignice.info",34],["script-stack.com",[34,70]],["mio.to",34],["husseinezzat.com",[34,45]],["taxo-acc.pl",34],["portalwrc.pl",34],["lublin.eu",34],["onlystream.tv",34],["dddance.party",34],["kapiert.de",34],["hitcena.pl",34],["tv-asahi.co.jp",34],["digitalfernsehen.de",34],["suzylu.co.uk",34],["music.apple.com",34],["skidrowcodex.net",34],["vsco.co",34],["nationalgeographic.com",34],["festival-cannes.com",34],["strcloud.in",34],["ufret.jp",34],["thenekodark.com",34],["artesacro.org",34],["poli-vsp.ru",34],["polyvsp.ru",34],["ananweb.jp",34],["daimangajiten.com",34],["digital.lasegunda.com",34],["hibiki-radio.jp",34],["garyfeinbergphotography.com",34],["clubulbebelusilor.ro",34],["gplinks.co",34],["ifdreamscametrue.com",34],["marksandspencer.com",34],["stowarzyszenie-impuls.eu",34],["viveretenerife.com",34],["oferty.dsautomobiles.pl",34],["wzamrani.com",34],["citroen.pl",34],["peugeot.pl",34],["wirtualnyspac3r.pl",34],["antena3.com",34],["lasexta.com",34],["pashplus.jp",34],["upvideo.to",34],["kpopsea.com",34],["cnki.net",34],["wpchen.net",34],["hongxiu.com",34],["readnovel.com",34],["uihtm.com",34],["uslsoftware.com",34],["rule34hentai.net",34],["cloudemb.com",34],["news24.jp",34],["gaminplay.com",34],["njjzxl.net",34],["voe.sx",[34,99]],["voe-unblock.com",[34,99]],["scrolller.com",34],["cocomanga.com",34],["nusantararom.org",[34,105]],["virpe.cc",34],["pobre.tv",[34,105]],["ukrainashop.com",34],["celtadigital.com",34],["matzoo.pl",34],["asia2tv.cn",34],["labs.j-novel.club",34],["turbo1.co",34],["futbollatam.com",34],["read.amazon.com",34],["box-manga.com",34],["the-masters-voice.com",34],["hemas.pl",34],["accgroup.vn",34],["btvnovinite.bg",34],["allcryptoz.net",34],["crewbase.net",34],["crewus.net",34],["shinbhu.net",34],["shinchu.net",34],["thumb8.net",34],["thumb9.net",34],["topcryptoz.net",34],["uniqueten.net",34],["ultraten.net",34],["cloudcomputingtopics.net",34],["bianity.net",34],["coinsparty.com",34],["postype.com",34],["lofter.com",[34,113]],["hentaihaven.xxx",34],["espn.com",34],["4media.com",34],["przegladpiaseczynski.pl",34],["freewaysintl.com",34],["cool-etv.net",34],["j91.asia",34],["sgd.de",34],["gaz.com.br",34],["knshow.com",35],["jusbrasil.com.br",36],["promobit.com.br",38],["techjunkie.com",38],["zerohedge.com",38],["1mg.com",38],["khou.com",38],["10tv.com",38],["artsy.net",39],["boards.net",39],["freeforums.net",39],["proboards.com",39],["tastycookery.com",40],["animeshouse.net",41],["free-mp3-download.net",41],["tepat.id",41],["techsupportall.com",42],["lugarcerto.com.br",43],["satcesc.com",44],["animatedshows.to",44],["miraculous.to",[44,63]],["jootc.com",45],["hikarinoakari.com",45],["operatorsekolahdbn.com",45],["wawlist.com",45],["statelibrary.us",46],["bigulnews.tv",48],["news.chosun.com",49],["androidweblog.com",50],["cronista.com",51],["fcportables.com",52],["venea.net",53],["uta-net.com",54],["downloadtutorials.net",[54,70]],["blog.naver.com",54],["myschool-eng.com",55],["orangespotlight.com",56],["th-world.com",[56,76]],["itvn.pl",57],["itvnextra.pl",57],["kuchniaplus.pl",57],["miniminiplus.pl",57],["player.pl",57],["ttv.pl",57],["tvn.pl",57],["tvn24.pl",57],["tvn24bis.pl",57],["tvn7.pl",57],["tvnfabula.pl",57],["tvnstyle.pl",57],["tvnturbo.pl",57],["x-link.pl",57],["x-news.pl",57],["kickante.com.br",16],["thestar.com.my",16],["corriereadriatico.it",16],["ilsole24ore.com",16],["scribd.com",58],["thehouseofportable.com",59],["ntvspor.net",59],["book.zhulang.com",59],["tadu.com",59],["selfstudyhistory.com",60],["lokercirebon.com",61],["avdelphi.com",62],["maxstream.video",63],["wpb.shueisha.co.jp",63],["tiktok.com",[63,74]],["vedantu.com",63],["zsti.zsti.civ.pl",63],["prefulfilloverdoor.com",[63,100]],["phenomenalityuniform.com",[63,100]],["nectareousoverelate.com",[63,100]],["timberwoodanotia.com",[63,100]],["strawberriesporail.com",[63,100]],["valeronevijao.com",[63,100]],["cigarlessarefy.com",[63,100]],["figeterpiazine.com",[63,100]],["yodelswartlike.com",[63,100]],["generatesnitrosate.com",[63,100]],["crownmakermacaronicism.com",[63,100]],["chromotypic.com",[63,100]],["gamoneinterrupted.com",[63,100]],["metagnathtuggers.com",[63,100]],["wolfdyslectic.com",[63,100]],["rationalityaloelike.com",[63,100]],["sizyreelingly.com",[63,100]],["simpulumlamerop.com",[63,100]],["urochsunloath.com",[63,100]],["monorhinouscassaba.com",[63,100]],["counterclockwisejacky.com",[63,100]],["35volitantplimsoles5.com",[63,100]],["scatch176duplicities.com",[63,100]],["antecoxalbobbing1010.com",[63,100]],["boonlessbestselling244.com",[63,100]],["cyamidpulverulence530.com",[63,100]],["guidon40hyporadius9.com",[63,100]],["449unceremoniousnasoseptal.com",[63,100]],["19turanosephantasia.com",[63,100]],["30sensualizeexpression.com",[63,100]],["321naturelikefurfuroid.com",[63,100]],["745mingiestblissfully.com",[63,100]],["availedsmallest.com",[63,100]],["greaseball6eventual20.com",[63,100]],["toxitabellaeatrebates306.com",[63,100]],["20demidistance9elongations.com",[63,100]],["audaciousdefaulthouse.com",[63,100]],["fittingcentermondaysunday.com",[63,100]],["fraudclatterflyingcar.com",[63,100]],["launchreliantcleaverriver.com",[63,100]],["matriculant401merited.com",[63,100]],["realfinanceblogcenter.com",[63,100]],["reputationsheriffkennethsand.com",[63,100]],["telyn610zoanthropy.com",[63,100]],["tubelessceliolymph.com",[63,100]],["tummulerviolableness.com",[63,100]],["un-block-voe.net",[63,100]],["v-o-e-unblock.com",[63,100]],["voe-un-block.com",[63,100]],["voeun-block.net",[63,100]],["voeunbl0ck.com",[63,100]],["voeunblck.com",[63,100]],["voeunblk.com",[63,100]],["voeunblock3.com",[63,100]],["audiotools.pro",63],["magesy.blog",63],["magesypro.pro",63],["audioztools.com",63],["www.ntv.co.jp",63],["faptiti.com",63],["wormate.io",63],["selfstudys.com",63],["adslink.pw",63],["jpopsingles.eu",63],["vinstartheme.com",[63,122]],["leakedzone.com",[63,125]],["fjordd.com",63],["alphapolis.co.jp",64],["juejin.cn",64],["sweetslyrics.com",64],["thegatewaypundit.com",65],["thegearhunt.com",66],["jfdb.jp",67],["loginhit.com.ng",67],["charbelnemnom.com",67],["bphimmoi.net",67],["goodhub.xyz",67],["edailybuzz.com",69],["zhihu.com",69],["qidian.com",69],["invado.pl",69],["webnovel.com",69],["bajecnavareska.sk",70],["lunas.pro",70],["onlinefreecourse.net",70],["pisr.org",70],["uplod.net",70],["thewpclub.net",70],["thememazing.com",70],["themebanks.com",70],["mesquitaonline.com",70],["skandynawiainfo.pl",70],["onlinecoursebay.com",70],["magnet-novels.com",71],["dreamsfriend.com",72],["trakteer.id",73],["699pic.com",73],["kutub3lpdf.com",75],["sklep-agroland.pl",77],["polagriparts.pl",78],["nordkorea-info.de",79],["geotips.net",80],["hardcoregames.ca",81],["lataifas.ro",82],["toppremiumpro.com",83],["wattpad.com",84],["starbene.it",85],["fauxid.com",86],["androidtvbox.eu",87],["nicematin.com",88],["bilibili.com",89],["yamibo.com",90],["fimfiction.net",91],["moegirl.org.cn",92],["bbs.mihoyo.com",93],["jianshu.com",93],["leetcode-cn.com",93],["peekme.cc",95],["ihbarweb.org.tr",96],["baixedetudo.net.br",97],["gardenia.net",98],["wpking.in",101],["hollywoodmask.com",102],["mbalib.com",102],["wenku.baidu.com",103],["mooc.chaoxing.com",104],["www-daftarharga.blogspot.com",105],["realpython.com",106],["linkmate.xyz",107],["cristelageorgescu.ro",108],["novelpia.com",109],["privivkainfo.ru",110],["frameboxxindore.com",110],["descargatepelis.com",111],["vercalendario.info",112],["zipcode.com.ng",112],["poipiku.com",114],["postcourier.com.pg",115],["gmx.co.uk",117],["gmx.com",117],["likey.me",118],["wallpaperaccess.com",119],["shortform.com",120],["joysound.com",121],["colors.sonicthehedgehog.com",123],["senpa.io",124],["txori.com",124],["comikey.com",126],["translate.goog",127],["oreilly.com",128]]);

const entitiesMap = new Map([["mangaku",34],["dood",34],["streamtape",34],["asiatv",34],["bg-gledai",34],["descarga-animex",37],["tabonitobrasil",47],["anisubindo",47],["wstream",63],["voe-unblock",[63,100]],["pobre",[63,116]],["bmovies",68]]);

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
