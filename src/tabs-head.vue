<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GuluHead",
        inject: ['eventBus'],
        created() {
        },
    }
</script>

<style lang="scss" scoped>
    $height: 30px;

    .tabs-head {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid red;
        height: $height;
        > .actions {
            margin-left: auto;
        }
    }
</style>