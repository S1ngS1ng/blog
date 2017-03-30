---
title: 你可能不知道的 Mac 技巧 - 截图，Gif 制作及 App 推荐
date: 2017-01-23 01:22:32
tags: [Mac]
---
> 找不到 Mac 上的 Home，End，PageUp？想截图还得打开 QQ？不知道 Mac 如何剪切文件？找不到全屏窗口的按钮？找不到隐藏文件夹？不知道如何向后删除？想少用鼠标，多用键盘？……
> 希望我的这一系列博文能帮到你

# 概述
首先要说明的是，我不可能，也不打算把所有快捷键都列出来。写这篇博文的目的是列出来那些我经常使用的，而且我认为可以显著的提高工作效率的快捷键。所以多少会有些主观色彩
Anyway，老规矩，如果大家有任何疑问、意见或者建议，请在下方留言评论

# 截图
macOS 系统内置了截图功能，每次截图都会发出声音，当然这个声音可以关，后面会提到。基础操作有以下四种（快捷键也可以自定义，后面也会提到）：

## 截图并保存至桌面
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>3</kbd> 截取整个屏幕，并保存截图至桌面
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd> 截取区域，并保存截图至桌面

激活区域截图之后，鼠标指针会变成下图这样，然后按住拖动就可以了

{% asset_img pointer.jpg pointer %}

## 截图并复制
有些时候，截图内容只是我们临时要用一下的，而不打算保存下来。我们只需要：
<kbd>Cmd</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>3</kbd> 截取整个屏幕并复制
<kbd>Cmd</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd> 截取区域并复制
<!-- more -->
以上两个快捷键，截图之后，我们只需要 <kbd>Cmd</kbd> + <kbd>v</kbd> 就可以随意粘贴了

## 关于新版 MacBook 的 Touch Bar
新版的 MacBook 加入了 Touch Bar，同时系统也为我们提供了截取 Touch Bar 屏幕的快捷键：
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>6</kbd> 截取 Touch Bar 显示内容，并保存至桌面
<kbd>Cmd</kbd> + <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>6</kbd> 截取 Touch Bar 显示内容并复制

## 一些高级操作
### 截取窗口
一个比较常用的功能就是截取某个窗口，不需要用截取区域的快捷键然后拉满整个窗口，只需要在 <kbd>Cmd</kbd> + [<kbd>Ctrl</kbd> +] <kbd>Shift</kbd> + <kbd>4</kbd> 之后按一下 <kbd>空格</kbd>，然后鼠标和窗口就会变成这样：

{% asset_img window-screenshot.jpg window-screenshot %}

鼠标会变成红色箭头指的那个照相机形状，要截取的窗口也会变成“选中”模式的颜色。这时候只要单击一下鼠标就可以了直接截取窗口了，要取消的话就按 <kbd>ESC</kbd>。同样道理，快捷键加上了 <kbd>Ctrl</kbd> 就会复制这个窗口的截图。如果没加，那就会把这个窗口截图保存至桌面

可能有些人会问，为什么上面的“选中”模式是这么漂（nan）亮（kan）的颜色，在这里就可以设置，颜色是我自己调的，非系统默认：

{% asset_img highlight-setting.jpg highlight-setting %}

### 实时调整大小
还有一些高级操作，都是在**开启区域模式并选中一个区域，松开鼠标按键前**可以执行的，这里就简单提一下，感兴趣的朋友可以自己试试：
- 这时候按住 <kbd>空格</kbd> 并移动鼠标，就可以保持区域大小不变，同时移动区域
- 这时候按住 <kbd>Shift</kbd> 并移动鼠标，就可以保持区域的其他三个边不变，移动一个边的位置
- 这时候按住 <kbd>Option</kbd> 并移动鼠标，就可以对称地调整区域大小

就我个人而言，空格那个我偶尔会用下，不过 <kbd>Shift</kbd> 和 <kbd>Option</kbd> 这两个，我是用的真不多

## 截图标注
我们只需要用自带的 Preview（预览）就可以完成截图标注

对于保存到桌面的截图，首先我们在桌面上单击一下图片，然后直接按下 <kbd>空格</kbd>。空格键是 macOS 上的 Quick View（快速预览），以后的文章中我们会细说。然后只需要点击下图箭头指的这个 Open with Preview：

{% asset_img open-screenshot.jpg open-screenshot %}

然后再点一下箭头指的这个工具箱图标，就可以进行标注了。macOS 为我们提供的标注功能有选取（圆形、矩形及套索）、亮度选取、画笔、几何图形标注（圆形、矩形、箭头等）、文字、签名、调色以及裁剪：

