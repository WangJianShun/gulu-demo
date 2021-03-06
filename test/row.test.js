const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.exist
    })
    it('接受gutter和span属性', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
           <g-row gutter='20'>
             <g-col span="12"></g-col>
             <g-col span="12"></g-col>
           </g-row>
        `

        const vm = new Vue({
            el: div
        })
        setTimeout(() => {
            const rows = vm.$el.querySelector('.row')
            expect(getComputedStyle(rows).marginRight).to.eq('-10px')
            expect(getComputedStyle(rows).marginLeft).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })

    })
    it('可以设置align', () => {
        const div=document.createElement('div')
        document.body.appendChild(div)

        const Constructor = Vue.extend(Row)

        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.eq('center')
        vm.$el.remove()
        vm.$destroy()
    })
})