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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["has-no-scroll","","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["idg.se",3],["gearaid.com",4],["buildex.cz",5],["gruenderservice.at",6],["caiacosmetics.com",7],["pdc-big.nl",8],["pdc-big.it",8],["pdc-big.ie",8],["pdc-big.fr",8],["pdc-big.es",8],["pdc-big.be",8],["pdc-big.at",8],["pdc-big.co.uk",8],["pdc-big.de",8],["pdc-big.com",8],["elio-systems.io",[9,16]],["sanha.com",[9,16]],["recettesetcabas.com",10],["flinders.edu.au",11],["opera.com",12],["groningenairport.nl",13],["crocs.co.uk",[14,15]],["crocs.eu",[14,15]],["crocs.nl",[14,15]],["crocs.fi",[14,15]],["crocs.fr",[14,15]],["crocs.de",[14,15]],["rappjmed.ch",17],["stilord.fr",18],["stilord.it",18],["stilord.de",18],["stilord.es",18],["dasfutterhaus.at",19],["developer.paypal.com",20],["cpc2r.ch",21],["zen.com",22],["tecsafe.de",23],["foxracingshox.de",23],["stromnetz.berlin",24],["websummit.com",25],["thehustle.co",25],["epochtimes.fr",26],["ajbell.co.uk",27],["economiapertutti.bancaditalia.it",28],["quantamagazine.org",29],["tradersunion.com",29],["phsgreenleaf.co.uk",30],["phswashrooms.ie",30],["mccolls.co.uk",[31,32]],["crt.hr",33],["yourstorebox.com",34],["clickskeks.at",[35,36]],["housell.com",37],["lactostop.de",38],["mibe.de",38],["spilger.de",39],["dbs.si",40],["abcya.com",41],["jongcdenv.be",42],["umicore.jp",42],["umicore.cn",42],["umicore.pl",42],["umicore.kr",42],["umicore.co.th",42],["umicore.fr",42],["umicore.de",42],["donneurdecellulessouches.be",42],["stammzellenspender.be",42],["stemcelldonor.be",42],["umicore.com",42],["umicore.com.br",42],["koenvandenheuvel.be",42],["stamceldonor.be",42],["nahima.be",42],["catused.com",43],["eujuicers.cz",44],["graziellawicki.com",45],["funnelcockpit.com",45],["dnk.nl",46],["eam.de",47],["eam-netz.de",47],["tvp.pl",48],["cellardoor.co",49],["ampire.de",50],["verpackungsstadl.ch",50],["imkershoperzgebirge.de",50],["modellbahndealer.de",50],["tillit-bikes.shop",50],["bike-onlineshop.de",50],["futspo.de",50],["compravo.de",50],["perpedale.de",50],["modellbau-jung.de",50],["verpackungsstadl.at",50],["modellbau-vordermaier.de",50],["bike-supply.de",50],["wroc.pl",51],["basenio.de",52],["fm-systeme.de",53],["gartenhotel-crystal.at",54],["swffm.de",54],["studentenwerkfrankfurt.de",54],["dmsg.de",54],["bgk.pl",54],["pflegezeit-berlin.de",54],["gpd-nordost-onlineberatung.de",54],["proabschluss-beratung.de",54],["hilfe-telefon-missbrauch.online",54],["dww-suchtberatung.de",54],["cyberforum.de",54],["gutscheine.eurothermen.at",54],["wolff-mueller.de",54],["ras.bz.it",54],["wifiwien.at",[55,56]],["wifikaernten.at",[55,56]],["wifi.at",[55,56]],["pdf-archive.com",56],["5asec.pt",57],["tui.dk",57],["tui.fi",57],["tui.no",57],["tui.se",57],["salvagny.org",57],["leslipfrancais.fr",57],["wvb.de",[57,116]],["bremischevb.de",[57,116]],["meinebank.de",[57,116]],["vb-rb.de",[57,116]],["gladbacher-bank.de",[57,116]],["nordthueringer-volksbank.de",[57,116]],["bodenseebank.de",[57,116]],["rb-oberaudorf.de",[57,116]],["volksbank-trossingen.de",[57,116]],["owl-immobilien.de",[57,116]],["volksbank-backnang.de",[57,116]],["volksbank-international.de",[57,116]],["raiba-westhausen.de",[57,116]],["vr-nopf.cz",[57,116]],["vrbankimmobilien.de",[57,116]],["cvw-privatbank-ag.de",[57,116]],["rb-denzlingen-sexau.de",[57,116]],["rv-banken.de",[57,116]],["volksbank-remseck.de",[57,116]],["raiba-gr.de",[57,116]],["vrb-spangenberg.de",[57,116]],["rb-berghuelen.de",[57,116]],["vb-lauterecken.de",[57,116]],["rb-sondelfingen.de",[57,116]],["voba-deisslingen.de",[57,116]],["saechsischer-gewinnsparverein.de",[57,116]],["rb-hardt-bruhrain.de",[57,116]],["volksbank-daaden.de",[57,116]],["dervolksbanker.de",[57,116]],["volksbank-kirnau.de",[57,116]],["skbwitten.de",[57,116]],["raiba-ndwa.de",[57,116]],["volksbank-mittleres-erzgebirge.de",[57,116]],["rb-eching.de",[57,116]],["volksbank-aktiv.de",[57,116]],["vbsuedemsland.de",[57,116]],["voba-moeckmuehl.de",[57,116]],["volksbank-freiburg.de",[57,116]],["vbleos.de",[57,116]],["meine-rvb.de",[57,116]],["aachener-bank.de",[57,116]],["muenchner-bank.de",[57,116]],["volksbank-dh.de",[57,116]],["volksbankeg.de",[57,116]],["sparda-bank-hamburg.de",[57,116]],["sparda-sw.de",[57,116]],["volksbank-thueringen-mitte.de",[57,116]],["vrbankeg.de",[57,116]],["bernhauser-bank.de",[57,116]],["vvrbank-krp.de",[57,116]],["vvr-bank.de",[57,116]],["vb-mittelhessen.de",[57,116]],["vr-bayernmitte.de",[57,116]],["vobadhk.de",[57,116]],["rheingauer-volksbank.de",[57,116]],["dovoba.de",[57,116]],["vr-dachau.de",[57,116]],["pollfish.com",58],["werkenbijtrekpleister.nl",59],["werkenbijkruidvat.be",59],["rassenlijst.info",59],["werkenbijiciparisxl.nl",59],["tesa-labtec.com",60],["tesatape.ru",60],["tesa.com",60],["flightradar24.com",61],["apk-vk.at",62],["vietnamairlines.com",63],["incotec.com",64],["croda.com",64],["exaktafoto.se",65],["campingdusoleil.com",66],["hotel-la-chaumiere.com",66],["les-anges-gardiens.fr",66],["croco-kid.com",66],["cambridge-centre.fr",66],["equisud.com",66],["allokebab-pau.fr",66],["etre-visible.local.fr",66],["mas-montebello66.com",66],["camping-residentiel-les-marronniers-jura.fr",66],["dj4events.fr",66],["saintjoursexpertmaritime.com",66],["az-renovation.fr",66],["presquilemultiservices.com",66],["hotel-aigoual.com",66],["hotel-restaurant-pau.com",66],["desrayaud-paysagistes.com",66],["hotelsaintcharles.fr",66],["agvillagecamarguais.com",66],["joyella.com",66],["gabriel-godard.com",66],["artech-sellerie.com",66],["motoclubernee.com",66],["ledauphinhotel.com",66],["cuisin-studio.com",66],["biomeo-environnement.com",66],["leman-instruments.com",66],["esthetique-meyerbeer.com",66],["institut-bio-naturel-nice.fr",66],["nature-et-bois.fr",66],["transmissions-bordeaux.com",66],["kinechartreuse.com",66],["corsegourmande.com",66],["cotedecor.com",66],["restaurant-la-badiane.fr",66],["systelia.fr",66],["lesjardinsinterieurs.com",66],["helenevue.com",66],["saubusse-thermes.com",66],["dehn.es",67],["dehn.fr",67],["dehn.it",67],["dehn.hu",67],["desitek.dk",67],["dehn.at",67],["dehn.de",67],["wwz.ch",68],["inyova.at",69],["inyova.ch",69],["inyova.de",69],["ccalbacenter.com",69],["wamu.org",69],["momentive.com",70],["kennedyslaw.com",71],["elekta.com",72],["ige.ch",73],["stratasysdirect.com",74],["stratasys.com",74],["werkenbijkruidvat.nl",75],["ghacks.net",76],["cutoff.es",77],["whyopencomputing.com",77],["mbanc.com",78],["dentalgalindo.com",[79,80]],["brutalvisual.com",[79,80]],["archeologia.com.pl",[79,80]],["letrayframe.com",[79,80]],["osteofisintegral.es",[79,80]],["uco.cat",[79,80]],["buecheler-kollegen.de",[79,80]],["seminariodeosma-soria.org",[79,80]],["kamensenica.sk",[79,80]],["movimentoofficinedelsud.it",[79,80]],["trident.se",[79,80]],["semanasantademalagaayeryhoy.com",[79,80]],["diazfloristasestrella.com",[79,80]],["cosechavida.com",[79,80]],["centre-hypnose-moselle.com",[79,80]],["broncoillustration.com",[79,80]],["sumoingenio.com",[79,80]],["aligepro.es",[79,80]],["muevo.es",[79,80]],["azulejosacedo.com",[79,80]],["sana.cz",[79,80]],["aliapinto.com",[79,80]],["tsconline.es",[79,80]],["polifast.it",[79,80]],["napos.cz",[79,80]],["gutshaus-neuendorf-usedom.de",[79,80]],["kunterbunte-kinder.de",[79,80]],["desatando.org",[79,80]],["ledocom.cz",[79,80]],["aliciasuarez.net",[79,80]],["diabramar.com",[79,80]],["lamagnalonga.org",[79,80]],["benejamrefrigeracion.com",[79,80]],["micropigmentacioncapilarbcn.com",[79,80]],["revistaauge.com.ar",[79,80]],["arcusnet.se",[79,80]],["videogenic.es",[79,80]],["grundschule-remagen.de",[79,80]],["aceitessatunion.com",[79,80]],["servigraphic.com.ar",[79,80]],["textsteine.de",[79,80]],["campergarage.es",[79,80]],["administradorfincasblog.com",[79,80]],["balgal.es",[79,80]],["grafika-dtp-produkcia.sk",[79,80]],["unmardeconstelaciones.com",[79,80]],["salobella.com",[79,80]],["careon.se",[79,80]],["gymnosport.com",[79,80]],["easyhomes.com.es",[79,80]],["casavaledalama.pt",[79,80]],["dosc.es",[79,80]],["fcfoz.pt",[79,80]],["berevolk.com",[79,80]],["hvpropertyclearance.co.uk",[79,80]],["calamo.se",[79,80]],["elserratplanoles.com",[79,80]],["bubblessea.es",[79,80]],["disperator.se",[79,80]],["ecoparquets.com",[79,80]],["zlotaraczkalublin.pl",[79,80]],["congresoscostadelsol.com",[79,80]],["pneumaticiroma.it",[79,80]],["asprona.es",[79,80]],["virgendefatima.es",[79,80]],["patronatpremia.cat",[79,80]],["2points13.fr",[79,80]],["3d3.es",[79,80]],["abantos.es",[79,80]],["abastanimacio.org",[79,80]],["academiafrancesadebelleza.co",[79,80]],["acaluca.org",[79,80]],["acce.es",[79,80]],["ad-particles.com",[79,80]],["adea.sk",[79,80]],["afplr.fr",[79,80]],["agiletalon.fr",[79,80]],["agiratou.com",[79,80]],["aidaromero.com",[79,80]],["alkoholochnarkotika.se",[79,80]],["alligatorbioscience.se",[79,80]],["anea.es",[79,80]],["animala.es",[79,80]],["antequerabelleza.com",[79,80]],["apimadrid.net",[79,80]],["aquatrend.sk",[79,80]],["arabesque-formation.org",[79,80]],["arrivamallorca.es",[79,80]],["arteydeco.es",[79,80]],["asapservicios.net",[79,80]],["aspock.com",[79,80]],["atout-voyages.com",[79,80]],["autocareslazara.es",[79,80]],["autocaresmariano.com",[79,80]],["autoform.pl",[79,80]],["ayudatranspersonal.com",[79,80]],["bacabeton.cz",[79,80]],["begalvi.com",[79,80]],["bent-com.com",[79,80]],["berliner-haeuser.de",[79,80]],["bespokespain.com",[79,80]],["bevent-rasch.se",[79,80]],["bio-cord.es",[79,80]],["biotropica.fr",[79,80]],["bornes-eurorelais.fr",[79,80]],["braeu-stueble.de",[79,80]],["brendanoharamp.scot",[79,80]],["briau.com",[79,80]],["caleulalia.com",[79,80]],["cande-sur-beuvron.com",[79,80]],["carlhag.se",[79,80]],["carrier.se",[79,80]],["casadelaveiga.com",[79,80]],["caytas.com.tr",[79,80]],["cecjecuador.org.ec",[79,80]],["cegef.com",[79,80]],["centrediagonal.com",[79,80]],["centropolisportivomassari.it",[79,80]],["cerai.org",[79,80]],["cervosgrup.com",[79,80]],["chimeneasalicante.com",[79,80]],["circodelshow.com",[79,80]],["cliatec.com",[79,80]],["clinicabadal.es",[79,80]],["cometh-consulting.com",[79,80]],["copysud.fr",[79,80]],["cortilar.com",[79,80]],["crystal-finance.com",[79,80]],["ctangana.com",[79,80]],["cugatresidencial.com",[79,80]],["dake.es",[79,80]],["datatal.se",[79,80]],["degom.com",[79,80]],["delfis.es",[79,80]],["delogica.com",[79,80]],["dentalcompany.es",[79,80]],["descarpack.com.br",[79,80]],["desfiladeroediciones.com",[79,80]],["desomer.be",[79,80]],["diarioandalucia.es",[79,80]],["dibujos-animados.net",[79,80]],["direkt-immobilie.de",[79,80]],["dovozautznemecka.cz",[79,80]],["drpuigdollers.com",[79,80]],["dunamys.inf.br",[79,80]],["easyimplantology.com",[79,80]],["eb2b.com.pl",[79,80]],["echo-mieszkania.pl",[79,80]],["eclinic.com.sg",[79,80]],["edgeict.com",[79,80]],["eiglaw.com",[79,80]],["elandexpediciones.es",[79,80]],["emalec.com",[79,80]],["enlighten.net",[79,80]],["equifab.es",[79,80]],["escuelanauticamarenostrum.com",[79,80]],["esgrima.cat",[79,80]],["espaisperconviure.es",[79,80]],["etbygg.com",[79,80]],["eurepieces.fr",[79,80]],["euroenvio.com",[79,80]],["eurotex.es",[79,80]],["expertetfinance.fr",[79,80]],["farmarsketrhyfuturum.cz",[79,80]],["fastvisa.fr",[79,80]],["fauxdiplomes.org",[79,80]],["fisiolistic.com",[79,80]],["fondazionealbertosordi.it",[79,80]],["foyersekcjapolska.eu",[79,80]],["fundacjaeds.pl",[79,80]],["galeriaxanadu.pl",[79,80]],["garcia-ibanez.com",[79,80]],["gestenaval.com",[79,80]],["glaskogen.se",[79,80]],["globalteam.es",[79,80]],["goia.org.pl",[79,80]],["granibier.com",[79,80]],["grundia.se",[79,80]],["grupoisn.com",[79,80]],["gruporhzaragoza.com",[79,80]],["hagagruppen.se",[79,80]],["halima-magazin.com",[79,80]],["handelskammaren.com",[79,80]],["helitecnics.com",[79,80]],["helux.se",[79,80]],["hermanosalcaraz.com",[79,80]],["hjarnkoll.se",[79,80]],["hmfoundation.com",[79,80]],["hormimpres.com",[79,80]],["hoteldeprony.fr",[79,80]],["hotelroyalcatania.it",[79,80]],["houjethai.nl",[79,80]],["hummer.cz",[79,80]],["icld.se",[79,80]],["ict-project.it",[79,80]],["imagelova.id",[79,80]],["imprentalaspalmas.com",[79,80]],["informamiele.it",[79,80]],["inission.com",[79,80]],["inmobiliariavolga.com",[79,80]],["international-terra-institute.com",[79,80]],["inwaspain.com",[79,80]],["izkigolf.eus",[79,80]],["jdmusic.se",[79,80]],["juveycamps.com",[79,80]],["karel1.nl",[79,80]],["kaunokapiniuprieziura.lt",[79,80]],["kcmkompresor.com",[79,80]],["kewaccountants.co.uk",[79,80]],["konkretplus.pl",[79,80]],["krajci.cz",[79,80]],["krisvagenut.se",[79,80]],["kyoceracapetown.co.za",[79,80]],["labaguette.pl",[79,80]],["labintegrados.com",[79,80]],["ladderupinc.com",[79,80]],["landskronafoto.org",[79,80]],["langarri.es",[79,80]],["lawa.es",[79,80]],["laxo.se",[79,80]],["layher.se",[79,80]],["lifetraveler.net",[79,80]],["lindrooshalsa.se",[79,80]],["lobolab.es",[79,80]],["maisqueromanicorutas.com",[79,80]],["mallandonoandroid.com",[79,80]],["masconcas.com",[79,80]],["mediabest.cz",[79,80]],["megustaelvino.es",[79,80]],["mensa.se",[79,80]],["mestiteslilis.com",[79,80]],["minutoprint.com",[79,80]],["mirano.cz",[79,80]],["mogador.cz",[79,80]],["morphestudio.es",[79,80]],["motoaxial.com",[79,80]],["multiversidad.es",[79,80]],["mundollaves.com",[79,80]],["musicotherapie-federationfrancaise.com",[79,80]],["nauticaravaning.com",[79,80]],["nestville.sk",[79,80]],["nestvillepark.sk",[79,80]],["netromsoftware.ro",[79,80]],["nojesfabriken.se",[79,80]],["oddoneout.se",[79,80]],["opako.pl",[79,80]],["oserlafrique.com",[79,80]],["paintballalcorcon.com",[79,80]],["pallejabcn.com",[79,80]],["penicilinafruits.com",[79,80]],["peregrinoslh.com",[79,80]],["permis-lausanne.ch",[79,80]],["pernillaandersson.se",[79,80]],["piazzadelgusto.it",[79,80]],["pipi-antik.dk",[79,80]],["plasticosgeca.com",[79,80]],["plastimyr.com",[79,80]],["portal.unimes.br",[79,80]],["pro-beruf.de",[79,80]],["prophecyinternational.com",[79,80]],["psicoterapeuta.org",[79,80]],["puertasprieto.com",[79,80]],["puntosdefantasia.es",[79,80]],["pzmk.org.pl",[79,80]],["rastromaquinas.com",[79,80]],["rectoraldecastillon.com",[79,80]],["reinomineral.com",[79,80]],["reklamefreunde.de",[79,80]],["restauraciontalavera.es",[79,80]],["restauranthispania.com",[79,80]],["ristoranteeziogritti.it",[79,80]],["rubinmedical.dk",[79,80]],["rubinmedical.no",[79,80]],["rubinmedical.se",[79,80]],["sak.se",[79,80]],["sammetais.com.br",[79,80]],["sebastiancurylo.pl",[79,80]],["serigrafiaiorgi.com",[79,80]],["seyart.com",[79,80]],["sgaim.com",[79,80]],["sicamemt.org",[79,80]],["siguealconejoblanco.es",[79,80]],["sinfimasa.com",[79,80]],["skp.se",[79,80]],["skrobczynski.pl",[79,80]],["slush.de",[79,80]],["solebike.it",[79,80]],["solu-watt.fr",[79,80]],["soluzionainmobiliaria.es",[79,80]],["somoparque.com",[79,80]],["sorgingaztemoda.com",[79,80]],["sroportal.sk",[79,80]],["ssmf.se",[79,80]],["stobrasil.com.br",[79,80]],["stoparmut2015.ch",[79,80]],["studiodimuro.com",[79,80]],["subkultur-hannover.de",[79,80]],["sustanciagris.com",[79,80]],["szkt.sk",[79,80]],["tagibergslagen.se",[79,80]],["tallergastronomico.es",[79,80]],["tarna.fhsk.se",[79,80]],["tassenyalitzacio.com",[79,80]],["tctech.se",[79,80]],["teknoduegroup.it",[79,80]],["teloliquido.com",[79,80]],["temasa.es",[79,80]],["textilprint.sk",[79,80]],["thehouseofautomata.com",[79,80]],["tmgernika.com",[79,80]],["toastetmoi.fr",[79,80]],["tollare.org",[79,80]],["trattoriabolognesi.it",[79,80]],["triperavigatana.com",[79,80]],["tuckerfranklininsgrp.com",[79,80]],["tuftuf.net",[79,80]],["turuletras.com",[79,80]],["umfmb.fr",[79,80]],["upapsa.com",[79,80]],["valenciatoday.es",[79,80]],["vanghel-und-morawski.de",[79,80]],["vickycan.com",[79,80]],["ville-de-salles.com",[79,80]],["webbigt.se",[79,80]],["westlede.be",[79,80]],["wiemker.org",[79,80]],["woolink.co",[79,80]],["wp.fratgsa.org",[79,80]],["xatobaxestion.com",[79,80]],["xfactor-gmbh.de",[79,80]],["yougoenglish.com",[79,80]],["zigmoon.com",[79,80]],["canyon.com",[81,82]],["drimsim.com",83],["eteam-winkler.de",84],["kdn-elektro.de",84],["elektro-kotz.de",84],["elektro-service-rauh.de",84],["elektroanlagenbuettner.de",84],["be-connect.online",84],["bayergruppe.com",84],["bayer-wkt.de",84],["bayer-wind.de",84],["bayer-wd.de",84],["elektro-joa.de",84],["htechnik.de",84],["ehk-service.de",84],["bittner-tv.de",84],["elektro-suelzner.de",84],["elektro-leps.de",84],["elektromax-hausgeraete.de",84],["elektrotechnik-schedel.de",84],["elkugmbh.de",84],["ln-elektro-gmbh.de",84],["weiss-blau-gmbh.de",84],["sunbeam-energy.de",84],["prokauf.com",84],["lichtstudio-kerl.de",84],["liebing-beese.de",84],["hoeschel-baumann.de",84],["hausgeraete-kraemer.de",84],["gehlhaar-elektrotechnik.de",84],["ehs-elektrotechnik.de",84],["elektrojarschke.de",84],["elektrotechnik-fleischmann.de",84],["elektroseemueller.de",84],["schoerling-blitz.de",84],["ast-apolda.com",84],["elektro-klippel.de",84],["arntz-haustechnik.de",84],["elektro-bindel.de",84],["elektrotechnik-weiss.com",84],["brandschutz-hamburg.de",84],["wagnerelektrotechnik.de",84],["el-kramer.de",84],["mks-hof.de",84],["wernz-elektro.de",84],["e3-energy.de",84],["sg-solar.de",84],["elektrokrebs.de",84],["elektro-roehrl.de",84],["elektro-kreher.de",84],["giegling-vonsaal.de",84],["elektro-lehmann.com",84],["ems-wurzen.de",84],["scholpp.de",85],["scholpp.es",85],["scholpp.pl",85],["scholpp.it",85],["ptc.eu",85],["scholpp.com",85],["abo24.de",85],["overdrive.com",85],["wetu.com",85],["superwatchman.com",86],["bitburger-braugruppe.de",87],["proteincompany.fi",88],["proteinbolaget.se",88],["snoopmedia.com",89],["myguide.de",89],["study-in-germany.de",89],["daad.de",89],["futterhaus.de",90],["scottsofstow.co.uk",[91,92]],["zawszepomorze.pl",93],["wasserkunst-hamburg.de",94],["lta.org.uk",95],["brico-travo.com",96],["theateramrand.de",97],["jugend-praesentiert.de",97],["buktube.com",98],["xhamster.com",98],["xhamster2.com",98],["xhamster3.com",98],["xhamster.desi",98],["evium.de",99],["epayments.com",100],["riceundspice.de",101],["happysocks.com",[102,103]],["win2day.at",104],["porp.pl",105],["gesundheitsamt-2025.de",106],["coastfashion.com",107],["oasisfashion.com",107],["warehousefashion.com",107],["misspap.com",107],["karenmillen.com",107],["boohooman.com",107],["nebo.app",108],["groupeonepoint.com",109],["edpsciences.org",110],["bemmaisseguro.com",111],["scheidegger.nl",112],["phoenix.de",113],["strato.se",114],["strato.de",114],["mishcon.com",115],["bbva.es",117],["bbvauk.com",117],["bbva.be",117],["bbva.fr",117],["bbva.it",117],["bbva.pt",117],["suntech.cz",118],["digikey.co.za",119],["digikey.cn",119],["digikey.ee",119],["digikey.at",119],["digikey.be",119],["digikey.bg",119],["digikey.cz",119],["digikey.dk",119],["digikey.fi",119],["digikey.fr",119],["digikey.de",119],["digikey.gr",119],["digikey.hu",119],["digikey.ie",119],["digikey.it",119],["digikey.lv",119],["digikey.lt",119],["digikey.lu",119],["digikey.nl",119],["digikey.no",119],["digikey.pl",119],["digikey.pt",119],["digikey.ro",119],["digikey.sk",119],["digikey.si",119],["digikey.es",119],["digikey.se",119],["digikey.ch",119],["digikey.co.uk",119],["digikey.co.il",119],["digikey.com.mx",119],["digikey.ca",119],["digikey.com.br",119],["digikey.co.nz",119],["digikey.com.au",119],["digikey.co.th",119],["digikey.tw",119],["digikey.kr",119],["digikey.sg",119],["digikey.ph",119],["digikey.my",119],["digikey.jp",119],["digikey.in",119],["digikey.hk",119],["digikey.com",119],["eurosupps.nl",120],["pathe.nl",121],["makelaarsland.nl",122],["nordania.dk",123],["365direkte.no",123],["danskebank.lv",123],["danskebank.lt",123],["danskebank.no",123],["danskebank.fi",123],["danskebank.dk",123],["danskebank.com",123],["danskebank.se",123],["danskebank.co.uk",123],["danskeci.com",123],["danicapension.dk",123],["gewerbegebiete.de",124],["visti.it",125],["balay.es",126],["constructa.com",126],["gaggenau.com",126],["loudersound.com",127],["impulse.de",127],["pcgamer.com",127],["infoworld.com",127],["kiplinger.com",127],["omni.se",127],["it-times.de",127],["bitcoinmagazine.com",127],["deliciousmagazine.co.uk",127],["upday.com",127],["theguardian.com",127],["deutschlandcard.de",127],["szbz.de",127],["free-fonts.com",127],["lieferzeiten.info",127],["vice.com",127],["newsnow.co.uk",127],["out.com",127],["streampicker.de",127],["radiotimes.com",127],["nowtv.com",127],["kochbar.de",127],["toggo.de",127],["am-online.com",127],["n-tv.de",127],["newsandstar.co.uk",127],["tag24.de",127],["weltkunst.de",127],["noveauta.sk",127],["pnn.de",127],["economist.com",127],["crash.net",127],["norwaytoday.info",127],["insider.com",127],["preis.de",127],["ibroxnoise.co.uk",127],["celtsarehere.com",127],["nufcblog.co.uk",127],["sport1.de",127],["techconnect.com",127],["followfollow.com",127],["thespun.com",127],["mazdas247.com",127],["fastcar.co.uk",127],["vitalfootball.co.uk",127],["audi-sport.net",127],["bumble.com",127],["arcamax.com",127],["dilbert.com",127],["sportbible.com",127],["givemesport.com",127],["dartsnews.com",127],["gpfans.com",127],["justjared.com",127],["justjaredjr.com",127],["finanzen.at",127],["flights-idealo.co.uk",127],["idealo.com",127],["idealo.se",127],["idealo.nl",127],["idealo.pl",127],["idealo.pt",127],["idealo.fi",127],["idealo.dk",127],["idealo.no",127],["idealo.in",127],["idealo.at",127],["ladenzeile.at",127],["berliner-zeitung.de",127],["urbia.de",127],["essen-und-trinken.de",127],["wetter.de",127],["rtl-living.de",127],["vox.de",127],["ladenzeile.de",127],["advocate.com",127],["idealo.de",127],["wigantoday.net",127],["economistgroup.com",127],["transfermarkt.nl",127],["transfermarkt.es",127],["transfermarkt.pl",127],["transfermarkt.pt",127],["transfermarkt.at",127],["transfermarkt.it",127],["transfermarkt.fr",127],["transfermarkt.de",127],["transfermarkt.be",127],["transfermarkt.co.uk",127],["transfermarkt.us",127],["footballfancast.com",127],["cio.com",127],["jezebel.com",127],["splinternews.com",127],["denofgeek.com",127],["kinja.com",127],["theinventory.com",127],["rollingstone.de",127],["sueddeutsche.de",127],["csoonline.com",127],["tvmovie.de",127],["testberichte.de",127],["pcgameshardware.de",127],["4players.de",127],["guj.de",127],["bild.de",127],["wieistmeineip.de",127],["testbild.de",127],["stylebook.de",127],["skygroup.sky",127],["speisekarte.de",127],["haeuser.de",127],["cmo.com.au",127],["pcworld.co.nz",127],["idealo.it",127],["transfermarkt.jp",127],["transfermarkt.co.id",127],["autoexpress.co.uk",127],["transfermarkt.com",127],["esportsclub.nl",127],["webwinkel.tubantia.nl",127],["shopalike.nl",127],["autoweek.nl",127],["pcworld.es",127],["macworld.es",127],["idealo.es",127],["businessinsider.es",127],["motor.es",127],["autobild.es",127],["driving.co.uk",127],["stern.de",127],["pcgames.de",127],["sport.de",127],["idealo.fr",127],["barrons.com",127],["tori.fi",127],["snow-forecast.com",127],["tidende.dk",127],["kraloyun.com",127],["arnnet.com.au",127],["bunte.de",127],["handelsblatt.com",127],["techbook.de",127],["metal-hammer.de",127],["macworld.co.uk",127],["maxisciences.com",127],["ohmymag.com",127],["voici.fr",127],["geo.de",127],["businessinsider.de",127],["heise.de",127],["meinestadt.de",127],["politico.eu",127],["spieletipps.de",127],["finanznachrichten.de",127],["vtwonen.nl",127],["stol.it",127],["waitrose.com",128],["storyhouseegmont.dk",129],["storyhouseegmont.no",129],["storyhouseegmont.se",129],["egmont.com",129],["nordiskfilm.com",129],["faq.whatsapp.com",130],["blog.whatsapp.com",130],["www.whatsapp.com",130]]);

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
