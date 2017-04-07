---
title: FreeCodeCamp 初级算法题 - 翻转字符串
date: 2017-03-17 22:53:25
tags: [FreeCodeCamp,初级,算法]
categories: FCC
---
# 翻转字符串 (Reverse a String)
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/reverse-a-string)
- [英文链接](https://www.freecodecamp.com/challenges/reverse-a-string)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个字符串参数，返回翻转后的字符串
- 比如接收的是 "hello"，那么输出就是 "olleh"
<!-- more -->

# 基本解法
## 思路提示
1. 先把字符串分割成为数组
2. 翻转数组
3. 把翻转后的数组合并为字符串

## 参考链接
- [String.split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.reverse()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Array.join()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

## 代码
```js
function reverseString(str) {
    var strArr = str.split('');
    var reversedArr = strArr.reverse();
    return reversedArr.join('');
}
```

## 解释
- 第一步就是把传入的 `str` 分割，并赋值给 `strArr`
- 第二步是把数组翻转，并赋值给 `reversedArr`
- 第三步是返回合并之后的字符
- 需要注意的是，以上的 `.split` 和 `.join` 都不会改变原来的字符串或数组，但 `reverse` 会改变原来的数组

# 优化
## 代码
```js
function reverseString(str) {
    return str.split('').reverse().join('');
}
```

## 解释
- `.split` 返回分割后的数组，因此可以直接调用 `.reverse`
- `.reverse()` 方法返回的是翻转后的数组，因此可以直接调用 `.join`
- `.join` 之后就是我们想要的字符串，直接返回即可
- 这里用到了 Method Chaining，也就是方法的链式调用。只要你熟悉方法的返回值，就可以这么做，好处在于可以不用创建这么多变量

# 中级解法
## 思路提示
- 直接利用字符串方法，而不需要转换成数组
- 多说一句，获取字符串中 `str` 的某一个字符有两种方式，分别是 `str.charAt(i)` 和 `str[i]`。两种方式都只是读取，均**不可以**通过赋值修改原字符串
- 至于该用哪种，前者 (`charAt`) 是 ES3 标准中的，后者(中括号的写法)是 ES5 中加入的。鉴于目前不支持 ES5 的浏览器很少，因此我觉得用中括号写法是没问题的

## 代码
```js
function reverseString(str) {
    var result = "";
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
```

## 解释
- 首先我们先创建一个变量，叫 `result`，用于保存输出结果
- 然后，从右边开始遍历字符串。值得注意的是，就像数组一样，字符串一样可以通过所以来获取某一个字符。比如，`str[0]` 就是获取第一个字符。再比如，`str[-1]` 就是获取最后一个字符
- 因为是从右边开始遍历，那我们把每次遍历到的字符直接加到 `result` 就可以了
- 需要注意的是边界条件的确定，因为字符串的索引同样是从 0 开始的，因此遍历的初始值要设置为 `str.length - 1`，结束值为 0

# 高级解法
## 思路提示
- 通过字符串方法以及递归来翻转

## 代码
```js
function reverseString(str) {
    // 设置递归终点(弹出条件)
	if (str.length === 1) {
        return str;
    }
    else {
        // 递归调用
        return reverseString(str.substr(1)) + str[0];
    }
}
```

## 解释
- 这种方法，一开始不能理解没关系。等做到高级算法题，再回来看看应该就可以理解了
- 递归涉及到两个因素，递归调用以及弹出过程。`reverseString(str.substr(1))` 就是递归调用，`+ str[0]` 就是弹出过程
- 代码在执行到 `reverseString(str.substr(1))` 的时候，会重新调用 `reverseString`，并传入 `str.substr(1)` 作为参数。后面的 `+ str[0]` 暂时不会执行
- 直到传入的字符串长度为 `1`，就不会再去调用 `reverseString` 了，而是会执行 `if` 里面的部分，返回当前传入的 `str`。然后就会一步一步地执行之前的 `+ str[0]`，也就是弹出过程

举个例子：
```js
var str = "abc";

reverseString(str)
```
- 执行过程如下：
	- 首先执行 `reverseString("abc")`，这时候传入的 `str` 长度不为 1，所以执行 `else` 部分，也就是 `reverseString(str.substr(1))`。这就是递归调用，执行这段代码，其中 `str.substr(1)` 为 `"bc"`
		- `reverseString("bc")`，这时候传入的 `str` 长度依旧不为 1，所以执行 `reverseString(str.substr(1))`，其中 `str.substr(1)` 为 `"c"`
			- `reverseString("c")`，这时候传入的 `str` 长度为 1，所以执行 `if` 中的部分，返回传入的 `str`，也就是返回 `"c"`
		- 回到 `reverseString("bc")` 这一步，此时的 `str[0]` 为 `"b"`。由于上一步的返回值是 `"c"`，那么这一步的返回值是 `"cb"`
	- 回到 `reverseString("abc")`，此时的 `str[0]` 为 `"a"`。由于上一步的返回值是 `"cb"`，那么这一步的返回值是 `"cba"`

至此，我们得到了最终结果，`"cba"`
