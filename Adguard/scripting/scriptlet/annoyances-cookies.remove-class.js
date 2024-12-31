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
const uBOL_removeClass = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["cookie-consent-active","body","stay"],["cookie-overlay-active","body","stay"],["cookiebanner-body","body","stay"],["cookie-open","body","stay"],["noscroll","body","stay"],["tc-modal-open","body","stay"],["cookie-notice-active","body","stay"],["cookie-overlay","body","stay"],["eu-cookie-compliance-popup-open","body","stay"],["bf-fixed","body","stay"],["cookies-not-set","body","stay"],["js-cookie-consent-popup","","stay"],["ivass-no-cookie","body","stay"],["cookie-popup-visible","body","stay"],["idgcp__layer--active","html","stay"],["cc-scrolling-disabled","body","stay"],["modal-open","body","stay"],["hasPopup","body","stay"],["darker","body","stay"],["scommerce-gdpr-disabled","div","stay"],["no-scroll","html","stay"],["compensate-for-scrollbar","body","stay"],["gdpr-shown","body","stay"],["cookie-consent__wrapper","div","stay"],["cookies-request","body","stay"],["cx-modal-open","html","stay"],["cx-no-scroll","html","stay"],["e-cookie-bar-open","body","stay"],["no-consent","html","stay"],["is-blurred-cookiebox","html","stay"],["ccpaCookieBanner-acceptedAll","body","stay"],["cookies-show",".cookies-show","stay"],["disable-background","body","stay"],["cookie--not-set","body","stay"],["_cookiebanner","body","stay"],["async-hide","html","stay"],["ntd-gdpr-no-scroll","body","stay"],["modal-background","div","stay"],["pef-no-cookie","body","stay"],["cookie-not-accepted","body","stay"],["c-body--locked-always","body","stay"],["global-cookie","div","stay"],["disable-scroll","","stay"],["bg-gray","div","stay"],["cookie-active","body","stay"],["ccm-blocked","html","stay"],["ccm-blocked","body","stay"],["is-modal-cookies-visible","body","stay"],["layerActive","","stay"],["cookiebar-open","body","stay"],["blur","body","stay"],["cookie","","stay"],["cookieconsent-active","body","stay"],["cookieMsg","","stay"],["cookie_consent__alert","","stay"],["gdpr-cookie-notice-center-loaded","","stay"],["has-open-cookie","","stay"],["om_cookie_active","","stay"],["tvp-cookie-scroll-lock","","stay"],["cookie-overlay","","stay"],["disable","div","stay"],["prevent-scroll","","stay"],["fog","","stay"],["cookie-hint","","stay"],["dp--cookie-consent","body","stay"],["body-overlay-scrollable","","stay"],["modal-open","","stay"],["no-scroll","body","stay"],["show-cookie-consent","","stay"],["is-active-cookiebar","","stay"],["has-banner","body.has-banner","stay"],["pointerevents","","stay"],["cookie-accept-required","","stay"],["cookie-open","","stay"],["cookiePopupVisible","","stay"],["unreadable-display","","stay"],["mandatory_cookie_modal","","stay"],["wwzoverlay--open","","stay"],["gdpr-infobar-visible","","stay"],["cookie-enabled","","stay"],["cookie-overlay--open","","stay"],["cookie-banner-open","","stay"],["cookie-banner-active","body","stay"],["overlay-content","body","stay"],["is-active-cookiebar","body","stay"],["didomi-popup-open","body"],["idxrcookies-block-user-nav","body","stay"],["ccpa-banner","","stay"],["modal-cacsp-open","","stay"],["modal-cacsp-box","","stay"],["brd_cookies_bar_popup_shown","html","stay"],["js-modalUnclosable","","stay"],["js-cookiesModal|is-open",".js-cookiesModal,.is-open"],["remodal-bg","","stay"],["cookie-warning-open","","stay"],["with-featherlight","","stay"],["cookies-shown","body","stay"],["no-cookie","","stay"],["wcc-popup-overflow","body","stay"],["dimmeractive","body","stay"],["snoop-modal-open","body","stay"],["is-blurred-cookiebox","","stay"],["consent-manager--popup","body","stay"],["consent-manager-open","body","stay"],["zp-gtm-scripts--blur","","stay"],["dots","","stay"],["cookies-modal-open","","stay"],["overlay","body","stay"],["with-dark","","stay"],["show--consent","body","stay"],["messages-active","","stay"],["cdk-overlay-container","","stay"],["b-dialog","","stay"],["disabled","body","stay"],["lock-scroll","","stay"],["disabled","header","stay"],["cookie-not-accepted-overlay","","stay"],["blurred-page","","stay"],["cookie-consent--present","","stay"],["header-gdrp-cookies-visible","","stay"],["fixed","","stay"],["noScroll","","stay"],["cookie_notification","","stay"],["blocked-body","body","stay"],["popup","div","stay"],["has-no-scroll","","stay"],["_31e","div","stay"],["hasCookieBanner","body","stay"],["blured","","stay"],["has-overlay","","stay"],["cookie-consent-is-active","body","stay"],["cookiesgdpr__scroll","","stay"],["modal-show","","stay"],["gdpr","","stay"],["cookieopened","body","stay"],["cookiewall-active","body","stay"],["is-cookie-notice","body","stay"],["cookie-consent-banner-open","html","stay"],["modal-overlay","","stay"],["blur","","stay"],["cookielaw-blur-background","","stay"],["sp-message-open","html","stay"],["modalOpen___gZykv","body"],["cookie-bar","","stay"]];

