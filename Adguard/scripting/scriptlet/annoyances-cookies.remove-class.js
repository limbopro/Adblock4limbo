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

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: annoyances-cookies

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeClass = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-overlay","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["modalOpen","body","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["igmetall.de",3],["onelottery.co.uk",4],["yourschoollottery.co.uk",4],["rainbowlottery.co.uk",4],["idg.se",5],["gearaid.com",6],["buildex.cz",7],["gruenderservice.at",8],["caiacosmetics.com",9],["pdc-big.nl",10],["pdc-big.it",10],["pdc-big.ie",10],["pdc-big.fr",10],["pdc-big.es",10],["pdc-big.be",10],["pdc-big.at",10],["pdc-big.co.uk",10],["pdc-big.de",10],["pdc-big.com",10],["elio-systems.io",[11,18]],["sanha.com",[11,18]],["recettesetcabas.com",12],["flinders.edu.au",13],["opera.com",14],["groningenairport.nl",15],["crocs.co.uk",[16,17]],["crocs.eu",[16,17]],["crocs.nl",[16,17]],["crocs.fi",[16,17]],["crocs.fr",[16,17]],["crocs.de",[16,17]],["rappjmed.ch",19],["stilord.fr",20],["stilord.it",20],["stilord.de",20],["stilord.es",20],["dasfutterhaus.at",21],["developer.paypal.com",22],["cpc2r.ch",23],["zen.com",24],["tecsafe.de",25],["foxracingshox.de",25],["stromnetz.berlin",26],["websummit.com",27],["thehustle.co",27],["epochtimes.fr",28],["ajbell.co.uk",29],["economiapertutti.bancaditalia.it",30],["quantamagazine.org",31],["tradersunion.com",31],["phsgreenleaf.co.uk",32],["phswashrooms.ie",32],["mccolls.co.uk",[33,34]],["crt.hr",35],["yourstorebox.com",36],["clickskeks.at",[37,38]],["housell.com",39],["lactostop.de",40],["mibe.de",40],["spilger.de",41],["dbs.si",42],["abcya.com",43],["umicore.be",44],["umicore.fi",44],["umicore.ca",44],["jongcdenv.be",44],["umicore.jp",44],["umicore.cn",44],["umicore.pl",44],["umicore.kr",44],["umicore.co.th",44],["umicore.fr",44],["umicore.de",44],["donneurdecellulessouches.be",44],["stammzellenspender.be",44],["stemcelldonor.be",44],["umicore.com",44],["umicore.com.br",44],["koenvandenheuvel.be",44],["stamceldonor.be",44],["nahima.be",44],["catused.com",45],["eujuicers.cz",46],["graziellawicki.com",47],["funnelcockpit.com",47],["dnk.nl",48],["eam.de",49],["eam-netz.de",49],["tvp.pl",50],["cellardoor.co",51],["ampire.de",52],["verpackungsstadl.ch",52],["imkershoperzgebirge.de",52],["modellbahndealer.de",52],["tillit-bikes.shop",52],["bike-onlineshop.de",52],["futspo.de",52],["compravo.de",52],["perpedale.de",52],["modellbau-jung.de",52],["verpackungsstadl.at",52],["modellbau-vordermaier.de",52],["bike-supply.de",52],["wroc.pl",53],["basenio.de",54],["fm-systeme.de",55],["gartenhotel-crystal.at",56],["swffm.de",56],["studentenwerkfrankfurt.de",56],["dmsg.de",56],["bgk.pl",56],["pflegezeit-berlin.de",56],["gpd-nordost-onlineberatung.de",56],["proabschluss-beratung.de",56],["hilfe-telefon-missbrauch.online",56],["dww-suchtberatung.de",56],["cyberforum.de",56],["gutscheine.eurothermen.at",56],["wolff-mueller.de",56],["ras.bz.it",56],["wifiwien.at",[57,58]],["wifikaernten.at",[57,58]],["wifi.at",[57,58]],["pdf-archive.com",58],["5asec.pt",59],["tui.dk",59],["tui.fi",59],["tui.no",59],["tui.se",59],["salvagny.org",59],["leslipfrancais.fr",59],["wvb.de",[59,121]],["bremischevb.de",[59,121]],["meinebank.de",[59,121]],["vb-rb.de",[59,121]],["gladbacher-bank.de",[59,121]],["nordthueringer-volksbank.de",[59,121]],["bodenseebank.de",[59,121]],["rb-oberaudorf.de",[59,121]],["volksbank-trossingen.de",[59,121]],["owl-immobilien.de",[59,121]],["volksbank-backnang.de",[59,121]],["volksbank-international.de",[59,121]],["raiba-westhausen.de",[59,121]],["vr-nopf.cz",[59,121]],["vrbankimmobilien.de",[59,121]],["cvw-privatbank-ag.de",[59,121]],["rb-denzlingen-sexau.de",[59,121]],["rv-banken.de",[59,121]],["volksbank-remseck.de",[59,121]],["raiba-gr.de",[59,121]],["vrb-spangenberg.de",[59,121]],["rb-berghuelen.de",[59,121]],["vb-lauterecken.de",[59,121]],["rb-sondelfingen.de",[59,121]],["voba-deisslingen.de",[59,121]],["saechsischer-gewinnsparverein.de",[59,121]],["rb-hardt-bruhrain.de",[59,121]],["volksbank-daaden.de",[59,121]],["dervolksbanker.de",[59,121]],["volksbank-kirnau.de",[59,121]],["skbwitten.de",[59,121]],["raiba-ndwa.de",[59,121]],["volksbank-mittleres-erzgebirge.de",[59,121]],["rb-eching.de",[59,121]],["volksbank-aktiv.de",[59,121]],["vbsuedemsland.de",[59,121]],["voba-moeckmuehl.de",[59,121]],["volksbank-freiburg.de",[59,121]],["vbleos.de",[59,121]],["meine-rvb.de",[59,121]],["aachener-bank.de",[59,121]],["muenchner-bank.de",[59,121]],["volksbank-dh.de",[59,121]],["volksbankeg.de",[59,121]],["sparda-bank-hamburg.de",[59,121]],["sparda-sw.de",[59,121]],["volksbank-thueringen-mitte.de",[59,121]],["vrbankeg.de",[59,121]],["bernhauser-bank.de",[59,121]],["vvrbank-krp.de",[59,121]],["vvr-bank.de",[59,121]],["vb-mittelhessen.de",[59,121]],["vr-bayernmitte.de",[59,121]],["vobadhk.de",[59,121]],["rheingauer-volksbank.de",[59,121]],["dovoba.de",[59,121]],["vr-dachau.de",[59,121]],["pollfish.com",60],["werkenbijtrekpleister.nl",61],["werkenbijkruidvat.be",61],["rassenlijst.info",61],["werkenbijiciparisxl.nl",61],["tesa-labtec.com",62],["tesatape.ru",62],["tesa.com",62],["flightradar24.com",63],["apk-vk.at",64],["vietnamairlines.com",65],["incotec.com",66],["croda.com",66],["exaktafoto.se",67],["campingdusoleil.com",68],["hotel-la-chaumiere.com",68],["les-anges-gardiens.fr",68],["croco-kid.com",68],["cambridge-centre.fr",68],["equisud.com",68],["allokebab-pau.fr",68],["etre-visible.local.fr",68],["mas-montebello66.com",68],["camping-residentiel-les-marronniers-jura.fr",68],["dj4events.fr",68],["saintjoursexpertmaritime.com",68],["az-renovation.fr",68],["presquilemultiservices.com",68],["hotel-aigoual.com",68],["hotel-restaurant-pau.com",68],["desrayaud-paysagistes.com",68],["hotelsaintcharles.fr",68],["agvillagecamarguais.com",68],["joyella.com",68],["gabriel-godard.com",68],["artech-sellerie.com",68],["motoclubernee.com",68],["ledauphinhotel.com",68],["cuisin-studio.com",68],["biomeo-environnement.com",68],["leman-instruments.com",68],["esthetique-meyerbeer.com",68],["institut-bio-naturel-nice.fr",68],["nature-et-bois.fr",68],["transmissions-bordeaux.com",68],["kinechartreuse.com",68],["corsegourmande.com",68],["cotedecor.com",68],["restaurant-la-badiane.fr",68],["systelia.fr",68],["lesjardinsinterieurs.com",68],["helenevue.com",68],["saubusse-thermes.com",68],["dehn.es",69],["dehn.fr",69],["dehn.it",69],["dehn.hu",69],["desitek.dk",69],["dehn.at",69],["dehn.de",69],["wwz.ch",70],["inyova.at",71],["inyova.ch",71],["inyova.de",71],["ccalbacenter.com",71],["wamu.org",71],["momentive.com",72],["kennedyslaw.com",73],["elekta.com",74],["ige.ch",75],["stratasysdirect.com",76],["stratasys.com",76],["werkenbijkruidvat.nl",77],["ghacks.net",78],["cutoff.es",79],["whyopencomputing.com",79],["mbanc.com",80],["dentalgalindo.com",[81,82]],["brutalvisual.com",[81,82]],["archeologia.com.pl",[81,82]],["letrayframe.com",[81,82]],["osteofisintegral.es",[81,82]],["uco.cat",[81,82]],["buecheler-kollegen.de",[81,82]],["seminariodeosma-soria.org",[81,82]],["kamensenica.sk",[81,82]],["movimentoofficinedelsud.it",[81,82]],["trident.se",[81,82]],["semanasantademalagaayeryhoy.com",[81,82]],["diazfloristasestrella.com",[81,82]],["cosechavida.com",[81,82]],["centre-hypnose-moselle.com",[81,82]],["broncoillustration.com",[81,82]],["sumoingenio.com",[81,82]],["aligepro.es",[81,82]],["muevo.es",[81,82]],["azulejosacedo.com",[81,82]],["sana.cz",[81,82]],["aliapinto.com",[81,82]],["tsconline.es",[81,82]],["polifast.it",[81,82]],["napos.cz",[81,82]],["gutshaus-neuendorf-usedom.de",[81,82]],["kunterbunte-kinder.de",[81,82]],["desatando.org",[81,82]],["ledocom.cz",[81,82]],["aliciasuarez.net",[81,82]],["diabramar.com",[81,82]],["lamagnalonga.org",[81,82]],["benejamrefrigeracion.com",[81,82]],["micropigmentacioncapilarbcn.com",[81,82]],["revistaauge.com.ar",[81,82]],["arcusnet.se",[81,82]],["videogenic.es",[81,82]],["grundschule-remagen.de",[81,82]],["aceitessatunion.com",[81,82]],["servigraphic.com.ar",[81,82]],["textsteine.de",[81,82]],["campergarage.es",[81,82]],["administradorfincasblog.com",[81,82]],["balgal.es",[81,82]],["grafika-dtp-produkcia.sk",[81,82]],["unmardeconstelaciones.com",[81,82]],["salobella.com",[81,82]],["careon.se",[81,82]],["gymnosport.com",[81,82]],["easyhomes.com.es",[81,82]],["casavaledalama.pt",[81,82]],["dosc.es",[81,82]],["fcfoz.pt",[81,82]],["berevolk.com",[81,82]],["hvpropertyclearance.co.uk",[81,82]],["calamo.se",[81,82]],["elserratplanoles.com",[81,82]],["bubblessea.es",[81,82]],["disperator.se",[81,82]],["ecoparquets.com",[81,82]],["zlotaraczkalublin.pl",[81,82]],["congresoscostadelsol.com",[81,82]],["pneumaticiroma.it",[81,82]],["asprona.es",[81,82]],["virgendefatima.es",[81,82]],["patronatpremia.cat",[81,82]],["2points13.fr",[81,82]],["3d3.es",[81,82]],["abantos.es",[81,82]],["abastanimacio.org",[81,82]],["academiafrancesadebelleza.co",[81,82]],["acaluca.org",[81,82]],["acce.es",[81,82]],["ad-particles.com",[81,82]],["adea.sk",[81,82]],["afplr.fr",[81,82]],["agiletalon.fr",[81,82]],["agiratou.com",[81,82]],["aidaromero.com",[81,82]],["alkoholochnarkotika.se",[81,82]],["alligatorbioscience.se",[81,82]],["anea.es",[81,82]],["animala.es",[81,82]],["antequerabelleza.com",[81,82]],["apimadrid.net",[81,82]],["aquatrend.sk",[81,82]],["arabesque-formation.org",[81,82]],["arrivamallorca.es",[81,82]],["arteydeco.es",[81,82]],["asapservicios.net",[81,82]],["aspock.com",[81,82]],["atout-voyages.com",[81,82]],["autocareslazara.es",[81,82]],["autocaresmariano.com",[81,82]],["autoform.pl",[81,82]],["ayudatranspersonal.com",[81,82]],["bacabeton.cz",[81,82]],["begalvi.com",[81,82]],["bent-com.com",[81,82]],["berliner-haeuser.de",[81,82]],["bespokespain.com",[81,82]],["bevent-rasch.se",[81,82]],["bio-cord.es",[81,82]],["biotropica.fr",[81,82]],["bornes-eurorelais.fr",[81,82]],["braeu-stueble.de",[81,82]],["brendanoharamp.scot",[81,82]],["briau.com",[81,82]],["caleulalia.com",[81,82]],["cande-sur-beuvron.com",[81,82]],["carlhag.se",[81,82]],["carrier.se",[81,82]],["casadelaveiga.com",[81,82]],["caytas.com.tr",[81,82]],["cecjecuador.org.ec",[81,82]],["cegef.com",[81,82]],["centrediagonal.com",[81,82]],["centropolisportivomassari.it",[81,82]],["cerai.org",[81,82]],["cervosgrup.com",[81,82]],["chimeneasalicante.com",[81,82]],["circodelshow.com",[81,82]],["cliatec.com",[81,82]],["clinicabadal.es",[81,82]],["cometh-consulting.com",[81,82]],["copysud.fr",[81,82]],["cortilar.com",[81,82]],["crystal-finance.com",[81,82]],["ctangana.com",[81,82]],["cugatresidencial.com",[81,82]],["dake.es",[81,82]],["datatal.se",[81,82]],["degom.com",[81,82]],["delfis.es",[81,82]],["delogica.com",[81,82]],["dentalcompany.es",[81,82]],["descarpack.com.br",[81,82]],["desfiladeroediciones.com",[81,82]],["desomer.be",[81,82]],["diarioandalucia.es",[81,82]],["dibujos-animados.net",[81,82]],["direkt-immobilie.de",[81,82]],["dovozautznemecka.cz",[81,82]],["drpuigdollers.com",[81,82]],["dunamys.inf.br",[81,82]],["easyimplantology.com",[81,82]],["eb2b.com.pl",[81,82]],["echo-mieszkania.pl",[81,82]],["eclinic.com.sg",[81,82]],["edgeict.com",[81,82]],["eiglaw.com",[81,82]],["elandexpediciones.es",[81,82]],["emalec.com",[81,82]],["enlighten.net",[81,82]],["equifab.es",[81,82]],["escuelanauticamarenostrum.com",[81,82]],["esgrima.cat",[81,82]],["espaisperconviure.es",[81,82]],["etbygg.com",[81,82]],["eurepieces.fr",[81,82]],["euroenvio.com",[81,82]],["eurotex.es",[81,82]],["expertetfinance.fr",[81,82]],["farmarsketrhyfuturum.cz",[81,82]],["fastvisa.fr",[81,82]],["fauxdiplomes.org",[81,82]],["fisiolistic.com",[81,82]],["fondazionealbertosordi.it",[81,82]],["foyersekcjapolska.eu",[81,82]],["fundacjaeds.pl",[81,82]],["galeriaxanadu.pl",[81,82]],["garcia-ibanez.com",[81,82]],["gestenaval.com",[81,82]],["glaskogen.se",[81,82]],["globalteam.es",[81,82]],["goia.org.pl",[81,82]],["granibier.com",[81,82]],["grundia.se",[81,82]],["grupoisn.com",[81,82]],["gruporhzaragoza.com",[81,82]],["hagagruppen.se",[81,82]],["halima-magazin.com",[81,82]],["handelskammaren.com",[81,82]],["helitecnics.com",[81,82]],["helux.se",[81,82]],["hermanosalcaraz.com",[81,82]],["hjarnkoll.se",[81,82]],["hmfoundation.com",[81,82]],["hormimpres.com",[81,82]],["hoteldeprony.fr",[81,82]],["hotelroyalcatania.it",[81,82]],["houjethai.nl",[81,82]],["hummer.cz",[81,82]],["icld.se",[81,82]],["ict-project.it",[81,82]],["imagelova.id",[81,82]],["imprentalaspalmas.com",[81,82]],["informamiele.it",[81,82]],["inission.com",[81,82]],["inmobiliariavolga.com",[81,82]],["international-terra-institute.com",[81,82]],["inwaspain.com",[81,82]],["izkigolf.eus",[81,82]],["jdmusic.se",[81,82]],["juveycamps.com",[81,82]],["karel1.nl",[81,82]],["kaunokapiniuprieziura.lt",[81,82]],["kcmkompresor.com",[81,82]],["kewaccountants.co.uk",[81,82]],["konkretplus.pl",[81,82]],["krajci.cz",[81,82]],["krisvagenut.se",[81,82]],["kyoceracapetown.co.za",[81,82]],["labaguette.pl",[81,82]],["labintegrados.com",[81,82]],["ladderupinc.com",[81,82]],["landskronafoto.org",[81,82]],["langarri.es",[81,82]],["lawa.es",[81,82]],["laxo.se",[81,82]],["layher.se",[81,82]],["lifetraveler.net",[81,82]],["lindrooshalsa.se",[81,82]],["lobolab.es",[81,82]],["maisqueromanicorutas.com",[81,82]],["mallandonoandroid.com",[81,82]],["masconcas.com",[81,82]],["mediabest.cz",[81,82]],["megustaelvino.es",[81,82]],["mensa.se",[81,82]],["mestiteslilis.com",[81,82]],["minutoprint.com",[81,82]],["mirano.cz",[81,82]],["mogador.cz",[81,82]],["morphestudio.es",[81,82]],["motoaxial.com",[81,82]],["multiversidad.es",[81,82]],["mundollaves.com",[81,82]],["musicotherapie-federationfrancaise.com",[81,82]],["nauticaravaning.com",[81,82]],["nestville.sk",[81,82]],["nestvillepark.sk",[81,82]],["netromsoftware.ro",[81,82]],["nojesfabriken.se",[81,82]],["oddoneout.se",[81,82]],["opako.pl",[81,82]],["oserlafrique.com",[81,82]],["paintballalcorcon.com",[81,82]],["pallejabcn.com",[81,82]],["penicilinafruits.com",[81,82]],["peregrinoslh.com",[81,82]],["permis-lausanne.ch",[81,82]],["pernillaandersson.se",[81,82]],["piazzadelgusto.it",[81,82]],["pipi-antik.dk",[81,82]],["plasticosgeca.com",[81,82]],["plastimyr.com",[81,82]],["portal.unimes.br",[81,82]],["pro-beruf.de",[81,82]],["prophecyinternational.com",[81,82]],["psicoterapeuta.org",[81,82]],["puertasprieto.com",[81,82]],["puntosdefantasia.es",[81,82]],["pzmk.org.pl",[81,82]],["rastromaquinas.com",[81,82]],["rectoraldecastillon.com",[81,82]],["reinomineral.com",[81,82]],["reklamefreunde.de",[81,82]],["restauraciontalavera.es",[81,82]],["restauranthispania.com",[81,82]],["ristoranteeziogritti.it",[81,82]],["rubinmedical.dk",[81,82]],["rubinmedical.no",[81,82]],["rubinmedical.se",[81,82]],["sak.se",[81,82]],["sammetais.com.br",[81,82]],["sebastiancurylo.pl",[81,82]],["serigrafiaiorgi.com",[81,82]],["seyart.com",[81,82]],["sgaim.com",[81,82]],["sicamemt.org",[81,82]],["siguealconejoblanco.es",[81,82]],["sinfimasa.com",[81,82]],["skp.se",[81,82]],["skrobczynski.pl",[81,82]],["slush.de",[81,82]],["solebike.it",[81,82]],["solu-watt.fr",[81,82]],["soluzionainmobiliaria.es",[81,82]],["somoparque.com",[81,82]],["sorgingaztemoda.com",[81,82]],["sroportal.sk",[81,82]],["ssmf.se",[81,82]],["stobrasil.com.br",[81,82]],["stoparmut2015.ch",[81,82]],["studiodimuro.com",[81,82]],["subkultur-hannover.de",[81,82]],["sustanciagris.com",[81,82]],["szkt.sk",[81,82]],["tagibergslagen.se",[81,82]],["tallergastronomico.es",[81,82]],["tarna.fhsk.se",[81,82]],["tassenyalitzacio.com",[81,82]],["tctech.se",[81,82]],["teknoduegroup.it",[81,82]],["teloliquido.com",[81,82]],["temasa.es",[81,82]],["textilprint.sk",[81,82]],["thehouseofautomata.com",[81,82]],["tmgernika.com",[81,82]],["toastetmoi.fr",[81,82]],["tollare.org",[81,82]],["trattoriabolognesi.it",[81,82]],["triperavigatana.com",[81,82]],["tuckerfranklininsgrp.com",[81,82]],["tuftuf.net",[81,82]],["turuletras.com",[81,82]],["umfmb.fr",[81,82]],["upapsa.com",[81,82]],["valenciatoday.es",[81,82]],["vanghel-und-morawski.de",[81,82]],["vickycan.com",[81,82]],["ville-de-salles.com",[81,82]],["webbigt.se",[81,82]],["westlede.be",[81,82]],["wiemker.org",[81,82]],["woolink.co",[81,82]],["wp.fratgsa.org",[81,82]],["xatobaxestion.com",[81,82]],["xfactor-gmbh.de",[81,82]],["yougoenglish.com",[81,82]],["zigmoon.com",[81,82]],["canyon.com",[83,84]],["drimsim.com",85],["eteam-winkler.de",86],["kdn-elektro.de",86],["elektro-kotz.de",86],["elektro-service-rauh.de",86],["elektroanlagenbuettner.de",86],["be-connect.online",86],["bayergruppe.com",86],["bayer-wkt.de",86],["bayer-wind.de",86],["bayer-wd.de",86],["elektro-joa.de",86],["htechnik.de",86],["ehk-service.de",86],["bittner-tv.de",86],["elektro-suelzner.de",86],["elektro-leps.de",86],["elektromax-hausgeraete.de",86],["elektrotechnik-schedel.de",86],["elkugmbh.de",86],["ln-elektro-gmbh.de",86],["weiss-blau-gmbh.de",86],["sunbeam-energy.de",86],["prokauf.com",86],["lichtstudio-kerl.de",86],["liebing-beese.de",86],["hoeschel-baumann.de",86],["hausgeraete-kraemer.de",86],["gehlhaar-elektrotechnik.de",86],["ehs-elektrotechnik.de",86],["elektrojarschke.de",86],["elektrotechnik-fleischmann.de",86],["elektroseemueller.de",86],["schoerling-blitz.de",86],["ast-apolda.com",86],["elektro-klippel.de",86],["arntz-haustechnik.de",86],["elektro-bindel.de",86],["elektrotechnik-weiss.com",86],["brandschutz-hamburg.de",86],["wagnerelektrotechnik.de",86],["el-kramer.de",86],["mks-hof.de",86],["wernz-elektro.de",86],["e3-energy.de",86],["sg-solar.de",86],["elektrokrebs.de",86],["elektro-roehrl.de",86],["elektro-kreher.de",86],["giegling-vonsaal.de",86],["elektro-lehmann.com",86],["ems-wurzen.de",86],["scholpp.de",87],["scholpp.es",87],["scholpp.pl",87],["scholpp.it",87],["ptc.eu",87],["scholpp.com",87],["abo24.de",87],["overdrive.com",87],["wetu.com",87],["superwatchman.com",88],["bitburger-braugruppe.de",89],["proteincompany.fi",90],["proteinbolaget.se",90],["snoopmedia.com",91],["myguide.de",91],["study-in-germany.de",91],["daad.de",91],["futterhaus.de",92],["scottsofstow.co.uk",[93,94]],["zawszepomorze.pl",95],["wasserkunst-hamburg.de",96],["lta.org.uk",97],["brico-travo.com",98],["theateramrand.de",99],["jugend-praesentiert.de",99],["buktube.com",100],["xhamster.com",100],["xhamster2.com",100],["xhamster3.com",100],["xhamster.desi",100],["evium.de",101],["epayments.com",102],["riceundspice.de",103],["happysocks.com",[104,105]],["win2day.at",106],["porp.pl",107],["weather.com",108],["gesundheitsamt-2025.de",109],["coastfashion.com",110],["oasisfashion.com",110],["warehousefashion.com",110],["misspap.com",110],["karenmillen.com",110],["boohooman.com",110],["nebo.app",111],["groupeonepoint.com",112],["edpsciences.org",113],["bemmaisseguro.com",114],["scheidegger.nl",115],["transparency.fb.com",[116,117]],["faq.whatsapp.com",117],["blog.whatsapp.com",117],["www.whatsapp.com",117],["phoenix.de",118],["strato.se",119],["strato.de",119],["mishcon.com",120],["bbva.es",122],["bbvauk.com",122],["bbva.be",122],["bbva.fr",122],["bbva.it",122],["bbva.pt",122],["suntech.cz",123],["digikey.co.za",124],["digikey.cn",124],["digikey.ee",124],["digikey.at",124],["digikey.be",124],["digikey.bg",124],["digikey.cz",124],["digikey.dk",124],["digikey.fi",124],["digikey.fr",124],["digikey.de",124],["digikey.gr",124],["digikey.hu",124],["digikey.ie",124],["digikey.it",124],["digikey.lv",124],["digikey.lt",124],["digikey.lu",124],["digikey.nl",124],["digikey.no",124],["digikey.pl",124],["digikey.pt",124],["digikey.ro",124],["digikey.sk",124],["digikey.si",124],["digikey.es",124],["digikey.se",124],["digikey.ch",124],["digikey.co.uk",124],["digikey.co.il",124],["digikey.com.mx",124],["digikey.ca",124],["digikey.com.br",124],["digikey.co.nz",124],["digikey.com.au",124],["digikey.co.th",124],["digikey.tw",124],["digikey.kr",124],["digikey.sg",124],["digikey.ph",124],["digikey.my",124],["digikey.jp",124],["digikey.in",124],["digikey.hk",124],["digikey.com",124],["eurosupps.nl",125],["pathe.nl",126],["makelaarsland.nl",127],["nordania.dk",128],["365direkte.no",128],["danskebank.lv",128],["danskebank.lt",128],["danskebank.no",128],["danskebank.fi",128],["danskebank.dk",128],["danskebank.com",128],["danskebank.se",128],["danskebank.co.uk",128],["danskeci.com",128],["danicapension.dk",128],["gewerbegebiete.de",129],["visti.it",130],["balay.es",131],["constructa.com",131],["gaggenau.com",131],["loudersound.com",132],["impulse.de",132],["pcgamer.com",132],["infoworld.com",132],["kiplinger.com",132],["omni.se",132],["it-times.de",132],["bitcoinmagazine.com",132],["deliciousmagazine.co.uk",132],["upday.com",132],["theguardian.com",132],["deutschlandcard.de",132],["szbz.de",132],["free-fonts.com",132],["lieferzeiten.info",132],["vice.com",132],["newsnow.co.uk",132],["out.com",132],["streampicker.de",132],["radiotimes.com",132],["nowtv.com",132],["kochbar.de",132],["toggo.de",132],["am-online.com",132],["n-tv.de",132],["newsandstar.co.uk",132],["tag24.de",132],["weltkunst.de",132],["noveauta.sk",132],["pnn.de",132],["economist.com",132],["crash.net",132],["norwaytoday.info",132],["insider.com",132],["preis.de",132],["ibroxnoise.co.uk",132],["celtsarehere.com",132],["nufcblog.co.uk",132],["sport1.de",132],["techconnect.com",132],["followfollow.com",132],["thespun.com",132],["mazdas247.com",132],["fastcar.co.uk",132],["vitalfootball.co.uk",132],["audi-sport.net",132],["bumble.com",132],["arcamax.com",132],["dilbert.com",132],["sportbible.com",132],["givemesport.com",132],["dartsnews.com",132],["gpfans.com",132],["justjared.com",132],["justjaredjr.com",132],["finanzen.at",132],["flights-idealo.co.uk",132],["idealo.com",132],["idealo.se",132],["idealo.nl",132],["idealo.pl",132],["idealo.pt",132],["idealo.fi",132],["idealo.dk",132],["idealo.no",132],["idealo.in",132],["idealo.at",132],["ladenzeile.at",132],["berliner-zeitung.de",132],["urbia.de",132],["essen-und-trinken.de",132],["wetter.de",132],["rtl-living.de",132],["vox.de",132],["ladenzeile.de",132],["advocate.com",132],["idealo.de",132],["wigantoday.net",132],["economistgroup.com",132],["transfermarkt.nl",132],["transfermarkt.es",132],["transfermarkt.pl",132],["transfermarkt.pt",132],["transfermarkt.at",132],["transfermarkt.it",132],["transfermarkt.fr",132],["transfermarkt.de",132],["transfermarkt.be",132],["transfermarkt.co.uk",132],["transfermarkt.us",132],["footballfancast.com",132],["cio.com",132],["jezebel.com",132],["splinternews.com",132],["denofgeek.com",132],["kinja.com",132],["theinventory.com",132],["rollingstone.de",132],["sueddeutsche.de",132],["csoonline.com",132],["tvmovie.de",132],["testberichte.de",132],["pcgameshardware.de",132],["4players.de",132],["guj.de",132],["bild.de",132],["wieistmeineip.de",132],["testbild.de",132],["stylebook.de",132],["skygroup.sky",132],["speisekarte.de",132],["haeuser.de",132],["cmo.com.au",132],["pcworld.co.nz",132],["idealo.it",132],["transfermarkt.jp",132],["transfermarkt.co.id",132],["autoexpress.co.uk",132],["transfermarkt.com",132],["esportsclub.nl",132],["webwinkel.tubantia.nl",132],["shopalike.nl",132],["autoweek.nl",132],["pcworld.es",132],["macworld.es",132],["idealo.es",132],["businessinsider.es",132],["motor.es",132],["autobild.es",132],["driving.co.uk",132],["stern.de",132],["pcgames.de",132],["sport.de",132],["idealo.fr",132],["barrons.com",132],["tori.fi",132],["snow-forecast.com",132],["tidende.dk",132],["kraloyun.com",132],["arnnet.com.au",132],["bunte.de",132],["handelsblatt.com",132],["techbook.de",132],["metal-hammer.de",132],["macworld.co.uk",132],["maxisciences.com",132],["ohmymag.com",132],["voici.fr",132],["geo.de",132],["businessinsider.de",132],["heise.de",132],["meinestadt.de",132],["politico.eu",132],["spieletipps.de",132],["finanznachrichten.de",132],["vtwonen.nl",132],["stol.it",132],["waitrose.com",133],["storyhouseegmont.dk",134],["storyhouseegmont.no",134],["storyhouseegmont.se",134],["egmont.com",134],["nordiskfilm.com",134]]);

const entitiesMap = new Map([]);

const exceptionsMap = new Map([]);

/******************************************************************************/

function removeClass(
    token = '',
    selector = '',
    behavior = ''
) {
    if ( typeof token !== 'string' ) { return; }
    if ( token === '' ) { return; }
    const classTokens = token.split(/\s*\|\s*/);
    if ( selector === '' ) {
        selector = '.' + classTokens.map(a => CSS.escape(a)).join(',.');
    }
    const mustStay = /\bstay\b/.test(behavior);
    let timer;
    const rmclass = function() {
        timer = undefined;
        try {
            const nodes = document.querySelectorAll(selector);
            for ( const node of nodes ) {
                node.classList.remove(...classTokens);
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
        timer = self.requestIdleCallback(rmclass, { timeout: 67 });
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
            'loading': 1,
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
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
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
                return { matchAll: true };
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
try { hnParts.push(...document.location.hostname.split('.')); }
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
