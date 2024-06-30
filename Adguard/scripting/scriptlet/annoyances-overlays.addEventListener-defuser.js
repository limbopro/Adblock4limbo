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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["scroll"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["DOMContentLoaded",".js-popup-adblock"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["/^(contextmenu|keydown)$/"],["contextmenu","a"],["mouseleave"],["/^(mouseout|mouseleave)$/"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/blur|mousedown|mouseenter|mouseleave/"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["mouseout"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","[native code]"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["mouseleave","scribd_ad"],["","login"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/select|copy|contextmenu/"],["/cut|copy|paste|contextmenu/"],["keydown","123"],["mousedown","undefined","elements","body"],["afterKeydown"],["keydown","void"],["copy","void"],["load","ad-wrap"],["/contextmenu|selectstart|dragstart/"],["copy","","elements","#__next"]];

const hostnamesMap = new Map([["nationalgeographic.com",[0,4]],["artsy.net",0],["boards.net",0],["freeforums.net",0],["proboards.com",0],["s0urce.io",1],["filefox.cc",2],["uol.com.br",3],["gazetadopovo.com.br",3],["indiatimes.com",3],["odiario.com",3],["otempo.com.br",3],["estadao.com.br",3],["bacaan.id",3],["ofuxico.com.br",3],["pentruea.com",3],["ciberduvidas.iscte-iul.pt",3],["globo.com",3],["citas.in",3],["blitzrechner.de",3],["emailfake.com",3],["lyrical-nonsense.com",3],["mediafax.ro",3],["economica.net",3],["polsatnews.pl",3],["novagente.pt",3],["arlinadzgn.com",3],["bilibili.com",[3,58]],["nowcoder.com",3],["libertatea.ro",3],["erinsakura.com",3],["yuque.com",3],["deepl.com",3],["digi24.ro",3],["onna.kr",3],["ziare.com",3],["agrointel.ro",3],["skyozora.com",3],["milenio.com",3],["veneto.info",3],["edurev.in",3],["transinfo.pl",3],["news.17173.com",3],["chowhound.com",3],["explore.com",3],["foodie.com",3],["foodrepublic.com",3],["glam.com",3],["grunge.com",3],["healthdigest.com",3],["housedigest.com",3],["looper.com",3],["mashed.com",3],["moneydigest.com",3],["nickiswift.com",3],["outdoorguide.com",3],["slashfilm.com",3],["slashgear.com",3],["tastingtable.com",3],["thedailymeal.com",3],["thelist.com",3],["women.com",3],["wrestlinginc.com",3],["abril.com.br",3],["sarthaks.com",3],["delfi.lt",3],["pendulumedu.com",3],["bloomberglinea.com",3],["bloomberglinea.com.br",3],["peliculas24.me",4],["roztoczanskipn.pl",4],["economictimes.indiatimes.com",4],["dzwignice.info",4],["script-stack.com",[4,39]],["mio.to",4],["husseinezzat.com",[4,12]],["taxo-acc.pl",4],["portalwrc.pl",4],["lublin.eu",4],["onlystream.tv",4],["dddance.party",4],["kapiert.de",4],["hitcena.pl",4],["tv-asahi.co.jp",4],["digitalfernsehen.de",4],["suzylu.co.uk",4],["music.apple.com",4],["skidrowcodex.net",4],["ds2play.com",4],["ds2video.com",4],["d0o0d.com",4],["vsco.co",4],["festival-cannes.com",4],["strcloud.in",4],["ufret.jp",4],["thenekodark.com",4],["artesacro.org",4],["poli-vsp.ru",4],["polyvsp.ru",4],["ananweb.jp",4],["daimangajiten.com",4],["digital.lasegunda.com",4],["hibiki-radio.jp",4],["garyfeinbergphotography.com",4],["clubulbebelusilor.ro",4],["gplinks.co",4],["ifdreamscametrue.com",4],["marksandspencer.com",4],["stowarzyszenie-impuls.eu",4],["viveretenerife.com",4],["oferty.dsautomobiles.pl",4],["wzamrani.com",4],["citroen.pl",4],["peugeot.pl",4],["wirtualnyspac3r.pl",4],["antena3.com",4],["lasexta.com",4],["pashplus.jp",4],["upvideo.to",4],["kpopsea.com",4],["cnki.net",4],["wpchen.net",4],["hongxiu.com",4],["readnovel.com",4],["uihtm.com",4],["uslsoftware.com",4],["rule34hentai.net",4],["cloudemb.com",4],["news24.jp",4],["gaminplay.com",4],["njjzxl.net",4],["voe.sx",[4,67]],["voe-unblock.com",[4,67]],["scrolller.com",4],["cocomanga.com",4],["nusantararom.org",[4,73]],["virpe.cc",4],["pobre.tv",[4,73]],["ukrainashop.com",4],["celtadigital.com",4],["matzoo.pl",4],["asia2tv.cn",4],["labs.j-novel.club",4],["turbo1.co",4],["futbollatam.com",4],["read.amazon.com",4],["box-manga.com",4],["the-masters-voice.com",4],["hemas.pl",4],["accgroup.vn",4],["btvnovinite.bg",4],["allcryptoz.net",4],["crewbase.net",4],["crewus.net",4],["shinbhu.net",4],["shinchu.net",4],["thumb8.net",4],["thumb9.net",4],["topcryptoz.net",4],["uniqueten.net",4],["ultraten.net",4],["cloudcomputingtopics.net",4],["bianity.net",4],["coinsparty.com",4],["postype.com",4],["lofter.com",[4,82]],["hentaihaven.xxx",4],["espn.com",4],["4media.com",4],["przegladpiaseczynski.pl",4],["freewaysintl.com",4],["cool-etv.net",4],["j91.asia",4],["sgd.de",4],["dicasfinanceirasbr.com",4],["dicasdevalor.net",4],["dicasdefinancas.net",4],["guiasaude.info",4],["felizemforma.com",4],["financasdeouro.com",4],["mangaschan.net",4],["sssscanlator.com",4],["nightscans.net",4],["cypherscans.xyz",4],["twitchemotes.com",4],["smartkhabrinews.com",4],["streamvid.net",4],["mkv-pastes.com",4],["ipphone-warehouse.com",[4,108,109,110]],["freewatchtv.top",4],["mixstreams.top",4],["tvfreemium.top",4],["knshow.com",5],["jusbrasil.com.br",6],["tastycookery.com",8],["techsupportall.com",9],["lugarcerto.com.br",10],["satcesc.com",11],["animatedshows.to",11],["miraculous.to",[11,32]],["jootc.com",12],["operatorsekolahdbn.com",12],["wawlist.com",12],["teachoo.com",12],["statelibrary.us",13],["bigulnews.tv",15],["news.chosun.com",16],["androidweblog.com",17],["cronista.com",18],["fcportables.com",19],["venea.net",20],["uta-net.com",21],["downloadtutorials.net",[21,39]],["blog.naver.com",21],["myschool-eng.com",22],["orangespotlight.com",23],["th-world.com",[23,45]],["tepat.id",24],["itvn.pl",25],["itvnextra.pl",25],["kuchniaplus.pl",25],["miniminiplus.pl",25],["player.pl",25],["ttv.pl",25],["tvn.pl",25],["tvn24.pl",25],["tvn24bis.pl",25],["tvn7.pl",25],["tvnfabula.pl",25],["tvnstyle.pl",25],["tvnturbo.pl",25],["x-link.pl",25],["x-news.pl",25],["kickante.com.br",26],["thestar.com.my",26],["corriereadriatico.it",26],["ilsole24ore.com",26],["scribd.com",27],["thehouseofportable.com",28],["ntvspor.net",28],["book.zhulang.com",28],["tadu.com",28],["selfstudyhistory.com",29],["lokercirebon.com",30],["avdelphi.com",31],["maxstream.video",32],["wpb.shueisha.co.jp",32],["tiktok.com",32],["vedantu.com",32],["zsti.zsti.civ.pl",32],["kathleenmemberhistory.com",[32,68]],["nonesnanking.com",[32,68]],["prefulfilloverdoor.com",[32,68]],["phenomenalityuniform.com",[32,68]],["nectareousoverelate.com",[32,68]],["timberwoodanotia.com",[32,68]],["strawberriesporail.com",[32,68]],["valeronevijao.com",[32,68]],["cigarlessarefy.com",[32,68]],["figeterpiazine.com",[32,68]],["yodelswartlike.com",[32,68]],["generatesnitrosate.com",[32,68]],["crownmakermacaronicism.com",[32,68]],["chromotypic.com",[32,68]],["gamoneinterrupted.com",[32,68]],["metagnathtuggers.com",[32,68]],["wolfdyslectic.com",[32,68]],["rationalityaloelike.com",[32,68]],["sizyreelingly.com",[32,68]],["simpulumlamerop.com",[32,68]],["urochsunloath.com",[32,68]],["monorhinouscassaba.com",[32,68]],["counterclockwisejacky.com",[32,68]],["35volitantplimsoles5.com",[32,68]],["scatch176duplicities.com",[32,68]],["antecoxalbobbing1010.com",[32,68]],["boonlessbestselling244.com",[32,68]],["cyamidpulverulence530.com",[32,68]],["guidon40hyporadius9.com",[32,68]],["449unceremoniousnasoseptal.com",[32,68]],["19turanosephantasia.com",[32,68]],["30sensualizeexpression.com",[32,68]],["321naturelikefurfuroid.com",[32,68]],["745mingiestblissfully.com",[32,68]],["availedsmallest.com",[32,68]],["greaseball6eventual20.com",[32,68]],["toxitabellaeatrebates306.com",[32,68]],["20demidistance9elongations.com",[32,68]],["audaciousdefaulthouse.com",[32,68]],["fittingcentermondaysunday.com",[32,68]],["fraudclatterflyingcar.com",[32,68]],["launchreliantcleaverriver.com",[32,68]],["matriculant401merited.com",[32,68]],["realfinanceblogcenter.com",[32,68]],["reputationsheriffkennethsand.com",[32,68]],["telyn610zoanthropy.com",[32,68]],["tubelessceliolymph.com",[32,68]],["tummulerviolableness.com",[32,68]],["un-block-voe.net",[32,68]],["v-o-e-unblock.com",[32,68]],["voe-un-block.com",[32,68]],["voeun-block.net",[32,68]],["voeunbl0ck.com",[32,68]],["voeunblck.com",[32,68]],["voeunblk.com",[32,68]],["voeunblock3.com",[32,68]],["audiotools.pro",32],["magesy.blog",32],["magesypro.pro",32],["audioztools.com",32],["www.ntv.co.jp",32],["faptiti.com",32],["wormate.io",32],["selfstudys.com",32],["adslink.pw",32],["jpopsingles.eu",32],["vinstartheme.com",[32,91]],["leakedzone.com",[32,94]],["fjordd.com",32],["seriesperu.com",32],["zippyupload.com",32],["3xyaoi.com",32],["alphapolis.co.jp",33],["blog.csdn.net",33],["juejin.cn",33],["sweetslyrics.com",33],["thegatewaypundit.com",34],["thegearhunt.com",35],["jfdb.jp",36],["loginhit.com.ng",36],["charbelnemnom.com",36],["bphimmoi.net",36],["goodhub.xyz",36],["thotsbay.tv",36],["topperlearning.com",36],["edailybuzz.com",38],["zhihu.com",38],["qidian.com",38],["invado.pl",38],["webnovel.com",38],["skuola.net",38],["bajecnavareska.sk",39],["lunas.pro",39],["onlinefreecourse.net",39],["pisr.org",39],["uplod.net",39],["thewpclub.net",39],["thememazing.com",39],["themebanks.com",39],["mesquitaonline.com",39],["skandynawiainfo.pl",39],["onlinecoursebay.com",39],["magnet-novels.com",40],["dreamsfriend.com",41],["trakteer.id",42],["699pic.com",42],["promobit.com.br",43],["techjunkie.com",43],["zerohedge.com",43],["1mg.com",43],["khou.com",43],["10tv.com",43],["kutub3lpdf.com",44],["sklep-agroland.pl",46],["polagriparts.pl",47],["nordkorea-info.de",48],["geotips.net",49],["hardcoregames.ca",50],["lataifas.ro",51],["toppremiumpro.com",52],["wattpad.com",53],["starbene.it",54],["fauxid.com",55],["androidtvbox.eu",56],["nicematin.com",57],["yamibo.com",59],["fimfiction.net",60],["moegirl.org.cn",61],["bbs.mihoyo.com",62],["peekme.cc",63],["ihbarweb.org.tr",64],["baixedetudo.net.br",65],["gardenia.net",66],["wpking.in",69],["hollywoodmask.com",70],["mbalib.com",70],["wenku.baidu.com",71],["mooc.chaoxing.com",72],["www-daftarharga.blogspot.com",73],["realpython.com",74],["linkmate.xyz",75],["cristelageorgescu.ro",76],["novelpia.com",77],["privivkainfo.ru",78],["frameboxxindore.com",78],["descargatepelis.com",79],["vercalendario.info",80],["zipcode.com.ng",80],["slideshare.net",81],["poipiku.com",83],["postcourier.com.pg",84],["gmx.co.uk",86],["gmx.com",86],["likey.me",87],["wallpaperaccess.com",88],["shortform.com",89],["joysound.com",90],["colors.sonicthehedgehog.com",92],["senpa.io",93],["txori.com",93],["comikey.com",95],["saikaiscans.net",96],["translate.goog",97],["oreilly.com",98],["alfred.camera",99],["wrosinski.pl",100],["wtsp.com",101],["starzunion.com",102],["lowcygier.pl",103],["studiestoday.com",104],["studyrankers.com",105],["bharatavani.in",105],["tv.verizon.com",106],["bongdaplus.vn",107],["timeanddate.com",111],["naver.com",112],["leetcode.cn",113]]);

const entitiesMap = new Map([["mangaku",4],["dood",4],["streamtape",4],["asiatv",4],["bg-gledai",4],["gdplayertv",4],["descarga-animex",7],["tabonitobrasil",14],["anisubindo",14],["wstream",32],["voe-unblock",[32,68]],["pobre",[32,85]],["bmovies",37],["daotranslate",51],["vidsrc",106],["braflix",106]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const elementMatches = elem => {
        if ( targetSelector === 'window' ) { return elem === window; }
        if ( targetSelector === 'document' ) { return elem === document; }
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        // https://github.com/uBlockOrigin/uAssets/discussions/17907#discussioncomment-9871079
        const id = String(elem.id);
        if ( id !== '' ) { parts.push(`#${CSS.escape(id)}`); }
        for ( let i = 0; i < elem.classList.length; i++ ) {
            parts.push(`.${CSS.escape(elem.classList.item(i))}`);
        }
        for ( let i = 0; i < elem.attributes.length; i++ ) {
            const attr = elem.attributes.item(i);
            if ( attr.name === 'id' ) { continue; }
            if ( attr.name === 'class' ) { continue; }
            parts.push(`[${CSS.escape(attr.name)}="${attr.value}"]`);
        }
        return parts.join('');
    };
    const shouldPrevent = (thisArg, type, handler) => {
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // eslint-disable-line no-debugger
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let t, h;
                try {
                    t = String(args[0]);
                    if ( typeof args[1] === 'function' ) {
                        h = String(safe.Function_toString(args[1]));
                    } else if ( typeof args[1] === 'object' && args[1] !== null ) {
                        if ( typeof args[1].handleEvent === 'function' ) {
                            h = String(safe.Function_toString(args[1].handleEvent));
                        }
                    } else {
                        h = String(args[1]);
                    }
                } catch(ex) {
                }
                if ( type === '' && pattern === '' ) {
                    safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
                } else if ( shouldPrevent(thisArg, t, h) ) {
                    return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
                }
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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
