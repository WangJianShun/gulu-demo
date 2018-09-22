---
title:快速上手
---
# 快速上手

本章节待完善...

# 安装

请参考 [安装](/install/README.md) 章节

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