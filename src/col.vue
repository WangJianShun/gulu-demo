<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot>123</slot>
    </div>

</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'GuluCol',
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            ipad: {
                type: Object,
                validator,
            },
            narrowPc: {
                type: Object,
                validator,
            },
            pc: {
                type: Object,
                validator,
            },
            widePc: {
                type: Object,
                validator,
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods:{
           createClasses(obj, str = '') {
               let array = []
                if (obj.span) {
                    array.push([`col-${str}-${obj.span}`])
                }
                if (obj.offset) {
                    array.push([`offset-${str}-${obj.offset}`])
                }
                return array

            }
        },
        computed: {

            colClass() {
                let {span, offset, ipad, narrowPc, pc, widePc} = this

                let createClasses=this.createClasses
                return [
                    createClasses({span, offset}),
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrow-pc'),
                    ...createClasses(pc, 'pc'),
                    ...createClasses(widePc, 'wide-pc'),
                ]
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

        @for $n from 1 through 24 {
            $class: col-;
            &.#{$class}#{$n} {
                width: ($n/24)*100%
            }
        }

        @for $n from 1 through 24 {
            $class: offset-;
            &.#{$class}#{$n} {
                margin-left: ($n/24)*100%
            }
        }

        @media(min-width: 577px) {
            $class: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%
                }
            }

            @for $n from 1 through 24 {
                $class: offset-ipad-;
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media(min-width: 769px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%
                }
            }

            @for $n from 1 through 24 {
                $class: offset-narrow-pc;
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media(min-width: 993px) {
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%
                }
            }

            @for $n from 1 through 24 {
                $class: offset-pc;
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
        @media(min-width: 1201px) {
            $class: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n/24)*100%
                }
            }

            @for $n from 1 through 24 {
                $class: offset-wide-pc;
                &.#{$class}#{$n} {
                    margin-left: ($n/24)*100%
                }
            }
        }
    }

</style>