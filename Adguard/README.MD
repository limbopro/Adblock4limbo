仅做示例使用，不保证日后更新；

完整应用请参阅：https://github.com/limbopro/Adblock4limbo

## 如何提取 Adguard 的JavaScript文件
Adguard For Mac/Windows 用户往下看，且以 https://www.nfmovies.com/ 举例；

1.谷歌浏览器打开 https://www.nfmovies.com/ ，右键显示网页源代码；

```
<!DOCTYPE html>
<html>
	<head>
<meta name="baidu-site-verification" content="CncDigBQlx" />
<title>奈菲影视-永久免费的福利超清影视站，没有套路，完全免费！ - 最新电视剧,最新电影</title>
<meta name="keywords" content="高清，在线观看">
<meta name="description" content="奈菲影视提供电影电视剧在线观看，免费高清高速电影电视剧在线观看。">
<meta charset="UTF-8">
<meta name="renderer" content="webkit|ie-comp|ie-stand">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<script type="text/javascript" nonce="022def44b5104b97a29788dde00" src="//injections.adguard.org?ts=1614058811144&amp;type=content-script&amp;dmn=www.nfmovies.com&amp;app=com.google.Chrome.helper&amp;css=1&amp;js=1&amp;gcss=1&amp;rel=1&amp;rji=1&amp;sbe=0&amp;stealth=1&amp;uag=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTFfMV8wKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODguMC40MzI0LjE4MiBTYWZhcmkvNTM3LjM2"></script>
<script type="text/javascript" nonce="022def44b5104b97a29788dde00" src="//injections.adguard.org?ts=1614058811144&amp;name=Web%20of%20Trust&amp;name=AdGuard%20Popup%20Blocker&amp;name=AdGuard%20Extra&amp;type=user-script"></script><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" href="/templets/default/images/css/all.min.css" type="text/css" lazyload />
<link rel="stylesheet" href="/templets/default/images/css/all2.min.css" type="text/css" lazyload />
...
```

2.找到以 injections.adguard.org 开头的两个 js 文件 URL；

```
<script type="text/javascript" nonce="022def44b5104b97a29788dde00" src="//injections.adguard.org?ts=1614058811144&amp;type=content-script&amp;dmn=www.nfmovies.com&amp;app=com.google.Chrome.helper&amp;css=1&amp;js=1&amp;gcss=1&amp;rel=1&amp;rji=1&amp;sbe=0&amp;stealth=1&amp;uag=TW96aWxsYS81LjAgKE1hY2ludG9zaDsgSW50ZWwgTWFjIE9TIFggMTFfMV8wKSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvODguMC40MzI0LjE4MiBTYWZhcmkvNTM3LjM2"></script>
<script type="text/javascript" nonce="022def44b5104b97a29788dde00" src="//injections.adguard.org?ts=1614058811144&amp;name=Web%20of%20Trust&amp;name=AdGuard%20Popup%20Blocker&amp;name=AdGuard%20Extra&amp;type=user-script"></script><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
```

3.分别打开两个URL，并复制其内容，依次命名为 `nfmovies.js` 和 `user-script.js`；

4.制作QuantumultX 重写.conf 文件

```
hostname = www.nfmovies.com

#www.nfmovies.com adsblock
^https:?/\/www.nfmovies.com.* url response-body <head> response-body <head><script type="text/javascript" nonce="7575a050f63648a69e15f9694a7" src="//raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/nfmovies.js"></script><script type="text/javascript" nonce="7575a050f63648a69e15f9694a7" src="//raw.githubusercontent.com/limbopro/Adblock4limbo/main/Adguard/user-script.js"></script>
```

以上。

