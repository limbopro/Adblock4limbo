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

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_removeClass = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-open","body","stay"],["noscroll","body","stay"],["tc-modal-open","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["eu-cookie-compliance-popup-open","body","stay"],["bf-fixed","body","stay"],["cookies-not-set","body","stay"],["js-cookie-consent-popup","","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["with-featherlight","","stay"],["wcc-popup-overflow","body","stay"],["show--consent","body","stay"],["hasCookieBanner","body","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["seswater.co.uk",3],["galerieslafayette.com",5],["ooekultur.at",6],["igmetall.de",7],["universalgeneve.com",8],["hostfly.by",9],["quantamagazine.org",[10,39]],["rappjmed.ch",10],["osprey.com",11],["ivass.it",12],["onelottery.co.uk",13],["yourschoollottery.co.uk",13],["rainbowlottery.co.uk",13],["idg.se",14],["gearaid.com",15],["buildex.cz",16],["gruenderservice.at",17],["caiacosmetics.com",18],["pdc-big.nl",19],["pdc-big.it",19],["pdc-big.ie",19],["pdc-big.fr",19],["pdc-big.es",19],["pdc-big.be",19],["pdc-big.at",19],["pdc-big.co.uk",19],["pdc-big.de",19],["pdc-big.com",19],["elio-systems.io",[20,27]],["sanha.com",[20,27]],["recettesetcabas.com",21],["flinders.edu.au",22],["opera.com",23],["groningenairport.nl",24],["crocs.co.uk",[25,26]],["crocs.eu",[25,26]],["crocs.nl",[25,26]],["crocs.fi",[25,26]],["crocs.fr",[25,26]],["crocs.de",[25,26]],["stilord.fr",28],["stilord.it",28],["stilord.de",28],["stilord.es",28],["dasfutterhaus.at",29],["developer.paypal.com",30],["cpc2r.ch",31],["zen.com",32],["tecsafe.de",33],["foxracingshox.de",33],["stromnetz.berlin",34],["websummit.com",35],["thehustle.co",35],["epochtimes.fr",36],["ajbell.co.uk",37],["economiapertutti.bancaditalia.it",38],["tradersunion.com",39],["phsgreenleaf.co.uk",40],["phswashrooms.ie",40],["mccolls.co.uk",[41,42]],["crt.hr",43],["yourstorebox.com",44],["clickskeks.at",[45,46]],["housell.com",47],["lactostop.de",48],["spilger.de",49],["dbs.si",50],["abcya.com",51],["umicore.be",52],["umicore.fi",52],["umicore.ca",52],["jongcdenv.be",52],["umicore.jp",52],["umicore.cn",52],["umicore.pl",52],["umicore.kr",52],["umicore.co.th",52],["umicore.fr",52],["umicore.de",52],["donneurdecellulessouches.be",52],["stammzellenspender.be",52],["stemcelldonor.be",52],["umicore.com",52],["umicore.com.br",52],["koenvandenheuvel.be",52],["stamceldonor.be",52],["nahima.be",52],["catused.com",53],["eujuicers.cz",54],["graziellawicki.com",55],["funnelcockpit.com",55],["dnk.nl",56],["eam.de",57],["eam-netz.de",57],["tvp.pl",58],["cellardoor.co",59],["ampire.de",60],["verpackungsstadl.ch",60],["imkershoperzgebirge.de",60],["modellbahndealer.de",60],["tillit-bikes.shop",60],["bike-onlineshop.de",60],["futspo.de",60],["compravo.de",60],["perpedale.de",60],["modellbau-jung.de",60],["verpackungsstadl.at",60],["modellbau-vordermaier.de",60],["bike-supply.de",60],["wroc.pl",61],["basenio.de",62],["fm-systeme.de",63],["gartenhotel-crystal.at",64],["swffm.de",64],["studentenwerkfrankfurt.de",64],["dmsg.de",64],["bgk.pl",64],["pflegezeit-berlin.de",64],["gpd-nordost-onlineberatung.de",64],["proabschluss-beratung.de",64],["hilfe-telefon-missbrauch.online",64],["dww-suchtberatung.de",64],["cyberforum.de",64],["gutscheine.eurothermen.at",64],["wolff-mueller.de",64],["ras.bz.it",64],["technoalpin.com",64],["wifiwien.at",[65,66]],["wifikaernten.at",[65,66]],["wifi.at",[65,66]],["5asec.pt",67],["tui.dk",67],["tui.fi",67],["tui.no",67],["tui.se",67],["pollfish.com",68],["werkenbijtrekpleister.nl",69],["werkenbijkruidvat.be",69],["rassenlijst.info",69],["werkenbijiciparisxl.nl",69],["flightradar24.com",70],["vietnamairlines.com",71],["incotec.com",72],["croda.com",72],["exaktafoto.se",73],["campingdusoleil.com",74],["hotel-la-chaumiere.com",74],["les-anges-gardiens.fr",74],["croco-kid.com",74],["cambridge-centre.fr",74],["equisud.com",74],["allokebab-pau.fr",74],["etre-visible.local.fr",74],["mas-montebello66.com",74],["camping-residentiel-les-marronniers-jura.fr",74],["dj4events.fr",74],["saintjoursexpertmaritime.com",74],["az-renovation.fr",74],["presquilemultiservices.com",74],["hotel-aigoual.com",74],["hotel-restaurant-pau.com",74],["desrayaud-paysagistes.com",74],["hotelsaintcharles.fr",74],["agvillagecamarguais.com",74],["joyella.com",74],["gabriel-godard.com",74],["artech-sellerie.com",74],["motoclubernee.com",74],["ledauphinhotel.com",74],["cuisin-studio.com",74],["biomeo-environnement.com",74],["leman-instruments.com",74],["esthetique-meyerbeer.com",74],["institut-bio-naturel-nice.fr",74],["nature-et-bois.fr",74],["transmissions-bordeaux.com",74],["kinechartreuse.com",74],["corsegourmande.com",74],["cotedecor.com",74],["restaurant-la-badiane.fr",74],["systelia.fr",74],["lesjardinsinterieurs.com",74],["helenevue.com",74],["saubusse-thermes.com",74],["dehn.es",75],["dehn.fr",75],["dehn.it",75],["dehn.hu",75],["desitek.dk",75],["dehn.at",75],["dehn.de",75],["wwz.ch",76],["inyova.at",77],["inyova.ch",77],["inyova.de",77],["ccalbacenter.com",77],["wamu.org",77],["momentive.com",78],["kennedyslaw.com",79],["elekta.com",80],["ige.ch",81],["stratasysdirect.com",82],["stratasys.com",82],["werkenbijkruidvat.nl",83],["ghacks.net",84],["cutoff.es",85],["whyopencomputing.com",85],["mbanc.com",86],["dentalgalindo.com",[87,88]],["archeologia.com.pl",[87,88]],["letrayframe.com",[87,88]],["osteofisintegral.es",[87,88]],["uco.cat",[87,88]],["buecheler-kollegen.de",[87,88]],["seminariodeosma-soria.org",[87,88]],["kamensenica.sk",[87,88]],["movimentoofficinedelsud.it",[87,88]],["trident.se",[87,88]],["semanasantademalagaayeryhoy.com",[87,88]],["diazfloristasestrella.com",[87,88]],["cosechavida.com",[87,88]],["broncoillustration.com",[87,88]],["sumoingenio.com",[87,88]],["aligepro.es",[87,88]],["muevo.es",[87,88]],["azulejosacedo.com",[87,88]],["sana.cz",[87,88]],["aliapinto.com",[87,88]],["tsconline.es",[87,88]],["polifast.it",[87,88]],["napos.cz",[87,88]],["gutshaus-neuendorf-usedom.de",[87,88]],["kunterbunte-kinder.de",[87,88]],["desatando.org",[87,88]],["ledocom.cz",[87,88]],["aliciasuarez.net",[87,88]],["diabramar.com",[87,88]],["lamagnalonga.org",[87,88]],["benejamrefrigeracion.com",[87,88]],["micropigmentacioncapilarbcn.com",[87,88]],["arcusnet.se",[87,88]],["videogenic.es",[87,88]],["grundschule-remagen.de",[87,88]],["aceitessatunion.com",[87,88]],["servigraphic.com.ar",[87,88]],["textsteine.de",[87,88]],["campergarage.es",[87,88]],["administradorfincasblog.com",[87,88]],["balgal.es",[87,88]],["grafika-dtp-produkcia.sk",[87,88]],["unmardeconstelaciones.com",[87,88]],["salobella.com",[87,88]],["careon.se",[87,88]],["gymnosport.com",[87,88]],["easyhomes.com.es",[87,88]],["casavaledalama.pt",[87,88]],["dosc.es",[87,88]],["fcfoz.pt",[87,88]],["berevolk.com",[87,88]],["hvpropertyclearance.co.uk",[87,88]],["calamo.se",[87,88]],["elserratplanoles.com",[87,88]],["bubblessea.es",[87,88]],["disperator.se",[87,88]],["ecoparquets.com",[87,88]],["zlotaraczkalublin.pl",[87,88]],["congresoscostadelsol.com",[87,88]],["pneumaticiroma.it",[87,88]],["asprona.es",[87,88]],["virgendefatima.es",[87,88]],["patronatpremia.cat",[87,88]],["2points13.fr",[87,88]],["3d3.es",[87,88]],["abantos.es",[87,88]],["abastanimacio.org",[87,88]],["academiafrancesadebelleza.co",[87,88]],["acaluca.org",[87,88]],["acce.es",[87,88]],["ad-particles.com",[87,88]],["adea.sk",[87,88]],["afplr.fr",[87,88]],["agiletalon.fr",[87,88]],["agiratou.com",[87,88]],["aidaromero.com",[87,88]],["alkoholochnarkotika.se",[87,88]],["alligatorbioscience.se",[87,88]],["anea.es",[87,88]],["animala.es",[87,88]],["apimadrid.net",[87,88]],["aquatrend.sk",[87,88]],["arabesque-formation.org",[87,88]],["arrivamallorca.es",[87,88]],["asapservicios.net",[87,88]],["aspock.com",[87,88]],["atout-voyages.com",[87,88]],["autocareslazara.es",[87,88]],["autocaresmariano.com",[87,88]],["autoform.pl",[87,88]],["ayudatranspersonal.com",[87,88]],["bacabeton.cz",[87,88]],["begalvi.com",[87,88]],["bent-com.com",[87,88]],["berliner-haeuser.de",[87,88]],["bespokespain.com",[87,88]],["bevent-rasch.se",[87,88]],["bio-cord.es",[87,88]],["biotropica.fr",[87,88]],["bornes-eurorelais.fr",[87,88]],["braeu-stueble.de",[87,88]],["brendanoharamp.scot",[87,88]],["briau.com",[87,88]],["caleulalia.com",[87,88]],["cande-sur-beuvron.com",[87,88]],["carlhag.se",[87,88]],["carrier.se",[87,88]],["casadelaveiga.com",[87,88]],["caytas.com.tr",[87,88]],["cecjecuador.org.ec",[87,88]],["cegef.com",[87,88]],["centrediagonal.com",[87,88]],["centropolisportivomassari.it",[87,88]],["cerai.org",[87,88]],["cervosgrup.com",[87,88]],["chimeneasalicante.com",[87,88]],["cliatec.com",[87,88]],["clinicabadal.es",[87,88]],["cometh-consulting.com",[87,88]],["copysud.fr",[87,88]],["cortilar.com",[87,88]],["crystal-finance.com",[87,88]],["ctangana.com",[87,88]],["cugatresidencial.com",[87,88]],["dake.es",[87,88]],["datatal.se",[87,88]],["degom.com",[87,88]],["delfis.es",[87,88]],["delogica.com",[87,88]],["dentalcompany.es",[87,88]],["descarpack.com.br",[87,88]],["desfiladeroediciones.com",[87,88]],["desomer.be",[87,88]],["diarioandalucia.es",[87,88]],["dibujos-animados.net",[87,88]],["direkt-immobilie.de",[87,88]],["dovozautznemecka.cz",[87,88]],["drpuigdollers.com",[87,88]],["dunamys.inf.br",[87,88]],["easyimplantology.com",[87,88]],["eb2b.com.pl",[87,88]],["echo-mieszkania.pl",[87,88]],["eclinic.com.sg",[87,88]],["edgeict.com",[87,88]],["eiglaw.com",[87,88]],["elandexpediciones.es",[87,88]],["emalec.com",[87,88]],["enlighten.net",[87,88]],["equifab.es",[87,88]],["escuelanauticamarenostrum.com",[87,88]],["esgrima.cat",[87,88]],["espaisperconviure.es",[87,88]],["etbygg.com",[87,88]],["eurepieces.fr",[87,88]],["euroenvio.com",[87,88]],["eurotex.es",[87,88]],["expertetfinance.fr",[87,88]],["farmarsketrhyfuturum.cz",[87,88]],["fastvisa.fr",[87,88]],["fauxdiplomes.org",[87,88]],["fisiolistic.com",[87,88]],["fondazionealbertosordi.it",[87,88]],["foyersekcjapolska.eu",[87,88]],["fundacjaeds.pl",[87,88]],["galeriaxanadu.pl",[87,88]],["garcia-ibanez.com",[87,88]],["gestenaval.com",[87,88]],["glaskogen.se",[87,88]],["globalteam.es",[87,88]],["goia.org.pl",[87,88]],["granibier.com",[87,88]],["grundia.se",[87,88]],["grupoisn.com",[87,88]],["gruporhzaragoza.com",[87,88]],["hagagruppen.se",[87,88]],["halima-magazin.com",[87,88]],["handelskammaren.com",[87,88]],["helitecnics.com",[87,88]],["helux.se",[87,88]],["hermanosalcaraz.com",[87,88]],["hjarnkoll.se",[87,88]],["hmfoundation.com",[87,88]],["hormimpres.com",[87,88]],["hoteldeprony.fr",[87,88]],["hotelroyalcatania.it",[87,88]],["houjethai.nl",[87,88]],["hummer.cz",[87,88]],["icld.se",[87,88]],["ict-project.it",[87,88]],["imprentalaspalmas.com",[87,88]],["informamiele.it",[87,88]],["inission.com",[87,88]],["inmobiliariavolga.com",[87,88]],["international-terra-institute.com",[87,88]],["inwaspain.com",[87,88]],["izkigolf.eus",[87,88]],["jdmusic.se",[87,88]],["juveycamps.com",[87,88]],["kaunokapiniuprieziura.lt",[87,88]],["kcmkompresor.com",[87,88]],["kewaccountants.co.uk",[87,88]],["konkretplus.pl",[87,88]],["krajci.cz",[87,88]],["krisvagenut.se",[87,88]],["kyoceracapetown.co.za",[87,88]],["labaguette.pl",[87,88]],["labintegrados.com",[87,88]],["ladderupinc.com",[87,88]],["landskronafoto.org",[87,88]],["langarri.es",[87,88]],["lawa.es",[87,88]],["laxo.se",[87,88]],["layher.se",[87,88]],["lifetraveler.net",[87,88]],["lindrooshalsa.se",[87,88]],["lobolab.es",[87,88]],["maisqueromanicorutas.com",[87,88]],["mallandonoandroid.com",[87,88]],["masconcas.com",[87,88]],["mediabest.cz",[87,88]],["megustaelvino.es",[87,88]],["mensa.se",[87,88]],["mestiteslilis.com",[87,88]],["minutoprint.com",[87,88]],["mirano.cz",[87,88]],["mogador.cz",[87,88]],["morphestudio.es",[87,88]],["motoaxial.com",[87,88]],["multiversidad.es",[87,88]],["mundollaves.com",[87,88]],["musicotherapie-federationfrancaise.com",[87,88]],["nauticaravaning.com",[87,88]],["nestville.sk",[87,88]],["nestvillepark.sk",[87,88]],["netromsoftware.ro",[87,88]],["nojesfabriken.se",[87,88]],["oddoneout.se",[87,88]],["opako.pl",[87,88]],["oserlafrique.com",[87,88]],["paintballalcorcon.com",[87,88]],["pallejabcn.com",[87,88]],["penicilinafruits.com",[87,88]],["peregrinoslh.com",[87,88]],["permis-lausanne.ch",[87,88]],["pernillaandersson.se",[87,88]],["piazzadelgusto.it",[87,88]],["pipi-antik.dk",[87,88]],["plasticosgeca.com",[87,88]],["plastimyr.com",[87,88]],["portal.unimes.br",[87,88]],["pro-beruf.de",[87,88]],["prophecyinternational.com",[87,88]],["psicoterapeuta.org",[87,88]],["puertasprieto.com",[87,88]],["puntosdefantasia.es",[87,88]],["pzmk.org.pl",[87,88]],["rastromaquinas.com",[87,88]],["rectoraldecastillon.com",[87,88]],["reinomineral.com",[87,88]],["reklamefreunde.de",[87,88]],["restauranthispania.com",[87,88]],["rubinmedical.dk",[87,88]],["rubinmedical.no",[87,88]],["rubinmedical.se",[87,88]],["sak.se",[87,88]],["sammetais.com.br",[87,88]],["sebastiancurylo.pl",[87,88]],["serigrafiaiorgi.com",[87,88]],["seyart.com",[87,88]],["sgaim.com",[87,88]],["sicamemt.org",[87,88]],["siguealconejoblanco.es",[87,88]],["sinfimasa.com",[87,88]],["skp.se",[87,88]],["skrobczynski.pl",[87,88]],["slush.de",[87,88]],["solebike.it",[87,88]],["solu-watt.fr",[87,88]],["soluzionainmobiliaria.es",[87,88]],["somoparque.com",[87,88]],["sorgingaztemoda.com",[87,88]],["sroportal.sk",[87,88]],["ssmf.se",[87,88]],["stobrasil.com.br",[87,88]],["stoparmut2015.ch",[87,88]],["studiodimuro.com",[87,88]],["subkultur-hannover.de",[87,88]],["sustanciagris.com",[87,88]],["szkt.sk",[87,88]],["tagibergslagen.se",[87,88]],["tallergastronomico.es",[87,88]],["tarna.fhsk.se",[87,88]],["tassenyalitzacio.com",[87,88]],["tctech.se",[87,88]],["teknoduegroup.it",[87,88]],["teloliquido.com",[87,88]],["temasa.es",[87,88]],["textilprint.sk",[87,88]],["thehouseofautomata.com",[87,88]],["tmgernika.com",[87,88]],["toastetmoi.fr",[87,88]],["tollare.org",[87,88]],["triperavigatana.com",[87,88]],["tuckerfranklininsgrp.com",[87,88]],["tuftuf.net",[87,88]],["turuletras.com",[87,88]],["umfmb.fr",[87,88]],["upapsa.com",[87,88]],["valenciatoday.es",[87,88]],["vanghel-und-morawski.de",[87,88]],["vickycan.com",[87,88]],["ville-de-salles.com",[87,88]],["webbigt.se",[87,88]],["westlede.be",[87,88]],["wiemker.org",[87,88]],["woolink.co",[87,88]],["wp.fratgsa.org",[87,88]],["xatobaxestion.com",[87,88]],["xfactor-gmbh.de",[87,88]],["zigmoon.com",[87,88]],["scholpp.de",89],["scholpp.es",89],["scholpp.pl",89],["scholpp.it",89],["scholpp.com",89],["wetu.com",89],["alpen.co.uk",90],["alsina.com",90],["assosia.com",90],["bassicostruzioni.it",90],["bettenconcept.com",90],["blackpoolairport.com",90],["cateringvandenberg.nl",90],["ceratrends.com",90],["chestnut-tree-house.org.uk",90],["cirrusassessment.com",90],["clinicalondon.co.uk",90],["cmos.ie",90],["deniswilliams.ie",90],["efmdglobal.org",90],["emri.nl",90],["endlesspools.fr",90],["foleys.ie",90],["fryerndental.co.uk",90],["globalfocusmagazine.com",90],["guildhalldental.com",90],["hampshireimplantcentre.co.uk",90],["heikkala.com",90],["hermesit.net",90],["hotspring.be",90],["xn--inkomstfrskring-9kb71a.se",90],["innohome.com",90],["jakobwirt.at",90],["klinger.fi",90],["londonwomenscentre.co.uk",90],["memoreclame.nl",90],["mitarbeiter-app.de",90],["mobiltbredband.se",90],["newsbook.com.mt",90],["northeastspace.ie",90],["portea.fr",90],["precisiondentalstudio.co.uk",90],["ramotavla.se",90],["simkort.se",90],["stbarnabas-hospice.org.uk",90],["tundra.fi",90],["upitrek.com",90],["weetabix-arabia.com",90],["weetabix.co.uk",90],["weetabix.com",90],["weetabix.es",90],["weetabix.fr",90],["weetabix.it",90],["weetabix.nl",90],["weetabix.no",90],["weetabix.pt",90],["weetabixea.com",90],["weetabixfoodcompany.co.uk",90],["weetabixonthego.co.uk",90],["tvprato.it",91],["liftshare.com",91],["vesely-drak.cz",91],["consordini.com",91],["fitzmuseum.cam.ac.uk",91],["hotdk2023.kre.hu",91],["panwybierak.pl",91],["bomagasinet.dk",91],["miplantaweb.com",91],["electronics.semaf.at",91],["sfd.pl",91],["flota.es",91],["jobs.cz",91],["prace.cz",91],["eninternetgratis.com",91],["unavidadeviaje.com",91],["faq.whatsapp.com",92],["blog.whatsapp.com",92],["www.whatsapp.com",92]]);

const entitiesMap = new Map([["chronext",4]]);

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
    const tokens = safe.String_split.call(rawToken, /\s*\|\s*/);
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
        } catch {
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
            catch {
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
    } catch {
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
} catch {
}
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
    catch { }
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_removeClass();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
