<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible=false">关闭</button>
        </div>
    </transition>
</template>
<script>
    export default {
        data() {
            return {
                visible: true
            }
        },
        name: 'GuluSider'
    }
</script>
<style lang="scss" scoped>

    .sider {
        position: relative;
        background: #f08d49 !important;
        > button {
            position: absolute;;
            top: 0;
            right: 0;
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }

    .silde-enter, .slide-leave-to {
        margin-left: -200px;
    }

</style>