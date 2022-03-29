let rHead = '<head>';
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/contentFarm.css">';
let rBody = '</body>';
let newJavaScript = '<script async="async" src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';

/*
let jZhihu1 = 'www.zhihu.com';
let jZhihu2 = 'zhuanlan.zhihu.com';
*/

/*
let xZhihu1 = 'mt.zhihu.com';
let xZhihu2 = 'zl.zhihu.com';
*/

//let xZhihu1 = 'mt.zhihu.com/q/';
//let xZhihu2 = 'mt.zhihu.com/topix/';
//let xZhihu3 = 'zl.zhihu.com/x';

let body = $response.body
//.replace(/(www\.zhihu\.com\/(question)\/)/g, xZhihu1)
//.replace(/(www\.zhihu\.com\/(topic)\/)/g, xZhihu2)
//.replace(/(zhuanlan\.zhihu\.com\/p)/g, xZhihu3)
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});