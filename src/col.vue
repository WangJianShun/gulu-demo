<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot>123</slot>
    </div>

</template>
<script>
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },

        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {

            colClass() {
                let {span, offset} = this
                return [span && `col-${span}`, offset && `offset-${offset}`]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    .col {
        width: 50%;
        border: 1px solid green;
        height: 100px;
    }

    $class: col-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            width: ($n/24)*100%
        }
    }

    $class: offset-;
    @for $n from 1 through 24 {
        &.#{$class}#{$n} {
            margin-left: ($n/24)*100%
        }
    }
</style>