---
title: FreeCodeCamp 初级算法题 - 截断字符串
date: 2017-03-21 21:02:53
tags: [FreeCodeCamp,FCC,算法]
---
# 截断字符串 (Truncate a string)
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/truncate-a-string)
- [英文链接](https://www.freecodecamp.com/challenges/truncate-a-string)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收两个参数。第一个是字符串 `str`，即为原字符串。第二个是截取长度 `num`。返回值为截取后的字符串
- 这道题，关键问题在于对后续 `...` 的处理，可以先考虑一下
<!-- more -->

# 基本解法
## 思路提示
- 首先应该想到，截取的逻辑大致分为两种情况：
    - 截取后，带 `...`
    - 截取后不带 `...`，这种情况其实就是输出 `str` 本身
- 进一步考虑第一种情况，又分为两种：
    - `num > 3` 的时候，需要少截取三位，因为 `...` 的长度会计入结果长度
    - `num < 3` 的时候，正常截取，并把 `...` 加到结尾
- 对于带 `...` 和不带 `...` 的情况，判断依据是 `num` 是否大于 `str.length`
- 先想清楚这些，代码就很好写了

## 参考链接
- [String.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)

## 代码
```js
function truncate(str, num) {
    if (str.length > num) {
        if (num > 3) {
            // num 大于 3，因此要少截三位，留出 ... 的位置
            return str.substr(0, num - 3) + '...';
        } else {
            // num 小于 3，正常截取，并把 ... 补到后面
            return str.substr(0, num) + '...';
        }
    } else {
        // num 比字符串长度大
        return str;
    }
}
```

## 解释
- 由于这道题目逻辑层次嵌套比较复杂，因此我决定不省略 `else` 了
- 用 `substr` 或者 `slice` 都是没问题的。而且这道题是从 0 开始，所以两个方法的第二个参数都为 `num`
- 由于是根据长度来决定，因此我首先考虑到的是用 `substr`

# 中级解法 - 用三元运算符合并逻辑
## 代码
```js
function truncate(str, num) {
    if (str.length > num) {
        return str.substr(0, num > 3 ? num - 3 : num) + '...';
    }
    return str;
}
```

## 解释
- 嗯，这并不算是什么优化，对运算速度并没有什么提升，而且可能有些朋友认为可读性很差
- 有些朋友会说，既然都用了三元，为什么不把 `str.length > num` 也合并成三元？原因很简单，我个人很反对三元嵌套
- 我们先来读一下代码。对于 `str.length < num` 的情况，也就是 `num` 比 `str` 的长度还要大，那么我们就直接返回 `str`。这个没毛病，和上面的思路一样
- 通过基本答案中的代码，可以观察到，对于 `num` 大于 3 的判断，我们只是改变了 `substr` 的第二个参数，除此之外没有任何其他改变
- 因此，我们需要干的事就是，当 `num` 大于 3 的时候，我们把第二个参数设置为 `num - 3`，否则就用 `num`。这就是上面三元表达式的意思
- 三元表达式 `a ? b : c`，意思就是当 `a` 成立，我们就返回 `b`，否则返回 `c`，就这么简单。相当于

```js
if (a) {
    b;
} else {
    c;
}
```
