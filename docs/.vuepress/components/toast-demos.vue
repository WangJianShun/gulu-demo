<template>
    <div style="padding-top: 16px;">
        <h2>this.$toast</h2>
        <p>
            <strong>预览</strong>
        </p>

        <div>
            <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
            <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
            <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content_1}}</code></pre>

        <h2>设置关闭按钮</h2>
        <p>
            <strong>预览</strong>
        </p>

        <div>
            <g-button @click="onClickButton">上方弹出</g-button>
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content_2}}</code></pre>

    </div>
</template>
<style>
    .gulu-toast {
        z-index: 30 !important;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import plugin from '../../../src/plugin'
    import GButton from '../../../src/button'
    import Vue from 'vue'

    Vue.use(plugin)
    export default {
        components: {GButton},
        data () {
            return {
                content_1: `
          <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
              header
            </g-header>
            <g-content style="height: 100px; background:deepskyblue;">
              content
            </g-content>
            <g-footer style="height: 50px; background:lightskyblue;">
              footer
            </g-footer>
          </g-layout>
      `.replace(/^ {8}/gm, '').trim(),
                content_2: `
          <style>
            .gulu-toast {
              z-index: 30;
            }
          </style>
          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>
          methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          },
      `.replace(/^ {8}/gm, '').trim()
            }
        },
        methods: {
            onClickButton () {
                this.$toast('你知道我在等你吗？', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            }
        },
    }
</script>