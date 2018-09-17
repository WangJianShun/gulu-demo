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
            disabled: {
                type: Boolean,
                default: false,
            }
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
        mounted() {
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'GuluHead') {
                    vm.$children.forEach((childrenVm) => {
                        if (childrenVm.$options.name === 'GuluItem' && childrenVm.name === this.selected) {
                            console.log(childrenVm.$el)
                            this.eventBus.$emit(':update:selected', this.selected,childrenVm)
                        }
                    })
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {
    }


</style>