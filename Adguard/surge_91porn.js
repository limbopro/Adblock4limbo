let eleOne = '<head>'
let newStyle = '<head><link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/91porn.css\" type=\"text/css\">'
var eleTwo = '</body>'
var newJavaScript = '<script type=\"text/javascript\"  async="async" src=\"//limbopro.com/Adguard/91porn.js\"></script></body>'
let body = $response.body
    .replace(eleOne, newStyle)
    .replace(eleTwo, newJavaScript);
$done({ body });