---
title: FreeCodeCamp 初级算法题 - 凯撒密码
date: 2017-03-23 23:27:48
tags: [FreeCodeCamp, FCC, 算法]
---
# 凯撒密码 (Caesars Cipher)
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/caesars-cipher)
- [英文链接](https://www.freecodecamp.com/challenges/caesars-cipher)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个字符串参数 `str`，即为需要解密的字符串。返回值为解密后的字符串
- 比如接收的是 `"A"`，那么输出就是 `"N"`，如果接收的是 `"SERR PBQR PNZC"`，那么输出就是 `"FREE CODE CAMP"`
- 值得注意的一点是，解密的过程，其实可以通过对字符串再进行一次 ROT13 加密实现。ROT13 的加密原理是偏移 13 位，保持大小写不变。因此，再偏移一次就能得到原字符串
<!-- more -->

# 基本解法
## 思路提示
- 题目提到，要跳过空格和特殊字符，那这里我们很难通过字符串的 `split` 来分割，就算用正则表达式去分割，也很难再把他们 `join` 起来，因为很难知道 `join` 需要传入的参数。因此，对于这道题目，我们直接采用字符串方法就好
- 那么思路就很明确了，由于题目说了只考虑大写字符。根据前面的思路，我们只需要遍历字符串，把每一个大写字符都进行一次 ROT13 加密就可以得到解密的结果了
- 判断是否为大写也不难，我们可以通过 `.charCodeAt()` 返回的 ASCII 码来判断，当然也可以用正则来判断
- 至于加密的实现，我们可以像这样分情况讨论：
	- 如果当前字符为 `A - M` 之间，对应的 ASCII 码范围就是 `65 - 77`，那么 ROT13 加密应该给它的 ASCII 码加 13
	- 如果当前字符为 `N - Z` 之间，对应的 ASCII 码范围就是 `78 - 90`，那么 ROT13 加密应该给它的 ASCII 码减 13
	- 如果当前字符为其他 (小写，空格或特殊符号)，那就不应该执行任何操作
- 这种写法应该是最容易想，而且最容易实现的。请先尝试这个思路，因为后面的优化都是基于这个思路实现的

## 参考链接
- 如果你没有听说过 ROT13 加密，或者没听说过 ASCII，那先 Google 或者 Baidu 一下这两个是什么，否则很难完成本题
- [String.charCodeAt()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
- [String.fromCharCode()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode)

## 代码
```js
function rot13(str) {
    var result = "";

    for (var i = 0; i < str.length; i++) {
        var currentCode = str[i].charCodeAt();
        if (currentCode > 90 || currentCode < 65) {
            // 非大写字符
            result += String.fromCharCode(currentCode);
        } else if (currentCode < 78) {
            // 大写字符 A - M
            result += String.fromCharCode(currentCode + 13);
        } else {
            // 大写字符 N - Z
            result += String.fromCharCode(currentCode - 13);
        }
    }

    return result;
}
```
## 解释
- 如果你看不懂上面的代码，请再看一遍思路提示里面的内容，这里应该不需要其他解释了

# 优化 - 通过数学知识进行的优化
## 思路提示
- 你应该听说过求余这个计算方法，常见于判断奇偶。但是你可能没注意到一点，就是求余可以为我们提供一定范围内的 "循环" 输出
- 考虑一下这个计算，`n % 2`，这是很常见的判断奇偶的方式。关键在于，它的输出始终为 0 和 1。听起来像是废话，如果你进一步考虑 `n % 3`，会发现它的输出始终为 0，1 和 2
- 那么我们可以推广出一个结论，对于正整数 `n` 与 `m`，`n % m` 的结果应该始终为 `0` 至 `m - 1` 中的一个数。记住这个结论，很关键
- 回到这道题，不难发现，对于**这道题中的** ROT13 加密，`String.fromCharCode()` 中参数的范围应始终为 `65 - 90` 中的一个。既然 `n % m` 的结果应为 `0` 至 `m - 1`，因此我们可以简单地用 `(n % 26) + 65` 来表示这个范围 
- 明白了这一点，我们只需要确定如何得出 `n` 就大功告成了。先想一个例子，如果我们要把 `"A"` 加密为 `"N"`，`"A"` 的 ASCII 码为 65，`"N"` 为 78。试一下就知道，如果我们直接用 `n = 65` 计算 `n % 26`，那就会得到 13，而这个 13 刚好就是我们要的偏移
- 因此，对于一个字符串变量 `x`，我们就可以通过 `String.fromCharCode(x) % 26 + 65` 来得到加密后的值。下一步，就是要确定边界条件下是否也成立
- 根据之前的分析，对于字符串 `"N"` 来说，我们需要让它减 13。那么 `"N"` 的 ASCII 码为 78，如果我们计算 `78 % 26`，发现这刚好是可以整除的，因此我们就得到了 0。给它加上 65，也刚好是字符串 `"A"` 对应的 ASCII 码
- 需要注意的是，这里不需要对变量 `n` 进行特殊处理，只是一个巧合。在其他场景中，通常我们还需要找出输入与 `n` 的对应关系
- 至此，我们就已经确定，可以通过 `(n % 26) + 65` 来直接得出加密后的结果。因此，我们的代码可以写的很简单了
- 顺便，我们再用正则来优化一下判断。这个正则应该不难写，就是 `/[A-Z]/`

## 代码
```js
function rot13(str) {
    var result = "";
    
    for (var i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            result += String.fromCharCode(str[i].charCodeAt() % 26 + 65);
        } else {
            result += str[i];
        }
    }

    return result;
}
```

# 一行搞定 - 使用 replace
## 思路提示
- 既然输入是字符串，输出也是字符串，那我们就用 `replace` 好了

## 参考链接
- [String.replace()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

## 代码
### ES5
```js
function rot13(str) {
    return str.replace(/[A-Z]/g, function (char) {
        return String.fromCharCode(char.charCodeAt() % 26 + 65);
    })
}
```

### ES6
```js
function rot13(str) {
    return str.replace(/[A-Z]/g, char => String.fromCharCode(char.charCodeAt() % 26 + 65));
}
```
