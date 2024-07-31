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

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["cookies-not-set","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["show--consent","body","stay"],["messages-active","","stay"],["xh-thumb-disabled","html","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["noscroll","body","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["ooekultur.at",3],["igmetall.de",4],["ivass.it",5],["onelottery.co.uk",6],["yourschoollottery.co.uk",6],["rainbowlottery.co.uk",6],["idg.se",7],["gearaid.com",8],["buildex.cz",9],["gruenderservice.at",10],["caiacosmetics.com",11],["pdc-big.nl",12],["pdc-big.it",12],["pdc-big.ie",12],["pdc-big.fr",12],["pdc-big.es",12],["pdc-big.be",12],["pdc-big.at",12],["pdc-big.co.uk",12],["pdc-big.de",12],["pdc-big.com",12],["elio-systems.io",[13,20]],["sanha.com",[13,20]],["recettesetcabas.com",14],["flinders.edu.au",15],["opera.com",16],["groningenairport.nl",17],["crocs.co.uk",[18,19]],["crocs.eu",[18,19]],["crocs.nl",[18,19]],["crocs.fi",[18,19]],["crocs.fr",[18,19]],["crocs.de",[18,19]],["rappjmed.ch",21],["stilord.fr",22],["stilord.it",22],["stilord.de",22],["stilord.es",22],["dasfutterhaus.at",23],["developer.paypal.com",24],["cpc2r.ch",25],["zen.com",26],["tecsafe.de",27],["foxracingshox.de",27],["stromnetz.berlin",28],["websummit.com",29],["thehustle.co",29],["epochtimes.fr",30],["ajbell.co.uk",31],["economiapertutti.bancaditalia.it",32],["quantamagazine.org",33],["tradersunion.com",33],["phsgreenleaf.co.uk",34],["phswashrooms.ie",34],["mccolls.co.uk",[35,36]],["crt.hr",37],["yourstorebox.com",38],["clickskeks.at",[39,40]],["housell.com",41],["lactostop.de",42],["mibe.de",42],["spilger.de",43],["dbs.si",44],["abcya.com",45],["umicore.be",46],["umicore.fi",46],["umicore.ca",46],["jongcdenv.be",46],["umicore.jp",46],["umicore.cn",46],["umicore.pl",46],["umicore.kr",46],["umicore.co.th",46],["umicore.fr",46],["umicore.de",46],["donneurdecellulessouches.be",46],["stammzellenspender.be",46],["stemcelldonor.be",46],["umicore.com",46],["umicore.com.br",46],["koenvandenheuvel.be",46],["stamceldonor.be",46],["nahima.be",46],["catused.com",47],["eujuicers.cz",48],["graziellawicki.com",49],["funnelcockpit.com",49],["dnk.nl",50],["eam.de",51],["eam-netz.de",51],["tvp.pl",52],["cellardoor.co",53],["ampire.de",54],["verpackungsstadl.ch",54],["imkershoperzgebirge.de",54],["modellbahndealer.de",54],["tillit-bikes.shop",54],["bike-onlineshop.de",54],["futspo.de",54],["compravo.de",54],["perpedale.de",54],["modellbau-jung.de",54],["verpackungsstadl.at",54],["modellbau-vordermaier.de",54],["bike-supply.de",54],["wroc.pl",55],["basenio.de",56],["fm-systeme.de",57],["gartenhotel-crystal.at",58],["swffm.de",58],["studentenwerkfrankfurt.de",58],["dmsg.de",58],["bgk.pl",58],["pflegezeit-berlin.de",58],["gpd-nordost-onlineberatung.de",58],["proabschluss-beratung.de",58],["hilfe-telefon-missbrauch.online",58],["dww-suchtberatung.de",58],["cyberforum.de",58],["gutscheine.eurothermen.at",58],["wolff-mueller.de",58],["ras.bz.it",58],["wifiwien.at",[59,60]],["wifikaernten.at",[59,60]],["wifi.at",[59,60]],["pdf-archive.com",60],["5asec.pt",61],["tui.dk",61],["tui.fi",61],["tui.no",61],["tui.se",61],["salvagny.org",61],["leslipfrancais.fr",61],["volksbank-mittweida.de",[61,122]],["wvb.de",[61,122]],["bremischevb.de",[61,122]],["meinebank.de",[61,122]],["vb-rb.de",[61,122]],["gladbacher-bank.de",[61,122]],["nordthueringer-volksbank.de",[61,122]],["bodenseebank.de",[61,122]],["rb-oberaudorf.de",[61,122]],["volksbank-trossingen.de",[61,122]],["owl-immobilien.de",[61,122]],["volksbank-backnang.de",[61,122]],["volksbank-international.de",[61,122]],["raiba-westhausen.de",[61,122]],["vr-nopf.cz",[61,122]],["vrbankimmobilien.de",[61,122]],["cvw-privatbank-ag.de",[61,122]],["rb-denzlingen-sexau.de",[61,122]],["rv-banken.de",[61,122]],["volksbank-remseck.de",[61,122]],["raiba-gr.de",[61,122]],["vrb-spangenberg.de",[61,122]],["rb-berghuelen.de",[61,122]],["vb-lauterecken.de",[61,122]],["rb-sondelfingen.de",[61,122]],["voba-deisslingen.de",[61,122]],["saechsischer-gewinnsparverein.de",[61,122]],["rb-hardt-bruhrain.de",[61,122]],["volksbank-daaden.de",[61,122]],["dervolksbanker.de",[61,122]],["volksbank-kirnau.de",[61,122]],["skbwitten.de",[61,122]],["raiba-ndwa.de",[61,122]],["volksbank-mittleres-erzgebirge.de",[61,122]],["rb-eching.de",[61,122]],["volksbank-aktiv.de",[61,122]],["vbsuedemsland.de",[61,122]],["voba-moeckmuehl.de",[61,122]],["volksbank-freiburg.de",[61,122]],["vbleos.de",[61,122]],["meine-rvb.de",[61,122]],["aachener-bank.de",[61,122]],["muenchner-bank.de",[61,122]],["volksbank-dh.de",[61,122]],["volksbankeg.de",[61,122]],["sparda-bank-hamburg.de",[61,122]],["sparda-sw.de",[61,122]],["volksbank-thueringen-mitte.de",[61,122]],["vrbankeg.de",[61,122]],["bernhauser-bank.de",[61,122]],["vvrbank-krp.de",[61,122]],["vvr-bank.de",[61,122]],["vb-mittelhessen.de",[61,122]],["vr-bayernmitte.de",[61,122]],["vobadhk.de",[61,122]],["rheingauer-volksbank.de",[61,122]],["dovoba.de",[61,122]],["vr-dachau.de",[61,122]],["pollfish.com",62],["werkenbijtrekpleister.nl",63],["werkenbijkruidvat.be",63],["rassenlijst.info",63],["werkenbijiciparisxl.nl",63],["flightradar24.com",64],["apk-vk.at",65],["vietnamairlines.com",66],["incotec.com",67],["croda.com",67],["exaktafoto.se",68],["campingdusoleil.com",69],["hotel-la-chaumiere.com",69],["les-anges-gardiens.fr",69],["croco-kid.com",69],["cambridge-centre.fr",69],["equisud.com",69],["allokebab-pau.fr",69],["etre-visible.local.fr",69],["mas-montebello66.com",69],["camping-residentiel-les-marronniers-jura.fr",69],["dj4events.fr",69],["saintjoursexpertmaritime.com",69],["az-renovation.fr",69],["presquilemultiservices.com",69],["hotel-aigoual.com",69],["hotel-restaurant-pau.com",69],["desrayaud-paysagistes.com",69],["hotelsaintcharles.fr",69],["agvillagecamarguais.com",69],["joyella.com",69],["gabriel-godard.com",69],["artech-sellerie.com",69],["motoclubernee.com",69],["ledauphinhotel.com",69],["cuisin-studio.com",69],["biomeo-environnement.com",69],["leman-instruments.com",69],["esthetique-meyerbeer.com",69],["institut-bio-naturel-nice.fr",69],["nature-et-bois.fr",69],["transmissions-bordeaux.com",69],["kinechartreuse.com",69],["corsegourmande.com",69],["cotedecor.com",69],["restaurant-la-badiane.fr",69],["systelia.fr",69],["lesjardinsinterieurs.com",69],["helenevue.com",69],["saubusse-thermes.com",69],["dehn.es",70],["dehn.fr",70],["dehn.it",70],["dehn.hu",70],["desitek.dk",70],["dehn.at",70],["dehn.de",70],["wwz.ch",71],["inyova.at",72],["inyova.ch",72],["inyova.de",72],["ccalbacenter.com",72],["wamu.org",72],["momentive.com",73],["kennedyslaw.com",74],["elekta.com",75],["ige.ch",76],["stratasysdirect.com",77],["stratasys.com",77],["werkenbijkruidvat.nl",78],["ghacks.net",79],["cutoff.es",80],["whyopencomputing.com",80],["mbanc.com",81],["dentalgalindo.com",[82,83]],["brutalvisual.com",[82,83]],["archeologia.com.pl",[82,83]],["letrayframe.com",[82,83]],["osteofisintegral.es",[82,83]],["uco.cat",[82,83]],["buecheler-kollegen.de",[82,83]],["seminariodeosma-soria.org",[82,83]],["kamensenica.sk",[82,83]],["movimentoofficinedelsud.it",[82,83]],["trident.se",[82,83]],["semanasantademalagaayeryhoy.com",[82,83]],["diazfloristasestrella.com",[82,83]],["cosechavida.com",[82,83]],["centre-hypnose-moselle.com",[82,83]],["broncoillustration.com",[82,83]],["sumoingenio.com",[82,83]],["aligepro.es",[82,83]],["muevo.es",[82,83]],["azulejosacedo.com",[82,83]],["sana.cz",[82,83]],["aliapinto.com",[82,83]],["tsconline.es",[82,83]],["polifast.it",[82,83]],["napos.cz",[82,83]],["gutshaus-neuendorf-usedom.de",[82,83]],["kunterbunte-kinder.de",[82,83]],["desatando.org",[82,83]],["ledocom.cz",[82,83]],["aliciasuarez.net",[82,83]],["diabramar.com",[82,83]],["lamagnalonga.org",[82,83]],["benejamrefrigeracion.com",[82,83]],["micropigmentacioncapilarbcn.com",[82,83]],["revistaauge.com.ar",[82,83]],["arcusnet.se",[82,83]],["videogenic.es",[82,83]],["grundschule-remagen.de",[82,83]],["aceitessatunion.com",[82,83]],["servigraphic.com.ar",[82,83]],["textsteine.de",[82,83]],["campergarage.es",[82,83]],["administradorfincasblog.com",[82,83]],["balgal.es",[82,83]],["grafika-dtp-produkcia.sk",[82,83]],["unmardeconstelaciones.com",[82,83]],["salobella.com",[82,83]],["careon.se",[82,83]],["gymnosport.com",[82,83]],["easyhomes.com.es",[82,83]],["casavaledalama.pt",[82,83]],["dosc.es",[82,83]],["fcfoz.pt",[82,83]],["berevolk.com",[82,83]],["hvpropertyclearance.co.uk",[82,83]],["calamo.se",[82,83]],["elserratplanoles.com",[82,83]],["bubblessea.es",[82,83]],["disperator.se",[82,83]],["ecoparquets.com",[82,83]],["zlotaraczkalublin.pl",[82,83]],["congresoscostadelsol.com",[82,83]],["pneumaticiroma.it",[82,83]],["asprona.es",[82,83]],["virgendefatima.es",[82,83]],["patronatpremia.cat",[82,83]],["2points13.fr",[82,83]],["3d3.es",[82,83]],["abantos.es",[82,83]],["abastanimacio.org",[82,83]],["academiafrancesadebelleza.co",[82,83]],["acaluca.org",[82,83]],["acce.es",[82,83]],["ad-particles.com",[82,83]],["adea.sk",[82,83]],["afplr.fr",[82,83]],["agiletalon.fr",[82,83]],["agiratou.com",[82,83]],["aidaromero.com",[82,83]],["alkoholochnarkotika.se",[82,83]],["alligatorbioscience.se",[82,83]],["anea.es",[82,83]],["animala.es",[82,83]],["antequerabelleza.com",[82,83]],["apimadrid.net",[82,83]],["aquatrend.sk",[82,83]],["arabesque-formation.org",[82,83]],["arrivamallorca.es",[82,83]],["arteydeco.es",[82,83]],["asapservicios.net",[82,83]],["aspock.com",[82,83]],["atout-voyages.com",[82,83]],["autocareslazara.es",[82,83]],["autocaresmariano.com",[82,83]],["autoform.pl",[82,83]],["ayudatranspersonal.com",[82,83]],["bacabeton.cz",[82,83]],["begalvi.com",[82,83]],["bent-com.com",[82,83]],["berliner-haeuser.de",[82,83]],["bespokespain.com",[82,83]],["bevent-rasch.se",[82,83]],["bio-cord.es",[82,83]],["biotropica.fr",[82,83]],["bornes-eurorelais.fr",[82,83]],["braeu-stueble.de",[82,83]],["brendanoharamp.scot",[82,83]],["briau.com",[82,83]],["caleulalia.com",[82,83]],["cande-sur-beuvron.com",[82,83]],["carlhag.se",[82,83]],["carrier.se",[82,83]],["casadelaveiga.com",[82,83]],["caytas.com.tr",[82,83]],["cecjecuador.org.ec",[82,83]],["cegef.com",[82,83]],["centrediagonal.com",[82,83]],["centropolisportivomassari.it",[82,83]],["cerai.org",[82,83]],["cervosgrup.com",[82,83]],["chimeneasalicante.com",[82,83]],["circodelshow.com",[82,83]],["cliatec.com",[82,83]],["clinicabadal.es",[82,83]],["cometh-consulting.com",[82,83]],["copysud.fr",[82,83]],["cortilar.com",[82,83]],["crystal-finance.com",[82,83]],["ctangana.com",[82,83]],["cugatresidencial.com",[82,83]],["dake.es",[82,83]],["datatal.se",[82,83]],["degom.com",[82,83]],["delfis.es",[82,83]],["delogica.com",[82,83]],["dentalcompany.es",[82,83]],["descarpack.com.br",[82,83]],["desfiladeroediciones.com",[82,83]],["desomer.be",[82,83]],["diarioandalucia.es",[82,83]],["dibujos-animados.net",[82,83]],["direkt-immobilie.de",[82,83]],["dovozautznemecka.cz",[82,83]],["drpuigdollers.com",[82,83]],["dunamys.inf.br",[82,83]],["easyimplantology.com",[82,83]],["eb2b.com.pl",[82,83]],["echo-mieszkania.pl",[82,83]],["eclinic.com.sg",[82,83]],["edgeict.com",[82,83]],["eiglaw.com",[82,83]],["elandexpediciones.es",[82,83]],["emalec.com",[82,83]],["enlighten.net",[82,83]],["equifab.es",[82,83]],["escuelanauticamarenostrum.com",[82,83]],["esgrima.cat",[82,83]],["espaisperconviure.es",[82,83]],["etbygg.com",[82,83]],["eurepieces.fr",[82,83]],["euroenvio.com",[82,83]],["eurotex.es",[82,83]],["expertetfinance.fr",[82,83]],["farmarsketrhyfuturum.cz",[82,83]],["fastvisa.fr",[82,83]],["fauxdiplomes.org",[82,83]],["fisiolistic.com",[82,83]],["fondazionealbertosordi.it",[82,83]],["foyersekcjapolska.eu",[82,83]],["fundacjaeds.pl",[82,83]],["galeriaxanadu.pl",[82,83]],["garcia-ibanez.com",[82,83]],["gestenaval.com",[82,83]],["glaskogen.se",[82,83]],["globalteam.es",[82,83]],["goia.org.pl",[82,83]],["granibier.com",[82,83]],["grundia.se",[82,83]],["grupoisn.com",[82,83]],["gruporhzaragoza.com",[82,83]],["hagagruppen.se",[82,83]],["halima-magazin.com",[82,83]],["handelskammaren.com",[82,83]],["helitecnics.com",[82,83]],["helux.se",[82,83]],["hermanosalcaraz.com",[82,83]],["hjarnkoll.se",[82,83]],["hmfoundation.com",[82,83]],["hormimpres.com",[82,83]],["hoteldeprony.fr",[82,83]],["hotelroyalcatania.it",[82,83]],["houjethai.nl",[82,83]],["hummer.cz",[82,83]],["icld.se",[82,83]],["ict-project.it",[82,83]],["imagelova.id",[82,83]],["imprentalaspalmas.com",[82,83]],["informamiele.it",[82,83]],["inission.com",[82,83]],["inmobiliariavolga.com",[82,83]],["international-terra-institute.com",[82,83]],["inwaspain.com",[82,83]],["izkigolf.eus",[82,83]],["jdmusic.se",[82,83]],["juveycamps.com",[82,83]],["karel1.nl",[82,83]],["kaunokapiniuprieziura.lt",[82,83]],["kcmkompresor.com",[82,83]],["kewaccountants.co.uk",[82,83]],["konkretplus.pl",[82,83]],["krajci.cz",[82,83]],["krisvagenut.se",[82,83]],["kyoceracapetown.co.za",[82,83]],["labaguette.pl",[82,83]],["labintegrados.com",[82,83]],["ladderupinc.com",[82,83]],["landskronafoto.org",[82,83]],["langarri.es",[82,83]],["lawa.es",[82,83]],["laxo.se",[82,83]],["layher.se",[82,83]],["lifetraveler.net",[82,83]],["lindrooshalsa.se",[82,83]],["lobolab.es",[82,83]],["maisqueromanicorutas.com",[82,83]],["mallandonoandroid.com",[82,83]],["masconcas.com",[82,83]],["mediabest.cz",[82,83]],["megustaelvino.es",[82,83]],["mensa.se",[82,83]],["mestiteslilis.com",[82,83]],["minutoprint.com",[82,83]],["mirano.cz",[82,83]],["mogador.cz",[82,83]],["morphestudio.es",[82,83]],["motoaxial.com",[82,83]],["multiversidad.es",[82,83]],["mundollaves.com",[82,83]],["musicotherapie-federationfrancaise.com",[82,83]],["nauticaravaning.com",[82,83]],["nestville.sk",[82,83]],["nestvillepark.sk",[82,83]],["netromsoftware.ro",[82,83]],["nojesfabriken.se",[82,83]],["oddoneout.se",[82,83]],["opako.pl",[82,83]],["oserlafrique.com",[82,83]],["paintballalcorcon.com",[82,83]],["pallejabcn.com",[82,83]],["penicilinafruits.com",[82,83]],["peregrinoslh.com",[82,83]],["permis-lausanne.ch",[82,83]],["pernillaandersson.se",[82,83]],["piazzadelgusto.it",[82,83]],["pipi-antik.dk",[82,83]],["plasticosgeca.com",[82,83]],["plastimyr.com",[82,83]],["portal.unimes.br",[82,83]],["pro-beruf.de",[82,83]],["prophecyinternational.com",[82,83]],["psicoterapeuta.org",[82,83]],["puertasprieto.com",[82,83]],["puntosdefantasia.es",[82,83]],["pzmk.org.pl",[82,83]],["rastromaquinas.com",[82,83]],["rectoraldecastillon.com",[82,83]],["reinomineral.com",[82,83]],["reklamefreunde.de",[82,83]],["restauraciontalavera.es",[82,83]],["restauranthispania.com",[82,83]],["ristoranteeziogritti.it",[82,83]],["rubinmedical.dk",[82,83]],["rubinmedical.no",[82,83]],["rubinmedical.se",[82,83]],["sak.se",[82,83]],["sammetais.com.br",[82,83]],["sebastiancurylo.pl",[82,83]],["serigrafiaiorgi.com",[82,83]],["seyart.com",[82,83]],["sgaim.com",[82,83]],["sicamemt.org",[82,83]],["siguealconejoblanco.es",[82,83]],["sinfimasa.com",[82,83]],["skp.se",[82,83]],["skrobczynski.pl",[82,83]],["slush.de",[82,83]],["solebike.it",[82,83]],["solu-watt.fr",[82,83]],["soluzionainmobiliaria.es",[82,83]],["somoparque.com",[82,83]],["sorgingaztemoda.com",[82,83]],["sroportal.sk",[82,83]],["ssmf.se",[82,83]],["stobrasil.com.br",[82,83]],["stoparmut2015.ch",[82,83]],["studiodimuro.com",[82,83]],["subkultur-hannover.de",[82,83]],["sustanciagris.com",[82,83]],["szkt.sk",[82,83]],["tagibergslagen.se",[82,83]],["tallergastronomico.es",[82,83]],["tarna.fhsk.se",[82,83]],["tassenyalitzacio.com",[82,83]],["tctech.se",[82,83]],["teknoduegroup.it",[82,83]],["teloliquido.com",[82,83]],["temasa.es",[82,83]],["textilprint.sk",[82,83]],["thehouseofautomata.com",[82,83]],["tmgernika.com",[82,83]],["toastetmoi.fr",[82,83]],["tollare.org",[82,83]],["trattoriabolognesi.it",[82,83]],["triperavigatana.com",[82,83]],["tuckerfranklininsgrp.com",[82,83]],["tuftuf.net",[82,83]],["turuletras.com",[82,83]],["umfmb.fr",[82,83]],["upapsa.com",[82,83]],["valenciatoday.es",[82,83]],["vanghel-und-morawski.de",[82,83]],["vickycan.com",[82,83]],["ville-de-salles.com",[82,83]],["webbigt.se",[82,83]],["westlede.be",[82,83]],["wiemker.org",[82,83]],["woolink.co",[82,83]],["wp.fratgsa.org",[82,83]],["xatobaxestion.com",[82,83]],["xfactor-gmbh.de",[82,83]],["yougoenglish.com",[82,83]],["zigmoon.com",[82,83]],["canyon.com",[84,85]],["drimsim.com",86],["eteam-winkler.de",87],["kdn-elektro.de",87],["elektro-kotz.de",87],["elektro-service-rauh.de",87],["elektroanlagenbuettner.de",87],["be-connect.online",87],["bayergruppe.com",87],["bayer-wkt.de",87],["bayer-wind.de",87],["bayer-wd.de",87],["elektro-joa.de",87],["htechnik.de",87],["ehk-service.de",87],["bittner-tv.de",87],["elektro-suelzner.de",87],["elektro-leps.de",87],["elektromax-hausgeraete.de",87],["elektrotechnik-schedel.de",87],["elkugmbh.de",87],["ln-elektro-gmbh.de",87],["weiss-blau-gmbh.de",87],["sunbeam-energy.de",87],["prokauf.com",87],["lichtstudio-kerl.de",87],["liebing-beese.de",87],["hoeschel-baumann.de",87],["hausgeraete-kraemer.de",87],["gehlhaar-elektrotechnik.de",87],["ehs-elektrotechnik.de",87],["elektrojarschke.de",87],["elektrotechnik-fleischmann.de",87],["elektroseemueller.de",87],["schoerling-blitz.de",87],["ast-apolda.com",87],["elektro-klippel.de",87],["arntz-haustechnik.de",87],["elektro-bindel.de",87],["elektrotechnik-weiss.com",87],["brandschutz-hamburg.de",87],["wagnerelektrotechnik.de",87],["el-kramer.de",87],["mks-hof.de",87],["wernz-elektro.de",87],["e3-energy.de",87],["sg-solar.de",87],["elektrokrebs.de",87],["elektro-roehrl.de",87],["elektro-kreher.de",87],["giegling-vonsaal.de",87],["elektro-lehmann.com",87],["ems-wurzen.de",87],["scholpp.de",88],["scholpp.es",88],["scholpp.pl",88],["scholpp.it",88],["ptc.eu",88],["scholpp.com",88],["abo24.de",88],["overdrive.com",88],["wetu.com",88],["superwatchman.com",89],["bitburger-braugruppe.de",90],["proteincompany.fi",91],["proteinbolaget.se",91],["snoopmedia.com",92],["myguide.de",92],["study-in-germany.de",92],["daad.de",92],["futterhaus.de",93],["scottsofstow.co.uk",[94,95]],["zawszepomorze.pl",96],["wasserkunst-hamburg.de",97],["lta.org.uk",98],["brico-travo.com",99],["tvprato.it",100],["liftshare.com",100],["vesely-drak.cz",100],["consordini.com",100],["fitzmuseum.cam.ac.uk",100],["hotdk2023.kre.hu",100],["panwybierak.pl",100],["bomagasinet.dk",100],["miplantaweb.com",100],["electronics.semaf.at",100],["sfd.pl",100],["flota.es",100],["jobs.cz",100],["prace.cz",100],["eninternetgratis.com",100],["unavidadeviaje.com",100],["theateramrand.de",101],["jugend-praesentiert.de",101],["buktube.com",102],["xhaccess.com",102],["xhamster.com",102],["xhamster2.com",102],["xhamster3.com",102],["xhamster.desi",102],["evium.de",103],["epayments.com",104],["riceundspice.de",105],["happysocks.com",[106,107]],["win2day.at",108],["porp.pl",109],["gesundheitsamt-2025.de",110],["coastfashion.com",111],["oasisfashion.com",111],["warehousefashion.com",111],["misspap.com",111],["karenmillen.com",111],["boohooman.com",111],["nebo.app",112],["groupeonepoint.com",113],["edpsciences.org",114],["bemmaisseguro.com",115],["scheidegger.nl",116],["transparency.fb.com",[117,118]],["faq.whatsapp.com",118],["blog.whatsapp.com",118],["www.whatsapp.com",118],["phoenix.de",119],["strato.se",120],["strato.de",120],["mishcon.com",121],["bbva.es",123],["bbvauk.com",123],["bbva.be",123],["bbva.fr",123],["bbva.it",123],["bbva.pt",123],["suntech.cz",124],["digikey.co.za",125],["digikey.cn",125],["digikey.ee",125],["digikey.at",125],["digikey.be",125],["digikey.bg",125],["digikey.cz",125],["digikey.dk",125],["digikey.fi",125],["digikey.fr",125],["digikey.de",125],["digikey.gr",125],["digikey.hu",125],["digikey.ie",125],["digikey.it",125],["digikey.lv",125],["digikey.lt",125],["digikey.lu",125],["digikey.nl",125],["digikey.no",125],["digikey.pl",125],["digikey.pt",125],["digikey.ro",125],["digikey.sk",125],["digikey.si",125],["digikey.es",125],["digikey.se",125],["digikey.ch",125],["digikey.co.uk",125],["digikey.co.il",125],["digikey.com.mx",125],["digikey.ca",125],["digikey.com.br",125],["digikey.co.nz",125],["digikey.com.au",125],["digikey.co.th",125],["digikey.tw",125],["digikey.kr",125],["digikey.sg",125],["digikey.ph",125],["digikey.my",125],["digikey.jp",125],["digikey.in",125],["digikey.hk",125],["digikey.com",125],["eurosupps.nl",126],["pathe.nl",127],["makelaarsland.nl",128],["nordania.dk",129],["365direkte.no",129],["danskebank.lv",129],["danskebank.lt",129],["danskebank.no",129],["danskebank.fi",129],["danskebank.dk",129],["danskebank.com",129],["danskebank.se",129],["danskebank.co.uk",129],["danskeci.com",129],["danicapension.dk",129],["gewerbegebiete.de",130],["visti.it",131],["balay.es",132],["constructa.com",132],["gaggenau.com",132],["talksport.com",133],["loudersound.com",133],["impulse.de",133],["pcgamer.com",133],["infoworld.com",133],["kiplinger.com",133],["omni.se",133],["it-times.de",133],["bitcoinmagazine.com",133],["deliciousmagazine.co.uk",133],["upday.com",133],["deutschlandcard.de",133],["szbz.de",133],["free-fonts.com",133],["lieferzeiten.info",133],["vice.com",133],["newsnow.co.uk",133],["out.com",133],["streampicker.de",133],["radiotimes.com",133],["nowtv.com",133],["kochbar.de",133],["toggo.de",133],["am-online.com",133],["n-tv.de",133],["newsandstar.co.uk",133],["tag24.de",133],["weltkunst.de",133],["noveauta.sk",133],["pnn.de",133],["economist.com",133],["crash.net",133],["norwaytoday.info",133],["insider.com",133],["preis.de",133],["ibroxnoise.co.uk",133],["celtsarehere.com",133],["nufcblog.co.uk",133],["sport1.de",133],["techconnect.com",133],["followfollow.com",133],["thespun.com",133],["mazdas247.com",133],["fastcar.co.uk",133],["vitalfootball.co.uk",133],["audi-sport.net",133],["bumble.com",133],["arcamax.com",133],["dilbert.com",133],["sportbible.com",133],["givemesport.com",133],["dartsnews.com",133],["gpfans.com",133],["justjared.com",133],["justjaredjr.com",133],["finanzen.at",133],["flights-idealo.co.uk",133],["idealo.com",133],["idealo.se",133],["idealo.nl",133],["idealo.pl",133],["idealo.pt",133],["idealo.fi",133],["idealo.dk",133],["idealo.no",133],["idealo.in",133],["idealo.at",133],["ladenzeile.at",133],["berliner-zeitung.de",133],["urbia.de",133],["essen-und-trinken.de",133],["wetter.de",133],["rtl-living.de",133],["vox.de",133],["ladenzeile.de",133],["advocate.com",133],["idealo.de",133],["wigantoday.net",133],["economistgroup.com",133],["transfermarkt.nl",133],["transfermarkt.es",133],["transfermarkt.pl",133],["transfermarkt.pt",133],["transfermarkt.at",133],["transfermarkt.it",133],["transfermarkt.fr",133],["transfermarkt.de",133],["transfermarkt.be",133],["transfermarkt.co.uk",133],["transfermarkt.us",133],["footballfancast.com",133],["cio.com",133],["jezebel.com",133],["splinternews.com",133],["denofgeek.com",133],["kinja.com",133],["theinventory.com",133],["rollingstone.de",133],["sueddeutsche.de",133],["csoonline.com",133],["tvmovie.de",133],["testberichte.de",133],["pcgameshardware.de",133],["4players.de",133],["guj.de",133],["bild.de",133],["wieistmeineip.de",133],["testbild.de",133],["stylebook.de",133],["skygroup.sky",133],["speisekarte.de",133],["haeuser.de",133],["cmo.com.au",133],["pcworld.co.nz",133],["idealo.it",133],["transfermarkt.jp",133],["transfermarkt.co.id",133],["autoexpress.co.uk",133],["transfermarkt.com",133],["esportsclub.nl",133],["webwinkel.tubantia.nl",133],["shopalike.nl",133],["autoweek.nl",133],["pcworld.es",133],["macworld.es",133],["idealo.es",133],["businessinsider.es",133],["motor.es",133],["autobild.es",133],["driving.co.uk",133],["stern.de",133],["pcgames.de",133],["sport.de",133],["idealo.fr",133],["tori.fi",133],["snow-forecast.com",133],["tidende.dk",133],["kraloyun.com",133],["arnnet.com.au",133],["bunte.de",133],["handelsblatt.com",133],["techbook.de",133],["metal-hammer.de",133],["macworld.co.uk",133],["maxisciences.com",133],["ohmymag.com",133],["voici.fr",133],["geo.de",133],["businessinsider.de",133],["meinestadt.de",133],["politico.eu",133],["spieletipps.de",133],["finanznachrichten.de",133],["vtwonen.nl",133],["stol.it",133],["waitrose.com",134],["storyhouseegmont.dk",135],["storyhouseegmont.no",135],["storyhouseegmont.se",135],["egmont.com",135],["nordiskfilm.com",135]]);

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
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
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
