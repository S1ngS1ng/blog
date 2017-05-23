---
title: FreeCodeCamp 初级算法题 - 句中单词首字母大写
date: 2017-03-18 03:35:10
tags: [FreeCodeCamp,初级,算法]
categories: FCC
---
# 句中单词首字母大写 (Title Case a Sentence)
## 题目链接
- [中文链接](https://www.freecodecamp.cn/challenges/title-case-a-sentence)
- [英文链接](https://www.freecodecamp.com/challenges/title-case-a-sentence)
- 级别：初级 (Basic Algorithm Scripting)

## 问题解释
- 这个 `function` 接收一个字符串参数，返回操作之后的字符串
- 比如接收的是 `"short sentence"`，那么输出就是 `Short Sentence`，如果接收的是 `"shOrT sEnTEnce"`，那么输出也应该是 `Short Sentence`
- 需要注意的是，题目中暗含了一个情况需要处理，就是每个单词，如果在非首字母位置出现了大写，也要输出小写

<!-- more -->

# 基本解法 - for 循环
## 思路提示
- 既然我们要操作每一个单词，那可以先用 `split(" ")` 来按照空格分割传入的字符串成为数组，这样操作起来就会方便很多
- 另一方面，为了方便操作，我们可以在分割之前先把所有字符都用 `toLowerCase` 转换成小写。JavaScript 只会去操作大写字符，转换成小写。至于特殊符号和空格，不会影响函数执行
- 分割之后，遍历数据，然后把第一个字符变成大写就行。转换方式就是用 `toUpperCase`
- 为保证单词其他部分不变，我们只需要把第一个字符转换成大写，再用 `substr` 或者 `slice` 方法取出单词剩余部分，拼接起来就可以了
- 同样，这道题也可以使用正则表达式以及字符串的 `replace` 方法完成

## 参考链接
- [String.split()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [Array.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Array/join)
- [String.toLowerCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.toUpperCase()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [String.substr()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
- [String.slice()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

## 代码
```js
function titleCase(str) {
    // 转小写及分割成数组
    var stringArr = str.toLowerCase().split(" ");

    for (var i = 0; i < stringArr.length; i++) {
        // 修改数组元素。第[0]位就是单词的首字母，转成大写，然后把后面的字符加上去
        stringArr[i] = stringArr[i][0].toUpperCase() + stringArr[i].slice(1);
    }

    return stringArr.join(" ");
}
```

## 解释
- 可能会有朋友问，为什么不在 `function` 里生成一个空字符串，再遍历数组，动态地把处理过的字符串添加进去呢？这个思路当然是没问题的，只是需要多做一步，就是处理多余的空格。大家可以写一下试试，顺便，去掉首尾空格的方法叫 `.trim()`
- `.slice(1)` 的意思就是，从索引为 1 的字符，一直复制到字符串结尾。这个步骤同样可以写成 `.substr(1)`
- 最后那里，一定要 `.join(" ")`，这表示我们用空格把所有元素合并起来。而且这个空格，不会加到首尾。这也许是用数组的一个好处，毕竟 `join` 是数组方法

# 基本解法 - 使用 map
## 思路提示
- 既然用了数组，这里又是要对每一个元素执行相同的操作，不妨用用 `map`
## 参考链接
- [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Array/map)

## 代码
```js
function titleCase(str) {
    return str.toLowerCase().split(" ").map(function (word) {
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
}
```

## 解释
- `toLowerCase` 返回字符串，调用 `split` 方法之后返回数组。数组再去调用 `map` 方法
- 只要你理解了上面的基本解法，同时理解了 `map` 方法的作用，就应该不难理解这段代码。`map` 的好处就在于，它是数组方法，而且返回值为操作之后的数组

# 中级解法 - 使用正则表达式及字符串方法
## 思路提示
- 思路上来说，就是通过正则匹配到首字母，并把它替换成为大写字符，同时，保留其他字符不变
- 当然，也是需要先进行 `toLowerCase` 操作的

## 代码
```js
function titleCase(str) {
    return str.toLowerCase().replace(/(\s|^)[a-z]/g, function (match) {
        return match.toUpperCase();
    })
}
```

## 解释
- 首先转换成小写，这一步应该不需要多解释
- 然后我们调用字符串的 `replace` 方法，这个正则其实不复杂。`\s` 包含了空格，`^` 是用来匹配字符串开头。意思就是，如果在空格之后有一个字母，或者一个字母位于 `str` 的开头，那就可以匹配
- 而且，我们还设置了 flag 为 `/g`。因此，对于 `abc def ghi` 这个 `str`，会匹配到三个位置，分别是 `a`，` d` 以及 ` g`。值得注意的是，d 和 g 前面的空格也是会被匹配到的
- `replace` 的第二个参数，常见的情况是传入字符。但其实，传入一个 callback function (回调函数) 也是没问题的。传入的回调函数，第一个参数即为匹配的组，这个函数的返回值一定要是一个字符串，即为我们要把前面匹配到的部分替换成什么
- 由于匹配的部分 (也就是上面代码中的形式参数 match) 本身就是字符，那么我们可以直接调用 `toUpperCase` 把它转成大写。`toUpperCase` 会忽略掉不能转换的东西，比如特殊字符、大写字符和空格
