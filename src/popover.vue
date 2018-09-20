<template>
    <div class="popover" @click="onclick" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible"
             :class="{[`position-${position}`]:true}">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper" style="display:inline-block;">
        <slot></slot>
        </span>
    </div>
</template>
<script>
    export default {
        name: 'GuluPopover',
        data() {
            return {
                visible: false,
            }
        },
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0
                }
            }
        },
        methods: {
            positionContent() {
                document.body.appendChild(this.$refs.contentWrapper)
                let {triggerWrapper, contentWrapper} = this.$refs
                let {height: height2} = contentWrapper.getBoundingClientRect()
                let {top, bottom, width, right, height, left} = triggerWrapper.getBoundingClientRect()
                let positions = {
                    top: {
                        top: top + window.scrollY + 'px',
                        left: left + window.scrollX + 'px'
                    },
                    bottom: {
                        top: top + height + window.scrollY + 'px',
                        left: left + window.scrollX + 'px'
                    },
                    left: {
                        top:top + window.scrollY + (height - height2) / 2 + 'px',
                        left: left + window.scrollX + 'px'
                    },
                    right: {
                        top: top + window.scrollY + (height - height2) / 2 + 'px',
                        left: left + width + window.scrollX + 'px'
                    }
                }
                contentWrapper.style.left=positions[this.position].left
                contentWrapper.style.top=positions[this.position].top
            },

            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target ||
                        this.$refs.popover.contains(e.target))) {
                    return
                }
                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target ||
                        this.$refs.contentWrapper.contains(e.target))) {
                    return
                }
                this.close()
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)

                })
            },

            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument)
            },

            onclick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }

            }
        }
    }

</script>
<style lang="scss" scoped>
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
        left: 200px;
        top: 200px;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        border-radius: $border-radius;
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before, &::after {
            content: '';
            height: 0px;
            width: 0px;
            display: block;
            position: absolute;
        }
        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before {
                border: 10px solid transparent;border-top-color: black;
                top: 100%;
            }
            &::before, &::after {
                left: 10px;
            }
            &::after {
                top: 99%;
                border: 10px solid transparent;border-top-color: white;
            }
        }
        &.position-bottom {
            transform: translateY(0);
            margin-top: 10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                bottom: 100%;
                border: 10px solid transparent;border-bottom-color: black;
            }
            &::after {
                bottom: 99%;
                border: 10px solid transparent;border-bottom-color: white;
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before {
                border: 10px solid transparent;border-left-color: black;
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                left: 100%;
            }
            &::after {
                top: 50%;
                left: 99.5%;
                transform: translateY(-50%);
                border: 10px solid transparent;border-left-color: white;
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before {
                border: 10px solid transparent;border-right-color: black;
                top: 50%;
                transform: translateY(-50%);
            }
            &::before {
                right: 100%;
            }
            &::after {
                top: 50%;
                right: 99.5%;
                transform: translateY(-50%);
                border: 10px solid transparent;border-right-color: white;
            }
        }
    }

</style>