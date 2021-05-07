import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vuejs-13dbd-default-rtdb.firebaseio.com/'    -   definição global
// axios.defaults.headers.common['Authorization'] = 'asbs123'                           -   Headers global
// axios.defaults.headers.get['Accepts'] = 'application/json'                           -   Headers para get's

Vue.use({
    install(Vue) {
        // Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL: 'https://curso-vuejs-13dbd-default-rtdb.firebaseio.com/',
            headers: {
                "Authorization": "abc123" 
                // é possíivel ainda fazer headers específicos para métodos. Ex
                // get: {
                // Authorization: 123
                // }
            }
        })

        Vue.prototype.$http.interceptors.request.use(config => {
            return config
        }, error => Promise.reject(error))

        Vue.prototype.$http.interceptors.response.use(res => {
            // const array = []
            // for(let chave in res.data) {
            //     array.push({ id: chave, ...res.data[chave] })
            // }

            // res.data = array
            return res
        }, error => Promise.reject(error))
    }
})