{% asset_img edit-screenshot.jpg edit-screenshot %}

这里不得不提一下亮度选取，这个功能可以根据亮度智能选取背景。举个例子，上面的截图，点击亮度选取，然后按住鼠标，左右（或上下）拖动，就能看到选取区域的变化。选好背景后，我们反转一下选取（快捷键 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>i</kbd>），然后直接 <kbd>Delete</kbd>，就得到了这个：

{% asset_img invert-selection.jpg invert-selection %}

## 延时截图及 Grab 应用
### Grab
有时候我们需要延时截图，macOS 为我们提供了这个功能，只是藏的比较深。我们可以直接用 Alfred 或者 macOS 自带的 Spotlight 搜索到，直接输入 Grab 即可：

{% asset_img grab.jpg grab %}

回车之后没有打开任何窗口，你可能觉得刚刚是打开了假的 App。但其实，这个 App 本身就是没有 UI 的，只会在 Menu Bar 上面显示一条菜单。我们可以在这里找到延时截图的选项：

{% asset_img timed-screen.jpg timed-screen %}

点击之后，按照提示操作就好，默认的延时时间是 10 秒。要注意的是，延时截图会截取整个屏幕，不能截区域。我们可以先把图片保存下来，然后再打开 Preview（预览）App 裁剪就好了

### 个性化
默认的延时时间和保存路径都是可以更改的。只要打开 Terminal（终端），然后输入这个命令并执行：

```bash
screencapture -T 10 screenshot1.jpg
```

其中，10 就表示延时十秒，"screenshot1" 就是默认的文件名，你可以把它改成其他文件名，也可以给它加上一个文件夹路径用于设置默认的保存位置

## 截图功能的配置
### 禁用提示音
截图提示音是可以关闭的，大家只需要打开 System Preferences，然后选择 Sound (声音)，然后只要把红色箭头指的这个关掉就行：

{% asset_img disable-sound.jpg disable-sound %}

### 快捷键设置
可能有朋友觉得系统自带快捷键好麻烦，讲真，习惯几天就好了。原则上我不是很建议大家自己改，因为如果快捷键设置的不当，就很可能会在某些 App 中产生快捷键冲突。比如，你把截图快捷键改成了 <kbd>Ctrl</kbd> + <kbd>c</kbd>，那么恭喜你，以后关闭 Server 只能 `kill ${pid}` 了😏。当然，如果你足够熟悉快捷键，改改倒是也无妨，大不了弄乱了直接恢复成默认

我们可以在 `系统设置 -> 键盘 -> 快捷键` 中设定快捷键，先定位到 Services （服务），然后就可以找到设置截图的快捷键了：

{% asset_img shortcut-setup.jpg shortcut-setup %}

就算把这些都关掉，像上图那样，文中之前提到的那些快捷键也都是能用的，因为那些都是系统默认的快捷键。同时，我们注意到这里也提供了延时截图的快捷键，如果你常用这个功能，那不妨也绑定一个快捷键吧，比如 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd>，方便又好记

### 截图默认保存路径设置
同样，我也不推荐改这个设置，虽然改一下也不会炸。比如你想把截图放到桌面的 myScreenshot 文件夹，那么打开 Terminal（终端），输入：

```bash
defaults write com.apple.screencapture location ~/Desktop/myScreenshot
```

然后，记得要重启一下系统的 UI 服务，执行这个命令：
```
killall SystemUiServer
```

之后，如果你再通过 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>3</kbd>/<kbd>4</kbd> 截图，图片就会保存在这个文件夹里

macOS 上截图相关的快捷键就介绍到这里，能想到的也就这些了。以下为 App 推荐环节，写给有需要的朋友

