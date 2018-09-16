<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GuluBody",
        inject:['eventBus'],
    }
</script>

<style lang="scss" scoped>
    .tabs-body {
    }
</style>