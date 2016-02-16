+++
date = "2015-11-06T06:07:16+09:00"
draft = true
title = "（译）JavaScript简史"
slug = "javascript-brief-history"
categories =["外语"]
tags=["JavaScript"]
featured_image = "/img/javaScriptLogo.jpg"
enablecomment = "true"


+++

这篇文章是我练习翻译的，原文参见[英语原文地址](http://foorious.com/articles/brief-history-of-javascript/)

JavaScript这门编程语言很有传奇色彩。

>JavaScript is such a peculiar language.
<!--more-->

他是唯一一门基于prototype（而非class）的主流语言。很多人都对他有误解。人们曾经挺瞧不起这门语言，甚至争论他到底是不是一门真正的编程语言。可现在他正被广泛应用，包括在服务器端（node.js）。

>It’s **the only mainstream language that uses prototypes instead of classes**. It’s widely misunderstood.
Until a few years ago people would look down to it and even debate whether it was a real programming language or not—and now it’s used all over, including on servers (Node.js).

JavaScript如今已经变成了一门至关重要的编程语言。
他被广泛应用于各种联网设备，成为web平台（platform）的支柱和各种web/mobile应用（applications）的基础。借助于node.js，javascript在服务器端也大有用武之地，开始崭露头角。

>JavaScript has become an extremely important language. It’s ubiquitous in web-capable devices, a pillar of the Web Platform and the base for most web and mobile applications. Thanks to Node.js, it’s making its way on the server as well.

为了理解javascript，咱们得先简单回顾一下浏览器和web的发展历程。

>To understand JavaScript, however, we have to take a little detour and go back to the history of browsers and the Web.

### 关于Web

1990年末，Tim Berners-Lee发明了World Wide Web.

internet和web这两个词虽然经常被互换使用，感觉没啥差别，其实他们并不是不是一个东西。internet指的是有形的网络本身，出现也大大早于web。而web（world wide web）是我们每天在看，在用的东西：一个由无数超文本（hypertext）文档连成的网络。通过浏览器或者其他专用程序，我们每天都在访问这个巨大网络里的信息。

internet刚刚出现后面临的一个问题是，由于电脑的差异性，虽然电脑可以互联，但是网络上的电脑却很可能无法互相沟通。这话放在21世纪说可能有点不可思议，不过早年标准化还没普及，好比虽然在海底铺了光缆，不懂外语的话，还是听不懂大洋对岸的洋人在说啥。一台电脑通过tcp/ip协议连接到另一台电脑了，但是文件格式不同，也就无法打开文件。这个问题导致虽然联网了电脑间很难协作和共享信息。

web就是用来解决这个问题，让当时的科学家可以互相共享信息。

解决方法具有革命性又很容易理解：把文档内容用一种通用语言（HTML）编码，然后用一个专门软件（浏览器）来解释，显示这个文档。每种电脑都有自己专门的浏览器，保证按照作者初衷正确显示文档，而文档本身保持不变。很简洁吧！

所以呢，Tim Berners-Lee发明了web、第一个web服务器、第一个web浏览器（名字就叫WorldWideWeb）、第一个网页编辑器（WorldWideWeb本身也是个网页编辑器）还有第一个网页（其中介绍了他的相关工作内容）。

### Browser wars
___Mosaic___

Tim Berners-Lee （还有很多人）当时只是把web当成科学家和研究者的信息交换工具。幸运的是，还是有些人注意到了web更大的潜力。

一群伊利诺伊大学厄巴纳-香槟分校( University of Illinois Urbana-Champaign )的学生做出了Mosaic，这个浏览器软件另 World Wide Web流行起来。

原因可能有许多，不过主要的原因可能是他们没有束缚于 Berners-Lee的想法，更进一步增加了IMG tag（想想一个网页如果没有任何图片会多枯燥。译者注），这另网页作者可以做出更漂亮的网页。

这个浏览器软件广受欢迎，很快成为最流行的浏览器。Mosaic browser (1993)

___Netscape Navigator___

网景（ Netscape）公司挖走了Mosaic的创作者，让他们重新实现了一个浏览器，取名 Navigator。这个浏览器的生意让 Navigator 赚了一大笔钱。

人们之所以愿意花钱买 Navigator，是因为 Navigator更加突破了 Berners-Lee的想法，并且实现了很多人们需要的好东西（原文写的useless，应该是笔误吧），比如很多可选字体和其他一些我们今天已经是标配的东西。

___Microsoft___

Navigator当时很酷的，在所有操作系统都有几近相同的显示效果。另一个当时非常棒的功能是，通过一个基于web的系统（ web-based system ）用户可以编辑网络上其他电脑上的文件，即使那台电脑使用不同的操作系统。

当然，微软容忍不了这个，因为这对windows业务不利。

所以，微软发布了 Internet Explorer并且免费提供。之后还开始了一场臭名卓著的浏览器之战（ browser wars ）。

### JavaScript

总算讲到正题了！

之后呢， Netscape就开发了 JavaScript，起初名字叫 LiveScript。

LiveScript对 Netscape 公司至关重要。他们想实现一种类似苹果公司 HyperCard 的产品并把它加到浏览器里（ HyperCard 是 Apple Macintosh and Apple IIGS 上的一款编程工具，另开发者更容易开发软件）。另外， LiveScript 也可以运行于服务器端。

这样， Netscape就可以用他们受欢迎的浏览器占据客户端业务市场，以及服务端市场。

### Java, Scheme, and Self

Netscape找到Brendan Eich来开发LiveScript。 Brendan Eich想基于Scheme开发LiveScript，可是Netscape的管理层认为人们不会喜欢 Scheme 的语法，让 Eich 把LiveScript设计得更像Java，Visual BASIC等当时受欢迎的语言。

所以呢，LiveScript借用了Java的语法(因为不得不这样)， Scheme语言的函数模型(function model)和Self语言的基于prototype的特性( prototypical nature )。

由于Netscape公司当时形式紧急， LiveScript语言从开始开发到发布只用了2个星期！！

### Sun, 以及“JavaScript”名字的由来

Netscape对微软的OS业务造成了威胁。微软开始采取动作后，Netscape找到了Sun联手进行反击。

Sun和Netscape达成协议过程中有件事很有意思，那就是关于怎么对待LiveScript。Sun想用Java取而代之，但是Netscape不舍得自己的这个宝。

然后呢，有个人（具体不详）想到个好主意：将LiveScript重命名为JavaScript。当然“Java”是Sun的注册商标，不过他们当时他们对这个提议也很赞同，给了Netscapte许可来使用“JavaScript”这个名字。

成交！

### Microsoft’s JScript

当然，微软的浏览器也需要个脚本语言。所以他们就模仿(reverse-engineer)JavaScript做了一个，集成到Internet  Explorer里了。

因为“Java”这个名字是需要license的，他们只好取名JScript，其实和JavaScript完全是一个东西。

### ECMAScript

*下面还没翻译*

With all this mess, JavaScript needed to be standardized. So, Netscape looked for a body that would do just that. The W3C refused to do it, and eventually they ended up at the European ECMA (weird).

ECMA did standardize the language, but didn’t fix the obviously awful and confusing “JavaScript” name. The thing is, they didn’t know what to call it. So, they just published it with their working name: ECMAScript.

JavaScript, JScript, and ECMAScript are sometimes thought to be different things, but are simply three different names that mean the same thing: JavaScript.
An unique language
JavaScript was (and is) truly unique.

It doesn’t use classes, for instance: in every other programming language, objects are instances of a class, and inheritance works by extending an object’s class. Instead, JavaScript uses prototypes, which means that an object can be augmented by using other objects directly, without passing by classes.

This is really awesome, and if you use prototypes you can still do classes (you can’t do the other way around), but inheriting directly from objects—along with its great function model—are what makes JavaScript such a powerful language.

JavaScript (perhaps because of it “missing” classes?) used to be considered by many as a joke, and a language for amateurs.

When Google popularized Ajax, JavaScript started gaining a lot of popularity, to eventually become one of the most popular programming languages in use today.
Current version

ECMA is still in charge of the language. While at the time of writing (Oct, 2014) ES6 is the latest release and ES7 is already in the works, the most recent version that has broad browser support is ES5 (if you don’t need to support IE8). Old browsers support ES3 (ES4 was abandoned and was never released).

ES5 is pretty great. It cleaned JavaScript up from a lot of design errorsthat the language  shipped with because of its quick/premature release. ES5 introduces “strict mode”, which allows developers to specify that they only wish to use features from the modern standard, and a lot of other interesting additions.