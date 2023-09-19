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

const argsList = [["load","Object"],["mousedown","clientX"],["load","hard_block"],["/contextmenu|keydown/"],["","adb"],["load","adBlock"],["click","ClickHandler"],["load","IsAdblockRequest"],["/^(?:click|mousedown)$/","_0x"],["error"],["load","onload"],["","pop"],["","BACK"],["load","getComputedStyle"],["load","adsense"],["load","(!o)"],["load","(!i)"],["DOMContentLoaded","prestitialData"],["","_0x"],["","Adblock"],["load","nextFunction"],["/^(?:click|mousedown)$/","bypassEventsInProxies"],["","open"],["click","exopop"],["/^(?:load|click)$/","popMagic"],["mousedown","popundrInit"],["","popMagic"],["getexoloader"],["load","exoJsPop101"],["/^loadex/"],["","/exo"],["","_blank"],["",";}"],["load","BetterPop"],["click","popMagic"],["mousedown","preventDefault"],["load","advertising"],["click","preventDefault"],["load","2000"],["/^(click|mousedown|mousemove|touchstart|touchend|touchmove)/","system.popunder"],["load","adb"],["/^(?:click|mousedown|mousemove|touchstart|touchend|touchmove)$/","system.popunder"],["","'0x"],["/DOMContentLoaded|load/","y.readyState"],["/error|canplay/","(t)"],["load","hblocked"],["error","Adblocker"],["DOMContentLoaded","shortener"],["DOMContentLoaded","adlinkfly"],["mousedown","trigger"],["","0x"],["DOMContentLoaded","ads"],["","Pop"],["/^(?:click|mousedown)$/","popunder"],["DOMContentLoaded","preventExit"],["mouseup","_blank"],["","adsense"],["load"],["click","pop_under"],["load","url"],["load","adverts-top-container"],["","Date"],["DOMContentLoaded","&nbsp"],["click","read_cookie"],["","midRoll"],["click","_0x"],["load","isBlanketFound"],["load","showModal"],["","click"],["canplay"],["click","trigger"],["mouseout","clientWidth"],["mouseout","[native code]"],["click"],["click","open"],["load","download-wrapper"],["load","autoRecov"],["popstate","noPop"],["/^(?:click|mousedown)$/","ppu"],["click","native code"],["message","data.slice"],["/^(?:mousedown|mouseup)$/","0x"],["click","popundr"],["DOMContentLoaded","compupaste"],["keydown","keyCode"],["mousedown","!!{});"],["keydown"],["DOMContentLoaded","isMobile"],["/^/","0x"],["load","PrivateMode"],["scroll","_0x"],["DOMContentLoaded","checkVPN"],["/^(?:click|mousedown|mouseup)$/","di()"],["","\\"],["popstate"],["click","my_inter_listen"],["","window.open"],["load","appendChild"],["","bi()"],["","checkTarget"],["/mousedown|mouseup/","event=>"],["click","popunder"],["timeupdate"],["scroll","getElementById"],["load","undefined"],["DOMContentLoaded","scriptwz_url"],["load","0x"],["DOMContentLoaded","btoa"],["adblockActivated"],["load","ads"],["click","saveLastEvent"],["DOMContentLoaded","offsetHeight"],["","show"],["/.?/","popMagic"],["","ads"],["click","interstitial"],["load","antiblock"],["DOMContentLoaded","adsBlocked"],["load",".appendChild"],["","btoa"],["","exopop"],["blur","focusOut"],["DOMContentLoaded","AdBlock"],["load","blocker"],["mouseleave","NativeDisplayAdID"],["mouseover","event.triggered"],["load","removeChild"],["/^(?:click|mousedown)$/","latest!=="],["DOMContentLoaded",".ready"],["load","script"],["","/pop|wm|forceClick/"],["DOMContentLoaded","adblock"],["load","head"],["/error|load/","/onerror|showModal/"],["visibilitychange"],["load","/showModal|isBlanketFound/"],["click","shouldShow"],["","/ads|Modal/"],["DOMContentLoaded","init"],["load","Adblock"],["DOMContentLoaded","window.open"],["","vads"],["devtoolschange"],["beforeunload"],["click","0x"],["","break;case $."],["mouseup","decodeURIComponent"],["/(?:click|touchend)/","_0x"],["click","openSite"],["","removeChild"],["click","pu_count"],["","/pop|_blank/"],["click","allclick_Public"],["/touchstart|mousedown|click/","latest"],["blur","native code"],["blur","event.simulate"],["click","_blank"],["contextmenu"],["DOMContentLoaded","0x"],["click","overlay"],["scroll","undefined"],["readystatechange","document.removeEventListener"],["scroll","detect"],["DOMContentLoaded","event"],["click","t(a)"],["","focus"],["DOMContentLoaded","deblocker"],["load","block"],["","preventDefault"],["click","tabunder"],["DOMContentLoaded","iframe_id"],["mouseup","catch"],["scroll","innerHeight"],["DOMContentLoaded","disableDeveloperTools"],["hashchange"],["load","/nextFunction|2000/"],["load","player"],["","document.oncontextmenu"],["","about:blank"],["load","popMagic"],["np.detect"],["click","Popup"],["","/open.*_blank/"],["scroll"],["","isBlocking"],["","$"],["","exoJsPop101"],["/click|mousedown/","catch"],["","init"],["adb"],["scroll","modal"],["","[native code]"],["DOMContentLoaded","clientHeight"],["click","window.focus"],["load","htmls"],["click","event.dispatch"],["load","adblock"],["DOMContentLoaded","iframe"],["","Math"],["","tabUnder"],["load","XMLHttpRequest"],["load","puURLstrpcht"],["load","AdBlocker"],["","showModal"],["","goog"],["load","abDetectorPro"],["","document.body"],["","modal"],["load","length"],["gtmloaderror"],["click","adobeModalTestABenabled"],["blur","console.log"],["blur","counter"],["","AdB"],["load","adSession"],["load","Ads"],["load","/abb|htmls|nextFunction/"],["","adsBlocked"],["load","goog"],["DOMContentLoaded","googlesyndication"],["DOMContentLoaded","redURL"],["np.evtdetect"],["load","AdBlock"],["load","popunder"],["scroll","function(e)"],["DOMContentLoaded","adlinkfly_url"],["mousedown"],["load","document.getElementById"],["mousedown","tabUnder"],["DOMContentLoaded","adsbygoogle"],["click","popactive"],["load","doTest"],["message","adPoweredPluginInUse"],["load","adsbygoogle"],["load","modal_blocker"],["click","isOpened"],["mousedown","pop.doEvent"],["click","alink"],["/adblock/i"],["","ad-load-fail"],["","Adb"]];

