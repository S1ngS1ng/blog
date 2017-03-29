---
title: FreeCodeCamp 初级算法题 - 截断数组
date: 2017-03-22 23:06:50
tags: [FreeCodeCamp, FCC, 算法]
---
# 截断数组 (Slasher Flick)
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/slasher-flick)
- [英文链接](https://www.freecodecamp.com/challenges/slasher-flick)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收两个参数，第一个参数为数组 `arr`，即为需要截断的原数组。第二个参数为数字 `howMany`，表示从第一个开始，删去元素的数量。返回值为截断之后的数组
- 比如接收的是 `[1, 2, 3]` 与 `2`，那么输出就是 `[3]`
<!-- more -->

# 基本解法 - 使用 splice
## 思路提示
- 连边界条件都不用判断，如果不会做，请先看看上面的两个链接
- 对于不用 `for` 循环不舒服的朋友，可以考虑对数组执行 `howMany` 次 `shift()`。当然，不推荐这么写

## 参考链接
- 这应该是初级算法中最简单的题目
- [Array.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Array.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)

## 代码
```js
function slasher(arr, howMany) {
    arr.splice(0, howMany);
    return arr;
}
```

# 优化 - 使用 slice
## 代码
```js
function slasher(arr, howMany) {
    return arr.slice(howMany);
}
```

## 解释
- 唯一一道不需要任何解释的题目
