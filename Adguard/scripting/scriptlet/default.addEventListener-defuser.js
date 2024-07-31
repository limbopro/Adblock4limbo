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

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["load","bypass"],["DOMContentLoaded","location.href"],["","popMagic"],["click","Popunder"],["contextmenu"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["","dtnoppu"],["click","0x"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["blur"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,143]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,198]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,47]],["tubator.com",24],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,36]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,48]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,198]],["short.pe",32],["bs.to",34],["efukt.com",34],["generacionretro.net",35],["nuevos-mu.ucoz.com",35],["micloudfiles.com",35],["mimaletamusical.blogspot.com",35],["visionias.net",35],["b3infoarena.in",35],["lurdchinexgist.blogspot.com",35],["thefreedommatrix.blogspot.com",35],["hentai-vl.blogspot.com",35],["projetomotog.blogspot.com",35],["ktmx.pro",35],["lirik3satu.blogspot.com",35],["marketmovers.it",35],["pharmaguideline.com",35],["safemaru.blogspot.com",35],["mixloads.com",35],["mangaromance.eu",35],["interssh.com",35],["freesoftpdfdownload.blogspot.com",35],["cirokun.blogspot.com",35],["myadslink.com",35],["blackavelic.com",35],["server.satunivers.tv",35],["eg-akw.com",35],["xn--mgba7fjn.cc",35],["flashingjungle.com",36],["ma-x.org",37],["lavozdegalicia.es",37],["xmovies08.org",39],["globaldjmix.com",40],["zazzybabes.com",41],["haaretz.co.il",42],["haaretz.com",42],["slate.com",43],["megalinks.info",44],["megapastes.com",44],["mega-mkv.com",[44,45]],["mkv-pastes.com",44],["zpaste.net",44],["zlpaste.net",44],["9xlinks.site",44],["zona-leros.net",45],["acortarm.xyz",46],["cine.to",[47,203]],["kissasia.cc",47],["digjav.com",48],["videoszoofiliahd.com",49],["xxxtubezoo.com",50],["zooredtube.com",50],["uii.io",51],["megacams.me",53],["rlslog.net",53],["porndoe.com",54],["acienciasgalilei.com",56],["playrust.io",57],["payskip.org",58],["short-url.link",59],["tubedupe.com",60],["mcrypto.club",61],["fatgirlskinny.net",62],["polska-ie.com",62],["windowsmatters.com",62],["canaltdt.es",63],["masbrooo.com",63],["2ndrun.tv",63],["stfly.me",64],["oncehelp.com",64],["queenfaucet.website",64],["curto.win",64],["smallseotools.com",65],["macwelt.de",67],["pcwelt.de",67],["capital.de",67],["geo.de",67],["allmomsex.com",68],["allnewindianporn.com",68],["analxxxvideo.com",68],["animalextremesex.com",68],["anime3d.xyz",68],["animefuckmovies.com",68],["animepornfilm.com",68],["animesexbar.com",68],["animesexclip.com",68],["animexxxsex.com",68],["animexxxfilms.com",68],["anysex.club",68],["apetube.asia",68],["asianfuckmovies.com",68],["asianfucktube.com",68],["asianporn.sexy",68],["asiansexcilps.com",68],["beeg.fund",68],["beegvideoz.com",68],["bestasiansex.pro",68],["bravotube.asia",68],["brutalanimalsfuck.com",68],["candyteenporn.com",68],["daddyfuckmovies.com",68],["desifuckonline.com",68],["exclusiveasianporn.com",68],["exteenporn.com",68],["fantasticporn.net",68],["fantasticyoungporn.com",68],["fineasiansex.com",68],["firstasianpussy.com",68],["freeindiansextube.com",68],["freepornasians.com",68],["freerealvideo.com",68],["fuck-beeg.com",68],["fuck-xnxx.com",68],["fuckasian.pro",68],["fuckfuq.com",68],["fuckundies.com",68],["gojapaneseporn.com",68],["golderotica.com",68],["goodyoungsex.com",68],["goyoungporn.com",68],["hardxxxmoms.com",68],["hdvintagetube.com",68],["hentaiporn.me",68],["hentaisexfilms.com",68],["hentaisexuality.com",68],["hot-teens-movies.mobi",68],["hotanimepornvideos.com",68],["hotanimevideos.com",68],["hotasianpussysex.com",68],["hotjapaneseshows.com",68],["hotmaturetube.com",68],["hotmilfs.pro",68],["hotorientalporn.com",68],["hotpornyoung.com",68],["hotxxxjapanese.com",68],["hotxxxpussy.com",68],["indiafree.net",68],["indianpornvideo.online",68],["japanpornclip.com",68],["japanesetube.video",68],["japansex.me",68],["japanesexxxporn.com",68],["japansporno.com",68],["japanxxx.asia",68],["japanxxxworld.com",68],["keezmovies.surf",68],["lingeriefuckvideo.com",68],["liveanimalporn.zooo.club",68],["madhentaitube.com",68],["megahentaitube.com",68],["megajapanesesex.com",68],["megajapantube.com",68],["milfxxxpussy.com",68],["momsextube.pro",68],["momxxxass.com",68],["monkeyanimalporn.com",68],["moviexxx.mobi",68],["newanimeporn.com",68],["newjapanesexxx.com",68],["nicematureporn.com",68],["nudeplayboygirls.com",68],["openxxxporn.com",68],["originalindianporn.com",68],["originalteentube.com",68],["pig-fuck.com",68],["plainasianporn.com",68],["popularasianxxx.com",68],["pornanimetube.com",68],["pornasians.pro",68],["pornhat.asia",68],["pornheed.online",68],["pornjapanesesex.com",68],["pornomovies.asia",68],["pornvintage.tv",68],["primeanimesex.com",68],["realjapansex.com",68],["realmomsex.com",68],["redsexhub.com",68],["retroporn.world",68],["retrosexfilms.com",68],["sex-free-movies.com",68],["sexanimesex.com",68],["sexanimetube.com",68],["sexjapantube.com",68],["sexmomvideos.com",68],["sexteenxxxtube.com",68],["sexxxanimal.com",68],["sexyoungtube.com",68],["sexyvintageporn.com",68],["sopornmovies.com",68],["spicyvintageporn.com",68],["sunporno.club",68],["tabooanime.club",68],["teenextrem.com",68],["teenfucksex.com",68],["teenhost.net",68],["teensexass.com",68],["tnaflix.asia",68],["totalfuckmovies.com",68],["totalmaturefuck.com",68],["txxx.asia",68],["voyeurpornsex.com",68],["warmteensex.com",68],["wetasiancreampie.com",68],["wildhentaitube.com",68],["wowyoungsex.com",68],["xhamster-art.com",68],["xmovie.pro",68],["xnudevideos.com",68],["xnxxjapon.com",68],["xpics.me",68],["xvide.me",68],["xxxanimefuck.com",68],["xxxanimevideos.com",68],["xxxanimemovies.com",68],["xxxhentaimovies.com",68],["xxxhothub.com",68],["xxxjapaneseporntube.com",68],["xxxlargeporn.com",68],["xxxmomz.com",68],["xxxpornmilf.com",68],["xxxpussyclips.com",68],["xxxpussysextube.com",68],["xxxretrofuck.com",68],["xxxsex.pro",68],["xxxsexyjapanese.com",68],["xxxteenyporn.com",68],["xxxvideo.asia",68],["xxxvideos.ink",68],["xxxyoungtv.com",68],["youjizzz.club",68],["youngpussyfuck.com",68],["bayimg.com",69],["celeb.gate.cc",70],["masterplayer.xyz",72],["pussy-hub.com",72],["porndex.com",73],["compucalitv.com",74],["diariodenavarra.es",76],["duden.de",78],["pennlive.com",80],["beautypageants.indiatimes.com",81],["01fmovies.com",82],["lnk2.cc",84],["fullhdxxx.com",85],["luscious.net",[85,143]],["classicpornbest.com",85],["xstory-fr.com",85],["1youngteenporn.com",85],["www-daftarharga.blogspot.com",[85,187]],["miraculous.to",[85,193]],["vtube.to",85],["gosexpod.com",86],["otakukan.com",87],["xcafe.com",88],["pornfd.com",88],["venusarchives.com",88],["imagehaha.com",89],["imagenpic.com",89],["imageshimage.com",89],["imagetwist.com",89],["k1nk.co",90],["watchasians.cc",90],["alexsports.xyz",90],["lulustream.com",90],["luluvdo.com",90],["web.de",91],["news18.com",92],["thelanb.com",93],["dropmms.com",93],["softwaredescargas.com",94],["cracking-dz.com",95],["anitube.ninja",96],["gazzetta.it",97],["port.hu",99],["dziennikbaltycki.pl",100],["dzienniklodzki.pl",100],["dziennikpolski24.pl",100],["dziennikzachodni.pl",100],["echodnia.eu",100],["expressbydgoski.pl",100],["expressilustrowany.pl",100],["gazetakrakowska.pl",100],["gazetalubuska.pl",100],["gazetawroclawska.pl",100],["gk24.pl",100],["gloswielkopolski.pl",100],["gol24.pl",100],["gp24.pl",100],["gra.pl",100],["gs24.pl",100],["kurierlubelski.pl",100],["motofakty.pl",100],["naszemiasto.pl",100],["nowiny24.pl",100],["nowosci.com.pl",100],["nto.pl",100],["polskatimes.pl",100],["pomorska.pl",100],["poranny.pl",100],["sportowy24.pl",100],["strefaagro.pl",100],["strefabiznesu.pl",100],["stronakobiet.pl",100],["telemagazyn.pl",100],["to.com.pl",100],["wspolczesna.pl",100],["course9x.com",100],["courseclub.me",100],["azrom.net",100],["alttyab.net",100],["esopress.com",100],["nesiaku.my.id",100],["onemanhua.com",101],["freeindianporn.mobi",101],["dr-farfar.com",102],["boyfriendtv.com",103],["brandstofprijzen.info",104],["netfuck.net",105],["blog24.me",[105,138]],["kisahdunia.com",105],["javsex.to",105],["nulljungle.com",105],["oyuncusoruyor.com",105],["pbarecap.ph",105],["sourds.net",105],["teknobalta.com",105],["tvinternetowa.info",105],["sqlserveregitimleri.com",105],["tutcourse.com",105],["readytechflip.com",105],["novinhastop.com",105],["warddogs.com",105],["dvdgayporn.com",105],["iimanga.com",105],["tinhocdongthap.com",105],["tremamnon.com",105],["423down.com",105],["brizzynovel.com",105],["jugomobile.com",105],["freecodezilla.net",105],["animekhor.xyz",105],["iconmonstr.com",105],["gay-tubes.cc",105],["rbxscripts.net",105],["comentariodetexto.com",105],["wordpredia.com",105],["livsavr.co",105],["allfaucet.xyz",[105,138]],["titbytz.tk",105],["replica-watch.info",105],["alludemycourses.com",105],["kayifamilytv.com",105],["iir.ai",106],["gameofporn.com",108],["qpython.club",109],["antifake-funko.fr",109],["dktechnicalmate.com",109],["recipahi.com",109],["e9china.net",110],["ontools.net",110],["marketbeat.com",111],["hentaipornpics.net",112],["apps2app.com",113],["alliptvlinks.com",114],["waterfall.money",114],["xvideos.com",115],["xvideos2.com",115],["homemoviestube.com",116],["sexseeimage.com",116],["jpopsingles.eu",118],["azmath.info",118],["downfile.site",118],["downphanmem.com",118],["expertvn.com",118],["memangbau.com",118],["trangchu.news",118],["aztravels.net",118],["ielts-isa.edu.vn",118],["techedubyte.com",[118,251]],["tubereader.me",119],["repretel.com",119],["dagensnytt.com",120],["mrproblogger.com",120],["themezon.net",120],["gfx-station.com",121],["bitzite.com",[121,138,142]],["historyofroyalwomen.com",122],["davescomputertips.com",122],["ukchat.co.uk",123],["hivelr.com",124],["embedz.click",125],["skidrowcodex.net",126],["takimag.com",127],["digi.no",128],["th.gl",129],["scimagojr.com",130],["haxina.com",130],["cryptofenz.xyz",130],["twi-fans.com",131],["learn-cpp.org",132],["terashare.co",133],["pornwex.tv",134],["smithsonianmag.com",135],["upshrink.com",136],["ohionowcast.info",138],["wiour.com",138],["appsbull.com",138],["diudemy.com",138],["maqal360.com",138],["bitcotasks.com",138],["videolyrics.in",138],["manofadan.com",138],["cempakajaya.com",138],["tagecoin.com",138],["doge25.in",138],["king-ptcs.com",138],["naijafav.top",138],["ourcoincash.xyz",138],["sh.techsamir.com",138],["claimcoins.site",138],["cryptosh.pro",138],["coinsrev.com",138],["go.freetrx.fun",138],["eftacrypto.com",138],["fescrypto.com",138],["earnhub.net",138],["kiddyshort.com",138],["tronxminer.com",138],["homeairquality.org",139],["cety.app",140],["exego.app",140],["cutlink.net",140],["cutsy.net",140],["cutyurls.com",140],["cutty.app",140],["cutnet.net",140],["adcrypto.net",141],["admediaflex.com",141],["aduzz.com",141],["bitcrypto.info",141],["cdrab.com",141],["datacheap.io",141],["hbz.us",141],["savego.org",141],["owsafe.com",141],["sportweb.info",141],["aiimgvlog.fun",143],["6indianporn.com",143],["amateurebonypics.com",143],["amateuryoungpics.com",143],["cinemabg.net",143],["coomer.su",143],["desimmshd.com",143],["frauporno.com",143],["givemeaporn.com",143],["hitomi.la",143],["jav-asia.top",143],["javf.net",143],["javideo.net",143],["kemono.su",143],["kr18plus.com",143],["pilibook.com",143],["pornborne.com",143],["porngrey.com",143],["qqxnxx.com",143],["sexvideos.host",143],["submilf.com",143],["subtaboo.com",143],["tktube.com",143],["xfrenchies.com",143],["moderngyan.com",144],["sattakingcharts.in",144],["freshbhojpuri.com",144],["bgmi32bitapk.in",144],["bankshiksha.in",144],["earn.mpscstudyhub.com",144],["earn.quotesopia.com",144],["money.quotesopia.com",144],["best-mobilegames.com",144],["learn.moderngyan.com",144],["bharatsarkarijobalert.com",144],["coingraph.us",145],["momo-net.com",145],["maxgaming.fi",145],["travel.vebma.com",146],["cloud.majalahhewan.com",146],["crm.cekresi.me",146],["ai.tempatwisata.pro",146],["pinloker.com",146],["sekilastekno.com",146],["link.paid4link.com",147],["vulture.com",148],["megaplayer.bokracdn.run",149],["hentaistream.com",150],["siteunblocked.info",151],["larvelfaucet.com",152],["feyorra.top",152],["claimtrx.com",152],["moviesyug.net",153],["w4files.ws",153],["parispi.net",154],["simkl.com",155],["paperzonevn.com",156],["dailyvideoreports.net",157],["lewd.ninja",158],["systemnews24.com",159],["incestvidz.com",160],["niusdiario.es",161],["playporngames.com",162],["movi.pk",[163,167]],["justin.mp3quack.lol",165],["cutesexyteengirls.com",166],["0dramacool.net",167],["185.53.88.104",167],["185.53.88.204",167],["185.53.88.15",167],["123movies4k.net",167],["1movieshd.com",167],["1rowsports.com",167],["4share-mp3.net",167],["6movies.net",167],["9animetv.to",167],["720pstream.me",167],["aagmaal.com",167],["abysscdn.com",167],["ajkalerbarta.com",167],["akstream.xyz",167],["androidapks.biz",167],["androidsite.net",167],["animeonlinefree.org",167],["animesite.net",167],["animespank.com",167],["aniworld.to",167],["apkmody.io",167],["appsfree4u.com",167],["audioz.download",167],["awafim.tv",167],["bdnewszh.com",167],["beastlyprints.com",167],["bengalisite.com",167],["bestfullmoviesinhd.org",167],["betteranime.net",167],["blacktiesports.live",167],["buffsports.stream",167],["ch-play.com",167],["clickforhire.com",167],["cloudy.pk",167],["computercrack.com",167],["coolcast2.com",167],["crackedsoftware.biz",167],["crackfree.org",167],["cracksite.info",167],["cryptoblog24.info",167],["cuatrolatastv.blogspot.com",167],["cydiasources.net",167],["dirproxy.com",167],["dopebox.to",167],["downloadapk.info",167],["downloadapps.info",167],["downloadgames.info",167],["downloadmusic.info",167],["downloadsite.org",167],["downloadwella.com",167],["ebooksite.org",167],["educationtips213.blogspot.com",167],["egyup.live",167],["embed.meomeo.pw",167],["embed.scdn.to",167],["emulatorsite.com",167],["essaysharkwriting.club",167],["exploreera.net",167],["extrafreetv.com",167],["fakedetail.com",167],["fclecteur.com",167],["files.im",167],["flexyhit.com",167],["fmoviefree.net",167],["fmovies24.com",167],["footyhunter3.xyz",167],["freeflix.info",167],["freemoviesu4.com",167],["freeplayervideo.com",167],["freesoccer.net",167],["fseries.org",167],["gamefast.org",167],["gamesite.info",167],["gettapeads.com",167],["gmanga.me",167],["gocast123.me",167],["gogohd.net",167],["gogoplay5.com",167],["gooplay.net",167],["gostreamon.net",167],["happy2hub.org",167],["harimanga.com",167],["healthnewsreel.com",167],["hexupload.net",167],["hinatasoul.com",167],["hindisite.net",167],["holymanga.net",167],["hxfile.co",167],["isosite.org",167],["iv-soft.com",167],["januflix.expert",167],["jewelry.com.my",167],["johnwardflighttraining.com",167],["kabarportal.com",167],["kstorymedia.com",167],["la123movies.org",167],["lespassionsdechinouk.com",167],["lilymanga.net",167],["linksdegrupos.com.br",167],["linkz.wiki",167],["livestreamtv.pk",167],["macsite.info",167],["mangapt.com",167],["mangasite.org",167],["manhuascan.com",167],["megafilmeshdseries.com",167],["megamovies.org",167],["membed.net",167],["moddroid.com",167],["moviefree2.com",167],["movies-watch.com.pk",167],["moviesite.app",167],["moviesonline.fm",167],["moviesx.org",167],["msmoviesbd.com",167],["musicsite.biz",167],["myfernweh.com",167],["myviid.com",167],["nazarickol.com",167],["noob4cast.com",167],["nsw2u.com",[167,259]],["oko.sh",167],["olympicstreams.me",167],["orangeink.pk",167],["owllink.net",167],["pahaplayers.click",167],["patchsite.net",167],["pdfsite.net",167],["play1002.com",167],["player-cdn.com",167],["productkeysite.com",167],["projectfreetv.one",167],["romsite.org",167],["rufiguta.com",167],["rytmp3.io",167],["send.cm",167],["seriesite.net",167],["seriezloaded.com.ng",167],["serijehaha.com",167],["shrugemojis.com",167],["siteapk.net",167],["siteflix.org",167],["sitegames.net",167],["sitekeys.net",167],["sitepdf.com",167],["sitetorrent.com",167],["softwaresite.net",167],["sportbar.live",167],["sportkart1.xyz",167],["ssyoutube.com",167],["stardima.com",167],["stream4free.live",167],["superapk.org",167],["supermovies.org",167],["tainio-mania.online",167],["talaba.su",167],["tamilguns.org",167],["tatabrada.tv",167],["techtrendmakers.com",167],["theflixer.tv",167],["thememypc.net",167],["thetechzone.online",167],["thripy.com",167],["tonnestreamz.xyz",167],["travelplanspro.com",167],["turcasmania.com",167],["tusfiles.com",167],["tvonlinesports.com",167],["ultramovies.org",167],["uploadbank.com",167],["urdubolo.pk",167],["vidspeeds.com",167],["vumoo.to",167],["warezsite.net",167],["watchmovies2.com",167],["watchmoviesforfree.org",167],["watchofree.com",167],["watchsite.net",167],["watchsouthpark.tv",167],["watchtvch.club",167],["web.livecricket.is",167],["webseries.club",167],["worldcupstream.pm",167],["y2mate.com",167],["youapk.net",167],["youtube4kdownloader.com",167],["yts-subs.com",167],["haho.moe",168],["nicy-spicy.pw",169],["novelmultiverse.com",170],["mylegalporno.com",171],["videowood.tv",174],["asianembed.io",175],["thecut.com",176],["novelism.jp",177],["alphapolis.co.jp",178],["okrzone.com",179],["game3rb.com",180],["javhub.net",180],["thotvids.com",181],["berklee.edu",182],["rawkuma.com",[183,184]],["moviesjoyhd.to",184],["imeteo.sk",185],["youtubemp3donusturucu.net",186],["surfsees.com",188],["vivo.st",[189,190]],["alueviesti.fi",192],["kiuruvesilehti.fi",192],["lempaala.ideapark.fi",192],["olutposti.fi",192],["urjalansanomat.fi",192],["tainhanhvn.com",194],["titantv.com",195],["3cinfo.net",196],["transportationlies.org",197],["camarchive.tv",198],["crownimg.com",198],["freejav.guru",198],["hentai2read.com",198],["icyporno.com",198],["illink.net",198],["javtiful.com",198],["m-hentai.net",198],["pornblade.com",198],["pornfelix.com",198],["pornxxxxtube.net",198],["redwap.me",198],["redwap2.com",198],["redwap3.com",198],["tubxporn.xxx",198],["ver-comics-porno.com",198],["ver-mangas-porno.com",198],["xanimeporn.com",198],["xxxvideohd.net",198],["zetporn.com",198],["cocomanga.com",199],["sampledrive.in",200],["mcleaks.net",201],["explorecams.com",201],["minecraft.buzz",201],["chillx.top",202],["playerx.stream",202],["m.liputan6.com",204],["stardewids.com",[204,227]],["ingles.com",205],["spanishdict.com",205],["surfline.com",206],["rureka.com",207],["bunkr.is",208],["amateur8.com",209],["freeporn8.com",209],["maturetubehere.com",209],["embedo.co",210],["corriere.it",211],["oggi.it",211],["2the.space",212],["file.gocmod.com",213],["apkcombo.com",214],["sponsorhunter.com",215],["soft98.ir",216],["novelssites.com",217],["torrentmac.net",218],["udvl.com",219],["moviezaddiction.icu",220],["dlpanda.com",221],["socialmediagirls.com",222],["ecamrips.com",222],["showcamrips.com",222],["einrichtungsbeispiele.de",223],["weadown.com",224],["molotov.tv",225],["freecoursesonline.me",226],["adelsfun.com",226],["advantien.com",226],["bailbondsfinder.com",226],["bigpiecreative.com",226],["childrenslibrarylady.com",226],["classifarms.com",226],["comtasq.ca",226],["crone.es",226],["ctrmarketingsolutions.com",226],["dropnudes.com",226],["ftuapps.dev",226],["genzsport.com",226],["ghscanner.com",226],["grsprotection.com",226],["gruporafa.com.br",226],["inmatefindcalifornia.com",226],["inmatesearchidaho.com",226],["itsonsitetv.com",226],["mfmfinancials.com",226],["myproplugins.com",226],["onehack.us",226],["ovester.com",226],["paste.bin.sx",226],["privatenudes.com",226],["renoconcrete.ca",226],["richieashbeck.com",226],["sat.technology",226],["short1ink.com",226],["stpm.co.uk",226],["wegotcookies.co",226],["mathcrave.com",226],["commands.gg",227],["smgplaza.com",228],["emturbovid.com",229],["findjav.com",229],["mmtv01.xyz",229],["stbturbo.xyz",229],["freepik.com",230],["diyphotography.net",232],["bitchesgirls.com",233],["shopforex.online",234],["programmingeeksclub.com",235],["easymc.io",236],["diendancauduong.com",237],["parentcircle.com",238],["h-game18.xyz",239],["nopay.info",240],["wheelofgold.com",241],["shortlinks.tech",242],["skill4ltu.eu",244],["lifestyle.bg",245],["news.bg",245],["topsport.bg",245],["webcafe.bg",245],["freepikdownloader.com",246],["freepasses.org",247],["iusedtobeaboss.com",248],["androidpolice.com",249],["cbr.com",249],["dualshockers.com",249],["gamerant.com",249],["howtogeek.com",249],["thegamer.com",249],["blogtruyenmoi.com",250],["igay69.com",252],["graphicget.com",253],["qiwi.gg",254],["netcine2.la",255],["idnes.cz",[256,257]],["cbc.ca",258]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,57]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["burningseries",34],["dz4soft",35],["yoututosjeff",35],["ebookmed",35],["lanjutkeun",35],["novelasesp",35],["singingdalong",35],["doujindesu",35],["xmovies8",38],["mega-dvdrip",45],["peliculas-dvdrip",45],["desbloqueador",46],["newpelis",[47,55]],["pelix",[47,55]],["allcalidad",[47,198]],["khatrimaza",47],["camwhores",48],["camwhorestv",48],["uproxy",48],["nekopoi",52],["mirrorace",61],["mixdrp",66],["asiansex",68],["japanfuck",68],["japanporn",68],["teensex",68],["vintagetube",68],["xxxmovies",68],["zooqle",71],["hdfull",75],["mangamanga",77],["streameast",79],["thestreameast",79],["vev",83],["vidop",83],["1337x",85],["x1337x",85],["zone-telechargement",85],["megalink",90],["gmx",91],["mega1080p",96],["9hentai",98],["gaypornhdfree",105],["cinemakottaga",105],["privatemoviez",105],["apkmaven",105],["popcornstream",107],["readcomiconline",117],["azsoft",118],["fc-lc",137],["pornktube",143],["watchseries",143],["milfnut",145],["pagalmovies",153],["7starhd",153],["jalshamoviez",153],["9xupload",153],["bdupload",153],["desiupload",153],["rdxhd1",153],["moviessources",164],["nuvid",165],["0gomovie",167],["0gomovies",167],["123moviefree",167],["1kmovies",167],["1madrasdub",167],["1primewire",167],["2embed",167],["2madrasdub",167],["2umovies",167],["4anime",167],["adblockplustape",167],["altadefinizione01",167],["anitube",167],["atomixhq",167],["beinmatch",167],["brmovies",167],["cima4u",167],["clicknupload",167],["cmovies",167],["cricfree",167],["crichd",167],["databasegdriveplayer",167],["dood",167],["f1stream",167],["faselhd",167],["fbstream",167],["file4go",167],["filemoon",167],["filepress",[167,231]],["filmlinks4u",167],["filmpertutti",167],["filmyzilla",167],["fmovies",167],["french-stream",167],["fzlink",167],["gdriveplayer",167],["gofilms4u",167],["gogoanime",167],["gomoviz",167],["hdmoviefair",167],["hdmovies4u",167],["hdmovies50",167],["hdmoviesfair",167],["hh3dhay",167],["hindilinks4u",167],["hotmasti",167],["hurawatch",167],["klmanga",167],["klubsports",167],["libertestreamvf",167],["livetvon",167],["manga1000",167],["manga1001",167],["mangaraw",167],["mangarawjp",167],["mlbstream",167],["motogpstream",167],["movierulz",167],["movies123",167],["movies2watch",167],["moviesden",167],["moviezaddiction",167],["myflixer",167],["nbastream",167],["netcine",167],["nflstream",167],["nhlstream",167],["onlinewatchmoviespk",167],["pctfenix",167],["pctnew",167],["pksmovies",167],["plyjam",167],["plylive",167],["pogolinks",167],["popcorntime",167],["poscitech",167],["prmovies",167],["rugbystreams",167],["shahed4u",167],["sflix",167],["sitesunblocked",167],["solarmovies",167],["sportcast",167],["sportskart",167],["sports-stream",167],["streaming-french",167],["streamers",167],["streamingcommunity",167],["strikeout",167],["t20cup",167],["tennisstreams",167],["torrentdosfilmes",167],["toonanime",167],["tvply",167],["ufcstream",167],["uptomega",167],["uqload",167],["vudeo",167],["vidoo",167],["vipbox",167],["vipboxtv",167],["vipleague",167],["viprow",167],["yesmovies",167],["yomovies",167],["yomovies1",167],["yt2mp3s",167],["kat",167],["katbay",167],["kickass",167],["kickasshydra",167],["kickasskat",167],["kickass2",167],["kickasstorrents",167],["kat2",167],["kattracker",167],["thekat",167],["thekickass",167],["kickassz",167],["kickasstorrents2",167],["topkickass",167],["kickassgo",167],["kkickass",167],["kkat",167],["kickasst",167],["kick4ss",167],["guardaserie",172],["cine-calidad",173],["videovard",191],["gntai",198],["grantorrent",198],["mejortorrent",198],["mejortorrento",198],["mejortorrents",198],["mejortorrents1",198],["mejortorrentt",198],["shineads",200],["bg-gledai",226],["gledaitv",226],["motchill",243]]);

