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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["click","clickCount"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["blur","counter"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["click","0x"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,133]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,185]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["onlyhgames.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,48]],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,37]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,50]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,185]],["short.pe",32],["bs.to",35],["efukt.com",35],["generacionretro.net",36],["nuevos-mu.ucoz.com",36],["micloudfiles.com",36],["mimaletamusical.blogspot.com",36],["visionias.net",36],["b3infoarena.in",36],["lurdchinexgist.blogspot.com",36],["thefreedommatrix.blogspot.com",36],["hentai-vl.blogspot.com",36],["projetomotog.blogspot.com",36],["ktmx.pro",36],["lirik3satu.blogspot.com",36],["marketmovers.it",36],["pharmaguideline.com",36],["safemaru.blogspot.com",36],["mixloads.com",36],["mangaromance.eu",36],["interssh.com",36],["freesoftpdfdownload.blogspot.com",36],["cirokun.blogspot.com",36],["myadslink.com",36],["blackavelic.com",36],["server.satunivers.tv",36],["eg-akw.com",36],["xn--mgba7fjn.cc",36],["flashingjungle.com",37],["ma-x.org",38],["lavozdegalicia.es",38],["xmovies08.org",40],["globaldjmix.com",41],["zazzybabes.com",42],["haaretz.co.il",43],["haaretz.com",43],["slate.com",44],["megalinks.info",45],["megapastes.com",45],["mega-mkv.com",[45,46]],["mkv-pastes.com",45],["zpaste.net",45],["zlpaste.net",45],["9xlinks.site",45],["zona-leros.net",46],["acortarm.xyz",47],["acortame.xyz",47],["cine.to",[48,190]],["kissasia.cc",48],["nzbstars.com",49],["digjav.com",50],["videoszoofiliahd.com",51],["xxxtubezoo.com",52],["zooredtube.com",52],["uii.io",53],["megacams.me",55],["rlslog.net",55],["porndoe.com",56],["acienciasgalilei.com",58],["playrust.io",59],["payskip.org",60],["short-url.link",61],["tubedupe.com",62],["mcrypto.club",63],["fatgirlskinny.net",64],["polska-ie.com",64],["windowsmatters.com",64],["canaltdt.es",65],["masbrooo.com",65],["2ndrun.tv",65],["stfly.me",66],["oncehelp.com",66],["queenfaucet.website",66],["curto.win",66],["smallseotools.com",67],["macwelt.de",69],["pcwelt.de",69],["capital.de",69],["geo.de",69],["allmomsex.com",70],["allnewindianporn.com",70],["analxxxvideo.com",70],["animalextremesex.com",70],["anime3d.xyz",70],["animefuckmovies.com",70],["animepornfilm.com",70],["animesexbar.com",70],["animesexclip.com",70],["animexxxsex.com",70],["animexxxfilms.com",70],["anysex.club",70],["apetube.asia",70],["asianfuckmovies.com",70],["asianfucktube.com",70],["asianporn.sexy",70],["asiansexcilps.com",70],["beeg.fund",70],["beegvideoz.com",70],["bestasiansex.pro",70],["bravotube.asia",70],["brutalanimalsfuck.com",70],["candyteenporn.com",70],["daddyfuckmovies.com",70],["desifuckonline.com",70],["exclusiveasianporn.com",70],["exteenporn.com",70],["fantasticporn.net",70],["fantasticyoungporn.com",70],["fineasiansex.com",70],["firstasianpussy.com",70],["freeindiansextube.com",70],["freepornasians.com",70],["freerealvideo.com",70],["fuck-beeg.com",70],["fuck-xnxx.com",70],["fuckasian.pro",70],["fuckfuq.com",70],["fuckundies.com",70],["gojapaneseporn.com",70],["golderotica.com",70],["goodyoungsex.com",70],["goyoungporn.com",70],["hardxxxmoms.com",70],["hdvintagetube.com",70],["hentaiporn.me",70],["hentaisexfilms.com",70],["hentaisexuality.com",70],["hot-teens-movies.mobi",70],["hotanimepornvideos.com",70],["hotanimevideos.com",70],["hotasianpussysex.com",70],["hotjapaneseshows.com",70],["hotmaturetube.com",70],["hotmilfs.pro",70],["hotorientalporn.com",70],["hotpornyoung.com",70],["hotxxxjapanese.com",70],["hotxxxpussy.com",70],["indiafree.net",70],["indianpornvideo.online",70],["japanpornclip.com",70],["japanesetube.video",70],["japansex.me",70],["japanesexxxporn.com",70],["japansporno.com",70],["japanxxx.asia",70],["japanxxxworld.com",70],["keezmovies.surf",70],["lingeriefuckvideo.com",70],["liveanimalporn.zooo.club",70],["madhentaitube.com",70],["megahentaitube.com",70],["megajapanesesex.com",70],["megajapantube.com",70],["milfxxxpussy.com",70],["momsextube.pro",70],["momxxxass.com",70],["monkeyanimalporn.com",70],["moviexxx.mobi",70],["newanimeporn.com",70],["newjapanesexxx.com",70],["nicematureporn.com",70],["nudeplayboygirls.com",70],["openxxxporn.com",70],["originalindianporn.com",70],["originalteentube.com",70],["pig-fuck.com",70],["plainasianporn.com",70],["popularasianxxx.com",70],["pornanimetube.com",70],["pornasians.pro",70],["pornhat.asia",70],["pornheed.online",70],["pornjapanesesex.com",70],["pornomovies.asia",70],["pornvintage.tv",70],["primeanimesex.com",70],["realjapansex.com",70],["realmomsex.com",70],["redsexhub.com",70],["retroporn.world",70],["retrosexfilms.com",70],["sex-free-movies.com",70],["sexanimesex.com",70],["sexanimetube.com",70],["sexjapantube.com",70],["sexmomvideos.com",70],["sexteenxxxtube.com",70],["sexxxanimal.com",70],["sexyoungtube.com",70],["sexyvintageporn.com",70],["sopornmovies.com",70],["spicyvintageporn.com",70],["sunporno.club",70],["tabooanime.club",70],["teenextrem.com",70],["teenfucksex.com",70],["teenhost.net",70],["teensexass.com",70],["tnaflix.asia",70],["totalfuckmovies.com",70],["totalmaturefuck.com",70],["txxx.asia",70],["voyeurpornsex.com",70],["warmteensex.com",70],["wetasiancreampie.com",70],["wildhentaitube.com",70],["wowyoungsex.com",70],["xhamster-art.com",70],["xmovie.pro",70],["xnudevideos.com",70],["xnxxjapon.com",70],["xpics.me",70],["xvide.me",70],["xxxanimefuck.com",70],["xxxanimevideos.com",70],["xxxanimemovies.com",70],["xxxhentaimovies.com",70],["xxxhothub.com",70],["xxxjapaneseporntube.com",70],["xxxlargeporn.com",70],["xxxmomz.com",70],["xxxpornmilf.com",70],["xxxpussyclips.com",70],["xxxpussysextube.com",70],["xxxretrofuck.com",70],["xxxsex.pro",70],["xxxsexyjapanese.com",70],["xxxteenyporn.com",70],["xxxvideo.asia",70],["xxxvideos.ink",70],["xxxyoungtv.com",70],["youjizzz.club",70],["youngpussyfuck.com",70],["bayimg.com",71],["celeb.gate.cc",72],["eodev.com",73],["masterplayer.xyz",75],["pussy-hub.com",75],["porndex.com",76],["compucalitv.com",77],["diariodenavarra.es",79],["duden.de",81],["pennlive.com",83],["beautypageants.indiatimes.com",84],["01fmovies.com",85],["lnk2.cc",87],["fullhdxxx.com",88],["luscious.net",[88,133]],["classicpornbest.com",88],["xstory-fr.com",88],["1youngteenporn.com",88],["www-daftarharga.blogspot.com",[88,174]],["miraculous.to",[88,180]],["vtube.to",88],["gosexpod.com",89],["otakukan.com",90],["xcafe.com",91],["pornfd.com",91],["venusarchives.com",91],["imagehaha.com",92],["imagenpic.com",92],["imageshimage.com",92],["imagetwist.com",92],["k1nk.co",93],["watchasians.cc",93],["alexsports.xyz",93],["lulustream.com",93],["luluvdo.com",93],["web.de",94],["news18.com",95],["thelanb.com",96],["dropmms.com",96],["softwaredescargas.com",97],["cracking-dz.com",98],["anitube.ninja",99],["gazzetta.it",100],["port.hu",102],["dziennikbaltycki.pl",103],["dzienniklodzki.pl",103],["dziennikpolski24.pl",103],["dziennikzachodni.pl",103],["echodnia.eu",103],["expressbydgoski.pl",103],["expressilustrowany.pl",103],["gazetakrakowska.pl",103],["gazetalubuska.pl",103],["gazetawroclawska.pl",103],["gk24.pl",103],["gloswielkopolski.pl",103],["gol24.pl",103],["gp24.pl",103],["gra.pl",103],["gs24.pl",103],["kurierlubelski.pl",103],["motofakty.pl",103],["naszemiasto.pl",103],["nowiny24.pl",103],["nowosci.com.pl",103],["nto.pl",103],["polskatimes.pl",103],["pomorska.pl",103],["poranny.pl",103],["sportowy24.pl",103],["strefaagro.pl",103],["strefabiznesu.pl",103],["stronakobiet.pl",103],["telemagazyn.pl",103],["to.com.pl",103],["wspolczesna.pl",103],["course9x.com",103],["courseclub.me",103],["azrom.net",103],["alttyab.net",103],["esopress.com",103],["nesiaku.my.id",103],["onemanhua.com",104],["freeindianporn.mobi",104],["dr-farfar.com",105],["boyfriendtv.com",106],["brandstofprijzen.info",107],["netfuck.net",108],["blog24.me",[108,129]],["kisahdunia.com",108],["javsex.to",108],["nulljungle.com",108],["oyuncusoruyor.com",108],["pbarecap.ph",108],["sourds.net",108],["teknobalta.com",108],["tvinternetowa.info",108],["sqlserveregitimleri.com",108],["tutcourse.com",108],["readytechflip.com",108],["novinhastop.com",108],["warddogs.com",108],["dvdgayporn.com",108],["iimanga.com",108],["tinhocdongthap.com",108],["tremamnon.com",108],["423down.com",108],["brizzynovel.com",108],["jugomobile.com",108],["freecodezilla.net",108],["movieslegacy.com",108],["animekhor.xyz",108],["iconmonstr.com",108],["gay-tubes.cc",108],["rbxscripts.net",108],["comentariodetexto.com",108],["wordpredia.com",108],["livsavr.co",108],["allfaucet.xyz",[108,129]],["titbytz.tk",108],["replica-watch.info",108],["alludemycourses.com",108],["kayifamilytv.com",108],["iir.ai",109],["gameofporn.com",111],["qpython.club",112],["antifake-funko.fr",112],["dktechnicalmate.com",112],["recipahi.com",112],["e9china.net",113],["ac.ontools.net",113],["marketbeat.com",114],["hentaipornpics.net",115],["apps2app.com",116],["alliptvlinks.com",117],["waterfall.money",117],["xvideos.com",118],["xvideos2.com",118],["tubereader.me",119],["repretel.com",119],["dagensnytt.com",120],["mrproblogger.com",120],["themezon.net",120],["gfx-station.com",121],["bitzite.com",[121,129,132]],["historyofroyalwomen.com",122],["davescomputertips.com",122],["ukchat.co.uk",123],["hivelr.com",124],["embedz.click",125],["sexseeimage.com",126],["upshrink.com",127],["ohionowcast.info",129],["wiour.com",129],["appsbull.com",129],["diudemy.com",129],["maqal360.com",129],["bitcotasks.com",129],["videolyrics.in",129],["manofadan.com",129],["cempakajaya.com",129],["tagecoin.com",129],["doge25.in",129],["king-ptcs.com",129],["naijafav.top",129],["ourcoincash.xyz",129],["sh.techsamir.com",129],["claimcoins.site",129],["cryptosh.pro",129],["coinsrev.com",129],["go.freetrx.fun",129],["eftacrypto.com",129],["fescrypto.com",129],["earnhub.net",129],["kiddyshort.com",129],["tronxminer.com",129],["homeairquality.org",130],["exego.app",131],["cutlink.net",131],["cutsy.net",131],["cutyurls.com",131],["cutty.app",131],["cutnet.net",131],["aiimgvlog.fun",133],["6indianporn.com",133],["amateurebonypics.com",133],["amateuryoungpics.com",133],["cinemabg.net",133],["desimmshd.com",133],["frauporno.com",133],["givemeaporn.com",133],["jav-asia.top",133],["javf.net",133],["javideo.net",133],["kr18plus.com",133],["pilibook.com",133],["pornborne.com",133],["porngrey.com",133],["qqxnxx.com",133],["sexvideos.host",133],["submilf.com",133],["subtaboo.com",133],["tktube.com",133],["xfrenchies.com",133],["coingraph.us",134],["momo-net.com",134],["maxgaming.fi",134],["travel.vebma.com",135],["cloud.majalahhewan.com",135],["crm.cekresi.me",135],["pinloker.com",135],["sekilastekno.com",135],["vulture.com",136],["megaplayer.bokracdn.run",137],["hentaistream.com",138],["siteunblocked.info",139],["larvelfaucet.com",140],["feyorra.top",140],["claimtrx.com",140],["moviesyug.net",141],["w4files.ws",141],["parispi.net",142],["simkl.com",143],["paperzonevn.com",144],["dailyvideoreports.net",145],["lewd.ninja",146],["systemnews24.com",147],["incestvidz.com",148],["niusdiario.es",149],["playporngames.com",150],["movi.pk",[151,155]],["justin.mp3quack.lol",153],["cutesexyteengirls.com",154],["0dramacool.net",155],["185.53.88.104",155],["185.53.88.204",155],["185.53.88.15",155],["123movies4k.net",155],["1movieshd.com",155],["1rowsports.com",155],["4share-mp3.net",155],["6movies.net",155],["9animetv.to",155],["720pstream.me",155],["aagmaal.com",155],["abysscdn.com",155],["ajkalerbarta.com",155],["akstream.xyz",155],["androidapks.biz",155],["androidsite.net",155],["animeonlinefree.org",155],["animesite.net",155],["animespank.com",155],["aniworld.to",155],["apkmody.io",155],["appsfree4u.com",155],["audioz.download",155],["awafim.tv",155],["bdnewszh.com",155],["beastlyprints.com",155],["bengalisite.com",155],["bestfullmoviesinhd.org",155],["betteranime.net",155],["blacktiesports.live",155],["buffsports.stream",155],["ch-play.com",155],["clickforhire.com",155],["cloudy.pk",155],["computercrack.com",155],["coolcast2.com",155],["crackedsoftware.biz",155],["crackfree.org",155],["cracksite.info",155],["cryptoblog24.info",155],["cuatrolatastv.blogspot.com",155],["cydiasources.net",155],["dirproxy.com",155],["dopebox.to",155],["downloadapk.info",155],["downloadapps.info",155],["downloadgames.info",155],["downloadmusic.info",155],["downloadsite.org",155],["downloadwella.com",155],["ebooksite.org",155],["educationtips213.blogspot.com",155],["egyup.live",155],["embed.meomeo.pw",155],["embed.scdn.to",155],["emulatorsite.com",155],["essaysharkwriting.club",155],["exploreera.net",155],["extrafreetv.com",155],["fakedetail.com",155],["fclecteur.com",155],["files.im",155],["flexyhit.com",155],["fmoviefree.net",155],["fmovies24.com",155],["footyhunter3.xyz",155],["freeflix.info",155],["freemoviesu4.com",155],["freeplayervideo.com",155],["freesoccer.net",155],["fseries.org",155],["gamefast.org",155],["gamesite.info",155],["gettapeads.com",155],["gmanga.me",155],["gocast123.me",155],["gogohd.net",155],["gogoplay5.com",155],["gooplay.net",155],["gostreamon.net",155],["happy2hub.org",155],["harimanga.com",155],["healthnewsreel.com",155],["hexupload.net",155],["hinatasoul.com",155],["hindisite.net",155],["holymanga.net",155],["hxfile.co",155],["isosite.org",155],["iv-soft.com",155],["januflix.expert",155],["jewelry.com.my",155],["johnwardflighttraining.com",155],["kabarportal.com",155],["kstorymedia.com",155],["la123movies.org",155],["lespassionsdechinouk.com",155],["lilymanga.net",155],["linksdegrupos.com.br",155],["livestreamtv.pk",155],["macsite.info",155],["mangapt.com",155],["mangasite.org",155],["manhuascan.com",155],["megafilmeshdseries.com",155],["megamovies.org",155],["membed.net",155],["moddroid.com",155],["moviefree2.com",155],["movies-watch.com.pk",155],["moviesite.app",155],["moviesonline.fm",155],["moviesx.org",155],["msmoviesbd.com",155],["musicsite.biz",155],["myfernweh.com",155],["myviid.com",155],["nazarickol.com",155],["noob4cast.com",155],["nsw2u.com",[155,242]],["oko.sh",155],["olympicstreams.me",155],["orangeink.pk",155],["owllink.net",155],["pahaplayers.click",155],["patchsite.net",155],["pdfsite.net",155],["play1002.com",155],["player-cdn.com",155],["productkeysite.com",155],["projectfreetv.one",155],["romsite.org",155],["rufiguta.com",155],["rytmp3.io",155],["send.cm",155],["seriesite.net",155],["seriezloaded.com.ng",155],["serijehaha.com",155],["shrugemojis.com",155],["siteapk.net",155],["siteflix.org",155],["sitegames.net",155],["sitekeys.net",155],["sitepdf.com",155],["sitetorrent.com",155],["softwaresite.net",155],["sportbar.live",155],["sportkart1.xyz",155],["ssyoutube.com",155],["stardima.com",155],["stream4free.live",155],["superapk.org",155],["supermovies.org",155],["tainio-mania.online",155],["talaba.su",155],["tamilguns.org",155],["tatabrada.tv",155],["techtrendmakers.com",155],["theflixer.tv",155],["thememypc.net",155],["thetechzone.online",155],["thripy.com",155],["tonnestreamz.xyz",155],["travelplanspro.com",155],["turcasmania.com",155],["tusfiles.com",155],["tvonlinesports.com",155],["ultramovies.org",155],["uploadbank.com",155],["urdubolo.pk",155],["vidspeeds.com",155],["vumoo.to",155],["warezsite.net",155],["watchmovies2.com",155],["watchmoviesforfree.org",155],["watchofree.com",155],["watchsite.net",155],["watchsouthpark.tv",155],["watchtvch.club",155],["web.livecricket.is",155],["webseries.club",155],["worldcupstream.pm",155],["y2mate.com",155],["youapk.net",155],["youtube4kdownloader.com",155],["yts-subs.com",155],["haho.moe",156],["nicy-spicy.pw",157],["novelmultiverse.com",158],["mylegalporno.com",159],["asianembed.io",162],["thecut.com",163],["novelism.jp",164],["alphapolis.co.jp",165],["okrzone.com",166],["game3rb.com",167],["javhub.net",167],["thotvids.com",168],["berklee.edu",169],["rawkuma.com",[170,171]],["moviesjoyhd.to",171],["imeteo.sk",172],["youtubemp3donusturucu.net",173],["surfsees.com",175],["vivo.st",[176,177]],["alueviesti.fi",179],["kiuruvesilehti.fi",179],["lempaala.ideapark.fi",179],["olutposti.fi",179],["urjalansanomat.fi",179],["tainhanhvn.com",181],["titantv.com",182],["3cinfo.net",183],["transportationlies.org",184],["camarchive.tv",185],["crownimg.com",185],["freejav.guru",185],["hentai2read.com",185],["icyporno.com",185],["illink.net",185],["javtiful.com",185],["m-hentai.net",185],["pornblade.com",185],["pornfelix.com",185],["pornxxxxtube.net",185],["redwap.me",185],["redwap2.com",185],["redwap3.com",185],["tubxporn.xxx",185],["ver-comics-porno.com",185],["ver-mangas-porno.com",185],["xanimeporn.com",185],["xxxvideohd.net",185],["zetporn.com",185],["cocomanga.com",186],["sampledrive.in",187],["mcleaks.net",188],["explorecams.com",188],["minecraft.buzz",188],["chillx.top",189],["playerx.stream",189],["m.liputan6.com",191],["stardewids.com",[191,214]],["ingles.com",192],["spanishdict.com",192],["surfline.com",193],["rureka.com",194],["bunkr.is",195],["amateur8.com",196],["freeporn8.com",196],["maturetubehere.com",196],["embedo.co",197],["corriere.it",198],["oggi.it",198],["2the.space",199],["apkcombo.com",200],["sponsorhunter.com",201],["soft98.ir",202],["novelssites.com",203],["haxina.com",204],["cryptofenz.xyz",204],["torrentmac.net",205],["udvl.com",206],["moviezaddiction.icu",207],["dlpanda.com",208],["socialmediagirls.com",209],["einrichtungsbeispiele.de",210],["weadown.com",211],["molotov.tv",212],["freecoursesonline.me",213],["adelsfun.com",213],["advantien.com",213],["bailbondsfinder.com",213],["bigpiecreative.com",213],["childrenslibrarylady.com",213],["classifarms.com",213],["comtasq.ca",213],["crone.es",213],["ctrmarketingsolutions.com",213],["dropnudes.com",213],["ftuapps.dev",213],["genzsport.com",213],["ghscanner.com",213],["grsprotection.com",213],["gruporafa.com.br",213],["inmatefindcalifornia.com",213],["inmatesearchidaho.com",213],["itsonsitetv.com",213],["mfmfinancials.com",213],["myproplugins.com",213],["onehack.us",213],["ovester.com",213],["paste.bin.sx",213],["privatenudes.com",213],["renoconcrete.ca",213],["richieashbeck.com",213],["sat.technology",213],["short1ink.com",213],["stpm.co.uk",213],["wegotcookies.co",213],["mathcrave.com",213],["commands.gg",214],["smgplaza.com",215],["emturbovid.com",216],["freepik.com",217],["diyphotography.net",219],["bitchesgirls.com",220],["shopforex.online",221],["programmingeeksclub.com",222],["easymc.io",223],["diendancauduong.com",224],["parentcircle.com",225],["h-game18.xyz",226],["nopay.info",227],["wheelofgold.com",228],["shortlinks.tech",229],["skill4ltu.eu",231],["freepikdownloader.com",232],["freepasses.org",233],["iusedtobeaboss.com",234],["androidpolice.com",235],["cbr.com",235],["dualshockers.com",235],["gamerant.com",235],["howtogeek.com",235],["thegamer.com",235],["blogtruyenmoi.com",236],["igay69.com",237],["graphicget.com",238],["qiwi.gg",239],["netcine2.la",240],["cbc.ca",241]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,59]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["readcomiconline",34],["burningseries",35],["dz4soft",36],["yoututosjeff",36],["ebookmed",36],["lanjutkeun",36],["novelasesp",36],["singingdalong",36],["doujindesu",36],["xmovies8",39],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",47],["newpelis",[48,57]],["pelix",[48,57]],["allcalidad",[48,185]],["khatrimaza",48],["camwhores",50],["camwhorestv",50],["uproxy",50],["nekopoi",54],["mirrorace",63],["mixdrp",68],["asiansex",70],["japanfuck",70],["japanporn",70],["teensex",70],["vintagetube",70],["xxxmovies",70],["zooqle",74],["hdfull",78],["mangamanga",80],["streameast",82],["thestreameast",82],["vev",86],["vidop",86],["1337x",88],["zone-telechargement",88],["megalink",93],["gmx",94],["mega1080p",99],["9hentai",101],["gaypornhdfree",108],["cinemakottaga",108],["privatemoviez",108],["apkmaven",108],["popcornstream",110],["fc-lc",128],["pornktube",133],["watchseries",133],["milfnut",134],["pagalmovies",141],["7starhd",141],["jalshamoviez",141],["9xupload",141],["bdupload",141],["desiupload",141],["rdxhd1",141],["moviessources",152],["nuvid",153],["0gomovie",155],["0gomovies",155],["123moviefree",155],["1kmovies",155],["1madrasdub",155],["1primewire",155],["2embed",155],["2madrasdub",155],["2umovies",155],["4anime",155],["9xmovies",155],["adblockplustape",155],["altadefinizione01",155],["anitube",155],["atomixhq",155],["beinmatch",155],["brmovies",155],["cima4u",155],["clicknupload",155],["cmovies",155],["couchtuner",155],["cricfree",155],["crichd",155],["databasegdriveplayer",155],["dood",155],["f1stream",155],["faselhd",155],["fbstream",155],["file4go",155],["filemoon",155],["filepress",[155,218]],["filmlinks4u",155],["filmpertutti",155],["filmyzilla",155],["fmovies",155],["french-stream",155],["fzlink",155],["gdriveplayer",155],["gofilms4u",155],["gogoanime",155],["gomoviz",155],["hdmoviefair",155],["hdmovies4u",155],["hdmovies50",155],["hdmoviesfair",155],["hh3dhay",155],["hindilinks4u",155],["hotmasti",155],["hurawatch",155],["klmanga",155],["klubsports",155],["libertestreamvf",155],["livetvon",155],["manga1000",155],["manga1001",155],["mangaraw",155],["mangarawjp",155],["mlbstream",155],["motogpstream",155],["movierulz",155],["movies123",155],["movies2watch",155],["moviesden",155],["moviezaddiction",155],["myflixer",155],["nbastream",155],["netcine",155],["nflstream",155],["nhlstream",155],["onlinewatchmoviespk",155],["pctfenix",155],["pctnew",155],["pksmovies",155],["plyjam",155],["plylive",155],["pogolinks",155],["popcorntime",155],["poscitech",155],["prmovies",155],["rugbystreams",155],["shahed4u",155],["sflix",155],["sitesunblocked",155],["solarmovies",155],["sportcast",155],["sportskart",155],["sports-stream",155],["streaming-french",155],["streamers",155],["streamingcommunity",155],["strikeout",155],["t20cup",155],["tennisstreams",155],["torrentdosfilmes",155],["toonanime",155],["tvply",155],["ufcstream",155],["uptomega",155],["uqload",155],["vudeo",155],["vidoo",155],["vipbox",155],["vipboxtv",155],["vipleague",155],["viprow",155],["yesmovies",155],["yomovies",155],["yomovies1",155],["yt2mp3s",155],["kat",155],["katbay",155],["kickass",155],["kickasshydra",155],["kickasskat",155],["kickass2",155],["kickasstorrents",155],["kat2",155],["kattracker",155],["thekat",155],["thekickass",155],["kickassz",155],["kickasstorrents2",155],["topkickass",155],["kickassgo",155],["kkickass",155],["kkat",155],["kickasst",155],["kick4ss",155],["guardaserie",160],["cine-calidad",161],["videovard",178],["gntai",185],["grantorrent",185],["mejortorrent",185],["mejortorrento",185],["mejortorrents",185],["mejortorrents1",185],["mejortorrentt",185],["shineads",187],["bg-gledai",213],["gledaitv",213],["motchill",230]]);

const exceptionsMap = new Map([["mentor.duden.de",[81]],["forum.soft98.ir",[202]]]);

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
