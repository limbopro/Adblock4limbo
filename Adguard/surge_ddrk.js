let eleOne = '<head>'
let newStyle = '<head><link rel="stylesheet" href="https://limbopro.com/CSS/ddrk.css" type="text/css">'
var eleTwo = '</body>'
var newJavaScript = '<script type="text/javascript" async="async" src="//limbopro.com/Adguard/ddrk.js"></script><title></body>'
let body = $response.body
    .replace(eleOne, newStyle)
    .replace(eleTwo, newJavaScript);
$done({ body });