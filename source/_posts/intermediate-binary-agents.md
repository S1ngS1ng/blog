---
title: intermediate-binary-agents
date: 2017-07-09 23:18:43
tags: [FreeCodeCamp,中级,算法]
categories: FCC
---

# 翻译二进制字符串 (Binary Agents)

## 题目链接
- [中文链接](https://freecodecamp.cn/challenges/binary-agents)
- [英文链接](https://freecodecamp.com/challenges/binary-agents)

## 问题解释
- 这个 `function` 接收一个字符串参数 `str`，返回值为转换之后的字符串
- 如果 `str` 是 `"01000001"`，那么返回值应为 `"A"`

<!--more-->

# 基本解法 - for 循环
## 思路提示
- 这道题目难度不大。在基本解法中，我们可以只用 `for` 循环以及 `String.fromCharCode` 来实现
- 先来观察一下参数 `str`，它是由空格分割的长字符串。你可能已经想到了用 `split` 转成数组，这个方法我们留到后面再说
- 再来明确一下转换的规则。如果你没听说过二进制，那先去搜搜二进制是什么意思吧

> 插播一则程序员才懂的笑话：
> 世界上有 10 种人，一种是懂二进制的，另一种不懂

- 我们常见的数字都是十进制的，比如数字 `1234`，其实就是 `1 * 10^3 + 2 * 10^2 + 3 * 10^1 + 4 * 10^0` (其中 `a^b` 符号表示 `a` 的 `b` 次幂，下同)
- 同理，对于二进制，数字 `10` 就表示 `1 * 2^1 + 0 * 2^0`。算算得多少，就应该能理解上面的笑话了
- 虽然是废话，但还是要说一句，`x` 进制的数字，每一位都小于 `x`。十进制里面，每一位最大只可能是 `9`；二进制里面，每一位最大只可能是 `1` (也就是只有 `0` 和 `1` 两种可能)
- 知道了这个规则，我们就可以开始写转换函数了。顺便说一句，JavaScript 会有内置函数处理这个的，不过我们来手写一下也不复杂

## 参考链接
- [String.fromCharCode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)
- [Math.pow](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)

## 代码
```js
function binaryAgent(str) {
    // 跳出条件
    if (str.length === 0) return;

    var result = "";
    // 双指针
    var left = 0;
    var right = 1;
    
    while (left < str.length) {
        // 小坑，如果没有后面的条件，则最后一组会执行不到
        if (str[right] === " " || right === str.length) {
            result += binaryToChar(str.slice(left, right));
            // 这里可能有点不清晰。其实就是指针的移动
            // 先把 left 移到当前 right 的右一位，再把 right 移到移动后的 left 右一位
            left = right + 1;
            right = left + 1;
        } else {
            right++;
        }
    }
    
    // 只是一个逻辑的封装。这个函数作用就是传入一段二进制数字，转成 10 进制，然后根据 ASCII 码输出对应的字符
    function binaryToChar(str) {
        var num = 0;
        for (var i = 0; i < str.length; i++) {
            num += str[i] * Math.pow(2, str.length - i - 1)
        }
        return String.fromCharCode(num);
    }
    
    return result;
}
```