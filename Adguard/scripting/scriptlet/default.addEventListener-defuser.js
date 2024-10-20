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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["click","openPopupForChapter"],["click","doThePop"],["DOMContentLoaded","iframe"],["","/_blank/i"],["blur","stopCountdown"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["click","open"],["load","bypass"],["DOMContentLoaded","location.href"],["","popMagic"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["","dtnoppu"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["","shouldShow"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["blur"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["contextmenu","preventDefault"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["click","window.open"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","document.documentElement.lang"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["DOMContentLoaded",".clientHeight"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["click","form.submit"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["load","setTimeout"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,30]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,146]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["shemalez.com",18],["tubepornclassic.com",18],["gotporn.com",19],["freepornrocks.com",19],["tvhai.org",19],["realgfporn.com",[20,21]],["thisvid.com",21],["xvideos-downloader.net",21],["imgspice.com",22],["vikiporn.com",23],["tnaflix.com",23],["hentai2w.com",[23,198]],["yourlust.com",23],["hotpornfile.org",23],["watchfreexxx.net",23],["vintageporntubes.com",23],["angelgals.com",23],["babesexy.com",23],["porndaa.com",23],["ganstamovies.com",23],["youngleak.com",23],["porndollz.com",23],["xnxxvideo.pro",23],["xvideosxporn.com",23],["filmpornofrancais.fr",23],["pictoa.com",[23,45]],["tubator.com",23],["adultasianporn.com",23],["nsfwmonster.com",23],["girlsofdesire.org",23],["gaytail.com",23],["fetish-bb.com",23],["rumporn.com",23],["soyoungteens.com",23],["zubby.com",23],["lesbian8.com",23],["gayforfans.com",23],["reifporn.de",23],["javtsunami.com",23],["18tube.sex",23],["xxxextreme.org",23],["amateurs-fuck.com",23],["sex-amateur-clips.com",23],["hentaiworld.tv",23],["dads-banging-teens.com",23],["home-xxx-videos.com",23],["mature-chicks.com",23],["teens-fucking-matures.com",23],["hqbang.com",23],["darknessporn.com",23],["familyporner.com",23],["freepublicporn.com",23],["pisshamster.com",23],["punishworld.com",23],["xanimu.com",23],["pornhd.com",24],["cnnamador.com",[24,34]],["cle0desktop.blogspot.com",24],["turkanime.co",24],["camclips.tv",[24,46]],["blackpornhq.com",24],["xsexpics.com",24],["ulsex.net",24],["wannafreeporn.com",24],["ytube2dl.com",24],["multiup.us",24],["protege-torrent.com",24],["pussyspace.com",[25,26]],["pussyspace.net",[25,26]],["empflix.com",27],["cpmlink.net",28],["bdsmstreak.com",28],["cutpaid.com",28],["pornforrelax.com",28],["fatwhitebutt.com",28],["mavplay.xyz",28],["short.pe",29],["totaldebrid.org",30],["neko-miku.com",30],["elsfile.org",30],["venstrike.jimdofree.com",30],["schrauben-normen.de",30],["avengerinator.blogspot.com",30],["link-to.net",30],["hanimesubth.com",30],["gsmturkey.net",30],["adshrink.it",30],["presentation-ppt.com",30],["mangacanblog.com",30],["pekalongan-cits.blogspot.com",30],["4tymode.win",30],["eurotruck2.com.br",30],["tiroalpaloes.com",30],["linkvertise.com",30],["reifenrechner.at",30],["tire-size-calculator.info",30],["linuxsecurity.com",30],["encodinghub.com",30],["itsguider.com",30],["cotravinh.blogspot.com",30],["itudong.com",30],["shortx.net",30],["lecturel.com",30],["bakai.org",30],["nar.k-ba.net",30],["tiroalpalo.org",30],["bs.to",32],["efukt.com",32],["generacionretro.net",33],["nuevos-mu.ucoz.com",33],["micloudfiles.com",33],["mimaletamusical.blogspot.com",33],["visionias.net",33],["b3infoarena.in",33],["lurdchinexgist.blogspot.com",33],["thefreedommatrix.blogspot.com",33],["hentai-vl.blogspot.com",33],["projetomotog.blogspot.com",33],["ktmx.pro",33],["lirik3satu.blogspot.com",33],["marketmovers.it",33],["pharmaguideline.com",33],["safemaru.blogspot.com",33],["mixloads.com",33],["mangaromance.eu",33],["interssh.com",33],["freesoftpdfdownload.blogspot.com",33],["cirokun.blogspot.com",33],["myadslink.com",33],["blackavelic.com",33],["server.satunivers.tv",33],["eg-akw.com",33],["xn--mgba7fjn.cc",33],["flashingjungle.com",34],["ma-x.org",35],["lavozdegalicia.es",35],["ddwloclawek.pl",35],["ki24.info",35],["xmovies08.org",37],["globaldjmix.com",38],["zazzybabes.com",39],["haaretz.co.il",40],["haaretz.com",40],["slate.com",41],["megalinks.info",42],["megapastes.com",42],["mega-mkv.com",[42,43]],["mkv-pastes.com",42],["zpaste.net",42],["zlpaste.net",42],["9xlinks.site",42],["zona-leros.net",43],["acortarm.xyz",44],["cine.to",[45,204]],["kissasia.cc",45],["digjav.com",46],["videoszoofiliahd.com",47],["xxxtubezoo.com",48],["zooredtube.com",48],["uii.io",49],["megacams.me",51],["rlslog.net",51],["porndoe.com",52],["acienciasgalilei.com",54],["playrust.io",55],["payskip.org",56],["short-url.link",57],["tubedupe.com",58],["mcrypto.club",59],["fatgirlskinny.net",60],["polska-ie.com",60],["windowsmatters.com",60],["canaltdt.es",61],["masbrooo.com",61],["2ndrun.tv",61],["oncehelp.com",62],["curto.win",62],["smallseotools.com",63],["macwelt.de",65],["pcwelt.de",65],["capital.de",65],["geo.de",65],["allmomsex.com",66],["allnewindianporn.com",66],["analxxxvideo.com",66],["animalextremesex.com",66],["anime3d.xyz",66],["animefuckmovies.com",66],["animepornfilm.com",66],["animesexbar.com",66],["animesexclip.com",66],["animexxxsex.com",66],["animexxxfilms.com",66],["anysex.club",66],["apetube.asia",66],["asianfuckmovies.com",66],["asianfucktube.com",66],["asianporn.sexy",66],["asiansexcilps.com",66],["beeg.fund",66],["beegvideoz.com",66],["bestasiansex.pro",66],["bravotube.asia",66],["brutalanimalsfuck.com",66],["candyteenporn.com",66],["daddyfuckmovies.com",66],["desifuckonline.com",66],["exclusiveasianporn.com",66],["exteenporn.com",66],["fantasticporn.net",66],["fantasticyoungporn.com",66],["fineasiansex.com",66],["firstasianpussy.com",66],["freeindiansextube.com",66],["freepornasians.com",66],["freerealvideo.com",66],["fuck-beeg.com",66],["fuck-xnxx.com",66],["fuckasian.pro",66],["fuckfuq.com",66],["fuckundies.com",66],["gojapaneseporn.com",66],["golderotica.com",66],["goodyoungsex.com",66],["goyoungporn.com",66],["hardxxxmoms.com",66],["hdvintagetube.com",66],["hentaiporn.me",66],["hentaisexfilms.com",66],["hentaisexuality.com",66],["hot-teens-movies.mobi",66],["hotanimepornvideos.com",66],["hotanimevideos.com",66],["hotasianpussysex.com",66],["hotjapaneseshows.com",66],["hotmaturetube.com",66],["hotmilfs.pro",66],["hotorientalporn.com",66],["hotpornyoung.com",66],["hotxxxjapanese.com",66],["hotxxxpussy.com",66],["indiafree.net",66],["indianpornvideo.online",66],["japanpornclip.com",66],["japanesetube.video",66],["japansex.me",66],["japanesexxxporn.com",66],["japansporno.com",66],["japanxxx.asia",66],["japanxxxworld.com",66],["keezmovies.surf",66],["lingeriefuckvideo.com",66],["liveanimalporn.zooo.club",66],["madhentaitube.com",66],["megahentaitube.com",66],["megajapanesesex.com",66],["megajapantube.com",66],["milfxxxpussy.com",66],["momsextube.pro",66],["momxxxass.com",66],["monkeyanimalporn.com",66],["moviexxx.mobi",66],["newanimeporn.com",66],["newjapanesexxx.com",66],["nicematureporn.com",66],["nudeplayboygirls.com",66],["openxxxporn.com",66],["originalindianporn.com",66],["originalteentube.com",66],["pig-fuck.com",66],["plainasianporn.com",66],["popularasianxxx.com",66],["pornanimetube.com",66],["pornasians.pro",66],["pornhat.asia",66],["pornheed.online",66],["pornjapanesesex.com",66],["pornomovies.asia",66],["pornvintage.tv",66],["primeanimesex.com",66],["realjapansex.com",66],["realmomsex.com",66],["redsexhub.com",66],["retroporn.world",66],["retrosexfilms.com",66],["sex-free-movies.com",66],["sexanimesex.com",66],["sexanimetube.com",66],["sexjapantube.com",66],["sexmomvideos.com",66],["sexteenxxxtube.com",66],["sexxxanimal.com",66],["sexyoungtube.com",66],["sexyvintageporn.com",66],["sopornmovies.com",66],["spicyvintageporn.com",66],["sunporno.club",66],["tabooanime.club",66],["teenextrem.com",66],["teenfucksex.com",66],["teenhost.net",66],["teensexass.com",66],["tnaflix.asia",66],["totalfuckmovies.com",66],["totalmaturefuck.com",66],["txxx.asia",66],["voyeurpornsex.com",66],["warmteensex.com",66],["wetasiancreampie.com",66],["wildhentaitube.com",66],["wowyoungsex.com",66],["xhamster-art.com",66],["xmovie.pro",66],["xnudevideos.com",66],["xnxxjapon.com",66],["xpics.me",66],["xvide.me",66],["xxxanimefuck.com",66],["xxxanimevideos.com",66],["xxxanimemovies.com",66],["xxxhentaimovies.com",66],["xxxhothub.com",66],["xxxjapaneseporntube.com",66],["xxxlargeporn.com",66],["xxxmomz.com",66],["xxxpornmilf.com",66],["xxxpussyclips.com",66],["xxxpussysextube.com",66],["xxxretrofuck.com",66],["xxxsex.pro",66],["xxxsexyjapanese.com",66],["xxxteenyporn.com",66],["xxxvideo.asia",66],["xxxvideos.ink",66],["xxxyoungtv.com",66],["youjizzz.club",66],["youngpussyfuck.com",66],["bayimg.com",67],["celeb.gate.cc",68],["masterplayer.xyz",70],["pussy-hub.com",70],["porndex.com",71],["compucalitv.com",72],["diariodenavarra.es",74],["duden.de",76],["pennlive.com",78],["beautypageants.indiatimes.com",79],["01fmovies.com",80],["lnk2.cc",82],["fullhdxxx.com",83],["luscious.net",[83,146]],["classicpornbest.com",83],["xstory-fr.com",83],["1youngteenporn.com",83],["www-daftarharga.blogspot.com",[83,187]],["miraculous.to",[83,193]],["vtube.to",83],["gosexpod.com",84],["otakukan.com",85],["xcafe.com",86],["pornfd.com",86],["venusarchives.com",86],["imagehaha.com",87],["imagenpic.com",87],["imageshimage.com",87],["imagetwist.com",87],["k1nk.co",88],["watchasians.cc",88],["alexsports.xyz",88],["lulustream.com",88],["luluvdo.com",88],["web.de",89],["news18.com",90],["thelanb.com",91],["dropmms.com",91],["softwaredescargas.com",92],["cracking-dz.com",93],["anitube.ninja",94],["gazzetta.it",95],["port.hu",97],["dziennikbaltycki.pl",98],["dzienniklodzki.pl",98],["dziennikpolski24.pl",98],["dziennikzachodni.pl",98],["echodnia.eu",98],["expressbydgoski.pl",98],["expressilustrowany.pl",98],["gazetakrakowska.pl",98],["gazetalubuska.pl",98],["gazetawroclawska.pl",98],["gk24.pl",98],["gloswielkopolski.pl",98],["gol24.pl",98],["gp24.pl",98],["gra.pl",98],["gs24.pl",98],["kurierlubelski.pl",98],["motofakty.pl",98],["naszemiasto.pl",98],["nowiny24.pl",98],["nowosci.com.pl",98],["nto.pl",98],["polskatimes.pl",98],["pomorska.pl",98],["poranny.pl",98],["sportowy24.pl",98],["strefaagro.pl",98],["strefabiznesu.pl",98],["stronakobiet.pl",98],["telemagazyn.pl",98],["to.com.pl",98],["wspolczesna.pl",98],["course9x.com",98],["courseclub.me",98],["azrom.net",98],["alttyab.net",98],["esopress.com",98],["nesiaku.my.id",98],["onemanhua.com",99],["freeindianporn.mobi",99],["dr-farfar.com",100],["boyfriendtv.com",101],["brandstofprijzen.info",102],["netfuck.net",103],["blog24.me",[103,140]],["kisahdunia.com",103],["javsex.to",103],["nulljungle.com",103],["oyuncusoruyor.com",103],["pbarecap.ph",103],["sourds.net",103],["teknobalta.com",103],["tvinternetowa.info",103],["sqlserveregitimleri.com",103],["tutcourse.com",103],["readytechflip.com",103],["novinhastop.com",103],["warddogs.com",103],["dvdgayporn.com",103],["iimanga.com",103],["tinhocdongthap.com",103],["tremamnon.com",103],["423down.com",103],["brizzynovel.com",103],["jugomobile.com",103],["freecodezilla.net",103],["animekhor.xyz",103],["iconmonstr.com",103],["gay-tubes.cc",103],["rbxscripts.net",103],["comentariodetexto.com",103],["wordpredia.com",103],["livsavr.co",103],["allfaucet.xyz",[103,140]],["titbytz.tk",103],["replica-watch.info",103],["alludemycourses.com",103],["kayifamilytv.com",103],["iir.ai",104],["gameofporn.com",106],["qpython.club",107],["antifake-funko.fr",107],["dktechnicalmate.com",107],["recipahi.com",107],["e9china.net",108],["ontools.net",108],["marketbeat.com",109],["hentaipornpics.net",110],["apps2app.com",111],["alliptvlinks.com",112],["xvideos.com",113],["xvideos2.com",113],["homemoviestube.com",114],["sexseeimage.com",114],["jpopsingles.eu",116],["aipebel.com",116],["azmath.info",116],["downfile.site",116],["downphanmem.com",116],["expertvn.com",116],["memangbau.com",116],["trangchu.news",116],["aztravels.net",116],["ielts-isa.edu.vn",116],["techedubyte.com",[116,254]],["tubereader.me",117],["repretel.com",117],["dagensnytt.com",118],["mrproblogger.com",118],["themezon.net",118],["gfx-station.com",119],["bitzite.com",[119,140,145]],["historyofroyalwomen.com",120],["davescomputertips.com",120],["ukchat.co.uk",121],["hivelr.com",122],["skidrowcodex.net",123],["takimag.com",124],["digi.no",125],["th.gl",126],["scimagojr.com",127],["haxina.com",127],["cryptofenz.xyz",127],["twi-fans.com",128],["learn-cpp.org",129],["terashare.co",130],["pornwex.tv",131],["smithsonianmag.com",132],["homesports.net",133],["cineb.rs",134],["rawkuma.com",[134,184]],["moviesjoyhd.to",134],["realmoasis.com",135],["javfc2.xyz",136],["upshrink.com",137],["fitdynamos.com",139],["ohionowcast.info",140],["wiour.com",140],["appsbull.com",140],["diudemy.com",140],["maqal360.com",140],["bitcotasks.com",140],["videolyrics.in",140],["manofadan.com",140],["cempakajaya.com",140],["tagecoin.com",140],["doge25.in",140],["king-ptcs.com",140],["naijafav.top",140],["ourcoincash.xyz",140],["sh.techsamir.com",140],["claimcoins.site",140],["cryptosh.pro",140],["coinsrev.com",140],["go.freetrx.fun",140],["eftacrypto.com",140],["fescrypto.com",140],["earnhub.net",140],["kiddyshort.com",140],["tronxminer.com",140],["homeairquality.org",141],["cety.app",[142,143]],["exego.app",142],["cutlink.net",142],["cutsy.net",142],["cutyurls.com",142],["cutty.app",142],["cutnet.net",142],["justin.mp3quack.lol",143],["soft98.ir",[143,217]],["adcrypto.net",144],["admediaflex.com",144],["aduzz.com",144],["bitcrypto.info",144],["cdrab.com",144],["datacheap.io",144],["hbz.us",144],["savego.org",144],["owsafe.com",144],["sportweb.info",144],["aiimgvlog.fun",146],["6indianporn.com",146],["amateurebonypics.com",146],["amateuryoungpics.com",146],["cinemabg.net",146],["coomer.su",146],["desimmshd.com",146],["frauporno.com",146],["givemeaporn.com",146],["hitomi.la",146],["jav-asia.top",146],["javf.net",146],["javfull.net",146],["javideo.net",146],["kemono.su",146],["kr18plus.com",146],["pilibook.com",146],["pornborne.com",146],["porngrey.com",146],["qqxnxx.com",146],["sexvideos.host",146],["submilf.com",146],["subtaboo.com",146],["tktube.com",146],["xfrenchies.com",146],["moderngyan.com",147],["sattakingcharts.in",147],["freshbhojpuri.com",147],["bgmi32bitapk.in",147],["bankshiksha.in",147],["earn.mpscstudyhub.com",147],["earn.quotesopia.com",147],["money.quotesopia.com",147],["best-mobilegames.com",147],["learn.moderngyan.com",147],["bharatsarkarijobalert.com",147],["coingraph.us",148],["momo-net.com",148],["maxgaming.fi",148],["cybercityhelp.in",149],["travel.vebma.com",150],["cloud.majalahhewan.com",150],["crm.cekresi.me",150],["ai.tempatwisata.pro",150],["pinloker.com",150],["sekilastekno.com",150],["link.paid4link.com",151],["vulture.com",152],["megaplayer.bokracdn.run",153],["hentaistream.com",154],["siteunblocked.info",155],["larvelfaucet.com",156],["feyorra.top",156],["claimtrx.com",156],["moviesyug.net",157],["w4files.ws",157],["parispi.net",158],["paperzonevn.com",159],["dailyvideoreports.net",160],["lewd.ninja",161],["systemnews24.com",162],["incestvidz.com",163],["niusdiario.es",164],["playporngames.com",165],["movi.pk",[166,169]],["cutesexyteengirls.com",168],["0dramacool.net",169],["185.53.88.104",169],["185.53.88.204",169],["185.53.88.15",169],["123movies4k.net",169],["1rowsports.com",169],["4share-mp3.net",169],["9animetv.to",169],["720pstream.me",169],["aagmaal.com",169],["abysscdn.com",169],["ajkalerbarta.com",169],["akstream.xyz",169],["androidapks.biz",169],["androidsite.net",169],["animeonlinefree.org",169],["animesite.net",169],["animespank.com",169],["aniworld.to",169],["apkmody.io",169],["appsfree4u.com",169],["audioz.download",169],["awafim.tv",169],["bdnewszh.com",169],["beastlyprints.com",169],["bengalisite.com",169],["bestfullmoviesinhd.org",169],["betteranime.net",169],["blacktiesports.live",169],["buffsports.stream",169],["ch-play.com",169],["clickforhire.com",169],["cloudy.pk",169],["computercrack.com",169],["coolcast2.com",169],["crackedsoftware.biz",169],["crackfree.org",169],["cracksite.info",169],["cryptoblog24.info",169],["cuatrolatastv.blogspot.com",169],["cydiasources.net",169],["decmelfot.xyz",169],["dirproxy.com",169],["dopebox.to",169],["downloadapk.info",169],["downloadapps.info",169],["downloadgames.info",169],["downloadmusic.info",169],["downloadsite.org",169],["downloadwella.com",169],["ebooksite.org",169],["educationtips213.blogspot.com",169],["egyup.live",169],["elgoles.pro",169],["embed.meomeo.pw",169],["embed.scdn.to",169],["emulatorsite.com",169],["essaysharkwriting.club",169],["exploreera.net",169],["extrafreetv.com",169],["fakedetail.com",169],["fclecteur.com",169],["files.im",169],["flexyhit.com",169],["fmoviefree.net",169],["fmovies24.com",169],["footyhunter3.xyz",169],["freeflix.info",169],["freemoviesu4.com",169],["freeplayervideo.com",169],["freesoccer.net",169],["fseries.org",169],["gamefast.org",169],["gamesite.info",169],["gettapeads.com",169],["gmanga.me",169],["gocast123.me",169],["gogohd.net",169],["gogoplay5.com",169],["gooplay.net",169],["gostreamon.net",169],["happy2hub.org",169],["harimanga.com",169],["healthnewsreel.com",169],["hexupload.net",169],["hinatasoul.com",169],["hindisite.net",169],["holymanga.net",169],["hxfile.co",169],["isosite.org",169],["iv-soft.com",169],["januflix.expert",169],["jewelry.com.my",169],["johnwardflighttraining.com",169],["kabarportal.com",169],["kstorymedia.com",169],["la123movies.org",169],["lespassionsdechinouk.com",169],["lilymanga.net",169],["linksdegrupos.com.br",169],["linkz.wiki",169],["livestreamtv.pk",169],["macsite.info",169],["mangapt.com",169],["mangasite.org",169],["manhuascan.com",169],["megafilmeshdseries.com",169],["megamovies.org",169],["membed.net",169],["moddroid.com",169],["moviefree2.com",169],["movies-watch.com.pk",169],["moviesite.app",169],["moviesonline.fm",169],["moviesx.org",169],["msmoviesbd.com",169],["musicsite.biz",169],["myfernweh.com",169],["myviid.com",169],["nazarickol.com",169],["noob4cast.com",169],["nsw2u.com",[169,265]],["oko.sh",169],["olympicstreams.me",169],["orangeink.pk",169],["owllink.net",169],["pahaplayers.click",169],["patchsite.net",169],["pdfsite.net",169],["play1002.com",169],["player-cdn.com",169],["productkeysite.com",169],["projectfreetv.one",169],["romsite.org",169],["rufiguta.com",169],["rytmp3.io",169],["send.cm",169],["seriesite.net",169],["seriezloaded.com.ng",169],["serijehaha.com",169],["shrugemojis.com",169],["siteapk.net",169],["siteflix.org",169],["sitegames.net",169],["sitekeys.net",169],["sitepdf.com",169],["sitetorrent.com",169],["softwaresite.net",169],["sportbar.live",169],["sportkart1.xyz",169],["ssyoutube.com",169],["stardima.com",169],["stream4free.live",169],["superapk.org",169],["supermovies.org",169],["tainio-mania.online",169],["talaba.su",169],["tamilguns.org",169],["tatabrada.tv",169],["techtrendmakers.com",169],["theflixer.tv",169],["thememypc.net",169],["thetechzone.online",169],["thripy.com",169],["tonnestreamz.xyz",169],["travelplanspro.com",169],["turcasmania.com",169],["tusfiles.com",169],["tvonlinesports.com",169],["ultramovies.org",169],["uploadbank.com",169],["urdubolo.pk",169],["vidspeeds.com",169],["warezsite.net",169],["watchmovies2.com",169],["watchmoviesforfree.org",169],["watchofree.com",169],["watchsite.net",169],["watchsouthpark.tv",169],["watchtvch.club",169],["web.livecricket.is",169],["webseries.club",169],["worldcupstream.pm",169],["y2mate.com",169],["youapk.net",169],["youtube4kdownloader.com",169],["yts-subs.com",169],["haho.moe",170],["nicy-spicy.pw",171],["novelmultiverse.com",172],["mylegalporno.com",173],["videowood.tv",176],["thecut.com",177],["novelism.jp",178],["alphapolis.co.jp",179],["okrzone.com",180],["game3rb.com",181],["javhub.net",181],["thotvids.com",182],["berklee.edu",183],["imeteo.sk",185],["youtubemp3donusturucu.net",186],["surfsees.com",188],["vivo.st",[189,190]],["alueviesti.fi",192],["kiuruvesilehti.fi",192],["lempaala.ideapark.fi",192],["olutposti.fi",192],["urjalansanomat.fi",192],["tainhanhvn.com",194],["titantv.com",195],["3cinfo.net",196],["transportationlies.org",197],["camarchive.tv",198],["crownimg.com",198],["freejav.guru",198],["hentai2read.com",198],["icyporno.com",198],["illink.net",198],["javtiful.com",198],["m-hentai.net",198],["pornblade.com",198],["pornfelix.com",198],["pornxxxxtube.net",198],["redwap.me",198],["redwap2.com",198],["redwap3.com",198],["sunporno.com",198],["tubxporn.xxx",198],["ver-comics-porno.com",198],["ver-mangas-porno.com",198],["xanimeporn.com",198],["xxxvideohd.net",198],["zetporn.com",198],["simpcity.su",199],["cocomanga.com",200],["sampledrive.in",201],["sportnews.to",201],["soccershoes.blog",201],["mcleaks.net",202],["explorecams.com",202],["minecraft.buzz",202],["chillx.top",203],["playerx.stream",203],["m.liputan6.com",205],["stardewids.com",[205,229]],["ingles.com",206],["spanishdict.com",206],["surfline.com",207],["rureka.com",208],["bunkr.is",209],["amateur8.com",210],["freeporn8.com",210],["maturetubehere.com",210],["embedo.co",211],["corriere.it",212],["oggi.it",212],["2the.space",213],["file.gocmod.com",214],["apkcombo.com",215],["sponsorhunter.com",216],["novelssites.com",218],["torrentmac.net",219],["udvl.com",220],["moviezaddiction.icu",221],["apimate.net",222],["dlpanda.com",223],["socialmediagirls.com",224],["ecamrips.com",224],["showcamrips.com",224],["einrichtungsbeispiele.de",225],["weadown.com",226],["molotov.tv",227],["freecoursesonline.me",228],["adelsfun.com",228],["advantien.com",228],["bailbondsfinder.com",228],["bigpiecreative.com",228],["childrenslibrarylady.com",228],["classifarms.com",228],["comtasq.ca",228],["crone.es",228],["ctrmarketingsolutions.com",228],["dropnudes.com",228],["ftuapps.dev",228],["genzsport.com",228],["ghscanner.com",228],["grsprotection.com",228],["gruporafa.com.br",228],["inmatefindcalifornia.com",228],["inmatesearchidaho.com",228],["itsonsitetv.com",228],["mfmfinancials.com",228],["myproplugins.com",228],["onehack.us",228],["ovester.com",228],["paste.bin.sx",228],["privatenudes.com",228],["renoconcrete.ca",228],["richieashbeck.com",228],["sat.technology",228],["short1ink.com",228],["stpm.co.uk",228],["wegotcookies.co",228],["mathcrave.com",228],["marinetraffic.live",228],["commands.gg",229],["smgplaza.com",230],["emturbovid.com",231],["findjav.com",231],["javggvideo.xyz",231],["mmtv01.xyz",231],["stbturbo.xyz",231],["streamsilk.com",231],["freepik.com",232],["diyphotography.net",234],["bitchesgirls.com",235],["shopforex.online",236],["hiraethtranslation.com",237],["programmingeeksclub.com",238],["easymc.io",239],["diendancauduong.com",240],["androidadult.com",241],["parentcircle.com",242],["h-game18.xyz",243],["wheelofgold.com",244],["shortlinks.tech",245],["skill4ltu.eu",247],["lifestyle.bg",248],["news.bg",248],["topsport.bg",248],["webcafe.bg",248],["freepikdownloader.com",249],["freepasses.org",250],["iusedtobeaboss.com",251],["androidpolice.com",252],["cbr.com",252],["gamerant.com",252],["howtogeek.com",252],["thegamer.com",252],["blogtruyenmoi.com",253],["igay69.com",255],["graphicget.com",256],["qiwi.gg",[257,258]],["sonixgvn.net",259],["netcine2.la",260],["idnes.cz",[261,262]],["cbc.ca",263],["japscan.lol",264]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,55]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["adyou",17],["fxporn69",20],["rexporn",24],["movies07",24],["pornocomics",24],["pornomoll",28],["gsurl",29],["freecoursesonline",30],["lordpremium",30],["todovieneok",30],["novablogitalia",30],["anisubindo",30],["stream4free",30],["btvsports",30],["mimaletadepeliculas",31],["burningseries",32],["dz4soft",33],["yoututosjeff",33],["ebookmed",33],["lanjutkeun",33],["novelasesp",33],["singingdalong",33],["doujindesu",33],["xmovies8",36],["mega-dvdrip",43],["peliculas-dvdrip",43],["desbloqueador",44],["newpelis",[45,53]],["pelix",[45,53]],["allcalidad",[45,198]],["khatrimaza",45],["camwhores",46],["camwhorestv",46],["uproxy",46],["nekopoi",50],["mirrorace",59],["mixdrp",64],["asiansex",66],["japanfuck",66],["japanporn",66],["teensex",66],["vintagetube",66],["xxxmovies",66],["zooqle",69],["hdfull",73],["mangamanga",75],["streameast",77],["thestreameast",77],["vev",81],["vidop",81],["1337x",83],["x1337x",83],["zone-telechargement",83],["megalink",88],["gmx",89],["mega1080p",94],["9hentai",96],["gaypornhdfree",103],["cinemakottaga",103],["privatemoviez",103],["apkmaven",103],["popcornstream",105],["readcomiconline",115],["azsoft",116],["fc-lc",138],["nuvid",143],["pornktube",146],["watchseries",146],["milfnut",148],["pagalmovies",157],["7starhd",157],["jalshamoviez",157],["9xupload",157],["bdupload",157],["desiupload",157],["rdxhd1",157],["moviessources",167],["0gomovie",169],["0gomovies",169],["123moviefree",169],["1kmovies",169],["1madrasdub",169],["1primewire",169],["2embed",169],["2madrasdub",169],["2umovies",169],["4anime",169],["adblockplustape",169],["altadefinizione01",169],["atomixhq",169],["beinmatch",169],["brmovies",169],["cima4u",169],["clicknupload",169],["cmovies",169],["cricfree",169],["crichd",169],["databasegdriveplayer",169],["dood",169],["f1stream",169],["faselhd",169],["fbstream",169],["filemoon",169],["filepress",[169,233]],["filmlinks4u",169],["filmpertutti",169],["filmyzilla",169],["fmovies",169],["french-stream",169],["fzlink",169],["gdriveplayer",169],["gofilms4u",169],["gogoanime",169],["gomoviz",169],["hdmoviefair",169],["hdmovies4u",169],["hdmovies50",169],["hdmoviesfair",169],["hh3dhay",169],["hindilinks4u",169],["hotmasti",169],["hurawatch",169],["klmanga",169],["klubsports",169],["libertestreamvf",169],["livetvon",169],["manga1000",169],["manga1001",169],["mangaraw",169],["mangarawjp",169],["mlbstream",169],["motogpstream",169],["movierulz",169],["movies123",169],["movies2watch",169],["moviesden",169],["moviezaddiction",169],["myflixer",169],["nbastream",169],["netcine",169],["nflstream",169],["nhlstream",169],["onlinewatchmoviespk",169],["pctfenix",169],["pctnew",169],["pksmovies",169],["plyjam",169],["plylive",169],["pogolinks",169],["popcorntime",169],["poscitech",169],["prmovies",169],["rugbystreams",169],["shahed4u",169],["sflix",169],["sitesunblocked",169],["solarmovies",169],["sportcast",169],["sportskart",169],["sports-stream",169],["streaming-french",169],["streamers",169],["streamingcommunity",169],["strikeout",169],["t20cup",169],["tennisstreams",169],["torrentdosfilmes",169],["toonanime",169],["tvply",169],["ufcstream",169],["uptomega",169],["uqload",169],["vudeo",169],["vidoo",169],["vipbox",169],["vipboxtv",169],["vipleague",169],["viprow",169],["yesmovies",169],["yomovies",169],["yomovies1",169],["yt2mp3s",169],["kat",169],["katbay",169],["kickass",169],["kickasshydra",169],["kickasskat",169],["kickass2",169],["kickasstorrents",169],["kat2",169],["kattracker",169],["thekat",169],["thekickass",169],["kickassz",169],["kickasstorrents2",169],["topkickass",169],["kickassgo",169],["kkickass",169],["kkat",169],["kickasst",169],["kick4ss",169],["guardaserie",174],["cine-calidad",175],["videovard",191],["gntai",198],["grantorrent",198],["mejortorrent",198],["mejortorrento",198],["mejortorrents",198],["mejortorrents1",198],["mejortorrentt",198],["shineads",201],["bg-gledai",228],["gledaitv",228],["motchill",246]]);

const exceptionsMap = new Map([["mentor.duden.de",[76]],["forum.soft98.ir",[143,217]]]);

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
