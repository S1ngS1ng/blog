---
title: 你可能不知道的 Mac 技巧 - 系统快捷键和一些小技巧
date: 2017-02-07 01:22:32
tags: [Tools,Mac]
---

# 概述
[上一篇博客](http://singsing.io/blog/2017/01/23/Mac-2/) 内容略多，本来没打算写成一篇。提纲已更新，大家可以翻到文末看下（<kbd>Cmd</kbd> + <kbd>↓</kbd> 可以直接跳到文末，你还记得不？😏），如果忘记了基本操作，请回去翻翻 [第一篇博客](http://singsing.io/blog/2017/01/17/Mac-1/)

不少朋友一开始上手 Mac，对于系统方面的设置都会一脸懵逼，也有些功能隐藏的比较深。我是一个做前端开发的菜鸡，所以也会提到一些和开发相关的配置，写给有需要的朋友

文中提到的功能，强烈建议大家边看边试，有些东西文字描述起来会很复杂，自己操作一下就明白了，其实都很简单

老规矩，如果大家有任何疑问、意见或者建议，请在下方留言评论

# macOS 的 Window，Tab 与 Space
## Window（窗口）与 App（应用程序）
Window 就是窗口，一个 App 当然可以有多个窗口。App 就是程序，也可以叫软件（软体）
### 新建
在绝大部分 App 中，通过快捷键 <kbd>Cmd</kbd> + <kbd>n</kbd> 就可以新建窗口。不同的 App 中，有时候用 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>n</kbd> 会有不同的新建效果

### 切换
切换 App 的快捷键是 <kbd>Cmd</kbd> + <kbd>Tab</kbd>，这个不少朋友都知道。按住 <kbd>Cmd</kbd> 然后不停地 <kbd>Tab</kbd> 就可以顺着列表一直往后找，<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> 可以往前找。找到需要打开的 App 后，松开 <kbd>Cmd</kbd> 即可切换到 App。如果不松开 <kbd>Cmd</kbd>，我们还可以按 <kbd>q</kbd> 退出程序，或者按 <kbd>h</kbd> 隐藏程序

我发现，不少朋友不知道可以快速切换 App 内所有打开的窗口，快捷键是：<kbd>Cmd</kbd> + <kbd>\`</kbd>。这个 <kbd>\`</kbd> 就是 <kbd>1</kbd> 左边，<kbd>Tab</kbd> 上方的那个键，很好记
<!--more-->

App 相关的快捷键主要有：
<kbd>Cmd</kbd> + <kbd>w</kbd> 关闭当前页面（一般是 Tab，注意不是退出 App）
<kbd>Cmd</kbd> + <kbd>q</kbd> 退出当前 App
<kbd>Cmd</kbd> + <kbd>,</kbd> 打开设置面板。适用于绝大部分 App
<kbd>Cmd</kbd> + <kbd>h</kbd> 隐藏（App）
<kbd>Cmd</kbd> + <kbd>m</kbd> 最小化（窗口）

以上功能可以配合 <kbd>Alt</kbd> 一起使用：
<kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>w</kbd> 关闭当前 App 的所有 Tab
<kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>h</kbd> 隐藏所有**其他 App** 的窗口
<kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>m</kbd> 最小化**当前 App** 的所有窗口

至于如何让隐藏或最小化的窗口重新显示，后文会详细说明

### 窗口按钮
在 macOS 上，所有窗口的左上角都有四种按钮：
{% asset_img window-icons.jpg window-icons %}

这不是三个嘛？其实，按住 <kbd>Alt</kbd>，第四种就出来了：
{% asset_img window-icons-plus.jpg window-icons-plus %}

先说第一个按钮，就是最左边的那个"×"。要注意的是，点"×"并不能退出程序。如果要退出，可以用上面提到的快捷键；可以在菜单栏点击 App 名称，然后点退出；也可以右键点 Dock 栏的程序图标，然后点退出。有时候会遇到 App 停止响应的情况，我们可以通过 <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>ESC</kbd> 来打开强制退出窗口，或者点击菜单栏里的苹果图标，也能找到强制退出

第二个按钮，功能上相当于 <kbd>Cmd</kbd> + <kbd>m</kbd>，也就是最小化。最小化之后，<kbd>Cmd</kbd> + <kbd>Tab</kbd> 是不能重新打开的，请继续看下一节

第三个按钮有两种形式，第一种，就是两个箭头的那个，确实会把 App 全屏，但是会创建一个新的 Space。关于 Space 的使用方式，后文会讨论。另一种就是那个加号，尽管在一些 App 中，点击这个就可以全屏，但确切的说，是“把当前窗口放大到**合适尺寸**”

### 最小化和隐藏
macOS 提供两种不显示窗口的方式，一个叫“最小化”，一个叫“隐藏”，快捷键分别为：
<kbd>Cmd</kbd> + <kbd>h</kbd> 隐藏
<kbd>Cmd</kbd> + <kbd>m</kbd> 最小化

他们的区别在于，“隐藏”是把当前 App 的**所有窗口**都放回去，而“最小化”，是把当前窗口放回去。收入的位置也不同，“隐藏”会把 App 都收入 Dock 上的程序图标内，其实看起来和平时没有什么区别：

{% asset_img hide.jpg hide %}

而“最小化”会把窗口放到 Dock 的最右边（或者最下边，比如图里这样）：

{% asset_img minimized.jpg minimized %}

这时候我们想把窗口恢复回来，如果我们是“隐藏的”，只需要按 <kbd>Cmd</kbd> + <kbd>Tab</kbd> 就可以了。但如果是“最小化”的，事情就变得十分微妙

试一下就可以发现，<kbd>Cmd</kbd> + <kbd>Tab</kbd> 是不能让窗口显示回来的。这时候我们有三种方式把窗口弄回来。第一种当然是用鼠标点，点击 Dock 栏最右边（下边）的窗口图标。只是这样不够效率，特别是在多屏的情况下。以下提供两种键盘快捷键操作：

这种方式看起来复杂，但适应之后，其实很顺手的。美中不足的是，它只适合开启了单个窗口的 App：
1. <kbd>Cmd</kbd> + <kbd>Tab</kbd> 选中最小化窗口的 App，一般需要用 <kbd>Shift</kbd> 往回跳一个才行
2. 大拇指滑一下，**保持** <kbd>Cmd</kbd> **按住的同时**按住 <kbd>Alt</kbd>
3. 继续滑大拇指，**保持** <kbd>Alt</kbd> **按住的情况下**松开 <kbd>Cmd</kbd>，这时候就能看到窗口已经回来了。然后松开 <kbd>Alt</kbd> 即可

{% asset_img show-minimized-1.gif show-minimized-1 %}

另一种方式需要自带的一个类似与 App Expose 的功能。如果我们的一个 App 有很多窗口打开，可以这样做：
1. <kbd>Cmd</kbd> + <kbd>Tab</kbd> 选中最小化窗口的 App，和上面一样
2. 保持 <kbd>Cmd</kbd> 按住，然后按方向键 <kbd>↑</kbd> 或者 <kbd>↓</kbd>。这时候就能看到其他打开的 App 全都不见了，屏幕上只剩下当前 App 的窗口
3. （可以松开 <kbd>Cmd</kbd>）用方向键 <kbd>←</kbd> 或者 <kbd>→</kbd> 选中那个最小化的窗口，选中的窗口外面会有蓝色的边框
4. 按回车，窗口就回来了

另外，这个功能在任何时候都可以用，默认设置这里是开启的，只是在键盘快捷键设置中叫 Application Windows，在触摸板设置中叫 App Expose。我们可以通过 <kbd>Ctrl</kbd> + <kbd>↓</kbd> 激活：

{% asset_img application-windows.jpg application-windows %}

激活之后还可以通过 <kbd>Tab</kbd> 来切换其他 App。顺便，那个 Mission Control，也就是 <kbd>Ctrl</kbd> + <kbd>↓</kbd> 和触摸板四指上滑效果是一样的，都是查看所有打开的窗口。

## Tab
在 Chrome，Webstorm，iTerm 以及 Safari 等绝大部分常用 App 中，我们可以通过快捷键 <kbd>Cmd</kbd> + <kbd>t</kbd> 来新建一个 tab。最新版的 macOS 还引入了系统原生 App 对 tabs（标签）的支持，比如 Finder

切换方面，macOS 原生的 App，比如 Finder 和 Safari，都可以通过 <kbd>Ctrl</kbd> + <kbd>Tab</kbd> 或者 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> 来切换，也可以通过 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>[</kbd> 或者 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>]</kbd> 来切换。我更喜欢前面的那种方式

其他 App 会有一些自定义的按键，比如：
- Webstorm 是 <kbd>Ctrl</kbd> + <kbd>←</kbd> 和 <kbd>Ctrl</kbd> + <kbd>→</kbd>
- iTerm 是 <kbd>Cmd</kbd> + <kbd>←</kbd> 和 <kbd>Cmd</kbd> + <kbd>→</kbd>
- Chrome 是 <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> 和 <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd>

对于 Safari 的快捷键，我们可以直接在系统设置里改：

{% asset_img safari-shortcut.jpg safari-shortcut %}

## 关于 Help Menu
顺便说一句，我把上面那个 Show Help Menu 给关了，是因为它和 Webstorm 里面的“注释代码”功能有冲突。其实这个功能很方便，比如有时候 Chrome 很卡，我们只要用 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd> 打开 Help Menu，光标会自动定位到搜索栏，然后输入 “task manager” 就可以打开 Chrome 的进程管理器了。任何软件，所有在菜单栏出现的操作，都可以通过这种方式按名称搜索到

## Space
Space 本义是空间，macOS 中，官方也没有给出中文翻译，我们可以简单地把它理解为“工作区”

如果我们点击窗口左上角，最右边那个两个箭头的按钮，就会把这个窗口放到一个新的 Space 里面，并且全屏。这时候我们可以调出来 Mission Control 看看，触摸板上四指向上滑动就好，如果

# 用好 Spotlight/Alfred
我的一个核心观点是尽量少用鼠标多用键盘。macOS 的触摸板其实很不错，手势操作很方便，但个人觉得有时候有点儿影响效率，比如打开一个 App，完全不需要动鼠标。用 Spotlight 或者 Alfred 就可以打开

比如，要打开 Webstorm，快捷键激活 Spotlight/Alfred，然后输入几个字母，按回车就可以了：

{% asset_img webstorm.jpg webstorm %}

顺便，Alfred 默认是不搜索文件的，如果也要搜索文件，在设置里把 Folders 打开就好了。这样，我们只要记得起文件名，直接在里面输入，然后一按回车就可以打开了，不用再去 Finder 里面一点一点找了

当然 Alfred 和 Spotlight 功能还不仅限于此，特别是 Alfred 强大的 Workflow 功能，详细说的话就要再写一篇博客了

# 通知
macOS 集成了通知功能，来自系统、 App 的消息都可以显示在通知里。我们可以自主选择显示哪些不显示哪些，在“系统设置”的“通知”里面修改就可以了

点击下图的这个图标，可以显示通知。或者从触摸板右侧的外面，两指滑入，也可以显示通知。另外，有时候我们可能需要暂时关闭通知。只需要按住 <kbd>Alt</kbd> 的同时点击下图这个图标就可以暂时关闭了，点击之后我们会发现，这个图标变成了灰色：

{% asset_img notification.jpg notification %}

# 字典
macOS 为我们提供了字典功能，阅读 PDF 或者看网页的时候，我们都可以通过内置字典查询不认识的单词。印象中查单词的默认方式是三指点按，我是把它改成了用力按，也就是 Force Touch 的时候查询

我们可以设置想要显示的字典，首先打开字典 App：

{% asset_img dictionary-entry.jpg dictionary-entry %}

然后按 <kbd>Cmd</kbd> + <kbd>,</kbd> 打开设置：

{% asset_img dictionary.jpg dictionary %}

在上面选择我们想要看到的字典就可以了。系统里不只提供这四本，上下滚动一下就可以看到其他字典了

设置好之后，我们在浏览网页的时候，就可以使用了：

{% asset_img word-definition.jpg word-definition %}

# Quick Look（快速预览）
macOS 系统里，我认为最实用的功能之一就是这个 Quick Look 了。激活方式非常简单，只需要在选中的文件上按一下 <kbd>空格</kbd>。Quick Look 支持的格式非常多，文档类的包括 txt、doc、docx、ppt、pptx 以及 PDF，图片类的 JPG、GIF、PNG 和 SVG，音频类的 MIDI、MP3、AAC、WAV，以及视频类的 MP4，AVI

我们不仅可以在 Finder 里面 Quick Look 这些，甚至是在网页、QQ、微信中上传文件的时候，我们也可以按下空格来 Quick Look。比如，在上传邮件附件的时候，先 Quick Look 一下再点确认，可以大大减少我们发错文件的可能

# 预告
下一篇博客将为大家介绍下一些常用的系统快捷键。另外，[上一篇博客](http://singsing.io/blog/2017/01/17/Mac-1/) 文末列出了大纲，已经更新（并且可能随时都会更新）：
1. [文本编辑相关操作](http://singsing.io/blog/2017/01/17/Mac-1/)
2. 截图，Gif 制作以及 App 推荐（本篇）
3. 系统快捷键
4. 如何调教系统，让它更符合你的使用习惯
5. Finder 和 Chrome 里的一些实用快捷键
6. 用 HammerSpoon 配置自己的全局快捷键

> 如果你喜欢这篇文章，请帮我点个赞👍