+++
categories = ["技术"]
date = "2015-12-07T11:33:43+09:00"
draft = true
enablecomment = "true"
featured_image = "/img/new_visitor.jpg"
tags = ["javascript","cookie"]
title = "用javascript+cookie判断用户是否首次访问网站"

+++

有时，针对首次访问网站的用户，需要弹出特定的消息。
比如：本网站做了一个“向首次访问的用户做问卷调查”功能。

实现方法：
在cookie里记录用户是否访问过的信息。通过javascript读写cookie。

<!--more-->

## 什么是cookie？
从安全角度考虑浏览器是不能直接写本地硬盘的。
不过有些信息需要本地保存，就发明了cookie这么个东西。
浏览器写入cookie的信息大小，可以写的cookie个数都有限制。
另外，cookie是可以设置期限的。例如：30天期限的话，30天后这个cookie就无效了（被删除了吧）。

cookie的详细信息就请教google吧。

## 一个实现细节
我在实现该功能的时候，仅当访客滚动页面快到底部时，才去判断用户是否首次访问。
如果是首次访问，就弹出对话框（DIV）询问是否愿意配合做[问卷调查](https://www.wenjuan.com/s/AFbMJj/)。

## 代码
闲话少说吧，具体内容参见注释。
如果有没写清楚地，麻烦留言。

~~~javascript
<script type="text/javascript">
	// 绑定在页面滚动时间上的处理函数。每当用户滚动页面，这个函数都会被调用。
	$(window).scroll(function() {
		var bottom = $(document).height() - $(window).height();
		var position = $(this).scrollTop();
		if(position > 900 || // 仅当访客已经滚动一定范围（阅读一些内容）后
		position > bottom*0.67 ) //当页面较小时，按照比例算
		{
			var newVisitor = isNewVisitor();// 如果是新访客
			if(newVisitor === true)
			{
				// 动画弹出消息框
				$("#invite-questionnaire").animate({right:"0", bottom:"0"}, 100);

				// 标记：已经向该访客弹出过消息。30天之内不要再弹
				setCookie("gznotes-visited","true", 30);
			}
		}
	});
</script>
~~~


~~~javascript
	// 访客点击“没空”后，用这个函数隐藏消息框
	function hideQuestionnaire()
	{
		$("#invite-questionnaire").css("display","none");
	}
~~~

~~~javascript
function isNewVisitor() {
	// 从cookie读取“已经向访客提示过消息”的标志位
    var flg = getCookie("gznotes-visited");
    if (flg === "") {
		return true;
    } else {
		return false;
    }
}
// 写cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires +";path=/";
} 
// 读cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 
~~~