let eleOne = '<head>'
let newStyle = '<head><link rel=\"stylesheet\" href=\"https://limbopro.com/CSS/18comic.css\" type=\"text/css\">'
var eleTwo = '</body>'
var newJavaScript = '<script type=\"text/javascript\"  async="async" src=\"//limbopro.com/Adguard/18comic.js\"></script></body>'
let body = $response.body
    .replace(eleOne, newStyle);
$done({ body });