---
title:快速上手
---
# 快速上手

推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。

# 安装

请参考 [安装](/install/README.md) 章节

以下是引入本组件最简易的示例:
# Hello world !

```js{4}
import {Button} from 'gulu-demo'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'g-button':Button
  }
})
```
