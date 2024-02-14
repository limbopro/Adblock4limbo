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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["-locked","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["onelottery.co.uk",3],["yourschoollottery.co.uk",3],["rainbowlottery.co.uk",3],["idg.se",4],["gearaid.com",5],["buildex.cz",6],["gruenderservice.at",7],["caiacosmetics.com",8],["pdc-big.nl",9],["pdc-big.it",9],["pdc-big.ie",9],["pdc-big.fr",9],["pdc-big.es",9],["pdc-big.be",9],["pdc-big.at",9],["pdc-big.co.uk",9],["pdc-big.de",9],["pdc-big.com",9],["elio-systems.io",[10,17]],["sanha.com",[10,17]],["recettesetcabas.com",11],["flinders.edu.au",12],["opera.com",13],["groningenairport.nl",14],["crocs.co.uk",[15,16]],["crocs.eu",[15,16]],["crocs.nl",[15,16]],["crocs.fi",[15,16]],["crocs.fr",[15,16]],["crocs.de",[15,16]],["rappjmed.ch",18],["stilord.fr",19],["stilord.it",19],["stilord.de",19],["stilord.es",19],["dasfutterhaus.at",20],["developer.paypal.com",21],["cpc2r.ch",22],["zen.com",23],["tecsafe.de",24],["foxracingshox.de",24],["stromnetz.berlin",25],["websummit.com",26],["thehustle.co",26],["epochtimes.fr",27],["ajbell.co.uk",28],["economiapertutti.bancaditalia.it",29],["quantamagazine.org",30],["tradersunion.com",30],["phsgreenleaf.co.uk",31],["phswashrooms.ie",31],["mccolls.co.uk",[32,33]],["crt.hr",34],["yourstorebox.com",35],["clickskeks.at",[36,37]],["housell.com",38],["lactostop.de",39],["mibe.de",39],["spilger.de",40],["dbs.si",41],["abcya.com",42],["jongcdenv.be",43],["umicore.jp",43],["umicore.cn",43],["umicore.pl",43],["umicore.kr",43],["umicore.co.th",43],["umicore.fr",43],["umicore.de",43],["donneurdecellulessouches.be",43],["stammzellenspender.be",43],["stemcelldonor.be",43],["umicore.com",43],["umicore.com.br",43],["koenvandenheuvel.be",43],["stamceldonor.be",43],["nahima.be",43],["catused.com",44],["eujuicers.cz",45],["graziellawicki.com",46],["funnelcockpit.com",46],["dnk.nl",47],["eam.de",48],["eam-netz.de",48],["tvp.pl",49],["cellardoor.co",50],["ampire.de",51],["verpackungsstadl.ch",51],["imkershoperzgebirge.de",51],["modellbahndealer.de",51],["tillit-bikes.shop",51],["bike-onlineshop.de",51],["futspo.de",51],["compravo.de",51],["perpedale.de",51],["modellbau-jung.de",51],["verpackungsstadl.at",51],["modellbau-vordermaier.de",51],["bike-supply.de",51],["wroc.pl",52],["basenio.de",53],["fm-systeme.de",54],["gartenhotel-crystal.at",55],["swffm.de",55],["studentenwerkfrankfurt.de",55],["dmsg.de",55],["bgk.pl",55],["pflegezeit-berlin.de",55],["gpd-nordost-onlineberatung.de",55],["proabschluss-beratung.de",55],["hilfe-telefon-missbrauch.online",55],["dww-suchtberatung.de",55],["cyberforum.de",55],["gutscheine.eurothermen.at",55],["wolff-mueller.de",55],["ras.bz.it",55],["wifiwien.at",[56,57]],["wifikaernten.at",[56,57]],["wifi.at",[56,57]],["pdf-archive.com",57],["5asec.pt",58],["tui.dk",58],["tui.fi",58],["tui.no",58],["tui.se",58],["salvagny.org",58],["leslipfrancais.fr",58],["wvb.de",[58,119]],["bremischevb.de",[58,119]],["meinebank.de",[58,119]],["vb-rb.de",[58,119]],["gladbacher-bank.de",[58,119]],["nordthueringer-volksbank.de",[58,119]],["bodenseebank.de",[58,119]],["rb-oberaudorf.de",[58,119]],["volksbank-trossingen.de",[58,119]],["owl-immobilien.de",[58,119]],["volksbank-backnang.de",[58,119]],["volksbank-international.de",[58,119]],["raiba-westhausen.de",[58,119]],["vr-nopf.cz",[58,119]],["vrbankimmobilien.de",[58,119]],["cvw-privatbank-ag.de",[58,119]],["rb-denzlingen-sexau.de",[58,119]],["rv-banken.de",[58,119]],["volksbank-remseck.de",[58,119]],["raiba-gr.de",[58,119]],["vrb-spangenberg.de",[58,119]],["rb-berghuelen.de",[58,119]],["vb-lauterecken.de",[58,119]],["rb-sondelfingen.de",[58,119]],["voba-deisslingen.de",[58,119]],["saechsischer-gewinnsparverein.de",[58,119]],["rb-hardt-bruhrain.de",[58,119]],["volksbank-daaden.de",[58,119]],["dervolksbanker.de",[58,119]],["volksbank-kirnau.de",[58,119]],["skbwitten.de",[58,119]],["raiba-ndwa.de",[58,119]],["volksbank-mittleres-erzgebirge.de",[58,119]],["rb-eching.de",[58,119]],["volksbank-aktiv.de",[58,119]],["vbsuedemsland.de",[58,119]],["voba-moeckmuehl.de",[58,119]],["volksbank-freiburg.de",[58,119]],["vbleos.de",[58,119]],["meine-rvb.de",[58,119]],["aachener-bank.de",[58,119]],["muenchner-bank.de",[58,119]],["volksbank-dh.de",[58,119]],["volksbankeg.de",[58,119]],["sparda-bank-hamburg.de",[58,119]],["sparda-sw.de",[58,119]],["volksbank-thueringen-mitte.de",[58,119]],["vrbankeg.de",[58,119]],["bernhauser-bank.de",[58,119]],["vvrbank-krp.de",[58,119]],["vvr-bank.de",[58,119]],["vb-mittelhessen.de",[58,119]],["vr-bayernmitte.de",[58,119]],["vobadhk.de",[58,119]],["rheingauer-volksbank.de",[58,119]],["dovoba.de",[58,119]],["vr-dachau.de",[58,119]],["pollfish.com",59],["werkenbijtrekpleister.nl",60],["werkenbijkruidvat.be",60],["rassenlijst.info",60],["werkenbijiciparisxl.nl",60],["tesa-labtec.com",61],["tesatape.ru",61],["tesa.com",61],["flightradar24.com",62],["apk-vk.at",63],["vietnamairlines.com",64],["incotec.com",65],["croda.com",65],["exaktafoto.se",66],["campingdusoleil.com",67],["hotel-la-chaumiere.com",67],["les-anges-gardiens.fr",67],["croco-kid.com",67],["cambridge-centre.fr",67],["equisud.com",67],["allokebab-pau.fr",67],["etre-visible.local.fr",67],["mas-montebello66.com",67],["camping-residentiel-les-marronniers-jura.fr",67],["dj4events.fr",67],["saintjoursexpertmaritime.com",67],["az-renovation.fr",67],["presquilemultiservices.com",67],["hotel-aigoual.com",67],["hotel-restaurant-pau.com",67],["desrayaud-paysagistes.com",67],["hotelsaintcharles.fr",67],["agvillagecamarguais.com",67],["joyella.com",67],["gabriel-godard.com",67],["artech-sellerie.com",67],["motoclubernee.com",67],["ledauphinhotel.com",67],["cuisin-studio.com",67],["biomeo-environnement.com",67],["leman-instruments.com",67],["esthetique-meyerbeer.com",67],["institut-bio-naturel-nice.fr",67],["nature-et-bois.fr",67],["transmissions-bordeaux.com",67],["kinechartreuse.com",67],["corsegourmande.com",67],["cotedecor.com",67],["restaurant-la-badiane.fr",67],["systelia.fr",67],["lesjardinsinterieurs.com",67],["helenevue.com",67],["saubusse-thermes.com",67],["dehn.es",68],["dehn.fr",68],["dehn.it",68],["dehn.hu",68],["desitek.dk",68],["dehn.at",68],["dehn.de",68],["wwz.ch",69],["inyova.at",70],["inyova.ch",70],["inyova.de",70],["ccalbacenter.com",70],["wamu.org",70],["momentive.com",71],["kennedyslaw.com",72],["elekta.com",73],["ige.ch",74],["stratasysdirect.com",75],["stratasys.com",75],["werkenbijkruidvat.nl",76],["ghacks.net",77],["cutoff.es",78],["whyopencomputing.com",78],["mbanc.com",79],["dentalgalindo.com",[80,81]],["brutalvisual.com",[80,81]],["archeologia.com.pl",[80,81]],["letrayframe.com",[80,81]],["osteofisintegral.es",[80,81]],["uco.cat",[80,81]],["buecheler-kollegen.de",[80,81]],["seminariodeosma-soria.org",[80,81]],["kamensenica.sk",[80,81]],["movimentoofficinedelsud.it",[80,81]],["trident.se",[80,81]],["semanasantademalagaayeryhoy.com",[80,81]],["diazfloristasestrella.com",[80,81]],["cosechavida.com",[80,81]],["centre-hypnose-moselle.com",[80,81]],["broncoillustration.com",[80,81]],["sumoingenio.com",[80,81]],["aligepro.es",[80,81]],["muevo.es",[80,81]],["azulejosacedo.com",[80,81]],["sana.cz",[80,81]],["aliapinto.com",[80,81]],["tsconline.es",[80,81]],["polifast.it",[80,81]],["napos.cz",[80,81]],["gutshaus-neuendorf-usedom.de",[80,81]],["kunterbunte-kinder.de",[80,81]],["desatando.org",[80,81]],["ledocom.cz",[80,81]],["aliciasuarez.net",[80,81]],["diabramar.com",[80,81]],["lamagnalonga.org",[80,81]],["benejamrefrigeracion.com",[80,81]],["micropigmentacioncapilarbcn.com",[80,81]],["revistaauge.com.ar",[80,81]],["arcusnet.se",[80,81]],["videogenic.es",[80,81]],["grundschule-remagen.de",[80,81]],["aceitessatunion.com",[80,81]],["servigraphic.com.ar",[80,81]],["textsteine.de",[80,81]],["campergarage.es",[80,81]],["administradorfincasblog.com",[80,81]],["balgal.es",[80,81]],["grafika-dtp-produkcia.sk",[80,81]],["unmardeconstelaciones.com",[80,81]],["salobella.com",[80,81]],["careon.se",[80,81]],["gymnosport.com",[80,81]],["easyhomes.com.es",[80,81]],["casavaledalama.pt",[80,81]],["dosc.es",[80,81]],["fcfoz.pt",[80,81]],["berevolk.com",[80,81]],["hvpropertyclearance.co.uk",[80,81]],["calamo.se",[80,81]],["elserratplanoles.com",[80,81]],["bubblessea.es",[80,81]],["disperator.se",[80,81]],["ecoparquets.com",[80,81]],["zlotaraczkalublin.pl",[80,81]],["congresoscostadelsol.com",[80,81]],["pneumaticiroma.it",[80,81]],["asprona.es",[80,81]],["virgendefatima.es",[80,81]],["patronatpremia.cat",[80,81]],["2points13.fr",[80,81]],["3d3.es",[80,81]],["abantos.es",[80,81]],["abastanimacio.org",[80,81]],["academiafrancesadebelleza.co",[80,81]],["acaluca.org",[80,81]],["acce.es",[80,81]],["ad-particles.com",[80,81]],["adea.sk",[80,81]],["afplr.fr",[80,81]],["agiletalon.fr",[80,81]],["agiratou.com",[80,81]],["aidaromero.com",[80,81]],["alkoholochnarkotika.se",[80,81]],["alligatorbioscience.se",[80,81]],["anea.es",[80,81]],["animala.es",[80,81]],["antequerabelleza.com",[80,81]],["apimadrid.net",[80,81]],["aquatrend.sk",[80,81]],["arabesque-formation.org",[80,81]],["arrivamallorca.es",[80,81]],["arteydeco.es",[80,81]],["asapservicios.net",[80,81]],["aspock.com",[80,81]],["atout-voyages.com",[80,81]],["autocareslazara.es",[80,81]],["autocaresmariano.com",[80,81]],["autoform.pl",[80,81]],["ayudatranspersonal.com",[80,81]],["bacabeton.cz",[80,81]],["begalvi.com",[80,81]],["bent-com.com",[80,81]],["berliner-haeuser.de",[80,81]],["bespokespain.com",[80,81]],["bevent-rasch.se",[80,81]],["bio-cord.es",[80,81]],["biotropica.fr",[80,81]],["bornes-eurorelais.fr",[80,81]],["braeu-stueble.de",[80,81]],["brendanoharamp.scot",[80,81]],["briau.com",[80,81]],["caleulalia.com",[80,81]],["cande-sur-beuvron.com",[80,81]],["carlhag.se",[80,81]],["carrier.se",[80,81]],["casadelaveiga.com",[80,81]],["caytas.com.tr",[80,81]],["cecjecuador.org.ec",[80,81]],["cegef.com",[80,81]],["centrediagonal.com",[80,81]],["centropolisportivomassari.it",[80,81]],["cerai.org",[80,81]],["cervosgrup.com",[80,81]],["chimeneasalicante.com",[80,81]],["circodelshow.com",[80,81]],["cliatec.com",[80,81]],["clinicabadal.es",[80,81]],["cometh-consulting.com",[80,81]],["copysud.fr",[80,81]],["cortilar.com",[80,81]],["crystal-finance.com",[80,81]],["ctangana.com",[80,81]],["cugatresidencial.com",[80,81]],["dake.es",[80,81]],["datatal.se",[80,81]],["degom.com",[80,81]],["delfis.es",[80,81]],["delogica.com",[80,81]],["dentalcompany.es",[80,81]],["descarpack.com.br",[80,81]],["desfiladeroediciones.com",[80,81]],["desomer.be",[80,81]],["diarioandalucia.es",[80,81]],["dibujos-animados.net",[80,81]],["direkt-immobilie.de",[80,81]],["dovozautznemecka.cz",[80,81]],["drpuigdollers.com",[80,81]],["dunamys.inf.br",[80,81]],["easyimplantology.com",[80,81]],["eb2b.com.pl",[80,81]],["echo-mieszkania.pl",[80,81]],["eclinic.com.sg",[80,81]],["edgeict.com",[80,81]],["eiglaw.com",[80,81]],["elandexpediciones.es",[80,81]],["emalec.com",[80,81]],["enlighten.net",[80,81]],["equifab.es",[80,81]],["escuelanauticamarenostrum.com",[80,81]],["esgrima.cat",[80,81]],["espaisperconviure.es",[80,81]],["etbygg.com",[80,81]],["eurepieces.fr",[80,81]],["euroenvio.com",[80,81]],["eurotex.es",[80,81]],["expertetfinance.fr",[80,81]],["farmarsketrhyfuturum.cz",[80,81]],["fastvisa.fr",[80,81]],["fauxdiplomes.org",[80,81]],["fisiolistic.com",[80,81]],["fondazionealbertosordi.it",[80,81]],["foyersekcjapolska.eu",[80,81]],["fundacjaeds.pl",[80,81]],["galeriaxanadu.pl",[80,81]],["garcia-ibanez.com",[80,81]],["gestenaval.com",[80,81]],["glaskogen.se",[80,81]],["globalteam.es",[80,81]],["goia.org.pl",[80,81]],["granibier.com",[80,81]],["grundia.se",[80,81]],["grupoisn.com",[80,81]],["gruporhzaragoza.com",[80,81]],["hagagruppen.se",[80,81]],["halima-magazin.com",[80,81]],["handelskammaren.com",[80,81]],["helitecnics.com",[80,81]],["helux.se",[80,81]],["hermanosalcaraz.com",[80,81]],["hjarnkoll.se",[80,81]],["hmfoundation.com",[80,81]],["hormimpres.com",[80,81]],["hoteldeprony.fr",[80,81]],["hotelroyalcatania.it",[80,81]],["houjethai.nl",[80,81]],["hummer.cz",[80,81]],["icld.se",[80,81]],["ict-project.it",[80,81]],["imagelova.id",[80,81]],["imprentalaspalmas.com",[80,81]],["informamiele.it",[80,81]],["inission.com",[80,81]],["inmobiliariavolga.com",[80,81]],["international-terra-institute.com",[80,81]],["inwaspain.com",[80,81]],["izkigolf.eus",[80,81]],["jdmusic.se",[80,81]],["juveycamps.com",[80,81]],["karel1.nl",[80,81]],["kaunokapiniuprieziura.lt",[80,81]],["kcmkompresor.com",[80,81]],["kewaccountants.co.uk",[80,81]],["konkretplus.pl",[80,81]],["krajci.cz",[80,81]],["krisvagenut.se",[80,81]],["kyoceracapetown.co.za",[80,81]],["labaguette.pl",[80,81]],["labintegrados.com",[80,81]],["ladderupinc.com",[80,81]],["landskronafoto.org",[80,81]],["langarri.es",[80,81]],["lawa.es",[80,81]],["laxo.se",[80,81]],["layher.se",[80,81]],["lifetraveler.net",[80,81]],["lindrooshalsa.se",[80,81]],["lobolab.es",[80,81]],["maisqueromanicorutas.com",[80,81]],["mallandonoandroid.com",[80,81]],["masconcas.com",[80,81]],["mediabest.cz",[80,81]],["megustaelvino.es",[80,81]],["mensa.se",[80,81]],["mestiteslilis.com",[80,81]],["minutoprint.com",[80,81]],["mirano.cz",[80,81]],["mogador.cz",[80,81]],["morphestudio.es",[80,81]],["motoaxial.com",[80,81]],["multiversidad.es",[80,81]],["mundollaves.com",[80,81]],["musicotherapie-federationfrancaise.com",[80,81]],["nauticaravaning.com",[80,81]],["nestville.sk",[80,81]],["nestvillepark.sk",[80,81]],["netromsoftware.ro",[80,81]],["nojesfabriken.se",[80,81]],["oddoneout.se",[80,81]],["opako.pl",[80,81]],["oserlafrique.com",[80,81]],["paintballalcorcon.com",[80,81]],["pallejabcn.com",[80,81]],["penicilinafruits.com",[80,81]],["peregrinoslh.com",[80,81]],["permis-lausanne.ch",[80,81]],["pernillaandersson.se",[80,81]],["piazzadelgusto.it",[80,81]],["pipi-antik.dk",[80,81]],["plasticosgeca.com",[80,81]],["plastimyr.com",[80,81]],["portal.unimes.br",[80,81]],["pro-beruf.de",[80,81]],["prophecyinternational.com",[80,81]],["psicoterapeuta.org",[80,81]],["puertasprieto.com",[80,81]],["puntosdefantasia.es",[80,81]],["pzmk.org.pl",[80,81]],["rastromaquinas.com",[80,81]],["rectoraldecastillon.com",[80,81]],["reinomineral.com",[80,81]],["reklamefreunde.de",[80,81]],["restauraciontalavera.es",[80,81]],["restauranthispania.com",[80,81]],["ristoranteeziogritti.it",[80,81]],["rubinmedical.dk",[80,81]],["rubinmedical.no",[80,81]],["rubinmedical.se",[80,81]],["sak.se",[80,81]],["sammetais.com.br",[80,81]],["sebastiancurylo.pl",[80,81]],["serigrafiaiorgi.com",[80,81]],["seyart.com",[80,81]],["sgaim.com",[80,81]],["sicamemt.org",[80,81]],["siguealconejoblanco.es",[80,81]],["sinfimasa.com",[80,81]],["skp.se",[80,81]],["skrobczynski.pl",[80,81]],["slush.de",[80,81]],["solebike.it",[80,81]],["solu-watt.fr",[80,81]],["soluzionainmobiliaria.es",[80,81]],["somoparque.com",[80,81]],["sorgingaztemoda.com",[80,81]],["sroportal.sk",[80,81]],["ssmf.se",[80,81]],["stobrasil.com.br",[80,81]],["stoparmut2015.ch",[80,81]],["studiodimuro.com",[80,81]],["subkultur-hannover.de",[80,81]],["sustanciagris.com",[80,81]],["szkt.sk",[80,81]],["tagibergslagen.se",[80,81]],["tallergastronomico.es",[80,81]],["tarna.fhsk.se",[80,81]],["tassenyalitzacio.com",[80,81]],["tctech.se",[80,81]],["teknoduegroup.it",[80,81]],["teloliquido.com",[80,81]],["temasa.es",[80,81]],["textilprint.sk",[80,81]],["thehouseofautomata.com",[80,81]],["tmgernika.com",[80,81]],["toastetmoi.fr",[80,81]],["tollare.org",[80,81]],["trattoriabolognesi.it",[80,81]],["triperavigatana.com",[80,81]],["tuckerfranklininsgrp.com",[80,81]],["tuftuf.net",[80,81]],["turuletras.com",[80,81]],["umfmb.fr",[80,81]],["upapsa.com",[80,81]],["valenciatoday.es",[80,81]],["vanghel-und-morawski.de",[80,81]],["vickycan.com",[80,81]],["ville-de-salles.com",[80,81]],["webbigt.se",[80,81]],["westlede.be",[80,81]],["wiemker.org",[80,81]],["woolink.co",[80,81]],["wp.fratgsa.org",[80,81]],["xatobaxestion.com",[80,81]],["xfactor-gmbh.de",[80,81]],["yougoenglish.com",[80,81]],["zigmoon.com",[80,81]],["canyon.com",[82,83]],["drimsim.com",84],["eteam-winkler.de",85],["kdn-elektro.de",85],["elektro-kotz.de",85],["elektro-service-rauh.de",85],["elektroanlagenbuettner.de",85],["be-connect.online",85],["bayergruppe.com",85],["bayer-wkt.de",85],["bayer-wind.de",85],["bayer-wd.de",85],["elektro-joa.de",85],["htechnik.de",85],["ehk-service.de",85],["bittner-tv.de",85],["elektro-suelzner.de",85],["elektro-leps.de",85],["elektromax-hausgeraete.de",85],["elektrotechnik-schedel.de",85],["elkugmbh.de",85],["ln-elektro-gmbh.de",85],["weiss-blau-gmbh.de",85],["sunbeam-energy.de",85],["prokauf.com",85],["lichtstudio-kerl.de",85],["liebing-beese.de",85],["hoeschel-baumann.de",85],["hausgeraete-kraemer.de",85],["gehlhaar-elektrotechnik.de",85],["ehs-elektrotechnik.de",85],["elektrojarschke.de",85],["elektrotechnik-fleischmann.de",85],["elektroseemueller.de",85],["schoerling-blitz.de",85],["ast-apolda.com",85],["elektro-klippel.de",85],["arntz-haustechnik.de",85],["elektro-bindel.de",85],["elektrotechnik-weiss.com",85],["brandschutz-hamburg.de",85],["wagnerelektrotechnik.de",85],["el-kramer.de",85],["mks-hof.de",85],["wernz-elektro.de",85],["e3-energy.de",85],["sg-solar.de",85],["elektrokrebs.de",85],["elektro-roehrl.de",85],["elektro-kreher.de",85],["giegling-vonsaal.de",85],["elektro-lehmann.com",85],["ems-wurzen.de",85],["scholpp.de",86],["scholpp.es",86],["scholpp.pl",86],["scholpp.it",86],["ptc.eu",86],["scholpp.com",86],["abo24.de",86],["overdrive.com",86],["wetu.com",86],["superwatchman.com",87],["bitburger-braugruppe.de",88],["proteincompany.fi",89],["proteinbolaget.se",89],["snoopmedia.com",90],["myguide.de",90],["study-in-germany.de",90],["daad.de",90],["futterhaus.de",91],["scottsofstow.co.uk",[92,93]],["zawszepomorze.pl",94],["wasserkunst-hamburg.de",95],["lta.org.uk",96],["brico-travo.com",97],["theateramrand.de",98],["jugend-praesentiert.de",98],["buktube.com",99],["xhamster.com",99],["xhamster2.com",99],["xhamster3.com",99],["xhamster.desi",99],["evium.de",100],["epayments.com",101],["riceundspice.de",102],["happysocks.com",[103,104]],["win2day.at",105],["porp.pl",106],["gesundheitsamt-2025.de",107],["coastfashion.com",108],["oasisfashion.com",108],["warehousefashion.com",108],["misspap.com",108],["karenmillen.com",108],["boohooman.com",108],["nebo.app",109],["groupeonepoint.com",110],["edpsciences.org",111],["bemmaisseguro.com",112],["scheidegger.nl",113],["transparency.fb.com",[114,115]],["faq.whatsapp.com",115],["blog.whatsapp.com",115],["www.whatsapp.com",115],["phoenix.de",116],["strato.se",117],["strato.de",117],["mishcon.com",118],["bbva.es",120],["bbvauk.com",120],["bbva.be",120],["bbva.fr",120],["bbva.it",120],["bbva.pt",120],["suntech.cz",121],["digikey.co.za",122],["digikey.cn",122],["digikey.ee",122],["digikey.at",122],["digikey.be",122],["digikey.bg",122],["digikey.cz",122],["digikey.dk",122],["digikey.fi",122],["digikey.fr",122],["digikey.de",122],["digikey.gr",122],["digikey.hu",122],["digikey.ie",122],["digikey.it",122],["digikey.lv",122],["digikey.lt",122],["digikey.lu",122],["digikey.nl",122],["digikey.no",122],["digikey.pl",122],["digikey.pt",122],["digikey.ro",122],["digikey.sk",122],["digikey.si",122],["digikey.es",122],["digikey.se",122],["digikey.ch",122],["digikey.co.uk",122],["digikey.co.il",122],["digikey.com.mx",122],["digikey.ca",122],["digikey.com.br",122],["digikey.co.nz",122],["digikey.com.au",122],["digikey.co.th",122],["digikey.tw",122],["digikey.kr",122],["digikey.sg",122],["digikey.ph",122],["digikey.my",122],["digikey.jp",122],["digikey.in",122],["digikey.hk",122],["digikey.com",122],["eurosupps.nl",123],["pathe.nl",124],["makelaarsland.nl",125],["nordania.dk",126],["365direkte.no",126],["danskebank.lv",126],["danskebank.lt",126],["danskebank.no",126],["danskebank.fi",126],["danskebank.dk",126],["danskebank.com",126],["danskebank.se",126],["danskebank.co.uk",126],["danskeci.com",126],["danicapension.dk",126],["gewerbegebiete.de",127],["visti.it",128],["balay.es",129],["constructa.com",129],["gaggenau.com",129],["loudersound.com",130],["impulse.de",130],["pcgamer.com",130],["infoworld.com",130],["kiplinger.com",130],["omni.se",130],["it-times.de",130],["bitcoinmagazine.com",130],["deliciousmagazine.co.uk",130],["upday.com",130],["theguardian.com",130],["deutschlandcard.de",130],["szbz.de",130],["free-fonts.com",130],["lieferzeiten.info",130],["vice.com",130],["newsnow.co.uk",130],["out.com",130],["streampicker.de",130],["radiotimes.com",130],["nowtv.com",130],["kochbar.de",130],["toggo.de",130],["am-online.com",130],["n-tv.de",130],["newsandstar.co.uk",130],["tag24.de",130],["weltkunst.de",130],["noveauta.sk",130],["pnn.de",130],["economist.com",130],["crash.net",130],["norwaytoday.info",130],["insider.com",130],["preis.de",130],["ibroxnoise.co.uk",130],["celtsarehere.com",130],["nufcblog.co.uk",130],["sport1.de",130],["techconnect.com",130],["followfollow.com",130],["thespun.com",130],["mazdas247.com",130],["fastcar.co.uk",130],["vitalfootball.co.uk",130],["audi-sport.net",130],["bumble.com",130],["arcamax.com",130],["dilbert.com",130],["sportbible.com",130],["givemesport.com",130],["dartsnews.com",130],["gpfans.com",130],["justjared.com",130],["justjaredjr.com",130],["finanzen.at",130],["flights-idealo.co.uk",130],["idealo.com",130],["idealo.se",130],["idealo.nl",130],["idealo.pl",130],["idealo.pt",130],["idealo.fi",130],["idealo.dk",130],["idealo.no",130],["idealo.in",130],["idealo.at",130],["ladenzeile.at",130],["berliner-zeitung.de",130],["urbia.de",130],["essen-und-trinken.de",130],["wetter.de",130],["rtl-living.de",130],["vox.de",130],["ladenzeile.de",130],["advocate.com",130],["idealo.de",130],["wigantoday.net",130],["economistgroup.com",130],["transfermarkt.nl",130],["transfermarkt.es",130],["transfermarkt.pl",130],["transfermarkt.pt",130],["transfermarkt.at",130],["transfermarkt.it",130],["transfermarkt.fr",130],["transfermarkt.de",130],["transfermarkt.be",130],["transfermarkt.co.uk",130],["transfermarkt.us",130],["footballfancast.com",130],["cio.com",130],["jezebel.com",130],["splinternews.com",130],["denofgeek.com",130],["kinja.com",130],["theinventory.com",130],["rollingstone.de",130],["sueddeutsche.de",130],["csoonline.com",130],["tvmovie.de",130],["testberichte.de",130],["pcgameshardware.de",130],["4players.de",130],["guj.de",130],["bild.de",130],["wieistmeineip.de",130],["testbild.de",130],["stylebook.de",130],["skygroup.sky",130],["speisekarte.de",130],["haeuser.de",130],["cmo.com.au",130],["pcworld.co.nz",130],["idealo.it",130],["transfermarkt.jp",130],["transfermarkt.co.id",130],["autoexpress.co.uk",130],["transfermarkt.com",130],["esportsclub.nl",130],["webwinkel.tubantia.nl",130],["shopalike.nl",130],["autoweek.nl",130],["pcworld.es",130],["macworld.es",130],["idealo.es",130],["businessinsider.es",130],["motor.es",130],["autobild.es",130],["driving.co.uk",130],["stern.de",130],["pcgames.de",130],["sport.de",130],["idealo.fr",130],["barrons.com",130],["tori.fi",130],["snow-forecast.com",130],["tidende.dk",130],["kraloyun.com",130],["arnnet.com.au",130],["bunte.de",130],["handelsblatt.com",130],["techbook.de",130],["metal-hammer.de",130],["macworld.co.uk",130],["maxisciences.com",130],["ohmymag.com",130],["voici.fr",130],["geo.de",130],["businessinsider.de",130],["heise.de",130],["meinestadt.de",130],["politico.eu",130],["spieletipps.de",130],["finanznachrichten.de",130],["vtwonen.nl",130],["stol.it",130],["waitrose.com",131],["storyhouseegmont.dk",132],["storyhouseegmont.no",132],["storyhouseegmont.se",132],["egmont.com",132],["nordiskfilm.com",132]]);

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