const hostnamesMap = new Map([["newser.com",0],["sport1.de",2],["userscloud.com",3],["timesofindia.indiatimes.com",4],["drrtyr.mx",4],["pinoyalbums.com",4],["multiplayer.it",4],["bild.de",5],["mediafire.com",[6,7]],["pinsystem.co.uk",8],["fembed.com",8],["ancensored.com",8],["o2tvseries.com",8],["mp3fiber.com",[8,20]],["xrivonet.info",8],["afreesms.com",9],["tio.ch",9],["lavanguardia.com",9],["eplayer.click",9],["kingofdown.com",10],["radiotormentamx.com",10],["quelleestladifference.fr",10],["otakuworldsite.blogspot.com",10],["ad-itech.blogspot.com",10],["sna3talaflam.com",10],["agar.pro",10],["unlockapk.com",10],["mobdi3ips.com",10],["socks24.org",10],["drivebox.club",10],["interviewgig.com",10],["jobhunterplg.xyz",10],["javaguides.net",10],["almohtarif-tech.net",10],["hl-live.de",10],["forum.release-apk.com",10],["devoloperxda.blogspot.com",10],["zwergenstadt.com",10],["primedeportes.es",10],["doujindesu.cc",10],["upxin.net",10],["ciudadblogger.com",10],["ke-1.com",10],["greatanimation.it",10],["secretsdeepweb.blogspot.com",10],["bit-shares.com",10],["itdmusics.com",10],["aspdotnet-suresh.com",10],["tudo-para-android.com",10],["urdulibrarypk.blogspot.com",10],["zerotopay.com",10],["akw.to",10],["mawsueaa.com",10],["pornhd.com",11],["cnnamador.com",[11,39]],["cle0desktop.blogspot.com",11],["turkanime.co",11],["camclips.tv",[11,52]],["blackpornhq.com",11],["xsexpics.com",11],["ulsex.net",11],["wannafreeporn.com",11],["ytube2dl.com",11],["protege-torrent.com",11],["bibme.org",15],["citationmachine.net",15],["easybib.com",16],["sankakucomplex.com",17],["userupload.net",18],["vermangasporno.com",18],["imgtorrnt.in",18],["picbaron.com",[18,26]],["worldcupfootball.me",18],["letmejerk.com",18],["letmejerk3.com",18],["letmejerk4.com",18],["letmejerk5.com",18],["letmejerk6.com",18],["letmejerk7.com",18],["dlapk4all.com",18],["kropic.com",18],["kvador.com",18],["pdfindir.net",18],["brstej.com",18],["topwwnews.com",18],["xsanime.com",18],["vidlo.us",18],["put-locker.com",18],["moviesyug.net",18],["w4files.ws",18],["youx.xxx",18],["animeindo.asia",18],["masahub.net",18],["adclickersbot.com",18],["badtaste.it",19],["mage.si",20],["totaldebrid.org",20],["hesgoal.com",20],["neko-miku.com",20],["elsfile.org",20],["venstrike.jimdofree.com",20],["schrauben-normen.de",20],["avengerinator.blogspot.com",20],["link-to.net",20],["hanimesubth.com",20],["gsmturkey.net",20],["linkvertise.com",20],["adshrink.it",20],["presentation-ppt.com",20],["mangacanblog.com",20],["pekalongan-cits.blogspot.com",20],["4tymode.win",20],["reifenrechner.at",20],["tire-size-calculator.info",20],["kord-jadul.com",20],["linuxsecurity.com",20],["encodinghub.com",20],["readyssh.net",20],["itsguider.com",20],["cotravinh.blogspot.com",20],["itudong.com",20],["shortx.net",20],["comandotorrenthd.org",20],["turkdebrid.net",20],["lecturel.com",20],["comboforum.com",20],["bakai.org",20],["nar.k-ba.net",20],["gotporn.com",22],["freepornrocks.com",22],["tvhai.org",22],["realgfporn.com",[23,24]],["titsbox.com",23],["thisvid.com",24],["xvideos-downloader.net",24],["imgspice.com",25],["luscious.net",[26,94]],["6indianporn.com",26],["amateurebonypics.com",26],["amateuryoungpics.com",26],["cinemabg.net",26],["desimmshd.com",26],["givemeaporn.com",26],["jav-asia.top",26],["javf.net",26],["javideo.net",26],["kr18plus.com",26],["pilibook.com",26],["pornborne.com",26],["porngrey.com",26],["submilf.com",26],["subtaboo.com",26],["tktube.com",26],["xfrenchies.com",26],["frauporno.com",26],["qqxnxx.com",26],["sexvideos.host",26],["vikiporn.com",27],["tnaflix.com",27],["hentai2w.com",[27,34]],["yourlust.com",27],["hotpornfile.org",27],["jav789.com",27],["javbuz.com",27],["letfap.com",27],["watchfreexxx.net",27],["vintageporntubes.com",27],["angelgals.com",27],["babesexy.com",27],["porndaa.com",27],["ganstamovies.com",27],["youngleak.com",27],["porndollz.com",27],["xnxxvideo.pro",27],["xvideosxporn.com",27],["onlyhgames.com",27],["filmpornofrancais.fr",27],["pictoa.com",[27,50]],["javout.co",27],["adultasianporn.com",27],["nsfwmonster.com",27],["girlsofdesire.org",27],["gaytail.com",27],["fetish-bb.com",27],["rumporn.com",27],["soyoungteens.com",27],["zubby.com",27],["lesbian8.com",27],["gayforfans.com",27],["reifporn.de",27],["javtsunami.com",27],["18tube.sex",27],["xxxextreme.org",27],["amateurs-fuck.com",27],["sex-amateur-clips.com",27],["hentaiworld.tv",27],["dads-banging-teens.com",27],["home-xxx-videos.com",27],["mature-chicks.com",27],["teens-fucking-matures.com",27],["hqbang.com",27],["pussyspace.com",[28,29]],["pussyspace.net",[28,29]],["empflix.com",30],["cpmlink.net",31],["bdsmstreak.com",31],["cutpaid.com",31],["pornforrelax.com",31],["fatwhitebutt.com",31],["mavplay.xyz",31],["sunporno.com",[32,33,34]],["hentai2read.com",34],["pornblade.com",34],["pornfelix.com",34],["xanimeporn.com",34],["javtiful.com",34],["camarchive.tv",34],["ver-comics-porno.com",34],["ver-mangas-porno.com",34],["illink.net",34],["genpassword.top",34],["tubxporn.xxx",34],["m-hentai.net",34],["icyporno.com",34],["redwap.me",34],["redwap2.com",34],["redwap3.com",34],["freejav.guru",34],["pornxxxxtube.net",34],["zetporn.com",34],["crownimg.com",34],["xxxvideohd.net",34],["short.pe",35],["bs.to",37],["efukt.com",37],["kpopsea.com",37],["generacionretro.net",38],["nuevos-mu.ucoz.com",38],["micloudfiles.com",38],["mimaletamusical.blogspot.com",38],["visionias.net",38],["sslproxies24.top",38],["b3infoarena.in",38],["lurdchinexgist.blogspot.com",38],["thefreedommatrix.blogspot.com",38],["hentai-vl.blogspot.com",38],["projetomotog.blogspot.com",38],["ktmx.pro",38],["lirik3satu.blogspot.com",38],["marketmovers.it",38],["pharmaguideline.com",38],["safemaru.blogspot.com",38],["mixloads.com",38],["mangaromance.eu",38],["interssh.com",38],["freesoftpdfdownload.blogspot.com",38],["cirokun.blogspot.com",38],["myadslink.com",38],["blackavelic.com",38],["server.satunivers.tv",38],["eg-akw.com",38],["xn--mgba7fjn.cc",38],["ero-teca.blogspot.com",38],["flashingjungle.com",39],["ma-x.org",40],["lavozdegalicia.es",40],["btcbunch.com",40],["xmovies08.org",42],["globaldjmix.com",43],["zazzybabes.com",44],["haaretz.com",45],["slate.com",46],["peliculas1mega.com",47],["mega-mkv.com",[47,48]],["zona-leros.net",47],["megalinks.info",48],["megapastes.com",48],["mkv-pastes.com",48],["zpaste.net",48],["zlpaste.net",48],["9xlinks.site",48],["acortarm.xyz",49],["acortame.xyz",49],["cine.to",[50,182]],["hdstreamss.club",50],["kissasia.cc",50],["nzbstars.com",51],["digjav.com",52],["videoszoofiliahd.com",53],["xxxtubezoo.com",54],["zooredtube.com",54],["uii.io",55],["megacams.me",57],["rlslog.net",57],["porndoe.com",58],["acienciasgalilei.com",60],["playrust.io",61],["payskip.org",62],["short-url.link",63],["tubedupe.com",64],["fatgirlskinny.net",66],["polska-ie.com",66],["windowsmatters.com",66],["canaltdt.es",67],["masbrooo.com",67],["2ndrun.tv",67],["camclips.cc",[68,69]],["stfly.me",70],["oncehelp.com",70],["queenfaucet.website",70],["lewat.club",70],["popimed.com",70],["curto.win",70],["smallseotools.com",71],["plagiarismchecker.co",72],["porndex.com",73],["asianclub.tv",74],["justin.mp3quack.lol",74],["macwelt.de",76],["pcwelt.de",76],["capital.de",76],["geo.de",76],["allmomsex.com",77],["allnewindianporn.com",77],["analxxxvideo.com",77],["animalextremesex.com",77],["anime3d.xyz",77],["animefuckmovies.com",77],["animepornfilm.com",77],["animesexbar.com",77],["animesexclip.com",77],["animexxxsex.com",77],["animexxxfilms.com",77],["anysex.club",77],["apetube.asia",77],["asianfuckmovies.com",77],["asianfucktube.com",77],["asianporn.sexy",77],["asiansexcilps.com",77],["beeg.fund",77],["beegvideoz.com",77],["bestasiansex.pro",77],["bigsexhub.com",77],["bravotube.asia",77],["brutalanimalsfuck.com",77],["candyteenporn.com",77],["daddyfuckmovies.com",77],["desifuckonline.com",77],["exclusiveasianporn.com",77],["exteenporn.com",77],["fantasticporn.net",77],["fantasticyoungporn.com",77],["fineasiansex.com",77],["firstasianpussy.com",77],["freeindiansextube.com",77],["freepornasians.com",77],["freerealvideo.com",77],["fuck-beeg.com",77],["fuck-xnxx.com",77],["fuckasian.pro",77],["fuckfuq.com",77],["fuckundies.com",77],["fullasiantube.com",77],["gojapaneseporn.com",77],["golderotica.com",77],["goodyoungsex.com",77],["goyoungporn.com",77],["hardxxxmoms.com",77],["hdvintagetube.com",77],["hentaiporn.me",77],["hentaisexfilms.com",77],["hentaisexuality.com",77],["hot-teens-movies.mobi",77],["hotanimepornvideos.com",77],["hotanimevideos.com",77],["hotasianpussysex.com",77],["hotjapaneseshows.com",77],["hotmaturetube.com",77],["hotmilfs.pro",77],["hotorientalporn.com",77],["hotpornsexvideos.com",77],["hotpornyoung.com",77],["hotxxxjapanese.com",77],["hotxxxpussy.com",77],["indiafree.net",77],["indianpornvideo.online",77],["japanpornclip.com",77],["japanesetube.video",77],["japansex.me",77],["japanesexxxporn.com",77],["japansporno.com",77],["japanxxx.asia",77],["japanxxxworld.com",77],["keezmovies.surf",77],["lingeriefuckvideo.com",77],["liveanimalporn.zooo.club",77],["madhentaitube.com",77],["megahentaitube.com",77],["megajapanesesex.com",77],["megajapantube.com",77],["milfxxxpussy.com",77],["momsextube.pro",77],["momxxxass.com",77],["monkeyanimalporn.com",77],["moviexxx.mobi",77],["newanimeporn.com",77],["newjapanesexxx.com",77],["nicematureporn.com",77],["nudeplayboygirls.com",77],["openxxxporn.com",77],["originalindianporn.com",77],["originalteentube.com",77],["pig-fuck.com",77],["plainasianporn.com",77],["popularasianxxx.com",77],["pornanimetube.com",77],["pornasians.pro",77],["pornhat.asia",77],["pornheed.online",77],["pornjapanesesex.com",77],["pornomovies.asia",77],["pornvintage.tv",77],["primeanimesex.com",77],["realjapansex.com",77],["realmomsex.com",77],["redsexhub.com",77],["retroporn.world",77],["retrosexfilms.com",77],["sex-free-movies.com",77],["sexanimesex.com",77],["sexanimetube.com",77],["sexjapantube.com",77],["sexmomvideos.com",77],["sexteenxxxtube.com",77],["sexxxanimal.com",77],["sexyoungtube.com",77],["sexyvintageporn.com",77],["sopornmovies.com",77],["spicyvintageporn.com",77],["sunporno.club",77],["tabooanime.club",77],["teenextrem.com",77],["teenfucksex.com",77],["teenhost.net",77],["teensexass.com",77],["tnaflix.asia",77],["totalfuckmovies.com",77],["totalmaturefuck.com",77],["txxx.asia",77],["voyeurpornsex.com",77],["warmteensex.com",77],["wetasiancreampie.com",77],["wildhentaitube.com",77],["wowyoungsex.com",77],["xhamster-art.com",77],["xmovie.pro",77],["xnudevideos.com",77],["xnxxjapon.com",77],["xpics.me",77],["xvide.me",77],["xxxanimefuck.com",77],["xxxanimevideos.com",77],["xxxanimemovies.com",77],["xxxhentai.xyz",77],["xxxhentaimovies.com",77],["xxxhothub.com",77],["xxxjapaneseporntube.com",77],["xxxlargeporn.com",77],["xxxmomz.com",77],["xxxpornmilf.com",77],["xxxpussyclips.com",77],["xxxpussysextube.com",77],["xxxretrofuck.com",77],["xxxsex.pro",77],["xxxsexyjapanese.com",77],["xxxteenyporn.com",77],["xxxvideo.asia",77],["xxxvideos.ink",77],["xxxyoungtv.com",77],["youjizzz.club",77],["youngpussyfuck.com",77],["bayimg.com",78],["celeb.gate.cc",79],["eodev.com",80],["masterplayer.xyz",82],["pussy-hub.com",82],["compucalitv.com",83],["duden.de",87],["pennlive.com",89],["beautypageants.indiatimes.com",90],["01fmovies.com",91],["lnk2.cc",93],["fullhdxxx.com",94],["classicpornbest.com",94],["1youngteenporn.com",94],["www-daftarharga.blogspot.com",[94,165]],["miraculous.to",[94,174]],["vtube.to",94],["beritabaru.news",94],["solusi.cyou",94],["gosexpod.com",95],["tubepornclassic.com",96],["shemalez.com",96],["otakukan.com",97],["xcafe.com",98],["pornfd.com",98],["venusarchives.com",98],["imagehaha.com",99],["imagenpic.com",99],["imageshimage.com",99],["imagetwist.com",99],["adsh.cc",100],["deusasporno.com.br",101],["sambaporno2.com",101],["sexoamador.blog.br",101],["videospornozinhos.com",101],["videosexoquente.com",101],["xvideosf.com",101],["k1nk.co",101],["watchasians.cc",101],["alexsports.xyz",101],["web.de",102],["news18.com",103],["thelanb.com",104],["dropmms.com",104],["softdescargas.com",105],["softwaredescargas.com",105],["cracking-dz.com",106],["gazzetta.it",108],["alliptvlinks.com",109],["waterfall.money",109],["port.hu",111],["dziennikbaltycki.pl",112],["dzienniklodzki.pl",112],["dziennikpolski24.pl",112],["dziennikzachodni.pl",112],["echodnia.eu",112],["expressbydgoski.pl",112],["expressilustrowany.pl",112],["gazetakrakowska.pl",112],["gazetalubuska.pl",112],["gazetawroclawska.pl",112],["gk24.pl",112],["gloswielkopolski.pl",112],["gol24.pl",112],["gp24.pl",112],["gra.pl",112],["gs24.pl",112],["kurierlubelski.pl",112],["motofakty.pl",112],["naszemiasto.pl",112],["nowiny24.pl",112],["nowosci.com.pl",112],["nto.pl",112],["polskatimes.pl",112],["pomorska.pl",112],["poranny.pl",112],["sportowy24.pl",112],["strefaagro.pl",112],["strefabiznesu.pl",112],["stronakobiet.pl",112],["telemagazyn.pl",112],["to.com.pl",112],["wspolczesna.pl",112],["course9x.com",112],["courseclub.me",112],["azrom.net",112],["alttyab.net",112],["esopress.com",112],["nesiaku.my.id",112],["onemanhua.com",113],["freeindianporn.mobi",113],["dr-farfar.com",114],["boyfriendtv.com",115],["brandstofprijzen.info",116],["netfuck.net",117],["kisahdunia.com",117],["javsex.to",117],["nulljungle.com",117],["oyuncusoruyor.com",117],["pbarecap.ph",117],["sourds.net",117],["teknobalta.com",117],["tinyppt.com",117],["tvinternetowa.info",117],["sqlserveregitimleri.com",117],["tutcourse.com",117],["readytechflip.com",117],["novinhastop.com",117],["warddogs.com",117],["dotadostube.com",117],["dvdgayonline.com",117],["dvdgayporn.com",117],["hotxfans.com",117],["taradinhos.com",117],["iimanga.com",117],["tinhocdongthap.com",117],["thuocdangian.net",117],["tremamnon.com",117],["freedownloadvideo.net",117],["423down.com",117],["brizzynovel.com",117],["jugomobile.com",117],["freecodezilla.net",117],["movieslegacy.com",117],["animekhor.xyz",117],["iconmonstr.com",117],["gay-tubes.cc",117],["rbxscripts.net",117],["comentariodetexto.com",117],["wordpredia.com",117],["mdn.lol",117],["livsavr.co",117],["allfaucet.xyz",[117,194]],["replica-watch.info",117],["alludemycourses.com",117],["kayifamilytv.com",117],["blog24.me",[117,194]],["iir.ai",118],["gameofporn.com",120],["homeairquality.org",121],["qpython.club",122],["antifake-funko.fr",122],["e9china.net",123],["ac.ontools.net",123],["marketbeat.com",124],["hentaipornpics.net",125],["apps2app.com",126],["vulture.com",127],["megaplayer.bokracdn.run",128],["hentaistream.com",129],["siteunblocked.info",130],["parispi.net",131],["simkl.com",132],["sayrodigital.com",133],["paperzonevn.com",134],["dailyvideoreports.net",135],["lewd.ninja",136],["systemnews24.com",137],["incestvidz.com",138],["niusdiario.es",139],["playporngames.com",140],["movi.pk",[141,145]],["cutesexyteengirls.com",143],["asianembed.io",144],["gogoplay1.com",144],["0dramacool.net",145],["185.53.88.104",145],["185.53.88.204",145],["185.53.88.15",145],["123movies4k.net",145],["123moviesg.com",145],["1movieshd.com",145],["1rowsports.com",145],["4share-mp3.net",145],["6movies.net",145],["9animetv.to",145],["720pstream.me",145],["abysscdn.com",145],["adblockplustape.com",145],["ajkalerbarta.com",145],["akstream.xyz",145],["androidapks.biz",145],["androidsite.net",145],["animefenix.com",145],["animeonlinefree.org",145],["animesite.net",145],["animespank.com",145],["aniworld.to",145],["apkmody.io",145],["appsfree4u.com",145],["audioz.download",145],["bdnewszh.com",145],["beastlyprints.com",145],["bengalisite.com",145],["bestfullmoviesinhd.org",145],["betteranime.net",145],["blacktiesports.live",145],["buffsports.stream",145],["ch-play.com",145],["clickforhire.com",145],["cloudy.pk",145],["computercrack.com",145],["coolcast2.com",145],["crackedsoftware.biz",145],["crackfree.org",145],["cracksite.info",145],["cryptoblog24.info",145],["cuatrolatastv.blogspot.com",145],["cydiasources.net",145],["dirproxy.com",145],["dopebox.to",145],["downloadapk.info",145],["downloadapps.info",145],["downloadgames.info",145],["downloadmusic.info",145],["downloadsite.org",145],["downloadwella.com",145],["ebooksite.org",145],["educationtips213.blogspot.com",145],["egyup.live",145],["embed.meomeo.pw",145],["embed.scdn.to",145],["emulatorsite.com",145],["essaysharkwriting.club",145],["extrafreetv.com",145],["fakedetail.com",145],["fclecteur.com",145],["files.im",145],["flexyhit.com",145],["fmoviefree.net",145],["fmovies24.com",145],["footyhunter3.xyz",145],["freeflix.info",145],["freemoviesu4.com",145],["freeplayervideo.com",145],["freesoccer.net",145],["fseries.org",145],["gamefast.org",145],["gamesite.info",145],["gmanga.me",145],["gocast123.me",145],["gogohd.net",145],["gogoplay5.com",145],["gooplay.net",145],["gostreamon.net",145],["happy2hub.org",145],["harimanga.com",145],["healthnewsreel.com",145],["hexupload.net",145],["hinatasoul.com",145],["hindisite.net",145],["holymanga.net",145],["hxfile.co",145],["isosite.org",145],["iv-soft.com",145],["januflix.expert",145],["jewelry.com.my",145],["johnwardflighttraining.com",145],["kabarportal.com",145],["kstorymedia.com",145],["la123movies.org",145],["lespassionsdechinouk.com",145],["lilymanga.net",145],["linksdegrupos.com.br",145],["livestreamtv.pk",145],["macsite.info",145],["mangapt.com",145],["mangareader.to",145],["mangasite.org",145],["manhuascan.com",145],["megafilmeshdseries.com",145],["megamovies.org",145],["membed.net",145],["mgnetu.com",145],["moddroid.com",145],["moviefree2.com",145],["movies-watch.com.pk",145],["moviesite.app",145],["moviesonline.fm",145],["moviesx.org",145],["moviewatchonline.com.pk",145],["msmoviesbd.com",145],["musicsite.biz",145],["myfernweh.com",145],["myviid.com",145],["nazarickol.com",145],["newsrade.com",145],["noob4cast.com",145],["nsw2u.com",[145,240]],["oko.sh",145],["olympicstreams.me",145],["orangeink.pk",145],["owllink.net",145],["pahaplayers.click",145],["patchsite.net",145],["pdfsite.net",145],["play1002.com",145],["player-cdn.com",145],["productkeysite.com",145],["projectfreetv.one",145],["romsite.org",145],["rufiguta.com",145],["rytmp3.io",145],["send.cm",145],["seriesite.net",145],["seriezloaded.com.ng",145],["serijehaha.com",145],["shrugemojis.com",145],["siteapk.net",145],["siteflix.org",145],["sitegames.net",145],["sitekeys.net",145],["sitepdf.com",145],["sitetorrent.com",145],["softwaresite.net",145],["sportbar.live",145],["sportkart1.xyz",145],["ssyoutube.com",145],["stardima.com",145],["stream4free.live",145],["subdl.com",145],["superapk.org",145],["supermovies.org",145],["tainio-mania.online",145],["talaba.su",145],["tamilguns.org",145],["tatabrada.tv",145],["theflixer.tv",145],["thememypc.net",145],["thetechzone.online",145],["thripy.com",145],["tonnestreamz.xyz",145],["torrentdosfilmes.eu",145],["travelplanspro.com",145],["turcasmania.com",145],["tusfiles.com",145],["tvonlinesports.com",145],["ultramovies.org",145],["uploadbank.com",145],["urdubolo.pk",145],["vidspeeds.com",145],["vumoo.to",145],["warezsite.net",145],["watchmovies2.com",145],["watchmoviesforfree.org",145],["watchofree.com",145],["watchsite.net",145],["watchsouthpark.tv",145],["watchtvch.club",145],["web.livecricket.is",145],["webseries.club",145],["worldcupstream.pm",145],["y2mate.com",145],["youapk.net",145],["youtube4kdownloader.com",145],["yts-subs.com",145],["haho.moe",146],["nicy-spicy.pw",147],["fap-guru.cam",148],["novelmultiverse.com",149],["mylegalporno.com",150],["thecut.com",153],["novelism.jp",154],["alphapolis.co.jp",155],["okrzone.com",156],["momo-net.com",157],["maxgaming.fi",157],["guiasaude.info",157],["felizemforma.com",157],["game3rb.com",158],["javhub.net",158],["thotvids.com",159],["berklee.edu",160],["rawkuma.com",161],["imeteo.sk",162],["zive.cz",163],["youtubemp3donusturucu.net",164],["surfsees.com",166],["feyorra.top",167],["claimtrx.com",167],["vivo.st",[168,169]],["katflys.com",170],["alueviesti.fi",172],["kiuruvesilehti.fi",172],["lempaala.ideapark.fi",172],["olutposti.fi",172],["urjalansanomat.fi",172],["joyhints.com",173],["tainhanhvn.com",175],["titantv.com",176],["3cinfo.net",177],["transportationlies.org",178],["cocomanga.com",179],["mcleaks.net",180],["explorecams.com",180],["chillx.top",181],["playerx.stream",181],["m.liputan6.com",183],["stardewids.com",[183,206]],["ingles.com",184],["spanishdict.com",184],["rureka.com",185],["bunkr.is",186],["amateur8.com",187],["freeporn8.com",187],["maturetubehere.com",187],["embedo.co",188],["corriere.it",189],["oggi.it",189],["2the.space",190],["apkcombo.com",192],["sponsorhunter.com",193],["coinscap.info",194],["cryptowidgets.net",194],["greenenez.com",194],["insurancegold.in",194],["webfreetools.net",194],["wiki-topia.com",194],["bitcotasks.com",194],["videolyrics.in",194],["manofadan.com",194],["cempakajaya.com",194],["carsmania.net",194],["carstopia.net",194],["coinsvalue.net",194],["cookinguide.net",194],["freeoseocheck.com",194],["makeupguide.net",194],["tagecoin.com",194],["doge25.in",194],["king-ptcs.com",194],["claimcoins.site",194],["cryptosh.pro",194],["cryptoearnfaucet.com",194],["coinsrev.com",194],["ohionowcast.info",194],["wiour.com",194],["maqal360.com",194],["go.freetrx.fun",194],["bitzite.com",194],["eftacrypto.com",194],["fescrypto.com",194],["novelssites.com",195],["haxina.com",196],["cryptofenz.xyz",196],["upshrink.com",197],["torrentmac.net",198],["moviezaddiction.icu",199],["dlpanda.com",200],["socialmediagirls.com",201],["einrichtungsbeispiele.de",202],["weadown.com",203],["molotov.tv",204],["freecoursesonline.me",205],["dropnudes.com",205],["ftuapps.dev",205],["onehack.us",205],["paste.bin.sx",205],["privatenudes.com",205],["commands.gg",206],["smgplaza.com",207],["autosport.com",[208,209]],["motorsport.com",[208,209]],["freepik.com",210],["filepress.lol",211],["pinloker.com",212],["sekilastekno.com",212],["diyphotography.net",213],["bitchesgirls.com",214],["shopforex.online",215],["ltc25.in",[216,217]],["yesmangas1.com",218],["programmingeeksclub.com",219],["hlspanel.xyz",220],["easymc.io",221],["shoot-yalla.tv",222],["diendancauduong.com",223],["parentcircle.com",224],["h-game18.xyz",225],["nopay.info",226],["wheelofgold.com",227],["shortlinks.tech",228],["recipahi.com",229],["mrproblogger.com",231],["themezon.net",231],["perchance.org",232],["skill4ltu.eu",233],["freepikdownloader.com",234],["freepasses.org",235],["iusedtobeaboss.com",236],["blogtruyenmoi.com",237],["repretel.com",238],["ylilauta.org",239]]);

