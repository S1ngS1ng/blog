---
title: FreeCodeCamp 初级算法题 - 摧毁数组
date: 2017-03-22 23:15:36
tags: [FreeCodeCamp,初级,算法]
categories: FCC
---
# 摧毁数组 (Seek and Destroy)
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/seek-and-destroy)
- [英文链接](https://www.freecodecamp.com/challenges/seek-and-destroy)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收多个参数。第一个参数为数组 `arr`，即为需要操作的原数组。后续的参数均表示需要删除的元素。返回值为操作后的数组
- 比如接收的是 `[1, 2, 3, 1, 2, 3]` 与 `2`, `3`，那么返回值为 `[1, 1]`。
- 需要注意的是，如果分割的过程出现剩余，那么返回值的最后一个数组会比较短。比如接收的是 `[1, 2, 3]` 与 `2`，那么输出就是 `[[1, 2], [3]]`
<!-- more -->

# 基本解法 - 遍历数组，使用 splice 方法
## 思路提示
- 上一道题目中我们用循环造了个 `filter` 的轮子。这道题同样可以通过手写循环来完成，思路与上一道题基本一致。只是这道题，我们是在操作一个数组与不定数量的数字
- 如果你不知道 `arguments` 是什么，请先点开上面的链接了解一下，否则代码是没法写的
- 请一定要注意 `arguments` 的类型，不能认为它就是一个数组，其实它只是一个很接近数组的对象。但一定要明白，你是不可以在 `arguments` 上直接调用数组方法的
- 但你可以在 `arguments` 上通过 `index` 来获取某一个参数。而且，`arguments` 自带了一个 `.length` 属性
- 既然我们要在数组中删除元素，因此 `splice` 是有必要的。当然我们也可以创建一个空数组，然后把符合条件的元素 `push` 进去。这里就只给出 `splice` 的写法吧

## 参考链接
- [Array.splice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Array.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [argumnets](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)

## 代码
```js
function destroyer(arr) {
    // 先把 arguments 转换为数组
    var arg = [].slice.call(arguments);

    // 保存下来第一个参数，就是要操作的数组
    var sourceArr = arg[0];
    // 后续的参数均为需要删除的数字，我们也把这些数字放到一个数组里
    var refArr = arg.slice(1);

    // 可以思考一下，这里为什么不能从 0 开始遍历
    for (var i = sourceArr.length - 1; i >= 0; i--) {
        // 如果当前的元素存在于 refArr 中，就把它删掉
        if (refArr.indexOf(sourceArr[i]) > -1) {
            sourceArr.splice(i, 1);
        }
    }

    return sourceArr;
}
```

## 解释
- 首先，对于 `[].slice.call(arguments)` 这个写法，同样可以换成 `Array.prototype.slice.call(arguments)`。作用相同，都是把 `arguments` 转换成一个数组。能理解这个写法的原理最好，如果不能理解，请把它背下来
- 通过 `arg[0]`，我们可以得到传入的所有参数中的第一个参数，也就是要操作的数组
- 通过 `arg.slice(1)`，我们可以得到除了第一个参数以外，后续的所有参数
- 平时写循环，我们都习惯从 0 开始遍历。但这里，可以试一下，如果从 0 开始遍历是会出错的。原因很简单，如果我们删除了某一个元素，那么在这之后的所有元素的 `index` 都会减一。然后我们通过 `i++` 来进入下一次循环，相当于跳过了一个元素
- 解决方案很简单，那就是从右边开始遍历。因此有了上面的写法

# 优化 - 使用 filter
## 参考链接
- [Array.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

## 代码
```js
function destroyer(arr) {
    var sourceArr = arguments[0];
    var refArr = [].slice.call(arguments, 1);

    return sourceArr.filter(function (e) {
        return refArr.indexOf(e) === -1;
    })
}
```

## 解释
- 这里我们直接通过 `.call(arguments, 1)` 来获取后续参数。我们可以把这段代码理解成 `arguments.slice(1)`，但这样写是肯定会报错的，因为 `arguments` 并没有 `slice` 这个数组方法
- 使用 `filter`，过滤掉不在 `refArr` 中的元素，就可以得到我们想要的结果

# 一行搞定 - 使用 reduce
## 参考链接
- [Array.reduce()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

## 代码
### ES5
```js
function destroyer(arr) {
    return [].slice.call(arguments).reduce(function (prev, next) {
        return prev.filter(function (e) {
            return e !== next;
        });
    });
}
```
### ES6
```js
function destroyer(arr) {
    return [].slice.call(arguments).reduce(function (prev, next) {
        return prev.filter(function (e) {
            return e !== next;
        });
    });
}
```

## 解释
- 如果不能理解这个写法，请先点击上面的链接，看看 `reduce` 是如何使用的
- 这里我们把 `reduce` 的返回值设置为 `prev` 经过 `filter` 操作后的结果，并用于下次计算。`next` 则为 `arguments` 中，除了第一个元素以外的其他元素
- 由于这里我们没有在 `reduce` 中传入第二个参数，也就是默认值。因此，进入 `reduce` 后，第一次调用的 `prev` 就是 `arguments` 中的第一个参数，也就是我们要操作的数组
