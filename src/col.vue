<template>
    <div class="col" :class="[`col-${span}`]">
        <slot>123</slot>
    </div>

</template>
<script>
    export default{
        name:'GuluCol',
        props:{
            span:{
                type:[Number,String]
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        height: 100px;
        width: 50%;
        background: red;
        border: 1px solid blue;
    }
    $class:col-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            width:($n/24)*100%
        }
    }
</style>