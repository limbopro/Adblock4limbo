var imax = {
    css: {
        javlibrary: ".menutext.whenmobile {top:90px;z-index:114;} a[href*='redirect'] {display:none!important} #toplogo {height:64px} .videothumblist .videos {min-width:auto;}.titlebox.whenmobile{width:250px} #topmenu.whenmobile {height:70px;} .searchbar.whenmobile{right:2px}  div.videothumblist.whenmobile {overflow:scroll!important;overflow-x:hidden!important;} div#rightcolumn.whenmobile {width:300px} #rightcolumn {right:90px} #leftmenu {width:90px; position:fixed;} div#content {width:auto !important} body.main { min-width: auto; width:auto !important} iframe,img[src*='gif'] , td.advsearch {display:none!important;pointer-events: none !important;}",
    }
}

if (/\b(https:\/\/www.javlibrary.com\/.*?)(\/videoreviews.php)(\?.*)(&mode=2)\b/i.test(window.location.href.toLowerCase())) {
    console.log(window.location.href.toLowerCase())
    let url_jav_rewrite = window.location.href.toLowerCase().replace(/(videoreviews.php)/i, '').replace(/(&mode=2)/i, '')
    console.log(url_jav_rewrite)
    window.location.replace(url_jav_rewrite)
}

function javlibrary() {
    // '#topmenu', 'div.menutext', '.searchbar',
    css_adsRemove(imax.css.javlibrary);
    var target_ = ['#rightcolumn', '.videothumblist', '.titlebox', '.menutext']

    if (window.innerWidth < 650) {
        console.log("现在执行缩小任务")
        function ifAdd(target) {
            if (document.querySelectorAll(target)[0]) {
                document.querySelectorAll(target)[0].classList.add('whenmobile')
            }
        }
        target_.forEach(ifAdd);
        if (document.querySelector('div#rightcolumn')) {
            var parentElement = document.querySelector('div#rightcolumn')
            if (document.querySelectorAll("td[style='vertical-align: top;']")[1]) {
                var child = document.querySelectorAll("td[style='vertical-align: top;']")[1];
            }
            if (document.querySelector('div.socialmedia')) {
                var insertBeforethisgay = document.querySelector('div.socialmedia');
            }

            if ((child) && (parentElement) && (insertBeforethisgay)) {
                parentElement.insertBefore(child, insertBeforethisgay)
            }
            document.querySelectorAll('td.t>div').forEach((x) => {
                x.style.width = 'auto';

            })
        }

        if (document.querySelector('div#video_title')) {
            document.querySelector('#rightcolumn').style.width = window.innerWidth - 90 + "px"
            document.querySelector('div#video_favorite_edit').style.width = '250px'
        }
    } else {
        console.log("现在执行扩大任务")
        if (document.querySelector('div#video_title')) {
            document.querySelector('#rightcolumn').style.width = window.innerWidth + "px"
            document.querySelector('div#video_favorite_edit').style.width = 'auto'
        }
        function ifRemove(target) {
            if (document.querySelectorAll(target)[0]) {
                document.querySelectorAll(target)[0].classList.remove('whenmobile')
            }
        }
        target_.forEach(ifRemove);
    }
}

javlibrary(); // 2333

zjpl()
function zjpl() {
    setTimeout(() => { // 最佳评论页 调换位置
        javlibrary();
        if (document.querySelectorAll('td.info')[0]) {
            document.querySelectorAll('td.info').forEach((x) => {
                x.style.width = "60px"
                x.querySelectorAll('*').forEach((y) => {
                    //     y.style.width = "60px"
                })
            })

            var ff = document.querySelectorAll("table.comment > tbody > tr");
            for (i = 0; i < ff.length; i++) {
                ff[i].insertBefore(ff[i].querySelectorAll('td')[1], ff[i].querySelectorAll('td')[0])
            }
        }
    }, 1500)
}


xqy();
function xqy() {
    setTimeout(() => { // 番号详情页添加番号搜索等操作
        javlibrary();
        if (document.querySelector('tr td.text')) {
            var code = document.querySelector('tr td.text').textContent;
            ele_dynamicAppend("#video_id > table > tbody", "onclick", "复制番号", "margin-left: 5px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px;" + "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd !important; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;", "", "javlibraryx", 3, "button")
            ele_dynamicAppend("#video_id > table > tbody", "target", "搜索番号", "margin-left: 5px; margin-top: 5px; position: static; font-size: smaller !important; background: #2563eb !important; margin-right: 5px;" + "padding: 6px 6px 6px 6px; display: inline-block; color: white;z-index: 114154 !important; border-right: 6px solid #38a3fd !important; border-left: #292f33 !important; border-top: #292f33 !important; border-bottom: #292f33 !important; background: #2563eb; border-radius: 0px 0px 0px 0px; font-weight: 800 !important; text-align: right !important;", "", "javlibrarysearch", 4, "a")
            ele_dynamicAppend("#video_id > table > tbody", "onclick", "", "", "", "copy", 2, "input");
            document.getElementById('copy').value = code;
            document.getElementById('javlibraryx').addEventListener('click', () => {
                copyText("copy", "javlibraryx", "复制番号")
            })

            // 为番号搜索添加素材

            document.querySelector("#javlibrarysearch").addEventListener('click', () => {
                if (document.querySelector("#searchbyGoogle") || null === document.querySelector("#searchbyGoogle")) {
                    open_googlesearch_iframe();
                }
            })

            if ((/\b(gsc.tab)\b/i.test(document.location.href.toLowerCase()))) {
                var jav_url = document.location.href.toLowerCase();
                var regexp_jav = /(.*)(#gsc.*)/;
                var jav_url_right = jav_url.replace(regexp_jav, '$1' + "#gsc.tab=0&gsc.q=" + code + "&gsc.sort=");
                document.querySelector('#javlibrarysearch').href = jav_url_right;
                document.querySelector('#javlibrarysearch').target = '_self'
                console.log(jav_url_right)
            } else {
                var jav_url = document.location.href.toLowerCase();
                var jav_url_right = jav_url + "#gsc.tab=0&gsc.q=" + code + "&gsc.sort=";
                document.querySelector('#javlibrarysearch').href = jav_url_right;
                document.querySelector('#javlibrarysearch').target = '_self'
                console.log(jav_url_right)
            }
        }
    }, 1000)
}

// 动态创建引用内部资源 内嵌式样式 内嵌式脚本
function css_adsRemove(newstyle, delaytime, id) {
    setTimeout(() => {
        var creatcss = document.createElement("style");
        creatcss.id = id;
        creatcss.innerHTML = newstyle;
        document.getElementsByTagName('head')[0].appendChild(creatcss)
        console.log("CSS样式新增完毕！");
    }, delaytime);
}