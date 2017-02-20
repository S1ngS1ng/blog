---
layout: post
title: 你可能不知道的 Mac 技巧 - 文本操作
date: 2017-01-17 00:11:30
tags: [Tools,Mac]
---

> 找不到 Mac 上的 Home，End，PageUp？想截图还得打开 QQ？不知道 Mac 如何剪切文件？找不到全屏窗口的按钮？找不到隐藏文件夹？不知道如何向后删除？想少用鼠标，多用键盘？……
> 希望我的这一系列博文能帮到你

# 概述
我知道，类似的文章网上一搜一大把。作为一个只用 Mac 搞了不到一年开发的菜鸡，很多功能我也还在摸索中。本文旨在把自己积累的一些小技巧与大家分享，任何疑问、意见、建议，请在下方留言评论

> 补充：可以到这里看看官方的[快捷键文档](https://support.apple.com/zh-cn/HT201236)

# 移动与选取
## 光标移动
刚从 Windows 转过来的时候可能会发现，Mac 上没有 <kbd>Home</kbd> 和 <kbd>End</kbd> 键。其实，直接这样就好了：
<kbd>Cmd</kbd> + <kbd>←</kbd> 移至行首 (Home)
<kbd>Cmd</kbd> + <kbd>→</kbd> 移至行尾 (End)

类似的，找不到 <kbd>PageUp</kbd> 和 <kbd>PageDown</kbd>，其实 Mac 系统也是有的：
<kbd>Fn</kbd> + <kbd>↓</kbd> 向下翻页 (PageUp)
<kbd>Fn</kbd> + <kbd>↑</kbd> 向上翻页 (PageDown)

再比如，对于一些很长的网页，想快速跳到顶部和底部，即使网页上没有按钮也没关系，可以这样：
<kbd>Cmd</kbd> + <kbd>↑</kbd> 回到顶部
<kbd>Cmd</kbd> + <kbd>↓</kbd> 跳到底部

Mac 中也提供了按词跳光标的功能，英文中就是通过空格来判断：
<kbd>Option</kbd> + <kbd>←</kbd> 向前跳一个词
<kbd>Option</kbd> + <kbd>→</kbd> 向后跳一个词
<!-- more -->

## 删除
Windows 系统很贴 ♂ 心地为我们加上了两个删除键，一个是位于等号右边的退格（BackSpace），一个是位于方向键上面的向后删除（Delete）。Mac 虽然只有一个 <kbd>delete</kbd>，相当于 Windows的退格。但其实，我们只要通过组合键 <kbd>fn</kbd> + <kbd>delete</kbd> 就可以实现向后删除了

不仅如此，<kbd>delete</kbd> 和 <kbd>fn</kbd> + <kbd>delete</kbd> 绝大部分情况下可以搭配 <kbd>Option</kbd> 实现向前/向后删除一个词。一些情况下可以搭配 <kbd>Cmd</kbd> 实现删除整行（在编辑器 Atom 中不行，因为 Atom 把这个组合键默认设置成了删除至行首/行尾，如有需要，改下配置就好了）

## 文本选取
以上所有提到的快捷键，都可以搭配 <kbd>Shift</kbd> 来实现选取

想向上选中半页的内容，只需要：
<kbd>Fn</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>

想从当前位置选到末尾（多行），只需要：
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd>

想向后选中三个词，只需要（\* 3 表示按三次）：
<kbd>Option</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd> \* 3

想选择整行，只需要：
<kbd>Cmd</kbd> + <kbd>←</kbd> 然后 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd>
当然也可以 <kbd>Cmd</kbd> + <kbd>→</kbd> 然后 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd>

# 编辑操作
## 基础操作
简单来说，大部分快捷键，就是把 Windows 的 <kbd>Ctrl</kbd> 替换成 <kbd>Cmd</kbd> 就行了，比如：
<kbd>Cmd</kbd> + <kbd>A</kbd> 全选
<kbd>Cmd</kbd> + <kbd>C</kbd> 复制
<kbd>Cmd</kbd> + <kbd>X</kbd> 剪切
<kbd>Cmd</kbd> + <kbd>V</kbd> 粘贴
<kbd>Cmd</kbd> + <kbd>Z</kbd> 撤销
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> 恢复（恢复撤销操作）

## 移动文件
> 这部分可能不应该放在这篇博客中。只是个人觉得，与复制粘贴文本快捷键一起去记忆和使用，会比较好理解

上面提到的大部分快捷键对于在 Finder 中操作文件也是同理，我们可以全选、复制、粘贴甚至撤销和恢复，唯独不能通过 <kbd>Cmd</kbd> + <kbd>X</kbd> 来剪切

很多朋友抱怨说 Mac 只能复制粘贴文件之后再把原来的删除（顺便，把文件移动到 Trash 的快捷键是 <kbd>Cmd</kbd> + <kbd>delete</kbd>），移动文件的时候很不方便。其实，Mac 是有这个功能的。复制之后，在目标文件夹右键，菜单打开后，按住<kbd>Option</kbd>，本来的 “Paste Item” 就会变成 “Move Item Here”：

{% asset_img MoveItem.jpg MoveItem %}

当然，也可以通过快捷键 <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>V</kbd> 来完成移动文件，会出现这样的提示，确定即可：

{% asset_img MoveNotification.jpg MoveNotification %}

## 格式快捷键
在大部分文本编辑器，比如 Microsoft Word 或者 Apple 的 Pages，Numbers 中，我们可以用快捷键调格式：
<kbd>Cmd</kbd> + <kbd>B</kbd> 文字加粗（Bold）
<kbd>Cmd</kbd> + <kbd>I</kbd> 斜体文字（Italic）
<kbd>Cmd</kbd> + <kbd>U</kbd> 文字下划线（Underline）

# 特殊快捷键
> 补充：有朋友提到，绝大部分文字编辑区都支持以下快捷键，如果你用 Emacs，可能对这些不会陌生

这些快捷键可以不去记忆，对于开发者来说可能会偶尔用，对于绝大部分用户，可能并不怎么需要

比如在 iTerm 中，我们会发现，用 <kbd>Cmd</kbd> + <kbd>←</kbd> 是跳不回开头的，因为 iTerm 已经把这个键设置成了跳到上一个 Tab。同样，用 <kbd>Option</kbd> 键跳单词也不行了

这种情况下，我们需要这些特殊快捷键来实现功能：
<kbd>Ctrl</kbd> + <kbd>A</kbd> 跳到行首（Home）
<kbd>Ctrl</kbd> + <kbd>E</kbd> 跳到行尾（End）
<kbd>Ctrl</kbd> + <kbd>F</kbd> 向后移动一个字符
<kbd>Ctrl</kbd> + <kbd>B</kbd> 向前移动一个字符
<kbd>Ctrl</kbd> + <kbd>P</kbd> 光标上移一行
<kbd>Ctrl</kbd> + <kbd>N</kbd> 光标下移一行

向前后跳词的方式比较特殊，我们需要：
<kbd>ESC</kbd> + <kbd>F</kbd> 向后移动一个单词
<kbd>ESC</kbd> + <kbd>B</kbd> 向前移动一个单词
同时，iTerm 也为我们提供了特殊快捷键：
<kbd>Ctrl</kbd> + <kbd>←</kbd> 向前移动一个单词
<kbd>Ctrl</kbd> + <kbd>→</kbd> 向后移动一个单词
再比如，iTerm 中我还经常用这个：
<kbd>Ctrl</kbd> + <kbd>U</kbd> 删除整行

这些快捷键，特别是在手打比较长的命令的时候，会很有用。这些快捷键也适用于其他的大部分环境。对于一般用户，没必要去特别记忆了，用上面提到的那些就好

# 一点点补充
关于 <kbd>Cmd</kbd> + <kbd>F</kbd> 文字查找，我打算在后面说 Chrome 操作的时候再提及。关于 <kbd>Cmd</kbd> + <kbd>R</kbd> 文字替换，暂时不打算多介绍。个人觉得这个功能对于普通用户来说可能意义不太大吧。而且现在很多编辑器和软件都有比较友好的替换窗口，用起来也不会太困难

# 写在最后
目前打算从以下几个方面来总结常用的技巧：
1. 文本编辑相关操作（本篇）
2. [截图，Gif 制作以及 App 推荐](singsing.io/blog/2017/01/23/Mac-2/)
3. 系统快捷键
4. 如何调教系统，让它更符合你的使用习惯
5. Finder 和 Chrome 里的一些实用快捷键
6. 用 HammerSpoon 配置自己的全局快捷键

包括 iTerm 和 WebStorm 在内的我每天都会用的 App，如果把它们的快捷操作也写全，内容可能会过多，而且并不是所有人都需要用，只打算在文章中稍微提一些。另外我也一直计划着要写一个详解 WebStorm 的系列文章

我想，这一篇已经基本覆盖了文本编辑中的重要操作。如果你觉得还有需要补充的，欢迎在下方留言

> 如果你喜欢这篇文章，请帮我点个赞👍
