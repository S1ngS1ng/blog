---
title: FreeCodeCamp 中级算法题 - 质数求和
date: 2017-06-15 00:32:51
tags: [FreeCodeCamp,中级,算法]
categories: FCC
---

# 质数求和

## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/https://freecodecamp.cn/challenges/sum-all-primes)
- [英文链接](https://www.freecodecamp.com/challenges/https://freecodecamp.cn/challenges/sum-all-primes)
- 级别：中级 (Intermediate Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个数字参数 `num`。返回小于等于 `num` 的质数之和。
- 如果 `num` 是 `4`，那么返回值应为 `5`。如果 `num` 是 `10`，那么返回值应为 `17`。

## 思路简介
- 这道题会涉及一些数学知识，其实代码不难写
- 质数的定义是，如果一个数 **只能** 被 `1` 和这个数自己整除，那么这个数就是质数。与这个概念相对应的叫合数
- `1` 既不是质数也不是合数
- 比如，20 以内的质数，有且仅有这些：2, 3, 5, 7, 11, 13, 17, 19

