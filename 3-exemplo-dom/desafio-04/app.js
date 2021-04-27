new Vue({
	el: '#desafio',
	data: {
		aplicarEfeito: false,
		statusEncolher: false,
		statusDestaque: false,
		corDeFundo: 'blue',
		corDoTexto: 'white',
		e1: 'estilo1',
		e2: 'estilo2',
		estiloEditado: 'c1',
		buttonSelected: false,
		estiloSelecionavel: 'c1',
		alteraEstilo: 'red',
		progresso: 0,
	},
	watch: {
		aplicarEfeito(n, o) {
			if(n) {
				setInterval(() => {
					this.statusEncolher = this.statusEncolher == true ? false : true,
					this.statusDestaque = this.statusEncolher == true ? false : true,
					console.log(this.statusEncolher)
					console.log(this.statusDestaque)
				}, 500)
			}
		},
		progresso(n,o) {
			if(n >= 100) {
				clearInterval(this.interval)
			}
		}
	},
	methods: {
		iniciarEfeito() {
			this.aplicarEfeito = this.aplicarEfeito ? false : true
		},
		iniciarProgresso() {
			this.interval = setInterval(() => {
				this.progresso += 1
				console.log(this.progresso)
			}, 100)
		},		
	},
	computed: {
		barraDeProgresso() {
			return {
				width: this.progresso + '%'
			}
		}
	},
})
