---
title: FreeCodeCamp 高级算法题 - 计算找零
date: 2017-09-02 00:04:32
tags: [FreeCodeCamp,高级,算法]
categories: FCC
---

# 更新库存 (Inventory Update)

## 题目链接
- [中文链接](https://freecodecamp.cn/challenges/inventory-update)
- [英文链接](https://freecodecamp.com/challenges/inventory-update)

## 问题解释
- 这个 `function` 接收两个二维数组参数 `arr1` 与 `arr2`。其中 `arr1` 为更新前的现有库存，`arr2` 为需要更新的内容。返回值为更新后的库存，用二维数组表示
- 如果 `arr1` 为 `[[1, 'a'], [2, 'b']]`，`arr2` 为 `[[10, 'a'], [100, 'b'], [1, 'c']]`，则返回值应为 `[[11, 'a'], [102, 'b'], [1, 'c']]`

<!--more-->

# 基本解法 - 循环
## 思路提示
- 这道题也是高级算法中相对容易的一道题，只要理清题目的逻辑，代码就很容易写了
- 题目中给了两个二维数组，我们需要做的就是遍历第二个二维数组 `arr2`，与第一个二维数组 `arr1` 中的每一项进行比较：
    - 如果 `arr2` 子数组的第二个元素可以在 `arr1` 中找到相等的，那我们就把数组中第一个数字相加
    - 如果 `arr2` 子数组的第二个元素在 `arr1` 中找不到，那我们就把这个子数组添加到 `arr1` 中
- 最后，再对 `arr1` 按照子数组第二个元素的字母顺序进行一次排序，输出结果