# 截图 App 推荐
经常会被问到，Mac 上如何制作 Gif，以及有什么截图 App 可以替代原生的截图工具。这里推荐以下几款，从免费到收费的都有。顺便提一句，Windows 系统自带的截图工具就很方便了，另外 [PicPick](http://ngwin.com/picpick) 也是极好的。可以一直免费试用，不需要去找破解，只是这款 App 没有 Mac 版本

## 系统截图 App 替代品
以下提到的三款软件均免费，至少在标注方面比原生的略胜一筹，详情请点击链接查看
### 浏览器插件 Awesome Screenshot
[Awesome Screenshot](https://www.awesomescreenshot.com) 是一款免费的截图工具，非本地 App，只是一个浏览器插件。它支持延时截图区域截图等常用功能。也内置了一个网页版的标注工具
### Evernote 旗下的 Skitch
[Skitch](https://evernote.com/intl/zh-cn/skitch/) 也是一款免费的截图 App，标注功能相比 Awesome Screenshot 会稍好一些。如果你用 Evernote（印象笔记），经常需要截图并保存到自己的笔记中，那么这款 App 可能会比较适合你。同时，Skitch 也有 iOS 版本
### Jing
[Jing](https://www.techsmith.com/jing.html) 同样是一款免费的截图 App，来自 TechSmith 公司，这家公司出品的另一款更为强大的截图工具 SnagIt 会在后文详细说明

## 制作 Gif
经常会被问到，如何在 macOS 上制作 Gif。这里给大家推荐以下几个不错的 App
### LICEcap (收费)
[LICEcap](http://www.cockos.com/licecap/) 是一款老牌的 macOS 系统 Gif 制作工具，不免费。相比其他 App，LICEcap 本身并不提供分享和上传功能，所以我本人并不是很推荐
### Giphy Capture (免费)
[Giphy](https://itunes.apple.com/us/app/giphy-capture.-the-gif-maker/id668208984?mt=12) 是由一个很火的 Gif 分享网站 [Giphy.com](http://giphy.com/) 开发的。一个很方便的功能就是可以直接上传至 giphy.com（可能需要 VPN 才能访问），然后把链接 Share 给朋友就可以了。同样，保存至本地也没问题

## SnagIt - 全套解决方案
我一般的习惯是，如果截图只是为了粘贴到聊天框之类的地方，而且不需要标注的话，就会用系统截图。如果需要标注，或者想要留下来，就会用一个第三方的 App：[SnagIt](https://www.techsmith.com/screen-capture.html)。虽然是付费软件，价格也有点儿高，但我觉得还是很值得购买的。目前我的[博客](singsing.io/blog)和 [GitHub](github.com/S1ngS1ng/HammerSpoon) 上的截图、动图都是用这个做的

### 截图功能
SnagIt 在截图方面提供了区域延时截图、全景截图、Expose 模式截图甚至摄像头输入内容截图这些很实用的功能。个人觉得，它 Menu Bar 的 Panel（面板）本身颜值就很高：

{% asset_img snagit-panel.jpg snagit-panel%}

而且自带一个颜值更高，功能也更多的图片编辑器：

{% asset_img snagit-editor.jpg snagit-editor %}

保存的图片格式也可以自己选择，还可以保存为感人的 Retina 清晰度

### 编辑功能
作为一款付费 App，它确实为我们提供了相比 macOS 原生 Preview 更多的编辑功能。暂且不去比较已有的箭头之类的功能，虽然我还是觉得 SnagIt 里面的元素更好看些，SnagIt 还提供了打码功能，效果嘛，大家可以参考下上面 Grab 那里的配图。放大镜功能也是极好的，突出重点的时候很有用。还有 Stamp（图章），有茫茫多的图章选择，从 PC 键盘按键图章，到 Emoji 表情，再到数学符号和花体英文字母，都可以直接扔到截图上。虽然没有提供直接的拼图工具，但拼起来也不麻烦，裁好图，加上分割线，粘贴到一起就可以了

### 视频功能
首先，SnagIt 可以录制很高清的视频，时长也是没有限制的。支持全屏和区域录制两种模式，同时也可以录制摄像头输入和麦克风输入，这个功能用来录制会议视频应该也是极好的。另一个应用场景就是，我们在一些网站上看到喜欢的视频想留下来，而网站又不提供下载，那我们就可以直接选好视频播放的区域来自己录成视频

### 上传与同步功能
TechSmith 自己提供了 screencast.com 和 TechSmith relay 服务，当然我们也可以选择上传到 Google Drive 或者 Dropbox。也以配置自己的 FTP，或者直接扔到 iCloud 文件夹也是没问题的。同样，也可以选择本地文件夹保存，支持命名规则等方面的设置

# 预告
下一篇博客将为大家介绍下一些常用的系统快捷键。另外，[上一篇博客](http://singsing.io/blog/2017/01/17/Mac-1/) 文末列出了大纲，已经更新（并且可能随时都会更新）：
1. [文本编辑相关操作](http://singsing.io/blog/2017/01/17/Mac-1/)
2. 截图，Gif 制作以及 App 推荐（本篇）
3. 系统快捷键
4. 如何调教系统，让它更符合你的使用习惯
5. Finder 和 Chrome 里的一些实用快捷键
6. 用 HammerSpoon 配置自己的全局快捷键

> 如果你喜欢这篇文章，请帮我点个赞👍

