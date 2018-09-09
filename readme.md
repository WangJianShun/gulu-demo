# 轱辘  一个VUE UI组件

# 介绍

这是我学习过程中做的一个UI框架,希望对你有用.

## 开始使用
    1.添加CSS样式
     使用本框架前,请在CSS中设置 border-box
      ```
      *{box-sizing:border-box;}
      *::before{box-sizing:border-box;}
      *::after{box-sizing:border-box;}
      ```
      你还需要设置默认颜色等变量(后续会改为SCSS变量)
      ```
      :root {
              --button-height: 32px;
              --font-size: 14px;
              --button-bg: white;
              --button-active-bg: #eee;
              --border-radius: 4px;
              --color: #333;
              --border-color: #999;
              --border-color-hover: #666;
          }
      ```

      2.安装gulu

      ```
      npm i --save gulu
      ```

      3.引入 gulu
      ```
      import {Button,ButtonGroup,Icon} from 'gulu-0908'
      import 'gulu-0908/dist/index.css'

      export default {
        name: 'app',
        components: {
          HelloWorld,
          'g-button':Button
          'g-icon':Icon
        }
      }
      ```



## 文档
## 提问
## 变更记录
## 联系方式
## 安装
## 贡献代码
  作者:王建顺


