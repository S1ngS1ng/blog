---
title: FreeCodeCamp 高级算法题 - 数组的对称差
date: 2017-07-24 22:33:02
tags: [FreeCodeCamp,高级,算法]
categories: FCC
---

# 数组的对称差 (Symmetric Difference)

## 题目链接
- [中文链接](https://freecodecamp.cn/challenges/symmetric-difference)
- [英文链接](https://freecodecamp.com/challenges/symmetric-difference)

## 问题解释
- 这个 `function` 接收一个参数 `arg`，其中包含至少两个数组。返回值也为数组，即为给出数组的对称差
- 如果 `arg` 是 `[1, 2, 3]` 和 `[5, 1, 2, 4]`，则返回值为 `[3, 4, 5]`

<!--more-->

# 解题思路
- 建议先去了解一下对称差的定义
- 根据定义，对于两个数组来说，对称差的意思就是：
    - 要么在第一个数组中，要么在第二个数组中
    - 从另一个角度考虑，其实就是先把两个数组中所有元素都合并成一个数组，然后排除掉既在第一个数组也在第二个数组的元素
- 对于多个数组的操作也不难理解。设 `A`、`B` 和 `C` 分别代表三个数组，设 `sym()` 为求对称差的函数。那么 `sym(A, B, C)` 就相当于 `sym(sym(A, B), C)`

# 基本解法
## 思路提示

## 代码
```js
function sym(arg) {
    var argArr = [].slice.call(arguments);
    
    return argArr.reduce(function(accum, e) {
		return accum.concat(e).filter(function(ele) {
			return accum.indexOf(ele) === -1 || e.indexOf(ele) === -1
		}).filter(function(e, i, arr) {
			return arr.indexOf(e) === i;
		})
	});
}
```