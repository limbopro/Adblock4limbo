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

/* eslint-disable indent */

// ruleset: annoyances-overlays

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["scroll"],["/^(mouseout|mouseleave)$/"],["/^(contextmenu|copy)$/"],["blur"],["copy"],["contextmenu"],["/^(?:contextmenu|copy|selectstart)$/"],["/^(?:contextmenu|copy)$/","preventDefault"],["/^(?:contextmenu|keydown)$/"],["DOMContentLoaded",".js-popup-adblock"],["/^(?:contextmenu|copy|keydown)$/"],["mouseout","pop"],["/^(?:keyup|keydown)$/"],["keydown"],["keydown","disable_in_input"],["keydown","preventDefault"],["/contextmenu|keydown|keyup|copy/"],["visibilitychange","/bgmobile|\\{\\w\\.\\w+\\(\\)\\}/"],["copy","getSelection"],["","t.preventDefault"],["copy","replaceCopiedText"],["/^(contextmenu|copy|dragstart|selectstart)$/"],["","ads"],["/contextmenu|selectstart|copy/"],["/contextmenu|copy|keydown/"],["/contextmenu|select|copy/"],["/^(contextmenu|keydown)$/"],["contextmenu","a"],["mouseleave"],["/contextmenu|selectstart/"],["dragstart|keydown/"],["/contextmenu|keydown|dragstart/"],["","_0x"],["contextmenu","preventDefault"],["copy","preventDefault"],["","adtoniq"],["/^(?:contextmenu|copy|keydown|mousedown)$/"],["/contextmenu|keydown/"],["devtoolschange"],["/contextmenu|copy/"],["","mdp"],["/contextmenu|cut|copy|paste/"],["/contextmenu|mousedown/"],["mouseout"],["/contextmenu|copy|selectstart/"],["","0x"],["/^(?:contextmenu|dragstart|selectstart)$/"],["/^(?:contextmenu|copy)$/"],["/dragstart|keyup|keydown/"],["/keyup|keydown/","wpcc"],["/contextmenu|cut|copy|keydown/"],["","undefined"],["/contextmenu|selectstart|copy|dragstart/"],["/copy|dragstart/"],["/copy|contextmenu/"],["error"],["dragstart"],["","AdB"],["selectionchange","quill.emitter"],["/contextmenu|selectstart|select|copy|dragstart/"],["load","adLazy"],["copy","jQuery!==\"undefined\""],["copy","throw"],["selectstart"],["/^(?:copy|paste)$/","undefined"],["/copy|keydown/"],["/copy|cut|selectstart/"],["/keydown|keyup/","keyCode"],["keydown","disabledEvent"],["","Key"],["/copy|cut|paste|selectstart/"],["/contextmenu|dragstart|keydown/","event.dispatch.apply"],["beforepaste"],["","keyCode"],["DOMContentLoaded","rprw"],["","key"],["","ctrlKey"],["contextmenu","event.triggered"],["copy","pagelink"],["/keydown|mousedown/"],["copy","Source"],["mouseleave","scribd_ad"],["/contextmenu|copy|drag|dragstart/"],["/contextmenu|keydown|keypress|copy/"],["","blockFuckingEverything"],["mouseout","openLayer"],["/contextmenu|keydown/","preventDefault"],["mousedown","dispatch"],["/contextmenu|mousedown/","return\"undefined\""],["DOMContentLoaded","ready"],["keydown","disabledKeys"],["DOMContentLoaded","load"],["contextmenu","_0x"],["keydown","keyCode"],["contextmenu","undefined"],["contextmenu","[native code]"],["/contextmenu|keyup|keydown/"],["mouseout","cookie"],["DOMContentLoaded","ads"],["rocket-DOMContentLoaded","bind(document)"],["mouseout","innerHeight"],["/^(contextmenu|mousedown|keydown)$/","preventDefault"],["error","browser-plugin"],["/select|copy|contextmenu/"],["/cut|copy|paste|contextmenu/"],["keydown","123"],["mousedown","undefined","elements","body"],["afterKeydown"],["keydown","void"],["copy","void"],["load","ad-wrap"],["/contextmenu|selectstart|dragstart/"],["copy","","elements","#__next"],["DOMContentLoaded","style.display"],["copy","clipboardData"],["visibilitychange","dispatch"],["copy","linkPrefixMessage"]];

