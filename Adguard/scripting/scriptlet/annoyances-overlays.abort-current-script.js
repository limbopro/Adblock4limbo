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
const argsList = [["document.onselectstart"],["$","contextmenu"],["disableselect","reEnable"],["document.onkeydown"],["document.addEventListener","contextmenu"],["jQuery","ADBLOCK"],["document.oncontextmenu"],["document.getElementById","advert-tester"],["document.oncopy"],["jQuery","AdBlock"],["jQuery","#sign-up-popup"],["jQuery","overlay"],["document.getElementById","ad-blocker"],["document.getElementById",".ab_detected"],["jQuery","tweaker"],["jQuery","undefined"],["jQuery","ads"],["document.getElementById","block"],["document.addEventListener","alert"],["document.ondragstart","document.oncontextmenu"],["jQuery","document"],["document.getElementById","undefined"],["jQuery","restriction"],["document.oncontextmenu","document.onselectstart"],["message","clickIE"],["preventSelection"],["jQuery","contextmenu"],["jQuery","Drupal"],["$","blur"],["reEnable","killcopy"],["$","load"],["document.getElementsByTagName","null"],["eval","abd"],["jQuery","ai_adb"],["document.getElementById","none"],["$","undefined"],["document.addEventListener"],["document.oncontextmenu","key"],["addEventListener","which"],["window.addEventListener","ctrlKey"],["document.getElementById","banner"],["jQuery","disable_hot_keys"],["onload"],["$","offsetHeight"],["disableSelection"],["jQuery","ai_check"],["document.getElementById","adblock"],["onload","contextmenu"],["document.ondragstart"],["$","copy"],["document.getElementById","adblockerdetected"],["$","juicyads"],["$","showEmailNewsletterModal"],["$","btoa"],["disableSelection","reEnable"],["$","Adblock"],["eval","isNaN"],["document.addEventListener","contribute"],["addEventListener","ctrlKey"],["setTimeout","newsletterPopup"],["document.onmousedown"],["event","stopPropagation"],["soclInit"],["document.addEventListener","preventDefault"],["$",".height"],["disable_copy"],["disable_hot_keys"],["jQuery","copy"],["addEventListener","adsbygoogle.length"],["check","debugger"],["document.addEventListener","document.onselectstart"],["matchMedia"],["$","AdBlock"],["$","adBlock"],["jQuery","keydown"],["jQuery","oncontextmenu"],["String.prototype.charCodeAt","ai_"],["jQuery","preventDefault"],["$","/getScript|error:/"],["addEventListener","keydown"],["nocontextmenu"],["document.getElementById","cookie"],["document.getElementById","isMoz"],["console.clear"],["oncontextmenu","keydown"],["document.oncontextmenu","nocontextmenu"],["document.onselectstart","disableselect"],["document.querySelector","adblock"],["$","\"input\""],["jQuery","stopPropagation"],["update_visit_count"],["eval","replace"],["$","test"],["$","Promise"],["showAdblockerModal"],["stopPrntScr"],["shortcut"],["console.log","document.referer"],["document.addEventListener","onkeydown"],["console.clear","contextmenu"],["disableEnterKey"],["document.onkeypress"],["wccp_pro_iscontenteditable"],["document.body.oncontextmenu"],["attachToDom","ad-fallback"],["nocontext"],["runPageBugger"],["eval","contextmenu"],["ab_tests"],["jQuery","userAgent"],["reEnable"],["jQuery","wccp_pro"],["clear_body_at_all_for_extentions"],["RegExp","googlebot"],["document.querySelectorAll","adblock"],["document.addEventListener","copy"],["checkAdblockBait"],["document.addEventListener","keydown"],["RegExp","debugger"],["oncontextmenu"],["navigator","devtools"],["setInterval","stateObject"],["setTimeout","debugger"],["jQuery","keyCode"],["jQuery","devtool"],["RegExp","contextmenu"],["AudiosL10n"],["document.createElement","admiral"],["document.getElementsByTagName","admiral"],["jQuery","hmwp_is_devtool"],["RegExp.prototype.toString",".join(\"\")"],["document.onmousedown","disableclick"],["RegExp","disableRightClick"],["RegExp","console"],["addEventListener","ays_tooltip"],["document.onkeydown","disableCTRL"],["document.oncontextmenu","preventDefault"],["alert","location.href"]];
const hostnamesMap = new Map([["mimaletadepeliculas.blogspot.com",0],["clk.sh",[0,6]],["shrinkearn.com",[0,6]],["luoghidavedere.it",0],["practicetestgeeks.com",[0,6]],["gagetmatome.com",0],["verdadeiroolhar.pt",0],["librospreuniversitariospdf.blogspot.com",[0,1,3,42]],["mt-milcom.blogspot.com",[0,6]],["interviewgig.com",0],["artesacro.org",0],["dailynewsview.com",0],["dailynews.us.com",0],["e-sushi.fr",0],["evasion-online.com",0],["exclusifvoyages.com",0],["naukridisha.in",0],["nydailyquote.com",0],["ouasafat.com",0],["reflectim.fr",[0,6]],["top.howfn.com",0],["kangmartho.com",0],["gnt24365.net",[0,6]],["tvstreampf.xyz",[0,48]],["7misr4day.com",[0,6]],["evz.ro",1],["visionias.net",1],["mangaku.*",1],["dramaqu.*",1],["safetxt.net",1],["javbest.xyz",1],["javbix.com",1],["javgrab.com",1],["goalup.live",1],["47news.jp",1],["japanxxxmovie.com",1],["sexpox.com",1],["ibomma.pw",1],["aepos.ap.gov.in",1],["10000recipe.com",1],["edurev.in",1],["javjavhd.com",1],["mcocguideblog.com",2],["singingdalong.blogspot.com",2],["runningnews.gr",[2,6]],["tecnotutoshd.net",2],["psychologiazycia.com",[2,6]],["up4stream.com",3],["ups2up.fun",3],["abstream.to",3],["sabishiidesu.com",3],["europixhd.*",[3,6]],["topeuropix.*",[3,6]],["banglainsider.com",[3,29]],["kusonime.com",[3,6,38]],["lendagames.com",3],["vinaurl.blogspot.com",[3,71]],["utorrentgamesps2.blogspot.com",3],["articlesmania.me",3],["wawlist.com",[3,6]],["koszalincity.pl",[3,6]],["allcryptoz.net",3],["crewbase.net",3],["crewus.net",3],["shinbhu.net",3],["shinchu.net",3],["topcryptoz.net",3],["uniqueten.net",3],["ultraten.net",3],["indianhealthyrecipes.com",[3,6]],["krunkercentral.com",3],["desijugar.net",3],["adslink.pw",3],["jpopsingles.eu",[3,6,26,117]],["genesistls.com",[3,48]],["guiasaude.info",3],["felizemforma.com",3],["icourse163.org",3],["kursnacukrzyce.pl",4],["fucktube4k.com",4],["cyanlabs.net",5],["fmhikayeleri.com",6],["tinyppt.com",6],["hindi-gk.com",6],["androidmtk.com",6],["badayak.com",6],["kirannewsagency.com",6],["starsunfolded.com",6],["satcesc.com",6],["yeane.org",6],["mtbtutoriales.com",6],["answersafrica.com",6],["felico.pl",6],["legionprogramas.org",6],["serwis-zamkow.com",6],["hebrew4christians.com",6],["otakudesu.org",[6,39]],["androidmakale.com",6],["mongri.net",6],["download.ipeenk.com",6],["doranobi-fansub.id",[6,41]],["oparana.com.br",6],["lolle21.com",6],["mangaid.click",6],["manianomikata.com",6],["tfp.is",6],["dassen-azara4.com",6],["dramacute.*",[6,44]],["pentruea.com",6],["depedlps.*",6],["neyrologos.gr",6],["freerapidleechlist.blogspot.com",6],["ggeguide.com",6],["mangatoon.*",6],["lalawin.com",6],["audioreview.m1001.coreserver.jp",[6,54]],["seikatsu-hyakka.com",6],["elizabeth-mitchell.org",[6,58]],["blasianluvforever.com",6],["eduardo-monica.com",6],["msubplix.com",6],["upstream.to",6],["ilclubdellericette.it",6],["daum.net",6],["123movies.*",[6,54]],["newsforbolly.org",6],["gomovies.*",6],["dztechphone.com",6],["funivie.org",6],["goodbakery.ru",[6,26]],["ifdreamscametrue.com",[6,67]],["juegosdetiempolibre.org",6],["musicindustryhowto.com",[6,36,48]],["sdelatotoplenie.ru",[6,8]],["sachonthi.com",6],["zdravenportal.eu",[6,70]],["thezealots.org",6],["deportealdia.live",6],["fmovies.*",[6,54]],["hulnews.top",6],["otakudesu.*",6],["truyenbanquyen.com",[6,110,111,112]],["globaledu.jp",6],["lataifas.ro",[6,75]],["openfinanza.it",[6,48]],["followmikewynn.com",6],["starbene.it",6],["bimiacg.net",6],["diaforetiko.gr",6],["tchadcarriere.com",6],["info-beihilfe.de",6],["zgywyd.cn",6],["mercenaryenrollment.com",6],["cristelageorgescu.ro",6],["crunchyscan.fr",6],["www-daftarharga.blogspot.com",6],["theghostinmymachine.com",6],["ilovevaldinon.it",6],["aileen-novel.online",[6,66]],["bumigemilang.com",[6,66]],["bingotingo.com",6],["stream.bunkr.is",6],["blueraindrops.com",6],["sekaikomik.live",6],["privivkainfo.ru",6],["bestjavporn.com",6],["mm9841.cc",6],["myoplay.club",6],["bpcj.or.jp",6],["cdramalove.com",6],["outidesigoto.com",6],["gourmetscans.net",[6,102]],["awebstories.com",6],["zgbk.com",6],["clujust.ro",[6,48]],["stockpokeronline.com",6],["stiridinromania.ro",6],["kooora4lives.net",6],["kooora4livs.com",6],["thailandopen.org",[6,110,111,112]],["theaircurrent.com",[6,54,110,111,112]],["freereadnovel.online",[6,110,111,112]],["piklodz.pl",[6,110,111,112]],["secondlifetranslations.com",[6,110,111,112]],["ferroviando.com.br",[6,110,111,112]],["counciloflove.com",[6,110,111,112]],["infokik.com",[6,110,111,112]],["kulinarnastronamocy.pl",[6,110,111,112]],["jafekri.com",[6,110,111,112]],["ezmanga.net",[6,110,111,112]],["reborntrans.com",[6,110,111,112]],["koltry.life",[6,110,111,112]],["kolnovel.com",[6,110,111,112]],["paidiatreio.gr",[6,115]],["workhouses.org.uk",6],["dollarvr.com",[6,48]],["newsme.gr",[6,48]],["daily-tohoku.news",[6,44]],["descopera.ro",6],["velicu.eu",6],["arenavalceana.ro",[6,26]],["firmwarefile.com",6],["asianexpress.co.uk",6],["certificationexamanswers.890m.com",6],["cookhero.gr",6],["creative-chemistry.org.uk",6],["deutschaj.com",6],["divineyogaschool.blogspot.com",6],["fabioambrosi.it",6],["flory4all.com",6],["fv2freegifts.org",6],["geniusjw.com",6],["ideas0419.com",6],["jeyran.net",6],["ktm2day.com",6],["letsdownloads.com",6],["limametti.com",6],["luyenthithukhoa.vn",6],["otakukan.com",6],["ribbelmonster.de",6],["untitle.org",6],["uptimeside.webnode.gr",6],["usmleexperiences.review",6],["yoyofilmeys.*",6],["zoommastory.com",6],["urbanbrush.net",6],["audiotools.in",6],["raindropteamfan.com",6],["manhwahentai.me",6],["ontools.net",6],["scarysymptoms.com",[6,102]],["musicallyvideos.com",6],["geeksoncoffee.com",6],["guidingliterature.com",[6,48]],["mostrodifirenze.com",6],["3xyaoi.com",6],["tinyhouse-baluchon.fr",6],["whoisnovel.com",6],["eca-anime.net",7],["braziljournal.com",8],["nekopoi.web.id",8],["world4.eu",[8,65,66]],["flyertalk.com",9],["searchenginewatch.com",10],["oggiscuola.com",11],["kashmirobserver.net",12],["cathouseonthekings.com",13],["winaero.com",14],["centrumher.eu",15],["japancamerahunter.com",16],["airlinercafe.com",16],["thegraillords.net",17],["worldscientific.com",17],["videohelp.com",17],["upsrtconline.co.in",18],["qualityfilehosting.com",19],["booksmedicos.org",20],["siliconinvestor.com",21],["space-engineers.de",21],["coffeeforums.co.uk",21],["anime2you.de",21],["majorgeeks.com",21],["jobsbotswana.info",22],["npnews24.com",23],["fordogtrainers.pl",[24,25]],["polskacanada.com",26],["fantricks.com",26],["blog.kwick.de",26],["selfstudyhistory.com",[26,48]],["yeuphimmoik.com",26],["repack-games.com",26],["delicateseliterare.ro",26],["wpplugins.tips",26],["verselemzes.hu",[26,123]],["sqlserveregitimleri.com",26],["gezimanya.com",27],["athletic.net",28],["playonlinux.com",30],["bitblokes.de",31],["bold.dk",32],["pureinfotech.com",33],["casertace.net",33],["civildigital.com",33],["lesmoutonsenrages.fr",33],["venusarchives.com",33],["verpornocomic.com",33],["balticlivecam.com",34],["molineuxmix.co.uk",35],["yaledailynews.com",35],["canondrivers.org",[36,37]],["includehelp.com",40],["routenote.com",42],["themosvagas.com.br",[42,79]],["mt07-forum.de",43],["auto-treff.com",43],["telefon-treff.de",43],["dodge-forum.eu",43],["altranotizia.it",44],["hearthstone-decks.net",45],["full-anime.fr",46],["klsescreener.com",46],["nonton78.com",47],["tvzingvn.*",47],["zingtvhd.*",47],["zingvntv.*",47],["sbflix.*",47],["opportunitydesk.org",48],["selfstudyanthro.com",48],["renditepassive.net",48],["androidtvbox.eu",48],["flinsetyadi.com",[48,54]],["the-masters-voice.com",[48,54]],["pandurul.ro",49],["masrawy.com",50],["milfzr.com",51],["phrasemix.com",52],["smokingmeatforums.com",53],["broncoshq.com",53],["famousintel.com",54],["jnews5.com",54],["tvshowstars.com",54],["eurooptyk.com.pl",54],["celebzcircle.com",54],["sertracen.com.pa",54],["pitesti24.ro",54],["samsungtechwin.com",54],["cours-de-droit.net",54],["iptv4best.com",54],["blogvisaodemercado.pt",54],["kapitalis.com",54],["tiempo.hn",54],["winmeen.com",54],["ibps.in",54],["visse.com.br",54],["javsubtitle.co",54],["learninsta.com",54],["licensekeys.org",54],["mediahiburan.my",54],["tipssehatcantik.com",54],["anime-drama.jp",54],["jbjbgame.com",54],["viatasisanatate.com",54],["ziarulargesul.ro",54],["globaldefensecorp.com",54],["gossipnextdoor.com",54],["coffeeapps.ir",54],["media.framu.world",54],["immobiliaremia.com",54],["colegiosconcertados.info",54],["bigdatauni.com",54],["riwyat.com",54],["rukim.id",54],["visefierbinti.ro",54],["cyberkrafttraining.com",54],["ncert-solutions.com",54],["ncertsolutions.guru",54],["clockks.com",54],["ananda-yoga.ro",54],["poolpiscina.com",54],["infodifesa.it",54],["getective.com",54],["flashdumpfiles.com",54],["formatatmak.com",54],["drkrok.com",54],["alphagirlreviews.com",54],["kitchennovel.com",54],["voxvalachorum.ro",54],["day-hoc.org",54],["onlineonderdelenshop.nl",54],["primicia.com.ve",54],["tech-recipes.com",54],["postcourier.com.pg",54],["afrikmag.com",54],["maduras.vip",54],["aprendeinglessila.com",54],["kicknews.today",54],["koalasplayground.com",54],["hellokpop.com",54],["hayatbilgileri.com",54],["moneyexcel.com",54],["placementstore.com",54],["neuroteam-metz.de",54],["codedosa.com",54],["liveyourmaths.com",54],["newspao.gr",54],["ieltsliz.com",54],["programasvirtualespc.net",54],["tempatwisataseru.com",54],["wikiofcelebs.com",54],["jornaljoca.com.br",54],["arcanescans.com",54],["filmzone.com",54],["hiraethtranslation.com",54],["kaystls.site",54],["home.novel-gate.com",54],["plural.jor.br",54],["evreporter.com",54],["sinhasannews.com",54],["viewsofgreece.gr",54],["rozbor-dila.cz",54],["kritichno.bg",54],["csiplearninghub.com",54],["medeberiya.site",54],["abola.pt",55],["unixhow.com",56],["wikihow.com",57],["analizy.pl",59],["zeeebatch.blogspot.com",60],["sokolow-mlp.pl",60],["japan-fans.com",60],["ohmygirl.ml",61],["cissamagazine.com.br",62],["observatoriodocinema.uol.com.br",63],["moneyguru.co",64],["portalcriatividade.com.br",[65,105]],["kitguru.net",68],["sbbrisk.com",69],["sbface.com",69],["streamsb.net",69],["itscybertech.com",69],["lcpdfr.com",72],["whatfontis.com",73],["tritinia.com",74],["sportnews.to",[74,82]],["psihologiadeazi.ro",74],["dubznetwork.com",[74,101]],["lowkeytech.com",76],["ubuntudde.com",76],["techsini.com",77],["allmovie.com",78],["sidereel.com",78],["appofmirror.com",80],["samurai.wordoco.com",80],["developpez.com",81],["voe-unblock.com",83],["phimdinhcao.com",84],["picallow.com",85],["brooklyneagle.com",85],["techgyd.com",85],["karsaz-law.com",85],["links.extralinks.casa",86],["theasianparent.com",86],["ssuathletics.com",87],["titulky.com",88],["dongphimmoiz.com",89],["investorvillage.com",90],["grandoldteam.com",91],["gamingsinners.com",92],["elitepvpers.com",93],["geeksforgeeks.org",94],["acupoffrench.com",95],["novelza.com",95],["top1iq.com",96],["unlimitedfiles.xyz",97],["aztravels.net",98],["downfile.site",98],["memangbau.com",98],["trangchu.news",98],["nsfwzone.xyz",99],["dlmovies.link",99],["revenue.land",100],["eplayer.click",101],["olacast.live",101],["ntuplay.xyz",101],["maxstream.video",103],["esologs.com",104],["fflogs.com",104],["swtorlogs.com",104],["warcraftlogs.com",104],["wildstarlogs.com",104],["smokelearned.net",106],["nhentaihaven.org",107],["slideshare.net",108],["hidemywp.co",109],["memoryhackers.org",113],["steamcollector.com",114],["mgsm.pl",116],["camcaps.to",118],["phimlongtieng.net",[119,120,121,122]],["jk-market.com",124],["vtbe.to",125],["vtube.network",125],["film4e.com",126],["boston.com",127],["cattime.com",127],["dogtime.com",127],["download.mokeedev.com",127],["freep.com",127],["ijr.com",127],["inquirer.net",127],["knowyourmeme.com",127],["nationalreview.com",127],["nofilmschool.com",127],["order-order.com",127],["savvytime.com",127],["techlicious.com",127],["technicpack.net",127],["thedraftnetwork.com",127],["wrestlezone.com",127],["xda-developers.com",127],["legacy.com",128],["firescans.xyz",129],["vidsrc.*",130],["radartest.com",131],["daya-jewelry.com",132],["veev.to",133],["japonhentai.com",134],["cyberalert.gr",135],["torontosom.ca",136],["zeustranslations.blogspot.com",137]]);
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
