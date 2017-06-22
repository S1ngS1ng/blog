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

# 优化 - 数学方法

## 思路提示

**为了严谨，以下内容包含数学证明。如果不感兴趣可以跳过**

-   首先，对于一个数字 `x`，我们不需要从 `2` 一直循环到 `x` 来验证它是否为质数，只需要验证到 `x/2` 就够了，也就是 `x` 的一半。可以通过以下的思路证明：

>   **定义**
>
>   约数：对于整数 `n` 与 `m`，若 `n` 除以 `m` (即 `n/m`) 的结果为整数且无余数，则称 `m` 为 `n` 的约数 (也叫因数)，同时 `n` 为 `m` 的倍数

```
对于正整数 x，试证在 (x/2, x) 不存在 x 的约数

证明如下

设存在 x 的约数 y 且 x/2 < y < x，则:
  => x = n * y (根据约数定义，1 ≤ n ≤ x)

由 x/2 < y < x：
  可得 n * y/2 < y < n * y (将 x 替换为 n * y)
  则有 n * y < 2y < 2ny (同时乘以 2)
  则有 n < 2 < 2n (此时 y > 0) 或 n > 2 > 2n (此时 y < 0，在此题中可以舍去)
  则有 n < 2 且 2 < 2n
  则有 n < 2 且 n > 1

因此，不存在一个整数 n 使得 x/2 < y < x 成立

证毕
```

这样，对于 `isPrime` 方法，我们就可以写成这样：

```javascript
function isPrime(num) {
    for (var i = 2; i < num / 2; i++) {
        if (current % i === 0) {
            return false;
        }
    }
    return true;
}
```

但其实，我们还可以再缩小范围至 `[2, Math.sqrt(x)]`，即 `2` 至 `根号 x`