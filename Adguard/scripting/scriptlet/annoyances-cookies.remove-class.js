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
/* global cloneInto */

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeClass = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["js-cookie-consent-popup","","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["brd_cookies_bar_popup_shown","html","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["with-dark","","stay"],["show--consent","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["ooekultur.at",3],["igmetall.de",4],["osprey.com",5],["ivass.it",6],["onelottery.co.uk",7],["yourschoollottery.co.uk",7],["rainbowlottery.co.uk",7],["idg.se",8],["gearaid.com",9],["buildex.cz",10],["gruenderservice.at",11],["caiacosmetics.com",12],["pdc-big.nl",13],["pdc-big.it",13],["pdc-big.ie",13],["pdc-big.fr",13],["pdc-big.es",13],["pdc-big.be",13],["pdc-big.at",13],["pdc-big.co.uk",13],["pdc-big.de",13],["pdc-big.com",13],["elio-systems.io",[14,21]],["sanha.com",[14,21]],["recettesetcabas.com",15],["flinders.edu.au",16],["opera.com",17],["groningenairport.nl",18],["crocs.co.uk",[19,20]],["crocs.eu",[19,20]],["crocs.nl",[19,20]],["crocs.fi",[19,20]],["crocs.fr",[19,20]],["crocs.de",[19,20]],["rappjmed.ch",22],["stilord.fr",23],["stilord.it",23],["stilord.de",23],["stilord.es",23],["dasfutterhaus.at",24],["developer.paypal.com",25],["cpc2r.ch",26],["zen.com",27],["tecsafe.de",28],["foxracingshox.de",28],["stromnetz.berlin",29],["websummit.com",30],["thehustle.co",30],["epochtimes.fr",31],["ajbell.co.uk",32],["economiapertutti.bancaditalia.it",33],["quantamagazine.org",34],["tradersunion.com",34],["phsgreenleaf.co.uk",35],["phswashrooms.ie",35],["mccolls.co.uk",[36,37]],["crt.hr",38],["yourstorebox.com",39],["clickskeks.at",[40,41]],["housell.com",42],["lactostop.de",43],["mibe.de",43],["spilger.de",44],["dbs.si",45],["abcya.com",46],["umicore.be",47],["umicore.fi",47],["umicore.ca",47],["jongcdenv.be",47],["umicore.jp",47],["umicore.cn",47],["umicore.pl",47],["umicore.kr",47],["umicore.co.th",47],["umicore.fr",47],["umicore.de",47],["donneurdecellulessouches.be",47],["stammzellenspender.be",47],["stemcelldonor.be",47],["umicore.com",47],["umicore.com.br",47],["koenvandenheuvel.be",47],["stamceldonor.be",47],["nahima.be",47],["catused.com",48],["eujuicers.cz",49],["graziellawicki.com",50],["funnelcockpit.com",50],["dnk.nl",51],["eam.de",52],["eam-netz.de",52],["tvp.pl",53],["cellardoor.co",54],["ampire.de",55],["verpackungsstadl.ch",55],["imkershoperzgebirge.de",55],["modellbahndealer.de",55],["tillit-bikes.shop",55],["bike-onlineshop.de",55],["futspo.de",55],["compravo.de",55],["perpedale.de",55],["modellbau-jung.de",55],["verpackungsstadl.at",55],["modellbau-vordermaier.de",55],["bike-supply.de",55],["wroc.pl",56],["basenio.de",57],["fm-systeme.de",58],["gartenhotel-crystal.at",59],["swffm.de",59],["studentenwerkfrankfurt.de",59],["dmsg.de",59],["bgk.pl",59],["pflegezeit-berlin.de",59],["gpd-nordost-onlineberatung.de",59],["proabschluss-beratung.de",59],["hilfe-telefon-missbrauch.online",59],["dww-suchtberatung.de",59],["cyberforum.de",59],["gutscheine.eurothermen.at",59],["wolff-mueller.de",59],["ras.bz.it",59],["technoalpin.com",59],["wifiwien.at",[60,61]],["wifikaernten.at",[60,61]],["wifi.at",[60,61]],["pdf-archive.com",61],["5asec.pt",62],["tui.dk",62],["tui.fi",62],["tui.no",62],["tui.se",62],["salvagny.org",62],["leslipfrancais.fr",62],["rb-os.de",[62,125]],["volksbank-mittweida.de",[62,125]],["wvb.de",[62,125]],["bremischevb.de",[62,125]],["meinebank.de",[62,125]],["vb-rb.de",[62,125]],["gladbacher-bank.de",[62,125]],["nordthueringer-volksbank.de",[62,125]],["bodenseebank.de",[62,125]],["rb-oberaudorf.de",[62,125]],["volksbank-trossingen.de",[62,125]],["owl-immobilien.de",[62,125]],["volksbank-backnang.de",[62,125]],["volksbank-international.de",[62,125]],["raiba-westhausen.de",[62,125]],["vr-nopf.cz",[62,125]],["vrbankimmobilien.de",[62,125]],["cvw-privatbank-ag.de",[62,125]],["rb-denzlingen-sexau.de",[62,125]],["rv-banken.de",[62,125]],["volksbank-remseck.de",[62,125]],["raiba-gr.de",[62,125]],["vrb-spangenberg.de",[62,125]],["rb-berghuelen.de",[62,125]],["vb-lauterecken.de",[62,125]],["rb-sondelfingen.de",[62,125]],["voba-deisslingen.de",[62,125]],["saechsischer-gewinnsparverein.de",[62,125]],["rb-hardt-bruhrain.de",[62,125]],["volksbank-daaden.de",[62,125]],["dervolksbanker.de",[62,125]],["volksbank-kirnau.de",[62,125]],["skbwitten.de",[62,125]],["raiba-ndwa.de",[62,125]],["volksbank-mittleres-erzgebirge.de",[62,125]],["rb-eching.de",[62,125]],["volksbank-aktiv.de",[62,125]],["vbsuedemsland.de",[62,125]],["voba-moeckmuehl.de",[62,125]],["volksbank-freiburg.de",[62,125]],["vbleos.de",[62,125]],["meine-rvb.de",[62,125]],["aachener-bank.de",[62,125]],["muenchner-bank.de",[62,125]],["volksbank-dh.de",[62,125]],["volksbankeg.de",[62,125]],["sparda-bank-hamburg.de",[62,125]],["sparda-sw.de",[62,125]],["volksbank-thueringen-mitte.de",[62,125]],["vrbankeg.de",[62,125]],["bernhauser-bank.de",[62,125]],["vvrbank-krp.de",[62,125]],["vvr-bank.de",[62,125]],["vb-mittelhessen.de",[62,125]],["vr-bayernmitte.de",[62,125]],["vobadhk.de",[62,125]],["rheingauer-volksbank.de",[62,125]],["dovoba.de",[62,125]],["vr-dachau.de",[62,125]],["kd-bank.de",[62,125]],["pollfish.com",63],["werkenbijtrekpleister.nl",64],["werkenbijkruidvat.be",64],["rassenlijst.info",64],["werkenbijiciparisxl.nl",64],["flightradar24.com",65],["apk-vk.at",66],["vietnamairlines.com",67],["incotec.com",68],["croda.com",68],["exaktafoto.se",69],["campingdusoleil.com",70],["hotel-la-chaumiere.com",70],["les-anges-gardiens.fr",70],["croco-kid.com",70],["cambridge-centre.fr",70],["equisud.com",70],["allokebab-pau.fr",70],["etre-visible.local.fr",70],["mas-montebello66.com",70],["camping-residentiel-les-marronniers-jura.fr",70],["dj4events.fr",70],["saintjoursexpertmaritime.com",70],["az-renovation.fr",70],["presquilemultiservices.com",70],["hotel-aigoual.com",70],["hotel-restaurant-pau.com",70],["desrayaud-paysagistes.com",70],["hotelsaintcharles.fr",70],["agvillagecamarguais.com",70],["joyella.com",70],["gabriel-godard.com",70],["artech-sellerie.com",70],["motoclubernee.com",70],["ledauphinhotel.com",70],["cuisin-studio.com",70],["biomeo-environnement.com",70],["leman-instruments.com",70],["esthetique-meyerbeer.com",70],["institut-bio-naturel-nice.fr",70],["nature-et-bois.fr",70],["transmissions-bordeaux.com",70],["kinechartreuse.com",70],["corsegourmande.com",70],["cotedecor.com",70],["restaurant-la-badiane.fr",70],["systelia.fr",70],["lesjardinsinterieurs.com",70],["helenevue.com",70],["saubusse-thermes.com",70],["dehn.es",71],["dehn.fr",71],["dehn.it",71],["dehn.hu",71],["desitek.dk",71],["dehn.at",71],["dehn.de",71],["wwz.ch",72],["inyova.at",73],["inyova.ch",73],["inyova.de",73],["ccalbacenter.com",73],["wamu.org",73],["momentive.com",74],["kennedyslaw.com",75],["elekta.com",76],["ige.ch",77],["stratasysdirect.com",78],["stratasys.com",78],["werkenbijkruidvat.nl",79],["ghacks.net",80],["cutoff.es",81],["whyopencomputing.com",81],["mbanc.com",82],["dentalgalindo.com",[83,84]],["brutalvisual.com",[83,84]],["archeologia.com.pl",[83,84]],["letrayframe.com",[83,84]],["osteofisintegral.es",[83,84]],["uco.cat",[83,84]],["buecheler-kollegen.de",[83,84]],["seminariodeosma-soria.org",[83,84]],["kamensenica.sk",[83,84]],["movimentoofficinedelsud.it",[83,84]],["trident.se",[83,84]],["semanasantademalagaayeryhoy.com",[83,84]],["diazfloristasestrella.com",[83,84]],["cosechavida.com",[83,84]],["centre-hypnose-moselle.com",[83,84]],["broncoillustration.com",[83,84]],["sumoingenio.com",[83,84]],["aligepro.es",[83,84]],["muevo.es",[83,84]],["azulejosacedo.com",[83,84]],["sana.cz",[83,84]],["aliapinto.com",[83,84]],["tsconline.es",[83,84]],["polifast.it",[83,84]],["napos.cz",[83,84]],["gutshaus-neuendorf-usedom.de",[83,84]],["kunterbunte-kinder.de",[83,84]],["desatando.org",[83,84]],["ledocom.cz",[83,84]],["aliciasuarez.net",[83,84]],["diabramar.com",[83,84]],["lamagnalonga.org",[83,84]],["benejamrefrigeracion.com",[83,84]],["micropigmentacioncapilarbcn.com",[83,84]],["revistaauge.com.ar",[83,84]],["arcusnet.se",[83,84]],["videogenic.es",[83,84]],["grundschule-remagen.de",[83,84]],["aceitessatunion.com",[83,84]],["servigraphic.com.ar",[83,84]],["textsteine.de",[83,84]],["campergarage.es",[83,84]],["administradorfincasblog.com",[83,84]],["balgal.es",[83,84]],["grafika-dtp-produkcia.sk",[83,84]],["unmardeconstelaciones.com",[83,84]],["salobella.com",[83,84]],["careon.se",[83,84]],["gymnosport.com",[83,84]],["easyhomes.com.es",[83,84]],["casavaledalama.pt",[83,84]],["dosc.es",[83,84]],["fcfoz.pt",[83,84]],["berevolk.com",[83,84]],["hvpropertyclearance.co.uk",[83,84]],["calamo.se",[83,84]],["elserratplanoles.com",[83,84]],["bubblessea.es",[83,84]],["disperator.se",[83,84]],["ecoparquets.com",[83,84]],["zlotaraczkalublin.pl",[83,84]],["congresoscostadelsol.com",[83,84]],["pneumaticiroma.it",[83,84]],["asprona.es",[83,84]],["virgendefatima.es",[83,84]],["patronatpremia.cat",[83,84]],["2points13.fr",[83,84]],["3d3.es",[83,84]],["abantos.es",[83,84]],["abastanimacio.org",[83,84]],["academiafrancesadebelleza.co",[83,84]],["acaluca.org",[83,84]],["acce.es",[83,84]],["ad-particles.com",[83,84]],["adea.sk",[83,84]],["afplr.fr",[83,84]],["agiletalon.fr",[83,84]],["agiratou.com",[83,84]],["aidaromero.com",[83,84]],["alkoholochnarkotika.se",[83,84]],["alligatorbioscience.se",[83,84]],["anea.es",[83,84]],["animala.es",[83,84]],["antequerabelleza.com",[83,84]],["apimadrid.net",[83,84]],["aquatrend.sk",[83,84]],["arabesque-formation.org",[83,84]],["arrivamallorca.es",[83,84]],["arteydeco.es",[83,84]],["asapservicios.net",[83,84]],["aspock.com",[83,84]],["atout-voyages.com",[83,84]],["autocareslazara.es",[83,84]],["autocaresmariano.com",[83,84]],["autoform.pl",[83,84]],["ayudatranspersonal.com",[83,84]],["bacabeton.cz",[83,84]],["begalvi.com",[83,84]],["bent-com.com",[83,84]],["berliner-haeuser.de",[83,84]],["bespokespain.com",[83,84]],["bevent-rasch.se",[83,84]],["bio-cord.es",[83,84]],["biotropica.fr",[83,84]],["bornes-eurorelais.fr",[83,84]],["braeu-stueble.de",[83,84]],["brendanoharamp.scot",[83,84]],["briau.com",[83,84]],["caleulalia.com",[83,84]],["cande-sur-beuvron.com",[83,84]],["carlhag.se",[83,84]],["carrier.se",[83,84]],["casadelaveiga.com",[83,84]],["caytas.com.tr",[83,84]],["cecjecuador.org.ec",[83,84]],["cegef.com",[83,84]],["centrediagonal.com",[83,84]],["centropolisportivomassari.it",[83,84]],["cerai.org",[83,84]],["cervosgrup.com",[83,84]],["chimeneasalicante.com",[83,84]],["circodelshow.com",[83,84]],["cliatec.com",[83,84]],["clinicabadal.es",[83,84]],["cometh-consulting.com",[83,84]],["copysud.fr",[83,84]],["cortilar.com",[83,84]],["crystal-finance.com",[83,84]],["ctangana.com",[83,84]],["cugatresidencial.com",[83,84]],["dake.es",[83,84]],["datatal.se",[83,84]],["degom.com",[83,84]],["delfis.es",[83,84]],["delogica.com",[83,84]],["dentalcompany.es",[83,84]],["descarpack.com.br",[83,84]],["desfiladeroediciones.com",[83,84]],["desomer.be",[83,84]],["diarioandalucia.es",[83,84]],["dibujos-animados.net",[83,84]],["direkt-immobilie.de",[83,84]],["dovozautznemecka.cz",[83,84]],["drpuigdollers.com",[83,84]],["dunamys.inf.br",[83,84]],["easyimplantology.com",[83,84]],["eb2b.com.pl",[83,84]],["echo-mieszkania.pl",[83,84]],["eclinic.com.sg",[83,84]],["edgeict.com",[83,84]],["eiglaw.com",[83,84]],["elandexpediciones.es",[83,84]],["emalec.com",[83,84]],["enlighten.net",[83,84]],["equifab.es",[83,84]],["escuelanauticamarenostrum.com",[83,84]],["esgrima.cat",[83,84]],["espaisperconviure.es",[83,84]],["etbygg.com",[83,84]],["eurepieces.fr",[83,84]],["euroenvio.com",[83,84]],["eurotex.es",[83,84]],["expertetfinance.fr",[83,84]],["farmarsketrhyfuturum.cz",[83,84]],["fastvisa.fr",[83,84]],["fauxdiplomes.org",[83,84]],["fisiolistic.com",[83,84]],["fondazionealbertosordi.it",[83,84]],["foyersekcjapolska.eu",[83,84]],["fundacjaeds.pl",[83,84]],["galeriaxanadu.pl",[83,84]],["garcia-ibanez.com",[83,84]],["gestenaval.com",[83,84]],["glaskogen.se",[83,84]],["globalteam.es",[83,84]],["goia.org.pl",[83,84]],["granibier.com",[83,84]],["grundia.se",[83,84]],["grupoisn.com",[83,84]],["gruporhzaragoza.com",[83,84]],["hagagruppen.se",[83,84]],["halima-magazin.com",[83,84]],["handelskammaren.com",[83,84]],["helitecnics.com",[83,84]],["helux.se",[83,84]],["hermanosalcaraz.com",[83,84]],["hjarnkoll.se",[83,84]],["hmfoundation.com",[83,84]],["hormimpres.com",[83,84]],["hoteldeprony.fr",[83,84]],["hotelroyalcatania.it",[83,84]],["houjethai.nl",[83,84]],["hummer.cz",[83,84]],["icld.se",[83,84]],["ict-project.it",[83,84]],["imagelova.id",[83,84]],["imprentalaspalmas.com",[83,84]],["informamiele.it",[83,84]],["inission.com",[83,84]],["inmobiliariavolga.com",[83,84]],["international-terra-institute.com",[83,84]],["inwaspain.com",[83,84]],["izkigolf.eus",[83,84]],["jdmusic.se",[83,84]],["juveycamps.com",[83,84]],["karel1.nl",[83,84]],["kaunokapiniuprieziura.lt",[83,84]],["kcmkompresor.com",[83,84]],["kewaccountants.co.uk",[83,84]],["konkretplus.pl",[83,84]],["krajci.cz",[83,84]],["krisvagenut.se",[83,84]],["kyoceracapetown.co.za",[83,84]],["labaguette.pl",[83,84]],["labintegrados.com",[83,84]],["ladderupinc.com",[83,84]],["landskronafoto.org",[83,84]],["langarri.es",[83,84]],["lawa.es",[83,84]],["laxo.se",[83,84]],["layher.se",[83,84]],["lifetraveler.net",[83,84]],["lindrooshalsa.se",[83,84]],["lobolab.es",[83,84]],["maisqueromanicorutas.com",[83,84]],["mallandonoandroid.com",[83,84]],["masconcas.com",[83,84]],["mediabest.cz",[83,84]],["megustaelvino.es",[83,84]],["mensa.se",[83,84]],["mestiteslilis.com",[83,84]],["minutoprint.com",[83,84]],["mirano.cz",[83,84]],["mogador.cz",[83,84]],["morphestudio.es",[83,84]],["motoaxial.com",[83,84]],["multiversidad.es",[83,84]],["mundollaves.com",[83,84]],["musicotherapie-federationfrancaise.com",[83,84]],["nauticaravaning.com",[83,84]],["nestville.sk",[83,84]],["nestvillepark.sk",[83,84]],["netromsoftware.ro",[83,84]],["nojesfabriken.se",[83,84]],["oddoneout.se",[83,84]],["opako.pl",[83,84]],["oserlafrique.com",[83,84]],["paintballalcorcon.com",[83,84]],["pallejabcn.com",[83,84]],["penicilinafruits.com",[83,84]],["peregrinoslh.com",[83,84]],["permis-lausanne.ch",[83,84]],["pernillaandersson.se",[83,84]],["piazzadelgusto.it",[83,84]],["pipi-antik.dk",[83,84]],["plasticosgeca.com",[83,84]],["plastimyr.com",[83,84]],["portal.unimes.br",[83,84]],["pro-beruf.de",[83,84]],["prophecyinternational.com",[83,84]],["psicoterapeuta.org",[83,84]],["puertasprieto.com",[83,84]],["puntosdefantasia.es",[83,84]],["pzmk.org.pl",[83,84]],["rastromaquinas.com",[83,84]],["rectoraldecastillon.com",[83,84]],["reinomineral.com",[83,84]],["reklamefreunde.de",[83,84]],["restauraciontalavera.es",[83,84]],["restauranthispania.com",[83,84]],["ristoranteeziogritti.it",[83,84]],["rubinmedical.dk",[83,84]],["rubinmedical.no",[83,84]],["rubinmedical.se",[83,84]],["sak.se",[83,84]],["sammetais.com.br",[83,84]],["sebastiancurylo.pl",[83,84]],["serigrafiaiorgi.com",[83,84]],["seyart.com",[83,84]],["sgaim.com",[83,84]],["sicamemt.org",[83,84]],["siguealconejoblanco.es",[83,84]],["sinfimasa.com",[83,84]],["skp.se",[83,84]],["skrobczynski.pl",[83,84]],["slush.de",[83,84]],["solebike.it",[83,84]],["solu-watt.fr",[83,84]],["soluzionainmobiliaria.es",[83,84]],["somoparque.com",[83,84]],["sorgingaztemoda.com",[83,84]],["sroportal.sk",[83,84]],["ssmf.se",[83,84]],["stobrasil.com.br",[83,84]],["stoparmut2015.ch",[83,84]],["studiodimuro.com",[83,84]],["subkultur-hannover.de",[83,84]],["sustanciagris.com",[83,84]],["szkt.sk",[83,84]],["tagibergslagen.se",[83,84]],["tallergastronomico.es",[83,84]],["tarna.fhsk.se",[83,84]],["tassenyalitzacio.com",[83,84]],["tctech.se",[83,84]],["teknoduegroup.it",[83,84]],["teloliquido.com",[83,84]],["temasa.es",[83,84]],["textilprint.sk",[83,84]],["thehouseofautomata.com",[83,84]],["tmgernika.com",[83,84]],["toastetmoi.fr",[83,84]],["tollare.org",[83,84]],["trattoriabolognesi.it",[83,84]],["triperavigatana.com",[83,84]],["tuckerfranklininsgrp.com",[83,84]],["tuftuf.net",[83,84]],["turuletras.com",[83,84]],["umfmb.fr",[83,84]],["upapsa.com",[83,84]],["valenciatoday.es",[83,84]],["vanghel-und-morawski.de",[83,84]],["vickycan.com",[83,84]],["ville-de-salles.com",[83,84]],["webbigt.se",[83,84]],["westlede.be",[83,84]],["wiemker.org",[83,84]],["woolink.co",[83,84]],["wp.fratgsa.org",[83,84]],["xatobaxestion.com",[83,84]],["xfactor-gmbh.de",[83,84]],["yougoenglish.com",[83,84]],["zigmoon.com",[83,84]],["brightdata.com",85],["canyon.com",[86,87]],["drimsim.com",88],["eteam-winkler.de",89],["kdn-elektro.de",89],["elektro-kotz.de",89],["elektro-service-rauh.de",89],["elektroanlagenbuettner.de",89],["be-connect.online",89],["bayergruppe.com",89],["bayer-wkt.de",89],["bayer-wind.de",89],["bayer-wd.de",89],["elektro-joa.de",89],["htechnik.de",89],["ehk-service.de",89],["bittner-tv.de",89],["elektro-suelzner.de",89],["elektro-leps.de",89],["elektromax-hausgeraete.de",89],["elektrotechnik-schedel.de",89],["elkugmbh.de",89],["ln-elektro-gmbh.de",89],["weiss-blau-gmbh.de",89],["sunbeam-energy.de",89],["prokauf.com",89],["lichtstudio-kerl.de",89],["liebing-beese.de",89],["hoeschel-baumann.de",89],["hausgeraete-kraemer.de",89],["gehlhaar-elektrotechnik.de",89],["ehs-elektrotechnik.de",89],["elektrojarschke.de",89],["elektrotechnik-fleischmann.de",89],["elektroseemueller.de",89],["schoerling-blitz.de",89],["ast-apolda.com",89],["elektro-klippel.de",89],["arntz-haustechnik.de",89],["elektro-bindel.de",89],["elektrotechnik-weiss.com",89],["brandschutz-hamburg.de",89],["wagnerelektrotechnik.de",89],["el-kramer.de",89],["mks-hof.de",89],["wernz-elektro.de",89],["e3-energy.de",89],["sg-solar.de",89],["elektrokrebs.de",89],["elektro-roehrl.de",89],["elektro-kreher.de",89],["giegling-vonsaal.de",89],["elektro-lehmann.com",89],["ems-wurzen.de",89],["scholpp.de",90],["scholpp.es",90],["scholpp.pl",90],["scholpp.it",90],["ptc.eu",90],["scholpp.com",90],["abo24.de",90],["overdrive.com",90],["wetu.com",90],["superwatchman.com",91],["bitburger-braugruppe.de",92],["proteincompany.fi",93],["proteinbolaget.se",93],["snoopmedia.com",94],["myguide.de",94],["study-in-germany.de",94],["daad.de",94],["futterhaus.de",95],["scottsofstow.co.uk",[96,97]],["zawszepomorze.pl",98],["wasserkunst-hamburg.de",99],["lta.org.uk",100],["brico-travo.com",101],["panzerfux.de",102],["tvprato.it",103],["liftshare.com",103],["vesely-drak.cz",103],["consordini.com",103],["fitzmuseum.cam.ac.uk",103],["hotdk2023.kre.hu",103],["panwybierak.pl",103],["bomagasinet.dk",103],["miplantaweb.com",103],["electronics.semaf.at",103],["sfd.pl",103],["flota.es",103],["jobs.cz",103],["prace.cz",103],["eninternetgratis.com",103],["unavidadeviaje.com",103],["theateramrand.de",104],["jugend-praesentiert.de",104],["buktube.com",105],["xhaccess.com",105],["xhamster.com",105],["xhamster2.com",105],["xhamster3.com",105],["xhamster.desi",105],["evium.de",106],["epayments.com",107],["riceundspice.de",108],["happysocks.com",[109,110]],["win2day.at",111],["porp.pl",112],["gesundheitsamt-2025.de",113],["coastfashion.com",114],["oasisfashion.com",114],["warehousefashion.com",114],["misspap.com",114],["karenmillen.com",114],["boohooman.com",114],["nebo.app",115],["groupeonepoint.com",116],["edpsciences.org",117],["bemmaisseguro.com",118],["scheidegger.nl",119],["transparency.fb.com",[120,121]],["faq.whatsapp.com",121],["blog.whatsapp.com",121],["www.whatsapp.com",121],["phoenix.de",122],["strato.se",123],["strato.de",123],["mishcon.com",124],["bbva.es",126],["bbvauk.com",126],["bbva.be",126],["bbva.fr",126],["bbva.it",126],["bbva.pt",126],["suntech.cz",127],["digikey.co.za",128],["digikey.cn",128],["digikey.ee",128],["digikey.at",128],["digikey.be",128],["digikey.bg",128],["digikey.cz",128],["digikey.dk",128],["digikey.fi",128],["digikey.fr",128],["digikey.de",128],["digikey.gr",128],["digikey.hu",128],["digikey.ie",128],["digikey.it",128],["digikey.lv",128],["digikey.lt",128],["digikey.lu",128],["digikey.nl",128],["digikey.no",128],["digikey.pl",128],["digikey.pt",128],["digikey.ro",128],["digikey.sk",128],["digikey.si",128],["digikey.es",128],["digikey.se",128],["digikey.ch",128],["digikey.co.uk",128],["digikey.co.il",128],["digikey.com.mx",128],["digikey.ca",128],["digikey.com.br",128],["digikey.co.nz",128],["digikey.com.au",128],["digikey.co.th",128],["digikey.tw",128],["digikey.kr",128],["digikey.sg",128],["digikey.ph",128],["digikey.my",128],["digikey.jp",128],["digikey.in",128],["digikey.hk",128],["digikey.com",128],["eurosupps.nl",129],["pathe.nl",130],["makelaarsland.nl",131],["nordania.dk",132],["365direkte.no",132],["danskebank.lv",132],["danskebank.lt",132],["danskebank.no",132],["danskebank.fi",132],["danskebank.dk",132],["danskebank.com",132],["danskebank.se",132],["danskebank.co.uk",132],["danskeci.com",132],["danicapension.dk",132],["gewerbegebiete.de",133],["visti.it",134],["balay.es",135],["constructa.com",135],["gaggenau.com",135],["talksport.com",136],["loudersound.com",136],["impulse.de",136],["pcgamer.com",136],["infoworld.com",136],["kiplinger.com",136],["omni.se",136],["it-times.de",136],["bitcoinmagazine.com",136],["deliciousmagazine.co.uk",136],["upday.com",136],["deutschlandcard.de",136],["szbz.de",136],["free-fonts.com",136],["lieferzeiten.info",136],["vice.com",136],["newsnow.co.uk",136],["out.com",136],["streampicker.de",136],["radiotimes.com",136],["nowtv.com",136],["kochbar.de",136],["toggo.de",136],["am-online.com",136],["n-tv.de",136],["newsandstar.co.uk",136],["tag24.de",136],["weltkunst.de",136],["noveauta.sk",136],["pnn.de",136],["economist.com",136],["crash.net",136],["norwaytoday.info",136],["insider.com",136],["preis.de",136],["ibroxnoise.co.uk",136],["celtsarehere.com",136],["nufcblog.co.uk",136],["sport1.de",136],["techconnect.com",136],["followfollow.com",136],["thespun.com",136],["mazdas247.com",136],["fastcar.co.uk",136],["vitalfootball.co.uk",136],["audi-sport.net",136],["bumble.com",136],["arcamax.com",136],["dilbert.com",136],["givemesport.com",136],["dartsnews.com",136],["gpfans.com",136],["justjared.com",136],["justjaredjr.com",136],["finanzen.at",136],["flights-idealo.co.uk",136],["idealo.com",136],["idealo.se",136],["idealo.nl",136],["idealo.pl",136],["idealo.pt",136],["idealo.fi",136],["idealo.dk",136],["idealo.no",136],["idealo.in",136],["idealo.at",136],["ladenzeile.at",136],["berliner-zeitung.de",136],["urbia.de",136],["essen-und-trinken.de",136],["wetter.de",136],["rtl-living.de",136],["vox.de",136],["ladenzeile.de",136],["advocate.com",136],["idealo.de",136],["wigantoday.net",136],["economistgroup.com",136],["transfermarkt.nl",136],["transfermarkt.es",136],["transfermarkt.pl",136],["transfermarkt.pt",136],["transfermarkt.at",136],["transfermarkt.it",136],["transfermarkt.fr",136],["transfermarkt.de",136],["transfermarkt.be",136],["transfermarkt.co.uk",136],["transfermarkt.us",136],["footballfancast.com",136],["cio.com",136],["jezebel.com",136],["splinternews.com",136],["denofgeek.com",136],["kinja.com",136],["theinventory.com",136],["rollingstone.de",136],["sueddeutsche.de",136],["csoonline.com",136],["tvmovie.de",136],["testberichte.de",136],["pcgameshardware.de",136],["4players.de",136],["guj.de",136],["bild.de",136],["wieistmeineip.de",136],["testbild.de",136],["stylebook.de",136],["skygroup.sky",136],["speisekarte.de",136],["haeuser.de",136],["cmo.com.au",136],["pcworld.co.nz",136],["idealo.it",136],["transfermarkt.jp",136],["transfermarkt.co.id",136],["autoexpress.co.uk",136],["transfermarkt.com",136],["esportsclub.nl",136],["webwinkel.tubantia.nl",136],["shopalike.nl",136],["autoweek.nl",136],["pcworld.es",136],["macworld.es",136],["idealo.es",136],["businessinsider.es",136],["motor.es",136],["autobild.es",136],["driving.co.uk",136],["stern.de",136],["pcgames.de",136],["sport.de",136],["idealo.fr",136],["tori.fi",136],["snow-forecast.com",136],["tidende.dk",136],["kraloyun.com",136],["arnnet.com.au",136],["bunte.de",136],["handelsblatt.com",136],["techbook.de",136],["metal-hammer.de",136],["macworld.co.uk",136],["maxisciences.com",136],["ohmymag.com",136],["voici.fr",136],["geo.de",136],["businessinsider.de",136],["meinestadt.de",136],["politico.eu",136],["spieletipps.de",136],["finanznachrichten.de",136],["vtwonen.nl",136],["stol.it",136],["waitrose.com",137],["storyhouseegmont.dk",138],["storyhouseegmont.no",138],["storyhouseegmont.se",138],["egmont.com",138],["nordiskfilm.com",138]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeClass(
    rawToken = '',
    rawSelector = '',
    behavior = ''
) {
    if ( typeof rawToken !== 'string' ) { return; }
    if ( rawToken === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('remove-class', rawToken, rawSelector, behavior);
    const tokens = rawToken.split(/\s*\|\s*/);
    const selector = tokens
        .map(a => `${rawSelector}.${CSS.escape(a)}`)
        .join(',');
    if ( safe.logLevel > 1 ) {
        safe.uboLog(logPrefix, `Target selector:\n\t${selector}`);
    }
    const mustStay = /\bstay\b/.test(behavior);
    let timer;
    const rmclass = ( ) => {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...tokens);
                safe.uboLog(logPrefix, 'Removed class(es)');
            }
        } catch(ex) {
        }
        if ( mustStay ) { return; }
        if ( document.readyState !== 'complete' ) { return; }
        observer.disconnect();
    };
    const mutationHandler = mutations => {
        if ( timer !== undefined ) { return; }
        let skip = true;
        for ( let i = 0; i < mutations.length && skip; i++ ) {
            const { type, addedNodes, removedNodes } = mutations[i];
            if ( type === 'attributes' ) { skip = false; }
            for ( let j = 0; j < addedNodes.length && skip; j++ ) {
                if ( addedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
            for ( let j = 0; j < removedNodes.length && skip; j++ ) {
                if ( removedNodes[j].nodeType === 1 ) { skip = false; break; }
            }
        }
        if ( skip ) { return; }
        timer = safe.onIdle(rmclass, { timeout: 67 });
    };
    const observer = new MutationObserver(mutationHandler);
    const start = ( ) => {
        rmclass();
        observer.observe(document, {
            attributes: true,
            attributeFilter: [ 'class' ],
            childList: true,
            subtree: true,
        });
    };
    runAt(( ) => {
        start();
    }, /\bcomplete\b/.test(behavior) ? 'idle' : 'loading');
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1, 'asap': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
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
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
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
    try { removeClass(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'ISOLATED';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_removeClass();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_removeClass = cloneInto([
            [ '(', uBOL_removeClass.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_removeClass);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_removeClass;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
