// Cloudflare recaptcha 绕过
var rTitle = document.title;
var rKeyword = "Attention";
var rKeyword2 = "Cloudflare";
var rValues = rTitle.search(rKeyword);
var rValues2 = rTitle.search(rKeyword2);
var rFalse = "0";
if (rValues >= rFalse || rValues2 >= rFalse) {
    window.location.reload();
}