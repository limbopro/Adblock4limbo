var newstyle=".d-block.d-sm-none.text-center,div.sidebar,a[target*='_blank']{display:none !important;} .wrapper,.content-wrapper{overflow-y:hidden; overflow-x:hidden !important;}";
var creatcss=document.createElement("style");
creatcss.innerHTML=newstyle;
document.getElementsByTagName('head')[0].appendChild(creatcss)