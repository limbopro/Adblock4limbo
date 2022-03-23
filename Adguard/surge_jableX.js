var Oldone = '</body>'
var Newone = '<link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/jableX.css\" type=\"text/css\"><script type=\"text/javascript\"  src=\"//limbopro.com/Adguard/jableX.js\"></script></body>'
let body = $response.body
.replace(Oldone, Newone);
$done({body});