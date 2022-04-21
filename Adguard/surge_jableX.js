
let rHead = '<head>'
let newStyle = '<head><link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/jableX.css\" type=\"text/css\">'
var rBody = '</body>'
var newJavaScript = '<script type=\"text/javascript\" async="async" src=\"//limbopro.com/Adguard/jableX.js\"></script></body>'
let body = $response.body
    .replace(rHead, newStyle)
    .replace(rBody, newJavaScript);
$done({ body });