layout: post
title: HammerSpoon - 不止是窗口管理
date: 2016-11-23 22:23:33
tags: Tools, HammerSpoon
---


## 简介
### 概述
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

### 使用

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

## 下载安装

* 首先是 [HammerSpoon](https://github.com/Hammerspoon/hammerspoon) 的主程序。这个一定要下载安装
    * 先找到当前的[最新版](https://github.com/Hammerspoon/hammerspoon/releases/)
    * 下载安装，把图标拖到 Application 里面去
* 我的配置文件在这里：[init.lua](https://github.com/S1ngS1ng/HammerSpoon/blob/master/init.lua)，懒得自己配置了就用这个好了
* 把 `init.lua` 放到 `~/.hammerspoon/` 里面去，然后 Reload 一下就搞定了

## 快捷键
[README](https://github.com/S1ngS1ng/HammerSpoon/blob/master/README.md) 文件里写的很清楚了，这里还是列出来吧（快捷键均为 MacOS 的）：
* 把窗口移到另一个屏幕
    * `Ctrl-Alt + 左` 移到左边的屏幕
    * `Ctrl-Alt + 右` 移到右边的屏幕
* 全屏
    * `Ctrl-Alt-Command + M`
* 把窗口放到屏幕中心
    * `Ctrl-alt-Command + C`
* 设置窗口大小为屏幕大小的一半
    * `Ctrl-Alt-Command + 左` 宽度为一半，靠左
    * `Ctrl-Alt-Command + 右` 宽度为一半，靠右
    * `Ctrl-Alt-Command + 上` 高度为一半，靠上
    * `Ctrl-Alt-Command + 下` 高度为一半，靠下
* 设置窗口大小，以左、上为基准 （意思是左边界和上边界不动）
    * `Ctrl-Alt-Shift + 左` 窗口右侧边左移
    * `Ctrl-Alt-Shift + 右` 窗口右侧边右移
    * `Ctrl-Alt-Shift + 上` 窗口上边界上移
    * `Ctrl-Alt-Shift + 下` 窗口上边界下移
* 设置窗口大小，以右、下为基准
    * `Alt-Command-Shift + 左` 窗口左侧边左移
    * `Alt-Command-Shift + 右` 窗口左侧边右移
    * `Alt-Command-Shift + 上` 窗口下边界上移
    * `Alt-Command-Shift + 下` 窗口下边界下移

其中，居中、全屏、窗口移到其他屏幕、窗口设置为一半屏幕大小的快捷键都和 SizeUp 的一样。至于窗口大小调整，只要记住`Ctrl-Alt-Shift` 是保持左边和下边不动，`Command-Alt-Shift` 是保持右边和下边不动就好了。毕竟，`Ctrl` 在 `Command` 的左边

## 配置

配置方面，HammerSpoon 本身就提供了众多的 API，不光有它自己的，还有来自 Mac OS 系统的。完整的 API 文档在[这里](http://www.hammerspoon.org/docs/index.html)

### API
以下是我的配置文件中，用到的 API：
1. [hs.screen](http://www.hammerspoon.org/docs/hs.screen.html) - 与屏幕（显示器）相关的 API，可以获取屏幕参数，设置 Grid（网格）
2. [hs.screen.watcher](http://www.hammerspoon.org/docs/hs.screen.watcher.html) - 用于监听屏幕（显示器）分辨率、数量变化等的 watcher
3. [hs.window](http://www.hammerspoon.org/docs/hs.window.html) - 与应用程序窗口相关的 API，提供了获取激活窗口，移动窗口到其他显示器，移动窗口到屏幕中心等方法
4. [hs.grid](http://www.hammerspoon.org/docs/hs.grid.html) - 用来设置 Grid（网格）。我的配置文件中，实现窗口大小调整和位置调整，都是基于这个 API
5. [hs.alert](http://www.hammerspoon.org/docs/hs.alert.html) - 用来显示提示信息。位置默认为屏幕中央，黑底白字，大概三秒钟之后消失。类似功能的还有 `hs.notify`，也就是系统的 Notification（通知）
6. [hs.hotkey](http://www.hammerspoon.org/docs/hs.hotkey.html) - 用来设置快捷键。我的配置文件中调用的是它的 `bind` 方法

### 基本原理
首先，根据屏幕的长宽比，把屏幕分成 Grid（网格）。比如 16:9 的屏幕，就分成 8 * 4

比如一个 4 * 2 的网格，就是这样：
{% asset_img Grid-4-2.jpg Grid Image %}

那么，通过设置窗口占多少个格子，就可以实现快速布局了

