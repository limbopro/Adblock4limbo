/* 禁止新页面跳转 */


var _blank = document.querySelectorAll("a");
var i;
for (i = 0; i < _blank.length; i++) {
_blank[i].target = "_self";
}

/*
 
var newstyle="div[style*='position']{display:none !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
*/

/** content-script - v1.1.23 - 12/14/2020 */

/*
(function(){function d(a){"undefined"!==typeof console&&console.error&&(console.error("Error in AdGuard script"),console.error(a))}var h,l=document.currentScript;if(!l){var m=document.getElementsByTagName("script");l=m[m.length-1]}h=l;
*/