---
title: FreeCodeCamp 初级算法题 - 计算整数阶乘
date: 2017-03-17 23:05:01
tags: [FreeCodeCamp, FCC, 算法]
---
# 计算一个整数的阶乘
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/factorialize-a-number)
- [英文链接](https://www.freecodecamp.com/challenges/factorialize-a-number)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个整数为参数，返回阶乘的计算结果
- 比如接收的是 4，那么就返回 24
<!-- more -->

## 参考链接
- 没什么可以参考的，只要知道什么是阶乘就好

## 思路提示
- 很简单，一个循环，把每一步的数乘起来就可以
- 需要注意的是，0 的阶乘与 1 的阶乘均为 1
- 设置好初始条件十分重要。可以自己先思考一下

## 参考答案
### 基本答案
```js
function factorialize(num) {
    var result = 1;
    while (num > 1) {
        result *= num;
        num--;
    }
    return result;
}
```
#### 解释
- 循环的条件直接用 `num > 1` 就好。因为，任何数乘以 1 都不变
- 我们可以简单地设置初始值为 1，因为不管传入 0 还是 1，得到的结果都应该是 1，而且，不用进入 `while` 循环
- `result *= num` 就相当于 `result = result * num`。这种写法适用于计算并重新赋值
- 一定不要忘了 `num--`，否则会无限循环下去。当然，这里用 `for` 循环写也是没问题的

### 进阶答案
- 嗯，递归是个好东西
```js
function factorialize(num) {
    // 初始及弹出条件
    if (num === 0) {
        return 1;
    }
    // 递归调用
    return num * factorialize(num - 1)
}
```
#### 解释
- 如果你想不明白上面的过程，请参考 [翻转字符串](http://singsing.io/blog/2017/03/17/fcc-basic-reverse-a-string) 的解释，相信你看完之后就知道如何分析这个执行过程了
- 请注意这里的初始判断条件。如果设置为 `if (num === 1)` 是不行的，这样传入 0 的时候就不能得到 1 了
- 如果传入的数字很大，那么就可能出现栈溢出(stack overflow，没错，那个世界上最大的程序员问答平台就叫这个名字)的情况，这时候需要进行尾递归优化。由于 FCC 中没有这方面的检测，因此这里不再展开，有兴趣的朋友可以去搜搜"尾递归优化"，顺便，推荐[阮一峰老师的一篇文章](http://www.ruanyifeng.com/blog/2015/04/tail-call.html)
