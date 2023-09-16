function remove_ads() {

    // 屏蔽微量元素
    var exosrc_Ele = [
        "a[target='_blank']",
        "div.ads_video_overlay_mobile",
        "div[class*='close']",
        "iframe[src*='xlviirdr']"
        //"img"
    ]

    var exosrc_Ele_Catch = document.querySelectorAll(exosrc_Ele);
    console.log(exosrc_Ele.length)
    for (exosrc = 0; exosrc < exosrc_Ele_Catch.length; exosrc++) {
        exosrc_Ele_Catch[exosrc].setAttribute("style", "display:none !important");
    }

}


// 定时检测按钮是否丢失
setInterval(function () {

    var _tx = "#remove_ads_t";
    var check_button = document.querySelectorAll(_tx);
    if (check_button.length <= 0) {
        var button = document.createElement("button");
        button.innerHTML = "移除广告";
        button.setAttribute("onclick", "remove_ads()");
        button.setAttribute("id", "remove_ads_t");
        button.setAttribute("style", "transition: .3s linear;border-radius: 10px;background: #F9F0DA;z-index:114154114154114154;position:fixed;width:210px;height:30px;font-weight:bold");
        var _where2add = "div.header_root";
        var _here = document.querySelectorAll(_where2add);
        _here[0].appendChild(button);
    }

}, 2000)

setInterval(function () {
    var first_Ele = ["video"];
    var first_Ele_Catch = document.querySelectorAll(first_Ele);
    first_Ele_Catch[0].play()
}, 1000)



remove_ads()