---
title: 你可能不知道的 Mac 技巧 - macOS 的实用功能
date: 2017-02-12 20:16:53
tags: [Mac]
---

# 关于 Help Menu
顺便说一句，我把上面那个 Show Help Menu 给关了，是因为它和 Webstorm 里面的“注释代码”功能有冲突。其实这个功能很方便，比如有时候 Chrome 很卡，我们只要用 <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>/</kbd> 打开 Help Menu，光标会自动定位到搜索栏，然后输入 “task manager” 就可以打开 Chrome 的进程管理器了。任何软件，所有在菜单栏出现的操作，都可以通过这种方式按名称搜索到

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

