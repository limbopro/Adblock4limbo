let Oldone = '</body>'
let Newone = '<link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/18comic.css\" type=\"text/css\"><script type=\"text/javascript\"  src=\"//limbopro.com/Adguard/18comic.js\"></script></body>'
let body = $response.body
.replace(Oldone, Newone);
$done({body});