const hostnamesMap = new Map([["nationalgeographic.com",[0,5]],["artsy.net",0],["boards.net",0],["freeforums.net",0],["proboards.com",0],["todaysparent.com",1],["straitstimes.com",1],["dlnews.com",1],["zaui.com",1],["worldpopulationreview.com",1],["scribd.com",1],["s0urce.io",2],["filefox.cc",3],["uol.com.br",4],["gazetadopovo.com.br",4],["indiatimes.com",4],["odiario.com",4],["otempo.com.br",4],["estadao.com.br",4],["ofuxico.com.br",4],["pentruea.com",4],["ciberduvidas.iscte-iul.pt",4],["globo.com",4],["citas.in",4],["blitzrechner.de",4],["emailfake.com",4],["lyrical-nonsense.com",4],["mediafax.ro",4],["economica.net",4],["polsatnews.pl",4],["novagente.pt",4],["arlinadzgn.com",4],["bilibili.com",[4,58]],["nowcoder.com",4],["libertatea.ro",4],["erinsakura.com",4],["yuque.com",4],["deepl.com",4],["digi24.ro",4],["onna.kr",4],["ziare.com",4],["agrointel.ro",4],["skyozora.com",4],["milenio.com",4],["veneto.info",4],["edurev.in",4],["transinfo.pl",4],["news.17173.com",4],["chowhound.com",4],["explore.com",4],["foodie.com",4],["foodrepublic.com",4],["glam.com",4],["grunge.com",4],["healthdigest.com",4],["housedigest.com",4],["looper.com",4],["mashed.com",4],["moneydigest.com",4],["nickiswift.com",4],["outdoorguide.com",4],["slashfilm.com",4],["slashgear.com",4],["tastingtable.com",4],["thedailymeal.com",4],["thelist.com",4],["women.com",4],["wrestlinginc.com",4],["abril.com.br",4],["sarthaks.com",4],["delfi.lt",4],["pendulumedu.com",4],["bloomberglinea.com",4],["bloomberglinea.com.br",4],["peliculas24.me",5],["roztoczanskipn.pl",5],["economictimes.indiatimes.com",5],["dzwignice.info",5],["script-stack.com",[5,40]],["mio.to",5],["husseinezzat.com",[5,13]],["taxo-acc.pl",5],["portalwrc.pl",5],["lublin.eu",5],["dddance.party",5],["kapiert.de",5],["hitcena.pl",5],["tv-asahi.co.jp",5],["digitalfernsehen.de",5],["suzylu.co.uk",5],["music.apple.com",5],["skidrowcodex.net",5],["ds2play.com",5],["ds2video.com",5],["d0o0d.com",5],["vsco.co",5],["festival-cannes.com",5],["strcloud.in",5],["ufret.jp",5],["thenekodark.com",5],["artesacro.org",5],["poli-vsp.ru",5],["polyvsp.ru",5],["ananweb.jp",5],["daimangajiten.com",5],["digital.lasegunda.com",5],["hibiki-radio.jp",5],["garyfeinbergphotography.com",5],["clubulbebelusilor.ro",5],["gplinks.co",5],["ifdreamscametrue.com",5],["marksandspencer.com",5],["stowarzyszenie-impuls.eu",5],["viveretenerife.com",5],["oferty.dsautomobiles.pl",5],["wzamrani.com",5],["citroen.pl",5],["peugeot.pl",5],["wirtualnyspac3r.pl",5],["antena3.com",5],["lasexta.com",5],["pashplus.jp",5],["upvideo.to",5],["kpopsea.com",5],["cnki.net",5],["wpchen.net",5],["hongxiu.com",5],["readnovel.com",5],["uihtm.com",5],["uslsoftware.com",5],["rule34hentai.net",5],["cloudemb.com",5],["news24.jp",5],["gaminplay.com",5],["njjzxl.net",5],["voe.sx",[5,67]],["voe-unblock.com",[5,67]],["scrolller.com",5],["cocomanga.com",5],["nusantararom.org",[5,73]],["virpe.cc",5],["pobre.tv",[5,73]],["ukrainashop.com",5],["celtadigital.com",5],["matzoo.pl",5],["asia2tv.cn",5],["labs.j-novel.club",5],["turbo1.co",5],["futbollatam.com",5],["read.amazon.com",5],["box-manga.com",5],["the-masters-voice.com",5],["hemas.pl",5],["accgroup.vn",5],["btvnovinite.bg",5],["allcryptoz.net",5],["crewbase.net",5],["crewus.net",5],["shinbhu.net",5],["shinchu.net",5],["thumb8.net",5],["thumb9.net",5],["topcryptoz.net",5],["uniqueten.net",5],["ultraten.net",5],["cloudcomputingtopics.net",5],["bianity.net",5],["coinsparty.com",5],["postype.com",5],["lofter.com",5],["hentaihaven.xxx",5],["espn.com",5],["4media.com",5],["przegladpiaseczynski.pl",5],["freewaysintl.com",5],["cool-etv.net",5],["j91.asia",5],["sgd.de",5],["dicasfinanceirasbr.com",5],["dicasdevalor.net",5],["dicasdefinancas.net",5],["guiasaude.info",5],["felizemforma.com",5],["financasdeouro.com",5],["mangaschan.net",5],["sssscanlator.com",5],["nightscans.net",5],["cypherscans.xyz",5],["twitchemotes.com",5],["smartkhabrinews.com",5],["streamvid.net",5],["mkv-pastes.com",5],["ipphone-warehouse.com",[5,107,108,109]],["freewatchtv.top",5],["mixstreams.top",5],["tvfreemium.top",5],["duracell.de",5],["knshow.com",6],["jusbrasil.com.br",7],["tastycookery.com",9],["techsupportall.com",10],["lugarcerto.com.br",11],["satcesc.com",12],["animatedshows.to",12],["miraculous.to",[12,33]],["jootc.com",13],["operatorsekolahdbn.com",13],["wawlist.com",13],["teachoo.com",13],["statelibrary.us",14],["bigulnews.tv",16],["m.youtube.com",17],["news.chosun.com",18],["androidweblog.com",19],["cronista.com",20],["fcportables.com",21],["venea.net",22],["uta-net.com",23],["downloadtutorials.net",[23,40]],["blog.naver.com",23],["myschool-eng.com",24],["orangespotlight.com",25],["th-world.com",[25,45]],["tepat.id",26],["itvn.pl",27],["itvnextra.pl",27],["kuchniaplus.pl",27],["miniminiplus.pl",27],["player.pl",27],["ttv.pl",27],["tvn.pl",27],["tvn24.pl",27],["tvn24bis.pl",27],["tvn7.pl",27],["tvnfabula.pl",27],["tvnstyle.pl",27],["tvnturbo.pl",27],["x-link.pl",27],["x-news.pl",27],["kickante.com.br",28],["thestar.com.my",28],["corriereadriatico.it",28],["ilsole24ore.com",28],["thehouseofportable.com",29],["ntvspor.net",29],["book.zhulang.com",29],["tadu.com",29],["selfstudyhistory.com",30],["lokercirebon.com",31],["avdelphi.com",32],["maxstream.video",33],["wpb.shueisha.co.jp",33],["tiktok.com",33],["vedantu.com",33],["zsti.zsti.civ.pl",33],["kathleenmemberhistory.com",[33,68]],["nonesnanking.com",[33,68]],["prefulfilloverdoor.com",[33,68]],["phenomenalityuniform.com",[33,68]],["nectareousoverelate.com",[33,68]],["timberwoodanotia.com",[33,68]],["strawberriesporail.com",[33,68]],["valeronevijao.com",[33,68]],["cigarlessarefy.com",[33,68]],["figeterpiazine.com",[33,68]],["yodelswartlike.com",[33,68]],["generatesnitrosate.com",[33,68]],["crownmakermacaronicism.com",[33,68]],["chromotypic.com",[33,68]],["gamoneinterrupted.com",[33,68]],["metagnathtuggers.com",[33,68]],["wolfdyslectic.com",[33,68]],["rationalityaloelike.com",[33,68]],["sizyreelingly.com",[33,68]],["simpulumlamerop.com",[33,68]],["urochsunloath.com",[33,68]],["monorhinouscassaba.com",[33,68]],["counterclockwisejacky.com",[33,68]],["35volitantplimsoles5.com",[33,68]],["scatch176duplicities.com",[33,68]],["antecoxalbobbing1010.com",[33,68]],["boonlessbestselling244.com",[33,68]],["cyamidpulverulence530.com",[33,68]],["guidon40hyporadius9.com",[33,68]],["449unceremoniousnasoseptal.com",[33,68]],["19turanosephantasia.com",[33,68]],["30sensualizeexpression.com",[33,68]],["321naturelikefurfuroid.com",[33,68]],["745mingiestblissfully.com",[33,68]],["availedsmallest.com",[33,68]],["greaseball6eventual20.com",[33,68]],["toxitabellaeatrebates306.com",[33,68]],["20demidistance9elongations.com",[33,68]],["audaciousdefaulthouse.com",[33,68]],["fittingcentermondaysunday.com",[33,68]],["fraudclatterflyingcar.com",[33,68]],["launchreliantcleaverriver.com",[33,68]],["matriculant401merited.com",[33,68]],["realfinanceblogcenter.com",[33,68]],["reputationsheriffkennethsand.com",[33,68]],["telyn610zoanthropy.com",[33,68]],["tubelessceliolymph.com",[33,68]],["tummulerviolableness.com",[33,68]],["un-block-voe.net",[33,68]],["v-o-e-unblock.com",[33,68]],["voe-un-block.com",[33,68]],["voeun-block.net",[33,68]],["voeunbl0ck.com",[33,68]],["voeunblck.com",[33,68]],["voeunblk.com",[33,68]],["voeunblock3.com",[33,68]],["audiotools.pro",33],["magesy.blog",33],["magesypro.pro",33],["audioztools.com",33],["www.ntv.co.jp",33],["faptiti.com",33],["wormate.io",33],["selfstudys.com",33],["adslink.pw",33],["jpopsingles.eu",33],["vinstartheme.com",[33,90]],["leakedzone.com",[33,93]],["fjordd.com",33],["seriesperu.com",33],["zippyupload.com",33],["3xyaoi.com",33],["alphapolis.co.jp",34],["blog.csdn.net",34],["juejin.cn",34],["sweetslyrics.com",34],["thegatewaypundit.com",35],["thegearhunt.com",36],["jfdb.jp",37],["loginhit.com.ng",37],["charbelnemnom.com",37],["bphimmoi.net",37],["goodhub.xyz",37],["thotsbay.tv",37],["topperlearning.com",37],["edailybuzz.com",39],["zhihu.com",39],["qidian.com",39],["invado.pl",39],["webnovel.com",39],["skuola.net",39],["bajecnavareska.sk",40],["lunas.pro",40],["onlinefreecourse.net",40],["pisr.org",40],["uplod.net",40],["thewpclub.net",40],["thememazing.com",40],["themebanks.com",40],["mesquitaonline.com",40],["skandynawiainfo.pl",40],["onlinecoursebay.com",40],["dreamsfriend.com",41],["trakteer.id",42],["699pic.com",42],["promobit.com.br",43],["techjunkie.com",43],["zerohedge.com",43],["1mg.com",43],["khou.com",43],["10tv.com",43],["kutub3lpdf.com",44],["sklep-agroland.pl",46],["polagriparts.pl",47],["nordkorea-info.de",48],["geotips.net",49],["hardcoregames.ca",50],["lataifas.ro",51],["toppremiumpro.com",52],["wattpad.com",53],["starbene.it",54],["fauxid.com",55],["androidtvbox.eu",56],["nicematin.com",57],["yamibo.com",59],["fimfiction.net",60],["moegirl.org.cn",61],["bbs.mihoyo.com",62],["peekme.cc",63],["ihbarweb.org.tr",64],["baixedetudo.net.br",65],["gardenia.net",66],["wpking.in",69],["hollywoodmask.com",70],["mbalib.com",70],["wenku.baidu.com",71],["mooc.chaoxing.com",72],["www-daftarharga.blogspot.com",73],["realpython.com",74],["linkmate.xyz",75],["cristelageorgescu.ro",76],["novelpia.com",77],["privivkainfo.ru",78],["frameboxxindore.com",78],["descargatepelis.com",79],["vercalendario.info",80],["zipcode.com.ng",80],["slideshare.net",81],["poipiku.com",82],["postcourier.com.pg",83],["gmx.co.uk",85],["gmx.com",85],["likey.me",86],["broflix.cc",86],["bestcam.tv",86],["wallpaperaccess.com",87],["shortform.com",88],["joysound.com",89],["colors.sonicthehedgehog.com",91],["senpa.io",92],["txori.com",92],["mangareader.to",92],["comikey.com",94],["saikaiscans.net",95],["translate.goog",96],["oreilly.com",97],["alfred.camera",98],["wrosinski.pl",99],["wtsp.com",100],["starzunion.com",101],["lowcygier.pl",102],["studiestoday.com",103],["studyrankers.com",104],["bharatavani.in",104],["tv.verizon.com",105],["sussytoons.site",105],["bongdaplus.vn",106],["timeanddate.com",110],["naver.com",111],["leetcode.cn",112],["unknowncheats.me",113],["cnblogs.com",114],["cnn.com",115],["kentucky.com",116]]);

