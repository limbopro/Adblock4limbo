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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","window.open"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["getexoloader"],["","pop"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["mousedown","preventDefault"],["load","advertising"],["mousedown","localStorage"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","adlinkfly"],["DOMContentLoaded","shortener"],["mousedown","trigger"],["","0x"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["click","trigger"],["mouseout","clientWidth"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["click"],["DOMContentLoaded","compupaste"],["mousedown","!!{});"],["DOMContentLoaded","/adblock/i"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["load","ads"],["click","ShouldShow"],["/adblock/i"],["load","doTest"],["DOMContentLoaded","antiAdBlockerHandler"],["DOMContentLoaded","daadb_get_data_fetch"],["click","splashPage"],["load","detect-modal"],["load","_0x"],["click","clickCount"],["DOMContentLoaded","canRedirect"],["DOMContentLoaded","adb"],["error","/\\{[a-z]\\(e\\)\\}/"],["load","adblock"],["/touchmove|wheel/","preventDefault()"],["load","showcfkModal"],["DOMContentLoaded","iframe"],["","/_blank/i"],["load","htmls"],["blur","focusOut"],["click","handleClick"],["DOMContentLoaded","location.href"],["","popMagic"],["contextmenu"],["blur","counter"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["load","block"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["click","open"],["beforeunload"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["click","0x"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["mousedown","shown_at"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["click","popMagic"],["load","popMagic"],["DOMContentLoaded","adsSrc"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["timeupdate","","elements",".quiver-cam-player--ad-not-running.quiver-cam-player--free video"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["click","[native code]"],["click","event.dispatch"],["","Math"],["DOMContentLoaded","popupurls"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["click","pop"],["click","adobeModalTestABenabled"],["blur","console.log"],["","AdB"],["load","adSession"],["load","Ads"],["DOMContentLoaded","googlesyndication"],["np.evtdetect"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["click","popactive"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["error","blocker"],["click","alink"],["","daadb"],["load","google-analytics"],["","sessionStorage"],["load","fetch"],["click","pingUrl"],["mousedown","scoreUrl"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["mediafire.com",[5,6]],["pinsystem.co.uk",7],["fembed.com",7],["ancensored.com",7],["mp3fiber.com",[7,17]],["xrivonet.info",7],["afreesms.com",8],["tu.no",8],["tio.ch",8],["lavanguardia.com",8],["eplayer.click",8],["kingofdown.com",9],["radiotormentamx.com",9],["quelleestladifference.fr",9],["otakuworldsite.blogspot.com",9],["ad-itech.blogspot.com",9],["sna3talaflam.com",9],["agar.pro",9],["unlockapk.com",9],["mobdi3ips.com",9],["socks24.org",9],["interviewgig.com",9],["javaguides.net",9],["almohtarif-tech.net",9],["forum.release-apk.com",9],["devoloperxda.blogspot.com",9],["zwergenstadt.com",9],["primedeportes.es",9],["upxin.net",9],["ciudadblogger.com",9],["ke-1.com",9],["secretsdeepweb.blogspot.com",9],["bit-shares.com",9],["itdmusics.com",9],["aspdotnet-suresh.com",9],["tudo-para-android.com",9],["urdulibrarypk.blogspot.com",9],["zerotopay.com",9],["akw.to",9],["mawsueaa.com",9],["hesgoal-live.io",9],["king-shoot.io",9],["bibme.org",13],["citationmachine.net",13],["easybib.com",14],["vermangasporno.com",15],["imgtorrnt.in",15],["picbaron.com",[15,137]],["letmejerk.com",15],["letmejerk2.com",15],["letmejerk3.com",15],["letmejerk4.com",15],["letmejerk5.com",15],["letmejerk6.com",15],["letmejerk7.com",15],["dlapk4all.com",15],["kropic.com",15],["kvador.com",15],["pdfindir.net",15],["brstej.com",15],["topwwnews.com",15],["xsanime.com",15],["vidlo.us",15],["put-locker.com",15],["youx.xxx",15],["animeindo.asia",15],["masahub.net",15],["adclickersbot.com",15],["badtaste.it",16],["mage.si",17],["totaldebrid.org",17],["neko-miku.com",17],["elsfile.org",17],["venstrike.jimdofree.com",17],["schrauben-normen.de",17],["avengerinator.blogspot.com",17],["link-to.net",17],["hanimesubth.com",17],["gsmturkey.net",17],["adshrink.it",17],["presentation-ppt.com",17],["mangacanblog.com",17],["pekalongan-cits.blogspot.com",17],["4tymode.win",17],["eurotruck2.com.br",17],["linkvertise.com",17],["reifenrechner.at",17],["tire-size-calculator.info",17],["linuxsecurity.com",17],["encodinghub.com",17],["itsguider.com",17],["cotravinh.blogspot.com",17],["itudong.com",17],["shortx.net",17],["lecturel.com",17],["bakai.org",17],["nar.k-ba.net",17],["tiroalpalo.org",17],["shemalez.com",19],["tubepornclassic.com",19],["gotporn.com",20],["freepornrocks.com",20],["tvhai.org",20],["simpcity.su",20],["realgfporn.com",[21,22]],["titsbox.com",21],["thisvid.com",22],["xvideos-downloader.net",22],["imgspice.com",23],["vikiporn.com",24],["tnaflix.com",24],["hentai2w.com",[24,189]],["yourlust.com",24],["hotpornfile.org",24],["watchfreexxx.net",24],["vintageporntubes.com",24],["angelgals.com",24],["babesexy.com",24],["porndaa.com",24],["ganstamovies.com",24],["youngleak.com",24],["porndollz.com",24],["xnxxvideo.pro",24],["xvideosxporn.com",24],["filmpornofrancais.fr",24],["pictoa.com",[24,48]],["adultasianporn.com",24],["nsfwmonster.com",24],["girlsofdesire.org",24],["gaytail.com",24],["fetish-bb.com",24],["rumporn.com",24],["soyoungteens.com",24],["zubby.com",24],["lesbian8.com",24],["gayforfans.com",24],["reifporn.de",24],["javtsunami.com",24],["18tube.sex",24],["xxxextreme.org",24],["amateurs-fuck.com",24],["sex-amateur-clips.com",24],["hentaiworld.tv",24],["dads-banging-teens.com",24],["home-xxx-videos.com",24],["mature-chicks.com",24],["teens-fucking-matures.com",24],["hqbang.com",24],["darknessporn.com",24],["familyporner.com",24],["freepublicporn.com",24],["pisshamster.com",24],["punishworld.com",24],["xanimu.com",24],["pornhd.com",25],["cnnamador.com",[25,37]],["cle0desktop.blogspot.com",25],["turkanime.co",25],["camclips.tv",[25,49]],["blackpornhq.com",25],["xsexpics.com",25],["ulsex.net",25],["wannafreeporn.com",25],["ytube2dl.com",25],["multiup.us",25],["protege-torrent.com",25],["pussyspace.com",[26,27]],["pussyspace.net",[26,27]],["empflix.com",28],["cpmlink.net",29],["bdsmstreak.com",29],["cutpaid.com",29],["pornforrelax.com",29],["fatwhitebutt.com",29],["mavplay.xyz",29],["sunporno.com",[30,31,189]],["short.pe",32],["bs.to",35],["efukt.com",35],["generacionretro.net",36],["nuevos-mu.ucoz.com",36],["micloudfiles.com",36],["mimaletamusical.blogspot.com",36],["visionias.net",36],["b3infoarena.in",36],["lurdchinexgist.blogspot.com",36],["thefreedommatrix.blogspot.com",36],["hentai-vl.blogspot.com",36],["projetomotog.blogspot.com",36],["ktmx.pro",36],["lirik3satu.blogspot.com",36],["marketmovers.it",36],["pharmaguideline.com",36],["safemaru.blogspot.com",36],["mixloads.com",36],["mangaromance.eu",36],["interssh.com",36],["freesoftpdfdownload.blogspot.com",36],["cirokun.blogspot.com",36],["myadslink.com",36],["blackavelic.com",36],["server.satunivers.tv",36],["eg-akw.com",36],["xn--mgba7fjn.cc",36],["flashingjungle.com",37],["ma-x.org",38],["lavozdegalicia.es",38],["xmovies08.org",40],["globaldjmix.com",41],["zazzybabes.com",42],["haaretz.co.il",43],["haaretz.com",43],["slate.com",44],["megalinks.info",45],["megapastes.com",45],["mega-mkv.com",[45,46]],["mkv-pastes.com",45],["zpaste.net",45],["zlpaste.net",45],["9xlinks.site",45],["zona-leros.net",46],["acortarm.xyz",47],["acortame.xyz",47],["cine.to",[48,194]],["kissasia.cc",48],["digjav.com",49],["videoszoofiliahd.com",50],["xxxtubezoo.com",51],["zooredtube.com",51],["uii.io",52],["megacams.me",54],["rlslog.net",54],["porndoe.com",55],["acienciasgalilei.com",57],["playrust.io",58],["payskip.org",59],["short-url.link",60],["tubedupe.com",61],["mcrypto.club",62],["fatgirlskinny.net",63],["polska-ie.com",63],["windowsmatters.com",63],["canaltdt.es",64],["masbrooo.com",64],["2ndrun.tv",64],["stfly.me",65],["oncehelp.com",65],["queenfaucet.website",65],["curto.win",65],["smallseotools.com",66],["macwelt.de",68],["pcwelt.de",68],["capital.de",68],["geo.de",68],["allmomsex.com",69],["allnewindianporn.com",69],["analxxxvideo.com",69],["animalextremesex.com",69],["anime3d.xyz",69],["animefuckmovies.com",69],["animepornfilm.com",69],["animesexbar.com",69],["animesexclip.com",69],["animexxxsex.com",69],["animexxxfilms.com",69],["anysex.club",69],["apetube.asia",69],["asianfuckmovies.com",69],["asianfucktube.com",69],["asianporn.sexy",69],["asiansexcilps.com",69],["beeg.fund",69],["beegvideoz.com",69],["bestasiansex.pro",69],["bravotube.asia",69],["brutalanimalsfuck.com",69],["candyteenporn.com",69],["daddyfuckmovies.com",69],["desifuckonline.com",69],["exclusiveasianporn.com",69],["exteenporn.com",69],["fantasticporn.net",69],["fantasticyoungporn.com",69],["fineasiansex.com",69],["firstasianpussy.com",69],["freeindiansextube.com",69],["freepornasians.com",69],["freerealvideo.com",69],["fuck-beeg.com",69],["fuck-xnxx.com",69],["fuckasian.pro",69],["fuckfuq.com",69],["fuckundies.com",69],["gojapaneseporn.com",69],["golderotica.com",69],["goodyoungsex.com",69],["goyoungporn.com",69],["hardxxxmoms.com",69],["hdvintagetube.com",69],["hentaiporn.me",69],["hentaisexfilms.com",69],["hentaisexuality.com",69],["hot-teens-movies.mobi",69],["hotanimepornvideos.com",69],["hotanimevideos.com",69],["hotasianpussysex.com",69],["hotjapaneseshows.com",69],["hotmaturetube.com",69],["hotmilfs.pro",69],["hotorientalporn.com",69],["hotpornyoung.com",69],["hotxxxjapanese.com",69],["hotxxxpussy.com",69],["indiafree.net",69],["indianpornvideo.online",69],["japanpornclip.com",69],["japanesetube.video",69],["japansex.me",69],["japanesexxxporn.com",69],["japansporno.com",69],["japanxxx.asia",69],["japanxxxworld.com",69],["keezmovies.surf",69],["lingeriefuckvideo.com",69],["liveanimalporn.zooo.club",69],["madhentaitube.com",69],["megahentaitube.com",69],["megajapanesesex.com",69],["megajapantube.com",69],["milfxxxpussy.com",69],["momsextube.pro",69],["momxxxass.com",69],["monkeyanimalporn.com",69],["moviexxx.mobi",69],["newanimeporn.com",69],["newjapanesexxx.com",69],["nicematureporn.com",69],["nudeplayboygirls.com",69],["openxxxporn.com",69],["originalindianporn.com",69],["originalteentube.com",69],["pig-fuck.com",69],["plainasianporn.com",69],["popularasianxxx.com",69],["pornanimetube.com",69],["pornasians.pro",69],["pornhat.asia",69],["pornheed.online",69],["pornjapanesesex.com",69],["pornomovies.asia",69],["pornvintage.tv",69],["primeanimesex.com",69],["realjapansex.com",69],["realmomsex.com",69],["redsexhub.com",69],["retroporn.world",69],["retrosexfilms.com",69],["sex-free-movies.com",69],["sexanimesex.com",69],["sexanimetube.com",69],["sexjapantube.com",69],["sexmomvideos.com",69],["sexteenxxxtube.com",69],["sexxxanimal.com",69],["sexyoungtube.com",69],["sexyvintageporn.com",69],["sopornmovies.com",69],["spicyvintageporn.com",69],["sunporno.club",69],["tabooanime.club",69],["teenextrem.com",69],["teenfucksex.com",69],["teenhost.net",69],["teensexass.com",69],["tnaflix.asia",69],["totalfuckmovies.com",69],["totalmaturefuck.com",69],["txxx.asia",69],["voyeurpornsex.com",69],["warmteensex.com",69],["wetasiancreampie.com",69],["wildhentaitube.com",69],["wowyoungsex.com",69],["xhamster-art.com",69],["xmovie.pro",69],["xnudevideos.com",69],["xnxxjapon.com",69],["xpics.me",69],["xvide.me",69],["xxxanimefuck.com",69],["xxxanimevideos.com",69],["xxxanimemovies.com",69],["xxxhentaimovies.com",69],["xxxhothub.com",69],["xxxjapaneseporntube.com",69],["xxxlargeporn.com",69],["xxxmomz.com",69],["xxxpornmilf.com",69],["xxxpussyclips.com",69],["xxxpussysextube.com",69],["xxxretrofuck.com",69],["xxxsex.pro",69],["xxxsexyjapanese.com",69],["xxxteenyporn.com",69],["xxxvideo.asia",69],["xxxvideos.ink",69],["xxxyoungtv.com",69],["youjizzz.club",69],["youngpussyfuck.com",69],["bayimg.com",70],["celeb.gate.cc",71],["masterplayer.xyz",73],["pussy-hub.com",73],["porndex.com",74],["compucalitv.com",75],["diariodenavarra.es",77],["duden.de",79],["pennlive.com",81],["beautypageants.indiatimes.com",82],["01fmovies.com",83],["lnk2.cc",85],["fullhdxxx.com",86],["luscious.net",[86,137]],["classicpornbest.com",86],["xstory-fr.com",86],["1youngteenporn.com",86],["www-daftarharga.blogspot.com",[86,178]],["miraculous.to",[86,184]],["vtube.to",86],["gosexpod.com",87],["otakukan.com",88],["xcafe.com",89],["pornfd.com",89],["venusarchives.com",89],["imagehaha.com",90],["imagenpic.com",90],["imageshimage.com",90],["imagetwist.com",90],["k1nk.co",91],["watchasians.cc",91],["alexsports.xyz",91],["lulustream.com",91],["luluvdo.com",91],["web.de",92],["news18.com",93],["thelanb.com",94],["dropmms.com",94],["softwaredescargas.com",95],["cracking-dz.com",96],["anitube.ninja",97],["gazzetta.it",98],["port.hu",100],["dziennikbaltycki.pl",101],["dzienniklodzki.pl",101],["dziennikpolski24.pl",101],["dziennikzachodni.pl",101],["echodnia.eu",101],["expressbydgoski.pl",101],["expressilustrowany.pl",101],["gazetakrakowska.pl",101],["gazetalubuska.pl",101],["gazetawroclawska.pl",101],["gk24.pl",101],["gloswielkopolski.pl",101],["gol24.pl",101],["gp24.pl",101],["gra.pl",101],["gs24.pl",101],["kurierlubelski.pl",101],["motofakty.pl",101],["naszemiasto.pl",101],["nowiny24.pl",101],["nowosci.com.pl",101],["nto.pl",101],["polskatimes.pl",101],["pomorska.pl",101],["poranny.pl",101],["sportowy24.pl",101],["strefaagro.pl",101],["strefabiznesu.pl",101],["stronakobiet.pl",101],["telemagazyn.pl",101],["to.com.pl",101],["wspolczesna.pl",101],["course9x.com",101],["courseclub.me",101],["azrom.net",101],["alttyab.net",101],["esopress.com",101],["nesiaku.my.id",101],["onemanhua.com",102],["freeindianporn.mobi",102],["dr-farfar.com",103],["boyfriendtv.com",104],["brandstofprijzen.info",105],["netfuck.net",106],["blog24.me",[106,133]],["kisahdunia.com",106],["javsex.to",106],["nulljungle.com",106],["oyuncusoruyor.com",106],["pbarecap.ph",106],["sourds.net",106],["teknobalta.com",106],["tvinternetowa.info",106],["sqlserveregitimleri.com",106],["tutcourse.com",106],["readytechflip.com",106],["novinhastop.com",106],["warddogs.com",106],["dvdgayporn.com",106],["iimanga.com",106],["tinhocdongthap.com",106],["tremamnon.com",106],["423down.com",106],["brizzynovel.com",106],["jugomobile.com",106],["freecodezilla.net",106],["animekhor.xyz",106],["iconmonstr.com",106],["gay-tubes.cc",106],["rbxscripts.net",106],["comentariodetexto.com",106],["wordpredia.com",106],["livsavr.co",106],["allfaucet.xyz",[106,133]],["titbytz.tk",106],["replica-watch.info",106],["alludemycourses.com",106],["kayifamilytv.com",106],["iir.ai",107],["gameofporn.com",109],["qpython.club",110],["antifake-funko.fr",110],["dktechnicalmate.com",110],["recipahi.com",110],["e9china.net",111],["ac.ontools.net",111],["marketbeat.com",112],["hentaipornpics.net",113],["apps2app.com",114],["alliptvlinks.com",115],["waterfall.money",115],["xvideos.com",116],["xvideos2.com",116],["tubereader.me",117],["repretel.com",117],["dagensnytt.com",118],["mrproblogger.com",118],["themezon.net",118],["gfx-station.com",119],["bitzite.com",[119,133,136]],["historyofroyalwomen.com",120],["davescomputertips.com",120],["ukchat.co.uk",121],["hivelr.com",122],["embedz.click",123],["sexseeimage.com",124],["skidrowcodex.net",125],["takimag.com",126],["digi.no",127],["scimagojr.com",128],["haxina.com",128],["cryptofenz.xyz",128],["twi-fans.com",129],["learn-cpp.org",130],["upshrink.com",131],["ohionowcast.info",133],["wiour.com",133],["appsbull.com",133],["diudemy.com",133],["maqal360.com",133],["bitcotasks.com",133],["videolyrics.in",133],["manofadan.com",133],["cempakajaya.com",133],["tagecoin.com",133],["doge25.in",133],["king-ptcs.com",133],["naijafav.top",133],["ourcoincash.xyz",133],["sh.techsamir.com",133],["claimcoins.site",133],["cryptosh.pro",133],["coinsrev.com",133],["go.freetrx.fun",133],["eftacrypto.com",133],["fescrypto.com",133],["earnhub.net",133],["kiddyshort.com",133],["tronxminer.com",133],["homeairquality.org",134],["exego.app",135],["cutlink.net",135],["cutsy.net",135],["cutyurls.com",135],["cutty.app",135],["cutnet.net",135],["aiimgvlog.fun",137],["6indianporn.com",137],["amateurebonypics.com",137],["amateuryoungpics.com",137],["cinemabg.net",137],["coomer.su",137],["desimmshd.com",137],["frauporno.com",137],["givemeaporn.com",137],["jav-asia.top",137],["javf.net",137],["javideo.net",137],["kemono.su",137],["kr18plus.com",137],["pilibook.com",137],["pornborne.com",137],["porngrey.com",137],["qqxnxx.com",137],["sexvideos.host",137],["submilf.com",137],["subtaboo.com",137],["tktube.com",137],["xfrenchies.com",137],["coingraph.us",138],["momo-net.com",138],["maxgaming.fi",138],["travel.vebma.com",139],["cloud.majalahhewan.com",139],["crm.cekresi.me",139],["ai.tempatwisata.pro",139],["pinloker.com",139],["sekilastekno.com",139],["vulture.com",140],["megaplayer.bokracdn.run",141],["hentaistream.com",142],["siteunblocked.info",143],["larvelfaucet.com",144],["feyorra.top",144],["claimtrx.com",144],["moviesyug.net",145],["w4files.ws",145],["parispi.net",146],["simkl.com",147],["paperzonevn.com",148],["dailyvideoreports.net",149],["lewd.ninja",150],["systemnews24.com",151],["incestvidz.com",152],["niusdiario.es",153],["playporngames.com",154],["movi.pk",[155,159]],["justin.mp3quack.lol",157],["cutesexyteengirls.com",158],["0dramacool.net",159],["185.53.88.104",159],["185.53.88.204",159],["185.53.88.15",159],["123movies4k.net",159],["1movieshd.com",159],["1rowsports.com",159],["4share-mp3.net",159],["6movies.net",159],["9animetv.to",159],["720pstream.me",159],["aagmaal.com",159],["abysscdn.com",159],["ajkalerbarta.com",159],["akstream.xyz",159],["androidapks.biz",159],["androidsite.net",159],["animeonlinefree.org",159],["animesite.net",159],["animespank.com",159],["aniworld.to",159],["apkmody.io",159],["appsfree4u.com",159],["audioz.download",159],["awafim.tv",159],["bdnewszh.com",159],["beastlyprints.com",159],["bengalisite.com",159],["bestfullmoviesinhd.org",159],["betteranime.net",159],["blacktiesports.live",159],["buffsports.stream",159],["ch-play.com",159],["clickforhire.com",159],["cloudy.pk",159],["computercrack.com",159],["coolcast2.com",159],["crackedsoftware.biz",159],["crackfree.org",159],["cracksite.info",159],["cryptoblog24.info",159],["cuatrolatastv.blogspot.com",159],["cydiasources.net",159],["dirproxy.com",159],["dopebox.to",159],["downloadapk.info",159],["downloadapps.info",159],["downloadgames.info",159],["downloadmusic.info",159],["downloadsite.org",159],["downloadwella.com",159],["ebooksite.org",159],["educationtips213.blogspot.com",159],["egyup.live",159],["embed.meomeo.pw",159],["embed.scdn.to",159],["emulatorsite.com",159],["essaysharkwriting.club",159],["exploreera.net",159],["extrafreetv.com",159],["fakedetail.com",159],["fclecteur.com",159],["files.im",159],["flexyhit.com",159],["fmoviefree.net",159],["fmovies24.com",159],["footyhunter3.xyz",159],["freeflix.info",159],["freemoviesu4.com",159],["freeplayervideo.com",159],["freesoccer.net",159],["fseries.org",159],["gamefast.org",159],["gamesite.info",159],["gettapeads.com",159],["gmanga.me",159],["gocast123.me",159],["gogohd.net",159],["gogoplay5.com",159],["gooplay.net",159],["gostreamon.net",159],["happy2hub.org",159],["harimanga.com",159],["healthnewsreel.com",159],["hexupload.net",159],["hinatasoul.com",159],["hindisite.net",159],["holymanga.net",159],["hxfile.co",159],["isosite.org",159],["iv-soft.com",159],["januflix.expert",159],["jewelry.com.my",159],["johnwardflighttraining.com",159],["kabarportal.com",159],["kstorymedia.com",159],["la123movies.org",159],["lespassionsdechinouk.com",159],["lilymanga.net",159],["linksdegrupos.com.br",159],["livestreamtv.pk",159],["macsite.info",159],["mangapt.com",159],["mangasite.org",159],["manhuascan.com",159],["megafilmeshdseries.com",159],["megamovies.org",159],["membed.net",159],["moddroid.com",159],["moviefree2.com",159],["movies-watch.com.pk",159],["moviesite.app",159],["moviesonline.fm",159],["moviesx.org",159],["msmoviesbd.com",159],["musicsite.biz",159],["myfernweh.com",159],["myviid.com",159],["nazarickol.com",159],["noob4cast.com",159],["nsw2u.com",[159,247]],["oko.sh",159],["olympicstreams.me",159],["orangeink.pk",159],["owllink.net",159],["pahaplayers.click",159],["patchsite.net",159],["pdfsite.net",159],["play1002.com",159],["player-cdn.com",159],["productkeysite.com",159],["projectfreetv.one",159],["romsite.org",159],["rufiguta.com",159],["rytmp3.io",159],["send.cm",159],["seriesite.net",159],["seriezloaded.com.ng",159],["serijehaha.com",159],["shrugemojis.com",159],["siteapk.net",159],["siteflix.org",159],["sitegames.net",159],["sitekeys.net",159],["sitepdf.com",159],["sitetorrent.com",159],["softwaresite.net",159],["sportbar.live",159],["sportkart1.xyz",159],["ssyoutube.com",159],["stardima.com",159],["stream4free.live",159],["superapk.org",159],["supermovies.org",159],["tainio-mania.online",159],["talaba.su",159],["tamilguns.org",159],["tatabrada.tv",159],["techtrendmakers.com",159],["theflixer.tv",159],["thememypc.net",159],["thetechzone.online",159],["thripy.com",159],["tonnestreamz.xyz",159],["travelplanspro.com",159],["turcasmania.com",159],["tusfiles.com",159],["tvonlinesports.com",159],["ultramovies.org",159],["uploadbank.com",159],["urdubolo.pk",159],["vidspeeds.com",159],["vumoo.to",159],["warezsite.net",159],["watchmovies2.com",159],["watchmoviesforfree.org",159],["watchofree.com",159],["watchsite.net",159],["watchsouthpark.tv",159],["watchtvch.club",159],["web.livecricket.is",159],["webseries.club",159],["worldcupstream.pm",159],["y2mate.com",159],["youapk.net",159],["youtube4kdownloader.com",159],["yts-subs.com",159],["haho.moe",160],["nicy-spicy.pw",161],["novelmultiverse.com",162],["mylegalporno.com",163],["asianembed.io",166],["thecut.com",167],["novelism.jp",168],["alphapolis.co.jp",169],["okrzone.com",170],["game3rb.com",171],["javhub.net",171],["thotvids.com",172],["berklee.edu",173],["rawkuma.com",[174,175]],["moviesjoyhd.to",175],["imeteo.sk",176],["youtubemp3donusturucu.net",177],["surfsees.com",179],["vivo.st",[180,181]],["alueviesti.fi",183],["kiuruvesilehti.fi",183],["lempaala.ideapark.fi",183],["olutposti.fi",183],["urjalansanomat.fi",183],["tainhanhvn.com",185],["titantv.com",186],["3cinfo.net",187],["transportationlies.org",188],["camarchive.tv",189],["crownimg.com",189],["freejav.guru",189],["hentai2read.com",189],["icyporno.com",189],["illink.net",189],["javtiful.com",189],["m-hentai.net",189],["pornblade.com",189],["pornfelix.com",189],["pornxxxxtube.net",189],["redwap.me",189],["redwap2.com",189],["redwap3.com",189],["tubxporn.xxx",189],["ver-comics-porno.com",189],["ver-mangas-porno.com",189],["xanimeporn.com",189],["xxxvideohd.net",189],["zetporn.com",189],["cocomanga.com",190],["sampledrive.in",191],["mcleaks.net",192],["explorecams.com",192],["minecraft.buzz",192],["chillx.top",193],["playerx.stream",193],["m.liputan6.com",195],["stardewids.com",[195,217]],["ingles.com",196],["spanishdict.com",196],["surfline.com",197],["rureka.com",198],["bunkr.is",199],["amateur8.com",200],["freeporn8.com",200],["maturetubehere.com",200],["embedo.co",201],["corriere.it",202],["oggi.it",202],["2the.space",203],["apkcombo.com",204],["sponsorhunter.com",205],["soft98.ir",206],["novelssites.com",207],["torrentmac.net",208],["udvl.com",209],["moviezaddiction.icu",210],["dlpanda.com",211],["socialmediagirls.com",212],["einrichtungsbeispiele.de",213],["weadown.com",214],["molotov.tv",215],["freecoursesonline.me",216],["adelsfun.com",216],["advantien.com",216],["bailbondsfinder.com",216],["bigpiecreative.com",216],["childrenslibrarylady.com",216],["classifarms.com",216],["comtasq.ca",216],["crone.es",216],["ctrmarketingsolutions.com",216],["dropnudes.com",216],["ftuapps.dev",216],["genzsport.com",216],["ghscanner.com",216],["grsprotection.com",216],["gruporafa.com.br",216],["inmatefindcalifornia.com",216],["inmatesearchidaho.com",216],["itsonsitetv.com",216],["mfmfinancials.com",216],["myproplugins.com",216],["onehack.us",216],["ovester.com",216],["paste.bin.sx",216],["privatenudes.com",216],["renoconcrete.ca",216],["richieashbeck.com",216],["sat.technology",216],["short1ink.com",216],["stpm.co.uk",216],["wegotcookies.co",216],["mathcrave.com",216],["commands.gg",217],["smgplaza.com",218],["emturbovid.com",219],["freepik.com",220],["diyphotography.net",222],["bitchesgirls.com",223],["shopforex.online",224],["programmingeeksclub.com",225],["easymc.io",226],["diendancauduong.com",227],["parentcircle.com",228],["h-game18.xyz",229],["nopay.info",230],["wheelofgold.com",231],["shortlinks.tech",232],["skill4ltu.eu",234],["freepikdownloader.com",235],["freepasses.org",236],["iusedtobeaboss.com",237],["androidpolice.com",238],["cbr.com",238],["dualshockers.com",238],["gamerant.com",238],["howtogeek.com",238],["thegamer.com",238],["blogtruyenmoi.com",239],["igay69.com",240],["graphicget.com",241],["qiwi.gg",242],["netcine2.la",243],["idnes.cz",[244,245]],["cbc.ca",246]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",7],["ganool",7],["pirate",7],["piratebay",7],["pirateproxy",7],["proxytpb",7],["thepiratebay",7],["limetorrents",[9,15]],["king-pes",9],["depedlps",9],["komikcast",9],["idedroidsafelink",9],["links-url",9],["ak4eg",9],["streanplay",10],["steanplay",10],["liferayiseasy",[11,12]],["pahe",15],["yts",15],["tube8",15],["topeuropix",15],["moviescounter",15],["torrent9",15],["desiremovies",15],["movs4u",15],["uwatchfree",15],["hydrax",15],["4movierulz",15],["projectfreetv",15],["arabseed",15],["btdb",[15,58]],["world4ufree",15],["streamsport",15],["rojadirectatvhd",15],["userload",15],["freecoursesonline",17],["lordpremium",17],["todovieneok",17],["novablogitalia",17],["anisubindo",17],["btvsports",17],["adyou",18],["fxporn69",21],["rexporn",25],["movies07",25],["pornocomics",25],["sexwebvideo",29],["pornomoll",29],["gsurl",32],["mimaletadepeliculas",33],["readcomiconline",34],["burningseries",35],["dz4soft",36],["yoututosjeff",36],["ebookmed",36],["lanjutkeun",36],["novelasesp",36],["singingdalong",36],["doujindesu",36],["xmovies8",39],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",47],["newpelis",[48,56]],["pelix",[48,56]],["allcalidad",[48,189]],["khatrimaza",48],["camwhores",49],["camwhorestv",49],["uproxy",49],["nekopoi",53],["mirrorace",62],["mixdrp",67],["asiansex",69],["japanfuck",69],["japanporn",69],["teensex",69],["vintagetube",69],["xxxmovies",69],["zooqle",72],["hdfull",76],["mangamanga",78],["streameast",80],["thestreameast",80],["vev",84],["vidop",84],["1337x",86],["zone-telechargement",86],["megalink",91],["gmx",92],["mega1080p",97],["9hentai",99],["gaypornhdfree",106],["cinemakottaga",106],["privatemoviez",106],["apkmaven",106],["popcornstream",108],["fc-lc",132],["pornktube",137],["watchseries",137],["milfnut",138],["pagalmovies",145],["7starhd",145],["jalshamoviez",145],["9xupload",145],["bdupload",145],["desiupload",145],["rdxhd1",145],["moviessources",156],["nuvid",157],["0gomovie",159],["0gomovies",159],["123moviefree",159],["1kmovies",159],["1madrasdub",159],["1primewire",159],["2embed",159],["2madrasdub",159],["2umovies",159],["4anime",159],["9xmovies",159],["adblockplustape",159],["altadefinizione01",159],["anitube",159],["atomixhq",159],["beinmatch",159],["brmovies",159],["cima4u",159],["clicknupload",159],["cmovies",159],["cricfree",159],["crichd",159],["databasegdriveplayer",159],["dood",159],["f1stream",159],["faselhd",159],["fbstream",159],["file4go",159],["filemoon",159],["filepress",[159,221]],["filmlinks4u",159],["filmpertutti",159],["filmyzilla",159],["fmovies",159],["french-stream",159],["fzlink",159],["gdriveplayer",159],["gofilms4u",159],["gogoanime",159],["gomoviz",159],["hdmoviefair",159],["hdmovies4u",159],["hdmovies50",159],["hdmoviesfair",159],["hh3dhay",159],["hindilinks4u",159],["hotmasti",159],["hurawatch",159],["klmanga",159],["klubsports",159],["libertestreamvf",159],["livetvon",159],["manga1000",159],["manga1001",159],["mangaraw",159],["mangarawjp",159],["mlbstream",159],["motogpstream",159],["movierulz",159],["movies123",159],["movies2watch",159],["moviesden",159],["moviezaddiction",159],["myflixer",159],["nbastream",159],["netcine",159],["nflstream",159],["nhlstream",159],["onlinewatchmoviespk",159],["pctfenix",159],["pctnew",159],["pksmovies",159],["plyjam",159],["plylive",159],["pogolinks",159],["popcorntime",159],["poscitech",159],["prmovies",159],["rugbystreams",159],["shahed4u",159],["sflix",159],["sitesunblocked",159],["solarmovies",159],["sportcast",159],["sportskart",159],["sports-stream",159],["streaming-french",159],["streamers",159],["streamingcommunity",159],["strikeout",159],["t20cup",159],["tennisstreams",159],["torrentdosfilmes",159],["toonanime",159],["tvply",159],["ufcstream",159],["uptomega",159],["uqload",159],["vudeo",159],["vidoo",159],["vipbox",159],["vipboxtv",159],["vipleague",159],["viprow",159],["yesmovies",159],["yomovies",159],["yomovies1",159],["yt2mp3s",159],["kat",159],["katbay",159],["kickass",159],["kickasshydra",159],["kickasskat",159],["kickass2",159],["kickasstorrents",159],["kat2",159],["kattracker",159],["thekat",159],["thekickass",159],["kickassz",159],["kickasstorrents2",159],["topkickass",159],["kickassgo",159],["kkickass",159],["kkat",159],["kickasst",159],["kick4ss",159],["guardaserie",164],["cine-calidad",165],["videovard",182],["gntai",189],["grantorrent",189],["mejortorrent",189],["mejortorrento",189],["mejortorrents",189],["mejortorrents1",189],["mejortorrentt",189],["shineads",191],["bg-gledai",216],["gledaitv",216],["motchill",233]]);

const exceptionsMap = new Map([["mentor.duden.de",[79]],["forum.soft98.ir",[206]]]);

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
