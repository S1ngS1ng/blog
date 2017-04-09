---
title: FreeCodeCamp 中级算法题 - 基本布尔类型检查
date: 2017-04-08 05:19:36
tags: [FreeCodeCamp,中级,算法]
categories: FCC
---

# 基本布尔类型检查 (Boo Hoo)

## 题目链接

- [中文链接](https://www.freecodecamp.cn/challenges/boo-hoo)
- [英文链接](https://www.freecodecamp.com/challenges/boo-hoo)
- 级别：中级 (Intermediate Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个参数 `bool`，为待判断的值。返回值为 Boolean，若传入的 `bool` 是布尔类型，就返回 `true`，否则返回 `false`
- 比如，传入 `true` 或者 `false`，由于他们都是布尔类型，所以应该返回 `true`。如果传入 `1`，由于这是数字，所以返回 `false`
  <!-- more -->

# 基本解法
## 思路提示
- 讲真，这道题的难度真不应该算是中级，但如果展开来说，还是有一些东西值得多说几句的
- 首先，复习一下基本知识吧，在 JavaScript 中，数据类型总共有两大类和七种：
    - Primitive Type (原始类型)
        - Boolean
        - Null
        - Undefined
        - Number
        - String
        - Symbol (ES6 加入的)
    - Non-primitive Type (非原始类型)
        - Object
- 需要说明一点，在这里，Null 类型其实就是 `null`，`Undefined` 类型就是 `undefined`。首字母大写，可以理解为是一个"抽象类"
- 还需要知道的，就是 `typeof` 运算符。注意，之所以叫它运算符，是因为它的调用方式有别于其他方法。`typeof foo` 就可以获取变量 `foo` 的类型，而不是像我们常见的通过括号来传参
- 至于 `typeof` 的返回值，是一开始很容易踩的一个坑。首先，它的返回值是**字符串**，而且都是小写字符
    - 比如，`typeof 1` 会返回 `"number"`
    - 再比如，`typeof undefined` 会返回 `"undefined"`
- 更有意思的是，虽然 `null` 与 `Object` 是完全不同的两个类型，但 `typeof` 来检测他们，都会返回 `"object"`。你可以试试 `typeof null` 和 `typeof {a:1}`
- 而且，`typeof` 一个数组，你不会得到 `"array"`，而是也会得到 `"object"`
- 对于这道题，你只需要知道 `typeof` 对于布尔值会返回 `"boolean"` 就够了

## 参考链接
- [JS 数据类型和数据结构](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures)
- [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)

## 代码
```js
function boo(bool) {
    return typeof bool === 'boolean';
}
```

## 也可以这样
```js
function boo(bool) {
    return bool === Boolean(bool);
}
```

## 解释
- 两种写法都不难理解。如果你看不明白，是时候去补一波基础了
- 对于想在这道题目中深挖的，建议你可以去了解一下 JavaScript 的传参方式。以下是几个我觉得很有用的链接：

## 参考链接
- [关于传值方式的讨论](http://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language)
    - 第一个回答，我觉得解释的很好，例子也恰到好处
- [同样是关于传值方式的讨论](http://stackoverflow.com/questions/6605640/javascript-by-reference-vs-by-value)
    - 还是第一个回答，跟上面的有些类似，也很不错
- [You Don't Know JS 的 Types & Grammer 章节](https://github.com/getify/You-Dont-Know-JS/tree/master/types%20%26%20grammar)
    - 这个系列，不谈了，看过都说好。建议有空的话把其他几本也看完