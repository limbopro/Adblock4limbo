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

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_trustedClickElement = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [[".didomi-continue-without-agreeing","","1000"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],[":is(.didomi-continue-without-agreeing, #didomi-notice-disagree-button)","","2000"],["button.cassie-reject-all","","1000"],[".almacmp-button--settings, #purposeConsents1, #purposeConsents2, #purposeConsents3, #purposeConsents4, #purposeConsents5, #purposeConsents6, #purposeConsents7, #purposeConsents8, #purposeConsents9, #purposeConsents10, #purposeConsents11, #specialFeatureConsents1, #specialFeatureConsents2, #almacmp-save-layer2"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],[".gdpr-btn.small-right, .thirdlayer .gdpr-btn-lbl"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-non-targeted-ad\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["span.didomi-continue-without-agreeing","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Alle Akzeptieren\"]","","1000"],["button[title=\"Alle akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["#pg-shadow-root-host >>> button#pg-reject-btn"],["#pg-shadow-root-host >>> button#pg-configure-btn"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"]];

const hostnamesMap = new Map([["auto.it",0],["consent.youtube.com",[1,2]],["sourcepointcmp.bloomberg.com",[3,4,5]],["sourcepointcmp.bloomberg.co.jp",[3,4,5]],["giga.de",5],["cmpv2.standard.co.uk",[6,7]],["cmpv2.independent.co.uk",[8,9,10]],["wetransfer.com",[11,12]],["spiegel.de",[13,14]],["www.nytimes.com",15],["consent.yahoo.com",16],["tumblr.com",17],["fplstatistics.co.uk",18],["e-shop.leonidas.com",19],["cdn.privacy-mgmt.com",[20,21,38,39,40,78,84,86,92,97,115,116,117,118]],["festoolcanada.com",22],["dr-beckmann.com",22],["consent.ladbible.com",[23,24]],["consent.unilad.com",[23,24]],["consent.gamingbible.com",[23,24]],["consent.sportbible.com",[23,24]],["consent.tyla.com",[23,24]],["consent.ladbiblegroup.com",[23,24]],["m2o.it",25],["deejay.it",25],["capital.it",25],["ilmattino.it",[25,26]],["leggo.it",[25,26]],["libero.it",25],["tiscali.it",25],["consent-manager.ft.com",[27,28]],["tf1info.fr",31],["uber.com",32],["ubereats.com",32],["lego.com",33],["ai.meta.com",34],["publicsenat.fr",35],["lilly.com",36],["ampparit.com",37],["arvopaperi.fi",37],["iltalehti.fi",37],["kauppalehti.fi",37],["mediuutiset.fi",37],["mikrobitti.fi",37],["talouselama.fi",37],["tekniikkatalous.fi",37],["tivi.fi",37],["uusisuomi.fi",37],["digi24.ro",41],["digisport.ro",41],["digitalfoundry.net",41],["egx.net",41],["eurogamer.it",41],["mail.com",41],["mcmcomiccon.com",41],["nintendolife.com",41],["oe24.at",41],["paxsite.com",41],["player.pl",41],["purexbox.com",41],["pushsquare.com",41],["starwarscelebration.com",41],["thehaul.com",41],["timeextension.com",41],["travelandleisure.com",41],["tunein.com",41],["videoland.com",41],["wizzair.com",41],["wetter.at",41],["dicebreaker.com",[42,43]],["eurogamer.cz",[42,43]],["eurogamer.es",[42,43]],["eurogamer.net",[42,43]],["eurogamer.nl",[42,43]],["eurogamer.pl",[42,43]],["eurogamer.pt",[42,43]],["gamesindustry.biz",[42,43]],["jelly.deals",[42,43]],["reedpop.com",[42,43]],["rockpapershotgun.com",[42,43]],["thepopverse.com",[42,43]],["vg247.com",[42,43]],["videogameschronicle.com",[42,43]],["eurogamer.de",44],["roadtovr.com",45],["mundodeportivo.com",[46,110]],["m.youtube.com",47],["www.youtube.com",47],["corriere.it",48],["gazzetta.it",48],["oggi.it",48],["cmp.sky.it",49],["tennisassa.fi",50],["formula1.com",51],["f1racing.pl",52],["consent-pref.trustarc.com",55],["highlights.legaseriea.it",56],["calciomercato.com",56],["sosfanta.com",57],["wetter.com",60],["youmath.it",61],["pip.gov.pl",62],["forbes.com",63],["mediaset.it",64],["fortune.com",65],["cmp.dpgmedia.nl",[66,68]],["cmp.dpgmedia.be",[66,68]],["cmp.ad.nl",[66,68]],["cmp.autotrack.nl",[66,68]],["cmp.autoweek.nl",[66,68]],["cmp.bd.nl",[66,68]],["cmp.bndestem.nl",[66,68]],["cmp.demorgen.be",[66,68]],["cmp.deondernemer.nl",[66,68]],["cmp.destentor.nl",[66,68]],["cmp.ed.nl",[66,68]],["cmp.gaspedaal.nl",[66,68]],["cmp.gelderlander.nl",[66,68]],["cmp.hln.be",[66,68]],["cmp.humo.be",[66,68]],["cmp.margriet.nl",[66,68]],["cmp.nu.nl",[66,68]],["cmp.qmusic.nl",[66,68]],["cmp.stijlvol-wonen.com",[66,68]],["cmp.trouw.nl",[66,68]],["cmp.tubantia.nl",[66,68]],["cmp.vtwonen.be",[66,68]],["cmp.vtwonen.nl",[66,68]],["cmp.pzc.nl",[66,68]],["cmp.zozitdat.nl",[66,68]],["cmp-sp.vrt.be",[67,68]],["myprivacy.dpgmedia.nl",69],["dpgmediagroup.com",69],["story.nl",69],["veronicasuperguide.nl",69],["ilrestodelcarlino.it",70],["quotidiano.net",70],["lanazione.it",70],["ilgiorno.it",70],["iltelegrafolivorno.it",70],["frandroid.com",71],["nutri-plus.de",72],["aa.com",73],["consent.capital.fr",74],["programme-tv.net",74],["cmp.e24.no",[75,76]],["cmp.vg.no",[75,76]],["huffingtonpost.fr",77],["geopop.it",79],["fanpage.it",79],["rainews.it",80],["remarkable.com",81],["netzwelt.de",82],["money.it",83],["cmp.computerbild.de",85],["cmp-sp.siegener-zeitung.de",85],["cmp-sp.sportbuzzer.de",85],["eneco.nl",87],["deichmann.com",88],["blackpoolgazette.co.uk",89],["lep.co.uk",89],["northamptonchron.co.uk",89],["scotsman.com",89],["shieldsgazette.com",89],["thestar.co.uk",89],["portsmouth.co.uk",89],["sunderlandecho.com",89],["northernirelandworld.com",89],["3addedminutes.com",89],["anguscountyworld.co.uk",89],["banburyguardian.co.uk",89],["bedfordtoday.co.uk",89],["biggleswadetoday.co.uk",89],["bucksherald.co.uk",89],["burnleyexpress.net",89],["buxtonadvertiser.co.uk",89],["chad.co.uk",89],["daventryexpress.co.uk",89],["derbyshiretimes.co.uk",89],["derbyworld.co.uk",89],["derryjournal.com",89],["dewsburyreporter.co.uk",89],["doncasterfreepress.co.uk",89],["falkirkherald.co.uk",89],["fifetoday.co.uk",89],["glasgowworld.com",89],["halifaxcourier.co.uk",89],["harboroughmail.co.uk",89],["harrogateadvertiser.co.uk",89],["hartlepoolmail.co.uk",89],["hemeltoday.co.uk",89],["hucknalldispatch.co.uk",89],["lancasterguardian.co.uk",89],["leightonbuzzardonline.co.uk",89],["lincolnshireworld.com",89],["liverpoolworld.uk",89],["londonworld.com",89],["lutontoday.co.uk",89],["manchesterworld.uk",89],["meltontimes.co.uk",89],["miltonkeynes.co.uk",89],["newcastleworld.com",89],["newryreporter.com",89],["newsletter.co.uk",89],["northantstelegraph.co.uk",89],["northumberlandgazette.co.uk",89],["nottinghamworld.com",89],["peterboroughtoday.co.uk",89],["rotherhamadvertiser.co.uk",89],["stornowaygazette.co.uk",89],["surreyworld.co.uk",89],["thescarboroughnews.co.uk",89],["thesouthernreporter.co.uk",89],["totallysnookered.com",89],["wakefieldexpress.co.uk",89],["walesworld.com",89],["warwickshireworld.com",89],["wigantoday.net",89],["worksopguardian.co.uk",89],["yorkshireeveningpost.co.uk",89],["yorkshirepost.co.uk",89],["eurocard.com",90],["saseurobonusmastercard.se",91],["tver.jp",93],["linkedin.com",94],["elmundo.es",95],["mapillary.com",96],["cmp.seznam.cz",98],["raiplay.it",99],["derstandard.at",100],["derstandard.de",100],["ansa.it",101],["delladio.it",101],["huffingtonpost.it",101],["lastampa.it",101],["movieplayer.it",101],["multiplayer.it",101],["repubblica.it",101],["tomshw.it",101],["tuttoandroid.net",101],["tuttotech.net",101],["ilgazzettino.it",102],["ilmessaggero.it",102],["ilsecoloxix.it",102],["privacy.motorradonline.de",103],["dailystar.co.uk",[104,105,106,107]],["mirror.co.uk",[104,105,106,107]],["jeuxvideo.com",108],["idnes.cz",109],["20minutes.fr",110],["20minutos.es",110],["24sata.hr",110],["abc.es",110],["actu.fr",110],["antena3.com",110],["antena3internacional.com",110],["atresmedia.com",110],["atresmediapublicidad.com",110],["atresmediastudios.com",110],["atresplayer.com",110],["autopista.es",110],["belfasttelegraph.co.uk",110],["bonduelle.it",110],["bonniernews.se",110],["cadenaser.com",110],["ciclismoafondo.es",110],["cnews.fr",110],["cope.es",110],["correryfitness.com",110],["decathlon.nl",110],["decathlon.pl",110],["diepresse.com",110],["dnevnik.hr",110],["dumpert.nl",110],["ebuyclub.com",110],["edreams.de",110],["edreams.net",110],["elcomercio.es",110],["elconfidencial.com",110],["eldesmarque.com",110],["elespanol.com",110],["elpais.com",110],["elpais.es",110],["engadget.com",110],["euronews.com",110],["europafm.com",110],["expressen.se",110],["flooxernow.com",110],["france24.com",110],["ghacks.net",110],["gva.be",110],["hbvl.be",110],["krone.at",110],["kurier.at",110],["ladepeche.fr",110],["lalibre.be",110],["lasexta.com",110],["lasprovincias.es",110],["ledauphine.com",110],["lejdd.fr",110],["leparisien.fr",110],["lexpress.fr",110],["libremercado.com",110],["marmiton.org",110],["melodia-fm.com",110],["metronieuws.nl",110],["nicematin.com",110],["nieuwsblad.be",110],["numerama.com",110],["ondacero.es",110],["profil.at",110],["radiofrance.fr",110],["rankia.com",110],["rfi.fr",110],["rossmann.pl",110],["rtbf.be",110],["rtl.lu",110],["science-et-vie.com",110],["sensacine.com",110],["sfgame.net",110],["shure.com",110],["silicon.es",110],["sncf-connect.com",110],["sport.es",110],["techcrunch.com",110],["telegraaf.nl",110],["telequebec.tv",110],["trailrun.es",110],["video-streaming.orange.fr",110],["meteofrance.com",111],["ryobitools.eu",[112,113]],["americanexpress.com",114],["golem.de",115],["1und1.de",120],["infranken.de",121],["cmp.chip.de",122],["cmp.petbook.de",123],["estadiodeportivo.com",124],["kicker.de",125],["formulatv.com",126],["web.de",127],["lefigaro.fr",128],["linternaute.com",129],["consent.caminteresse.fr",130],["volksfreund.de",131],["dailypost.co.uk",132],["the-express.com",132],["tarife.mediamarkt.de",133],["saturn.de",134],["tweakers.net",[135,136]],["cmp-sp.goettinger-tageblatt.de",138]]);

const entitiesMap = new Map([["consent.google",1],["festool",22],["hertz",29],["mediamarkt",30],["gmx",41],["music.amazon",[53,54]],["chrono24",[58,59]],["americanairlines",73],["degiro",119],["atlasformen",137]]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function trustedClickElement(
    selectors = '',
    extraMatch = '',
    delay = ''
) {
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('trusted-click-element', selectors, extraMatch, delay);

    if ( extraMatch !== '' ) {
        const assertions = extraMatch.split(',').map(s => {
            const pos1 = s.indexOf(':');
            const s1 = pos1 !== -1 ? s.slice(0, pos1) : s;
            const not = s1.startsWith('!');
            const type = not ? s1.slice(1) : s1;
            const s2 = pos1 !== -1 ? s.slice(pos1+1).trim() : '';
            if ( s2 === '' ) { return; }
            const out = { not, type };
            const match = /^\/(.+)\/(i?)$/.exec(s2);
            if ( match !== null ) {
                out.re = new RegExp(match[1], match[2] || undefined);
                return out;
            }
            const pos2 = s2.indexOf('=');
            const key = pos2 !== -1 ? s2.slice(0, pos2).trim() : s2;
            const value = pos2 !== -1 ? s2.slice(pos2+1).trim() : '';
            out.re = new RegExp(`^${this.escapeRegexChars(key)}=${this.escapeRegexChars(value)}`);
            return out;
        }).filter(details => details !== undefined);
        const allCookies = assertions.some(o => o.type === 'cookie')
            ? getAllCookiesFn()
            : [];
        const allStorageItems = assertions.some(o => o.type === 'localStorage')
            ? getAllLocalStorageFn()
            : [];
        const hasNeedle = (haystack, needle) => {
            for ( const { key, value } of haystack ) {
                if ( needle.test(`${key}=${value}`) ) { return true; }
            }
            return false;
        };
        for ( const { not, type, re } of assertions ) {
            switch ( type ) {
            case 'cookie':
                if ( hasNeedle(allCookies, re) === not ) { return; }
                break;
            case 'localStorage':
                if ( hasNeedle(allStorageItems, re) === not ) { return; }
                break;
            }
        }
    }

    const getShadowRoot = elem => {
        // Firefox
        if ( elem.openOrClosedShadowRoot ) {
            return elem.openOrClosedShadowRoot;
        }
        // Chromium
        if ( typeof chrome === 'object' ) {
            if ( chrome.dom && chrome.dom.openOrClosedShadowRoot ) {
                return chrome.dom.openOrClosedShadowRoot(elem);
            }
        }
        return null;
    };

    const querySelectorEx = (selector, context = document) => {
        const pos = selector.indexOf(' >>> ');
        if ( pos === -1 ) { return context.querySelector(selector); }
        const outside = selector.slice(0, pos).trim();
        const inside = selector.slice(pos + 5).trim();
        const elem = context.querySelector(outside);
        if ( elem === null ) { return null; }
        const shadowRoot = getShadowRoot(elem);
        return shadowRoot && querySelectorEx(inside, shadowRoot);
    };

    const selectorList = selectors.split(/\s*,\s*/)
        .filter(s => {
            try {
                void querySelectorEx(s);
            } catch(_) {
                return false;
            }
            return true;
        });
    if ( selectorList.length === 0 ) { return; }

    const clickDelay = parseInt(delay, 10) || 1;
    const t0 = Date.now();
    const tbye = t0 + 10000;
    let tnext = selectorList.length !== 1 ? t0 : t0 + clickDelay;

    const terminate = ( ) => {
        selectorList.length = 0;
        next.stop();
        observe.stop();
    };

    const next = notFound => {
        if ( selectorList.length === 0 ) {
            safe.uboLog(logPrefix, 'Completed');
            return terminate();
        }
        const tnow = Date.now();
        if ( tnow >= tbye ) {
            safe.uboLog(logPrefix, 'Timed out');
            return terminate();
        }
        if ( notFound ) { observe(); }
        const delay = Math.max(notFound ? tbye - tnow : tnext - tnow, 1);
        next.timer = setTimeout(( ) => {
            next.timer = undefined;
            process();
        }, delay);
        safe.uboLog(logPrefix, `Waiting for ${selectorList[0]}...`);
    };
    next.stop = ( ) => {
        if ( next.timer === undefined ) { return; }
        clearTimeout(next.timer);
        next.timer = undefined;
    };

    const observe = ( ) => {
        if ( observe.observer !== undefined ) { return; }
        observe.observer = new MutationObserver(( ) => {
            if ( observe.timer !== undefined ) { return; }
            observe.timer = setTimeout(( ) => {
                observe.timer = undefined;
                process();
            }, 20);
        });
        observe.observer.observe(document, {
            attributes: true,
            childList: true,
            subtree: true,
        });
    };
    observe.stop = ( ) => {
        if ( observe.timer !== undefined ) {
            clearTimeout(observe.timer);
            observe.timer = undefined;
        }
        if ( observe.observer ) {
            observe.observer.disconnect();
            observe.observer = undefined;
        }
    };

    const process = ( ) => {
        next.stop();
        if ( Date.now() < tnext ) { return next(); }
        const selector = selectorList.shift();
        if ( selector === undefined ) { return terminate(); }
        const elem = querySelectorEx(selector);
        if ( elem === null ) {
            selectorList.unshift(selector);
            return next(true);
        }
        safe.uboLog(logPrefix, `Clicked ${selector}`);
        elem.click();
        tnext += clickDelay;
        next();
    };

    runAtHtmlElementFn(process);
}

function getAllCookiesFn() {
    return document.cookie.split(/\s*;\s*/).map(s => {
        const pos = s.indexOf('=');
        if ( pos === 0 ) { return; }
        if ( pos === -1 ) { return `${s.trim()}=`; }
        const key = s.slice(0, pos).trim();
        const value = s.slice(pos+1).trim();
        return { key, value };
    }).filter(s => s !== undefined);
}

function getAllLocalStorageFn(which = 'localStorage') {
    const storage = self[which];
    const out = [];
    for ( let i = 0; i < storage.length; i++ ) {
        const key = storage.key(i);
        const value = storage.getItem(key);
        return { key, value };
    }
    return out;
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
    try { trustedClickElement(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_trustedClickElement();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
