// 从哪里来 回到哪里去
var ref ='';
if (document.referrer.length > 0) {
ref = document.referrer;
console.log(ref)
setTimeout("window.location.href = ref", 1000);
}
