+++
categories = ["技术"]
date = "2015-11-07T06:27:54+09:00"
tags = ["Win32"]
title = "关于对话框中单选框焦点设定的一点调查"
featured_image ="/img/win95.jpg"
enablecomment = "true"

+++

对话框中单选框(radio button)的焦点控制，有点说道。

比如，调用SetCheck()并不能让其完全处于选中状态，和手动点击达到的效果不同。

<!--more-->
### 对话框的消息处理函数（dialog  proc）返回值

此函数返回值只有一个意思： 返回TRUE是告诉windows操作系统，把默认焦点设置到对话框资源（RC）文件里的第一个控件上。
对话框的RC文件是一个文本文件，修改控件在这个文件里的先后位置，也就可以修改画面初期显示后的默认焦点所在控件。

不过，如果在dialog proc里，你通过SetFocus（）将焦点设置到别的控件上，就应该返回FALSE。否则操作系统还是会将焦点设置到第一个空间上。


### 对话框的消息处理函数（dialog proc）返回值

单选框（radio button）的焦点设定比较容易出问题。因为有时候视觉上radio button被选上了，但是一些内部状态没有设置，系统内部并不认为它被选上了，也就进一步影响按tab键时焦点的切换。

* BM_SETCHECK只能让radio在视觉上变成选中状态,但实际上和通过点击达到的选中状态还是不同的。
* 调用SetFocus()把焦点设置到这个radio button上，也仍然达不到手动鼠标点击实现的选中状态。这一点可以通过tab键提供焦点时，焦点的移动方式不同来证实。
* 只有鼠标点击，才能让一个radio button处于完全的选中状态。

### Tab和4个Arrow键在切换空间焦点操作上的作用并不相同

Arrow可以在一个radio button group内移动焦点，而tab在更大的范围内。比如一个radio已经选上了，那么按tab键焦点就不会走到其之下的radio，而是跳过下面未选中的radio，走到这个radio group之下的控件。在切回到radio group的时候，焦点也只会在那个选中的radio停留。想在group内的各个radio之间移动，可以用四个Arrow键。

上述内容主要参考这段的[MSDN描述](https://msdn.microsoft.com/en-us/library/windows/desktop/ms645469\(v=vs.85\).aspx)