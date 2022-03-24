let rHead = '<head>';
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/contentFarm.css">';
let rBody = '</body>';
let newJavaScript = '<script src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';

/*
let jZhihu1 = 'www.zhihu.com';
let jZhihu2 = 'zhuanlan.zhihu.com';
*/

let xZhihu1 = 'i.zhihu.com';
let xZhihu2 = 'zl.zhihu.com';

let body = $response.body
.replace(/(www\.zhihu\.com)/g, xZhihu1)
.replace(/(zhuanlan\.zhihu\.com)/g, xZhihu2)
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});