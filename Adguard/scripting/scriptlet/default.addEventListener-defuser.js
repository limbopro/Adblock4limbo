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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["click","clickCount"],["mousedown","localStorage"],["DOMContentLoaded","document.documentElement.lang.toLowerCase"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load",".call(this"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["DOMContentLoaded","/adb|fetch/i"],["click","attached","elements","div[class=\"share-embed-container\"]"],["click","fp-screen"],["DOMContentLoaded","leaderboardAd"],["DOMContentLoaded","fetch"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","/handleClick|popup/"],["load","bypass"],["DOMContentLoaded","location.href"],["","popMagic"],["click","Popunder"],["contextmenu"],["submit","validateForm"],["blur","counter"],["click","maxclick"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["","dtnoppu"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["blur"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["DOMContentLoaded","location.replace"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["load","[native code]"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["9goals.live",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,145]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,200]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,47]],["tubator.com",24],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,36]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,48]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,200]],["short.pe",32],["bs.to",34],["efukt.com",34],["generacionretro.net",35],["nuevos-mu.ucoz.com",35],["micloudfiles.com",35],["mimaletamusical.blogspot.com",35],["visionias.net",35],["b3infoarena.in",35],["lurdchinexgist.blogspot.com",35],["thefreedommatrix.blogspot.com",35],["hentai-vl.blogspot.com",35],["projetomotog.blogspot.com",35],["ktmx.pro",35],["lirik3satu.blogspot.com",35],["marketmovers.it",35],["pharmaguideline.com",35],["safemaru.blogspot.com",35],["mixloads.com",35],["mangaromance.eu",35],["interssh.com",35],["freesoftpdfdownload.blogspot.com",35],["cirokun.blogspot.com",35],["myadslink.com",35],["blackavelic.com",35],["server.satunivers.tv",35],["eg-akw.com",35],["xn--mgba7fjn.cc",35],["flashingjungle.com",36],["ma-x.org",37],["lavozdegalicia.es",37],["xmovies08.org",39],["globaldjmix.com",40],["zazzybabes.com",41],["haaretz.co.il",42],["haaretz.com",42],["slate.com",43],["megalinks.info",44],["megapastes.com",44],["mega-mkv.com",[44,45]],["mkv-pastes.com",44],["zpaste.net",44],["zlpaste.net",44],["9xlinks.site",44],["zona-leros.net",45],["acortarm.xyz",46],["cine.to",[47,205]],["kissasia.cc",47],["digjav.com",48],["videoszoofiliahd.com",49],["xxxtubezoo.com",50],["zooredtube.com",50],["uii.io",51],["megacams.me",53],["rlslog.net",53],["porndoe.com",54],["acienciasgalilei.com",56],["playrust.io",57],["payskip.org",58],["short-url.link",59],["tubedupe.com",60],["mcrypto.club",61],["fatgirlskinny.net",62],["polska-ie.com",62],["windowsmatters.com",62],["canaltdt.es",63],["masbrooo.com",63],["2ndrun.tv",63],["stfly.me",64],["oncehelp.com",64],["queenfaucet.website",64],["curto.win",64],["smallseotools.com",65],["macwelt.de",67],["pcwelt.de",67],["capital.de",67],["geo.de",67],["allmomsex.com",68],["allnewindianporn.com",68],["analxxxvideo.com",68],["animalextremesex.com",68],["anime3d.xyz",68],["animefuckmovies.com",68],["animepornfilm.com",68],["animesexbar.com",68],["animesexclip.com",68],["animexxxsex.com",68],["animexxxfilms.com",68],["anysex.club",68],["apetube.asia",68],["asianfuckmovies.com",68],["asianfucktube.com",68],["asianporn.sexy",68],["asiansexcilps.com",68],["beeg.fund",68],["beegvideoz.com",68],["bestasiansex.pro",68],["bravotube.asia",68],["brutalanimalsfuck.com",68],["candyteenporn.com",68],["daddyfuckmovies.com",68],["desifuckonline.com",68],["exclusiveasianporn.com",68],["exteenporn.com",68],["fantasticporn.net",68],["fantasticyoungporn.com",68],["fineasiansex.com",68],["firstasianpussy.com",68],["freeindiansextube.com",68],["freepornasians.com",68],["freerealvideo.com",68],["fuck-beeg.com",68],["fuck-xnxx.com",68],["fuckasian.pro",68],["fuckfuq.com",68],["fuckundies.com",68],["gojapaneseporn.com",68],["golderotica.com",68],["goodyoungsex.com",68],["goyoungporn.com",68],["hardxxxmoms.com",68],["hdvintagetube.com",68],["hentaiporn.me",68],["hentaisexfilms.com",68],["hentaisexuality.com",68],["hot-teens-movies.mobi",68],["hotanimepornvideos.com",68],["hotanimevideos.com",68],["hotasianpussysex.com",68],["hotjapaneseshows.com",68],["hotmaturetube.com",68],["hotmilfs.pro",68],["hotorientalporn.com",68],["hotpornyoung.com",68],["hotxxxjapanese.com",68],["hotxxxpussy.com",68],["indiafree.net",68],["indianpornvideo.online",68],["japanpornclip.com",68],["japanesetube.video",68],["japansex.me",68],["japanesexxxporn.com",68],["japansporno.com",68],["japanxxx.asia",68],["japanxxxworld.com",68],["keezmovies.surf",68],["lingeriefuckvideo.com",68],["liveanimalporn.zooo.club",68],["madhentaitube.com",68],["megahentaitube.com",68],["megajapanesesex.com",68],["megajapantube.com",68],["milfxxxpussy.com",68],["momsextube.pro",68],["momxxxass.com",68],["monkeyanimalporn.com",68],["moviexxx.mobi",68],["newanimeporn.com",68],["newjapanesexxx.com",68],["nicematureporn.com",68],["nudeplayboygirls.com",68],["openxxxporn.com",68],["originalindianporn.com",68],["originalteentube.com",68],["pig-fuck.com",68],["plainasianporn.com",68],["popularasianxxx.com",68],["pornanimetube.com",68],["pornasians.pro",68],["pornhat.asia",68],["pornheed.online",68],["pornjapanesesex.com",68],["pornomovies.asia",68],["pornvintage.tv",68],["primeanimesex.com",68],["realjapansex.com",68],["realmomsex.com",68],["redsexhub.com",68],["retroporn.world",68],["retrosexfilms.com",68],["sex-free-movies.com",68],["sexanimesex.com",68],["sexanimetube.com",68],["sexjapantube.com",68],["sexmomvideos.com",68],["sexteenxxxtube.com",68],["sexxxanimal.com",68],["sexyoungtube.com",68],["sexyvintageporn.com",68],["sopornmovies.com",68],["spicyvintageporn.com",68],["sunporno.club",68],["tabooanime.club",68],["teenextrem.com",68],["teenfucksex.com",68],["teenhost.net",68],["teensexass.com",68],["tnaflix.asia",68],["totalfuckmovies.com",68],["totalmaturefuck.com",68],["txxx.asia",68],["voyeurpornsex.com",68],["warmteensex.com",68],["wetasiancreampie.com",68],["wildhentaitube.com",68],["wowyoungsex.com",68],["xhamster-art.com",68],["xmovie.pro",68],["xnudevideos.com",68],["xnxxjapon.com",68],["xpics.me",68],["xvide.me",68],["xxxanimefuck.com",68],["xxxanimevideos.com",68],["xxxanimemovies.com",68],["xxxhentaimovies.com",68],["xxxhothub.com",68],["xxxjapaneseporntube.com",68],["xxxlargeporn.com",68],["xxxmomz.com",68],["xxxpornmilf.com",68],["xxxpussyclips.com",68],["xxxpussysextube.com",68],["xxxretrofuck.com",68],["xxxsex.pro",68],["xxxsexyjapanese.com",68],["xxxteenyporn.com",68],["xxxvideo.asia",68],["xxxvideos.ink",68],["xxxyoungtv.com",68],["youjizzz.club",68],["youngpussyfuck.com",68],["bayimg.com",69],["celeb.gate.cc",70],["masterplayer.xyz",72],["pussy-hub.com",72],["porndex.com",73],["compucalitv.com",74],["diariodenavarra.es",76],["duden.de",78],["pennlive.com",80],["beautypageants.indiatimes.com",81],["01fmovies.com",82],["lnk2.cc",84],["fullhdxxx.com",85],["luscious.net",[85,145]],["classicpornbest.com",85],["xstory-fr.com",85],["1youngteenporn.com",85],["www-daftarharga.blogspot.com",[85,189]],["miraculous.to",[85,195]],["vtube.to",85],["gosexpod.com",86],["otakukan.com",87],["xcafe.com",88],["pornfd.com",88],["venusarchives.com",88],["imagehaha.com",89],["imagenpic.com",89],["imageshimage.com",89],["imagetwist.com",89],["k1nk.co",90],["watchasians.cc",90],["alexsports.xyz",90],["lulustream.com",90],["luluvdo.com",90],["web.de",91],["news18.com",92],["thelanb.com",93],["dropmms.com",93],["softwaredescargas.com",94],["cracking-dz.com",95],["anitube.ninja",96],["gazzetta.it",97],["port.hu",99],["dziennikbaltycki.pl",100],["dzienniklodzki.pl",100],["dziennikpolski24.pl",100],["dziennikzachodni.pl",100],["echodnia.eu",100],["expressbydgoski.pl",100],["expressilustrowany.pl",100],["gazetakrakowska.pl",100],["gazetalubuska.pl",100],["gazetawroclawska.pl",100],["gk24.pl",100],["gloswielkopolski.pl",100],["gol24.pl",100],["gp24.pl",100],["gra.pl",100],["gs24.pl",100],["kurierlubelski.pl",100],["motofakty.pl",100],["naszemiasto.pl",100],["nowiny24.pl",100],["nowosci.com.pl",100],["nto.pl",100],["polskatimes.pl",100],["pomorska.pl",100],["poranny.pl",100],["sportowy24.pl",100],["strefaagro.pl",100],["strefabiznesu.pl",100],["stronakobiet.pl",100],["telemagazyn.pl",100],["to.com.pl",100],["wspolczesna.pl",100],["course9x.com",100],["courseclub.me",100],["azrom.net",100],["alttyab.net",100],["esopress.com",100],["nesiaku.my.id",100],["onemanhua.com",101],["freeindianporn.mobi",101],["dr-farfar.com",102],["boyfriendtv.com",103],["brandstofprijzen.info",104],["netfuck.net",105],["blog24.me",[105,140]],["kisahdunia.com",105],["javsex.to",105],["nulljungle.com",105],["oyuncusoruyor.com",105],["pbarecap.ph",105],["sourds.net",105],["teknobalta.com",105],["tvinternetowa.info",105],["sqlserveregitimleri.com",105],["tutcourse.com",105],["readytechflip.com",105],["novinhastop.com",105],["warddogs.com",105],["dvdgayporn.com",105],["iimanga.com",105],["tinhocdongthap.com",105],["tremamnon.com",105],["423down.com",105],["brizzynovel.com",105],["jugomobile.com",105],["freecodezilla.net",105],["animekhor.xyz",105],["iconmonstr.com",105],["gay-tubes.cc",105],["rbxscripts.net",105],["comentariodetexto.com",105],["wordpredia.com",105],["livsavr.co",105],["allfaucet.xyz",[105,140]],["titbytz.tk",105],["replica-watch.info",105],["alludemycourses.com",105],["kayifamilytv.com",105],["iir.ai",106],["gameofporn.com",108],["qpython.club",109],["antifake-funko.fr",109],["dktechnicalmate.com",109],["recipahi.com",109],["e9china.net",110],["ontools.net",110],["marketbeat.com",111],["hentaipornpics.net",112],["apps2app.com",113],["alliptvlinks.com",114],["waterfall.money",114],["xvideos.com",115],["xvideos2.com",115],["homemoviestube.com",116],["sexseeimage.com",116],["jpopsingles.eu",118],["azmath.info",118],["downfile.site",118],["downphanmem.com",118],["expertvn.com",118],["memangbau.com",118],["trangchu.news",118],["aztravels.net",118],["ielts-isa.edu.vn",118],["techedubyte.com",[118,253]],["tubereader.me",119],["repretel.com",119],["dagensnytt.com",120],["mrproblogger.com",120],["themezon.net",120],["gfx-station.com",121],["bitzite.com",[121,140,144]],["historyofroyalwomen.com",122],["davescomputertips.com",122],["ukchat.co.uk",123],["hivelr.com",124],["embedz.click",125],["skidrowcodex.net",126],["takimag.com",127],["digi.no",128],["th.gl",129],["scimagojr.com",130],["haxina.com",130],["cryptofenz.xyz",130],["twi-fans.com",131],["learn-cpp.org",132],["soccerinhd.com",133],["terashare.co",134],["pornwex.tv",135],["smithsonianmag.com",136],["homesports.net",137],["upshrink.com",138],["ohionowcast.info",140],["wiour.com",140],["appsbull.com",140],["diudemy.com",140],["maqal360.com",140],["bitcotasks.com",140],["videolyrics.in",140],["manofadan.com",140],["cempakajaya.com",140],["tagecoin.com",140],["doge25.in",140],["king-ptcs.com",140],["naijafav.top",140],["ourcoincash.xyz",140],["sh.techsamir.com",140],["claimcoins.site",140],["cryptosh.pro",140],["coinsrev.com",140],["go.freetrx.fun",140],["eftacrypto.com",140],["fescrypto.com",140],["earnhub.net",140],["kiddyshort.com",140],["tronxminer.com",140],["homeairquality.org",141],["cety.app",142],["exego.app",142],["cutlink.net",142],["cutsy.net",142],["cutyurls.com",142],["cutty.app",142],["cutnet.net",142],["adcrypto.net",143],["admediaflex.com",143],["aduzz.com",143],["bitcrypto.info",143],["cdrab.com",143],["datacheap.io",143],["hbz.us",143],["savego.org",143],["owsafe.com",143],["sportweb.info",143],["aiimgvlog.fun",145],["6indianporn.com",145],["amateurebonypics.com",145],["amateuryoungpics.com",145],["cinemabg.net",145],["coomer.su",145],["desimmshd.com",145],["frauporno.com",145],["givemeaporn.com",145],["hitomi.la",145],["jav-asia.top",145],["javf.net",145],["javideo.net",145],["kemono.su",145],["kr18plus.com",145],["pilibook.com",145],["pornborne.com",145],["porngrey.com",145],["qqxnxx.com",145],["sexvideos.host",145],["submilf.com",145],["subtaboo.com",145],["tktube.com",145],["xfrenchies.com",145],["moderngyan.com",146],["sattakingcharts.in",146],["freshbhojpuri.com",146],["bgmi32bitapk.in",146],["bankshiksha.in",146],["earn.mpscstudyhub.com",146],["earn.quotesopia.com",146],["money.quotesopia.com",146],["best-mobilegames.com",146],["learn.moderngyan.com",146],["bharatsarkarijobalert.com",146],["coingraph.us",147],["momo-net.com",147],["maxgaming.fi",147],["cybercityhelp.in",148],["travel.vebma.com",149],["cloud.majalahhewan.com",149],["crm.cekresi.me",149],["ai.tempatwisata.pro",149],["pinloker.com",149],["sekilastekno.com",149],["link.paid4link.com",150],["vulture.com",151],["megaplayer.bokracdn.run",152],["hentaistream.com",153],["siteunblocked.info",154],["larvelfaucet.com",155],["feyorra.top",155],["claimtrx.com",155],["moviesyug.net",156],["w4files.ws",156],["parispi.net",157],["simkl.com",158],["paperzonevn.com",159],["dailyvideoreports.net",160],["lewd.ninja",161],["systemnews24.com",162],["incestvidz.com",163],["niusdiario.es",164],["playporngames.com",165],["movi.pk",[166,170]],["justin.mp3quack.lol",168],["cutesexyteengirls.com",169],["0dramacool.net",170],["185.53.88.104",170],["185.53.88.204",170],["185.53.88.15",170],["123movies4k.net",170],["1movieshd.com",170],["1rowsports.com",170],["4share-mp3.net",170],["6movies.net",170],["9animetv.to",170],["720pstream.me",170],["aagmaal.com",170],["abysscdn.com",170],["ajkalerbarta.com",170],["akstream.xyz",170],["androidapks.biz",170],["androidsite.net",170],["animeonlinefree.org",170],["animesite.net",170],["animespank.com",170],["aniworld.to",170],["apkmody.io",170],["appsfree4u.com",170],["audioz.download",170],["awafim.tv",170],["bdnewszh.com",170],["beastlyprints.com",170],["bengalisite.com",170],["bestfullmoviesinhd.org",170],["betteranime.net",170],["blacktiesports.live",170],["buffsports.stream",170],["ch-play.com",170],["clickforhire.com",170],["cloudy.pk",170],["computercrack.com",170],["coolcast2.com",170],["crackedsoftware.biz",170],["crackfree.org",170],["cracksite.info",170],["cryptoblog24.info",170],["cuatrolatastv.blogspot.com",170],["cydiasources.net",170],["decmelfot.xyz",170],["dirproxy.com",170],["dopebox.to",170],["downloadapk.info",170],["downloadapps.info",170],["downloadgames.info",170],["downloadmusic.info",170],["downloadsite.org",170],["downloadwella.com",170],["ebooksite.org",170],["educationtips213.blogspot.com",170],["egyup.live",170],["elgoles.pro",170],["embed.meomeo.pw",170],["embed.scdn.to",170],["emulatorsite.com",170],["essaysharkwriting.club",170],["exploreera.net",170],["extrafreetv.com",170],["fakedetail.com",170],["fclecteur.com",170],["files.im",170],["flexyhit.com",170],["fmoviefree.net",170],["fmovies24.com",170],["footyhunter3.xyz",170],["freeflix.info",170],["freemoviesu4.com",170],["freeplayervideo.com",170],["freesoccer.net",170],["fseries.org",170],["gamefast.org",170],["gamesite.info",170],["gettapeads.com",170],["gmanga.me",170],["gocast123.me",170],["gogohd.net",170],["gogoplay5.com",170],["gooplay.net",170],["gostreamon.net",170],["happy2hub.org",170],["harimanga.com",170],["healthnewsreel.com",170],["hexupload.net",170],["hinatasoul.com",170],["hindisite.net",170],["holymanga.net",170],["hxfile.co",170],["isosite.org",170],["iv-soft.com",170],["januflix.expert",170],["jewelry.com.my",170],["johnwardflighttraining.com",170],["kabarportal.com",170],["kstorymedia.com",170],["la123movies.org",170],["lespassionsdechinouk.com",170],["lilymanga.net",170],["linksdegrupos.com.br",170],["linkz.wiki",170],["livestreamtv.pk",170],["macsite.info",170],["mangapt.com",170],["mangasite.org",170],["manhuascan.com",170],["megafilmeshdseries.com",170],["megamovies.org",170],["membed.net",170],["moddroid.com",170],["moviefree2.com",170],["movies-watch.com.pk",170],["moviesite.app",170],["moviesonline.fm",170],["moviesx.org",170],["msmoviesbd.com",170],["musicsite.biz",170],["myfernweh.com",170],["myviid.com",170],["nazarickol.com",170],["noob4cast.com",170],["nsw2u.com",[170,261]],["oko.sh",170],["olympicstreams.me",170],["orangeink.pk",170],["owllink.net",170],["pahaplayers.click",170],["patchsite.net",170],["pdfsite.net",170],["play1002.com",170],["player-cdn.com",170],["productkeysite.com",170],["projectfreetv.one",170],["romsite.org",170],["rufiguta.com",170],["rytmp3.io",170],["send.cm",170],["seriesite.net",170],["seriezloaded.com.ng",170],["serijehaha.com",170],["shrugemojis.com",170],["siteapk.net",170],["siteflix.org",170],["sitegames.net",170],["sitekeys.net",170],["sitepdf.com",170],["sitetorrent.com",170],["softwaresite.net",170],["sportbar.live",170],["sportkart1.xyz",170],["ssyoutube.com",170],["stardima.com",170],["stream4free.live",170],["superapk.org",170],["supermovies.org",170],["tainio-mania.online",170],["talaba.su",170],["tamilguns.org",170],["tatabrada.tv",170],["techtrendmakers.com",170],["theflixer.tv",170],["thememypc.net",170],["thetechzone.online",170],["thripy.com",170],["tonnestreamz.xyz",170],["travelplanspro.com",170],["turcasmania.com",170],["tusfiles.com",170],["tvonlinesports.com",170],["ultramovies.org",170],["uploadbank.com",170],["urdubolo.pk",170],["vidspeeds.com",170],["vumoo.to",170],["warezsite.net",170],["watchmovies2.com",170],["watchmoviesforfree.org",170],["watchofree.com",170],["watchsite.net",170],["watchsouthpark.tv",170],["watchtvch.club",170],["web.livecricket.is",170],["webseries.club",170],["worldcupstream.pm",170],["y2mate.com",170],["youapk.net",170],["youtube4kdownloader.com",170],["yts-subs.com",170],["haho.moe",171],["nicy-spicy.pw",172],["novelmultiverse.com",173],["mylegalporno.com",174],["videowood.tv",177],["thecut.com",178],["novelism.jp",179],["alphapolis.co.jp",180],["okrzone.com",181],["game3rb.com",182],["javhub.net",182],["thotvids.com",183],["berklee.edu",184],["rawkuma.com",[185,186]],["moviesjoyhd.to",186],["imeteo.sk",187],["youtubemp3donusturucu.net",188],["surfsees.com",190],["vivo.st",[191,192]],["alueviesti.fi",194],["kiuruvesilehti.fi",194],["lempaala.ideapark.fi",194],["olutposti.fi",194],["urjalansanomat.fi",194],["tainhanhvn.com",196],["titantv.com",197],["3cinfo.net",198],["transportationlies.org",199],["camarchive.tv",200],["crownimg.com",200],["freejav.guru",200],["hentai2read.com",200],["icyporno.com",200],["illink.net",200],["javtiful.com",200],["m-hentai.net",200],["pornblade.com",200],["pornfelix.com",200],["pornxxxxtube.net",200],["redwap.me",200],["redwap2.com",200],["redwap3.com",200],["tubxporn.xxx",200],["ver-comics-porno.com",200],["ver-mangas-porno.com",200],["xanimeporn.com",200],["xxxvideohd.net",200],["zetporn.com",200],["cocomanga.com",201],["sampledrive.in",202],["mcleaks.net",203],["explorecams.com",203],["minecraft.buzz",203],["chillx.top",204],["playerx.stream",204],["m.liputan6.com",206],["stardewids.com",[206,229]],["ingles.com",207],["spanishdict.com",207],["surfline.com",208],["rureka.com",209],["bunkr.is",210],["amateur8.com",211],["freeporn8.com",211],["maturetubehere.com",211],["embedo.co",212],["corriere.it",213],["oggi.it",213],["2the.space",214],["file.gocmod.com",215],["apkcombo.com",216],["sponsorhunter.com",217],["soft98.ir",218],["novelssites.com",219],["torrentmac.net",220],["udvl.com",221],["moviezaddiction.icu",222],["dlpanda.com",223],["socialmediagirls.com",224],["ecamrips.com",224],["showcamrips.com",224],["einrichtungsbeispiele.de",225],["weadown.com",226],["molotov.tv",227],["freecoursesonline.me",228],["adelsfun.com",228],["advantien.com",228],["bailbondsfinder.com",228],["bigpiecreative.com",228],["childrenslibrarylady.com",228],["classifarms.com",228],["comtasq.ca",228],["crone.es",228],["ctrmarketingsolutions.com",228],["dropnudes.com",228],["ftuapps.dev",228],["genzsport.com",228],["ghscanner.com",228],["grsprotection.com",228],["gruporafa.com.br",228],["inmatefindcalifornia.com",228],["inmatesearchidaho.com",228],["itsonsitetv.com",228],["mfmfinancials.com",228],["myproplugins.com",228],["onehack.us",228],["ovester.com",228],["paste.bin.sx",228],["privatenudes.com",228],["renoconcrete.ca",228],["richieashbeck.com",228],["sat.technology",228],["short1ink.com",228],["stpm.co.uk",228],["wegotcookies.co",228],["mathcrave.com",228],["commands.gg",229],["smgplaza.com",230],["emturbovid.com",231],["findjav.com",231],["mmtv01.xyz",231],["stbturbo.xyz",231],["streamsilk.com",231],["freepik.com",232],["diyphotography.net",234],["bitchesgirls.com",235],["shopforex.online",236],["programmingeeksclub.com",237],["easymc.io",238],["diendancauduong.com",239],["parentcircle.com",240],["h-game18.xyz",241],["nopay.info",242],["wheelofgold.com",243],["shortlinks.tech",244],["skill4ltu.eu",246],["lifestyle.bg",247],["news.bg",247],["topsport.bg",247],["webcafe.bg",247],["freepikdownloader.com",248],["freepasses.org",249],["iusedtobeaboss.com",250],["androidpolice.com",251],["cbr.com",251],["dualshockers.com",251],["gamerant.com",251],["howtogeek.com",251],["thegamer.com",251],["blogtruyenmoi.com",252],["igay69.com",254],["graphicget.com",255],["qiwi.gg",256],["netcine2.la",257],["idnes.cz",[258,259]],["cbc.ca",260]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,57]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["burningseries",34],["dz4soft",35],["yoututosjeff",35],["ebookmed",35],["lanjutkeun",35],["novelasesp",35],["singingdalong",35],["doujindesu",35],["xmovies8",38],["mega-dvdrip",45],["peliculas-dvdrip",45],["desbloqueador",46],["newpelis",[47,55]],["pelix",[47,55]],["allcalidad",[47,200]],["khatrimaza",47],["camwhores",48],["camwhorestv",48],["uproxy",48],["nekopoi",52],["mirrorace",61],["mixdrp",66],["asiansex",68],["japanfuck",68],["japanporn",68],["teensex",68],["vintagetube",68],["xxxmovies",68],["zooqle",71],["hdfull",75],["mangamanga",77],["streameast",79],["thestreameast",79],["vev",83],["vidop",83],["1337x",85],["x1337x",85],["zone-telechargement",85],["megalink",90],["gmx",91],["mega1080p",96],["9hentai",98],["gaypornhdfree",105],["cinemakottaga",105],["privatemoviez",105],["apkmaven",105],["popcornstream",107],["readcomiconline",117],["azsoft",118],["fc-lc",139],["pornktube",145],["watchseries",145],["milfnut",147],["pagalmovies",156],["7starhd",156],["jalshamoviez",156],["9xupload",156],["bdupload",156],["desiupload",156],["rdxhd1",156],["moviessources",167],["nuvid",168],["0gomovie",170],["0gomovies",170],["123moviefree",170],["1kmovies",170],["1madrasdub",170],["1primewire",170],["2embed",170],["2madrasdub",170],["2umovies",170],["4anime",170],["adblockplustape",170],["altadefinizione01",170],["anitube",170],["atomixhq",170],["beinmatch",170],["brmovies",170],["cima4u",170],["clicknupload",170],["cmovies",170],["cricfree",170],["crichd",170],["databasegdriveplayer",170],["dood",170],["f1stream",170],["faselhd",170],["fbstream",170],["file4go",170],["filemoon",170],["filepress",[170,233]],["filmlinks4u",170],["filmpertutti",170],["filmyzilla",170],["fmovies",170],["french-stream",170],["fzlink",170],["gdriveplayer",170],["gofilms4u",170],["gogoanime",170],["gomoviz",170],["hdmoviefair",170],["hdmovies4u",170],["hdmovies50",170],["hdmoviesfair",170],["hh3dhay",170],["hindilinks4u",170],["hotmasti",170],["hurawatch",170],["klmanga",170],["klubsports",170],["libertestreamvf",170],["livetvon",170],["manga1000",170],["manga1001",170],["mangaraw",170],["mangarawjp",170],["mlbstream",170],["motogpstream",170],["movierulz",170],["movies123",170],["movies2watch",170],["moviesden",170],["moviezaddiction",170],["myflixer",170],["nbastream",170],["netcine",170],["nflstream",170],["nhlstream",170],["onlinewatchmoviespk",170],["pctfenix",170],["pctnew",170],["pksmovies",170],["plyjam",170],["plylive",170],["pogolinks",170],["popcorntime",170],["poscitech",170],["prmovies",170],["rugbystreams",170],["shahed4u",170],["sflix",170],["sitesunblocked",170],["solarmovies",170],["sportcast",170],["sportskart",170],["sports-stream",170],["streaming-french",170],["streamers",170],["streamingcommunity",170],["strikeout",170],["t20cup",170],["tennisstreams",170],["torrentdosfilmes",170],["toonanime",170],["tvply",170],["ufcstream",170],["uptomega",170],["uqload",170],["vudeo",170],["vidoo",170],["vipbox",170],["vipboxtv",170],["vipleague",170],["viprow",170],["yesmovies",170],["yomovies",170],["yomovies1",170],["yt2mp3s",170],["kat",170],["katbay",170],["kickass",170],["kickasshydra",170],["kickasskat",170],["kickass2",170],["kickasstorrents",170],["kat2",170],["kattracker",170],["thekat",170],["thekickass",170],["kickassz",170],["kickasstorrents2",170],["topkickass",170],["kickassgo",170],["kkickass",170],["kkat",170],["kickasst",170],["kick4ss",170],["guardaserie",175],["cine-calidad",176],["videovard",193],["gntai",200],["grantorrent",200],["mejortorrent",200],["mejortorrento",200],["mejortorrents",200],["mejortorrents1",200],["mejortorrentt",200],["shineads",202],["bg-gledai",228],["gledaitv",228],["motchill",245]]);

const exceptionsMap = new Map([["mentor.duden.de",[78]],["forum.soft98.ir",[218]]]);

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
