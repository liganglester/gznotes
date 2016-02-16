+++
categories = ["技术"]
date = "2015-11-19T06:22:27+09:00"
tags = ["C/C++"]
title = "回调(callback)函数简介"
featured_image ="/img/cpp-logo.jpg"
enablecomment = "true"

+++

callback函数在软件设计中被广泛使用。可以说没有他就没有各种灵活的软件结构。
什么是callback函数？有哪些常见用法？

<!--more-->

## 什么是callback函数

callback函数打个比方就是“卧底”。
即：A模块定义函数f，交给B模块调用。B模块掌握调用f的时机。f执行时与A模块有信息交互。

一般来讲，因为f定义于A，所以会了解A的部分内部数据结构，也就方便其在执行时更新数据。

当然，这只是一种可能性，f执行时也可能仅仅是向A发条消息就return了。

## 举例1：windows的消息处理函数

写过win32画面程序的同学应该都知道，我们写画面程序需要定义一个windowProc函数，处理windows消息。
这个函数就是一个callback函数。

这个函数使我们的程序定义的，通过RegisterClass()函数将这个windowProc函数登录到windows系统。
windows系统在收到和我们窗口相关的消息时，就会调用我们提供的windowProc函数。

## 举例2：避免模块间循环依赖

软件系统有很多是分层的，像是积木一样一层一层。。
一般来讲，都是上层利用下层的服务，调用下层提供的API。

但是个别情况，下层也可能调用上层API，这样两个模块就循环依赖了！

这个时候callback的解决办法是：下层提供一个callback登录函数，让上层提供一个callback函数。
这样形式上仍然是上层依赖下层，而下层就可以通过callback函数利用上层的服务了。

## 举例3： C#的event

最近学了一点C#，发现画面类支持登录event，语法非常简单，记不清了，类似于这样吧：
~~~cpp
form.clickOK += handleOK()
~~~
handleOK()是业务层定义的函数。

这样，画面层就可以在不了解业务层的前提下，将画面时间传递给业务层了！

要知道，“不知道”这件事在软件设计中很重要。也就是所谓的“关心分离” Separation of concerns.
各管各的，能不知道的一定不要知道，信息知道多了也就是有耦合了，给bug提供了温床。

其他应该有很多例子，在实际工作中都会慢慢接触的。

最后一句：callback函数，很好，很重要。