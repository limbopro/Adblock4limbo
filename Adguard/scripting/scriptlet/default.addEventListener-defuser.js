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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["click","clickCount"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["blur","counter"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["click","0x"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,135]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,187]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["onlyhgames.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,48]],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,37]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,49]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,187]],["short.pe",32],["bs.to",35],["efukt.com",35],["generacionretro.net",36],["nuevos-mu.ucoz.com",36],["micloudfiles.com",36],["mimaletamusical.blogspot.com",36],["visionias.net",36],["b3infoarena.in",36],["lurdchinexgist.blogspot.com",36],["thefreedommatrix.blogspot.com",36],["hentai-vl.blogspot.com",36],["projetomotog.blogspot.com",36],["ktmx.pro",36],["lirik3satu.blogspot.com",36],["marketmovers.it",36],["pharmaguideline.com",36],["safemaru.blogspot.com",36],["mixloads.com",36],["mangaromance.eu",36],["interssh.com",36],["freesoftpdfdownload.blogspot.com",36],["cirokun.blogspot.com",36],["myadslink.com",36],["blackavelic.com",36],["server.satunivers.tv",36],["eg-akw.com",36],["xn--mgba7fjn.cc",36],["flashingjungle.com",37],["ma-x.org",38],["lavozdegalicia.es",38],["xmovies08.org",40],["globaldjmix.com",41],["zazzybabes.com",42],["haaretz.co.il",43],["haaretz.com",43],["slate.com",44],["megalinks.info",45],["megapastes.com",45],["mega-mkv.com",[45,46]],["mkv-pastes.com",45],["zpaste.net",45],["zlpaste.net",45],["9xlinks.site",45],["zona-leros.net",46],["acortarm.xyz",47],["acortame.xyz",47],["cine.to",[48,192]],["kissasia.cc",48],["digjav.com",49],["videoszoofiliahd.com",50],["xxxtubezoo.com",51],["zooredtube.com",51],["uii.io",52],["megacams.me",54],["rlslog.net",54],["porndoe.com",55],["acienciasgalilei.com",57],["playrust.io",58],["payskip.org",59],["short-url.link",60],["tubedupe.com",61],["mcrypto.club",62],["fatgirlskinny.net",63],["polska-ie.com",63],["windowsmatters.com",63],["canaltdt.es",64],["masbrooo.com",64],["2ndrun.tv",64],["stfly.me",65],["oncehelp.com",65],["queenfaucet.website",65],["curto.win",65],["smallseotools.com",66],["macwelt.de",68],["pcwelt.de",68],["capital.de",68],["geo.de",68],["allmomsex.com",69],["allnewindianporn.com",69],["analxxxvideo.com",69],["animalextremesex.com",69],["anime3d.xyz",69],["animefuckmovies.com",69],["animepornfilm.com",69],["animesexbar.com",69],["animesexclip.com",69],["animexxxsex.com",69],["animexxxfilms.com",69],["anysex.club",69],["apetube.asia",69],["asianfuckmovies.com",69],["asianfucktube.com",69],["asianporn.sexy",69],["asiansexcilps.com",69],["beeg.fund",69],["beegvideoz.com",69],["bestasiansex.pro",69],["bravotube.asia",69],["brutalanimalsfuck.com",69],["candyteenporn.com",69],["daddyfuckmovies.com",69],["desifuckonline.com",69],["exclusiveasianporn.com",69],["exteenporn.com",69],["fantasticporn.net",69],["fantasticyoungporn.com",69],["fineasiansex.com",69],["firstasianpussy.com",69],["freeindiansextube.com",69],["freepornasians.com",69],["freerealvideo.com",69],["fuck-beeg.com",69],["fuck-xnxx.com",69],["fuckasian.pro",69],["fuckfuq.com",69],["fuckundies.com",69],["gojapaneseporn.com",69],["golderotica.com",69],["goodyoungsex.com",69],["goyoungporn.com",69],["hardxxxmoms.com",69],["hdvintagetube.com",69],["hentaiporn.me",69],["hentaisexfilms.com",69],["hentaisexuality.com",69],["hot-teens-movies.mobi",69],["hotanimepornvideos.com",69],["hotanimevideos.com",69],["hotasianpussysex.com",69],["hotjapaneseshows.com",69],["hotmaturetube.com",69],["hotmilfs.pro",69],["hotorientalporn.com",69],["hotpornyoung.com",69],["hotxxxjapanese.com",69],["hotxxxpussy.com",69],["indiafree.net",69],["indianpornvideo.online",69],["japanpornclip.com",69],["japanesetube.video",69],["japansex.me",69],["japanesexxxporn.com",69],["japansporno.com",69],["japanxxx.asia",69],["japanxxxworld.com",69],["keezmovies.surf",69],["lingeriefuckvideo.com",69],["liveanimalporn.zooo.club",69],["madhentaitube.com",69],["megahentaitube.com",69],["megajapanesesex.com",69],["megajapantube.com",69],["milfxxxpussy.com",69],["momsextube.pro",69],["momxxxass.com",69],["monkeyanimalporn.com",69],["moviexxx.mobi",69],["newanimeporn.com",69],["newjapanesexxx.com",69],["nicematureporn.com",69],["nudeplayboygirls.com",69],["openxxxporn.com",69],["originalindianporn.com",69],["originalteentube.com",69],["pig-fuck.com",69],["plainasianporn.com",69],["popularasianxxx.com",69],["pornanimetube.com",69],["pornasians.pro",69],["pornhat.asia",69],["pornheed.online",69],["pornjapanesesex.com",69],["pornomovies.asia",69],["pornvintage.tv",69],["primeanimesex.com",69],["realjapansex.com",69],["realmomsex.com",69],["redsexhub.com",69],["retroporn.world",69],["retrosexfilms.com",69],["sex-free-movies.com",69],["sexanimesex.com",69],["sexanimetube.com",69],["sexjapantube.com",69],["sexmomvideos.com",69],["sexteenxxxtube.com",69],["sexxxanimal.com",69],["sexyoungtube.com",69],["sexyvintageporn.com",69],["sopornmovies.com",69],["spicyvintageporn.com",69],["sunporno.club",69],["tabooanime.club",69],["teenextrem.com",69],["teenfucksex.com",69],["teenhost.net",69],["teensexass.com",69],["tnaflix.asia",69],["totalfuckmovies.com",69],["totalmaturefuck.com",69],["txxx.asia",69],["voyeurpornsex.com",69],["warmteensex.com",69],["wetasiancreampie.com",69],["wildhentaitube.com",69],["wowyoungsex.com",69],["xhamster-art.com",69],["xmovie.pro",69],["xnudevideos.com",69],["xnxxjapon.com",69],["xpics.me",69],["xvide.me",69],["xxxanimefuck.com",69],["xxxanimevideos.com",69],["xxxanimemovies.com",69],["xxxhentaimovies.com",69],["xxxhothub.com",69],["xxxjapaneseporntube.com",69],["xxxlargeporn.com",69],["xxxmomz.com",69],["xxxpornmilf.com",69],["xxxpussyclips.com",69],["xxxpussysextube.com",69],["xxxretrofuck.com",69],["xxxsex.pro",69],["xxxsexyjapanese.com",69],["xxxteenyporn.com",69],["xxxvideo.asia",69],["xxxvideos.ink",69],["xxxyoungtv.com",69],["youjizzz.club",69],["youngpussyfuck.com",69],["bayimg.com",70],["celeb.gate.cc",71],["eodev.com",72],["masterplayer.xyz",74],["pussy-hub.com",74],["porndex.com",75],["compucalitv.com",76],["diariodenavarra.es",78],["duden.de",80],["pennlive.com",82],["beautypageants.indiatimes.com",83],["01fmovies.com",84],["lnk2.cc",86],["fullhdxxx.com",87],["luscious.net",[87,135]],["classicpornbest.com",87],["xstory-fr.com",87],["1youngteenporn.com",87],["www-daftarharga.blogspot.com",[87,176]],["miraculous.to",[87,182]],["vtube.to",87],["gosexpod.com",88],["otakukan.com",89],["xcafe.com",90],["pornfd.com",90],["venusarchives.com",90],["imagehaha.com",91],["imagenpic.com",91],["imageshimage.com",91],["imagetwist.com",91],["k1nk.co",92],["watchasians.cc",92],["alexsports.xyz",92],["lulustream.com",92],["luluvdo.com",92],["web.de",93],["news18.com",94],["thelanb.com",95],["dropmms.com",95],["softwaredescargas.com",96],["cracking-dz.com",97],["anitube.ninja",98],["gazzetta.it",99],["port.hu",101],["dziennikbaltycki.pl",102],["dzienniklodzki.pl",102],["dziennikpolski24.pl",102],["dziennikzachodni.pl",102],["echodnia.eu",102],["expressbydgoski.pl",102],["expressilustrowany.pl",102],["gazetakrakowska.pl",102],["gazetalubuska.pl",102],["gazetawroclawska.pl",102],["gk24.pl",102],["gloswielkopolski.pl",102],["gol24.pl",102],["gp24.pl",102],["gra.pl",102],["gs24.pl",102],["kurierlubelski.pl",102],["motofakty.pl",102],["naszemiasto.pl",102],["nowiny24.pl",102],["nowosci.com.pl",102],["nto.pl",102],["polskatimes.pl",102],["pomorska.pl",102],["poranny.pl",102],["sportowy24.pl",102],["strefaagro.pl",102],["strefabiznesu.pl",102],["stronakobiet.pl",102],["telemagazyn.pl",102],["to.com.pl",102],["wspolczesna.pl",102],["course9x.com",102],["courseclub.me",102],["azrom.net",102],["alttyab.net",102],["esopress.com",102],["nesiaku.my.id",102],["onemanhua.com",103],["freeindianporn.mobi",103],["dr-farfar.com",104],["boyfriendtv.com",105],["brandstofprijzen.info",106],["netfuck.net",107],["blog24.me",[107,131]],["kisahdunia.com",107],["javsex.to",107],["nulljungle.com",107],["oyuncusoruyor.com",107],["pbarecap.ph",107],["sourds.net",107],["teknobalta.com",107],["tvinternetowa.info",107],["sqlserveregitimleri.com",107],["tutcourse.com",107],["readytechflip.com",107],["novinhastop.com",107],["warddogs.com",107],["dvdgayporn.com",107],["iimanga.com",107],["tinhocdongthap.com",107],["tremamnon.com",107],["423down.com",107],["brizzynovel.com",107],["jugomobile.com",107],["freecodezilla.net",107],["animekhor.xyz",107],["iconmonstr.com",107],["gay-tubes.cc",107],["rbxscripts.net",107],["comentariodetexto.com",107],["wordpredia.com",107],["livsavr.co",107],["allfaucet.xyz",[107,131]],["titbytz.tk",107],["replica-watch.info",107],["alludemycourses.com",107],["kayifamilytv.com",107],["iir.ai",108],["gameofporn.com",110],["qpython.club",111],["antifake-funko.fr",111],["dktechnicalmate.com",111],["recipahi.com",111],["e9china.net",112],["ac.ontools.net",112],["marketbeat.com",113],["hentaipornpics.net",114],["apps2app.com",115],["alliptvlinks.com",116],["waterfall.money",116],["xvideos.com",117],["xvideos2.com",117],["tubereader.me",118],["repretel.com",118],["dagensnytt.com",119],["mrproblogger.com",119],["themezon.net",119],["gfx-station.com",120],["bitzite.com",[120,131,134]],["historyofroyalwomen.com",121],["davescomputertips.com",121],["ukchat.co.uk",122],["hivelr.com",123],["embedz.click",124],["sexseeimage.com",125],["skidrowcodex.net",126],["takimag.com",127],["digi.no",128],["upshrink.com",129],["ohionowcast.info",131],["wiour.com",131],["appsbull.com",131],["diudemy.com",131],["maqal360.com",131],["bitcotasks.com",131],["videolyrics.in",131],["manofadan.com",131],["cempakajaya.com",131],["tagecoin.com",131],["doge25.in",131],["king-ptcs.com",131],["naijafav.top",131],["ourcoincash.xyz",131],["sh.techsamir.com",131],["claimcoins.site",131],["cryptosh.pro",131],["coinsrev.com",131],["go.freetrx.fun",131],["eftacrypto.com",131],["fescrypto.com",131],["earnhub.net",131],["kiddyshort.com",131],["tronxminer.com",131],["homeairquality.org",132],["exego.app",133],["cutlink.net",133],["cutsy.net",133],["cutyurls.com",133],["cutty.app",133],["cutnet.net",133],["aiimgvlog.fun",135],["6indianporn.com",135],["amateurebonypics.com",135],["amateuryoungpics.com",135],["cinemabg.net",135],["coomer.su",135],["desimmshd.com",135],["frauporno.com",135],["givemeaporn.com",135],["jav-asia.top",135],["javf.net",135],["javideo.net",135],["kemono.su",135],["kr18plus.com",135],["pilibook.com",135],["pornborne.com",135],["porngrey.com",135],["qqxnxx.com",135],["sexvideos.host",135],["submilf.com",135],["subtaboo.com",135],["tktube.com",135],["xfrenchies.com",135],["coingraph.us",136],["momo-net.com",136],["maxgaming.fi",136],["travel.vebma.com",137],["cloud.majalahhewan.com",137],["crm.cekresi.me",137],["ai.tempatwisata.pro",137],["pinloker.com",137],["sekilastekno.com",137],["vulture.com",138],["megaplayer.bokracdn.run",139],["hentaistream.com",140],["siteunblocked.info",141],["larvelfaucet.com",142],["feyorra.top",142],["claimtrx.com",142],["moviesyug.net",143],["w4files.ws",143],["parispi.net",144],["simkl.com",145],["paperzonevn.com",146],["dailyvideoreports.net",147],["lewd.ninja",148],["systemnews24.com",149],["incestvidz.com",150],["niusdiario.es",151],["playporngames.com",152],["movi.pk",[153,157]],["justin.mp3quack.lol",155],["cutesexyteengirls.com",156],["0dramacool.net",157],["185.53.88.104",157],["185.53.88.204",157],["185.53.88.15",157],["123movies4k.net",157],["1movieshd.com",157],["1rowsports.com",157],["4share-mp3.net",157],["6movies.net",157],["9animetv.to",157],["720pstream.me",157],["aagmaal.com",157],["abysscdn.com",157],["ajkalerbarta.com",157],["akstream.xyz",157],["androidapks.biz",157],["androidsite.net",157],["animeonlinefree.org",157],["animesite.net",157],["animespank.com",157],["aniworld.to",157],["apkmody.io",157],["appsfree4u.com",157],["audioz.download",157],["awafim.tv",157],["bdnewszh.com",157],["beastlyprints.com",157],["bengalisite.com",157],["bestfullmoviesinhd.org",157],["betteranime.net",157],["blacktiesports.live",157],["buffsports.stream",157],["ch-play.com",157],["clickforhire.com",157],["cloudy.pk",157],["computercrack.com",157],["coolcast2.com",157],["crackedsoftware.biz",157],["crackfree.org",157],["cracksite.info",157],["cryptoblog24.info",157],["cuatrolatastv.blogspot.com",157],["cydiasources.net",157],["dirproxy.com",157],["dopebox.to",157],["downloadapk.info",157],["downloadapps.info",157],["downloadgames.info",157],["downloadmusic.info",157],["downloadsite.org",157],["downloadwella.com",157],["ebooksite.org",157],["educationtips213.blogspot.com",157],["egyup.live",157],["embed.meomeo.pw",157],["embed.scdn.to",157],["emulatorsite.com",157],["essaysharkwriting.club",157],["exploreera.net",157],["extrafreetv.com",157],["fakedetail.com",157],["fclecteur.com",157],["files.im",157],["flexyhit.com",157],["fmoviefree.net",157],["fmovies24.com",157],["footyhunter3.xyz",157],["freeflix.info",157],["freemoviesu4.com",157],["freeplayervideo.com",157],["freesoccer.net",157],["fseries.org",157],["gamefast.org",157],["gamesite.info",157],["gettapeads.com",157],["gmanga.me",157],["gocast123.me",157],["gogohd.net",157],["gogoplay5.com",157],["gooplay.net",157],["gostreamon.net",157],["happy2hub.org",157],["harimanga.com",157],["healthnewsreel.com",157],["hexupload.net",157],["hinatasoul.com",157],["hindisite.net",157],["holymanga.net",157],["hxfile.co",157],["isosite.org",157],["iv-soft.com",157],["januflix.expert",157],["jewelry.com.my",157],["johnwardflighttraining.com",157],["kabarportal.com",157],["kstorymedia.com",157],["la123movies.org",157],["lespassionsdechinouk.com",157],["lilymanga.net",157],["linksdegrupos.com.br",157],["livestreamtv.pk",157],["macsite.info",157],["mangapt.com",157],["mangasite.org",157],["manhuascan.com",157],["megafilmeshdseries.com",157],["megamovies.org",157],["membed.net",157],["moddroid.com",157],["moviefree2.com",157],["movies-watch.com.pk",157],["moviesite.app",157],["moviesonline.fm",157],["moviesx.org",157],["msmoviesbd.com",157],["musicsite.biz",157],["myfernweh.com",157],["myviid.com",157],["nazarickol.com",157],["noob4cast.com",157],["nsw2u.com",[157,246]],["oko.sh",157],["olympicstreams.me",157],["orangeink.pk",157],["owllink.net",157],["pahaplayers.click",157],["patchsite.net",157],["pdfsite.net",157],["play1002.com",157],["player-cdn.com",157],["productkeysite.com",157],["projectfreetv.one",157],["romsite.org",157],["rufiguta.com",157],["rytmp3.io",157],["send.cm",157],["seriesite.net",157],["seriezloaded.com.ng",157],["serijehaha.com",157],["shrugemojis.com",157],["siteapk.net",157],["siteflix.org",157],["sitegames.net",157],["sitekeys.net",157],["sitepdf.com",157],["sitetorrent.com",157],["softwaresite.net",157],["sportbar.live",157],["sportkart1.xyz",157],["ssyoutube.com",157],["stardima.com",157],["stream4free.live",157],["superapk.org",157],["supermovies.org",157],["tainio-mania.online",157],["talaba.su",157],["tamilguns.org",157],["tatabrada.tv",157],["techtrendmakers.com",157],["theflixer.tv",157],["thememypc.net",157],["thetechzone.online",157],["thripy.com",157],["tonnestreamz.xyz",157],["travelplanspro.com",157],["turcasmania.com",157],["tusfiles.com",157],["tvonlinesports.com",157],["ultramovies.org",157],["uploadbank.com",157],["urdubolo.pk",157],["vidspeeds.com",157],["vumoo.to",157],["warezsite.net",157],["watchmovies2.com",157],["watchmoviesforfree.org",157],["watchofree.com",157],["watchsite.net",157],["watchsouthpark.tv",157],["watchtvch.club",157],["web.livecricket.is",157],["webseries.club",157],["worldcupstream.pm",157],["y2mate.com",157],["youapk.net",157],["youtube4kdownloader.com",157],["yts-subs.com",157],["haho.moe",158],["nicy-spicy.pw",159],["novelmultiverse.com",160],["mylegalporno.com",161],["asianembed.io",164],["thecut.com",165],["novelism.jp",166],["alphapolis.co.jp",167],["okrzone.com",168],["game3rb.com",169],["javhub.net",169],["thotvids.com",170],["berklee.edu",171],["rawkuma.com",[172,173]],["moviesjoyhd.to",173],["imeteo.sk",174],["youtubemp3donusturucu.net",175],["surfsees.com",177],["vivo.st",[178,179]],["alueviesti.fi",181],["kiuruvesilehti.fi",181],["lempaala.ideapark.fi",181],["olutposti.fi",181],["urjalansanomat.fi",181],["tainhanhvn.com",183],["titantv.com",184],["3cinfo.net",185],["transportationlies.org",186],["camarchive.tv",187],["crownimg.com",187],["freejav.guru",187],["hentai2read.com",187],["icyporno.com",187],["illink.net",187],["javtiful.com",187],["m-hentai.net",187],["pornblade.com",187],["pornfelix.com",187],["pornxxxxtube.net",187],["redwap.me",187],["redwap2.com",187],["redwap3.com",187],["tubxporn.xxx",187],["ver-comics-porno.com",187],["ver-mangas-porno.com",187],["xanimeporn.com",187],["xxxvideohd.net",187],["zetporn.com",187],["cocomanga.com",188],["sampledrive.in",189],["mcleaks.net",190],["explorecams.com",190],["minecraft.buzz",190],["chillx.top",191],["playerx.stream",191],["m.liputan6.com",193],["stardewids.com",[193,216]],["ingles.com",194],["spanishdict.com",194],["surfline.com",195],["rureka.com",196],["bunkr.is",197],["amateur8.com",198],["freeporn8.com",198],["maturetubehere.com",198],["embedo.co",199],["corriere.it",200],["oggi.it",200],["2the.space",201],["apkcombo.com",202],["sponsorhunter.com",203],["soft98.ir",204],["novelssites.com",205],["haxina.com",206],["cryptofenz.xyz",206],["torrentmac.net",207],["udvl.com",208],["moviezaddiction.icu",209],["dlpanda.com",210],["socialmediagirls.com",211],["einrichtungsbeispiele.de",212],["weadown.com",213],["molotov.tv",214],["freecoursesonline.me",215],["adelsfun.com",215],["advantien.com",215],["bailbondsfinder.com",215],["bigpiecreative.com",215],["childrenslibrarylady.com",215],["classifarms.com",215],["comtasq.ca",215],["crone.es",215],["ctrmarketingsolutions.com",215],["dropnudes.com",215],["ftuapps.dev",215],["genzsport.com",215],["ghscanner.com",215],["grsprotection.com",215],["gruporafa.com.br",215],["inmatefindcalifornia.com",215],["inmatesearchidaho.com",215],["itsonsitetv.com",215],["mfmfinancials.com",215],["myproplugins.com",215],["onehack.us",215],["ovester.com",215],["paste.bin.sx",215],["privatenudes.com",215],["renoconcrete.ca",215],["richieashbeck.com",215],["sat.technology",215],["short1ink.com",215],["stpm.co.uk",215],["wegotcookies.co",215],["mathcrave.com",215],["commands.gg",216],["smgplaza.com",217],["emturbovid.com",218],["freepik.com",219],["diyphotography.net",221],["bitchesgirls.com",222],["shopforex.online",223],["programmingeeksclub.com",224],["easymc.io",225],["diendancauduong.com",226],["parentcircle.com",227],["h-game18.xyz",228],["nopay.info",229],["wheelofgold.com",230],["shortlinks.tech",231],["skill4ltu.eu",233],["freepikdownloader.com",234],["freepasses.org",235],["iusedtobeaboss.com",236],["androidpolice.com",237],["cbr.com",237],["dualshockers.com",237],["gamerant.com",237],["howtogeek.com",237],["thegamer.com",237],["blogtruyenmoi.com",238],["igay69.com",239],["graphicget.com",240],["qiwi.gg",241],["netcine2.la",242],["idnes.cz",[243,244]],["cbc.ca",245]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,58]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["readcomiconline",34],["burningseries",35],["dz4soft",36],["yoututosjeff",36],["ebookmed",36],["lanjutkeun",36],["novelasesp",36],["singingdalong",36],["doujindesu",36],["xmovies8",39],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",47],["newpelis",[48,56]],["pelix",[48,56]],["allcalidad",[48,187]],["khatrimaza",48],["camwhores",49],["camwhorestv",49],["uproxy",49],["nekopoi",53],["mirrorace",62],["mixdrp",67],["asiansex",69],["japanfuck",69],["japanporn",69],["teensex",69],["vintagetube",69],["xxxmovies",69],["zooqle",73],["hdfull",77],["mangamanga",79],["streameast",81],["thestreameast",81],["vev",85],["vidop",85],["1337x",87],["zone-telechargement",87],["megalink",92],["gmx",93],["mega1080p",98],["9hentai",100],["gaypornhdfree",107],["cinemakottaga",107],["privatemoviez",107],["apkmaven",107],["popcornstream",109],["fc-lc",130],["pornktube",135],["watchseries",135],["milfnut",136],["pagalmovies",143],["7starhd",143],["jalshamoviez",143],["9xupload",143],["bdupload",143],["desiupload",143],["rdxhd1",143],["moviessources",154],["nuvid",155],["0gomovie",157],["0gomovies",157],["123moviefree",157],["1kmovies",157],["1madrasdub",157],["1primewire",157],["2embed",157],["2madrasdub",157],["2umovies",157],["4anime",157],["9xmovies",157],["adblockplustape",157],["altadefinizione01",157],["anitube",157],["atomixhq",157],["beinmatch",157],["brmovies",157],["cima4u",157],["clicknupload",157],["cmovies",157],["cricfree",157],["crichd",157],["databasegdriveplayer",157],["dood",157],["f1stream",157],["faselhd",157],["fbstream",157],["file4go",157],["filemoon",157],["filepress",[157,220]],["filmlinks4u",157],["filmpertutti",157],["filmyzilla",157],["fmovies",157],["french-stream",157],["fzlink",157],["gdriveplayer",157],["gofilms4u",157],["gogoanime",157],["gomoviz",157],["hdmoviefair",157],["hdmovies4u",157],["hdmovies50",157],["hdmoviesfair",157],["hh3dhay",157],["hindilinks4u",157],["hotmasti",157],["hurawatch",157],["klmanga",157],["klubsports",157],["libertestreamvf",157],["livetvon",157],["manga1000",157],["manga1001",157],["mangaraw",157],["mangarawjp",157],["mlbstream",157],["motogpstream",157],["movierulz",157],["movies123",157],["movies2watch",157],["moviesden",157],["moviezaddiction",157],["myflixer",157],["nbastream",157],["netcine",157],["nflstream",157],["nhlstream",157],["onlinewatchmoviespk",157],["pctfenix",157],["pctnew",157],["pksmovies",157],["plyjam",157],["plylive",157],["pogolinks",157],["popcorntime",157],["poscitech",157],["prmovies",157],["rugbystreams",157],["shahed4u",157],["sflix",157],["sitesunblocked",157],["solarmovies",157],["sportcast",157],["sportskart",157],["sports-stream",157],["streaming-french",157],["streamers",157],["streamingcommunity",157],["strikeout",157],["t20cup",157],["tennisstreams",157],["torrentdosfilmes",157],["toonanime",157],["tvply",157],["ufcstream",157],["uptomega",157],["uqload",157],["vudeo",157],["vidoo",157],["vipbox",157],["vipboxtv",157],["vipleague",157],["viprow",157],["yesmovies",157],["yomovies",157],["yomovies1",157],["yt2mp3s",157],["kat",157],["katbay",157],["kickass",157],["kickasshydra",157],["kickasskat",157],["kickass2",157],["kickasstorrents",157],["kat2",157],["kattracker",157],["thekat",157],["thekickass",157],["kickassz",157],["kickasstorrents2",157],["topkickass",157],["kickassgo",157],["kkickass",157],["kkat",157],["kickasst",157],["kick4ss",157],["guardaserie",162],["cine-calidad",163],["videovard",180],["gntai",187],["grantorrent",187],["mejortorrent",187],["mejortorrento",187],["mejortorrents",187],["mejortorrents1",187],["mejortorrentt",187],["shineads",189],["bg-gledai",215],["gledaitv",215],["motchill",232]]);

const exceptionsMap = new Map([["mentor.duden.de",[80]],["forum.soft98.ir",[204]]]);

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
        if ( elem && elem.matches && elem.matches(targetSelector) ) { return true; }
        const elems = Array.from(document.querySelectorAll(targetSelector));
        return elems.includes(elem);
    };
    const elementDetails = elem => {
        if ( elem instanceof Window ) { return 'window'; }
        if ( elem instanceof Document ) { return 'document'; }
        if ( elem instanceof Element === false ) { return '?'; }
        const parts = [];
        if ( elem.id !== '' ) { parts.push(`#${CSS.escape(elem.id)}`); }
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
