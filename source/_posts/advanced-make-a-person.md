---
title: FreeCodeCamp 高级算法题 - 字符串排列
date: 2018-02-06 21:38:37
tags: [FreeCodeCamp,高级,算法]
categories: FCC
---

# 构造对象 (Make a person)

## 题目链接
- [中文链接](https://freecodecamp.cn/challenges/make-a-person)
- [英文链接](https://freecodecamp.com/challenges/make-a-person)

## 问题解释
- 不同于其他题目，在这道题中，我们需要写一个构造函数。这个构造函数接收一个字符串参数 `firstAndLast`
- 如果 `str` 为 `"Bob Ross"`，则构造出实例的全名为 "Bob Ross"，姓氏为 "Ross"，名字为 "Bob"

<!--more-->

# 解题思路
- 这道题其实难度很小。如果你熟悉 "构造器" (constructor) 的概念，以及 JavaScript 中的 `new` 操作符，那代码很快就可以写出来
- 简单来说，在 JavaScript 中，构造器就是一个函数 (但函数可以不用作构造器)。比如题目中给出了：

```js
var bob = new Person('Bob Ross');
```

- 也就相当于用 `new` 操作符调用 `Person` 构造器，并把返回值赋值给变量 `bob`，会发生以下三件事：
    1. 创建一个对象，这个对象的原型继承自 `Person.prototype`
    2. 对象拥有 `Person` 函数中用 `this` 定义的属性或方法
    3. 如果 `Person` 函数本身又返回值，那这个返回值就会赋值给 `bob`。否则，就把第一步创建的对象赋值给 `bob`

## 参考资料
- [new 操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)

## 关于原型链继承
- 上面说到，原型继承自构造函数的 `.prototype`。原型链继承一直是一个比较难理解的部分，至少对我来说，理解了原理，有时候还是用不好