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
/* global cloneInto */

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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","blockAdBlock"],["DOMContentLoaded","location.href"],["click","openDirectLinkAd"],["load","detect"],["DOMContentLoaded","history.pushState"],["DOMContentLoaded","showPopup"],["click","PopUnder"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["click","open"],["load","bypass"],["","popMagic"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["message"],["","/pop|_blank/"],["click","allclick_Public"],["","dtnoppu"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["blur"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["contextmenu","preventDefault"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","form.submit"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["DOMContentLoaded","Madrid"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,30]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,152]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["shemalez.com",18],["tubepornclassic.com",18],["gotporn.com",19],["freepornrocks.com",19],["tvhai.org",19],["realgfporn.com",[20,21]],["thisvid.com",21],["xvideos-downloader.net",21],["imgspice.com",22],["vikiporn.com",23],["tnaflix.com",23],["hentai2w.com",[23,205]],["yourlust.com",23],["hotpornfile.org",23],["watchfreexxx.net",23],["vintageporntubes.com",23],["angelgals.com",23],["babesexy.com",23],["porndaa.com",23],["ganstamovies.com",23],["youngleak.com",23],["porndollz.com",23],["xnxxvideo.pro",23],["xvideosxporn.com",23],["filmpornofrancais.fr",23],["pictoa.com",[23,45]],["tubator.com",23],["adultasianporn.com",23],["nsfwmonster.com",23],["girlsofdesire.org",23],["gaytail.com",23],["fetish-bb.com",23],["rumporn.com",23],["soyoungteens.com",23],["zubby.com",23],["lesbian8.com",23],["gayforfans.com",23],["reifporn.de",23],["javtsunami.com",23],["18tube.sex",23],["xxxextreme.org",23],["amateurs-fuck.com",23],["sex-amateur-clips.com",23],["hentaiworld.tv",23],["dads-banging-teens.com",23],["home-xxx-videos.com",23],["mature-chicks.com",23],["teens-fucking-matures.com",23],["hqbang.com",23],["darknessporn.com",23],["familyporner.com",23],["freepublicporn.com",23],["pisshamster.com",23],["punishworld.com",23],["xanimu.com",23],["pornhd.com",24],["cnnamador.com",[24,34]],["cle0desktop.blogspot.com",24],["turkanime.co",24],["camclips.tv",[24,46]],["blackpornhq.com",24],["xsexpics.com",24],["ulsex.net",24],["wannafreeporn.com",24],["ytube2dl.com",24],["multiup.us",24],["protege-torrent.com",24],["pussyspace.com",[25,26]],["pussyspace.net",[25,26]],["empflix.com",27],["cpmlink.net",28],["bdsmstreak.com",28],["cutpaid.com",28],["pornforrelax.com",28],["fatwhitebutt.com",28],["mavplay.xyz",28],["short.pe",29],["totaldebrid.org",30],["neko-miku.com",30],["elsfile.org",30],["venstrike.jimdofree.com",30],["schrauben-normen.de",30],["avengerinator.blogspot.com",30],["link-to.net",30],["hanimesubth.com",30],["gsmturkey.net",30],["adshrink.it",30],["presentation-ppt.com",30],["mangacanblog.com",30],["pekalongan-cits.blogspot.com",30],["4tymode.win",30],["eurotruck2.com.br",30],["tiroalpaloes.com",30],["tiroalpaloes.net",30],["linkvertise.com",30],["reifenrechner.at",30],["tire-size-calculator.info",30],["linuxsecurity.com",30],["encodinghub.com",30],["itsguider.com",30],["cotravinh.blogspot.com",30],["itudong.com",30],["shortx.net",30],["lecturel.com",30],["bakai.org",30],["nar.k-ba.net",30],["tiroalpalo.org",30],["bs.to",32],["efukt.com",32],["generacionretro.net",33],["nuevos-mu.ucoz.com",33],["micloudfiles.com",33],["mimaletamusical.blogspot.com",33],["visionias.net",33],["b3infoarena.in",33],["lurdchinexgist.blogspot.com",33],["thefreedommatrix.blogspot.com",33],["hentai-vl.blogspot.com",33],["projetomotog.blogspot.com",33],["ktmx.pro",33],["lirik3satu.blogspot.com",33],["marketmovers.it",33],["pharmaguideline.com",33],["safemaru.blogspot.com",33],["mixloads.com",33],["mangaromance.eu",33],["interssh.com",33],["freesoftpdfdownload.blogspot.com",33],["cirokun.blogspot.com",33],["myadslink.com",33],["blackavelic.com",33],["server.satunivers.tv",33],["eg-akw.com",33],["xn--mgba7fjn.cc",33],["flashingjungle.com",34],["ma-x.org",35],["lavozdegalicia.es",35],["ddwloclawek.pl",35],["ki24.info",35],["xmovies08.org",37],["globaldjmix.com",38],["zazzybabes.com",39],["haaretz.co.il",40],["haaretz.com",40],["slate.com",41],["megalinks.info",42],["megapastes.com",42],["mega-mkv.com",[42,43]],["mkv-pastes.com",42],["zpaste.net",42],["zlpaste.net",42],["9xlinks.site",42],["zona-leros.net",43],["acortarm.xyz",44],["cine.to",[45,211]],["kissasia.cc",45],["digjav.com",46],["videoszoofiliahd.com",47],["xxxtubezoo.com",48],["zooredtube.com",48],["uii.io",49],["megacams.me",51],["rlslog.net",51],["porndoe.com",52],["acienciasgalilei.com",54],["playrust.io",55],["payskip.org",56],["short-url.link",57],["tubedupe.com",58],["mcrypto.club",59],["fatgirlskinny.net",60],["polska-ie.com",60],["windowsmatters.com",60],["canaltdt.es",61],["masbrooo.com",61],["2ndrun.tv",61],["oncehelp.com",62],["curto.win",62],["smallseotools.com",63],["macwelt.de",65],["pcwelt.de",65],["capital.de",65],["geo.de",65],["allmomsex.com",66],["allnewindianporn.com",66],["analxxxvideo.com",66],["animalextremesex.com",66],["anime3d.xyz",66],["animefuckmovies.com",66],["animepornfilm.com",66],["animesexbar.com",66],["animesexclip.com",66],["animexxxsex.com",66],["animexxxfilms.com",66],["anysex.club",66],["apetube.asia",66],["asianfuckmovies.com",66],["asianfucktube.com",66],["asianporn.sexy",66],["asiansexcilps.com",66],["beeg.fund",66],["beegvideoz.com",66],["bestasiansex.pro",66],["bravotube.asia",66],["brutalanimalsfuck.com",66],["candyteenporn.com",66],["daddyfuckmovies.com",66],["desifuckonline.com",66],["exclusiveasianporn.com",66],["exteenporn.com",66],["fantasticporn.net",66],["fantasticyoungporn.com",66],["fineasiansex.com",66],["firstasianpussy.com",66],["freeindiansextube.com",66],["freepornasians.com",66],["freerealvideo.com",66],["fuck-beeg.com",66],["fuck-xnxx.com",66],["fuckasian.pro",66],["fuckfuq.com",66],["fuckundies.com",66],["gojapaneseporn.com",66],["golderotica.com",66],["goodyoungsex.com",66],["goyoungporn.com",66],["hardxxxmoms.com",66],["hdvintagetube.com",66],["hentaiporn.me",66],["hentaisexfilms.com",66],["hentaisexuality.com",66],["hot-teens-movies.mobi",66],["hotanimepornvideos.com",66],["hotanimevideos.com",66],["hotasianpussysex.com",66],["hotjapaneseshows.com",66],["hotmaturetube.com",66],["hotmilfs.pro",66],["hotorientalporn.com",66],["hotpornyoung.com",66],["hotxxxjapanese.com",66],["hotxxxpussy.com",66],["indiafree.net",66],["indianpornvideo.online",66],["japanpornclip.com",66],["japanesetube.video",66],["japansex.me",66],["japanesexxxporn.com",66],["japansporno.com",66],["japanxxx.asia",66],["japanxxxworld.com",66],["keezmovies.surf",66],["lingeriefuckvideo.com",66],["liveanimalporn.zooo.club",66],["madhentaitube.com",66],["megahentaitube.com",66],["megajapanesesex.com",66],["megajapantube.com",66],["milfxxxpussy.com",66],["momsextube.pro",66],["momxxxass.com",66],["monkeyanimalporn.com",66],["moviexxx.mobi",66],["newanimeporn.com",66],["newjapanesexxx.com",66],["nicematureporn.com",66],["nudeplayboygirls.com",66],["openxxxporn.com",66],["originalindianporn.com",66],["originalteentube.com",66],["pig-fuck.com",66],["plainasianporn.com",66],["popularasianxxx.com",66],["pornanimetube.com",66],["pornasians.pro",66],["pornhat.asia",66],["pornheed.online",66],["pornjapanesesex.com",66],["pornomovies.asia",66],["pornvintage.tv",66],["primeanimesex.com",66],["realjapansex.com",66],["realmomsex.com",66],["redsexhub.com",66],["retroporn.world",66],["retrosexfilms.com",66],["sex-free-movies.com",66],["sexanimesex.com",66],["sexanimetube.com",66],["sexjapantube.com",66],["sexmomvideos.com",66],["sexteenxxxtube.com",66],["sexxxanimal.com",66],["sexyoungtube.com",66],["sexyvintageporn.com",66],["sopornmovies.com",66],["spicyvintageporn.com",66],["sunporno.club",66],["tabooanime.club",66],["teenextrem.com",66],["teenfucksex.com",66],["teenhost.net",66],["teensexass.com",66],["tnaflix.asia",66],["totalfuckmovies.com",66],["totalmaturefuck.com",66],["txxx.asia",66],["voyeurpornsex.com",66],["warmteensex.com",66],["wetasiancreampie.com",66],["wildhentaitube.com",66],["wowyoungsex.com",66],["xhamster-art.com",66],["xmovie.pro",66],["xnudevideos.com",66],["xnxxjapon.com",66],["xpics.me",66],["xvide.me",66],["xxxanimefuck.com",66],["xxxanimevideos.com",66],["xxxanimemovies.com",66],["xxxhentaimovies.com",66],["xxxhothub.com",66],["xxxjapaneseporntube.com",66],["xxxlargeporn.com",66],["xxxmomz.com",66],["xxxpornmilf.com",66],["xxxpussyclips.com",66],["xxxpussysextube.com",66],["xxxretrofuck.com",66],["xxxsex.pro",66],["xxxsexyjapanese.com",66],["xxxteenyporn.com",66],["xxxvideo.asia",66],["xxxvideos.ink",66],["xxxyoungtv.com",66],["youjizzz.club",66],["youngpussyfuck.com",66],["bayimg.com",67],["celeb.gate.cc",68],["masterplayer.xyz",70],["pussy-hub.com",70],["porndex.com",71],["compucalitv.com",72],["diariodenavarra.es",74],["duden.de",76],["pennlive.com",78],["beautypageants.indiatimes.com",79],["01fmovies.com",80],["lnk2.cc",82],["fullhdxxx.com",83],["luscious.net",[83,152]],["classicpornbest.com",83],["xstory-fr.com",83],["1youngteenporn.com",83],["www-daftarharga.blogspot.com",[83,194]],["miraculous.to",[83,200]],["vtube.to",83],["gosexpod.com",84],["otakukan.com",85],["xcafe.com",86],["pornfd.com",86],["venusarchives.com",86],["imagehaha.com",87],["imagenpic.com",87],["imageshimage.com",87],["imagetwist.com",87],["k1nk.co",88],["watchasians.cc",88],["alexsports.xyz",88],["lulustream.com",88],["luluvdo.com",88],["web.de",89],["news18.com",90],["thelanb.com",91],["dropmms.com",91],["softwaredescargas.com",92],["cracking-dz.com",93],["anitube.ninja",94],["gazzetta.it",95],["port.hu",97],["dziennikbaltycki.pl",98],["dzienniklodzki.pl",98],["dziennikpolski24.pl",98],["dziennikzachodni.pl",98],["echodnia.eu",98],["expressbydgoski.pl",98],["expressilustrowany.pl",98],["gazetakrakowska.pl",98],["gazetalubuska.pl",98],["gazetawroclawska.pl",98],["gk24.pl",98],["gloswielkopolski.pl",98],["gol24.pl",98],["gp24.pl",98],["gra.pl",98],["gs24.pl",98],["kurierlubelski.pl",98],["motofakty.pl",98],["naszemiasto.pl",98],["nowiny24.pl",98],["nowosci.com.pl",98],["nto.pl",98],["polskatimes.pl",98],["pomorska.pl",98],["poranny.pl",98],["sportowy24.pl",98],["strefaagro.pl",98],["strefabiznesu.pl",98],["stronakobiet.pl",98],["telemagazyn.pl",98],["to.com.pl",98],["wspolczesna.pl",98],["course9x.com",98],["courseclub.me",98],["azrom.net",98],["alttyab.net",98],["esopress.com",98],["nesiaku.my.id",98],["onemanhua.com",99],["freeindianporn.mobi",99],["dr-farfar.com",100],["boyfriendtv.com",101],["brandstofprijzen.info",102],["netfuck.net",103],["blog24.me",[103,147]],["kisahdunia.com",103],["javsex.to",103],["nulljungle.com",103],["oyuncusoruyor.com",103],["pbarecap.ph",103],["sourds.net",103],["teknobalta.com",103],["tvinternetowa.info",103],["sqlserveregitimleri.com",103],["tutcourse.com",103],["readytechflip.com",103],["novinhastop.com",103],["warddogs.com",103],["dvdgayporn.com",103],["iimanga.com",103],["tinhocdongthap.com",103],["tremamnon.com",103],["423down.com",103],["brizzynovel.com",103],["jugomobile.com",103],["freecodezilla.net",103],["animekhor.xyz",103],["iconmonstr.com",103],["gay-tubes.cc",103],["rbxscripts.net",103],["comentariodetexto.com",103],["wordpredia.com",103],["livsavr.co",103],["allfaucet.xyz",[103,147]],["titbytz.tk",103],["replica-watch.info",103],["alludemycourses.com",103],["kayifamilytv.com",103],["iir.ai",104],["gameofporn.com",106],["qpython.club",107],["antifake-funko.fr",107],["dktechnicalmate.com",107],["recipahi.com",107],["e9china.net",108],["ontools.net",108],["marketbeat.com",109],["hentaipornpics.net",110],["apps2app.com",111],["alliptvlinks.com",112],["xvideos.com",113],["xvideos2.com",113],["homemoviestube.com",114],["sexseeimage.com",114],["jpopsingles.eu",116],["aipebel.com",116],["azmath.info",116],["downfile.site",116],["downphanmem.com",116],["expertvn.com",116],["memangbau.com",116],["trangchu.news",116],["aztravels.net",116],["ielts-isa.edu.vn",116],["techedubyte.com",[116,261]],["tubereader.me",117],["repretel.com",117],["dagensnytt.com",118],["mrproblogger.com",118],["themezon.net",118],["gfx-station.com",119],["bitzite.com",[119,138,147]],["historyofroyalwomen.com",120],["davescomputertips.com",120],["ukchat.co.uk",121],["hivelr.com",122],["skidrowcodex.net",123],["takimag.com",124],["digi.no",125],["th.gl",126],["scimagojr.com",127],["haxina.com",127],["cryptofenz.xyz",127],["twi-fans.com",128],["learn-cpp.org",129],["terashare.co",130],["pornwex.tv",131],["smithsonianmag.com",132],["homesports.net",133],["cineb.rs",134],["rawkuma.com",[134,191]],["moviesjoyhd.to",134],["realmoasis.com",135],["javfc2.xyz",136],["gobankingrates.com",137],["buzzheavier.com",138],["flashbang.sh",138],["trashbytes.net",138],["hiddenleaf.to",139],["ronorp.net",140],["videovak.com",143],["upshrink.com",144],["fitdynamos.com",146],["ohionowcast.info",147],["wiour.com",147],["appsbull.com",147],["diudemy.com",147],["maqal360.com",147],["bitcotasks.com",147],["videolyrics.in",147],["manofadan.com",147],["cempakajaya.com",147],["tagecoin.com",147],["doge25.in",147],["king-ptcs.com",147],["naijafav.top",147],["ourcoincash.xyz",147],["sh.techsamir.com",147],["claimcoins.site",147],["cryptosh.pro",147],["coinsrev.com",147],["go.freetrx.fun",147],["eftacrypto.com",147],["fescrypto.com",147],["earnhub.net",147],["kiddyshort.com",147],["tronxminer.com",147],["homeairquality.org",148],["cety.app",[149,150]],["exego.app",149],["cutlink.net",149],["cutsy.net",149],["cutyurls.com",149],["cutty.app",149],["cutnet.net",149],["justin.mp3quack.lol",150],["soft98.ir",[150,224]],["adcrypto.net",151],["admediaflex.com",151],["aduzz.com",151],["bitcrypto.info",151],["cdrab.com",151],["datacheap.io",151],["hbz.us",151],["savego.org",151],["owsafe.com",151],["sportweb.info",151],["aiimgvlog.fun",152],["6indianporn.com",152],["amateurebonypics.com",152],["amateuryoungpics.com",152],["cinemabg.net",152],["coomer.su",152],["desimmshd.com",152],["frauporno.com",152],["givemeaporn.com",152],["hitomi.la",152],["jav-asia.top",152],["javf.net",152],["javfull.net",152],["javideo.net",152],["kemono.su",152],["kr18plus.com",152],["pilibook.com",152],["pornborne.com",152],["porngrey.com",152],["qqxnxx.com",152],["sexvideos.host",152],["submilf.com",152],["subtaboo.com",152],["tktube.com",152],["xfrenchies.com",152],["moderngyan.com",153],["sattakingcharts.in",153],["freshbhojpuri.com",153],["bgmi32bitapk.in",153],["bankshiksha.in",153],["earn.mpscstudyhub.com",153],["earn.quotesopia.com",153],["money.quotesopia.com",153],["best-mobilegames.com",153],["learn.moderngyan.com",153],["bharatsarkarijobalert.com",153],["coingraph.us",154],["momo-net.com",154],["maxgaming.fi",154],["cybercityhelp.in",155],["travel.vebma.com",156],["cloud.majalahhewan.com",156],["crm.cekresi.me",156],["ai.tempatwisata.pro",156],["pinloker.com",156],["sekilastekno.com",156],["link.paid4link.com",157],["vulture.com",158],["megaplayer.bokracdn.run",159],["hentaistream.com",160],["siteunblocked.info",161],["larvelfaucet.com",162],["feyorra.top",162],["claimtrx.com",162],["moviesyug.net",163],["w4files.ws",163],["parispi.net",164],["paperzonevn.com",165],["dailyvideoreports.net",166],["lewd.ninja",167],["systemnews24.com",168],["incestvidz.com",169],["niusdiario.es",170],["playporngames.com",171],["movi.pk",[172,175]],["cutesexyteengirls.com",174],["0dramacool.net",175],["185.53.88.104",175],["185.53.88.204",175],["185.53.88.15",175],["123movies4k.net",175],["1rowsports.com",175],["4share-mp3.net",175],["9animetv.to",175],["720pstream.me",175],["aagmaal.com",175],["abysscdn.com",175],["ajkalerbarta.com",175],["akstream.xyz",175],["androidapks.biz",175],["androidsite.net",175],["animeonlinefree.org",175],["animesite.net",175],["animespank.com",175],["aniworld.to",175],["apkmody.io",175],["appsfree4u.com",175],["audioz.download",175],["awafim.tv",175],["bdnewszh.com",175],["beastlyprints.com",175],["bengalisite.com",175],["bestfullmoviesinhd.org",175],["betteranime.net",175],["blacktiesports.live",175],["buffsports.stream",175],["ch-play.com",175],["clickforhire.com",175],["cloudy.pk",175],["computercrack.com",175],["coolcast2.com",175],["crackedsoftware.biz",175],["crackfree.org",175],["cracksite.info",175],["cryptoblog24.info",175],["cuatrolatastv.blogspot.com",175],["cydiasources.net",175],["decmelfot.xyz",175],["dirproxy.com",175],["dopebox.to",175],["downloadapk.info",175],["downloadapps.info",175],["downloadgames.info",175],["downloadmusic.info",175],["downloadsite.org",175],["downloadwella.com",175],["ebooksite.org",175],["educationtips213.blogspot.com",175],["egyup.live",175],["elgoles.pro",175],["embed.meomeo.pw",175],["embed.scdn.to",175],["emulatorsite.com",175],["essaysharkwriting.club",175],["exploreera.net",175],["extrafreetv.com",175],["fakedetail.com",175],["fclecteur.com",175],["files.im",175],["flexyhit.com",175],["fmoviefree.net",175],["fmovies24.com",175],["footyhunter3.xyz",175],["freeflix.info",175],["freemoviesu4.com",175],["freeplayervideo.com",175],["freesoccer.net",175],["fseries.org",175],["gamefast.org",175],["gamesite.info",175],["gettapeads.com",175],["gmanga.me",175],["gocast123.me",175],["gogohd.net",175],["gogoplay5.com",175],["gooplay.net",175],["gostreamon.net",175],["happy2hub.org",175],["harimanga.com",175],["healthnewsreel.com",175],["hexupload.net",175],["hinatasoul.com",175],["hindisite.net",175],["holymanga.net",175],["hxfile.co",175],["isosite.org",175],["iv-soft.com",175],["januflix.expert",175],["jewelry.com.my",175],["johnwardflighttraining.com",175],["kabarportal.com",175],["kstorymedia.com",175],["la123movies.org",175],["lespassionsdechinouk.com",175],["lilymanga.net",175],["linksdegrupos.com.br",175],["linkz.wiki",175],["livestreamtv.pk",175],["macsite.info",175],["mangapt.com",175],["mangasite.org",175],["manhuascan.com",175],["megafilmeshdseries.com",175],["megamovies.org",175],["membed.net",175],["moddroid.com",175],["moviefree2.com",175],["movies-watch.com.pk",175],["moviesite.app",175],["moviesonline.fm",175],["moviesx.org",175],["msmoviesbd.com",175],["musicsite.biz",175],["myfernweh.com",175],["myviid.com",175],["nazarickol.com",175],["noob4cast.com",175],["nsw2u.com",[175,272]],["oko.sh",175],["olympicstreams.me",175],["orangeink.pk",175],["owllink.net",175],["pahaplayers.click",175],["patchsite.net",175],["pdfsite.net",175],["play1002.com",175],["player-cdn.com",175],["productkeysite.com",175],["projectfreetv.one",175],["romsite.org",175],["rufiguta.com",175],["rytmp3.io",175],["send.cm",175],["seriesite.net",175],["seriezloaded.com.ng",175],["serijehaha.com",175],["shrugemojis.com",175],["siteapk.net",175],["siteflix.org",175],["sitegames.net",175],["sitekeys.net",175],["sitepdf.com",175],["sitetorrent.com",175],["softwaresite.net",175],["sportbar.live",175],["sportkart1.xyz",175],["ssyoutube.com",175],["stardima.com",175],["stream4free.live",175],["superapk.org",175],["supermovies.org",175],["tainio-mania.online",175],["talaba.su",175],["tamilguns.org",175],["tatabrada.tv",175],["techtrendmakers.com",175],["theflixer.tv",175],["thememypc.net",175],["thetechzone.online",175],["thripy.com",175],["tonnestreamz.xyz",175],["travelplanspro.com",175],["turcasmania.com",175],["tusfiles.com",175],["tvonlinesports.com",175],["ultramovies.org",175],["uploadbank.com",175],["urdubolo.pk",175],["vidspeeds.com",175],["warezsite.net",175],["watchmovies2.com",175],["watchmoviesforfree.org",175],["watchofree.com",175],["watchsite.net",175],["watchsouthpark.tv",175],["watchtvch.club",175],["web.livecricket.is",175],["webseries.club",175],["worldcupstream.pm",175],["y2mate.com",175],["youapk.net",175],["youtube4kdownloader.com",175],["yts-subs.com",175],["haho.moe",176],["nicy-spicy.pw",177],["novelmultiverse.com",178],["mylegalporno.com",179],["jumbtv.com",180],["videowood.tv",183],["thecut.com",184],["novelism.jp",185],["alphapolis.co.jp",186],["okrzone.com",187],["game3rb.com",188],["javhub.net",188],["thotvids.com",189],["berklee.edu",190],["imeteo.sk",192],["youtubemp3donusturucu.net",193],["surfsees.com",195],["vivo.st",[196,197]],["alueviesti.fi",199],["kiuruvesilehti.fi",199],["lempaala.ideapark.fi",199],["olutposti.fi",199],["urjalansanomat.fi",199],["tainhanhvn.com",201],["titantv.com",202],["3cinfo.net",203],["transportationlies.org",204],["camarchive.tv",205],["crownimg.com",205],["freejav.guru",205],["hentai2read.com",205],["icyporno.com",205],["illink.net",205],["javtiful.com",205],["m-hentai.net",205],["pornblade.com",205],["pornfelix.com",205],["pornxxxxtube.net",205],["redwap.me",205],["redwap2.com",205],["redwap3.com",205],["sunporno.com",205],["tubxporn.xxx",205],["ver-comics-porno.com",205],["ver-mangas-porno.com",205],["xanimeporn.com",205],["xxxvideohd.net",205],["zetporn.com",205],["simpcity.su",206],["cocomanga.com",207],["sampledrive.in",208],["sportnews.to",208],["soccershoes.blog",208],["mcleaks.net",209],["explorecams.com",209],["minecraft.buzz",209],["chillx.top",210],["playerx.stream",210],["m.liputan6.com",212],["stardewids.com",[212,236]],["ingles.com",213],["spanishdict.com",213],["surfline.com",214],["rureka.com",215],["bunkr.is",216],["amateur8.com",217],["freeporn8.com",217],["maturetubehere.com",217],["embedo.co",218],["corriere.it",219],["oggi.it",219],["2the.space",220],["file.gocmod.com",221],["apkcombo.com",222],["sponsorhunter.com",223],["novelssites.com",225],["torrentmac.net",226],["udvl.com",227],["moviezaddiction.icu",228],["apimate.net",229],["dlpanda.com",230],["socialmediagirls.com",231],["ecamrips.com",231],["showcamrips.com",231],["einrichtungsbeispiele.de",232],["weadown.com",233],["molotov.tv",234],["freecoursesonline.me",235],["adelsfun.com",235],["advantien.com",235],["bailbondsfinder.com",235],["bigpiecreative.com",235],["childrenslibrarylady.com",235],["classifarms.com",235],["comtasq.ca",235],["crone.es",235],["ctrmarketingsolutions.com",235],["dropnudes.com",235],["ftuapps.dev",235],["genzsport.com",235],["ghscanner.com",235],["grsprotection.com",235],["gruporafa.com.br",235],["inmatefindcalifornia.com",235],["inmatesearchidaho.com",235],["itsonsitetv.com",235],["mfmfinancials.com",235],["myproplugins.com",235],["onehack.us",235],["ovester.com",235],["paste.bin.sx",235],["privatenudes.com",235],["renoconcrete.ca",235],["richieashbeck.com",235],["sat.technology",235],["short1ink.com",235],["stpm.co.uk",235],["wegotcookies.co",235],["mathcrave.com",235],["marinetraffic.live",235],["commands.gg",236],["smgplaza.com",237],["emturbovid.com",238],["findjav.com",238],["javggvideo.xyz",238],["mmtv01.xyz",238],["stbturbo.xyz",238],["streamsilk.com",238],["freepik.com",239],["diyphotography.net",241],["bitchesgirls.com",242],["shopforex.online",243],["hiraethtranslation.com",244],["programmingeeksclub.com",245],["easymc.io",246],["diendancauduong.com",247],["androidadult.com",248],["parentcircle.com",249],["h-game18.xyz",250],["wheelofgold.com",251],["shortlinks.tech",252],["skill4ltu.eu",254],["lifestyle.bg",255],["news.bg",255],["topsport.bg",255],["webcafe.bg",255],["freepikdownloader.com",256],["freepasses.org",257],["iusedtobeaboss.com",258],["androidpolice.com",259],["cbr.com",259],["gamerant.com",259],["howtogeek.com",259],["thegamer.com",259],["blogtruyenmoi.com",260],["igay69.com",262],["graphicget.com",263],["qiwi.gg",[264,265]],["sonixgvn.net",266],["netcine2.la",267],["idnes.cz",[268,269]],["cbc.ca",270],["japscan.lol",271]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,55]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["adyou",17],["fxporn69",20],["rexporn",24],["movies07",24],["pornocomics",24],["pornomoll",28],["gsurl",29],["freecoursesonline",30],["lordpremium",30],["todovieneok",30],["novablogitalia",30],["anisubindo",30],["stream4free",30],["btvsports",30],["mimaletadepeliculas",31],["burningseries",32],["dz4soft",33],["yoututosjeff",33],["ebookmed",33],["lanjutkeun",33],["novelasesp",33],["singingdalong",33],["doujindesu",33],["xmovies8",36],["mega-dvdrip",43],["peliculas-dvdrip",43],["desbloqueador",44],["newpelis",[45,53]],["pelix",[45,53]],["allcalidad",[45,205]],["khatrimaza",45],["camwhores",46],["camwhorestv",46],["uproxy",46],["nekopoi",50],["mirrorace",59],["mixdrp",64],["asiansex",66],["japanfuck",66],["japanporn",66],["teensex",66],["vintagetube",66],["xxxmovies",66],["zooqle",69],["hdfull",73],["mangamanga",75],["streameast",77],["thestreameast",77],["vev",81],["vidop",81],["1337x",83],["x1337x",83],["zone-telechargement",83],["megalink",88],["gmx",89],["mega1080p",94],["9hentai",96],["gaypornhdfree",103],["cinemakottaga",103],["privatemoviez",103],["apkmaven",103],["popcornstream",105],["readcomiconline",115],["azsoft",116],["gdflix",141],["a1movies",142],["fc-lc",145],["nuvid",150],["pornktube",152],["watchseries",152],["milfnut",154],["pagalmovies",163],["7starhd",163],["jalshamoviez",163],["9xupload",163],["bdupload",163],["desiupload",163],["rdxhd1",163],["moviessources",173],["0gomovie",175],["0gomovies",175],["123moviefree",175],["1kmovies",175],["1madrasdub",175],["1primewire",175],["2embed",175],["2madrasdub",175],["2umovies",175],["4anime",175],["adblockplustape",175],["altadefinizione01",175],["atomixhq",175],["beinmatch",175],["brmovies",175],["cima4u",175],["clicknupload",175],["cmovies",175],["cricfree",175],["crichd",175],["databasegdriveplayer",175],["dood",175],["f1stream",175],["faselhd",175],["fbstream",175],["filemoon",175],["filepress",[175,240]],["filmlinks4u",175],["filmpertutti",175],["filmyzilla",175],["fmovies",175],["french-stream",175],["fzlink",175],["gdriveplayer",175],["gofilms4u",175],["gogoanime",175],["gomoviz",175],["hdmoviefair",175],["hdmovies4u",175],["hdmovies50",175],["hdmoviesfair",175],["hh3dhay",175],["hindilinks4u",175],["hotmasti",175],["hurawatch",175],["klmanga",175],["klubsports",175],["libertestreamvf",175],["livetvon",175],["manga1000",175],["manga1001",175],["mangaraw",175],["mangarawjp",175],["mlbstream",175],["motogpstream",175],["movierulz",175],["movies123",175],["movies2watch",175],["moviesden",175],["moviezaddiction",175],["myflixer",175],["nbastream",175],["netcine",175],["nflstream",175],["nhlstream",175],["onlinewatchmoviespk",175],["pctfenix",175],["pctnew",175],["pksmovies",175],["plyjam",175],["plylive",175],["pogolinks",175],["popcorntime",175],["poscitech",175],["prmovies",175],["rugbystreams",175],["shahed4u",175],["sflix",175],["sitesunblocked",175],["solarmovies",175],["sportcast",175],["sportskart",175],["sports-stream",175],["streaming-french",175],["streamers",175],["streamingcommunity",175],["strikeout",175],["t20cup",175],["tennisstreams",175],["torrentdosfilmes",175],["toonanime",175],["tvply",175],["ufcstream",175],["uptomega",175],["uqload",175],["vudeo",175],["vidoo",175],["vipbox",175],["vipboxtv",175],["vipleague",175],["viprow",175],["yesmovies",175],["yomovies",175],["yomovies1",175],["yt2mp3s",175],["kat",175],["katbay",175],["kickass",175],["kickasshydra",175],["kickasskat",175],["kickass2",175],["kickasstorrents",175],["kat2",175],["kattracker",175],["thekat",175],["thekickass",175],["kickassz",175],["kickasstorrents2",175],["topkickass",175],["kickassgo",175],["kkickass",175],["kkat",175],["kickasst",175],["kick4ss",175],["guardaserie",181],["cine-calidad",182],["videovard",198],["gntai",205],["grantorrent",205],["mejortorrent",205],["mejortorrento",205],["mejortorrents",205],["mejortorrents1",205],["mejortorrentt",205],["shineads",208],["bg-gledai",235],["gledaitv",235],["motchill",253]]);

const exceptionsMap = new Map([["mentor.duden.de",[76]],["forum.soft98.ir",[150,224]]]);

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
