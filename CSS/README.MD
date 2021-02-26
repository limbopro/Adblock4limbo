

## 使用开发者工具找到相关CSS名称
### 参考资料及可能使用到的工具说明
1. CSS是啥子：https://developer.mozilla.org/zh-CN/docs/Web/CSS
2. 谷歌浏览器开发者工具：https://developers.google.com/web/tools/chrome-devtools/
3. 编辑样式 https://developers.google.com/web/tools/chrome-devtools/inspect-styles/edit-styles
4. CSS 隐藏元素的八种方法：https://juejin.cn/post/6844903456545701901
5. CSS（层叠样式表）：https://developer.mozilla.org/zh-CN/docs/Web/CSS
6. 使用谷歌浏览器开发者工具调整网页CSS样式以屏蔽广告（视频）
：https://www.youtube.com/watch?v=uObW0Gr9QfA

## 制作CSS文件

最后我们将相关广告元素对应的样式进行隐藏，用到的代码为 `display: none !important;`；

https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/CSS/Adblock4limbo.css 

其内容如下；

```
.myui-ra-container {display: none !important;}
#aaaDiv2 {width: 0% !important;}
#aaaDiv {width: 0% !important;}
#alqZmizfYfnG {display: none !important;}
#arqZmizfYfnG {display: none !important;}
img {display: none !important;}
```

## 制作QuantumultX css.adblock.conf 文件（重写引用）

https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/CSS/css.adblock.conf 

其内容如下：

```
hostname = www.nfmovies.com
#www.nfmovies.com adsblock by css
^https:?/\/www.nfmovies.com.* url response-body <head> response-body <head><link rel="stylesheet" href="https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/CSS/Adblock4limbo.css" type="text/css">
```

## 引用css.adblock.conf
1.打开 Quantumult X - 点击右下角三菱按钮 - 找到 重写 - 点击 引用 ，粘贴以下 URL；

https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/CSS/css.adblock.conf 

2.开启重写按钮/MITM按钮，配置下证书，食用；

3.去广告效果参考：https://t.me/limboprossr/2222

以上。
