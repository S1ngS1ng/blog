---
layout: post
title: HammerSpoon - 实现音乐播放的全局键盘控制
date: 2016-12-11 1:10:00
tags: [Tools,HammerSpoon]
---

> 关于 HammerSpoon 的基本介绍，请参考我的[上一篇博文](http://singsing.io/blog/2016/11/27/HammerSpoon-1/)
> 关于本文中提到的 VOX，请点[这里](https://vox.rocks/mac-music-player)

# 概述
由于地区限制和版权原因，不得不忍痛割爱网易云音乐。从那之后便开始寻找一款 MacOS 上**适合自己**的播放器

先说说本篇博客的主角，[VOX](https://vox.rocks/mac-music-player)。作为一个颜控，第一眼确实被它的外观吸引。同时，他们提供一个叫 [LOOP](https://vox.rocks/loop-music-cloud) 的音乐服务，可以简单理解为音乐云盘。用户可以把自己的歌曲上传到 LOOP 提供的云空间，然后就可以通过云或者下载到本地播放了。这个空间是 **"没有上限的!!!".repeat(3)**，至少现在是这样

通过一段时间的调查，做了一个价格、服务方面的横向对比，分享给大家，如有错误欢迎指正：

| 名称 | 价格 (美元/月) | 试用 | 在线/跨平台 | 格式支持 | 无损支持 |
| --- | --- | --- | --- | --- | --- |
| [VOX (LOOP)](https://vox.rocks/mac-music-player) | \$10.99 ~ \$15.99 | 15天免费 | 通过 VOX Free/只支持 MacOS 和 iOS | 绝大部分格式 | 是，需用户上传 |
| [Apple Music](http://www.apple.com/music/) | $9.99 | 3个月免费 | 是/需要 iTunes | AAC, MP3 | 否，但接近无损 |
| [Spotify](https://www.spotify.com/) | \$9.99 | $0.99 三个月试用 | 是/全平台 | 320K MP3 (Spotify Premium) | 否 |
| [Google Play Music](https://www.spotify.com/) | \$9.99 | 30天免费 | 是/全平台 | MP3 | 否，上传无损会转为 320K MP3 |
| [TIDAL](tidal.com) | \$9.99/$19.99 | 30天免费 | 是/不支持 Windows | FLAC, MP3 | 需要购买 $19.99 的服务  |
| [Deezer](deezer.com) | \$9.99/$14.99 | 30天免费 | 是/全平台 | MP3 | 需要第三方硬件 |
| [Clementine](https://www.clementine-player.org/) | 免费，开源 | N/A | 否/全平台 | 绝大部分格式 | 是，需用户上传 (支持 Dropbox，Spotify 等) |
| [foobar2000](http://www.foobar2000.org/) | 免费，开源 | N/A | 否/Windows, 安卓，iOS | 绝大部分格式  | 是，需用户上传 |

* Foobar2000 就不用说了，懂的人自然懂，可惜没有 Mac 版，这款软件一直都是资深音乐爱好者首推的神器
* Clementine 则胜在全平台兼容，以及可以读取 Dropbox 之类的网盘，当然前提是你的网盘空间得足够大 （好像不支持百度云。。）
* Deezer 和 TIDAL 一样，提供**在线**的无损音乐播放。虽然他们宣称的总歌曲数比 Google Play 和 Apple Music 都要多，但中文歌曲数量还是太少了。另外，Deezer 需要第三方的硬件 [SONOS](http://www.sonos.com/) 才能提供无损音乐播放服务
* Google Play 其实中文歌不少。当然，肯定是不全的，至于一些小众的歌曲就别指望找到了。播放器网页版中规中矩，本地版，能用肯定是能用，但颜控估计是不会喜欢的
* Spotify，付费用户可以选择高音质，也即是 320K MP3，并不提供无损。其实 Spotify 界面还是不错的，而且跨平台性非常好，甚至 PS4，Bose 音箱都支持
* Apple Music 用起来着实方便，和系统的结合度倒是值得一提，比如，你可以用在 iTunes 找到的歌来当闹钟铃声。英文歌资源非常多，从大众的 Taylor Swift 到小众的 Mono Inc，Bullet For My Valentine 都有，新砖也能找到。中文歌曲方面和 Google Play 差不多，不少，但称不上全（至少很多我爱听的歌没有）。顺便，iTunes 其实支持 FLAC 或者 APE 格式的播放，只是需要安装插件

# HammerSpoon + Whatever
> 软件，没有最好的，只有最适合的

篇幅有限，不得不开启下一个话题。对播放器方面有问题的朋友欢迎在底下留言，大家一起讨论

## HammerSpoon
[上一篇博文](http://singsing.io/blog/2016/11/27/HammerSpoon-1/) 中已经提到，HammerSpoon 不止是窗口管理。它还可以读取系统的 API，可以执行 AppleScript。这两个特性，为我们通过键盘全局操作音乐播放提供了坚实的基础

在 HammerSpoon 环境中，我们只需要如下的 API：

* [hs.osascript.applescript()](http://www.hammerspoon.org/docs/hs.osascript.html#applescript) - 执行 AppleScript。同时， `hs.osascript.javascript()` 也提供了执行 `JavaScript` 的接口
* [hs.hotkey.bind()](http://www.hammerspoon.org/docs/hs.hotkey.html) - 既然是用键盘来控制音乐播放，那么绑定键盘快捷键的方法肯定是必不可少的
* [hs.alert](http://www.hammerspoon.org/docs/hs.alert.html) - 可选，非必备。我是用这个来显示曲目信息的

## AppleScript
### 概述
AppleScript 是苹果公司开发的脚本语言，可以用来控制 MacOS 上运行的程序，也可以写成独立的 Applet

所以，只要我们能获取到 App 的接口，就可以通过 AppleScript 让 App 来搞事情了。举个例子，比如咱们安装了迅雷，迅雷提供了一个开始下载的接口，叫 `startDownload`。这时候，我们只需要这样写 AppleScript：`tell application "迅雷" to startDownload`，然后执行，那么迅雷就可以开始下载了（事实上，迅雷并没有提供这样的接口=。=

AppleScript 的这个语法，其实和英语表达非常接近（接近自然语言），直接翻译过来就是 `告诉应用程序“迅雷”，（让它）开始下载`。很好理解是不是？

### App 接口
那么现在，我们只需要找到应用程序接口，就大功告成了。我们可以在系统里直接查看，步骤如下：

1. 打开这个叫 ScriptEditor 的东西。


