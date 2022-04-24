
var ele = "</body>"
var re = "<script>function button_remove() {selector = \"button[class*='OpenInAppButton']\";var ele = document.querySelectorAll(selector);if (ele.length > 0) {ele[0].remove()}}setInterval(() => { button_remove() }, 100)</script></body>";
let body = $response.body
    .replace(ele, re)
$done({ body });