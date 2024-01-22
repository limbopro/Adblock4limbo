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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["load","adBlock"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","pop"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","AdBlock"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["load","ads"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["/adblock/i"],["click","grapseex"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["load","doTest"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["click","0x"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["","[native code]"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["load","length"],["gtmloaderror"],["click","adobeModalTestABenabled"],["blur","console.log"],["blur","counter"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["DOMContentLoaded","daadb_get_data_fetch"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["blur","event.triggered"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["bild.de",5],["mediafire.com",[6,7]],["pinsystem.co.uk",8],["fembed.com",8],["ancensored.com",8],["o2tvseries.com",8],["mp3fiber.com",[8,19]],["xrivonet.info",8],["afreesms.com",9],["tio.ch",9],["lavanguardia.com",9],["eplayer.click",9],["kingofdown.com",10],["radiotormentamx.com",10],["quelleestladifference.fr",10],["otakuworldsite.blogspot.com",10],["ad-itech.blogspot.com",10],["sna3talaflam.com",10],["agar.pro",10],["unlockapk.com",10],["mobdi3ips.com",10],["socks24.org",10],["interviewgig.com",10],["javaguides.net",10],["almohtarif-tech.net",10],["forum.release-apk.com",10],["devoloperxda.blogspot.com",10],["zwergenstadt.com",10],["primedeportes.es",10],["upxin.net",10],["ciudadblogger.com",10],["ke-1.com",10],["secretsdeepweb.blogspot.com",10],["bit-shares.com",10],["itdmusics.com",10],["aspdotnet-suresh.com",10],["tudo-para-android.com",10],["urdulibrarypk.blogspot.com",10],["zerotopay.com",10],["akw.to",10],["mawsueaa.com",10],["hesgoal-live.io",10],["king-shoot.io",10],["pornhd.com",11],["cnnamador.com",[11,38]],["cle0desktop.blogspot.com",11],["turkanime.co",11],["camclips.tv",[11,51]],["blackpornhq.com",11],["xsexpics.com",11],["ulsex.net",11],["wannafreeporn.com",11],["ytube2dl.com",11],["multiup.us",11],["protege-torrent.com",11],["bibme.org",15],["citationmachine.net",15],["easybib.com",16],["vermangasporno.com",17],["imgtorrnt.in",17],["picbaron.com",[17,127]],["worldcupfootball.me",17],["letmejerk.com",17],["letmejerk2.com",17],["letmejerk3.com",17],["letmejerk4.com",17],["letmejerk5.com",17],["letmejerk6.com",17],["letmejerk7.com",17],["dlapk4all.com",17],["kropic.com",17],["kvador.com",17],["pdfindir.net",17],["brstej.com",17],["topwwnews.com",17],["xsanime.com",17],["vidlo.us",17],["put-locker.com",17],["youx.xxx",17],["animeindo.asia",17],["masahub.net",17],["adclickersbot.com",17],["badtaste.it",18],["mage.si",19],["totaldebrid.org",19],["neko-miku.com",19],["elsfile.org",19],["venstrike.jimdofree.com",19],["schrauben-normen.de",19],["avengerinator.blogspot.com",19],["link-to.net",19],["hanimesubth.com",19],["gsmturkey.net",19],["adshrink.it",19],["presentation-ppt.com",19],["mangacanblog.com",19],["pekalongan-cits.blogspot.com",19],["4tymode.win",19],["linkvertise.com",19],["reifenrechner.at",19],["tire-size-calculator.info",19],["linuxsecurity.com",19],["encodinghub.com",19],["itsguider.com",19],["cotravinh.blogspot.com",19],["itudong.com",19],["shortx.net",19],["comandotorrenthd.org",19],["turkdebrid.net",19],["lecturel.com",19],["bakai.org",19],["nar.k-ba.net",19],["tiroalpalo.org",19],["shemalez.com",21],["tubepornclassic.com",21],["gotporn.com",22],["freepornrocks.com",22],["tvhai.org",22],["simpcity.su",22],["realgfporn.com",[23,24]],["titsbox.com",23],["thisvid.com",24],["xvideos-downloader.net",24],["imgspice.com",25],["vikiporn.com",26],["tnaflix.com",26],["hentai2w.com",[26,179]],["yourlust.com",26],["hotpornfile.org",26],["jav789.com",26],["javbuz.com",26],["letfap.com",26],["watchfreexxx.net",26],["vintageporntubes.com",26],["angelgals.com",26],["babesexy.com",26],["porndaa.com",26],["ganstamovies.com",26],["youngleak.com",26],["porndollz.com",26],["xnxxvideo.pro",26],["xvideosxporn.com",26],["onlyhgames.com",26],["filmpornofrancais.fr",26],["pictoa.com",[26,49]],["adultasianporn.com",26],["nsfwmonster.com",26],["girlsofdesire.org",26],["gaytail.com",26],["fetish-bb.com",26],["rumporn.com",26],["soyoungteens.com",26],["zubby.com",26],["lesbian8.com",26],["gayforfans.com",26],["reifporn.de",26],["javtsunami.com",26],["18tube.sex",26],["xxxextreme.org",26],["amateurs-fuck.com",26],["sex-amateur-clips.com",26],["hentaiworld.tv",26],["dads-banging-teens.com",26],["home-xxx-videos.com",26],["mature-chicks.com",26],["teens-fucking-matures.com",26],["hqbang.com",26],["darknessporn.com",26],["familyporner.com",26],["freepublicporn.com",26],["pisshamster.com",26],["punishworld.com",26],["xanimu.com",26],["pussyspace.com",[27,28]],["pussyspace.net",[27,28]],["empflix.com",29],["cpmlink.net",30],["bdsmstreak.com",30],["cutpaid.com",30],["pornforrelax.com",30],["fatwhitebutt.com",30],["mavplay.xyz",30],["sunporno.com",[31,32,179]],["short.pe",33],["bs.to",36],["efukt.com",36],["kpopsea.com",36],["generacionretro.net",37],["nuevos-mu.ucoz.com",37],["micloudfiles.com",37],["mimaletamusical.blogspot.com",37],["visionias.net",37],["b3infoarena.in",37],["lurdchinexgist.blogspot.com",37],["thefreedommatrix.blogspot.com",37],["hentai-vl.blogspot.com",37],["projetomotog.blogspot.com",37],["ktmx.pro",37],["lirik3satu.blogspot.com",37],["marketmovers.it",37],["pharmaguideline.com",37],["safemaru.blogspot.com",37],["mixloads.com",37],["mangaromance.eu",37],["interssh.com",37],["freesoftpdfdownload.blogspot.com",37],["cirokun.blogspot.com",37],["myadslink.com",37],["blackavelic.com",37],["server.satunivers.tv",37],["eg-akw.com",37],["xn--mgba7fjn.cc",37],["flashingjungle.com",38],["ma-x.org",39],["lavozdegalicia.es",39],["xmovies08.org",41],["globaldjmix.com",42],["zazzybabes.com",43],["haaretz.co.il",44],["haaretz.com",44],["slate.com",45],["megalinks.info",46],["megapastes.com",46],["mega-mkv.com",[46,47]],["mkv-pastes.com",46],["zpaste.net",46],["zlpaste.net",46],["9xlinks.site",46],["zona-leros.net",47],["acortarm.xyz",48],["acortame.xyz",48],["cine.to",[49,183]],["kissasia.cc",49],["nzbstars.com",50],["digjav.com",51],["videoszoofiliahd.com",52],["xxxtubezoo.com",53],["zooredtube.com",53],["uii.io",54],["loaninsurehub.com",54],["megacams.me",56],["rlslog.net",56],["porndoe.com",57],["acienciasgalilei.com",59],["playrust.io",60],["payskip.org",61],["short-url.link",62],["tubedupe.com",63],["fatgirlskinny.net",65],["polska-ie.com",65],["windowsmatters.com",65],["canaltdt.es",66],["masbrooo.com",66],["2ndrun.tv",66],["stfly.me",67],["oncehelp.com",67],["queenfaucet.website",67],["curto.win",67],["smallseotools.com",68],["macwelt.de",70],["pcwelt.de",70],["capital.de",70],["geo.de",70],["allmomsex.com",71],["allnewindianporn.com",71],["analxxxvideo.com",71],["animalextremesex.com",71],["anime3d.xyz",71],["animefuckmovies.com",71],["animepornfilm.com",71],["animesexbar.com",71],["animesexclip.com",71],["animexxxsex.com",71],["animexxxfilms.com",71],["anysex.club",71],["apetube.asia",71],["asianfuckmovies.com",71],["asianfucktube.com",71],["asianporn.sexy",71],["asiansexcilps.com",71],["beeg.fund",71],["beegvideoz.com",71],["bestasiansex.pro",71],["bigsexhub.com",71],["bravotube.asia",71],["brutalanimalsfuck.com",71],["candyteenporn.com",71],["daddyfuckmovies.com",71],["desifuckonline.com",71],["exclusiveasianporn.com",71],["exteenporn.com",71],["fantasticporn.net",71],["fantasticyoungporn.com",71],["fineasiansex.com",71],["firstasianpussy.com",71],["freeindiansextube.com",71],["freepornasians.com",71],["freerealvideo.com",71],["fuck-beeg.com",71],["fuck-xnxx.com",71],["fuckasian.pro",71],["fuckfuq.com",71],["fuckundies.com",71],["fullasiantube.com",71],["gojapaneseporn.com",71],["golderotica.com",71],["goodyoungsex.com",71],["goyoungporn.com",71],["hardxxxmoms.com",71],["hdvintagetube.com",71],["hentaiporn.me",71],["hentaisexfilms.com",71],["hentaisexuality.com",71],["hot-teens-movies.mobi",71],["hotanimepornvideos.com",71],["hotanimevideos.com",71],["hotasianpussysex.com",71],["hotjapaneseshows.com",71],["hotmaturetube.com",71],["hotmilfs.pro",71],["hotorientalporn.com",71],["hotpornsexvideos.com",71],["hotpornyoung.com",71],["hotxxxjapanese.com",71],["hotxxxpussy.com",71],["indiafree.net",71],["indianpornvideo.online",71],["japanpornclip.com",71],["japanesetube.video",71],["japansex.me",71],["japanesexxxporn.com",71],["japansporno.com",71],["japanxxx.asia",71],["japanxxxworld.com",71],["keezmovies.surf",71],["lingeriefuckvideo.com",71],["liveanimalporn.zooo.club",71],["madhentaitube.com",71],["megahentaitube.com",71],["megajapanesesex.com",71],["megajapantube.com",71],["milfxxxpussy.com",71],["momsextube.pro",71],["momxxxass.com",71],["monkeyanimalporn.com",71],["moviexxx.mobi",71],["newanimeporn.com",71],["newjapanesexxx.com",71],["nicematureporn.com",71],["nudeplayboygirls.com",71],["openxxxporn.com",71],["originalindianporn.com",71],["originalteentube.com",71],["pig-fuck.com",71],["plainasianporn.com",71],["popularasianxxx.com",71],["pornanimetube.com",71],["pornasians.pro",71],["pornhat.asia",71],["pornheed.online",71],["pornjapanesesex.com",71],["pornomovies.asia",71],["pornvintage.tv",71],["primeanimesex.com",71],["realjapansex.com",71],["realmomsex.com",71],["redsexhub.com",71],["retroporn.world",71],["retrosexfilms.com",71],["sex-free-movies.com",71],["sexanimesex.com",71],["sexanimetube.com",71],["sexjapantube.com",71],["sexmomvideos.com",71],["sexteenxxxtube.com",71],["sexxxanimal.com",71],["sexyoungtube.com",71],["sexyvintageporn.com",71],["sopornmovies.com",71],["spicyvintageporn.com",71],["sunporno.club",71],["tabooanime.club",71],["teenextrem.com",71],["teenfucksex.com",71],["teenhost.net",71],["teensexass.com",71],["tnaflix.asia",71],["totalfuckmovies.com",71],["totalmaturefuck.com",71],["txxx.asia",71],["voyeurpornsex.com",71],["warmteensex.com",71],["wetasiancreampie.com",71],["wildhentaitube.com",71],["wowyoungsex.com",71],["xhamster-art.com",71],["xmovie.pro",71],["xnudevideos.com",71],["xnxxjapon.com",71],["xpics.me",71],["xvide.me",71],["xxxanimefuck.com",71],["xxxanimevideos.com",71],["xxxanimemovies.com",71],["xxxhentaimovies.com",71],["xxxhothub.com",71],["xxxjapaneseporntube.com",71],["xxxlargeporn.com",71],["xxxmomz.com",71],["xxxpornmilf.com",71],["xxxpussyclips.com",71],["xxxpussysextube.com",71],["xxxretrofuck.com",71],["xxxsex.pro",71],["xxxsexyjapanese.com",71],["xxxteenyporn.com",71],["xxxvideo.asia",71],["xxxvideos.ink",71],["xxxyoungtv.com",71],["youjizzz.club",71],["youngpussyfuck.com",71],["bayimg.com",72],["celeb.gate.cc",73],["eodev.com",74],["masterplayer.xyz",76],["pussy-hub.com",76],["porndex.com",77],["compucalitv.com",78],["diariodenavarra.es",80],["qpython.club",80],["antifake-funko.fr",80],["duden.de",82],["pennlive.com",84],["beautypageants.indiatimes.com",85],["01fmovies.com",86],["lnk2.cc",88],["fullhdxxx.com",89],["luscious.net",[89,127]],["classicpornbest.com",89],["1youngteenporn.com",89],["www-daftarharga.blogspot.com",[89,168]],["miraculous.to",[89,174]],["vtube.to",89],["gosexpod.com",90],["otakukan.com",91],["xcafe.com",92],["pornfd.com",92],["venusarchives.com",92],["imagehaha.com",93],["imagenpic.com",93],["imageshimage.com",93],["imagetwist.com",93],["k1nk.co",94],["watchasians.cc",94],["alexsports.xyz",94],["lulustream.com",94],["luluvdo.com",94],["web.de",95],["news18.com",96],["thelanb.com",97],["dropmms.com",97],["softwaredescargas.com",98],["cracking-dz.com",99],["anitube.ninja",100],["gazzetta.it",101],["alliptvlinks.com",102],["waterfall.money",102],["port.hu",104],["dziennikbaltycki.pl",105],["dzienniklodzki.pl",105],["dziennikpolski24.pl",105],["dziennikzachodni.pl",105],["echodnia.eu",105],["expressbydgoski.pl",105],["expressilustrowany.pl",105],["gazetakrakowska.pl",105],["gazetalubuska.pl",105],["gazetawroclawska.pl",105],["gk24.pl",105],["gloswielkopolski.pl",105],["gol24.pl",105],["gp24.pl",105],["gra.pl",105],["gs24.pl",105],["kurierlubelski.pl",105],["motofakty.pl",105],["naszemiasto.pl",105],["nowiny24.pl",105],["nowosci.com.pl",105],["nto.pl",105],["polskatimes.pl",105],["pomorska.pl",105],["poranny.pl",105],["sportowy24.pl",105],["strefaagro.pl",105],["strefabiznesu.pl",105],["stronakobiet.pl",105],["telemagazyn.pl",105],["to.com.pl",105],["wspolczesna.pl",105],["course9x.com",105],["courseclub.me",105],["azrom.net",105],["alttyab.net",105],["esopress.com",105],["nesiaku.my.id",105],["onemanhua.com",106],["freeindianporn.mobi",106],["dr-farfar.com",107],["boyfriendtv.com",108],["brandstofprijzen.info",109],["netfuck.net",110],["blog24.me",[110,122]],["kisahdunia.com",110],["javsex.to",110],["nulljungle.com",110],["oyuncusoruyor.com",110],["pbarecap.ph",110],["sourds.net",110],["teknobalta.com",110],["tvinternetowa.info",110],["sqlserveregitimleri.com",110],["tutcourse.com",110],["readytechflip.com",110],["novinhastop.com",110],["warddogs.com",110],["dvdgayporn.com",110],["iimanga.com",110],["tinhocdongthap.com",110],["tremamnon.com",110],["423down.com",110],["brizzynovel.com",110],["jugomobile.com",110],["freecodezilla.net",110],["movieslegacy.com",110],["animekhor.xyz",110],["iconmonstr.com",110],["gay-tubes.cc",110],["rbxscripts.net",110],["comentariodetexto.com",110],["wordpredia.com",110],["livsavr.co",110],["allfaucet.xyz",[110,122]],["titbytz.tk",110],["replica-watch.info",110],["alludemycourses.com",110],["kayifamilytv.com",110],["iir.ai",111],["gameofporn.com",113],["e9china.net",114],["ac.ontools.net",114],["marketbeat.com",115],["hentaipornpics.net",116],["apps2app.com",117],["tubereader.me",118],["repretel.com",118],["getmodsapk.com",119],["upshrink.com",120],["fc-lc.xyz",121],["ohionowcast.info",122],["wiour.com",122],["bitzite.com",[122,125,126]],["appsbull.com",122],["diudemy.com",122],["maqal360.com",122],["bitcotasks.com",[122,238]],["videolyrics.in",122],["manofadan.com",122],["cempakajaya.com",122],["tagecoin.com",122],["doge25.in",122],["king-ptcs.com",122],["naijafav.top",122],["ourcoincash.xyz",122],["sh.techsamir.com",122],["claimcoins.site",122],["cryptosh.pro",122],["cryptoearnfaucet.com",122],["coinsrev.com",122],["go.freetrx.fun",122],["eftacrypto.com",122],["fescrypto.com",122],["earnhub.net",122],["kiddyshort.com",122],["tronxminer.com",122],["homeairquality.org",123],["exego.app",124],["cutlink.net",124],["cutsy.net",124],["cutyurls.com",124],["cutty.app",124],["aiimgvlog.fun",127],["6indianporn.com",127],["amateurebonypics.com",127],["amateuryoungpics.com",127],["cinemabg.net",127],["desimmshd.com",127],["frauporno.com",127],["givemeaporn.com",127],["jav-asia.top",127],["javf.net",127],["javideo.net",127],["kr18plus.com",127],["pilibook.com",127],["pornborne.com",127],["porngrey.com",127],["qqxnxx.com",127],["sexvideos.host",127],["submilf.com",127],["subtaboo.com",127],["tktube.com",127],["xfrenchies.com",127],["coingraph.us",128],["momo-net.com",128],["maxgaming.fi",128],["vulture.com",129],["megaplayer.bokracdn.run",130],["hentaistream.com",131],["siteunblocked.info",132],["larvelfaucet.com",133],["feyorra.top",133],["claimtrx.com",133],["moviesyug.net",134],["w4files.ws",134],["parispi.net",135],["simkl.com",136],["mrproblogger.com",137],["themezon.net",137],["paperzonevn.com",138],["dailyvideoreports.net",139],["lewd.ninja",140],["systemnews24.com",141],["incestvidz.com",142],["niusdiario.es",143],["playporngames.com",144],["movi.pk",[145,150]],["justin.mp3quack.lol",147],["cutesexyteengirls.com",148],["asianembed.io",149],["0dramacool.net",150],["185.53.88.104",150],["185.53.88.204",150],["185.53.88.15",150],["123movies4k.net",150],["1movieshd.com",150],["1rowsports.com",150],["4share-mp3.net",150],["6movies.net",150],["9animetv.to",150],["720pstream.me",150],["aagmaal.com",150],["abysscdn.com",150],["adblockplustape.com",150],["ajkalerbarta.com",150],["akstream.xyz",150],["androidapks.biz",150],["androidsite.net",150],["animefenix.com",150],["animeonlinefree.org",150],["animesite.net",150],["animespank.com",150],["aniworld.to",150],["apkmody.io",150],["appsfree4u.com",150],["audioz.download",150],["bdnewszh.com",150],["beastlyprints.com",150],["bengalisite.com",150],["bestfullmoviesinhd.org",150],["betteranime.net",150],["blacktiesports.live",150],["buffsports.stream",150],["ch-play.com",150],["clickforhire.com",150],["cloudy.pk",150],["computercrack.com",150],["coolcast2.com",150],["crackedsoftware.biz",150],["crackfree.org",150],["cracksite.info",150],["cryptoblog24.info",150],["cuatrolatastv.blogspot.com",150],["cydiasources.net",150],["dirproxy.com",150],["dopebox.to",150],["downloadapk.info",150],["downloadapps.info",150],["downloadgames.info",150],["downloadmusic.info",150],["downloadsite.org",150],["downloadwella.com",150],["ebooksite.org",150],["educationtips213.blogspot.com",150],["egyup.live",150],["embed.meomeo.pw",150],["embed.scdn.to",150],["emulatorsite.com",150],["essaysharkwriting.club",150],["extrafreetv.com",150],["fakedetail.com",150],["fclecteur.com",150],["files.im",150],["flexyhit.com",150],["fmoviefree.net",150],["fmovies24.com",150],["footyhunter3.xyz",150],["freeflix.info",150],["freemoviesu4.com",150],["freeplayervideo.com",150],["freesoccer.net",150],["fseries.org",150],["gamefast.org",150],["gamesite.info",150],["gmanga.me",150],["gocast123.me",150],["gogohd.net",150],["gogoplay5.com",150],["gooplay.net",150],["gostreamon.net",150],["happy2hub.org",150],["harimanga.com",150],["healthnewsreel.com",150],["hexupload.net",150],["hinatasoul.com",150],["hindisite.net",150],["holymanga.net",150],["hxfile.co",150],["isosite.org",150],["iv-soft.com",150],["januflix.expert",150],["jewelry.com.my",150],["johnwardflighttraining.com",150],["kabarportal.com",150],["kstorymedia.com",150],["la123movies.org",150],["lespassionsdechinouk.com",150],["lilymanga.net",150],["linksdegrupos.com.br",150],["livestreamtv.pk",150],["macsite.info",150],["mangapt.com",150],["mangareader.to",150],["mangasite.org",150],["manhuascan.com",150],["megafilmeshdseries.com",150],["megamovies.org",150],["membed.net",150],["mgnetu.com",150],["moddroid.com",150],["moviefree2.com",150],["movies-watch.com.pk",150],["moviesite.app",150],["moviesonline.fm",150],["moviesx.org",150],["moviewatchonline.com.pk",150],["msmoviesbd.com",150],["musicsite.biz",150],["myfernweh.com",150],["myviid.com",150],["nazarickol.com",150],["newsrade.com",150],["noob4cast.com",150],["nsw2u.com",[150,239]],["oko.sh",150],["olympicstreams.me",150],["orangeink.pk",150],["owllink.net",150],["pahaplayers.click",150],["patchsite.net",150],["pdfsite.net",150],["play1002.com",150],["player-cdn.com",150],["productkeysite.com",150],["projectfreetv.one",150],["romsite.org",150],["rufiguta.com",150],["rytmp3.io",150],["send.cm",150],["seriesite.net",150],["seriezloaded.com.ng",150],["serijehaha.com",150],["shrugemojis.com",150],["siteapk.net",150],["siteflix.org",150],["sitegames.net",150],["sitekeys.net",150],["sitepdf.com",150],["sitetorrent.com",150],["softwaresite.net",150],["sportbar.live",150],["sportkart1.xyz",150],["ssyoutube.com",150],["stardima.com",150],["stream4free.live",150],["superapk.org",150],["supermovies.org",150],["tainio-mania.online",150],["talaba.su",150],["tamilguns.org",150],["tatabrada.tv",150],["theflixer.tv",150],["thememypc.net",150],["thetechzone.online",150],["thripy.com",150],["tonnestreamz.xyz",150],["travelplanspro.com",150],["turcasmania.com",150],["tusfiles.com",150],["tvonlinesports.com",150],["ultramovies.org",150],["uploadbank.com",150],["urdubolo.pk",150],["vidspeeds.com",150],["vumoo.to",150],["warezsite.net",150],["watchmovies2.com",150],["watchmoviesforfree.org",150],["watchofree.com",150],["watchsite.net",150],["watchsouthpark.tv",150],["watchtvch.club",150],["web.livecricket.is",150],["webseries.club",150],["worldcupstream.pm",150],["y2mate.com",150],["youapk.net",150],["youtube4kdownloader.com",150],["yts-subs.com",150],["haho.moe",151],["nicy-spicy.pw",152],["novelmultiverse.com",153],["mylegalporno.com",154],["thecut.com",157],["novelism.jp",158],["alphapolis.co.jp",159],["okrzone.com",160],["game3rb.com",161],["javhub.net",161],["thotvids.com",162],["berklee.edu",163],["rawkuma.com",[164,165]],["moviesjoyhd.to",165],["imeteo.sk",166],["youtubemp3donusturucu.net",167],["surfsees.com",169],["vivo.st",[170,171]],["alueviesti.fi",173],["kiuruvesilehti.fi",173],["lempaala.ideapark.fi",173],["olutposti.fi",173],["urjalansanomat.fi",173],["tainhanhvn.com",175],["titantv.com",176],["3cinfo.net",177],["transportationlies.org",178],["camarchive.tv",179],["crownimg.com",179],["freejav.guru",179],["hentai2read.com",179],["icyporno.com",179],["illink.net",179],["javtiful.com",179],["m-hentai.net",179],["pornblade.com",179],["pornfelix.com",179],["pornxxxxtube.net",179],["redwap.me",179],["redwap2.com",179],["redwap3.com",179],["tubxporn.xxx",179],["ver-comics-porno.com",179],["ver-mangas-porno.com",179],["xanimeporn.com",179],["xxxvideohd.net",179],["zetporn.com",179],["cocomanga.com",180],["mcleaks.net",181],["explorecams.com",181],["minecraft.buzz",181],["chillx.top",182],["playerx.stream",182],["m.liputan6.com",184],["stardewids.com",[184,207]],["ingles.com",185],["spanishdict.com",185],["rureka.com",186],["bunkr.is",187],["amateur8.com",188],["freeporn8.com",188],["maturetubehere.com",188],["embedo.co",189],["corriere.it",190],["oggi.it",190],["2the.space",191],["apkcombo.com",193],["sponsorhunter.com",194],["soft98.ir",195],["novelssites.com",196],["haxina.com",197],["cryptofenz.xyz",197],["torrentmac.net",198],["udvl.com",199],["moviezaddiction.icu",200],["dlpanda.com",201],["socialmediagirls.com",202],["einrichtungsbeispiele.de",203],["weadown.com",204],["molotov.tv",205],["freecoursesonline.me",206],["adelsfun.com",206],["advantien.com",206],["bailbondsfinder.com",206],["bigpiecreative.com",206],["childrenslibrarylady.com",206],["classifarms.com",206],["comtasq.ca",206],["crone.es",206],["ctrmarketingsolutions.com",206],["dropnudes.com",206],["ftuapps.dev",206],["genzsport.com",206],["ghscanner.com",206],["grsprotection.com",206],["gruporafa.com.br",206],["inmatefindcalifornia.com",206],["inmatesearchidaho.com",206],["itsonsitetv.com",206],["mfmfinancials.com",206],["myproplugins.com",206],["onehack.us",206],["ovester.com",206],["paste.bin.sx",206],["privatenudes.com",206],["renoconcrete.ca",206],["richieashbeck.com",206],["sat.technology",206],["short1ink.com",206],["stpm.co.uk",206],["wegotcookies.co",206],["mathcrave.com",206],["commands.gg",207],["smgplaza.com",208],["autosport.com",[209,210]],["motorsport.com",[209,210]],["freepik.com",211],["pinloker.com",213],["sekilastekno.com",213],["diyphotography.net",214],["bitchesgirls.com",215],["shopforex.online",216],["programmingeeksclub.com",217],["easymc.io",218],["diendancauduong.com",219],["parentcircle.com",220],["h-game18.xyz",221],["nopay.info",222],["wheelofgold.com",223],["shortlinks.tech",224],["davescomputertips.com",225],["skill4ltu.eu",227],["freepikdownloader.com",228],["freepasses.org",229],["iusedtobeaboss.com",230],["androidpolice.com",231],["cbr.com",231],["dualshockers.com",231],["gamerant.com",231],["thegamer.com",231],["blogtruyenmoi.com",232],["igay69.com",233],["graphicget.com",234],["qiwi.gg",235],["netcine2.la",236],["cbc.ca",237]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",8],["ganool",8],["pirate",8],["piratebay",8],["pirateproxy",8],["proxytpb",8],["thepiratebay",8],["limetorrents",[10,17]],["king-pes",10],["depedlps",10],["komikcast",10],["idedroidsafelink",10],["links-url",10],["eikaiwamastery",10],["ak4eg",10],["xhamster",11],["xhamster1",11],["xhamster5",11],["xhamster7",11],["rexporn",11],["movies07",11],["pornocomics",11],["streanplay",12],["steanplay",12],["liferayiseasy",[13,14]],["userupload",17],["pahe",17],["yts",17],["tube8",17],["topeuropix",17],["moviescounter",17],["torrent9",17],["desiremovies",17],["movs4u",17],["uwatchfree",17],["hydrax",17],["4movierulz",17],["projectfreetv",17],["arabseed",17],["btdb",[17,60]],["skymovieshd",17],["world4ufree",17],["streamsport",17],["rojadirectatvhd",17],["userload",17],["freecoursesonline",19],["lordpremium",19],["todovieneok",19],["novablogitalia",19],["anisubindo",19],["btvsports",19],["adyou",20],["fxporn69",23],["sexwebvideo",30],["pornomoll",30],["gsurl",33],["mimaletadepeliculas",34],["readcomiconline",35],["burningseries",36],["dz4soft",37],["yoututosjeff",37],["ebookmed",37],["lanjutkeun",37],["novelasesp",37],["singingdalong",37],["doujindesu",37],["xmovies8",40],["mega-dvdrip",47],["peliculas-dvdrip",47],["desbloqueador",48],["newpelis",[49,58]],["pelix",[49,58]],["allcalidad",[49,179]],["khatrimaza",49],["camwhores",51],["camwhorestv",51],["uproxy",51],["nekopoi",55],["mirrorace",64],["mixdrp",69],["asiansex",71],["japanfuck",71],["japanporn",71],["teensex",71],["vintagetube",71],["xxxmovies",71],["zooqle",75],["hdfull",79],["mangamanga",81],["streameast",83],["thestreameast",83],["vev",87],["vidop",87],["zone-telechargement",89],["megalink",94],["gmx",95],["mega1080p",100],["9hentai",103],["gaypornhdfree",110],["cinemakottaga",110],["privatemoviez",110],["apkmaven",110],["popcornstream",112],["pornktube",127],["watchseries",127],["milfnut",128],["pagalmovies",134],["7starhd",134],["jalshamoviez",134],["9xupload",134],["bdupload",134],["desiupload",134],["rdxhd1",134],["moviessources",146],["nuvid",147],["goload",[149,150]],["0gomovie",150],["0gomovies",150],["123moviefree",150],["1kmovies",150],["1madrasdub",150],["1primewire",150],["2embed",150],["2madrasdub",150],["2umovies",150],["4anime",150],["9xmovies",150],["altadefinizione01",150],["anitube",150],["atomixhq",150],["beinmatch",150],["brmovies",150],["cima4u",150],["clicknupload",150],["cmovies",150],["couchtuner",150],["cricfree",150],["crichd",150],["databasegdriveplayer",150],["dood",150],["f1stream",150],["faselhd",150],["fbstream",150],["file4go",150],["filemoon",150],["filepress",[150,212]],["filmlinks4u",150],["filmpertutti",150],["filmyzilla",150],["fmovies",150],["french-stream",150],["fsapi",150],["fzlink",150],["gdriveplayer",150],["gofilms4u",150],["gogoanime",150],["gomoviefree",150],["gomoviz",150],["gowatchseries",150],["hdmoviefair",150],["hdmovies4u",150],["hdmovies50",150],["hdmoviesfair",150],["hh3dhay",150],["hindilinks4u",150],["hotmasti",150],["hurawatch",150],["klmanga",150],["klubsports",150],["libertestreamvf",150],["livetvon",150],["manga1000",150],["manga1001",150],["mangaraw",150],["mangarawjp",150],["mlbstream",150],["motogpstream",150],["movierulz",150],["movies123",150],["movies2watch",150],["moviesden",150],["moviezaddiction",150],["myflixer",150],["nbastream",150],["netcine",150],["nflstream",150],["nhlstream",150],["onlinewatchmoviespk",150],["pctfenix",150],["pctnew",150],["pksmovies",150],["plyjam",150],["plylive",150],["pogolinks",150],["popcorntime",150],["poscitech",150],["prmovies",150],["rugbystreams",150],["shahed4u",150],["sflix",150],["sitesunblocked",150],["socceronline",150],["solarmovies",150],["sportcast",150],["sportskart",150],["sports-stream",150],["streaming-french",150],["streamers",150],["streamingcommunity",150],["strikeout",150],["t20cup",150],["tennisstreams",150],["torrentdosfilmes",150],["toonanime",150],["tvply",150],["ufcstream",150],["uptomega",150],["uqload",150],["vudeo",150],["vidoo",150],["vipbox",150],["vipboxtv",150],["vipleague",150],["viprow",150],["yesmovies",150],["yomovies",150],["yomovies1",150],["yt2mp3s",150],["kat",150],["katbay",150],["kickass",150],["kickasshydra",150],["kickasskat",150],["kickass2",150],["kickasstorrents",150],["kat2",150],["kattracker",150],["thekat",150],["thekickass",150],["kickassz",150],["kickasstorrents2",150],["topkickass",150],["kickassgo",150],["kkickass",150],["kkat",150],["kickasst",150],["kick4ss",150],["guardaserie",155],["cine-calidad",156],["videovard",172],["gntai",179],["grantorrent",179],["mejortorrent",179],["mejortorrento",179],["mejortorrents",179],["mejortorrents1",179],["mejortorrentt",179],["softonic",192],["bg-gledai",206],["gledaitv",206],["motchill",226]]);

const exceptionsMap = new Map([["mentor.duden.de",[82]],["forum.soft98.ir",[195]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const shouldPrevent = (thisArg, type, handler) => {
        if ( targetSelector !== undefined ) {
            const elems = Array.from(document.querySelectorAll(targetSelector));
            if ( elems.includes(thisArg) === false ) { return false; }
        }
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
            safe.uboLog(`addEventListener('${type}', ${handler})`);
        }
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // jshint ignore:line
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                if ( shouldPrevent(thisArg, type, handler) ) { return; }
                return Reflect.apply(target, thisArg, args);
            },
            get(target, prop, receiver) {
                if ( prop === 'toString' ) {
                    return target.toString.bind(target);
                }
                return Reflect.get(target, prop, receiver);
            },
        };
        self.EventTarget.prototype.addEventListener = new Proxy(
            self.EventTarget.prototype.addEventListener,
            eventListenerHandler
        );
    };
    runAt(( ) => {
        trapEddEventListeners();
    }, extraArgs.runAt);
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
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
    try { addEventListenerDefuser(...argsList[i]); }
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

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_addEventListenerDefuser();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_addEventListenerDefuser = cloneInto([
            [ '(', uBOL_addEventListenerDefuser.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_addEventListenerDefuser);
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
    delete page.uBOL_addEventListenerDefuser;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
