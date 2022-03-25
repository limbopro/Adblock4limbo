/* 禁止新页面跳转 */

var _blank = document.querySelectorAll("a");
var i;
for (i = 0; i < _blank.length; i++) {
_blank[i].target = "_self";
}

var _tblank = document.querySelectorAll("img");
var i;
for (i = 0; i < _tblank.length; i++) {
_tblank[i].style.display = "none";
}