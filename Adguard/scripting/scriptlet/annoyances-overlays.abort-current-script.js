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
        abortCurrentScriptFn(...args);
    });
}

function abortCurrentScriptFn(
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
    const textContentGetter = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent').get;
    const getScriptText = elem => {
        let text = textContentGetter.call(elem);
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
const argsList = [["$","modal_newsletter"],["document.onselectstart"],["$","contextmenu"],["disableselect","reEnable"],["document.onkeydown"],["document.addEventListener","contextmenu"],["jQuery","ADBLOCK"],["document.oncontextmenu"],["document.getElementById","advert-tester"],["document.oncopy"],["jQuery","AdBlock"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.getElementById","banner"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["document.getElementById","adblock"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$","Adblock"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["document.addEventListener","preventDefault"],["$",".height"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","AdBlock"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","\"input\""],["jQuery","stopPropagation"],["update_visit_count"],["eval","replace"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["console.clear","contextmenu"],["disableEnterKey"],["document.onkeypress"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["attachToDom","ad-fallback"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["document.querySelectorAll","adblock"],["document.addEventListener","copy"],["checkAdblockBait"],["document.addEventListener","keydown"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","hmwp_is_devtool"],["RegExp.prototype.toString",".join(\"\")"],["document.onmousedown","disableclick"],["RegExp","disableRightClick"],["RegExp","console"],["addEventListener","ays_tooltip"],["document.onkeydown","disableCTRL"],["document.oncontextmenu","preventDefault"],["alert","location.href"]];
const hostnamesMap = new Map([["freesmsgateway.com",0],["mimaletadepeliculas.blogspot.com",1],["clk.sh",[1,7]],["shrinkearn.com",[1,7]],["luoghidavedere.it",1],["practicetestgeeks.com",[1,7]],["gagetmatome.com",1],["verdadeiroolhar.pt",1],["librospreuniversitariospdf.blogspot.com",[1,2,4,43]],["mt-milcom.blogspot.com",[1,7]],["interviewgig.com",1],["artesacro.org",1],["dailynewsview.com",1],["dailynews.us.com",1],["e-sushi.fr",1],["evasion-online.com",1],["exclusifvoyages.com",1],["naukridisha.in",1],["nydailyquote.com",1],["ouasafat.com",1],["reflectim.fr",[1,7]],["top.howfn.com",1],["kangmartho.com",1],["gnt24365.net",[1,7]],["tvstreampf.xyz",[1,49]],["7misr4day.com",[1,7]],["evz.ro",2],["visionias.net",2],["mangaku.*",2],["dramaqu.*",2],["safetxt.net",2],["javbest.xyz",2],["javbix.com",2],["javgrab.com",2],["goalup.live",2],["47news.jp",2],["japanxxxmovie.com",2],["sexpox.com",2],["ibomma.pw",2],["aepos.ap.gov.in",2],["10000recipe.com",2],["edurev.in",2],["javjavhd.com",2],["mcocguideblog.com",3],["singingdalong.blogspot.com",3],["runningnews.gr",[3,7]],["tecnotutoshd.net",3],["psychologiazycia.com",[3,7]],["up4stream.com",4],["ups2up.fun",4],["abstream.to",4],["sabishiidesu.com",4],["europixhd.*",[4,7]],["topeuropix.*",[4,7]],["banglainsider.com",[4,30]],["kusonime.com",[4,7,39]],["lendagames.com",4],["vinaurl.blogspot.com",[4,72]],["utorrentgamesps2.blogspot.com",4],["articlesmania.me",4],["wawlist.com",[4,7]],["koszalincity.pl",[4,7]],["allcryptoz.net",4],["crewbase.net",4],["crewus.net",4],["shinbhu.net",4],["shinchu.net",4],["topcryptoz.net",4],["uniqueten.net",4],["ultraten.net",4],["indianhealthyrecipes.com",[4,7]],["krunkercentral.com",4],["desijugar.net",4],["adslink.pw",4],["jpopsingles.eu",[4,7,27,118]],["genesistls.com",[4,49]],["guiasaude.info",4],["felizemforma.com",4],["icourse163.org",4],["kursnacukrzyce.pl",5],["fucktube4k.com",5],["cyanlabs.net",6],["fmhikayeleri.com",7],["tinyppt.com",7],["hindi-gk.com",7],["androidmtk.com",7],["badayak.com",7],["kirannewsagency.com",7],["starsunfolded.com",7],["satcesc.com",7],["yeane.org",7],["mtbtutoriales.com",7],["answersafrica.com",7],["felico.pl",7],["legionprogramas.org",7],["serwis-zamkow.com",7],["hebrew4christians.com",7],["otakudesu.org",[7,40]],["androidmakale.com",7],["mongri.net",7],["download.ipeenk.com",7],["doranobi-fansub.id",[7,42]],["oparana.com.br",7],["lolle21.com",7],["mangaid.click",7],["manianomikata.com",7],["tfp.is",7],["dassen-azara4.com",7],["dramacute.*",[7,45]],["pentruea.com",7],["depedlps.*",7],["neyrologos.gr",7],["freerapidleechlist.blogspot.com",7],["ggeguide.com",7],["mangatoon.*",7],["lalawin.com",7],["audioreview.m1001.coreserver.jp",[7,55]],["seikatsu-hyakka.com",7],["elizabeth-mitchell.org",[7,59]],["blasianluvforever.com",7],["eduardo-monica.com",7],["msubplix.com",7],["upstream.to",7],["ilclubdellericette.it",7],["daum.net",7],["123movies.*",[7,55]],["newsforbolly.org",7],["gomovies.*",7],["dztechphone.com",7],["funivie.org",7],["goodbakery.ru",[7,27]],["ifdreamscametrue.com",[7,68]],["juegosdetiempolibre.org",7],["musicindustryhowto.com",[7,37,49]],["sdelatotoplenie.ru",[7,9]],["sachonthi.com",7],["zdravenportal.eu",[7,71]],["thezealots.org",7],["deportealdia.live",7],["fmovies.*",[7,55]],["hulnews.top",7],["otakudesu.*",7],["truyenbanquyen.com",[7,111,112,113]],["globaledu.jp",7],["lataifas.ro",[7,76]],["openfinanza.it",[7,49]],["followmikewynn.com",7],["starbene.it",7],["bimiacg.net",7],["diaforetiko.gr",7],["tchadcarriere.com",7],["info-beihilfe.de",7],["zgywyd.cn",7],["mercenaryenrollment.com",7],["cristelageorgescu.ro",7],["crunchyscan.fr",7],["www-daftarharga.blogspot.com",7],["theghostinmymachine.com",7],["ilovevaldinon.it",7],["aileen-novel.online",[7,67]],["bumigemilang.com",[7,67]],["bingotingo.com",7],["stream.bunkr.is",7],["blueraindrops.com",7],["sekaikomik.live",7],["privivkainfo.ru",7],["bestjavporn.com",7],["mm9841.cc",7],["myoplay.club",7],["bpcj.or.jp",7],["cdramalove.com",7],["outidesigoto.com",7],["gourmetscans.net",[7,103]],["awebstories.com",7],["zgbk.com",7],["clujust.ro",[7,49]],["stockpokeronline.com",7],["stiridinromania.ro",7],["kooora4lives.net",7],["kooora4livs.com",7],["thailandopen.org",[7,111,112,113]],["theaircurrent.com",[7,55,111,112,113]],["freereadnovel.online",[7,111,112,113]],["piklodz.pl",[7,111,112,113]],["secondlifetranslations.com",[7,111,112,113]],["ferroviando.com.br",[7,111,112,113]],["counciloflove.com",[7,111,112,113]],["infokik.com",[7,111,112,113]],["kulinarnastronamocy.pl",[7,111,112,113]],["jafekri.com",[7,111,112,113]],["ezmanga.net",[7,111,112,113]],["reborntrans.com",[7,111,112,113]],["koltry.life",[7,111,112,113]],["kolnovel.com",[7,111,112,113]],["paidiatreio.gr",[7,116]],["workhouses.org.uk",7],["dollarvr.com",[7,49]],["newsme.gr",[7,49]],["daily-tohoku.news",[7,45]],["descopera.ro",7],["velicu.eu",7],["arenavalceana.ro",[7,27]],["firmwarefile.com",7],["asianexpress.co.uk",7],["certificationexamanswers.890m.com",7],["cookhero.gr",7],["creative-chemistry.org.uk",7],["deutschaj.com",7],["divineyogaschool.blogspot.com",7],["fabioambrosi.it",7],["flory4all.com",7],["fv2freegifts.org",7],["geniusjw.com",7],["ideas0419.com",7],["jeyran.net",7],["ktm2day.com",7],["letsdownloads.com",7],["limametti.com",7],["luyenthithukhoa.vn",7],["otakukan.com",7],["ribbelmonster.de",7],["untitle.org",7],["uptimeside.webnode.gr",7],["usmleexperiences.review",7],["yoyofilmeys.*",7],["zoommastory.com",7],["urbanbrush.net",7],["audiotools.in",7],["raindropteamfan.com",7],["manhwahentai.me",7],["ontools.net",7],["scarysymptoms.com",[7,103]],["musicallyvideos.com",7],["geeksoncoffee.com",7],["guidingliterature.com",[7,49]],["mostrodifirenze.com",7],["3xyaoi.com",7],["tinyhouse-baluchon.fr",7],["whoisnovel.com",7],["eca-anime.net",8],["braziljournal.com",9],["nekopoi.web.id",9],["world4.eu",[9,66,67]],["flyertalk.com",10],["searchenginewatch.com",11],["oggiscuola.com",12],["kashmirobserver.net",13],["cathouseonthekings.com",14],["winaero.com",15],["centrumher.eu",16],["japancamerahunter.com",17],["airlinercafe.com",17],["thegraillords.net",18],["worldscientific.com",18],["videohelp.com",18],["upsrtconline.co.in",19],["qualityfilehosting.com",20],["booksmedicos.org",21],["siliconinvestor.com",22],["space-engineers.de",22],["coffeeforums.co.uk",22],["anime2you.de",22],["majorgeeks.com",22],["jobsbotswana.info",23],["npnews24.com",24],["fordogtrainers.pl",[25,26]],["polskacanada.com",27],["fantricks.com",27],["blog.kwick.de",27],["selfstudyhistory.com",[27,49]],["yeuphimmoik.com",27],["repack-games.com",27],["delicateseliterare.ro",27],["wpplugins.tips",27],["verselemzes.hu",[27,124]],["sqlserveregitimleri.com",27],["gezimanya.com",28],["athletic.net",29],["playonlinux.com",31],["bitblokes.de",32],["bold.dk",33],["pureinfotech.com",34],["casertace.net",34],["civildigital.com",34],["lesmoutonsenrages.fr",34],["venusarchives.com",34],["verpornocomic.com",34],["balticlivecam.com",35],["molineuxmix.co.uk",36],["yaledailynews.com",36],["canondrivers.org",[37,38]],["includehelp.com",41],["routenote.com",43],["themosvagas.com.br",[43,80]],["mt07-forum.de",44],["auto-treff.com",44],["telefon-treff.de",44],["dodge-forum.eu",44],["altranotizia.it",45],["hearthstone-decks.net",46],["full-anime.fr",47],["klsescreener.com",47],["nonton78.com",48],["tvzingvn.*",48],["zingtvhd.*",48],["zingvntv.*",48],["sbflix.*",48],["opportunitydesk.org",49],["selfstudyanthro.com",49],["renditepassive.net",49],["androidtvbox.eu",49],["flinsetyadi.com",[49,55]],["the-masters-voice.com",[49,55]],["pandurul.ro",50],["masrawy.com",51],["milfzr.com",52],["phrasemix.com",53],["smokingmeatforums.com",54],["broncoshq.com",54],["famousintel.com",55],["jnews5.com",55],["tvshowstars.com",55],["eurooptyk.com.pl",55],["celebzcircle.com",55],["sertracen.com.pa",55],["pitesti24.ro",55],["samsungtechwin.com",55],["cours-de-droit.net",55],["iptv4best.com",55],["blogvisaodemercado.pt",55],["kapitalis.com",55],["tiempo.hn",55],["winmeen.com",55],["ibps.in",55],["visse.com.br",55],["javsubtitle.co",55],["learninsta.com",55],["licensekeys.org",55],["mediahiburan.my",55],["tipssehatcantik.com",55],["anime-drama.jp",55],["jbjbgame.com",55],["viatasisanatate.com",55],["ziarulargesul.ro",55],["globaldefensecorp.com",55],["gossipnextdoor.com",55],["coffeeapps.ir",55],["media.framu.world",55],["immobiliaremia.com",55],["colegiosconcertados.info",55],["bigdatauni.com",55],["riwyat.com",55],["rukim.id",55],["visefierbinti.ro",55],["cyberkrafttraining.com",55],["ncert-solutions.com",55],["ncertsolutions.guru",55],["clockks.com",55],["ananda-yoga.ro",55],["poolpiscina.com",55],["infodifesa.it",55],["getective.com",55],["flashdumpfiles.com",55],["formatatmak.com",55],["drkrok.com",55],["alphagirlreviews.com",55],["kitchennovel.com",55],["voxvalachorum.ro",55],["day-hoc.org",55],["onlineonderdelenshop.nl",55],["primicia.com.ve",55],["tech-recipes.com",55],["postcourier.com.pg",55],["afrikmag.com",55],["maduras.vip",55],["aprendeinglessila.com",55],["kicknews.today",55],["koalasplayground.com",55],["hellokpop.com",55],["hayatbilgileri.com",55],["moneyexcel.com",55],["placementstore.com",55],["neuroteam-metz.de",55],["codedosa.com",55],["liveyourmaths.com",55],["newspao.gr",55],["ieltsliz.com",55],["programasvirtualespc.net",55],["tempatwisataseru.com",55],["wikiofcelebs.com",55],["jornaljoca.com.br",55],["arcanescans.com",55],["filmzone.com",55],["hiraethtranslation.com",55],["kaystls.site",55],["home.novel-gate.com",55],["plural.jor.br",55],["evreporter.com",55],["sinhasannews.com",55],["viewsofgreece.gr",55],["rozbor-dila.cz",55],["kritichno.bg",55],["csiplearninghub.com",55],["medeberiya.site",55],["abola.pt",56],["unixhow.com",57],["wikihow.com",58],["analizy.pl",60],["zeeebatch.blogspot.com",61],["sokolow-mlp.pl",61],["japan-fans.com",61],["ohmygirl.ml",62],["cissamagazine.com.br",63],["observatoriodocinema.uol.com.br",64],["moneyguru.co",65],["portalcriatividade.com.br",[66,106]],["kitguru.net",69],["sbbrisk.com",70],["sbface.com",70],["streamsb.net",70],["itscybertech.com",70],["lcpdfr.com",73],["whatfontis.com",74],["tritinia.com",75],["sportnews.to",[75,83]],["psihologiadeazi.ro",75],["dubznetwork.com",[75,102]],["lowkeytech.com",77],["ubuntudde.com",77],["techsini.com",78],["allmovie.com",79],["sidereel.com",79],["appofmirror.com",81],["samurai.wordoco.com",81],["developpez.com",82],["voe-unblock.com",84],["phimdinhcao.com",85],["picallow.com",86],["brooklyneagle.com",86],["techgyd.com",86],["karsaz-law.com",86],["links.extralinks.casa",87],["theasianparent.com",87],["ssuathletics.com",88],["titulky.com",89],["dongphimmoiz.com",90],["investorvillage.com",91],["grandoldteam.com",92],["gamingsinners.com",93],["elitepvpers.com",94],["geeksforgeeks.org",95],["acupoffrench.com",96],["novelza.com",96],["top1iq.com",97],["unlimitedfiles.xyz",98],["aztravels.net",99],["downfile.site",99],["memangbau.com",99],["trangchu.news",99],["nsfwzone.xyz",100],["dlmovies.link",100],["revenue.land",101],["eplayer.click",102],["olacast.live",102],["ntuplay.xyz",102],["maxstream.video",104],["esologs.com",105],["fflogs.com",105],["swtorlogs.com",105],["warcraftlogs.com",105],["wildstarlogs.com",105],["smokelearned.net",107],["nhentaihaven.org",108],["slideshare.net",109],["hidemywp.co",110],["memoryhackers.org",114],["steamcollector.com",115],["mgsm.pl",117],["camcaps.to",119],["phimlongtieng.net",[120,121,122,123]],["jk-market.com",125],["vtbe.to",126],["vtube.network",126],["film4e.com",127],["boston.com",128],["cattime.com",128],["dogtime.com",128],["download.mokeedev.com",128],["freep.com",128],["ijr.com",128],["inquirer.net",128],["knowyourmeme.com",128],["nationalreview.com",128],["nofilmschool.com",128],["order-order.com",128],["savvytime.com",128],["techlicious.com",128],["technicpack.net",128],["thedraftnetwork.com",128],["wrestlezone.com",128],["xda-developers.com",128],["legacy.com",129],["firescans.xyz",130],["vidsrc.*",131],["radartest.com",132],["daya-jewelry.com",133],["veev.to",134],["japonhentai.com",135],["cyberalert.gr",136],["torontosom.ca",137],["zeustranslations.blogspot.com",138]]);
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
