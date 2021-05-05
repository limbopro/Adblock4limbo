/*document.body.innerHTML = document.body.innerHTML.replace(/15000/gi, "100");*/

var img = document.querySelectorAll(".stui-pannel-box.clearfix");

/*
brdex[0].style.display = "none";
brdex[2].style.display = "none";
*/

const arr = ["0", "2"];
for (let i of arr) {
img[i].style.display = "none";
}