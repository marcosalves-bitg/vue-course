import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios'

import router from './router'

import store from '@/store/store'

Vue.config.productionTip = false

Vue.filter('currency', value => {
    return '$ ' + value.toLocaleString()
})

new Vue({
    router,
    store,
    vuetify,
    axios,
    render: h => h(App)
}).$mount('#app')
