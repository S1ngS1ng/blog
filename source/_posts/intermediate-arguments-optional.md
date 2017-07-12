---
title: intermediate-arguments-optional
date: 2017-07-11 21:21:14
tags: [FreeCodeCamp,中级,算法]
categories: FCC
---

# 可选的参数 (Arguments Optional)

## 题目链接
- [中文链接](https://freecodecamp.cn/challenges/arguments-optional)
- [英文链接](https://freecodecamp.com/challenges/arguments-optional)

## 问题解释
- 这个 `function` 在定义的时候没有声明任何参数，但在调用的时候会传入一个或者两个参数。最后返回两数之和
- 如果参数是一个，那么调用方式就是 `add(1)(2)` 的形式，返回值为 `3`
- 如果参数是两个，那么调用方式就会是 `add(1, 2)` 的形式，返回值也为 `3`

<!--more-->

# 基本解法
## 思路提示
- 相比之前几道题，这道题稍有难度，但整体逻辑并不复杂
- 通过分析我们得知，只有传入一个参数或两个参数，这两种情况：
    - 如果传入一个参数，那就需要再通过 `(x)` 传入第二个参数
    - 如果传入两个参数，直接返回两个参数之和就行
- 既然 `add` 函数中没有声明参数，因此这道题我们肯定是要用 `arguments` 来操作了
- 另外还有一点需要考虑，就是如何判断参数是否为数字。你可能第一反应是使用 `isNaN` 方法来判断，事实上在这道题目中是不够的。因为左边的测试有一条是 `add(1, "2")` 也应该返回 `undefined`，可以先考虑下这个要如何处理
- 另外就是，这道题会用到一点点闭包的知识。闭包可能是刚开始学 JS 接触到的最大难点。对此，我个人的建议是不用过于深究闭包的定义。多写写代码，自然会遇到需要使用闭包的情况。或者很可能你已经会写闭包了，但只是不知道它叫闭包

## 参考链接
- [arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)
- [typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof)
- [isFinite](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
- [isNaN](- [isFinite](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/isNaN))

## 代码
```js
function add() {
    var arg = [].slice.call(arguments);
    // 边界条件
    if (!isNum(arg[0]) || arg.length === 2 && !isNum(arg[1])) return;

    if (arg.length === 2) {
        // 直接返回两数的和
        return arg[0] + arg[1];
    }

    // 返回匿名函数，接收下一个参数
    return function() {
        if (isNum(arguments[0])) {
            return arg[0] + arguments[0];
        }
        // 可以不写 else，因为如果不声明返回值，那么返回的就是 undefined
    }

    function isNum(e) {
        return typeof e === 'number' && isFinite(e);
    }
}
```

## 解释
- 先从最好解释的说起吧。这里封装了一个用于判断是否为数字的 `isNum` 方法。由于题目中只允许数字，不允许字符串或者其它，那么最容易想到的就是通过 `typeof` 了，这样就可以直接过滤掉字符串
- 但这也会带来其他问题。对于 `typeof` 返回 `number` 的不光有数字，还有 `NaN` 以及 `Infinity`。如果你不知道 `Infinity`，可以去搜搜看，这也是一个关键字。如果用一个数除以 `0`，你也会得到 `Infinity`
- 因此，我们需要在后面加上 `isFinite` 来判断，它可以帮我们过滤掉 `NaN` 以及 `Infinity` 这两种情况。虽然类似与 `isFinite("1")` 也会返回 `true`，但我们已经有了 `typeof` 那个判断
- 另外，虽然这里没有涉及，但要多说一句。`isFinite` 这个方法，如果传入 `[]` 或者只有一个数字元素的数组，比如 `[3]`，那是会返回 `true` 的。由于 `[1, 2]` 这样的就会返回 `false`，因此我猜测原因是调用了数组的 `toString` 方法，把 `[3]` 变成了 `"3"`
