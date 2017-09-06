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

### 实现 - flag 变量
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

- 请暂时记住这几个位置编号。其中 `位置 1` 表示找到相同货物，`位置 2` 表示执行完找相同货物判断，`位置 3` 表示 `arr1` 遍历结束，`位置 4` 表示 `arr2` 遍历结束。显然，在 `位置 4`，我们需要对 `arr1` 进行排序，并返回
- 我们先遍历 `arr2`，对于 `arr2` 中的每一个元素，我们都要遍历一遍 `arr1` 来进行比较。暂且不讨论复杂度的问题，我们先来想想如何实现
- 在遍历 `arr1` 的时候，有两种情况：
    1. 只要发现第二个元素相等，我们就给 `arr1[i][0]` 加上 `arr2[j][0]`，**并跳出当前循环**
    2. **如果遍历完 `arr1` 仍找不到相等的**，那么我们就要把 `arr2[j]` 添加到 `arr1`
- 你可能会觉得这个情景很熟悉，事实上这里的思路和 [Profile Lookup](https://www.freecodecamp.cn/challenges/profile-lookup) 那道题很类似。那道题我们可以用 `return` 解决，因此你可能会想到在 `位置 1` 加上 `return`，但 `return` 就跳出了整个 `function`，显然这样做不行 (注：其实，只需要封装成一个函数就可以用 `return` 了，这个我们放到后面再说)
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

### 实现 - 封装函数
- 如果我们想用 `return`，也不麻烦，只需要封装一个 "遍历 `arr1`" 的函数就行。传入的参数显然是外层遍历的 `arr2[j]`，由于这是某一个件货物，我们记作 `item`。至于 `arr1`，我们可以直接调用，不需要传入方法

```js
function compareAndMerge(item) {
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i][1] === item[1]) {
            arr1[i][0] += item[0];
            return;
        }
    }
    arr1.push(item);
}
```

- 放到外面的循环中，结果就是：
```js
function updateInventory(arr1, arr2) {
    for (var j = 0; j < arr2.length; j++) {
        compareAndMerge(arr2[j]);
    }
    function compareAndMerge(item) {
        for (var i = 0; i < arr1.length; i++) {
            if (arr1[i][1] === item[1]) {
                arr1[i][0] += item[0];
                return;
            }
        }
        arr1.push(item);
    }
}
```

### 结果排序
- 题目中要求，结果需要按照货物名称的字母顺序排列。事实上，JavaScript 的 `>` 和 `<` 就可以比较出字符串的 "大小"。遇到一样的字符，就会继续比较下一位。至于大小，则是根据 ASCII 码来决定的。你可以试试 `'a' < 'b'`，以及 `'abc' < 'az'`，看一下输出结果
- 请注意，如果我们写成 `arr1.sort((a, b) => a[1] > b[1])` 是不行的。因为 `sort` 方法回调函数返回值不应该是 `true` 或 `false`；而应该是正数/负数/0
- 文档中提到，如果返回值小于 `0`，那么会把 `a` 放到 `b` 的前面；反之，则会把 `b` 放到 `a` 的前面。至于等于 `0`  的情况，文档中提到，理论上应该是保持 `a` 和 `b` 顺序不变，但这不一定适用于所有浏览器
- 还是上面的例子，如果我们写成 `arr1.sort((a, b) => a[1] > b[1])`，`true` 会被隐式转换成 `1`，即大于 `0` 的返回值，而 `false` 会被隐式转换成 `0`，即等于 `0` 的返回值，这样就会导致结果不稳定。你可以运行一下 `'gwxutwznyfb'.split('').sort((a, b) => a > b)`，结果 `'w'` 被排在了第一个
- 因此，最终的排序我们应该这么写：

```js
return arr1.sort(function(a, b) {
    return a[1] > b[1] ? 1 : -1;
});
```

- 其中，`1` 和 `-1` 为任意正数和负数，我们也可以写成 `10000` 和 `-123`


## 参考链接
- [Array.sort](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [return](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/return)
- [break](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/break)

## 代码
- 最终代码这里就不粘贴了，上面已经给出

# 中级解法 - 使用数组方法
## 思路提示
- 我们需要用 `arr2` 中的子数组的第二个值进行比较，而且它还是一个字符串。字符串是原始类型，也就意味着我们可以通过 `indexOf` 方法来获取索引。如果是 `-1` 那就表示不存在，这样我们就可以 `push` 了
- 那我们只需要把 `arr1` 中，每个子数组的第二个元素提取出来，成为一个新数组，然后我们就可以获取到字符串的索引了。这个操作，就是用数组的 `map` 方法
- 当然，最终的排序也是不能省的

## 参考链接
- [Array.indexOf](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [Array.map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

## 代码
```js
function updateInventory(arr1, arr2) {
    // 提取第二个元素，成为一个新数组 valueArr
    var valueArr = arr1.map(function(e) {
        return e[1]
    });
    for (var i = 0; i < arr2.length; i++) {
        var index = valueArr.indexOf(arr2[i][1])
        if (index > -1) {
            arr1[index][0] += arr2[i][0];
        } else {
            arr1.push(arr2[i]);
        }
    }
    return arr1.sort(function(a, b) {
        return a[1] > b[1] ? 1 : -1;
    });
}
```