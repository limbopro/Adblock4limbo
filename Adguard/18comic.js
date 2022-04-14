document.cookie = "cover=1";
document.cookie = "shunt=1";
document.cookie = "guide=1";

var row = document.querySelectorAll(".row");
row[14].remove()
var iframe = document.querySelector("a > img[style*='90']");
iframe.remove()

// Cloudflare recaptcha 绕过
function cloudflare_recaptchaPass() {
    var title = document.title;
    var key = "Attention";
    var key_2 = "Cloudflare";
    var values = title.search(key);
    var values_2 = title.search(key_2);
    var failed = "0";
    if (values >= failed || values_2 >= failed) {
        window.location.reload();
    }
}