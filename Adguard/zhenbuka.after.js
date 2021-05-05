
setTimeout(()=>{
var newstyle="img,#md112,#yb112,#ad01 {display:none !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
},000);

setTimeout(()=>{
var newstyle="img,#md112,#yb112,#ad01 {display:block !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
},4500);

setTimeout(()=>{
var newstyle="img,#md112,#yb112,#ad01 {display:none !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)
},5500);