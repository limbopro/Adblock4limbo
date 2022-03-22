let Old = '<head>'
let New = '<head><script type="text/javascript" src="//limbopro.com/Adguard/bde4.play.v3.js"></script><link rel="stylesheet" href="https://limbopro.com/CSS/bde4.css" type="text/css">';
let body = $response.body
.replace(Old, New);
$done({body});