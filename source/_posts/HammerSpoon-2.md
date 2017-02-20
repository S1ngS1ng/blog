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

先说说本篇博客的主角，[VOX](https://vox.rocks/mac-music-player)。作为一个颜控，第一眼确实被它的外观吸引：

  {% asset_img vox-example.jpg vox-example %}

同时，他们提供一个叫 [LOOP](https://vox.rocks/loop-music-cloud) 的音乐服务，可以简单理解为音乐云盘。用户可以把自己的歌曲上传到 LOOP 提供的云空间，然后就可以通过云或者下载到本地播放了。这个空间是 **"没有上限的!!!".repeat(3)**，至少现在是这样

另外，如果你的 iTunes 有珍藏多年的音乐，VOX 一样可以读取出来，无缝同步，这个功能并不需要付费

通过一段时间的调查，做了一个价格、服务方面的横向对比，分享给大家，如有错误欢迎指正：
<!-- more -->


| 名称 | 价格 (美元/月) | 试用 | 在线/跨平台 | 格式支持 | 无损支持 |
| --- | --- | --- | --- | --- | --- |
| [VOX (LOOP)](https://vox.rocks/mac-music-player) | $10.99 ~ $15.99 | 15天免费 | 通过 VOX Free/只支持 MacOS 和 iOS | 绝大部分格式 | 是，需用户上传 |
| [Apple Music](http://www.apple.com/music/) | $9.99 | 3个月免费 | 是/需要 iTunes | AAC, MP3 | 否，但接近无损 |
| [Spotify](https://www.spotify.com/) | $9.99 | $0.99 三个月试用 | 是/全平台 | 320K MP3 (Spotify Premium) | 否 |
| [Google Play Music](https://www.spotify.com/) | $9.99 | 30天免费 | 是/全平台 | MP3 | 否，上传无损会转为 320K MP3 |
| [TIDAL](tidal.com) | $9.99/$19.99 | 30天免费 | 是/不支持 Windows | FLAC, MP3 | 需要购买 $19.99 的服务  |
| [Deezer](deezer.com) | $9.99/$14.99 | 30天免费 | 是/全平台 | MP3 | 需要第三方硬件 |
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
[上一篇博文](http://singsing.io/blog/2016/11/27/HammerSpoon-1/) 中已经提到，HammerSpoon 不止是窗口管理。它还可以读取系统的 API，可以执行 AppleScript。这两个特性，为我们通过键盘全局操作音乐播放提供了坚实的基础。实现全局的音乐播放控制，我们只需要 HammerSpoon 的这几个 API：

* [hs.osascript.applescript()](http://www.hammerspoon.org/docs/hs.osascript.html#applescript) - 执行 AppleScript。同时， `hs.osascript.javascript()` 也提供了执行 `JavaScript` 的接口
* [hs.hotkey.bind()](http://www.hammerspoon.org/docs/hs.hotkey.html) - 既然是用键盘来控制音乐播放，那么绑定键盘快捷键的方法肯定是必不可少的
* [hs.alert](http://www.hammerspoon.org/docs/hs.alert.html) - 可选，非必备。我是用这个来显示曲目信息的

## AppleScript 概述
AppleScript 是苹果公司开发的脚本语言，可以用来控制 MacOS 上运行的程序，也可以写成独立的 Applet

所以，只要我们能获取到 App 的接口，就可以通过 AppleScript 让 App 来搞事情了。举个例子，比如咱们安装了迅雷，迅雷提供了一个开始下载的接口，叫 `startDownload`。这时候，我们只需要这样写 AppleScript：`tell application "迅雷" to startDownload`，然后执行，那么迅雷就可以开始下载了（事实上，迅雷并没有提供这样的接口=。=

AppleScript 的这个语法，其实和英语表达非常接近（接近自然语言），直接翻译过来就是 `告诉应用程序“迅雷”，（让它）开始下载`。很好理解是不是？

## App 接口
那么现在，我们只需要找到应用程序接口，就大功告成了。我们可以在系统里直接查看，步骤如下：

1. 打开这个叫 ScriptEditor 的东西 （中文系统下叫“脚本编辑器”）

  {% asset_img open-script-editor.jpg open-script-ediotor %}
  
2. 然后就得到了这个界面，不用管它，点 "Done" 就好

  {% asset_img script-editor-initialize.jpg script-editor-initialize %}
  
3. 点击 `File -> Open Dictionary`，找到你想要折腾的 App，打开（注：如果这里面没有，那多半是没有文档，或者不支持，我没测试过所有 App）

  {% asset_img open-dictionary.jpg open-dictionary %}
  
4. 比如我们打开 VOX，就得到了如下的内容：

  {% asset_img vox-api.jpg vox-api %}
  
至此，一切都变得很简单了。我们只要写这个代码 `tell application "VOX" to play`并执行，就可以让 VOX 播放歌曲了。同样道理，`tell application "VOX" to next` 就是切换到下一首歌。至于每个 API 是干什么的，文档里都有说明

当然，我们也可以用同样的方式找到不仅限于 iTunes，Spotify，iTerm，Alfred，Atom 的 API，然后写一些自己想实现的功能

## 与 HammerSpoon 合体
说了半天，终于到了合体的时候。用 VOX 的朋友可以直接使用我封装好的 [API](http://www.hammerspoon.org/docs/hs.vox.html)

### 基本操作
代码也变得非常简单，比如，我们想把 `ctrl + j` 设置为切换播放/暂停。那么只需要：
```lua
hs.hotkey.bind({"ctrl"}, "j", hs.vox.playpause())
```

我的代码中，在快捷键绑定部分又封装了一次而已，封装部分是这样：

```lua
local voxHyper = {"cmd", "alt", "shift"}

local function voxBindTable(keyFuncTable, hyper)
  for key,fn in pairs(keyFuncTable) do
    hs.hotkey.bind(hyper or voxHyper, key, function() fn() end)
  end
end
```

这个方法，首先接收一个 `table`(可以理解为 JS 的对象，或者，HashMap？)，然后接收 HyperKey 设置。我的 HyperKey 设置为 `cmd + option + shift`。然后遍历传入的 `table`，把每一组的 `key` 和回调方法绑定上

调用起来就很方便了。我把 `hyper + j` 绑定为切换播放/暂停，`hyper + h` 绑定为上一首

```lua
voxBindTable({
  j = hs.vox.playpause,
  h = hs.vox.previous,
  l = hs.vox.next,
  k = hs.vox.trackInfo,
  i = hs.vox.togglePlaylist
})
```

### 显示歌曲信息
之前提到了 [hs.alert](http://www.hammerspoon.org/docs/hs.alert.html)。用处就是，读取 API 获得当前曲目的歌曲信息 （歌名，演唱者以及专辑名），然后显示在屏幕上，持续 2 秒。效果如下图：

  {% asset_img vox-track-info.jpg vox-track-info %}
  
代码就是上面的 `hyper + k`，`hs.vox.trackInfo()` 已经封装好了

### 显示/隐藏 播放列表
这个功能就是，类似于播放器的切换标准模式和 Mini 模式。API 已经封装成了 `hs.vox.togglePlaylist()`，实际效果如图：

{% asset_img vox-toggle-playlist.gif vox-toggle-playlist %}

# 不得不说的
1. 每个应用程序的 API 不尽相同，比如我在 HammerSpoon 里封装的 `hs.vox.trackInfo()` 只适用于 VOX。如果你不放心，可以先在 Console 里执行一下：`hs.vox.trackInfo()`，然后你就会得到一个弹出的信息框
2. 对于没有封装的，也很简单。按照上面提到的方法查 API 文档，比如 Spotify 也提供了一个叫 `pause` 的 API，那就可以在控制台里执行这段代码测试：`hs.applescript.applescript('tell application "Spotify" to pause')`。理论上会让 Spotify 暂停播放
3. 用好控制台 * 3，可以帮你在写代码过程中省不少时间。关于一些小技巧，我会在下一篇文章中提到

# 写在最后
这是 HammerSpoon 的第二篇。下一篇打算聊聊全局的快捷键绑定，已经实现的功能是，类似于 VIM，通过 `hyper + hjkl` 的方式来实现全局的光标移动（方向键）。涉及到的事儿可能比较多，感兴趣的朋友可以先试用一下，提提意见和建议。代码在[这里](https://github.com/S1ngS1ng/HammerSpoon/blob/master/vim-binding.lua)，文档在[这里](https://github.com/S1ngS1ng/HammerSpoon/blob/master/README-cn.md)

---
> 欢迎在页面下方评论和留言。如果你喜欢这篇文章，请帮我点个赞👍
