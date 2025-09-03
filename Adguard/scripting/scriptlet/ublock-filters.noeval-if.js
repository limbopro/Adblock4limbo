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

// ruleset: ublock-filters

// Important!
// Isolate from global scope

// Start of local scope
(function uBOL_noEvalIf() {

/******************************************************************************/

function noEvalIf(
    needle = ''
) {
    if ( typeof needle !== 'string' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('noeval-if', needle);
    const reNeedle = safe.patternToRegex(needle);
    proxyApplyFn('eval', function(context) {
        const { callArgs } = context;
        const a = String(callArgs[0]);
        if ( needle !== '' && reNeedle.test(a) ) {
            safe.uboLog(logPrefix, 'Prevented:\n', a);
            return;
        }
        if ( needle === '' || safe.logLevel > 1 ) {
            safe.uboLog(logPrefix, 'Not prevented:\n', a);
        }
        return context.reflect();
    });
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
                this.callFn = this.callArgs = this.private = undefined;
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
                this.callFn = this.thisArg = this.callArgs = this.private = undefined;
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

/******************************************************************************/

const scriptletGlobals = {}; // eslint-disable-line
const argsList = [["replace"],["ExoLoader"],["ads"],["/chp_?ad/"],["setInterval"],["tmohentai"],["debugger"],["ppuQnty"],["adsBlocked"],["adb"],["ppu"],["chp_ad"],["adsbygoogle"],["document.getElementById"],["/07c225f3\\.online|content-loader\\.com|css-load\\.com|html-load\\.com/"],["show"],["AdBlock"],["popUnderStage"],["/adbl/i"],["window.open"],["adblock"],["popunder"],["interactionCount"],["deblocker"],["String.fromCharCode"],["blocker"],["UserCustomPop"],["AdBlocker"],["/popunder/i"],["shift"],["/ads|chp_?ad/"],["style.display"],["/adb/i"],["adbl"],["googlesyndication"]];
const hostnamesMap = new Map([["orgyxxxhub.com",0],["shrink.*",0],["junkyponk.com",0],["healthfirstweb.com",0],["vocalley.com",0],["yogablogfit.com",0],["howifx.com",0],["en.financerites.com",0],["mythvista.com",0],["livenewsflix.com",0],["cureclues.com",0],["apekite.com",0],["flash-firmware.blogspot.com",0],["uploady.io",0],["taodung.com",0],["3movs.com",1],["forexlap.com",2],["mlwbd.*",2],["top10cafe.se",2],["dailytech-news.eu",2],["phpscripttr.com",2],["7misr4day.com",2],["descargaspcpro.net",2],["dotadostube.com",2],["taradinhos.com",2],["katmoviefix.*",2],["layardrama21.*",2],["toramemoblog.com",2],["cashbux.work",2],["sdmoviespoint.*",2],["gplastra.com",2],["okleak.com",2],["afly.pro",2],["ithinkilikeyou.net",2],["milanreports.com",2],["towerofgod.me",2],["crotpedia.net",2],["watchfacebook.com",2],["web1s.asia",2],["bokugents.com",2],["newzjunky.com",2],["yourlifeupdated.net",2],["lscomic.com",2],["freeltc.online",2],["pornleaks.in",2],["areascans.net",2],["bonsaiprolink.shop",2],["exactlyhowlong.com",2],["kumapoi.info",2],["blogcreativos.com",2],["flixlatam.com",2],["myhindigk.com",2],["l2crypt.com",2],["zegtrends.com",3],["tea-coffee.net",3],["spatsify.com",3],["newedutopics.com",3],["getviralreach.in",3],["edukaroo.com",3],["funkeypagali.com",3],["careersides.com",3],["nayisahara.com",3],["wikifilmia.com",3],["infinityskull.com",3],["viewmyknowledge.com",3],["iisfvirtual.in",3],["starxinvestor.com",3],["jkssbalerts.com",3],["redfea.com",3],["pranarevitalize.com",3],["techyinfo.in",3],["fitnessholic.net",3],["moderngyan.com",3],["sattakingcharts.in",3],["bgmi32bitapk.in",3],["bankshiksha.in",3],["earn.mpscstudyhub.com",3],["earn.quotesopia.com",3],["money.quotesopia.com",3],["best-mobilegames.com",3],["learn.moderngyan.com",3],["bharatsarkarijobalert.com",3],["quotesopia.com",3],["creditsgoal.com",3],["ikramlar.online",3],["headlinerpost.com",3],["posterify.net",3],["whatgame.xyz",3],["mooonten.com",3],["msic.site",3],["fx-22.com",3],["gold-24.net",3],["forexrw7.com",3],["mtcremix.com",3],["advicefunda.com",3],["bestloanoffer.net",3],["computerpedia.in",3],["techconnection.in",3],["bollywoodchamp.in",3],["texw.online",3],["10-train.com",3],["103.74.5.104",3],["185.193.17.214",3],["247footballnow.com",3],["24pdd.*",3],["27-sidefire-blog.com",3],["2best.club",3],["2the.space",3],["2ix2.com",3],["30kaiteki.com",3],["3dassetcollection.com",3],["3gpterbaru.com",3],["3dyasan.com",3],["3fnews.com",3],["3rabsports.com",3],["4drumkits.com",3],["4fingermusic.com",3],["4gousya.net",3],["4horlover.com",3],["4spaces.org",3],["519.best",3],["51sec.org",3],["80-talet.se",3],["9ketsuki.info",3],["aboedman.com",3],["adisann.com",3],["adminreboot.com",3],["adsurfle.com",3],["adsy.pw",3],["advertafrica.net",3],["adnan-tech.com",3],["africue.com",3],["aghasolution.com",3],["airportwebcams.net",3],["aitoolsfree.org",3],["aitohuman.org",3],["akihabarahitorigurasiseikatu.com",3],["akuebresources.com",3],["alanyapower.com",3],["albania.co.il",3],["alexbacher.fr",3],["algodaodocescan.com.br",3],["allcalidad.app",3],["allcelebritywiki.com",3],["allcivilstandard.com",3],["alliptvlinks.com",3],["alliptvs.com",3],["almofed.com",3],["alphasource.site",3],["altcryp.com",3],["altselection.com",3],["altyazitube22.lat",3],["amaturehomeporn.com",3],["ameede.com",3],["amnaymag.com",3],["amritadrino.com",3],["amtil.com.au",3],["analysis-chess.io.vn",3],["andani.net",3],["androidadult.com",3],["androidfacil.org",3],["angolopsicologia.com",3],["animalwebcams.net",3],["anime4mega.net",3],["anime4mega-descargas.net",3],["anime7.download",3],["anime-torrent.com",3],["animecenterbr.com",3],["animesonlineshd.com",3],["animetwixtor.com",3],["animexin.vip",3],["anmup.com.np",3],["anodee.com",3],["anonyviet.com",3],["anothergraphic.org",3],["aozoraapps.net",3],["apenasmaisumyaoi.com",3],["apkdink.com",3],["apostoliclive.com",3],["appdoze.*",3],["applediagram.com",3],["aprenderquechua.com",3],["arabstd.com",3],["arti-flora.nl",3],["articlebase.pk",3],["articlesmania.me",3],["asiansexdiarys.com",3],["askcerebrum.com",3],["askushowto.com",3],["aspirapolveremigliori.it",3],["assignmentdon.com",3],["astroages.com",3],["astrumscans.xyz",3],["atemporal.cloud",3],["atgstudy.com",3],["atlantisscan.com",3],["atleticalive.it",3],["audiobookexchangeplace.com",3],["audiotools.*",3],["audiotrip.org",3],["autocadcommand.com",3],["autodime.com",3],["autoindustry.ro",3],["automat.systems",3],["automothink.com",3],["autosport.*",3],["avitter.net",3],["awpd24.com",3],["ayatoon.com",3],["ayuka.link",3],["azamericasat.net",3],["azores.co.il",3],["azrom.net",3],["babakfilm.com",3],["backyardpapa.com",3],["baithak.news",3],["balkanteka.net",3],["ballexclusives.com",3],["bandstand.ph",3],["batman.city",3],["bcanepaltu.com",3],["bcanotesnepal.com",3],["bcsnoticias.mx",3],["bdix.app",3],["bdokan.com",3],["bdsomadhan.com",3],["bdstarshop.com",3],["beaddiagrams.com",3],["bearchasingart.com",3],["beatree.cn",3],["beisbolinvernal.com",3],["bellezashot.com",3],["bengalxpress.in",3],["beasttips.com",3],["berlin-teltow.de",3],["beruhmtemedien.com",3],["bestofarea.com",3],["bettingexchange.it",3],["bi-girl.net",3],["bibliotecadecorte.com",3],["bibliotecahermetica.com.br",3],["bidersnotu.com",3],["bif24.pl",3],["biftutech.com",3],["bigdata-social.com",3],["bikyonyu-bijo-zukan.com",3],["bimshares.com",3],["bitcotasks.com",3],["bitlikutu.com",3],["bittukitech.in",3],["bitview.cloud",3],["bitzite.com",3],["blog.motionisland.com",3],["blog24.me",3],["blogk.com",3],["blogue.tech",3],["bloooog.it",3],["bloxyscripts.com",3],["bluebuddies.com",3],["bluecoreinside.com",3],["blurayufr.cam",3],["bogowieslowianscy.pl",3],["bookpraiser.com",3],["booksbybunny.com",3],["boredgiant.com",3],["boundlessnecromancer.com",3],["boxaoffrir.com",3],["boxingvideo.org",3],["boxofficebusiness.in",3],["boyfuck.me",3],["boystube.link",3],["braziliannr.com",3],["brevi.eu",3],["brian70.tw",3],["bright-b.com",3],["brightpets.org",3],["broadbottomvillage.co.uk",3],["brokensilenze.net",3],["brulosophy.com",3],["brushednickel.biz",3],["bshifast.live",3],["bsmaurya.com",3],["bugswave.com",3],["businesstrend.jp",3],["buzzpit.net",3],["byswiizen.fr",3],["cafenau.com",3],["calculascendant.com",3],["calvyn.com",3],["camnang24h.net",3],["canadanouvelles.com",3],["canaltdt.es",3],["canzoni-per-bambini.it",3],["captionpost.com",3],["carryflix.icu",3],["cashkar.in",3],["casperhd.com",3],["catatanonline.com",3],["catmovie.website",3],["cavalierstream.fr",3],["celebritablog.com",3],["celemusic.com",3],["celestialtributesonline.com",3],["certificateland.com",3],["cg-method.com",3],["chachocool.com",3],["chakrirkhabar247.in",3],["championpeoples.com",3],["chanjaeblog.jp",3],["change-ta-vie-coaching.com",3],["charlottepilgrimagetour.com",3],["chart.services",3],["chatgbt.one",3],["chatgptfree.ai",3],["cheatermad.com",3],["check-imei.info",3],["cheese-cake.net",3],["chelsea24news.pl",3],["chevalmag.com",3],["chieflyoffer.com",3],["chihouban.com",3],["chikonori.com",3],["christiantrendy.com",3],["cienagamagdalena.com",3],["cimbusinessevents.com.au",3],["cinema-sketch.com",3],["cinepiroca.com",3],["cizzyscripts.com",3],["claimclicks.com",3],["claydscap.com",3],["clockskin.us",3],["cloud9obits.com",3],["cocorip.net",3],["code-source.net",3],["codeandkey.com",3],["codeastro.com",3],["codeitworld.com",3],["codemystery.com",3],["coderblog.in",3],["codewebit.top",3],["coin-profits.xyz",3],["coinadpro.club",3],["coinbaby8.com",3],["coingraph.us",3],["cola16.app",3],["coleccionmovie.com",3],["colliersnews.com",3],["comeletspray.com",3],["cometogliere.com",3],["comoinstalar.me",3],["compota-soft.work",3],["conoscereilrischioclinico.it",3],["consigliatodanoi.it",3],["constructionmethodology.com",3],["constructionplacement.org",3],["cookni.net",3],["correction-livre-scolaire.fr",3],["cpscan.xyz",3],["crackcodes.in",3],["crackthemes.com",3],["craigretailers.co.uk",3],["crazyashwin.com",3],["crazydeals.live",3],["creebhills.com",3],["cricket12.com",3],["crn.pl",3],["cronachesalerno.it",3],["crunchytech.net",3],["cryptonor.xyz",3],["cryptonworld.space",3],["cryptotech.fun",3],["cryptowidgets.net",3],["crystalcomics.com",3],["cta-fansite.com",3],["cuckoldsex.net",3],["culture-informatique.net",3],["cwc.utah.gov",3],["cykf.net",3],["cyprus.co.il",3],["daij1n.info",3],["dailykpop.net",3],["dailytechupdates.in",3],["dailytips247.com",3],["dailyweb.pl",3],["davewigstone.com",3],["davidsonbuilders.com",3],["day4news.com",3],["daybuy.tw",3],["deathonnews.com",3],["dejongeturken.com",3],["delvein.tech",3],["demonyslowianskie.pl",3],["demooh.com",3],["depressionhurts.us",3],["derusblog.com",3],["descargaranimes.com",3],["descargaseriestv.com",3],["design4months.com",3],["desirenovel.com",3],["desktopsolution.org",3],["destakenewsgospel.com",3],["destinationsjourney.com",3],["detikbangka.com",3],["deutschpersischtv.com",3],["dev-dark-blog.pantheonsite.io",3],["devopslanka.com",3],["dewfuneralhomenews.com",3],["dhankasamaj.com",3],["diamondfansub.com",3],["diarioeducacion.com",3],["diencobacninh.com",3],["digitalseoninja.com",3],["dignityobituary.com",3],["dinheirocursosdownload.com",3],["diplomaexamcorner.com",3],["dipprofit.com",3],["dir-tech.com",3],["diskizone.com",3],["diversanews.com",3],["diyprojectslab.com",3],["djqunjab.in",3],["djsofchhattisgarh.in",3],["djstar.in",3],["dma-upd.org",3],["dobleaccion.xyz",3],["dobletecno.com",3],["domainregistrationtips.info",3],["dominican-republic.co.il",3],["donghuaworld.com",3],["donlego.com",3],["doublemindtech.com",3],["doumura.com",3],["downloadbatch.me",3],["downloader.is",3],["downloads.sayrodigital.net",3],["downloads.wegomovies.com",3],["downloadtanku.org",3],["dpscomputing.com",3],["dragonball-zxk.com",3],["drake-scans.com",3],["drakecomic.com",3],["dramafren.com",3],["dramaviki.com",3],["drublood.com",3],["drzna.com",3],["dubaitime.net",3],["dumovies.com",3],["dvd-flix.com",3],["dvdgayonline.com",3],["e-kakoh.com",3],["earlymemorials.com",3],["earninginwork.com",3],["easyjapanesee.com",3],["easytodoit.com",3],["ecommercewebsite.store",3],["eczpastpapers.net",3],["editions-actu.org",3],["editorsadda.com",3],["edivaldobrito.com.br",3],["edjerba.com",3],["edukamer.info",3],["egram.com.ng",3],["einewelteinezukunft.de",3],["elcriticodelatele.com",3],["elcultura.pl",3],["elearning-cpge.com",3],["eleceedmanhwa.me",3],["electricalstudent.com",3],["embraceinnerchaos.com",3],["emperorscan.com",3],["empleo.com.uy",3],["encuentratutarea.com",3],["encurtareidog.top",3],["eng-news.com",3],["english-dubbed.com",3],["english-topics.com",3],["english101.co.za",3],["enryumanga.com",3],["ensenchat.com",3],["entenpost.com",3],["epsilonakdemy.com",3],["eramuslim.com",3],["erotikclub35.pw",3],["erreguete.gal",3],["ervik.as",3],["esportsmonk.com",3],["esportsnext.com",3],["et-invest.de",3],["ethiopia.co.il",3],["evdeingilizcem.com",3],["eventiavversinews.*",3],["everydayhomeandgarden.com",3],["evlenmekisteyenbayanlar.net",3],["ewybory.eu",3],["exam-results.in",3],["exeking.top",3],["eymockup.com",3],["ezmanga.net",3],["faaduindia.com",3],["fantasiku.com",3],["faqwiki.us",3],["fattelodasolo.it",3],["fchopin.net",3],["felicetommasino.com",3],["ferdroid.net",3],["fessesdenfer.com",3],["feyorra.top",3],["ffcv.es",3],["fhedits.in",3],["fhmemorial.com",3],["fibwatch.store",3],["filmypoints.in",3],["finalnews24.com",3],["financeandinsurance.xyz",3],["financeyogi.net",3],["financid.com",3],["finclub.in",3],["findheman.com",3],["findnewjobz.com",3],["fine-wings.com",3],["firescans.xyz",3],["fitnesshealtharticles.com",3],["fitnessscenz.com",3],["fleamerica.com",3],["flexamens.com",3],["flixhub.*",3],["flordeloto.site",3],["flowsnet.com",3],["folkmord.se",3],["foodgustoso.it",3],["foodiesjoy.com",3],["footeuses.com",3],["footyload.com",3],["footymercato.com",3],["forex-yours.com",3],["forexcracked.com",3],["former-railroad-worker.com",3],["foxaholic.com",3],["francaisfacile.net",3],["free.7hd.club",3],["freebiesmockup.com",3],["freecoursesonline.me",3],["freedom3d.art",3],["freefiremaxofficial.com",3],["freefireupdate.com",3],["freegetcoins.com",3],["freelancerartistry.com",3],["freemedicalbooks.org",3],["freemockups.org",3],["freemovies-download.com",3],["freeoseocheck.com",3],["freepasses.org",3],["freescorespiano.com",3],["freetarotonline.com",3],["freetubetv.net",3],["freevstplugins.*",3],["freewoodworking.ca",3],["freshersgold.com",3],["friedrichshainblog.de",3],["frpgods.com",3],["ftuapps.*",3],["fumettologica.it",3],["funeral-memorial.com",3],["funeralmemorialnews.com",3],["funztv.com",3],["futbolenlatelevision.com",3],["gadgetspidy.com",3],["gadgetxplore.com",3],["gahag.net",3],["galaxytranslations10.com",3],["galinhasamurai.com",3],["game5s.com",3],["gameblog.jp",3],["gamefi-mag.com",3],["gamenv.net",3],["gamers-haven.org",3],["gamerxyt.com",3],["games-manuals.com",3],["gamevcore.com",3],["gaminglariat.com",3],["gamingsearchjournal.com",3],["gatagata.net",3],["gaypornhdfree.com",3],["gazetazachodnia.eu",3],["gdrivemovies.xyz",3],["geekering.com",3],["gemiadamlari.org",3],["gentiluomodigitale.it",3],["gesund-vital.online",3],["getintopcm.com",3],["getworkation.com",3],["ghostsfreaks.com",3],["girlydrop.com",3],["gisvacancy.com",3],["giuseppegravante.com",3],["gkbooks.in",3],["gkgsca.com",3],["gksansar.com",3],["glo-n.online",3],["globelempire.com",3],["gm-db.com",3],["gnusocial.jp",3],["goegoe.net",3],["gogetadoslinks.*",3],["gogetapast.com.br",3],["gogifox.com",3],["gogueducation.com",3],["gokerja.net",3],["gokushiteki.com",3],["golf.rapidmice.com",3],["gomov.bio",3],["goodriviu.com",3],["googlearth.selva.name",3],["gorating.in",3],["gotocam.net",3],["grafikos.cz",3],["grasta.net",3],["grazymag.com",3],["greasygaming.com",3],["greattopten.com",3],["grootnovels.com",3],["gsdn.live",3],["gsmfreezone.com",3],["gsmmessages.com",3],["gtavi.pl",3],["gurbetseli.net",3],["gvnvh.net",3],["gwiazdatalkie.com",3],["habuteru.com",3],["hadakanonude.com",3],["hairjob.wpx.jp",3],["happy-otalife.com",3],["haqem.com",3],["harbigol.com",3],["harley.top",3],["haryanaalert.*",3],["haveyaseenjapan.com",3],["haxnode.net",3],["hdhub4one.pics",3],["hbnews24.com",3],["healthbeautybee.com",3],["healthcheckup.com",3],["healthfatal.com",3],["heartofvicksburg.com",3],["heartrainbowblog.com",3],["hechos.net",3],["hellenism.net",3],["hentai-mega-mix.com",3],["heutewelt.com",3],["hhesse.de",3],["highdefdiscnews.com",3],["hilaw.vn",3],["hindi.trade",3],["hindimatrashabd.com",3],["hindinest.com",3],["hindishri.com",3],["hiphopa.net",3],["hipsteralcolico.altervista.org",3],["historichorizons.com",3],["hivetoon.com",3],["hobbykafe.com",3],["hockeyfantasytools.com",3],["hoegel-textildruck.de",3],["hojii.net",3],["hoofoot.net",3],["hookupnovel.com",3],["hopsion-consulting.com",3],["hostingreviews24.com",3],["hotspringsofbc.ca",3],["howtoblogformoney.net",3],["howtocivil.com",3],["hub2tv.com",3],["hungarianhardstyle.hu",3],["hyderone.com",3],["hyogo.ie-t.net",3],["hypelifemagazine.com",3],["hypesol.com",3],["idesign.wiki",3],["idevfast.com",3],["idevice.me",3],["idpvn.com",3],["iggtech.com",3],["ignoustudhelp.in",3],["ikarianews.gr",3],["ilbassoadige.it",3],["ilbolerodiravel.org",3],["imperiofilmes.co",3],["indiasmagazine.com",3],["individualogist.com",3],["indratranslations.com",3],["inertz.org",3],["infamous-scans.com",3],["infocycles.com",3],["infodani.net",3],["infojabarloker.com",3],["infokita17.com",3],["informatudo.com.br",3],["infrafandub.com",3],["infulo.com",3],["inlovingmemoriesnews.com",3],["inprogrammer.com",3],["inra.bg",3],["insideeducation.co.za",3],["insidememorial.com",3],["insider-gaming.com",3],["insurancepost.xyz",3],["intelligence-console.com",3],["interculturalita.it",3],["inventionsdaily.com",3],["iptvxtreamcodes.com",3],["isabihowto.com.ng",3],["italiadascoprire.net",3],["itdmusic.*",3],["itmaniatv.com",3],["itopmusic.com",3],["itopmusics.com",3],["itopmusicx.com",3],["itz-fast.com",3],["iumkit.net",3],["iwb.jp",3],["jaktsidan.se",3],["japannihon.com",3],["javboys.*",3],["javcock.com",3],["javgay.com",3],["jcutrer.com",3],["jk-market.com",3],["jobsbd.xyz",3],["jobsibe.com",3],["jobslampung.net",3],["josemo.com",3],["jra.jpn.org",3],["jrlinks.in",3],["jungyun.net",3],["juninhoscripts.com.br",3],["juventusfc.hu",3],["kacengeng.com",3],["kakiagune.com",3],["kali.wiki",3],["kana-mari-shokudo.com",3],["kanaeblog.net",3],["kandisvarlden.com",3],["karaoke4download.com",3],["kattannonser.se",3],["kawaguchimaeda.com",3],["kaystls.site",3],["kenkou-maintenance.com",3],["kenta2222.com",3],["keroseed.*",3],["kgs-invest.com",3],["kh-pokemon-mc.com",3],["khabarbyte.com",3],["khabardinbhar.net",3],["khohieu.com",3],["kickcharm.com",3],["kinisuru.com",3],["kireicosplay.com",3],["kits4beats.com",3],["kllproject.lv",3],["know-how-tree.com",3],["knowstuff.in",3],["kobitacocktail.com",3],["kodaika.com",3],["kodewebsite.com",3],["kodibeginner.com",3],["kokosovoulje.com",3],["kolcars.shop",3],["kolnovel.site",3],["koltry.life",3],["kompiko.pl",3],["koreanbeauty.club",3],["korogashi-san.org",3],["korsrt.eu.org",3],["kotanopan.com",3],["koume-in-huistenbosch.net",3],["krx18.com",3],["kukni.to",3],["kupiiline.com",3],["kurakura21.com",3],["kurosuen.live",3],["labstory.in",3],["lacrima.jp",3],["ladkibahin.com",3],["ladypopularblog.com",3],["lamorgues.com",3],["lampungkerja.com",3],["lapaginadealberto.com",3],["lascelebrite.com",3],["latinatemptation.com",3],["latinlucha.es",3],["law101.org.za",3],["lawweekcolorado.com",3],["lawyercontact.us",3],["learnedclub.com",3],["learnmany.in",3],["learnchannel-tv.com",3],["learnodo-newtonic.com",3],["learnospot.com",3],["lebois-racing.com",3],["lectormh.com",3],["lectorhub.j5z.xyz",3],["leechyscripts.net",3],["legendaryrttextures.com",3],["lendrive.web.id",3],["lespartisanes.com",3],["letrasgratis.com.ar",3],["levismodding.co.uk",3],["lgcnews.com",3],["lglbmm.com",3],["lheritierblog.com",3],["librasol.com.br",3],["ligaset.com",3],["limontorrents.com",3],["linkskibe.com",3],["linkvoom.com",3],["linkz.*",3],["linux-talks.com",3],["linuxexplain.com",3],["lionsfan.net",3],["literarysomnia.com",3],["littlepandatranslations.com",3],["livefootballempire.com",3],["lmtos.com",3],["loanpapa.in",3],["locurainformaticadigital.com",3],["logofootball.net",3],["lookism.me",3],["lotus-tours.com.hk",3],["lovingsiren.com",3],["ltpcalculator.in",3],["luchaonline.com",3],["luciferdonghua.in",3],["lucrebem.com.br",3],["lustesthd.cloud",3],["lustesthd.lat",3],["lycee-maroc.com",3],["m4u.*",3],["macrocreator.com",3],["magesypro.*",3],["malluporno.com",3],["mamtamusic.in",3],["mangcapquangvnpt.com",3],["manhastro.com",3],["manhastro.net",3],["mantrazscan.com",3],["maps4study.com.br",3],["marimo-info.net",3],["marketedgeofficial.com",3],["marketing-business-revenus-internet.fr",3],["marketrevolution.eu",3],["masashi-blog418.com",3],["mastakongo.info",3],["masterpctutoriales.com",3],["maths101.co.za",3],["matomeiru.com",3],["matshortener.xyz",3],["mcrypto.*",3],["mdn.lol",3],["medeberiya.site",3],["medeberiya1.com",3],["mediascelebres.com",3],["medytour.com",3],["meilblog.com",3],["memorialnotice.com",3],["mentalhealthcoaching.org",3],["meteoregioneabruzzo.it",3],["mewingzone.com",3],["mhscans.com",3],["michiganrugcleaning.cleaning",3],["midis.com.ar",3],["midlandstraveller.com",3],["minddesignclub.org",3],["minecraftwild.com",3],["minhasdelicias.com",3],["mitaku.net",3],["mitsmits.com",3],["mixmods.com.br",3],["mmfenix.com",3],["mmoovvfr.cloudfree.jp",3],["mmorpgplay.com.br",3],["mockupcity.com",3],["mockupgratis.com",3],["modele-facture.com",3],["modyster.com",3],["monaco.co.il",3],["morinaga-office.net",3],["mosttechs.com",3],["moto-station.com",3],["motofan-r.com",3],["movieping.com",3],["movies4u.*",3],["moviesnipipay.me",3],["mrfreemium.blogspot.com",3],["mscdroidlabs.es",3],["msonglyrics.com",3],["mtech4you.com",3],["multimovies.tech",3],["mummumtime.com",3],["mundovideoshd.com",3],["murtonroofing.com",3],["musicforchoir.com",3],["musictip.net",3],["mxcity.mx",3],["mxpacgroup.com",3],["my-ford-focus.de",3],["myglamwish.com",3],["myicloud.info",3],["mylinkat.com",3],["mylivewallpapers.com",3],["mypace.sasapurin.com",3],["myqqjd.com",3],["mytectutor.com",3],["myunity.dev",3],["myviptuto.com",3],["negative.tboys.ro",3],["nepaljobvacancy.com",3],["neservicee.com",3],["netsentertainment.net",3],["neuna.net",3],["newbookmarkingsite.com",3],["newfreelancespot.com",3],["newlifefuneralhomes.com",3],["news-geinou100.com",3],["newscard24.com",3],["newstechone.com",3],["nghetruyenma.net",3],["ngomek.com",3],["nhvnovels.com",3],["nichetechy.com",3],["nin10news.com",3],["nicetube.one",3],["nishankhatri.*",3],["niteshyadav.in",3],["nknews.jp",3],["nkreport.jp",3],["noanyi.com",3],["nobodycancool.com",3],["noblessetranslations.com",3],["nocfsb.com",3],["nocsummer.com.br",3],["nodenspace.com",3],["noikiiki.info",3],["notandor.cn",3],["note1s.com",3],["notesformsc.org",3],["noteshacker.com",3],["novel-gate.com",3],["novelbob.com",3],["novelread.co",3],["nsfwr34.com",3],["nswdownload.com",3],["nswrom.com",3],["ntucgm.com",3],["nudeslegion.com",3],["nukedpacks.site",3],["nulledmug.com",3],["nvimfreak.com",3],["nyangames.altervista.org",3],["nylonstockingsex.net",3],["oatuu.org",3],["oberschwaben-tipps.de",3],["obituaryupdates.com",3],["odekake-spots.com",3],["officialpanda.com",3],["ofppt.net",3],["ofwork.net",3],["okblaz.me",3],["olamovies.store",3],["onehack.us",3],["onestringlab.com",3],["onlinetechsamadhan.com",3],["onlinetntextbooks.com",3],["onneddy.com",3],["onyxfeed.com",3],["openstartup.tm",3],["opiniones-empresas.com",3],["oracleerpappsguide.com",3],["orenoraresne.com",3],["oromedicine.com",3],["orunk.com",3],["osteusfilmestuga.online",3],["otakuliah.com",3],["oteknologi.com",3],["otokukensaku.jp",3],["ottrelease247.com",3],["ovnihoje.com",3],["palofw-lab.com",3],["paminy.com",3],["pandaatlanta.com",3],["pandanote.info",3],["pantube.top",3],["paolo9785.com",3],["papafoot.click",3],["papahd.club",3],["paris-tabi.com",3],["parisporn.org",3],["parking-map.info",3],["pasatiemposparaimprimir.com",3],["pasokau.com",3],["passionatecarbloggers.com",3],["passportaction.com",3],["pc-guru.it",3],["pc-hobby.com",3],["pc-spiele-wiese.de",3],["pcgamedownload.net",3],["pcgameszone.com",3],["pdfstandards.net",3],["pepar.net",3],["personefamose.it",3],["petitestef.com",3],["pflege-info.net",3],["phoenix-manga.com",3],["phonefirmware.com",3],["physics101.co.za",3],["picgiraffe.com",3],["pilsner.nu",3],["piratemods.com",3],["pitiurl.com",3],["piximfix.com",3],["plantatreenow.com",3],["plaza.chu.jp",3],["plc4free.com",3],["pliroforiki-edu.gr",3],["poapan.xyz",3],["poco.rcccn.in",3],["pogga.org",3],["pokeca-chart.com",3],["pondit.xyz",3],["ponsel4g.com",3],["poplinks.*",3],["porlalibreportal.com",3],["pornincest.net",3],["pornoenspanish.es",3],["pornfeel.com",3],["porninblack.com",3],["portaldoaz.org",3],["portaldosreceptores.org",3],["portalyaoi.com",3],["postazap.com",3],["posturecorrectorshop-online.com",3],["practicalkida.com",3],["prague-blog.co.il",3],["praveeneditz.com",3],["premierftp.com",3],["prensa.click",3],["prensaesports.com",3],["pressemedie.dk",3],["pressurewasherpumpdiagram.com",3],["pricemint.in",3],["primemovies.pl",3],["prismmarketingco.com",3],["proapkdown.com",3],["projuktirkotha.com",3],["promiblogs.de",3],["promimedien.com",3],["promisingapps.com",3],["protestia.com",3],["psicotestuned.info",3],["psychology-spot.com",3],["publicdomainq.net",3],["publicdomainr.net",3],["publicidadtulua.com",3],["pupuweb.com",3],["putlog.net",3],["pynck.com",3],["r1.richtoon.top",3],["rabo.no",3],["ragnarokscanlation.*",3],["rahim-soft.com",3],["rail-log.net",3],["railwebcams.net",3],["ranjeet.best",3],["ranourano.xyz",3],["raulmalea.ro",3],["rbs.ta36.com",3],["rbscripts.net",3],["rctechsworld.in",3],["readallcomics.com",3],["readfast.in",3],["readhunters.xyz",3],["realfreelancer.com",3],["realtormontreal.ca",3],["receptyonline.cz",3],["recipenp.com",3],["redbubbletools.com",3],["redfaucet.site",3],["reeell.com",3],["renierassociatigroup.com",3],["reportbangla.com",3],["reprezentacija.rs",3],["retire49.com",3],["retrotv.org",3],["reviewmedium.com",3],["revistaapolice.com.br",3],["rgmovies.*",3],["ribbelmonster.de",3],["rightdark-scan.com",3],["rinconpsicologia.com",3],["ritacandida.com",3],["riwayat-word.com",3],["rlshort.com",3],["rocdacier.com",3],["rollingglobe.online",3],["romaierioggi.it",3],["romaniasoft.ro",3],["roms4ever.com",3],["romviet.com",3],["roshy.tv",3],["roznamasiasat.com",3],["rubyskitchenrecipes.uk",3],["ruyamanga.com",3],["rv-ecommerce.com",3],["ryanmoore.marketing",3],["ryansharich.com",3],["s920221683.online.de",3],["sabishiidesu.com",3],["saekita.com",3],["samanarthishabd.in",3],["samovies.net",3],["samrudhiglobal.com",3],["samurai.rzword.xyz",3],["samurai.wordoco.com",3],["sanmiguellive.com",3],["santhoshrcf.com",3],["sararun.net",3],["sarkariresult.social",3],["satcesc.com",3],["savegame.pro",3],["sawwiz.com",3],["scansatlanticos.com",3],["schadeck.eu",3],["sezia.com",3],["schildempire.com",3],["scholarshiplist.org",3],["sciencebe21.in",3],["scontianastro.com",3],["scrap-blog.com",3],["scripcheck.great-site.net",3],["scriptsomg.com",3],["searchmovie.wp.xdomain.jp",3],["searchnsucceed.in",3],["seasons-dlove.net",3],["seirsanduk.com",3],["seogroup.bookmarking.info",3],["seoworld.in",3],["seriu.jp",3],["setsuyakutoushi.com",3],["serieshdpormega.com",3],["server-tutorials.net",3],["serverbd247.com",3],["shadagetech.com",3],["shanurdu.com",3],["sharphindi.in",3],["sheikhmovies.*",3],["shipseducation.com",3],["shimauma-log.com",3],["shittokuadult.net",3],["shlly.com",3],["shogaisha-shuro.com",3],["shogaisha-techo.com",3],["shopkensaku.com",3],["shorttrick.in",3],["showflix.*",3],["showrovblog.com",3],["shrinklinker.com",3],["shrinkus.tk",3],["shrivardhantech.in",3],["sieradmu.com",3],["siimanga.cyou",3],["siirtolayhaber.com",3],["sim-kichi.monster",3],["sivackidrum.net",3],["sk8therapy.fr",3],["skardu.pk",3],["skidrowreloaded.com",3],["slawoslaw.pl",3],["slowianietworza.pl",3],["smallseotools.ai",3],["smartinhome.pl",3],["snowman-information.com",3],["socebd.com",3],["sociallyindian.com",3],["softcobra.com",3],["softrop.com",3],["sohohindi.com",3],["sosuroda.pl",3],["sourds.net",3],["south-park-tv.biz",3],["soziologie-politik.de",3],["sp500-up.com",3],["space-faucet.com",3],["spacestation-online.com",3],["spardhanews.com",3],["speculationis.com",3],["spinoff.link",3],["spiritparting.com",3],["sport-97.com",3],["sportsblend.net",3],["ssdownloader.online",3],["stablediffusionxl.com",3],["stadelahly.net",3],["stahnivideo.cz",3],["starsgtech.in",3],["start-to-run.be",3],["startupjobsportal.com",3],["stbemuiptvn.com",3],["ster-blog.xyz",3],["stimotion.pl",3],["stireazilei.eu",3],["stock-rom.com",3],["streamseeds24.com",3],["strefa.biz",3],["studybullet.com",3],["sufanblog.com",3],["sukuyou.com",3],["sullacollina.it",3],["sumirekeiba.com",3],["sundberg.ws",3],["suneelkevat.com",3],["super-ethanol.com",3],["superpackpormega.com",3],["surgicaltechie.com",3],["suvvehicle.com",3],["swietaslowianskie.pl",3],["sylverkat.com",3],["symboleslowianskie.pl",3],["sysguides.com",3],["swordalada.org",3],["system32.ink",3],["ta3arof.net",3],["tabonitobrasil.tv",3],["taisha-diet.com",3],["talentstareducation.com",3],["tamil-lyrics.com",3],["tamilanzone.com",3],["tamilhit.tech",3],["tamilnaadi.com",3],["tamilultra.team",3],["tamilultratv.co.in",3],["tatsublog.com",3],["teachersupdates.net",3],["team-octavi.com",3],["team-rcv.xyz",3],["teamkong.tk",3],["teamupinternational.com",3],["techacrobat.com",3],["techastuces.com",3],["techdriod.com",3],["techedubyte.com",[3,23]],["techforu.in",3],["techiepirates.com",3],["techiestalk.in",3],["techkeshri.com",3],["techlog.ta-yan.ai",3],["technewslive.org",3],["technewsrooms.com",3],["technicalviral.com",3],["technorj.com",3],["technorozen.com",3],["techoreview.com",3],["techprakash.com",3],["techsbucket.com",3],["techstwo.com",3],["techyhigher.com",3],["techyrick.com",3],["tecnomd.com",3],["tecnoscann.com",3],["tedenglish.site",3],["tehnotone.com",3],["telephone-soudan.com",3],["teluguhitsandflops.com",3],["temporeale.info",3],["tenbaiquest.com",3],["tespedia.com",3],["testious.com",3],["thangdangblog.com",3],["thaript.com",3],["the-mystery.org",3],["theberserkmanga.com",3],["thebigblogs.com",3],["thedilyblog.com",3],["thegnomishgazette.com",3],["theconomy.me",3],["thegamearcade.com",3],["theinternettaughtme.com",3],["thejoblives.com",3],["thelastgamestandingexp.com",3],["theliveupdate.com",3],["thenewsglobe.net",3],["theprofoundreport.com",3],["thermoprzepisy.pl",3],["thesarkariresult.net",3],["thesextube.net",3],["thesleak.com",3],["thesportsupa.com",3],["thewambugu.com",3],["theworldobits.com",3],["thiagorossi.com.br",3],["thosa.info",3],["throwsmallstone.com",3],["tiny-sparklies.com",3],["titfuckvideos.com",3],["tirumalatirupatiyatra.in",3],["tnstudycorner.in",3],["today-obits.com",3],["todays-obits.com",3],["toeflgratis.com",3],["tokoasrimotedanpayet.my.id",3],["toorco.com",3],["topbiography.co.in",3],["topfaucet.us",3],["topsworldnews.com",3],["toptenknowledge.com",3],["torrentdofilmeshd.net",3],["torrentgame.org",3],["totally.top",3],["towerofgod.top",3],["tr3fit.xyz",3],["transgirlslive.com",3],["trendflatt.com",3],["trendohunts.com",3],["trgtkls.org",3],["trilog3.net",3],["trovapromozioni.it",3],["trucosonline.com",3],["tsubasatr.org",3],["tukangsapu.net",3],["tuktukcinma.com",3],["tunabagel.net",3],["turkeymenus.com",3],["turkishseriestv.net",3],["tutorialesdecalidad.com",3],["tutorialsduniya.com",3],["tuxnews.it",3],["twobluescans.com",3],["tw.xn--h9jepie9n6a5394exeq51z.com",3],["uciteljica.net",3],["udemyking.com",3],["uiuxsource.com",3],["ukigmoch.com",3],["ultimate-catch.eu",3],["underground.tboys.ro",3],["unityassets4free.com",3],["uozzart.com",3],["uploadbank.com",3],["uprwssp.org",3],["uqozy.com",3],["usahealthandlifestyle.com",3],["userupload.*",3],["ustimz.com",3],["ustvgo.live",3],["utaitebu.com",3],["utilidades.ecuadjsradiocorp.com",3],["uur-tech.net",3],["vegamoviese.*",3],["vegas411.com",3],["venus-and-mars.com",3],["veryfuntime.com",3],["vibezhub.com.ng",3],["viciante.com.br",3],["videodidixx.com",3],["videosgays.net",3],["villettt.kitchen",3],["violablu.net",3],["virabux.com",3],["viralxns.com",3],["virtual-youtuber.jp",3],["visorsmr.com",3],["visortecno.com",3],["vitadacelebrita.com",3],["vivrebordeaux.fr",3],["vmorecloud.com",3],["vnuki.net",3],["voiceloves.com",3],["voidtruth.com",3],["voiranime1.fr",3],["vstplugin.net",3],["webacademix.com",3],["webcamfuengirola.com",3],["webcras.com",3],["webhostingoffer.org",3],["websiteglowgh.com",3],["weebee.me",3],["welcometojapan.jp",3],["whats-new.cyou",3],["wheelofgold.com",3],["wholenotism.com",3],["wikijankari.com",3],["wikisharing.com",3],["wikipooster.com",3],["wikitechy.com",3],["windbreaker.me",3],["windowsaplicaciones.com",3],["wirtualnelegionowo.pl",3],["wirtualnynowydwor.pl",3],["workxvacation.jp",3],["worldgyan18.com",3],["worldtop2.com",3],["worldwidestandard.net",3],["worthitorwoke.com",3],["wp.solar",3],["wpteq.org",3],["writeprofit.org",3],["wvt24.top",3],["www2.tmyinsight.net",3],["xn--algododoce-j5a.com",3],["xn--kckzb2722b.com",3],["xn--n8jwbyc5ezgnfpeyd3i0a3ow693bw65a.com",3],["xn--nbkw38mlu2a.com",3],["xprime4u.*",3],["xpressarticles.com",3],["xvipp.com",3],["yakisurume.com",3],["yakyufan-asobiba.com",3],["yamsoti.com",3],["yazilidayim.net",3],["ycongnghe.com",3],["yestech.xyz",3],["ynk-blog.com",3],["yoshare.net",3],["youlife24.com",3],["youmedemblik.nl",3],["youpit.xyz",3],["your-local-pest-control.com",3],["yourdesignmagazine.com",3],["yuatools.com",3],["yuki0918kw.com",3],["yumekomik.com",3],["yumeost.net",3],["yunakhaber.com",3],["yuramanga.my.id",3],["yurudori.com",3],["zdrz.xyz",3],["zecchino-doro.it",3],["zeijakunahiko.com",3],["zien.pl",3],["ziminvestors.com",3],["ziontutorial.com",3],["zippyshare.cloud",3],["zippysharecue.com",3],["znanemediablog.com",3],["zyromod.com",3],["kiemlua.com",3],["link1s.com",3],["bloggingguidance.com",3],["mathcrave.com",3],["intro-hd.net",3],["richtoscan.com",3],["tainguyenmienphi.com",3],["questloops.com",3],["wvt.free.nf",3],["mdbekjwqa.pw",4],["tmohentai.com",5],["aeonax.com",6],["hentaihaven.xxx",6],["jobzhub.store",7],["fitdynamos.com",7],["labgame.io",7],["tinys.click",8],["getintoway.com",8],["jpopsingles.eu",8],["techacode.com",9],["sideplusleaks.com",9],["gamezizo.com",10],["oii.io",10],["azmath.info",11],["azsoft.*",11],["downfile.site",11],["downphanmem.com",11],["expertvn.com",11],["memangbau.com",11],["trangchu.news",11],["aztravels.net",11],["litonmods.com",12],["helicomicro.com",12],["klyker.com",12],["kontenterabox.com",12],["naruldonghua.com",12],["pienovels.com",12],["enryucomics.com",12],["manhuaga.com",12],["ralli.ee",13],["vipotv.com",13],["a-ha.io",14],["cboard.net",14],["joongdo.co.kr",14],["viva100.com",14],["gamingdeputy.com",14],["alle-tests.nl",14],["meconomynews.com",14],["brandbrief.co.kr",14],["motorgraph.com",14],["topstarnews.net",14],["maccanismi.it",15],["gamesrepacks.com",15],["techhelpbd.com",15],["pokemundo.com",15],["lewebde.com",15],["pasteit.*",16],["tabele-kalorii.pl",16],["hentaistream.com",17],["nudeselfiespics.com",17],["hentaivideos.net",17],["hyundaitucson.info",18],["xcloud.*",19],["xdld.pages.dev",19],["xdld.lat",19],["gsmware.com",20],["arldeemix.com",20],["filemooon.top",[21,28]],["autosport.com",22],["motorsport.com",22],["ipamod.com",23],["apkdrill.com",23],["cdn.gledaitv.live",24],["claimlite.club",25],["kurakura21.space",26],["blackhatworld.com",27],["3ixcf45.cfd",28],["76078rb.sbs",28],["embedme.*",28],["finfang.*",28],["fmembed.cc",28],["fmoonembed.pro",28],["hellnaw.*",28],["moonembed.*",28],["rgeyyddl.skin",28],["z12z0vla.*",28],["kickassanime.ch",29],["cgcosplay.org",30],["bilinovel.com",31],["sampledrive.org",31],["linovelib.com",32],["freevpn.us",33],["nobledicion.yoveo.xyz",34]]);
const exceptionsMap = new Map([["xcloud.eu",[19]],["xcloud.host",[19]]]);
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
    try { noEvalIf(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
