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
(function uBOL_setLocalStorageItem() {

/******************************************************************************/

function setLocalStorageItem(key = '', value = '') {
    setLocalStorageItemFn('local', false, key, value);
}

function setLocalStorageItemFn(
    which = 'local',
    trusted = false,
    key = '',
    value = '',
) {
    if ( key === '' ) { return; }

    // For increased compatibility with AdGuard
    if ( value === 'emptyArr' ) {
        value = '[]';
    } else if ( value === 'emptyObj' ) {
        value = '{}';
    }

    const trustedValues = [
        '',
        'undefined', 'null',
        '{}', '[]', '""',
        '$remove$',
        ...getSafeCookieValuesFn(),
    ];

    if ( trusted ) {
        if ( value.includes('$now$') ) {
            value = value.replaceAll('$now$', Date.now());
        }
        if ( value.includes('$currentDate$') ) {
            value = value.replaceAll('$currentDate$', `${Date()}`);
        }
        if ( value.includes('$currentISODate$') ) {
            value = value.replaceAll('$currentISODate$', (new Date()).toISOString());
        }
    } else {
        const normalized = value.toLowerCase();
        const match = /^("?)(.+)\1$/.exec(normalized);
        const unquoted = match && match[2] || normalized;
        if ( trustedValues.includes(unquoted) === false ) {
            if ( /^-?\d+$/.test(unquoted) === false ) { return; }
            const n = parseInt(unquoted, 10) || 0;
            if ( n < -32767 || n > 32767 ) { return; }
        }
    }

    try {
        const storage = self[`${which}Storage`];
        if ( value === '$remove$' ) {
            const safe = safeSelf();
            const pattern = safe.patternToRegex(key, undefined, true );
            const toRemove = [];
            for ( let i = 0, n = storage.length; i < n; i++ ) {
                const key = storage.key(i);
                if ( pattern.test(key) ) { toRemove.push(key); }
            }
            for ( const key of toRemove ) {
                storage.removeItem(key);
            }
        } else {
            storage.setItem(key, `${value}`);
        }
    } catch {
    }
}

function getSafeCookieValuesFn() {
    return [
        'accept', 'reject',
        'accepted', 'rejected', 'notaccepted',
        'allow', 'disallow', 'deny',
        'allowed', 'denied',
        'approved', 'disapproved',
        'checked', 'unchecked',
        'dismiss', 'dismissed',
        'enable', 'disable',
        'enabled', 'disabled',
        'essential', 'nonessential',
        'forbidden', 'forever',
        'hide', 'hidden',
        'necessary', 'required',
        'ok',
        'on', 'off',
        'true', 't', 'false', 'f',
        'yes', 'y', 'no', 'n',
        'all', 'none', 'functional',
        'granted', 'done',
        'decline', 'declined',
        'closed', 'next', 'mandatory',
        'disagree', 'agree',
    ];
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
const argsList = [["didomi_token","$remove$"],["lastRedirect","true"],["PageCount","$remove$"],["a_render","true"],["adf_plays","2"],["email","true"],["adDisplayed","$remove$"],["forcefeaturetoggle.enable_ad_block_detect","false"],["adWatched","true"],["adblock_warning_pages_count","$remove$"],["adshield-analytics-uuid","$remove$"],["/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["/_fa_dXVpZA==$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["segmentDeviceId","$remove$"],["/optimizely_data|tealium_timing/","$remove$"],["IIElevenLabsDubbingResult","$remove$"],["/_analytics|ppid/","$remove$"],["/^_vid_(lr|t)$/","$remove$"],["/adthrive|ccuid|at_sticky_data|geo-location|OPTABLE_/","$remove$"],["/cnc_alien_invasion_code|pixelsLastFired/","$remove$"]];
const hostnamesMap = new Map([["tv5mondeplus.com",0],["exambd.net",1],["jetpunk.com",2],["bravedown.com",3],["adultdeepfakes.com",4],["freewsad.com",5],["hdfilmcehennemi2.cx",6],["tradingview.com",7],["gputrends.net",8],["colnect.com",9],["373news.com",[10,11,12,13,14,15]],["aikatu.jp",[10,11,12,13,14,15]],["aniroleplay.com",[10,11,12,13,14,15]],["ap7am.com",[10,11,12,13,14,15]],["aucfree.com",[10,11,12,13,14,15]],["autoby.jp",[10,11,12,13,14,15]],["autofrage.net",[10,11,12,13,14,15]],["automobile-catalog.com",[10,11,12,13,14,15]],["badmouth1.com",[10,11,12,13,14,15]],["bamgosu.site",[10,11,12,13,14,15]],["bg-mania.jp",[10,11,12,13,14,15]],["bleepingcomputer.com",[10,11,12,13,14,15]],["blogmura.com",[10,11,12,13,14,15]],["buzzfeed.com",[10,11,12,13,14,15]],["buzzfeednews.com",[10,11,12,13,14,15]],["chanto.jp.net",[10,11,12,13,14,15]],["cinema.com.my",[10,11,12,13,14,15]],["cinetrafic.fr",[10,11,12,13,14,15]],["cocokara-next.com",[10,11,12,13,14,15]],["computerfrage.net",[10,11,12,13,14,15]],["convertcase.net",[10,11,12,13,14,15]],["cool-style.com.tw",[10,11,12,13,14,15]],["crosswordsolver.com",[10,11,12,13,14,15]],["cruciverba.it",[10,11,12,13,14,15]],["daily.co.jp",[10,11,12,13,14,15]],["dnevno.hr",[10,11,12,13,14,15]],["dogdrip.net",[10,11,12,13,14,15]],["dolldivine.com",[10,11,12,13,14,15]],["donbalon.com",[10,11,12,13,14,15]],["dramabeans.com",[10,11,12,13,14,15]],["dropgame.jp",[10,11,12,13,14,15]],["dziennik.pl",[10,11,12,13,14,15]],["economictimes.com",[10,11,12,13,14,15]],["economist.co.kr",[10,11,12,13,14,15]],["edaily.co.kr",[10,11,12,13,14,15]],["etoday.co.kr",[10,11,12,13,14,15]],["etoland.co.kr",[10,11,12,13,14,15]],["eurointegration.com.ua",[10,11,12,13,14,15]],["flatpanelshd.com",[10,11,12,13,14,15]],["fntimes.com",[10,11,12,13,14,15]],["forsal.pl",[10,11,12,13,14,15]],["freemcserver.net",[10,11,12,13,14,15]],["fxstreet.*",[10,11,12,13,14,15]],["fxstreet-id.com",[10,11,12,13,14,15]],["gazetaprawna.pl",[10,11,12,13,14,15]],["giornalone.it",[10,11,12,13,14,15]],["globalrph.com",[10,11,12,13,14,15]],["gloria.hr",[10,11,12,13,14,15]],["golf-live.at",[10,11,12,13,14,15]],["heureka.cz",[10,11,12,13,14,15]],["hometownstation.com",[10,11,12,13,14,15]],["honkailab.com",[10,11,12,13,14,15]],["horairesdouverture24.fr",[10,11,12,13,14,15]],["infinityfree.com",[10,11,12,13,14,15]],["iplocation.net",[10,11,12,13,14,15]],["islamicfinder.org",[10,11,12,13,14,15]],["isplus.com",[10,11,12,13,14,15]],["issuya.com",[10,11,12,13,14,15]],["iusm.co.kr",[10,11,12,13,14,15]],["j-cast.com",[10,11,12,13,14,15]],["j-town.net",[10,11,12,13,14,15]],["jablickar.cz",[10,11,12,13,14,15]],["jamaicaobserver.com",[10,11,12,13,14,15]],["javatpoint.com",[10,11,12,13,14,15]],["jawapos.com",[10,11,12,13,14,15]],["jmty.jp",[10,11,12,13,14,15]],["joemonster.org",[10,11,12,13,14,15]],["jutarnji.hr",[10,11,12,13,14,15]],["kinmaweb.jp",[10,11,12,13,14,15]],["kobe-journal.com",[10,11,12,13,14,15]],["kompasiana.com",[10,11,12,13,14,15]],["kreuzwortraetsel.de",[10,11,12,13,14,15]],["kurashiru.com",[10,11,12,13,14,15]],["kyoteibiyori.com",[10,11,12,13,14,15]],["lacuarta.com",[10,11,12,13,14,15]],["laleggepertutti.it",[10,11,12,13,14,15]],["lamire.jp",[10,11,12,13,14,15]],["lifehacker.jp",[10,11,12,13,14,15]],["livenewschat.eu",[10,11,12,13,14,15]],["loawa.com",[10,11,12,13,14,15]],["logicieleducatif.fr",[10,11,12,13,14,15]],["maketecheasier.com",[10,11,12,13,14,15]],["malaymail.com",[10,11,12,13,14,15]],["mamastar.jp",[10,11,12,13,14,15]],["manta.com",[10,11,12,13,14,15]],["mediaindonesia.com",[10,11,12,13,14,15]],["minkou.jp",[10,11,12,13,14,15]],["missyusa.com",[10,11,12,13,14,15]],["mlbpark.donga.com",[10,11,12,13,14,15]],["motor-talk.de",[10,11,12,13,14,15]],["motscroises.fr",[10,11,12,13,14,15]],["muragon.com",[10,11,12,13,14,15]],["mynet.com",[10,11,12,13,14,15]],["nana-press.com",[10,11,12,13,14,15]],["netzwelt.de",[10,11,12,13,14,15]],["niketalk.com",[10,11,12,13,14,15]],["oeffnungszeitenbuch.de",[10,11,12,13,14,15]],["ondemandkorea.com",[10,11,12,13,14,15]],["oraridiapertura24.it",[10,11,12,13,14,15]],["oxfordlearnersdictionaries.com",[10,11,12,13,14,15]],["palabr.as",[10,11,12,13,14,15]],["pashplus.jp",[10,11,12,13,14,15]],["persoenlich.com",[10,11,12,13,14,15]],["petitfute.com",[10,11,12,13,14,15]],["picrew.me",[10,11,12,13,14,15]],["powerpyx.com",[10,11,12,13,14,15]],["pravda.com.ua",[10,11,12,13,14,15]],["pressian.com",[10,11,12,13,14,15]],["quefaire.be",[10,11,12,13,14,15]],["raenonx.cc",[10,11,12,13,14,15]],["raetsel-hilfe.de",[10,11,12,13,14,15]],["relevantmagazine.com",[10,11,12,13,14,15]],["reportera.co.kr",[10,11,12,13,14,15]],["roleplayer.me",[10,11,12,13,14,15]],["rostercon.com",[10,11,12,13,14,15]],["samsungmagazine.eu",[10,11,12,13,14,15]],["slashdot.org",[10,11,12,13,14,15]],["slobodnadalmacija.hr",[10,11,12,13,14,15]],["smsonline.cloud",[10,11,12,13,14,15]],["sourceforge.net",[10,11,12,13,14,15]],["sportalkorea.com",[10,11,12,13,14,15]],["sportsrec.com",[10,11,12,13,14,15]],["sportsseoul.com",[10,11,12,13,14,15]],["talkwithstranger.com",[10,11,12,13,14,15]],["tbsradio.jp",[10,11,12,13,14,15]],["text-compare.com",[10,11,12,13,14,15]],["thatgossip.com",[10,11,12,13,14,15]],["the-crossword-solver.com",[10,11,12,13,14,15]],["thefreebieguy.com",[10,11,12,13,14,15]],["tportal.hr",[10,11,12,13,14,15]],["transparentcalifornia.com",[10,11,12,13,14,15]],["transparentnevada.com",[10,11,12,13,14,15]],["tvtv.ca",[10,11,12,13,14,15]],["tvtv.us",[10,11,12,13,14,15]],["ufret.jp",[10,11,12,13,14,15]],["upmedia.mg",[10,11,12,13,14,15]],["w.grapps.me",[10,11,12,13,14,15]],["watchdocumentaries.com",[10,11,12,13,14,15]],["webdesignledger.com",[10,11,12,13,14,15]],["wfmz.com",[10,11,12,13,14,15]],["winfuture.de",[10,11,12,13,14,15]],["word-grabber.com",[10,11,12,13,14,15]],["worldhistory.org",[10,11,12,13,14,15]],["wort-suchen.de",[10,11,12,13,14,15]],["woxikon.*",[10,11,12,13,14,15]],["yakkun.com",[10,11,12,13,14,15]],["ygosu.com",[10,11,12,13,14,15]],["yutura.net",[10,11,12,13,14,15]],["zagreb.info",[10,11,12,13,14,15]],["zakzak.co.jp",[10,11,12,13,14,15]],["2chblog.jp",[10,11,12,13,14,15]],["2monkeys.jp",[10,11,12,13,14,15]],["46matome.net",[10,11,12,13,14,15]],["akb48glabo.com",[10,11,12,13,14,15]],["akb48matomemory.com",[10,11,12,13,14,15]],["alfalfalfa.com",[10,11,12,13,14,15]],["all-nationz.com",[10,11,12,13,14,15]],["anihatsu.com",[10,11,12,13,14,15]],["aqua2ch.net",[10,11,12,13,14,15]],["blog.esuteru.com",[10,11,12,13,14,15]],["blog.livedoor.jp",[10,11,12,13,14,15]],["blog.jp",[10,11,12,13,14,15]],["blogo.jp",[10,11,12,13,14,15]],["chaos2ch.com",[10,11,12,13,14,15]],["choco0202.work",[10,11,12,13,14,15]],["crx7601.com",[10,11,12,13,14,15]],["danseisama.com",[10,11,12,13,14,15]],["dareda.net",[10,11,12,13,14,15]],["digital-thread.com",[10,11,12,13,14,15]],["doorblog.jp",[10,11,12,13,14,15]],["exawarosu.net",[10,11,12,13,14,15]],["fgochaldeas.com",[10,11,12,13,14,15]],["football-2ch.com",[10,11,12,13,14,15]],["gekiyaku.com",[10,11,12,13,14,15]],["golog.jp",[10,11,12,13,14,15]],["hacchaka.net",[10,11,12,13,14,15]],["heartlife-matome.com",[10,11,12,13,14,15]],["liblo.jp",[10,11,12,13,14,15]],["fesoku.net",[10,11,12,13,14,15]],["fiveslot777.com",[10,11,12,13,14,15]],["gamejksokuhou.com",[10,11,12,13,14,15]],["girlsreport.net",[10,11,12,13,14,15]],["girlsvip-matome.com",[10,11,12,13,14,15]],["grasoku.com",[10,11,12,13,14,15]],["gundamlog.com",[10,11,12,13,14,15]],["honyaku-channel.net",[10,11,12,13,14,15]],["ikarishintou.com",[10,11,12,13,14,15]],["imas-cg.net",[10,11,12,13,14,15]],["imihu.net",[10,11,12,13,14,15]],["inutomo11.com",[10,11,12,13,14,15]],["itainews.com",[10,11,12,13,14,15]],["itaishinja.com",[10,11,12,13,14,15]],["jin115.com",[10,11,12,13,14,15]],["jisaka.com",[10,11,12,13,14,15]],["jnews1.com",[10,11,12,13,14,15]],["jumpsokuhou.com",[10,11,12,13,14,15]],["jyoseisama.com",[10,11,12,13,14,15]],["keyakizaka46matomemory.net",[10,11,12,13,14,15]],["kidan-m.com",[10,11,12,13,14,15]],["kijoden.com",[10,11,12,13,14,15]],["kijolariat.net",[10,11,12,13,14,15]],["kijolifehack.com",[10,11,12,13,14,15]],["kijomatomelog.com",[10,11,12,13,14,15]],["kijyokatu.com",[10,11,12,13,14,15]],["kijyomatome.com",[10,11,12,13,14,15]],["kijyomatome-ch.com",[10,11,12,13,14,15]],["kijyomita.com",[10,11,12,13,14,15]],["kirarafan.com",[10,11,12,13,14,15]],["kitimama-matome.net",[10,11,12,13,14,15]],["kitizawa.com",[10,11,12,13,14,15]],["konoyubitomare.jp",[10,11,12,13,14,15]],["kotaro269.com",[10,11,12,13,14,15]],["kyousoku.net",[10,11,12,13,14,15]],["ldblog.jp",[10,11,12,13,14,15]],["livedoor.biz",[10,11,12,13,14,15]],["livedoor.blog",[10,11,12,13,14,15]],["majikichi.com",[10,11,12,13,14,15]],["matacoco.com",[10,11,12,13,14,15]],["matomeblade.com",[10,11,12,13,14,15]],["matomelotte.com",[10,11,12,13,14,15]],["matometemitatta.com",[10,11,12,13,14,15]],["mojomojo-licarca.com",[10,11,12,13,14,15]],["morikinoko.com",[10,11,12,13,14,15]],["nandemo-uketori.com",[10,11,12,13,14,15]],["netatama.net",[10,11,12,13,14,15]],["news-buzz1.com",[10,11,12,13,14,15]],["news30over.com",[10,11,12,13,14,15]],["nmb48-mtm.com",[10,11,12,13,14,15]],["norisoku.com",[10,11,12,13,14,15]],["npb-news.com",[10,11,12,13,14,15]],["ocsoku.com",[10,11,12,13,14,15]],["okusama-kijyo.com",[10,11,12,13,14,15]],["onihimechan.com",[10,11,12,13,14,15]],["orusoku.com",[10,11,12,13,14,15]],["otakomu.jp",[10,11,12,13,14,15]],["otoko-honne.com",[10,11,12,13,14,15]],["oumaga-times.com",[10,11,12,13,14,15]],["outdoormatome.com",[10,11,12,13,14,15]],["pachinkopachisro.com",[10,11,12,13,14,15]],["paranormal-ch.com",[10,11,12,13,14,15]],["recosoku.com",[10,11,12,13,14,15]],["s2-log.com",[10,11,12,13,14,15]],["saikyo-jump.com",[10,11,12,13,14,15]],["shuraba-matome.com",[10,11,12,13,14,15]],["ske48matome.net",[10,11,12,13,14,15]],["squallchannel.com",[10,11,12,13,14,15]],["sukattojapan.com",[10,11,12,13,14,15]],["sumaburayasan.com",[10,11,12,13,14,15]],["usi32.com",[10,11,12,13,14,15]],["uwakich.com",[10,11,12,13,14,15]],["uwakitaiken.com",[10,11,12,13,14,15]],["vault76.info",[10,11,12,13,14,15]],["vipnews.jp",[10,11,12,13,14,15]],["vippers.jp",[10,11,12,13,14,15]],["vipsister23.com",[10,11,12,13,14,15]],["vtubernews.jp",[10,11,12,13,14,15]],["watarukiti.com",[10,11,12,13,14,15]],["world-fusigi.net",[10,11,12,13,14,15]],["zakuzaku911.com",[10,11,12,13,14,15]],["zch-vip.com",[10,11,12,13,14,15]],["mindbodygreen.com",16],["1und1.de",17],["elevenlabs.io",18],["mirror.co.uk",19],["farmersjournal.ie",20],["laurelberninteriors.com",21],["evropa2.cz",22]]);
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
    try { setLocalStorageItem(...argsList[i]); }
    catch { }
}

/******************************************************************************/

// End of local scope
})();

void 0;
