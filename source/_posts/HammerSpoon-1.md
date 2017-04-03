---
layout: post
title: HammerSpoon - 不止是窗口管理
date: 2016-11-27 3:10:00
tags: [Tools,HammerSpoon]
categories: HammerSpoon
---

# 概述
[HammerSpoon](http://www.hammerspoon.org/) 是一个**可以用来进行窗口管理**的 App，开源免费。当然，功能也不仅限于此

本文旨在介绍如何用 HammerSpoon 配置窗口管理功能。类似的软件，收费的有 [SizeUp](http://www.irradiatedsoftware.com/sizeup/)，[Moom](https://manytricks.com/moom/) 和 [Divvy](http://mizage.com/divvy/), 免费的有 [Spectacle](https://www.spectacleapp.com/) 和 [Slate](https://github.com/jigish/slate)

SizeUp 和 Divvy 在功能上各有所长。SizeUp 方便快速调节窗口位置，但不方便快速调节窗口大小，Divvy反之。虽然也可以在 Divvy 里设置快速 Resize 到指定大小的快捷键，但只是比较基础的设置，不能实时调整。而 Spectacle 和 Slate 更像是这两个软件的功能集合，而且比他们都强大，只是在配置方面要花些时间。Slate 的原作者已经 3 年没管过这个项目了，但这个 [fork](https://github.com/mattr-/slate) 还是有人维护的

推荐HammerSpoon，因为它的窗口管理功能足够强大。而且对开发者很友好，有控制台可以 Debug。语言采用 Lua，不难上手。另外，还有**茫茫多**的系统 API 可以随意调用。所以说，HammerSpoon 绝不仅仅是一个窗口管理软件

如果你符合以下这几点：

 1. 使用 MacOS
 2. 想用键盘调整窗口大小和位置
 3. 有多个外接屏幕，想用快捷键把窗口在屏幕之间扔来扔去

那么，请继续往下读

不想看配置细节或者已经掌握了配置方法的朋友，可以直接跳到下载页面，载入我的配置文件，只需要几分钟，你就可以告别这些不科学的操作了
<!-- more -->

# 使用

我们先来看看配置好之后，有什么效果，随便举两个例子：

![](https://camo.githubusercontent.com/b1b1c3f8fb8792e580751ef76ba8b08b88997ed0/687474703a2f2f692e696d6775722e636f6d2f564e6f376e43492e676966)

![](https://camo.githubusercontent.com/427c887dec6102d60f4b047b9eedcadb9ed630e7/687474703a2f2f692e696d6775722e636f6d2f764971444d55442e676966)

按照这篇教程配置，你可以用**键盘快捷键**触发以下动作：

 1. 在当前的屏幕**全屏化**某个窗口，适用于任何屏幕和窗口
 2. 在当前屏幕上居中窗口
 3. 把窗口大小调整到屏幕大小的一半（上下左右）。**适用于任何屏幕和窗口**
 4. 把当前窗口扔到其他显示器上，***并且全屏***（可选）
 5. **任意调整**当前窗口大小
 6. 关于任意移动窗口，我没把这个功能写进来，因为自己不太需要。如果你需要实现这个功能，看完这篇博客就会了

# 下载安装

1. 首先是 [HammerSpoon](https://github.com/Hammerspoon/hammerspoon) 的主程序。这个一定要下载安装
    - 先找到当前的[最新版](https://github.com/Hammerspoon/hammerspoon/releases/)
    - 下载安装，把图标拖到 Application 里面去
2. 我的配置文件在这里：[S1ngS1ng - HammerSpoon](https://github.com/S1ngS1ng/HammerSpoon)，懒得自己配置了就用这个好了
3. 可以直接 `git clone` 我的 HammerSpoon 库，并把我的 [init.lua](https://github.com/S1ngS1ng/HammerSpoon/blob/master/init.lua) 以及 [window-management.lua](https://github.com/S1ngS1ng/HammerSpoon/blob/master/window-management.lua) 放到本地的 `~/.hammerspoon/` 文件夹中，然后 Reload 一下就可以使用了

# 快捷键
[README](https://github.com/S1ngS1ng/HammerSpoon/blob/master/README.md) 文件里写的很清楚了，这里还是列出来吧（快捷键均为 MacOS 的）：
* 把窗口移到另一个屏幕
    * `Ctrl-Option + 左` 移到左边的屏幕
    * `Ctrl-Option + 右` 移到右边的屏幕
* 全屏
    * `Ctrl-Option-Command + M`
* 把窗口放到屏幕中心
    * `Ctrl-Option-Command + C`
* 设置窗口大小为屏幕大小的一半
    * `Ctrl-Option-Command + 左` 宽度为一半，靠左
    * `Ctrl-Option-Command + 右` 宽度为一半，靠右
    * `Ctrl-Option-Command + 上` 高度为一半，靠上
    * `Ctrl-Option-Command + 下` 高度为一半，靠下
* 设置窗口大小，以左、上为基准 （意思是左边界和上边界不动）
    * `Ctrl-Option-Shift + 左` 窗口右侧边左移
    * `Ctrl-Option-Shift + 右` 窗口右侧边右移
    * `Ctrl-Option-Shift + 上` 窗口上边界上移
    * `Ctrl-Option-Shift + 下` 窗口上边界下移
* 设置窗口大小，以右、下为基准
    * `Option-Command-Shift + 左` 窗口左侧边左移
    * `Option-Command-Shift + 右` 窗口左侧边右移
    * `Option-Command-Shift + 上` 窗口下边界上移
    * `Option-Command-Shift + 下` 窗口下边界下移

其中，居中、全屏、窗口移到其他屏幕、窗口设置为一半屏幕大小的快捷键都和 SizeUp 的一样。至于窗口大小调整，只要记住`Ctrl-Option-Shift` 是保持左边和下边不动，`Command-Option-Shift` 是保持右边和下边不动就好了。毕竟，`Ctrl` 在 `Command` 的左边

# 配置

配置方面，HammerSpoon 本身就提供了众多的 API，不光有它自己的，还有来自 Mac OS 系统的。完整的 API 文档在[这里](http://www.hammerspoon.org/docs/index.html)

## API
以下是我的配置文件中，用到的 API：
1. [hs.alert](http://www.hammerspoon.org/docs/hs.alert.html) - 用来显示提示信息。位置默认为屏幕中央，黑底白字，大概三秒钟之后消失。类似功能的还有 `hs.notify`，也就是系统的 Notification（通知）
2. [hs.grid](http://www.hammerspoon.org/docs/hs.grid.html) - 用来设置 Grid（网格）。我的配置文件中，实现窗口大小调整和位置调整，都是基于这个 API
3. [hs.hotkey](http://www.hammerspoon.org/docs/hs.hotkey.html) - 用来设置快捷键。我的配置文件中调用的是它的 `bind` 方法
4. [hs.screen](http://www.hammerspoon.org/docs/hs.screen.html) - 与屏幕（显示器）相关的 API，可以获取屏幕参数，设置 Grid（网格）
5. [hs.screen.watcher](http://www.hammerspoon.org/docs/hs.screen.watcher.html) - 用于监听屏幕（显示器）分辨率、数量变化等的 watcher
6. [hs.window](http://www.hammerspoon.org/docs/hs.window.html) - 与应用程序窗口相关的 API，提供了获取激活窗口，移动窗口到其他显示器，移动窗口到屏幕中心等方法

## 基本原理
首先，根据屏幕的长宽比，把屏幕分成 Grid（网格）。比如 16:9 的屏幕，就分成 8 * 4，也就是这样：

{% asset_img GridExample.jpg GridExample %}

那么，通过设置窗口占多少个格子，就可以实现快速布局了

## 一点建议
1. 关于 Lua 语言。如果有 Python 或者 JavaScript 的基础，写起配置来并不会太难，可以参考最新版（目前是5.3.3） Lua 语言的[官网](https://www.lua.org)。遇到**语言方面的**问题了，可以先去 StackOverflow 搜搜看，基本都能搜到结果
2. 遇到关于 HammerSpoon 的问题，可以先看看他们的 [Start Guide](http://www.hammerspoon.org/go/)，一些初级的问题可以在这里找到答案
3. Lua 语言中，调用 `function` 有两种写法。一个是 `foo.bar()`，另一个是 `foo:bar()`。用了冒号，就相当于传入了 `this`（或者说是 Python 中的 `self`）作为函数的第一个参数。因此，`foo:bar(baz)` 其实就相当于 `foo.bar(foo, baz)`
4. 用好 Console（控制台），这十分重要。安装好 HammerSpoon，点击 MenuBar 上的 HammerSpoon 图标，然后点击 Console，就可以打开控制台了。HammerSpoon 本身也提供了 Console 的接口 [hs.console](http://www.hammerspoon.org/docs/hs.console.html)
5. 如果只是简单的想在 Console 输出内容，那么只需要在代码中写上 `print` 就可以了。Lua 中支持两种 `print` 写法，一个是 `print "foo"`，适用于字符串。还有一种是 `print(foo)`，适用于变量
6. HammerSpoon 的文档中，一些方法是用`.`调用的，一些是用`:`调用的。用`.`调用的方法，基本都可以在 Console 中直接执行。但用`:`调用的方法，如果直接在 Console 中执行是会报错的。比如这个：[hs.application:allWindows()](http://www.hammerspoon.org/docs/hs.application.html#allWindows)。看名字就知道，这个是用来获取某个 Application（应用）的所有窗口。在 Console 中，我们只需要用一个实例来调用它就好了。比如，我们要显示 Chrome 的所有窗口，那么这两种写法其实是一样的：
```lua
hs.application.find('chrome'):allWindows()
hs.application.allWindows(hs.application.find('chrome'))
```

# 写在最后
开头提到过，其实 HammerSpoon 能干的事情很多，绝不止窗口管理。我会在下一篇博客中讲讲关于音乐播放器的全局控制。感兴趣的朋友可以看下我提交的[代码](https://github.com/Hammerspoon/hammerspoon/pull/1076/files)，以及[文档](http://www.hammerspoon.org/docs/hs.vox.html)

> 欢迎在页面下方评论和留言。如果你喜欢这篇文章，请帮我点个赞👍
