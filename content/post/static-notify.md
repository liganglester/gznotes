+++
categories = ["技术"]
date = "2016-02-06T23:02:50+09:00"
draft = true
enablecomment = "true"
featured_image = ""
tags = ["Win32"]
title="Static控件的一个隐蔽特性"
sub-title = "双击带有SS_NOTIFY属性的Static控件，windows会将Static内容copy到剪贴板"

+++

Static控件常用来显示文字列，一般不会和用户有别的交互。

但是，从WindowsVista之后，多了了一个很多人不知道的功能：<br>双击带有SS_NOTIFY属性的Static控件，windows会将Static内容copy到剪贴板。

<!--more-->
## 到底怎么回事？
一个带有SS_NOTIFY属相的Static控件，比较常见的处理是:<br>在收到WS_LBUTTONDBLCLK消息后，向父窗口发WM_COMMAND告知自己被双击(STN_DBLCLK)。

在Vista之后，还会GetWindowText()得到Static的文字列，放到剪贴板里。
挺贴心，不过有点隐蔽。有时候也添了点小麻烦。

## 一点麻烦
在Vista之前开发的软件，有的是依赖双击Static后Static向父窗口发的WM_COMMAND来弹出其他画面的。
那么，下面的情况就让用户有点意外了：

1. 在其他程序里copy一点内容
2. 双击Static
3. 在新打开的画面粘贴刚刚copy的内容

上面第3部贴出来的是Static的文字列，用户就会抱怨：这是肿么回事呢？？

## 怎么解决？
虽说这是微软加的功能，但是客户如果不喜欢，就得想办法解决。

简单讲就是将Static控件的消息处理函数(WndProc)替换成自己写的。
在自己写的WndProc里，对WS_LBUTTONDBLCLK做特殊处理。

~~~cpp
BOOL disableCopyOnDblClickStatic(HANDLE hStatic)
{
	// 得到默认的WndProc
	WNDPROC pOldWndProc = (WNDPROC)GetWindowLong(hStatic, GWL_WNDPROC);
	// 让Static自己管理这个默认WndProc：这样在新WndProc里，就可以得到了。
	SetWindowProc(hStatic,GWL_USERDATA, (LONG)pOldWndProc);

	// 下面newWndProc是给Static新写的WndProc，
	// 收到WS_LBUTTONDBLCLK后，只给父窗口发个WM_COMMAND就直接返回。
	// 其他消息通过CallWndProc函数继续使用windows默认处理
	SetWindowProc(hStatic,GWL_WNDPROC, (LONG)newWndProc);
}
~~~

## 这么修改的优缺点
缺点：需要针对每个有问题的Static控件进行修改。

优点：打击面不会太大，因为不能保证所有画面里，这个动作都被认为是bug(那样的话，就显得微软太蠢了哈。。)