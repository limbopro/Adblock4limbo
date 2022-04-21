// Cookie 设定及注入
document.cookie = "zone-cap-3403709=1";
document.cookie = "kt_tcookie=1";
document.cookie = "ts_popunder=1";
document.cookie = "cf_chl_prog=b";

var webList = [
    'r.trwl1.com',
    'r.www.com'
];

for (l = 0; l < webList.length; l++) {
    var webSelectors = "a[href*='" + webList[l] + "']";
    var google_cssSelectors = [".video-img-box.mb-e-20,.col-6.col-sm-4.col-lg-3"];
    var huge = document.querySelectorAll(google_cssSelectors);
    var i;

    for (i = 0; i < huge.length; i++) {
        if (huge[i].querySelectorAll(webSelectors).length > 0) {
            huge[i].style.display = "none";
        }
    }

}

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

/* 自动播放
*/

function auto_play() {
    var first_Ele = ["video[class*='poster'],video[id='player'],video[id='vjsp_html5_api']"];
    var first_Ele_Catch = document.querySelectorAll(first_Ele);
    first_Ele_Catch[0].play()
}

setTimeout(function () {
    auto_play()
}, 1000);


/*
*/