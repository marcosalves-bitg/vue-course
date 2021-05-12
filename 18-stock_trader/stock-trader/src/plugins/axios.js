import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vuejs-13dbd-default-rtdb.firebaseio.com/'
        })
    }
})