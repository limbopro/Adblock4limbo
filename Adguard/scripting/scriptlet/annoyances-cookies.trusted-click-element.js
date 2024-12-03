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

const argsList = [[".didomi-continue-without-agreeing","","1000"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],[":is(.didomi-continue-without-agreeing, #didomi-notice-disagree-button)","","2000"],["button.cassie-reject-all","","1000"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],[".gdpr-btn.small-right, .thirdlayer .gdpr-btn-lbl"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[aria-label=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-non-targeted-ad\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["span.didomi-continue-without-agreeing","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button[title=\"Alle akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["#pg-shadow-root-host >>> button#pg-reject-btn"],["#pg-shadow-root-host >>> button#pg-configure-btn"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"]];

const hostnamesMap = new Map([["auto.it",0],["consent.youtube.com",[1,2]],["sourcepointcmp.bloomberg.com",[3,4,5]],["sourcepointcmp.bloomberg.co.jp",[3,4,5]],["giga.de",5],["bloomberg.com",6],["cmpv2.standard.co.uk",[7,8]],["cmpv2.independent.co.uk",[9,10,11]],["wetransfer.com",[12,13]],["spiegel.de",[14,15]],["www.nytimes.com",16],["consent.yahoo.com",17],["tumblr.com",18],["fplstatistics.co.uk",19],["e-shop.leonidas.com",20],["cdn.privacy-mgmt.com",[21,22,38,39,40,79,85,87,93,98,116,117,118,119,140]],["festoolcanada.com",23],["dr-beckmann.com",23],["consent.ladbible.com",[24,25]],["consent.unilad.com",[24,25]],["consent.gamingbible.com",[24,25]],["consent.sportbible.com",[24,25]],["consent.tyla.com",[24,25]],["consent.ladbiblegroup.com",[24,25]],["m2o.it",26],["deejay.it",26],["capital.it",26],["ilmattino.it",[26,27]],["leggo.it",[26,27]],["libero.it",26],["tiscali.it",26],["consent-manager.ft.com",[28,29]],["tf1info.fr",32],["uber.com",33],["ubereats.com",33],["lego.com",34],["ai.meta.com",35],["publicsenat.fr",36],["lilly.com",37],["digi24.ro",41],["digisport.ro",41],["digitalfoundry.net",41],["egx.net",41],["eurogamer.it",41],["mail.com",41],["mcmcomiccon.com",41],["nintendolife.com",41],["oe24.at",41],["paxsite.com",41],["player.pl",41],["purexbox.com",41],["pushsquare.com",41],["starwarscelebration.com",41],["thehaul.com",41],["timeextension.com",41],["travelandleisure.com",41],["tunein.com",41],["videoland.com",41],["wizzair.com",41],["wetter.at",41],["dicebreaker.com",[42,43]],["eurogamer.cz",[42,43]],["eurogamer.es",[42,43]],["eurogamer.net",[42,43]],["eurogamer.nl",[42,43]],["eurogamer.pl",[42,43]],["eurogamer.pt",[42,43]],["gamesindustry.biz",[42,43]],["jelly.deals",[42,43]],["reedpop.com",[42,43]],["rockpapershotgun.com",[42,43]],["thepopverse.com",[42,43]],["vg247.com",[42,43]],["videogameschronicle.com",[42,43]],["eurogamer.de",44],["roadtovr.com",45],["mundodeportivo.com",[46,111]],["m.youtube.com",47],["www.youtube.com",47],["corriere.it",48],["gazzetta.it",48],["oggi.it",48],["cmp.sky.it",49],["tennisassa.fi",50],["formula1.com",51],["f1racing.pl",52],["consent-pref.trustarc.com",55],["highlights.legaseriea.it",56],["calciomercato.com",56],["sosfanta.com",57],["wetter.com",60],["youmath.it",61],["pip.gov.pl",62],["forbes.com",63],["dw.com",64],["winfuture.de",64],["lippu.fi",64],["racingnews365.com",64],["mediaset.it",65],["fortune.com",66],["cmp.dpgmedia.nl",[67,69]],["cmp.dpgmedia.be",[67,69]],["cmp.ad.nl",[67,69]],["cmp.autotrack.nl",[67,69]],["cmp.autoweek.nl",[67,69]],["cmp.bd.nl",[67,69]],["cmp.bndestem.nl",[67,69]],["cmp.demorgen.be",[67,69]],["cmp.deondernemer.nl",[67,69]],["cmp.destentor.nl",[67,69]],["cmp.ed.nl",[67,69]],["cmp.gaspedaal.nl",[67,69]],["cmp.gelderlander.nl",[67,69]],["cmp.hln.be",[67,69]],["cmp.humo.be",[67,69]],["cmp.margriet.nl",[67,69]],["cmp.nu.nl",[67,69]],["cmp.qmusic.nl",[67,69]],["cmp.stijlvol-wonen.com",[67,69]],["cmp.trouw.nl",[67,69]],["cmp.tubantia.nl",[67,69]],["cmp.vtwonen.be",[67,69]],["cmp.vtwonen.nl",[67,69]],["cmp.pzc.nl",[67,69]],["cmp.zozitdat.nl",[67,69]],["cmp-sp.vrt.be",[68,69]],["myprivacy.dpgmedia.nl",70],["dpgmediagroup.com",70],["story.nl",70],["veronicasuperguide.nl",70],["ilrestodelcarlino.it",71],["quotidiano.net",71],["lanazione.it",71],["ilgiorno.it",71],["iltelegrafolivorno.it",71],["frandroid.com",72],["nutri-plus.de",73],["aa.com",74],["consent.capital.fr",75],["programme-tv.net",75],["cmp.e24.no",[76,77]],["cmp.vg.no",[76,77]],["huffingtonpost.fr",78],["geopop.it",80],["fanpage.it",80],["rainews.it",81],["remarkable.com",82],["netzwelt.de",83],["money.it",84],["cmp.computerbild.de",86],["cmp-sp.siegener-zeitung.de",86],["cmp-sp.sportbuzzer.de",86],["eneco.nl",88],["deichmann.com",89],["blackpoolgazette.co.uk",90],["lep.co.uk",90],["northamptonchron.co.uk",90],["scotsman.com",90],["shieldsgazette.com",90],["thestar.co.uk",90],["portsmouth.co.uk",90],["sunderlandecho.com",90],["northernirelandworld.com",90],["3addedminutes.com",90],["anguscountyworld.co.uk",90],["banburyguardian.co.uk",90],["bedfordtoday.co.uk",90],["biggleswadetoday.co.uk",90],["bucksherald.co.uk",90],["burnleyexpress.net",90],["buxtonadvertiser.co.uk",90],["chad.co.uk",90],["daventryexpress.co.uk",90],["derbyshiretimes.co.uk",90],["derbyworld.co.uk",90],["derryjournal.com",90],["dewsburyreporter.co.uk",90],["doncasterfreepress.co.uk",90],["falkirkherald.co.uk",90],["fifetoday.co.uk",90],["glasgowworld.com",90],["halifaxcourier.co.uk",90],["harboroughmail.co.uk",90],["harrogateadvertiser.co.uk",90],["hartlepoolmail.co.uk",90],["hemeltoday.co.uk",90],["hucknalldispatch.co.uk",90],["lancasterguardian.co.uk",90],["leightonbuzzardonline.co.uk",90],["lincolnshireworld.com",90],["liverpoolworld.uk",90],["londonworld.com",90],["lutontoday.co.uk",90],["manchesterworld.uk",90],["meltontimes.co.uk",90],["miltonkeynes.co.uk",90],["newcastleworld.com",90],["newryreporter.com",90],["newsletter.co.uk",90],["northantstelegraph.co.uk",90],["northumberlandgazette.co.uk",90],["nottinghamworld.com",90],["peterboroughtoday.co.uk",90],["rotherhamadvertiser.co.uk",90],["stornowaygazette.co.uk",90],["surreyworld.co.uk",90],["thescarboroughnews.co.uk",90],["thesouthernreporter.co.uk",90],["totallysnookered.com",90],["wakefieldexpress.co.uk",90],["walesworld.com",90],["warwickshireworld.com",90],["wigantoday.net",90],["worksopguardian.co.uk",90],["yorkshireeveningpost.co.uk",90],["yorkshirepost.co.uk",90],["eurocard.com",91],["saseurobonusmastercard.se",92],["tver.jp",94],["linkedin.com",95],["elmundo.es",96],["mapillary.com",97],["cmp.seznam.cz",99],["raiplay.it",100],["derstandard.at",101],["derstandard.de",101],["ansa.it",102],["delladio.it",102],["huffingtonpost.it",102],["lastampa.it",102],["movieplayer.it",102],["multiplayer.it",102],["repubblica.it",102],["tomshw.it",102],["tuttoandroid.net",102],["tuttotech.net",102],["ilgazzettino.it",103],["ilmessaggero.it",103],["ilsecoloxix.it",103],["privacy.motorradonline.de",104],["dailystar.co.uk",[105,106,107,108]],["mirror.co.uk",[105,106,107,108]],["jeuxvideo.com",109],["idnes.cz",110],["20minutes.fr",111],["20minutos.es",111],["24sata.hr",111],["abc.es",111],["actu.fr",111],["antena3.com",111],["antena3internacional.com",111],["atresmedia.com",111],["atresmediapublicidad.com",111],["atresmediastudios.com",111],["atresplayer.com",111],["autopista.es",111],["belfasttelegraph.co.uk",111],["bonduelle.it",111],["bonniernews.se",111],["cadenaser.com",111],["ciclismoafondo.es",111],["cnews.fr",111],["cope.es",111],["correryfitness.com",111],["decathlon.nl",111],["decathlon.pl",111],["diepresse.com",111],["dnevnik.hr",111],["dumpert.nl",111],["ebuyclub.com",111],["edreams.de",111],["edreams.net",111],["elcomercio.es",111],["elconfidencial.com",111],["eldesmarque.com",111],["elespanol.com",111],["elpais.com",111],["elpais.es",111],["engadget.com",111],["euronews.com",111],["europafm.com",111],["expressen.se",111],["flooxernow.com",111],["france24.com",111],["ghacks.net",111],["gva.be",111],["hbvl.be",111],["krone.at",111],["kurier.at",111],["ladepeche.fr",111],["lalibre.be",111],["lasexta.com",111],["lasprovincias.es",111],["ledauphine.com",111],["lejdd.fr",111],["leparisien.fr",111],["lexpress.fr",111],["libremercado.com",111],["marmiton.org",111],["melodia-fm.com",111],["metronieuws.nl",111],["nicematin.com",111],["nieuwsblad.be",111],["numerama.com",111],["ondacero.es",111],["profil.at",111],["radiofrance.fr",111],["rankia.com",111],["rfi.fr",111],["rossmann.pl",111],["rtbf.be",111],["rtl.lu",111],["science-et-vie.com",111],["sensacine.com",111],["sfgame.net",111],["shure.com",111],["silicon.es",111],["sncf-connect.com",111],["sport.es",111],["techcrunch.com",111],["telegraaf.nl",111],["telequebec.tv",111],["trailrun.es",111],["video-streaming.orange.fr",111],["meteofrance.com",112],["ryobitools.eu",[113,114]],["americanexpress.com",115],["golem.de",116],["1und1.de",121],["infranken.de",122],["cmp.chip.de",123],["cmp.petbook.de",124],["estadiodeportivo.com",125],["kicker.de",126],["formulatv.com",127],["web.de",128],["lefigaro.fr",129],["linternaute.com",130],["consent.caminteresse.fr",131],["volksfreund.de",132],["dailypost.co.uk",133],["the-express.com",133],["tarife.mediamarkt.de",134],["saturn.de",135],["tweakers.net",[136,137]],["cmp-sp.goettinger-tageblatt.de",139],["sinergy.ch",141],["agglo-valais-central.ch",141],["biomedcentral.com",142],["hsbcnet.com",143],["hsbcinnovationbanking.com",143],["create.hsbc",143],["gbm.hsbc.com",143],["hsbc.co.uk",144],["internationalservices.hsbc.com",144],["history.hsbc.com",144],["about.hsbc.co.uk",145],["privatebanking.hsbc.com",146]]);

const entitiesMap = new Map([["consent.google",1],["festool",23],["hertz",30],["mediamarkt",31],["gmx",41],["music.amazon",[53,54]],["chrono24",[58,59]],["americanairlines",74],["degiro",120],["atlasformen",138],["hsbc",143]]);

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
