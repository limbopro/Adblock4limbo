# Adblock4limbo

## 一些建议

> **Safari爱好者/Windows/Mac用户去广告建议：**
>> - 如果你是 Safari（iOS） 用户，建议安装 [Safari-内容拦截器](https://limbopro.xyz/archives/safari-content-blocker.html)；
>> - 如果你是 Windows/Mac 用户，建议安装 [AdGuard/Adblock 浏览器扩展](https://limbopro.xyz/archives/adguard.html)；
>> - 如果你爱折腾也喜欢用 Chrome（iOS），且拥有QuantumultX，那么毒奶去计划（本计划）非常适合你；
>> - 同时你也可以根据 [自己动手利用QuantumultX 屏蔽任意网页广告](https://limbopro.xyz/archives/12782.html) 教程学习进行去网页广告作业；
>> - 跟AdGuard浏览器扩展等去广告原理大抵相通的，重在理解；


## 去广告原理悉知

> 通过 QuantumultX 提供的重写类型（QX-重写），如 reject / 302 / 307 / request-header / response-body / 实现对网页（HTML）各元素、资源的匹配，禁止加载，替换，插入，删除各类元素；本仓库提供大量的实例参考；

> **你可能需要了解到的知识：**
>> 1. [**正则表达式**：](https://limbopro.xyz/archives/Regular_Expressions.html)
>> 2. [重写类型response-body的用法丨利用 Quantumult X 替换网页元素实现去广告（正则表达式以及开发者工具、调试）](https://limbopro.xyz/archives/12782.html)
>> 3. [前端三剑客学习手记 - HTML/CSS/JavaScript](https://limbopro.xyz/archives/15067.html)

## 毒奶去广告计划
毒奶去广告计划始于 11.01.2020；

> ✅ **效用**：毒奶去广告计划（稳定版）For QuantumultX），仅针对iOS浏览器（Chrome/Safari等）网页广告（Javascript 弹窗横幅等），如Pornhub，奈菲影视，低端影视、真不卡、91美剧网、Jable等，提升观影或网页浏览体验；本计划会长期更新，以适应未来更多需要；如需反馈问题请加入我们的电报讨论组或提交issue；

> ⚠️ **注意事项**！为应对广告屏蔽插件如Adguard等插件浏览器扩展对网站广告的屏蔽，大多数网站都会不定期更新网站页面结构包括但不限于DIV元素位置，类，内容等等；而这些更新极有可能会导出本计划部分屏蔽规则失效，这也正是本计划持续更新的原因，所以请大家务必加入电报讨论群组，适时为我们提供使用反馈；

> 🈲️ 另外，按教程配置好后，如若仍发现广告，请按以下方式进行重试：1.在无痕模式下打开该页面，如若仍有广告请进群组反馈（附上该页面截图和链接）；2.请确保你的浏览器没有自带广告屏蔽功能（如Alook浏览器），其内置的过滤器将导致一些冲突；3.建议使用谷歌浏览器，~~Safari~~；

## 电报讨论群组
> 1. 加入[群组](https://t.me/Adblock4limbo)，讨论交流为我们贡献你的力量；
> 2. 哪些网站**价值很大广告也很多且实际已影响到了观影体验**（播放按钮遮挡，弹窗，悬浮GIF等等），请务必告诉我们；
> 3. 帮助我们测试**新的去广告规则**是否普适有效，如某个网站失效页面出现广告请把该页面的链接，页面的截图反馈到群组；
> 4. 如有任何关于本去广告计划的疑问请在本群反馈；

## 毒奶去广告使用方法（配置步骤）

### 毒奶去广告计划分流与重写；（由毒奶博主维护）

1. 分流引用 https://limbopro.com/Adblock4limbo.list （为最新发布，请放置于**分流引用列表**的顶部）

2. 重写引用 https://limbopro.com/Adblock4limbo.conf （为最新发布）

3. 然后配置好证书📄（如已配置可忽略）

4. 如仍有广告请清除浏览器缓存后重试

### NobyDa 去广告分流；（由NobyDa维护）

1. 分流引用 https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block.txt
2. 分流引用 https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block_Plus.txt
3. 如之前尚未添加 [野比去广告](https://github.com/NobyDa/ND-AD)分流规则，请务必添加（毒奶去广告计划基于此前提进行完善）；

<details>
<summary>点此查看分流-引用的正确排序</summary>

> ⚠️ Quantumult X 遵循从上至下的读写顺序，所以去广告分流规则应排在最前，其他需进行代理的分流规则紧随其后，之后在到大陆的分流规则，Final 兜底；

![分流引用排序示例][1]


</details>

### 神机规则 去Youtube App 播放广告；（由花姐维护）

1. 重写引用 https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/YouTubeAds.conf
2. 此重写规则来自神机的仓库 [DivineEngine](https://github.com/DivineEngine/Profiles/tree/master)
3. 如何验证去广告重写是否生效；[参考此处](https://limbopro.xyz/archives/12727.html#操作步骤)；

⚠️ 更多去广告项目：https://github.com/privacy-protection-tools/anti-AD （分流去广告：基于广告资源（URL）所属的完整域名/域名后缀/域名关键字的相关请求进行 Reject），此项目类似 NobyDa 去广告分流项目；可能会有少许冲突，请自行斟酌使用；

## 毒奶去广告计划列表

毒奶去广告计划之 **去广告列表最后更新时间**：06.21.2021 ，请及时更新分流和重写；

⚠️ 如需影视搜索欢迎使用[毒奶搜索](https://limbopro.xyz/search.html) ，如需站点导航欢迎使用[毒奶导航](https://limbopro.xyz/daohang/#);

**目前可去除以下25个视频/动漫/NSFW/BT/漫画网站广告(内页悬浮广告及片头广告**，请重写更新`重写`/`分流规则`后食用；去广告效果可参阅：[我的Twitter](https://twitter.com/limboprossr/status/1319882990197960704)；



|    类型    |    网站名称     |          网站地址           |        备注         | 推荐指数 |
| :--------: | :-------------: | :-------------------------: | :-----------------: | -------- |
|  在线影视  |    奈菲影视     |  https://www.nfmovies.com/  | 完美屏蔽广告/无弹窗 | 优质     |
|  在线影视  |    低端影视     |      https://ddrk.me/       | 完美屏蔽广告/无弹窗 | 优质     |
|  在线影视  |     片库网      |    https://m.pianku.li/     | 完美屏蔽广告/无弹窗 | 优质     |
|  在线影视  |     嘀哩哩      |  https://www.dililitv.com/  | 完美屏蔽广告/无弹窗 | 一般     |
|  在线影视  |     真不卡      |  https://www.zhenbuka.com/  | 完美屏蔽广告/无弹窗 | 一般     |
|  在线影视  |    哔嘀影视     |      https://bde4.cc/       | 完美屏蔽广告/无弹窗 | 较好     |
|  在线影视  |   奈飞星影视    |     https://nfstar.net/     | 完美屏蔽广告/无弹窗 | 一般     |
|  在线美剧  |    91美剧网     |     https://91mjw.com/      | 完美屏蔽广告/无弹窗 | 一般     |
|  在线影视  |     剧迷网      |      https://gimy.tv/       | 完美屏蔽广告/无弹窗 | 较好     |
|  在线影视  |     韩迷TV      |    https://www.hmtv.me/     | 完美屏蔽广告/无弹窗 | 一般     |
|  在线影视  |     日剧TV      |    https://www.riju.tv/     | 完美屏蔽广告/无弹窗 | 一般     |
|  在线漫画  |   COCOMANHUA    | https://www.cocomanhua.com/ |    无广告/有弹窗    | 较次     |
| H漫画/连载 | 喵紳士NyaHentai |  https://zh.nyahentai.me/   | 完美屏蔽广告/无弹窗 | 较好     |
| H漫画/连载 |    禁漫天堂     |    https://18comic.vip/     | 完美屏蔽广告/无弹窗 | 较好     |
| H漫画/连载 |    绅士漫画     |     https://wnacg.org/      | 完美屏蔽广告/无弹窗 | 一般     |
| H韩漫/连载 |    第一韩漫     |   https://www.hptoon.com    | 完美屏蔽广告/无弹窗 | 较次     |
|  在线动漫  |    樱花动漫     |      http://m.yhdm.io/      | 完美屏蔽广告/无弹窗 | 较次     |
|     H      |     Pornhub     |  https://www.pornhub.com/   | 完美屏蔽广告/无弹窗 | 一般     |
|     H      |     Netflav     |    https://netflav.com/     | 完美屏蔽广告/无弹窗 | 较好     |
|     H      |      NSFW       |      https://jable.tv/      | 完美屏蔽广告/无弹窗 | 优质     |
|     H      |      NSFW       |      https://hpjav.tv/      | 完美屏蔽广告/无弹窗 | 较好     |
|     H      |      NSFW       |     https://javfan.one/     | 完美屏蔽广告/无弹窗 | 一般     |
|     H      |      NSFW       |   https://javtsunami.com    | 完美屏蔽广告/无弹窗 | 较次     |
|     H      |      NSFW       |  https://www.porntrex.com   | 完美屏蔽广告/无弹窗 | 较次     |
|     H      |      NSFW       |     https://javbus.com      | 完美屏蔽广告/无弹窗 | 一般     |
|     H      |      NSFW       |     https://91porn.com/     | 完美屏蔽广告/无弹窗 | 较次     |





> 如有特别棒的网站需要去广告，请加入电报[群组](https://t.me/Adblock4limbo)与我们反馈；⚠️务必正确提供网站域名及广告出现页面完整截图（如页面内出现漏点或NSFW请适当打码）；
> 在毒奶去广告计划的基础上，博主推荐大家安装 Safari 内容拦截器，可以屏蔽绝大多数网页广告（for Safari）；[iOS Safari 内容拦截器 - 全方位去网页广告（免费，开源，社区维护）](https://limbopro.xyz/archives/safari-content-blocker.html)

## 相关屏蔽广告分流/重写

0. 在此毒奶对大家的付出表示感谢
1. [NobyDa](https://github.com/NobyDa/Script/tree/master) 脚本仓库（*如删库可替换 NobyDa 为 limbopro，其他同理）
2. [NobyDa-AD](https://github.com/NobyDa/ND-AD) 野比去广告分流；（10w+）
2. [ConnersHua](https://github.com/ConnersHua/Profiles/tree/master) 神机规则（停止更新）
3. [DivineEngine](https://github.com/DivineEngine/Profiles/tree/master) 神机规则（更新中）
3. [limbopro](https://github.com/limbopro/Profiles/tree/master/limbopro) 机场专线
4. [Qure](https://github.com/Koolson/Qure/tree/master/IconSet) 开源图标
5. [chavyleung](https://github.com/chavyleung/scripts) 签到脚本


```
[filter_remote]
https://raw.githubusercontent.com/limbopro/Profiles/master/limbopro/airports.list, tag=机场专线, force-policy=PROXY, enabled=true
http://limbopro.xyz/Adblock4limbo.list, tag=毒奶特供, force-policy=reject, enabled=true
https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block.txt, tag=野比(4W+), force-policy=reject, enabled=false
https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block_Plus.txt, tag=野比(6W+), force-policy=reject, enabled=true

[rewrite_remote]
http://limbopro.xyz/Adblock4limbo.conf, tag=毒奶特供, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/YouTubeAds.conf, tag=DivineEngine (Youtube AdsBlock), enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf, tag=DivineEngine (Advertising), enabled=true
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Rewrite_lhie1.conf, tag=NoByDa（lhie1 Rewrite）, enabled=true
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js.conf, tag=NoByDa（NoByDa Rewrite）, enabled=true

```


## 其他系列教程（或参考）
0. [iOS Safari 内容拦截器 - 全方位去网页广告（免费，开源，社区维护）](https://limbopro.xyz/archives/safari-content-blocker.html)
1. [自己动手利用QuantumultX 屏蔽任意网站广告](https://limbopro.xyz/archives/12782.html)
2. [正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)
3. [在线正则表达式测试](https://tool.oschina.net/regex/)
4. [毒奶预配置文件 For Quantumult X (懒人一键配置)](https://github.com/limbopro/Profiles4limbo)
5. [Mac/Windows 都适用的Adguard - 世界上最高级的广告拦截程序！（屏蔽广告、跟踪器以及安装油猴脚本)](https://limbopro.xyz/archives/adguard.html)
6. [订阅转换 - API - 让你的 Surge/ClashX 重新焕发生机](https://limbopro.xyz/archives/subconverter.html)
7. [Tiktok 免拔卡解锁](https://limbopro.xyz/archives/3629.html)
8. [Jable/Pornhub 视频下载（M3U8）](https://limbopro.xyz/archives/M3U8-Downloader.html)

## 我们的其他项目
1. [机场专线-适用于机场（域名及其订阅）的专属分流规则](https://github.com/limbopro/Profiles4limbo)；

## 进阶资料
 EasyList China
 [已知的 Adblock Plus 過濾條件集](https://adblockplus.org/zh_TW/subscriptions)
 [AdGuard 过滤器](https://adguard.com/zh_cn/blog/adguard-filters.html)

## 取得联系

- 如有疑问或有效反馈可联系  [@limboprobot](https://t.me/limboprobot)
- 部分分规则有参考Adguard 中文过滤器 https://adguard.com/zh_cn/blog/adguard-filters.html (强大如斯

[1]: https://raw.githubusercontent.com/limbopro/Adblock4limbo/main/NobyDa.jpg

