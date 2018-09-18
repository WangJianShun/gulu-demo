import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './buttongroup'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from "./plugin";
import TabsPane from "./tabs-pane";
import TabsHead from "./tabs-head";
import TabsItem from "./tabs-item";
import TabsBody from "./tabs-body";
import Tabs from "./tabs";
import Popover from "./popover";


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-col', Col)
Vue.component('g-row', Row)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-popover', Popover)

Vue.use(plugin)

new Vue({
    el: '#app',
    data: {
        selectedTab: 'sports'
    },
    created() {

    },
    methods: {
        yyy(data) {
            console.log(data)
        },
    },


})

