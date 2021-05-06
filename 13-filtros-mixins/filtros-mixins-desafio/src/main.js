import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('countLetters', function(valor) {
	// let splitAndCount = valor.split(' ')
	// let formatedString = ''
	
	// if(valor == '') {
	// 	formatedString = ''
	// } else {
	// 	splitAndCount.forEach((item) => {
	// 		// console.log(item)
	// 		formatedString += item + '(' + item.length + ') '
	// 	})
	// }
	
	
	// return formatedString
	// essa era a minha solução besta
	return valor.split(' ').map(p => `${p} (${p.length})`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
