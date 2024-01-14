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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["idgcp__layer--active","html","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["cookie--not-set","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","","stay"],["transfer__cookie-wall-active",".transfer__cookie-wall-active","stay"],["has-no-scroll","","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["idg.se",3],["buildex.cz",4],["gruenderservice.at",5],["caiacosmetics.com",6],["pdc-big.nl",7],["pdc-big.it",7],["pdc-big.ie",7],["pdc-big.fr",7],["pdc-big.es",7],["pdc-big.be",7],["pdc-big.at",7],["pdc-big.co.uk",7],["pdc-big.de",7],["pdc-big.com",7],["elio-systems.io",[8,15]],["sanha.com",[8,15]],["recettesetcabas.com",9],["flinders.edu.au",10],["opera.com",11],["groningenairport.nl",12],["crocs.co.uk",[13,14]],["crocs.eu",[13,14]],["crocs.nl",[13,14]],["crocs.fi",[13,14]],["crocs.fr",[13,14]],["crocs.de",[13,14]],["rappjmed.ch",16],["stilord.fr",17],["stilord.it",17],["stilord.de",17],["stilord.es",17],["dasfutterhaus.at",18],["developer.paypal.com",19],["cpc2r.ch",20],["zen.com",21],["tecsafe.de",22],["stromnetz.berlin",23],["websummit.com",24],["thehustle.co",24],["epochtimes.fr",25],["ajbell.co.uk",26],["economiapertutti.bancaditalia.it",27],["quantamagazine.org",28],["tradersunion.com",28],["phsgreenleaf.co.uk",29],["phswashrooms.ie",29],["mccolls.co.uk",[30,31]],["foxracingshox.de",32],["crt.hr",33],["yourstorebox.com",34],["clickskeks.at",[35,36]],["housell.com",37],["lactostop.de",38],["mibe.de",38],["spilger.de",39],["dbs.si",40],["abcya.com",41],["jongcdenv.be",42],["umicore.jp",42],["umicore.cn",42],["umicore.pl",42],["umicore.kr",42],["umicore.co.th",42],["umicore.fr",42],["umicore.de",42],["donneurdecellulessouches.be",42],["stammzellenspender.be",42],["stemcelldonor.be",42],["umicore.com",42],["umicore.com.br",42],["koenvandenheuvel.be",42],["stamceldonor.be",42],["nahima.be",42],["catused.com",43],["eujuicers.cz",44],["graziellawicki.com",45],["funnelcockpit.com",45],["dnk.nl",46],["eam.de",47],["eam-netz.de",47],["tvp.pl",48],["cellardoor.co",49],["ampire.de",50],["verpackungsstadl.ch",50],["imkershoperzgebirge.de",50],["modellbahndealer.de",50],["tillit-bikes.shop",50],["bike-onlineshop.de",50],["futspo.de",50],["compravo.de",50],["perpedale.de",50],["modellbau-jung.de",50],["verpackungsstadl.at",50],["modellbau-vordermaier.de",50],["bike-supply.de",50],["wroc.pl",51],["basenio.de",52],["fm-systeme.de",53],["gartenhotel-crystal.at",54],["swffm.de",54],["studentenwerkfrankfurt.de",54],["dmsg.de",54],["bgk.pl",54],["pflegezeit-berlin.de",54],["gpd-nordost-onlineberatung.de",54],["proabschluss-beratung.de",54],["hilfe-telefon-missbrauch.online",54],["dww-suchtberatung.de",54],["cyberforum.de",54],["gutscheine.eurothermen.at",54],["wolff-mueller.de",54],["ras.bz.it",54],["wifiwien.at",[55,56]],["wifikaernten.at",[55,56]],["wifi.at",[55,56]],["pdf-archive.com",56],["5asec.pt",57],["tui.dk",57],["tui.fi",57],["tui.no",57],["tui.se",57],["leslipfrancais.fr",57],["bremischevb.de",[57,116]],["meinebank.de",[57,116]],["vb-rb.de",[57,116]],["gladbacher-bank.de",[57,116]],["nordthueringer-volksbank.de",[57,116]],["bodenseebank.de",[57,116]],["rb-oberaudorf.de",[57,116]],["volksbank-trossingen.de",[57,116]],["owl-immobilien.de",[57,116]],["volksbank-backnang.de",[57,116]],["volksbank-international.de",[57,116]],["raiba-westhausen.de",[57,116]],["vr-nopf.cz",[57,116]],["vrbankimmobilien.de",[57,116]],["cvw-privatbank-ag.de",[57,116]],["rb-denzlingen-sexau.de",[57,116]],["rv-banken.de",[57,116]],["volksbank-remseck.de",[57,116]],["raiba-gr.de",[57,116]],["vrb-spangenberg.de",[57,116]],["rb-berghuelen.de",[57,116]],["vb-lauterecken.de",[57,116]],["rb-sondelfingen.de",[57,116]],["voba-deisslingen.de",[57,116]],["saechsischer-gewinnsparverein.de",[57,116]],["rb-hardt-bruhrain.de",[57,116]],["volksbank-daaden.de",[57,116]],["dervolksbanker.de",[57,116]],["volksbank-kirnau.de",[57,116]],["skbwitten.de",[57,116]],["raiba-ndwa.de",[57,116]],["volksbank-mittleres-erzgebirge.de",[57,116]],["rb-eching.de",[57,116]],["volksbank-aktiv.de",[57,116]],["vbsuedemsland.de",[57,116]],["voba-moeckmuehl.de",[57,116]],["volksbank-freiburg.de",[57,116]],["vbleos.de",[57,116]],["meine-rvb.de",[57,116]],["aachener-bank.de",[57,116]],["muenchner-bank.de",[57,116]],["volksbank-dh.de",[57,116]],["volksbankeg.de",[57,116]],["sparda-bank-hamburg.de",[57,116]],["sparda-sw.de",[57,116]],["volksbank-thueringen-mitte.de",[57,116]],["vrbankeg.de",[57,116]],["bernhauser-bank.de",[57,116]],["vvrbank-krp.de",[57,116]],["vvr-bank.de",[57,116]],["vb-mittelhessen.de",[57,116]],["vr-bayernmitte.de",[57,116]],["vobadhk.de",[57,116]],["rheingauer-volksbank.de",[57,116]],["dovoba.de",[57,116]],["vr-dachau.de",[57,116]],["pollfish.com",58],["werkenbijtrekpleister.nl",59],["werkenbijkruidvat.be",59],["rassenlijst.info",59],["werkenbijiciparisxl.nl",59],["tesa-labtec.com",60],["tesatape.ru",60],["tesa.com",60],["flightradar24.com",61],["apk-vk.at",62],["vietnamairlines.com",63],["incotec.com",64],["croda.com",64],["exaktafoto.se",65],["campingdusoleil.com",66],["hotel-la-chaumiere.com",66],["les-anges-gardiens.fr",66],["croco-kid.com",66],["cambridge-centre.fr",66],["equisud.com",66],["allokebab-pau.fr",66],["etre-visible.local.fr",66],["mas-montebello66.com",66],["camping-residentiel-les-marronniers-jura.fr",66],["dj4events.fr",66],["saintjoursexpertmaritime.com",66],["az-renovation.fr",66],["presquilemultiservices.com",66],["hotel-aigoual.com",66],["hotel-restaurant-pau.com",66],["desrayaud-paysagistes.com",66],["hotelsaintcharles.fr",66],["agvillagecamarguais.com",66],["joyella.com",66],["gabriel-godard.com",66],["artech-sellerie.com",66],["motoclubernee.com",66],["ledauphinhotel.com",66],["cuisin-studio.com",66],["biomeo-environnement.com",66],["leman-instruments.com",66],["esthetique-meyerbeer.com",66],["institut-bio-naturel-nice.fr",66],["nature-et-bois.fr",66],["transmissions-bordeaux.com",66],["kinechartreuse.com",66],["corsegourmande.com",66],["cotedecor.com",66],["restaurant-la-badiane.fr",66],["systelia.fr",66],["lesjardinsinterieurs.com",66],["helenevue.com",66],["saubusse-thermes.com",66],["dehn.es",67],["dehn.fr",67],["dehn.it",67],["dehn.hu",67],["desitek.dk",67],["dehn.at",67],["dehn.de",67],["wwz.ch",68],["inyova.at",69],["inyova.ch",69],["inyova.de",69],["ccalbacenter.com",69],["wamu.org",69],["momentive.com",70],["kennedyslaw.com",71],["elekta.com",72],["stratasysdirect.com",73],["stratasys.com",73],["werkenbijkruidvat.nl",74],["ghacks.net",75],["cutoff.es",76],["whyopencomputing.com",76],["mbanc.com",77],["dentalgalindo.com",[78,79]],["brutalvisual.com",[78,79]],["archeologia.com.pl",[78,79]],["letrayframe.com",[78,79]],["osteofisintegral.es",[78,79]],["uco.cat",[78,79]],["buecheler-kollegen.de",[78,79]],["seminariodeosma-soria.org",[78,79]],["kamensenica.sk",[78,79]],["movimentoofficinedelsud.it",[78,79]],["trident.se",[78,79]],["semanasantademalagaayeryhoy.com",[78,79]],["diazfloristasestrella.com",[78,79]],["cosechavida.com",[78,79]],["centre-hypnose-moselle.com",[78,79]],["broncoillustration.com",[78,79]],["sumoingenio.com",[78,79]],["aligepro.es",[78,79]],["muevo.es",[78,79]],["azulejosacedo.com",[78,79]],["sana.cz",[78,79]],["aliapinto.com",[78,79]],["tsconline.es",[78,79]],["polifast.it",[78,79]],["napos.cz",[78,79]],["gutshaus-neuendorf-usedom.de",[78,79]],["kunterbunte-kinder.de",[78,79]],["desatando.org",[78,79]],["ledocom.cz",[78,79]],["aliciasuarez.net",[78,79]],["diabramar.com",[78,79]],["lamagnalonga.org",[78,79]],["benejamrefrigeracion.com",[78,79]],["micropigmentacioncapilarbcn.com",[78,79]],["revistaauge.com.ar",[78,79]],["arcusnet.se",[78,79]],["videogenic.es",[78,79]],["grundschule-remagen.de",[78,79]],["aceitessatunion.com",[78,79]],["servigraphic.com.ar",[78,79]],["textsteine.de",[78,79]],["campergarage.es",[78,79]],["administradorfincasblog.com",[78,79]],["balgal.es",[78,79]],["grafika-dtp-produkcia.sk",[78,79]],["unmardeconstelaciones.com",[78,79]],["salobella.com",[78,79]],["careon.se",[78,79]],["gymnosport.com",[78,79]],["easyhomes.com.es",[78,79]],["casavaledalama.pt",[78,79]],["dosc.es",[78,79]],["fcfoz.pt",[78,79]],["berevolk.com",[78,79]],["hvpropertyclearance.co.uk",[78,79]],["calamo.se",[78,79]],["elserratplanoles.com",[78,79]],["bubblessea.es",[78,79]],["disperator.se",[78,79]],["ecoparquets.com",[78,79]],["zlotaraczkalublin.pl",[78,79]],["congresoscostadelsol.com",[78,79]],["pneumaticiroma.it",[78,79]],["asprona.es",[78,79]],["virgendefatima.es",[78,79]],["patronatpremia.cat",[78,79]],["2points13.fr",[78,79]],["3d3.es",[78,79]],["abantos.es",[78,79]],["abastanimacio.org",[78,79]],["academiafrancesadebelleza.co",[78,79]],["acaluca.org",[78,79]],["acce.es",[78,79]],["ad-particles.com",[78,79]],["adea.sk",[78,79]],["afplr.fr",[78,79]],["agiletalon.fr",[78,79]],["agiratou.com",[78,79]],["aidaromero.com",[78,79]],["alkoholochnarkotika.se",[78,79]],["alligatorbioscience.se",[78,79]],["anea.es",[78,79]],["animala.es",[78,79]],["antequerabelleza.com",[78,79]],["apimadrid.net",[78,79]],["aquatrend.sk",[78,79]],["arabesque-formation.org",[78,79]],["arrivamallorca.es",[78,79]],["arteydeco.es",[78,79]],["asapservicios.net",[78,79]],["aspock.com",[78,79]],["atout-voyages.com",[78,79]],["autocareslazara.es",[78,79]],["autocaresmariano.com",[78,79]],["autoform.pl",[78,79]],["ayudatranspersonal.com",[78,79]],["bacabeton.cz",[78,79]],["begalvi.com",[78,79]],["bent-com.com",[78,79]],["berliner-haeuser.de",[78,79]],["bespokespain.com",[78,79]],["bevent-rasch.se",[78,79]],["bio-cord.es",[78,79]],["biotropica.fr",[78,79]],["bornes-eurorelais.fr",[78,79]],["braeu-stueble.de",[78,79]],["brendanoharamp.scot",[78,79]],["briau.com",[78,79]],["caleulalia.com",[78,79]],["cande-sur-beuvron.com",[78,79]],["carlhag.se",[78,79]],["carrier.se",[78,79]],["casadelaveiga.com",[78,79]],["caytas.com.tr",[78,79]],["cecjecuador.org.ec",[78,79]],["cegef.com",[78,79]],["centrediagonal.com",[78,79]],["centropolisportivomassari.it",[78,79]],["cerai.org",[78,79]],["cervosgrup.com",[78,79]],["chimeneasalicante.com",[78,79]],["circodelshow.com",[78,79]],["cliatec.com",[78,79]],["clinicabadal.es",[78,79]],["cometh-consulting.com",[78,79]],["copysud.fr",[78,79]],["cortilar.com",[78,79]],["crystal-finance.com",[78,79]],["ctangana.com",[78,79]],["cugatresidencial.com",[78,79]],["dake.es",[78,79]],["datatal.se",[78,79]],["degom.com",[78,79]],["delfis.es",[78,79]],["delogica.com",[78,79]],["dentalcompany.es",[78,79]],["descarpack.com.br",[78,79]],["desfiladeroediciones.com",[78,79]],["desomer.be",[78,79]],["diarioandalucia.es",[78,79]],["dibujos-animados.net",[78,79]],["direkt-immobilie.de",[78,79]],["dovozautznemecka.cz",[78,79]],["drpuigdollers.com",[78,79]],["dunamys.inf.br",[78,79]],["easyimplantology.com",[78,79]],["eb2b.com.pl",[78,79]],["echo-mieszkania.pl",[78,79]],["eclinic.com.sg",[78,79]],["edgeict.com",[78,79]],["eiglaw.com",[78,79]],["elandexpediciones.es",[78,79]],["emalec.com",[78,79]],["enlighten.net",[78,79]],["equifab.es",[78,79]],["escuelanauticamarenostrum.com",[78,79]],["esgrima.cat",[78,79]],["espaisperconviure.es",[78,79]],["etbygg.com",[78,79]],["eurepieces.fr",[78,79]],["euroenvio.com",[78,79]],["eurotex.es",[78,79]],["expertetfinance.fr",[78,79]],["farmarsketrhyfuturum.cz",[78,79]],["fastvisa.fr",[78,79]],["fauxdiplomes.org",[78,79]],["fisiolistic.com",[78,79]],["fondazionealbertosordi.it",[78,79]],["foyersekcjapolska.eu",[78,79]],["fundacjaeds.pl",[78,79]],["galeriaxanadu.pl",[78,79]],["garcia-ibanez.com",[78,79]],["gestenaval.com",[78,79]],["glaskogen.se",[78,79]],["globalteam.es",[78,79]],["goia.org.pl",[78,79]],["granibier.com",[78,79]],["grundia.se",[78,79]],["grupoisn.com",[78,79]],["gruporhzaragoza.com",[78,79]],["hagagruppen.se",[78,79]],["halima-magazin.com",[78,79]],["handelskammaren.com",[78,79]],["helitecnics.com",[78,79]],["helux.se",[78,79]],["hermanosalcaraz.com",[78,79]],["hjarnkoll.se",[78,79]],["hmfoundation.com",[78,79]],["hormimpres.com",[78,79]],["hoteldeprony.fr",[78,79]],["hotelroyalcatania.it",[78,79]],["houjethai.nl",[78,79]],["hummer.cz",[78,79]],["icld.se",[78,79]],["ict-project.it",[78,79]],["imagelova.id",[78,79]],["imprentalaspalmas.com",[78,79]],["informamiele.it",[78,79]],["inission.com",[78,79]],["inmobiliariavolga.com",[78,79]],["international-terra-institute.com",[78,79]],["inwaspain.com",[78,79]],["izkigolf.eus",[78,79]],["jdmusic.se",[78,79]],["juveycamps.com",[78,79]],["karel1.nl",[78,79]],["kaunokapiniuprieziura.lt",[78,79]],["kcmkompresor.com",[78,79]],["kewaccountants.co.uk",[78,79]],["konkretplus.pl",[78,79]],["krajci.cz",[78,79]],["krisvagenut.se",[78,79]],["kyoceracapetown.co.za",[78,79]],["labaguette.pl",[78,79]],["labintegrados.com",[78,79]],["ladderupinc.com",[78,79]],["landskronafoto.org",[78,79]],["langarri.es",[78,79]],["lawa.es",[78,79]],["laxo.se",[78,79]],["layher.se",[78,79]],["lifetraveler.net",[78,79]],["lindrooshalsa.se",[78,79]],["lobolab.es",[78,79]],["maisqueromanicorutas.com",[78,79]],["mallandonoandroid.com",[78,79]],["masconcas.com",[78,79]],["mediabest.cz",[78,79]],["megustaelvino.es",[78,79]],["mensa.se",[78,79]],["mestiteslilis.com",[78,79]],["minutoprint.com",[78,79]],["mirano.cz",[78,79]],["mogador.cz",[78,79]],["morphestudio.es",[78,79]],["motoaxial.com",[78,79]],["multiversidad.es",[78,79]],["mundollaves.com",[78,79]],["musicotherapie-federationfrancaise.com",[78,79]],["nauticaravaning.com",[78,79]],["nestville.sk",[78,79]],["nestvillepark.sk",[78,79]],["netromsoftware.ro",[78,79]],["nojesfabriken.se",[78,79]],["oddoneout.se",[78,79]],["opako.pl",[78,79]],["oserlafrique.com",[78,79]],["paintballalcorcon.com",[78,79]],["pallejabcn.com",[78,79]],["penicilinafruits.com",[78,79]],["peregrinoslh.com",[78,79]],["permis-lausanne.ch",[78,79]],["pernillaandersson.se",[78,79]],["piazzadelgusto.it",[78,79]],["pipi-antik.dk",[78,79]],["plasticosgeca.com",[78,79]],["plastimyr.com",[78,79]],["portal.unimes.br",[78,79]],["pro-beruf.de",[78,79]],["prophecyinternational.com",[78,79]],["psicoterapeuta.org",[78,79]],["puertasprieto.com",[78,79]],["puntosdefantasia.es",[78,79]],["pzmk.org.pl",[78,79]],["rastromaquinas.com",[78,79]],["rectoraldecastillon.com",[78,79]],["reinomineral.com",[78,79]],["reklamefreunde.de",[78,79]],["restauraciontalavera.es",[78,79]],["restauranthispania.com",[78,79]],["ristoranteeziogritti.it",[78,79]],["rubinmedical.dk",[78,79]],["rubinmedical.no",[78,79]],["rubinmedical.se",[78,79]],["sak.se",[78,79]],["sammetais.com.br",[78,79]],["sebastiancurylo.pl",[78,79]],["serigrafiaiorgi.com",[78,79]],["seyart.com",[78,79]],["sgaim.com",[78,79]],["sicamemt.org",[78,79]],["siguealconejoblanco.es",[78,79]],["sinfimasa.com",[78,79]],["skp.se",[78,79]],["skrobczynski.pl",[78,79]],["slush.de",[78,79]],["solebike.it",[78,79]],["solu-watt.fr",[78,79]],["soluzionainmobiliaria.es",[78,79]],["somoparque.com",[78,79]],["sorgingaztemoda.com",[78,79]],["sroportal.sk",[78,79]],["ssmf.se",[78,79]],["stobrasil.com.br",[78,79]],["stoparmut2015.ch",[78,79]],["studiodimuro.com",[78,79]],["subkultur-hannover.de",[78,79]],["sustanciagris.com",[78,79]],["szkt.sk",[78,79]],["tagibergslagen.se",[78,79]],["tallergastronomico.es",[78,79]],["tarna.fhsk.se",[78,79]],["tassenyalitzacio.com",[78,79]],["tctech.se",[78,79]],["teknoduegroup.it",[78,79]],["teloliquido.com",[78,79]],["temasa.es",[78,79]],["textilprint.sk",[78,79]],["thehouseofautomata.com",[78,79]],["tmgernika.com",[78,79]],["toastetmoi.fr",[78,79]],["tollare.org",[78,79]],["trattoriabolognesi.it",[78,79]],["triperavigatana.com",[78,79]],["tuckerfranklininsgrp.com",[78,79]],["tuftuf.net",[78,79]],["turuletras.com",[78,79]],["umfmb.fr",[78,79]],["upapsa.com",[78,79]],["valenciatoday.es",[78,79]],["vanghel-und-morawski.de",[78,79]],["vickycan.com",[78,79]],["ville-de-salles.com",[78,79]],["webbigt.se",[78,79]],["westlede.be",[78,79]],["wiemker.org",[78,79]],["woolink.co",[78,79]],["wp.fratgsa.org",[78,79]],["xatobaxestion.com",[78,79]],["xfactor-gmbh.de",[78,79]],["yougoenglish.com",[78,79]],["zigmoon.com",[78,79]],["canyon.com",[80,81]],["drimsim.com",82],["eteam-winkler.de",83],["kdn-elektro.de",83],["elektro-kotz.de",83],["elektro-service-rauh.de",83],["elektroanlagenbuettner.de",83],["be-connect.online",83],["bayergruppe.com",83],["bayer-wkt.de",83],["bayer-wind.de",83],["bayer-wd.de",83],["elektro-joa.de",83],["htechnik.de",83],["ehk-service.de",83],["bittner-tv.de",83],["elektro-suelzner.de",83],["elektro-leps.de",83],["elektromax-hausgeraete.de",83],["elektrotechnik-schedel.de",83],["elkugmbh.de",83],["ln-elektro-gmbh.de",83],["weiss-blau-gmbh.de",83],["sunbeam-energy.de",83],["prokauf.com",83],["lichtstudio-kerl.de",83],["liebing-beese.de",83],["hoeschel-baumann.de",83],["hausgeraete-kraemer.de",83],["gehlhaar-elektrotechnik.de",83],["ehs-elektrotechnik.de",83],["elektrojarschke.de",83],["elektrotechnik-fleischmann.de",83],["elektroseemueller.de",83],["schoerling-blitz.de",83],["ast-apolda.com",83],["elektro-klippel.de",83],["arntz-haustechnik.de",83],["elektro-bindel.de",83],["elektrotechnik-weiss.com",83],["brandschutz-hamburg.de",83],["wagnerelektrotechnik.de",83],["el-kramer.de",83],["mks-hof.de",83],["wernz-elektro.de",83],["e3-energy.de",83],["sg-solar.de",83],["elektrokrebs.de",83],["elektro-roehrl.de",83],["elektro-kreher.de",83],["giegling-vonsaal.de",83],["elektro-lehmann.com",83],["ems-wurzen.de",83],["scholpp.es",84],["scholpp.pl",84],["scholpp.it",84],["ptc.eu",84],["scholpp.com",84],["abo24.de",84],["overdrive.com",84],["wetu.com",84],["superwatchman.com",85],["bitburger-braugruppe.de",86],["proteincompany.fi",87],["proteinbolaget.se",87],["snoopmedia.com",88],["myguide.de",88],["study-in-germany.de",88],["daad.de",88],["futterhaus.de",89],["scottsofstow.co.uk",[90,91]],["zawszepomorze.pl",92],["wasserkunst-hamburg.de",93],["lta.org.uk",94],["brico-travo.com",95],["theateramrand.de",96],["jugend-praesentiert.de",96],["buktube.com",97],["xhamster.com",97],["xhamster2.com",97],["xhamster3.com",97],["xhamster.desi",97],["evium.de",98],["epayments.com",99],["riceundspice.de",100],["happysocks.com",[101,102]],["win2day.at",103],["porp.pl",104],["gesundheitsamt-2025.de",105],["coastfashion.com",106],["oasisfashion.com",106],["warehousefashion.com",106],["misspap.com",106],["karenmillen.com",106],["boohooman.com",106],["nebo.app",107],["groupeonepoint.com",108],["edpsciences.org",109],["bemmaisseguro.com",110],["wetransfer.com",111],["scheidegger.nl",112],["phoenix.de",113],["strato.se",114],["strato.de",114],["mishcon.com",115],["bbva.es",117],["bbvauk.com",117],["bbva.be",117],["bbva.fr",117],["bbva.it",117],["bbva.pt",117],["suntech.cz",118],["digikey.co.za",119],["digikey.cn",119],["digikey.ee",119],["digikey.at",119],["digikey.be",119],["digikey.bg",119],["digikey.cz",119],["digikey.dk",119],["digikey.fi",119],["digikey.fr",119],["digikey.de",119],["digikey.gr",119],["digikey.hu",119],["digikey.ie",119],["digikey.it",119],["digikey.lv",119],["digikey.lt",119],["digikey.lu",119],["digikey.nl",119],["digikey.no",119],["digikey.pl",119],["digikey.pt",119],["digikey.ro",119],["digikey.sk",119],["digikey.si",119],["digikey.es",119],["digikey.se",119],["digikey.ch",119],["digikey.co.uk",119],["digikey.co.il",119],["digikey.com.mx",119],["digikey.ca",119],["digikey.com.br",119],["digikey.co.nz",119],["digikey.com.au",119],["digikey.co.th",119],["digikey.tw",119],["digikey.kr",119],["digikey.sg",119],["digikey.ph",119],["digikey.my",119],["digikey.jp",119],["digikey.in",119],["digikey.hk",119],["digikey.com",119],["eurosupps.nl",120],["pathe.nl",121],["makelaarsland.nl",122],["nordania.dk",123],["365direkte.no",123],["danskebank.lv",123],["danskebank.lt",123],["danskebank.no",123],["danskebank.fi",123],["danskebank.dk",123],["danskebank.com",123],["danskebank.se",123],["danskebank.co.uk",123],["danskeci.com",123],["danicapension.dk",123],["gewerbegebiete.de",124],["visti.it",125],["balay.es",126],["constructa.com",126],["gaggenau.com",126],["loudersound.com",127],["impulse.de",127],["pcgamer.com",127],["infoworld.com",127],["kiplinger.com",127],["omni.se",127],["it-times.de",127],["bitcoinmagazine.com",127],["deliciousmagazine.co.uk",127],["upday.com",127],["theguardian.com",127],["deutschlandcard.de",127],["szbz.de",127],["free-fonts.com",127],["lieferzeiten.info",127],["vice.com",127],["newsnow.co.uk",127],["out.com",127],["streampicker.de",127],["radiotimes.com",127],["nowtv.com",127],["kochbar.de",127],["toggo.de",127],["am-online.com",127],["n-tv.de",127],["newsandstar.co.uk",127],["tag24.de",127],["weltkunst.de",127],["noveauta.sk",127],["pnn.de",127],["economist.com",127],["crash.net",127],["norwaytoday.info",127],["insider.com",127],["preis.de",127],["ibroxnoise.co.uk",127],["celtsarehere.com",127],["nufcblog.co.uk",127],["sport1.de",127],["techconnect.com",127],["followfollow.com",127],["thespun.com",127],["mazdas247.com",127],["fastcar.co.uk",127],["vitalfootball.co.uk",127],["audi-sport.net",127],["bumble.com",127],["arcamax.com",127],["dilbert.com",127],["sportbible.com",127],["givemesport.com",127],["dartsnews.com",127],["gpfans.com",127],["justjared.com",127],["justjaredjr.com",127],["finanzen.at",127],["flights-idealo.co.uk",127],["idealo.com",127],["idealo.se",127],["idealo.nl",127],["idealo.pl",127],["idealo.pt",127],["idealo.fi",127],["idealo.dk",127],["idealo.no",127],["idealo.in",127],["idealo.at",127],["ladenzeile.at",127],["berliner-zeitung.de",127],["urbia.de",127],["essen-und-trinken.de",127],["wetter.de",127],["rtl-living.de",127],["vox.de",127],["ladenzeile.de",127],["advocate.com",127],["idealo.de",127],["wigantoday.net",127],["economistgroup.com",127],["transfermarkt.nl",127],["transfermarkt.es",127],["transfermarkt.pl",127],["transfermarkt.pt",127],["transfermarkt.at",127],["transfermarkt.it",127],["transfermarkt.fr",127],["transfermarkt.de",127],["transfermarkt.be",127],["transfermarkt.co.uk",127],["transfermarkt.us",127],["footballfancast.com",127],["cio.com",127],["jezebel.com",127],["splinternews.com",127],["denofgeek.com",127],["kinja.com",127],["theinventory.com",127],["rollingstone.de",127],["sueddeutsche.de",127],["csoonline.com",127],["tvmovie.de",127],["testberichte.de",127],["pcgameshardware.de",127],["4players.de",127],["guj.de",127],["bild.de",127],["wieistmeineip.de",127],["testbild.de",127],["stylebook.de",127],["skygroup.sky",127],["speisekarte.de",127],["haeuser.de",127],["cmo.com.au",127],["pcworld.co.nz",127],["idealo.it",127],["transfermarkt.jp",127],["transfermarkt.co.id",127],["autoexpress.co.uk",127],["transfermarkt.com",127],["esportsclub.nl",127],["webwinkel.tubantia.nl",127],["shopalike.nl",127],["autoweek.nl",127],["pcworld.es",127],["macworld.es",127],["idealo.es",127],["businessinsider.es",127],["motor.es",127],["autobild.es",127],["driving.co.uk",127],["stern.de",127],["pcgames.de",127],["sport.de",127],["idealo.fr",127],["barrons.com",127],["tori.fi",127],["snow-forecast.com",127],["tidende.dk",127],["kraloyun.com",127],["arnnet.com.au",127],["bunte.de",127],["handelsblatt.com",127],["techbook.de",127],["metal-hammer.de",127],["macworld.co.uk",127],["maxisciences.com",127],["ohmymag.com",127],["voici.fr",127],["geo.de",127],["businessinsider.de",127],["heise.de",127],["meinestadt.de",127],["politico.eu",127],["spieletipps.de",127],["finanznachrichten.de",127],["vtwonen.nl",127],["stol.it",127],["waitrose.com",128],["storyhouseegmont.dk",129],["storyhouseegmont.no",129],["storyhouseegmont.se",129],["egmont.com",129],["nordiskfilm.com",129],["faq.whatsapp.com",130],["blog.whatsapp.com",130],["www.whatsapp.com",130]]);

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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    re: new this.RegExp(pattern.replace(
                        /[.*+?^${}()|[\]\\]/g, '\\$&'),
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
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    scriptletGlobals.set('safeSelf', safe);
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
