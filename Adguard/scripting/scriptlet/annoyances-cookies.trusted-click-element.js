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

const argsList = [[".didomi-continue-without-agreeing","","1000"],["form[action] button[jsname=\"tWT92d\"]"],["[action=\"https://consent.youtube.com/save\"][style=\"display:inline;\"] [name=\"set_eom\"][value=\"true\"] ~ .basebuttonUIModernization[value][aria-label]"],["[title=\"Manage Cookies\"]"],["[title=\"Reject All\"]","","1000"],["button.sp_choice_type_11"],["button[aria-label=\"Accept All\"]","","1000"],[".sp_choice_type_12[title=\"Options\"]"],["[title=\"REJECT ALL\"]","","500"],[".sp_choice_type_12[title=\"OPTIONS\"]"],["[title=\"Reject All\"]","","500"],["button[title=\"READ FOR FREE\"]","","1000"],[".terms-conditions button.transfer__button"],[".fides-consent-wall .fides-banner-button-group > button.fides-reject-all-button"],["button[title^=\"Consent\"]"],["button[title^=\"Einwilligen\"]"],["button.fides-reject-all-button","","500"],["button.reject-all"],[".cmp__dialog-footer-buttons > .is-secondary"],["button[onclick=\"IMOK()\"]","","500"],["a.btn--primary"],[".message-container.global-font button.message-button.no-children.focusable.button-font.sp_choice_type_12[title=\"MORE OPTIONS\""],["[data-choice=\"1683026410215\"]","","500"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]"],["button.sp_choice_type_12[title$=\"Settings\"]","","500"],["button[title=\"REJECT ALL\"]","","1000"],["button.iubenda-cs-customize-btn, button.iub-cmp-reject-btn, button#iubFooterBtn","","1000"],[".accept[onclick=\"cmpConsentWall.acceptAllCookies()\"]","","1000"],[".sp_choice_type_12[title=\"Manage Cookies\"]"],[".sp_choice_type_REJECT_ALL","","500"],["a.cc-dismiss","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000"],["button[title^=\"Continuer sans accepter\"]"],["button[data-tracking-name=\"cookie-preferences-mloi-initial-opt-out\"]"],["button[kind=\"secondary\"][data-test=\"cookie-necessary-button\"]","","1000"],["button[data-cookiebanner=\"accept_only_essential_button\"]","","1000"],[":is(.didomi-continue-without-agreeing, #didomi-notice-disagree-button)","","2000"],["button.cassie-reject-all","","1000"],[".sanoma-logo-container ~ .message-component.sticky-buttons button.sp_choice_type_12[title=\"Asetukset\"]"],[".sanoma-logo-container ~ .message-component.privacy-manager-tcfv2 .tcfv2-stack[title=\"Sanoman sisällönjakelukumppanit\"] button.pm-switch[aria-checked=\"false\"]"],[".sanoma-logo-container ~ .message-component button.sp_choice_type_SAVE_AND_EXIT[title=\"Tallenna\"]","","1500"],["#onetrust-accept-btn-handler","","1000"],["button[title=\"Accept and continue\"]"],["button[title=\"Accept All Cookies\"]"],[".accept-all"],["#CybotCookiebotDialogBodyButtonAccept"],["[data-paywall-notifier=\"consent-agreetoall\"]","","1000"],["ytd-button-renderer.ytd-consent-bump-v2-lightbox + ytd-button-renderer.ytd-consent-bump-v2-lightbox button[style][aria-label][title]","","1000"],["kpcf-cookie-toestemming >>> button[class=\"ohgs-button-primary-green\"]","","1000"],[".privacy-cp-wall #privacy-cp-wall-accept"],["button[aria-label=\"Continua senza accettare\"]"],["label[class=\"input-choice__label\"][for=\"CookiePurposes_1_\"], label[class=\"input-choice__label\"][for=\"CookiePurposes_2_\"], button.js-save[type=\"submit\"]"],["[aria-label=\"REJECT ALL\"]","","500"],["[href=\"/x-set-cookie/\"]"],["#dialogButton1"],["#overlay > div > #banner:has([href*=\"privacyprefs/\"]) music-button:last-of-type"],[".call"],["#cl-consent button[data-role=\"b_decline\"]"],["#privacy-cp-wall-accept"],["button.js-cookie-accept-all","","2000"],["button[data-label=\"accept-button\"]","","1000"],["#cmp-btn-accept","!cookie:/^gpt_ppid[^=]+=/","5000"],["button#pt-accept-all"],["[for=\"checkbox_niezbedne\"], [for=\"checkbox_spolecznosciowe\"], .btn-primary"],["[aria-labelledby=\"banner-title\"] > div[class^=\"buttons_\"] > button[class*=\"secondaryButton_\"] + button"],["#cmpwrapper >>> #cmpbntyestxt","","1000"],[".iubenda-cs-customize-btn, #iubFooterBtn"],[".privacy-popup > div > button","","2000"],[".pg-configure-button[title=\"Instellen\"]","","500"],["button.message-button[title=\"Mijn instellingen beheren\"]","","500"],["button[aria-checked=\"false\"][aria-label^=\"Social\"], button.sp_choice_type_SAVE_AND_EXIT","","500"],["#pg-shadow-host >>> #pg-configure-btn, #pg-shadow-host >>> #purpose-row-SOCIAL_MEDIA input[type=\"checkbox\"], #pg-shadow-host >>> button#pg-save-preferences-btn"],["#pubtech-cmp #pt-close"],[".didomi-continue-without-agreeing"],["#ccAcceptOnlyFunctional","","4000"],["button.optoutmulti_button","","2000"],["button[title=\"Accepter\"]"],[".btns-container > button[title=\"Tilpass\"]"],[".message-row > button[title=\"Avvis alle\"]","","2000"],["button[data-gdpr-expression=\"acceptAll\"]"],["button[title=\"Accept all\"i]"],[".gdpr-btn.small-right, .thirdlayer .gdpr-btn-lbl"],["span.as-oil__close-banner"],["button[data-cy=\"cookie-banner-necessary\"]"],["h2 ~ div[class^=\"_\"] > div[class^=\"_\"] > a[rel=\"noopener noreferrer\"][target=\"_self\"][class^=\"_\"]:only-child"],[".cky-btn-accept"],["button[aria-label=\"Agree\"]"],["button[title^=\"Alle akzeptieren\"]"],["button[data-label=\"Weigeren\"]","","500"],["button.decline-all","","1000"],["button[aria-label=\"I Accept\"]","","1000"],[".button--necessary-approve","","2000"],[".button--necessary-approve","","4000"],["button.agree-btn","","2000"],[".ReactModal__Overlay button[class*=\"terms-modal_done__\"]"],["button.cookie-consent__accept-button","","2000"],["button[id=\"ue-accept-notice-button\"]","","2000"],["#usercentrics-root >>> button[data-testid=\"uc-deny-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]","","1000"],["#usercentrics-root >>> button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"cookie-policy-banner-accept\"]","","500"],["button.accept-all","1000"],[".szn-cmp-dialog-container >>> button[data-testid=\"cw-button-agree-with-ads\"]","","2000"],["button[id=\"ue-accept-notice-button\"]","","1000"],[".as-oil__close-banner","","1000"],["button[title=\"Einverstanden\"]","","1000"],["button.iubenda-cs-accept-btn","","1000"],["button.iubenda-cs-close-btn"],["button[title=\"Akzeptieren und weiter\"]","","1000"],[".qc-cmp2-summary-buttons > button[mode=\"secondary\"]"],["[class^=\"qc-cmp2-buttons\"] > [data-tmdatatrack=\"privacy-other-save\"]","","1000"],["button[mode=\"primary\"][data-tmdatatrack=\"privacy-cookie\"]","","1000"],["button[class*=\"cipa-accept-btn\"]","","1000"],["button[onclick=\"Didomi.setUserAgreeToAll();\"]","","1000"],["a[href=\"javascript:Didomi.setUserAgreeToAll();\"]","","1000"],["#didomi-notice-agree-button","","1000"],["span.didomi-continue-without-agreeing","","1000"],["#onetrust-pc-btn-handler"],[".save-preference-btn-handler","","1000"],["button[data-testid=\"granular-banner-button-decline-all\"]","","1000"],["button[title*=\"Zustimmen\"]","","1000"],["button[aria-label*=\"Aceptar\"]","","1000"],["button[title*=\"Accept\"]","","1000"],["button[title*=\"AGREE\"]","","1000"],["#CybotCookiebotDialogBodyButtonDecline"],["button#consent_wall_optin"],["span#cmpbntyestxt","","1000"],["button[title=\"Akzeptieren\"]","","1000"],["button#btn-gdpr-accept"],["a[href][onclick=\"ov.cmp.acceptAllConsents()\"]","","1000"],["button.fc-primary-button","","1000"],["button[data-id=\"save-all-pur\"]","","1000"],["button.button__acceptAll"],["button.button__skip"],["button.accept-button"],["custom-button[id=\"consentAccept\"]","","1000"],["button[mode=\"primary\"]"],["a.cmptxt_btn_no","","1000"],["button[data-test=\"pwa-consent-layer-save-settings\"]","","1000]"],["[target=\"_self\"][type=\"button\"][class=\"_3kalix4\"]","","1000"],["button[type=\"button\"][class=\"_button_15feu_3\"]","","1000"],["[target=\"_self\"][type=\"button\"][class=\"_10qqh8uq\"]","","1000"],["#pg-shadow-root-host >>> button#pg-reject-btn"],["#pg-shadow-root-host >>> button#pg-configure-btn"],["button[data-reject-all]","","1000"],["button[title=\"Einwilligen und weiter\"]","","1000"],["button[title=\"Dismiss\"]"],["button.refuseAll","","1000"],["button[data-cc-action=\"accept\"]","","1000"],["button[id=\"teal-consent-prompt-submit\"]","","1000"],["button[id=\"consent_prompt_submit\"]","","1000"],["button[name=\"accept\"]","","1000"],["button[id=\"consent_prompt_decline\"]","","1000"],["button[data-tpl-type=\"Button\"]","","1000"],["button[data-tracking-name=\"cookie-preferences-sloo-opt-out\"]"],["button[title=\"ACCEPT\"]"],["button[title=\"SAVE AND EXIT\"]"],["button[id=\"explicit-consent-prompt-reject\"]","","1000"],["button[data-testid=\"uc-button-accept-and-close\"]","","1000"],["[data-testid=\"submit-login-button\"].decline-consent","","1000"],["button[type=\"submit\"].btn-deny","","1000"],["a.cmptxt_btn_yes"],["button[data-action=\"adverts#accept\"]","","1000"],[".cmp-accept","","2500"],["[data-testid=\"consent-necessary\"]"],["button[id=\"onetrust-reject-all-handler\"]","","1000"],["div[class=\"t_cm_ec_reject_button\"]","","1000"],["button[aria-label=\"نعم انا موافق\"]"],["button[title=\"Agree\"]","","1000"],["button[aria-label=\"Close\"]","","1000"],["button.sc-9a9fe76b-0.jgpQHZ","","1000"],["button[data-auto-id=\"glass-gdpr-default-consent-reject-button\"]","","1000"],["button[aria-label=\"Prijať všetko\"]"],["#usercentrics-root >>> button[data-testid=\"uc-accept-all-button\"]"],["a.cc-btn.cc-allow","","1000"]];

