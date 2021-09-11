/*document.cookie = "PHPSESSID=eboatb1p7smvr6ktp7blvflmc1";*/


(function() {
    var z = window.setInterval,
        needle = '{{1}}',
        delay = parseInt('{{2}}', 10),
        boost = parseFloat('{{3}}');
    if ( needle === '' || needle === '{{1}}' ) {
        needle = '.?';
    } else if ( needle.charAt(0) === '/' && needle.slice(-1) === '/' ) {
        needle = needle.slice(1, -1);
    } else {
        needle = needle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
    needle = new RegExp(needle);
    if ( isNaN(delay) || !isFinite(delay) ) {
        delay = 1000;
    }
    if ( isNaN(boost) || !isFinite(boost) ) {
        boost = 0.05;
    }
    if ( boost < 0.02 ) {
        boost = 0.02;
    }
    if ( boost > 50 ) {
        boost = 50;
    }
    window.setInterval = function(a, b) {
        if ( b === delay && needle.test(a.toString()) ) {
            b *= boost;
        }
        return z.apply(this, arguments);
    }.bind(window);
})();

var newstyle="div.myui-ra-container.container,[src*='banner'],div[id*=al],div>img,body>div#playerCnt{display:none !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)

/*
var imgtag = document.createElement("img");
var hoop = document.querySelectorAll(".myui-panel_hd");
hoop[6].innerHTML= "<a href=https://limbopro.xyz/archives/12904.html target=_blank><img src=https://limbopro.xyz/usr/uploads/2021/03/2497805607.png width=100% height=auto></a>";
 */

 // Based on uAssets
 // License: https://github.com/uBlockOrigin/uAssets/blob/master/LICENSE
 // https://firmware.koolshare.cn/binary/swf/