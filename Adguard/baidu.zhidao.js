/* 禁止新页面跳转 */

var _blank = document.querySelectorAll("a");
var i;
for (i = 0; i < _blank.length; i++) {
_blank[i].target = "_self";
}

/* 延迟1秒中清除广告元素以此避免bde4反屏蔽检测 */

/*

setTimeout(()=>{
var newstyle="a[target*=_new] {display:none !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
},500);
*/