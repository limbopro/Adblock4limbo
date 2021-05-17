setTimeout(()=>{
var newstyle="#ad_id,[src*=gif],img,#md112,#yb112,#ad01 {display:none !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
},0);

setTimeout(()=>{
var img = document.querySelectorAll(".stui-player__item.clearfix");
const arr = ["1"];
for (let i of arr) {
img[i].style.display = "none";
}
},0);

setTimeout(()=>{
var newstyle="img,#md112,#yb112,#ad01 {display:block !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
},4500);

setTimeout(()=>{
var newstyle="#ad_id,[src*=gif],img,#md112,#yb112,#ad01 {display:none !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
},5500);