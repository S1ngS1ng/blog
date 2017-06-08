---
title: FreeCodeCamp 中级算法题 - 斐波那契数列奇数项求和
date: 2017-05-14 23:56:07
tags: [FreeCodeCamp,中级,算法]
categories: FCC
---
# 斐波那契数列奇数项求和

## 题目链接

-   [中文链接](https://www.freecodecamp.cn/challenges/sum-all-odd-fibonacci-numbers)
-   [英文链接](https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers)
-   级别：中级 (Intermediate Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个数字参数 `num`。返回值小于等于 `num` 的斐波那契奇数之和
- 如果 `num` 是 `1`，那么返回值应为 `1`；如果 `num` 是 `4`，那么返回值应为 `5`

## 思路简介
- 整体上，思路可以有以下几种：
    - 建立三个变量，分别为当前位置的前两个数以及当前的总和。以当前值大于 `num` 为跳出条件，循环并动态地给这三个变量赋值，最后返回总和
    - 根据 `num` 建立一个斐波那契数组(可以用循环写，也可以用递归)
        - 遍历这个数组，在遍历过程中判断奇偶，求和
        - 直接用 `filter` 方法过滤掉偶数，然后求数组元素总和
- 两种思路都不太难。可以先尝试一下

<!-- more -->

# 第一种思路
## 思路提示
- 由于斐波那契数列的计算方式是，当前的值等于前一个数与再之前一个数的和，因此我们要设置两个初始值。分别代表第一个元素与第二个元素。如果只设置一个，那么第二个元素是没法计算出来的
- 循环方面，不管用 `for` 写还是用 `while`，都要注意初始值与边界条件的选择。以下只给出 `while` 的写法
- 还有就是对 `num` 的特殊值判断。可以在外面直接用 `if` 去判断，当然也可以在计算逻辑中处理。对于 `num` 为 `0` 的情况，显然结果是 `0`。对于 `num` 为 `1` 的情况，显然结果是 `1`

## 代码
```js
function sumFibs(num) {
    // num 为 0 时，结果应为 0
    if (num === 0) {
        return 0;
    }

    var former = 1;
    var beforeFormer = 1;
    // 若 num 大于等于 1，那么以和为 2 作为初始值
    var sum = 2;

    while (former + beforeFormer <= num) {
        var current = former + beforeFormer;
        if (current % 2 === 1) {
            sum += current;
        }
        beforeFormer = former;
        former = current;
    }

    return sum;
}
```

## 解释
- 首先，设置了 `beforeFormer` 为数列的第一个值，`former` 为数列的第二个值，均为 `1`。也可以说，`beforeFormer` 为当前值的前两个数，`former` 为当前值的前一个数
- 至于 `sum` 值的初始值，这里我是按照 `sum` 为前两个数的和来定义的。也就是说，一切后续计算都从数列中的第三个数开始。之所以可以这么写，是因为不论传入的 `num` 是 `1` 还是 `2`，都应该返回这两个数之和，也就是 `2`
- 但当传入的 `num` 为 `0` 的时候，就应该得到 `0` 了。这需要在一开始就处理
- 跳出条件就是当前值大于 `num`。由于计算过程中，当前值是根据之前的两个值来计算的，因此只要把这两个变量加起来，就可以得到当前值
- 如果当前值是奇数，那我们就把它加给 `sum`。但无论当前值是否为奇数，我们都要更新 `beforeFormer` 和 `former`
- 这个循环不可能成为无限循环。因为我们在循环结束前修改了 `beforeFormer` 与 `former` 这两个值。由于 `current` 一直在增大，因此 `former` 和 `beforeFormer` 也一直在增加

# 第二种思路 - 生成数组
## 思路提示
- 与第一种思路类似，我们可以先生成不大于 `num` 的斐波那契数组，然后在用 `reduce` 求和的过程中判断奇偶

## 代码 - 求和中判断
```js
function sumFibs(num) {
    if (num === 0) {
        return 0;
    }

    // 当然这里也可以定义成 [1, 1]，然后 current 定义成 2
    var fibsArr = [1];
    var current = 1;

    while(current <= num) {
        fibsArr.push(current);

        // 通过最后两位数字来求下一位
        var lastTwo = fibsArr.slice(-2);
        current = lastTwo[0] + lastTwo[1];
        // 至于是否需要保存进 fibsArr，要先判断是否小于等于 num
    }

    return fibsArr.reduce(function(prev, next) {
        if (next % 2 === 1) {
            return prev + next;
        }
        return prev;
    }, 0);
}
```

# 第三种思路 - 递归
## 思路提示
- 题目中说到，"此题不能用递归来实现"，个人觉得是不够准确的
- 这道题当然可以用递归，只是要注意优化。否则，`num` 较大时确实会造成栈溢出

## 代码 - 不会造成栈溢出的递归写法
```js
function sumFibs(num) {
    function getSum(curr, prev, sum) {
        if (curr > num) {
            return sum;
        }

        if (curr % 2 === 1) {
            sum += curr;
        }

        return getSum(curr + prev, curr, sum);
    }

    return getSum(0, 1, 0);
}
```
