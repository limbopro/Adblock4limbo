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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","theModal"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["DOMContentLoaded","InactivityPopin"],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["message","data"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["visualcapitalist.com",1],["news8000.com",1],["kxly.com",1],["thethings.com",1],["koamnewsnow.com",1],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["forx.mazen-ve3.com",2],["xenvn.com",3],["mysb555.com",4],["timeanddate.com",[5,22]],["slideshare.net",[6,16]],["warcraftlogs.com",7],["nwdb.info",8],["explorecams.com",8],["tiermaker.com",8],["freeforumzone.com",9],["megogo.sport",10],["megogo.ru",10],["ynet.co.il",11],["infobae.com",11],["abcnyheter.no",11],["sme.sk",11],["yourdictionary.com",11],["foxnews.com",11],["actu.orange.fr",12],["financer.com",13],["blog.csdn.net",[14,65]],["boyfriendtv.com",15],["milenio.com",[17,34]],["jakiwniosek.pl",17],["hikakaku.com",18],["wacul-ai.com",19],["qodeinteractive.com",20],["digitalvidya.com",20],["bbc.co.uk",21],["imovelguide.com.br",23],["facebook.com",24],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",24],["cnyfertility.com",25],["da-direkt.de",26],["westwing.de",27],["tv.golfnetwork.co.jp",28],["posterxxl.de",29],["bijutsutecho.com",30],["try-it.jp",31],["s0urce.io",32],["filefox.cc",33],["uol.com.br",34],["gazetadopovo.com.br",34],["indiatimes.com",34],["odiario.com",34],["otempo.com.br",34],["estadao.com.br",34],["bacaan.id",34],["ofuxico.com.br",34],["pentruea.com",34],["ciberduvidas.iscte-iul.pt",34],["globo.com",34],["citas.in",34],["blitzrechner.de",34],["emailfake.com",34],["lyrical-nonsense.com",34],["mediafax.ro",34],["economica.net",34],["polsatnews.pl",34],["novagente.pt",34],["arlinadzgn.com",34],["nowcoder.com",34],["libertatea.ro",34],["erinsakura.com",34],["yuque.com",34],["deepl.com",34],["digi24.ro",34],["onna.kr",34],["ziare.com",34],["agrointel.ro",34],["skyozora.com",34],["veneto.info",34],["transinfo.pl",34],["jornaljoca.com.br",34],["peliculas24.me",35],["roztoczanskipn.pl",35],["economictimes.indiatimes.com",[35,39]],["dzwignice.info",35],["script-stack.com",[35,71]],["mio.to",35],["husseinezzat.com",[35,46]],["taxo-acc.pl",35],["portalwrc.pl",35],["lublin.eu",35],["onlystream.tv",35],["dddance.party",35],["kapiert.de",35],["hitcena.pl",35],["tv-asahi.co.jp",35],["digitalfernsehen.de",35],["suzylu.co.uk",35],["music.apple.com",35],["skidrowcodex.net",35],["vsco.co",35],["nationalgeographic.com",35],["festival-cannes.com",35],["strcloud.in",35],["ufret.jp",35],["thenekodark.com",35],["artesacro.org",35],["poli-vsp.ru",35],["polyvsp.ru",35],["ananweb.jp",35],["daimangajiten.com",35],["digital.lasegunda.com",35],["hibiki-radio.jp",35],["garyfeinbergphotography.com",35],["clubulbebelusilor.ro",35],["gplinks.co",35],["ifdreamscametrue.com",35],["marksandspencer.com",35],["stowarzyszenie-impuls.eu",35],["viveretenerife.com",35],["oferty.dsautomobiles.pl",35],["wzamrani.com",35],["citroen.pl",35],["peugeot.pl",35],["wirtualnyspac3r.pl",35],["antena3.com",35],["lasexta.com",35],["pashplus.jp",35],["upvideo.to",35],["kpopsea.com",35],["cnki.net",35],["wpchen.net",35],["hongxiu.com",35],["readnovel.com",35],["uihtm.com",35],["uslsoftware.com",35],["rule34hentai.net",35],["cloudemb.com",35],["news24.jp",35],["gaminplay.com",35],["njjzxl.net",35],["voe.sx",[35,99]],["voe-unblock.com",[35,99]],["scrolller.com",35],["cocomanga.com",35],["nusantararom.org",[35,105]],["virpe.cc",35],["pobre.tv",[35,105]],["ukrainashop.com",35],["celtadigital.com",35],["matzoo.pl",35],["asia2tv.cn",35],["labs.j-novel.club",35],["turbo1.co",35],["futbollatam.com",35],["read.amazon.com",35],["box-manga.com",35],["the-masters-voice.com",35],["hemas.pl",35],["accgroup.vn",35],["btvnovinite.bg",35],["allcryptoz.net",35],["crewbase.net",35],["crewus.net",35],["shinbhu.net",35],["shinchu.net",35],["thumb8.net",35],["thumb9.net",35],["topcryptoz.net",35],["uniqueten.net",35],["ultraten.net",35],["cloudcomputingtopics.net",35],["bianity.net",35],["coinsparty.com",35],["postype.com",35],["lofter.com",[35,113]],["hentaihaven.xxx",35],["espn.com",35],["4media.com",35],["przegladpiaseczynski.pl",35],["freewaysintl.com",35],["cool-etv.net",35],["j91.asia",35],["sgd.de",35],["gaz.com.br",35],["dicasfinanceirasbr.com",35],["dicasdevalor.net",35],["dicasdefinancas.net",35],["knshow.com",36],["jusbrasil.com.br",37],["promobit.com.br",39],["techjunkie.com",39],["zerohedge.com",39],["1mg.com",39],["khou.com",39],["10tv.com",39],["artsy.net",40],["boards.net",40],["freeforums.net",40],["proboards.com",40],["tastycookery.com",41],["animeshouse.net",42],["free-mp3-download.net",42],["tepat.id",42],["techsupportall.com",43],["lugarcerto.com.br",44],["satcesc.com",45],["animatedshows.to",45],["miraculous.to",[45,64]],["jootc.com",46],["hikarinoakari.com",46],["operatorsekolahdbn.com",46],["wawlist.com",46],["statelibrary.us",47],["bigulnews.tv",49],["news.chosun.com",50],["androidweblog.com",51],["cronista.com",52],["fcportables.com",53],["venea.net",54],["uta-net.com",55],["downloadtutorials.net",[55,71]],["blog.naver.com",55],["myschool-eng.com",56],["orangespotlight.com",57],["th-world.com",[57,77]],["itvn.pl",58],["itvnextra.pl",58],["kuchniaplus.pl",58],["miniminiplus.pl",58],["player.pl",58],["ttv.pl",58],["tvn.pl",58],["tvn24.pl",58],["tvn24bis.pl",58],["tvn7.pl",58],["tvnfabula.pl",58],["tvnstyle.pl",58],["tvnturbo.pl",58],["x-link.pl",58],["x-news.pl",58],["kickante.com.br",17],["thestar.com.my",17],["corriereadriatico.it",17],["ilsole24ore.com",17],["scribd.com",59],["thehouseofportable.com",60],["ntvspor.net",60],["book.zhulang.com",60],["tadu.com",60],["selfstudyhistory.com",61],["lokercirebon.com",62],["avdelphi.com",63],["maxstream.video",64],["wpb.shueisha.co.jp",64],["tiktok.com",[64,75]],["vedantu.com",64],["zsti.zsti.civ.pl",64],["kathleenmemberhistory.com",[64,100]],["nonesnanking.com",[64,100]],["prefulfilloverdoor.com",[64,100]],["phenomenalityuniform.com",[64,100]],["nectareousoverelate.com",[64,100]],["timberwoodanotia.com",[64,100]],["strawberriesporail.com",[64,100]],["valeronevijao.com",[64,100]],["cigarlessarefy.com",[64,100]],["figeterpiazine.com",[64,100]],["yodelswartlike.com",[64,100]],["generatesnitrosate.com",[64,100]],["crownmakermacaronicism.com",[64,100]],["chromotypic.com",[64,100]],["gamoneinterrupted.com",[64,100]],["metagnathtuggers.com",[64,100]],["wolfdyslectic.com",[64,100]],["rationalityaloelike.com",[64,100]],["sizyreelingly.com",[64,100]],["simpulumlamerop.com",[64,100]],["urochsunloath.com",[64,100]],["monorhinouscassaba.com",[64,100]],["counterclockwisejacky.com",[64,100]],["35volitantplimsoles5.com",[64,100]],["scatch176duplicities.com",[64,100]],["antecoxalbobbing1010.com",[64,100]],["boonlessbestselling244.com",[64,100]],["cyamidpulverulence530.com",[64,100]],["guidon40hyporadius9.com",[64,100]],["449unceremoniousnasoseptal.com",[64,100]],["19turanosephantasia.com",[64,100]],["30sensualizeexpression.com",[64,100]],["321naturelikefurfuroid.com",[64,100]],["745mingiestblissfully.com",[64,100]],["availedsmallest.com",[64,100]],["greaseball6eventual20.com",[64,100]],["toxitabellaeatrebates306.com",[64,100]],["20demidistance9elongations.com",[64,100]],["audaciousdefaulthouse.com",[64,100]],["fittingcentermondaysunday.com",[64,100]],["fraudclatterflyingcar.com",[64,100]],["launchreliantcleaverriver.com",[64,100]],["matriculant401merited.com",[64,100]],["realfinanceblogcenter.com",[64,100]],["reputationsheriffkennethsand.com",[64,100]],["telyn610zoanthropy.com",[64,100]],["tubelessceliolymph.com",[64,100]],["tummulerviolableness.com",[64,100]],["un-block-voe.net",[64,100]],["v-o-e-unblock.com",[64,100]],["voe-un-block.com",[64,100]],["voeun-block.net",[64,100]],["voeunbl0ck.com",[64,100]],["voeunblck.com",[64,100]],["voeunblk.com",[64,100]],["voeunblock3.com",[64,100]],["audiotools.pro",64],["magesy.blog",64],["magesypro.pro",64],["audioztools.com",64],["www.ntv.co.jp",64],["faptiti.com",64],["wormate.io",64],["selfstudys.com",64],["adslink.pw",64],["jpopsingles.eu",64],["vinstartheme.com",[64,122]],["leakedzone.com",[64,125]],["fjordd.com",64],["seriesperu.com",64],["alphapolis.co.jp",65],["juejin.cn",65],["sweetslyrics.com",65],["thegatewaypundit.com",66],["thegearhunt.com",67],["jfdb.jp",68],["loginhit.com.ng",68],["charbelnemnom.com",68],["bphimmoi.net",68],["goodhub.xyz",68],["edailybuzz.com",70],["zhihu.com",70],["qidian.com",70],["invado.pl",70],["webnovel.com",70],["bajecnavareska.sk",71],["lunas.pro",71],["onlinefreecourse.net",71],["pisr.org",71],["uplod.net",71],["thewpclub.net",71],["thememazing.com",71],["themebanks.com",71],["mesquitaonline.com",71],["skandynawiainfo.pl",71],["onlinecoursebay.com",71],["magnet-novels.com",72],["dreamsfriend.com",73],["trakteer.id",74],["699pic.com",74],["kutub3lpdf.com",76],["sklep-agroland.pl",78],["polagriparts.pl",79],["nordkorea-info.de",80],["geotips.net",81],["hardcoregames.ca",82],["lataifas.ro",83],["daotranslate.com",83],["toppremiumpro.com",84],["wattpad.com",85],["starbene.it",86],["fauxid.com",87],["androidtvbox.eu",88],["nicematin.com",89],["bilibili.com",90],["yamibo.com",91],["fimfiction.net",92],["moegirl.org.cn",93],["bbs.mihoyo.com",94],["peekme.cc",95],["ihbarweb.org.tr",96],["baixedetudo.net.br",97],["gardenia.net",98],["wpking.in",101],["hollywoodmask.com",102],["mbalib.com",102],["wenku.baidu.com",103],["mooc.chaoxing.com",104],["www-daftarharga.blogspot.com",105],["realpython.com",106],["linkmate.xyz",107],["cristelageorgescu.ro",108],["novelpia.com",109],["privivkainfo.ru",110],["frameboxxindore.com",110],["descargatepelis.com",111],["vercalendario.info",112],["zipcode.com.ng",112],["poipiku.com",114],["postcourier.com.pg",115],["gmx.co.uk",117],["gmx.com",117],["likey.me",118],["wallpaperaccess.com",119],["shortform.com",120],["joysound.com",121],["colors.sonicthehedgehog.com",123],["senpa.io",124],["txori.com",124],["comikey.com",126],["translate.goog",127],["oreilly.com",128],["alfred.camera",129],["blog.bitsrc.io",130],["javascript.plainenglish.io",130],["faun.pub",130],["wrosinski.pl",131],["wtsp.com",132]]);

const entitiesMap = new Map([["mangaku",35],["dood",35],["streamtape",35],["asiatv",35],["bg-gledai",35],["descarga-animex",38],["tabonitobrasil",48],["anisubindo",48],["wstream",64],["voe-unblock",[64,100]],["pobre",[64,116]],["bmovies",69]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
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
