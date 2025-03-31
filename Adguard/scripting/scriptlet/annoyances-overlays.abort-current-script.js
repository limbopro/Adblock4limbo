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

// ruleset: annoyances-overlays

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_abortCurrentScript() {

/******************************************************************************/

function abortCurrentScript(...args) {
    runAtHtmlElementFn(( ) => {
        abortCurrentScriptCore(...args);
    });
}

function abortCurrentScriptCore(
    target = '',
    needle = '',
    context = ''
) {
    if ( typeof target !== 'string' ) { return; }
    if ( target === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('abort-current-script', target, needle, context);
    const reNeedle = safe.patternToRegex(needle);
    const reContext = safe.patternToRegex(context);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    const thisScript = document.currentScript;
    const chain = safe.String_split.call(target, '.');
    let owner = window;
    let prop;
    for (;;) {
        prop = chain.shift();
        if ( chain.length === 0 ) { break; }
        if ( prop in owner === false ) { break; }
        owner = owner[prop];
        if ( owner instanceof Object === false ) { return; }
    }
    let value;
    let desc = Object.getOwnPropertyDescriptor(owner, prop);
    if (
        desc instanceof Object === false ||
        desc.get instanceof Function === false
    ) {
        value = owner[prop];
        desc = undefined;
    }
    const debug = shouldDebug(extraArgs);
    const exceptionToken = getExceptionTokenFn();
    const scriptTexts = new WeakMap();
    const getScriptText = elem => {
        let text = elem.textContent;
        if ( text.trim() !== '' ) { return text; }
        if ( scriptTexts.has(elem) ) { return scriptTexts.get(elem); }
        const [ , mime, content ] =
            /^data:([^,]*),(.+)$/.exec(elem.src.trim()) ||
            [ '', '', '' ];
        try {
            switch ( true ) {
            case mime.endsWith(';base64'):
                text = self.atob(content);
                break;
            default:
                text = self.decodeURIComponent(content);
                break;
            }
        } catch {
        }
        scriptTexts.set(elem, text);
        return text;
    };
    const validate = ( ) => {
        const e = document.currentScript;
        if ( e instanceof HTMLScriptElement === false ) { return; }
        if ( e === thisScript ) { return; }
        if ( context !== '' && reContext.test(e.src) === false ) {
            // eslint-disable-next-line no-debugger
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }
            return;
        }
        if ( safe.logLevel > 1 && context !== '' ) {
            safe.uboLog(logPrefix, `Matched src\n${e.src}`);
        }
        const scriptText = getScriptText(e);
        if ( reNeedle.test(scriptText) === false ) {
            // eslint-disable-next-line no-debugger
            if ( debug === 'nomatch' || debug === 'all' ) { debugger; }
            return;
        }
        if ( safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, `Matched text\n${scriptText}`);
        }
        // eslint-disable-next-line no-debugger
        if ( debug === 'match' || debug === 'all' ) { debugger; }
        safe.uboLog(logPrefix, 'Aborted');
        throw new ReferenceError(exceptionToken);
    };
    // eslint-disable-next-line no-debugger
    if ( debug === 'install' ) { debugger; }
    try {
        Object.defineProperty(owner, prop, {
            get: function() {
                validate();
                return desc instanceof Object
                    ? desc.get.call(owner)
                    : value;
            },
            set: function(a) {
                validate();
                if ( desc instanceof Object ) {
                    desc.set.call(owner, a);
                } else {
                    value = a;
                }
            }
        });
    } catch(ex) {
        safe.uboErr(logPrefix, `Error: ${ex}`);
    }
}

function runAtHtmlElementFn(fn) {
    if ( document.documentElement ) {
        fn();
        return;
    }
    const observer = new MutationObserver(( ) => {
        observer.disconnect();
        fn();
    });
    observer.observe(document, { childList: true });
}

