const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props', () => {
        it('接受autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: true,
                    autoCloseDelay: 1
                }
            }).$mount(div)

            vm.$on('close', () => {
                expect(document.body.contains(vm.$el)).to.eq(false)
                done()
            })

        })
        it('接受CloseButton', () => {
            const Constructor = Vue.extend(Toast)
            let callback = sinon.fake();
            const vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '点击关闭',
                        callback,
                    }
                }
            }).$mount()
            let closeButton = vm.$el.querySelector('.close')
            expect(closeButton.textContent.trim()).to.eq('点击关闭')
            setTimeout(() => {
                closeButton.click()
                expect(callback).to.have.been.called
            }, 200)
        })
        it('接受enableHtml', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            })
            vm.$slots.default = ['<strong id="xss">hello</strong>']
            vm.$mount()
            let strong = vm.$el.querySelector('#xss')
            expect(strong).to.exist
        })
        it('接受position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'middle',
                }
            }).$mount()
            expect(vm.$el.classList.contains('position-middle')).to.eq(true)
        })
    })
})