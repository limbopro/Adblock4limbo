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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["click","_blank"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","document.createElement"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["DOMContentLoaded","location.href"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["DOMContentLoaded","history.go"],["load","puHref"],["click","Ads"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["click","open"],["load","bypass"],["","popMagic"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["","dtnoppu"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["blur"],["DOMContentLoaded","clientHeight"],["load","error-report.com"],["click","window.focus"],["contextmenu","preventDefault"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","form.submit"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["DOMContentLoaded","/Parfum|China|\\+'oa|=>\\s*\\{\\s*var|'ct'/"],["DOMContentLoaded","/^.{300,400}$/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["ancensored.com",7],["mp3fiber.com",[7,30]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,157]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["shemalez.com",18],["tubepornclassic.com",18],["gotporn.com",19],["freepornrocks.com",19],["tvhai.org",19],["realgfporn.com",[20,21]],["thisvid.com",21],["xvideos-downloader.net",21],["imgspice.com",22],["vikiporn.com",23],["tnaflix.com",23],["hentai2w.com",[23,209]],["yourlust.com",23],["hotpornfile.org",23],["watchfreexxx.net",23],["vintageporntubes.com",23],["angelgals.com",23],["babesexy.com",23],["porndaa.com",23],["ganstamovies.com",23],["youngleak.com",23],["porndollz.com",23],["xnxxvideo.pro",23],["xvideosxporn.com",23],["filmpornofrancais.fr",23],["pictoa.com",[23,45]],["tubator.com",23],["adultasianporn.com",23],["nsfwmonster.com",23],["girlsofdesire.org",23],["gaytail.com",23],["fetish-bb.com",23],["rumporn.com",23],["soyoungteens.com",23],["zubby.com",23],["lesbian8.com",23],["gayforfans.com",23],["reifporn.de",23],["javtsunami.com",23],["18tube.sex",23],["xxxextreme.org",23],["amateurs-fuck.com",23],["sex-amateur-clips.com",23],["hentaiworld.tv",23],["dads-banging-teens.com",23],["home-xxx-videos.com",23],["mature-chicks.com",23],["teens-fucking-matures.com",23],["hqbang.com",23],["darknessporn.com",23],["familyporner.com",23],["freepublicporn.com",23],["pisshamster.com",23],["punishworld.com",23],["xanimu.com",23],["pornhd.com",24],["cnnamador.com",[24,34]],["cle0desktop.blogspot.com",24],["turkanime.co",24],["camclips.tv",[24,46]],["blackpornhq.com",24],["xsexpics.com",24],["ulsex.net",24],["wannafreeporn.com",24],["ytube2dl.com",24],["multiup.us",24],["protege-torrent.com",24],["pussyspace.com",[25,26]],["pussyspace.net",[25,26]],["empflix.com",27],["cpmlink.net",28],["bdsmstreak.com",28],["cutpaid.com",28],["pornforrelax.com",28],["fatwhitebutt.com",28],["short.pe",29],["totaldebrid.org",30],["neko-miku.com",30],["elsfile.org",30],["venstrike.jimdofree.com",30],["schrauben-normen.de",30],["avengerinator.blogspot.com",30],["link-to.net",30],["hanimesubth.com",30],["gsmturkey.net",30],["adshrink.it",30],["presentation-ppt.com",30],["mangacanblog.com",30],["pekalongan-cits.blogspot.com",30],["4tymode.win",30],["eurotruck2.com.br",30],["tiroalpaloes.com",30],["tiroalpaloes.net",30],["linkvertise.com",30],["reifenrechner.at",30],["tire-size-calculator.info",30],["linuxsecurity.com",30],["itsguider.com",30],["cotravinh.blogspot.com",30],["itudong.com",30],["shortx.net",30],["lecturel.com",30],["bakai.org",30],["nar.k-ba.net",30],["tiroalpalo.org",30],["bs.to",32],["efukt.com",32],["generacionretro.net",33],["nuevos-mu.ucoz.com",33],["micloudfiles.com",33],["mimaletamusical.blogspot.com",33],["visionias.net",33],["b3infoarena.in",33],["lurdchinexgist.blogspot.com",33],["thefreedommatrix.blogspot.com",33],["hentai-vl.blogspot.com",33],["projetomotog.blogspot.com",33],["ktmx.pro",33],["lirik3satu.blogspot.com",33],["marketmovers.it",33],["pharmaguideline.com",33],["safemaru.blogspot.com",33],["mixloads.com",33],["mangaromance.eu",33],["interssh.com",33],["freesoftpdfdownload.blogspot.com",33],["cirokun.blogspot.com",33],["myadslink.com",33],["blackavelic.com",33],["server.satunivers.tv",33],["eg-akw.com",33],["xn--mgba7fjn.cc",33],["flashingjungle.com",34],["ma-x.org",35],["lavozdegalicia.es",35],["ddwloclawek.pl",35],["ki24.info",35],["xmovies08.org",37],["globaldjmix.com",38],["zazzybabes.com",39],["haaretz.co.il",40],["haaretz.com",40],["slate.com",41],["megalinks.info",42],["megapastes.com",42],["mega-mkv.com",[42,43]],["mkv-pastes.com",42],["zpaste.net",42],["zlpaste.net",42],["9xlinks.site",42],["zona-leros.net",43],["acortarm.xyz",44],["cine.to",[45,215]],["kissasia.cc",45],["digjav.com",46],["videoszoofiliahd.com",47],["xxxtubezoo.com",48],["zooredtube.com",48],["uii.io",49],["megacams.me",51],["rlslog.net",51],["porndoe.com",52],["acienciasgalilei.com",54],["playrust.io",55],["payskip.org",56],["short-url.link",57],["tubedupe.com",58],["mcrypto.club",59],["fatgirlskinny.net",60],["polska-ie.com",60],["windowsmatters.com",60],["canaltdt.es",61],["masbrooo.com",61],["2ndrun.tv",61],["oncehelp.com",62],["curto.win",62],["smallseotools.com",63],["macwelt.de",65],["pcwelt.de",65],["capital.de",65],["geo.de",65],["allmomsex.com",66],["allnewindianporn.com",66],["analxxxvideo.com",66],["animalextremesex.com",66],["anime3d.xyz",66],["animefuckmovies.com",66],["animepornfilm.com",66],["animesexbar.com",66],["animesexclip.com",66],["animexxxsex.com",66],["animexxxfilms.com",66],["anysex.club",66],["apetube.asia",66],["asianfuckmovies.com",66],["asianfucktube.com",66],["asianporn.sexy",66],["asiansexcilps.com",66],["beeg.fund",66],["beegvideoz.com",66],["bestasiansex.pro",66],["bravotube.asia",66],["brutalanimalsfuck.com",66],["candyteenporn.com",66],["daddyfuckmovies.com",66],["desifuckonline.com",66],["exclusiveasianporn.com",66],["exteenporn.com",66],["fantasticporn.net",66],["fantasticyoungporn.com",66],["fineasiansex.com",66],["firstasianpussy.com",66],["freeindiansextube.com",66],["freepornasians.com",66],["freerealvideo.com",66],["fuck-beeg.com",66],["fuck-xnxx.com",66],["fuckasian.pro",66],["fuckfuq.com",66],["fuckundies.com",66],["gojapaneseporn.com",66],["golderotica.com",66],["goodyoungsex.com",66],["goyoungporn.com",66],["hardxxxmoms.com",66],["hdvintagetube.com",66],["hentaiporn.me",66],["hentaisexfilms.com",66],["hentaisexuality.com",66],["hot-teens-movies.mobi",66],["hotanimepornvideos.com",66],["hotanimevideos.com",66],["hotasianpussysex.com",66],["hotjapaneseshows.com",66],["hotmaturetube.com",66],["hotmilfs.pro",66],["hotorientalporn.com",66],["hotpornyoung.com",66],["hotxxxjapanese.com",66],["hotxxxpussy.com",66],["indiafree.net",66],["indianpornvideo.online",66],["japanpornclip.com",66],["japanesetube.video",66],["japansex.me",66],["japanesexxxporn.com",66],["japansporno.com",66],["japanxxx.asia",66],["japanxxxworld.com",66],["keezmovies.surf",66],["lingeriefuckvideo.com",66],["liveanimalporn.zooo.club",66],["madhentaitube.com",66],["megahentaitube.com",66],["megajapanesesex.com",66],["megajapantube.com",66],["milfxxxpussy.com",66],["momsextube.pro",66],["momxxxass.com",66],["monkeyanimalporn.com",66],["moviexxx.mobi",66],["newanimeporn.com",66],["newjapanesexxx.com",66],["nicematureporn.com",66],["nudeplayboygirls.com",66],["openxxxporn.com",66],["originalindianporn.com",66],["originalteentube.com",66],["pig-fuck.com",66],["plainasianporn.com",66],["popularasianxxx.com",66],["pornanimetube.com",66],["pornasians.pro",66],["pornhat.asia",66],["pornheed.online",66],["pornjapanesesex.com",66],["pornomovies.asia",66],["pornvintage.tv",66],["primeanimesex.com",66],["realjapansex.com",66],["realmomsex.com",66],["redsexhub.com",66],["retroporn.world",66],["retrosexfilms.com",66],["sex-free-movies.com",66],["sexanimesex.com",66],["sexanimetube.com",66],["sexjapantube.com",66],["sexmomvideos.com",66],["sexteenxxxtube.com",66],["sexxxanimal.com",66],["sexyoungtube.com",66],["sexyvintageporn.com",66],["sopornmovies.com",66],["spicyvintageporn.com",66],["sunporno.club",66],["tabooanime.club",66],["teenextrem.com",66],["teenfucksex.com",66],["teenhost.net",66],["teensexass.com",66],["tnaflix.asia",66],["totalfuckmovies.com",66],["totalmaturefuck.com",66],["txxx.asia",66],["voyeurpornsex.com",66],["warmteensex.com",66],["wetasiancreampie.com",66],["wildhentaitube.com",66],["wowyoungsex.com",66],["xhamster-art.com",66],["xmovie.pro",66],["xnudevideos.com",66],["xnxxjapon.com",66],["xpics.me",66],["xvide.me",66],["xxxanimefuck.com",66],["xxxanimevideos.com",66],["xxxanimemovies.com",66],["xxxhentaimovies.com",66],["xxxhothub.com",66],["xxxjapaneseporntube.com",66],["xxxlargeporn.com",66],["xxxmomz.com",66],["xxxpornmilf.com",66],["xxxpussyclips.com",66],["xxxpussysextube.com",66],["xxxretrofuck.com",66],["xxxsex.pro",66],["xxxsexyjapanese.com",66],["xxxteenyporn.com",66],["xxxvideo.asia",66],["xxxvideos.ink",66],["xxxyoungtv.com",66],["youjizzz.club",66],["youngpussyfuck.com",66],["bayimg.com",67],["celeb.gate.cc",68],["kinoger.re",69],["masterplayer.xyz",71],["pussy-hub.com",71],["porndex.com",72],["compucalitv.com",73],["diariodenavarra.es",75],["duden.de",77],["pennlive.com",79],["beautypageants.indiatimes.com",80],["01fmovies.com",81],["lnk2.cc",83],["fullhdxxx.com",84],["luscious.net",[84,157]],["classicpornbest.com",84],["xstory-fr.com",84],["1youngteenporn.com",84],["www-daftarharga.blogspot.com",[84,198]],["miraculous.to",[84,204]],["vtube.to",84],["gosexpod.com",85],["otakukan.com",86],["xcafe.com",87],["pornfd.com",87],["venusarchives.com",87],["imagehaha.com",88],["imagenpic.com",88],["imageshimage.com",88],["imagetwist.com",88],["k1nk.co",89],["watchasians.cc",89],["alexsports.xyz",89],["lulustream.com",89],["luluvdo.com",89],["web.de",90],["news18.com",91],["thelanb.com",92],["dropmms.com",92],["softwaredescargas.com",93],["cracking-dz.com",94],["anitube.ninja",95],["gazzetta.it",96],["port.hu",98],["dziennikbaltycki.pl",99],["dzienniklodzki.pl",99],["dziennikpolski24.pl",99],["dziennikzachodni.pl",99],["echodnia.eu",99],["expressbydgoski.pl",99],["expressilustrowany.pl",99],["gazetakrakowska.pl",99],["gazetalubuska.pl",99],["gazetawroclawska.pl",99],["gk24.pl",99],["gloswielkopolski.pl",99],["gol24.pl",99],["gp24.pl",99],["gra.pl",99],["gs24.pl",99],["kurierlubelski.pl",99],["motofakty.pl",99],["naszemiasto.pl",99],["nowiny24.pl",99],["nowosci.com.pl",99],["nto.pl",99],["polskatimes.pl",99],["pomorska.pl",99],["poranny.pl",99],["sportowy24.pl",99],["strefaagro.pl",99],["strefabiznesu.pl",99],["stronakobiet.pl",99],["telemagazyn.pl",99],["to.com.pl",99],["wspolczesna.pl",99],["course9x.com",99],["courseclub.me",99],["azrom.net",99],["alttyab.net",99],["esopress.com",99],["nesiaku.my.id",99],["onemanhua.com",100],["freeindianporn.mobi",100],["dr-farfar.com",101],["boyfriendtv.com",102],["brandstofprijzen.info",103],["netfuck.net",104],["blog24.me",[104,152]],["kisahdunia.com",104],["javsex.to",104],["nulljungle.com",104],["oyuncusoruyor.com",104],["pbarecap.ph",104],["sourds.net",104],["teknobalta.com",104],["tvinternetowa.info",104],["sqlserveregitimleri.com",104],["tutcourse.com",104],["readytechflip.com",104],["novinhastop.com",104],["warddogs.com",104],["dvdgayporn.com",104],["iimanga.com",104],["tinhocdongthap.com",104],["tremamnon.com",104],["423down.com",104],["brizzynovel.com",104],["jugomobile.com",104],["freecodezilla.net",104],["animekhor.xyz",104],["iconmonstr.com",104],["gay-tubes.cc",104],["rbxscripts.net",104],["comentariodetexto.com",104],["wordpredia.com",104],["livsavr.co",104],["allfaucet.xyz",[104,152]],["titbytz.tk",104],["replica-watch.info",104],["alludemycourses.com",104],["kayifamilytv.com",104],["iir.ai",105],["gameofporn.com",107],["qpython.club",108],["antifake-funko.fr",108],["dktechnicalmate.com",108],["recipahi.com",108],["e9china.net",109],["ontools.net",109],["marketbeat.com",110],["hentaipornpics.net",111],["apps2app.com",112],["alliptvlinks.com",113],["smashyplayer.top",114],["xvideos.com",115],["xvideos2.com",115],["homemoviestube.com",116],["sexseeimage.com",116],["jpopsingles.eu",118],["aipebel.com",118],["azmath.info",118],["downfile.site",118],["downphanmem.com",118],["expertvn.com",118],["memangbau.com",118],["trangchu.news",118],["aztravels.net",118],["ielts-isa.edu.vn",118],["techedubyte.com",[118,266]],["tubereader.me",119],["repretel.com",119],["dagensnytt.com",120],["mrproblogger.com",120],["themezon.net",120],["gfx-station.com",121],["bitzite.com",[121,140,152]],["historyofroyalwomen.com",122],["davescomputertips.com",122],["ukchat.co.uk",123],["hivelr.com",124],["skidrowcodex.net",125],["takimag.com",126],["digi.no",127],["th.gl",128],["scimagojr.com",129],["haxina.com",129],["cryptofenz.xyz",129],["twi-fans.com",130],["learn-cpp.org",131],["terashare.co",132],["pornwex.tv",133],["smithsonianmag.com",134],["homesports.net",135],["cineb.rs",136],["rawkuma.com",[136,195]],["moviesjoyhd.to",136],["realmoasis.com",137],["javfc2.xyz",138],["gobankingrates.com",139],["buzzheavier.com",140],["flashbang.sh",140],["trashbytes.net",140],["hiddenleaf.to",141],["ronorp.net",142],["videovak.com",145],["gamerxyt.com",146],["a-lohas.jp",147],["akirabox.com",148],["upshrink.com",149],["fitdynamos.com",151],["ohionowcast.info",152],["wiour.com",152],["appsbull.com",152],["diudemy.com",152],["maqal360.com",152],["bitcotasks.com",152],["videolyrics.in",152],["manofadan.com",152],["cempakajaya.com",152],["tagecoin.com",152],["doge25.in",152],["king-ptcs.com",152],["naijafav.top",152],["ourcoincash.xyz",152],["sh.techsamir.com",152],["claimcoins.site",152],["cryptosh.pro",152],["coinsrev.com",152],["go.freetrx.fun",152],["eftacrypto.com",152],["fescrypto.com",152],["earnhub.net",152],["kiddyshort.com",152],["tronxminer.com",152],["homeairquality.org",153],["cety.app",[154,155]],["exego.app",154],["cutlink.net",154],["cutsy.net",154],["cutyurls.com",154],["cutty.app",154],["cutnet.net",154],["hentaicloud.com",155],["justin.mp3quack.lol",155],["soft98.ir",[155,229]],["adcrypto.net",156],["admediaflex.com",156],["aduzz.com",156],["bitcrypto.info",156],["cdrab.com",156],["datacheap.io",156],["hbz.us",156],["savego.org",156],["owsafe.com",156],["sportweb.info",156],["aiimgvlog.fun",157],["6indianporn.com",157],["amateurebonypics.com",157],["amateuryoungpics.com",157],["cinemabg.net",157],["coomer.su",157],["desimmshd.com",157],["frauporno.com",157],["givemeaporn.com",157],["hitomi.la",157],["jav-asia.top",157],["javf.net",157],["javfull.net",157],["javideo.net",157],["kemono.su",157],["kr18plus.com",157],["pilibook.com",157],["pornborne.com",157],["porngrey.com",157],["qqxnxx.com",157],["sexvideos.host",157],["submilf.com",157],["subtaboo.com",157],["tktube.com",157],["xfrenchies.com",157],["moderngyan.com",158],["sattakingcharts.in",158],["freshbhojpuri.com",158],["bgmi32bitapk.in",158],["bankshiksha.in",158],["earn.mpscstudyhub.com",158],["earn.quotesopia.com",158],["money.quotesopia.com",158],["best-mobilegames.com",158],["learn.moderngyan.com",158],["bharatsarkarijobalert.com",158],["quotesopia.com",158],["creditsgoal.com",158],["coingraph.us",159],["momo-net.com",159],["maxgaming.fi",159],["cybercityhelp.in",160],["travel.vebma.com",161],["cloud.majalahhewan.com",161],["crm.cekresi.me",161],["ai.tempatwisata.pro",161],["pinloker.com",161],["sekilastekno.com",161],["link.paid4link.com",162],["vulture.com",163],["megaplayer.bokracdn.run",164],["hentaistream.com",165],["siteunblocked.info",166],["larvelfaucet.com",167],["feyorra.top",167],["claimtrx.com",167],["moviesyug.net",168],["w4files.ws",168],["parispi.net",169],["paperzonevn.com",170],["dailyvideoreports.net",171],["lewd.ninja",172],["systemnews24.com",173],["incestvidz.com",174],["niusdiario.es",175],["playporngames.com",176],["movi.pk",[177,180]],["cutesexyteengirls.com",179],["0dramacool.net",180],["185.53.88.104",180],["185.53.88.204",180],["185.53.88.15",180],["123movies4k.net",180],["1rowsports.com",180],["4share-mp3.net",180],["9animetv.to",180],["720pstream.me",180],["aagmaal.com",180],["abysscdn.com",180],["ajkalerbarta.com",180],["akstream.xyz",180],["androidapks.biz",180],["androidsite.net",180],["animeonlinefree.org",180],["animesite.net",180],["animespank.com",180],["aniworld.to",180],["apkmody.io",180],["appsfree4u.com",180],["audioz.download",180],["awafim.tv",180],["bdnewszh.com",180],["beastlyprints.com",180],["bengalisite.com",180],["bestfullmoviesinhd.org",180],["betteranime.net",180],["blacktiesports.live",180],["buffsports.stream",180],["ch-play.com",180],["clickforhire.com",180],["cloudy.pk",180],["computercrack.com",180],["coolcast2.com",180],["crackedsoftware.biz",180],["crackfree.org",180],["cracksite.info",180],["cryptoblog24.info",180],["cuatrolatastv.blogspot.com",180],["cydiasources.net",180],["decmelfot.xyz",180],["dirproxy.com",180],["dopebox.to",180],["downloadapk.info",180],["downloadapps.info",180],["downloadgames.info",180],["downloadmusic.info",180],["downloadsite.org",180],["downloadwella.com",180],["ebooksite.org",180],["educationtips213.blogspot.com",180],["egyup.live",180],["elgoles.pro",180],["embed.meomeo.pw",180],["embed.scdn.to",180],["emulatorsite.com",180],["essaysharkwriting.club",180],["exploreera.net",180],["extrafreetv.com",180],["fakedetail.com",180],["fclecteur.com",180],["files.im",180],["flexyhit.com",180],["fmoviefree.net",180],["fmovies24.com",180],["footyhunter3.xyz",180],["freeflix.info",180],["freemoviesu4.com",180],["freeplayervideo.com",180],["freesoccer.net",180],["fseries.org",180],["gamefast.org",180],["gamesite.info",180],["gettapeads.com",180],["gmanga.me",180],["gocast123.me",180],["gogohd.net",180],["gogoplay5.com",180],["gooplay.net",180],["gostreamon.net",180],["happy2hub.org",180],["harimanga.com",180],["healthnewsreel.com",180],["hexupload.net",180],["hinatasoul.com",180],["hindisite.net",180],["holymanga.net",180],["hxfile.co",180],["isosite.org",180],["iv-soft.com",180],["januflix.expert",180],["jewelry.com.my",180],["johnwardflighttraining.com",180],["kabarportal.com",180],["kstorymedia.com",180],["la123movies.org",180],["lespassionsdechinouk.com",180],["lilymanga.net",180],["linksdegrupos.com.br",180],["linkz.wiki",180],["livestreamtv.pk",180],["macsite.info",180],["mangapt.com",180],["mangasite.org",180],["manhuascan.com",180],["megafilmeshdseries.com",180],["megamovies.org",180],["membed.net",180],["moddroid.com",180],["moviefree2.com",180],["movies-watch.com.pk",180],["moviesite.app",180],["moviesonline.fm",180],["moviesx.org",180],["msmoviesbd.com",180],["musicsite.biz",180],["myfernweh.com",180],["myviid.com",180],["nazarickol.com",180],["noob4cast.com",180],["nsw2u.com",[180,278]],["oko.sh",180],["olympicstreams.me",180],["orangeink.pk",180],["owllink.net",180],["pahaplayers.click",180],["patchsite.net",180],["pdfsite.net",180],["play1002.com",180],["player-cdn.com",180],["productkeysite.com",180],["projectfreetv.one",180],["romsite.org",180],["rufiguta.com",180],["rytmp3.io",180],["send.cm",180],["seriesite.net",180],["seriezloaded.com.ng",180],["serijehaha.com",180],["shrugemojis.com",180],["siteapk.net",180],["siteflix.org",180],["sitegames.net",180],["sitekeys.net",180],["sitepdf.com",180],["sitetorrent.com",180],["softwaresite.net",180],["sportbar.live",180],["sportkart1.xyz",180],["ssyoutube.com",180],["stardima.com",180],["stream4free.live",180],["superapk.org",180],["supermovies.org",180],["tainio-mania.online",180],["talaba.su",180],["tamilguns.org",180],["tatabrada.tv",180],["techtrendmakers.com",180],["theflixer.tv",180],["thememypc.net",180],["thetechzone.online",180],["thripy.com",180],["tonnestreamz.xyz",180],["travelplanspro.com",180],["turcasmania.com",180],["tusfiles.com",180],["tvonlinesports.com",180],["ultramovies.org",180],["uploadbank.com",180],["urdubolo.pk",180],["vidspeeds.com",180],["warezsite.net",180],["watchmovies2.com",180],["watchmoviesforfree.org",180],["watchofree.com",180],["watchsite.net",180],["watchsouthpark.tv",180],["watchtvch.club",180],["web.livecricket.is",180],["webseries.club",180],["worldcupstream.pm",180],["y2mate.com",180],["youapk.net",180],["youtube4kdownloader.com",180],["yts-subs.com",180],["haho.moe",181],["nicy-spicy.pw",182],["novelmultiverse.com",183],["mylegalporno.com",184],["embedsports.me",185],["embedstream.me",185],["jumbtv.com",185],["reliabletv.me",185],["videowood.tv",188],["thecut.com",189],["novelism.jp",190],["alphapolis.co.jp",191],["game3rb.com",192],["javhub.net",192],["thotvids.com",193],["berklee.edu",194],["imeteo.sk",196],["youtubemp3donusturucu.net",197],["surfsees.com",199],["vivo.st",[200,201]],["alueviesti.fi",203],["kiuruvesilehti.fi",203],["lempaala.ideapark.fi",203],["olutposti.fi",203],["urjalansanomat.fi",203],["tainhanhvn.com",205],["titantv.com",206],["3cinfo.net",207],["transportationlies.org",208],["camarchive.tv",209],["crownimg.com",209],["freejav.guru",209],["hentai2read.com",209],["icyporno.com",209],["illink.net",209],["javtiful.com",209],["m-hentai.net",209],["pornblade.com",209],["pornfelix.com",209],["pornxxxxtube.net",209],["redwap.me",209],["redwap2.com",209],["redwap3.com",209],["sunporno.com",209],["tubxporn.xxx",209],["ver-comics-porno.com",209],["ver-mangas-porno.com",209],["xanimeporn.com",209],["xxxvideohd.net",209],["zetporn.com",209],["simpcity.su",210],["cocomanga.com",211],["sampledrive.in",212],["sportnews.to",212],["soccershoes.blog",212],["mcleaks.net",213],["explorecams.com",213],["minecraft.buzz",213],["chillx.top",214],["playerx.stream",214],["m.liputan6.com",216],["stardewids.com",[216,241]],["ingles.com",217],["spanishdict.com",217],["surfline.com",218],["rureka.com",219],["bunkr.is",220],["amateur8.com",221],["freeporn8.com",221],["maturetubehere.com",221],["embedo.co",222],["corriere.it",223],["oggi.it",223],["2the.space",224],["file.gocmod.com",225],["apkcombo.com",226],["winfuture.de",227],["sponsorhunter.com",228],["novelssites.com",230],["torrentmac.net",231],["udvl.com",232],["moviezaddiction.icu",233],["apimate.net",234],["dlpanda.com",235],["socialmediagirls.com",236],["ecamrips.com",236],["showcamrips.com",236],["einrichtungsbeispiele.de",237],["weadown.com",238],["molotov.tv",239],["freecoursesonline.me",240],["adelsfun.com",240],["advantien.com",240],["bailbondsfinder.com",240],["bigpiecreative.com",240],["childrenslibrarylady.com",240],["classifarms.com",240],["comtasq.ca",240],["crone.es",240],["ctrmarketingsolutions.com",240],["dropnudes.com",240],["ftuapps.dev",240],["genzsport.com",240],["ghscanner.com",240],["grsprotection.com",240],["gruporafa.com.br",240],["inmatefindcalifornia.com",240],["inmatesearchidaho.com",240],["itsonsitetv.com",240],["mfmfinancials.com",240],["myproplugins.com",240],["onehack.us",240],["ovester.com",240],["paste.bin.sx",240],["privatenudes.com",240],["renoconcrete.ca",240],["richieashbeck.com",240],["sat.technology",240],["short1ink.com",240],["stpm.co.uk",240],["wegotcookies.co",240],["mathcrave.com",240],["marinetraffic.live",240],["commands.gg",241],["smgplaza.com",242],["emturbovid.com",243],["findjav.com",243],["javggvideo.xyz",243],["mmtv01.xyz",243],["stbturbo.xyz",243],["streamsilk.com",243],["freepik.com",244],["diyphotography.net",246],["bitchesgirls.com",247],["shopforex.online",248],["hiraethtranslation.com",249],["programmingeeksclub.com",250],["easymc.io",251],["diendancauduong.com",252],["androidadult.com",253],["parentcircle.com",254],["h-game18.xyz",255],["wheelofgold.com",256],["shortlinks.tech",257],["skill4ltu.eu",259],["lifestyle.bg",260],["news.bg",260],["topsport.bg",260],["webcafe.bg",260],["freepikdownloader.com",261],["freepasses.org",262],["iusedtobeaboss.com",263],["androidpolice.com",264],["cbr.com",264],["gamerant.com",264],["howtogeek.com",264],["thegamer.com",264],["blogtruyenmoi.com",265],["igay69.com",267],["graphicget.com",268],["qiwi.gg",[269,270]],["sonixgvn.net",271],["netcine2.la",272],["idnes.cz",[273,274]],["cbc.ca",275],["japscan.lol",[276,277]]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,55]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["adyou",17],["fxporn69",20],["rexporn",24],["movies07",24],["pornocomics",24],["pornomoll",28],["gsurl",29],["freecoursesonline",30],["lordpremium",30],["todovieneok",30],["novablogitalia",30],["anisubindo",30],["stream4free",30],["btvsports",30],["mimaletadepeliculas",31],["burningseries",32],["dz4soft",33],["yoututosjeff",33],["ebookmed",33],["lanjutkeun",33],["novelasesp",33],["singingdalong",33],["doujindesu",33],["xmovies8",36],["mega-dvdrip",43],["peliculas-dvdrip",43],["desbloqueador",44],["newpelis",[45,53]],["pelix",[45,53]],["allcalidad",[45,209]],["khatrimaza",45],["camwhores",46],["camwhorestv",46],["uproxy",46],["nekopoi",50],["mirrorace",59],["mixdrp",64],["asiansex",66],["japanfuck",66],["japanporn",66],["teensex",66],["vintagetube",66],["xxxmovies",66],["zooqle",70],["hdfull",74],["mangamanga",76],["streameast",78],["thestreameast",78],["vev",82],["vidop",82],["1337x",84],["x1337x",84],["zone-telechargement",84],["megalink",89],["gmx",90],["mega1080p",95],["9hentai",97],["gaypornhdfree",104],["cinemakottaga",104],["privatemoviez",104],["apkmaven",104],["popcornstream",106],["upns",114],["readcomiconline",117],["azsoft",118],["gdflix",143],["a1movies",144],["fc-lc",150],["nuvid",155],["pornktube",157],["watchseries",157],["milfnut",159],["pagalmovies",168],["7starhd",168],["jalshamoviez",168],["9xupload",168],["bdupload",168],["desiupload",168],["rdxhd1",168],["moviessources",178],["0gomovie",180],["0gomovies",180],["123moviefree",180],["1kmovies",180],["1madrasdub",180],["1primewire",180],["2embed",180],["2madrasdub",180],["2umovies",180],["4anime",180],["adblockplustape",180],["altadefinizione01",180],["atomixhq",180],["beinmatch",180],["brmovies",180],["cima4u",180],["clicknupload",180],["cmovies",180],["cricfree",180],["crichd",180],["databasegdriveplayer",180],["dood",180],["f1stream",180],["faselhd",180],["fbstream",180],["filemoon",180],["filepress",[180,245]],["filmlinks4u",180],["filmpertutti",180],["filmyzilla",180],["fmovies",180],["french-stream",180],["fzlink",180],["gofilms4u",180],["gogoanime",180],["gomoviz",180],["hdmoviefair",180],["hdmovies4u",180],["hdmovies50",180],["hdmoviesfair",180],["hh3dhay",180],["hindilinks4u",180],["hotmasti",180],["hurawatch",180],["klmanga",180],["klubsports",180],["libertestreamvf",180],["livetvon",180],["manga1000",180],["manga1001",180],["mangaraw",180],["mangarawjp",180],["mlbstream",180],["motogpstream",180],["movierulz",180],["movies123",180],["movies2watch",180],["moviesden",180],["moviezaddiction",180],["myflixer",180],["nbastream",180],["netcine",180],["nflstream",180],["nhlstream",180],["onlinewatchmoviespk",180],["pctfenix",180],["pctnew",180],["pksmovies",180],["plyjam",180],["plylive",180],["pogolinks",180],["popcorntime",180],["poscitech",180],["prmovies",180],["rugbystreams",180],["shahed4u",180],["sflix",180],["sitesunblocked",180],["solarmovies",180],["sportcast",180],["sportskart",180],["sports-stream",180],["streaming-french",180],["streamers",180],["streamingcommunity",180],["strikeout",180],["t20cup",180],["tennisstreams",180],["torrentdosfilmes",180],["toonanime",180],["tvply",180],["ufcstream",180],["uptomega",180],["uqload",180],["vudeo",180],["vidoo",180],["vipbox",180],["vipboxtv",180],["vipleague",180],["viprow",180],["yesmovies",180],["yomovies",180],["yomovies1",180],["yt2mp3s",180],["kat",180],["katbay",180],["kickass",180],["kickasshydra",180],["kickasskat",180],["kickass2",180],["kickasstorrents",180],["kat2",180],["kattracker",180],["thekat",180],["thekickass",180],["kickassz",180],["kickasstorrents2",180],["topkickass",180],["kickassgo",180],["kkickass",180],["kkat",180],["kickasst",180],["kick4ss",180],["guardaserie",186],["cine-calidad",187],["videovard",202],["gntai",209],["grantorrent",209],["mejortorrent",209],["mejortorrento",209],["mejortorrents",209],["mejortorrents1",209],["mejortorrentt",209],["shineads",212],["bg-gledai",240],["gledaitv",240],["motchill",258]]);

const exceptionsMap = new Map([["mentor.duden.de",[77]],["forum.soft98.ir",[155,229]]]);

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
