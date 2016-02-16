+++
categories = ["技术"]
date = "2015-11-07T06:22:27+09:00"
tags = ["C/C++"]
title = "C语言中static的用法举例"
featured_image ="/img/cpp-logo.jpg"
enablecomment = "true"

+++

C语言中static主要有以下用途。 分别举例说明一下。

* static局部变量
* static全局变量
* static函数

<!--more-->

### static局部变量
普通的函数内局部变量的内存来自stack，
局部变量前加static，它的内存就不来自stack了，而是来自heap(①)。也就导致这个变量的生命期边长了：
程序启动时这个变量就被初始化，程序退出时，其内存才被收回。

(①):应该是heap，抱歉这点暂时没有仔细研究。不知道和动态内存申请用的heap有何区别。

另外，普通变量内存来自stack，也就决定了你不能申请size太大的局部变量。过大的话，编译器就报错了。

举例：循环调用下面的函数，其函数返回值从0开始每次加1.
~~~cpp
int getValue()
{
	static int x = 0;
	return (x++);
}
~~~
这么做有什么用呢？举个实际例子：
~~~cpp
struct DbInfo{
	int x;
	int y;
}
int pDbInfo getValueFromDatabase(int key)
{
	static DbInfo* pDbInfo = NULL;
	static int nDbInfo = 0;
	if(NULL== pDbInfo)
	{
		getInfoFromDb(&pDbInfo);
	}
	for(int i=0 ;i < nDbInfo; i++)
	{
		if(key == pDbInfo[i].x)
		{
			return pDbInfo[i].y;
		}
	}
	return -1;
}
~~~
上面例子里，static变量保存了第一次从数据库得到的信息，可以防止重复访问数据库。
一点注意事项：如果是多线程环境下访问这个函数，就需要用信号量之类保护了。

### static全局变量
全局变量和static局部变量的生命期相同，但是可见范围是整个程序。
全局变量用static修饰之后，它的可见范围变为所在文件。
这也算是C控制访问数据级别的一个方法吧。

~~~cpp
static int g_nInstanceNum = 0;
int main()
{
	return 0;
}
~~~
如上定义一个static全局变量，即使在别的文件里用extern声明这个变量，链接器（linker）也会提示找不到。
### static函数
和static全局变量类似，该函数的可见范围编程所在文件。