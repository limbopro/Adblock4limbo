const webList = [
'csdn.net', 
'kknews.cc',
'021shfx.com',
'024ksm.com',
'025pc.cn'
];

for (l = 0; l < webList.length; l++) {
const webSelectors = "a[href*='" + webList[l] + "']";

var huge = document.querySelectorAll( "[data-sokoban-grid]" );
var i;
for (i=0; i< huge.length; i++){

if (huge[i].querySelectorAll( webSelectors ).length  > 0) {
huge[i].style.display = "none";

}
}
}