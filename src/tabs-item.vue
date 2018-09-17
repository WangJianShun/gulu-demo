<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluItem",
        inject: ['eventBus'],
        data() {
            return {
                active: false,
            }
        },
        computed: {
            classes() {
                return {active: this.active}
            }
        },
        props: {
            name: {
                type: String || Number,
                required: true,
            }
        },
        methods: {
            xxx() {
                this.eventBus.$emit(':update:selected', this.name,this)
            },

        },
        mounted() {
            this.eventBus.$on(':update:selected', (name) => {
                this.active = name === this.name;
            })
        }
    }
</script>

<style lang="scss" scoped>
    $color: blue;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 2em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $color;
            font-weight:bold;
        }
    }
</style>