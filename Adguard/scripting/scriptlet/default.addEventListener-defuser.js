/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
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

const scriptletGlobals = new Map(); // jshint ignore: line

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["load","adBlock"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","pop"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["","popMagic"],["getexoloader"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["click","popMagic"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","shortener"],["DOMContentLoaded","adlinkfly"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["","click"],["canplay"],["click","trigger"],["mouseout","clientWidth"],["click"],["click","open"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["DOMContentLoaded","compupaste"],["keydown","keyCode"],["mousedown","!!{});"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["load","ads"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["blur","focusOut"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["","/_0x|localStorage\\.getItem/"],["DOMContentLoaded","adblock"],["load","head"],["/error|load/","/onerror|showModal/"],["load","doTest"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["click","0x"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["click","openSite"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["contextmenu"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["load","block"],["","preventDefault"],["click","tabunder"],["mouseup","catch"],["scroll","innerHeight"],["DOMContentLoaded","disableDeveloperTools"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["load","popMagic"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["","[native code]"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["load","htmls"],["click","[native code]"],["click","event.dispatch"],["load","adblock"],["DOMContentLoaded","iframe"],["","Math"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["load","length"],["gtmloaderror"],["DOMContentLoaded","canRunAds"],["click","adobeModalTestABenabled"],["blur","console.log"],["blur","counter"],["","AdB"],["load","adSession"],["load","Ads"],["load","/abb|htmls|nextFunction/"],["","adsBlocked"],["load","goog"],["DOMContentLoaded","googlesyndication"],["DOMContentLoaded","redURL"],["np.evtdetect"],["load","AdBlock"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["DOMContentLoaded","adsbygoogle"],["click","popactive"],["message","adPoweredPluginInUse"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["/adblock/i"],["","daadb"],["click","handleClick"],["click","/event_callback=function\\(\\){window\\.location=t\\.getAttribute\\(\"href\"\\)/"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["bild.de",5],["mediafire.com",[6,7]],["pinsystem.co.uk",8],["fembed.com",8],["ancensored.com",8],["o2tvseries.com",8],["mp3fiber.com",[8,19]],["xrivonet.info",8],["afreesms.com",9],["tio.ch",9],["lavanguardia.com",9],["eplayer.click",9],["kingofdown.com",10],["radiotormentamx.com",10],["quelleestladifference.fr",10],["otakuworldsite.blogspot.com",10],["ad-itech.blogspot.com",10],["sna3talaflam.com",10],["agar.pro",10],["unlockapk.com",10],["mobdi3ips.com",10],["socks24.org",10],["drivebox.club",10],["interviewgig.com",10],["jobhunterplg.xyz",10],["javaguides.net",10],["almohtarif-tech.net",10],["hl-live.de",10],["forum.release-apk.com",10],["devoloperxda.blogspot.com",10],["zwergenstadt.com",10],["primedeportes.es",10],["doujindesu.cc",10],["upxin.net",10],["ciudadblogger.com",10],["ke-1.com",10],["greatanimation.it",10],["secretsdeepweb.blogspot.com",10],["bit-shares.com",10],["itdmusics.com",10],["aspdotnet-suresh.com",10],["tudo-para-android.com",10],["urdulibrarypk.blogspot.com",10],["zerotopay.com",10],["akw.to",10],["mawsueaa.com",10],["hesgoal-live.io",10],["pornhd.com",11],["cnnamador.com",[11,38]],["cle0desktop.blogspot.com",11],["turkanime.co",11],["camclips.tv",[11,51]],["blackpornhq.com",11],["xsexpics.com",11],["ulsex.net",11],["wannafreeporn.com",11],["ytube2dl.com",11],["multiup.us",11],["protege-torrent.com",11],["bibme.org",15],["citationmachine.net",15],["easybib.com",16],["userupload.net",17],["vermangasporno.com",17],["imgtorrnt.in",17],["picbaron.com",[17,25]],["worldcupfootball.me",17],["letmejerk.com",17],["letmejerk3.com",17],["letmejerk4.com",17],["letmejerk5.com",17],["letmejerk6.com",17],["letmejerk7.com",17],["dlapk4all.com",17],["kropic.com",17],["kvador.com",17],["pdfindir.net",17],["brstej.com",17],["topwwnews.com",17],["xsanime.com",17],["vidlo.us",17],["put-locker.com",17],["youx.xxx",17],["animeindo.asia",17],["masahub.net",17],["adclickersbot.com",17],["badtaste.it",18],["mage.si",19],["totaldebrid.org",19],["hesgoal.com",19],["neko-miku.com",19],["elsfile.org",19],["venstrike.jimdofree.com",19],["schrauben-normen.de",19],["avengerinator.blogspot.com",19],["link-to.net",19],["hanimesubth.com",19],["gsmturkey.net",19],["linkvertise.com",19],["adshrink.it",19],["presentation-ppt.com",19],["mangacanblog.com",19],["pekalongan-cits.blogspot.com",19],["4tymode.win",19],["reifenrechner.at",19],["tire-size-calculator.info",19],["kord-jadul.com",19],["linuxsecurity.com",19],["encodinghub.com",19],["readyssh.net",19],["itsguider.com",19],["cotravinh.blogspot.com",19],["itudong.com",19],["shortx.net",19],["comandotorrenthd.org",19],["turkdebrid.net",19],["lecturel.com",19],["comboforum.com",19],["bakai.org",19],["nar.k-ba.net",19],["tiroalpalo.org",19],["gotporn.com",21],["freepornrocks.com",21],["tvhai.org",21],["simpcity.su",21],["realgfporn.com",[22,23]],["titsbox.com",22],["thisvid.com",23],["xvideos-downloader.net",23],["imgspice.com",24],["luscious.net",[25,92]],["6indianporn.com",25],["amateurebonypics.com",25],["amateuryoungpics.com",25],["cinemabg.net",25],["desimmshd.com",25],["givemeaporn.com",25],["jav-asia.top",25],["javf.net",25],["javideo.net",25],["kr18plus.com",25],["pilibook.com",25],["pornborne.com",25],["porngrey.com",25],["submilf.com",25],["subtaboo.com",25],["tktube.com",25],["xfrenchies.com",25],["frauporno.com",25],["qqxnxx.com",25],["sexvideos.host",25],["aiimgvlog.fun",25],["vikiporn.com",26],["tnaflix.com",26],["hentai2w.com",[26,33]],["yourlust.com",26],["hotpornfile.org",26],["jav789.com",26],["javbuz.com",26],["letfap.com",26],["watchfreexxx.net",26],["vintageporntubes.com",26],["angelgals.com",26],["babesexy.com",26],["porndaa.com",26],["ganstamovies.com",26],["youngleak.com",26],["porndollz.com",26],["xnxxvideo.pro",26],["xvideosxporn.com",26],["onlyhgames.com",26],["filmpornofrancais.fr",26],["pictoa.com",[26,49]],["javout.co",26],["adultasianporn.com",26],["nsfwmonster.com",26],["girlsofdesire.org",26],["gaytail.com",26],["fetish-bb.com",26],["rumporn.com",26],["soyoungteens.com",26],["zubby.com",26],["lesbian8.com",26],["gayforfans.com",26],["reifporn.de",26],["javtsunami.com",26],["18tube.sex",26],["xxxextreme.org",26],["amateurs-fuck.com",26],["sex-amateur-clips.com",26],["hentaiworld.tv",26],["dads-banging-teens.com",26],["home-xxx-videos.com",26],["mature-chicks.com",26],["teens-fucking-matures.com",26],["hqbang.com",26],["darknessporn.com",26],["familyporner.com",26],["freepublicporn.com",26],["pisshamster.com",26],["punishworld.com",26],["xanimu.com",26],["pussyspace.com",[27,28]],["pussyspace.net",[27,28]],["empflix.com",29],["cpmlink.net",30],["bdsmstreak.com",30],["cutpaid.com",30],["pornforrelax.com",30],["fatwhitebutt.com",30],["mavplay.xyz",30],["sunporno.com",[31,32,33]],["hentai2read.com",33],["pornblade.com",33],["pornfelix.com",33],["xanimeporn.com",33],["javtiful.com",33],["camarchive.tv",33],["ver-comics-porno.com",33],["ver-mangas-porno.com",33],["illink.net",33],["genpassword.top",33],["tubxporn.xxx",33],["m-hentai.net",33],["icyporno.com",33],["redwap.me",33],["redwap2.com",33],["redwap3.com",33],["freejav.guru",33],["pornxxxxtube.net",33],["zetporn.com",33],["crownimg.com",33],["xxxvideohd.net",33],["short.pe",34],["bs.to",36],["efukt.com",36],["kpopsea.com",36],["generacionretro.net",37],["nuevos-mu.ucoz.com",37],["micloudfiles.com",37],["mimaletamusical.blogspot.com",37],["visionias.net",37],["sslproxies24.top",37],["b3infoarena.in",37],["lurdchinexgist.blogspot.com",37],["thefreedommatrix.blogspot.com",37],["hentai-vl.blogspot.com",37],["projetomotog.blogspot.com",37],["ktmx.pro",37],["lirik3satu.blogspot.com",37],["marketmovers.it",37],["pharmaguideline.com",37],["safemaru.blogspot.com",37],["mixloads.com",37],["mangaromance.eu",37],["interssh.com",37],["freesoftpdfdownload.blogspot.com",37],["cirokun.blogspot.com",37],["myadslink.com",37],["blackavelic.com",37],["server.satunivers.tv",37],["eg-akw.com",37],["xn--mgba7fjn.cc",37],["flashingjungle.com",38],["ma-x.org",39],["lavozdegalicia.es",39],["btcbunch.com",39],["xmovies08.org",41],["globaldjmix.com",42],["zazzybabes.com",43],["haaretz.co.il",44],["haaretz.com",44],["slate.com",45],["peliculas1mega.com",46],["mega-mkv.com",[46,47]],["zona-leros.net",46],["megalinks.info",47],["megapastes.com",47],["mkv-pastes.com",47],["zpaste.net",47],["zlpaste.net",47],["9xlinks.site",47],["acortarm.xyz",48],["acortame.xyz",48],["cine.to",[49,179]],["hdstreamss.club",49],["kissasia.cc",49],["nzbstars.com",50],["digjav.com",51],["videoszoofiliahd.com",52],["xxxtubezoo.com",53],["zooredtube.com",53],["uii.io",54],["megacams.me",56],["rlslog.net",56],["porndoe.com",57],["acienciasgalilei.com",59],["playrust.io",60],["payskip.org",61],["short-url.link",62],["tubedupe.com",63],["fatgirlskinny.net",65],["polska-ie.com",65],["windowsmatters.com",65],["canaltdt.es",66],["masbrooo.com",66],["2ndrun.tv",66],["camclips.cc",[67,68]],["stfly.me",69],["oncehelp.com",69],["queenfaucet.website",69],["lewat.club",69],["curto.win",69],["smallseotools.com",70],["porndex.com",71],["asianclub.tv",72],["justin.mp3quack.lol",72],["macwelt.de",74],["pcwelt.de",74],["capital.de",74],["geo.de",74],["allmomsex.com",75],["allnewindianporn.com",75],["analxxxvideo.com",75],["animalextremesex.com",75],["anime3d.xyz",75],["animefuckmovies.com",75],["animepornfilm.com",75],["animesexbar.com",75],["animesexclip.com",75],["animexxxsex.com",75],["animexxxfilms.com",75],["anysex.club",75],["apetube.asia",75],["asianfuckmovies.com",75],["asianfucktube.com",75],["asianporn.sexy",75],["asiansexcilps.com",75],["beeg.fund",75],["beegvideoz.com",75],["bestasiansex.pro",75],["bigsexhub.com",75],["bravotube.asia",75],["brutalanimalsfuck.com",75],["candyteenporn.com",75],["daddyfuckmovies.com",75],["desifuckonline.com",75],["exclusiveasianporn.com",75],["exteenporn.com",75],["fantasticporn.net",75],["fantasticyoungporn.com",75],["fineasiansex.com",75],["firstasianpussy.com",75],["freeindiansextube.com",75],["freepornasians.com",75],["freerealvideo.com",75],["fuck-beeg.com",75],["fuck-xnxx.com",75],["fuckasian.pro",75],["fuckfuq.com",75],["fuckundies.com",75],["fullasiantube.com",75],["gojapaneseporn.com",75],["golderotica.com",75],["goodyoungsex.com",75],["goyoungporn.com",75],["hardxxxmoms.com",75],["hdvintagetube.com",75],["hentaiporn.me",75],["hentaisexfilms.com",75],["hentaisexuality.com",75],["hot-teens-movies.mobi",75],["hotanimepornvideos.com",75],["hotanimevideos.com",75],["hotasianpussysex.com",75],["hotjapaneseshows.com",75],["hotmaturetube.com",75],["hotmilfs.pro",75],["hotorientalporn.com",75],["hotpornsexvideos.com",75],["hotpornyoung.com",75],["hotxxxjapanese.com",75],["hotxxxpussy.com",75],["indiafree.net",75],["indianpornvideo.online",75],["japanpornclip.com",75],["japanesetube.video",75],["japansex.me",75],["japanesexxxporn.com",75],["japansporno.com",75],["japanxxx.asia",75],["japanxxxworld.com",75],["keezmovies.surf",75],["lingeriefuckvideo.com",75],["liveanimalporn.zooo.club",75],["madhentaitube.com",75],["megahentaitube.com",75],["megajapanesesex.com",75],["megajapantube.com",75],["milfxxxpussy.com",75],["momsextube.pro",75],["momxxxass.com",75],["monkeyanimalporn.com",75],["moviexxx.mobi",75],["newanimeporn.com",75],["newjapanesexxx.com",75],["nicematureporn.com",75],["nudeplayboygirls.com",75],["openxxxporn.com",75],["originalindianporn.com",75],["originalteentube.com",75],["pig-fuck.com",75],["plainasianporn.com",75],["popularasianxxx.com",75],["pornanimetube.com",75],["pornasians.pro",75],["pornhat.asia",75],["pornheed.online",75],["pornjapanesesex.com",75],["pornomovies.asia",75],["pornvintage.tv",75],["primeanimesex.com",75],["realjapansex.com",75],["realmomsex.com",75],["redsexhub.com",75],["retroporn.world",75],["retrosexfilms.com",75],["sex-free-movies.com",75],["sexanimesex.com",75],["sexanimetube.com",75],["sexjapantube.com",75],["sexmomvideos.com",75],["sexteenxxxtube.com",75],["sexxxanimal.com",75],["sexyoungtube.com",75],["sexyvintageporn.com",75],["sopornmovies.com",75],["spicyvintageporn.com",75],["sunporno.club",75],["tabooanime.club",75],["teenextrem.com",75],["teenfucksex.com",75],["teenhost.net",75],["teensexass.com",75],["tnaflix.asia",75],["totalfuckmovies.com",75],["totalmaturefuck.com",75],["txxx.asia",75],["voyeurpornsex.com",75],["warmteensex.com",75],["wetasiancreampie.com",75],["wildhentaitube.com",75],["wowyoungsex.com",75],["xhamster-art.com",75],["xmovie.pro",75],["xnudevideos.com",75],["xnxxjapon.com",75],["xpics.me",75],["xvide.me",75],["xxxanimefuck.com",75],["xxxanimevideos.com",75],["xxxanimemovies.com",75],["xxxhentai.xyz",75],["xxxhentaimovies.com",75],["xxxhothub.com",75],["xxxjapaneseporntube.com",75],["xxxlargeporn.com",75],["xxxmomz.com",75],["xxxpornmilf.com",75],["xxxpussyclips.com",75],["xxxpussysextube.com",75],["xxxretrofuck.com",75],["xxxsex.pro",75],["xxxsexyjapanese.com",75],["xxxteenyporn.com",75],["xxxvideo.asia",75],["xxxvideos.ink",75],["xxxyoungtv.com",75],["youjizzz.club",75],["youngpussyfuck.com",75],["bayimg.com",76],["celeb.gate.cc",77],["eodev.com",78],["masterplayer.xyz",80],["pussy-hub.com",80],["compucalitv.com",81],["duden.de",85],["pennlive.com",87],["beautypageants.indiatimes.com",88],["01fmovies.com",89],["lnk2.cc",91],["fullhdxxx.com",92],["classicpornbest.com",92],["1youngteenporn.com",92],["www-daftarharga.blogspot.com",[92,163]],["miraculous.to",[92,171]],["vtube.to",92],["gosexpod.com",93],["tubepornclassic.com",94],["shemalez.com",94],["otakukan.com",95],["xcafe.com",96],["pornfd.com",96],["venusarchives.com",96],["imagehaha.com",97],["imagenpic.com",97],["imageshimage.com",97],["imagetwist.com",97],["deusasporno.com.br",98],["sambaporno2.com",98],["sexoamador.blog.br",98],["videospornozinhos.com",98],["videosexoquente.com",98],["xvideosf.com",98],["k1nk.co",98],["watchasians.cc",98],["alexsports.xyz",98],["lulustream.com",98],["luluvdo.com",98],["web.de",99],["news18.com",100],["thelanb.com",101],["dropmms.com",101],["softdescargas.com",102],["softwaredescargas.com",102],["cracking-dz.com",103],["gazzetta.it",105],["alliptvlinks.com",106],["waterfall.money",106],["port.hu",108],["dziennikbaltycki.pl",109],["dzienniklodzki.pl",109],["dziennikpolski24.pl",109],["dziennikzachodni.pl",109],["echodnia.eu",109],["expressbydgoski.pl",109],["expressilustrowany.pl",109],["gazetakrakowska.pl",109],["gazetalubuska.pl",109],["gazetawroclawska.pl",109],["gk24.pl",109],["gloswielkopolski.pl",109],["gol24.pl",109],["gp24.pl",109],["gra.pl",109],["gs24.pl",109],["kurierlubelski.pl",109],["motofakty.pl",109],["naszemiasto.pl",109],["nowiny24.pl",109],["nowosci.com.pl",109],["nto.pl",109],["polskatimes.pl",109],["pomorska.pl",109],["poranny.pl",109],["sportowy24.pl",109],["strefaagro.pl",109],["strefabiznesu.pl",109],["stronakobiet.pl",109],["telemagazyn.pl",109],["to.com.pl",109],["wspolczesna.pl",109],["course9x.com",109],["courseclub.me",109],["azrom.net",109],["alttyab.net",109],["esopress.com",109],["nesiaku.my.id",109],["onemanhua.com",110],["freeindianporn.mobi",110],["dr-farfar.com",111],["boyfriendtv.com",112],["brandstofprijzen.info",113],["netfuck.net",114],["kisahdunia.com",114],["javsex.to",114],["nulljungle.com",114],["oyuncusoruyor.com",114],["pbarecap.ph",114],["sourds.net",114],["teknobalta.com",114],["tinyppt.com",114],["tvinternetowa.info",114],["sqlserveregitimleri.com",114],["tutcourse.com",114],["readytechflip.com",114],["novinhastop.com",114],["warddogs.com",114],["dotadostube.com",114],["dvdgayonline.com",114],["dvdgayporn.com",114],["hotxfans.com",114],["taradinhos.com",114],["iimanga.com",114],["tinhocdongthap.com",114],["thuocdangian.net",114],["tremamnon.com",114],["freedownloadvideo.net",114],["423down.com",114],["brizzynovel.com",114],["jugomobile.com",114],["freecodezilla.net",114],["movieslegacy.com",114],["animekhor.xyz",114],["iconmonstr.com",114],["gay-tubes.cc",114],["rbxscripts.net",114],["comentariodetexto.com",114],["wordpredia.com",114],["mdn.lol",114],["livsavr.co",114],["allfaucet.xyz",[114,191]],["replica-watch.info",114],["alludemycourses.com",114],["kayifamilytv.com",114],["blog24.me",[114,191]],["iir.ai",115],["gameofporn.com",117],["homeairquality.org",118],["qpython.club",119],["antifake-funko.fr",119],["e9china.net",120],["ac.ontools.net",120],["marketbeat.com",121],["hentaipornpics.net",122],["apps2app.com",123],["vulture.com",124],["megaplayer.bokracdn.run",125],["hentaistream.com",126],["siteunblocked.info",127],["moviesyug.net",128],["w4files.ws",128],["parispi.net",129],["simkl.com",130],["sayrodigital.com",131],["mrproblogger.com",132],["themezon.net",132],["paperzonevn.com",133],["dailyvideoreports.net",134],["lewd.ninja",135],["systemnews24.com",136],["incestvidz.com",137],["niusdiario.es",138],["playporngames.com",139],["movi.pk",[140,144]],["cutesexyteengirls.com",142],["asianembed.io",143],["0dramacool.net",144],["185.53.88.104",144],["185.53.88.204",144],["185.53.88.15",144],["123movies4k.net",144],["123moviesg.com",144],["1movieshd.com",144],["1rowsports.com",144],["4share-mp3.net",144],["6movies.net",144],["9animetv.to",144],["720pstream.me",144],["abysscdn.com",144],["adblockplustape.com",144],["ajkalerbarta.com",144],["akstream.xyz",144],["androidapks.biz",144],["androidsite.net",144],["animefenix.com",144],["animeonlinefree.org",144],["animesite.net",144],["animespank.com",144],["aniworld.to",144],["apkmody.io",144],["appsfree4u.com",144],["audioz.download",144],["bdnewszh.com",144],["beastlyprints.com",144],["bengalisite.com",144],["bestfullmoviesinhd.org",144],["betteranime.net",144],["blacktiesports.live",144],["buffsports.stream",144],["ch-play.com",144],["clickforhire.com",144],["cloudy.pk",144],["computercrack.com",144],["coolcast2.com",144],["crackedsoftware.biz",144],["crackfree.org",144],["cracksite.info",144],["cryptoblog24.info",144],["cuatrolatastv.blogspot.com",144],["cydiasources.net",144],["dirproxy.com",144],["dopebox.to",144],["downloadapk.info",144],["downloadapps.info",144],["downloadgames.info",144],["downloadmusic.info",144],["downloadsite.org",144],["downloadwella.com",144],["ebooksite.org",144],["educationtips213.blogspot.com",144],["egyup.live",144],["embed.meomeo.pw",144],["embed.scdn.to",144],["emulatorsite.com",144],["essaysharkwriting.club",144],["extrafreetv.com",144],["fakedetail.com",144],["fclecteur.com",144],["files.im",144],["flexyhit.com",144],["fmoviefree.net",144],["fmovies24.com",144],["footyhunter3.xyz",144],["freeflix.info",144],["freemoviesu4.com",144],["freeplayervideo.com",144],["freesoccer.net",144],["fseries.org",144],["gamefast.org",144],["gamesite.info",144],["gmanga.me",144],["gocast123.me",144],["gogohd.net",144],["gogoplay5.com",144],["gooplay.net",144],["gostreamon.net",144],["happy2hub.org",144],["harimanga.com",144],["healthnewsreel.com",144],["hexupload.net",144],["hinatasoul.com",144],["hindisite.net",144],["holymanga.net",144],["hxfile.co",144],["isosite.org",144],["iv-soft.com",144],["januflix.expert",144],["jewelry.com.my",144],["johnwardflighttraining.com",144],["kabarportal.com",144],["kstorymedia.com",144],["la123movies.org",144],["lespassionsdechinouk.com",144],["lilymanga.net",144],["linksdegrupos.com.br",144],["livestreamtv.pk",144],["macsite.info",144],["mangapt.com",144],["mangareader.to",144],["mangasite.org",144],["manhuascan.com",144],["megafilmeshdseries.com",144],["megamovies.org",144],["membed.net",144],["mgnetu.com",144],["moddroid.com",144],["moviefree2.com",144],["movies-watch.com.pk",144],["moviesite.app",144],["moviesonline.fm",144],["moviesx.org",144],["moviewatchonline.com.pk",144],["msmoviesbd.com",144],["musicsite.biz",144],["myfernweh.com",144],["myviid.com",144],["nazarickol.com",144],["newsrade.com",144],["noob4cast.com",144],["nsw2u.com",[144,240]],["oko.sh",144],["olympicstreams.me",144],["orangeink.pk",144],["owllink.net",144],["pahaplayers.click",144],["patchsite.net",144],["pdfsite.net",144],["play1002.com",144],["player-cdn.com",144],["productkeysite.com",144],["projectfreetv.one",144],["romsite.org",144],["rufiguta.com",144],["rytmp3.io",144],["send.cm",144],["seriesite.net",144],["seriezloaded.com.ng",144],["serijehaha.com",144],["shrugemojis.com",144],["siteapk.net",144],["siteflix.org",144],["sitegames.net",144],["sitekeys.net",144],["sitepdf.com",144],["sitetorrent.com",144],["softwaresite.net",144],["sportbar.live",144],["sportkart1.xyz",144],["ssyoutube.com",144],["stardima.com",144],["stream4free.live",144],["superapk.org",144],["supermovies.org",144],["tainio-mania.online",144],["talaba.su",144],["tamilguns.org",144],["tatabrada.tv",144],["theflixer.tv",144],["thememypc.net",144],["thetechzone.online",144],["thripy.com",144],["tonnestreamz.xyz",144],["torrentdosfilmes.eu",144],["travelplanspro.com",144],["turcasmania.com",144],["tusfiles.com",144],["tvonlinesports.com",144],["ultramovies.org",144],["uploadbank.com",144],["urdubolo.pk",144],["vidspeeds.com",144],["vumoo.to",144],["warezsite.net",144],["watchmovies2.com",144],["watchmoviesforfree.org",144],["watchofree.com",144],["watchsite.net",144],["watchsouthpark.tv",144],["watchtvch.club",144],["web.livecricket.is",144],["webseries.club",144],["worldcupstream.pm",144],["y2mate.com",144],["youapk.net",144],["youtube4kdownloader.com",144],["yts-subs.com",144],["haho.moe",145],["nicy-spicy.pw",146],["fap-guru.cam",147],["novelmultiverse.com",148],["mylegalporno.com",149],["thecut.com",152],["novelism.jp",153],["alphapolis.co.jp",154],["okrzone.com",155],["momo-net.com",156],["maxgaming.fi",156],["guiasaude.info",156],["felizemforma.com",156],["financasdeouro.com",156],["game3rb.com",157],["javhub.net",157],["thotvids.com",158],["berklee.edu",159],["rawkuma.com",160],["imeteo.sk",161],["youtubemp3donusturucu.net",162],["surfsees.com",164],["feyorra.top",165],["claimtrx.com",165],["vivo.st",[166,167]],["alueviesti.fi",169],["kiuruvesilehti.fi",169],["lempaala.ideapark.fi",169],["olutposti.fi",169],["urjalansanomat.fi",169],["joyhints.com",170],["tainhanhvn.com",172],["titantv.com",173],["3cinfo.net",174],["transportationlies.org",175],["cocomanga.com",176],["mcleaks.net",177],["explorecams.com",177],["minecraft.buzz",177],["chillx.top",178],["playerx.stream",178],["m.liputan6.com",180],["stardewids.com",[180,204]],["ingles.com",181],["spanishdict.com",181],["rureka.com",182],["bunkr.is",183],["amateur8.com",184],["freeporn8.com",184],["maturetubehere.com",184],["embedo.co",185],["corriere.it",186],["oggi.it",186],["2the.space",187],["apkcombo.com",189],["sponsorhunter.com",190],["coinscap.info",191],["cryptowidgets.net",191],["greenenez.com",191],["insurancegold.in",191],["webfreetools.net",191],["wiki-topia.com",191],["bitcotasks.com",191],["videolyrics.in",191],["manofadan.com",191],["cempakajaya.com",191],["carsmania.net",191],["carstopia.net",191],["coinsvalue.net",191],["cookinguide.net",191],["freeoseocheck.com",191],["makeupguide.net",191],["tagecoin.com",191],["doge25.in",191],["king-ptcs.com",191],["naijafav.top",191],["ourcoincash.xyz",191],["sh.techsamir.com",191],["claimcoins.site",191],["cryptosh.pro",191],["cryptoearnfaucet.com",191],["coinsrev.com",191],["ohionowcast.info",191],["wiour.com",191],["go.freetrx.fun",191],["bitzite.com",191],["eftacrypto.com",191],["fescrypto.com",191],["appsbull.com",191],["diudemy.com",191],["maqal360.com",191],["earnhub.net",191],["soft98.ir",192],["novelssites.com",193],["haxina.com",194],["cryptofenz.xyz",194],["upshrink.com",195],["torrentmac.net",196],["moviezaddiction.icu",197],["dlpanda.com",198],["socialmediagirls.com",199],["einrichtungsbeispiele.de",200],["weadown.com",201],["molotov.tv",202],["freecoursesonline.me",203],["dropnudes.com",203],["ftuapps.dev",203],["onehack.us",203],["paste.bin.sx",203],["privatenudes.com",203],["mathcrave.com",203],["commands.gg",204],["smgplaza.com",205],["autosport.com",[206,207]],["motorsport.com",[206,207]],["bravedown.com",208],["freepik.com",209],["pinloker.com",211],["sekilastekno.com",211],["diyphotography.net",212],["bitchesgirls.com",213],["shopforex.online",214],["ltc25.in",[215,216]],["yesmangas1.com",217],["programmingeeksclub.com",218],["hlspanel.xyz",219],["easymc.io",220],["shoot-yalla.tv",221],["diendancauduong.com",222],["parentcircle.com",223],["h-game18.xyz",224],["nopay.info",225],["wheelofgold.com",226],["shortlinks.tech",227],["recipahi.com",228],["perchance.org",230],["skill4ltu.eu",231],["freepikdownloader.com",232],["freepasses.org",233],["iusedtobeaboss.com",234],["blogtruyenmoi.com",235],["repretel.com",236],["igay69.com",237],["cutsy.net",238],["cutyurls.com",238],["cutty.app",238],["cbc.ca",239]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",8],["ganool",8],["pirate",8],["piratebay",8],["pirateproxy",8],["proxytpb",8],["thepiratebay",8],["limetorrents",[10,17]],["king-pes",10],["depedlps",10],["komikcast",10],["idedroidsafelink",10],["links-url",10],["eikaiwamastery",10],["ak4eg",10],["xhamster",11],["xhamster1",11],["xhamster5",11],["xhamster7",11],["rexporn",11],["movies07",11],["pornocomics",11],["streanplay",12],["steanplay",12],["liferayiseasy",[13,14]],["pahe",17],["yts",17],["tube8",17],["topeuropix",17],["moviescounter",17],["torrent9",17],["desiremovies",17],["movs4u",17],["uwatchfree",17],["hydrax",17],["4movierulz",17],["projectfreetv",17],["arabseed",17],["btdb",[17,60]],["skymovieshd",17],["world4ufree",17],["streamsport",17],["rojadirectatvhd",17],["userload",17],["freecoursesonline",19],["lordpremium",19],["todovieneok",19],["novablogitalia",19],["anisubindo",19],["btvsports",19],["adyou",20],["fxporn69",22],["watchseries",25],["pornktube",25],["sexwebvideo",30],["pornomoll",30],["mejortorrent",33],["mejortorrento",33],["mejortorrents",33],["mejortorrents1",33],["mejortorrentt",33],["grantorrent",33],["gntai",33],["allcalidad",[33,49]],["gsurl",34],["mimaletadepeliculas",35],["burningseries",36],["dz4soft",37],["yoututosjeff",37],["ebookmed",37],["lanjutkeun",37],["novelasesp",37],["singingdalong",37],["doujindesu",37],["xmovies8",40],["mega-dvdrip",46],["peliculas-dvdrip",46],["desbloqueador",48],["newpelis",[49,58]],["pelix",[49,58]],["khatrimaza",49],["camwhores",51],["camwhorestv",51],["uproxy",51],["nekopoi",55],["mirrorace",64],["dbupload",71],["nuvid",72],["mixdrp",73],["asiansex",75],["japanfuck",75],["japanporn",75],["teensex",75],["vintagetube",75],["xxxmovies",75],["zooqle",79],["7starhd",[82,128]],["hdfull",83],["mangamanga",84],["streameast",86],["thestreameast",86],["vev",90],["vidop",90],["zone-telechargement",92],["megalink",98],["gmx",99],["mega1080p",104],["9hentai",107],["gaypornhdfree",114],["cinemakottaga",114],["privatemoviez",114],["apkmaven",114],["popcornstream",116],["pagalmovies",128],["jalshamoviez",128],["9xupload",128],["bdupload",128],["desiupload",128],["rdxhd1",128],["moviessources",141],["goload",[143,144]],["0gomovie",144],["0gomovies",144],["123moviefree",144],["1kmovies",144],["1madrasdub",144],["1primewire",144],["2embed",144],["2madrasdub",144],["2umovies",144],["4anime",144],["9xmovies",144],["altadefinizione01",144],["anitube",144],["atomixhq",144],["beinmatch",144],["brmovies",144],["cima4u",144],["clicknupload",144],["cmovies",144],["couchtuner",144],["cricfree",144],["crichd",144],["databasegdriveplayer",144],["dood",144],["f1stream",144],["faselhd",144],["fbstream",144],["file4go",144],["filemoon",144],["filepress",[144,210]],["filmlinks4u",144],["filmpertutti",144],["filmyzilla",144],["fmovies",144],["french-stream",144],["fsapi",144],["fzlink",144],["gdriveplayer",144],["gofilms4u",144],["gogoanime",144],["gomoviefree",144],["gomoviz",144],["gowatchseries",144],["hdmoviefair",144],["hdmovies4u",144],["hdmovies50",144],["hdmoviesfair",144],["hh3dhay",144],["hindilinks4u",144],["hotmasti",144],["hurawatch",144],["klmanga",144],["klubsports",144],["libertestreamvf",144],["livetvon",144],["manga1000",144],["manga1001",144],["mangaraw",144],["mangarawjp",144],["mlbstream",144],["motogpstream",144],["movierulz",144],["movies123",144],["movies2watch",144],["moviesden",144],["moviezaddiction",144],["myflixer",144],["nbastream",144],["netcine",144],["nflstream",144],["nhlstream",144],["onlinewatchmoviespk",144],["pctfenix",144],["pctnew",144],["pksmovies",144],["plyjam",144],["plylive",144],["pogolinks",144],["popcorntime",144],["poscitech",144],["prmovies",144],["rugbystreams",144],["shahed4u",144],["sflix",144],["sitesunblocked",144],["socceronline",144],["solarmovies",144],["sportcast",144],["sportskart",144],["sports-stream",144],["streaming-french",144],["streamers",144],["streamingcommunity",144],["strikeout",144],["t20cup",144],["tennisstreams",144],["toonanime",144],["tvply",144],["ufcstream",144],["uptomega",144],["uqload",144],["vudeo",144],["vidoo",144],["vipbox",144],["vipboxtv",144],["vipleague",144],["viprow",144],["yesmovies",144],["yomovies",144],["yomovies1",144],["yt2mp3s",144],["kat",144],["katbay",144],["kickass",144],["kickasshydra",144],["kickasskat",144],["kickass2",144],["kickasstorrents",144],["kat2",144],["kattracker",144],["thekat",144],["thekickass",144],["kickassz",144],["kickasstorrents2",144],["topkickass",144],["kickassgo",144],["kkickass",144],["kkat",144],["kickasst",144],["kick4ss",144],["guardaserie",150],["cine-calidad",151],["milfnut",156],["videovard",168],["softonic",188],["bg-gledai",203],["gledaitv",203],["motchill",229]]);

const exceptionsMap = new Map([["mentor.duden.de",[85]],["forum.soft98.ir",[192]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type, undefined, true);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = args[1] instanceof Function
                        ? String(safe.Function_toString(args[1]))
                        : String(args[1]);
                } catch(ex) {
                }
                const matchesType = safe.RegExp_test.call(reType, type);
                const matchesHandler = safe.RegExp_test.call(rePattern, handler);
                const matchesEither = matchesType || matchesHandler;
                const matchesBoth = matchesType && matchesHandler;
                if ( log === 1 && matchesBoth || log === 2 && matchesEither || log === 3 ) {
                    safe.uboLog(`addEventListener('${type}', ${handler})`);
                }
                if ( debug === 1 && matchesBoth || debug === 2 && matchesEither ) {
                    debugger; // jshint ignore:line
                }
                if ( matchesBoth ) { return; }
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
    if ( scriptletGlobals.has('safeSelf') ) {
        return scriptletGlobals.get('safeSelf');
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_random': Math.random,
        'Object_defineProperty': Object.defineProperty.bind(Object),
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
        uboLog(...args) {
            if ( scriptletGlobals.has('canDebug') === false ) { return; }
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
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
                    pattern,
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            return {
                pattern,
                re: new this.RegExp(pattern.replace(
                    /[.*+?^${}()|[\]\\]/g, '\\$&'),
                    options.flags
                ),
                expect,
            };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            return this.RegExp_test.call(details.re, haystack) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
            return Object.fromEntries(entries);
        },
    };
    scriptletGlobals.set('safeSelf', safe);
    return safe;
}

function shouldDebug(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.debug;
}

function shouldLog(details) {
    if ( details instanceof Object === false ) { return false; }
    return scriptletGlobals.has('canDebug') && details.log;
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