const hostnamesMap = new Map([["winparts.be",0],["winparts.eu",0],["winparts.fr",0],["winparts.ie",0],["winparts.nl",0],["winparts.se",0],["sportano.sk",1],["sportano.de",1],["sportano.bg",1],["sportano.hu",1],["sportano.ro",1],["sportano.cz",1],["klinik-am-ring.de",2],["seswater.co.uk",3],["strato.se",4],["strato.de",4],["galerieslafayette.com",5],["ooekultur.at",6],["igmetall.de",7],["universalgeneve.com",8],["hostfly.by",9],["quantamagazine.org",[10,39]],["rappjmed.ch",10],["osprey.com",11],["ivass.it",12],["onelottery.co.uk",13],["yourschoollottery.co.uk",13],["rainbowlottery.co.uk",13],["idg.se",14],["gearaid.com",15],["buildex.cz",16],["gruenderservice.at",17],["caiacosmetics.com",18],["pdc-big.nl",19],["pdc-big.it",19],["pdc-big.ie",19],["pdc-big.fr",19],["pdc-big.es",19],["pdc-big.be",19],["pdc-big.at",19],["pdc-big.co.uk",19],["pdc-big.de",19],["pdc-big.com",19],["elio-systems.io",[20,27]],["sanha.com",[20,27]],["recettesetcabas.com",21],["flinders.edu.au",22],["opera.com",23],["groningenairport.nl",24],["crocs.co.uk",[25,26]],["crocs.eu",[25,26]],["crocs.nl",[25,26]],["crocs.fi",[25,26]],["crocs.fr",[25,26]],["crocs.de",[25,26]],["stilord.fr",28],["stilord.it",28],["stilord.de",28],["stilord.es",28],["dasfutterhaus.at",29],["developer.paypal.com",30],["cpc2r.ch",31],["zen.com",32],["tecsafe.de",33],["foxracingshox.de",33],["stromnetz.berlin",34],["websummit.com",35],["thehustle.co",35],["epochtimes.fr",36],["ajbell.co.uk",37],["economiapertutti.bancaditalia.it",38],["tradersunion.com",39],["phsgreenleaf.co.uk",40],["phswashrooms.ie",40],["mccolls.co.uk",[41,42]],["crt.hr",43],["yourstorebox.com",44],["clickskeks.at",[45,46]],["housell.com",47],["lactostop.de",48],["mibe.de",48],["spilger.de",49],["dbs.si",50],["abcya.com",51],["umicore.be",52],["umicore.fi",52],["umicore.ca",52],["jongcdenv.be",52],["umicore.jp",52],["umicore.cn",52],["umicore.pl",52],["umicore.kr",52],["umicore.co.th",52],["umicore.fr",52],["umicore.de",52],["donneurdecellulessouches.be",52],["stammzellenspender.be",52],["stemcelldonor.be",52],["umicore.com",52],["umicore.com.br",52],["koenvandenheuvel.be",52],["stamceldonor.be",52],["nahima.be",52],["catused.com",53],["eujuicers.cz",54],["graziellawicki.com",55],["funnelcockpit.com",55],["dnk.nl",56],["eam.de",57],["eam-netz.de",57],["tvp.pl",58],["cellardoor.co",59],["ampire.de",60],["verpackungsstadl.ch",60],["imkershoperzgebirge.de",60],["modellbahndealer.de",60],["tillit-bikes.shop",60],["bike-onlineshop.de",60],["futspo.de",60],["compravo.de",60],["perpedale.de",60],["modellbau-jung.de",60],["verpackungsstadl.at",60],["modellbau-vordermaier.de",60],["bike-supply.de",60],["wroc.pl",61],["basenio.de",62],["fm-systeme.de",63],["gartenhotel-crystal.at",64],["swffm.de",64],["studentenwerkfrankfurt.de",64],["dmsg.de",64],["bgk.pl",64],["pflegezeit-berlin.de",64],["gpd-nordost-onlineberatung.de",64],["proabschluss-beratung.de",64],["hilfe-telefon-missbrauch.online",64],["dww-suchtberatung.de",64],["cyberforum.de",64],["gutscheine.eurothermen.at",64],["wolff-mueller.de",64],["ras.bz.it",64],["technoalpin.com",64],["wifiwien.at",[65,66]],["wifikaernten.at",[65,66]],["wifi.at",[65,66]],["pdf-archive.com",66],["5asec.pt",67],["tui.dk",67],["tui.fi",67],["tui.no",67],["tui.se",67],["istore.co.za",67],["salvagny.org",67],["leslipfrancais.fr",67],["rb-os.de",[67,130]],["volksbank-mittweida.de",[67,130]],["wvb.de",[67,130]],["bremischevb.de",[67,130]],["meinebank.de",[67,130]],["vb-rb.de",[67,130]],["gladbacher-bank.de",[67,130]],["vrbank-in-thueringen.de",[67,130]],["bodenseebank.de",[67,130]],["rb-oberaudorf.de",[67,130]],["volksbank-trossingen.de",[67,130]],["owl-immobilien.de",[67,130]],["volksbank-backnang.de",[67,130]],["volksbank-international.de",[67,130]],["raiba-westhausen.de",[67,130]],["vr-nopf.cz",[67,130]],["vrbankimmobilien.de",[67,130]],["cvw-privatbank-ag.de",[67,130]],["rb-denzlingen-sexau.de",[67,130]],["rv-banken.de",[67,130]],["volksbank-remseck.de",[67,130]],["raiba-gr.de",[67,130]],["vrb-spangenberg.de",[67,130]],["rb-berghuelen.de",[67,130]],["vb-lauterecken.de",[67,130]],["rb-sondelfingen.de",[67,130]],["voba-deisslingen.de",[67,130]],["rb-hardt-bruhrain.de",[67,130]],["volksbank-daaden.de",[67,130]],["dervolksbanker.de",[67,130]],["vb-kirnau-krautheim.de",[67,130]],["skbwitten.de",[67,130]],["raiba-ndwa.de",[67,130]],["volksbank-mittleres-erzgebirge.de",[67,130]],["rb-eching.de",[67,130]],["volksbank-aktiv.de",[67,130]],["vbsuedemsland.de",[67,130]],["voba-moeckmuehl.de",[67,130]],["volksbank-freiburg.de",[67,130]],["vbleos.de",[67,130]],["meine-rvb.de",[67,130]],["aachener-bank.de",[67,130]],["muenchner-bank.de",[67,130]],["volksbank-dh.de",[67,130]],["volksbankeg.de",[67,130]],["sparda-bank-hamburg.de",[67,130]],["sparda-sw.de",[67,130]],["volksbank-thueringen-mitte.de",[67,130]],["vrbankeg.de",[67,130]],["bernhauser-bank.de",[67,130]],["vvrbank-krp.de",[67,130]],["vvr-bank.de",[67,130]],["vb-mittelhessen.de",[67,130]],["vr-bayernmitte.de",[67,130]],["vobadhk.de",[67,130]],["rheingauer-volksbank.de",[67,130]],["dovoba.de",[67,130]],["vr-dachau.de",[67,130]],["kd-bank.de",[67,130]],["volksbank-hochrhein.de",[67,130]],["pollfish.com",68],["werkenbijtrekpleister.nl",69],["werkenbijkruidvat.be",69],["rassenlijst.info",69],["werkenbijiciparisxl.nl",69],["flightradar24.com",70],["apk-vk.at",71],["vietnamairlines.com",72],["incotec.com",73],["croda.com",73],["exaktafoto.se",74],["campingdusoleil.com",75],["hotel-la-chaumiere.com",75],["les-anges-gardiens.fr",75],["croco-kid.com",75],["cambridge-centre.fr",75],["equisud.com",75],["allokebab-pau.fr",75],["etre-visible.local.fr",75],["mas-montebello66.com",75],["camping-residentiel-les-marronniers-jura.fr",75],["dj4events.fr",75],["saintjoursexpertmaritime.com",75],["az-renovation.fr",75],["presquilemultiservices.com",75],["hotel-aigoual.com",75],["hotel-restaurant-pau.com",75],["desrayaud-paysagistes.com",75],["hotelsaintcharles.fr",75],["agvillagecamarguais.com",75],["joyella.com",75],["gabriel-godard.com",75],["artech-sellerie.com",75],["motoclubernee.com",75],["ledauphinhotel.com",75],["cuisin-studio.com",75],["biomeo-environnement.com",75],["leman-instruments.com",75],["esthetique-meyerbeer.com",75],["institut-bio-naturel-nice.fr",75],["nature-et-bois.fr",75],["transmissions-bordeaux.com",75],["kinechartreuse.com",75],["corsegourmande.com",75],["cotedecor.com",75],["restaurant-la-badiane.fr",75],["systelia.fr",75],["lesjardinsinterieurs.com",75],["helenevue.com",75],["saubusse-thermes.com",75],["dehn.es",76],["dehn.fr",76],["dehn.it",76],["dehn.hu",76],["desitek.dk",76],["dehn.at",76],["dehn.de",76],["wwz.ch",77],["inyova.at",78],["inyova.ch",78],["inyova.de",78],["ccalbacenter.com",78],["wamu.org",78],["momentive.com",79],["kennedyslaw.com",80],["elekta.com",81],["ige.ch",82],["stratasysdirect.com",83],["stratasys.com",83],["werkenbijkruidvat.nl",84],["ghacks.net",85],["cutoff.es",86],["whyopencomputing.com",86],["mbanc.com",87],["dentalgalindo.com",[88,89]],["archeologia.com.pl",[88,89]],["letrayframe.com",[88,89]],["osteofisintegral.es",[88,89]],["uco.cat",[88,89]],["buecheler-kollegen.de",[88,89]],["seminariodeosma-soria.org",[88,89]],["kamensenica.sk",[88,89]],["movimentoofficinedelsud.it",[88,89]],["trident.se",[88,89]],["semanasantademalagaayeryhoy.com",[88,89]],["diazfloristasestrella.com",[88,89]],["cosechavida.com",[88,89]],["broncoillustration.com",[88,89]],["sumoingenio.com",[88,89]],["aligepro.es",[88,89]],["muevo.es",[88,89]],["azulejosacedo.com",[88,89]],["sana.cz",[88,89]],["aliapinto.com",[88,89]],["tsconline.es",[88,89]],["polifast.it",[88,89]],["napos.cz",[88,89]],["gutshaus-neuendorf-usedom.de",[88,89]],["kunterbunte-kinder.de",[88,89]],["desatando.org",[88,89]],["ledocom.cz",[88,89]],["aliciasuarez.net",[88,89]],["diabramar.com",[88,89]],["lamagnalonga.org",[88,89]],["benejamrefrigeracion.com",[88,89]],["micropigmentacioncapilarbcn.com",[88,89]],["arcusnet.se",[88,89]],["videogenic.es",[88,89]],["grundschule-remagen.de",[88,89]],["aceitessatunion.com",[88,89]],["servigraphic.com.ar",[88,89]],["textsteine.de",[88,89]],["campergarage.es",[88,89]],["administradorfincasblog.com",[88,89]],["balgal.es",[88,89]],["grafika-dtp-produkcia.sk",[88,89]],["unmardeconstelaciones.com",[88,89]],["salobella.com",[88,89]],["careon.se",[88,89]],["gymnosport.com",[88,89]],["easyhomes.com.es",[88,89]],["casavaledalama.pt",[88,89]],["dosc.es",[88,89]],["fcfoz.pt",[88,89]],["berevolk.com",[88,89]],["hvpropertyclearance.co.uk",[88,89]],["calamo.se",[88,89]],["elserratplanoles.com",[88,89]],["bubblessea.es",[88,89]],["disperator.se",[88,89]],["ecoparquets.com",[88,89]],["zlotaraczkalublin.pl",[88,89]],["congresoscostadelsol.com",[88,89]],["pneumaticiroma.it",[88,89]],["asprona.es",[88,89]],["virgendefatima.es",[88,89]],["patronatpremia.cat",[88,89]],["2points13.fr",[88,89]],["3d3.es",[88,89]],["abantos.es",[88,89]],["abastanimacio.org",[88,89]],["academiafrancesadebelleza.co",[88,89]],["acaluca.org",[88,89]],["acce.es",[88,89]],["ad-particles.com",[88,89]],["adea.sk",[88,89]],["afplr.fr",[88,89]],["agiletalon.fr",[88,89]],["agiratou.com",[88,89]],["aidaromero.com",[88,89]],["alkoholochnarkotika.se",[88,89]],["alligatorbioscience.se",[88,89]],["anea.es",[88,89]],["animala.es",[88,89]],["apimadrid.net",[88,89]],["aquatrend.sk",[88,89]],["arabesque-formation.org",[88,89]],["arrivamallorca.es",[88,89]],["asapservicios.net",[88,89]],["aspock.com",[88,89]],["atout-voyages.com",[88,89]],["autocareslazara.es",[88,89]],["autocaresmariano.com",[88,89]],["autoform.pl",[88,89]],["ayudatranspersonal.com",[88,89]],["bacabeton.cz",[88,89]],["begalvi.com",[88,89]],["bent-com.com",[88,89]],["berliner-haeuser.de",[88,89]],["bespokespain.com",[88,89]],["bevent-rasch.se",[88,89]],["bio-cord.es",[88,89]],["biotropica.fr",[88,89]],["bornes-eurorelais.fr",[88,89]],["braeu-stueble.de",[88,89]],["brendanoharamp.scot",[88,89]],["briau.com",[88,89]],["caleulalia.com",[88,89]],["cande-sur-beuvron.com",[88,89]],["carlhag.se",[88,89]],["carrier.se",[88,89]],["casadelaveiga.com",[88,89]],["caytas.com.tr",[88,89]],["cecjecuador.org.ec",[88,89]],["cegef.com",[88,89]],["centrediagonal.com",[88,89]],["centropolisportivomassari.it",[88,89]],["cerai.org",[88,89]],["cervosgrup.com",[88,89]],["chimeneasalicante.com",[88,89]],["cliatec.com",[88,89]],["clinicabadal.es",[88,89]],["cometh-consulting.com",[88,89]],["copysud.fr",[88,89]],["cortilar.com",[88,89]],["crystal-finance.com",[88,89]],["ctangana.com",[88,89]],["cugatresidencial.com",[88,89]],["dake.es",[88,89]],["datatal.se",[88,89]],["degom.com",[88,89]],["delfis.es",[88,89]],["delogica.com",[88,89]],["dentalcompany.es",[88,89]],["descarpack.com.br",[88,89]],["desfiladeroediciones.com",[88,89]],["desomer.be",[88,89]],["diarioandalucia.es",[88,89]],["dibujos-animados.net",[88,89]],["direkt-immobilie.de",[88,89]],["dovozautznemecka.cz",[88,89]],["drpuigdollers.com",[88,89]],["dunamys.inf.br",[88,89]],["easyimplantology.com",[88,89]],["eb2b.com.pl",[88,89]],["echo-mieszkania.pl",[88,89]],["eclinic.com.sg",[88,89]],["edgeict.com",[88,89]],["eiglaw.com",[88,89]],["elandexpediciones.es",[88,89]],["emalec.com",[88,89]],["enlighten.net",[88,89]],["equifab.es",[88,89]],["escuelanauticamarenostrum.com",[88,89]],["esgrima.cat",[88,89]],["espaisperconviure.es",[88,89]],["etbygg.com",[88,89]],["eurepieces.fr",[88,89]],["euroenvio.com",[88,89]],["eurotex.es",[88,89]],["expertetfinance.fr",[88,89]],["farmarsketrhyfuturum.cz",[88,89]],["fastvisa.fr",[88,89]],["fauxdiplomes.org",[88,89]],["fisiolistic.com",[88,89]],["fondazionealbertosordi.it",[88,89]],["foyersekcjapolska.eu",[88,89]],["fundacjaeds.pl",[88,89]],["galeriaxanadu.pl",[88,89]],["garcia-ibanez.com",[88,89]],["gestenaval.com",[88,89]],["glaskogen.se",[88,89]],["globalteam.es",[88,89]],["goia.org.pl",[88,89]],["granibier.com",[88,89]],["grundia.se",[88,89]],["grupoisn.com",[88,89]],["gruporhzaragoza.com",[88,89]],["hagagruppen.se",[88,89]],["halima-magazin.com",[88,89]],["handelskammaren.com",[88,89]],["helitecnics.com",[88,89]],["helux.se",[88,89]],["hermanosalcaraz.com",[88,89]],["hjarnkoll.se",[88,89]],["hmfoundation.com",[88,89]],["hormimpres.com",[88,89]],["hoteldeprony.fr",[88,89]],["hotelroyalcatania.it",[88,89]],["houjethai.nl",[88,89]],["hummer.cz",[88,89]],["icld.se",[88,89]],["ict-project.it",[88,89]],["imprentalaspalmas.com",[88,89]],["informamiele.it",[88,89]],["inission.com",[88,89]],["inmobiliariavolga.com",[88,89]],["international-terra-institute.com",[88,89]],["inwaspain.com",[88,89]],["izkigolf.eus",[88,89]],["jdmusic.se",[88,89]],["juveycamps.com",[88,89]],["kaunokapiniuprieziura.lt",[88,89]],["kcmkompresor.com",[88,89]],["kewaccountants.co.uk",[88,89]],["konkretplus.pl",[88,89]],["krajci.cz",[88,89]],["krisvagenut.se",[88,89]],["kyoceracapetown.co.za",[88,89]],["labaguette.pl",[88,89]],["labintegrados.com",[88,89]],["ladderupinc.com",[88,89]],["landskronafoto.org",[88,89]],["langarri.es",[88,89]],["lawa.es",[88,89]],["laxo.se",[88,89]],["layher.se",[88,89]],["lifetraveler.net",[88,89]],["lindrooshalsa.se",[88,89]],["lobolab.es",[88,89]],["maisqueromanicorutas.com",[88,89]],["mallandonoandroid.com",[88,89]],["masconcas.com",[88,89]],["mediabest.cz",[88,89]],["megustaelvino.es",[88,89]],["mensa.se",[88,89]],["mestiteslilis.com",[88,89]],["minutoprint.com",[88,89]],["mirano.cz",[88,89]],["mogador.cz",[88,89]],["morphestudio.es",[88,89]],["motoaxial.com",[88,89]],["multiversidad.es",[88,89]],["mundollaves.com",[88,89]],["musicotherapie-federationfrancaise.com",[88,89]],["nauticaravaning.com",[88,89]],["nestville.sk",[88,89]],["nestvillepark.sk",[88,89]],["netromsoftware.ro",[88,89]],["nojesfabriken.se",[88,89]],["oddoneout.se",[88,89]],["opako.pl",[88,89]],["oserlafrique.com",[88,89]],["paintballalcorcon.com",[88,89]],["pallejabcn.com",[88,89]],["penicilinafruits.com",[88,89]],["peregrinoslh.com",[88,89]],["permis-lausanne.ch",[88,89]],["pernillaandersson.se",[88,89]],["piazzadelgusto.it",[88,89]],["pipi-antik.dk",[88,89]],["plasticosgeca.com",[88,89]],["plastimyr.com",[88,89]],["portal.unimes.br",[88,89]],["pro-beruf.de",[88,89]],["prophecyinternational.com",[88,89]],["psicoterapeuta.org",[88,89]],["puertasprieto.com",[88,89]],["puntosdefantasia.es",[88,89]],["pzmk.org.pl",[88,89]],["rastromaquinas.com",[88,89]],["rectoraldecastillon.com",[88,89]],["reinomineral.com",[88,89]],["reklamefreunde.de",[88,89]],["restauranthispania.com",[88,89]],["rubinmedical.dk",[88,89]],["rubinmedical.no",[88,89]],["rubinmedical.se",[88,89]],["sak.se",[88,89]],["sammetais.com.br",[88,89]],["sebastiancurylo.pl",[88,89]],["serigrafiaiorgi.com",[88,89]],["seyart.com",[88,89]],["sgaim.com",[88,89]],["sicamemt.org",[88,89]],["siguealconejoblanco.es",[88,89]],["sinfimasa.com",[88,89]],["skp.se",[88,89]],["skrobczynski.pl",[88,89]],["slush.de",[88,89]],["solebike.it",[88,89]],["solu-watt.fr",[88,89]],["soluzionainmobiliaria.es",[88,89]],["somoparque.com",[88,89]],["sorgingaztemoda.com",[88,89]],["sroportal.sk",[88,89]],["ssmf.se",[88,89]],["stobrasil.com.br",[88,89]],["stoparmut2015.ch",[88,89]],["studiodimuro.com",[88,89]],["subkultur-hannover.de",[88,89]],["sustanciagris.com",[88,89]],["szkt.sk",[88,89]],["tagibergslagen.se",[88,89]],["tallergastronomico.es",[88,89]],["tarna.fhsk.se",[88,89]],["tassenyalitzacio.com",[88,89]],["tctech.se",[88,89]],["teknoduegroup.it",[88,89]],["teloliquido.com",[88,89]],["temasa.es",[88,89]],["textilprint.sk",[88,89]],["thehouseofautomata.com",[88,89]],["tmgernika.com",[88,89]],["toastetmoi.fr",[88,89]],["tollare.org",[88,89]],["triperavigatana.com",[88,89]],["tuckerfranklininsgrp.com",[88,89]],["tuftuf.net",[88,89]],["turuletras.com",[88,89]],["umfmb.fr",[88,89]],["upapsa.com",[88,89]],["valenciatoday.es",[88,89]],["vanghel-und-morawski.de",[88,89]],["vickycan.com",[88,89]],["ville-de-salles.com",[88,89]],["webbigt.se",[88,89]],["westlede.be",[88,89]],["wiemker.org",[88,89]],["woolink.co",[88,89]],["wp.fratgsa.org",[88,89]],["xatobaxestion.com",[88,89]],["xfactor-gmbh.de",[88,89]],["zigmoon.com",[88,89]],["brightdata.com",90],["canyon.com",[91,92]],["drimsim.com",93],["eteam-winkler.de",94],["kdn-elektro.de",94],["elektro-kotz.de",94],["elektro-service-rauh.de",94],["elektroanlagenbuettner.de",94],["be-connect.online",94],["bayergruppe.com",94],["bayer-wkt.de",94],["bayer-wind.de",94],["bayer-wd.de",94],["elektro-joa.de",94],["htechnik.de",94],["ehk-service.de",94],["bittner-tv.de",94],["elektro-suelzner.de",94],["elektro-leps.de",94],["elektromax-hausgeraete.de",94],["elektrotechnik-schedel.de",94],["elkugmbh.de",94],["ln-elektro-gmbh.de",94],["weiss-blau-gmbh.de",94],["sunbeam-energy.de",94],["prokauf.com",94],["lichtstudio-kerl.de",94],["liebing-beese.de",94],["hoeschel-baumann.de",94],["hausgeraete-kraemer.de",94],["gehlhaar-elektrotechnik.de",94],["ehs-elektrotechnik.de",94],["elektrojarschke.de",94],["elektrotechnik-fleischmann.de",94],["elektroseemueller.de",94],["schoerling-blitz.de",94],["ast-apolda.com",94],["elektro-klippel.de",94],["arntz-haustechnik.de",94],["elektro-bindel.de",94],["elektrotechnik-weiss.com",94],["brandschutz-hamburg.de",94],["wagnerelektrotechnik.de",94],["el-kramer.de",94],["mks-hof.de",94],["wernz-elektro.de",94],["e3-energy.de",94],["sg-solar.de",94],["elektrokrebs.de",94],["elektro-roehrl.de",94],["elektro-kreher.de",94],["giegling-vonsaal.de",94],["elektro-lehmann.com",94],["ems-wurzen.de",94],["scholpp.de",95],["scholpp.es",95],["scholpp.pl",95],["scholpp.it",95],["ptc.eu",95],["scholpp.com",95],["abo24.de",95],["overdrive.com",95],["wetu.com",95],["superwatchman.com",96],["bitburger-braugruppe.de",97],["alpen.co.uk",98],["alsina.com",98],["assosia.com",98],["bassicostruzioni.it",98],["bettenconcept.com",98],["blackpoolairport.com",98],["cateringvandenberg.nl",98],["ceratrends.com",98],["chestnut-tree-house.org.uk",98],["cirrusassessment.com",98],["clinicalondon.co.uk",98],["cmos.ie",98],["deniswilliams.ie",98],["efmdglobal.org",98],["emri.nl",98],["endlesspools.fr",98],["foleys.ie",98],["fryerndental.co.uk",98],["globalfocusmagazine.com",98],["guildhalldental.com",98],["hampshireimplantcentre.co.uk",98],["heikkala.com",98],["hermesit.net",98],["hotspring.be",98],["xn--inkomstfrskring-9kb71a.se",98],["innohome.com",98],["jakobwirt.at",98],["klinger.fi",98],["londonwomenscentre.co.uk",98],["memoreclame.nl",98],["mitarbeiter-app.de",98],["mobiltbredband.se",98],["newsbook.com.mt",98],["northeastspace.ie",98],["portea.fr",98],["precisiondentalstudio.co.uk",98],["ramotavla.se",98],["simkort.se",98],["stbarnabas-hospice.org.uk",98],["tundra.fi",98],["upitrek.com",98],["weetabix-arabia.com",98],["weetabix.co.uk",98],["weetabix.com",98],["weetabix.es",98],["weetabix.fr",98],["weetabix.it",98],["weetabix.nl",98],["weetabix.no",98],["weetabix.pt",98],["weetabixea.com",98],["weetabixfoodcompany.co.uk",98],["weetabixonthego.co.uk",98],["proteincompany.fi",99],["proteinbolaget.se",99],["snoopmedia.com",100],["myguide.de",100],["study-in-germany.de",100],["daad.de",100],["futterhaus.de",101],["scottsofstow.co.uk",[102,103]],["zawszepomorze.pl",104],["wasserkunst-hamburg.de",105],["lta.org.uk",106],["brico-travo.com",107],["panzerfux.de",108],["tvprato.it",109],["liftshare.com",109],["vesely-drak.cz",109],["consordini.com",109],["fitzmuseum.cam.ac.uk",109],["hotdk2023.kre.hu",109],["panwybierak.pl",109],["bomagasinet.dk",109],["miplantaweb.com",109],["electronics.semaf.at",109],["sfd.pl",109],["flota.es",109],["jobs.cz",109],["prace.cz",109],["eninternetgratis.com",109],["unavidadeviaje.com",109],["theateramrand.de",110],["jugend-praesentiert.de",110],["evium.de",111],["epayments.com",112],["riceundspice.de",113],["happysocks.com",[114,115]],["win2day.at",116],["porp.pl",117],["gesundheitsamt-2025.de",118],["coastfashion.com",119],["oasisfashion.com",119],["warehousefashion.com",119],["misspap.com",119],["karenmillen.com",119],["boohooman.com",119],["nebo.app",120],["groupeonepoint.com",121],["edpsciences.org",122],["bemmaisseguro.com",123],["johnmuirhealth.com",124],["scheidegger.nl",125],["transparency.fb.com",[126,127]],["faq.whatsapp.com",127],["blog.whatsapp.com",127],["www.whatsapp.com",127],["phoenix.de",128],["mishcon.com",129],["bbva.es",131],["bbvauk.com",131],["bbva.be",131],["bbva.fr",131],["bbva.it",131],["bbva.pt",131],["suntech.cz",132],["digikey.co.za",133],["digikey.cn",133],["digikey.ee",133],["digikey.at",133],["digikey.be",133],["digikey.bg",133],["digikey.cz",133],["digikey.dk",133],["digikey.fi",133],["digikey.fr",133],["digikey.de",133],["digikey.gr",133],["digikey.hu",133],["digikey.ie",133],["digikey.it",133],["digikey.lv",133],["digikey.lt",133],["digikey.lu",133],["digikey.nl",133],["digikey.no",133],["digikey.pl",133],["digikey.pt",133],["digikey.ro",133],["digikey.sk",133],["digikey.si",133],["digikey.es",133],["digikey.se",133],["digikey.ch",133],["digikey.co.uk",133],["digikey.co.il",133],["digikey.com.mx",133],["digikey.ca",133],["digikey.com.br",133],["digikey.co.nz",133],["digikey.com.au",133],["digikey.co.th",133],["digikey.tw",133],["digikey.kr",133],["digikey.sg",133],["digikey.ph",133],["digikey.my",133],["digikey.jp",133],["digikey.in",133],["digikey.hk",133],["digikey.com",133],["eurosupps.nl",134],["pathe.nl",135],["makelaarsland.nl",136],["nordania.dk",137],["365direkte.no",137],["danskebank.lv",137],["danskebank.lt",137],["danskebank.no",137],["danskebank.fi",137],["danskebank.dk",137],["danskebank.com",137],["danskebank.se",137],["danskebank.co.uk",137],["danskeci.com",137],["danicapension.dk",137],["gewerbegebiete.de",138],["visti.it",139],["balay.es",140],["constructa.com",140],["gaggenau.com",140],["talksport.com",141],["loudersound.com",141],["impulse.de",141],["pcgamer.com",141],["infoworld.com",141],["kiplinger.com",141],["omni.se",141],["it-times.de",141],["bitcoinmagazine.com",141],["deliciousmagazine.co.uk",141],["upday.com",141],["deutschlandcard.de",141],["szbz.de",141],["free-fonts.com",141],["lieferzeiten.info",141],["vice.com",141],["newsnow.co.uk",141],["out.com",141],["streampicker.de",141],["radiotimes.com",141],["nowtv.com",141],["kochbar.de",141],["toggo.de",141],["am-online.com",141],["n-tv.de",141],["newsandstar.co.uk",141],["tag24.de",141],["weltkunst.de",141],["noveauta.sk",141],["pnn.de",141],["economist.com",141],["crash.net",141],["norwaytoday.info",141],["insider.com",141],["preis.de",141],["ibroxnoise.co.uk",141],["celtsarehere.com",141],["nufcblog.co.uk",141],["sport1.de",141],["techconnect.com",141],["followfollow.com",141],["thespun.com",141],["mazdas247.com",141],["fastcar.co.uk",141],["vitalfootball.co.uk",141],["audi-sport.net",141],["bumble.com",141],["arcamax.com",141],["dilbert.com",141],["givemesport.com",141],["dartsnews.com",141],["gpfans.com",141],["justjared.com",141],["justjaredjr.com",141],["finanzen.at",141],["flights-idealo.co.uk",141],["idealo.com",141],["idealo.se",141],["idealo.nl",141],["idealo.pl",141],["idealo.pt",141],["idealo.fi",141],["idealo.dk",141],["idealo.no",141],["idealo.in",141],["idealo.at",141],["ladenzeile.at",141],["berliner-zeitung.de",141],["urbia.de",141],["essen-und-trinken.de",141],["wetter.de",141],["rtl-living.de",141],["vox.de",141],["ladenzeile.de",141],["advocate.com",141],["idealo.de",141],["wigantoday.net",141],["economistgroup.com",141],["transfermarkt.nl",141],["transfermarkt.es",141],["transfermarkt.pl",141],["transfermarkt.pt",141],["transfermarkt.at",141],["transfermarkt.it",141],["transfermarkt.fr",141],["transfermarkt.de",141],["transfermarkt.be",141],["transfermarkt.co.uk",141],["transfermarkt.us",141],["footballfancast.com",141],["cio.com",141],["jezebel.com",141],["splinternews.com",141],["denofgeek.com",141],["kinja.com",141],["theinventory.com",141],["rollingstone.de",141],["sueddeutsche.de",141],["csoonline.com",141],["tvmovie.de",141],["testberichte.de",141],["pcgameshardware.de",141],["4players.de",141],["guj.de",141],["bild.de",141],["wieistmeineip.de",141],["testbild.de",141],["stylebook.de",141],["skygroup.sky",141],["speisekarte.de",141],["haeuser.de",141],["cmo.com.au",141],["pcworld.co.nz",141],["idealo.it",141],["transfermarkt.jp",141],["transfermarkt.co.id",141],["autoexpress.co.uk",141],["transfermarkt.com",141],["webwinkel.tubantia.nl",141],["shopalike.nl",141],["autoweek.nl",141],["pcworld.es",141],["macworld.es",141],["idealo.es",141],["businessinsider.es",141],["motor.es",141],["autobild.es",141],["driving.co.uk",141],["stern.de",141],["pcgames.de",141],["sport.de",141],["idealo.fr",141],["tori.fi",141],["snow-forecast.com",141],["tidende.dk",141],["kraloyun.com",141],["arnnet.com.au",141],["bunte.de",141],["techbook.de",141],["metal-hammer.de",141],["macworld.co.uk",141],["maxisciences.com",141],["ohmymag.com",141],["voici.fr",141],["geo.de",141],["businessinsider.de",141],["meinestadt.de",141],["politico.eu",141],["spieletipps.de",141],["finanznachrichten.de",141],["vtwonen.nl",141],["stol.it",141],["waitrose.com",142],["storyhouseegmont.dk",143],["storyhouseegmont.no",143],["storyhouseegmont.se",143],["egmont.com",143],["nordiskfilm.com",143]]);

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
    try { removeClass(...argsList[i]); }
    catch(ex) {}
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