const entitiesMap = new Map([["kisscartoon",1],["kissasian",8],["ganool",8],["pirate",8],["piratebay",8],["pirateproxy",8],["proxytpb",8],["thepiratebay",8],["limetorrents",[10,18]],["king-pes",10],["depedlps",10],["komikcast",10],["idedroidsafelink",10],["links-url",10],["eikaiwamastery",10],["ak4eg",10],["xhamster",11],["xhamster1",11],["xhamster5",11],["xhamster7",11],["rexporn",11],["movies07",11],["pornocomics",11],["streanplay",12],["steanplay",12],["liferayiseasy",[13,14]],["pahe",18],["yts",18],["tube8",18],["topeuropix",18],["moviescounter",18],["torrent9",18],["desiremovies",18],["movs4u",18],["uwatchfree",18],["hydrax",18],["4movierulz",18],["projectfreetv",18],["arabseed",18],["btdb",[18,61]],["skymovieshd",18],["pagalmovies",18],["7starhd",[18,84]],["1jalshamoviez",18],["9xupload",18],["bdupload",18],["desiupload",18],["rdxhd1",18],["world4ufree",18],["streamsport",18],["rojadirectatvhd",18],["userload",18],["freecoursesonline",20],["lordpremium",20],["todovieneok",20],["novablogitalia",20],["anisubindo",20],["btvsports",20],["adyou",21],["fxporn69",23],["watchseries",26],["pornktube",26],["sexwebvideo",31],["pornomoll",31],["mejortorrent",34],["mejortorrento",34],["mejortorrents",34],["mejortorrents1",34],["mejortorrentt",34],["grantorrent",34],["gntai",34],["allcalidad",[34,50]],["gsurl",35],["mimaletadepeliculas",36],["burningseries",37],["dz4soft",38],["yoututosjeff",38],["ebookmed",38],["lanjutkeun",38],["novelasesp",38],["singingdalong",38],["doujindesu",38],["xmovies8",41],["mega-dvdrip",47],["peliculas-dvdrip",47],["desbloqueador",49],["newpelis",[50,59]],["pelix",[50,59]],["khatrimaza",50],["camwhores",52],["camwhorestv",52],["uproxy",52],["nekopoi",56],["mirrorace",65],["dbupload",73],["nuvid",74],["mixdrp",75],["asiansex",77],["japanfuck",77],["japanporn",77],["teensex",77],["vintagetube",77],["xxxmovies",77],["zooqle",81],["hdfull",85],["mangamanga",86],["streameast",88],["thestreameast",88],["vev",92],["vidop",92],["zone-telechargement",94],["megalink",101],["gmx",102],["mega1080p",107],["9hentai",110],["gaypornhdfree",117],["cinemakottaga",117],["privatemoviez",117],["apkmaven",117],["popcornstream",119],["moviessources",142],["goload",[144,145]],["0gomovie",145],["0gomovies",145],["123moviefree",145],["1kmovies",145],["1madrasdub",145],["1primewire",145],["2embed",145],["2madrasdub",145],["2umovies",145],["4anime",145],["9xmovies",145],["altadefinizione01",145],["anitube",145],["atomixhq",145],["beinmatch",145],["brmovies",145],["cima4u",145],["clicknupload",145],["cmovies",145],["couchtuner",145],["cricfree",145],["crichd",145],["databasegdriveplayer",145],["dood",145],["f1stream",145],["faselhd",145],["fbstream",145],["file4go",145],["filemoon",145],["filepress",145],["filmlinks4u",145],["filmpertutti",145],["filmyzilla",145],["fmovies",145],["french-stream",145],["fsapi",145],["fzlink",145],["gdriveplayer",145],["gofilms4u",145],["gogoanime",145],["gomoviefree",145],["gomoviz",145],["gowatchseries",145],["hdmoviefair",145],["hdmovies4u",145],["hdmovies50",145],["hdmoviesfair",145],["hh3dhay",145],["hindilinks4u",145],["hotmasti",145],["hurawatch",145],["klmanga",145],["klubsports",145],["libertestreamvf",145],["livetvon",145],["manga1000",145],["manga1001",145],["mangaraw",145],["mangarawjp",145],["mlbstream",145],["motogpstream",145],["movierulz",145],["movies123",145],["movies2watch",145],["moviesden",145],["moviezaddiction",145],["myflixer",145],["nbastream",145],["netcine",145],["nflstream",145],["nhlstream",145],["onlinewatchmoviespk",145],["pctfenix",145],["pctnew",145],["pksmovies",145],["plyjam",145],["plylive",145],["pogolinks",145],["popcorntime",145],["poscitech",145],["prmovies",145],["rugbystreams",145],["shahed4u",145],["sflix",145],["sitesunblocked",145],["socceronline",145],["solarmovies",145],["sportcast",145],["sportskart",145],["sports-stream",145],["streaming-french",145],["streamers",145],["streamingcommunity",145],["strikeout",145],["t20cup",145],["tennisstreams",145],["toonanime",145],["tvply",145],["ufcstream",145],["uptomega",145],["uqload",145],["vudeo",145],["vidoo",145],["vipbox",145],["vipboxtv",145],["vipleague",145],["viprow",145],["yesmovies",145],["yomovies",145],["yomovies1",145],["yt2mp3s",145],["guardaserie",151],["cine-calidad",152],["milfnut",157],["videovard",171],["softonic",191],["bg-gledai",205],["gledaitv",205],["motchill",230]]);

const exceptionsMap = new Map([["mentor.duden.de",[87]]]);

/******************************************************************************/

function addEventListenerDefuser(
    type = '',
    pattern = ''
) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    const reType = safe.patternToRegex(type);
    const rePattern = safe.patternToRegex(pattern);
    const log = shouldLog(extraArgs);
    const debug = shouldDebug(extraArgs);
    const trapEddEventListeners = ( ) => {
        const eventListenerHandler = {
            apply: function(target, thisArg, args) {
                let type, handler;
                try {
                    type = String(args[0]);
                    handler = String(args[1]);
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
        'Error': self.Error,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'jsonParse': self.JSON.parse.bind(self.JSON),
        'jsonStringify': self.JSON.stringify.bind(self.JSON),
        'log': console.log.bind(console),
        uboLog(...args) {
            if ( args.length === 0 ) { return; }
            if ( `${args[0]}` === '' ) { return; }
            this.log('[uBO]', ...args);
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate === true && pattern.startsWith('!') === false);
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
        patternToRegex(pattern, flags = undefined) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                return new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), flags);
            }
            try {
                return new RegExp(match[1], match[2] || flags);
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

// Not Firefox
if ( typeof wrappedJSObject !== 'object' ) {
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
