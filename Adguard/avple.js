
function current() {
    var d = new Date(),
    str = '';
    str += d.getFullYear() + '-'; //获取当前年份 
    str += d.getMonth() + 1 + '-'; //获取当前月份（0——11） 
    str += d.getDate() + '%2'; //获取当前日期（1——31） 
    str += d.getHours() + '%3A'; //获取当前时间（0——23） 
    str += d.getMinutes() + '%3A'; //获取当前分钟（0——59）
    str += '00'; //获取当前秒钟（0——59）  
    //str += d.getSeconds() + '00'; //获取当前秒钟（0——59） 
    return str;
}

//2022-3-22%202%3A27%3A53
//

let strx = "CFWztgFirstShowTime_2899_Cookie = ";
let timex = current();
let total = strx+ timex;
document.cookie = total;
document.cookie = "CFWztgVisitTotal_2899_Cookie=3";