---
title: 你可能不知道的 Mac 技巧 - 系统快捷键和一些小技巧
date: 2017-02-07 01:22:32
tags: [Tools,Mac]
---

# 概述
[上一篇博客](http://singsing.io/blog/2017/01/23/Mac-2/)，截图部分说的可能有点儿太多了，本来没打算写成一篇。考虑了下整体的思路，决定争取把系统快捷键和调教系统的部分放到一篇写完

不少朋友一开始上手 Mac，对于系统方面的设置都会一脸懵逼，也有些功能隐藏的比较深。我是一个做前端开发的菜鸡，所以也会提到一些和开发相关的配置，写给有需要的朋友

老规矩，如果大家有任何疑问、意见或者建议，请在下方留言评论

# 复习
如果忘记了基本的操作，请回去翻翻 [第一篇博客](http://singsing.io/blog/2017/01/17/Mac-1/)

# macOS 的 Window，Tab 与 Space
## Window（窗口）与 App（应用程序）
Window，我们可以理解为一个窗口，一个应用程序当然可以有多个窗口
### 新建
在绝大部分 App 中，通过快捷键 <kbd>Cmd</kbd> + <kbd>n</kbd> 就可以新建窗口。不同的程序会提供不同的快捷键，有时候用 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>n</kbd> 会有不同的效果

### 切换
切换程序的快捷键是 <kbd>Cmd</kbd> + <kbd>Tab</kbd>，这个不少朋友都知道。按住 <kbd>Cmd</kbd> 然后不停的按 <kbd>Tab</kbd> 就可以顺着列表一直往后找，找到需要打开的程序后，松开 <kbd>Cmd</kbd> 即可。如果 <kbd>Tab</kbd> 过头了，可以通过 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> 往前找

在 macOS 中，我们还可以快速切换程序内所有打开的窗口，快捷键是：<kbd>Cmd</kbd> + <kbd>\`</kbd>。这个 <kbd>\`</kbd> 就是 <kbd>Tab</kbd> 上方，<kbd>1</kbd> 左边的那个键，很容易适应

## Tab
在 Chrome，Webstorm，iTerm 以及 Safari 等绝大部分常用 App 中，我们可以通过快捷键 <kbd>Cmd</kbd> + <kbd>t</kbd> 来新建一个 tab。最新版的 macOS 还引入了系统原生 App 对 tabs（标签）的支持，比如 Finder

切换方面，macOS 原生的 App，比如 Finder 和 Safari，都可以通过 <kbd>Ctrl</kbd> + <kbd>Tab</kbd> 或者 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Tab</kbd> 来切换，也可以通过 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>[</kbd> 或者 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>]</kbd> 来切换

其他 App 会有一些自定义的按键，比如：
- Webstorm 是 <kbd>Ctrl</kbd> + <kbd>←</kbd> 和 <kbd>Ctrl</kbd> + <kbd>→</kbd>
- iTerm 是 <kbd>Cmd</kbd> + <kbd>←</kbd> 和 <kbd>Cmd</kbd> + <kbd>→</kbd>
- Chrome 是 <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>←</kbd> 和 <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>→</kbd>

对于 Safari 的快捷键，如果我们想改也很简单，只需要在这里改动就行：

{% asset_img safari-shortcut.jpg safari-shortcut %}

## 关于 Help Menu
顺便说一句，我把上面那个 Show Help Menu 给关了，是因为它和 Webstorm 里面的“注释代码”功能有冲突。其实这个功能很方便，有时候 Chrome 很卡，需要清理下进程，我们只要用 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd> 打开 Help Menu，光标会自动定位到搜索栏，然后输入 “task manager” 就可以打开 Chrome 的进程管理器了。而且这个 Task Manager，本身是没有快捷键的。任何软件，所有在菜单栏出现的操作，都可以通过这种方式按名称搜索到

## Apps（应用）
App 在 macOS 上，其实就是程序，也可以叫软件，台湾叫软体

上面说过了，如何在程序之间切换。还有一些比较实用的快捷键，比如：
<kbd>Cmd</kbd> + <kbd>w</kbd> 关闭当前页面（注意不是退出 App）
<kbd>Cmd</kbd> + <kbd>q</kbd> 退出当前 App
<kbd>Cmd</kbd> + <kbd>,</kbd> 打开设置面板。适用于绝大部分 App

这里，要单独说一下最小化。Mac 上提供两种最小化方式，一个叫“最小化”，一个叫“隐藏”，快捷键分别为：
<kbd>Cmd</kbd> + <kbd>h</kbd> 隐藏
<kbd>Cmd</kbd> + <kbd>m</kbd> 最小化

他们的区别在于，“隐藏”是把当前 App 的**所有窗口**都放回去，而“最小化”，是把当前窗口放回去。收入的位置也不同，“隐藏”会把 App 都收入 Dock 上的程序图标内，其实看起来和平时没有什么区别：

{% asset_img hide.jpg hide %}

而“最小化”会把窗口放到 Dock 的最右边（或者最下边，比如图里这样）：

{% asset_img minimized.jpg minimized %}

这时候我们想把窗口恢复回来，如果我们是“隐藏的”，只需要按 <kbd>Cmd</kbd> + <kbd>Tab</kbd> 就可以了。但如果是“最小化”的，事情就变得十分微妙

试一下就可以发现，<kbd>Cmd</kbd> + <kbd>Tab</kbd> 是不能让窗口显示回来的。这时候我们有三种方式把窗口弄回来。首当其冲的当然是用鼠标点，点击 Dock 栏最右边（下边）的窗口图标。只是这样不够效率，特别是在多屏的情况下。以下提供两种键盘快捷键操作：
第一种方式比较复杂，但很有意思，适合只有一个窗口开启的 App：
1. <kbd>Cmd</kbd> + <kbd>Tab</kbd> 选中最小化窗口的 App，一般需要用 <kbd>Shift</kbd> 往回跳一个才行
2. 大拇指滑一下，**保持** <kbd>Cmd</kbd> **按住**的同时按住 <kbd>Alt</kbd>
3. 继续滑大拇指，**保持** <kbd>Alt</kbd> **按住的情况下**松开 <kbd>Cmd</kbd>，这时候就能看到窗口已经回来了。然后松开 <kbd>Alt</kbd> 即可

{% asset_img show-minimized-1.gif show-minimized-1 %}

第二种方式需要自带的 Mission Control 功能。如果我们的一个 App 有很多窗口打开，可以这样做：
1. <kbd>Cmd</kbd> + <kbd>Tab</kbd> 选中最小化窗口的 App，和上面一样
2. 保持 <kbd>Cmd</kbd> 按住，然后按方向键 <kbd>↑</kbd> 或者 <kbd>↓</kbd>。这时候就能看到其他打开的 App 全都不见了，屏幕上只剩下当前 App 的窗口
3. （可以松开 <kbd>Cmd</kbd>）用方向键 <kbd>←</kbd> 或者 <kbd>→</kbd> 选中那个最小化的窗口，选中的窗口外面会有蓝色的边框
4. 按回车，窗口就回来了

说实话，第一种乍一看很复杂，但习惯之后，你会发现，这个快捷键用起来非常顺手

## Space
Space 本义是空间，不过在 macOS 中，官方也没有给出中文翻译，我们可以简单地把它理解为“工作区”。

# 用好 Spotlight/Alfred
我的一个核心观点是尽量少用鼠标多用键盘。Mac 的触摸板其实很不错，手势操作很方便，但个人觉得有时候有点儿影响效率，比如打开一个 App，完全不需要动鼠标。用 Spotlight 或者 Alfred 就可以打开

比如，要打开 Webstorm，快捷键激活 Spotlight/Alfred，然后输入几个字母，按回车就可以了：

{% asset_img webstorm.jpg webstorm %}

顺便，Alfred 默认是不搜索文件的，如果也要搜索文件，在设置里把 Folders 打开就好了。这样，我们只要记得起文件名，直接在里面输入，然后一按回车就可以打开了，不用再去 Finder 里面一点一点找了

当然 Alfred 和 Spotlight 功能还不仅限于此，特别是 Alfred 强大的 Workflow 功能，详细说的话就要再写一篇博客了

# 消息提示

# 字典

# 预览功能

# 预告
下一篇博客将为大家介绍下一些常用的系统快捷键。另外，[上一篇博客](http://singsing.io/blog/2017/01/17/Mac-1/) 文末列出了大纲，已经更新（并且可能随时都会更新）：
1. [文本编辑相关操作](http://singsing.io/blog/2017/01/17/Mac-1/)
2. 截图，Gif 制作以及 App 推荐（本篇）
3. 系统快捷键
4. 如何调教系统，让它更符合你的使用习惯
5. Finder 和 Chrome 里的一些实用快捷键
6. 用 HammerSpoon 配置自己的全局快捷键

> 如果你喜欢这篇文章，请帮我点个赞👍