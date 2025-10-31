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
const argsList = [["didomi_token","$remove$"],["ADB_ACTIVE_STATUS","$remove$"],["lastRedirect","true"],["PageCount","$remove$"],["a_render","true"],["adf_plays","2"],["email","true"],["adDisplayed","$remove$"],["forcefeaturetoggle.enable_ad_block_detect","false"],["adWatched","true"],["adblock_warning_pages_count","$remove$"],["superberb_disable","1"],["adshield-analytics-uuid","$remove$"],["/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["/_fa_dXVpZA==$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["segmentDeviceId","$remove$"],["/^rt_/","$remove$"],["/amplitude|lastUtms|gaAccount|cX|_ls_ttl/","$remove$"],["/^(pe-|sndp-laneitem-impressions)/","$remove$"],["/fmscw_resp|intercom/","$remove$"],["uuid","$remove$"],["/^uw-/","$remove$"],["remark_lead","$remove$"],["youbora.youboraDeviceUUID","$remove$"],["bp-analytics","$remove$"],["/^ph_phc_/","$remove$"],["/^fosp_|orig_aid/","$remove$"],["/^recommendation_uuid/","$remove$"],["optimizely-vuid","$remove$"],["/^fw_/","$remove$"],["marketingCloudVisitorID","$remove$"],["PERSONAL_FLIGHT_emperiaResponse","$remove$"],["/^boostSD/","$remove$"],["/sales-ninja|snj/","$remove$"],["etx-settings","$remove$"],["/__anon_id|browserId/","$remove$"],["/_li_duid|_lc2_fpi/","$remove$"],["/fingerprint|trackingEvents/","$remove$"],["/htjs_|stck_|statsig/","$remove$"],["/mixpanel/","$remove$"],["ld:$anonUserId","$remove$"],["/_user_id$/","$remove$"],["csg_uid","$remove$"],["uw-uid","$remove$"],["RC_PLAYER_USER_ID","$remove$"],["/sc_tracking_anonymous_id|statsig/","$remove$"],["/lc_anon_user_id|_constructorio_search_client_id/","$remove$"],["/builderVisitorId|snowplowOutQueue_cf/","$remove$"],["/__anon_id|efl-uuid/","$remove$"],["_gal1","$remove$"],["IIElevenLabsDubbingResult","$remove$"],["/_analytics|ppid/","$remove$"],["/^_vid_(lr|t)$/","$remove$"],["/adthrive|ccuid|at_sticky_data|geo-location|OPTABLE_/","$remove$"],["/cnc_alien_invasion_code|pixelsLastFired/","$remove$"],["/^avoinspector/","$remove$"]];
const hostnamesMap = new Map([["tv5mondeplus.com",0],["t3n.de",1],["exambd.net",2],["jetpunk.com",3],["bravedown.com",4],["adultdeepfakes.com",5],["freewsad.com",6],["hdfilmcehennemi2.cx",7],["tradingview.com",8],["gputrends.net",9],["colnect.com",10],["fapeza.com",11],["373news.com",[12,13,14,15,16,17]],["aikatu.jp",[12,13,14,15,16,17]],["aniroleplay.com",[12,13,14,15,16,17]],["ap7am.com",[12,13,14,15,16,17]],["areaconnect.com",[12,13,14,15,16,17]],["as-web.jp",[12,13,14,15,16,17]],["aucfree.com",[12,13,14,15,16,17]],["autoby.jp",[12,13,14,15,16,17]],["autoc-one.jp",[12,13,14,15,16,17]],["autofrage.net",[12,13,14,15,16,17]],["automobile-catalog.com",[12,13,14,15,16,17]],["bab.la",[12,13,14,15,16,17]],["babla.*",[12,13,14,15,16,17]],["badmouth1.com",[12,13,14,15,16,17]],["bamgosu.site",[12,13,14,15,16,17]],["bg-mania.jp",[12,13,14,15,16,17]],["bien.hu",[12,13,14,15,16,17]],["bleepingcomputer.com",[12,13,14,15,16,17]],["blogmura.com",[12,13,14,15,16,17]],["buzzfeed.com",[12,13,14,15,16,17]],["buzzfeednews.com",[12,13,14,15,16,17]],["cesoirtv.com",[12,13,14,15,16,17]],["chanto.jp.net",[12,13,14,15,16,17]],["cinema.com.my",[12,13,14,15,16,17]],["cinetrafic.fr",[12,13,14,15,16,17]],["cocokara-next.com",[12,13,14,15,16,17]],["collinsdictionary.com",[12,13,14,15,16,17]],["computerfrage.net",[12,13,14,15,16,17]],["convertcase.net",[12,13,14,15,16,17]],["cool-style.com.tw",[12,13,14,15,16,17]],["crosswordsolver.com",[12,13,14,15,16,17]],["cruciverba.it",[12,13,14,15,16,17]],["cults3d.com",[12,13,14,15,16,17]],["daily.co.jp",[12,13,14,15,16,17]],["dailynewshungary.com",[12,13,14,15,16,17]],["dayspedia.com",[12,13,14,15,16,17]],["dictionary.cambridge.org",[12,13,14,15,16,17]],["dnevno.hr",[12,13,14,15,16,17]],["dogdrip.net",[12,13,14,15,16,17]],["dolldivine.com",[12,13,14,15,16,17]],["donbalon.com",[12,13,14,15,16,17]],["dramabeans.com",[12,13,14,15,16,17]],["dropgame.jp",[12,13,14,15,16,17]],["dziennik.pl",[12,13,14,15,16,17]],["economictimes.com",[12,13,14,15,16,17]],["economist.co.kr",[12,13,14,15,16,17]],["edaily.co.kr",[12,13,14,15,16,17]],["etoday.co.kr",[12,13,14,15,16,17]],["etoland.co.kr",[12,13,14,15,16,17]],["eurointegration.com.ua",[12,13,14,15,16,17]],["ev-times.com",[12,13,14,15,16,17]],["filmibeat.com",[12,13,14,15,16,17]],["flatpanelshd.com",[12,13,14,15,16,17]],["fntimes.com",[12,13,14,15,16,17]],["footballtransfer.com.ua",[12,13,14,15,16,17]],["footballtransfer.ru",[12,13,14,15,16,17]],["forsal.pl",[12,13,14,15,16,17]],["freemcserver.net",[12,13,14,15,16,17]],["fxstreet-id.com",[12,13,14,15,16,17]],["fxstreet-vn.com",[12,13,14,15,16,17]],["fxstreet.*",[12,13,14,15,16,17]],["gazetaprawna.pl",[12,13,14,15,16,17]],["genialetricks.de",[12,13,14,15,16,17]],["giornalone.it",[12,13,14,15,16,17]],["globalrph.com",[12,13,14,15,16,17]],["gloria.hr",[12,13,14,15,16,17]],["golf-live.at",[12,13,14,15,16,17]],["goodreturns.in",[12,13,14,15,16,17]],["hb-nippon.com",[12,13,14,15,16,17]],["heureka.cz",[12,13,14,15,16,17]],["hometownstation.com",[12,13,14,15,16,17]],["honkailab.com",[12,13,14,15,16,17]],["horairesdouverture24.fr",[12,13,14,15,16,17]],["hotcopper.com.au",[12,13,14,15,16,17]],["idokep.hu",[12,13,14,15,16,17]],["infinityfree.com",[12,13,14,15,16,17]],["iplocation.net",[12,13,14,15,16,17]],["islamicfinder.org",[12,13,14,15,16,17]],["isplus.com",[12,13,14,15,16,17]],["issuya.com",[12,13,14,15,16,17]],["iusm.co.kr",[12,13,14,15,16,17]],["j-cast.com",[12,13,14,15,16,17]],["j-town.net",[12,13,14,15,16,17]],["j7p.jp",[12,13,14,15,16,17]],["jablickar.cz",[12,13,14,15,16,17]],["jamaicaobserver.com",[12,13,14,15,16,17]],["javatpoint.com",[12,13,14,15,16,17]],["jawapos.com",[12,13,14,15,16,17]],["jmty.jp",[12,13,14,15,16,17]],["joemonster.org",[12,13,14,15,16,17]],["judgehype.com",[12,13,14,15,16,17]],["jutarnji.hr",[12,13,14,15,16,17]],["kinmaweb.jp",[12,13,14,15,16,17]],["km77.com",[12,13,14,15,16,17]],["knowt.com",[12,13,14,15,16,17]],["kobe-journal.com",[12,13,14,15,16,17]],["kompasiana.com",[12,13,14,15,16,17]],["kreuzwortraetsel.de",[12,13,14,15,16,17]],["kurashinista.jp",[12,13,14,15,16,17]],["kurashiru.com",[12,13,14,15,16,17]],["kyoteibiyori.com",[12,13,14,15,16,17]],["lacuarta.com",[12,13,14,15,16,17]],["lakeshowlife.com",[12,13,14,15,16,17]],["laleggepertutti.it",[12,13,14,15,16,17]],["lamire.jp",[12,13,14,15,16,17]],["ldoceonline.com",[12,13,14,15,16,17]],["leckerschmecker.me",[12,13,14,15,16,17]],["lifehacker.jp",[12,13,14,15,16,17]],["listentotaxman.com",[12,13,14,15,16,17]],["livenewschat.eu",[12,13,14,15,16,17]],["loawa.com",[12,13,14,15,16,17]],["logicieleducatif.fr",[12,13,14,15,16,17]],["mahjongchest.com",[12,13,14,15,16,17]],["maketecheasier.com",[12,13,14,15,16,17]],["malaymail.com",[12,13,14,15,16,17]],["mamastar.jp",[12,13,14,15,16,17]],["manta.com",[12,13,14,15,16,17]],["mathplayzone.com",[12,13,14,15,16,17]],["mediaindonesia.com",[12,13,14,15,16,17]],["mentalfloss.com",[12,13,14,15,16,17]],["meteo60.fr",[12,13,14,15,16,17]],["midhudsonnews.com",[12,13,14,15,16,17]],["minesweeperquest.com",[12,13,14,15,16,17]],["minkou.jp",[12,13,14,15,16,17]],["missyusa.com",[12,13,14,15,16,17]],["mlbpark.donga.com",[12,13,14,15,16,17]],["moin.de",[12,13,14,15,16,17]],["motor-talk.de",[12,13,14,15,16,17]],["motscroises.fr",[12,13,14,15,16,17]],["muragon.com",[12,13,14,15,16,17]],["mykhel.com",[12,13,14,15,16,17]],["mynet.com",[12,13,14,15,16,17]],["nana-press.com",[12,13,14,15,16,17]],["nationaltoday.com",[12,13,14,15,16,17]],["nbadraft.net",[12,13,14,15,16,17]],["netzwelt.de",[12,13,14,15,16,17]],["newsinlevels.com",[12,13,14,15,16,17]],["newsweekjapan.jp",[12,13,14,15,16,17]],["niice-woker.com",[12,13,14,15,16,17]],["niketalk.com",[12,13,14,15,16,17]],["nouvelobs.com",[12,13,14,15,16,17]],["oeffnungszeitenbuch.de",[12,13,14,15,16,17]],["ondemandkorea.com",[12,13,14,15,16,17]],["onlineradiobox.com",[12,13,14,15,16,17]],["optionsprofitcalculator.com",[12,13,14,15,16,17]],["oraridiapertura24.it",[12,13,14,15,16,17]],["oxfordlearnersdictionaries.com",[12,13,14,15,16,17]],["palabr.as",[12,13,14,15,16,17]],["pashplus.jp",[12,13,14,15,16,17]],["persoenlich.com",[12,13,14,15,16,17]],["petitfute.com",[12,13,14,15,16,17]],["picksandparlays.net",[12,13,14,15,16,17]],["picrew.me",[12,13,14,15,16,17]],["powerpyx.com",[12,13,14,15,16,17]],["pptvhd36.com",[12,13,14,15,16,17]],["pravda.com.ua",[12,13,14,15,16,17]],["pressian.com",[12,13,14,15,16,17]],["profitline.hu",[12,13,14,15,16,17]],["puzzlegarage.com",[12,13,14,15,16,17]],["quefaire.be",[12,13,14,15,16,17]],["radio-australia.org",[12,13,14,15,16,17]],["radio-osterreich.at",[12,13,14,15,16,17]],["raenonx.cc",[12,13,14,15,16,17]],["raetsel-hilfe.de",[12,13,14,15,16,17]],["references.be",[12,13,14,15,16,17]],["relevantmagazine.com",[12,13,14,15,16,17]],["reportera.co.kr",[12,13,14,15,16,17]],["roleplayer.me",[12,13,14,15,16,17]],["rostercon.com",[12,13,14,15,16,17]],["samsungmagazine.eu",[12,13,14,15,16,17]],["scribens.com",[12,13,14,15,16,17]],["scribens.fr",[12,13,14,15,16,17]],["slashdot.org",[12,13,14,15,16,17]],["slobodnadalmacija.hr",[12,13,14,15,16,17]],["smsonline.cloud",[12,13,14,15,16,17]],["soccerdigestweb.com",[12,13,14,15,16,17]],["solitairehut.com",[12,13,14,15,16,17]],["sourceforge.net",[12,13,14,15,16,17]],["southhemitv.com",[12,13,14,15,16,17]],["sportalkorea.com",[12,13,14,15,16,17]],["sportanalytic.com",[12,13,14,15,16,17]],["sportsrec.com",[12,13,14,15,16,17]],["sportsseoul.com",[12,13,14,15,16,17]],["szamoldki.hu",[12,13,14,15,16,17]],["talkwithstranger.com",[12,13,14,15,16,17]],["tasty.co",[12,13,14,15,16,17]],["tbsradio.jp",[12,13,14,15,16,17]],["text-compare.com",[12,13,14,15,16,17]],["thatgossip.com",[12,13,14,15,16,17]],["the-crossword-solver.com",[12,13,14,15,16,17]],["thedigestweb.com",[12,13,14,15,16,17]],["thefreebieguy.com",[12,13,14,15,16,17]],["tportal.hr",[12,13,14,15,16,17]],["traicy.com",[12,13,14,15,16,17]],["transparentcalifornia.com",[12,13,14,15,16,17]],["transparentnevada.com",[12,13,14,15,16,17]],["tunebat.com",[12,13,14,15,16,17]],["tvtv.ca",[12,13,14,15,16,17]],["tvtv.us",[12,13,14,15,16,17]],["tweaktown.com",[12,13,14,15,16,17]],["twn.hu",[12,13,14,15,16,17]],["tyda.se",[12,13,14,15,16,17]],["tz.de",[12,13,14,15,16,17]],["ufret.jp",[12,13,14,15,16,17]],["upmedia.mg",[12,13,14,15,16,17]],["verkaufsoffener-sonntag.com",[12,13,14,15,16,17]],["w.grapps.me",[12,13,14,15,16,17]],["watchdocumentaries.com",[12,13,14,15,16,17]],["webdesignledger.com",[12,13,14,15,16,17]],["wfmz.com",[12,13,14,15,16,17]],["winfuture.de",[12,13,14,15,16,17]],["word-grabber.com",[12,13,14,15,16,17]],["worldhistory.org",[12,13,14,15,16,17]],["worldjournal.com",[12,13,14,15,16,17]],["wort-suchen.de",[12,13,14,15,16,17]],["woxikon.*",[12,13,14,15,16,17]],["yakkun.com",[12,13,14,15,16,17]],["ygosu.com",[12,13,14,15,16,17]],["yutura.net",[12,13,14,15,16,17]],["zagreb.info",[12,13,14,15,16,17]],["zakzak.co.jp",[12,13,14,15,16,17]],["2chblog.jp",[12,13,14,15,16,17]],["2monkeys.jp",[12,13,14,15,16,17]],["46matome.net",[12,13,14,15,16,17]],["akb48glabo.com",[12,13,14,15,16,17]],["akb48matomemory.com",[12,13,14,15,16,17]],["alfalfalfa.com",[12,13,14,15,16,17]],["all-nationz.com",[12,13,14,15,16,17]],["anihatsu.com",[12,13,14,15,16,17]],["aqua2ch.net",[12,13,14,15,16,17]],["blog.esuteru.com",[12,13,14,15,16,17]],["blog.livedoor.jp",[12,13,14,15,16,17]],["blog.jp",[12,13,14,15,16,17]],["blogo.jp",[12,13,14,15,16,17]],["chaos2ch.com",[12,13,14,15,16,17]],["choco0202.work",[12,13,14,15,16,17]],["crx7601.com",[12,13,14,15,16,17]],["danseisama.com",[12,13,14,15,16,17]],["dareda.net",[12,13,14,15,16,17]],["digital-thread.com",[12,13,14,15,16,17]],["doorblog.jp",[12,13,14,15,16,17]],["exawarosu.net",[12,13,14,15,16,17]],["fgochaldeas.com",[12,13,14,15,16,17]],["football-2ch.com",[12,13,14,15,16,17]],["gekiyaku.com",[12,13,14,15,16,17]],["golog.jp",[12,13,14,15,16,17]],["hacchaka.net",[12,13,14,15,16,17]],["heartlife-matome.com",[12,13,14,15,16,17]],["liblo.jp",[12,13,14,15,16,17]],["fesoku.net",[12,13,14,15,16,17]],["fiveslot777.com",[12,13,14,15,16,17]],["gamejksokuhou.com",[12,13,14,15,16,17]],["girlsreport.net",[12,13,14,15,16,17]],["girlsvip-matome.com",[12,13,14,15,16,17]],["grasoku.com",[12,13,14,15,16,17]],["gundamlog.com",[12,13,14,15,16,17]],["honyaku-channel.net",[12,13,14,15,16,17]],["ikarishintou.com",[12,13,14,15,16,17]],["imas-cg.net",[12,13,14,15,16,17]],["imihu.net",[12,13,14,15,16,17]],["inutomo11.com",[12,13,14,15,16,17]],["itainews.com",[12,13,14,15,16,17]],["itaishinja.com",[12,13,14,15,16,17]],["jin115.com",[12,13,14,15,16,17]],["jisaka.com",[12,13,14,15,16,17]],["jnews1.com",[12,13,14,15,16,17]],["jumpsokuhou.com",[12,13,14,15,16,17]],["jyoseisama.com",[12,13,14,15,16,17]],["keyakizaka46matomemory.net",[12,13,14,15,16,17]],["kidan-m.com",[12,13,14,15,16,17]],["kijoden.com",[12,13,14,15,16,17]],["kijolariat.net",[12,13,14,15,16,17]],["kijolifehack.com",[12,13,14,15,16,17]],["kijomatomelog.com",[12,13,14,15,16,17]],["kijyokatu.com",[12,13,14,15,16,17]],["kijyomatome.com",[12,13,14,15,16,17]],["kijyomatome-ch.com",[12,13,14,15,16,17]],["kijyomita.com",[12,13,14,15,16,17]],["kirarafan.com",[12,13,14,15,16,17]],["kitimama-matome.net",[12,13,14,15,16,17]],["kitizawa.com",[12,13,14,15,16,17]],["konoyubitomare.jp",[12,13,14,15,16,17]],["kotaro269.com",[12,13,14,15,16,17]],["kyousoku.net",[12,13,14,15,16,17]],["ldblog.jp",[12,13,14,15,16,17]],["livedoor.biz",[12,13,14,15,16,17]],["livedoor.blog",[12,13,14,15,16,17]],["majikichi.com",[12,13,14,15,16,17]],["matacoco.com",[12,13,14,15,16,17]],["matomeblade.com",[12,13,14,15,16,17]],["matomelotte.com",[12,13,14,15,16,17]],["matometemitatta.com",[12,13,14,15,16,17]],["mojomojo-licarca.com",[12,13,14,15,16,17]],["morikinoko.com",[12,13,14,15,16,17]],["nandemo-uketori.com",[12,13,14,15,16,17]],["netatama.net",[12,13,14,15,16,17]],["news-buzz1.com",[12,13,14,15,16,17]],["news30over.com",[12,13,14,15,16,17]],["nmb48-mtm.com",[12,13,14,15,16,17]],["norisoku.com",[12,13,14,15,16,17]],["npb-news.com",[12,13,14,15,16,17]],["ocsoku.com",[12,13,14,15,16,17]],["okusama-kijyo.com",[12,13,14,15,16,17]],["onihimechan.com",[12,13,14,15,16,17]],["orusoku.com",[12,13,14,15,16,17]],["otakomu.jp",[12,13,14,15,16,17]],["otoko-honne.com",[12,13,14,15,16,17]],["oumaga-times.com",[12,13,14,15,16,17]],["outdoormatome.com",[12,13,14,15,16,17]],["pachinkopachisro.com",[12,13,14,15,16,17]],["paranormal-ch.com",[12,13,14,15,16,17]],["recosoku.com",[12,13,14,15,16,17]],["s2-log.com",[12,13,14,15,16,17]],["saikyo-jump.com",[12,13,14,15,16,17]],["shuraba-matome.com",[12,13,14,15,16,17]],["ske48matome.net",[12,13,14,15,16,17]],["squallchannel.com",[12,13,14,15,16,17]],["sukattojapan.com",[12,13,14,15,16,17]],["sumaburayasan.com",[12,13,14,15,16,17]],["sutekinakijo.com",[12,13,14,15,16,17]],["usi32.com",[12,13,14,15,16,17]],["uwakich.com",[12,13,14,15,16,17]],["uwakitaiken.com",[12,13,14,15,16,17]],["vault76.info",[12,13,14,15,16,17]],["vipnews.jp",[12,13,14,15,16,17]],["vippers.jp",[12,13,14,15,16,17]],["vipsister23.com",[12,13,14,15,16,17]],["vtubernews.jp",[12,13,14,15,16,17]],["watarukiti.com",[12,13,14,15,16,17]],["world-fusigi.net",[12,13,14,15,16,17]],["zakuzaku911.com",[12,13,14,15,16,17]],["zch-vip.com",[12,13,14,15,16,17]],["mindbodygreen.com",18],["musescore.com",19],["elconfidencial.com",20],["journaldemontreal.com",20],["aamulehti.fi",21],["cbsnews.com",22],["680thefan.com",23],["katu.com",24],["darntough.com",25],["mais.sbt.com.br",26],["boredpanda.com",27],["healf.com",28],["vnexpress.net",29],["briefly.co.za",30],["carparts.com",31],["hpplus.jp",32],["makemytrip.com",[33,34]],["shoebacca.com",35],["sky.pro",36],["lexpress.fr",37],["aihumanizer.ai",38],["humbot.ai",38],["allrecipes.com",39],["4game.com",40],["4game.ru",40],["shutterstock.com",41],["mobalytics.gg",42],["hopper.com",43],["mumuplayer.com",44],["theverge.com",45],["goodcar.com",46],["ici.radio-canada.ca",47],["soundcloud.com",48],["mykitsch.com",49],["huntress.com",50],["flo.com.tr",51],["gala.com",52],["elevenlabs.io",53],["mirror.co.uk",54],["farmersjournal.ie",55],["laurelberninteriors.com",56],["evropa2.cz",57],["vogue.com",58]]);
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
