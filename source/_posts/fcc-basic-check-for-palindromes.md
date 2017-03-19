---
title: FreeCodeCamp 初级算法题 - 检查回文字符串
date: 2017-03-17 23:10:47
tags: [FreeCodeCamp, FCC, 算法]
---
# 检查回文字符串
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/check-for-palindromes)
- [英文链接](https://www.freecodecamp.com/challenges/check-for-palindromes)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个字符串参数，返回 Boolean
- 回文字符串意思就是正着读和反着读都一样的字符串
- 比如接收的是 "eye"，那么输出就是 true，如果接受的是 "nope"，那么输出就是 false
- 需要注意的是，在这道题目中，需要忽略空格和特殊符号的影响，只考虑数字和字母部分
<!-- more -->

## 参考链接
- [String.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [String.toLowerCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions)

## 思路提示
- 在判断之前，以下这两步是一定要做的，顺序无所谓：
	- 去掉所有"干扰项"，比如特殊字符和空格
	- 把字符串转换成小写
- 逻辑判断部分，大体可以分为两种思路：
	- 翻转字符串，并与排除干扰项之后的字符串比较，如果相等就返回 true，反之则为 false
	- 双指针。用两个变量代表两个"指针"，一个从开头往右移动，另一个从结尾向左移动，比较每次指向的字符是否相等
- 对于第一种"翻转字符串后比较"的思路，可以参考之前做过的 `Reverse a String` 那道题，有以下两种实现方式：
	- 先把字符串变成数组，用数组的 `.reverse()` 方法，然后合并成字符串
	- 不用数组，直接通过 `for` 循环翻转字符串，然后与排除干扰项后的字符串比较
- 对于第二种"双指针"的思路，也有两种实现方式：
	- 循环，设置一个指针初始值为开头(0) 另一个为结尾(str.length - 1)，然后判断当前字符是否相等。相等就把左边的指针向右移动一位(++)，同时右边的指针向左移动一位(--)。如果不相等就可以直接跳出了，并返回 false
	- 递归，不需要创建指针。每次都判断字符串的开头和结尾是否相等，递归调用的时候参数传入去掉头尾的 `str`
- 建议先用第一种思路写，通过了再试试第二种思路
- 如果要写递归，一定要记得设置好边界条件和跳出条件

## 参考答案
### 关于正则
在给出答案之前，先简单说说这道题的正则如何写最好

在这道题目中，我们需要把空格、特殊符号都去掉。`.replace()` 方法接收的第一个参数为一个正则表达式(或字符)，第二个参数为字符(或一个 function)。作用就是把通过第一个参数匹配到的字符给替换成第二个参数的字符。括号中的参数类型，这道题中并不会用到

那么，我们需要做的就是，在第一个参数中匹配空格和特殊符号，第二个参数中传入 `""` 空字符，顺便，记得要在正则结尾写上 `/g`，否则不能替换全部

匹配空格和特殊符号，空格是 `\s` (请注意，反之不成立，`\s` 不光是空格，还包括制表符 tab，以及换行符 `\r` 或者 `\r\n`)。然而，特殊符号，并没有一个通用的匹配写法

有些朋友可能会想这样做，事实上我也真的见过有不少人这样做：`/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g`，嗯，没毛病

但我们换一种思路想想，其实我们要做的，就是"保留英文字母和数字"。这样，正则就变得简单很多了，只需要 `/[^A-Za-z0-9]/g`。另一方面，如果你先 `.toLowerCase()` 再 `.replace()`，正则就可以直接写成 `/[^a-z0-9]/g`

如果你决定用 `\w` 的相反形式 `\W`，没有问题，但一定要记住，`\w` 不仅包含英文字母，还包含了下划线 `_`。因此，你需要写成 `/[\W_]/g`，或者写成 `/\W|_/g`

### 基本答案 - 翻转字符串后比较
```js
function palindrome (str) {
    // 转换成小写
    var lowerStr = str.toLowerCase();
    // 替换掉干扰项
    var replacedStr = lowerStr.replace(/[^a-z0-9]/g, "");
    // 分割成数组
    var strArr = replacedStr.split("");
    // 翻转数组
    var reversedArr = strArr.reverse();
    // 合并成字符
    var reversedStr = reversedArr.join("");
    // 返回判断结果
    return replacedStr === reversedStr;
}
```
#### 解释
- 需要注意的是，最后的步骤不应该与传入的 `str` 比较，而是应该与 `replacedStr` 去比较
- 如果看了上面的注释还不懂，请打开浏览器控制台，在里面给每行都加上 `console.log()`，看下执行过程中都发生了什么

### 优化
- 还记得链式调用么？
```js
function palindrome (str) {
    // 边界判断
    if (str.length === 1) {
        return true;
    }
    var replacedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    var reversedStr = replacedStr.split("").reverse().join("");

    return replacedStr === reversedStr;
}
```
#### 解释
- `.toLowerCase()` 返回字符串，`.replace()` 是字符串方法，同样也返回字符串。这两个连用，我们就可以得到排除干扰项之后的结果
- `.split()` 是字符串方法，返回分割后的数组。`.reverse()` 是数组方法，返回翻转后的数组。`.join()` 是数组方法，返回合并后的字符串。最后，我们得到的就是翻转后的字符串
- 养成一个好习惯，只声明必要的变量，比如这个步骤中的 `replacedStr` 和 `reversedStr`
- 养成另一个好习惯，先判断边界值。如果 `str` 的长度为 1，那么肯定是回文字符串了。直接返回 `true` 就行
- 不用数组方法，直接遍历字符串并翻转，这里就不写了，请参考 [翻转字符串](http://singsing.io/blog/2017/03/17/fcc-basic-reverse-a-string)

### 双指针解法
```js
function palindrome(str) {
    if (str.length === 1) {
        return true;
    }
    var replacedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // 双指针 i 与 j，用来代表当前判断位置的索引
    for (var i = 0, j = replacedStr.length - 1; i < replacedStr.length / 2; i++,j--) {
        // 如果检测到了不相同
        if (replacedStr[i] !== replacedStr[j]) {
            // 直接跳出判断，返回 false
            return false
        }
    }
    // 所有的都判断完了，没有不相同的，返回 true
    return true;
}
```
#### 解释
这个解法的思路不复杂，但写的时候有几个错误比较容易犯
1. 初始值，当然要设置为 `.length - 1`
2. 循环跳出条件，设置为 `i < replacedStr.length / 2` 就可以。不管字符长度是奇数还是偶数，都不影响。除以 2 是因为，只要两个指针相遇，就证明我们已经判断完了所有的字符
3. `return false` 涉及到逻辑短路，也就是，循环的过程中，只要出现不相等，我们就可以得出"不是回文字符串" 的结论。但"是回文字符串"的结论，只能在循环完全执行完成的时候才可以得出。类似的思路同样应用在 [Profile-Lookup](https://freecodecamp.cn/challenges/profile-lookup) 这道题

当然，我们也可以只采用一个变量 `i` 来实现，只需要把循环部分写成这样：
```js
for (var i = 0; i < replacedStr.length / 2; i++) {
    if (replacedStr[i] !== replacedStr[replacedStr.length - i - 1]) {
        return false
    }
}
```
要注意的是，一定要写成 `replacedStr.length - i - 1`。至于为什么，举个例子就知道了，比如当 `length` 为 5，`i` 为 0 的时候，我们应该需要找到 `index` 为 4 的位置才对

### 递归解法
```js
function palindrome(str) {
    // 排除干扰项
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    // 设置边界条件
    if (str.length < 2) {
        return true;
    }
    // 检测首尾是否相等不相等，如果不等就直接返回 false
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // 递归调用
    return palindrome(str.slice(1, -1));
}
```
#### 解释
- 整体思路是，递归地判断字符串的首尾是否相等
- 如果相等，就排除掉首尾字符，继续判断首尾是否相等，注意在最后的 `return` 那里，传入参数的改变
- 边界条件(跳出条件) 只需要设置为 `str.length < 2`，因为当 `length` 为 0 或者 1 的时候就表示这个字符是回文字符串
- 最后的递归调用，可以用 `else` 包起来，但其实没有必要。可以这样去理解，一旦前面的判断生效了，就会直接跳出，也就不会执行到这里因为。既然能执行到这一步，就表示前面的 `if` 判断都没有生效。
