let rHead = '<head>';
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/contentFarm.css">';
let rBody = '</body>';
let newJavaScript = '<script src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
let body = $response.body
.replace(rHead, newStyle)
.replace(rBody, newJavaScript);
$done({body});