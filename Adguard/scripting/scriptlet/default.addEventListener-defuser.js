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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["blur","counter"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["click","0x"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,132]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["comandotorrenthd.org",17],["turkdebrid.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,184]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["onlyhgames.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,48]],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,37]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,50]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,184]],["short.pe",32],["bs.to",35],["efukt.com",35],["generacionretro.net",36],["nuevos-mu.ucoz.com",36],["micloudfiles.com",36],["mimaletamusical.blogspot.com",36],["visionias.net",36],["b3infoarena.in",36],["lurdchinexgist.blogspot.com",36],["thefreedommatrix.blogspot.com",36],["hentai-vl.blogspot.com",36],["projetomotog.blogspot.com",36],["ktmx.pro",36],["lirik3satu.blogspot.com",36],["marketmovers.it",36],["pharmaguideline.com",36],["safemaru.blogspot.com",36],["mixloads.com",36],["mangaromance.eu",36],["interssh.com",36],["freesoftpdfdownload.blogspot.com",36],["cirokun.blogspot.com",36],["myadslink.com",36],["blackavelic.com",36],["server.satunivers.tv",36],["eg-akw.com",36],["xn--mgba7fjn.cc",36],["flashingjungle.com",37],["ma-x.org",38],["lavozdegalicia.es",38],["xmovies08.org",40],["globaldjmix.com",41],["zazzybabes.com",42],["haaretz.co.il",43],["haaretz.com",43],["slate.com",44],["megalinks.info",45],["megapastes.com",45],["mega-mkv.com",[45,46]],["mkv-pastes.com",45],["zpaste.net",45],["zlpaste.net",45],["9xlinks.site",45],["zona-leros.net",46],["acortarm.xyz",47],["acortame.xyz",47],["cine.to",[48,189]],["kissasia.cc",48],["nzbstars.com",49],["digjav.com",50],["videoszoofiliahd.com",51],["xxxtubezoo.com",52],["zooredtube.com",52],["uii.io",53],["loaninsurehub.com",53],["megacams.me",55],["rlslog.net",55],["porndoe.com",56],["acienciasgalilei.com",58],["playrust.io",59],["payskip.org",60],["short-url.link",61],["tubedupe.com",62],["mcrypto.club",63],["fatgirlskinny.net",64],["polska-ie.com",64],["windowsmatters.com",64],["canaltdt.es",65],["masbrooo.com",65],["2ndrun.tv",65],["stfly.me",66],["oncehelp.com",66],["queenfaucet.website",66],["curto.win",66],["smallseotools.com",67],["macwelt.de",69],["pcwelt.de",69],["capital.de",69],["geo.de",69],["allmomsex.com",70],["allnewindianporn.com",70],["analxxxvideo.com",70],["animalextremesex.com",70],["anime3d.xyz",70],["animefuckmovies.com",70],["animepornfilm.com",70],["animesexbar.com",70],["animesexclip.com",70],["animexxxsex.com",70],["animexxxfilms.com",70],["anysex.club",70],["apetube.asia",70],["asianfuckmovies.com",70],["asianfucktube.com",70],["asianporn.sexy",70],["asiansexcilps.com",70],["beeg.fund",70],["beegvideoz.com",70],["bestasiansex.pro",70],["bravotube.asia",70],["brutalanimalsfuck.com",70],["candyteenporn.com",70],["daddyfuckmovies.com",70],["desifuckonline.com",70],["exclusiveasianporn.com",70],["exteenporn.com",70],["fantasticporn.net",70],["fantasticyoungporn.com",70],["fineasiansex.com",70],["firstasianpussy.com",70],["freeindiansextube.com",70],["freepornasians.com",70],["freerealvideo.com",70],["fuck-beeg.com",70],["fuck-xnxx.com",70],["fuckasian.pro",70],["fuckfuq.com",70],["fuckundies.com",70],["gojapaneseporn.com",70],["golderotica.com",70],["goodyoungsex.com",70],["goyoungporn.com",70],["hardxxxmoms.com",70],["hdvintagetube.com",70],["hentaiporn.me",70],["hentaisexfilms.com",70],["hentaisexuality.com",70],["hot-teens-movies.mobi",70],["hotanimepornvideos.com",70],["hotanimevideos.com",70],["hotasianpussysex.com",70],["hotjapaneseshows.com",70],["hotmaturetube.com",70],["hotmilfs.pro",70],["hotorientalporn.com",70],["hotpornyoung.com",70],["hotxxxjapanese.com",70],["hotxxxpussy.com",70],["indiafree.net",70],["indianpornvideo.online",70],["japanpornclip.com",70],["japanesetube.video",70],["japansex.me",70],["japanesexxxporn.com",70],["japansporno.com",70],["japanxxx.asia",70],["japanxxxworld.com",70],["keezmovies.surf",70],["lingeriefuckvideo.com",70],["liveanimalporn.zooo.club",70],["madhentaitube.com",70],["megahentaitube.com",70],["megajapanesesex.com",70],["megajapantube.com",70],["milfxxxpussy.com",70],["momsextube.pro",70],["momxxxass.com",70],["monkeyanimalporn.com",70],["moviexxx.mobi",70],["newanimeporn.com",70],["newjapanesexxx.com",70],["nicematureporn.com",70],["nudeplayboygirls.com",70],["openxxxporn.com",70],["originalindianporn.com",70],["originalteentube.com",70],["pig-fuck.com",70],["plainasianporn.com",70],["popularasianxxx.com",70],["pornanimetube.com",70],["pornasians.pro",70],["pornhat.asia",70],["pornheed.online",70],["pornjapanesesex.com",70],["pornomovies.asia",70],["pornvintage.tv",70],["primeanimesex.com",70],["realjapansex.com",70],["realmomsex.com",70],["redsexhub.com",70],["retroporn.world",70],["retrosexfilms.com",70],["sex-free-movies.com",70],["sexanimesex.com",70],["sexanimetube.com",70],["sexjapantube.com",70],["sexmomvideos.com",70],["sexteenxxxtube.com",70],["sexxxanimal.com",70],["sexyoungtube.com",70],["sexyvintageporn.com",70],["sopornmovies.com",70],["spicyvintageporn.com",70],["sunporno.club",70],["tabooanime.club",70],["teenextrem.com",70],["teenfucksex.com",70],["teenhost.net",70],["teensexass.com",70],["tnaflix.asia",70],["totalfuckmovies.com",70],["totalmaturefuck.com",70],["txxx.asia",70],["voyeurpornsex.com",70],["warmteensex.com",70],["wetasiancreampie.com",70],["wildhentaitube.com",70],["wowyoungsex.com",70],["xhamster-art.com",70],["xmovie.pro",70],["xnudevideos.com",70],["xnxxjapon.com",70],["xpics.me",70],["xvide.me",70],["xxxanimefuck.com",70],["xxxanimevideos.com",70],["xxxanimemovies.com",70],["xxxhentaimovies.com",70],["xxxhothub.com",70],["xxxjapaneseporntube.com",70],["xxxlargeporn.com",70],["xxxmomz.com",70],["xxxpornmilf.com",70],["xxxpussyclips.com",70],["xxxpussysextube.com",70],["xxxretrofuck.com",70],["xxxsex.pro",70],["xxxsexyjapanese.com",70],["xxxteenyporn.com",70],["xxxvideo.asia",70],["xxxvideos.ink",70],["xxxyoungtv.com",70],["youjizzz.club",70],["youngpussyfuck.com",70],["bayimg.com",71],["celeb.gate.cc",72],["eodev.com",73],["masterplayer.xyz",75],["pussy-hub.com",75],["porndex.com",76],["compucalitv.com",77],["diariodenavarra.es",79],["duden.de",81],["pennlive.com",83],["beautypageants.indiatimes.com",84],["01fmovies.com",85],["lnk2.cc",87],["fullhdxxx.com",88],["luscious.net",[88,132]],["classicpornbest.com",88],["xstory-fr.com",88],["1youngteenporn.com",88],["www-daftarharga.blogspot.com",[88,173]],["miraculous.to",[88,179]],["vtube.to",88],["gosexpod.com",89],["otakukan.com",90],["xcafe.com",91],["pornfd.com",91],["venusarchives.com",91],["imagehaha.com",92],["imagenpic.com",92],["imageshimage.com",92],["imagetwist.com",92],["k1nk.co",93],["watchasians.cc",93],["alexsports.xyz",93],["lulustream.com",93],["luluvdo.com",93],["web.de",94],["news18.com",95],["thelanb.com",96],["dropmms.com",96],["softwaredescargas.com",97],["cracking-dz.com",98],["anitube.ninja",99],["gazzetta.it",100],["port.hu",102],["dziennikbaltycki.pl",103],["dzienniklodzki.pl",103],["dziennikpolski24.pl",103],["dziennikzachodni.pl",103],["echodnia.eu",103],["expressbydgoski.pl",103],["expressilustrowany.pl",103],["gazetakrakowska.pl",103],["gazetalubuska.pl",103],["gazetawroclawska.pl",103],["gk24.pl",103],["gloswielkopolski.pl",103],["gol24.pl",103],["gp24.pl",103],["gra.pl",103],["gs24.pl",103],["kurierlubelski.pl",103],["motofakty.pl",103],["naszemiasto.pl",103],["nowiny24.pl",103],["nowosci.com.pl",103],["nto.pl",103],["polskatimes.pl",103],["pomorska.pl",103],["poranny.pl",103],["sportowy24.pl",103],["strefaagro.pl",103],["strefabiznesu.pl",103],["stronakobiet.pl",103],["telemagazyn.pl",103],["to.com.pl",103],["wspolczesna.pl",103],["course9x.com",103],["courseclub.me",103],["azrom.net",103],["alttyab.net",103],["esopress.com",103],["nesiaku.my.id",103],["onemanhua.com",104],["freeindianporn.mobi",104],["dr-farfar.com",105],["boyfriendtv.com",106],["brandstofprijzen.info",107],["netfuck.net",108],["blog24.me",[108,128]],["kisahdunia.com",108],["javsex.to",108],["nulljungle.com",108],["oyuncusoruyor.com",108],["pbarecap.ph",108],["sourds.net",108],["teknobalta.com",108],["tvinternetowa.info",108],["sqlserveregitimleri.com",108],["tutcourse.com",108],["readytechflip.com",108],["novinhastop.com",108],["warddogs.com",108],["dvdgayporn.com",108],["iimanga.com",108],["tinhocdongthap.com",108],["tremamnon.com",108],["423down.com",108],["brizzynovel.com",108],["jugomobile.com",108],["freecodezilla.net",108],["movieslegacy.com",108],["animekhor.xyz",108],["iconmonstr.com",108],["gay-tubes.cc",108],["rbxscripts.net",108],["comentariodetexto.com",108],["wordpredia.com",108],["livsavr.co",108],["allfaucet.xyz",[108,128]],["titbytz.tk",108],["replica-watch.info",108],["alludemycourses.com",108],["kayifamilytv.com",108],["iir.ai",109],["gameofporn.com",111],["qpython.club",112],["antifake-funko.fr",112],["dktechnicalmate.com",112],["recipahi.com",112],["e9china.net",113],["ac.ontools.net",113],["marketbeat.com",114],["hentaipornpics.net",115],["apps2app.com",116],["alliptvlinks.com",117],["waterfall.money",117],["xvideos.com",118],["xvideos2.com",118],["tubereader.me",119],["repretel.com",119],["dagensnytt.com",120],["mrproblogger.com",120],["themezon.net",120],["gfx-station.com",121],["bitzite.com",[121,128,131]],["historyofroyalwomen.com",122],["davescomputertips.com",122],["ukchat.co.uk",123],["hivelr.com",124],["embedz.click",125],["upshrink.com",126],["fc-lc.xyz",127],["ohionowcast.info",128],["wiour.com",128],["appsbull.com",128],["diudemy.com",128],["maqal360.com",128],["bitcotasks.com",128],["videolyrics.in",128],["manofadan.com",128],["cempakajaya.com",128],["tagecoin.com",128],["doge25.in",128],["king-ptcs.com",128],["naijafav.top",128],["ourcoincash.xyz",128],["sh.techsamir.com",128],["claimcoins.site",128],["cryptosh.pro",128],["coinsrev.com",128],["go.freetrx.fun",128],["eftacrypto.com",128],["fescrypto.com",128],["earnhub.net",128],["kiddyshort.com",128],["tronxminer.com",128],["homeairquality.org",129],["exego.app",130],["cutlink.net",130],["cutsy.net",130],["cutyurls.com",130],["cutty.app",130],["cutnet.net",130],["aiimgvlog.fun",132],["6indianporn.com",132],["amateurebonypics.com",132],["amateuryoungpics.com",132],["cinemabg.net",132],["desimmshd.com",132],["frauporno.com",132],["givemeaporn.com",132],["jav-asia.top",132],["javf.net",132],["javideo.net",132],["kr18plus.com",132],["pilibook.com",132],["pornborne.com",132],["porngrey.com",132],["qqxnxx.com",132],["sexvideos.host",132],["submilf.com",132],["subtaboo.com",132],["tktube.com",132],["xfrenchies.com",132],["coingraph.us",133],["momo-net.com",133],["maxgaming.fi",133],["travel.vebma.com",134],["cloud.majalahhewan.com",134],["crm.cekresi.me",134],["pinloker.com",134],["sekilastekno.com",134],["vulture.com",135],["megaplayer.bokracdn.run",136],["hentaistream.com",137],["siteunblocked.info",138],["larvelfaucet.com",139],["feyorra.top",139],["claimtrx.com",139],["moviesyug.net",140],["w4files.ws",140],["parispi.net",141],["simkl.com",142],["paperzonevn.com",143],["dailyvideoreports.net",144],["lewd.ninja",145],["systemnews24.com",146],["incestvidz.com",147],["niusdiario.es",148],["playporngames.com",149],["movi.pk",[150,154]],["justin.mp3quack.lol",152],["cutesexyteengirls.com",153],["0dramacool.net",154],["185.53.88.104",154],["185.53.88.204",154],["185.53.88.15",154],["123movies4k.net",154],["1movieshd.com",154],["1rowsports.com",154],["4share-mp3.net",154],["6movies.net",154],["9animetv.to",154],["720pstream.me",154],["aagmaal.com",154],["abysscdn.com",154],["ajkalerbarta.com",154],["akstream.xyz",154],["androidapks.biz",154],["androidsite.net",154],["animeonlinefree.org",154],["animesite.net",154],["animespank.com",154],["aniworld.to",154],["apkmody.io",154],["appsfree4u.com",154],["audioz.download",154],["awafim.tv",154],["bdnewszh.com",154],["beastlyprints.com",154],["bengalisite.com",154],["bestfullmoviesinhd.org",154],["betteranime.net",154],["blacktiesports.live",154],["buffsports.stream",154],["ch-play.com",154],["clickforhire.com",154],["cloudy.pk",154],["computercrack.com",154],["coolcast2.com",154],["crackedsoftware.biz",154],["crackfree.org",154],["cracksite.info",154],["cryptoblog24.info",154],["cuatrolatastv.blogspot.com",154],["cydiasources.net",154],["dirproxy.com",154],["dopebox.to",154],["downloadapk.info",154],["downloadapps.info",154],["downloadgames.info",154],["downloadmusic.info",154],["downloadsite.org",154],["downloadwella.com",154],["ebooksite.org",154],["educationtips213.blogspot.com",154],["egyup.live",154],["embed.meomeo.pw",154],["embed.scdn.to",154],["emulatorsite.com",154],["essaysharkwriting.club",154],["exploreera.net",154],["extrafreetv.com",154],["fakedetail.com",154],["fclecteur.com",154],["files.im",154],["flexyhit.com",154],["fmoviefree.net",154],["fmovies24.com",154],["footyhunter3.xyz",154],["freeflix.info",154],["freemoviesu4.com",154],["freeplayervideo.com",154],["freesoccer.net",154],["fseries.org",154],["gamefast.org",154],["gamesite.info",154],["gettapeads.com",154],["gmanga.me",154],["gocast123.me",154],["gogohd.net",154],["gogoplay5.com",154],["gooplay.net",154],["gostreamon.net",154],["happy2hub.org",154],["harimanga.com",154],["healthnewsreel.com",154],["hexupload.net",154],["hinatasoul.com",154],["hindisite.net",154],["holymanga.net",154],["hxfile.co",154],["isosite.org",154],["iv-soft.com",154],["januflix.expert",154],["jewelry.com.my",154],["johnwardflighttraining.com",154],["kabarportal.com",154],["kstorymedia.com",154],["la123movies.org",154],["lespassionsdechinouk.com",154],["lilymanga.net",154],["linksdegrupos.com.br",154],["livestreamtv.pk",154],["macsite.info",154],["mangapt.com",154],["mangasite.org",154],["manhuascan.com",154],["megafilmeshdseries.com",154],["megamovies.org",154],["membed.net",154],["moddroid.com",154],["moviefree2.com",154],["movies-watch.com.pk",154],["moviesite.app",154],["moviesonline.fm",154],["moviesx.org",154],["msmoviesbd.com",154],["musicsite.biz",154],["myfernweh.com",154],["myviid.com",154],["nazarickol.com",154],["noob4cast.com",154],["nsw2u.com",[154,241]],["oko.sh",154],["olympicstreams.me",154],["orangeink.pk",154],["owllink.net",154],["pahaplayers.click",154],["patchsite.net",154],["pdfsite.net",154],["play1002.com",154],["player-cdn.com",154],["productkeysite.com",154],["projectfreetv.one",154],["romsite.org",154],["rufiguta.com",154],["rytmp3.io",154],["send.cm",154],["seriesite.net",154],["seriezloaded.com.ng",154],["serijehaha.com",154],["shrugemojis.com",154],["siteapk.net",154],["siteflix.org",154],["sitegames.net",154],["sitekeys.net",154],["sitepdf.com",154],["sitetorrent.com",154],["softwaresite.net",154],["sportbar.live",154],["sportkart1.xyz",154],["ssyoutube.com",154],["stardima.com",154],["stream4free.live",154],["superapk.org",154],["supermovies.org",154],["tainio-mania.online",154],["talaba.su",154],["tamilguns.org",154],["tatabrada.tv",154],["techtrendmakers.com",154],["theflixer.tv",154],["thememypc.net",154],["thetechzone.online",154],["thripy.com",154],["tonnestreamz.xyz",154],["travelplanspro.com",154],["turcasmania.com",154],["tusfiles.com",154],["tvonlinesports.com",154],["ultramovies.org",154],["uploadbank.com",154],["urdubolo.pk",154],["vidspeeds.com",154],["vumoo.to",154],["warezsite.net",154],["watchmovies2.com",154],["watchmoviesforfree.org",154],["watchofree.com",154],["watchsite.net",154],["watchsouthpark.tv",154],["watchtvch.club",154],["web.livecricket.is",154],["webseries.club",154],["worldcupstream.pm",154],["y2mate.com",154],["youapk.net",154],["youtube4kdownloader.com",154],["yts-subs.com",154],["haho.moe",155],["nicy-spicy.pw",156],["novelmultiverse.com",157],["mylegalporno.com",158],["asianembed.io",161],["thecut.com",162],["novelism.jp",163],["alphapolis.co.jp",164],["okrzone.com",165],["game3rb.com",166],["javhub.net",166],["thotvids.com",167],["berklee.edu",168],["rawkuma.com",[169,170]],["moviesjoyhd.to",170],["imeteo.sk",171],["youtubemp3donusturucu.net",172],["surfsees.com",174],["vivo.st",[175,176]],["alueviesti.fi",178],["kiuruvesilehti.fi",178],["lempaala.ideapark.fi",178],["olutposti.fi",178],["urjalansanomat.fi",178],["tainhanhvn.com",180],["titantv.com",181],["3cinfo.net",182],["transportationlies.org",183],["camarchive.tv",184],["crownimg.com",184],["freejav.guru",184],["hentai2read.com",184],["icyporno.com",184],["illink.net",184],["javtiful.com",184],["m-hentai.net",184],["pornblade.com",184],["pornfelix.com",184],["pornxxxxtube.net",184],["redwap.me",184],["redwap2.com",184],["redwap3.com",184],["tubxporn.xxx",184],["ver-comics-porno.com",184],["ver-mangas-porno.com",184],["xanimeporn.com",184],["xxxvideohd.net",184],["zetporn.com",184],["cocomanga.com",185],["sampledrive.in",186],["mcleaks.net",187],["explorecams.com",187],["minecraft.buzz",187],["chillx.top",188],["playerx.stream",188],["m.liputan6.com",190],["stardewids.com",[190,213]],["ingles.com",191],["spanishdict.com",191],["surfline.com",192],["rureka.com",193],["bunkr.is",194],["amateur8.com",195],["freeporn8.com",195],["maturetubehere.com",195],["embedo.co",196],["corriere.it",197],["oggi.it",197],["2the.space",198],["apkcombo.com",199],["sponsorhunter.com",200],["soft98.ir",201],["novelssites.com",202],["haxina.com",203],["cryptofenz.xyz",203],["torrentmac.net",204],["udvl.com",205],["moviezaddiction.icu",206],["dlpanda.com",207],["socialmediagirls.com",208],["einrichtungsbeispiele.de",209],["weadown.com",210],["molotov.tv",211],["freecoursesonline.me",212],["adelsfun.com",212],["advantien.com",212],["bailbondsfinder.com",212],["bigpiecreative.com",212],["childrenslibrarylady.com",212],["classifarms.com",212],["comtasq.ca",212],["crone.es",212],["ctrmarketingsolutions.com",212],["dropnudes.com",212],["ftuapps.dev",212],["genzsport.com",212],["ghscanner.com",212],["grsprotection.com",212],["gruporafa.com.br",212],["inmatefindcalifornia.com",212],["inmatesearchidaho.com",212],["itsonsitetv.com",212],["mfmfinancials.com",212],["myproplugins.com",212],["onehack.us",212],["ovester.com",212],["paste.bin.sx",212],["privatenudes.com",212],["renoconcrete.ca",212],["richieashbeck.com",212],["sat.technology",212],["short1ink.com",212],["stpm.co.uk",212],["wegotcookies.co",212],["mathcrave.com",212],["commands.gg",213],["smgplaza.com",214],["emturbovid.com",215],["freepik.com",216],["diyphotography.net",218],["bitchesgirls.com",219],["shopforex.online",220],["programmingeeksclub.com",221],["easymc.io",222],["diendancauduong.com",223],["parentcircle.com",224],["h-game18.xyz",225],["nopay.info",226],["wheelofgold.com",227],["shortlinks.tech",228],["skill4ltu.eu",230],["freepikdownloader.com",231],["freepasses.org",232],["iusedtobeaboss.com",233],["androidpolice.com",234],["cbr.com",234],["dualshockers.com",234],["gamerant.com",234],["howtogeek.com",234],["thegamer.com",234],["blogtruyenmoi.com",235],["igay69.com",236],["graphicget.com",237],["qiwi.gg",238],["netcine2.la",239],["cbc.ca",240]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,59]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["readcomiconline",34],["burningseries",35],["dz4soft",36],["yoututosjeff",36],["ebookmed",36],["lanjutkeun",36],["novelasesp",36],["singingdalong",36],["doujindesu",36],["xmovies8",39],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",47],["newpelis",[48,57]],["pelix",[48,57]],["allcalidad",[48,184]],["khatrimaza",48],["camwhores",50],["camwhorestv",50],["uproxy",50],["nekopoi",54],["mirrorace",63],["mixdrp",68],["asiansex",70],["japanfuck",70],["japanporn",70],["teensex",70],["vintagetube",70],["xxxmovies",70],["zooqle",74],["hdfull",78],["mangamanga",80],["streameast",82],["thestreameast",82],["vev",86],["vidop",86],["zone-telechargement",88],["megalink",93],["gmx",94],["mega1080p",99],["9hentai",101],["gaypornhdfree",108],["cinemakottaga",108],["privatemoviez",108],["apkmaven",108],["popcornstream",110],["pornktube",132],["watchseries",132],["milfnut",133],["pagalmovies",140],["7starhd",140],["jalshamoviez",140],["9xupload",140],["bdupload",140],["desiupload",140],["rdxhd1",140],["moviessources",151],["nuvid",152],["0gomovie",154],["0gomovies",154],["123moviefree",154],["1kmovies",154],["1madrasdub",154],["1primewire",154],["2embed",154],["2madrasdub",154],["2umovies",154],["4anime",154],["9xmovies",154],["adblockplustape",154],["altadefinizione01",154],["anitube",154],["atomixhq",154],["beinmatch",154],["brmovies",154],["cima4u",154],["clicknupload",154],["cmovies",154],["couchtuner",154],["cricfree",154],["crichd",154],["databasegdriveplayer",154],["dood",154],["f1stream",154],["faselhd",154],["fbstream",154],["file4go",154],["filemoon",154],["filepress",[154,217]],["filmlinks4u",154],["filmpertutti",154],["filmyzilla",154],["fmovies",154],["french-stream",154],["fzlink",154],["gdriveplayer",154],["gofilms4u",154],["gogoanime",154],["gomoviz",154],["hdmoviefair",154],["hdmovies4u",154],["hdmovies50",154],["hdmoviesfair",154],["hh3dhay",154],["hindilinks4u",154],["hotmasti",154],["hurawatch",154],["klmanga",154],["klubsports",154],["libertestreamvf",154],["livetvon",154],["manga1000",154],["manga1001",154],["mangaraw",154],["mangarawjp",154],["mlbstream",154],["motogpstream",154],["movierulz",154],["movies123",154],["movies2watch",154],["moviesden",154],["moviezaddiction",154],["myflixer",154],["nbastream",154],["netcine",154],["nflstream",154],["nhlstream",154],["onlinewatchmoviespk",154],["pctfenix",154],["pctnew",154],["pksmovies",154],["plyjam",154],["plylive",154],["pogolinks",154],["popcorntime",154],["poscitech",154],["prmovies",154],["rugbystreams",154],["shahed4u",154],["sflix",154],["sitesunblocked",154],["socceronline",154],["solarmovies",154],["sportcast",154],["sportskart",154],["sports-stream",154],["streaming-french",154],["streamers",154],["streamingcommunity",154],["strikeout",154],["t20cup",154],["tennisstreams",154],["torrentdosfilmes",154],["toonanime",154],["tvply",154],["ufcstream",154],["uptomega",154],["uqload",154],["vudeo",154],["vidoo",154],["vipbox",154],["vipboxtv",154],["vipleague",154],["viprow",154],["yesmovies",154],["yomovies",154],["yomovies1",154],["yt2mp3s",154],["kat",154],["katbay",154],["kickass",154],["kickasshydra",154],["kickasskat",154],["kickass2",154],["kickasstorrents",154],["kat2",154],["kattracker",154],["thekat",154],["thekickass",154],["kickassz",154],["kickasstorrents2",154],["topkickass",154],["kickassgo",154],["kkickass",154],["kkat",154],["kickasst",154],["kick4ss",154],["guardaserie",159],["cine-calidad",160],["videovard",177],["gntai",184],["grantorrent",184],["mejortorrent",184],["mejortorrento",184],["mejortorrents",184],["mejortorrents1",184],["mejortorrentt",184],["shineads",186],["bg-gledai",212],["gledaitv",212],["motchill",229]]);

const exceptionsMap = new Map([["mentor.duden.de",[81]],["forum.soft98.ir",[201]]]);

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
