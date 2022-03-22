let Old = '</body>'
let New = '<script type="text/javascript" src="//limbopro.com/Adguard/bde4.js"></script><link rel="stylesheet" href="https://limbopro.com/CSS/bde4.css" type="text/css"></body>';
let body = $response.body
.replace(Old, New);
$done({body});