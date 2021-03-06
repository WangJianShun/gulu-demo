const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position', () => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover position="bottom" ref="a"></g-popover>
        <tetmplate slot="content">弹出内容</tetmplate>
        <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div,
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true

        })
    })
    xit('可以设置trigger', (done) => {
        Vue.component('g-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-popover trigger="hover" ref="a"></g-popover>
        <tetmplate slot="content">弹出内容</tetmplate>
        <button>点我</button>
        </g-popover>
        `
        const vm = new Vue({
            el: div,
        })
        let event=new Event('mouseenter')

        vm.$el.dispatchEvent(event)

        vm.$nextTick(() => {
            const {contentWrapper} = vm.$refs.a.$refs
            expect(contentWrapper).to.exist
            done()
        })
    })

})