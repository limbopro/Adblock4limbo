// 设置cookie
document.cookie = "pyad=22";

// 去除底部图片广告
var brdex = document.querySelectorAll("brde");
var i;
for (i = 0; i < brdex.length; i++) {
brdex[i].style.display = "none";
}

var divx = document.querySelectorAll("div[id][classname][class]");
var x;
for (x = 0; x < divx.length; x++) {
divx[x].style.display = "none";
}

// 修改视频播放页广告倒计时
var number = document.querySelectorAll("script");
var f;
for (f = 0;f < number.length;f++){
var str = document.querySelectorAll("script")[f].innerHTML;
var n = str.replace("pycount == 0","pycount == 9");
document.querySelectorAll("script")[f].innerHTML=n;
}
