---
title: FreeCodeCamp 高级算法题 - 字符串排列
date: 2017-09-06 22:32:17
tags: [FreeCodeCamp,高级,算法]
categories: FCC
---

# 字符串排列 (No repeats please)

## 题目链接
- [中文链接](https://freecodecamp.cn/challenges/no-repeats-please)
- [英文链接](https://freecodecamp.com/challenges/no-repeats-please)

## 问题解释
- 这个 `function` 接收一个字符串参数 `str`。返回值为参数 `str` 没有连续重复字符串的排列个数
- 如果 `str` 为 `"aab"`，则返回值应为 `2`，因为全排列后，会出现两个 `"aba"`，不含连续重复字符串 (排除 `"aab"` 和 `"baa"`)

<!--more-->

# 解题思路
- 这道题应该是高级算法题目中难度稍大的一道题。题目的难点在于获取字符串的全排列。我觉得这里有必要先说一下，如何获取全排列
- 只要我们可以获取字符串的全排列，那就至少有两种方式判断字符串是否含有连续重复的字符。可以遍历，也可以用正则
- [排列 (也叫置换)，Permutation](https://zh.wikipedia.org/wiki/%E7%BD%AE%E6%8F%9B) 与 [组合，Combination](https://zh.wikipedia.org/wiki/%E7%B5%84%E5%90%88)，高中数学就已经涉及到。比如，对于 `123`，从中取出两个数有三种组合，分别是 `12`、`13` 和 `23`。同样是取出两个数，有六种排列，分别是 `12`、`21`、`13`、`31`、`23` 和 `32`
- 再说一下什么是全排列 (Full Permutation)，全排列的意思是，从 `n` 个中取出 `n` 个的排列。对于 `123`，取出三个数的排列，就是 `123` 的全排列。`123` 的全排列总共有六种，分别是 `123`、`132`、`213`、`231`、`312` 和 `321`。计算数量方式很简单，就是 `n!`，`n` 的阶乘。对于 `123` 来说，也就是 `3!`，得 `6`

## 全排列的实现 - 封装，循环
- 我们可以先根据这个实际的例子想想，怎样才能无遗漏的输出全排列
    - 两个数就不用说了，对于 `12`，只有 `12` 和 `21` 两种
    - 三个数，比如 `123`，我们先分为三种情况，就是 `1` 开头，`2` 开头和 `3` 开头
        - 对于 `1` 开头的情况，剩下 `2` 和 `3`，这就回到了两个数的排列
        - 对于 `2` 开头的情况，剩下 `1` 和 `3`，这也回到了两个数的排列
        - `3` 开头的情况同理
    - 四个数，先按照开头分为四种情况，然后按照三个数的排列去处理
    - ......
    - 以此类推
- 你可能已经看出来了，这就是一个递归。就好像求斐波那契数列的某一个元素，我们要先求出前面的；要想求出前面的，我们就要求出更前面的。记 "斐波那契数列的第 `n` 位" 这件事为 `F(n)`，则有 `F(n) = F(n - 1) + F(n - 2)`
- 类似地，记 "求出 `n` 个字符串的全排列" 这件事为 `P(n)`，则有 `P(n) = 分别以这n个字符之一开头 + P(n - 1)`。其中，`P(n - 1)` 表示去掉那个开头字符的剩余字符串的全排列。哪怕只有两个字符，比如对于上面例子中的 `12`，同样符合这一条结论
- 说到递归，首先我们来想一下公共逻辑是什么。对于一个字符串，我们取出一个字符作为开头，然后对去掉这个开头字符的剩余字符串继续求全排列。求出来之后，与取到的字符合并起来就行
- 对于 `P(n)` 来说，我们要取出一个字符作为开头，而且原始的字符串可能本身就含有重复的字符。在代码中，我们可以通过开头字符在原字符串中的索引来区分
- 对于我们封装的函数，可以直接使用字符串作为参数。这是因为，在获取剩余字符串全排列，即 `P(n - 1)` 时，我们并不关心去掉的那个，用作开头的字符是什么，只需要关心现在我们要生成谁的全排列就好
- 因此，我们需要在递归调用时，传入去掉那个用作开头的字符之后的，剩余字符串。这个很容易实现，如果我们知道了去掉的那个字符的索引，那我们就可以用 `str.slice(0, i)` 来获取这个字符之前的字符串，用 `str.slice(i + 1, str.length)` 来获取这个字符之后的字符串 (注意，`slice` 方法的第一个参数是包含的，第二个不包含。如果 `i` 本身就是 `0`，那么取到的是 **空字符串**)，拼接在一起就可以作为递归调用的参数
- 跳出条件也不难想，只要传入的参数长度为 `1` 或 `0`，直接返回即可
- 另外，每次调用，我们都需要一个数组来保存根据当前参数生成的全排列。代码如下

```js
function permAlone(string) {
    function _perm(str) {
        // 跳出条件
        if (str.length < 2) return str;
        var permutations = [];

        for (var i = 0; i < str.length; i++) {
            // 获取开头的字符串和剩余字符串
            var start = str[i];
            var remaining = str.slice(0, i) + str.slice(i + 1, str.length);

            // 根据通过剩余字符串的全排列，生成前一次的全排列。注意 _perm(remaining) 是一个数组
            for (var permutation of _perm(remaining)) {
                permutations.push(start + permutation);
            }
        }
        return permutations;
    }
}
```

## 判断连续重复字符
### 遍历
- 判断是否有连续重复的字符，最简单的方式是遍历。只需要在外面用一个变量记录上一个字符就可以
- 只要当前的和上一个相同，直接跳出就可以，不需要继续判断。代码如下：

```js
function hasRepeatChar(str) {
    var previous = '';
    for (var i = 0; i < str.length; i++) {
        if (previous === str[i]) {
            return true;
        } else {
            // 赋值，用于下次判断
            previous = str[i];
        }
    }
    // 不存在连续重复字符
    return false;
}
```

### 递归
- 递归也是很容易写的。跟上面的思路一样，调用的时候传入两个参数，分别是上一个字符，和剩余字符串。其中，剩余字符串可以通过 `str.slice(1)` 获取
- 为避免 `str` 本身就是空字符串，需要多一次判断，即如果 `prevChar` 不是空的 (这说明 `prevChar` 被赋过值，而并非初始的空值)，我们才可以认为 `str` 不含连续重复字符，则返回 `false`。因此，跳出条件是 `str` 为空且 `prevChar` 有值。如果这时候 `prevChar` 也是空的，那就证明传入的 `str` 本身就是空的。为了防止混淆，我们直接给它返回 `"Empty string"`。事实上，这种 corner case 在这道题目中不会遇到。代码如下：

```js
function hasRepeatChar(str, prevChar) {
    if (str.length === 0) return prevChar ? false : 'Empty string';
    if (prevChar === str[0]) return true;

    return hasRepeatChar(str.slice(1), str[0]);
}
```

### 正则表达式
- 正则是个好东西。在正则里，有一中写法叫做 `back reference`，就是 `\\` 后面加一个正整数。请参考 [文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions) 中 `\\n` 的那一行
- 简单来说，`\\x` 就是匹配之前，正数第 `x` 个 matched group (匹配组，也叫捕获组，其实就是小括号包含的内容)
- 对于判断一个字符串是否含有连续重复字符，我们并不关注它重复了几次，也不需要关注它有几组重复的。因此，这里不需要 `global` flag `/g`
- 那么，对于字符串中的任意字符，只要这个字符右边的字符和它相同，那就匹配到，并且返回 `false`。听起来像是句废话，只是，如果你看不懂后面的正则，记得回来再读读这句话。代码如下：

```js
function hasRepeatChar(str) {
    return !/(\w)\1/.test(str);
}
```

# 基本解法
## 思路提示
- 思路上面已经说得很清楚。通过上面的递归调用，我们可以得到了一个包含字符串全排列的数组，只需要通过上面的正则过滤一下，保留不含连续重复字符的字符串，并返回它的 `length`

## 代码
```js
function permAlone(string) {
    function _perm(str) {
        if (str.length < 2) return str;
        var permutations = [];

        for (var i = 0; i < str.length; i++) {
            var start = str[i];
            var remaining = str.slice(0, i) + str.slice(i + 1, str.length);

            for (var permutation of _perm(remaining)) {
                permutations.push(start + permutation);
            }
        }
        return permutations;
    }
    return _perm(string).filter(function(str) {
        return !/(\w)\1/.test(str);
    }).length;
}
```

# 数组方法
