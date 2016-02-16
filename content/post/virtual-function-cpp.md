+++
title = "虚函数原理"
date = "2015-11-09T23:20:53+09:00"
categories = ["技术"]
tags = ["C/C++"]
keywords = ["virtual function"]
featured_image ="/img/polymorphism.jpg"
enablecomment = "true"

+++

我们都知道：子类继承父类的虚函数后，用父类指针可以调用子类函数，这也是实现多态的前提。

那么，C++是怎么实现这个特性的呢？
看看虚函数表的初始化过程，就不难理解其原理了。

<!--more-->

![多态、polymorphism](/img/polymorphism.jpg)

### 虚函数表的诞生
在C++的对象里，如果我们定义了虚函数，编译器会在这个对象里自动增加一个数据成员：虚函数表(virtual function table)。

~~~cpp
class Person{
	public:
	virtual void sayHello(){printf("Person hello");}
	virtual void smile(){printf("Person smile");}
	private:
	int m_nAge;
};
~~~

例如：上面Person类里定义了2个虚函数，那么Person的Object的内存布局应该如下图所示：

![图1：虚函数表的产生](/img/vtbl.jpg)

在VS2005的watch窗口可以看到（__vfptr）：

![图2：VS2005里看虚函数表](/img/virtualtablebirth.jpg)
(成员变量没有初始化，所以是0xcccccccc)

~~~cpp
class Student : public Person{
	public:
	virtual void smile(){printf("Student smile");}
};
~~~

当子类继承父类的虚函数表后，子类内存布局如下：

![图3：子类继承虚函数后虚函数表的变化](/img/vtbl-student.jpg)

![图4：VS2005看虚函数表的变化](/img/virtualtablechange.jpg)

这个变化过程是怎么实现的呢，let's continue!

### 虚函数表的初始化过程
有父类的对象，先由父类初始化数据成员，然后由子类初始化数据成员。

所以，Student::Student()函数之前，会执行Person::Person（）函数：将虚函数表里都写上了Person的函数；
而Student类继承了smile函数，所以会在Student::Student（）里将Person::smile()
替换(覆盖)成Student::smile()的地址（也就是图3里红色部分）。

由于虚函数表位于C++对象内存布局的最前面，所以即使是父类的指针，也能访问到虚函数表。
通过父类指针调用虚函数表里函数的时候，只是根据函数的类型到相应位置取出函数地址，
而不会关心这个函数是父类的还是子类的。

算是偷梁换柱吧:-)

![图5：虚函数表的初始化过程](/img/virtualtablesummary.jpg)