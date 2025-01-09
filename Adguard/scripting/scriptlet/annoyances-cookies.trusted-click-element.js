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

const argsList = [[".didomi-continue-without-agreeing","","1000"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["div[aria-label=\"Decline optional cookies\"]","","1000"],["button._a9_1","","1000"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],[":is(.didomi-continue-without-agreeing, #didomi-notice-disagree-button)","","2000"],["button.cassie-reject-all","","1000"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],[".gdpr-btn.small-right, .thirdlayer .gdpr-btn-lbl"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["span.didomi-continue-without-agreeing","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["#pg-shadow-root-host >>> button#pg-reject-btn"],["#pg-shadow-root-host >>> button#pg-configure-btn"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]"],["a.cc-btn.cc-allow","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"primary\"]","","2000"],["button[class*=\"cipa-accept-btn\"]","","2000"],["button[data-js=\"cookieConsentReject\"]","","1000"],["button[title*=\"Jetzt\"]","","1000"],["a[id=\"consent_prompt_decline\"]","","1000"],["button[id=\"cm-acceptNone\"]","","1000"],["button.brlbs-btn-accept-only-essential","","1000"],["button[id=\"didomi-notice-disagree-button\"]","","1000"],["button[title=\"Alle akzeptieren\"]","","1000"],["button.cookie-notice__button--dismiss","","1000"]];

const hostnamesMap = new Map([["auto.it",0],["consent.youtube.com",[1,2]],["facebook.com",3],["instagram.com",4],["sourcepointcmp.bloomberg.com",[5,6,7]],["sourcepointcmp.bloomberg.co.jp",[5,6,7]],["giga.de",7],["bloomberg.com",8],["forbes.com",[8,66]],["cmpv2.standard.co.uk",[9,10]],["cmpv2.independent.co.uk",[11,12,13]],["wetransfer.com",[14,15]],["spiegel.de",[16,17]],["nytimes.com",[18,155]],["consent.yahoo.com",19],["tumblr.com",20],["fplstatistics.co.uk",21],["e-shop.leonidas.com",22],["cdn.privacy-mgmt.com",[23,24,40,41,42,82,88,89,95,103,122,123,124,125,148,169,180]],["festoolcanada.com",25],["dr-beckmann.com",25],["consent.ladbible.com",[26,27]],["consent.unilad.com",[26,27]],["consent.gamingbible.com",[26,27]],["consent.sportbible.com",[26,27]],["consent.tyla.com",[26,27]],["consent.ladbiblegroup.com",[26,27]],["m2o.it",28],["deejay.it",28],["capital.it",28],["ilmattino.it",[28,29]],["leggo.it",[28,29]],["libero.it",28],["tiscali.it",28],["consent-manager.ft.com",[30,31]],["mediaworld.it",33],["tf1info.fr",34],["uber.com",[35,156]],["ubereats.com",35],["lego.com",36],["ai.meta.com",37],["publicsenat.fr",38],["lilly.com",39],["digi24.ro",43],["digisport.ro",43],["digitalfoundry.net",43],["egx.net",43],["eurogamer.it",43],["mail.com",43],["mcmcomiccon.com",43],["nachrichten.at",43],["nintendolife.com",43],["oe24.at",43],["paxsite.com",43],["peacocktv.com",43],["player.pl",43],["purexbox.com",43],["pushsquare.com",43],["southparkstudios.com",43],["starwarscelebration.com",43],["thehaul.com",43],["timeextension.com",43],["travelandleisure.com",43],["tunein.com",43],["videoland.com",43],["wizzair.com",43],["wetter.at",43],["dicebreaker.com",[44,45]],["eurogamer.cz",[44,45]],["eurogamer.es",[44,45]],["eurogamer.net",[44,45]],["eurogamer.nl",[44,45]],["eurogamer.pl",[44,45]],["eurogamer.pt",[44,45]],["gamesindustry.biz",[44,45]],["jelly.deals",[44,45]],["reedpop.com",[44,45]],["rockpapershotgun.com",[44,45]],["thepopverse.com",[44,45]],["vg247.com",[44,45]],["videogameschronicle.com",[44,45]],["eurogamer.de",46],["roadtovr.com",47],["mundodeportivo.com",[48,117]],["m.youtube.com",49],["www.youtube.com",49],["ohra.nl",50],["corriere.it",51],["gazzetta.it",51],["oggi.it",51],["cmp.sky.it",52],["tennisassa.fi",53],["formula1.com",54],["f1racing.pl",55],["consent-pref.trustarc.com",58],["highlights.legaseriea.it",59],["calciomercato.com",59],["sosfanta.com",60],["wetter.com",63],["youmath.it",64],["pip.gov.pl",65],["dw.com",67],["winfuture.de",67],["lippu.fi",67],["racingnews365.com",67],["mediaset.it",68],["fortune.com",69],["cmp.dpgmedia.nl",[70,72]],["cmp.dpgmedia.be",[70,72]],["cmp.ad.nl",[70,72]],["cmp.autotrack.nl",[70,72]],["cmp.autoweek.nl",[70,72]],["cmp.bd.nl",[70,72]],["cmp.bndestem.nl",[70,72]],["cmp.demorgen.be",[70,72]],["cmp.deondernemer.nl",[70,72]],["cmp.destentor.nl",[70,72]],["cmp.ed.nl",[70,72]],["cmp.gaspedaal.nl",[70,72]],["cmp.gelderlander.nl",[70,72]],["cmp.hln.be",[70,72]],["cmp.humo.be",[70,72]],["cmp.margriet.nl",[70,72]],["cmp.nu.nl",[70,72]],["cmp.qmusic.nl",[70,72]],["cmp.stijlvol-wonen.com",[70,72]],["cmp.trouw.nl",[70,72]],["cmp.tubantia.nl",[70,72]],["cmp.vtwonen.be",[70,72]],["cmp.vtwonen.nl",[70,72]],["cmp.pzc.nl",[70,72]],["cmp.zozitdat.nl",[70,72]],["cmp-sp.vrt.be",[71,72]],["myprivacy.dpgmedia.nl",73],["dpgmediagroup.com",73],["story.nl",73],["veronicasuperguide.nl",73],["ilrestodelcarlino.it",74],["quotidiano.net",74],["lanazione.it",74],["ilgiorno.it",74],["iltelegrafolivorno.it",74],["frandroid.com",75],["nutri-plus.de",76],["aa.com",77],["consent.capital.fr",78],["programme-tv.net",78],["cmp.e24.no",[79,80]],["cmp.vg.no",[79,80]],["huffingtonpost.fr",81],["geopop.it",83],["fanpage.it",83],["rainews.it",84],["remarkable.com",85],["netzwelt.de",86],["money.it",87],["cmp.computerbild.de",89],["cmp.petbook.de",89],["cmp-sp.siegener-zeitung.de",89],["cmp-sp.sportbuzzer.de",89],["klarmobil.de",89],["eneco.nl",90],["deichmann.com",91],["blackpoolgazette.co.uk",92],["lep.co.uk",92],["northamptonchron.co.uk",92],["scotsman.com",92],["shieldsgazette.com",92],["thestar.co.uk",92],["portsmouth.co.uk",92],["sunderlandecho.com",92],["northernirelandworld.com",92],["3addedminutes.com",92],["anguscountyworld.co.uk",92],["banburyguardian.co.uk",92],["bedfordtoday.co.uk",92],["biggleswadetoday.co.uk",92],["bucksherald.co.uk",92],["burnleyexpress.net",92],["buxtonadvertiser.co.uk",92],["chad.co.uk",92],["daventryexpress.co.uk",92],["derbyshiretimes.co.uk",92],["derbyworld.co.uk",92],["derryjournal.com",92],["dewsburyreporter.co.uk",92],["doncasterfreepress.co.uk",92],["falkirkherald.co.uk",92],["fifetoday.co.uk",92],["glasgowworld.com",92],["halifaxcourier.co.uk",92],["harboroughmail.co.uk",92],["harrogateadvertiser.co.uk",92],["hartlepoolmail.co.uk",92],["hemeltoday.co.uk",92],["hucknalldispatch.co.uk",92],["lancasterguardian.co.uk",92],["leightonbuzzardonline.co.uk",92],["lincolnshireworld.com",92],["liverpoolworld.uk",92],["londonworld.com",92],["lutontoday.co.uk",92],["manchesterworld.uk",92],["meltontimes.co.uk",92],["miltonkeynes.co.uk",92],["newcastleworld.com",92],["newryreporter.com",92],["newsletter.co.uk",92],["northantstelegraph.co.uk",92],["northumberlandgazette.co.uk",92],["nottinghamworld.com",92],["peterboroughtoday.co.uk",92],["rotherhamadvertiser.co.uk",92],["stornowaygazette.co.uk",92],["surreyworld.co.uk",92],["thescarboroughnews.co.uk",92],["thesouthernreporter.co.uk",92],["totallysnookered.com",92],["wakefieldexpress.co.uk",92],["walesworld.com",92],["warwickshireworld.com",92],["wigantoday.net",92],["worksopguardian.co.uk",92],["yorkshireeveningpost.co.uk",92],["yorkshirepost.co.uk",92],["eurocard.com",93],["saseurobonusmastercard.se",94],["tver.jp",96],["linkedin.com",97],["elmundo.es",98],["srf.ch",99],["alternate.de",99],["bayer04.de",99],["douglas.de",99],["falke.com",99],["flaschenpost.de",99],["hornbach.nl",99],["postbank.de",99],["immowelt.de",100],["morenutrition.de",100],["moebel24.ch",[101,160]],["meubles.fr",101],["meubelo.nl",101],["moebel.de",101],["mapillary.com",102],["cmp.seznam.cz",104],["marca.com",105],["raiplay.it",106],["derstandard.at",107],["derstandard.de",107],["ansa.it",108],["delladio.it",108],["huffingtonpost.it",108],["lastampa.it",108],["movieplayer.it",108],["multiplayer.it",108],["repubblica.it",108],["tomshw.it",108],["tuttoandroid.net",108],["tuttotech.net",108],["ilgazzettino.it",109],["ilmessaggero.it",109],["ilsecoloxix.it",109],["privacy.motorradonline.de",110],["dailystar.co.uk",[111,112,113,114]],["mirror.co.uk",[111,112,113,114]],["jeuxvideo.com",115],["idnes.cz",116],["20minutes.fr",117],["20minutos.es",117],["24sata.hr",117],["abc.es",117],["actu.fr",117],["antena3.com",117],["antena3internacional.com",117],["atresmedia.com",117],["atresmediapublicidad.com",117],["atresmediastudios.com",117],["atresplayer.com",117],["autopista.es",117],["belfasttelegraph.co.uk",117],["bonduelle.it",117],["bonniernews.se",117],["cadenaser.com",117],["ciclismoafondo.es",117],["cnews.fr",117],["cope.es",117],["correryfitness.com",117],["decathlon.nl",117],["decathlon.pl",117],["diepresse.com",117],["dnevnik.hr",117],["dumpert.nl",117],["ebuyclub.com",117],["edreams.de",117],["edreams.net",117],["elcomercio.es",117],["elconfidencial.com",117],["eldesmarque.com",117],["elespanol.com",117],["elpais.com",117],["elpais.es",117],["engadget.com",117],["euronews.com",117],["europafm.com",117],["expressen.se",117],["flooxernow.com",117],["france24.com",117],["ghacks.net",117],["gva.be",117],["hbvl.be",117],["krone.at",117],["kurier.at",117],["ladepeche.fr",117],["lalibre.be",117],["lasexta.com",117],["lasprovincias.es",117],["ledauphine.com",117],["lejdd.fr",117],["leparisien.fr",117],["lexpress.fr",117],["libremercado.com",117],["marmiton.org",117],["melodia-fm.com",117],["metronieuws.nl",117],["nicematin.com",117],["nieuwsblad.be",117],["numerama.com",117],["ondacero.es",117],["profil.at",117],["radiofrance.fr",117],["rankia.com",117],["rfi.fr",117],["rossmann.pl",117],["rtbf.be",117],["rtl.lu",117],["science-et-vie.com",117],["sensacine.com",117],["sfgame.net",117],["shure.com",117],["silicon.es",117],["sncf-connect.com",117],["sport.es",117],["techcrunch.com",117],["telegraaf.nl",117],["telequebec.tv",117],["trailrun.es",117],["video-streaming.orange.fr",117],["meteofrance.com",118],["ryobitools.eu",[119,120]],["americanexpress.com",121],["golem.de",122],["1und1.de",127],["infranken.de",128],["cmp.chip.de",129],["estadiodeportivo.com",130],["kicker.de",131],["formulatv.com",132],["web.de",133],["lefigaro.fr",134],["linternaute.com",135],["consent.caminteresse.fr",136],["volksfreund.de",137],["dailypost.co.uk",138],["the-express.com",138],["tarife.mediamarkt.de",139],["saturn.de",140],["eltiempo.es",[141,142]],["otempo.pt",143],["tweakers.net",[144,145]],["cmp-sp.goettinger-tageblatt.de",147],["privacy.maennersache.de",147],["sinergy.ch",149],["agglo-valais-central.ch",149],["biomedcentral.com",150],["hsbcnet.com",151],["hsbcinnovationbanking.com",151],["create.hsbc",151],["gbm.hsbc.com",151],["hsbc.co.uk",152],["internationalservices.hsbc.com",152],["history.hsbc.com",152],["about.hsbc.co.uk",153],["privatebanking.hsbc.com",154],["independent.co.uk",157],["the-independent.com",158],["argos.co.uk",159],["poco.de",160],["lipo.ch",161],["schubiger.ch",162],["gutefrage.net",163],["pdfupload.io",164],["gamestar.de",165],["verksamt.se",166],["booking.com",167],["groceries.asda.com",167],["pluto.tv",167],["here.com",168],["cmp.heise.de",170],["zara.com",171],["negociardivida.spcbrasil.org.br",172],["privacy.topreality.sk",174],["s-pankki.fi",175],["vu.lt",176],["adnkronos.com",[177,178]],["cornwalllive.com",[177,178]],["cyprus-mail.com",[177,178]],["informazione.it",[177,178]],["mymovies.it",[177,178]],["tuttoeuropei.com",[177,178]],["video.lacnews24.it",[177,178]],["taxscouts.com",179],["online.no",181],["austrian.com",182],["hornetsecurity.com",183],["standaard.be",184],["cmp.bz-berlin.de",185],["bruendl.at",186]]);

const entitiesMap = new Map([["consent.google",1],["festool",25],["hertz",32],["mediamarkt",33],["gmx",43],["music.amazon",[56,57]],["chrono24",[61,62]],["kinepolis",67],["americanairlines",77],["joyn",100],["degiro",126],["atlasformen",146],["hsbc",151],["moebelix",160],["moemax",160],["xxxlutz",160],["adidas",173]]);

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
        const assertions = safe.String_split.call(extraMatch, ',').map(s => {
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

    const selectorList = safe.String_split.call(selectors, /\s*,\s*/)
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
    const safe = safeSelf();
    return safe.String_split.call(document.cookie, /\s*;\s*/).map(s => {
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
