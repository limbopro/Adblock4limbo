// 禁止新标签页跳转

/*
var _blank = document.querySelectorAll("a");
var i;
for (i = 0; i < _blank.length; i++) {
_blank[i].target = "_self";
}
*/

// 禁止跳转商店

var str = document.getElementById("respect-footer").innerHTML;
var regx = /https?:\/\/.*?itunes.*?\?mt=8/g
var strreplace = str.replace(regx, "https://zhihu.baidu.com");
document.getElementById("respect-footer").innerHTML = strreplace;


var x = "Powered by limbopro"
document.getElementById("bottom").innerHTML = x