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
- 这道题也是高级算法中相对容易的一道题，题目的逻辑其实很容易理清，但代码实现上可能会遇到一点小问题
- 两个参数，`arr1` 为现有库存，`arr2` 为需要更新的内容。如果货物存在就更新数量，否则把它加入库存
- 每个货物用一个数组表示，其中第一个元素为数量，第二个为货物名称
- 那么，我们需要做的就是遍历第二个二维数组 `arr2`，与第一个二维数组 `arr1` 中的每一项进行比较：
    - 如果 `arr2` 子数组的第二个元素可以在 `arr1` 中找到相等的，那我们就把数组中第一个数字相加
    - 如果 `arr2` 子数组的第二个元素在 `arr1` 中找不到，那我们就把这个子数组添加到 `arr1` 中
- 最后，再对 `arr1` 按照子数组第二个元素的字母顺序进行一次排序，输出结果
- 最后的排序，我们可以用数组的 `sort` 方法。但有一个细节要注意，由于 `sort` 方法的回调函数返回值有三种情况，分别是大于 0，等于 0 和小于 0。因此，我们需要比较字符串，并返回一个大于 0 的数，和一个小于 0 的数。如果你不理解这一点，请去 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 看一下 `sort` 的文档
- 看到这里，如果你能理解上面说的，请先自己试着完成一下这道题。如果你在实现过程中遇到困难，再回来看看这篇博客后面的部分

### 实现 - return, break, flag
- 写代码的时候你可能会发现，上面说到的思路仿佛很容易，但实现起来却有点麻烦。我们先不讨论最后的返回值，逻辑部分，你可能会想到这样的写法：

```js
function updateInventory(arr1, arr2) {
    // 遍历 arr2
    for (var j = 0; j < arr2.length; j++) {
        // 与 arr1 进行比较
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i][1] === arr2[j][1]) {
                arr1[i][0] += arr2[j][0];
                // 位置 1
            }
            // 位置 2
        }
        // 位置 3
    }
    // 位置 4
}
```

- 请暂时记住这几个位置编号。其中 `位置 1` 表示找到相同货物，`位置 2` 表示执行完找相同货物判断，`位置 3` 表示 `arr1` 遍历结束，`位置 4` 表示 `arr2` 遍历结束
- 我们先遍历 `arr2`，对于 `arr2` 中的每一个元素，我们都要遍历一遍 `arr1` 来进行比较。暂且不讨论复杂度的问题，我们先来想想如何实现
- 在遍历 `arr1` 的时候，有两种情况：
    1. 只要发现第二个元素相等，我们就给 `arr1[i][0]` 加上 `arr2[j][0]`，**并跳出当前循环**
    2. **如果遍历完 `arr1` 仍找不到相等的**，那么我们就要把 `arr2[j]` 添加到 `arr1`
- 你可能会觉得这个情景很熟悉，事实上这里的思路和 [Profile Lookup](https://www.freecodecamp.cn/challenges/profile-lookup) 那道题很类似。那道题我们可以用 `return` 解决，因此你可能会想到在 `位置 1` 加上 `return`，但 `return` 就跳出了整个 `function`，显然这样做不行 (注：其实，只需要封装成一个函数就可以用 `return` 了，这个我们放到后面的优化部分细说)
- 你还可能想到用 `break`。但这个 `break` 加在哪里都不太合适。如果我们加在 `位置 1`，那我们就没法处理上面说的第二种，也就是遍历完 `arr1` 找不到相等的情况。我们把 `push(arr2[j])` 写到 `位置 2` 显然不能实现要求，这样会 `push` 很多次 `arr2[j]`。如果我们写到 `位置 3`，那么每次遍历完 `arr1` 都会 `push` 一次 `arr2[j]`
- 如果一定要这么写，有一种方式是可行的，那就是引入一个 `flag` 变量。每次我们在遍历 `arr1` 之前初始化它为 `false`，一旦进入了 `if (arr1[i][1] === arr2[j][1])` 我们就给它赋值 `true`。遍历完 `arr1` 的时候，我们根据这个 `flag` 决定是否要 `push(arr2[j])`。代码如下：

```js
function updateInventory(arr1, arr2) {
    for (var j = 0; j < arr2.length; j++) {
        // 初始化，当遍历到 arr2 的新元素初始化 flag
        var flag = false;
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i][1] === arr2[j][1]) {
                arr1[i][0] += arr2[j][0];
                // 找到相同的，后面就不需要 `push` 了
                flag = true;
            }
        }
        // 这时候如果 flag 还是 false 就表示没有进入上面的 if，因此要 push
        if (!flag) {
            arr1.push(arr2[j])
        }
    }
}
```

- 我们需要在 `位置 3` 执行是否该 `push(arr2[j])` 的判断，因为这里我们已经遍历完了 `arr1`，也就是说，已经可以得出当前遍历到的 `arr2[j]` 是否在 `arr1` 中存在的结论

### 实现 - label
- 以前的计算机课，我们或多或少接触过一些编程语言。在我们接触过的语言中，你可能会接触过一个关键字叫 `GOTO`。至少，Visual Basic、C#、C++ 之类的语言，都有 `GOTO` 关键字
- 在 JavaScript 中，我们并没有 `GOTO` 关键字，但我们可以通过一些方式让它实现类似功能。请参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break) 上 `break` 的文档，我们会发现，在 "语法" 部分，写的是 `break [label];`。这表示，我们可以直接用 `break` (这就是最常见的用法)，也可以在 `break` 之后加上一个 `label`，也就是 `break xxx`。注意，这里的中括号表示可选参数，而不表示 `break` 之后需要加上中括号
- 于是，我们就需要去看看这个 `label` 到底是什么，MDN 文档在 [这里](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label)
- 

## 参考链接
- [Array.sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [return](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return)
- [break](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break)
- [label](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/label)

## 代码
```js
```