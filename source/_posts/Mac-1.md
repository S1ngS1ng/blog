---
layout: post
title: 你可能不知道的 Mac 技巧 - 文本操作
date: 2016-12-21 22:02:51
tags: [Tools,Mac]
---

> 找不到 Mac 上的 Home，End，PageUp？想截图还得打开 QQ？不知道 Mac 如何剪切文件？找不到全屏窗口的按钮？找不到隐藏文件夹？不知道如何向后删除？想少用鼠标，多用键盘？……
> 希望我的这几篇博文能帮到你

# 概述
我知道，类似的文章网上一搜一大把。作为一个只用 Mac 搞了不到一年开发的菜鸡，很多功能我也还在摸索中。本文旨在把自己积累的一些小技巧与大家分享，任何疑问、意见、建议，请在下方留言评论

# 文本操作
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
<kbd>Alt</kbd> + <kbd>←</kbd> 向前跳一个词
<kbd>Alt</kbd> + <kbd>→</kbd> 向后跳一个词

## 文本选取
以上所有提到的快捷键，都可以搭配 <kbd>Shift</kbd> 来实现选取

想向上选中半页的内容，只需要：
<kbd>Fn</kbd> + <kbd>Shift</kbd> + <kbd>↑</kbd>

想从当前位置选到末尾（多行），只需要：
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>↓</kbd>

想向后选中三个词，只需要（* 3 表示按三次）：
<kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd> * 3

想选择整行，只需要：
<kbd>Cmd</kbd> + <kbd>←</kbd> 然后 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>→</kbd>
当然也可以 <kbd>Cmd</kbd> + <kbd>→</kbd> 然后 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>←</kbd>

## 基础编辑操作
简单来说，大部分快捷键，就是把 Windows 的 <kbd>Ctrl</kbd> 替换成 <kbd>Cmd</kbd> 就行了，比如：
<kbd>Cmd</kbd> + <kbd>A</kbd> 全选
<kbd>Cmd</kbd> + <kbd>C</kbd> 复制
<kbd>Cmd</kbd> + <kbd>X</kbd> 剪切
<kbd>Cmd</kbd> + <kbd>V</kbd> 粘贴
<kbd>Cmd</kbd> + <kbd>Z</kbd> 撤销
<kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> 恢复（恢复撤销的内容）

对于文件操作同理，只是有一点需要特别注意。很多朋友抱怨说 Mac 不能剪切文件，只能复制，然后再把原来的删除，移动文件的时候很不方便。其实，Mac 是提供这个功能的，复制之后，只需要 <kbd>Cmd</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd> 就可以移动文件了，会出现这样的提示，确定就可以完成移动：

{% asset_img MoveNotification.jpg MoveNotification %}

其实在目标文件夹，右键菜单打开后，按住<kbd>Alt</kbd>，本来的 “Paste Item” 就会变成 “Move Item Here”：

{% asset_img MoveItem.jpg MoveItem %}

