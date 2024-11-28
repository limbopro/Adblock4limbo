/* 
// 动态引入 crisp 聊天系统
window.$crisp = []; window.CRISP_WEBSITE_ID = "c6676a05-9c7c-4272-be79-c1818f47ad91"; (function () { d = document; s = d.createElement("script"); s.src = "https://client.crisp.chat/l.js"; s.async = 1; d.getElementsByTagName("head")[0].appendChild(s); })();
*/


function crisp_existCheck() {
    var number = 0;
    document.querySelectorAll('script').forEach((x) => {
        if (x.src.match('crisp') !== null) {
            console.log(number += 1);
        }
    })

    return {
        result: (number > 1) ? 'exist' : 'notexist',
        number: number
    }

}

var crisp_obj = crisp_existCheck();

if (crisp_obj.result == 'notexist') {
    // 动态引入 crisp 聊天系统

    console.log("Crisp 聊天💬系统加载中...")
    window.$crisp = []; window.CRISP_WEBSITE_ID = "c6676a05-9c7c-4272-be79-c1818f47ad91"; (function () { d = document; s = d.createElement("script"); s.src = "https://client.crisp.chat/l.js"; s.async = 1; d.getElementsByTagName("head")[0].appendChild(s); })();

} else {

    setTimeout(() => {
        if (document.querySelector('[aria-live=polite].crisp-client') !== null) {
            document.querySelector('[aria-live=polite].crisp-client').classList.add('active')
        }
    }, 2000)

    if (localStorage.getItem('crisp_active_c') == 'byhand' && document.querySelector('#navigation4limbo') !== null && document.querySelector('#navigation4limbo').style.opacity.toString().match('1') !== null) {
        alert('在线聊天系统暂不可用，请通过TG等其他方式联系博主反馈...')
        //localStorage.setItem('crisp_active_c', '')
    }

}

function chatbuttonShow() {
    if (localStorage.getItem('crisp_active_c') == 'byhand') {
        setTimeout(() => {
            if (document.querySelector('[aria-live=polite].crisp-client') !== null) {
                document.querySelector('[aria-live=polite].crisp-client').classList.add('active')
            }
        }, 2000)
    }
}

chatbuttonShow();