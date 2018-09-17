<template>
    <div class="tabs-pane" @click="xxx" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluPane",
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
                this.eventBus.$emit(':update:selected', this.name)

            },

        },
        created() {
            this.eventBus.$on(':update:selected', (name) => {
                this.active = name === this.name;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs-pane {
        &.active {
            padding : 1em;
        }
    }
</style>