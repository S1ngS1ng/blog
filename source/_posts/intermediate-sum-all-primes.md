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
- 那么首先我们需要写一个判断质数的方法。根据定义，可以这样写：


```javascript
function isPrime(num) {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  	return true;
}
```

-   `1` 是不用判断的，因为任何整数都可以被 `1` 整除。`num` 本身也是不用判断的，因为 `num` 肯定可以被 `num` 整除
-   我们先把这个写法用到基础解法中，后面再优化

# 基本解法 - 遍历

## 思路提示

-   上面我们已经写好了判断，那么只需要从 `2` 开始一直到 `num` 遍历一遍，每一个数都进行一次判断，是质数的我们加起来就可以了

## 代码

```javascript
function sumPrimes(num) {
    var sum = 0;
    for (var i = 2; i <= num; i++) {
    	if (isPrime(i)) {
          	sum += i;
    	}
    }
	
    function isPrime(current) {
      	for (var i = 2; i < current; i++) {
      		if (current % i === 0) {
        		return false;
      		}
    	}
	  	return true;
    }
  
  	return sum;
}
```

