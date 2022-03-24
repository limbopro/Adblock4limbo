let rHead = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/zhihu.css" type="text/css">'
let rBody = '</body>'
let newJavaScript = '<script type="text/javascript" src="//limbopro.com/Adguard/zhihu.js"></script></body>';
let body = $response.body
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});


/*
let jZhihu1 = 'www.zhihu.com';
let jZhihu2 = 'zhuanlan.zhihu.com';
let xZhihu1 = 'i.zhihu.com';
let xZhihu2 = 'zl.zhihu.com';
let body = $response.body
    .replace(/(www\.zhihu\.com)/g, xZhihu1)
    .replace(/jZhihu2/g, xZhihu2);
$done({body});
*/