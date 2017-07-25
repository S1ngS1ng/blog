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
- 高级算法第二题，难度也没有想象中的那么大。建议先去了解一下对称差的定义
- 根据定义，对称差的意思就是：
    - 要么在第一个数组中，要么在第二个数组中
    - 从另一个角度考虑，其实就是排除掉既在第一个数组也在第二个数组的元素，也排除掉既不在第一个数组也不在第二个数组的元素
- 以上就是我们的解题思路，其实按照哪种思路写都是没问题的