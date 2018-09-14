import Toast from './toast'
let currentToast
export default {
    install(Vue, option) {
        Vue.prototype.$toast = function (message, toastOption) {
            if(currentToast){currentToast.close()}
            currentToast=createToast({Vue,message,propsData:toastOption})
        }
    }
}

function createToast({Vue,message,propsData}){
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
