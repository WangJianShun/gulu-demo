<template>
    <div class="toast" ref="wrapper" autoClose>
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        name: "GuluToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true,
            },
            autoCloseDelay: {
                type: Number,
                default: 50,
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        text: '关闭', callback: undefined,
                    }
                }
            },
            enableHtml: {
                boolean: true,
                default: false,
            }
        },
        mounted() {
            this.exeautoClose()
            this.updataStyles()

        },
        methods: {
            exeautoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updataStyles() {
                this.$nextTick(() => {
                    console.log(this.$refs.wrapper.getBoundingClientRect().height);
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {position: fixed;top: 0;left: 50%;transform: translateX(-50%);
        font-size: $font-size;line-height: 1.8;min-height: $toast-min-height;display: flex;
        justify-content: center;align-items: center;background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);border-radius: 4px;color: white;
        padding: 0 16px;
    }

    .close {padding-left: 16px;}

    .line {
        border-left: 1px solid #666;
        margin-left: 16px;
    }
    .message{
        padding:8px 0;
    }
</style>