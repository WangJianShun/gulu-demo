<template>
    <div class="tabs">
        <slot></slot>

    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "GuluTab",


        props: {
            selected: {
                type: String,
                required: true
            },
            direction: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0
                }
            },

        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {
                eventBus: this.eventBus
            }
        },
        methods: {
            checkChildren() {
                if (this.$children.length === 0) {
                    console && console.warn && console.warn('tabs的子组件应该是tabs-body和tabs-head,但是你没有添加此组件')
                }
            },
            selectTab() {
                this.$children.forEach((vm) => {
                    if (vm.$options.name === 'GuluHead') {
                        vm.$children.forEach((childrenVm) => {
                            if (childrenVm.$options.name === 'GuluItem' && childrenVm.name === this.selected) {
                                this.eventBus.$emit(':update:selected', this.selected, childrenVm)
                            }
                        })
                    }
                })
            }
        },
        mounted() {
            this.checkChildren()
            this.selectTab()
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {
    }


</style>