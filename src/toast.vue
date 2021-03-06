<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast" autoClose>
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default[0]"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
        </div>
    </div>

</template>

<script>
    export default {
        name: "GuluToast",
        props: {
            autoClose: {
                type: [Boolean, Number],
                default: false,
                validator(value) {
                    return value === false || typeof  value  === 'number';
                }
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
            },
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }
            }
        },
        computed: {
            toastClasses() {
                return {
                    [`position-${this.position}`]: true
                }
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
                    }, this.autoClose * 1000)
                }
            },
            updataStyles() {
                this.$nextTick(() => {
                    console.log(this.$refs.toast.getBoundingClientRect().height);
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            },

        }
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $animation-time: 300ms;
    @keyframes slide-up {
        0% {opacity: 0;transform: translateY(100%)}
        100% {opacity: 1;transform: translateY(0%)}
    }

    @keyframes slide-down {
        0% {opacity: 0;transform: translateY(-100%)}
        100% {opacity: 1;transform: translateY(0%)}
    }

    @keyframes fade-on {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .wrapper {
        position: fixed;left: 50%; transform: translateX(-50%);
        &.position-top {
            top: 0;
            z-index:30;
            .toast {

                border-top-left-radius: 0px;
                border-top-right-radius: 0px;
                animation: slide-down $animation-time linear;
            }
        }
        &.position-bottom {
            bottom: 0;
            z-index:30;
            .toast {
                border-bottom-left-radius: 0px;
                border-bottom-right-radius: 0px;
                animation: slide-up $animation-time linear;
            }
        }
        &.position-middle {
            z-index:30;
            top: 50%;
            transform: translate(-50%, -50%);
            .toast {
                animation: fade-on $animation-time linear;
            }
        }
    }

    .toast {
        font-size: $font-size;line-height: 1.8;min-height: $toast-min-height;display: flex;
        justify-content: center;align-items: center;background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);border-radius: 4px;color: white;
        padding: 0 16px;
    }

    .close {padding-left: 16px;cursor: pointer; }

    .line {
        border-left: 1px solid #666;
        margin-left: 16px;
    }

    .message {
        padding: 8px 0;
    }
</style>