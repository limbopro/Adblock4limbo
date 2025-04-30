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
const argsList = [["document.onselectstart"],["$","contextmenu"],["disableselect","reEnable"],["addEventListener","/disable_|wccp/"],["document.onkeydown"],["document.addEventListener","contextmenu"],["document.oncontextmenu"],["document.getElementById","advert-tester"],["document.oncopy"],["$","AdBlock"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.createElement","adblock"],["document.getElementById","banner"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["document.getElementById","adblock"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$",".height"],["$","Adblock"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["document.addEventListener","preventDefault"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","\"input\""],["jQuery","stopPropagation"],["update_visit_count"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["console.clear","contextmenu"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["disableEnterKey"],["document.getElementsByTagName","unselectable"],["document.onkeypress"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["attachToDom","ad-fallback"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["document.querySelectorAll","adblock"],["document.addEventListener","copy"],["checkAdblockBait"],["document.addEventListener","keydown"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["$","debugger"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","hmwp_is_devtool"],["RegExp.prototype.toString",".join(\"\")"],["document.onmousedown","disableclick"],["RegExp","disableRightClick"],["RegExp","console"],["$","devtoolsDetector"],["Object.defineProperty","DisableDevtool"],["addEventListener","ays_tooltip"],["document.onkeydown","disableCTRL"],["document.oncontextmenu","preventDefault"]];
const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["clk.sh",[0,6]],["shrinkearn.com",[0,6]],["luoghidavedere.it",0],["practicetestgeeks.com",[0,6]],["gagetmatome.com",0],["verdadeiroolhar.pt",0],["librospreuniversitariospdf.blogspot.com",[0,1,4,43]],["mt-milcom.blogspot.com",[0,6]],["interviewgig.com",0],["artesacro.org",0],["dailynewsview.com",0],["dailynews.us.com",0],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["naukridisha.in",0],["nydailyquote.com",0],["ouasafat.com",0],["reflectim.fr",[0,6]],["top.howfn.com",0],["kangmartho.com",0],["gnt24365.net",[0,6]],["tvstreampf.xyz",[0,49]],["pvstreams.com",[0,4,6,26]],["7misr4day.com",[0,6]],["evz.ro",1],["visionias.net",1],["mangaku.*",1],["dramaqu.*",1],["safetxt.net",1],["javbest.xyz",1],["javbix.com",1],["javgrab.com",1],["goalup.live",1],["hatsukimanga.com",1],["47news.jp",1],["japanxxxmovie.com",1],["sexpox.com",1],["ibomma.pw",1],["aepos.ap.gov.in",1],["ssphim.net",[1,4]],["10000recipe.com",1],["edurev.in",1],["javjavhd.com",1],["mcocguideblog.com",2],["singingdalong.blogspot.com",2],["runningnews.gr",[2,6]],["tecnotutoshd.net",2],["psychologiazycia.com",[2,6]],["kolnovel.org",3],["up4stream.com",4],["ups2up.fun",4],["abstream.to",4],["streambolt.tv",4],["sabishiidesu.com",4],["europixhd.*",[4,6]],["topeuropix.*",[4,6]],["banglainsider.com",[4,29]],["kusonime.com",[4,6,38]],["animesanka.com",4],["lendagames.com",4],["vinaurl.blogspot.com",[4,72]],["utorrentgamesps2.blogspot.com",4],["articlesmania.me",4],["aksensei.com",4],["wawlist.com",[4,6]],["koszalincity.pl",[4,6]],["allcryptoz.net",4],["crewbase.net",4],["crewus.net",4],["shinbhu.net",4],["shinchu.net",4],["thumb8.net",4],["thumb9.net",4],["topcryptoz.net",4],["uniqueten.net",4],["ultraten.net",4],["indianhealthyrecipes.com",[4,6]],["krunkercentral.com",4],["desijugar.net",4],["adslink.pw",4],["jpopsingles.eu",[4,6,26,117]],["genesistls.com",[4,49]],["senpaiediciones.com",[4,49]],["guiasaude.info",4],["felizemforma.com",4],["icourse163.org",4],["kursnacukrzyce.pl",5],["fucktube4k.com",5],["knightnoscanlation.com",5],["blog.cryptowidgets.net",5],["blog.insurancegold.in",5],["blog.wiki-topia.com",5],["blog.coinsvalue.net",5],["blog.cookinguide.net",5],["blog.freeoseocheck.com",5],["fmhikayeleri.com",6],["tinyppt.com",6],["hindi-gk.com",6],["androidmtk.com",6],["badayak.com",6],["kirannewsagency.com",6],["starsunfolded.com",6],["satcesc.com",6],["them4ufree.info",6],["yeane.org",6],["mtbtutoriales.com",6],["answersafrica.com",6],["felico.pl",6],["legionprogramas.org",6],["serwis-zamkow.com",6],["hebrew4christians.com",6],["otakudesu.org",[6,39]],["androidmakale.com",6],["mongri.net",6],["download.ipeenk.com",6],["doranobi-fansub.id",[6,42]],["alexeiportableapp.blogspot.com",6],["oparana.com.br",6],["lolle21.com",6],["mangaid.click",6],["manianomikata.com",6],["tfp.is",6],["dassen-azara4.com",6],["dramacute.*",[6,45]],["pentruea.com",6],["depedlps.*",6],["neyrologos.gr",6],["freerapidleechlist.blogspot.com",6],["ggeguide.com",6],["tanya-tanya.com",[6,55]],["mangatoon.*",6],["lalawin.com",6],["audioreview.m1001.coreserver.jp",[6,55]],["seikatsu-hyakka.com",6],["elizabeth-mitchell.org",[6,60]],["blasianluvforever.com",6],["movieston.com",[6,26]],["eduardo-monica.com",6],["msubplix.com",6],["upstream.to",6],["ilclubdellericette.it",6],["daum.net",6],["123movies.*",[6,55]],["newsforbolly.org",6],["gomovies.*",6],["dztechphone.com",6],["funivie.org",6],["goodbakery.ru",[6,26]],["ifdreamscametrue.com",[6,68]],["juegosdetiempolibre.org",6],["musicindustryhowto.com",[6,36,49]],["sdelatotoplenie.ru",[6,8]],["sachonthi.com",6],["zdravenportal.eu",[6,71]],["thezealots.org",6],["deportealdia.live",6],["fmovies.*",[6,55]],["hulnews.top",6],["otakudesu.*",6],["truyenbanquyen.com",[6,110,111,112]],["globaledu.jp",6],["lataifas.ro",[6,75]],["blisseyhusband.in",[6,26]],["openfinanza.it",[6,49]],["followmikewynn.com",6],["starbene.it",6],["bimiacg.net",6],["diaforetiko.gr",6],["tchadcarriere.com",6],["info-beihilfe.de",6],["zgywyd.cn",6],["mercenaryenrollment.com",6],["cristelageorgescu.ro",6],["crunchyscan.fr",6],["www-daftarharga.blogspot.com",6],["theghostinmymachine.com",6],["ilovevaldinon.it",6],["aileen-novel.online",[6,67]],["bumigemilang.com",[6,67]],["bingotingo.com",6],["stream.bunkr.is",6],["blueraindrops.com",6],["sekaikomik.live",6],["privivkainfo.ru",6],["apps2app.com",6],["bestjavporn.com",6],["mm9841.cc",6],["myoplay.club",6],["bpcj.or.jp",6],["cdramalove.com",6],["outidesigoto.com",6],["xemphimaz.com",6],["gourmetscans.net",[6,102]],["awebstories.com",6],["zgbk.com",6],["clujust.ro",[6,49]],["stockpokeronline.com",6],["stiridinromania.ro",6],["kooora4lives.net",6],["kooora4livs.com",6],["piklodz.pl",[6,110,111,112]],["secondlifetranslations.com",[6,110,111,112]],["ferroviando.com.br",[6,110,111,112]],["counciloflove.com",[6,110,111,112]],["infokik.com",[6,110,111,112]],["kulinarnastronamocy.pl",[6,110,111,112]],["jafekri.com",[6,110,111,112]],["ezmanga.net",[6,110,111,112]],["reborntrans.com",[6,110,111,112]],["paidiatreio.gr",[6,115]],["workhouses.org.uk",6],["dollarvr.com",[6,49]],["newsme.gr",[6,49]],["daily-tohoku.news",[6,45]],["descopera.ro",6],["velicu.eu",6],["arenavalceana.ro",[6,26]],["firmwarefile.com",6],["asianexpress.co.uk",6],["best4hack.blogspot.com",6],["certificationexamanswers.890m.com",6],["cookhero.gr",6],["creative-chemistry.org.uk",6],["deutschaj.com",6],["divineyogaschool.blogspot.com",6],["fabioambrosi.it",6],["flory4all.com",6],["fv2freegifts.org",6],["geniusjw.com",6],["ideas0419.com",6],["jeyran.net",6],["ktm2day.com",6],["letsdownloads.com",6],["limametti.com",6],["luyenthithukhoa.vn",6],["otakukan.com",6],["ribbelmonster.de",6],["untitle.org",6],["uptimeside.webnode.gr",6],["usmleexperiences.review",6],["yoyofilmeys.*",6],["zoommastory.com",6],["urbanbrush.net",6],["audiotools.in",6],["raindropteamfan.com",6],["manhwahentai.me",6],["ontools.net",6],["scarysymptoms.com",[6,102]],["musicallyvideos.com",6],["geeksoncoffee.com",6],["guidingliterature.com",[6,49]],["mostrodifirenze.com",6],["3xyaoi.com",6],["tinyhouse-baluchon.fr",6],["whoisnovel.com",6],["eca-anime.net",7],["braziljournal.com",8],["nekopoi.web.id",8],["world4.eu",[8,66,67]],["flyertalk.com",9],["lcpdfr.com",9],["searchenginewatch.com",10],["oggiscuola.com",11],["kashmirobserver.net",12],["cathouseonthekings.com",13],["winaero.com",14],["centrumher.eu",15],["japancamerahunter.com",16],["airlinercafe.com",16],["thegraillords.net",17],["worldscientific.com",17],["videohelp.com",17],["upsrtconline.co.in",18],["qualityfilehosting.com",19],["booksmedicos.org",20],["siliconinvestor.com",21],["space-engineers.de",21],["coffeeforums.co.uk",21],["anime2you.de",21],["majorgeeks.com",21],["jobsbotswana.info",22],["npnews24.com",23],["fordogtrainers.pl",[24,25]],["polskacanada.com",26],["fantricks.com",26],["blog.kwick.de",26],["selfstudyhistory.com",[26,49]],["yeuphimmoik.com",26],["repack-games.com",26],["delicateseliterare.ro",26],["wpplugins.tips",26],["verselemzes.hu",[26,123]],["sqlserveregitimleri.com",26],["gezimanya.com",27],["athletic.net",28],["playonlinux.com",30],["bitblokes.de",31],["bold.dk",32],["pureinfotech.com",33],["almasdarnews.com",33],["casertace.net",33],["civildigital.com",33],["lesmoutonsenrages.fr",33],["venusarchives.com",33],["verpornocomic.com",33],["balticlivecam.com",34],["molineuxmix.co.uk",35],["yaledailynews.com",35],["canondrivers.org",[36,37]],["forum.nlmod.net",40],["includehelp.com",41],["routenote.com",43],["themosvagas.com.br",[43,79]],["mt07-forum.de",44],["auto-treff.com",44],["telefon-treff.de",44],["dodge-forum.eu",44],["altranotizia.it",45],["hearthstone-decks.net",46],["full-anime.fr",47],["klsescreener.com",47],["nonton78.com",48],["tvzingvn.*",48],["zingtvhd.*",48],["zingvntv.*",48],["sbfast.com",48],["sbflix.*",48],["vupload.com",48],["opportunitydesk.org",49],["selfstudyanthro.com",49],["renditepassive.net",49],["androidtvbox.eu",49],["flinsetyadi.com",[49,55]],["rawneix.in",[49,99,100]],["the-masters-voice.com",[49,55]],["activationkeys.co",49],["pandurul.ro",50],["masrawy.com",51],["milfzr.com",52],["phrasemix.com",53],["smokingmeatforums.com",54],["broncoshq.com",54],["eurooptyk.com.pl",55],["celebzcircle.com",55],["sertracen.com.pa",55],["pitesti24.ro",55],["samsungtechwin.com",55],["cours-de-droit.net",55],["iptv4best.com",55],["blogvisaodemercado.pt",55],["kapitalis.com",55],["tiempo.hn",55],["winmeen.com",55],["ibps.in",55],["visse.com.br",55],["javsubtitle.co",55],["learninsta.com",55],["licensekeys.org",55],["mediahiburan.my",55],["tipssehatcantik.com",55],["anime-drama.jp",55],["jbjbgame.com",55],["viatasisanatate.com",55],["ziarulargesul.ro",55],["globaldefensecorp.com",55],["gossipnextdoor.com",55],["coffeeapps.ir",55],["media.framu.world",55],["immobiliaremia.com",55],["colegiosconcertados.info",55],["bigdatauni.com",55],["riwyat.com",55],["rukim.id",55],["visefierbinti.ro",55],["cyberkrafttraining.com",55],["theaircurrent.com",55],["ncert-solutions.com",55],["ncertsolutions.guru",55],["nocturnetls.net",55],["clockks.com",55],["ananda-yoga.ro",55],["poolpiscina.com",55],["infodifesa.it",55],["getective.com",55],["flashdumpfiles.com",55],["formatatmak.com",55],["drkrok.com",55],["alphagirlreviews.com",55],["kitchennovel.com",55],["voxvalachorum.ro",55],["cracksone.com",55],["day-hoc.org",55],["onlineonderdelenshop.nl",55],["primicia.com.ve",55],["tech-recipes.com",55],["postcourier.com.pg",55],["afrikmag.com",55],["maduras.vip",55],["aprendeinglessila.com",55],["kicknews.today",55],["koalasplayground.com",55],["hellokpop.com",55],["hayatbilgileri.com",55],["moneyexcel.com",55],["placementstore.com",55],["neuroteam-metz.de",55],["codedosa.com",55],["liveyourmaths.com",55],["newspao.gr",55],["ieltsliz.com",55],["programasvirtualespc.net",55],["tempatwisataseru.com",55],["wikiofcelebs.com",55],["jornaljoca.com.br",55],["arcanescans.com",55],["filmzone.com",55],["hiraethtranslation.com",55],["kaystls.site",55],["home.novel-gate.com",55],["plural.jor.br",55],["evreporter.com",55],["sinhasannews.com",55],["viewsofgreece.gr",55],["rozbor-dila.cz",55],["kritichno.bg",55],["csiplearninghub.com",55],["medeberiya.site",55],["sharree.com",56],["moneyguru.co",56],["abola.pt",57],["unixhow.com",58],["wikihow.com",59],["analizy.pl",61],["zeeebatch.blogspot.com",62],["sokolow-mlp.pl",62],["japan-fans.com",62],["ohmygirl.ml",63],["cissamagazine.com.br",64],["observatoriodocinema.uol.com.br",65],["portalcriatividade.com.br",[66,105]],["kitguru.net",69],["lvturbo.com",70],["sbbrisk.com",70],["sbface.com",70],["sbspeed.com",70],["streamsb.net",70],["itscybertech.com",70],["whatfontis.com",73],["tritinia.com",74],["sportnews.to",[74,82]],["psihologiadeazi.ro",74],["dubznetwork.com",[74,101]],["lowkeytech.com",76],["ubuntudde.com",76],["techsini.com",77],["allmovie.com",78],["sidereel.com",78],["appofmirror.com",80],["samurai.wordoco.com",80],["developpez.com",81],["scatch176duplicities.com",83],["voe-unblock.com",83],["phimdinhcao.com",84],["picallow.com",85],["brooklyneagle.com",85],["techgyd.com",85],["karsaz-law.com",85],["links.extralinks.casa",86],["theasianparent.com",86],["ssuathletics.com",87],["titulky.com",88],["dongphimmoiz.com",89],["investorvillage.com",90],["grandoldteam.com",91],["gamingsinners.com",91],["elitepvpers.com",92],["geeksforgeeks.org",93],["acupoffrench.com",94],["novelza.com",94],["viewsb.com",95],["nsfwzone.xyz",95],["dlmovies.link",95],["top1iq.com",96],["unlimitedfiles.xyz",97],["aztravels.net",98],["downfile.site",98],["memangbau.com",98],["trangchu.news",98],["revenue.land",99],["eplayer.click",101],["olacast.live",101],["ntuplay.xyz",101],["maxstream.video",103],["esologs.com",104],["fflogs.com",104],["swtorlogs.com",104],["warcraftlogs.com",104],["wildstarlogs.com",104],["smokelearned.net",106],["nhentaihaven.org",107],["slideshare.net",108],["hidemywp.co",109],["memoryhackers.org",113],["steamcollector.com",114],["mgsm.pl",116],["camcaps.to",118],["vtplayer.net",118],["phimlongtieng.net",[119,120,121,122]],["weakstream.org",124],["jk-market.com",125],["vtbe.to",126],["vtube.network",126],["film4e.com",127],["zamundatv.com",127],["boston.com",128],["britannica.com",128],["cattime.com",128],["dogtime.com",128],["download.mokeedev.com",128],["freep.com",128],["ijr.com",128],["inquirer.net",128],["knowyourmeme.com",128],["nationalreview.com",128],["nofilmschool.com",128],["order-order.com",128],["savvytime.com",128],["techlicious.com",128],["technicpack.net",128],["thedraftnetwork.com",128],["wrestlezone.com",128],["xda-developers.com",128],["legacy.com",129],["firescans.xyz",130],["vidsrc.*",131],["radartest.com",132],["daya-jewelry.com",133],["veev.to",134],["anime3s.com",[135,136]],["animet1.net",[135,136]],["japonhentai.com",137],["cyberalert.gr",138],["torontosom.ca",139]]);
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