const entitiesMap = new Map([["mangaku",5],["dood",5],["streamtape",5],["asiatv",5],["bg-gledai",5],["gdplayertv",5],["descarga-animex",8],["tabonitobrasil",15],["anisubindo",15],["wstream",33],["voe-unblock",[33,68]],["pobre",[33,84]],["bmovies",38],["daotranslate",51],["vidsrc",105]]);

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
    runAt(( ) => {
        proxyApplyFn('EventTarget.prototype.addEventListener', function(context) {
            const { callArgs, thisArg } = context;
            let t, h;
            try {
                t = String(callArgs[0]);
                if ( typeof callArgs[1] === 'function' ) {
                    h = String(safe.Function_toString(callArgs[1]));
                } else if ( typeof callArgs[1] === 'object' && callArgs[1] !== null ) {
                    if ( typeof callArgs[1].handleEvent === 'function' ) {
                        h = String(safe.Function_toString(callArgs[1].handleEvent));
                    }
                } else {
                    h = String(callArgs[1]);
                }
            } catch(ex) {
            }
            if ( type === '' && pattern === '' ) {
                safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
            } else if ( shouldPrevent(thisArg, t, h) ) {
                return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
            }
            return context.reflect();
        });
    }, extraArgs.runAt);
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
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
        'Object_defineProperties': Object.defineProperties.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String_fromCharCode': String.fromCharCode,
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
                return { matchAll: true, expect: true };
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
        offIdle(id) {
            if ( self.requestIdleCallback ) {
                return self.cancelIdleCallback(id);
            }
            return self.cancelAnimationFrame(id);
        }
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    safe.logLevel = scriptletGlobals.logLevel || 1;
    let lastLogType = '';
    let lastLogText = '';
    let lastLogTime = 0;
    safe.toLogText = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( text === lastLogText && type === lastLogType ) {
            if ( (Date.now() - lastLogTime) < 5000 ) { return; }
        }
        lastLogType = type;
        lastLogText = text;
        lastLogTime = Date.now();
        return text;
    };
    try {
        const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
        let bcBuffer = [];
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
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
    } catch(_) {
        safe.sendToLogger = (type, ...args) => {
            const text = safe.toLogText(type, ...args);
            if ( text === undefined ) { return; }
            safe.log(`uBO ${text}`);
        };
    }
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
}

/******************************************************************************/

const hnParts = [];
try {
    let origin = document.location.origin;
    if ( origin === 'null' ) {
        const origins = document.location.ancestorOrigins;
        for ( let i = 0; i < origins.length; i++ ) {
            origin = origins[i];
            if ( origin !== 'null' ) { break; }
        }
    }
    const pos = origin.lastIndexOf('://');
    if ( pos === -1 ) { return; }
    hnParts.push(...origin.slice(pos+3).split('.'));
}
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

uBOL_addEventListenerDefuser();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
