let Oldone = '<head>'
let Newone = '<head><link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/18comic.css\" type=\"text/css\">'
let body = $response.body
.replace(Oldone, Newone);
$done({body});