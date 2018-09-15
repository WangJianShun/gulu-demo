<template>
    <div class="tabs">
        <slot></slot>
        <slot name="actions"></slot>
    </div>
</template>

<script>
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
            disabled:{
                type:Boolean,
                default:false,
            }
        },
        created() {
            // this.$emit('update:selected','xxx')
        }
    }
</script>

<style lang="scss" scoped>
    .tabs {
    }
</style>