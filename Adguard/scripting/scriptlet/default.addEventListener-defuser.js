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

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_addEventListenerDefuser = function() {

const scriptletGlobals = {}; // eslint-disable-line

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["DOMContentLoaded","location.href"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["DOMContentLoaded","history.go"],["load","puHref"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["click","open"],["load","bypass"],["","popMagic"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["","dtnoppu"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["blur"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["contextmenu","preventDefault"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","form.submit"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["DOMContentLoaded","Nokia"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,30]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,156]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["shemalez.com",18],["tubepornclassic.com",18],["gotporn.com",19],["freepornrocks.com",19],["tvhai.org",19],["realgfporn.com",[20,21]],["thisvid.com",21],["xvideos-downloader.net",21],["imgspice.com",22],["vikiporn.com",23],["tnaflix.com",23],["hentai2w.com",[23,208]],["yourlust.com",23],["hotpornfile.org",23],["watchfreexxx.net",23],["vintageporntubes.com",23],["angelgals.com",23],["babesexy.com",23],["porndaa.com",23],["ganstamovies.com",23],["youngleak.com",23],["porndollz.com",23],["xnxxvideo.pro",23],["xvideosxporn.com",23],["filmpornofrancais.fr",23],["pictoa.com",[23,45]],["tubator.com",23],["adultasianporn.com",23],["nsfwmonster.com",23],["girlsofdesire.org",23],["gaytail.com",23],["fetish-bb.com",23],["rumporn.com",23],["soyoungteens.com",23],["zubby.com",23],["lesbian8.com",23],["gayforfans.com",23],["reifporn.de",23],["javtsunami.com",23],["18tube.sex",23],["xxxextreme.org",23],["amateurs-fuck.com",23],["sex-amateur-clips.com",23],["hentaiworld.tv",23],["dads-banging-teens.com",23],["home-xxx-videos.com",23],["mature-chicks.com",23],["teens-fucking-matures.com",23],["hqbang.com",23],["darknessporn.com",23],["familyporner.com",23],["freepublicporn.com",23],["pisshamster.com",23],["punishworld.com",23],["xanimu.com",23],["pornhd.com",24],["cnnamador.com",[24,34]],["cle0desktop.blogspot.com",24],["turkanime.co",24],["camclips.tv",[24,46]],["blackpornhq.com",24],["xsexpics.com",24],["ulsex.net",24],["wannafreeporn.com",24],["ytube2dl.com",24],["multiup.us",24],["protege-torrent.com",24],["pussyspace.com",[25,26]],["pussyspace.net",[25,26]],["empflix.com",27],["cpmlink.net",28],["bdsmstreak.com",28],["cutpaid.com",28],["pornforrelax.com",28],["fatwhitebutt.com",28],["short.pe",29],["totaldebrid.org",30],["neko-miku.com",30],["elsfile.org",30],["venstrike.jimdofree.com",30],["schrauben-normen.de",30],["avengerinator.blogspot.com",30],["link-to.net",30],["hanimesubth.com",30],["gsmturkey.net",30],["adshrink.it",30],["presentation-ppt.com",30],["mangacanblog.com",30],["pekalongan-cits.blogspot.com",30],["4tymode.win",30],["eurotruck2.com.br",30],["tiroalpaloes.com",30],["tiroalpaloes.net",30],["linkvertise.com",30],["reifenrechner.at",30],["tire-size-calculator.info",30],["linuxsecurity.com",30],["itsguider.com",30],["cotravinh.blogspot.com",30],["itudong.com",30],["shortx.net",30],["lecturel.com",30],["bakai.org",30],["nar.k-ba.net",30],["tiroalpalo.org",30],["bs.to",32],["efukt.com",32],["generacionretro.net",33],["nuevos-mu.ucoz.com",33],["micloudfiles.com",33],["mimaletamusical.blogspot.com",33],["visionias.net",33],["b3infoarena.in",33],["lurdchinexgist.blogspot.com",33],["thefreedommatrix.blogspot.com",33],["hentai-vl.blogspot.com",33],["projetomotog.blogspot.com",33],["ktmx.pro",33],["lirik3satu.blogspot.com",33],["marketmovers.it",33],["pharmaguideline.com",33],["safemaru.blogspot.com",33],["mixloads.com",33],["mangaromance.eu",33],["interssh.com",33],["freesoftpdfdownload.blogspot.com",33],["cirokun.blogspot.com",33],["myadslink.com",33],["blackavelic.com",33],["server.satunivers.tv",33],["eg-akw.com",33],["xn--mgba7fjn.cc",33],["flashingjungle.com",34],["ma-x.org",35],["lavozdegalicia.es",35],["ddwloclawek.pl",35],["ki24.info",35],["xmovies08.org",37],["globaldjmix.com",38],["zazzybabes.com",39],["haaretz.co.il",40],["haaretz.com",40],["slate.com",41],["megalinks.info",42],["megapastes.com",42],["mega-mkv.com",[42,43]],["mkv-pastes.com",42],["zpaste.net",42],["zlpaste.net",42],["9xlinks.site",42],["zona-leros.net",43],["acortarm.xyz",44],["cine.to",[45,214]],["kissasia.cc",45],["digjav.com",46],["videoszoofiliahd.com",47],["xxxtubezoo.com",48],["zooredtube.com",48],["uii.io",49],["megacams.me",51],["rlslog.net",51],["porndoe.com",52],["acienciasgalilei.com",54],["playrust.io",55],["payskip.org",56],["short-url.link",57],["tubedupe.com",58],["mcrypto.club",59],["fatgirlskinny.net",60],["polska-ie.com",60],["windowsmatters.com",60],["canaltdt.es",61],["masbrooo.com",61],["2ndrun.tv",61],["oncehelp.com",62],["curto.win",62],["smallseotools.com",63],["macwelt.de",65],["pcwelt.de",65],["capital.de",65],["geo.de",65],["allmomsex.com",66],["allnewindianporn.com",66],["analxxxvideo.com",66],["animalextremesex.com",66],["anime3d.xyz",66],["animefuckmovies.com",66],["animepornfilm.com",66],["animesexbar.com",66],["animesexclip.com",66],["animexxxsex.com",66],["animexxxfilms.com",66],["anysex.club",66],["apetube.asia",66],["asianfuckmovies.com",66],["asianfucktube.com",66],["asianporn.sexy",66],["asiansexcilps.com",66],["beeg.fund",66],["beegvideoz.com",66],["bestasiansex.pro",66],["bravotube.asia",66],["brutalanimalsfuck.com",66],["candyteenporn.com",66],["daddyfuckmovies.com",66],["desifuckonline.com",66],["exclusiveasianporn.com",66],["exteenporn.com",66],["fantasticporn.net",66],["fantasticyoungporn.com",66],["fineasiansex.com",66],["firstasianpussy.com",66],["freeindiansextube.com",66],["freepornasians.com",66],["freerealvideo.com",66],["fuck-beeg.com",66],["fuck-xnxx.com",66],["fuckasian.pro",66],["fuckfuq.com",66],["fuckundies.com",66],["gojapaneseporn.com",66],["golderotica.com",66],["goodyoungsex.com",66],["goyoungporn.com",66],["hardxxxmoms.com",66],["hdvintagetube.com",66],["hentaiporn.me",66],["hentaisexfilms.com",66],["hentaisexuality.com",66],["hot-teens-movies.mobi",66],["hotanimepornvideos.com",66],["hotanimevideos.com",66],["hotasianpussysex.com",66],["hotjapaneseshows.com",66],["hotmaturetube.com",66],["hotmilfs.pro",66],["hotorientalporn.com",66],["hotpornyoung.com",66],["hotxxxjapanese.com",66],["hotxxxpussy.com",66],["indiafree.net",66],["indianpornvideo.online",66],["japanpornclip.com",66],["japanesetube.video",66],["japansex.me",66],["japanesexxxporn.com",66],["japansporno.com",66],["japanxxx.asia",66],["japanxxxworld.com",66],["keezmovies.surf",66],["lingeriefuckvideo.com",66],["liveanimalporn.zooo.club",66],["madhentaitube.com",66],["megahentaitube.com",66],["megajapanesesex.com",66],["megajapantube.com",66],["milfxxxpussy.com",66],["momsextube.pro",66],["momxxxass.com",66],["monkeyanimalporn.com",66],["moviexxx.mobi",66],["newanimeporn.com",66],["newjapanesexxx.com",66],["nicematureporn.com",66],["nudeplayboygirls.com",66],["openxxxporn.com",66],["originalindianporn.com",66],["originalteentube.com",66],["pig-fuck.com",66],["plainasianporn.com",66],["popularasianxxx.com",66],["pornanimetube.com",66],["pornasians.pro",66],["pornhat.asia",66],["pornheed.online",66],["pornjapanesesex.com",66],["pornomovies.asia",66],["pornvintage.tv",66],["primeanimesex.com",66],["realjapansex.com",66],["realmomsex.com",66],["redsexhub.com",66],["retroporn.world",66],["retrosexfilms.com",66],["sex-free-movies.com",66],["sexanimesex.com",66],["sexanimetube.com",66],["sexjapantube.com",66],["sexmomvideos.com",66],["sexteenxxxtube.com",66],["sexxxanimal.com",66],["sexyoungtube.com",66],["sexyvintageporn.com",66],["sopornmovies.com",66],["spicyvintageporn.com",66],["sunporno.club",66],["tabooanime.club",66],["teenextrem.com",66],["teenfucksex.com",66],["teenhost.net",66],["teensexass.com",66],["tnaflix.asia",66],["totalfuckmovies.com",66],["totalmaturefuck.com",66],["txxx.asia",66],["voyeurpornsex.com",66],["warmteensex.com",66],["wetasiancreampie.com",66],["wildhentaitube.com",66],["wowyoungsex.com",66],["xhamster-art.com",66],["xmovie.pro",66],["xnudevideos.com",66],["xnxxjapon.com",66],["xpics.me",66],["xvide.me",66],["xxxanimefuck.com",66],["xxxanimevideos.com",66],["xxxanimemovies.com",66],["xxxhentaimovies.com",66],["xxxhothub.com",66],["xxxjapaneseporntube.com",66],["xxxlargeporn.com",66],["xxxmomz.com",66],["xxxpornmilf.com",66],["xxxpussyclips.com",66],["xxxpussysextube.com",66],["xxxretrofuck.com",66],["xxxsex.pro",66],["xxxsexyjapanese.com",66],["xxxteenyporn.com",66],["xxxvideo.asia",66],["xxxvideos.ink",66],["xxxyoungtv.com",66],["youjizzz.club",66],["youngpussyfuck.com",66],["bayimg.com",67],["celeb.gate.cc",68],["kinoger.re",69],["okrzone.com",69],["masterplayer.xyz",71],["pussy-hub.com",71],["porndex.com",72],["compucalitv.com",73],["diariodenavarra.es",75],["duden.de",77],["pennlive.com",79],["beautypageants.indiatimes.com",80],["01fmovies.com",81],["lnk2.cc",83],["fullhdxxx.com",84],["luscious.net",[84,156]],["classicpornbest.com",84],["xstory-fr.com",84],["1youngteenporn.com",84],["www-daftarharga.blogspot.com",[84,197]],["miraculous.to",[84,203]],["vtube.to",84],["gosexpod.com",85],["otakukan.com",86],["xcafe.com",87],["pornfd.com",87],["venusarchives.com",87],["imagehaha.com",88],["imagenpic.com",88],["imageshimage.com",88],["imagetwist.com",88],["k1nk.co",89],["watchasians.cc",89],["alexsports.xyz",89],["lulustream.com",89],["luluvdo.com",89],["web.de",90],["news18.com",91],["thelanb.com",92],["dropmms.com",92],["softwaredescargas.com",93],["cracking-dz.com",94],["anitube.ninja",95],["gazzetta.it",96],["port.hu",98],["dziennikbaltycki.pl",99],["dzienniklodzki.pl",99],["dziennikpolski24.pl",99],["dziennikzachodni.pl",99],["echodnia.eu",99],["expressbydgoski.pl",99],["expressilustrowany.pl",99],["gazetakrakowska.pl",99],["gazetalubuska.pl",99],["gazetawroclawska.pl",99],["gk24.pl",99],["gloswielkopolski.pl",99],["gol24.pl",99],["gp24.pl",99],["gra.pl",99],["gs24.pl",99],["kurierlubelski.pl",99],["motofakty.pl",99],["naszemiasto.pl",99],["nowiny24.pl",99],["nowosci.com.pl",99],["nto.pl",99],["polskatimes.pl",99],["pomorska.pl",99],["poranny.pl",99],["sportowy24.pl",99],["strefaagro.pl",99],["strefabiznesu.pl",99],["stronakobiet.pl",99],["telemagazyn.pl",99],["to.com.pl",99],["wspolczesna.pl",99],["course9x.com",99],["courseclub.me",99],["azrom.net",99],["alttyab.net",99],["esopress.com",99],["nesiaku.my.id",99],["onemanhua.com",100],["freeindianporn.mobi",100],["dr-farfar.com",101],["boyfriendtv.com",102],["brandstofprijzen.info",103],["netfuck.net",104],["blog24.me",[104,151]],["kisahdunia.com",104],["javsex.to",104],["nulljungle.com",104],["oyuncusoruyor.com",104],["pbarecap.ph",104],["sourds.net",104],["teknobalta.com",104],["tvinternetowa.info",104],["sqlserveregitimleri.com",104],["tutcourse.com",104],["readytechflip.com",104],["novinhastop.com",104],["warddogs.com",104],["dvdgayporn.com",104],["iimanga.com",104],["tinhocdongthap.com",104],["tremamnon.com",104],["423down.com",104],["brizzynovel.com",104],["jugomobile.com",104],["freecodezilla.net",104],["animekhor.xyz",104],["iconmonstr.com",104],["gay-tubes.cc",104],["rbxscripts.net",104],["comentariodetexto.com",104],["wordpredia.com",104],["livsavr.co",104],["allfaucet.xyz",[104,151]],["titbytz.tk",104],["replica-watch.info",104],["alludemycourses.com",104],["kayifamilytv.com",104],["iir.ai",105],["gameofporn.com",107],["qpython.club",108],["antifake-funko.fr",108],["dktechnicalmate.com",108],["recipahi.com",108],["e9china.net",109],["ontools.net",109],["marketbeat.com",110],["hentaipornpics.net",111],["apps2app.com",112],["alliptvlinks.com",113],["smashyplayer.top",114],["xvideos.com",115],["xvideos2.com",115],["homemoviestube.com",116],["sexseeimage.com",116],["jpopsingles.eu",118],["aipebel.com",118],["azmath.info",118],["downfile.site",118],["downphanmem.com",118],["expertvn.com",118],["memangbau.com",118],["trangchu.news",118],["aztravels.net",118],["ielts-isa.edu.vn",118],["techedubyte.com",[118,264]],["tubereader.me",119],["repretel.com",119],["dagensnytt.com",120],["mrproblogger.com",120],["themezon.net",120],["gfx-station.com",121],["bitzite.com",[121,140,151]],["historyofroyalwomen.com",122],["davescomputertips.com",122],["ukchat.co.uk",123],["hivelr.com",124],["skidrowcodex.net",125],["takimag.com",126],["digi.no",127],["th.gl",128],["scimagojr.com",129],["haxina.com",129],["cryptofenz.xyz",129],["twi-fans.com",130],["learn-cpp.org",131],["terashare.co",132],["pornwex.tv",133],["smithsonianmag.com",134],["homesports.net",135],["cineb.rs",136],["rawkuma.com",[136,194]],["moviesjoyhd.to",136],["realmoasis.com",137],["javfc2.xyz",138],["gobankingrates.com",139],["buzzheavier.com",140],["flashbang.sh",140],["trashbytes.net",140],["hiddenleaf.to",141],["ronorp.net",142],["videovak.com",145],["gamerxyt.com",146],["a-lohas.jp",147],["upshrink.com",148],["fitdynamos.com",150],["ohionowcast.info",151],["wiour.com",151],["appsbull.com",151],["diudemy.com",151],["maqal360.com",151],["bitcotasks.com",151],["videolyrics.in",151],["manofadan.com",151],["cempakajaya.com",151],["tagecoin.com",151],["doge25.in",151],["king-ptcs.com",151],["naijafav.top",151],["ourcoincash.xyz",151],["sh.techsamir.com",151],["claimcoins.site",151],["cryptosh.pro",151],["coinsrev.com",151],["go.freetrx.fun",151],["eftacrypto.com",151],["fescrypto.com",151],["earnhub.net",151],["kiddyshort.com",151],["tronxminer.com",151],["homeairquality.org",152],["cety.app",[153,154]],["exego.app",153],["cutlink.net",153],["cutsy.net",153],["cutyurls.com",153],["cutty.app",153],["cutnet.net",153],["hentaicloud.com",154],["justin.mp3quack.lol",154],["soft98.ir",[154,227]],["adcrypto.net",155],["admediaflex.com",155],["aduzz.com",155],["bitcrypto.info",155],["cdrab.com",155],["datacheap.io",155],["hbz.us",155],["savego.org",155],["owsafe.com",155],["sportweb.info",155],["aiimgvlog.fun",156],["6indianporn.com",156],["amateurebonypics.com",156],["amateuryoungpics.com",156],["cinemabg.net",156],["coomer.su",156],["desimmshd.com",156],["frauporno.com",156],["givemeaporn.com",156],["hitomi.la",156],["jav-asia.top",156],["javf.net",156],["javfull.net",156],["javideo.net",156],["kemono.su",156],["kr18plus.com",156],["pilibook.com",156],["pornborne.com",156],["porngrey.com",156],["qqxnxx.com",156],["sexvideos.host",156],["submilf.com",156],["subtaboo.com",156],["tktube.com",156],["xfrenchies.com",156],["moderngyan.com",157],["sattakingcharts.in",157],["freshbhojpuri.com",157],["bgmi32bitapk.in",157],["bankshiksha.in",157],["earn.mpscstudyhub.com",157],["earn.quotesopia.com",157],["money.quotesopia.com",157],["best-mobilegames.com",157],["learn.moderngyan.com",157],["bharatsarkarijobalert.com",157],["quotesopia.com",157],["creditsgoal.com",157],["coingraph.us",158],["momo-net.com",158],["maxgaming.fi",158],["cybercityhelp.in",159],["travel.vebma.com",160],["cloud.majalahhewan.com",160],["crm.cekresi.me",160],["ai.tempatwisata.pro",160],["pinloker.com",160],["sekilastekno.com",160],["link.paid4link.com",161],["vulture.com",162],["megaplayer.bokracdn.run",163],["hentaistream.com",164],["siteunblocked.info",165],["larvelfaucet.com",166],["feyorra.top",166],["claimtrx.com",166],["moviesyug.net",167],["w4files.ws",167],["parispi.net",168],["paperzonevn.com",169],["dailyvideoreports.net",170],["lewd.ninja",171],["systemnews24.com",172],["incestvidz.com",173],["niusdiario.es",174],["playporngames.com",175],["movi.pk",[176,179]],["cutesexyteengirls.com",178],["0dramacool.net",179],["185.53.88.104",179],["185.53.88.204",179],["185.53.88.15",179],["123movies4k.net",179],["1rowsports.com",179],["4share-mp3.net",179],["9animetv.to",179],["720pstream.me",179],["aagmaal.com",179],["abysscdn.com",179],["ajkalerbarta.com",179],["akstream.xyz",179],["androidapks.biz",179],["androidsite.net",179],["animeonlinefree.org",179],["animesite.net",179],["animespank.com",179],["aniworld.to",179],["apkmody.io",179],["appsfree4u.com",179],["audioz.download",179],["awafim.tv",179],["bdnewszh.com",179],["beastlyprints.com",179],["bengalisite.com",179],["bestfullmoviesinhd.org",179],["betteranime.net",179],["blacktiesports.live",179],["buffsports.stream",179],["ch-play.com",179],["clickforhire.com",179],["cloudy.pk",179],["computercrack.com",179],["coolcast2.com",179],["crackedsoftware.biz",179],["crackfree.org",179],["cracksite.info",179],["cryptoblog24.info",179],["cuatrolatastv.blogspot.com",179],["cydiasources.net",179],["decmelfot.xyz",179],["dirproxy.com",179],["dopebox.to",179],["downloadapk.info",179],["downloadapps.info",179],["downloadgames.info",179],["downloadmusic.info",179],["downloadsite.org",179],["downloadwella.com",179],["ebooksite.org",179],["educationtips213.blogspot.com",179],["egyup.live",179],["elgoles.pro",179],["embed.meomeo.pw",179],["embed.scdn.to",179],["emulatorsite.com",179],["essaysharkwriting.club",179],["exploreera.net",179],["extrafreetv.com",179],["fakedetail.com",179],["fclecteur.com",179],["files.im",179],["flexyhit.com",179],["fmoviefree.net",179],["fmovies24.com",179],["footyhunter3.xyz",179],["freeflix.info",179],["freemoviesu4.com",179],["freeplayervideo.com",179],["freesoccer.net",179],["fseries.org",179],["gamefast.org",179],["gamesite.info",179],["gettapeads.com",179],["gmanga.me",179],["gocast123.me",179],["gogohd.net",179],["gogoplay5.com",179],["gooplay.net",179],["gostreamon.net",179],["happy2hub.org",179],["harimanga.com",179],["healthnewsreel.com",179],["hexupload.net",179],["hinatasoul.com",179],["hindisite.net",179],["holymanga.net",179],["hxfile.co",179],["isosite.org",179],["iv-soft.com",179],["januflix.expert",179],["jewelry.com.my",179],["johnwardflighttraining.com",179],["kabarportal.com",179],["kstorymedia.com",179],["la123movies.org",179],["lespassionsdechinouk.com",179],["lilymanga.net",179],["linksdegrupos.com.br",179],["linkz.wiki",179],["livestreamtv.pk",179],["macsite.info",179],["mangapt.com",179],["mangasite.org",179],["manhuascan.com",179],["megafilmeshdseries.com",179],["megamovies.org",179],["membed.net",179],["moddroid.com",179],["moviefree2.com",179],["movies-watch.com.pk",179],["moviesite.app",179],["moviesonline.fm",179],["moviesx.org",179],["msmoviesbd.com",179],["musicsite.biz",179],["myfernweh.com",179],["myviid.com",179],["nazarickol.com",179],["noob4cast.com",179],["nsw2u.com",[179,275]],["oko.sh",179],["olympicstreams.me",179],["orangeink.pk",179],["owllink.net",179],["pahaplayers.click",179],["patchsite.net",179],["pdfsite.net",179],["play1002.com",179],["player-cdn.com",179],["productkeysite.com",179],["projectfreetv.one",179],["romsite.org",179],["rufiguta.com",179],["rytmp3.io",179],["send.cm",179],["seriesite.net",179],["seriezloaded.com.ng",179],["serijehaha.com",179],["shrugemojis.com",179],["siteapk.net",179],["siteflix.org",179],["sitegames.net",179],["sitekeys.net",179],["sitepdf.com",179],["sitetorrent.com",179],["softwaresite.net",179],["sportbar.live",179],["sportkart1.xyz",179],["ssyoutube.com",179],["stardima.com",179],["stream4free.live",179],["superapk.org",179],["supermovies.org",179],["tainio-mania.online",179],["talaba.su",179],["tamilguns.org",179],["tatabrada.tv",179],["techtrendmakers.com",179],["theflixer.tv",179],["thememypc.net",179],["thetechzone.online",179],["thripy.com",179],["tonnestreamz.xyz",179],["travelplanspro.com",179],["turcasmania.com",179],["tusfiles.com",179],["tvonlinesports.com",179],["ultramovies.org",179],["uploadbank.com",179],["urdubolo.pk",179],["vidspeeds.com",179],["warezsite.net",179],["watchmovies2.com",179],["watchmoviesforfree.org",179],["watchofree.com",179],["watchsite.net",179],["watchsouthpark.tv",179],["watchtvch.club",179],["web.livecricket.is",179],["webseries.club",179],["worldcupstream.pm",179],["y2mate.com",179],["youapk.net",179],["youtube4kdownloader.com",179],["yts-subs.com",179],["haho.moe",180],["nicy-spicy.pw",181],["novelmultiverse.com",182],["mylegalporno.com",183],["embedsports.me",184],["embedstream.me",184],["jumbtv.com",184],["reliabletv.me",184],["videowood.tv",187],["thecut.com",188],["novelism.jp",189],["alphapolis.co.jp",190],["game3rb.com",191],["javhub.net",191],["thotvids.com",192],["berklee.edu",193],["imeteo.sk",195],["youtubemp3donusturucu.net",196],["surfsees.com",198],["vivo.st",[199,200]],["alueviesti.fi",202],["kiuruvesilehti.fi",202],["lempaala.ideapark.fi",202],["olutposti.fi",202],["urjalansanomat.fi",202],["tainhanhvn.com",204],["titantv.com",205],["3cinfo.net",206],["transportationlies.org",207],["camarchive.tv",208],["crownimg.com",208],["freejav.guru",208],["hentai2read.com",208],["icyporno.com",208],["illink.net",208],["javtiful.com",208],["m-hentai.net",208],["pornblade.com",208],["pornfelix.com",208],["pornxxxxtube.net",208],["redwap.me",208],["redwap2.com",208],["redwap3.com",208],["sunporno.com",208],["tubxporn.xxx",208],["ver-comics-porno.com",208],["ver-mangas-porno.com",208],["xanimeporn.com",208],["xxxvideohd.net",208],["zetporn.com",208],["simpcity.su",209],["cocomanga.com",210],["sampledrive.in",211],["sportnews.to",211],["soccershoes.blog",211],["mcleaks.net",212],["explorecams.com",212],["minecraft.buzz",212],["chillx.top",213],["playerx.stream",213],["m.liputan6.com",215],["stardewids.com",[215,239]],["ingles.com",216],["spanishdict.com",216],["surfline.com",217],["rureka.com",218],["bunkr.is",219],["amateur8.com",220],["freeporn8.com",220],["maturetubehere.com",220],["embedo.co",221],["corriere.it",222],["oggi.it",222],["2the.space",223],["file.gocmod.com",224],["apkcombo.com",225],["sponsorhunter.com",226],["novelssites.com",228],["torrentmac.net",229],["udvl.com",230],["moviezaddiction.icu",231],["apimate.net",232],["dlpanda.com",233],["socialmediagirls.com",234],["ecamrips.com",234],["showcamrips.com",234],["einrichtungsbeispiele.de",235],["weadown.com",236],["molotov.tv",237],["freecoursesonline.me",238],["adelsfun.com",238],["advantien.com",238],["bailbondsfinder.com",238],["bigpiecreative.com",238],["childrenslibrarylady.com",238],["classifarms.com",238],["comtasq.ca",238],["crone.es",238],["ctrmarketingsolutions.com",238],["dropnudes.com",238],["ftuapps.dev",238],["genzsport.com",238],["ghscanner.com",238],["grsprotection.com",238],["gruporafa.com.br",238],["inmatefindcalifornia.com",238],["inmatesearchidaho.com",238],["itsonsitetv.com",238],["mfmfinancials.com",238],["myproplugins.com",238],["onehack.us",238],["ovester.com",238],["paste.bin.sx",238],["privatenudes.com",238],["renoconcrete.ca",238],["richieashbeck.com",238],["sat.technology",238],["short1ink.com",238],["stpm.co.uk",238],["wegotcookies.co",238],["mathcrave.com",238],["marinetraffic.live",238],["commands.gg",239],["smgplaza.com",240],["emturbovid.com",241],["findjav.com",241],["javggvideo.xyz",241],["mmtv01.xyz",241],["stbturbo.xyz",241],["streamsilk.com",241],["freepik.com",242],["diyphotography.net",244],["bitchesgirls.com",245],["shopforex.online",246],["hiraethtranslation.com",247],["programmingeeksclub.com",248],["easymc.io",249],["diendancauduong.com",250],["androidadult.com",251],["parentcircle.com",252],["h-game18.xyz",253],["wheelofgold.com",254],["shortlinks.tech",255],["skill4ltu.eu",257],["lifestyle.bg",258],["news.bg",258],["topsport.bg",258],["webcafe.bg",258],["freepikdownloader.com",259],["freepasses.org",260],["iusedtobeaboss.com",261],["androidpolice.com",262],["cbr.com",262],["gamerant.com",262],["howtogeek.com",262],["thegamer.com",262],["blogtruyenmoi.com",263],["igay69.com",265],["graphicget.com",266],["qiwi.gg",[267,268]],["sonixgvn.net",269],["netcine2.la",270],["idnes.cz",[271,272]],["cbc.ca",273],["japscan.lol",274]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,55]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["adyou",17],["fxporn69",20],["rexporn",24],["movies07",24],["pornocomics",24],["pornomoll",28],["gsurl",29],["freecoursesonline",30],["lordpremium",30],["todovieneok",30],["novablogitalia",30],["anisubindo",30],["stream4free",30],["btvsports",30],["mimaletadepeliculas",31],["burningseries",32],["dz4soft",33],["yoututosjeff",33],["ebookmed",33],["lanjutkeun",33],["novelasesp",33],["singingdalong",33],["doujindesu",33],["xmovies8",36],["mega-dvdrip",43],["peliculas-dvdrip",43],["desbloqueador",44],["newpelis",[45,53]],["pelix",[45,53]],["allcalidad",[45,208]],["khatrimaza",45],["camwhores",46],["camwhorestv",46],["uproxy",46],["nekopoi",50],["mirrorace",59],["mixdrp",64],["asiansex",66],["japanfuck",66],["japanporn",66],["teensex",66],["vintagetube",66],["xxxmovies",66],["zooqle",70],["hdfull",74],["mangamanga",76],["streameast",78],["thestreameast",78],["vev",82],["vidop",82],["1337x",84],["x1337x",84],["zone-telechargement",84],["megalink",89],["gmx",90],["mega1080p",95],["9hentai",97],["gaypornhdfree",104],["cinemakottaga",104],["privatemoviez",104],["apkmaven",104],["popcornstream",106],["readcomiconline",117],["azsoft",118],["gdflix",143],["a1movies",144],["fc-lc",149],["nuvid",154],["pornktube",156],["watchseries",156],["milfnut",158],["pagalmovies",167],["7starhd",167],["jalshamoviez",167],["9xupload",167],["bdupload",167],["desiupload",167],["rdxhd1",167],["moviessources",177],["0gomovie",179],["0gomovies",179],["123moviefree",179],["1kmovies",179],["1madrasdub",179],["1primewire",179],["2embed",179],["2madrasdub",179],["2umovies",179],["4anime",179],["adblockplustape",179],["altadefinizione01",179],["atomixhq",179],["beinmatch",179],["brmovies",179],["cima4u",179],["clicknupload",179],["cmovies",179],["cricfree",179],["crichd",179],["databasegdriveplayer",179],["dood",179],["f1stream",179],["faselhd",179],["fbstream",179],["filemoon",179],["filepress",[179,243]],["filmlinks4u",179],["filmpertutti",179],["filmyzilla",179],["fmovies",179],["french-stream",179],["fzlink",179],["gofilms4u",179],["gogoanime",179],["gomoviz",179],["hdmoviefair",179],["hdmovies4u",179],["hdmovies50",179],["hdmoviesfair",179],["hh3dhay",179],["hindilinks4u",179],["hotmasti",179],["hurawatch",179],["klmanga",179],["klubsports",179],["libertestreamvf",179],["livetvon",179],["manga1000",179],["manga1001",179],["mangaraw",179],["mangarawjp",179],["mlbstream",179],["motogpstream",179],["movierulz",179],["movies123",179],["movies2watch",179],["moviesden",179],["moviezaddiction",179],["myflixer",179],["nbastream",179],["netcine",179],["nflstream",179],["nhlstream",179],["onlinewatchmoviespk",179],["pctfenix",179],["pctnew",179],["pksmovies",179],["plyjam",179],["plylive",179],["pogolinks",179],["popcorntime",179],["poscitech",179],["prmovies",179],["rugbystreams",179],["shahed4u",179],["sflix",179],["sitesunblocked",179],["solarmovies",179],["sportcast",179],["sportskart",179],["sports-stream",179],["streaming-french",179],["streamers",179],["streamingcommunity",179],["strikeout",179],["t20cup",179],["tennisstreams",179],["torrentdosfilmes",179],["toonanime",179],["tvply",179],["ufcstream",179],["uptomega",179],["uqload",179],["vudeo",179],["vidoo",179],["vipbox",179],["vipboxtv",179],["vipleague",179],["viprow",179],["yesmovies",179],["yomovies",179],["yomovies1",179],["yt2mp3s",179],["kat",179],["katbay",179],["kickass",179],["kickasshydra",179],["kickasskat",179],["kickass2",179],["kickasstorrents",179],["kat2",179],["kattracker",179],["thekat",179],["thekickass",179],["kickassz",179],["kickasstorrents2",179],["topkickass",179],["kickassgo",179],["kkickass",179],["kkat",179],["kickasst",179],["kick4ss",179],["guardaserie",185],["cine-calidad",186],["videovard",201],["gntai",208],["grantorrent",208],["mejortorrent",208],["mejortorrento",208],["mejortorrents",208],["mejortorrents1",208],["mejortorrentt",208],["shineads",211],["bg-gledai",238],["gledaitv",238],["motchill",256]]);

const exceptionsMap = new Map([["mentor.duden.de",[77]],["forum.soft98.ir",[154,227]]]);

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
    runAt(( ) => {
        proxyApplyFn('EventTarget.prototype.addEventListener', function(context) {
            const { callArgs, thisArg } = context;
            let t, h;
            try {
                t = String(callArgs[0]);
                if ( typeof callArgs[1] === 'function' ) {
                    h = String(safe.Function_toString(callArgs[1]));
                } else if ( typeof callArgs[1] === 'object' && callArgs[1] !== null ) {
                    if ( typeof callArgs[1].handleEvent === 'function' ) {
                        h = String(safe.Function_toString(callArgs[1].handleEvent));
                    }
                } else {
                    h = String(callArgs[1]);
                }
            } catch(ex) {
            }
            if ( type === '' && pattern === '' ) {
                safe.uboLog(logPrefix, `Called: ${t}\n${h}\n${elementDetails(thisArg)}`);
            } else if ( shouldPrevent(thisArg, t, h) ) {
                return safe.uboLog(logPrefix, `Prevented: ${t}\n${h}\n${elementDetails(thisArg)}`);
            }
            return context.reflect();
        });
    }, extraArgs.runAt);
}

function proxyApplyFn(
    target = '',
    handler = ''
) {
    let context = globalThis;
    let prop = target;
    for (;;) {
        const pos = prop.indexOf('.');
        if ( pos === -1 ) { break; }
        context = context[prop.slice(0, pos)];
        if ( context instanceof Object === false ) { return; }
        prop = prop.slice(pos+1);
    }
    const fn = context[prop];
    if ( typeof fn !== 'function' ) { return; }
    if ( proxyApplyFn.CtorContext === undefined ) {
        proxyApplyFn.ctorContexts = [];
        proxyApplyFn.CtorContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, callArgs) {
                this.callFn = callFn;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.construct(this.callFn, this.callArgs);
                this.callFn = this.callArgs = undefined;
                proxyApplyFn.ctorContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.ctorContexts.length !== 0
                    ? proxyApplyFn.ctorContexts.pop().init(...args)
                    : new proxyApplyFn.CtorContext(...args);
            }
        };
        proxyApplyFn.applyContexts = [];
        proxyApplyFn.ApplyContext = class {
            constructor(...args) {
                this.init(...args);
            }
            init(callFn, thisArg, callArgs) {
                this.callFn = callFn;
                this.thisArg = thisArg;
                this.callArgs = callArgs;
                return this;
            }
            reflect() {
                const r = Reflect.apply(this.callFn, this.thisArg, this.callArgs);
                this.callFn = this.thisArg = this.callArgs = undefined;
                proxyApplyFn.applyContexts.push(this);
                return r;
            }
            static factory(...args) {
                return proxyApplyFn.applyContexts.length !== 0
                    ? proxyApplyFn.applyContexts.pop().init(...args)
                    : new proxyApplyFn.ApplyContext(...args);
            }
        };
    }
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    const proxyDetails = {
        apply(target, thisArg, args) {
            return handler(proxyApplyFn.ApplyContext.factory(target, thisArg, args));
        },
        get(target, prop) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop);
        },
    };
    if ( fn.prototype?.constructor === fn ) {
        proxyDetails.construct = function(target, args) {
            return handler(proxyApplyFn.CtorContext.factory(target, args));
        };
    }
    context[prop] = new Proxy(fn, proxyDetails);
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

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.canDebug && details.debug;
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
    try { addEventListenerDefuser(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

uBOL_addEventListenerDefuser();

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
