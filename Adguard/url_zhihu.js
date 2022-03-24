let oldHead = '(\r\n)User-Agent:.+(\r\n)'
let newHead = '$1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1 Quark/604.1 T7/10.7 SearchCraft/2.7.7 (Baidu; P1 9.0.0)$2'
let headers = $request.headers
.replace(oldHead, newHead);
$done({headers});