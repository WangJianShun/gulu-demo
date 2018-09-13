<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>


    export default {
        name: "GuluToast"
    }
</script>

<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {position: fixed;top: 0;left: 50%;transform: translateX(-50%);
        font-size: $font-size;line-height: $toast-height;height: 40px;display: flex;
        justify-content: center;align-items: center;background: $toast-bg;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);border-radius: 4px;color: white;
        padding:0 16px;
    }
</style>