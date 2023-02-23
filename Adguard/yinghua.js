/*
var body = $response.body;
body = body.replace(/[\s\S](?=<script>[\s\S]?var _hmt)/g, '');
$done(body);
*/

let regx_0 = 'navigator.platform';
let string_0 = 'fuckAds';
let regx_1 = '<head>';
let string_1 = '<head>\
    <link rel="stylesheet" href="https://limbopro.com/CSS/Adblock4limbo.user.css" type="text/css" />\
    <script type="text/javascript" async="async" src="https://limbopro.com/Adguard/Adblock4limbo.user.js"></script>'
let body = $response.body.replace(regx_0, string_0).replace(regx_1, string_1)
$done({ body });