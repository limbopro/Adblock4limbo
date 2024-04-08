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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["click","clickCount"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["blur","counter"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["click","0x"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,132]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,184]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["onlyhgames.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,48]],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,37]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,49]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,184]],["short.pe",32],["bs.to",35],["efukt.com",35],["generacionretro.net",36],["nuevos-mu.ucoz.com",36],["micloudfiles.com",36],["mimaletamusical.blogspot.com",36],["visionias.net",36],["b3infoarena.in",36],["lurdchinexgist.blogspot.com",36],["thefreedommatrix.blogspot.com",36],["hentai-vl.blogspot.com",36],["projetomotog.blogspot.com",36],["ktmx.pro",36],["lirik3satu.blogspot.com",36],["marketmovers.it",36],["pharmaguideline.com",36],["safemaru.blogspot.com",36],["mixloads.com",36],["mangaromance.eu",36],["interssh.com",36],["freesoftpdfdownload.blogspot.com",36],["cirokun.blogspot.com",36],["myadslink.com",36],["blackavelic.com",36],["server.satunivers.tv",36],["eg-akw.com",36],["xn--mgba7fjn.cc",36],["flashingjungle.com",37],["ma-x.org",38],["lavozdegalicia.es",38],["xmovies08.org",40],["globaldjmix.com",41],["zazzybabes.com",42],["haaretz.co.il",43],["haaretz.com",43],["slate.com",44],["megalinks.info",45],["megapastes.com",45],["mega-mkv.com",[45,46]],["mkv-pastes.com",45],["zpaste.net",45],["zlpaste.net",45],["9xlinks.site",45],["zona-leros.net",46],["acortarm.xyz",47],["acortame.xyz",47],["cine.to",[48,189]],["kissasia.cc",48],["digjav.com",49],["videoszoofiliahd.com",50],["xxxtubezoo.com",51],["zooredtube.com",51],["uii.io",52],["megacams.me",54],["rlslog.net",54],["porndoe.com",55],["acienciasgalilei.com",57],["playrust.io",58],["payskip.org",59],["short-url.link",60],["tubedupe.com",61],["mcrypto.club",62],["fatgirlskinny.net",63],["polska-ie.com",63],["windowsmatters.com",63],["canaltdt.es",64],["masbrooo.com",64],["2ndrun.tv",64],["stfly.me",65],["oncehelp.com",65],["queenfaucet.website",65],["curto.win",65],["smallseotools.com",66],["macwelt.de",68],["pcwelt.de",68],["capital.de",68],["geo.de",68],["allmomsex.com",69],["allnewindianporn.com",69],["analxxxvideo.com",69],["animalextremesex.com",69],["anime3d.xyz",69],["animefuckmovies.com",69],["animepornfilm.com",69],["animesexbar.com",69],["animesexclip.com",69],["animexxxsex.com",69],["animexxxfilms.com",69],["anysex.club",69],["apetube.asia",69],["asianfuckmovies.com",69],["asianfucktube.com",69],["asianporn.sexy",69],["asiansexcilps.com",69],["beeg.fund",69],["beegvideoz.com",69],["bestasiansex.pro",69],["bravotube.asia",69],["brutalanimalsfuck.com",69],["candyteenporn.com",69],["daddyfuckmovies.com",69],["desifuckonline.com",69],["exclusiveasianporn.com",69],["exteenporn.com",69],["fantasticporn.net",69],["fantasticyoungporn.com",69],["fineasiansex.com",69],["firstasianpussy.com",69],["freeindiansextube.com",69],["freepornasians.com",69],["freerealvideo.com",69],["fuck-beeg.com",69],["fuck-xnxx.com",69],["fuckasian.pro",69],["fuckfuq.com",69],["fuckundies.com",69],["gojapaneseporn.com",69],["golderotica.com",69],["goodyoungsex.com",69],["goyoungporn.com",69],["hardxxxmoms.com",69],["hdvintagetube.com",69],["hentaiporn.me",69],["hentaisexfilms.com",69],["hentaisexuality.com",69],["hot-teens-movies.mobi",69],["hotanimepornvideos.com",69],["hotanimevideos.com",69],["hotasianpussysex.com",69],["hotjapaneseshows.com",69],["hotmaturetube.com",69],["hotmilfs.pro",69],["hotorientalporn.com",69],["hotpornyoung.com",69],["hotxxxjapanese.com",69],["hotxxxpussy.com",69],["indiafree.net",69],["indianpornvideo.online",69],["japanpornclip.com",69],["japanesetube.video",69],["japansex.me",69],["japanesexxxporn.com",69],["japansporno.com",69],["japanxxx.asia",69],["japanxxxworld.com",69],["keezmovies.surf",69],["lingeriefuckvideo.com",69],["liveanimalporn.zooo.club",69],["madhentaitube.com",69],["megahentaitube.com",69],["megajapanesesex.com",69],["megajapantube.com",69],["milfxxxpussy.com",69],["momsextube.pro",69],["momxxxass.com",69],["monkeyanimalporn.com",69],["moviexxx.mobi",69],["newanimeporn.com",69],["newjapanesexxx.com",69],["nicematureporn.com",69],["nudeplayboygirls.com",69],["openxxxporn.com",69],["originalindianporn.com",69],["originalteentube.com",69],["pig-fuck.com",69],["plainasianporn.com",69],["popularasianxxx.com",69],["pornanimetube.com",69],["pornasians.pro",69],["pornhat.asia",69],["pornheed.online",69],["pornjapanesesex.com",69],["pornomovies.asia",69],["pornvintage.tv",69],["primeanimesex.com",69],["realjapansex.com",69],["realmomsex.com",69],["redsexhub.com",69],["retroporn.world",69],["retrosexfilms.com",69],["sex-free-movies.com",69],["sexanimesex.com",69],["sexanimetube.com",69],["sexjapantube.com",69],["sexmomvideos.com",69],["sexteenxxxtube.com",69],["sexxxanimal.com",69],["sexyoungtube.com",69],["sexyvintageporn.com",69],["sopornmovies.com",69],["spicyvintageporn.com",69],["sunporno.club",69],["tabooanime.club",69],["teenextrem.com",69],["teenfucksex.com",69],["teenhost.net",69],["teensexass.com",69],["tnaflix.asia",69],["totalfuckmovies.com",69],["totalmaturefuck.com",69],["txxx.asia",69],["voyeurpornsex.com",69],["warmteensex.com",69],["wetasiancreampie.com",69],["wildhentaitube.com",69],["wowyoungsex.com",69],["xhamster-art.com",69],["xmovie.pro",69],["xnudevideos.com",69],["xnxxjapon.com",69],["xpics.me",69],["xvide.me",69],["xxxanimefuck.com",69],["xxxanimevideos.com",69],["xxxanimemovies.com",69],["xxxhentaimovies.com",69],["xxxhothub.com",69],["xxxjapaneseporntube.com",69],["xxxlargeporn.com",69],["xxxmomz.com",69],["xxxpornmilf.com",69],["xxxpussyclips.com",69],["xxxpussysextube.com",69],["xxxretrofuck.com",69],["xxxsex.pro",69],["xxxsexyjapanese.com",69],["xxxteenyporn.com",69],["xxxvideo.asia",69],["xxxvideos.ink",69],["xxxyoungtv.com",69],["youjizzz.club",69],["youngpussyfuck.com",69],["bayimg.com",70],["celeb.gate.cc",71],["eodev.com",72],["masterplayer.xyz",74],["pussy-hub.com",74],["porndex.com",75],["compucalitv.com",76],["diariodenavarra.es",78],["duden.de",80],["pennlive.com",82],["beautypageants.indiatimes.com",83],["01fmovies.com",84],["lnk2.cc",86],["fullhdxxx.com",87],["luscious.net",[87,132]],["classicpornbest.com",87],["xstory-fr.com",87],["1youngteenporn.com",87],["www-daftarharga.blogspot.com",[87,173]],["miraculous.to",[87,179]],["vtube.to",87],["gosexpod.com",88],["otakukan.com",89],["xcafe.com",90],["pornfd.com",90],["venusarchives.com",90],["imagehaha.com",91],["imagenpic.com",91],["imageshimage.com",91],["imagetwist.com",91],["k1nk.co",92],["watchasians.cc",92],["alexsports.xyz",92],["lulustream.com",92],["luluvdo.com",92],["web.de",93],["news18.com",94],["thelanb.com",95],["dropmms.com",95],["softwaredescargas.com",96],["cracking-dz.com",97],["anitube.ninja",98],["gazzetta.it",99],["port.hu",101],["dziennikbaltycki.pl",102],["dzienniklodzki.pl",102],["dziennikpolski24.pl",102],["dziennikzachodni.pl",102],["echodnia.eu",102],["expressbydgoski.pl",102],["expressilustrowany.pl",102],["gazetakrakowska.pl",102],["gazetalubuska.pl",102],["gazetawroclawska.pl",102],["gk24.pl",102],["gloswielkopolski.pl",102],["gol24.pl",102],["gp24.pl",102],["gra.pl",102],["gs24.pl",102],["kurierlubelski.pl",102],["motofakty.pl",102],["naszemiasto.pl",102],["nowiny24.pl",102],["nowosci.com.pl",102],["nto.pl",102],["polskatimes.pl",102],["pomorska.pl",102],["poranny.pl",102],["sportowy24.pl",102],["strefaagro.pl",102],["strefabiznesu.pl",102],["stronakobiet.pl",102],["telemagazyn.pl",102],["to.com.pl",102],["wspolczesna.pl",102],["course9x.com",102],["courseclub.me",102],["azrom.net",102],["alttyab.net",102],["esopress.com",102],["nesiaku.my.id",102],["onemanhua.com",103],["freeindianporn.mobi",103],["dr-farfar.com",104],["boyfriendtv.com",105],["brandstofprijzen.info",106],["netfuck.net",107],["blog24.me",[107,128]],["kisahdunia.com",107],["javsex.to",107],["nulljungle.com",107],["oyuncusoruyor.com",107],["pbarecap.ph",107],["sourds.net",107],["teknobalta.com",107],["tvinternetowa.info",107],["sqlserveregitimleri.com",107],["tutcourse.com",107],["readytechflip.com",107],["novinhastop.com",107],["warddogs.com",107],["dvdgayporn.com",107],["iimanga.com",107],["tinhocdongthap.com",107],["tremamnon.com",107],["423down.com",107],["brizzynovel.com",107],["jugomobile.com",107],["freecodezilla.net",107],["movieslegacy.com",107],["animekhor.xyz",107],["iconmonstr.com",107],["gay-tubes.cc",107],["rbxscripts.net",107],["comentariodetexto.com",107],["wordpredia.com",107],["livsavr.co",107],["allfaucet.xyz",[107,128]],["titbytz.tk",107],["replica-watch.info",107],["alludemycourses.com",107],["kayifamilytv.com",107],["iir.ai",108],["gameofporn.com",110],["qpython.club",111],["antifake-funko.fr",111],["dktechnicalmate.com",111],["recipahi.com",111],["e9china.net",112],["ac.ontools.net",112],["marketbeat.com",113],["hentaipornpics.net",114],["apps2app.com",115],["alliptvlinks.com",116],["waterfall.money",116],["xvideos.com",117],["xvideos2.com",117],["tubereader.me",118],["repretel.com",118],["dagensnytt.com",119],["mrproblogger.com",119],["themezon.net",119],["gfx-station.com",120],["bitzite.com",[120,128,131]],["historyofroyalwomen.com",121],["davescomputertips.com",121],["ukchat.co.uk",122],["hivelr.com",123],["embedz.click",124],["sexseeimage.com",125],["upshrink.com",126],["ohionowcast.info",128],["wiour.com",128],["appsbull.com",128],["diudemy.com",128],["maqal360.com",128],["bitcotasks.com",128],["videolyrics.in",128],["manofadan.com",128],["cempakajaya.com",128],["tagecoin.com",128],["doge25.in",128],["king-ptcs.com",128],["naijafav.top",128],["ourcoincash.xyz",128],["sh.techsamir.com",128],["claimcoins.site",128],["cryptosh.pro",128],["coinsrev.com",128],["go.freetrx.fun",128],["eftacrypto.com",128],["fescrypto.com",128],["earnhub.net",128],["kiddyshort.com",128],["tronxminer.com",128],["homeairquality.org",129],["exego.app",130],["cutlink.net",130],["cutsy.net",130],["cutyurls.com",130],["cutty.app",130],["cutnet.net",130],["aiimgvlog.fun",132],["6indianporn.com",132],["amateurebonypics.com",132],["amateuryoungpics.com",132],["cinemabg.net",132],["desimmshd.com",132],["frauporno.com",132],["givemeaporn.com",132],["jav-asia.top",132],["javf.net",132],["javideo.net",132],["kr18plus.com",132],["pilibook.com",132],["pornborne.com",132],["porngrey.com",132],["qqxnxx.com",132],["sexvideos.host",132],["submilf.com",132],["subtaboo.com",132],["tktube.com",132],["xfrenchies.com",132],["coingraph.us",133],["momo-net.com",133],["maxgaming.fi",133],["travel.vebma.com",134],["cloud.majalahhewan.com",134],["crm.cekresi.me",134],["ai.tempatwisata.pro",134],["pinloker.com",134],["sekilastekno.com",134],["vulture.com",135],["megaplayer.bokracdn.run",136],["hentaistream.com",137],["siteunblocked.info",138],["larvelfaucet.com",139],["feyorra.top",139],["claimtrx.com",139],["moviesyug.net",140],["w4files.ws",140],["parispi.net",141],["simkl.com",142],["paperzonevn.com",143],["dailyvideoreports.net",144],["lewd.ninja",145],["systemnews24.com",146],["incestvidz.com",147],["niusdiario.es",148],["playporngames.com",149],["movi.pk",[150,154]],["justin.mp3quack.lol",152],["cutesexyteengirls.com",153],["0dramacool.net",154],["185.53.88.104",154],["185.53.88.204",154],["185.53.88.15",154],["123movies4k.net",154],["1movieshd.com",154],["1rowsports.com",154],["4share-mp3.net",154],["6movies.net",154],["9animetv.to",154],["720pstream.me",154],["aagmaal.com",154],["abysscdn.com",154],["ajkalerbarta.com",154],["akstream.xyz",154],["androidapks.biz",154],["androidsite.net",154],["animeonlinefree.org",154],["animesite.net",154],["animespank.com",154],["aniworld.to",154],["apkmody.io",154],["appsfree4u.com",154],["audioz.download",154],["awafim.tv",154],["bdnewszh.com",154],["beastlyprints.com",154],["bengalisite.com",154],["bestfullmoviesinhd.org",154],["betteranime.net",154],["blacktiesports.live",154],["buffsports.stream",154],["ch-play.com",154],["clickforhire.com",154],["cloudy.pk",154],["computercrack.com",154],["coolcast2.com",154],["crackedsoftware.biz",154],["crackfree.org",154],["cracksite.info",154],["cryptoblog24.info",154],["cuatrolatastv.blogspot.com",154],["cydiasources.net",154],["dirproxy.com",154],["dopebox.to",154],["downloadapk.info",154],["downloadapps.info",154],["downloadgames.info",154],["downloadmusic.info",154],["downloadsite.org",154],["downloadwella.com",154],["ebooksite.org",154],["educationtips213.blogspot.com",154],["egyup.live",154],["embed.meomeo.pw",154],["embed.scdn.to",154],["emulatorsite.com",154],["essaysharkwriting.club",154],["exploreera.net",154],["extrafreetv.com",154],["fakedetail.com",154],["fclecteur.com",154],["files.im",154],["flexyhit.com",154],["fmoviefree.net",154],["fmovies24.com",154],["footyhunter3.xyz",154],["freeflix.info",154],["freemoviesu4.com",154],["freeplayervideo.com",154],["freesoccer.net",154],["fseries.org",154],["gamefast.org",154],["gamesite.info",154],["gettapeads.com",154],["gmanga.me",154],["gocast123.me",154],["gogohd.net",154],["gogoplay5.com",154],["gooplay.net",154],["gostreamon.net",154],["happy2hub.org",154],["harimanga.com",154],["healthnewsreel.com",154],["hexupload.net",154],["hinatasoul.com",154],["hindisite.net",154],["holymanga.net",154],["hxfile.co",154],["isosite.org",154],["iv-soft.com",154],["januflix.expert",154],["jewelry.com.my",154],["johnwardflighttraining.com",154],["kabarportal.com",154],["kstorymedia.com",154],["la123movies.org",154],["lespassionsdechinouk.com",154],["lilymanga.net",154],["linksdegrupos.com.br",154],["livestreamtv.pk",154],["macsite.info",154],["mangapt.com",154],["mangasite.org",154],["manhuascan.com",154],["megafilmeshdseries.com",154],["megamovies.org",154],["membed.net",154],["moddroid.com",154],["moviefree2.com",154],["movies-watch.com.pk",154],["moviesite.app",154],["moviesonline.fm",154],["moviesx.org",154],["msmoviesbd.com",154],["musicsite.biz",154],["myfernweh.com",154],["myviid.com",154],["nazarickol.com",154],["noob4cast.com",154],["nsw2u.com",[154,243]],["oko.sh",154],["olympicstreams.me",154],["orangeink.pk",154],["owllink.net",154],["pahaplayers.click",154],["patchsite.net",154],["pdfsite.net",154],["play1002.com",154],["player-cdn.com",154],["productkeysite.com",154],["projectfreetv.one",154],["romsite.org",154],["rufiguta.com",154],["rytmp3.io",154],["send.cm",154],["seriesite.net",154],["seriezloaded.com.ng",154],["serijehaha.com",154],["shrugemojis.com",154],["siteapk.net",154],["siteflix.org",154],["sitegames.net",154],["sitekeys.net",154],["sitepdf.com",154],["sitetorrent.com",154],["softwaresite.net",154],["sportbar.live",154],["sportkart1.xyz",154],["ssyoutube.com",154],["stardima.com",154],["stream4free.live",154],["superapk.org",154],["supermovies.org",154],["tainio-mania.online",154],["talaba.su",154],["tamilguns.org",154],["tatabrada.tv",154],["techtrendmakers.com",154],["theflixer.tv",154],["thememypc.net",154],["thetechzone.online",154],["thripy.com",154],["tonnestreamz.xyz",154],["travelplanspro.com",154],["turcasmania.com",154],["tusfiles.com",154],["tvonlinesports.com",154],["ultramovies.org",154],["uploadbank.com",154],["urdubolo.pk",154],["vidspeeds.com",154],["vumoo.to",154],["warezsite.net",154],["watchmovies2.com",154],["watchmoviesforfree.org",154],["watchofree.com",154],["watchsite.net",154],["watchsouthpark.tv",154],["watchtvch.club",154],["web.livecricket.is",154],["webseries.club",154],["worldcupstream.pm",154],["y2mate.com",154],["youapk.net",154],["youtube4kdownloader.com",154],["yts-subs.com",154],["haho.moe",155],["nicy-spicy.pw",156],["novelmultiverse.com",157],["mylegalporno.com",158],["asianembed.io",161],["thecut.com",162],["novelism.jp",163],["alphapolis.co.jp",164],["okrzone.com",165],["game3rb.com",166],["javhub.net",166],["thotvids.com",167],["berklee.edu",168],["rawkuma.com",[169,170]],["moviesjoyhd.to",170],["imeteo.sk",171],["youtubemp3donusturucu.net",172],["surfsees.com",174],["vivo.st",[175,176]],["alueviesti.fi",178],["kiuruvesilehti.fi",178],["lempaala.ideapark.fi",178],["olutposti.fi",178],["urjalansanomat.fi",178],["tainhanhvn.com",180],["titantv.com",181],["3cinfo.net",182],["transportationlies.org",183],["camarchive.tv",184],["crownimg.com",184],["freejav.guru",184],["hentai2read.com",184],["icyporno.com",184],["illink.net",184],["javtiful.com",184],["m-hentai.net",184],["pornblade.com",184],["pornfelix.com",184],["pornxxxxtube.net",184],["redwap.me",184],["redwap2.com",184],["redwap3.com",184],["tubxporn.xxx",184],["ver-comics-porno.com",184],["ver-mangas-porno.com",184],["xanimeporn.com",184],["xxxvideohd.net",184],["zetporn.com",184],["cocomanga.com",185],["sampledrive.in",186],["mcleaks.net",187],["explorecams.com",187],["minecraft.buzz",187],["chillx.top",188],["playerx.stream",188],["m.liputan6.com",190],["stardewids.com",[190,213]],["ingles.com",191],["spanishdict.com",191],["surfline.com",192],["rureka.com",193],["bunkr.is",194],["amateur8.com",195],["freeporn8.com",195],["maturetubehere.com",195],["embedo.co",196],["corriere.it",197],["oggi.it",197],["2the.space",198],["apkcombo.com",199],["sponsorhunter.com",200],["soft98.ir",201],["novelssites.com",202],["haxina.com",203],["cryptofenz.xyz",203],["torrentmac.net",204],["udvl.com",205],["moviezaddiction.icu",206],["dlpanda.com",207],["socialmediagirls.com",208],["einrichtungsbeispiele.de",209],["weadown.com",210],["molotov.tv",211],["freecoursesonline.me",212],["adelsfun.com",212],["advantien.com",212],["bailbondsfinder.com",212],["bigpiecreative.com",212],["childrenslibrarylady.com",212],["classifarms.com",212],["comtasq.ca",212],["crone.es",212],["ctrmarketingsolutions.com",212],["dropnudes.com",212],["ftuapps.dev",212],["genzsport.com",212],["ghscanner.com",212],["grsprotection.com",212],["gruporafa.com.br",212],["inmatefindcalifornia.com",212],["inmatesearchidaho.com",212],["itsonsitetv.com",212],["mfmfinancials.com",212],["myproplugins.com",212],["onehack.us",212],["ovester.com",212],["paste.bin.sx",212],["privatenudes.com",212],["renoconcrete.ca",212],["richieashbeck.com",212],["sat.technology",212],["short1ink.com",212],["stpm.co.uk",212],["wegotcookies.co",212],["mathcrave.com",212],["commands.gg",213],["smgplaza.com",214],["emturbovid.com",215],["freepik.com",216],["diyphotography.net",218],["bitchesgirls.com",219],["shopforex.online",220],["programmingeeksclub.com",221],["easymc.io",222],["diendancauduong.com",223],["parentcircle.com",224],["h-game18.xyz",225],["nopay.info",226],["wheelofgold.com",227],["shortlinks.tech",228],["skill4ltu.eu",230],["freepikdownloader.com",231],["freepasses.org",232],["iusedtobeaboss.com",233],["androidpolice.com",234],["cbr.com",234],["dualshockers.com",234],["gamerant.com",234],["howtogeek.com",234],["thegamer.com",234],["blogtruyenmoi.com",235],["igay69.com",236],["graphicget.com",237],["qiwi.gg",238],["netcine2.la",239],["idnes.cz",[240,241]],["cbc.ca",242]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,58]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["readcomiconline",34],["burningseries",35],["dz4soft",36],["yoututosjeff",36],["ebookmed",36],["lanjutkeun",36],["novelasesp",36],["singingdalong",36],["doujindesu",36],["xmovies8",39],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",47],["newpelis",[48,56]],["pelix",[48,56]],["allcalidad",[48,184]],["khatrimaza",48],["camwhores",49],["camwhorestv",49],["uproxy",49],["nekopoi",53],["mirrorace",62],["mixdrp",67],["asiansex",69],["japanfuck",69],["japanporn",69],["teensex",69],["vintagetube",69],["xxxmovies",69],["zooqle",73],["hdfull",77],["mangamanga",79],["streameast",81],["thestreameast",81],["vev",85],["vidop",85],["1337x",87],["zone-telechargement",87],["megalink",92],["gmx",93],["mega1080p",98],["9hentai",100],["gaypornhdfree",107],["cinemakottaga",107],["privatemoviez",107],["apkmaven",107],["popcornstream",109],["fc-lc",127],["pornktube",132],["watchseries",132],["milfnut",133],["pagalmovies",140],["7starhd",140],["jalshamoviez",140],["9xupload",140],["bdupload",140],["desiupload",140],["rdxhd1",140],["moviessources",151],["nuvid",152],["0gomovie",154],["0gomovies",154],["123moviefree",154],["1kmovies",154],["1madrasdub",154],["1primewire",154],["2embed",154],["2madrasdub",154],["2umovies",154],["4anime",154],["9xmovies",154],["adblockplustape",154],["altadefinizione01",154],["anitube",154],["atomixhq",154],["beinmatch",154],["brmovies",154],["cima4u",154],["clicknupload",154],["cmovies",154],["couchtuner",154],["cricfree",154],["crichd",154],["databasegdriveplayer",154],["dood",154],["f1stream",154],["faselhd",154],["fbstream",154],["file4go",154],["filemoon",154],["filepress",[154,217]],["filmlinks4u",154],["filmpertutti",154],["filmyzilla",154],["fmovies",154],["french-stream",154],["fzlink",154],["gdriveplayer",154],["gofilms4u",154],["gogoanime",154],["gomoviz",154],["hdmoviefair",154],["hdmovies4u",154],["hdmovies50",154],["hdmoviesfair",154],["hh3dhay",154],["hindilinks4u",154],["hotmasti",154],["hurawatch",154],["klmanga",154],["klubsports",154],["libertestreamvf",154],["livetvon",154],["manga1000",154],["manga1001",154],["mangaraw",154],["mangarawjp",154],["mlbstream",154],["motogpstream",154],["movierulz",154],["movies123",154],["movies2watch",154],["moviesden",154],["moviezaddiction",154],["myflixer",154],["nbastream",154],["netcine",154],["nflstream",154],["nhlstream",154],["onlinewatchmoviespk",154],["pctfenix",154],["pctnew",154],["pksmovies",154],["plyjam",154],["plylive",154],["pogolinks",154],["popcorntime",154],["poscitech",154],["prmovies",154],["rugbystreams",154],["shahed4u",154],["sflix",154],["sitesunblocked",154],["solarmovies",154],["sportcast",154],["sportskart",154],["sports-stream",154],["streaming-french",154],["streamers",154],["streamingcommunity",154],["strikeout",154],["t20cup",154],["tennisstreams",154],["torrentdosfilmes",154],["toonanime",154],["tvply",154],["ufcstream",154],["uptomega",154],["uqload",154],["vudeo",154],["vidoo",154],["vipbox",154],["vipboxtv",154],["vipleague",154],["viprow",154],["yesmovies",154],["yomovies",154],["yomovies1",154],["yt2mp3s",154],["kat",154],["katbay",154],["kickass",154],["kickasshydra",154],["kickasskat",154],["kickass2",154],["kickasstorrents",154],["kat2",154],["kattracker",154],["thekat",154],["thekickass",154],["kickassz",154],["kickasstorrents2",154],["topkickass",154],["kickassgo",154],["kkickass",154],["kkat",154],["kickasst",154],["kick4ss",154],["guardaserie",159],["cine-calidad",160],["videovard",177],["gntai",184],["grantorrent",184],["mejortorrent",184],["mejortorrento",184],["mejortorrents",184],["mejortorrents1",184],["mejortorrentt",184],["shineads",186],["bg-gledai",212],["gledaitv",212],["motchill",229]]);

const exceptionsMap = new Map([["mentor.duden.de",[80]],["forum.soft98.ir",[201]]]);

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
