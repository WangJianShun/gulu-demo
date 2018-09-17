<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
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
            this.eventBus.$on(':update:selected',(item,vm)=>{
                console.log(item)
                console.log(vm.name)
            })
        },
    }
</script>

<style lang="scss" scoped>
    $height: 30px;

    .tabs-head {
        display: flex;
        justify-content: flex-start;
        position: relative;
        border: 1px solid red;
        height: $height;
        > .line{
            position:absolute;
            bottom:0;
            border-bottom:3px solid green;
            width:100%;
        }
        > .actions {
            margin-left: auto;
        }
    }
</style>