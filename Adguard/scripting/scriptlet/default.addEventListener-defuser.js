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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["mousedown","preventDefault"],["load","nextFunction"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["DOMContentLoaded","/adb|fetch/i"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["mousedown","shown_at"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["click","open"],["load","bypass"],["DOMContentLoaded","location.href"],["","popMagic"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["","dtnoppu"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["blur"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["DOMContentLoaded","overlays"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,30]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,144]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["shemalez.com",18],["tubepornclassic.com",18],["gotporn.com",19],["freepornrocks.com",19],["tvhai.org",19],["simpcity.su",19],["realgfporn.com",[20,21]],["titsbox.com",20],["thisvid.com",21],["xvideos-downloader.net",21],["imgspice.com",22],["vikiporn.com",23],["tnaflix.com",23],["hentai2w.com",[23,196]],["yourlust.com",23],["hotpornfile.org",23],["watchfreexxx.net",23],["vintageporntubes.com",23],["angelgals.com",23],["babesexy.com",23],["porndaa.com",23],["ganstamovies.com",23],["youngleak.com",23],["porndollz.com",23],["xnxxvideo.pro",23],["xvideosxporn.com",23],["filmpornofrancais.fr",23],["pictoa.com",[23,45]],["tubator.com",23],["adultasianporn.com",23],["nsfwmonster.com",23],["girlsofdesire.org",23],["gaytail.com",23],["fetish-bb.com",23],["rumporn.com",23],["soyoungteens.com",23],["zubby.com",23],["lesbian8.com",23],["gayforfans.com",23],["reifporn.de",23],["javtsunami.com",23],["18tube.sex",23],["xxxextreme.org",23],["amateurs-fuck.com",23],["sex-amateur-clips.com",23],["hentaiworld.tv",23],["dads-banging-teens.com",23],["home-xxx-videos.com",23],["mature-chicks.com",23],["teens-fucking-matures.com",23],["hqbang.com",23],["darknessporn.com",23],["familyporner.com",23],["freepublicporn.com",23],["pisshamster.com",23],["punishworld.com",23],["xanimu.com",23],["pornhd.com",24],["cnnamador.com",[24,34]],["cle0desktop.blogspot.com",24],["turkanime.co",24],["camclips.tv",[24,46]],["blackpornhq.com",24],["xsexpics.com",24],["ulsex.net",24],["wannafreeporn.com",24],["ytube2dl.com",24],["multiup.us",24],["protege-torrent.com",24],["pussyspace.com",[25,26]],["pussyspace.net",[25,26]],["empflix.com",27],["cpmlink.net",28],["bdsmstreak.com",28],["cutpaid.com",28],["pornforrelax.com",28],["fatwhitebutt.com",28],["mavplay.xyz",28],["short.pe",29],["totaldebrid.org",30],["neko-miku.com",30],["elsfile.org",30],["venstrike.jimdofree.com",30],["schrauben-normen.de",30],["avengerinator.blogspot.com",30],["link-to.net",30],["hanimesubth.com",30],["gsmturkey.net",30],["adshrink.it",30],["presentation-ppt.com",30],["mangacanblog.com",30],["pekalongan-cits.blogspot.com",30],["4tymode.win",30],["eurotruck2.com.br",30],["tiroalpaloes.com",30],["linkvertise.com",30],["reifenrechner.at",30],["tire-size-calculator.info",30],["linuxsecurity.com",30],["encodinghub.com",30],["itsguider.com",30],["cotravinh.blogspot.com",30],["itudong.com",30],["shortx.net",30],["lecturel.com",30],["bakai.org",30],["nar.k-ba.net",30],["tiroalpalo.org",30],["bs.to",32],["efukt.com",32],["generacionretro.net",33],["nuevos-mu.ucoz.com",33],["micloudfiles.com",33],["mimaletamusical.blogspot.com",33],["visionias.net",33],["b3infoarena.in",33],["lurdchinexgist.blogspot.com",33],["thefreedommatrix.blogspot.com",33],["hentai-vl.blogspot.com",33],["projetomotog.blogspot.com",33],["ktmx.pro",33],["lirik3satu.blogspot.com",33],["marketmovers.it",33],["pharmaguideline.com",33],["safemaru.blogspot.com",33],["mixloads.com",33],["mangaromance.eu",33],["interssh.com",33],["freesoftpdfdownload.blogspot.com",33],["cirokun.blogspot.com",33],["myadslink.com",33],["blackavelic.com",33],["server.satunivers.tv",33],["eg-akw.com",33],["xn--mgba7fjn.cc",33],["flashingjungle.com",34],["ma-x.org",35],["lavozdegalicia.es",35],["xmovies08.org",37],["globaldjmix.com",38],["zazzybabes.com",39],["haaretz.co.il",40],["haaretz.com",40],["slate.com",41],["megalinks.info",42],["megapastes.com",42],["mega-mkv.com",[42,43]],["mkv-pastes.com",42],["zpaste.net",42],["zlpaste.net",42],["9xlinks.site",42],["zona-leros.net",43],["acortarm.xyz",44],["cine.to",[45,201]],["kissasia.cc",45],["digjav.com",46],["videoszoofiliahd.com",47],["xxxtubezoo.com",48],["zooredtube.com",48],["uii.io",49],["megacams.me",51],["rlslog.net",51],["porndoe.com",52],["acienciasgalilei.com",54],["playrust.io",55],["payskip.org",56],["short-url.link",57],["tubedupe.com",58],["mcrypto.club",59],["fatgirlskinny.net",60],["polska-ie.com",60],["windowsmatters.com",60],["canaltdt.es",61],["masbrooo.com",61],["2ndrun.tv",61],["oncehelp.com",62],["queenfaucet.website",62],["curto.win",62],["smallseotools.com",63],["macwelt.de",65],["pcwelt.de",65],["capital.de",65],["geo.de",65],["allmomsex.com",66],["allnewindianporn.com",66],["analxxxvideo.com",66],["animalextremesex.com",66],["anime3d.xyz",66],["animefuckmovies.com",66],["animepornfilm.com",66],["animesexbar.com",66],["animesexclip.com",66],["animexxxsex.com",66],["animexxxfilms.com",66],["anysex.club",66],["apetube.asia",66],["asianfuckmovies.com",66],["asianfucktube.com",66],["asianporn.sexy",66],["asiansexcilps.com",66],["beeg.fund",66],["beegvideoz.com",66],["bestasiansex.pro",66],["bravotube.asia",66],["brutalanimalsfuck.com",66],["candyteenporn.com",66],["daddyfuckmovies.com",66],["desifuckonline.com",66],["exclusiveasianporn.com",66],["exteenporn.com",66],["fantasticporn.net",66],["fantasticyoungporn.com",66],["fineasiansex.com",66],["firstasianpussy.com",66],["freeindiansextube.com",66],["freepornasians.com",66],["freerealvideo.com",66],["fuck-beeg.com",66],["fuck-xnxx.com",66],["fuckasian.pro",66],["fuckfuq.com",66],["fuckundies.com",66],["gojapaneseporn.com",66],["golderotica.com",66],["goodyoungsex.com",66],["goyoungporn.com",66],["hardxxxmoms.com",66],["hdvintagetube.com",66],["hentaiporn.me",66],["hentaisexfilms.com",66],["hentaisexuality.com",66],["hot-teens-movies.mobi",66],["hotanimepornvideos.com",66],["hotanimevideos.com",66],["hotasianpussysex.com",66],["hotjapaneseshows.com",66],["hotmaturetube.com",66],["hotmilfs.pro",66],["hotorientalporn.com",66],["hotpornyoung.com",66],["hotxxxjapanese.com",66],["hotxxxpussy.com",66],["indiafree.net",66],["indianpornvideo.online",66],["japanpornclip.com",66],["japanesetube.video",66],["japansex.me",66],["japanesexxxporn.com",66],["japansporno.com",66],["japanxxx.asia",66],["japanxxxworld.com",66],["keezmovies.surf",66],["lingeriefuckvideo.com",66],["liveanimalporn.zooo.club",66],["madhentaitube.com",66],["megahentaitube.com",66],["megajapanesesex.com",66],["megajapantube.com",66],["milfxxxpussy.com",66],["momsextube.pro",66],["momxxxass.com",66],["monkeyanimalporn.com",66],["moviexxx.mobi",66],["newanimeporn.com",66],["newjapanesexxx.com",66],["nicematureporn.com",66],["nudeplayboygirls.com",66],["openxxxporn.com",66],["originalindianporn.com",66],["originalteentube.com",66],["pig-fuck.com",66],["plainasianporn.com",66],["popularasianxxx.com",66],["pornanimetube.com",66],["pornasians.pro",66],["pornhat.asia",66],["pornheed.online",66],["pornjapanesesex.com",66],["pornomovies.asia",66],["pornvintage.tv",66],["primeanimesex.com",66],["realjapansex.com",66],["realmomsex.com",66],["redsexhub.com",66],["retroporn.world",66],["retrosexfilms.com",66],["sex-free-movies.com",66],["sexanimesex.com",66],["sexanimetube.com",66],["sexjapantube.com",66],["sexmomvideos.com",66],["sexteenxxxtube.com",66],["sexxxanimal.com",66],["sexyoungtube.com",66],["sexyvintageporn.com",66],["sopornmovies.com",66],["spicyvintageporn.com",66],["sunporno.club",66],["tabooanime.club",66],["teenextrem.com",66],["teenfucksex.com",66],["teenhost.net",66],["teensexass.com",66],["tnaflix.asia",66],["totalfuckmovies.com",66],["totalmaturefuck.com",66],["txxx.asia",66],["voyeurpornsex.com",66],["warmteensex.com",66],["wetasiancreampie.com",66],["wildhentaitube.com",66],["wowyoungsex.com",66],["xhamster-art.com",66],["xmovie.pro",66],["xnudevideos.com",66],["xnxxjapon.com",66],["xpics.me",66],["xvide.me",66],["xxxanimefuck.com",66],["xxxanimevideos.com",66],["xxxanimemovies.com",66],["xxxhentaimovies.com",66],["xxxhothub.com",66],["xxxjapaneseporntube.com",66],["xxxlargeporn.com",66],["xxxmomz.com",66],["xxxpornmilf.com",66],["xxxpussyclips.com",66],["xxxpussysextube.com",66],["xxxretrofuck.com",66],["xxxsex.pro",66],["xxxsexyjapanese.com",66],["xxxteenyporn.com",66],["xxxvideo.asia",66],["xxxvideos.ink",66],["xxxyoungtv.com",66],["youjizzz.club",66],["youngpussyfuck.com",66],["bayimg.com",67],["celeb.gate.cc",68],["masterplayer.xyz",70],["pussy-hub.com",70],["porndex.com",71],["compucalitv.com",72],["diariodenavarra.es",74],["duden.de",76],["pennlive.com",78],["beautypageants.indiatimes.com",79],["01fmovies.com",80],["lnk2.cc",82],["fullhdxxx.com",83],["luscious.net",[83,144]],["classicpornbest.com",83],["xstory-fr.com",83],["1youngteenporn.com",83],["www-daftarharga.blogspot.com",[83,185]],["miraculous.to",[83,191]],["vtube.to",83],["gosexpod.com",84],["otakukan.com",85],["xcafe.com",86],["pornfd.com",86],["venusarchives.com",86],["imagehaha.com",87],["imagenpic.com",87],["imageshimage.com",87],["imagetwist.com",87],["k1nk.co",88],["watchasians.cc",88],["alexsports.xyz",88],["lulustream.com",88],["luluvdo.com",88],["web.de",89],["news18.com",90],["thelanb.com",91],["dropmms.com",91],["softwaredescargas.com",92],["cracking-dz.com",93],["anitube.ninja",94],["gazzetta.it",95],["port.hu",97],["dziennikbaltycki.pl",98],["dzienniklodzki.pl",98],["dziennikpolski24.pl",98],["dziennikzachodni.pl",98],["echodnia.eu",98],["expressbydgoski.pl",98],["expressilustrowany.pl",98],["gazetakrakowska.pl",98],["gazetalubuska.pl",98],["gazetawroclawska.pl",98],["gk24.pl",98],["gloswielkopolski.pl",98],["gol24.pl",98],["gp24.pl",98],["gra.pl",98],["gs24.pl",98],["kurierlubelski.pl",98],["motofakty.pl",98],["naszemiasto.pl",98],["nowiny24.pl",98],["nowosci.com.pl",98],["nto.pl",98],["polskatimes.pl",98],["pomorska.pl",98],["poranny.pl",98],["sportowy24.pl",98],["strefaagro.pl",98],["strefabiznesu.pl",98],["stronakobiet.pl",98],["telemagazyn.pl",98],["to.com.pl",98],["wspolczesna.pl",98],["course9x.com",98],["courseclub.me",98],["azrom.net",98],["alttyab.net",98],["esopress.com",98],["nesiaku.my.id",98],["onemanhua.com",99],["freeindianporn.mobi",99],["dr-farfar.com",100],["boyfriendtv.com",101],["brandstofprijzen.info",102],["netfuck.net",103],["blog24.me",[103,138]],["kisahdunia.com",103],["javsex.to",103],["nulljungle.com",103],["oyuncusoruyor.com",103],["pbarecap.ph",103],["sourds.net",103],["teknobalta.com",103],["tvinternetowa.info",103],["sqlserveregitimleri.com",103],["tutcourse.com",103],["readytechflip.com",103],["novinhastop.com",103],["warddogs.com",103],["dvdgayporn.com",103],["iimanga.com",103],["tinhocdongthap.com",103],["tremamnon.com",103],["423down.com",103],["brizzynovel.com",103],["jugomobile.com",103],["freecodezilla.net",103],["animekhor.xyz",103],["iconmonstr.com",103],["gay-tubes.cc",103],["rbxscripts.net",103],["comentariodetexto.com",103],["wordpredia.com",103],["livsavr.co",103],["allfaucet.xyz",[103,138]],["titbytz.tk",103],["replica-watch.info",103],["alludemycourses.com",103],["kayifamilytv.com",103],["iir.ai",104],["gameofporn.com",106],["qpython.club",107],["antifake-funko.fr",107],["dktechnicalmate.com",107],["recipahi.com",107],["e9china.net",108],["ontools.net",108],["marketbeat.com",109],["hentaipornpics.net",110],["apps2app.com",111],["alliptvlinks.com",112],["waterfall.money",112],["xvideos.com",113],["xvideos2.com",113],["homemoviestube.com",114],["sexseeimage.com",114],["jpopsingles.eu",116],["aipebel.com",116],["azmath.info",116],["downfile.site",116],["downphanmem.com",116],["expertvn.com",116],["memangbau.com",116],["trangchu.news",116],["aztravels.net",116],["ielts-isa.edu.vn",116],["techedubyte.com",[116,249]],["tubereader.me",117],["repretel.com",117],["dagensnytt.com",118],["mrproblogger.com",118],["themezon.net",118],["gfx-station.com",119],["bitzite.com",[119,138,143]],["historyofroyalwomen.com",120],["davescomputertips.com",120],["ukchat.co.uk",121],["hivelr.com",122],["skidrowcodex.net",123],["takimag.com",124],["digi.no",125],["th.gl",126],["scimagojr.com",127],["haxina.com",127],["cryptofenz.xyz",127],["twi-fans.com",128],["learn-cpp.org",129],["soccerinhd.com",130],["terashare.co",131],["pornwex.tv",132],["smithsonianmag.com",133],["homesports.net",134],["cineb.rs",135],["rawkuma.com",[135,182]],["moviesjoyhd.to",135],["upshrink.com",136],["ohionowcast.info",138],["wiour.com",138],["appsbull.com",138],["diudemy.com",138],["maqal360.com",138],["bitcotasks.com",138],["videolyrics.in",138],["manofadan.com",138],["cempakajaya.com",138],["tagecoin.com",138],["doge25.in",138],["king-ptcs.com",138],["naijafav.top",138],["ourcoincash.xyz",138],["sh.techsamir.com",138],["claimcoins.site",138],["cryptosh.pro",138],["coinsrev.com",138],["go.freetrx.fun",138],["eftacrypto.com",138],["fescrypto.com",138],["earnhub.net",138],["kiddyshort.com",138],["tronxminer.com",138],["homeairquality.org",139],["cety.app",[140,141]],["exego.app",140],["cutlink.net",140],["cutsy.net",140],["cutyurls.com",140],["cutty.app",140],["cutnet.net",140],["justin.mp3quack.lol",141],["adcrypto.net",142],["admediaflex.com",142],["aduzz.com",142],["bitcrypto.info",142],["cdrab.com",142],["datacheap.io",142],["hbz.us",142],["savego.org",142],["owsafe.com",142],["sportweb.info",142],["aiimgvlog.fun",144],["6indianporn.com",144],["amateurebonypics.com",144],["amateuryoungpics.com",144],["cinemabg.net",144],["coomer.su",144],["desimmshd.com",144],["frauporno.com",144],["givemeaporn.com",144],["hitomi.la",144],["jav-asia.top",144],["javf.net",144],["javideo.net",144],["kemono.su",144],["kr18plus.com",144],["pilibook.com",144],["pornborne.com",144],["porngrey.com",144],["qqxnxx.com",144],["sexvideos.host",144],["submilf.com",144],["subtaboo.com",144],["tktube.com",144],["xfrenchies.com",144],["moderngyan.com",145],["sattakingcharts.in",145],["freshbhojpuri.com",145],["bgmi32bitapk.in",145],["bankshiksha.in",145],["earn.mpscstudyhub.com",145],["earn.quotesopia.com",145],["money.quotesopia.com",145],["best-mobilegames.com",145],["learn.moderngyan.com",145],["bharatsarkarijobalert.com",145],["coingraph.us",146],["momo-net.com",146],["maxgaming.fi",146],["cybercityhelp.in",147],["travel.vebma.com",148],["cloud.majalahhewan.com",148],["crm.cekresi.me",148],["ai.tempatwisata.pro",148],["pinloker.com",148],["sekilastekno.com",148],["link.paid4link.com",149],["vulture.com",150],["megaplayer.bokracdn.run",151],["hentaistream.com",152],["siteunblocked.info",153],["larvelfaucet.com",154],["feyorra.top",154],["claimtrx.com",154],["moviesyug.net",155],["w4files.ws",155],["parispi.net",156],["paperzonevn.com",157],["dailyvideoreports.net",158],["lewd.ninja",159],["systemnews24.com",160],["incestvidz.com",161],["niusdiario.es",162],["playporngames.com",163],["movi.pk",[164,167]],["cutesexyteengirls.com",166],["0dramacool.net",167],["185.53.88.104",167],["185.53.88.204",167],["185.53.88.15",167],["123movies4k.net",167],["1rowsports.com",167],["4share-mp3.net",167],["9animetv.to",167],["720pstream.me",167],["aagmaal.com",167],["abysscdn.com",167],["ajkalerbarta.com",167],["akstream.xyz",167],["androidapks.biz",167],["androidsite.net",167],["animeonlinefree.org",167],["animesite.net",167],["animespank.com",167],["aniworld.to",167],["apkmody.io",167],["appsfree4u.com",167],["audioz.download",167],["awafim.tv",167],["bdnewszh.com",167],["beastlyprints.com",167],["bengalisite.com",167],["bestfullmoviesinhd.org",167],["betteranime.net",167],["blacktiesports.live",167],["buffsports.stream",167],["ch-play.com",167],["clickforhire.com",167],["cloudy.pk",167],["computercrack.com",167],["coolcast2.com",167],["crackedsoftware.biz",167],["crackfree.org",167],["cracksite.info",167],["cryptoblog24.info",167],["cuatrolatastv.blogspot.com",167],["cydiasources.net",167],["decmelfot.xyz",167],["dirproxy.com",167],["dopebox.to",167],["downloadapk.info",167],["downloadapps.info",167],["downloadgames.info",167],["downloadmusic.info",167],["downloadsite.org",167],["downloadwella.com",167],["ebooksite.org",167],["educationtips213.blogspot.com",167],["egyup.live",167],["elgoles.pro",167],["embed.meomeo.pw",167],["embed.scdn.to",167],["emulatorsite.com",167],["essaysharkwriting.club",167],["exploreera.net",167],["extrafreetv.com",167],["fakedetail.com",167],["fclecteur.com",167],["files.im",167],["flexyhit.com",167],["fmoviefree.net",167],["fmovies24.com",167],["footyhunter3.xyz",167],["freeflix.info",167],["freemoviesu4.com",167],["freeplayervideo.com",167],["freesoccer.net",167],["fseries.org",167],["gamefast.org",167],["gamesite.info",167],["gettapeads.com",167],["gmanga.me",167],["gocast123.me",167],["gogohd.net",167],["gogoplay5.com",167],["gooplay.net",167],["gostreamon.net",167],["happy2hub.org",167],["harimanga.com",167],["healthnewsreel.com",167],["hexupload.net",167],["hinatasoul.com",167],["hindisite.net",167],["holymanga.net",167],["hxfile.co",167],["isosite.org",167],["iv-soft.com",167],["januflix.expert",167],["jewelry.com.my",167],["johnwardflighttraining.com",167],["kabarportal.com",167],["kstorymedia.com",167],["la123movies.org",167],["lespassionsdechinouk.com",167],["lilymanga.net",167],["linksdegrupos.com.br",167],["linkz.wiki",167],["livestreamtv.pk",167],["macsite.info",167],["mangapt.com",167],["mangasite.org",167],["manhuascan.com",167],["megafilmeshdseries.com",167],["megamovies.org",167],["membed.net",167],["moddroid.com",167],["moviefree2.com",167],["movies-watch.com.pk",167],["moviesite.app",167],["moviesonline.fm",167],["moviesx.org",167],["msmoviesbd.com",167],["musicsite.biz",167],["myfernweh.com",167],["myviid.com",167],["nazarickol.com",167],["noob4cast.com",167],["nsw2u.com",[167,258]],["oko.sh",167],["olympicstreams.me",167],["orangeink.pk",167],["owllink.net",167],["pahaplayers.click",167],["patchsite.net",167],["pdfsite.net",167],["play1002.com",167],["player-cdn.com",167],["productkeysite.com",167],["projectfreetv.one",167],["romsite.org",167],["rufiguta.com",167],["rytmp3.io",167],["send.cm",167],["seriesite.net",167],["seriezloaded.com.ng",167],["serijehaha.com",167],["shrugemojis.com",167],["siteapk.net",167],["siteflix.org",167],["sitegames.net",167],["sitekeys.net",167],["sitepdf.com",167],["sitetorrent.com",167],["softwaresite.net",167],["sportbar.live",167],["sportkart1.xyz",167],["ssyoutube.com",167],["stardima.com",167],["stream4free.live",167],["superapk.org",167],["supermovies.org",167],["tainio-mania.online",167],["talaba.su",167],["tamilguns.org",167],["tatabrada.tv",167],["techtrendmakers.com",167],["theflixer.tv",167],["thememypc.net",167],["thetechzone.online",167],["thripy.com",167],["tonnestreamz.xyz",167],["travelplanspro.com",167],["turcasmania.com",167],["tusfiles.com",167],["tvonlinesports.com",167],["ultramovies.org",167],["uploadbank.com",167],["urdubolo.pk",167],["vidspeeds.com",167],["vumoo.to",167],["warezsite.net",167],["watchmovies2.com",167],["watchmoviesforfree.org",167],["watchofree.com",167],["watchsite.net",167],["watchsouthpark.tv",167],["watchtvch.club",167],["web.livecricket.is",167],["webseries.club",167],["worldcupstream.pm",167],["y2mate.com",167],["youapk.net",167],["youtube4kdownloader.com",167],["yts-subs.com",167],["haho.moe",168],["nicy-spicy.pw",169],["novelmultiverse.com",170],["mylegalporno.com",171],["videowood.tv",174],["thecut.com",175],["novelism.jp",176],["alphapolis.co.jp",177],["okrzone.com",178],["game3rb.com",179],["javhub.net",179],["thotvids.com",180],["berklee.edu",181],["imeteo.sk",183],["youtubemp3donusturucu.net",184],["surfsees.com",186],["vivo.st",[187,188]],["alueviesti.fi",190],["kiuruvesilehti.fi",190],["lempaala.ideapark.fi",190],["olutposti.fi",190],["urjalansanomat.fi",190],["tainhanhvn.com",192],["titantv.com",193],["3cinfo.net",194],["transportationlies.org",195],["camarchive.tv",196],["crownimg.com",196],["freejav.guru",196],["hentai2read.com",196],["icyporno.com",196],["illink.net",196],["javtiful.com",196],["m-hentai.net",196],["pornblade.com",196],["pornfelix.com",196],["pornxxxxtube.net",196],["redwap.me",196],["redwap2.com",196],["redwap3.com",196],["sunporno.com",196],["tubxporn.xxx",196],["ver-comics-porno.com",196],["ver-mangas-porno.com",196],["xanimeporn.com",196],["xxxvideohd.net",196],["zetporn.com",196],["cocomanga.com",197],["sampledrive.in",198],["mcleaks.net",199],["explorecams.com",199],["minecraft.buzz",199],["chillx.top",200],["playerx.stream",200],["m.liputan6.com",202],["stardewids.com",[202,225]],["ingles.com",203],["spanishdict.com",203],["surfline.com",204],["rureka.com",205],["bunkr.is",206],["amateur8.com",207],["freeporn8.com",207],["maturetubehere.com",207],["embedo.co",208],["corriere.it",209],["oggi.it",209],["2the.space",210],["file.gocmod.com",211],["apkcombo.com",212],["sponsorhunter.com",213],["soft98.ir",214],["novelssites.com",215],["torrentmac.net",216],["udvl.com",217],["moviezaddiction.icu",218],["dlpanda.com",219],["socialmediagirls.com",220],["ecamrips.com",220],["showcamrips.com",220],["einrichtungsbeispiele.de",221],["weadown.com",222],["molotov.tv",223],["freecoursesonline.me",224],["adelsfun.com",224],["advantien.com",224],["bailbondsfinder.com",224],["bigpiecreative.com",224],["childrenslibrarylady.com",224],["classifarms.com",224],["comtasq.ca",224],["crone.es",224],["ctrmarketingsolutions.com",224],["dropnudes.com",224],["ftuapps.dev",224],["genzsport.com",224],["ghscanner.com",224],["grsprotection.com",224],["gruporafa.com.br",224],["inmatefindcalifornia.com",224],["inmatesearchidaho.com",224],["itsonsitetv.com",224],["mfmfinancials.com",224],["myproplugins.com",224],["onehack.us",224],["ovester.com",224],["paste.bin.sx",224],["privatenudes.com",224],["renoconcrete.ca",224],["richieashbeck.com",224],["sat.technology",224],["short1ink.com",224],["stpm.co.uk",224],["wegotcookies.co",224],["mathcrave.com",224],["commands.gg",225],["smgplaza.com",226],["emturbovid.com",227],["findjav.com",227],["mmtv01.xyz",227],["stbturbo.xyz",227],["streamsilk.com",227],["freepik.com",228],["diyphotography.net",230],["bitchesgirls.com",231],["shopforex.online",232],["programmingeeksclub.com",233],["easymc.io",234],["diendancauduong.com",235],["parentcircle.com",236],["h-game18.xyz",237],["nopay.info",238],["wheelofgold.com",239],["shortlinks.tech",240],["skill4ltu.eu",242],["lifestyle.bg",243],["news.bg",243],["topsport.bg",243],["webcafe.bg",243],["freepikdownloader.com",244],["freepasses.org",245],["iusedtobeaboss.com",246],["androidpolice.com",247],["cbr.com",247],["gamerant.com",247],["howtogeek.com",247],["thegamer.com",247],["blogtruyenmoi.com",248],["igay69.com",250],["graphicget.com",251],["qiwi.gg",252],["sonixgvn.net",253],["netcine2.la",254],["idnes.cz",[255,256]],["cbc.ca",257]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,55]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["adyou",17],["fxporn69",20],["rexporn",24],["movies07",24],["pornocomics",24],["pornomoll",28],["gsurl",29],["freecoursesonline",30],["lordpremium",30],["todovieneok",30],["novablogitalia",30],["anisubindo",30],["btvsports",30],["mimaletadepeliculas",31],["burningseries",32],["dz4soft",33],["yoututosjeff",33],["ebookmed",33],["lanjutkeun",33],["novelasesp",33],["singingdalong",33],["doujindesu",33],["xmovies8",36],["mega-dvdrip",43],["peliculas-dvdrip",43],["desbloqueador",44],["newpelis",[45,53]],["pelix",[45,53]],["allcalidad",[45,196]],["khatrimaza",45],["camwhores",46],["camwhorestv",46],["uproxy",46],["nekopoi",50],["mirrorace",59],["mixdrp",64],["asiansex",66],["japanfuck",66],["japanporn",66],["teensex",66],["vintagetube",66],["xxxmovies",66],["zooqle",69],["hdfull",73],["mangamanga",75],["streameast",77],["thestreameast",77],["vev",81],["vidop",81],["1337x",83],["x1337x",83],["zone-telechargement",83],["megalink",88],["gmx",89],["mega1080p",94],["9hentai",96],["gaypornhdfree",103],["cinemakottaga",103],["privatemoviez",103],["apkmaven",103],["popcornstream",105],["readcomiconline",115],["azsoft",116],["fc-lc",137],["nuvid",141],["pornktube",144],["watchseries",144],["milfnut",146],["pagalmovies",155],["7starhd",155],["jalshamoviez",155],["9xupload",155],["bdupload",155],["desiupload",155],["rdxhd1",155],["moviessources",165],["0gomovie",167],["0gomovies",167],["123moviefree",167],["1kmovies",167],["1madrasdub",167],["1primewire",167],["2embed",167],["2madrasdub",167],["2umovies",167],["4anime",167],["adblockplustape",167],["altadefinizione01",167],["anitube",167],["atomixhq",167],["beinmatch",167],["brmovies",167],["cima4u",167],["clicknupload",167],["cmovies",167],["cricfree",167],["crichd",167],["databasegdriveplayer",167],["dood",167],["f1stream",167],["faselhd",167],["fbstream",167],["file4go",167],["filemoon",167],["filepress",[167,229]],["filmlinks4u",167],["filmpertutti",167],["filmyzilla",167],["fmovies",167],["french-stream",167],["fzlink",167],["gdriveplayer",167],["gofilms4u",167],["gogoanime",167],["gomoviz",167],["hdmoviefair",167],["hdmovies4u",167],["hdmovies50",167],["hdmoviesfair",167],["hh3dhay",167],["hindilinks4u",167],["hotmasti",167],["hurawatch",167],["klmanga",167],["klubsports",167],["libertestreamvf",167],["livetvon",167],["manga1000",167],["manga1001",167],["mangaraw",167],["mangarawjp",167],["mlbstream",167],["motogpstream",167],["movierulz",167],["movies123",167],["movies2watch",167],["moviesden",167],["moviezaddiction",167],["myflixer",167],["nbastream",167],["netcine",167],["nflstream",167],["nhlstream",167],["onlinewatchmoviespk",167],["pctfenix",167],["pctnew",167],["pksmovies",167],["plyjam",167],["plylive",167],["pogolinks",167],["popcorntime",167],["poscitech",167],["prmovies",167],["rugbystreams",167],["shahed4u",167],["sflix",167],["sitesunblocked",167],["solarmovies",167],["sportcast",167],["sportskart",167],["sports-stream",167],["streaming-french",167],["streamers",167],["streamingcommunity",167],["strikeout",167],["t20cup",167],["tennisstreams",167],["torrentdosfilmes",167],["toonanime",167],["tvply",167],["ufcstream",167],["uptomega",167],["uqload",167],["vudeo",167],["vidoo",167],["vipbox",167],["vipboxtv",167],["vipleague",167],["viprow",167],["yesmovies",167],["yomovies",167],["yomovies1",167],["yt2mp3s",167],["kat",167],["katbay",167],["kickass",167],["kickasshydra",167],["kickasskat",167],["kickass2",167],["kickasstorrents",167],["kat2",167],["kattracker",167],["thekat",167],["thekickass",167],["kickassz",167],["kickasstorrents2",167],["topkickass",167],["kickassgo",167],["kkickass",167],["kkat",167],["kickasst",167],["kick4ss",167],["guardaserie",172],["cine-calidad",173],["videovard",189],["gntai",196],["grantorrent",196],["mejortorrent",196],["mejortorrento",196],["mejortorrents",196],["mejortorrents1",196],["mejortorrentt",196],["shineads",198],["bg-gledai",224],["gledaitv",224],["motchill",241]]);

const exceptionsMap = new Map([["mentor.duden.de",[76]],["forum.soft98.ir",[214]]]);

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
        proxyApplyFn('EventTarget.prototype.addEventListener', function(target, thisArg, args) {
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
    const fnStr = fn.toString();
    const toString = (function toString() { return fnStr; }).bind(null);
    if ( fn.prototype && fn.prototype.constructor === fn ) {
        context[prop] = new Proxy(fn, {
            construct: handler,
            get(target, prop, receiver) {
                if ( prop === 'toString' ) { return toString; }
                return Reflect.get(target, prop, receiver);
            },
        });
        return (...args) => Reflect.construct(...args);
    }
    context[prop] = new Proxy(fn, {
        apply: handler,
        get(target, prop, receiver) {
            if ( prop === 'toString' ) { return toString; }
            return Reflect.get(target, prop, receiver);
        },
    });
    return (...args) => Reflect.apply(...args);
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