const hostnamesMap = new Map([["auto.it",0],["consent.youtube.com",[1,2]],["sourcepointcmp.bloomberg.com",[3,4,5]],["sourcepointcmp.bloomberg.co.jp",[3,4,5]],["giga.de",5],["bloomberg.com",6],["cmpv2.standard.co.uk",[7,8]],["cmpv2.independent.co.uk",[9,10,11]],["wetransfer.com",[12,13]],["spiegel.de",[14,15]],["nytimes.com",[16,153]],["consent.yahoo.com",17],["tumblr.com",18],["fplstatistics.co.uk",19],["e-shop.leonidas.com",20],["cdn.privacy-mgmt.com",[21,22,38,39,40,80,86,87,93,101,120,121,122,123,146,167]],["festoolcanada.com",23],["dr-beckmann.com",23],["consent.ladbible.com",[24,25]],["consent.unilad.com",[24,25]],["consent.gamingbible.com",[24,25]],["consent.sportbible.com",[24,25]],["consent.tyla.com",[24,25]],["consent.ladbiblegroup.com",[24,25]],["m2o.it",26],["deejay.it",26],["capital.it",26],["ilmattino.it",[26,27]],["leggo.it",[26,27]],["libero.it",26],["tiscali.it",26],["consent-manager.ft.com",[28,29]],["tf1info.fr",32],["uber.com",[33,154]],["ubereats.com",33],["lego.com",34],["ai.meta.com",35],["publicsenat.fr",36],["lilly.com",37],["digi24.ro",41],["digisport.ro",41],["digitalfoundry.net",41],["egx.net",41],["eurogamer.it",41],["mail.com",41],["mcmcomiccon.com",41],["nachrichten.at",41],["nintendolife.com",41],["oe24.at",41],["paxsite.com",41],["peacocktv.com",41],["player.pl",41],["purexbox.com",41],["pushsquare.com",41],["southparkstudios.com",41],["starwarscelebration.com",41],["thehaul.com",41],["timeextension.com",41],["travelandleisure.com",41],["tunein.com",41],["videoland.com",41],["wizzair.com",41],["wetter.at",41],["dicebreaker.com",[42,43]],["eurogamer.cz",[42,43]],["eurogamer.es",[42,43]],["eurogamer.net",[42,43]],["eurogamer.nl",[42,43]],["eurogamer.pl",[42,43]],["eurogamer.pt",[42,43]],["gamesindustry.biz",[42,43]],["jelly.deals",[42,43]],["reedpop.com",[42,43]],["rockpapershotgun.com",[42,43]],["thepopverse.com",[42,43]],["vg247.com",[42,43]],["videogameschronicle.com",[42,43]],["eurogamer.de",44],["roadtovr.com",45],["mundodeportivo.com",[46,115]],["m.youtube.com",47],["www.youtube.com",47],["ohra.nl",48],["corriere.it",49],["gazzetta.it",49],["oggi.it",49],["cmp.sky.it",50],["tennisassa.fi",51],["formula1.com",52],["f1racing.pl",53],["consent-pref.trustarc.com",56],["highlights.legaseriea.it",57],["calciomercato.com",57],["sosfanta.com",58],["wetter.com",61],["youmath.it",62],["pip.gov.pl",63],["forbes.com",64],["dw.com",65],["winfuture.de",65],["lippu.fi",65],["racingnews365.com",65],["mediaset.it",66],["fortune.com",67],["cmp.dpgmedia.nl",[68,70]],["cmp.dpgmedia.be",[68,70]],["cmp.ad.nl",[68,70]],["cmp.autotrack.nl",[68,70]],["cmp.autoweek.nl",[68,70]],["cmp.bd.nl",[68,70]],["cmp.bndestem.nl",[68,70]],["cmp.demorgen.be",[68,70]],["cmp.deondernemer.nl",[68,70]],["cmp.destentor.nl",[68,70]],["cmp.ed.nl",[68,70]],["cmp.gaspedaal.nl",[68,70]],["cmp.gelderlander.nl",[68,70]],["cmp.hln.be",[68,70]],["cmp.humo.be",[68,70]],["cmp.margriet.nl",[68,70]],["cmp.nu.nl",[68,70]],["cmp.qmusic.nl",[68,70]],["cmp.stijlvol-wonen.com",[68,70]],["cmp.trouw.nl",[68,70]],["cmp.tubantia.nl",[68,70]],["cmp.vtwonen.be",[68,70]],["cmp.vtwonen.nl",[68,70]],["cmp.pzc.nl",[68,70]],["cmp.zozitdat.nl",[68,70]],["cmp-sp.vrt.be",[69,70]],["myprivacy.dpgmedia.nl",71],["dpgmediagroup.com",71],["story.nl",71],["veronicasuperguide.nl",71],["ilrestodelcarlino.it",72],["quotidiano.net",72],["lanazione.it",72],["ilgiorno.it",72],["iltelegrafolivorno.it",72],["frandroid.com",73],["nutri-plus.de",74],["aa.com",75],["consent.capital.fr",76],["programme-tv.net",76],["cmp.e24.no",[77,78]],["cmp.vg.no",[77,78]],["huffingtonpost.fr",79],["geopop.it",81],["fanpage.it",81],["rainews.it",82],["remarkable.com",83],["netzwelt.de",84],["money.it",85],["cmp.computerbild.de",87],["cmp.petbook.de",87],["cmp-sp.siegener-zeitung.de",87],["cmp-sp.sportbuzzer.de",87],["klarmobil.de",87],["eneco.nl",88],["deichmann.com",89],["blackpoolgazette.co.uk",90],["lep.co.uk",90],["northamptonchron.co.uk",90],["scotsman.com",90],["shieldsgazette.com",90],["thestar.co.uk",90],["portsmouth.co.uk",90],["sunderlandecho.com",90],["northernirelandworld.com",90],["3addedminutes.com",90],["anguscountyworld.co.uk",90],["banburyguardian.co.uk",90],["bedfordtoday.co.uk",90],["biggleswadetoday.co.uk",90],["bucksherald.co.uk",90],["burnleyexpress.net",90],["buxtonadvertiser.co.uk",90],["chad.co.uk",90],["daventryexpress.co.uk",90],["derbyshiretimes.co.uk",90],["derbyworld.co.uk",90],["derryjournal.com",90],["dewsburyreporter.co.uk",90],["doncasterfreepress.co.uk",90],["falkirkherald.co.uk",90],["fifetoday.co.uk",90],["glasgowworld.com",90],["halifaxcourier.co.uk",90],["harboroughmail.co.uk",90],["harrogateadvertiser.co.uk",90],["hartlepoolmail.co.uk",90],["hemeltoday.co.uk",90],["hucknalldispatch.co.uk",90],["lancasterguardian.co.uk",90],["leightonbuzzardonline.co.uk",90],["lincolnshireworld.com",90],["liverpoolworld.uk",90],["londonworld.com",90],["lutontoday.co.uk",90],["manchesterworld.uk",90],["meltontimes.co.uk",90],["miltonkeynes.co.uk",90],["newcastleworld.com",90],["newryreporter.com",90],["newsletter.co.uk",90],["northantstelegraph.co.uk",90],["northumberlandgazette.co.uk",90],["nottinghamworld.com",90],["peterboroughtoday.co.uk",90],["rotherhamadvertiser.co.uk",90],["stornowaygazette.co.uk",90],["surreyworld.co.uk",90],["thescarboroughnews.co.uk",90],["thesouthernreporter.co.uk",90],["totallysnookered.com",90],["wakefieldexpress.co.uk",90],["walesworld.com",90],["warwickshireworld.com",90],["wigantoday.net",90],["worksopguardian.co.uk",90],["yorkshireeveningpost.co.uk",90],["yorkshirepost.co.uk",90],["eurocard.com",91],["saseurobonusmastercard.se",92],["tver.jp",94],["linkedin.com",95],["elmundo.es",96],["srf.ch",97],["alternate.de",97],["bayer04.de",97],["douglas.de",97],["falke.com",97],["flaschenpost.de",97],["hornbach.nl",97],["postbank.de",97],["immowelt.de",98],["morenutrition.de",98],["moebel24.ch",[99,158]],["meubles.fr",99],["meubelo.nl",99],["moebel.de",99],["mapillary.com",100],["cmp.seznam.cz",102],["marca.com",103],["raiplay.it",104],["derstandard.at",105],["derstandard.de",105],["ansa.it",106],["delladio.it",106],["huffingtonpost.it",106],["lastampa.it",106],["movieplayer.it",106],["multiplayer.it",106],["repubblica.it",106],["tomshw.it",106],["tuttoandroid.net",106],["tuttotech.net",106],["ilgazzettino.it",107],["ilmessaggero.it",107],["ilsecoloxix.it",107],["privacy.motorradonline.de",108],["dailystar.co.uk",[109,110,111,112]],["mirror.co.uk",[109,110,111,112]],["jeuxvideo.com",113],["idnes.cz",114],["20minutes.fr",115],["20minutos.es",115],["24sata.hr",115],["abc.es",115],["actu.fr",115],["antena3.com",115],["antena3internacional.com",115],["atresmedia.com",115],["atresmediapublicidad.com",115],["atresmediastudios.com",115],["atresplayer.com",115],["autopista.es",115],["belfasttelegraph.co.uk",115],["bonduelle.it",115],["bonniernews.se",115],["cadenaser.com",115],["ciclismoafondo.es",115],["cnews.fr",115],["cope.es",115],["correryfitness.com",115],["decathlon.nl",115],["decathlon.pl",115],["diepresse.com",115],["dnevnik.hr",115],["dumpert.nl",115],["ebuyclub.com",115],["edreams.de",115],["edreams.net",115],["elcomercio.es",115],["elconfidencial.com",115],["eldesmarque.com",115],["elespanol.com",115],["elpais.com",115],["elpais.es",115],["engadget.com",115],["euronews.com",115],["europafm.com",115],["expressen.se",115],["flooxernow.com",115],["france24.com",115],["ghacks.net",115],["gva.be",115],["hbvl.be",115],["krone.at",115],["kurier.at",115],["ladepeche.fr",115],["lalibre.be",115],["lasexta.com",115],["lasprovincias.es",115],["ledauphine.com",115],["lejdd.fr",115],["leparisien.fr",115],["lexpress.fr",115],["libremercado.com",115],["marmiton.org",115],["melodia-fm.com",115],["metronieuws.nl",115],["nicematin.com",115],["nieuwsblad.be",115],["numerama.com",115],["ondacero.es",115],["profil.at",115],["radiofrance.fr",115],["rankia.com",115],["rfi.fr",115],["rossmann.pl",115],["rtbf.be",115],["rtl.lu",115],["science-et-vie.com",115],["sensacine.com",115],["sfgame.net",115],["shure.com",115],["silicon.es",115],["sncf-connect.com",115],["sport.es",115],["techcrunch.com",115],["telegraaf.nl",115],["telequebec.tv",115],["trailrun.es",115],["video-streaming.orange.fr",115],["meteofrance.com",116],["ryobitools.eu",[117,118]],["americanexpress.com",119],["golem.de",120],["1und1.de",125],["infranken.de",126],["cmp.chip.de",127],["estadiodeportivo.com",128],["kicker.de",129],["formulatv.com",130],["web.de",131],["lefigaro.fr",132],["linternaute.com",133],["consent.caminteresse.fr",134],["volksfreund.de",135],["dailypost.co.uk",136],["the-express.com",136],["tarife.mediamarkt.de",137],["saturn.de",138],["eltiempo.es",[139,140]],["otempo.pt",141],["tweakers.net",[142,143]],["cmp-sp.goettinger-tageblatt.de",145],["privacy.maennersache.de",145],["sinergy.ch",147],["agglo-valais-central.ch",147],["biomedcentral.com",148],["hsbcnet.com",149],["hsbcinnovationbanking.com",149],["create.hsbc",149],["gbm.hsbc.com",149],["hsbc.co.uk",150],["internationalservices.hsbc.com",150],["history.hsbc.com",150],["about.hsbc.co.uk",151],["privatebanking.hsbc.com",152],["independent.co.uk",155],["the-independent.com",156],["argos.co.uk",157],["poco.de",158],["lipo.ch",159],["schubiger.ch",160],["gutefrage.net",161],["pdfupload.io",162],["gamestar.de",163],["verksamt.se",164],["booking.com",165],["pluto.tv",165],["here.com",166],["cmp.heise.de",168],["zara.com",169],["negociardivida.spcbrasil.org.br",170],["privacy.topreality.sk",172],["s-pankki.fi",173],["vu.lt",174]]);

const entitiesMap = new Map([["consent.google",1],["festool",23],["hertz",30],["mediamarkt",31],["gmx",41],["music.amazon",[54,55]],["chrono24",[59,60]],["kinepolis",65],["americanairlines",75],["joyn",98],["degiro",124],["atlasformen",144],["hsbc",149],["moebelix",158],["moemax",158],["xxxlutz",158],["adidas",171]]);

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
