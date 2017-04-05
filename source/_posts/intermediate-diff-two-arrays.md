---
title: FreeCodeCamp 中级算法题 - 比较两数组差异
date: 2017-04-04 00:10:39
tags: [FreeCodeCamp,中级,算法]
categories: FCC
---
# 比较两数组差异 (Diff Two Arrays)
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/diff-two-arrays)
- [英文链接](https://www.freecodecamp.com/challenges/diff-two-arrays)
- 级别：中级 (Intermediate Algorithm Scripting)
<!-- more -->

## 问题解释
- 这个 `function` 接收两个数组参数，分别为 `arr1` 和 `arr2`。返回值也为一个数组，元素是两数组的差异部分
- 比如接收的是 `[1, 2, 3, 5]` 与 `[1, 2, 3, 4, 5]`，那么输出就是 `[4]`
- 需要注意的是，返回值不一定完全来自第二个数组。也就是说，差异部分也有可能包含在第一个数组中。举个例子，如果接收的参数是 `[1, 2, 3]` 与 `[1, 2, 4]`，那么返回值应该为 `[3, 4]`

# 基本解法 - 循环
## 思路提示
- 既然要比较数组，那么肯定要遍历传入的两个数组
- 首先，我们需要先建立一个空数组用来存储结果
- 然后，分别遍历两个数组，找出在另一个数组中不存在的元素，并 `push` 到结果数组中就可以了
- 遍历的时候，需要判断元素在另一个数组中是否存在，只需要使用 `indexOf` 方法。这个方法返回的是索引，当索引为非负数即表示存在，若为 `-1` 则表示不存在

## 参考链接
- [Array.push()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
- [Array.indexOf()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

## 代码
```js
function diff(arr1, arr2) {
    // 这个数组用于存储结果
    var result = [];

    // 在 arr1 中找出不存在于 arr2 的元素
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            result.push(arr1[i]);
        }
    }

    // 在 arr2 中找出不存在于 arr1 的元素
    for (var j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            result.push(arr2[j]);
        }
    }

    return result;
}
```

## 解释
- 应该不需要太多解释，如果看不懂这个解法，请再看一遍思路提示部分

# 优化 - 封装逻辑
## 思路提示
- 你可能听说过"封装"这个词。封装的作用之一就是提取出代码的重复部分，并写成函数 (function)
- 至于为什么要这样做，不知道你是否听说过一个叫 [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) 的原则，它是 Don't Repeat Yourself 的缩写
- 举个简单的例子，现在咱们写的 `diff` 方法其实本身就是一种封装。如果我们现在在开发一个项目，代码中经常需要用到"取出两数组的差值"这个功能，当然我们可以在每次要用到的时候，把上面写的两个 `for` 循环都复制粘贴进去。但如果我们要用 100 次呢？显然，粘贴 200 个 `for` 循环并不是一个好办法
- 因此，我们就把它封装成 `diff`，然后接受两个数组为参数，只要我们调用这个方法，就可以得到两数组的差值
- 之所以要提到这点，因为我们可以观察出，其实上面的两个 `for` 循环是有点儿重复的。因为他们干的事很类似，都是遍历一个数组，然后在另一个数组中找出不存在的元素
- 对于封装，个人的思路一般是这样：
	- 首先，根据代码来判断需不需要进行封装。如果代码中有重复的部分，而且这些重复的部分可以合并，那么就表示可以进行封装
	- 之后，根据代码的逻辑部分来制定传入的参数，以及返回值
- 那么，对于上面的判断逻辑，其实我们需要的参数就是两个数组，返回值是计算后的差异数组
- 因此，我们只需要使用这个封装好的方法，对两个数组都执行这个操作，然后把得到的两个差异数组合并 (`concat`) 起来，就是最终结果了
- 如果你看懂了上面说的内容，那就先自己写写吧

## 参考链接
- [Array.concat()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## 代码
```js
function diff(arr1, arr2) {
    // 用 firstArr 和 secondArr 来表示传入的参数，均为数组
    function getDiff (firstArr, secondArr) {
        // 设置一个变量用于暂存结果
        var result = [];

        // 逻辑思路是，遍历 firstArr，然后与 secondArr 比较
        for (var i = 0; i< firstArr.length; i++) {
            if (secondArr.indexOf(firstArr[i]) === -1) {
                result.push(firstArr[i]);
            }
        }

        // 这个 result 并不是最终的结果。我们需要对传入的参数操作两次，然后把两次的结果合并起来
        return result;
    }

    return getDiff(arr1, arr2).concat(getDiff(arr2, arr1));
}
```

## 解释
- 可能有朋友并不觉得这算是优化。事实上，优化分为很多方面。公有逻辑的封装，本身就是对代码的优化
- 另外希望大家不要走进一个误区，就是错误地认为代码越短越好。事实上，有时候强行合并逻辑，比如通过嵌套三元运算符之类的方法去缩短代码，在我看来是不可取的。因为这会大大降低代码的可读性
- 上面的封装效果可能不够好，在更复杂的逻辑中，你可能更容易感受到封装的好处

# 中级解法 - 使用数组的 filter 方法
## 思路提示
- 在上面的 `for` 循环写法上，我们来进一步思考一下，其实做的事情就是要过滤数组。对于其中一个数组来说，我们需要过滤它，也就是只保留它的一部分。过滤的规则是：只保留不存在于另一个数组中的元素
- 这也就是为什么我们可以使用 `.filter` 方法。只需要写对 `.filter` 的回调函数就可以了。先自己尝试一下吧
- 顺便，我们也可以使用另一个数组内建方法，叫 `includes`。如果你没听说过这个方法，请点击下面的链接去 MDN 看一下。这个方法是 ES2016 (或者叫 ES7) 中的，目前主流浏览器的最新版本都支持这个方法。这里就不给出了，有兴趣的朋友可以试着写写

## 参考链接
- [Array.filter()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.includes()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

## 代码
### ES6
```js
function diff(arr1, arr2) {
    return arr1.filter(e => arr2.indexOf(e) === -1).concat(
        arr2.filter(e => arr1.indexOf(e) === -1)
    );
}
```

## 解释
- 如果你理解 `filter` 的语法，那上面的写法应该不难懂。`filter` 方法返回的是过滤后的数组，只需要分别过滤两个数组，然后把返回值合并起来就可以了

# 一行搞定 - 先合并，再过滤
## 思路提示
- 由于我们操作的是合并后的数组，所以这时候过滤的逻辑是：过滤掉既存在于 `arr1` 也存在于 `arr2` 中的元素
- 自己先试着写一下吧

## 代码
### ES6
```js
function diff(arr1, arr2) {
    return arr1.concat(arr2).filter(e => arr1.indexOf(e) === -1 || arr2.indexOf(e) === -1);
}
```
