// Cookie 设定及注入
function current() {

    var d = new Date(),
        ear = d.getFullYear(); //获取当前年份 
    onth = d.getMonth(); //获取当前月份（0——11） 
    atex = d.getDate(); //获取当前日期（1——31） 

    if (d.getHours() < 10) {
        ours = "0" + d.getHours()
    }
    else {
        ours = d.getHours(); //获取当前时间（0——23） 
    }

    inutes = d.getMinutes(); //获取当前分钟（0——59）
    //str += d.getSeconds() + '00'; //获取当前秒钟（0——59）
    return ear + "-" + onth + "-" + atex + "%2" + ours + "%3A" + inutes + "%3A" + "01";
}

let strx = "CFWztgFirstShowTime_2899_Cookie = ";
let timex = current();
let total = strx + timex;
document.cookie = total;

// Cloudflare recaptcha 绕过
var websiteTitle = document.title;
var keyword_1 = "Attention";
var keyword_2 = "Cloudflare";
var results_1 = websiteTitle.search(keyword_1);
var results_2 = websiteTitle.search(keyword_2);
var reference_0 = "0";
if (results_1 >= reference_0 || results_2 >= reference_0) {
    window.location.reload();
}