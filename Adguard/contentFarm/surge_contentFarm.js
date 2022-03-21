let Old = '</body>'
let New = '<link rel="stylesheet" href="https://limbopro.com/CSS/contentFarm.css"><script  src="https://limbopro.com/Adguard/contentFarm/contentFarm.js"></script></body>';
let body = $response.body
.replace(Old, New);
$done({body});