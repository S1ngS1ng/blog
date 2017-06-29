---
title: intermediate-smallest-common-multiple
date: 2017-06-26 00:36:21
tags: [FreeCodeCamp,中级,算法]
categories: FCC
---

# 找出数字范围的最小公倍数 (Smallest Common Multiple)

## 题目链接
- [中文链接](https://freecodecamp.cn/challenges/smallest-common-multiple)
- [英文链接](https://freecodecamp.com/challenges/smallest-common-multiple)

## 问题解释
- 这个 `function` 接收一个数组参数 `arr`，其中包含两个数字元素。返回这两个数字之间所有数的最小公倍数
- 如果 `arr` 是 `[1, 5]`，那么返回值应为 `60`
- 需要注意的是，这个 `arr` 是没有排序的，因此对于 `[5, 1]`，也应该返回 `60`

<!--more-->

# 解题思路
- 先回顾一些定义。如果存在一个数 `x`，可以被 `a` 和 `b` 分别整除，且 `x` 大于等于 `a` 和 `b`，则称 `x` 为 `a` 和 `b` 的**公倍数**。`a` 和 `b` 的公倍数有无限多个，其中最小的就叫**最小公倍数**
- 经常与最小公倍数一起提及的还有**最大公约数**，也叫最大公因数。指的是某几个整数共有约数中最大的一个。约数的定义在上一篇文章中提到过，也叫因数
- 这道题目的关键在于最小公倍数的算法。在基本的解法中我们先用循环来解决
- 先要明白一点，最小公倍数**不会超过两个数的乘积**。这个结论很重要，因为我们可以通过这个来确定循环的边界
- 后面我们还会谈到计算最小公倍数的其他算法。基本解法的思路并不复杂，可以根据上面的提示先试着自己写一写

# 基本解法 - 遍历
## 思路提示
- 由于题目中要判断范围内多个数字的最小公倍数，最简单且暴力的方法就是两两地进行判断
- 既然需要多次判断，那么我们首先需要封装一个判断函数，用于得出两个数字的最小公倍数。当然，写成递归也是没问题的。或者，用数组的 `reduce` 方法也行
- 有一点需要注意。记"求最小公倍数"为 `LCM`。对于求三个数字 `a`、`b` 和 `c` 的最小公倍数 `LCM(a, b, c)`，则相当于 `LCM(LCM(a, b), c)`。由于 `LCM` 也存在结合律，因此也相当于 `LCM(a, LCM(b, c))`。所以，先求哪一组都是可以的

## 代码 - for 循环
```js
function smallestCommons(arr) {
    var smaller = Math.min(arr[0], arr[1]);
    var greater = Math.max(arr[0], arr[1]);
    var numArr = [];
    // 设置用于保存结果的初始值
    var result = smaller * (smaller + 1);
    
    // 根据参数生成一个范围内所有数字的数组
    for (var i = smaller; i <= greater; i++) {
        numArr.push(i);
    }
    
    // 用于获取两个数最小公倍数的方法
    // 其中参数 left 为较小数，right 为较大数
    function getSCM(left, right) {
        // 边界判断
        if (left === 0 || right === 0) {
            return 0;
        }
        if (left === right) {
            return left;
        }
        
        // 设置 scm 初始值为较大数
        var scm = right;
        
        // 循环，用 scm % left 是否为 0 来判断是不是最小公倍数
        while (scm <= right * left) {
            if (scm % left === 0) {
                return scm;
            }
            scm += right;
        }
        
        // 外面可以不 return。因为理论上，当 scm 的值为 right * left 的时候，scm % left 是肯定为 0 的
    }
    
    for (var i = 2; i < numArr.length; i++) {
        // 显然，要么 result 和 numArr[i] 相等，要么 result 大于 numArr[i]
        result = getSCM(numArr[i], result);
    }
    
    return result;
}
```

## 解释
- 首先，根据传入的数组参数，取出较大值和较小值，方便后续操作
- 生成数组那里应该不用多说。至于初始值的设置，原因在于，`n` 与 `n + 1` 的最小公倍数一定是 `n * (n + 1)`。这样，我们只要把这个结果带到第三个数 (索引为 `2`) 继续计算就好了
- 至于求两个数最小公倍数的方法，比如 `n` 和 `m`，我们只需要去测试 `n`、`2n`、`3n`、`4n`……是否能被 `m` 整除。当然，试到 `m * n` 就够了，因为这个数肯定能被 `m` 整除
- 当然，`n` 和 `m` 都不能为 `0`。这个要进行边界判断
- 如果还有细节想不明白的，再看一下代码中的注释吧

## 代码 - reduce
- 之前说过，这里也可以用 `reduce` 去实现。因为本身就是一个迭代的过程。`getSCM` 和上面的一样，这里就不重复了

```js
function smallestCommons(arr) {
    var smaller = Math.min(arr[0], arr[1]);
    var greater = Math.max(arr[0], arr[1]);
    var numArr = [];
    
    for (var i = smaller; i <= greater; i++) {
        numArr.push(i);
    }
    
    function getSCM(left, right) {
        // ...
    }
    
    // 初始值设为 1 就好，因为任何数与 1 的最小公倍数都是这个数本身
    return numArr.reduce(function(previous, next) {
        return getSCM(previous, next)
    }, 1);
}
```