const exceptionsMap = new Map([["mentor.duden.de",[78]],["forum.soft98.ir",[216]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const logPrefix = safe.makeLogPrefix('prevent-addEventListener', type, pattern);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const debug = shouldDebug(extraArgs);
    const targetSelector = extraArgs.elements || undefined;
    const elementMatches = elem => {
        if ( targetSelector === 'window' ) { return elem === window; }
        if ( targetSelector === 'document' ) { return elem === document; }
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        // https://github.com/uBlockOrigin/uAssets/discussions/17907#discussioncomment-9871079
        const id = String(elem.id);
        if ( id !== '' ) { parts.push(`#${CSS.escape(id)}`); }
        for ( let i = 0; i < elem.classList.length; i++ ) {
            parts.push(`.${CSS.escape(elem.classList.item(i))}`);
        }
        for ( let i = 0; i < elem.attributes.length; i++ ) {
            const attr = elem.attributes.item(i);
            if ( attr.name === 'id' ) { continue; }
            if ( attr.name === 'class' ) { continue; }
            parts.push(`[${CSS.escape(attr.name)}="${attr.value}"]`);
        }
        return parts.join('');
    };
    const shouldPrevent = (thisArg, type, handler) => {
        const matchesType = safe.RegExp_test.call(reType, type);
        const matchesHandler = safe.RegExp_test.call(rePattern, handler);
        const matchesEither = matchesType || matchesHandler;
        const matchesBoth = matchesType && matchesHandler;
        if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
            debugger; // eslint-disable-line no-debugger
        }
        if ( matchesBoth && targetSelector !== undefined ) {
            if ( elementMatches(thisArg) === false ) { return false; }
        }
        return matchesBoth;
    };
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let t, h;
                try {
                    t = String(args[0]);
                    if ( typeof args[1] === 'function' ) {
                        h = String(safe.Function_toString(args[1]));
                    } else if ( typeof args[1] === 'object' && args[1] !== null ) {
                        if ( typeof args[1].handleEvent === 'function' ) {
                            h = String(safe.Function_toString(args[1].handleEvent));
                        }
                    } else {
                        h = String(args[1]);
                    }
                } catch(ex) {
                }
                if ( type === '' && pattern === '' ) {
                    safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
                } else if ( shouldPrevent(thisArg, t, h) ) {
                    return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
                }
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
