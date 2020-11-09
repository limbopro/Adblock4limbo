# Adblock4limbo
计划始于 11.01.2020；毒奶去广告计划（稳定版）For QuantumultX（11.05.2020），本计划会长期更新，以适应未来更多需要；

## 电报讨论群组
加入[群组](https://t.me/Adblock4limbo)，讨论交流为我们贡献你的力量；

1. 哪些网站**价值很大广告也很多**，请告诉我们；
2. 帮助我们测试**新的去广告规则**是否普适有效；
3. 如有任何疑问请在本群反馈；

## 使用方法

1. 分流引用 http://limbopro.xyz/Adblock4limbo.list 
2. 重写引用 http://limbopro.xyz/Adblock4limbo.conf
3. 然后配置好证书📄（如已配置可忽略）
4. 如仍有广告请清除浏览器缓存后重试

## 去广告列表
**目前可去除以下10个视频/动漫/漫画网站广告(内页悬浮广告及片头广告**，请重写更新`重写`/`分流规则`后食用；去广告效果可参阅：[我的Twitter](https://twitter.com/limboprossr/status/1319882990197960704)；

<details>
<summary>展开查看去广告列表</summary>

|    类型    |    网站名称     |          网站地址           |        备注         |
| :--------: | :-------------: | :-------------------------: | :-----------------: |
|  在线影视  |    奈菲影视     |  https://www.nfmovies.com/  | 完美屏蔽广告/无弹窗 |
|  在线影视  |    低端影视     |      https://ddrk.me/       | 完美屏蔽广告/无弹窗 |
|  在线影视  |     片库网      |    https://m.pianku.me/     | 完美屏蔽广告/无弹窗 |
|  在线影视  |     嘀哩哩      |  https://www.dililitv.com/  | 完美屏蔽广告/无弹窗 |
|  在线漫画  |   COCOMANHUA    | https://www.cocomanhua.com/ |    无广告/有弹窗    |
| H漫画/连载 | 喵紳士NyaHentai |  https://zh.nyahentai.me/   |    无广告/有弹窗    |
|  在线动漫  |    樱花动漫     |      http://m.yhdm.io/      | 完美屏蔽广告/无弹窗 |
|     H      |     Pornhub     |  https://www.pornhub.com/   | 完美屏蔽广告/无弹窗 |
|     H      |     Netflav     |    https://netflav.com/     | 完美屏蔽广告/无弹窗 |
|     H      |      NSFW       |      https://jable.tv/      | 完美屏蔽广告/无弹窗 |

</details>

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
#https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/AdRule.list, tag=野比（稳定版）, force-policy=reject, enabled=false
#https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block.txt, tag=野比(4W+), force-policy=reject, enabled=false
https://raw.githubusercontent.com/NobyDa/ND-AD/master/QuantumultX/AD_Block_Plus.txt, tag=野比(6W+), force-policy=reject, enabled=true

[rewrite_remote]
http://limbopro.xyz/Adblock4limbo.conf, tag=毒奶特供, enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/YouTubeAds.conf, tag=DivineEngine (Youtube AdsBlock), enabled=true
https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf, tag=DivineEngine (Advertising), enabled=true
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Rewrite_lhie1.conf, tag=NoByDa（lhie1 Rewrite）, enabled=true
https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/Js.conf, tag=NoByDa（NoByDa Rewrite）, enabled=true

```


## 我们同样出了教程

1. [自己动手利用QuantumultX 屏蔽任意网站广告](https://limbopro.xyz/archives/12782.html)
2. [正则表达式30分钟入门教程](https://deerchao.cn/tutorials/regex/regex.htm)
3. [在线正则表达式测试](https://tool.oschina.net/regex/)
4. [毒奶预配置文件 For Quantumult X (懒人一键配置)](https://github.com/limbopro/Profiles4limbo)
5. [Tiktok 免拔卡解锁](https://limbopro.xyz/archives/3629.html)

## 我们的其他项目
1. [机场专线-适用于机场（域名及其订阅）的专属分流规则](https://github.com/limbopro/Profiles/tree/master/limbopro)；

## 进阶资料
 EasyList China
 [已知的 Adblock Plus 過濾條件集](https://adblockplus.org/zh_TW/subscriptions)
 [AdGuard 过滤器](https://adguard.com/zh_cn/blog/adguard-filters.html)

## 取得联系

- 如有疑问或有效反馈可联系  [@limboprobot](https://t.me/limboprobot)
- 部分分规则有参考Adguard 中文过滤器 https://adguard.com/zh_cn/blog/adguard-filters.html (强大如斯