function getExceptionTokenFn() {
    const token = getRandomTokenFn();
    const oe = self.onerror;
    self.onerror = function(msg, ...args) {
        if ( typeof msg === 'string' && msg.includes(token) ) { return true; }
        if ( oe instanceof Function ) {
            return oe.call(this, msg, ...args);
        }
    }.bind();
    return token;
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
        'Object_hasOwn': Object.hasOwn.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'String': self.String,
        'String_fromCharCode': String.fromCharCode,
        'String_split': String.prototype.split,
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
            catch {
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
    } catch {
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

function getRandomTokenFn() {
    const safe = safeSelf();
    return safe.String_fromCharCode(Date.now() % 26 + 97) +
        safe.Math_floor(safe.Math_random() * 982451653 + 982451653).toString(36);
}

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["document.onselectstart"],["$","contextmenu"],["disableselect","reEnable"],["addEventListener","/disable_|wccp/"],["document.onkeydown"],["document.addEventListener","contextmenu"],["document.getElementById","advert-tester"],["$","AdBlock"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.getElementById","undefined"],["$","load"],["eval","abd"],["jQuery","ai_adb"],["$","undefined"],["document.createElement","adblock"],["$","offsetHeight"],["jQuery","ai_check"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","btoa"],["$","Adblock"],["eval","isNaN"],["event","stopPropagation"],["$",".height"],["addEventListener","adsbygoogle.length"],["$","adBlock"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["document.querySelector","adblock"],["$","test"],["$","Promise"],["ab_tests"],["RegExp","googlebot"],["document.querySelectorAll","adblock"],["checkAdblockBait"],["document.createElement","adm*","xhamster8.*","xhamsterporno.mx","xhbig.com","xhbranch5.com","xhchannel.com","xhdate.world","xhday.com","xhday1.com","xhlease.world","xhmoon5.com","xhofficial.com","xhopen.com","xhplanet1.com","xhplanet2.com","xhreal2.com","xhreal3.com","xhspot.com","xhtotal.com","xhtree.com","xhvictory.com","xhwebsite.com","xhwebsite2.com","xhwebsite5.com","xhwide1.com","xhwide2.com","xhwide5.com##+js(set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"],["document.oncontextmenu"],["document.oncopy"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["document.getElementsByTagName","null"],["document.getElementById","none"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.getElementById","banner"],["jQuery","disable_hot_keys"],["onload"],["disableSelection"],["document.getElementById","adblock"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["$","showEmailNewsletterModal"],["disableSelection","reEnable"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["document.onmousedown"],["soclInit"],["document.addEventListener","preventDefault"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["jQuery","keydown"],["jQuery","oncontextmenu"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["$","\"input\""],["jQuery","stopPropagation"],["update_visit_count"],["showAdblockerModal"],["stopPrntScr"],["console.clear","contextmenu"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["attachToDom","ad-fallback"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["document.addEventListener","copy"],["document.addEventListener","keydown"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["jQuery","hmwp_is_devtool"],["RegExp.prototype.toString",".join(\"\")"],["document.onmousedown","disableclick"],["RegExp","disableRightClick"],["RegExp","console"],["$","devtoolsDetector"],["Object.defineProperty","DisableDevtool"],["addEventListener","ays_tooltip"],["document.onkeydown","disableCTRL"],["document.oncontextmenu","preventDefault"]];
const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["clk.sh",[0,41]],["shrinkearn.com",[0,41]],["luoghidavedere.it",0],["practicetestgeeks.com",[0,41]],["gagetmatome.com",0],["verdadeiroolhar.pt",0],["librospreuniversitariospdf.blogspot.com",[0,1,4,64]],["mt-milcom.blogspot.com",[0,41]],["interviewgig.com",0],["artesacro.org",0],["dailynewsview.com",0],["dailynews.us.com",0],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["naukridisha.in",0],["nydailyquote.com",0],["ouasafat.com",0],["reflectim.fr",[0,41]],["top.howfn.com",0],["kangmartho.com",0],["gnt24365.net",[0,41]],["tvstreampf.xyz",[0,68]],["pvstreams.com",[0,4,41,52]],["7misr4day.com",[0,41]],["evz.ro",1],["visionias.net",1],["mangaku.*",1],["dramaqu.*",1],["safetxt.net",1],["javbest.xyz",1],["javbix.com",1],["javgrab.com",1],["goalup.live",1],["hatsukimanga.com",1],["47news.jp",1],["japanxxxmovie.com",1],["sexpox.com",1],["ibomma.pw",1],["aepos.ap.gov.in",1],["ssphim.net",[1,4]],["10000recipe.com",1],["edurev.in",1],["javjavhd.com",1],["mcocguideblog.com",2],["singingdalong.blogspot.com",2],["runningnews.gr",[2,41]],["tecnotutoshd.net",2],["psychologiazycia.com",[2,41]],["kolnovel.org",3],["up4stream.com",4],["sabishiidesu.com",4],["europixhd.*",[4,41]],["topeuropix.*",[4,41]],["banglainsider.com",[4,55]],["kusonime.com",[4,41,60]],["animesanka.com",4],["lendagames.com",4],["vinaurl.blogspot.com",[4,83]],["utorrentgamesps2.blogspot.com",4],["articlesmania.me",4],["aksensei.com",4],["wawlist.com",[4,41]],["koszalincity.pl",[4,41]],["allcryptoz.net",4],["crewbase.net",4],["crewus.net",4],["shinbhu.net",4],["shinchu.net",4],["thumb8.net",4],["thumb9.net",4],["topcryptoz.net",4],["uniqueten.net",4],["ultraten.net",4],["indianhealthyrecipes.com",[4,41]],["krunkercentral.com",4],["desijugar.net",4],["adslink.pw",4],["jpopsingles.eu",[4,41,52,118]],["genesistls.com",[4,68]],["senpaiediciones.com",[4,68]],["guiasaude.info",4],["felizemforma.com",4],["icourse163.org",4],["abstream.to",4],["kursnacukrzyce.pl",5],["fucktube4k.com",5],["knightnoscanlation.com",5],["blog.cryptowidgets.net",5],["blog.insurancegold.in",5],["blog.wiki-topia.com",5],["blog.coinsvalue.net",5],["blog.cookinguide.net",5],["blog.freeoseocheck.com",5],["eca-anime.net",6],["flyertalk.com",7],["lcpdfr.com",7],["kashmirobserver.net",8],["cathouseonthekings.com",9],["winaero.com",10],["centrumher.eu",11],["japancamerahunter.com",12],["airlinercafe.com",12],["thegraillords.net",13],["worldscientific.com",13],["videohelp.com",13],["siliconinvestor.com",14],["space-engineers.de",14],["coffeeforums.co.uk",14],["anime2you.de",14],["playonlinux.com",15],["bold.dk",16],["pureinfotech.com",17],["almasdarnews.com",17],["casertace.net",17],["civildigital.com",17],["lesmoutonsenrages.fr",17],["venusarchives.com",17],["verpornocomic.com",17],["molineuxmix.co.uk",18],["yaledailynews.com",18],["forum.nlmod.net",19],["mt07-forum.de",20],["auto-treff.com",20],["telefon-treff.de",20],["dodge-forum.eu",20],["hearthstone-decks.net",21],["masrawy.com",22],["milfzr.com",23],["smokingmeatforums.com",24],["broncoshq.com",24],["abola.pt",25],["unixhow.com",26],["ohmygirl.ml",27],["moneyguru.co",28],["sharree.com",28],["kitguru.net",29],["whatfontis.com",30],["lowkeytech.com",31],["ubuntudde.com",31],["techsini.com",32],["ssuathletics.com",33],["grandoldteam.com",34],["gamingsinners.com",34],["elitepvpers.com",35],["slideshare.net",36],["memoryhackers.org",37],["steamcollector.com",38],["mgsm.pl",39],["boston.com",40],["britannica.com",40],["cattime.com",40],["dogtime.com",40],["download.mokeedev.com",40],["freep.com",40],["ijr.com",40],["inquirer.net",40],["knowyourmeme.com",40],["nationalreview.com",40],["nofilmschool.com",40],["order-order.com",40],["savvytime.com",40],["techlicious.com",40],["technicpack.net",40],["thedraftnetwork.com",40],["wrestlezone.com",40],["xda-developers.com",40],["fmhikayeleri.com",41],["tinyppt.com",41],["hindi-gk.com",41],["androidmtk.com",41],["badayak.com",41],["kirannewsagency.com",41],["starsunfolded.com",41],["satcesc.com",41],["them4ufree.info",41],["yeane.org",41],["mtbtutoriales.com",41],["answersafrica.com",41],["felico.pl",41],["legionprogramas.org",41],["serwis-zamkow.com",41],["hebrew4christians.com",41],["otakudesu.org",[41,61]],["androidmakale.com",41],["mongri.net",41],["download.ipeenk.com",41],["doranobi-fansub.id",[41,63]],["alexeiportableapp.blogspot.com",41],["oparana.com.br",41],["lolle21.com",41],["mangaid.click",41],["manianomikata.com",41],["tfp.is",41],["dassen-azara4.com",41],["dramacute.*",[41,65]],["pentruea.com",41],["depedlps.*",41],["neyrologos.gr",41],["freerapidleechlist.blogspot.com",41],["ggeguide.com",41],["tanya-tanya.com",[41,71]],["mangatoon.*",41],["lalawin.com",41],["audioreview.m1001.coreserver.jp",[41,71]],["seikatsu-hyakka.com",41],["elizabeth-mitchell.org",[41,73]],["blasianluvforever.com",41],["movieston.com",[41,52]],["eduardo-monica.com",41],["msubplix.com",41],["upstream.to",41],["ilclubdellericette.it",41],["daum.net",41],["123movies.*",[41,71]],["newsforbolly.org",41],["gomovies.*",41],["dztechphone.com",41],["funivie.org",41],["goodbakery.ru",[41,52]],["ifdreamscametrue.com",[41,80]],["juegosdetiempolibre.org",41],["musicindustryhowto.com",[41,58,68]],["sdelatotoplenie.ru",[41,42]],["sachonthi.com",41],["zdravenportal.eu",[41,82]],["thezealots.org",41],["deportealdia.live",41],["fmovies.*",[41,71]],["hulnews.top",41],["otakudesu.*",41],["truyenbanquyen.com",[41,114,115,116]],["globaledu.jp",41],["lataifas.ro",[41,85]],["blisseyhusband.in",[41,52]],["openfinanza.it",[41,68]],["followmikewynn.com",41],["starbene.it",41],["bimiacg.net",41],["diaforetiko.gr",41],["tchadcarriere.com",41],["info-beihilfe.de",41],["zgywyd.cn",41],["mercenaryenrollment.com",41],["cristelageorgescu.ro",41],["crunchyscan.fr",41],["www-daftarharga.blogspot.com",41],["theghostinmymachine.com",41],["ilovevaldinon.it",41],["aileen-novel.online",[41,79]],["bumigemilang.com",[41,79]],["bingotingo.com",41],["stream.bunkr.is",41],["blueraindrops.com",41],["sekaikomik.live",41],["privivkainfo.ru",41],["apps2app.com",41],["bestjavporn.com",41],["mm9841.cc",41],["myoplay.club",41],["bpcj.or.jp",41],["cdramalove.com",41],["outidesigoto.com",41],["xemphimaz.com",41],["gourmetscans.net",[41,107]],["awebstories.com",41],["zgbk.com",41],["clujust.ro",[41,68]],["stockpokeronline.com",41],["stiridinromania.ro",41],["kooora4lives.net",41],["kooora4livs.com",41],["piklodz.pl",[41,114,115,116]],["secondlifetranslations.com",[41,114,115,116]],["ferroviando.com.br",[41,114,115,116]],["counciloflove.com",[41,114,115,116]],["infokik.com",[41,114,115,116]],["kulinarnastronamocy.pl",[41,114,115,116]],["jafekri.com",[41,114,115,116]],["ezmanga.net",[41,114,115,116]],["reborntrans.com",[41,114,115,116]],["paidiatreio.gr",[41,117]],["workhouses.org.uk",41],["dollarvr.com",[41,68]],["newsme.gr",[41,68]],["daily-tohoku.news",[41,65]],["descopera.ro",41],["velicu.eu",41],["arenavalceana.ro",[41,52]],["firmwarefile.com",41],["asianexpress.co.uk",41],["best4hack.blogspot.com",41],["certificationexamanswers.890m.com",41],["cookhero.gr",41],["creative-chemistry.org.uk",41],["deutschaj.com",41],["divineyogaschool.blogspot.com",41],["fabioambrosi.it",41],["flory4all.com",41],["fv2freegifts.org",41],["geniusjw.com",41],["ideas0419.com",41],["jeyran.net",41],["ktm2day.com",41],["letsdownloads.com",41],["limametti.com",41],["luyenthithukhoa.vn",41],["otakukan.com",41],["ribbelmonster.de",41],["untitle.org",41],["uptimeside.webnode.gr",41],["usmleexperiences.review",41],["yoyofilmeys.*",41],["zoommastory.com",41],["urbanbrush.net",41],["audiotools.in",41],["raindropteamfan.com",41],["manhwahentai.me",41],["ontools.net",41],["scarysymptoms.com",[41,107]],["musicallyvideos.com",41],["geeksoncoffee.com",41],["guidingliterature.com",[41,68]],["mostrodifirenze.com",41],["3xyaoi.com",41],["tinyhouse-baluchon.fr",41],["whoisnovel.com",41],["braziljournal.com",42],["nekopoi.web.id",42],["world4.eu",[42,78,79]],["searchenginewatch.com",43],["oggiscuola.com",44],["upsrtconline.co.in",45],["qualityfilehosting.com",46],["booksmedicos.org",47],["jobsbotswana.info",48],["npnews24.com",49],["fordogtrainers.pl",[50,51]],["polskacanada.com",52],["fantricks.com",52],["blog.kwick.de",52],["selfstudyhistory.com",[52,68]],["yeuphimmoik.com",52],["repack-games.com",52],["delicateseliterare.ro",52],["wpplugins.tips",52],["verselemzes.hu",[52,124]],["sqlserveregitimleri.com",52],["gezimanya.com",53],["athletic.net",54],["bitblokes.de",56],["balticlivecam.com",57],["canondrivers.org",[58,59]],["includehelp.com",62],["routenote.com",64],["themosvagas.com.br",[64,87]],["altranotizia.it",65],["full-anime.fr",66],["klsescreener.com",66],["nonton78.com",67],["tvzingvn.*",67],["zingtvhd.*",67],["zingvntv.*",67],["sbfast.com",67],["sbflix.*",67],["vupload.com",67],["opportunitydesk.org",68],["selfstudyanthro.com",68],["renditepassive.net",68],["androidtvbox.eu",68],["flinsetyadi.com",[68,71]],["rawneix.in",[68,104,105]],["the-masters-voice.com",[68,71]],["activationkeys.co",68],["pandurul.ro",69],["phrasemix.com",70],["celebzcircle.com",71],["sertracen.com.pa",71],["pitesti24.ro",71],["samsungtechwin.com",71],["cours-de-droit.net",71],["iptv4best.com",71],["blogvisaodemercado.pt",71],["kapitalis.com",71],["tiempo.hn",71],["winmeen.com",71],["ibps.in",71],["visse.com.br",71],["javsubtitle.co",71],["learninsta.com",71],["licensekeys.org",71],["mediahiburan.my",71],["tipssehatcantik.com",71],["anime-drama.jp",71],["jbjbgame.com",71],["viatasisanatate.com",71],["ziarulargesul.ro",71],["globaldefensecorp.com",71],["gossipnextdoor.com",71],["coffeeapps.ir",71],["media.framu.world",71],["immobiliaremia.com",71],["colegiosconcertados.info",71],["bigdatauni.com",71],["riwyat.com",71],["rukim.id",71],["visefierbinti.ro",71],["cyberkrafttraining.com",71],["theaircurrent.com",71],["ncert-solutions.com",71],["ncertsolutions.guru",71],["nocturnetls.net",71],["clockks.com",71],["ananda-yoga.ro",71],["poolpiscina.com",71],["infodifesa.it",71],["getective.com",71],["flashdumpfiles.com",71],["formatatmak.com",71],["drkrok.com",71],["alphagirlreviews.com",71],["kitchennovel.com",71],["voxvalachorum.ro",71],["cracksone.com",71],["day-hoc.org",71],["onlineonderdelenshop.nl",71],["primicia.com.ve",71],["tech-recipes.com",71],["postcourier.com.pg",71],["afrikmag.com",71],["maduras.vip",71],["aprendeinglessila.com",71],["kicknews.today",71],["koalasplayground.com",71],["hellokpop.com",71],["hayatbilgileri.com",71],["moneyexcel.com",71],["placementstore.com",71],["neuroteam-metz.de",71],["codedosa.com",71],["liveyourmaths.com",71],["newspao.gr",71],["ieltsliz.com",71],["programasvirtualespc.net",71],["tempatwisataseru.com",71],["wikiofcelebs.com",71],["jornaljoca.com.br",71],["arcanescans.com",71],["filmzone.com",71],["hiraethtranslation.com",71],["kaystls.site",71],["home.novel-gate.com",71],["plural.jor.br",71],["evreporter.com",71],["sinhasannews.com",71],["viewsofgreece.gr",71],["rozbor-dila.cz",71],["kritichno.bg",71],["csiplearninghub.com",71],["medeberiya.site",71],["wikihow.com",72],["analizy.pl",74],["zeeebatch.blogspot.com",75],["sokolow-mlp.pl",75],["japan-fans.com",75],["cissamagazine.com.br",76],["observatoriodocinema.uol.com.br",77],["portalcriatividade.com.br",[78,110]],["lvturbo.com",81],["sbbrisk.com",81],["sbface.com",81],["sbspeed.com",81],["streamsb.net",81],["itscybertech.com",81],["tritinia.com",84],["sportnews.to",[84,90]],["psihologiadeazi.ro",84],["dubznetwork.com",[84,106]],["allmovie.com",86],["sidereel.com",86],["appofmirror.com",88],["samurai.wordoco.com",88],["developpez.com",89],["scatch176duplicities.com",91],["voe-unblock.com",91],["phimdinhcao.com",92],["picallow.com",93],["brooklyneagle.com",93],["techgyd.com",93],["karsaz-law.com",93],["links.extralinks.casa",94],["theasianparent.com",94],["titulky.com",95],["dongphimmoiz.com",96],["investorvillage.com",97],["geeksforgeeks.org",98],["acupoffrench.com",99],["novelza.com",99],["viewsb.com",100],["nsfwzone.xyz",100],["dlmovies.link",100],["top1iq.com",101],["unlimitedfiles.xyz",102],["aztravels.net",103],["downfile.site",103],["memangbau.com",103],["trangchu.news",103],["revenue.land",104],["eplayer.click",106],["olacast.live",106],["ntuplay.xyz",106],["maxstream.video",108],["esologs.com",109],["fflogs.com",109],["swtorlogs.com",109],["warcraftlogs.com",109],["wildstarlogs.com",109],["smokelearned.net",111],["nhentaihaven.org",112],["hidemywp.co",113],["camcaps.to",119],["vtplayer.net",119],["phimlongtieng.net",[120,121,122,123]],["weakstream.org",125],["jk-market.com",126],["vtbe.to",127],["vtube.network",127],["film4e.com",128],["zamundatv.com",128],["firescans.xyz",129],["vidsrc.*",130],["radartest.com",131],["daya-jewelry.com",132],["veev.to",133],["anime3s.com",[134,135]],["animet1.net",[134,135]],["japonhentai.com",136],["cyberalert.gr",137],["torontosom.ca",138]]);
const exceptionsMap = new Map([]);
const hasEntities = true;
const hasAncestors = false;

const collectArgIndices = (hn, map, out) => {
    let argsIndices = map.get(hn);
    if ( argsIndices === undefined ) { return; }
    if ( typeof argsIndices !== 'number' ) {
        for ( const argsIndex of argsIndices ) {
            out.add(argsIndex);
        }
    } else {
        out.add(argsIndices);
    }
};

const indicesFromHostname = (hostname, suffix = '') => {
    const hnParts = hostname.split('.');
    const hnpartslen = hnParts.length;
    if ( hnpartslen === 0 ) { return; }
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = `${hnParts.slice(i).join('.')}${suffix}`;
        collectArgIndices(hn, hostnamesMap, todoIndices);
        collectArgIndices(hn, exceptionsMap, tonotdoIndices);
    }
    if ( hasEntities ) {
        const n = hnpartslen - 1;
        for ( let i = 0; i < n; i++ ) {
            for ( let j = n; j > i; j-- ) {
                const en = `${hnParts.slice(i,j).join('.')}.*${suffix}`;
                collectArgIndices(en, hostnamesMap, todoIndices);
                collectArgIndices(en, exceptionsMap, tonotdoIndices);
            }
        }
    }
};

const entries = (( ) => {
    const docloc = document.location;
    const origins = [ docloc.origin ];
    if ( docloc.ancestorOrigins ) {
        origins.push(...docloc.ancestorOrigins);
    }
    return origins.map((origin, i) => {
        const beg = origin.lastIndexOf('://');
        if ( beg === -1 ) { return; }
        const hn = origin.slice(beg+3)
        const end = hn.indexOf(':');
        return { hn: end === -1 ? hn : hn.slice(0, end), i };
    }).filter(a => a !== undefined);
})();
if ( entries.length === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = new Set();

indicesFromHostname(entries[0].hn);
if ( hasAncestors ) {
    for ( const entry of entries ) {
        if ( entry.i === 0 ) { continue; }
        indicesFromHostname(entry.hn, '>>');
    }
}

// Apply scriplets
for ( const i of todoIndices ) {
    if ( tonotdoIndices.has(i) ) { continue; }
    try { abortCurrentScript(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
