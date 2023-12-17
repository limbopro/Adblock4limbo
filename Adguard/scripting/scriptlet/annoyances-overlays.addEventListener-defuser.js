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

const argsList = [["DOMContentLoaded","admiral"],["error","admiral"],["load","theModal"],["load","XV.ad_block"],["DOMContentLoaded","adsBlocked"],["load","Dislike intrusive ads"],["load","adblock_whitelist"],["DOMContentLoaded","replaceAdsWithFallbackImages"],["np.detect"],["load",".offsetHeight == 0"],["load","adBlock"],["/load|error/",".head.removeChild("],["prepare-exit-modal","=>"],["mouseout","relatedTarget"],["DOMContentLoaded","InactivityPopin"],["load","openExitPopup"],["scroll","scrollTop())+n-i>o/2"],["click","interstitial"],["mouseleave","scribd_ad"],["mouseleave"],["popstate","addEventProcessor"],["scroll","eventHandle.elem"],["wheel"],["scroll","documentElement.scrollTop"],["scroll","_onscroll"],["mouseout","#modalSair"],["scroll","showPopup"],["scroll",".open()"],["mouseout","event.dispatch.apply"],["ww-open-overlay","scrollTop"],["load","setVideoTop"],["load","newsletter"],["scroll","t.attemptLoad"],["load","event.dispatch.apply"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["mouseout"],["scroll"],["DOMContentLoaded",".js-popup-adblock"],["/^(contextmenu|keydown)$/"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["contextmenu","a"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["visibilitychange","pagehide"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"]];

const hostnamesMap = new Map([["gamerevolution.com",0],["onmsft.com",0],["cbssports.com",1],["visualcapitalist.com",1],["news8000.com",1],["kxly.com",1],["thethings.com",1],["koamnewsnow.com",1],["gfinityesports.com",1],["dualshockers.com",1],["insider-gaming.com",1],["thenerdstash.com",1],["pocketnow.com",1],["ktvz.com",1],["247sports.com",1],["movieweb.com",1],["realclearpolitics.com",1],["givemesport.com",1],["xda-developers.com",1],["collider.com",1],["pocket-lint.com",1],["hotcars.com",1],["topspeed.com",1],["thegamer.com",1],["makeuseof.com",1],["screenrant.com",1],["androidpolice.com",1],["cbr.com",1],["forx.mazen-ve3.com",2],["xenvn.com",3],["mysb555.com",4],["timeanddate.com",[5,24]],["slideshare.net",[6,18]],["warcraftlogs.com",7],["nwdb.info",8],["explorecams.com",8],["tiermaker.com",8],["freeforumzone.com",9],["megogo.sport",10],["megogo.ru",10],["ynet.co.il",11],["infobae.com",11],["abcnyheter.no",11],["sme.sk",11],["yourdictionary.com",11],["foxnews.com",11],["retailmenot.com",12],["later.com",13],["actu.orange.fr",14],["financer.com",15],["blog.csdn.net",[16,67]],["boyfriendtv.com",17],["milenio.com",[19,36]],["jakiwniosek.pl",19],["hikakaku.com",20],["wacul-ai.com",21],["qodeinteractive.com",22],["digitalvidya.com",22],["bbc.co.uk",23],["imovelguide.com.br",25],["facebook.com",26],["facebookwkhpilnemxj7asaniu7vnjjbiltxjqhye3mhbshg7kx5tfyd.onion",26],["cnyfertility.com",27],["da-direkt.de",28],["westwing.de",29],["tv.golfnetwork.co.jp",30],["posterxxl.de",31],["bijutsutecho.com",32],["try-it.jp",33],["s0urce.io",34],["filefox.cc",35],["uol.com.br",36],["gazetadopovo.com.br",36],["indiatimes.com",36],["odiario.com",36],["otempo.com.br",36],["estadao.com.br",36],["bacaan.id",36],["ofuxico.com.br",36],["pentruea.com",36],["ciberduvidas.iscte-iul.pt",36],["globo.com",36],["citas.in",36],["blitzrechner.de",36],["emailfake.com",36],["lyrical-nonsense.com",36],["mediafax.ro",36],["economica.net",36],["polsatnews.pl",36],["novagente.pt",36],["arlinadzgn.com",36],["nowcoder.com",36],["libertatea.ro",36],["erinsakura.com",36],["yuque.com",36],["deepl.com",36],["digi24.ro",36],["onna.kr",36],["ziare.com",36],["agrointel.ro",36],["skyozora.com",36],["veneto.info",36],["transinfo.pl",36],["news.17173.com",36],["peliculas24.me",37],["roztoczanskipn.pl",37],["economictimes.indiatimes.com",[37,41]],["dzwignice.info",37],["script-stack.com",[37,73]],["mio.to",37],["husseinezzat.com",[37,48]],["taxo-acc.pl",37],["portalwrc.pl",37],["lublin.eu",37],["onlystream.tv",37],["dddance.party",37],["kapiert.de",37],["hitcena.pl",37],["tv-asahi.co.jp",37],["digitalfernsehen.de",37],["suzylu.co.uk",37],["music.apple.com",37],["skidrowcodex.net",37],["ds2play.com",37],["vsco.co",37],["nationalgeographic.com",37],["festival-cannes.com",37],["strcloud.in",37],["ufret.jp",37],["thenekodark.com",37],["artesacro.org",37],["poli-vsp.ru",37],["polyvsp.ru",37],["ananweb.jp",37],["daimangajiten.com",37],["digital.lasegunda.com",37],["hibiki-radio.jp",37],["garyfeinbergphotography.com",37],["clubulbebelusilor.ro",37],["gplinks.co",37],["ifdreamscametrue.com",37],["marksandspencer.com",37],["stowarzyszenie-impuls.eu",37],["viveretenerife.com",37],["oferty.dsautomobiles.pl",37],["wzamrani.com",37],["citroen.pl",37],["peugeot.pl",37],["wirtualnyspac3r.pl",37],["antena3.com",37],["lasexta.com",37],["pashplus.jp",37],["upvideo.to",37],["kpopsea.com",37],["cnki.net",37],["wpchen.net",37],["hongxiu.com",37],["readnovel.com",37],["uihtm.com",37],["uslsoftware.com",37],["rule34hentai.net",37],["cloudemb.com",37],["news24.jp",37],["gaminplay.com",37],["njjzxl.net",37],["voe.sx",[37,101]],["voe-unblock.com",[37,101]],["scrolller.com",37],["cocomanga.com",37],["nusantararom.org",[37,107]],["virpe.cc",37],["pobre.tv",[37,107]],["ukrainashop.com",37],["celtadigital.com",37],["matzoo.pl",37],["asia2tv.cn",37],["labs.j-novel.club",37],["turbo1.co",37],["futbollatam.com",37],["read.amazon.com",37],["box-manga.com",37],["the-masters-voice.com",37],["hemas.pl",37],["accgroup.vn",37],["btvnovinite.bg",37],["allcryptoz.net",37],["crewbase.net",37],["crewus.net",37],["shinbhu.net",37],["shinchu.net",37],["thumb8.net",37],["thumb9.net",37],["topcryptoz.net",37],["uniqueten.net",37],["ultraten.net",37],["cloudcomputingtopics.net",37],["bianity.net",37],["coinsparty.com",37],["postype.com",37],["lofter.com",[37,115]],["hentaihaven.xxx",37],["espn.com",37],["4media.com",37],["przegladpiaseczynski.pl",37],["freewaysintl.com",37],["cool-etv.net",37],["j91.asia",37],["sgd.de",37],["gaz.com.br",37],["dicasfinanceirasbr.com",37],["dicasdevalor.net",37],["dicasdefinancas.net",37],["guiasaude.info",37],["felizemforma.com",37],["financasdeouro.com",37],["mangaschan.net",37],["sssscanlator.com",37],["nightscans.net",37],["cypherscans.xyz",37],["twitchemotes.com",37],["smartkhabrinews.com",37],["streamvid.net",37],["knshow.com",38],["jusbrasil.com.br",39],["promobit.com.br",41],["techjunkie.com",41],["zerohedge.com",41],["1mg.com",41],["khou.com",41],["10tv.com",41],["artsy.net",42],["boards.net",42],["freeforums.net",42],["proboards.com",42],["tastycookery.com",43],["animeshouse.net",44],["free-mp3-download.net",44],["tepat.id",44],["techsupportall.com",45],["lugarcerto.com.br",46],["satcesc.com",47],["animatedshows.to",47],["miraculous.to",[47,66]],["jootc.com",48],["hikarinoakari.com",48],["operatorsekolahdbn.com",48],["wawlist.com",48],["statelibrary.us",49],["bigulnews.tv",51],["news.chosun.com",52],["androidweblog.com",53],["cronista.com",54],["fcportables.com",55],["venea.net",56],["uta-net.com",57],["downloadtutorials.net",[57,73]],["blog.naver.com",57],["myschool-eng.com",58],["orangespotlight.com",59],["th-world.com",[59,79]],["itvn.pl",60],["itvnextra.pl",60],["kuchniaplus.pl",60],["miniminiplus.pl",60],["player.pl",60],["ttv.pl",60],["tvn.pl",60],["tvn24.pl",60],["tvn24bis.pl",60],["tvn7.pl",60],["tvnfabula.pl",60],["tvnstyle.pl",60],["tvnturbo.pl",60],["x-link.pl",60],["x-news.pl",60],["kickante.com.br",19],["thestar.com.my",19],["corriereadriatico.it",19],["ilsole24ore.com",19],["scribd.com",61],["thehouseofportable.com",62],["ntvspor.net",62],["book.zhulang.com",62],["tadu.com",62],["selfstudyhistory.com",63],["lokercirebon.com",64],["avdelphi.com",65],["maxstream.video",66],["wpb.shueisha.co.jp",66],["tiktok.com",[66,77]],["vedantu.com",66],["zsti.zsti.civ.pl",66],["kathleenmemberhistory.com",[66,102]],["nonesnanking.com",[66,102]],["prefulfilloverdoor.com",[66,102]],["phenomenalityuniform.com",[66,102]],["nectareousoverelate.com",[66,102]],["timberwoodanotia.com",[66,102]],["strawberriesporail.com",[66,102]],["valeronevijao.com",[66,102]],["cigarlessarefy.com",[66,102]],["figeterpiazine.com",[66,102]],["yodelswartlike.com",[66,102]],["generatesnitrosate.com",[66,102]],["crownmakermacaronicism.com",[66,102]],["chromotypic.com",[66,102]],["gamoneinterrupted.com",[66,102]],["metagnathtuggers.com",[66,102]],["wolfdyslectic.com",[66,102]],["rationalityaloelike.com",[66,102]],["sizyreelingly.com",[66,102]],["simpulumlamerop.com",[66,102]],["urochsunloath.com",[66,102]],["monorhinouscassaba.com",[66,102]],["counterclockwisejacky.com",[66,102]],["35volitantplimsoles5.com",[66,102]],["scatch176duplicities.com",[66,102]],["antecoxalbobbing1010.com",[66,102]],["boonlessbestselling244.com",[66,102]],["cyamidpulverulence530.com",[66,102]],["guidon40hyporadius9.com",[66,102]],["449unceremoniousnasoseptal.com",[66,102]],["19turanosephantasia.com",[66,102]],["30sensualizeexpression.com",[66,102]],["321naturelikefurfuroid.com",[66,102]],["745mingiestblissfully.com",[66,102]],["availedsmallest.com",[66,102]],["greaseball6eventual20.com",[66,102]],["toxitabellaeatrebates306.com",[66,102]],["20demidistance9elongations.com",[66,102]],["audaciousdefaulthouse.com",[66,102]],["fittingcentermondaysunday.com",[66,102]],["fraudclatterflyingcar.com",[66,102]],["launchreliantcleaverriver.com",[66,102]],["matriculant401merited.com",[66,102]],["realfinanceblogcenter.com",[66,102]],["reputationsheriffkennethsand.com",[66,102]],["telyn610zoanthropy.com",[66,102]],["tubelessceliolymph.com",[66,102]],["tummulerviolableness.com",[66,102]],["un-block-voe.net",[66,102]],["v-o-e-unblock.com",[66,102]],["voe-un-block.com",[66,102]],["voeun-block.net",[66,102]],["voeunbl0ck.com",[66,102]],["voeunblck.com",[66,102]],["voeunblk.com",[66,102]],["voeunblock3.com",[66,102]],["audiotools.pro",66],["magesy.blog",66],["magesypro.pro",66],["audioztools.com",66],["www.ntv.co.jp",66],["faptiti.com",66],["wormate.io",66],["selfstudys.com",66],["adslink.pw",66],["jpopsingles.eu",66],["vinstartheme.com",[66,124]],["leakedzone.com",[66,127]],["fjordd.com",66],["seriesperu.com",66],["zippyupload.com",66],["alphapolis.co.jp",67],["juejin.cn",67],["sweetslyrics.com",67],["thegatewaypundit.com",68],["thegearhunt.com",69],["jfdb.jp",70],["loginhit.com.ng",70],["charbelnemnom.com",70],["bphimmoi.net",70],["goodhub.xyz",70],["edailybuzz.com",72],["zhihu.com",72],["qidian.com",72],["invado.pl",72],["webnovel.com",72],["bajecnavareska.sk",73],["lunas.pro",73],["onlinefreecourse.net",73],["pisr.org",73],["uplod.net",73],["thewpclub.net",73],["thememazing.com",73],["themebanks.com",73],["mesquitaonline.com",73],["skandynawiainfo.pl",73],["onlinecoursebay.com",73],["magnet-novels.com",74],["dreamsfriend.com",75],["trakteer.id",76],["699pic.com",76],["kutub3lpdf.com",78],["sklep-agroland.pl",80],["polagriparts.pl",81],["nordkorea-info.de",82],["geotips.net",83],["hardcoregames.ca",84],["lataifas.ro",85],["daotranslate.com",85],["toppremiumpro.com",86],["wattpad.com",87],["starbene.it",88],["fauxid.com",89],["androidtvbox.eu",90],["nicematin.com",91],["bilibili.com",92],["yamibo.com",93],["fimfiction.net",94],["moegirl.org.cn",95],["bbs.mihoyo.com",96],["peekme.cc",97],["ihbarweb.org.tr",98],["baixedetudo.net.br",99],["gardenia.net",100],["wpking.in",103],["hollywoodmask.com",104],["mbalib.com",104],["wenku.baidu.com",105],["mooc.chaoxing.com",106],["www-daftarharga.blogspot.com",107],["realpython.com",108],["linkmate.xyz",109],["cristelageorgescu.ro",110],["novelpia.com",111],["privivkainfo.ru",112],["frameboxxindore.com",112],["descargatepelis.com",113],["vercalendario.info",114],["zipcode.com.ng",114],["poipiku.com",116],["postcourier.com.pg",117],["gmx.co.uk",119],["gmx.com",119],["likey.me",120],["wallpaperaccess.com",121],["shortform.com",122],["joysound.com",123],["colors.sonicthehedgehog.com",125],["senpa.io",126],["txori.com",126],["comikey.com",128],["translate.goog",129],["oreilly.com",130],["alfred.camera",131],["wrosinski.pl",132],["wtsp.com",133],["starzunion.com",134]]);

const entitiesMap = new Map([["mangaku",37],["dood",37],["streamtape",37],["asiatv",37],["bg-gledai",37],["descarga-animex",40],["tabonitobrasil",50],["anisubindo",50],["wstream",66],["voe-unblock",[66,102]],["pobre",[66,118]],["bmovies",71]]);

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
