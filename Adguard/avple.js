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
var rTitle = document.title;
var rKeyword = "Attention";
var rKeyword2 = "Cloudflare";
var rValues = rTitle.search(rKeyword);
var rValues2 = rTitle.search(rKeyword2);
var rFalse = "0";
if (rValues >= rFalse || rValues2 >= rFalse) {
    window.location.reload();
}