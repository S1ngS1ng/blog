---
title: 你可能不知道的 Mac 技巧 - macOS 的窗口、标签与工作区
date: 2017-02-12 22:22:32
tags: [Mac]
---
> 找不到 Mac 上的 Home，End，PageUp？想截图还得打开 QQ？不知道 Mac 如何剪切文件？找不到全屏窗口的按钮？找不到隐藏文件夹？不知道如何向后删除？想少用鼠标，多用键盘？……
> 希望我的这一系列博文能帮到你。
> 推 (an) 荐 (li) 一下自己写的 HammerSpoon 插件，帮助大家更方便地进行窗口管理，以及其他实用功能。[点我](https://github.com/S1ngS1ng/hammerspoon) 查看。也可以去看看我的 [第一篇博客](http://singsing.io/blog/2016/11/27/HammerSpoon-1/)

# 概述
[上一篇博客](http://singsing.io/blog/2017/01/23/Mac-2/) 内容略多，本来没打算写成一篇。提纲已更新，大家可以翻到文末看下（<kbd>Cmd</kbd> + <kbd>↓</kbd> 可以直接跳到文末，你还记得不？😏），如果忘记了基本操作，请回去翻翻 [第一篇博客](http://singsing.io/blog/2017/01/17/Mac-1/)

不少朋友刚上手 Mac，对 macOS 系统提供的功能会很不适应，确实，有些功能隐藏的比较深，多少会影响些效率。我是一个做前端开发的菜鸡，所以这个系列多少也会涉及到一些开发相关的配置，写给有需要的朋友

文中提到的功能，强烈建议大家边看边试，有些东西文字描述起来会很复杂，自己操作一下就明白了，其实都很简单

老规矩，如果大家有任何疑问、意见或者建议，请在下方留言评论

# Window（窗口）与 App（应用程序）
Window 就是窗口，一个 App 当然可以有多个窗口。App 就是程序，也可以叫软件（软体）
## 新建
在绝大部分 App 中，通过快捷键 <kbd>Cmd</kbd> + <kbd>n</kbd> 就可以新建窗口。不同的 App 中，有时候用 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>n</kbd> 会有不同的新建效果

## 切换
切换 App 的快捷键是 <kbd>Cmd</kbd> + <kbd>Tab</kbd>，这个不少朋友都知道。按住 <kbd>Cmd</kbd> 然后不停地 <kbd>Tab</kbd> 就可以顺着列表一直往后找，<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> 可以往前找。找到需要打开的 App 后，松开 <kbd>Cmd</kbd> 即可切换到 App。如果不松开 <kbd>Cmd</kbd>，我们还可以按 <kbd>q</kbd> 退出程序，或者按 <kbd>h</kbd> 隐藏程序

我发现，不少朋友不知道可以快速切换 App 内所有打开的窗口，快捷键是：<kbd>Cmd</kbd> + <kbd>\`</kbd>。这个 <kbd>\`</kbd> 就是 <kbd>1</kbd> 左边，<kbd>Tab</kbd> 上方的那个键，很好记
<!--more-->

App 相关的快捷键主要有：
<kbd>Cmd</kbd> + <kbd>w</kbd> 关闭当前页面（一般是 Tab，注意不是退出 App）
<kbd>Cmd</kbd> + <kbd>q</kbd> 退出当前 App
<kbd>Cmd</kbd> + <kbd>,</kbd> 打开设置面板。适用于绝大部分 App
<kbd>Cmd</kbd> + <kbd>h</kbd> 隐藏（App）
<kbd>Cmd</kbd> + <kbd>m</kbd> 最小化（窗口）

以上功能可以配合 <kbd>Option</kbd> 一起使用：
<kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>w</kbd> 关闭当前 App 的所有 Tab
<kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>h</kbd> 隐藏所有**其他 App** 的窗口
<kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>m</kbd> 最小化**当前 App** 的所有窗口

一些和编辑相关的 App 中：
<kbd>Cmd</kbd> + <kbd>o</kbd> 打开文件
<kbd>Cmd</kbd> + <kbd>s</kbd> 保存文件
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>s</kbd> 文件另存为

至于如何让隐藏或最小化的窗口重新显示，后文会详细说明

## 窗口按钮
在 macOS 上，所有窗口的左上角都有四种按钮：

{% asset_img window-icons.jpg window-icons %}

这不是三个嘛？其实，按住 <kbd>Option</kbd>，第四种就出来了：

{% asset_img window-icons-plus.jpg window-icons-plus %}

先说第一个按钮，就是最左边的那个"×"。要注意的是，点"×"并不能退出程序。如果要退出，可以用上面提到的快捷键；可以在菜单栏点击 App 名称，然后点退出；也可以右键点 Dock 栏的程序图标，然后点退出。有时候会遇到 App 停止响应的情况，我们可以通过 <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>ESC</kbd> 来打开强制退出窗口，或者点击菜单栏里的苹果图标，也能找到强制退出

第二个按钮，功能上相当于 <kbd>Cmd</kbd> + <kbd>m</kbd>，也就是最小化。最小化之后，<kbd>Cmd</kbd> + <kbd>Tab</kbd> 是不能重新打开的，请继续看下一节

第三个按钮有两种形式，第一种，就是两个箭头的那个，确实会把 App 全屏，但是会创建一个新的 Space。关于 Space 的使用方式，后文会讨论。另一种就是那个加号，尽管在一些 App 中，点击这个就可以全屏，但确切的说，是“把当前窗口放大到**合适尺寸**”

## 最小化和隐藏
macOS 提供两种不显示窗口的方式，一个叫“最小化”，一个叫“隐藏”，快捷键分别为：
<kbd>Cmd</kbd> + <kbd>h</kbd> 隐藏
<kbd>Cmd</kbd> + <kbd>m</kbd> 最小化

他们的区别在于，“隐藏”是 App 级别的操作，把当前 App 的**所有窗口**都收起来，而“最小化”，是窗口级别的操作，只把**当前窗口**收起来。收入的位置也不同，“隐藏”会把 App 都收入 Dock 上的程序图标内，其实看起来和平时没有什么区别：

{% asset_img hide.jpg hide %}

而“最小化”会把窗口放到 Dock 的最右边（或者最下边，比如图里这样）：

{% asset_img minimized.jpg minimized %}

这时候我们想把窗口恢复回来，如果我们是“隐藏的”，只需要按 <kbd>Cmd</kbd> + <kbd>Tab</kbd> 就可以了。但如果是“最小化”的，事情就变得十分微妙

试一下就可以发现，<kbd>Cmd</kbd> + <kbd>Tab</kbd> 是不能让窗口显示回来的。这时候我们有三种方式把窗口弄回来。第一种当然是用鼠标点，点击 Dock 栏最右边（下边）的窗口图标。只是这样不够效率，特别是在多屏的情况下。以下提供两种键盘快捷键操作：

这种方式看起来复杂，但适应之后，其实很顺手的。美中不足的是，它只适合开启了单个窗口的 App：
1. <kbd>Cmd</kbd> + <kbd>Tab</kbd> 选中最小化窗口的 App，一般需要用 <kbd>Shift</kbd> 往回跳一个才行
2. 大拇指滑一下，**保持** <kbd>Cmd</kbd> **按住的同时**按住 <kbd>Option</kbd>
3. 继续滑大拇指，**保持** <kbd>Option</kbd> **按住的情况下**松开 <kbd>Cmd</kbd>，这时候就能看到窗口已经回来了。然后松开 <kbd>Option</kbd> 即可

{% asset_img show-minimized-1.gif show-minimized-1 %}

另一种方式需要自带的一个类似与 App Expose 的功能。如果我们的一个 App 有很多窗口打开，可以这样做：
1. <kbd>Cmd</kbd> + <kbd>Tab</kbd> 选中最小化窗口的 App，和上面一样
2. 保持 <kbd>Cmd</kbd> 按住，然后按方向键 <kbd>↑</kbd> 或者 <kbd>↓</kbd>。这时候就能看到其他打开的 App 全都不见了，屏幕上只剩下当前 App 的窗口
3. （可以松开 <kbd>Cmd</kbd>）用方向键 <kbd>←</kbd> 或者 <kbd>→</kbd> 选中那个最小化的窗口，选中的窗口外面会有蓝色的边框
4. 按回车，窗口就回来了

另外，这个功能在任何时候都可以用，默认设置这里是开启的，只是在键盘快捷键设置中叫 Application Windows，在触摸板设置中叫 App Expose。我们可以通过 <kbd>Ctrl</kbd> + <kbd>↓</kbd> 激活：

{% asset_img application-windows.jpg application-windows %}

激活之后还可以通过 <kbd>Tab</kbd> 来切换其他 App。顺便，那个 Mission Control，也就是 <kbd>Ctrl</kbd> + <kbd>↓</kbd> 和触摸板四指上滑效果是一样的，都是查看所有打开的窗口。

# Tab
在 Chrome，Webstorm，iTerm 以及 Safari 等绝大部分常用 App 中，我们可以通过快捷键 <kbd>Cmd</kbd> + <kbd>t</kbd> 来新建一个 tab。最新版的 macOS 还引入了系统原生 App 对 tabs（标签）的支持，比如 Finder

切换方面，macOS 原生的 App，比如 Finder 和 Safari，都可以通过 <kbd>Ctrl</kbd> + <kbd>Tab</kbd> 或者 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> 来切换，也可以通过 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>[</kbd> 或者 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>]</kbd> 来切换。我更喜欢前面的那种方式

其他 App 会有一些自定义的切换标签快捷键，比如：
- Webstorm 是 <kbd>Ctrl</kbd> + <kbd>←</kbd> 和 <kbd>Ctrl</kbd> + <kbd>→</kbd>
- iTerm 是 <kbd>Cmd</kbd> + <kbd>←</kbd> 和 <kbd>Cmd</kbd> + <kbd>→</kbd>
- Chrome 是 <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>←</kbd> 和 <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>→</kbd>

对于 Safari 的快捷键，我们可以直接在系统设置里改：

{% asset_img safari-shortcut.jpg safari-shortcut %}

# Space
Space 本义是空间，macOS 中，官方也没有给出中文翻译，我们可以简单地把它理解为“工作区”。这个功能确实可以为我们在使用中提供不少的便利，只是我个人不太习惯这种操作方式，尤其是在已经配了多屏幕的条件下

如果我们点击窗口左上角，最右边那个两个箭头的按钮，就会把这个窗口放到一个新的 Space 里面，并且全屏。这时候我们可以调出来 Mission Control 看看。按照**默认设置**，我们可以通过 <kbd>Ctrl</kbd> + <kbd>↑</kbd> 或者直接按 <kbd>F3</kbd> 或者在触摸板上四指上滑来打开。**所有的屏幕以及屏幕上的所有窗口**都会显示出来：

{% asset_img space.jpg space%}

最上面的就是 Space，我们可以点击最右侧的“＋”新建一个空的 Space，也可以拖拽一个窗口上去形成新的 Space：

{% asset_img new-space.jpg new-space %}

新建的 Space 中窗口是全屏的。上文提到过，点击窗口按钮最右边那个两个箭头的图标也可以实现相同的效果。这时，我们还可以再拖一个窗口上去，这样就可以让这两个窗口在屏幕上左右排列，各占 50%，这个功能是在上一个 macOS 稳定版 El Capitan 系统中才加入的，效果如图：

{% asset_img split-screen.jpg split-screen %}

切换 Space 其实非常方便，我们只需要在触摸板上四指向左右滑动就可以了，默认的键盘快捷键是 <kbd>Ctrl</kbd> + <kbd>←</kbd> 和 <kbd>Ctrl</kbd> + <kbd>→</kbd>

记得我一年多以前，刚开始接触 macOS 的时候，那时候刚更新了 El Capitan 系统，朋友就教会了我这个玩法。那时候我还没入多屏的坑，写代码的时候 IDE 放到一个 Space，Google 和 Dash 之类的放到另一个，需要查资料，一滑就行。很可惜的是，macOS 新建的 Space 只能放两个窗口，而且只能横向排列。但好消息是，Space 是无限的 😂

直到我发现我同时开的窗口越来越多，也就开始寻找窗口管理的解决方案了。第三方 App 很多，付费的、免费的和开源的都有。试了大部分之后，我决定自己写配置。如果你对这个感兴趣，欢迎来看看我的第一篇[博客](http://singsing.io/blog/2016/11/27/HammerSpoon-1/)。我写的插件也放到了 [Github](https://github.com/S1ngS1ng/hammerspoon) 上，[中文文档和示例](https://github.com/S1ngS1ng/HammerSpoon/blob/master/README-cn.md) 也都加好了。最新的一次更新，加入了类似与 Windows 中 "Cycle through" 的效果，就是 <kbd>Win</kbd> + <kbd>←/→</kbd> 的效果。安装和使用也很简单，希望你能从中获得些思路。如果你也是开发者，欢迎给我的这个 repo 提交 issue 和 PR

# 总结
这篇主要涉及到了 macOS 最基本的三个概念：窗口、标签和工作区。用好这三个功能，一定可以起到事半功倍的效果

# 预告
下一篇博客将为大家介绍一些常用的系统内置功能。以下为更新之后的大纲：
1. [文本编辑相关操作](http://singsing.io/blog/2017/01/17/Mac-1/)
2. [截图，Gif 制作以及 App 推荐](http://singsing.io/blog/2017/01/23/Mac-2/)
3. macOS 的窗口、标签与工作区（本篇）
4. macOS 的实用功能
5. 如何调教系统，让它更符合你的使用习惯
6. Finder 和 Chrome 里的一些实用快捷键
7. 用 HammerSpoon 配置自己的全局快捷键

> 如果你喜欢这篇文章，请帮我点个赞👍